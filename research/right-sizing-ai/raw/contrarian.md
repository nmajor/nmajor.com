# Contrarian desk: evidence AGAINST "pick the small second deployment first"

Raw, unedited working file. Compiled 2026-08-11 by the contrarian research desk for the
"scope retreat" essay. Every URL listed under VERIFIED was personally opened with WebFetch
and confirmed to say what is claimed. Everything else is explicitly flagged.

Thesis under attack: *companies deploy AI at the biggest, busiest, highest-volume version of a
job because that is where the ROI arithmetic looks best; it underperforms; they narrow it to a
smaller job where it works; therefore pick the smaller second deployment first.*

Supporting-side research already exists at `research/ai-scope-retreat/report.md`. This file is
the adversarial pass on it.

---

## HEADLINE FINDING 1: two of the essay's own five case studies did NOT stay narrowed

This is the single most important thing in this file. The existing report's open question was
"how many of these retreats later widened again... nobody seems to report the third deployment."
There IS a third deployment for two of the five, and in both cases it goes the wrong way for
the thesis.

### 1a. Taco Bell — the retreat was real, then it widened to ~890 restaurants

The report cites Taco Bell as "narrowed by traffic" on the basis of a Sept 2025 WSJ/NRN story
in which CDTO Dane Mathews said "busier restaurants, for instance, may benefit more from a
human taking orders." That happened. But the deployment did not shrink; it grew, and the same
executive is now on record celebrating scale.

**VERIFIED timeline:**
- 2023: Taco Bell partners with Omilia on drive-thru voice AI.
- July 2024: first expansion to 100+ restaurants across 13 states.
- Aug 2025: viral 18,000-water-cups order; Yum "slow[s] down and rethink[s] deployment."
- **July 2026: deployed to over 890 US restaurants across 38 states.**

Dane Mathews (Global Chief Digital & Technology Officer), quoted July 2026: *"Omilia's platform
has proven itself at scale in select U.S. restaurants, and continuing this strategic partnership
supports our long-term digital and tech strategy."* And: *"Omilia's Voice AI gives us the ability
to ease team members' workloads and provides them the flexibility to engage with customers in a
more meaningful way."*

Performance claims (NOTE: these come from **Omilia, the vendor**, not from Taco Bell or an
independent audit — do not present them as verified outcomes):
- transactions in voice-AI drive-thrus "on par with or faster than" traditional order-taking
- locations with voice AI report "higher employee retention"

VERIFIED SOURCES:
- Restaurant Dive, "Taco Bell revs up drive-thru AI deployment", 2026-07-07 —
  https://www.restaurantdive.com/news/taco-bell-omilia-drive-thru-ai-deployment/824564/
  (opened; confirms 890+ units / 38 states, the Mathews quote, and explicitly references the
  Aug 2025 slowdown and the 18,000 cups incident)
- Nation's Restaurant News, "Taco Bell's drive-thru voice AI expands to nearly 900 restaurants" —
  https://www.nrn.com/quick-service/taco-bell-s-drive-thru-voice-ai-expands-to-nearly-900-restaurants
  (opened; confirms the same numbers, the 2023/2024/2026 timeline, and the Omilia-sourced
  performance claims)

**Why this hurts the thesis:** the reading in the existing report is that the failure taught
Taco Bell where the tool belongs and it retreated there. The 2026 record says the failure caused
a pause, not a retreat, and the deployment then went 9x wider than the pre-failure footprint.
If the scope retreat is a permanent lesson, Taco Bell did not learn it.

### 1b. Amazon Just Walk Out — the "after scope" was closed entirely

The existing report's Amazon case is "narrowed by basket size": pulled from Amazon Fresh
large-format grocery, kept in Amazon Go convenience stores, Amazon has "strong conviction" it
belongs in smaller stores. That after-scope no longer exists.

**VERIFIED:** On 2026-01-27/28 Amazon announced it is closing **all 72** Amazon Go and Amazon
Fresh physical stores in the US (57 Fresh + 15 Go), with most shutting the first weekend of
February 2026 (California later, for labour-notice reasons). Amazon's own words: *"While we've
seen encouraging signals in our Amazon branded physical grocery stores, we haven't yet created a
truly distinctive customer experience with the right economic model needed for large scale
expansion."*

