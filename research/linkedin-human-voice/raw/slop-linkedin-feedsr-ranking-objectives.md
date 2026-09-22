# RAW: LinkedIn "Feed SR" — the current production feed ranker and what it optimises

- URL: https://arxiv.org/html/2602.12354v1  (abs: https://arxiv.org/abs/2602.12354)
- Title: "An Industrial-Scale Sequential Recommender for LinkedIn Feed Ranking"
- Authors: Lars Hertel, Gaurav Srivastava, Syed Ali Naqvi, Satyam Kumar, Yue Zhang, and others
  at LinkedIn Inc.
- Publication: arXiv preprint by the LinkedIn Feed AI team (first party, engineering)
- Date published/submitted: 2026-02-12
- Date accessed: 2026-08-18
- Tier: PLATFORM ENGINEERING, MEASURED (production A/B). Not peer reviewed. This is the newest
  first-party description of the live ranker found in this pass and it supersedes the 2024
  dwell-time blog post as the current picture.

## Why this matters for the dwell-vs-reactions question

The model has exactly two member-action prediction heads. Verbatim from the fetch:

1. "Long Dwell: dwelling on a post longer than a specified time threshold (post-type dependent)"
2. "Contribution: likes, comments, or shares on posts"

So dwell is not a secondary or soft signal. It is one of the two things the production ranker
is trained to predict, alongside all explicit reactions collapsed into a single "contribution"
label. Reactions, comments and reshares are ONE head; reading time is the OTHER.

## Abstract, verbatim

"LinkedIn Feed enables professionals worldwide to discover relevant content, build connections,
and share knowledge at scale. We present Feed SR, a transformer-based sequential ranking model
for LinkedIn Feed that replaces a DCNv2-based ranker and meets strict production constraints."

## Ablation numbers quoted

MMoE head architecture: "+0.30% Long Dwell AUC Lift" and "+0.54% Contributions AUC Lift".

## Online A/B results, verbatim

- Overall time spent: "+2.10% increase"
- Daily active users: "+2.38%"
- Weekly active users: "+1.84%"
- Monthly active users: "+0.82%"
- New members: "Not stat-sig"

## What this source does NOT say

It does NOT state a relative weight between Long Dwell and Contribution. Anyone claiming
"dwell time is now weighted higher than likes" on LinkedIn is not getting that from this paper.
COULD NOT VERIFY any such ranking of the two.

It also says nothing about AI-slop classifiers. The slop classifier described by Lorenzetti and
Srinivasan is a separate system that affects candidate distribution (particularly out-of-network),
not one of these two heads.

## Related, for the record

- Prior first-party post on dwell modelling (saved separately as
  slop-linkedin-engineering-dwell-time.md) describes P(skip) as a NEGATIVE ranking signal and
  an "Auto Normalized Long Dwell" classifier normalised daily by content type, creator type and
  distribution method.
- LiRank (arXiv:2402.06859) and 360Brew (arXiv:2501.16450) are the other first-party LinkedIn
  ranking papers. NOT READ in this pass.
- A widely circulated LinkedIn ghostwriter claim that "360Brew is a 150-billion-parameter model
  that detects AI-generated content and doesn't reward it," causing "approximately 50%
  year-over-year" reach drops, appears in the raw at
  slop-practitioner-tell-lists-linkedin.md. COULD NOT VERIFY. Nothing in any first-party source
  read in this pass supports either the AI-detection role or the 50% figure.
