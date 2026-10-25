# New sources: literature search, 2026-10-25

Agent: Claude Opus 5.5 (claude-opus-5-5), subagent run for the orchestrator.
Scope: literature only (docs/00-scope-and-ethics.md). No face analysis was run,
and no face images or harvested profiles were downloaded.

## How "verified" is used here

- `verified-online`: I opened the page this session (publisher, PMC, arXiv,
  regulator, government or news page), or I pulled the record from the DOI
  registry (Crossref API, `api.crossref.org/works/<doi>`) or from Europe PMC.
  Where only the Crossref/Europe PMC record was read, the entry says
  "(metadata + abstract)" or "(metadata only)".
- `partly verified`: the page exists and some details were confirmed, but the
  full text was blocked (HTTP 403, paywall or bot wall). The entry says what
  was and was not checked.
- `unverified`: found only in search snippets or secondary reports. Do not
  quote it on screen until someone opens it.

Numbers below are the ones the source states. Nothing was filled in from memory.
A `TODO verify` mark means a detail still needs checking.

---

## 0. Corrections to existing `references/bibliography.md` entries

All DOIs below were checked against Crossref on 2026-10-25. Every DOI in the
file resolves to the paper it is listed for.

| Key | Status now | Correction / added detail |
|---|---|---|
| Kosinski2021 | DOI verified | *Scientific Reports* 11, article **100** (published 11 Jan 2021). doi:10.1038/s41598-020-79310-1 |
| Kosinski2024 | DOI verified | *American Psychologist* **79**(7), **942–955** (Oct 2024). doi:10.1037/amp0001295 |
| WangKosinski2018 | DOI verified | JPSP 114(2), 246–257 (Feb 2018), doi:10.1037/pspa0000098 (all as listed) |
| Kosinski2017fWHR | DOI verified | *Psychological Science* 28(11), 1675–1682, doi:10.1177/0956797617716929 (as listed) |
| Kosinski2013 | DOI verified | PNAS 110(15), 5802–5805, doi:10.1073/pnas.1218772110 (as listed) |
| Youyou2015 | DOI verified | PNAS 112(4), 1036–1040, doi:10.1073/pnas.1418680112 (as listed) |
| Leuner2019 | author verified | arXiv:1902.10739, author **John Leuner**, submitted 27 Feb 2019. Abstract: 20,910 dating-site photos; DNN 68% (men) / 77% (women); facial-morphology model 62% / 72%; blurred-image model 63% / 72%. |
| Peterson2022 | DOI verified | PNAS **119**(17), **e2115228119**, doi:10.1073/pnas.2115228119 (21 Apr 2022) |
| RuleAmbady2010 | DOI verified | *PLoS ONE* 5(1), e8733, doi:10.1371/journal.pone.0008733 |
| Ma2015CFD | DOI verified | *Behav. Res. Methods* 47(4), 1122–1135, doi:10.3758/s13428-014-0532-5 |
| WuZhang2016 | verified | arXiv:1611.04135. v1 (13 Nov 2016) "Automated Inference on Criminality using Face Images": 1,856 face images of real persons, "nearly half" convicted criminals. **v3 (26 May 2017) replaced the paper with the authors' reply** "Responses to Critiques on Machine Learning of Criminality Perceptions (Addendum of arXiv:1611.04135)". The reported "89%" accuracy and the 730 / 1,126 split come from ThePaper2017 (D5), not from the arXiv abstract. |
| EUAIAct | partly verified | Art. 5(1)(g) wording checked on artificialintelligenceact.eu (secondary host, not EUR-Lex; EUR-Lex returned an empty page). Categories listed: race, political opinions, trade-union membership, religious or philosophical beliefs, sex life, sexual orientation. The prohibition "does not cover any labelling or filtering of lawfully acquired biometric datasets ... in the area of law enforcement". Art. 2(6) and Art. 113 dates: `TODO verify` on EUR-Lex. |

New finding about Kachur2020 (A1, below): the article number is **8487**, and
the 2026 NBER paper (A8) reuses its algorithm.

---

## A. Personality (Big Five) from face images

**A1. Kachur2020**: Kachur, A., Osin, E., Davydov, D., Shutilov, K., & Novokshonov, A. (2020). Assessing the Big Five personality traits using real-life static facial images. *Scientific Reports*, 10, 8487. doi:10.1038/s41598-020-65358-6. Opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC7244587/. EN, group A.
- Summary: Volunteers recruited online, N = 12,447 with 31,367 photos, rated themselves on the Big Five. A neural-network cascade predicted the self-reports with r between 0.137 (openness, women) and 0.360 (conscientiousness, men); mean r = 0.243. Three of the five authors worked for the company that supplied the data (BestFitMe Ltd, London; Kachur is listed at AIPictor, Moscow). Participants were paid with a free personality report.
- Status: verified-online.

**A2. Xu2021IEEEAccess**: Xu, J., Tian, W., Lv, G., Liu, S., & Fan, Y. (2021). Prediction of the Big Five personality traits using static facial images of college students with different academic backgrounds. *IEEE Access*, 9, 76822–76832. doi:10.1109/ACCESS.2021.3076989. Opened: https://pure.nwpu.edu.cn/en/publications/prediction-of-the-big-five-personality-traits-using-static-facial/. EN, Chinese-origin (Northwestern Polytechnical University, Xi'an), groups A and G.
- Summary: 13,347 face/questionnaire pairs from Chinese students (10,667 train / 1,335 test / 1,335 validation). The authors report classification accuracy "above 70%", and above 90% for neuroticism and extraversion. These are binned-class accuracies, so they cannot be compared directly with Kachur's correlations.
- Status: verified-online (abstract page).

**A3. Hu2017SciRep**: Hu, S., Xiong, J., Fu, P., Qiao, L., Tan, J., Jin, L., & Tang, K. (2017). Signatures of personality on dense 3D facial images. *Scientific Reports*, 7, 73. doi:10.1038/s41598-017-00071-5. Opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC5428336/. EN, Chinese-origin (CAS-MPG Partner Institute for Computational Biology, Shanghai; Fudan University), groups A and G.
- Summary: 3D neutral-face scans of 834 Han Chinese volunteers (405 men, 429 women) were compared with BFI-44 scores. Some associations reached significance, for example conscientiousness in men (ρ = 0.309) and extraversion in women (ρ = 0.209). The authors report that face shape explained only about **0.67–3.95% of the variance** in personality.
- Status: verified-online.