Just Walk Out itself survived — by going **wider**, not narrower. Amazon: *"our Amazon Go
locations served as innovation hubs where we developed Just Walk Out technology - now a scalable
checkout-free shopping operating in over 360 third-party locations across five countries."* Plus
40+ Amazon fulfilment-centre breakrooms live, "many more planned for 2026." Third-party
deployments grew by ~150 stores in 2025 alone. University of Pittsburgh confirmed its two
Just Walk Out sites keep running despite the Go closures.

VERIFIED SOURCES:
- GeekWire, 2026-01-28 —
  https://www.geekwire.com/2026/amazon-closing-all-amazon-fresh-and-go-stores-to-focus-on-whole-foods-and-grocery-delivery/
  (opened; 72 stores = 57 Fresh + 15 Go, the Amazon quote, the 360 third-party figure, 40+ FCs)
- Amazon's own newsroom —
  https://www.aboutamazon.com/news/company-news/amazon-fresh-go-stores-closing-expanding-whole-foods
  (opened; confirms 360 third-party locations and the FC breakroom expansion; does NOT state a
  store count)
- Retail Technology Innovation Hub, 2026-01-27 —
  https://retailtechinnovationhub.com/home/2026/1/27/just-walk-out-technology-lives-on-as-amazon-calls-time-on-go-and-fresh-physical-stores-push
  (opened; carries the full Amazon statement)
- University of Pittsburgh, utimes, 2026-01-29 —
  https://www.utimes.pitt.edu/news/closing-amazon-go-stores
  (opened; confirms licensed JWO sites continue after the Go closures)

**Why this hurts the thesis:** the essay's cleanest "after scope" — small-format convenience —
was abandoned by Amazon within two years. What actually survived was the *licensing* model, which
is a much wider deployment surface than either the original Fresh rollout or the Go retreat. The
narrowed version was not the durable one. The tech-as-product version was.

### 1c. McDonald's — the narrow re-entry is already being scaffolded to widen

Existing report frames McDonald's as "killed, then re-entered narrower." Confirmed as far as it
goes: ArchIQ / "Archy" is testing at five US locations as of June 2026. But the underlying Google
Cloud partnership (announced 2023-12-06) is explicitly about pushing Google Distributed Cloud
hardware to *thousands* of restaurants for local AI processing across drive-thru and kitchen.
The narrow test is a staging post inside a pre-committed wide programme, not a chosen endpoint.

PARTIALLY VERIFIED — treat with care:
- Washington Times, 2026-06-05, "McDonald's to test AI drive-thru system at five locations" —
  https://www.washingtontimes.com/news/2026/jun/5/mcdonalds-test-ai-drive-thru-system-five-locations/
  (surfaced in search; NOT individually opened — the five-location figure is corroborated across
  multiple outlets but I did not fetch this one. Do not quote it as verified.)
- **REJECTED:** blog.brightcoding.dev claim of "120 test locations", "92% accuracy on accented
  speech", "78 seconds to 52 seconds". This is an SEO content farm. The numbers appear nowhere in
  primary reporting. **Do not use.**

---

## HEADLINE FINDING 2: the strongest sourced argument that narrow deployments destroy the economics

This is the counter-argument in its most defensible form, and it comes from Forrester and
McKinsey, not from vendors.

### 2a. Forrester: narrow efficiency gains cannot justify production

Forrester, "The State Of Agentic AI In 2026: Companies Are Chasing, Few Are Catching",
blog dated 2026-06-03 (report RES196198; The Register covered it 2026-06-05).

**VERIFIED direct quotes from the Forrester blog:**
- *"Three-quarters of enterprise leaders tell us they're adopting agentic AI. Only a small
  minority have it running in meaningful production beyond 'agentish' chatbots, and true scaled
  multiagent systems are rarer still."*
- **The money line:** *"ROI uncertainty traps enterprise ambition in pilot mode because most
  companies can't justify production beyond narrow efficiency gains."*
