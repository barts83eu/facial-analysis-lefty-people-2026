# 01 — Literature review

Compiled by Claude Opus 5.5 for Bart Sakwerda, 2026-10-24.
Reference keys refer to `references/bibliography.md`.

## 1. Michal Kosinski — profile

Associate Professor of Organizational Behavior, Stanford GSB. Computational
psychologist. Main lines of work: (a) predicting psychological traits from
digital footprints, (b) predicting traits from facial images, (c) more
recently, psychology of large language models. He consistently frames (b) as
a **privacy warning**: "if this is possible, governments and companies can do
it — we need regulation."

## 2. Faces → political orientation

### [Kosinski2021] Scientific Reports, n ≈ 1.09 million
- Naturalistic photos (dating site + Facebook), US/UK/Canada.
- Face descriptors from a standard face-recognition network (VGGFace2),
  then logistic regression.
- **AUC .72** (reported as "72% accuracy" = pairwise discrimination).
  Humans: .55. 100-item personality questionnaire: .66.
- Within age/gender/ethnicity-matched pairs: ~.69.
- Generalised across countries and platforms.

### [Kosinski2024] American Psychologist, n = 591
- Lab photos: neutral expression, hair pulled back, no makeup/jewellery,
  standardised clothing, head pose controlled.
- Algorithm r = .22, human raters r = .21; algorithm + demographics r = .31.
- Morphology finding: liberals tended to have smaller lower faces.
- Out-of-sample check on **3,401 politicians' photos: r = .13**.
- Authors compare the effect to job interviews predicting job performance.

### Earlier, non-Kosinski
- [RuleAmbady2010] Human judges classified US candidates as Democrat vs
  Republican above chance from faces (thin-slice judgement).

## 3. Faces → sexual orientation

### [WangKosinski2018] JPSP
- Dating-site photos; AUC .81 men / .74 women (one image), .91/.83 (five).
- Interpreted via prenatal hormone theory.
- Heavily criticised: [AgueraYArcas2018], GLAAD/HRC statements.
- [Leuner2019] replication: models still predicted above chance even with
  blurred images, supporting the view that much of the signal is
  non-morphological (grooming, presentation, image properties).

## 4. Faces → personality

- [Kosinski2017fWHR] Psychological Science: facial width-to-height ratio did
  **not** predict self-reported behavioural tendencies in a large sample —
  a null result against a popular physiognomic claim.
- [Peterson2022] "One Million Impressions": deep models reproduce *what
  people think* faces signal (trustworthy, dominant, …) — i.e., they model
  **stereotypes/first impressions**, which is not the same as accuracy.
- [Todorov2017] *Face Value*: book-length argument that first impressions
  are consistent across observers but mostly inaccurate.

## 5. Digital footprints (non-face) — for context

- [Kosinski2013] Facebook Likes predict personality, politics, sexuality.
- [Youyou2015] Likes-based personality judgements beat friends' judgements.

## 6. Synthesis

| Claim | Evidence strength |
|---|---|
| Face images carry *some* statistical signal about politics | Moderate — replicated across samples, small effect in controlled photos |
| Signal is mostly facial *structure* | Weak/contested — self-presentation explains a large share in naturalistic photos |
| Signal enables reliable *individual* classification | **Not supported** — see `02-methods-and-metrics.md` |
| Signal is a population-level privacy risk | Supported — this is Kosinski's main argument |