**A4. CaiLiu2022**: Cai, L., & Liu, X. (2022). Identifying Big Five personality traits based on facial behavior analysis. *Frontiers in Public Health*, 10, 1001828. doi:10.3389/fpubh.2022.1001828. Opened: frontiersin.org full text. EN, Chinese-origin (Institute of Psychology, Chinese Academy of Sciences, 中国科学院心理研究所), groups A and G.
- Summary: Facial-landmark movement from 30-second self-introduction videos of N = 82 young Chinese adults predicted BFI-44 scores with best-model r between 0.39 and 0.48 per trait, with no independent test sample. The authors list the small, homogeneous sample as a limitation. The method uses video of facial movement, not static faces. A related CAS master's thesis by 蔡磊 (2022) exists in the CAS repository; the record was not opened because a captcha blocked it.
- Status: verified-online.

**A5. Jaeger2024EJP**: Jaeger, B., Sleegers, W. W. A., Stern, J., Penke, L., & Jones, A. L. (2024). Testing perceivers' accuracy and accuracy awareness when forming personality impressions from faces. *European Journal of Personality*, 38(6), 907–927. doi:10.1177/08902070231225728. Read via Crossref (metadata + abstract); the SAGE page returned 403. EN, groups A and E.
- Summary: Two incentivised studies, one preregistered, with 223 + 423 raters judging 140 and 280 target faces. Bayesian analysis indicated that "face-based personality impressions are not accurate", that perceivers do not know they are inaccurate, and that most people overestimate their accuracy. This is the strongest recent null result for human raters.
- Status: verified-online (metadata + abstract).

**A6. Satchell2019**: Satchell, L. P., Davis, J. P., Julle-Danière, E., Tupper, N., & Marshman, P. (2019). Recognising faces but not traits: Accurate personality judgment from faces is unrelated to superior face memory. *Journal of Research in Personality*, 79, 49–58. doi:10.1016/j.jrp.2019.02.002. EN, group A.
- Summary (from search snippets of the university abstract pages): N = 792. Face-memory ability and accuracy in judging personality from faces did not correlate (all r < .06). The "kernel of truth" framing comes from this group.
- Status: verified-online (metadata only). Effect sizes `TODO verify` in full text.

**A7. HindsJoinson2024**: Hinds, J., & Joinson, A. (2024). Digital data and personality: A systematic review and meta-analysis of human perception and computer prediction. *Psychological Bulletin*, 150(6), 727–766. doi:10.1037/bul0000430. Read via Europe PMC (abstract). EN, groups A and E.
- Summary: Meta-analysis of all digital footprints, not faces only. Human perception across 30 samples (N = 24,124) gave ρ = 0.38–0.57 by trait. Computer prediction gave pooled ρ = 0.30 across 42 studies (534 effect sizes). Useful as a benchmark: face-only prediction (Kachur mean r = .24) falls below this.
- Status: verified-online (metadata + abstract).

**A8. Guenzel2026NBER**: Guenzel, M., Kogan, S., Niessner, M., & Shue, K. (2026). AI personality extraction from faces: Labor market implications. NBER Working Paper 34808. doi:10.3386/w34808. Opened: https://www.nber.org/papers/w34808 (dated Feb 2026; earlier versions circulated from Nov 2024). EN, groups A and G.
- Summary: Big Five scores were extracted from LinkedIn photos of about 96,000 MBA graduates. This "Photo Big 5" predicts school rank, pay, seniority and job transitions, with predictive power comparable to race, attractiveness and education. The authors flag ethical concerns about screening use. Per The Register (A9), the model is the Kachur 2020 algorithm, and co-author Niessner said companies should not use the approach.
- Status: verified-online.

**A9. Register2026MBA**: The Register (10 Feb 2026). [AI face analysis and MBA pay]. https://theregister.com/2026/02/10/ai_face_analysis_mba_pay. EN, press/secondary, group A.
- Summary: Reports that A8 reuses the Kachur 2020 model, that the model predicts self-reported personality, and that Andrews et al. 2024 (E2) list Kachur 2020 among "ML-laundered junk science" papers. The exact headline text was not captured.
- Status: verified-online.

---

## B. Sexual orientation from face images

**B1. Gelman2018Gaydar**: Gelman, A., Mattson, G., & Simpson, D. (2018). Gaydar and the fallacy of decontextualized measurement. *Sociological Science*, 5, 270–280. doi:10.15195/v5.a12. EN, groups B and E.
- Summary: Statisticians and a sociologist critique Wang & Kosinski 2018. They argue that a classifier built on dating-site photos measures self-presentation in that setting, and that its results cannot be carried over to "detecting" orientation in the general population. The summary is from the title, the search snippets and my knowledge of the paper; I did not open the full text. `TODO verify` the wording before quoting.
- Status: verified-online (metadata only).

**B2. GLAADHRC2017**: GLAAD & Human Rights Campaign (Sept 2017). Joint statement calling the Stanford study "dangerous and flawed research". Probable URL: https://www.glaad.org/blog/glaad-and-hrc-call-stanford-university-responsible-media-debunk-dangerous-flawed-report (returned 403). EN, group B.
- Summary (from press coverage: ScienceAlert, GCN, Silicon Republic): The groups objected that the study included no non-white subjects, was not independently verified on age or orientation, and was framed as "junk science"; HRC's Ashland Johnson asked Stanford to distance itself. Kosinski and Wang replied that the groups dismissed the paper on "the opinion of a lawyer and a marketer".
- Status: **unverified** (primary page blocked; quotes from secondary reports).

**B3. Statmodeling2024Gayface**: Gelman, A. (host). (6 Dec 2024). Gayface data replicability problems [guest post by an anonymous psychologist]. *Statistical Modeling, Causal Inference, and Social Science* blog. https://statmodeling.stat.columbia.edu/2024/12/06/gayface-data-replicability-problems/. EN, group B.
- Summary (from snippets): The post claims Wang & Kosinski analysed only about 50% of the scraped images and that the age-balancing "trimming" step leaves room for researcher degrees of freedom. The writer reports reshuffling the OSF data 5 million times; the result was not visible in the snippets.
- Status: **unverified** (403). Anonymous author; treat as a lead, not a finding.

**B4. Kr36_2018**: 柯鸣 (智能相对论) (29 Jul 2018). 性取向被识别后，AI伦理的边界又在哪里？ [Once sexual orientation can be recognised, where are the limits of AI ethics?]. 36氪. https://www.36kr.com/p/1722704281601. **ZH**, groups B and D.
- Summary: Chinese tech-media commentary on the Stanford sexual-orientation study (about 35,000 images; 81% men / 74% women from one image). It also covers a Sun Yat-sen University relationship-recognition model, and argues the risks are over-reliance on facial features, algorithmic bias and privacy. Kosinski is not named.
- Status: verified-online.