- *"More than half of enterprises report it [agentic sprawl] even after adopting the NIST AI RMF
  because a policy document can't control an autonomous, tool-invoking system."*
- 49% of security decision-makers named agentic AI as a concern (Forrester Security Survey 2026).

The Register's summary adds: *"companies are expanding their agentic ambitions while largely
failing to scale them"* and *"Until companies tie agent autonomy to measurable changes in how
work gets done, agentic AI will remain stuck in proof-of-concept purgatory."*

**METHODOLOGY CAVEAT (important):** the public Forrester blog and the Register write-up do NOT
disclose sample size, respondent criteria, or data-collection method. The full numbers sit behind
the paid report. Cite the quote, not a precision the source doesn't offer.

VERIFIED SOURCES:
- https://www.forrester.com/blogs/the-state-of-agentic-ai-in-2026-companies-are-chasing-few-are-catching/ (opened)
- https://www.theregister.com/ai-and-ml/2026/06/05/agentic_ai_hype_races_ahead_as_enterprises_remain_stuck_in_pilot_mode/5251711 (opened)

**Why this is the sharpest counter:** it is the exact inverse of the essay. The essay says the
narrow deployment is the one that works, so start there. Forrester says the narrow deployment is
precisely the one that can't clear the ROI bar for productionisation — so it stalls, and the
stall is what kills it. Both can be true at once. The narrow deployment works and is not worth
keeping.

### 2b. McKinsey: value comes from redesigning the workflow, which a narrow scope by definition doesn't do

McKinsey State of AI (2025 wave), as reported by CX Today (I could not fetch mckinsey.com
directly — three timeouts and a 403; see REJECTED/BLOCKED below):
- 88% of respondents say their organisation regularly uses AI in at least one business function.
- **Nearly two-thirds have not yet begun scaling AI across the enterprise.**
- Only ~6% qualify as "AI high performers" (>5% of EBIT attributed to AI).
- **High performers are 2.8x more likely to report fundamental workflow redesign: 55% vs 20%.**
- 51% experienced at least one negative consequence; inaccuracy most common at 30%.

McKinsey, "Seizing the agentic AI advantage" (June 2025), per search-result excerpts:
- *"More than 80 percent of companies still report no material contribution to earnings from
  their gen AI initiatives"* — the "gen AI paradox."
- ~90% of the more transformative *vertical* (function-specific) use cases remain stuck in pilot,
  while *horizontal* copilots scaled easily but moved little to the bottom line.
- The recommendation is explicitly against scattered use cases: CEOs should treat AI *"not as a
  series of scattered pilots but as focused, end-to-end reinvention efforts"* — pick a few
  business domains and pull every lever, reimagining workflows and rewiring the operating model.

**METHODOLOGY / SOURCING CAVEAT:** the CX Today figures are second-hand. I confirmed the CX Today
page says these things; I did NOT confirm them against McKinsey's own PDF, which would not load.
The "Seizing the agentic AI advantage" quotes came from search-result excerpts, not a fetched
page. **If Nick uses any of these numbers, they need one more verification pass against
mckinsey.com directly.** I am flagging this rather than laundering it.

Sources:
- https://www.cxtoday.com/ai-automation-in-cx/mckinseys-state-of-ai-the-scaling-gap-is-now-cxs-problem/ (opened — this is the source I verified)
- https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage (NOT opened — two 60s timeouts)
- https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/seizing%20the%20agentic%20ai%20advantage/seizing-the-agentic-ai-advantage.pdf (NOT opened — timeout)

**The argument in plain form:** the 2.8x workflow-redesign gap says value shows up when you
change how the work is done. A deliberately small, low-blast-radius first deployment — the one
the essay recommends — is chosen precisely *because* it doesn't require changing how the work is
done. You get the safe deployment and none of the redesign, which is where the money was.

### 2c. Walmart and KPMG: many narrow deployments produce agent sprawl, and the fix is consolidation

Walmart is the cleanest named-company counter-example to "narrow first." It ran the narrow-first
playbook, got hundreds of individual agents, and explicitly reversed it.

