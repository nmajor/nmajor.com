---
name: content-repurposing
description: Run Nick's autonomous weekly applied-AI newsroom after the newsletter story is decided. Produces one Tuesday newsletter companion plus up to six independent LinkedIn posts, targeting five and shipping fewer when evidence is weak; researches a standing cautionary lane, drafts concise sourced posts, chooses hooks, runs bounded audience review, renders and recommends a meme-first image for every retained post, and creates a complete review packet without requiring Nick during generation. Accepts optional weekly opinion and historical-performance inputs. Publication still requires explicit per-post and per-visual approval. Also creates zero to three deduplicated site takes once the essay is finalized.
---

# Content repurposing: the autonomous weekly newsroom

Run this one skill after the newsletter story is settled. It completes reporting, selection,
drafting, review, image generation, and packaging without stopping for routine editorial choices.
Nick can supply direction at the start or revise the finished packet, but absence is a valid input.

The output is a review-ready slate, not an authorized publication. Every LinkedIn post and exact
visual still needs Nick's explicit approval before attachment or scheduling. Never set `approved`,
`shadowedAt`, `pushedAt`, or `emailedAt` yourself.

## Read before running

Read these authorities in order:

1. `overview.md`, the source essay or settled story brief, and its research;
2. `writing-voice`, including `voice-nick.md` and `blacklist.md`;
3. `unslop`;
4. [references/run-contract.md](references/run-contract.md);
5. [references/weekly-newsroom.md](references/weekly-newsroom.md);
6. [references/performance-learning.md](references/performance-learning.md) when historical data
   exists;
7. [references/takes.md](references/takes.md) when the essay is finalized;
8. `research/linkedin-content-strategy-2026-09/report.md` and
   `research/linkedin-breakout/report.md` for the evidence behind the operating choices;
9. `research/linkedin-posting-times-2026-09/report.md` when assigning or evaluating slots.

Compose with `content-discovery`, `last30days`, `hooks`, `icp-focus-group`,
`meme-angle-selector`, `social-visual-system`, and `social-meme-campaign`. Use their autonomous or inherited-context
modes when this skill calls them. Their standalone human-choice gates do not interrupt this run.

## The generation contract

Required input: one real essay slug or one settled newsletter story brief. Optional input may
include this week's opinion, a story or source, readers or industries to favor, exclusions, and
timing. Capture it verbatim. Resolve every omitted choice from the evidence, Nick's published
corpus, and the standing editorial rules. Record what you resolved.

Never invent Nick's experience to fill a missing opinion. Every angle is tagged
`nick-this-week`, `nick-established`, or `editorial-proposal`. A new editorial proposal should be
clear and useful, not neutral sludge, but it cannot imply a client relationship, product test,
conversation, or firsthand event that did not happen.

If the topic is settled but the essay file does not exist, complete a provisional run under
`research/linkedin-weekly/`. Do not create scheduler-facing posts until the real essay slug exists.

## The slate

Use seven possible daily offsets, Tuesday through Monday: `0,1,2,3,4,5,6`. Target five posts.
One to seven may survive. Four is fine. Empty slots are evidence that the quality gate worked.

- Tuesday is the required newsletter companion at the issue's actual publish time plus 60 minutes.
- The other slots are independent applied-AI reporting. They do not have to share the newsletter's
  topic.
- Independent posts inherit the day-specific UTC priors in `app/linkedin.config.json`. Use
  `postHourUTC` only for a deliberate experiment or a real timing constraint, and record why.
  Treat aggregate studies as a starting prior; Nick's own 48-hour and seven-day results govern
  future changes.
- Fill Tuesday, Wednesday, Thursday, Friday, and Monday first. Saturday and Sunday are expansion
  slots, not filler slots.
- Every run actively researches failures, disappointment, recovery, and misuse. Include a
  cautionary story when it is well supported and adds a distinct mechanism. Do not force one or
  reward fear by itself.
- Most posts are useful baseline posts. At most one is a breakout attempt in a weekly batch.

The durable beat is applied AI in identifiable work: results, cost, workflow change, adoption,
interfaces, governance, failure, and recovery in traditional or non-tech organizations.

## Run the newsroom

1. **Open a resumable run.** Create the directory and manifest defined in `run-contract.md`.
   Hash the issue or brief and optional input. Resume matching work instead of starting over.
2. **Build the pool.** Use `content-discovery`, current web research, `last30days`, and the case
   library to gather 12 to 18 pitches across the desks in `weekly-newsroom.md`. Save every response
   unedited under `raw/` before synthesis.
3. **Make evidence packets.** Name what happened, when, in which workflow, what the metric measures,
   what is unknown, what contradicts it, and which exact claims are safe. Search snippets and social
   posts may lead to a story but cannot carry a consequential claim alone.