**B5. Ifanr2017a**: 积木 (14 Sep 2017). 看脸的世界？通过面部识别技术，AI 可以了解许多个人信息 [A world that judges by faces? Through facial recognition, AI can learn a lot of personal information]. 爱范儿 (ifanr). https://www.ifanr.com/909100. **ZH**, groups B, C and D.
- Summary: Reports Kosinski's 2017 interview claims that faces could reveal sexual orientation, political views and IQ. It quotes Thomas Keenan (University of Calgary) on the legal grey zone of inferring new information from faces.
- Status: verified-online.

**B6. Ifanr2017b**: 方嘉文 (23 Sep 2017). 你以为人工智能看出了"直"或"弯"？它只是看出了你的偏见 [You think AI can tell "straight" from "gay"? It only sees your bias]. 爱范儿. https://www.ifanr.com/914194. **ZH**, groups B and D.
- Summary: A Chinese summary of the Western critiques. It notes that the pairwise test gives a 50% baseline, that dating-site photos are self-selected (citing Greggor Mattson), and that VGG-Face picks up pose and lighting (citing Tom White). It reports 81% (men) / 71% (women) for one image and 91% / 83% for five. **Discrepancy:** other reports give 74% for women from one image; check against the JPSP paper before quoting.
- Status: verified-online.

**Gap B:** I found **no peer-reviewed 2020–2026 replication** of Wang & Kosinski on a new population, and **no CLIP or VLM study that tests sexual-orientation inference** specifically. The closest work is C4/C5 (VLMs and CLIP use demographic cues) and Wolfe et al. on CLIP sexual-objectification bias (arXiv:2212.11261, seen in snippets only, unverified).

---

## C. Political orientation updates 2023–2026

**C1. Kosinski2024 (existing key; now DOI-verified)**: see section 0. Abstract figures from the search snippets match the bibliography: N = 591; human raters r = .21; algorithm r = .22; algorithm r = .31 when given age, gender and ethnicity; politicians (N = 3,401, US/UK/Canada) r ≈ .13.

**C2. Rasmussen2023**: Rasmussen, S. H. R., Ludeke, S. G., & Klemmensen, R. (2023). Using deep learning to predict ideology from facial photographs: expressions, beauty, and extra-facial information. *Scientific Reports*, 13, 5257. doi:10.1038/s41598-023-31796-1. Read via Crossref + Europe PMC (abstract); nature.com redirected to a login. EN, groups C and G (University of Southern Denmark).
- Summary: A **non-US sample**: candidate photos of 3,323 Danish politicians (2017 municipal elections). The CNN reached **61% accuracy** for each gender. Predicted ideology tracked smiling versus neutral expression, and attractiveness in women. Heat maps showed the model also used areas off the face. PsyPost reports that non-European-origin candidates were excluded; `TODO verify` in the paper.
- Status: verified-online (metadata + abstract).

**C3. Lindholm2024PSRM**: Lindholm, A., Hjorth, F., & Schuessler, J. (2025). Facial finetuning: using pretrained image classification models to predict politicians' success. *Political Science Research and Methods*, 13(4), 1031–1041 (online 26 Sep 2024). doi:10.1017/psrm.2024.38. Read via Crossref (abstract). EN, group C (Denmark; Aarhus).
- Summary: Fine-tuned CNNs scored attractiveness, trustworthiness and dominance for 7,080 Danish politicians. Attractiveness and trustworthiness scores correlate with ballot position and votes. This study predicts electoral success, not ideology; it is useful context on what face models pick up.
- Status: verified-online (metadata + abstract).

**C4. Jeon2026PA**: Jeon, S., Lee, M. H. J., Montgomery, J. M., & Lai, C. K. (2026). From faces to politics: Vision-language models (sometimes) link visual demographic characteristics to ideological labels. *Political Analysis*, 34(4), 613–621. doi:10.1017/pan.2026.10038. Opened: Cambridge Core reader. EN, groups C and E (Washington University in St. Louis; Rutgers).
- Summary: GPT-4o-mini, GPT-4o and LLaVA rated identical neutral campaign ads that showed one of 40 synthetic faces, with 8,000 responses per model. All three models labelled women as more liberal than men (b = 0.41 against a survey benchmark of 0.15). The race effect was strong in GPT-4o-mini (b = 0.44), weaker in GPT-4o (0.18) and not significant in LLaVA. Gemini refused to rate faces. **This is the key evidence that vision-language models "read" politics from faces through demographic stereotypes.**
- Status: verified-online.

