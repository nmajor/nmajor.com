# Archives / precedent desk — raw research notes
Date: 2026-08-04. Desk: history/precedent (cloud bill shock + FinOps, SaaS sprawl + rationalization, ERP overruns, offshoring curves).
Context essay (publishing today, do NOT retell): "Uber measured the bill. It couldn't measure the work." — read at
`app/src/content/essays/uber-measured-the-bill.md`; claim ledger at `research/uber-ai-budget/report.md`.
The essay covers: Uber's budget burn, leaderboards, the $1,500 cap, input-vs-output metrics, Macdonald quotes. It does NOT touch:
FinOps/Tokenomics Foundation, SaaS sprawl history, shadow AI stats, Zylo data, CSA note. Both pitches below stay off the essay's ground.

All fetches below performed 2026-08-04 with WebFetch/WebSearch unless noted.

---

## Thread 1 — Cloud bill shock -> FinOps discipline -> now the Tokenomics Foundation

### Precedent half (verified)

**FinOps Foundation founding, Feb 26, 2019.**
- Announced at the Cloud Economic Summit, San Francisco, with eight founding organizations incl. Atlassian, Autodesk, Spotify,
  Nationwide. Born out of Cloudability's quarterly Customer Advisory Board meetings — practitioners wanted a community beyond
  vendor tooling. (Search-verified across: finops.world/en/blog/why-was-finops-born/, techtarget.com/whatis/definition/FinOps,
  infracost.io/glossary/finops/.)
- Merged into the Linux Foundation; LF formed the FinOps Foundation project Aug 20, 2020.
  (linuxfoundation.org press release "FinOps Foundation Quickly Gains Industry-Wide Support...", techcrunch.com/2021/04/06/google-cloud-joins-the-finops-foundation/.)

**Cloud bill shock era color (verified, secondary retelling).**
- Adobe, fall 2018: a dev team racked up ~$80,000/day in unplanned Azure charges on a computing job; not discovered for over a
  week; bill snowballed to well over half a million dollars. Originally reported by The Information; retold by Teampay:
  https://www.teampay.co/blog/manage-cloud-costs and medium.com/@teampay/... . Same retellings note Pinterest, Capital One, Intuit
  were surprised by AWS bill jumps. USE WITH ATTRIBUTION ("a widely retold story from 2018", or "as The Information reported at
  the time"); we did not read the primary.

**Where the discipline got to (verified).**
- State of FinOps 2026 (6th annual survey): 1,192 practitioners representing more than $83B in annual cloud spend.
- 98% of FinOps teams now manage AI spend, up from 31% two years prior. Confirmed by Linux Foundation press release title:
  "State of FinOps Survey: AI Value and Skills Top Priorities as FinOps Matures Across Technology Value (98% Manage AI, 90% SaaS,
  64% Licensing, 48% Data Center)" — linuxfoundation.org/press/state-of-finops-survey-... Also finout.io recap, data.finops.org.
- Same report per multiple FinOps X recaps (usage.ai, securityboulevard.com 2026-06, innobu.com): 73% of companies exceeded their
  original AI cost plans; individual agentic projects overshot budgets by a factor of 2.4. (Attribute to the State of FinOps 2026
  report as recapped at FinOps X; the report itself is at data.finops.org.)
- Foundation mission updated from "Advancing the People who manage the Value of Cloud" to "...the Value of Technology."

### Current peg (last 90 days, verified by direct fetch)

**Tokenomics Foundation announced June 9, 2026, at FinOps X 2026 keynote (San Diego).**
- Fetched https://www.finops.org/insights/finops-x-2026-day-1-keynote/ (post dated June 9, 2026): FinOps Foundation + Linux
  Foundation "announced intent to form the Tokenomics Foundation" as "common ground for practitioner and supplier minds to create
  open standards for AI billing." Supporting orgs: Oracle, Google, Microsoft, Accenture, Booking.com, Flexera, IBM,
  JPMorganChase, KPMG, Nebius, Salesforce, SAP, ServiceNow. FinOps X merges into a broader "Tokenomicon" conference, San Diego,
  June 7-10, 2027.
- Fetched CIO Dive, June 12, 2026: https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/ — announced by
  J.R. Storment (FinOps Foundation exec director) in the June 9 keynote. Quote: "How do we measure all this? How do we standardize
  pricing... The Tokenomics Foundation will be a vendor-neutral home for solving these questions." Article frames it as mirroring
  the FinOps Foundation's cloud playbook; AI called "the biggest wave yet."
- Search-surfaced token trend numbers (from FinOps X recaps, NOT load-bearing): token consumption climbing from single-digit
  trillions to tens of trillions in under a year; price per million tokens down 67% early-2025 -> early-2026; consumption grows
  faster than price falls. Attribute to keynote recaps if used; prefer the foundation announcement + State of FinOps numbers.

### Timeline arithmetic for the pitch
- Cloud: bill shock stories widely reported 2018 (Adobe) -> foundation Feb 2019 -> LF absorption Aug 2020 -> standard corporate
  function by mid-2020s. Roughly 6-7 years from shock to mature discipline.
- Tokens: enterprise agentic-coding spend only became material in 2025; foundation-with-hyperscaler-backing announced June 2026.
  The same institutional playbook, started years earlier in the cycle. 31% -> 98% of FinOps teams managing AI spend in two years
  is the compression stat.

---

## Thread 2 — SaaS sprawl via expense reports -> rationalization wave -> AI apps re-running it

