# ICP focus group — story selection, 2026-07-20

Six jurors, each role-playing a persona from `.icps`, blind to each other, scoring five
story candidates from the 2026-07-20 discovery digest.

## Lineup and caveats

| Seat | Provider / model | Persona |
|---|---|---|
| 1 | anthropic `claude-opus-4-8` (native) | Skeptical insurance COO, 600-person carrier |
| 2 | openai `gpt-5.4` | Practical logistics ops director, 250-person freight |
| 3 | openai `gpt-5.4` | Risk-conscious manufacturing CEO, 120-person |
| 4 | anthropic `claude-opus-4-8` (native) | Pragmatic mid-market CIO, 900-person distribution |
| 5 | openai `gpt-5.4` | Cautious healthcare ops director, 1,200 staff |
| 6 | anthropic `claude-opus-4-8` (native) | AI-optimistic shared-services director, 400-person |

**Substitutions and failures — read these before trusting the result:**
- **Google/gemini was unavailable.** The CLI is installed but not logged in; it demanded
  `GEMINI_API_KEY`. Per the skill's hard rule we did **not** authenticate with an API key.
  Seats 3 and 6 were reassigned (3 → openai, 6 → anthropic). **This is a two-provider panel,
  so the cross-provider debiasing is weakened.** Fix: run `gemini` interactively and sign in.
- **`gpt-5.5` is not available** to the installed Codex build (v0.121.0) — "requires a newer
  version of Codex." Fell back to `gpt-5.4` per the chain.
- Two failed runs were caused by **`noclobber` in zsh** silently refusing to overwrite output
  files, not by the providers. Use `>|` in this repo.

**Honest limit:** persona simulation explains under 10% of variance in real human judgment and
regresses toward leniency. These are directional. **The verbatim quotes and the disagreements
matter more than the aggregate numbers.** This is decision-support, not a forecast.

## Result: B wins decisively

Borda count (5 points for 1st through 1 for 5th):

| Candidate | Borda | 1st-place votes |
|---|---|---|
| **B — BMW Toronto "Quinn"** | **28** | **5 of 6** |
| A — BNY digital employees | 20 | 0 |
| C — GEICO / PA AG | 17 | 0 |
| D — Travelers claims intake | 16 | 1 |
| E — ZoomInfo securities suit | 9 | 0 |

Individual rankings:

| Juror | Ranking |
|---|---|
| Insurance COO | D, C, B, A, E |
| Logistics ops | B, A, D, C, E |
| Manufacturing CEO | B, C, A, E, D |
| Mid-market CIO | B, A, E, D, C |
| Healthcare ops | B, C, A, D, E |
| Shared services | B, A, D, C, E |

## Scorecard — B vs A (medians)

| Criterion | B (BMW) | A (BNY) |
|---|---|---|
| clarity | 5 | 4 |
| usefulness | 5 | 3.5 |
| **insight** | **4** | **4** |
| credibility | 5 | 4 |
| resonance | 5 | 4 |
| would_forward | 5 | 3 |
| would_open | 6/6 | 6/6 |

**The one soft spot in B: nobody scored it 5 on insight.** Every juror gave it exactly 4. It is
maximally *useful* and *resonant* but not *non-obvious* — "decide what your bot can promise" is
sensible rather than surprising. The differentiator has to be the artifact, not the idea.

Note also that A and B tie on insight. A's problem is not that it is unintelligent — it is that
`would_forward` sits at 3 while B sits at 5.

## Why B won — the consistent reason

Every juror who picked B gave the same reason independently: **it names a decision they have not
made.**

> "The only candidate that maps directly onto a decision I have not made: what our tools are
> allowed to commit us to in writing." — mid-market CIO

> "This is the only one where I'd forward the email and attach an action item."
> — shared-services director

> "I can hand that issue to legal, sales, and customer service and ask one concrete question:
> what is an AI allowed to commit us to today?" — manufacturing CEO

> "B gives me a control problem I can act on this week." — logistics ops

