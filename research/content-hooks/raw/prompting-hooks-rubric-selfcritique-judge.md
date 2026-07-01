# Rubric / Self-Critique / Score-and-Rank for Hook Quality

Sources:
- https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge... (Rubric-Based Evals & LLM-as-a-Judge)
- https://towardsdatascience.com/llm-as-a-judge-a-practical-guide/
- https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/
- https://www.braintrust.dev/articles/what-is-prompt-evaluation
- WebSearch aggregate ("self-critique rubric scoring prompt LLM rank")
Accessed: 2026-06-19

This is the reliability/quality-control layer: after generating candidates, have the model score/rank them against an explicit rubric, then keep the best. Maps to the "brainstorm-then-select" and Anthropic "self-correction chaining" patterns.

---

## LLM-as-a-judge / rubric grading
"LLM-as-a-judge approaches use a language model to evaluate another model's output against a written rubric, reasoning about whether an output meets task-specific criteria. This works especially well for evaluating open-ended tasks ... where no single correct answer exists." (Hooks are exactly this.)

Three scoring formats:
1. **Single-answer grading** — assign a score using a fixed rubric.
2. **Pairwise comparison** — evaluate two outputs for the same input, pick the better. (Good for tournament-style shortlisting of hooks.)
3. **Pass/fail classification** — does the output meet a defined threshold (e.g., passes the anti-hype gate?).

## Creating effective rubrics
"Specifying well-defined rubrics and concrete examples is the key to ensuring consistency and accuracy." A rubric should "describe what 'good' looks like across different score levels." "Including example responses along with their corresponding scores significantly improves the reliability and alignment of the LLM's output." (i.e., few-shot the JUDGE too, with scored examples.)

"The quality of scoring depends heavily on the clarity of the judge's prompt; broad instructions lead to inconsistent results because the judge lacks a shared definition of quality."

## Known judge BIASES to guard against
- **Length bias:** "LLM judges consistently give higher rubric scores to outputs that are longer, regardless of whether that extra length adds informational value." → For hooks (which should be SHORT), explicitly instruct the judge NOT to reward length; or normalize.
- **Self-preference / family bias:** models prefer outputs from their own model family. Mitigate by using a judge from a different model family (cross-evaluation) if possible.
- **Position bias** (in pairwise): randomize order.

---

## Practical hook rubric (synthesized from sources + Copyhackers 5 criteria)
Score each candidate 1-5 on:
1. **Specificity** — does it use a concrete fact/number/detail from the source, not a generic platitude?
2. **Honesty / accuracy** — fully supported by the source; no overstatement, no implied promise the article doesn't deliver. (Anti-hype gate.)
3. **Clarity** — plain language, instantly understood by a skeptical decision-maker.
4. **Hook strength / relevance** — does it make the target reader want to keep reading, without clickbait?
5. **Voice fit** — sounds like the brand (plain, skeptical, understated), not like marketing copy.
6. **Distinctiveness** — different angle from the other candidates.

Plus hard PASS/FAIL gates (auto-reject if any fail):
- Contains a banned hype/clickbait word? FAIL.
- Makes a claim not supported by the source? FAIL.
- Over a length limit? FAIL.

## Self-critique chaining pattern (the workflow)
1. **Generate** a pool of candidates (high temp, diverse angles, persona variety).
2. **Critique/score** each against the rubric in a table (low temp). Include a Rationale column (Copyhackers) — forces the judge to justify scores, catches slop.
3. **Filter** out any that fail the hard gates.
4. **Select/rank** the top 3-5 distinct survivors to present to the human (Nick/Isaac).
5. (Optional) **Refine** the survivors: "rewrite to be tighter / more specific" before presenting.

This is Anthropic's documented "generate a draft → review against criteria → refine" self-correction chain, applied to hooks. Doing critique as a SEPARATE step (or separate call) is more reliable than asking for "good hooks" in one shot, because generation and judgment are different modes.

## Example self-critique prompt snippet
```
Here are the [N] candidate hooks you generated:
<candidates>...</candidates>

Score each candidate in a table with columns:
| # | Hook | Angle | Specificity (1-5) | Honesty (1-5) | Clarity (1-5) | Voice fit (1-5) | Hype/clickbait words? (Y/N) | Claim supported by source? (Y/N) | Rationale |

Rules:
- Do NOT reward length. Shorter, sharper hooks are better.
- Any hook with a hype/clickbait word or an unsupported claim is disqualified (mark DQ).
After the table, list the 3 best NON-disqualified hooks, each using a DIFFERENT angle,
and explain in one line why each earns its place.
```