**VERIFIED:** Walmart Global Tech blog, "All in on Agents", 2025-07-24, by Suresh Kumar (EVP,
Global CTO and CDO). Kumar: *"multiple agents — even if each one is useful — can quickly become
overwhelming and confusing."* Walmart's response was to build *"a unified, company-wide
framework"* and collapse everything into four "super agents": Sparky (customers), an Associate
agent (its 2.5m employees), Marty (suppliers/sellers/advertisers), and a Developer agent.

CAVEAT: Walmart's own post does NOT state how many agents existed before consolidation. The
"200+ scattered AI bots" and "hundreds of agents" figures circulating in secondary coverage are
**not sourced to Walmart** and should not be quoted as fact.

VERIFIED SOURCE:
- https://tech.walmart.com/content/walmart-global-tech/en_us/blog/post/all-in-on-agents.html (opened)

KPMG, "From Agent Sprawl to Enterprise Outcomes" (2026), makes the same argument prescriptively.
**VERIFIED quotes:** *"Small and governed beats many and disconnected, every time."* KPMG's Q1
2026 AI Pulse found "more than half of the organizations are now running AI agents in
production." Its recommendation is a *"small, governed and trusted set of Superagents designed to
deliver end-to-end outcomes"* rather than "building more agents."
- https://kpmg.com/us/en/articles/2026/from-agent-sprawl-to-enterprise-outcomes.html (opened)
- CAVEAT: KPMG does not publish the AI Pulse sample size on this page.

Also verified on this page and worth noting as a *secondary* citation only: KPMG cites Gartner
projecting the average global Fortune 500 enterprise will run **over 150,000 AI agents** within
two years. That is a Gartner forecast, not an observation. Treat accordingly.

### 2d. Deloitte explicitly argues against picking one or two narrow use cases

Deloitte Middle East, "The Big Bang AI strategy", ME PoV Spring 2026, by Dr Aleksei Minin
(Director of AI & Data, Deloitte AI Institute Middle East).

**VERIFIED quote:** *"Rather than selecting one or two high-visibility use cases and pursuing
perfection, the winning model distributes resources across a portfolio of experiments"* — with
disciplined governance, defined kill criteria, and rapid iteration.

- https://www.deloitte.com/middle-east/en/our-thinking/mepov-magazine/the-ai-advantage-shaping-what-comes-next/the-big-bang-ai-strategy.html (opened)

CAVEAT: this is a magazine think-piece, not research. It cites the MIT NANDA 95% figure
uncritically (see the misattribution section below), which weakens it. Useful as evidence that
serious firms argue the opposite of the essay's thesis; not useful as evidence that they are right.

---

## HEADLINE FINDING 3: companies that went wide and it worked (verified)

### 3a. JPMorganChase — the strongest counter-case for a traditional (non-tech) company

This one is genuinely hard for the thesis, because it is a ~200-year-old bank that deliberately
did NOT pick a narrow high-value job. It built a self-service platform and handed it to everyone.

**VERIFIED (American Banker, 2025-05-22/23):**
- LLM Suite was built in-house and deployed **firmwide as a self-service capability**, not as a
  narrow pilot. Article's framing: the bank "democratized access."
- 200,000 employees using it as of mid-May 2025; target of all ~250,000.
- **Measured result: one to two hours of productivity gained per employee per week.** Teresa
  Heitsenrether, chief data and analytics officer: *"We're seeing people gaining an hour or two
  hours of productivity a week, which is really quite significant."*
- Derek Waldron (chief analytics officer) on the cost model: *"If an employee doesn't use it, the
  bank does not pay for it"* — compute is variable, no per-seat licence. This is the mechanism
  that makes going wide cheap, and it is the direct rebuttal to the essay's ROI-arithmetic claim.
- Won American Banker's 2025 Innovation of the Year (Generative AI).
- https://www.americanbanker.com/news/how-jpmorganchase-democratized-employee-access-to-gen-ai (opened)

