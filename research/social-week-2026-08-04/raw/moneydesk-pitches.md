# Money desk — pitches, week of 2026-08-04

Beat: unit economics of AI tools. Two pitches, both verified against fetched sources
(see moneydesk-raw.md in this directory for the full ledger and SOFT flags).

---

## Pitch 1 — Copilot's training wheels come off this month

**Hook (≤140):** GitHub's Copilot promo credits expire this month. September's invoice
is the first one at real prices — and most admins haven't looked.

**The story.** GitHub ended flat-fee Copilot on June 1: every plan now burns "AI Credits"
(1 credit = $0.01) metered at API token rates, with only code completions left unlimited —
chat, agents, and code review are all on the meter. To soften the landing, Business seats
got $30/month of included credits and Enterprise $70/month, but only through August; in
September those drop to the real allowances of $19 and $39, a 37–44% cut in included usage,
and anything past that is either overage billing or the tool shutting off (admin's choice —
at a zero budget, Copilot just stops). Developers projected bills jumping from $29 to $750
a month for agent-heavy teams, and GitHub's own announcement thread sits at 958 downvotes
to 24 upvotes across 534 comments. GitHub's stated reason is the honest part: the product
"is not the same product it was a year ago" — agentic workflows consume too much compute
for a flat fee to survive.

**Verified sources.**
- GitHub announcement (2026-04-27, effective 2026-06-01): https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
- Developer reaction thread (958↓/24↑, 534 comments): https://github.com/orgs/community/discussions/192948
- Developer Tech (2026-06-11), mechanics + GitHub quote: https://www.developer-tech.com/news/ai-coding-tools-usage-based-billing/
- Epinium (2026-06-01), $29→$750 and $50→$3,000 projections, promo expiry framing: https://epinium.com/en/blog/github-copilot-token-billing-enterprise/

**Why now.** August 2026 is the last promo month. Every Copilot Business/Enterprise
customer's September invoice is the first at real prices, and GitHub shipped a preview-bill
tool in May — meaning an operator can read their real number *today*, before it lands.
This is a check-your-bill-this-week story, not a news recap.

**Nick's first-person angle.** He lives in these tools daily and can say exactly which
Copilot features are the expensive ones (agent runs, code review) and which are still
effectively free (completions). The honest operator move he can walk through: pull the
preview bill now, default every cost center's overage budget to zero, then deliberately
un-cap only the seats whose agent usage you'd defend to a CFO. It's also the cleanest
real-world demo of his standing point that a seat price is a forecast and a meter is not —
the largest coding tool on earth just switched from the one finance could multiply by
headcount to the one it can't.

**Breakout potential.** High. "Your Copilot bill changes next month and here's the setting
that decides whether it 40x's or just turns off" is a PSA with a deadline — the kind of
concrete, self-interested post strangers reshare to their own IT/finance people. The
958-to-24 downvote ratio is a built-in screenshotable stat.

---

## Pitch 2 — Token prices halved. Bills went up 6x anyway.

**Hook (≤140):** Ramp's billing data: token usage up 1,001%, spend up 497% in 15 months.
Unit prices fell by half — and the bills still 6x'd.

**The story.** Ramp's Token Spend Management data (aggregated from real vendor billing
APIs, published June 8, data through April 2026) shows businesses' token usage grew
1,001% from January 2025 to April 2026 while spend grew 497% — effective unit prices
roughly halved, and total bills still went up ~6x, because volume ate the discount and
kept eating. The distribution is the other half of the story: median AI spend is $2,246
a month while the *average* is $140,842 — 63 times higher — so a heavy tail of agent-running
companies owns almost all the spend, and per-employee cost scales with model sprawl
($28/employee/month for firms using 4–10 models, $442 for firms using 26+). The FinOps
Foundation's 2026 survey (1,192 practitioners, $83B+ of cloud spend) says 98% of FinOps
teams now manage AI spend, up from 31% two years ago — finance already knows something
broke; what broke is that everyone budgeted the price, and the price was never the variable.

**Verified sources.**
- Ramp (2026-06-08, data through Apr 2026): https://ramp.com/blog/ai-token-cost-for-businesses
- FinOps Foundation, State of FinOps 2026 (98%/63%/31%, $83B, 1,192 respondents): https://data.finops.org/
- The Source Code (2026-07-15): agentic tasks consume 5–30x the tokens of 2024-style
  prompting; 80–90% of AI spend is inference: https://www.the-sourcecode.com/ai-tech/token-costs-enterprise-ai-business-case-2026
  (use the multiplier as attributed color, not load-bearing; see raw notes)

**Why now.** Mid-year reforecasts and 2027 budget drafts are being written this quarter,
and every one built off today's per-token price sheet repeats 2026's mistake — the July
FinOps-press wave (The Source Code piece is July 15) shows the finance world catching up
in real time. Vendors will keep announcing price *cuts*; this is the story of why those
cuts don't show up on the invoice.

**Nick's first-person angle.** He pays these bills himself and has watched the mechanism
in his own work: as he moved from chat-style prompting to agents, his per-task token burn
went up an order of magnitude in the same months the per-token price came down. He can
translate Jevons for a mid-market CFO in one line — you budgeted the price per token, but
the thing that grew was your appetite — and give the two knobs that actually bend the
curve in his experience: routing cheap models to cheap tasks, and caching, not spend
alerts. (Distinct from this week's essay: that's inputs-vs-outputs measurement; this is
price-vs-volume forecasting.)

**Breakout potential.** High. "Prices fell by half, bills went up 6x" is a genuinely
counterintuitive stat pair from a named data source, and the $2,246-median-vs-$140,842-mean
gap is the kind of number people quote in their own posts. It flatters no vendor, which
is exactly Nick's lane.
