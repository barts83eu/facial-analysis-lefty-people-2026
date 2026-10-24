# GitHub survey — 2026-10-24 (Claude Opus 5.5, via `gh search`)

## Key finding

**No public GitHub repository reproduces Kosinski's face → political-orientation
pipeline.** Searches for "political orientation face", "political ideology
face", "kosinski facial", "liberal conservative face", "facial first
impressions" and "face trait inference" returned nothing relevant. Kosinski
did not release the images, for privacy reasons. Whether derived data or code
is on OSF is a **TODO verify** (see `docs/04-open-questions.md`).

## Research-grade datasets & tools

| Repo | ★ | License | Relevance |
|---|---|---|---|
| [jcpeterson/omi](https://github.com/jcpeterson/omi) | 30 | see repo | One Million Impressions dataset [Peterson2022]: human *first-impression* ratings of synthetic faces. Best resource for studying **stereotypes** without real people's faces. |
| [aalok-sathe/chicago-facedb-reader](https://github.com/aalok-sathe/chicago-facedb-reader) | 1 | GPL-3.0 | Loader for the Chicago Face Database [Ma2015CFD] (consented, standardised photos with norming ratings; CFD itself is licensed separately). |
| [ybarrima/hsieh-2023-replication](https://github.com/ybarrima/hsieh-2023-replication) | 1 | — | Example of a clean face-perception replication on CFD (age perception). Template for repo structure. |
| [ManasiRaje/Face-Social-Attributes-Scoring-by-SVM](https://github.com/ManasiRaje/Face-Social-Attributes-Scoring-by-SVM) | 0 | — | 2015 coursework: SVM scoring of social attributes of politicians' faces. Historical interest only. |

## General face-analysis libraries (context, not trait inference)

| Repo | ★ | Notes |
|---|---|---|
| [deepinsight/insightface](https://github.com/deepinsight/insightface) | ~30k | Face detection/recognition embeddings (comparable role to VGGFace2 in Kosinski2021). |
| [serengil/deepface](https://github.com/serengil/deepface) | ~23.6k | Wrapper for recognition plus age/gender/emotion/"race" attributes. Note that its demographic attributes have documented bias. |
| [serengil/retinaface](https://github.com/serengil/retinaface) | ~2k | Face detector. |

## Examples of pseudoscience in the wild (for the video)

| Repo | ★ | Notes |
|---|---|---|
| [Lasttrader/app_physiognomy](https://github.com/Lasttrader/app_physiognomy) | 6 | Claims to determine "psychotype" from an uploaded photo. No validation. |
| [timerzz/kanxiang](https://github.com/timerzz/kanxiang) | 24 | Traditional Chinese face/palm reading as an AI "skill". |
| [tanboy4u/Gaydar](https://github.com/tanboy4u/Gaydar) and similar | 40 | Mostly novelty/joke "gaydar" apps. They show how quickly such claims become products. |

## Search log

`gh search repos` queries (sorted by stars): political orientation face ·
political ideology face · physiognomy · first impressions face · facial
attractiveness trustworthiness · deep learning sexual orientation · facial
width-to-height ratio · face social attributes · chicago face database ·
deepface · insightface · AI phrenology · facial-recognition political ·
liberal conservative face · gaydar. Plus `gh search code "political
orientation" --extension py` (no face-related hits).
