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

## 7. Additions, 2026-10-25

Search notes with numbers and status for each source:
`agents/claude-opus-5-5/research-2026-10-25-new-sources.md`. Keys refer to
`references/bibliography.md`.

### 7.1 Political orientation outside the US
- [Rasmussen2023] 3,323 Danish candidates: 61% accuracy. Predictions tracked
  smiling and, for women, attractiveness; heat maps show the model also used
  areas outside the face.
- [Lindholm2025] 7,080 Danish politicians: model scores for attractiveness and
  trustworthiness correlate with ballot position and votes (success, not ideology).
- No published replication of [Kosinski2024] on a new lab sample was found.

### 7.2 Personality
- [Kachur2020] 12,447 volunteers, mean r = .24 with self-reported Big Five.
  Three of five authors worked for the data provider.
- [Guenzel2026NBER] reuses the Kachur model on LinkedIn photos of about 96,000
  MBA graduates; "Photo Big 5" predicts pay and seniority. Authors warn against
  screening use.
- [Hu2017SciRep] 3D faces, 834 Han Chinese adults: face shape explains
  0.67–3.95% of personality variance.
- [Xu2021IEEEAccess] (NWPU Xi'an) and [CaiLiu2022] (CAS Institute of Psychology):
  Chinese samples; binned-class accuracy and a small video sample (N = 82),
  so not comparable with the correlations above.
- Human raters: [Jaeger2024EJP] impressions not accurate and over-confident;
  [Foo2022PSPB] meta-analysis, trustworthiness r = .14 at face level.
  [LiuWenZuo2019] (ZH review) calls accuracy "moderate" and context-dependent.
- Benchmark: [HindsJoinson2024] computer prediction from all digital footprints,
  pooled ρ = .30. Face-only results sit below this.

### 7.3 Sexual orientation
- [Leuner2019] (author John Leuner) replicated on 20,910 new photos: 68% / 77%;
  a model on blurred images still reached 63% / 72%.
- [Gelman2018Gaydar] the classifier measures dating-site self-presentation.
- No peer-reviewed replication on a new population (2020–2026) and no test of
  vision-language models for sexual orientation was found.

### 7.4 Vision-language models
- [Jeon2026PA] GPT-4o, GPT-4o-mini and LLaVA label identical ads with women as
  more liberal (b = .41; survey benchmark .15). Race effect depends on model;
  Gemini refused.
- [Hausladen2025FAccT] CLIP social judgments shift more with expression than with
  age, and with lighting about as much as with age.

### 7.5 Cambridge Analytica
- CA asked Stillwell for myPersonality data; he refused. Kogan's GSR app then
  collected data on up to 87 million users ([ICO2018Report]).
- [ICO2020Letter] CA's models were "well recognised processes using commonly
  available technology"; real-world accuracy on new individuals "was likely much
  lower". GSR data could not have been used in the Brexit referendum.
- Effect of psychological targeting: [Matz2017PNAS] up to +40% clicks; challenged
  by [Eckles2018PNAS]; [Tappin2023PNAS] finds extra targeting attributes add
  little. LLM-written tailoring: [Simchon2024], [Matz2024SciRep].

### 7.6 China
- Law: [PIPL2021] Art. 28–29 (biometrics are sensitive data, separate consent);
  [SPC2021FaceRec] (face analysis in public places in breach of law infringes
  personality rights); [CAC2025FaceRecMeasures] in force 1 Jun 2025, Art. 2(2)
  exempts R&D and algorithm training. None names political views or ethnicity.
- Research: [WuZhang2016] criminality (SJTU), reply in v3 and [ThePaper2017WuXiaolin];
  [Wang2018WIREs] ethnicity recognition (Dalian Minzu + Curtin), under an
  Expression of Concern; personality work at CAS, Fudan and NWPU (7.2).
- Deployment reports: [Treasury2021SenseTime], [IPVM2020HuaweiMegvii],
  [IPVM2020Uniview], [Context2021Patents], [Mozur2019NYT] (partly verified).