Two jurors independently noted the liability does not transfer to whoever built the tool — the
UK CMA line landed hardest with the buyers, not the builders.

## Angle: unanimous

All six converged on the same angle, and five used the words *matrix*, *checklist*, or *list*
unprompted:

> **Define in writing what the bot may quote, offer, commit, schedule, waive, refund, deny, and
> when it must escalate to a human.**

The highest-leverage fix is also unanimous: **do not leave it as a dealership anecdote — ship
the artifact.**

> "Give me the actual artifact, not the story: a one-page agent authority matrix I can copy."
> — shared-services director

> "Ground it in a boring internal tool, not a car dealership — show me the same failure mode in
> a quoting, credit-limit, or returns-authorisation bot bought from an ERP vendor, and include
> the actual sentence a company should put in its policy." — mid-market CIO

## Traps

**D — Travelers (3 trap votes, but also the only 1st-place vote outside B).** The sharpest split
in the panel. The insurance COO ranked it first because it is her industry and her peer
benchmark. Three others called it a trap for the same underlying reason:

> "A snark angle on a press release with no independent reporting behind it — it reads as a
> writer scoring points off corporate language." — mid-market CIO

> "Without failure rates, customer complaints, leakage to humans, or control design, this is
> mostly company-supplied success metrics." — manufacturing CEO

**Reading: D is not a bad story, it is an under-reported one.** Every number is company-supplied.
The COO who ranked it first asked for exactly the missing piece: "what broke in the first state,
what the human fallback path is."

**E — ZoomInfo (2 trap votes, last or near-last for 5 of 6).** Consistently judged too far from
operations. "A lawyer's issue wearing an operator's jacket."

**A — BNY (1 trap vote, conditional and important).** The shared-services director flagged
angles **A1 and A3** as actively damaging *coming from an advisor*:

> "'ROI is structurally unanswerable' is a gift to every executive who wants to spend without
> measuring, and 'the honest CFO' is a media-criticism essay dressed as an operations one — it
> flatters the reader, teaches nothing, and from an advisor it edges toward 'you can't measure
> this, so hire someone who understands it.' That's exactly the move that would cost him my
> trust."

**Every juror who ranked A second said its value depends on choosing A2** (org design: give every
agent an owner and a KPI). A1 — the angle previously recommended in `seed.md` — is the one the
panel most distrusts.

## The escape hatch: what they actually want (none of the five)

Asked what issue they'd most want that was *not* on the list, **4 of 6 described the same thing**:

> "A boring mid-market operations case with real numbers: one workflow, what it cost, what broke,
> what error rate or labor moved, and how much human babysitting it still needed." — logistics

> "A named mid-market non-tech company that built something in-house, what it actually cost to
> run and maintain a year later, and what broke — the maintenance bill nobody puts in the case
> study." — CIO

> "A company that killed a recurring SaaS bill by building the thing internally: what it cost,
> who maintains it, and what broke when that person left." — shared services

> "What a 600-person carrier with no ML team and a burned $400k RPA budget should actually do
> first, and the specific things at that size that are not worth attempting yet." — insurance COO

**This is the strongest signal in the whole run and no candidate delivers it.** The demand is for
a *mid-market, single-workflow, real-numbers, what-broke-a-year-later* case study — including the
maintenance bill. It should become a standing hunt in `content-discovery`, and it maps directly
onto the existing `saas-replacement` category in `research/case-studies/`.

## Universal "would not act" triggers

Consistent across all six — these are hard constraints on the draft:
- Hype or transformation language; "digital workers"; percentage-of-companies-left-behind framing.
- **Using the 10%-of-worldwide-turnover fine as the hook** (two jurors named this specifically).
  It is context, never the opener.
- A soft pitch dressed as a conclusion — "most companies get this wrong, here's how I help."
- Company-supplied numbers presented without saying who supplied them and how they were computed.

One structural note worth heeding: **"B, C and D are three versions of the same lesson, so
whichever he picks, he shouldn't run the others."** (shared services) — C and D should not follow
B in consecutive issues.
