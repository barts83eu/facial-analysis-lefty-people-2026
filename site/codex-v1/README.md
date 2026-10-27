# Codex iteration v1 — 2026-10-27

- Label: codex-v1. New iteration requested by Bart Sakwerda, including upload to the existing website.
- Design system: Amber Phosphor Terminal, read from `../index.html`; palette retained from that page, with Bebas Neue titles, JetBrains Mono body and controls, Silkscreen 8px labels from the owner's style register.
- Inputs: `site/index.html`, `sources/sources.en.html`, `experiments/sim_single_photo_limits.py`, project scope and bibliography. No face images analysed; the PI image is a project credit only.
- What changed and why: replace the political-compass meme with a 100-cell aggregate illustration; add study switches, a comparison table, variance ring, method disclosure and section navigation. Keep the original and report available to compare versions and read the full review.
- Method: static HTML fragment plus inline CSS and JavaScript, following the existing build system. Both deployment builders wrap the page and include the shared English sources. Published AUC and correlation values remain distinct from rounded simulated accuracies (59%, 55%, 66%). The controls switch aggregate illustrations only.
- Settings: dark palette; responsive breakpoints at 1050, 760 and 370 pixels; reduced-motion support; keyboard focus; native buttons with pressed states; live text announcing changes; static evidence table available without JavaScript.
- Iteration URL: `https://budotsmedia.com/ghostinthemachine/facial-recognition-politics/codex-v1/`.
- Comparison baseline: original page remains at the parent URL; its only edit is a link to this iteration.
- Observed result: the new layout places a study comparison beside the title and keeps the original review accessible. Desktop and phone screenshots were visually inspected. The text, controls, table and charts fit widths of 320, 390, 768 and 1440 pixels without horizontal overflow. Keyboard study selection, count updates and method disclosure passed; the static table remains available with scripts removed.
- Publication: deployed to the existing Cloudflare Worker on 27 October 2026; the iteration URL returned HTTP 200. Cloudflare version `706bd234-bda3-4ae0-b31f-58b61b253391`. Full results: `agents/codex/2026-10-27_codex-v1.md`.
- Open issue: source verification is inherited from the earlier research compilation; this iteration is not an independent research audit. The Chinese link opens the original Chinese edition.
