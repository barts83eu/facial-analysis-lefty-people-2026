# Cross-agent work log (append-only)

## 2026-10-24 — Claude Opus 5.5 (claude-opus-5-5), orchestrator
- What: created repo structure; literature review v1; methods & metrics;
  critiques; CCTV/security applicability; ethics scope; GitHub survey;
  bibliography (.md + .bib); simulation E1; video workspace + draft outline.
- Files: everything except `data/raw/*.jpeg` (moved there from root).
- Decisions: declined to classify the political orientation of the person
  in `data/raw/` or to scrape politicians' photos for a classifier test
  (reasons in `docs/00-scope-and-ethics.md`).
- Open items for Kimi / Codex:
  1. Verify every `from-memory` entry in `references/bibliography.md`
     (DOIs, volumes, pages, Leuner authorship, AI Act article text).
  2. Check Kosinski2021 / Kosinski2024 data-availability statements (OSF?).
  3. Search for independent replications of Kosinski2024.
  4. Independently re-derive the numbers in `docs/02-methods-and-metrics.md`.

## 2026-10-24 — Claude Opus 5.5 (later same session)
- What: per PI, legal material reframed as background context; added US
  laws (FTC §5, BIPA, CUBI, WA, CCPA/CPRA, city bans). Scope rule unchanged;
  it rests on scientific validity and consent, not on jurisdiction.
- Files: docs/00-scope-and-ethics.md, docs/05-security-and-cctv-applicability.md
- Open item: verify the US law entries (from memory).

## 2026-10-24 — Claude Opus 5.5 (pages)
- What: published report page (report/index.html → https://claude.ai/artifact/Q2WKWeV8unAKrfWvAXFgfh)
  and parallax terminal site (site/index.html + site/assets/budots-logo.jpg →
  https://claude.ai/artifact/MM7poB5wtH4wYZfvmQ6soD). Type roles from the PI's style register.
- Finding: data/raw image is a Visegrad24 graphic of Mehdi Hasan, not the PI.
- Open items: PI photo for site slot (#photo-slot, 4:5); confirm name spelling;
  verify advertising facts in site section 05 (from memory).

## 2026-10-24 — Claude Opus 5.5 (GitHub)
- What: repo https://github.com/barts83eu/facial-analysis-lefty-people-2026 (public);
  Pages from gh-pages branch → https://barts83eu.github.io/facial-analysis-lefty-people-2026/
- How: scripts/build-pages.sh wraps fragments into _site/; scripts/deploy-pages.sh force-pushes gh-pages.
  (No Actions workflow: gh token lacks `workflow` scope.) data/raw/* is gitignored.

## 2026-10-25 — Claude Opus 5.5 (budotsmedia.com)
- What: published site + report at https://budotsmedia.com/ghostinthemachine/facial-recognition-politics/
  via its own Cloudflare Worker (same pattern as the /uas/ pages); GitHub Pages copy unchanged.
- Files: scripts/build-budotsmedia.sh, wrangler.jsonc, .gitignore (_cf/, .wrangler/), README.md
- Open items: /ghostinthemachine/ index page and nav link live in the main site's Worker (budotsmedia-260818),
  whose source is not on the mounted disks.