Corroborating but NOT individually verified (search-result level only): 230,000+ employees
globally, 450+ AI use cases in production, $1.5bn attributed to fraud detection, plans for 1,000
use cases by end of 2026, $18bn annual tech budget. **Do not quote these without a further pass.**

**The honest read:** "1-2 hours per employee per week" is self-reported by the vendor of the
programme (the bank), not independently audited, and productivity-hours are the softest possible
ROI currency. But it is a named executive, on the record, at a traditional institution, about a
deployment that was wide from day one.

### 3b. Cisco — 90,000 employees, all at once, no narrow pilot reported

**VERIFIED (Fortune, 2026-07-01):** Cisco is deploying personalised AI agents to all ~90,000
employees starting end of July 2026 (start of its new fiscal year). CFO Mark Patterson: *"AI is
the most significant technology transition that we've seen in probably our lifetime."* On cost
control: *"It's not going to burn a whole bunch of tokens with frontier models"* — the system
routes tasks to the cheapest adequate model, with much infrastructure on-prem.

**CRITICAL CAVEATS, and they are large:**
- The Fortune article contains **no mention of a narrow pilot phase** preceding the rollout — but
  absence of mention is not evidence of absence.
- **There are no measured results.** The rollout had barely started when this was written. This
  is an announcement, not an outcome.
- Cisco is a **technology company**, so it is off-ICP for Nick's audience of traditional
  non-tech operators.
- https://fortune.com/2026/07/01/cisco-cfo-ai-agents-finance-employees-mark-patterson/ (opened)

### 3c. Moderna — company-wide from the start, with adoption numbers

**VERIFIED (Constellation Research, 2024-04-24):**
- 750 custom GPTs built across the company in roughly two months.
- ~120 ChatGPT Enterprise conversations per user per week.
- 40% of weekly active users had built at least one GPT.
- Legal department reached **100% adoption**.
- Deployed across legal, research, manufacturing and commercial functions.
- Brice Challamel (Head of AI Products and Platforms) confirms they evaluated mChat, Copilot and
  ChatGPT Enterprise before choosing.
- https://www.constellationr.com/insights/news/moderna-uses-openais-chatgpt-enterprise-scale-750-gpts (opened)

**CAVEATS:** every one of these is an *adoption* metric, not a business-outcome metric. Nobody
has published Moderna's P&L impact. The case is also two years old now and Moderna's headcount
and fortunes have changed substantially since. Weakest of the three wide-deployment cases.

### 3d. Klarna — the reversal the essay's genre loves is materially misread

Widely cited as the canonical AI-retreat story: replaced 700 agents, walked it back, rehired
humans. That is half the story.

Per Klarna's Q3 2025 reporting, the AI assistant was doing the work of **853 agents** — up from
700 at launch — with ~$60m in annualised cost improvement. Siemiatkowski on the Q3 2025 call:
*"We continue to see very demonstrable value from Klarna's AI assistant."* The reversal was a
*rebalancing* (humans on premium and complex cases, AI on routine), not a retreat, and the AI
footprint grew through it.

**VERIFICATION STATUS: search-result level only.** I did not open Klarna's investor page or the
Yahoo/CX Dive pieces. Candidate URLs:
- https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Delivers-Record-breaking-Q3-as-AI-Powered-Digital-Bank-903-Million-in-Revenue-and-4-Million-Card-Sign-ups-in-4-Months-9d1155634/default.aspx
- https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/805987/
**Do not use the 853 / $60m numbers in the essay without opening at least one of these.**

Also noted: the $60m figure is reported as cost *avoidance during growth*, not layoff savings,
and Klarna's customer-service and operations costs were still up year over year. That nuance is
routinely dropped in the retelling.

---

## HEADLINE FINDING 4: statistics that are misattributed or oversold (do not repeat these)

### 4a. "95% of AI pilots fail" — MIT NANDA. The most-abused statistic in this space.

**What it actually is:** "The GenAI Divide: State of AI in Business 2025", July 2025, from
Project NANDA at the MIT Media Lab. Authors: Aditya Challapally, Chris Pease, Ramesh Raskar,
Pradyumna Chari.

