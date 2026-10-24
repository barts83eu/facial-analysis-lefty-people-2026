# 00 — Scope and ethics

## In scope

- Reviewing and explaining published research on face-based trait inference.
- Re-analysing **published summary statistics** (effect sizes, AUCs) and
  simulating what they imply.
- Surveying public code and datasets.
- Producing an explainer video.

## Out of scope (hard rule for all agents)

- **Classifying any identifiable person's political orientation (or sexual
  orientation, religion, personality, etc.) from their photo.** This includes
  the image in `data/raw/` and any photos of politicians, celebrities or
  private people.
- Scraping or downloading face images of people to build or test a
  face → politics classifier.

## Why

1. **The science doesn't support it at n = 1.** The best-controlled study
   (Kosinski, Khambatta & Wang, 2024) found r ≈ .22, i.e. ~5% of variance.
   Converted to a single-person left/right call, that is roughly **59%
   correct versus 50% for a coin flip** (see `02-methods-and-metrics.md` and
   `experiments/sim_single_photo_limits.py`). On politicians' photos the same
   study reported r = .13. Any single-photo verdict would be mostly noise
   presented as a finding.
2. **A handful of downloaded photos is not a test.** With 10 images per
   group, the 95% confidence interval on an observed 60% is 39–78%, so
   the result could not distinguish a real effect from chance.
3. **Consent.** The person in `data/raw/` has not agreed to have their
   politics guessed. A wrong label (and most would be wrong, see point 1)
   attaches to a real person. This holds in any country and in prototypes
   as well as production.
4. **Kosinski's own framing.** He presents these results as a warning about
   privacy, not as a method to use on people.

The rule rests on points 1–4, not on any one jurisdiction's law. Law is
listed below for context only, because the video should cover it.

## Regulatory context (background, not the basis of the rule)

| Jurisdiction | Relevant law |
|---|---|
| EU | **AI Act** (Reg. 2024/1689) Art. 5(1)(g): bans biometric categorisation inferring political opinions, religion, sexual orientation (from 2 Feb 2025); Art. 5(1)(h): limits real-time remote biometric ID in public spaces. Art. 2: carve-out for scientific R&D before market placement. |
| US — federal | No general biometric privacy law. **FTC Act §5** enforcement on unfair facial-recognition use (e.g., the 2023 Rite Aid order banning its use of facial recognition for 5 years). |
| US — Illinois | **BIPA**: written consent required before collecting faceprints; private right of action (large class-action exposure, e.g., the Facebook and Clearview settlements). |
| US — Texas, Washington | **CUBI** (TX) and **RCW 19.375** (WA): notice/consent for biometric identifiers. |
| US — California | **CCPA/CPRA**: biometric data and political-opinion inferences count as "sensitive personal information". |
| US — cities | Government facial-recognition bans or limits: San Francisco, Boston, others. **Portland, OR** also bans private use in places of public accommodation. |
| UK | UK GDPR Art. 9 / DPA 2018 special-category data; ICO guidance on live facial recognition. |

US entries are from memory, so verify before quoting on screen.

## How a legitimate empirical replication would look (not planned here)

Large n (thousands), a dataset collected with consent for this purpose,
pre-registration, ethics-board (IRB) approval, aggregate reporting only,
and controls for demographics, expression, head pose and grooming. See
`experiments/README.md`.
