# Facial Analysis & Political Orientation — Research Workspace (2026)

A critical review of research claiming that facial images reveal political
orientation and other personal traits, centred on the work of
**Michal Kosinski** (Stanford Graduate School of Business). The end product is
an explainer video (see [`video/`](video/)).

## Live pages

- budotsmedia.com: https://budotsmedia.com/ghostinthemachine/facial-recognition-politics/ (report: `…/report/`)
  — Cloudflare Worker `ghostinthemachine-facial-recognition-politics` (`wrangler.jsonc`);
  update with `scripts/build-budotsmedia.sh && npx wrangler deploy`
- Section index: https://budotsmedia.com/ghostinthemachine/ — Worker `ghostinthemachine-index`
  (`section-index/`; edit `section-index/site/ghostinthemachine/index.html`, then `cd section-index && npx wrangler deploy`)
- Site: https://barts83eu.github.io/facial-analysis-lefty-people-2026/
- Report: https://barts83eu.github.io/facial-analysis-lefty-people-2026/report/
- Update: edit `site/` or `report/`, then `scripts/build-pages.sh && scripts/deploy-pages.sh`

## Credits

| Role | Who |
|---|---|
| Principal investigator, project owner | **Bart Sakwerda** |
| Workflow orchestration, literature & GitHub survey, docs | **Claude Opus 5.5** (Anthropic), via Claude Code |
| Contributing agents (planned) | Kimi, ChatGPT Codex — see [`agents/`](agents/) |

## Research question

> What does the published evidence actually show about predicting political
> orientation (and personality, sexual orientation) from faces — how strong are
> the effects, what drives them, and what can and cannot be concluded about a
> single individual from a single photo?

## Layout

```
README.md            ← you are here
AGENTS.md            ← shared rules for every AI agent (Claude, Kimi, Codex, …)
CLAUDE.md            ← Claude Code entry point (imports AGENTS.md)
docs/
  00-scope-and-ethics.md      what this project does and does not do
  01-literature-review.md     Kosinski's studies + related work
  02-methods-and-metrics.md   AUC vs accuracy, r vs variance, single-photo limits
  03-critiques-and-confounds.md
  04-open-questions.md
sources/
  sources.en.html, sources.zh.html   grouped source list included into both pages at build time
references/
  bibliography.md             annotated, grouped by topic, with verification status
  references.bib              BibTeX
  github-survey.md            related code/datasets on GitHub
agents/
  LOG.md                      append-only cross-agent work log
  claude-opus-5-5/  kimi/  codex/   per-agent notes
experiments/
  README.md                   experiment register + protocol requirements
  sim_single_photo_limits.py  simulation: published effect sizes → per-person accuracy
data/
  README.md                   data policy
  raw/                        received files (not analysed for traits — see docs/00)
video/
  README.md  script/  storyboard/  assets/  renders/
```

## Status (2026-10-25)

- [x] Literature review v1, GitHub survey v1, methods notes, ethics scope
- [x] Simulation of single-photo prediction limits
- [x] Published at budotsmedia.com/ghostinthemachine/facial-recognition-politics/
- [x] 62 new sources (personality, sexual orientation, VLMs, Cambridge Analytica,
      Chinese law, research and companies; 9 in Chinese); DOIs checked; grouped sources on both pages
- [x] Chinese versions of site and report (`/zh/`)
- [ ] Cross-check of citations by a second agent (Kimi / Codex); US law entries still from memory
- [ ] Video script → storyboard → render