**The methodology is not what people think, and the report itself is inconsistent about it.**
Two different descriptions circulate, both traceable to the report:
- Version A (the abstract, and what The Register reported after opening it): *"52 structured
  interviews with enterprise leaders and... analysis of more than 300 public AI initiatives and
  announcements, and a survey of 153 business professionals"* — with the 153 collected across
  four industry conferences.
- Version B (what Fortune reported): *"150 interviews with leaders, a survey of 350 employees,
  and an analysis of 300 public AI deployments."*

Those are not the same numbers. **The discrepancy is itself the story.** I verified both
renderings by opening Fortune and The Register. I could not open the primary PDF — the MIT-hosted
URL 302s to a group overview page and the mlq.ai mirror 403s.

**What it actually measured:** not "failure." It measured whether a pilot produced *measurable
P&L impact within about six months*. That excludes efficiency gains, cost avoidance, churn
reduction, and anything with a longer payback. The report's own framing calls its findings
directionally accurate.

**Where it does NOT support the essay's genre:** the report found impact was material in only two
sectors (technology, and media & telecom); that back-office support and admin processing saw
5-20% impact; and that *generic* tools like ChatGPT outperformed bespoke enterprise builds. The
"95%" is about custom, embedded, workflow-specific GenAI failing a hard six-month P&L test —
not an across-the-board AI failure rate.

**Conflict of interest:** NANDA is an MIT Media Lab project commercialising agentic AI
infrastructure, and the report's conclusion promotes its own approach. Media Lab corporate
memberships are reported at ~$250k. This is disclosed by critics, not by the report.

VERIFIED SOURCES:
- Fortune, 2025-08-18 — https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/ (opened)
- The Register, 2025-08-18 — https://www.theregister.com/2025/08/18/generative_ai_zero_return_95_percent/ (opened; this is the more careful of the two)
- BLOCKED: https://nanda.media.mit.edu/ai_report_2025.pdf (302 → group page); https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf (403)

**VERDICT: Nick should not cite "95% of AI pilots fail" in any form.** If he needs it, he should
cite it as "a July 2025 MIT Media Lab working paper found 95% of custom GenAI pilots showed no
measurable P&L impact inside six months" and note the six-month window.

### 4b. "For every 33 AI POCs, only 4 reach production" — commonly misattributed to Gartner

It is **IDC**, not Gartner — from IDC's *AI CIO Playbook 2025*, produced with Lenovo. A 12%
success rate. Widely reposted as a Gartner finding. I did not open the IDC report itself
(paywalled/gated); this attribution correction comes from cross-referencing multiple secondary
sources. **Flagged as attribution-corrected but not primary-verified.**

Related: "88% of AI agent POCs never reach broad production" is also IDC. "89% of AI agent pilots
fail to reach production" is attributed to Gartner in some 2026 write-ups. These three numbers
are frequently blended into each other. Do not treat them as independent confirmations of one
another — they may all trace to the same one or two studies.

### 4c. "80% of AI projects fail" — RAND. It is not RAND's own measurement.

RAND, *The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed*
(RR-A2680-1), by James Ryseff, Brandon De Bruhl and Sydne J. Newberry.
- The study is **qualitative**: 65 interviews with data scientists and engineers with 5+ years'
  experience.
- RAND's own phrasing is *"by some estimates, more than 80 percent of AI projects fail"* — i.e.
  **RAND is citing other people's estimates in its framing, not measuring the rate itself.**
- RAND's actual contribution is the five root causes: misaligned purpose, inadequate data,
  integration difficulty, chasing technology over outcomes, fading executive sponsorship.
- Primary: https://www.rand.org/pubs/research_reports/RRA2680-1.html and
  https://www.rand.org/content/dam/rand/pubs/research_reports/RRA2600/RRA2680-1/RAND_RRA2680-1.pdf
  (NOT opened — attribution correction is from search-level cross-referencing; flag as such)

**VERDICT: "RAND found 80% of AI projects fail" is a misattribution.** RAND repeated an existing
estimate. Nick should not use it.

### 4d. "42% of companies abandoned most AI initiatives in 2025" — S&P Global. Real, but date-shifted.

