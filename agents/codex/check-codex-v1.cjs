// Local browser QA for the versioned remix; uses the already installed Playwright.
const { chromium } = require('/Users/bart/.npm/_npx/aa1f6563a672b75d/node_modules/playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '../../_site');
const output = path.resolve(__dirname, 'codex-v1-shots');
const profile = path.resolve(__dirname, 'runtime/chrome-profile');
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(profile, { recursive: true });
const types = { '.html': 'text/html', '.webp': 'image/webp', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  let filename = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!filename.startsWith(root + path.sep) && filename !== root) { res.writeHead(403).end(); return; }
  if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) filename = path.join(filename, 'index.html');
  if (!fs.existsSync(filename)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(filename)] || 'application/octet-stream');
  fs.createReadStream(filename).pipe(res);
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launchPersistentContext(profile, {
    executablePath: '/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta',
    headless: true,
    args: ['--disable-background-networking', '--disable-component-update', '--no-first-run']
  });
  const results = [];
  try {
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 320, height: 740 }, { width: 768, height: 1024 }]) {
      const page = await browser.newPage();
      await page.setViewportSize(viewport);
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(origin + '/codex-v1/', { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.title(), 'Facial recognition & political inference — Codex v1 | Budots Media');
      assert.equal(await page.locator('#case-grid span').count(), 100);
      assert.equal(await page.locator('#case-grid .gain').count(), 9);
      for (const [key, accuracy] of [['politicians', 55], ['everyday', 66], ['lab', 59]]) {
        await page.locator(`[data-study="${key}"]`).click();
        assert.equal(await page.locator('#accuracy').textContent(), String(accuracy));
        assert.equal(await page.locator('#case-grid .miss').count(), 100 - accuracy);
        assert.equal(await page.locator(`[data-study="${key}"]`).getAttribute('aria-pressed'), 'true');
      }
      await page.locator('a[href="#method"]').click();
      await page.locator('#method summary').click();
      assert.equal(await page.locator('#method details').getAttribute('open'), '');
      await page.locator('#method summary').click();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.equal(overflow, false, `Horizontal overflow at ${viewport.width}px`);
      const brokenImages = await page.locator('img').evaluateAll(imgs => imgs.filter(img => img.complete && !img.naturalWidth).map(img => img.src));
      assert.deepEqual(brokenImages, []);
      const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.filter(link => !document.getElementById(link.hash.slice(1))).map(link => link.hash));
      assert.deepEqual(brokenAnchors, []);
      const study = page.locator('[data-study="lab"]');
      await study.focus();
      await page.keyboard.press('Tab');
      assert.equal(await page.locator('[data-study="politicians"]').evaluate(el => document.activeElement === el), true);
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('#accuracy').textContent(), '55');
      await study.click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(output, `local-${viewport.width}.png`), fullPage: true });
      const fonts = await page.evaluate(() => ({ title: document.fonts.check('16px "Bebas Neue"'), mono: document.fonts.check('16px "JetBrains Mono"') }));
      assert.deepEqual(errors, []);
      results.push({ viewport, overflow, fonts, scriptErrors: errors.length });
      await page.close();
    }
    // Remove scripts from the response to check the static fallback.
    const page = await browser.newPage();
    await page.route('**/codex-v1/', async route => {
      const html = fs.readFileSync(path.join(root, 'codex-v1/index.html'), 'utf8').replace(/<script>[\s\S]*?<\/script>/g, '');
      await route.fulfill({ contentType: 'text/html', body: html });
    });
    await page.goto(origin + '/codex-v1/');
    assert.equal(await page.locator('.study-table tbody tr').count(), 3);
    assert.equal(await page.locator('.study-switch').isVisible(), false);
    await page.close();
    console.log(JSON.stringify({ passed: true, results, noScriptEvidenceTable: true }, null, 2));
    fs.writeFileSync(path.join(output, 'checks.json'), JSON.stringify({ passed: true, results, noScriptEvidenceTable: true }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
