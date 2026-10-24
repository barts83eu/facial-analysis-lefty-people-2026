# 02 — Methods and metrics: reading the numbers correctly

## AUC is not "accuracy on a person"

"72% accuracy" in [Kosinski2021] is an **AUC**: shown one liberal and one
conservative, the model ranks the liberal as more liberal 72% of the time.
Classifying one person, with no comparison face, is harder.

Under an equal-variance normal model, AUC = Φ(d/√2), so d = √2 · Φ⁻¹(AUC).
With balanced classes and the optimal threshold, single-person accuracy =
Φ(d/2).

## Correlation r → variance explained → single-person accuracy

d = 2r / √(1 − r²); variance explained = r².

| Source | Reported | d | Pairwise AUC | **Single-person accuracy** (50/50 base rate) |
|---|---|---|---|---|
| Politicians, [Kosinski2024] | r = .13 | 0.26 | .57 | **~55%** |
| Lab photos, algorithm [Kosinski2024] | r = .22 | 0.45 | .63 | **~59%** |
| Lab photos + demographics | r = .31 | 0.65 | .68 | **~63%** |
| Naturalistic photos [Kosinski2021] | AUC .72 | 0.82 | .72 | **~66%** |

Values are computed in `experiments/sim_single_photo_limits.py`.

## Implications

- r = .22 means ~95% of the variation in political orientation is **not**
  explained by the face.
- Even the most favourable figure, from uncontrolled photos with grooming
  and expression included, gets one in three people wrong.
- Political orientation is a continuum. Splitting it into "left vs right"
  throws away information and inflates apparent accuracy for people near
  the extremes.
- A small test set is uninformative. With 20 photos (10 per side), the
  95% CI for an observed 60% accuracy is 39–78%. With a true accuracy of
  59%, such a test looks useless (≤ 50%) 28% of the time and looks
  impressive (≥ 70%) 22% of the time, which is just noise.