**VERIFIED (CIO Dive, published 2025-03-14, reporter Lindsey Wilkinson):**
- 42% of companies abandoned most of their AI initiatives, up from 17% the prior year.
- The average organisation scrapped **46% of AI proof-of-concepts before production**.
- Source is S&P Global Market Intelligence / 451 Research, *Voice of the Enterprise: AI & Machine
  Learning, Use Cases 2025*.
- Sample: 1,000+ respondents, North America and Europe.
- Top cited obstacles: cost, data privacy, security risk.
- https://www.ciodive.com/news/AI-project-fail-data-SPGlobal/742590/ (opened)

**The date problem:** this was published in **March 2025**, so it is the 2025 *survey wave*
fielded around late 2024. Secondary sources routinely render it as "42% of companies abandoned
AI in 2025," implying a full-year-2025 observation. It isn't. Flag the wave, not the year.

**Note this cuts BOTH ways.** "46% of POCs scrapped before production" is the single best sourced
number for "small pilots die." It is also from the same instrument as the 42%, so it is one
survey, not two.

### 4e. Numbers I found and am explicitly rejecting

- **"120 McDonald's test locations, 92% accuracy, 78→52 seconds"** — blog.brightcoding.dev. SEO
  content farm. Not in primary reporting. REJECT.
- **"Walmart consolidated 200+ scattered AI bots"** — appears in webpronews/Medium/Addepto.
  Not in Walmart's own post. REJECT as fact; usable only as "secondary reports suggest."
- **"1,600 AI agents per enterprise by end of 2026" (IBM)** and **"150,000 agents per Fortune 500
  firm by 2028" (Gartner)** — both are vendor/analyst *forecasts*, not observations. Do not
  present as data.
- **"Microsoft cancelled most internal Claude Code licences in its Experiences and Devices
  division, deadline 30 June 2026, $500-2,000/engineer/month"** — surfaced via
  buildmvpfast.com blog. Potentially a strong story (a *wide* deployment killed for unproveable
  ROI) but the only source I found is low-authority. NOT VERIFIED. Would need primary sourcing
  before use.
- **"78% run active AI agent pilots, just 14% reach production at meaningful scale (March 2026
  survey of 650 enterprise technology leaders)"** — surfaced via zenvanriel.com and creolestudios.
  Could not identify the underlying study. NOT VERIFIED.
- **"80.3% of enterprise AI projects fail to deliver promised business value (RAND 2025)"** — the
  decimal point is a tell that someone invented precision. See 4c. REJECT.
- Content farms encountered and avoided per brief: none of theapplied.co, insideraitrends.com,
  elladvisory.com, nssg.consulting, altstack.ai, moonpool.ai, bahrku.com were used.

---

## HEADLINE FINDING 5: the evidence that is NOT as bad as the doom narrative

Worth having, because Nick's brand is not overclaiming, and the "AI mostly fails" premise that
makes the scope-retreat essay feel obvious is itself contested by a bigger, better-run survey.

**Wharton / GBK Collective, *2025 AI Adoption Report: Gen AI Fast-Tracks Into the Enterprise*,
published 2025-10-29.** Third annual wave. Led by Jeremy Korst (GBK) with Wharton faculty
co-directors Stefano Puntoni and Prasanna Tambe. **Sample: 800+ US business leaders** across
finance, HR, IT and legal.

**VERIFIED findings:**
- **72%** have a structured process for tracking AI returns (productivity, profitability,
  throughput).
- **Three out of four** leaders evaluating gen AI investments report **positive returns so far**
  (CFO Dive renders this as 75%; Knowledge@Wharton as "three out of four").
- 88% expect to increase gen AI spending in the next 12 months; 62% expect 10%+ increases.
- 82% use gen AI at least weekly; 46% daily (up 17pp YoY).
- Four in five expect payback in about two to three years.
- 55% used gen AI across business functions.

