"""What do published effect sizes imply for judging ONE person from ONE photo?

Uses only summary statistics from the literature; no images are processed.
Model: equal-variance Gaussian scores for two balanced groups.

Run:  python3 experiments/sim_single_photo_limits.py
"""
import math
import random
from statistics import NormalDist

N = NormalDist()
random.seed(2026)


def d_from_r(r):
    return 2 * r / math.sqrt(1 - r * r)


def d_from_auc(auc):
    return math.sqrt(2) * N.inv_cdf(auc)


def wilson_ci(k, n, z=1.96):
    p = k / n
    centre = (p + z * z / (2 * n)) / (1 + z * z / n)
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / (1 + z * z / n)
    return centre - half, centre + half


SOURCES = [
    ("Politicians, Kosinski 2024", d_from_r(0.13), "r = .13"),
    ("Lab photos, algorithm, Kosinski 2024", d_from_r(0.22), "r = .22"),
    ("Lab photos + demographics, Kosinski 2024", d_from_r(0.31), "r = .31"),
    ("Naturalistic photos, Kosinski 2021", d_from_auc(0.72), "AUC = .72"),
]


def effect_size_table():
    print("1) Published effect -> single-person accuracy (50/50 base rate)\n")
    print(f"{'source':44} {'reported':10} {'d':>5} {'AUC':>5} {'1-person acc':>13}")
    for name, d, reported in SOURCES:
        auc = N.cdf(d / math.sqrt(2))
        acc = N.cdf(d / 2)
        print(f"{name:44} {reported:10} {d:5.2f} {auc:5.2f} {acc:12.0%}")
    print()


def small_sample_test(per_group=10, true_acc=None, trials=100_000):
    """'Download a couple of photos per side and test' -- how informative is it?"""
    d = d_from_r(0.22)
    true_acc = true_acc or N.cdf(d / 2)
    n = 2 * per_group
    outcomes = [sum(random.random() < true_acc for _ in range(n)) / n for _ in range(trials)]
    at_or_below_chance = sum(o <= 0.5 for o in outcomes) / trials
    looks_strong = sum(o >= 0.7 for o in outcomes) / trials
    lo, hi = wilson_ci(round(0.6 * n), n)
    print(f"2) Small test set: {per_group} photos per side, true accuracy {true_acc:.0%}\n")
    print(f"   P(observed accuracy <= 50%, i.e. looks useless) = {at_or_below_chance:.0%}")
    print(f"   P(observed accuracy >= 70%, i.e. looks impressive) = {looks_strong:.0%}")
    print(f"   95% CI if you observe 60% on {n} photos: {lo:.0%} - {hi:.0%}\n")


def cctv_base_rate(crowd=100_000, threats=10, auc=0.72, target_tpr=0.5):
    """Generous scenario: assume the face score separates violent-intent people
    from everyone else as well as Kosinski 2021 separates liberals/conservatives."""
    d = d_from_auc(auc)
    threshold = d + N.inv_cdf(1 - target_tpr)  # positives ~ N(d, 1)
    fpr = 1 - N.cdf(threshold)
    tp = threats * target_tpr
    fp = (crowd - threats) * fpr
    print(f"3) CCTV base-rate scenario: crowd {crowd:,}, {threats} people with violent intent\n")
    print(f"   Generous AUC {auc} -> threshold catching {target_tpr:.0%} of threats")
    print(f"   true positives  = {tp:,.0f}")
    print(f"   false positives = {fp:,.0f}")
    print(f"   innocent people flagged per real threat = {fp / tp:,.0f}")
    print(f"   precision = {tp / (tp + fp):.3%}\n")


if __name__ == "__main__":
    effect_size_table()
    small_sample_test()
    cctv_base_rate()
