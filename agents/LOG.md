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

## 2026-10-25 — Claude Opus 5.5 (sources, Chinese, photo)
- What: literature search (subagent) → 62 new sources, 9 in Chinese, DOIs of existing entries checked;
  bibliography regrouped into 8 topics; grouped source list on site and report; new sections on
  personality / sexual orientation / VLMs, Cambridge Analytica and who builds trait classifiers;
  Chinese translation of site and report (subagent); owner photo from the Road to Unfreedom artifact
  (img/owner-face-recognition.webp) in the site photo slot; site name "Bart Sakwerda".
- Files: references/bibliography.md, references/references.bib, sources/*, site/index.html, site/zh/,
  report/index.html, report/zh/, docs/00, docs/01 (§7), docs/04 (disputes 1–6), scripts/build-*.sh, README.md,
  agents/claude-opus-5-5/research-2026-10-25-new-sources.md
- Decision: Cambridge Analytica / myPersonality data is linked through the official record only (docs/00).
- Open items: US law entries (from memory); blocked sources (GLAAD/HRC, NYT 2019, Wylie transcript,
  Helsinki thesis); the "with/without make-up" image the PI pasted has not reached the disk.
- Addendum (same day): Chinese pages site/zh/, report/zh/, sources/sources.zh.html translated by a subagent
  (朝鲜族 for the Korean ethnic group in the Dalian Minzu paper; "Expression of Concern" as 关注声明).
  Fixed two EN wording mismatches it found (Hausladen 2025, Rasmussen 2023) in EN and ZH. All four pages live on
  budotsmedia.com and GitHub Pages.

## 2026-10-25 — Claude Opus 5.5 (meme in hero)
- What: internet political-compass meme (PI-supplied, author unknown) as the hero visual of site EN and ZH,
  captioned as opinion, not measurement; ASCII logo + logo image moved to the footer.
- Files: site/assets/political-compass-meme.webp, site/index.html, site/zh/index.html,
  agents/claude-opus-5-5/shots/2026-10-25_meme-hero_{desktop,phone}.png
- Open items: deploy (npx wrangler deploy) not yet run, needs PI approval; link from budotsmedia.com/bart/
  (served by the main Worker budotsmedia-260818, source not on the mounted disks; peer session bart-26 may own it).

## 2026-10-25 — Claude Opus 5.5 (section index)
- What: https://budotsmedia.com/ghostinthemachine/ section index, own Worker `ghostinthemachine-index` with exact routes
  for /ghostinthemachine, /ghostinthemachine/ and /ghostinthemachine/media/*; layout and stylesheet copied from /uas/.
  Card images are screenshots of the four live pages; share image og-ghostinthemachine.jpg (1200 × 630).
- Files: section-index/ (wrangler.jsonc, site/ghostinthemachine/index.html, media/*.jpg), README.md, .gitignore
- Open items: a top-bar link needs the main Worker budotsmedia-260818 (source on the D2 SSD, not mounted).

## 2026-10-27 — ChatGPT Codex (codex)
- What: created and published a separate Codex v1 site iteration, requested by Bart. Reused the original terminal palette, source list and summary statistics; added aggregate study controls, comparison table, variance chart, method disclosure and navigation. No individual trait inference.
- Files: site/codex-v1/, site/index.html (iteration link), scripts/build-pages.sh, scripts/build-budotsmedia.sh, README.md (URL and credits), .gitignore, agents/codex/2026-10-27_codex-v1.md, agents/codex/check-codex-v1.cjs, agents/codex/codex-v1-shots/.
- Validation: desktop/phone visual inspection; browser checks at 320/390/768/1440px; no horizontal overflow or script errors; keyboard and study controls passed; both builds and Cloudflare dry run passed. Simulation outputs reproduced. Published URL returned HTTP 200.
- Published: https://budotsmedia.com/ghostinthemachine/facial-recognition-politics/codex-v1/; Cloudflare version 706bd234-bda3-4ae0-b31f-58b61b253391. Original and report retained. Existing pending meme/Chinese source assets were included by the full-site deployment. GitHub Pages build updated locally, not deployed.
- Open items: inherited research verification tasks remain; this design iteration did not audit citations. D2 Documents volume unavailable; work performed in this repository following the owner's follow-up instruction.

## 2026-10-27 — Claude Opus 5.5 (cross-links with Road to Unfreedom)
- What: political-compass meme in the site hero (EN, ZH) now links to Road to Unfreedom, with a screenshot card of it
  under the meme; Road to Unfreedom card on budotsmedia.com/ghostinthemachine/. Reverse link: the face-recognition
  panel of the Road to Unfreedom artifact (caption and owner photo) links to this research file (artifact version 21).
- URL: one setting, `site/links.env` (R2U_URL), filled in at build time by scripts/build-*.sh and section-index/build.sh.
  For now the public claude.ai link; replace with the Cloudflare address or the new domain when the PI gives it.
- Files: site/links.env, site/index.html, site/zh/index.html, site/assets/road-to-unfreedom.jpg, scripts/build-*.sh,
  section-index/ (build.sh, wrangler.jsonc assets → _out, index.html, media/road-to-unfreedom.jpg), .gitignore
- Also committed in this commit: the meme-hero work by the other Claude session (25 Oct) and Codex's site/codex-v1/
  (27 Oct), both already deployed by Codex.

## 2026-10-27 — Claude Opus 5.5 (design system)
- What: the site's style saved as a claude.ai Design System, "DESIGN SYS: AMBER PHOSPHOR TERMINAL"
  (short name `amber-terminal`), https://claude.ai/artifact/V3fQjK6i6VGuRa9WaWNVUZ (private until shared).
  Tokens copied from site/index.html; components Prompt, ConsoleBand, StatGrid, AsciiBars, Rows, PhotoSlot,
  SourceList; cover. Registered in ~/llm-context (skills/style/SKILL.md, AGENTS.md), pushed.
- Files: design-system/amber-terminal/project/*
