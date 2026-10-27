# Codex v1 screenshot record — 2026-10-27

- Iteration label on every page: Codex / v1. Baseline source remains `site/index.html`.
- Inputs: built `_site/codex-v1/index.html`, including the project's shared English sources and owner credit image.
- Method: installed Chrome Beta, headless Playwright, default device scale, full-page capture; Bebas Neue and JetBrains Mono loaded. Screenshots are ignored by Git but retained locally.
- `local-1440.png`: viewport 1440×1000, desktop two-column hero and table.
- `local-390.png`: viewport 390×844, phone layout with stacked hero and explorer.
- `local-320.png`: viewport 320×740, narrow phone layout.
- `local-768.png`: viewport 768×1024, tablet layout.
- What changed and why: a separate remix replaces the original meme hero with an interactive aggregate study comparison; the design uses the existing terminal palette and type roles. Layout, method explanation and source navigation were reworked.
- Observed result: no horizontal overflow at the four widths. Study controls, count display and keyboard activation passed. Desktop and 390px phone images were visually inspected. The lazy-loaded credit photo may not appear in a full-page capture until scrolled into view; the image asset is present in the build.
- Machine results: `checks.json`. The snapshots are retained without overwriting the original agent's screenshots.
