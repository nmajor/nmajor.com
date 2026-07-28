# ICP focus group #2 — mid-market case-study candidates vs the incumbent

Six jurors, personas from `.icps`, blind to each other. Five candidates: **B** (BMW/Quinn,
the incumbent that won panel #1) plus four produced by the mid-market hunt.

## The headline result: a dead tie, split by seat family

| Candidate | Borda | 1st-place votes |
|---|---|---|
| **B — your AI's promises are your promises** | **27** | **3** |
| **F — the success stories don't survive follow-up** | **23** | **3** |
| I — nothing forces anyone to publish the failure | 17 | 0 |
| H — the quoting desk at a fastener distributor | 15 | 0 |
| G — the bug passed human review | 8 | 0 |

| Juror | Seat provider | Ranking | Beats incumbent? |
|---|---|---|---|
| Insurance COO | anthropic | **F**, B, I, H, G | **yes** |
| Mid-market CIO | anthropic | **F**, B, H, I, G | **yes** |
| Shared services | anthropic | **F**, B, I, G, H | **yes** |
| Logistics ops | openai | **B**, H, F, I, G | no |
| Manufacturing CEO | openai | **B**, H, I, F, G | no |
| Healthcare ops | openai | **B**, I, F, G, H | no |

**The split is perfectly clean along seat lines. All three anthropic seats rank F first and
say it beats the incumbent; all three openai seats rank B first and say it does not.**

### This is confounded and must not be over-read

Persona and provider are **confounded in this run**: seats 1/4/6 (insurance COO, CIO, shared
services) went to anthropic in both panels, and seats 2/3/5 (logistics, manufacturing,
healthcare) went to openai in both. So the split could be a model-family effect, a persona
effect, or both, and this design cannot separate them.

One piece of evidence against a pure persona story: in panel #1 the anthropic-seated personas
also favoured B (rankings D/B/B). They moved to F only when F was introduced. The openai-seated
personas did not move. That is *consistent* with a family effect but does not establish one.

**Fix for the next run: rotate personas across providers**, so persona and provider are crossed
rather than nested. Also **gemini was unavailable again** (not logged in; we refused to fall
back to an API key), so this remains a two-provider panel.

**Do not report "F wins" or "B wins" as a panel finding. The honest finding is that the panel
is split and the split tracks the seat assignment.**

## What all six agree on

These are the load-bearing results, because they survive the split.

**1. Do the reporting on H. Unanimous, 6 of 6.** Every juror said the phone call to the Packer
Fastener IT director is worth it, including the three who ranked H last or called it a trap.

> "A trade-publication summary with projected savings is how people sell me junk; one honest
> phone call with measured results is worth more than ten polished case studies." — logistics

> "Aggregation of public sources is a commodity I can get free; a CIO at my scale telling
> another operator what the 75% actually came in at, and who maintains the thing now, is not
> available anywhere and is worth waiting a month for." — CIO

> "If he gets the IT director to say the 75% actually came in at 40% and one guy maintains it
> on evenings, that's a better issue than anything else on this list; without the call, don't
> run it." — insurance COO

**2. H must not run without the call.** Named as the trap by 3 jurors, all for the same reason:
publishing projected numbers as results is precisely the sin candidate F is about.

> "He'd lose me permanently for hypocrisy." — CIO

**3. G is eliminated.** Last or second-to-last for 5 of 6. Best-sourced find of the hunt, and it
dies because it is an engineering-org story about pull requests and none of these people run an
engineering org.

> "Nick would have to do that translation work himself." — shared services

**4. Nobody wants vague governance language.** Repeated across both families:

> "The thing that loses me is vague 'guardrails' talk. If the piece does not name the failure
> mode, the owner, the control, and the escalation point, I will not read it." — healthcare

## If B runs — what the panel asks for

B scored **5/5/5 on clarity, usefulness and credibility from all three openai seats**, with
would_forward 5. Its weakness is insight: 3-4, and two jurors said the Air Canada point is old
news to them. So the value is the artifact, not the argument.

Every juror who ranked B first asked for the same fix: **make the authority matrix specific to
one boring workflow, filled in, not generic.**
- Manufacturing: price, lead times, substitutions, certifications, RMAs, expedite fees, compliance claims.
- Healthcare: appointment scheduling or billing estimates — what it may say, must never say, when it must escalate.
- Logistics: "exact examples of what the bot may quote, schedule, waive, refund, and when it must stop and hand off."

## If F runs — what the panel asks for

F scored **insight 5 from all three anthropic seats** — the only 5s on insight recorded across
both panels. Its weakness is that the takeaway is prose, not a tool.

> "Right now the insight is a 5 and the takeaway I can hand to my team is a 3." — shared services

**Required fix, unanimous among its supporters: ship the four checks as a copyable artifact** —
who published it and what is their business model; does the named builder still hold the job; is
there any number dated after month twelve; does the figure appear anywhere outside the original post.

**Editorial decision F forces:**

> "If the author names the agency's category but not the agency, I'll assume he's protecting a
> relationship and stop trusting the reporting." — CIO

So F requires naming `insideraitrends.com` and Kreante explicitly. That is a real choice with
consequences, not a detail.

**And the sharpest constraint in either panel:**

> "A close that swings from these stories into 'this is why you need an advisor'... would mean
> the newsletter is running the same play as the agency it just exposed." — insurance COO

F is the one issue where the usual soft commercial pull is actively dangerous.

## I — respectable, not ready

Zero first-place votes but **insight 5 from two openai seats**. The universal objection is that
it has no procedure attached.

> "'Build your own internal disclosure mechanism' is advice with no shape — no template, no
> cadence, no owner." — CIO

Its best asset is a sentence two jurors independently called the sharpest in the set: *the model
summarised the document, but the job was to summarise the change to the law.*

Candidate I is probably a section inside F rather than its own issue.

## Recommended sequence (not a single pick)

The panel splits on B vs F but agrees on the pipeline shape:

1. **Start the Packer Fastener reporting now.** It is the long pole — reporting takes weeks —
   and it is the only thing all six jurors endorsed. Nothing else in the queue depends on it.
2. **Ship B next**, since it is fully verified and ready, with the authority matrix filled in for
   one concrete workflow rather than left generic.
3. **Ship F after**, once the four-check artifact exists and the naming decision is made.
4. **H becomes the flagship** when the reporting lands — the one issue nobody else can publish.

Fold I into F as its evidentiary spine.

## Honest limits

Persona simulation explains under 10% of variance in real human judgment and regresses toward
leniency. Two providers, not three. Persona and provider confounded. **Treat the B-vs-F tie as
genuinely unresolved by this exercise** — it is a decision for Nick, not a finding from the panel.
The unanimous results (do the reporting; don't run H without it; drop G; no vague guardrails talk)
are the parts that carry real weight.
