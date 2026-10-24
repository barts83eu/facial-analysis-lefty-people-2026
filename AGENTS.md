# Instructions for AI agents working in this repo

Several agents (Claude Code, Kimi, ChatGPT Codex, …) contribute to this
project. Read this file and `README.md` before doing anything.

## Ground rules

1. **Scope is fixed by [`docs/00-scope-and-ethics.md`](docs/00-scope-and-ethics.md).**
   In particular: never infer political orientation, sexual orientation,
   religion, ethnicity, health or personality of an identifiable individual
   from their image — including the photo in `data/raw/`. Aggregate,
   published-statistics and simulation work only.
2. **Your own folder.** Write working notes in `agents/<your-model-id>/`.
   Do not edit another agent's folder.
3. **Shared files** (`docs/`, `references/`, `experiments/`, `video/`): edit
   freely but log every change in `agents/LOG.md` (date, agent, files, why).
4. **Citations.** Every factual claim in `docs/` needs a reference in
   `references/bibliography.md`. Mark each reference's status:
   `verified-online` (you opened the source this session), `from-memory`
   (needs checking), or `disputed`. Never invent DOIs, URLs or numbers —
   write `TODO verify` instead.
5. **Credits.** Project owner / PI: Bart Sakwerda. Keep the credits table in
   `README.md` current; add yourself when you contribute.
6. **Disagreement.** If you think another agent got something wrong, add a
   note under "Open disputes" in `docs/04-open-questions.md`, don't silently
   rewrite it.

## Log format (`agents/LOG.md`)

```
## YYYY-MM-DD — <agent / model id>
- What: …
- Files: …
- Open items: …
```