### Precedent half (verified)

**Sprawl peak and rationalization (Zylo + Productiv, search-verified).**
- Zylo 2024 SaaS Management Index (zylo.com/news/2024-saas-management-index/, PR Newswire 2024): average SaaS portfolio shrank
  from 291 to 269 apps (just under 8%), a 17% decrease from 2021 when portfolios averaged 300+ applications. Average $18M annually
  wasted in unused licenses (up 7% from 2022). 2023: customers cut spend ~11% by cancelling unnecessary subscriptions.
- Productiv: average portfolio 374 -> 342 apps year over year (productiv.com/blog/it-saas-statistics/), consolidation expected to
  continue. chiefmartec.com 2024-02: "SaaS tech stacks shrank from 2023 to 2024... but only by 8%."
- The mechanism of the sprawl: bottom-up adoption — employees expensing tools, departments buying on cards, procurement finding
  out later. (Zylo's whole category exists because of this; see 2026 index stats below on expense-report entry.)

**How AI apps are entering (Zylo 2026 index — backdrop data, published Jan 29, 2026, OUTSIDE the 90-day window; use as data, not peg).**
- Fetched https://zylo.com/news/2026-saas-management-index (dated Jan 29, 2026), based on 40M licenses / $75B spend under
  management + survey of 218 IT leaders:
  - ChatGPT is now the most-expensed application.
  - Expense-based SaaS spend +267% YoY. AI-native app spend +108% overall, +393% in orgs with 10,000+ employees.
  - 78% of IT leaders hit unexpected charges from consumption-based or AI pricing in last 12 months; 61% forced to cut projects
    due to unplanned SaaS cost increases.
  - Business units control 81% of SaaS spend; IT directly manages 15%. Organizations average 36% unused SaaS licenses.
  - Large enterprises add an average of 21 applications per month.
  - Quote (Ben Pippenger, Zylo co-founder): "AI is quickly becoming the most expensive 'invisible worker' in the organization."
- Note: this resolves the Uber report's §6.5 flag — we now have the Zylo stats direct from Zylo, not beri.net. (The "$1.2M
  average AI spend" figure from beri.net did NOT appear on Zylo's own page; do not use it.)
- Zylo launched a Consumption Cost Management product April 14, 2026 (fetched zylo.com/news/ai-consumption-cost-management-launch)
  integrating OpenAI, Anthropic, Databricks, Snowflake, Vertex AI. Quote (Matt DiAntonio, CPO): "Software no longer behaves like a
  fixed cost." April 14 is ~112 days back — just outside window; use as supporting evidence the tooling wave has started.

### Current peg (last 90 days, verified by direct fetch)

**CIO.com, June 30, 2026 — Stephanie Overby, "Beware AI costs hidden in plain sight."**
- Fetched https://www.cio.com/article/4189671/beware-ai-costs-hidden-in-plain-sight.html (pub date confirmed 2026-06-30):
  - IBM 2026 Tech Leader Study: 77% of technology leaders say AI adoption is already outpacing their governance capabilities.
  - Protiviti 2026 AI Pulse Survey: nearly two-thirds of companies report employees using AI without proper oversight; almost half
    of large enterprises lack full visibility into which AI tools employees are using.
  - Gartner (per article): some vendor solutions show ~30% AI cost uplift without upfront disclosure — AI fees arriving as renewal
    increases, not new line items.
  - Article's three hidden-cost channels: vendor-embedded AI, usage-based pricing, business-unit-led adoption on cards/dept budgets.

**Cloud Security Alliance research note, May 30, 2026 — "Shadow AI Apps: The Enterprise Attack Surface That Outpaces Monitoring."**
- Fetched https://labs.cloudsecurityalliance.org/research/csa-research-note-shadow-ai-apps-enterprise-20260530-csa-sty/
  (pub date confirmed 2026-05-30):
  - Eight in ten employees use AI tools not approved by their organizations; only 37% of enterprises have any AI governance framework.
  - 89% of enterprise AI usage is invisible to security teams; unauthorized AI tools stay active a median of 403 days before detection.
  - Explicitly frames shadow AI as an evolution of shadow IT, with a twist: shadow AI agents "actively initiate connections to
    external services, execute code, and may persist access credentials" — not passive like old shadow SaaS.
  - IBM 2025 breach data: elevated shadow-AI exposure = $670,000 additional breach costs, 247-day median identification.

**Dropped/unverified:** TechTimes 2026-06-15 piece on Verizon DBIR 2026 (45% of workers on unsanctioned tools, shadow AI
detections up 4x) — fetch returned HTTP 403; search-surfaced only. Do not make load-bearing without a direct DBIR fetch.

---

## Angles considered and rejected
- ERP overruns (Hershey/Lidl) -> agentic project 2.4x overruns: precedent is strong but the only in-window peg is the same
  FinOps X event as pitch 1 (State of FinOps 2026 report itself published ~Feb 2026, outside window). Two pitches on one
  conference is weak. Held for a future week — the 2.4x stat + Lidl's ~EUR 500M SAP write-off is a good pairing when a fresh
  enterprise-AI-implementation failure story lands.
- Offshoring cost-curve -> vendor repricing (Anthropic pricing change eff. 2026-06-15): too adjacent to the Uber essay's news
  cycle; risks reading as a retell.
- Cloud repatriation (Dropbox $75M saved, 37signals) -> token "repatriation" to open-weight models: no verified in-window peg found.
