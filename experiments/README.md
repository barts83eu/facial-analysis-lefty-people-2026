# Experiments register

| ID | Script | Status | What it shows |
|---|---|---|---|
| E1 | `sim_single_photo_limits.py` → `sim_single_photo_limits.output.txt` | done 2026-10-24 | Published effect sizes → single-person accuracy (55–66%); 20-photo tests are noise; CCTV base-rate: ~4,100 false flags per real threat |

Run: `python3 experiments/sim_single_photo_limits.py` (stdlib only).

## Requirements for any new experiment

Read `docs/00-scope-and-ethics.md` first. In particular:

- No inference of sensitive traits for any identifiable individual,
  including the file in `data/raw/`.
- No scraping of people's faces (politicians included) to build or test a
  face → politics classifier.
- Allowed: simulations, re-analysis of published statistics, and work on
  synthetic faces or human-impression datasets (e.g., OMI) that studies
  **perception/stereotypes**, not real people's traits.

## Candidate next experiments

- **E2 – Stereotype demo with synthetic faces:** use OMI ratings to show how
  consistently people *judge* traits that are not real. Good visual for the
  video.
- **E3 – Image-degradation simulation:** model how CCTV-like resolution and
  angle lower an already-weak AUC, using published face-recognition
  degradation curves (no trait inference).
