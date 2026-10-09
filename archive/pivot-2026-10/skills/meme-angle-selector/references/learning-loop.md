# Learning loop

Store one JSONL record per reviewed recommendation under `research/meme-selection-history/`.

Record the post and date, angle packet, complete shortlist and score reasons, recommendation and
alternative, Nick's accepted/rejected/edited/replaced decision, his reason in his words, final
caption and template, and later impressions, reactions, comments, shares, saves, profile visits, and
follower change. Note distribution conditions separately from creative fit.

Update the system in this order:

1. Correct a wrong contract or slot mapping.
2. Add a recurring rejection reason to hard gates or examples.
3. Adjust weights only after the same failure recurs across unrelated posts.
4. Add semantic retrieval or a learned reranker after enough accepted and rejected comparisons exist.

Do not train on reach alone. Topic, timing, distribution, copy, and the existing audience all affect
reach. Nick's selection and edit reasons are cleaner labels for template fit.

For a future learned reranker, use pairwise records such as “template A fit this angle better than
template B.” Keep a held-out post set and compare top-1 and top-3 agreement with Nick's choices before
changing the production selector.