**C5. Hausladen2025FAccT**: Hausladen, C. I., Knott, M., Camerer, C. F., & Perona, P. (2025). Social perception of faces in a vision-language model. In *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency (FAccT '25)*, 639–659. doi:10.1145/3715275.3732041; arXiv:2408.14435. Opened: arXiv abstract. EN, groups C and E (Caltech).
- Summary: Synthetic faces were varied one attribute at a time (age, gender, race, expression, lighting, pose). CLIP's social judgments shift systematically with age, gender and race, most strongly for Black women. Expression moves the judgments more than age, and lighting about as much as age. Implication: studies that do not control for expression and lighting can draw wrong conclusions.
- Status: verified-online.

**C6. LeeMontgomeryLai2024**: Lee, M. H. J., Montgomery, J. M., & Lai, C. K. (2024). More distinctively Black and feminine faces lead to increased stereotyping in vision-language models. OSF preprint. doi:10.31219/osf.io/wvxy2. EN, groups C and E.
- Status: verified-online (metadata only). Findings not read.

**C7. HelsinkiThesis2022**: A University of Helsinki master's thesis (2022) that attempted a CNN conceptual replication of Kosinski 2021. Record: https://helda.helsinki.fi/ (handle 6ac8ce88-…); blocked by a bot wall.
- Status: **unverified**. Title, author and result unknown.

**Gap C:** I found no published replication of Kosinski 2024 on a new lab sample, and no CLIP study that classifies real people's politics. The non-US evidence is Danish (C2, C3).

---

## D. Chinese-language and Chinese-origin sources

### D-law: Chinese regulation (all opened on official sites)

**D1. PIPL2021**: 《中华人民共和国个人信息保护法》 [Personal Information Protection Law of the PRC]. Adopted 20 Aug 2021 (13th NPC Standing Committee, 30th session); in force 1 Nov 2021. Opened: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm. **ZH**, group D.
- Key text: **Art. 28** defines sensitive personal information as including "生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹" (biometrics, religious belief, specific identity, medical health, financial accounts, whereabouts) and data of children under 14. Processing is allowed only with a specific purpose, sufficient necessity and strict protection. **Art. 29**: separate consent (单独同意) is required. **Art. 24(1)**: automated decision-making must be transparent and fair. Unlike the EU AI Act, there is no named ban on inferring political views or sexual orientation; the protection runs through sensitive-data rules.
- Status: verified-online. Presidential order number `TODO verify` on npc.gov.cn.

**D2. SPC2021FaceRec**: 最高人民法院关于审理使用人脸识别技术处理个人信息相关民事案件适用法律若干问题的规定 [Supreme People's Court Provisions on the application of law in civil cases involving the use of facial recognition technology to process personal information], 法释〔2021〕15号. Adopted 8 Jun 2021 (SPC Judicial Committee, 1841st meeting); in force 1 Aug 2021. Opened: https://www.court.gov.cn/xinshidai/xiangqing/315851.html. **ZH**, group D.
- Key text: Art. 1 classes face information as "biometric information" under Civil Code Art. 1034. Art. 2 lists acts the courts must treat as infringing personality rights, including use of face verification, identification **or analysis (分析)** in hotels, malls, banks, stations, airports and similar places in breach of law, and processing without separate consent.
- Status: verified-online.

**D3. CAC2025FaceRecMeasures**: 国家互联网信息办公室、公安部《人脸识别技术应用安全管理办法》 [Measures for the security management of facial recognition technology applications], 国家互联网信息办公室 中华人民共和国公安部令 第19号. Signed 13 Mar 2025, published 21 Mar 2025, **in force 1 Jun 2025**. Opened: https://www.cac.gov.cn/2025-03/21/c_1744174262156096.htm (full text) and the CAC Q&A page c_1744259796594932. **ZH**, group D.
- Key text: **Art. 2(2): "为从事人脸识别技术研发、算法训练活动应用人脸识别技术处理人脸信息的，不适用本办法"** (processing face information for R&D or algorithm training is *outside* these Measures). Art. 10: face recognition may not be the only verification method when an alternative exists. Art. 15: processors holding face data on **100,000 or more people** must file with the provincial CAC within 30 working days. The text does not mention ethnicity, religion or political views. **This confirms the brief's date (in force June 2025).** The R&D exemption is worth stating in the video, because face-to-trait research would fall under it and be governed only by PIPL.
- Status: verified-online.

### D-academic: Chinese-language scholarship

**D4. LiuWenZuo2019**: 刘晨, 温芳芳, 佐斌 (2019). 以貌取人可行吗？——基于面孔的特质推理及准确性 [Is judging people by appearance feasible? Face-based trait inference and its accuracy; journal's English title: "The concept, theory and accuracy of face-traits inference"]. 《心理科学》 *Journal of Psychological Science*, 42(1), 150–156. Opened: https://jps.ecnu.edu.cn/CN/Y2019/V42/I1/150. **ZH**, groups A and E (Central China Normal University, 华中师范大学).
- Summary: A Chinese review concluding that face-trait inference has "适度准确性" (moderate accuracy). Accuracy depends on the target's attractiveness, the perceiver's traits and culture, and the context. The review covers physiological, evolutionary and cognitive explanations. DOI not shown on the page.
- Status: verified-online.

**D5. ThePaper2017WuXiaolin**: 虞涵棋, 杨漾 (16 May 2017). 谷歌研究员质疑"看脸识罪犯"，交大教授撰文：我被扣帽子了 [Google researchers question "spotting criminals from faces"; SJTU professor writes: I've been unfairly labelled]. 澎湃新闻 (The Paper), 科学湃 column. https://m.thepaper.cn/newsDetail_forward_1685972. **ZH**, groups D and E.
- Summary: Reports Wu Xiaolin and Zhang Xi's (Shanghai Jiao Tong University) criminality classifier: 1,856 ID-style photos of Chinese men (730 convicted, 1,126 web-scraped non-criminals), 89% claimed accuracy. It also covers the Agüera y Arcas / Mitchell / Todorov critique "Physiognomy's New Clothes" and Wu's reply. Wu is quoted: "我们论文里从未宣称要把我们的研究方法用作司法工具" (our paper never proposed the method as a judicial tool) and that the authors have no intention or academic qualification to discuss social bias. Note the sampling confound the report itself shows: ID photos for the convicted group, web photos for the comparison group.
- Status: verified-online.

**D6. WuZhang2017Responses**: Wu, X., & Zhang, X. (2017). Responses to critiques on machine learning of criminality perceptions (Addendum of arXiv:1611.04135). arXiv:1611.04135v3, 26 May 2017. Opened: https://arxiv.org/abs/1611.04135. EN, Chinese-origin, groups D and E.
- Summary: The authors' formal reply, posted as v3 of the original arXiv record. The abstract gives no new numbers.
- Status: verified-online.

**D7. Secrss2018CA**: DeepTech深科技 (repost on 安全内参, 4 Apr 2018). "剑桥分析"究竟如何通过"点赞"来影响投票倾向？ [How exactly did "Cambridge Analytica" use "likes" to influence voting?]. https://www.secrss.com/articles/1828. **ZH**, groups D and F.
- Summary: Chinese explainer. It covers Stillwell & Kosinski's 58,000-volunteer Likes study, Kogan's GSR app (about 250,000 quiz-takers; about 30 million profiles passed to SCL), and Nix's claims. It states that evidence the method swung elections is lacking.
- Status: verified-online.

(B4, B5 and B6 above are also Chinese-language media sources.)

### D-reporting: English-language reporting on Chinese uses (neutral record)

**D8. Mozur2019NYT**: Mozur, P. (14 Apr 2019). One month, 500,000 face scans: How China is using A.I. to profile a minority. *The New York Times*. https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html. EN, groups D and G.
- Summary (from the Notre Dame Ethics summary and wire reprints): police in Sanmenxia ran a system that checked whether residents were Uyghur 500,000 times in one month. Procurement documents showed about two dozen police departments in 16 provinces seeking such tools from 2018. Experts called it the first known case of a government using AI for racial profiling. China denies abuses in Xinjiang.
- Status: **partly verified**. The ND page confirms title, author and URL; nytimes.com could not be fetched. Company names in the article are not confirmed; `TODO verify` (often cited: Yitu, Megvii, SenseTime, CloudWalk).

**D9. IPVM2020Uniview**: Rollet, C. (16 Nov 2020). Uniview racist Uyghur recognition revealed. IPVM. https://ipvm.com/reports/uniview-uyghur. EN, groups D and G.
- Summary: Uniview SDK 2.3.0.0 (file dated 15 Sep 2020) had an ethnicity code listing only Uyghurs, and the SDK was deleted after IPVM's inquiry. Uniview cited "Tech for Social Good" and an ethics panel without explaining the code. The report also refers to Hikvision's 2019 Uyghur-detecting camera and Dahua's 2020 Uyghur analytics.
- Status: verified-online.

**D10. Context2021Patents**: Asher-Schapiro, A. (Thomson Reuters Foundation / Context; updated 14 Jan 2021). Chinese tech patents tools that can detect, track Uighurs. https://www.context.news/surveillance/chinese-tech-patents-tools-that-can-detect-track-uighurs. EN, groups D and G.
- Summary: Based on IPVM's patent research: a Huawei + Chinese Academy of Sciences application describing Uyghur pedestrian identification, a Megvii patent mentioning Uyghur presence, and an Alibaba race-detection patent. Huawei said ethnicity "was never part of the R&D project" and that it would amend the application. Megvii said its language was "open to misunderstanding" and that it "will not develop or sell racial or ethnic labelling solutions". The Chinese embassy said Xinjiang cameras do not target any ethnicity.
- Status: verified-online.

**D11. IPVM2021EthRec / Wang2018WIREs**:
- (a) Rollet, C. (13 Sep 2021). PRC minority ethnicity recognition research targeted Uyghurs, breached ethical standards. IPVM. https://ipvm.com/reports/eth-rec-ethics. Opened.
- (b) The paper itself: Wang, C., Zhang, Q., Liu, W., Liu, Y., & Miao, L. (2019). Facial feature discovery for ethnicity recognition. *WIREs Data Mining and Knowledge Discovery*, 9(1), e1278 (online 2 Aug 2018). doi:10.1002/widm.1278 (Crossref).
- EN, Chinese-origin (Dalian Minzu University 大连民族大学, with Curtin University), groups D, E and G.
- Summary: 300 students aged 18–22 (100 each Uyghur, Tibetan and Korean) were photographed for a "Multiethnic Group Database"; one facial region gave 78% claimed accuracy. Curtin University found co-author Wanquan Liu breached the Australian research code (no evidence of informed consent or ethics approval) and asked for retraction in Aug 2021. IEEE Access retracted a separate paper that used the same database. **Crossref status on 2026-10-25:** Expression of Concern (10.1002/widm.1386, Sept 2020), errata (2019, 2020) and a "Correction" (10.1002/widm.1446, Jan 2022); **no retraction notice is registered.** `TODO verify` what the 2022 correction says.
- Status: verified-online.

---

## E. Group-level critiques and methodology (for the sources page)

**E1. StarkHutson2022**: Stark, L., & Hutson, J. (2022). Physiognomic artificial intelligence. *Fordham Intellectual Property, Media & Entertainment Law Journal*, 32(4), 922. Opened: https://ir.lawnet.fordham.edu/iplj/vol32/iss4/2 (the issue page lists "Luke Stark and Jevan Hutson"). SSRN preprint doi:10.2139/ssrn.3927300 (Crossref, 2021). EN, group E.
- Summary: Defines "physiognomic AI" as software that infers character or protected-class status from body or face, traces it back to historical physiognomy, and recommends legal bans at local, state and federal level plus FTC action. Start page 922 is from search snippets; `TODO verify` on the PDF.
- Status: verified-online.

**E2. Andrews2024Patterns**: Andrews, M., Smart, A., & Birhane, A. (2024). The reanimation of pseudoscience in machine learning and its ethical repercussions. *Patterns*, 5(9), 101027. doi:10.1016/j.patter.2024.101027. Opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC11573791/. EN, group E.
- Summary: Argues that ML papers inferring hidden traits from appearance share epistemic flaws (theory-free framing, confounds) that also cause social harm. The paper discusses Kosinski, Khambatta & Wang 2024, Wang & Kosinski 2018, Wu & Zhang 2016 and Kachur 2020. Per The Register it lists about two dozen papers as "ML-laundered junk science"; that phrase was not checked in the PMC text.
- Status: verified-online.

**E3. Foo2022PSPB**: Foo, Y. Z., Sutherland, C. A. M., Burton, N. S., Nakagawa, S., & Rhodes, G. (2022). Accuracy in facial trustworthiness impressions: Kernel of truth or modern physiognomy? A meta-analysis. *Personality and Social Psychology Bulletin*, 48(11), 1580–1596. doi:10.1177/01461672211048110. Opened: Aberdeen research portal + Crossref abstract. EN, groups A and E.
- Summary: **Meta-analysis** of trustworthiness accuracy from faces: face-level r = .14, perceiver-level r = .27. The authors conclude "this modest accuracy is unlikely to be of practical utility". It also reports a mostly Western literature and little exchange between research groups.
- Status: verified-online.

**E4. Todorov2015AnnRev**: Todorov, A., Olivola, C. Y., Dotsch, R., & Mende-Siedlecki, P. (2015). Social attributions from faces: Determinants, consequences, accuracy, and functional significance. *Annual Review of Psychology*, 66, 519–545. doi:10.1146/annurev-psych-113011-143831. EN, group E.
- Summary: The standard review of face-based first impressions and their limited accuracy (the summary of the content is from my knowledge; not opened).
- Status: verified-online (metadata only).

(Also relevant to E: B1 Gelman2018, A5 Jaeger2024, C4 Jeon2026, C5 Hausladen2025, D11.)

---

## F. Cambridge Analytica, myPersonality and psychographic targeting

### F-primary: regulator, parliament and court material

**F1. ICO2018Report**: Information Commissioner's Office (6 Nov 2018). *Investigation into the use of data analytics in political campaigns: A report to Parliament.* https://ico.org.uk/media2/migrated/2260271/investigation-into-the-use-of-data-analytics-in-political-campaigns-final-20181105.pdf (opened; text extracted locally). EN, group F.
- Key facts in the text: Kogan/GSR's app "thisisyourdigitallife" harvested data of "up to 87 million global Facebook users, including one million in the UK". The investigation covered 172 organisations and 700 TB of data. Facebook received a £500,000 penalty (the maximum under the old law). **On myPersonality:** CA first approached David Stillwell for access to the myPersonality dataset; "Dr Stillwell refused CA's offer, citing data protection concerns". In May 2014 Kogan offered to do the work through his own app (first called the "CPW Lab App"). The ICO also reports a breach involving the myPersonality app, with its investigation into anonymisation still open in 2018. The report names the Cambridge Psychometrics Centre as the origin of the targeting techniques and questions the boundaries between academic research and commercial spin-offs. (The copy hosted at the link includes a 21 Dec 2018 clarifications annex.)
- Status: verified-online.

**F2. ICO2020Letter**: Denham, E. (Information Commissioner) (2 Oct 2020). Letter to Julian Knight MP, Chair, DCMS Committee, ref. ICO/O/ED/L/RTL/0181: "ICO investigation into use of personal information and political influence". https://cy.ico.org.uk/media2/migrated/2618383/20201002_ico-o-ed-l-rtl-0181_to-julian-knight-mp.pdf (opened; text extracted). EN, group F.
- Key facts in the text: SCL/CA bought commercial data ("over 130 billion data points"). Its models were "in the main" built from "off the shelf" tools, and staff were uneasy about leadership's public claims. **Para 26–27:** the methods were "well recognised processes using commonly available technology" (e.g. scikit), and while models predicted the training individuals with some success, "the real-world accuracy ... on new individuals ... was likely much lower". The ICO found internal scepticism about accuracy. GSR data covered about 30 million US individuals; the app was used by about 300,000 people worldwide (Facebook's estimate of affected users: up to 87 million, UK at least 1 million). Evidence reviewed: 700 TB and over 300,000 documents. GSR data "could not have been used in the Brexit Referendum". No further evidence of Russian involvement was found. The ICO audited 14 organisations, including the Cambridge Psychometrics Centre. Seized data and models were returned to the administrators or destroyed.
- Status: verified-online. **This is the strongest official source that the psychographic models were over-claimed.**

**F3. FTC2019CA**: U.S. Federal Trade Commission (18 Dec 2019). FTC grants final approval to settlement with former Cambridge Analytica CEO, app developer over allegations they deceived Facebook users. https://www.ftc.gov/news-events/news/press-releases/2019/12/ftc-grants-final-approval-settlement-former-cambridge-analytica-ceo-app-developer-over-allegations (opened). FTC matters 182-3106 (Kogan, Nix) and 182-3107 (Cambridge Analytica LLC; Commission Opinion, docket D-9389). EN, group F.
- Summary: Kogan and Nix are barred from deceptive statements about data collection and must delete GSRApp data and derived work. The Commission Opinion found CA deceived users and misrepresented its Privacy Shield status, and ordered deletion of GSRApp data. "Tens of millions" of users are mentioned. Related public PDFs seen in search but not opened: administrative complaint `182_3107_cambridge_analytica_administrative_complaint_7-24-19.pdf` and the opinion `d09389_comm_final_opinionpublic.pdf` on ftc.gov. The exact opinion date (late Nov or early Dec 2019) is `TODO verify`.
- Status: verified-online (press release).

**F4. FTC2019Facebook**: FTC (24 Jul 2019). FTC imposes $5 billion penalty and sweeping new privacy restrictions on Facebook. https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook (opened). EN, group F.
- Summary: $5 bn penalty and a 20-year order; the Commission vote was 3–2. Includes allegations that a 2018 data policy misled users about **facial recognition** ("Tag Suggestions" on by default), plus new oversight of third-party apps. Filed in the U.S. District Court for D.C.; the court docket number (often given as 19-cv-2184) is `TODO verify`.
- Status: verified-online.

**F5. DCMS2019**: House of Commons Digital, Culture, Media and Sport Committee (18 Feb 2019). *Disinformation and 'fake news': Final Report.* Eighth Report of Session 2017–19, HC 1791. PDF: https://dera.ioe.ac.uk/id/eprint/33370/1/1791.pdf (opened; parliament.uk returned 403). EN, group F.
- Summary: Includes a section "Facebook data owned by the Cambridge University Psychometrics Centre and shared with Russian APIs": the ICO found IP addresses resolving to Russia on a server associated with Kogan and an earlier Psychometrics Centre app, and referred the matter to the National Crime Agency. Also covers SCL's work in foreign elections and the Six4Three emails.
- Status: verified-online.

**F6. Wylie2018Evidence**: DCMS Committee (27 Mar 2018). Oral evidence: Fake News, HC 363, Q1271–1461. Witnesses: Christopher Wylie, Paul-Olivier Dehaye. https://committees.parliament.uk/oralevidence/7803/html/ (PDF: …/7803/pdf). EN, group F.
- Status: **partly verified**. The record and its opening section appear in search results (Wylie joined SCL in June 2013); the transcript itself returned 403 and a bot page. Quotes `TODO verify`.

### F-myPersonality

**F7. PsychometricsCentre-myPersonality**: University of Cambridge Psychometrics Centre. myPersonality status page. https://www.psychometrics.cam.ac.uk/node/888 (opened). EN, group F.
- Text: "The myPersonality project is no longer active and data is no longer being shared." The app ran until 2012 and collected data from over 6 million volunteers. Anonymised samples went to registered academic collaborators, producing 45+ peer-reviewed papers. It points to mypersonality.org; that site failed with a self-signed TLS certificate and was not read.
- Status: verified-online.

**F8. NewScientist2018**: Waterfield, P., & Revell, T. (2018). Data breach exposed. *New Scientist*, 238(3178), 4–5. doi:10.1016/s0262-4079(18)30858-3 (Crossref). Same team: Revell, T. (2018). How Facebook gave away my data. *New Scientist* 238(3174), 8. EN, group F.
- Summary (from secondary reports: Sophos, SC Media, BankInfoSecurity; snippets only): myPersonality data on about 3 million users could be reached for about four years with credentials posted on GitHub. About 280 collaborators from about 150 institutions had registered. The Psychometrics Centre disputed parts of the report. Facebook suspended the app on 7 Apr 2018.
- Status: verified-online (metadata only). Numbers unverified.

### F-science: did psychographic targeting work?

**F9. Matz2017PNAS**: Matz, S. C., Kosinski, M., Nave, G., & Stillwell, D. J. (2017). Psychological targeting as an effective approach to digital mass persuasion. *PNAS*, 114(48), 12714–12719. doi:10.1073/pnas.1710966114. Europe PMC abstract. EN, group F.
- Summary: Three Facebook ad field experiments reached over 3.5 million people. Ads matched to extraversion or openness gave "up to 40% more clicks and up to 50% more purchases" than mismatched ads. Personality was inferred from Likes, not faces.
- Status: verified-online (abstract).

**F10. Eckles2018PNAS**: Eckles, D., Gordon, B. R., & Johnson, G. A. (2018). Field studies of psychologically targeted ads face threats to internal validity. *PNAS*, 115(23), E5254 (letter). doi:10.1073/pnas.1805363115. Reply: Matz et al. (2018), doi:10.1073/pnas.1806854115. EN, groups E and F.
- Summary: The letter argues that Facebook's ad-delivery optimisation means the ad arms were not randomised comparisons, so the effects cannot be credited to personality matching. The summary is from the title and my knowledge; not opened. `TODO verify` the page number.
- Status: verified-online (metadata only).

**F11. Sharp2018PNAS**: Sharp, B., Danenberg, N., & Bellman, S. (2018). Psychological targeting [letter]. *PNAS*, 115(34). doi:10.1073/pnas.1810436115. Reply: Matz et al., "Psychological targeting produces robust effects", doi:10.1073/pnas.1811106115. EN, groups E and F.
- Status: verified-online (metadata only).

**F12. Tappin2023PNAS**: Tappin, B. M., Wittenberg, C., Hewitt, L. B., Berinsky, A. J., & Rand, D. G. (2023). Quantifying the potential persuasive returns to political microtargeting. *PNAS*, 120(25), e2216261120. doi:10.1073/pnas.2216261120. Crossref abstract. EN, group F.
- Summary: Survey experiments on US issue ads. Microtargeting (machine learning plus message pre-testing) beat other strategies by about 70% or more in one study, but targeting on more than one covariate added nothing, and the gain showed up mainly on one of two issues. The persuasive advantage "may not require ... vast amounts of personal data". This is the best academic estimate of what targeting is worth.
- Status: verified-online (abstract).

**F13. Simchon2024PNASNexus**: Simchon, A., Edwards, M., & Lewandowsky, S. (2024). The persuasive effects of political microtargeting in the age of generative artificial intelligence. *PNAS Nexus*, 3(2), pgae035. doi:10.1093/pnasnexus/pgae035. EN, group F.
- Summary: Four studies. Political ads tailored to personality (inferred from text) were more persuasive than generic ads, and the authors show such ads can be generated and checked automatically with an LLM, which they call a "manipulation machine".
- Status: verified-online (abstract).

**F14. Matz2024SciRep**: Matz, S. C., Teeny, J. D., Vaid, S. S., Peters, H., Harari, G. M., & Cerf, M. (2024). The potential of generative AI for personalized persuasion at scale. *Scientific Reports*, 14, 4692. doi:10.1038/s41598-024-53755-0. EN, group F.
- Summary: Seven sub-studies (N = 1,788). ChatGPT-written messages matched to personality, ideology or moral foundations were more persuasive than generic ones.
- Status: verified-online (abstract).

**F15. Gibney2018Nature**: Gibney, E. (29 Mar 2018). The scant science behind Cambridge Analytica's controversial marketing techniques. *Nature* (news). doi:10.1038/d41586-018-03880-4. EN, group F.
- Status: verified-online (metadata only; nature.com redirected to a login). Content `TODO verify`.

**F16. Bakir2020**: Bakir, V. (2020). Psychological operations in digital political campaigns: Assessing Cambridge Analytica's psychographic profiling and targeting. *Frontiers in Communication*, 5, 67. doi:10.3389/fcomm.2020.00067. EN, group F.
- Summary (from snippets): Uses inquiry, legal and press documents to argue that CA's methods were deceptive and coercive "psyops", whatever their measured effect.
- Status: verified-online (metadata only).

**F17. NBC2018**: Allen, J., & Abbruzzese, J. (20 Mar 2018). Cambridge Analytica's effectiveness called into question despite alleged Facebook data harvesting. NBC News. https://www.nbcnews.com/politics/politics-news/cambridge-analytica-s-effectiveness-called-question-despite-alleged-facebook-data-n858256 (opened). EN, group F.
- Summary: Practitioners were sceptical. Antonio García Martínez: "There's no reason to think it's particularly powerful." Eric Wilson: "only as good as the creative." Jessica Baldwin-Philippi (Fordham) said voting history and geography are the most useful targeting data. Wylie argued the opposite case.
- Status: verified-online.

**F18. Hersh2015**: Hersh, E. D. (2015). *Hacking the Electorate: How Campaigns Perceive Voters.* Cambridge University Press. doi:10.1017/cbo9781316212783. EN, group F.
- Summary: Pre-CA book showing that campaigns mostly target on public-record data (voter files) rather than inferred psychology. The summary of the content is from my knowledge; not opened. A widely shared Hersh quote calling CA's psychographic claims "BS" was seen only on a secondary site and is **unverified**.
- Status: verified-online (metadata only).

**F19. TechCrunch2020Hindsight**: Lomas, N. (6 Jan 2020). Facebook data misuse and voter manipulation back in the frame with latest Cambridge Analytica leaks. TechCrunch. https://techcrunch.com/2020/01/06/facebook-data-misuse-and-voter-manipulation-back-in-the-frame-with-latest-cambridge-analytica-leaks/ (opened). EN, group F.
- Summary: Brittany Kaiser released internal CA/SCL documents as links from the Twitter account @HindsightFiles: Brazil, Kenya, Malaysia, Iran and the Bolton super PAC so far, with more than 100,000 documents covering at least 65 countries promised. **No public searchable index was found.**
- Status: verified-online.

**F20. GrasseggerKrogerus2016**: Grassegger, H., & Krogerus, M. (Dec 2016/Jan 2017). "Ich habe nur gezeigt, dass es die Bombe gibt" (*Das Magazin*); English: "The Data That Turned the World Upside Down" (*Motherboard/Vice*). EN/DE, group F.
- Status: **unverified** (author's page returned 403). This is the article that first tied Kosinski's work to CA in public. Kosinski and Stillwell did not give CA the data (consistent with F1).

### F-data: where CA and myPersonality data is and isn't publicly available

| Material | Public? | Where |
|---|---|---|
| ICO report 2018, ICO letter 2020 (with annexes on SCL's data processing) | Yes, official | ico.org.uk links in F1, F2 |
| FTC press releases, complaint, Commission Opinion (CA, Kogan, Nix, Facebook) | Yes, official | ftc.gov (F3, F4) |
| DCMS final report HC 1791; oral and written evidence (Wylie, Kaiser, Nix, Kogan) | Yes, official | committees.parliament.uk (blocks bots; DERA mirror for the report) |
| DCMS-published Six4Three/Facebook internal emails (Dec 2018) | Reported as published by the Committee | `TODO verify` URL on parliament.uk |
| CA internal documents ("Hindsight Files") | Partly, via links from @HindsightFiles (2020) | No verified index. May contain third-party personal data: cite, do not mirror |
| **GSR / thisisyourdigitallife harvested profiles** | **No.** FTC orders require deletion; the ICO destroyed seized data and models | Must not be sought or redistributed |
| **myPersonality dataset** | **No.** Sharing stopped in 2018 (F7); the 2018 exposure was a security breach, not a release | Do not use leaked copies |

---

## G. Other people doing this research now

### Companies (China), as reported by credible sources

| Who | What is claimed or reported | Source (status) |
|---|---|---|
| **SenseTime** (Shenzhen subsidiary) | US Treasury: its facial recognition "can determine a target's ethnicity" with a focus on "identifying ethnic Uyghurs"; patent applications to identify Uyghurs "wearing beards, sunglasses, and masks". SenseTime called the accusations unfounded (press). | US Treasury press release jy0526, 10 Dec 2021, https://home.treasury.gov/news/press-releases/jy0526 (verified-online) |
| **Megvii, Yitu, CloudWalk** (+ Dawning, Leon, Netposa, DJI, Meiya Pico) | Named as Chinese military-industrial complex companies. Yitu "has been involved in developing facial recognition technology that looks exclusively for Uyghurs". | Treasury jy0538, 16 Dec 2021 (verified-online). Megvii, Yitu and SenseTime were also added to the Commerce Entity List in Oct 2019 (per D9; Federal Register `TODO verify`) |
| **Huawei + Megvii** | A 2018 interoperability test report listed a "Uyghur alert" that Megvii's software "passed". Huawei: "simply a test ... not seen real-world application". Megvii: solutions "not designed or customized to target or label ethnic groups". | IPVM, 8 Dec 2020, https://ipvm.com/reports/huawei-megvii-uygur (verified-online); reported by the Washington Post the same day (not opened) |
| **Hikvision** | Marketed a Uyghur-detecting camera in 2019. Said in July 2022 it had stopped adding ethnic-minority detection; a Dec 2022 Hainan (Chengmai) contract obtained by IPVM listed Uyghur detection as "standard configuration". No reply to comment requests. | The China Project, 17 Aug 2023 (verified-online); D9 |
| **Dahua** | "Uyghur analytics" / real-time Uyghur warnings (Nov 2020). | Mentioned in D9 and D10 (verified-online, second-hand); the IPVM Dahua report itself was not opened |
| **Uniview** | SDK ethnicity code listing only Uyghurs (2020). | D9 (verified-online) |
| **Alibaba** | Patent describing race detection (no Uyghur mention). | D10 (verified-online) |
| **iFlytek** | Voice-biometrics supplier to police in Xinjiang and Anhui; says it can build systems for Tibetan and Uyghur; no reply to HRW. Voice, not face, but the same "trait from biometric" logic. | Human Rights Watch, 22 Oct 2017, https://www.hrw.org/news/2017/10/22/china-voice-biometric-collection-threatens-privacy (verified-online) |

### Academic groups (China)

| Group | Work | Source |
|---|---|---|
| Institute of Psychology, CAS (刘晓倩 Liu Xiaoqian) | Big Five from facial-movement video | A4 |
| CAS-MPG Partner Institute for Computational Biology, Shanghai + Fudan (唐鲲 Tang Kun, 金力 Jin Li) | Big Five and 3D face shape, Han Chinese sample | A3 |
| Northwestern Polytechnical University, Xi'an | Big Five from static student photos (n = 13,347 pairs) | A2 |
| Shanghai Jiao Tong University (武筱林 Wu Xiaolin) | Criminality from ID photos (2016) and the 2017 reply | D5, D6 |
| Dalian Minzu University (王存睿 Wang Cunrui) + Curtin (Wanquan Liu, now Sun Yat-sen University) | Uyghur / Tibetan / Korean ethnicity recognition; Expression of Concern | D11 |
| Central China Normal University (佐斌 Zuo Bin) | Psychology review of face-trait inference accuracy | D4 |

### Elsewhere

| Who | Country | Claim | Source |
|---|---|---|---|
| **Faception** (Shai Gilboa, CEO; Itzik Wilf, CTO; David Gavriel; founded 2014) | Israel | 15 "classifiers" (terrorist, paedophile, poker player, …) at a claimed 80% accuracy; said it could have flagged 9 of 11 Paris attackers | Globes, 25 May 2016, https://en.globes.co.il/en/article-israeli-co-faception-claims-it-can-spot-terrorists-1001127220 (verified-online). The Washington Post 2016 interview was not opened. |
| **BestFitMe / AIPictor + HSE Moscow** (Kachur, Osin) | Russia / UK | Big Five from selfies, r ≈ .24 | A1; reused by A8 |
| **Kosinski lab**, Stanford GSB | US | Politics, sexual orientation, personality | existing refs, C1 |
| **Guenzel, Kogan, Niessner, Shue** (Wharton, Reichman, Indiana, Yale) | US / Israel | "Photo Big 5" and pay | A8 |
| **Rasmussen, Ludeke, Klemmensen** (University of Southern Denmark) | Denmark | Ideology from candidate photos, 61% | C2 |
| **Lindholm, Hjorth, Schuessler** (Copenhagen/Aarhus) | Denmark | Face scores and electoral success | C3 |
| **Jaeger, Sleegers** (Tilburg), Penke (Göttingen), Jones (Swansea) | NL / DE / UK | Null accuracy of human face impressions | A5 |
| **Lee, Montgomery, Lai, Jeon** (WashU, Rutgers) | US | VLM stereotyping of faces and ideology | C4, C6 |
| **Hausladen, Knott, Camerer, Perona** (Caltech) | US | CLIP social perception of faces | C5 |
| **Peterson, Suchow, Todorov** (OMI dataset) | US | Models of first impressions | existing ref Peterson2022 |

Gap G: I found no credible report of a Russian company doing face-to-trait inference other than the Kachur/BestFitMe group. Not searched: NtechLab and other Russian vendors.

---

## Counts

| Group | New sources | of which verified-online (incl. metadata only) | partly / unverified |
|---|---|---|---|
| A | 9 | 9 | 0 |
| B | 6 | 4 | 2 (B2, B3) |
| C | 6 (+C1 update) | 4 | 1 unverified (C7); C6 metadata only |
| D | 11 | 10 | 1 partly (D8) |
| E | 4 | 4 | 0 |
| F | 20 | 17 | 1 partly (F6), 1 unverified (F20); F18 quote unverified |
| G | 6 new (SenseTime/Treasury ×2, IPVM Huawei-Megvii, HRW iFlytek, China Project Hikvision, Globes Faception) + tables | 6 | Washington Post pieces not opened |

Chinese-language (ZH) sources: D1, D2, D3, D4, D5, D7, B4, B5, B6 = **9**.
Chinese-origin English-language sources: A2, A3, A4, D6, D11.

## Open disputes / flags for `docs/04-open-questions.md` (not edited)

1. **Women's single-image accuracy in Wang & Kosinski 2018:** ifanr (B6) says 71%, other sources say 74%. Check against the JPSP paper.
2. **"89%" for Wu & Zhang** comes from press (D5), not the arXiv abstract, and the comparison is ID photos against web photos, which confounds the result.
3. **Kachur 2020 conflict of interest:** the data-provider company employed three of the five authors (A1). A8 reuses the same model on LinkedIn photos.
4. **Wang 2018 WIREs ethnicity paper:** Curtin asked for retraction (2021), but Crossref shows only an Expression of Concern and corrections as of 2026-10-25.
5. **CAC 2025 Measures, Art. 2(2)** exempts R&D and algorithm training. The video should not imply that China's 2025 rules ban face-to-trait research.
6. **The ICO 2020 letter (paras 26–27)** says CA's models were standard tools whose real-world accuracy was "likely much lower". This counters both CA's marketing and dramatised accounts.

## Process note

Two ICO PDFs and the DCMS PDF were converted to text in the session scratchpad
with macOS PDFKit so they could be searched; the files were deleted afterwards.
No personal data was downloaded.
