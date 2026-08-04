# Main street / mid-market beat — raw research notes (unedited)

Collected 2026-08-04 by the main-street beat journalist persona. Week of the "Uber
measured the bill" essay (publishes today). Mandate: adjacent fresh stories, named
and verifiable, NOT a retell of the Uber essay.

## Context checked first

- `research/case-studies/index.md` — 23 entries. Already covered: UnitedHealth, Mr. Cooper,
  Microsoft/Claude Code/Copilot, Commerzbank, FranklinCovey, Brivo, Grupo Tecnon, AIG,
  Williams, Bradesco, Baker Hughes, Philips, Generali, Allianz, Warehouse Group, Netlify,
  Imobisoft, Atonom, Peninsula School District, Headway, Herizon, Pinecone, Intercom-triage.
  Thin spots flagged in index: failure cases, build-vs-buy, manufacturing/logistics,
  independently-verified numbers.
- `research/uber-ai-budget/report.md` — the essay's claim ledger. Key: The Information is
  the paywalled primary; budget = "2026 budget for AI coding tools"; thesis = inputs
  measured, outputs not.
- Past essays to avoid: build-versus-buy-broke, the-case-study-was-an-ad,
  fix-the-process-first, the-bottleneck-moved, banning-ai-is-the-risk,
  everyone-uses-ai-not-everyone-can-say-so, your-ai-made-an-offer, a-machine-cant-answer-for-it.

## Lead 1 — Ford rehires ~350 veteran engineers after AI quality control fell short (VERIFIED)

Fetched: https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/
(pub 2026-06-28)
- Ford rehired 350 veteran "gray beard" engineers (some former Ford employees, some from
  suppliers) in June 2026 after automated AI quality-control systems failed to deliver
  desired quality levels in manufacturing/inspection.
- Charles Poon, VP of Vehicle Hardware Engineering: "Mistakenly we thought that by just
  introducing artificial intelligence... that would produce a high-quality product."
- J.D. Power 2026 U.S. Initial Quality Study (released that week): Ford top mainstream
  brand — search corroboration says first time since 2010, study dated June 25, 2026.
- CEO Jim Farley: lowered warranty and recall costs contributed "literally hundreds and
  hundreds of millions of dollars of a tailwind for Ford on cost."
- Key nuance: rehired engineers are training younger staff and reprogramming the AI tools
  — Ford did NOT rip out the automation.

Fetched: https://www.forbes.com/sites/rachelwells/2026/07/26/ai-layoffs-are-backfiring-did-employers-bet-too-much-on-the-ai-boom/
(pub 2026-07-26)
- Ford rehired "more than 300" (June 2026) — minor count discrepancy vs 350 elsewhere;
  use "~350" per TechCrunch/Forbes-Toscano/AmericanBazaar, or "more than 300" to be safe.
- Robert Half: over 30% of U.S. hiring managers who eliminated positions after AI later
  reinstated similar roles.
- Gartner (Oct 2025 survey of 320+ customer-service leaders): only 20% actually reduced
  agent staffing due to AI; prediction that 50% of companies cutting CS staff for AI will
  rehire by 2027.
- Klarna: paused hiring claiming AI = 700 agents, later rebuilt human support (known/old).
- Commonwealth Bank of Australia: cut ~45 customer-service roles for an AI voice bot,
  reversed after call volumes/quality problems (originally 2025; cited in the July wave).
- Workhuman CEO Eric Mosley (May 2026): "Employers are betting on the promise of AI."

Fetched: https://americanbazaaronline.com/2026/07/01/companies-reverse-ai-driven-layoffs-as-human-workers-return-483875/
(pub 2026-07-01)
- Ford "rehired and promoted 350+ experienced engineers."
- Orgvue (workforce-planning firm): 39% of business leaders laid off employees because of
  AI; 55% later concluded it was a mistake.
- Robert Half: 32% of U.S. hiring managers who eliminated a position primarily because of
  AI later rehired for the same or a similar role.
- IBM: AI handled ~94% of routine HR requests; the ~6% it couldn't exposed limits; IBM
  plans to triple U.S. entry-level hiring in 2026.
