# Candidate ranking

Score only candidates that use an active established template and map every role to the contract.

## Hard failures

Set `hard_fail` and record `hard_fail_reason` when the relationship differs from the angle, a slot changes meaning, the caption
adds an unsupported claim, the post must explain the joke, the punchline targets an affected person,
the relationship repeats within the batch, the text breaks the contract or phone-size limit, or the
template is not active.

## Scored dimensions

Score the rendered survivors from 0 to 3 and record one specific reason for each.

| Dimension | Question |
|---|---|
| relationship_fit | Does the established meaning exactly express the angle? A survivor requires 3. |
| surprise_coherence | Does the pairing add a non-obvious turn that still makes sense? |
| compression | Do the image and a few words carry the joke? |
| operator_recognition | Will a business reader recognize the decision or failure mode? |
| audience_familiarity | Will this audience read the established template quickly? |
| voice_target | Is it dry, specific, and aimed at the decision or system? |
| visual_fluency | Is the rendered result clear at feed-thumbnail size? |

The 21-point total exposes tradeoffs. It is not an objective funniness score and does not pick the
winner automatically. Require `relationship_fit = 3`, then compare finalists pairwise against the
same comic payload. An exact tie must be resolved by a recorded pairwise reason, never input order.

Do not award surprise because a template is obscure. Surprise belongs in the relationship between
the facts. Evaluate template freshness after individual ranking, across the complete batch.