Sources:
- https://knowledge.wharton.upenn.edu/special-report/2025-ai-adoption-report/ (opened)
- https://www.cfodive.com/news/72percent-business-leaders-use-roi-metrics-for-genai-spend/804188/ (opened)
- Full PDF at https://ai.wharton.upenn.edu/wp-content/uploads/2025/10/2025-Wharton-GBK-AI-Adoption-Report_Full-Report.pdf (fetched but returned unparseable binary; the two pages above are what I verified)

**CAVEAT that cuts against Wharton too:** "positive returns" is self-reported by executives with
budget attached to the answer, and the denominator is only those *evaluating* investments. It is
not an audit. But it is 800+ leaders with a stated methodology, versus 52 interviews and 153
conference-floor surveys for the 95% figure. If Nick is going to lean on one, the sample argues
for Wharton.

**Note the report does NOT distinguish enterprise-wide from departmental rollouts.** It cannot be
used either for or against the scope thesis directly.

---

## HEADLINE FINDING 6: the practitioner layer (last30days) — thin, and honestly so

I ran the `last30days` engine twice.

**Run 1 failed methodologically.** The engine researched an entirely unrelated topic ("AI
liability regulation narrowing what AI is allowed to do") despite being handed my topic string
and query plan. Output discarded. Saved at
`~/Documents/Last30Days/ai-liability-regulation-narrowing-what-ai-is-allowed-to-do-raw-v3.md`.

**Run 2 ran on the right topic** ("enterprise AI pilots that never reached production", window
2026-07-12 to 2026-08-11) but returned only **16 items across 3 sources** (5 web, 6 Reddit,
5 X). Most of the top-ranked items were vendor/agency blog posts recycling the MIT 95% figure
(presidio.com, codelevate.com, densitylabs.io, unifyapps.com) — i.e. the content-farm layer, not
practitioner argument. X returned almost nothing on-topic. Reddit's highest-engagement thread was
"Amazon Is Gutting Its AI Division After Sustained Failure" (r/ArtificialInteligence, 548pts,
70cmt, 2026-08-10) which I could not fetch — Reddit blocks the fetcher.

**One genuinely useful lead came out of it:** an X post flagging *"Cisco Is Giving AI Agents to
All 90,000 Employees"* (@ElymentGroup, 2026-08-10), which is what led me to the verified Fortune
piece in 3b.

**Honest conclusion on this leg: there is no strong practitioner-community argument in the last
30 days on wide-vs-narrow AI deployment scope.** The conversation in that window is about
liability, insurance exclusions, and healthcare AI regulation, not deployment scope. I am not
going to manufacture a practitioner consensus that isn't there.

The one adjacent practitioner-flavoured signal that IS real is the agent-sprawl discourse
(SAP News Center Aug 2026, The Register on Google Apr 2026, KPMG 2026) — and that discourse runs
*against* the narrow-first thesis, because it is a complaint about too many small deployments.

---

## Loose ends worth a later sweep

- **Kinney Drugs (the report's freshest case) has no follow-up yet.** Confirmed at search level
  that the narrowing is as described: back to touch-tone for inbound calls, Burt retained for
  opt-in outbound refill texts. Multiple outlets now carry it (WCAX 2026-08-07, KWQC 2026-08-08,
  VTDigger 2026-08-10, North County Now, Valley News 2026-08-02, plus the original VTDigger
  investigation 2026-07-29 and a Boing Boing pickup 2026-07-30) — so it is better sourced than
  the existing report's "single local outlet" caveat suggests. Whether the narrowed version
  survives is unknowable four days in.
- **CBA (Commonwealth Bank)** is a two-sided case worth its own look: it reversed 45 customer
  service redundancies after a voice-bot deployment, admitting *"CBA's initial assessment that the
  45 roles … were not required did not adequately consider all relevant business considerations"*
  (iTnews, opened) — while its chat platform reportedly resolved ~9 in 10 customer conversations
  without agent input by May 2026 (search-level only, unverified). Same bank, same year, retreat
  and expansion simultaneously.
- **The third deployment for the remaining three cases** (J&J, Amazon retail engineering, Kinney)
  is still unreported.
- **Microsoft / Claude Code licence cancellation** needs primary sourcing. If real, it is the
  best "wide deployment killed on unproveable ROI" story available.
