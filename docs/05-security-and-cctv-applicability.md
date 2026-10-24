# 05 — Applicability to security, CCTV and digital twins

Question from the PI (Bart Sakwerda): given unrest in public spaces (e.g.,
France, UK, Poland) involving left-wing, Islamist and right-wing actors,
could face-based political inference be a valid security tool for CCTV or
digital-twin systems?

**Short answer: no. It is scientifically invalid for this purpose, in any
jurisdiction.** Sections 1–3 are the scientific case. Section 4 is legal
context; see also the US table in `00-scope-and-ethics.md`.

## 1. Political orientation is not threat

The studies measure a liberal ↔ conservative **self-report** in ordinary
people. Violent extremism is a tiny, behaviourally defined minority on any
side. Even a perfect left/right predictor would flag millions of
law-abiding people and say nothing about intent to commit violence.

## 2. Base rates make the false-positive problem worse

Example (computed in `experiments/sim_single_photo_limits.py`): a crowd of
100,000 contains 10 people intending violence. A hypothetical face model
with a generous AUC of .72 is used to flag the "extreme" tail, keeping a
50% hit rate. Result: **5 true positives, ~20,500 false positives, about
4,100 innocent people flagged per real threat, precision 0.024%**. That is
with a signal far stronger than any study has shown for "violent intent".
Output: `experiments/sim_single_photo_limits.output.txt`.

## 3. CCTV conditions are worse than any study

All published effects come from frontal, well-lit, high-resolution photos.
CCTV images are low-resolution, oblique, motion-blurred and often partly
occluded. No published study shows the signal survives these conditions.
Expect performance to fall towards chance.

## 4. Legal status

| Jurisdiction | Position |
|---|---|
| EU (France, Poland) | **AI Act Art. 5(1)(g)**: placing on the market or using biometric categorisation systems that infer **political opinions**, religious beliefs or sexual orientation is prohibited (applies since 2 Feb 2025). Real-time remote biometric identification in public spaces for law enforcement is heavily restricted (Art. 5(1)(h)). GDPR Art. 9 also applies. |
| UK | UK GDPR Art. 9 + DPA 2018: political opinions and biometric data are special-category data. ICO guidance on live facial recognition requires strict necessity and proportionality. |

## 5. What does have evidence for public-space security

Approaches based on behaviour and events, not identity:
- crowd density / flow anomaly detection (crush risk);
- abandoned-object detection;
- violence / fall / fight detection from motion;
- perimeter intrusion;
- post-incident forensic search under legal authorisation (warrant,
  specific suspect), with human review.

Digital twins of public spaces can simulate crowd flow, evacuation and
camera coverage without inferring anything about who people are.