- Oracle, Meta, Intuit continued AI-related layoffs in 2026 (contrast).

Other coverage seen (not all fetched): CNBC 2026-07-01 (403 on fetch), qz.com (403),
Fast Company "great AI rehire", Fox Business, Yahoo Finance, cbtnews.com,
Forbes/Joe Toscano 2026-06-30 "Ford Hiring 350 Engineers After AI Failed".

## Lead 2 — Mavvrik/Benchmarkit 2026 State of AI Cost Governance Report (VERIFIED)

Fetched: https://www.mavvrik.ai/blog/blog-ai-cost-governance-report-2026/ (first party,
pub 2026-07-29)
- Survey: 396 organizations, April–May 2026, six sectors (AI-native, B2B SaaS, financial
  services, AI infrastructure, manufacturing, retail). Partners: Benchmarkit / Ray Rike.
- 98% track AI infrastructure costs; 95% assign formal AI budgets.
- Only 11% forecast AI spend within ±10%.
- 62% say an unexpected AI cost materially altered a business decision in the past year.
- 81% report moderate-to-high gross-margin impact from AI costs.
- 70% have not implemented COGS-based AI cost tracking.
- 98% run agentic workloads; only 36% include them in cost reporting.
- Top surprise-cost sources: data platform overages 47%, LLM token costs 43%.
- 98% use AI coding tools, avg 2.4 per org; 39% say developer-tool costs exceeded
  expectations.
- 2025 edition comparison: 85% missed forecasts by >10%; visibility weak.

Fetched: https://www.intelligence360.news/ai-bill-shock-hits-the-boardroom-40-of-companies-escalated-surprise-ai-costs-1-in-4-cancelled-a-program/
(pub 2026-07-29, press coverage of the same report)
- Verbatim: "62% of organizations say an unexpected AI cost materially altered a business
  decision this past year: 40% required board-level escalation, 33% implemented emergency
  spending freezes, and 25% delayed or cancelled an AI initiative outright."
- "81% unable to fully account for AI costs."
- Quote: Sundeep Goel, CEO of Mavvrik: "AI is fundamentally changing how infrastructure is
  consumed and how costs accumulate."
- No named surveyed companies.

Other coverage: channelinsider.com (nav-only on fetch), citybiz.co (403). Mavvrik report
landing page: https://www.mavvrik.ai/state-of-ai-cost-governance-report/

## Leads chased and dropped

- San Francisco Copilot rollout (30k employees, 2,000-employee pilot, "up to 5 hrs/week
  saved," 1M+ interactions Jul 2025–Apr 2026): announced early 2025, >90 days old, and the
  headline metric is a self-reported input — too close to the Uber essay's territory anyway.
  Sources: sf.gov press release, govtech.com, datainnovation.org (June 2026).
- Dearborn MI (70% of city service calls resolved by multilingual chatbot) + Maryland
  ($400k savings) + Connecticut (Google SecOps): all from a Google Cloud public-sector
  newsletter, March 2026 — vendor-reported case studies, and Nick already wrote
  "the-case-study-was-an-ad." Dropped.
- Eureka County School District (NV) approved Copilot Education adoption July 7, 2026 —
  fresh but no numbers, no stakes yet. Peninsula SD already covers the district beat.
- Trucking/logistics July 2026: Michelin + Lytx July 14 fleet-AI product launches (vendor
  product news, not adopter stories); Unilog.SC July 29 research report ("1 in 7 service
  truck dispatches never needed to happen") — interesting but vendor research, unnamed
  adopters. Parked.
- C.H. Robinson 3M shipping tasks by gen-AI agents — older, vendor-told, parked.
- Q2 2026 earnings sweep: nothing clean surfaced for a named traditional adopter beyond
  UnitedHealth (already in the case-study library).

## Case-study library candidates coming out of this

- ford-ai-quality-rehire (fail + proc; xchk: TechCrunch + Forbes + AmericanBazaar; primary
  quotes from Poon/Farley) — fills the flagged "failure" and "manufacturing" thin spots.
- mavvrik-cost-governance-2026 (cost; survey not company — maybe belongs in a stats file
  rather than the case-study index).
