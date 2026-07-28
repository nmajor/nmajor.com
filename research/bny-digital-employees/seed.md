# Seed — BNY's digital employees

Working doc, not for readers. Status: **awaiting Nick's angle sign-off (stage 3) and his
firsthand material. No draft written yet.**

⚠️ **No brain dump exists for this piece.** Nick picked the story from the 2026-07-20
discovery digest but has not yet given a take. Per `content-builder`'s first rule, the
dump is the spine and we do not invent his position. Everything below is a *proposal* for
him to confirm, adjust, or reject.

## Thesis (proposed)

BNY did the organisational work around AI more seriously than almost anyone — gave its
agents credentials, employee numbers, human supervisors, dashboards — and still cannot tell
you whether it paid. When an analyst asked for the savings number twice on the same call,
he did not get one. The attribution doesn't exist, and it doesn't exist at the company best
placed to have built it.

## Why a reader should care

Every board is asking its executives the question Mike Mayo asked BNY. If the bank with
~140 production agents, ~220 AI solutions and the highest tech-spend ratio among its peers
cannot answer it, then the reader's own inability to answer it is not a personal failing —
it's structural, and it has a cause: nobody instrumented the baseline before deploying.

## Tactical take-home

**Before you deploy, write down the number you expect to move, its current value, and who
owns it.** Attribution cannot be reconstructed afterwards. BNY had every advantage — budget,
seniority, a named platform, a two-year head start — and still ended up with a real
deployment, a real headcount decline, and no defensible causal story connecting them.
(Woven into the structure, never labelled.)

## Shape

**News / field note hybrid.** Dated, reported, with Nick's read as the point. Not a guide.

## The tension that carries the piece

Two readings, both defensible, and the essay should hold them honestly rather than pick
cheaply:

1. **BNY is being honest.** The causal link genuinely isn't there, and the peers claiming
   AI-driven savings are claiming credit they cannot support.
2. **BNY is managing a headline.** "AI cut 6,900 jobs" is a story it does not want, and
   "not really anything to do with AI" is a convenient thing to be unable to measure.

The interesting fact is that **BofA, Wells Fargo, Citi and JPMorgan all now attribute
headcount reduction to AI, and BNY is the conspicuous holdout** — while its headcount fell
faster than most. Nick's read on which reading is right is the opinion the piece needs.

## Spine material (verified — see report + raw/)

- ~140 digital employees as of 2026-03-31, per BNY's own SEC-filed 1Q26 deck. Each has login
  credentials, an avatar, an employee number in the corporate directory, and a supervisor who
  assigns tasks and reviews output. ~100 managers oversee them; Rachel Lewis, head of payment
  operations, "oversees nine digital employees in addition to thousands of humans."
- Confirmed work: payment-detail validation and code-vulnerability remediation. (NOT
  compliance checks — unsourced.)
- Headcount 46,500 (Q2 2026), down from 53,400 (end-2023) — nearly 13% in two and a half
  years, −7% YoY. Revenue at records; revenue per employee $335,806 (2023) → $401,600 (2025).
- Mayo asked twice on the Q4 2025 call (2026-01-13) and got no number. His second ask: "could
  you put a little bit more meat on the bones… you might have 134 digital employees today and
  does that equate to in savings?"
- McDonogh's full answer points at the headcount chart, then: "that's not really anything to
  do with [AI]… AI is unlocking capacity, we don't think about it as in the narrow definition
  of efficiency… will allow us to do more with existing resources."
- Vince (Axios, Oct 2025): "I understand very much that people view head count changes as the
  consequence of AI adoption. We don't think about it that way."
- Vince (Q1 2026 call): "We would like a 47,000-person company to deliver like one many times
  larger." Said in April, when the filed number was 47,200. By July it was 46,500.
- Vince cited the MIT "95% of companies get no return" study and argued BNY is the exception.
- 99% of staff completed 10-hour Eliza training — but it is a **mandatory gate before use**.
  ~50% are daily users.
- Only **4 of 50** banks Evident tracks have disclosed realized value from AI.
- **BNY ranks 17th of 50 on the 2025 Evident AI Index, down three places** — below sixteen
  peers on independent AI maturity, while leading them all on tech spend as a share of revenue.
- **No critical coverage of the programme exists.** All substantive pieces run on BNY-supplied
  figures and BNY-arranged access. Forrester's favourable verdict discloses a months-long
  working relationship with BNY.

## Handling rules (from verification)

- Headcount is the one auditable number here. Lead with it, not with the self-reported stats.
- Every AI metric BNY publishes is self-reported with self-chosen definitions: ">40% of code
  authored by AI" has **no published definition of "authored"**; "20,000 employees building
  agents" almost certainly means "made a personal agent." Say so rather than repeating them flat.
- $3.8B tech spend ≠ AI spend. McDonogh: AI spending is "quite modest" within a "$4 billion
  engineering budget." Do not imply otherwise.
- "Highest tech spend among peers" is CNBC's collation, not BNY's claim and not audited.
- The CNBC version of the McDonogh quote is a trim, and "yet" is unverified against a clean
  transcript. Quote the fuller passage.
- "Jobs creator, not a destroyer" is American Banker's headline, not Vince's words.

## Gaps — what only Nick can supply

1. **Which reading he takes** on the honest-vs-managing-the-headline question. The piece
   needs a position; it should not sit on the fence.
2. **Firsthand experience**: a client who couldn't answer the ROI question, a deployment where
   nobody set a baseline, or what he tells companies to instrument before they start. This is
   the braid's leading strand and it is currently missing entirely.
3. Whether he wants to be harder on BNY (17th and falling, no critical coverage, all access
   controlled) or more sympathetic (they're the only ones being straight about attribution).

## Open questions a skeptical CTO would push on

- Is a headcount fall of 13% over two and a half years even large for a custody bank in this
  period? Need a sector baseline before implying AI caused it — we do not have one, and the
  essay must not imply causation it cannot support.
- What would honest attribution even look like at this scale? Worth naming, since the
  take-home depends on it being possible.
