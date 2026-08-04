# Seed — uber-ai-budget

Working doc. Not for readers. Target slot: 2026-08-04 (Tuesday cadence).

## Provenance

Topic picked by Nick from the 2026-07-20 discovery digest. **Brain dump captured
2026-07-28** at the angle checkpoint — `raw/braindump.md`, verbatim. That dump is the
spine. Verification ledger: `report.md`.

## Thesis (revised after the dump + the verification pass)

You get what you incentivize, and Uber incentivized consumption. Every number Uber can
produce about its AI rollout is an **input** — tokens spent, tools adopted, share of code
touched. None of them is an output. That's why the COO can hold a fistful of impressive
stats and still say the link to shipped features "is not there yet." The leaderboard was
the purest expression of the problem, not an exception to it.

Nick's counterweight, which keeps this from being a cynical piece: **the spend probably
isn't the mistake.** AI genuinely is a large productivity boost, intelligence per dollar
keeps falling, and "AI costs more than your employees" won't age well. The mistake is
measuring the wrong end of it.

*(Report §7.8 independently arrived at this framing and argued it beats the original
"leaderboard caused the overrun" thesis — it's supported by a direct on-record quote and
sidesteps the unprovable causal claim in §7.6.)*

## Why a reader should care

Anyone rolling out a metered AI tool will reach for the easiest metric — usage — because
it's the one the vendor dashboard hands you. It is a cost line wearing a progress bar.

## Tactical take-home

Two moves, both carried by the story rather than labeled:
1. Whoever owns the adoption target must own the budget line. At Uber the teams pushing
   adoption weren't responsible for the budget.
2. Point the AI at the checking step, not just the producing step. Nick's biggest real
   productivity unlock was having the AI verify its own work end-to-end with Playwright —
   that attacks the actual bottleneck (review) instead of flooding it.

## Shape

**News**, led by Nick's read, with a substantial first-person middle. ~4–5 min, ~900–1,000
words.

## Spine — Nick's material (from `raw/braindump.md`)

- **"Silly and dumb."** The Dilbert strip where they start paying engineers per bug fixed —
  so engineers write bugs to fix. A token-maxing scoreboard is the same joke.
- **"You get what you incentivize, and you can easily incentivize the wrong thing."** He
  frames this as a universal truth of engineering teams, not an AI-specific one. This is
  the essay's argumentative core.
- **The parallel-agent story (the money anecdote).** He ran three or four agents at once.
  When they all finished he had to context-switch across three, four, five different bugs
  and features simultaneously — "a huge, towering to-do list for myself, and that wasn't
  very efficient either." He optimized for throughput and moved the jam onto himself.
- **The self-correction:** now caps himself at **two** parallel agents, because he needs to
  check they're approaching things the right way and review the code before merge.
- **His review bar, in his words:** whether it "looks and feels clean" and "feels like
  something I would write."
- **The genuine unlock:** having the AI check itself with **Playwright**, doing end-to-end
  testing — "especially when you're building a feature or fixing a bug that involves dozens
  of different permutations to test."
- **What to incentivize now:** two or three years ago he'd have said high-quality code
  balanced against shipping product features. Now he leans further toward shipped features,
  because **code is cheap** and so is refactoring. He's explicit that this is unsettled:
  "we haven't yet figured out how to utilize AI in its most productive form."
- **Speculation, flagged as such:** maybe the productive form is prototypes and bake-offs —
  have it build several, pick the winner.
- **The contrarian close:** people saying AI costs more than employees are wrong on the
  five-year view. True selectively now, not always. Intelligence per dollar keeps falling.
  And: "AI still is super dumb at many, many things, including some types of software."

## The braid

Nick's parallel-agent story is the personal mirror of Uber's leaderboard: both optimized an
input metric (agents running / tokens consumed) and degraded the actual outcome. He caught
it in a one-man loop in weeks; Uber caught it in a 5,000-engineer loop after a year's budget
was gone. Same error, different blast radius. **That parallel is the essay.**

## Verified facts to build on (full ledger in report.md)

- Claude Code rolled out Dec 2025; the **2026 budget for AI coding tools** gone by April.
  Reported by The Information; cite via Forbes. CTO Praveen Neppalli Naga — treat "back to
  the drawing board" as paraphrase, **not** a quote.
- **~5,000 engineers** (Forbes). Not 5,500.
- **$150–250/engineer/month average; power users $500–2,000** (Forbes). Solid.
- **Forbes reports the CTO himself ran up $1,200 in a two-hour session.** Attribute to Forbes.
- **Leaderboards ranked on *usage*, not tokens.** The token point is Nick's inference and must
  be framed as one. "Pushed by," never "built by," teams that didn't own the budget.
- **Macdonald** (president & COO), Fortune, 2026-05-26: *"That link is not there yet."*
- **The cap: $1,500/month PER TOOL** (Bloomberg 2026-06-02 via Willison). $18k/yr per tool.
  Cap is 7.5× the ~$200 average — it only clips the extreme tail.
- **Scale:** ~5,000 engineers at $150–250/mo works out to **under 1%** of Uber's $3.4B 2025
  R&D. Show the arithmetic; the number is ours, not a source's.
- **CEO Khosrowshahi: ~10% of committed code built by autonomous agents.** The one
  code-authorship figure to cite. Never blend with 70% or 11%.

## Hard constraints from the verification pass

- Say **"under 1%"**, never "roughly 1%" (§5.4, §7.1 — the 1% traces to HN math that doesn't
  reconcile).
- **No "still."** The COO quote (May 26) *predates* the cap (June 2) by a week (§7.2).
- Pre-empt the proportion switch: small against R&D, ~3× against its own line item (§7.9).
- Never cite Fortune for R&D (§4.6). Never cite WIRED/Levy or the Duolingo claim (§6.1).
- Every Uber-internal fact attributed at one remove (§0).
- **Re-verify the SEC figures before publish** — direct fetch returned 403 (§4.5, checklist).

## Open questions / skeptic's push-back

- **"Isn't the spend obviously worth it?"** Nick thinks largely yes. The piece must concede
  this early and clearly, or it reads as another cheap AI-cost dunk.
- **Repetition risk vs `the-bottleneck-moved`** (2026-07-07), which argued drafting got cheap
  and sign-off didn't. Nick's parallel-agent story is a firsthand instance of that thesis, so
  the overlap is real. **Differentiator: that essay was about where the bottleneck sits; this
  one is about what you reward.** Keep the framing on incentives and don't re-argue the
  bottleneck — reference it lightly at most.
- **Repetition risk vs `the-case-study-was-an-ad`** (2026-07-28): keep the shaky-sourcing
  thread out of the body. Different subject.
