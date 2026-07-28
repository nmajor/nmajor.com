# Follow-up hunt: FranklinCovey / CIO Blaine Carter

Fetched: 2026-07-20
Entry: `research/case-studies/entries/franklincovey-buy-to-build.md`

RESULT: **Partial follow-up FOUND** (a later trade-press appearance, 2026), plus a
**previously-unlogged upstream vendor source** that materially changes the provenance
of the numbers. No earnings-call mention, no conference talk, no updated figures.

---

## FINDING 1 (important): the numbers have a Make.com vendor case study behind them

URL: https://www.make.com/en/success-stories/franklin-covey-make-success-story
Dated on page: **Sep 30, 2025** — i.e. this PREDATES the diginomica piece (2026-03-20)
that our entry cites as its source.

Verbatim:

> **How Make helps FranklinCovey save $100,000s and free up 100s of hours**
> Discover how FranklinCovey replaced a costly legacy system, **cut a $60K annual
> software expense**, and **reduced HR workflows from 30 days to 2 hours** with Make,
> saving hundreds of thousands of dollars and freeing staff to focus on higher-value
> work.
> Industry: Professional Services - Business and Management Consulting
> Use case: IT Infrastructure Management | Country: USA | Company size: 1,001-5,000

> Make delivered exactly that. Blaine Carter, CIO at FranklinCovey, explains how they
> are using Make to automate workflows across HR, finance, and operations, while also
> having the power to experiment with AI. It's saved the company hundreds of thousands
> of dollars and freed up hundreds of hours of staff time.

> "Not only did we need an integration platform, we needed an automation platform to
> go with it. With Make, we got both."

> ### A legacy service bus weighed down by technical debt
> FranklinCovey's operations depended on a **15-year-old service bus** to connect
> systems. Over time, the codebase became hard to maintain. With **original developers
> long gone**, technical debt has piled up, making even small changes costly and slow.

> ### Automating legacy functions across departments
> Business units, including HR, finance, operations, and sales, began building Make
> scenarios to replace manual work and legacy processes.

> ### Building agility into AI adoption
> Make gave FranklinCovey a way to quickly test and adopt AI features without
> rebuilding workflows or reconnecting systems. This allowed the company to 'fail
> fast', find quick wins, and scale the AI solutions that delivered the most value.

> "With Make, we're able to use automation and agentic features without needing to
> rewrite entire workflows or reconnect all of our systems. **One HR process was cut
> from 30 days to 2 hours!**"

### DISCREPANCIES vs our entry / vs diginomica

| Claim | Our entry (from diginomica, 2026-03) | Make vendor page (2025-09) |
|---|---|---|
| The cancelled software | "~$50k/year software solution" (finance) | "**$60K** annual software expense" |
| The 30-day process | fiscal binder: 30 days → "a few days" | HR workflow: 30 days → "**2 hours**" |
| Framing | finance "fiscal binder" | "HR workflows" |

Same shape of story, different department, different numbers, and a much more dramatic
speed claim in the vendor version. **The "30 days to X" anecdote is unstable across
tellings.** This is a provenance problem our entry did not flag: diginomica is
independent trade press, but the story it is retelling was already in market as a
Make.com customer success story six months earlier.

**IRONY WORTH NOTING:** the vendor page's own framing of the problem — a 15-year-old
in-house service bus whose "original developers [are] long gone" and whose technical
debt made changes costly — is the exact failure mode of building in-house. FranklinCovey's
build-vs-buy story starts with an in-house build that rotted.

---

## FINDING 2 (the actual later appearance): MES Computing, 2026

URL: https://www.mescomputing.com/news/2026/ai/ai-tools-and-platforms-when-midmarket-it-teams-should-build-vs-buy-ai-in-2026
Title: "AI Tools and Platforms: When Midmarket IT Teams Should Build Vs. Buy AI in 2026"
(Published 2026; exact day not exposed. Confirmed later than the March diginomica piece
by a LinkedIn share from Jenni Peoples, activity 7448455357183692800 → **2026-04-11**.)

Carter is quoted, but briefly and at a much higher level of abstraction:

> "AI strategy is now a business credibility issue, not just a technology roadmap
> goal," said **Blaine Carter, Global CIO, FranklinCovey**

Article framing (not Carter's words):

> The question of whether to build AI in-house, buy it off-the-shelf, or use managed
> service providers remains a critical decision for midmarket IT teams as AI adoption
> accelerates in 2026. Pressure from executives, limited budgets, and evolving AI
> governance requirements leave little room for trial and error.

> **Agentic AI further complicates the decision, as orchestration, monitoring, and risk
> controls often make building these systems in-house impractical for midmarket
> teams—pushing them toward buying turnkey solutions or subscribing to managed
> approaches.**

> Building in-house is most effective when AI capabilities are central to competitive
> advantage or require deep integration with the company's proprietary systems.
> **However, it can also stretch a limited IT team thin and shift focus away from core
> business priorities if not carefully scoped.**

> Build Vs. Buy Takeaways: Midmarket IT leaders should evaluate AI build vs. buy
> decisions across five dimensions: Speed to value / Governance burden / Integration
> depth / Talent availability / Competitive differentiation.

Co-quoted in the same piece: Jenny Kalenderidis (Reliance Cyber), Tim Ackermann
(IT director, Polytainers) — Ackermann's org is doing "everyday AI" (ChatGPT/Copilot)
and an SAP implementation, i.e. the conventional buy path.

**SIGNIFICANCE:** ~3 weeks after the diginomica "buy to build" profile, Carter appears
in a piece whose thesis leans the other way for agentic AI specifically. Carter does not
retract or update any figure; he is not quoted on the fiscal binder, the RFP tool, or
any dollar amount. But the venue and framing are a soft directional shift, and it is
fair to say **he has not repeated the specific savings claims in any later source found.**

---

## Searched and NEGATIVE

- **No earnings-call mention.** FranklinCovey is NYSE: FC; no transcript or investor
  material surfaced connecting the low-code/AI builds to reported results. The savings
  are not a disclosed, audited financial item.
- **No conference talk** by Carter on this topic found in 2026.
- **No updated figures**: the $50k/$60k finance app, the ~$100k avoided, the $30k-$40k/yr
  RFP license saving, and the 85-90% RFP time reduction have not been revisited,
  confirmed, or revised anywhere.
- **No maintenance/security accounting** published. Who maintains the Make scenarios and
  the AI-augmented RFP tool remains unaddressed — the same gap our entry flagged, still
  open 4 months later.
- diginomica has not run a follow-up.

## Net

The original numbers **have not been corroborated and have not been retracted**. What
changed is our understanding of where they came from: a vendor success story first,
trade press second. Downgrade confidence on the specific dollar figures; the
"configuration, not customization" governance framing is still the durable part.