4. **Gate, then score.** Reject unsupported, duplicated, off-beat, visually impossible, or
   dishonest pitches before audience scoring. Run the focus group in inherited-context mode on the
   survivors. Select for evidence, operator value, novelty, addressability, and slate range. Keep
   the Tuesday companion even when it is not the highest-reach candidate.
5. **Draft from evidence.** Write one recommended post per retained pitch. Generate hook families
   with `hooks`, select the best one automatically, and retain no more than two real alternatives.
   Add one materially different body alternative only when another framing is worth comparing.
   Candidate order is contractual: candidate 1 is the default recommendation and the only body
   materialized for scheduling. If Nick explicitly approves an exact displayed post-and-image pair
   without naming a variant, candidate 1 is selected. Silence is never approval, and publication
   still requires the existing explicit per-post and per-visual approvals.
6. **Check claims separately.** Produce a claim-to-source ledger for every recommended body and
   alternative. Drop any unsupported number, causal claim, or invented first-person detail.
7. **Review once, revise once.** Run the mini focus group in inherited-context mode. A passing draft
   stops after one pass. Otherwise make one substantive revision and one reassessment. Record
   provider degradation and unresolved disagreement. Do not optimize until every juror agrees.
8. **Apply voice and unslop.** Read aloud. Remove banned constructions, generic lessons, polished
   symmetry, fake vulnerability, and copy that could fit another company after swapping nouns.
9. **Materialize stable copy when possible.** With a real essay slug, put only the recommended post
   bodies in `app/linkedin/<essay-slug>/` before rendering visuals, because the visual system binds
   assets to the actual post-body hash. Keep variants under research. Set `mediaRequired: true` and
   leave approval and media attachment unset. A provisional run keeps copy under research.
10. **Create the images.** Run `social-visual-system` for every retained post. Render and inspect
    one recommendation and, only when useful, one meaningfully different backup. A body alternative
    gets its own image candidate whose relationship fits that framing; never present the same asset
    twice as if it were a variant. Prefer a clean
    classic meme, then a real source capture, then a synthetic workbench photo. Use
    `meme-angle-selector` before selecting any classic template, and preserve its angle packet and
    ranked shortlist in the run research. For a provisional
    run, keep assets and its candidate manifest under research and defer the scheduler-facing visual
    ledger validation until the real post paths exist. A recommendation is not selection or approval.
11. **Create takes.** When the essay is finalized, follow `references/takes.md`. A provisional
    story run skips takes until the essay exists.
12. **Validate and report.** Run `npm --prefix app run linkedin:lint`,
    `npm --prefix app run linkedin:weekly:lint`, the visual validator, and takes lint when they
    apply. A provisional run uses its manifest checks and records the deferred scheduler validators.
    Write `review.md`, mark the run `generation-complete` or name the exact blocked item, and hand
    Nick the ordered text-and-image pairs plus alternatives. Show every file path once. Put the
    recommendation first, then only genuinely different variants. Do not repeat a path as both
    inline code and a second `open` link.

## Scheduler-facing post shape

```yaml
---
newsletter: <essay-slug>
channel: personal
weeklyBatchVersion: 1
offsetDays: 0
offsetMinutesAfterIssue: 60
angle: newsletter-companion
sourceKind: newsletter
editorialLane: companion
reachGame: baseline
mediaRequired: true
# approved: Nick only
---
```

Independent posts use `sourceKind: independent`, omit `offsetMinutesAfterIssue`, and use one of
the remaining offsets. They may add `lengthReason` only when the normal 100-to-180-word target
cannot carry the evidence cleanly.

## Non-negotiable post gates

- Standalone value. No teaser or withheld lesson.
- First paragraph at or below the project's 140-character mobile-fold budget.
- One central claim, a named receipt near the top, and uncertainty beside the fact it limits.
- One judgment Nick could honestly own, with provenance recorded in the run packet.
- No hashtags, engagement bait, hype, fake outrage, broetry, forced list of three, or em dash.
- No body link by default. Treat Tuesday link placement as a measured experiment rather than an
  algorithm law.
- Normal length is 100 to 180 words. Shorter complete posts are welcome. Longer posts need a
  recorded reason and still obey the platform limit.
- A cautionary post explains the failure mechanism or recovery. It does not use affected people as
  the joke.

## Approval boundary

The run may recommend a text, hook, slot, and image. It may not approve any of them. Post approval
and visual approval are separate stored states, though one unambiguous user message may approve a
displayed text-and-image pair together. Only then should the existing guarded visual attachment
and scheduler workflows run.

Do not automate comments, DMs, engagement pods, or fake participation. Remind Nick that real
replies and useful comments on other people's work remain human work.

## When not to pad

Drop a post when the evidence packet is weak, the proposed judgment merely restates the source,
the story duplicates a recent claim, or every honest visual is irrelevant or blocked. A quiet day
costs less than a generic post readers recognize as machine-made.
