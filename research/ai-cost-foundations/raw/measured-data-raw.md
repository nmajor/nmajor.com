# Raw fetch notes — measured-data audit for "AI costs more than a developer"

Fetched 2026-08-04 by foundations-auditor agent. All quotes verbatim from WebFetch/WebSearch/curl output.
Companion to `research/ai-cost-discourse/` (report read first; its raw at `../ai-cost-discourse/raw/`).

---

## 1. Ramp — ramp.com/blog/ai-token-cost-for-businesses — fetched OK (WebFetch, 2026-08-04)

Methodology (as stated): "Ramp processes AI vendor payments on behalf of thousands of businesses"
(card + bill pay to Anthropic, OpenAI, etc.); figures are "observed effective rates from our most
recent data" (April 2026). No sample-size number on the blog page itself; AI Index elsewhere cites 70k+ businesses.

Growth: "token usage among businesses with connected AI grew 1,001%" (Jan 2025 → Apr 2026); total
spend +497% same window. (Usage grew ~2x faster than spend — unit costs falling.)

Company monthly AI spend distribution (April 2026):
- Median $2,246/mo; **mean $140,842/mo** (mean/median ratio ≈ 63x — extreme right skew)
- p75 $14,843; p90 $73,030; p95 $211,409; p99 $831,338
- 58% >$1k/mo; 31% >$10k/mo; 13% >$50k/mo; 9% >$100k/mo; 2% >$500k/mo

Per-employee-per-month (PEPM), April 2026, businesses with connected AI:
- Overall median **$46 PEPM**; middle 50% range $3–$352
- By model depth: 4–10 models $28; 11–25 models $130; 26+ models $442

Effective token prices observed ($/M tokens): GPT-5-nano $0.07; Claude Haiku 4.5 $0.40; Sonnet 4.6
$0.62; Opus 4.6 $1.00; GPT-5.5 $1.42; GPT-4o $2.31. Premium models = 45.8% of tokens, 55.9% of cost
(premium cost share up from 5.7% in June 2025).

Ramp's own framing (verbatim): "If your AI spend is near the median ($2,246/month), you're in
early-adoption territory, and AI is likely a productivity tool for some teams, but not yet a COGS
line item." Page does NOT mention developer salaries or coding tools specifically.

### DISCREPANCY vs research/ai-cost-discourse figures
The discourse report/raw cite Ramp "median company $11.38/employee/mo; top 1% $7,450/employee/mo"
(sourced to ramp.com/data/ai-index in `../ai-cost-discourse/raw/web-notes-2026-08-04.md` L85-88).
Re-fetched ramp.com/data/ai-index today (curl, 1.9MB HTML saved to scratchpad; grepped embedded JSON):
- Strings "11.38" and "7450"/"7,450" occur **zero times** in the current page.
- Current embedded series (latest points): per-business `median_pepm` ≈ **$5.01**/employee/mo
  (all-AI-businesses series; a winsorized-weighted series ends ≈ $27.81); `p90_pepm` ≈ $101;
  `p99_pepm` ≈ $1,306; `top_1_percent_median_pepm` ≈ **$4,883**/employee/mo (series tail:
  1574, 1639, 1804, 2348, 1958, 2510, 2511, 2828, 3502, 3979, 4546, 4883 — steeply rising).
- So the $11.38/$7,450 pair is not reproducible from today's primary; nearest current equivalents
  are ~$5 median PEPM and ~$4,883 top-1% PEPM. Direction of every argument is unchanged (median
  is trivial, top-1% is payroll-scale-ish), but those two exact numbers should not be quoted as current.
  Annualized: median ~$60/employee/yr; blog's connected-AI median $46 PEPM ≈ $552/yr; top-1%
  ~$4,883/mo ≈ $58.6k/yr per employee.

Incentive read: Ramp is a spend-management vendor; being "the data source on runaway AI spend"
markets the platform. Yet its published medians are the strongest *deflationary* evidence in the
whole discourse — it publishes the skew honestly (median vs mean side by side) and explicitly calls
median-level AI spend "not yet a COGS line item."

---

## 2. modelplane.ai/blog/ai-coding-subsidy-multiple — fetched OK (WebFetch, 2026-08-04)

Title on HN: "Anthropic is subsidizing our AI coding at 13x. How long will it last?" — HN story
49021054, posted by **bassamtabbara** (Bassam Tabbara, Upbound founder/CEO — submitted his own post),
2026-07-23, **20 points, 2 comments** (minor thread; no substantive method critique on HN).

Method (verbatim fragments): 20 engineers at Upbound; June 2026 local Claude Code session logs;
"wrote a small script that reads those logs and totals the tokens by model, priced at Anthropic's
published rates." ">90% of it is Opus, mostly Opus 4.8." Reference price: **$125/mo Premium seat**
(not $200 Max as the tasking said — brief was wrong on both the price point and implicitly the plan).

Results: average multiple **13x**; median **~7x**; max **52x** (heaviest engineer, ~$6,470 of
API-list tokens in the month); range "under $10 to $6,470"; one engineer actually on direct API
billing "was averaging about $5,500 a month."

Author-stated caveats (verbatim): "All prices are at list, not at a rate a big customer negotiates";
figures are "floors, because the local logs had already pruned part of the month"; some engineers
on PTO part of June; "a large share of it is cache reads from long agentic sessions, which bill at
a tenth of the input price" (i.e., API-equivalent ≠ Anthropic's cost; cache reads already priced at
1/10 input — but Anthropic's *marginal cost* is lower still than list).

Method verdict: arithmetic is sound for what it claims (tokens × list price ÷ seat price) but the
"subsidy" is a *counterfactual* number: it prices flat-plan usage at a list rate nobody paying flat
plans faces, usage that exists partly *because* it feels free (no one burns 52x when metered — their
own direct-API engineer self-limited to ~$5,500). Both the 13x average (skewed by the 52x tail; median
7x) and the $125 denominator are honest per the post.

What modelplane is: "a control plane for AI models," "open source control plane for AI inference"
across "a fleet of GPU clusters, on cloud, neocloud, and on-premise" — i.e., a company whose product
is what you buy if you believe vendor flat plans are unsustainable and you should route/self-host
inference. The post's thesis ("how long will it last?") is the product pitch.

Two-way implication, on their own numbers: (a) today's flat-plan sticker price understates the
resource consumption of the heavy tail by ~7x (median) to 52x (max); (b) equally, the *transacted*
price of a heavy agentic engineer today is $125–200/mo — the subsidy is real spend relief that
vendors keep choosing amid falling unit prices (Ramp: >90% price decline since 2023; usage growing
2x faster than spend). At API list, their heaviest engineer = ~$78k/yr; average ≈ 13 × $125 × 12 ≈ $19.5k/yr.

---

## 3a. Mavvrik/Benchmarkit "2026 State of AI Cost Governance" — mavvrik.ai/blog/blog-ai-cost-governance-report-2026 — fetched OK

Method: "396 organizations surveyed across six sectors during April and May 2026," with Benchmarkit
(Ray Rike). Seven thematic areas incl. Agentic AI, Developer Tooling & the SDLC Gap.

Key stats (verbatim where quoted):
- Only 11% "forecast AI spend within ±10%" — DOWN from 15%-equivalent in 2025 ("85% missed by >10%").
- 62% say "unexpected AI costs materially altered a business decision in the past year";
  consequences: "forced repricing, executive or board-level escalation [40% per press coverage],
  emergency spending freezes [33%], retroactive budget reallocations, and delayed or cancelled
  initiatives [25%]" (percent splits via citybiz/channelinsider/intelligence360 coverage).
- Agentic: 98% run agentic workloads, only 36% include them in cost reporting (62-pt gap); "a single
  task can trigger multiple model calls, retrieval steps, data platform queries, tool actions,
  retries, and orchestration overhead."
- Dev tooling: 98% use AI coding tools (avg 2.4/org); only 42% include them in AI cost reporting;
  39% report costs exceeding expectations; developer AI "becoming a cost surface of its own."
- ~Half forced to reprice AI-powered products because operating costs exceeded expectations.

What it does NOT measure (confirmed on fetch): whether AI spend exceeds value or developer salaries —
no ROI-vs-outcome instrument anywhere; every headline stat is a forecast-variance or visibility stat.
"39% of orgs report coding-tool costs exceeding expectations" = 61% at-or-under, and "expectations"
were first-year guesses.

Incentive: Mavvrik sells AI cost governance/attribution. Report ends with a CTA ("Start With
Coverage, Not Another Dashboard") into their attribution product — the report is lead generation;
every finding is an argument for buying cost governance.

## 3b. FinOps Foundation "State of FinOps 2026" — data.finops.org — fetched OK

Method: 1,192 respondents, $83bn+ annual cloud spend under management, 6th annual; 47% large
enterprise / 33% enterprise / 20% SMB; EMEA 35% / NA 34% / APAC 16% / LATAM 15%.

Verified stats: **98% now manage AI spend** (31% two years ago; 63% in 2025). 80–90% of AI spend is
inference, not training (per coverage). AI cost management = #1 desired skillset (58%, per CIO Dive).
On value, verbatim from the report site: **"Is your AI providing value? No one can answer that
question yet."** and practitioners struggle with "Determining AI value/ROI: investments are often
exploratory, making returns hard to define early."

### PROVENANCE FAILURE on the 73% / 2.4x stats in the tasking
- Direct fetch of data.finops.org: contains **no** "73% exceeded plans" and **no** "agentic 2.4x
  overshoot." Closest string: "2-4x more influence over technology selection" (an unrelated
  org-influence stat — plausible seed of a garbled "2.4x").
- CIO Dive's report coverage (ciodive.com/news/finops-teams-gain-clout-ai-costs-climb/812887/):
  also no 73%, no 2.4x.
- beri.net (the SEO article headlining "73% Blow Budget, 98% Now Track") attributes 73%/2.4x NOT to
  FinOps but to "a review of 127 enterprise agentic AI implementations" — unnamed, uncited:
  "73% went over budget, with some blowing through their original estimates by more than 2.4×."
- innobu.com and other secondary blogs repeat "73% of AI costs exceed budgets" citing "the 2026
  report" without a locatable primary passage.
- Conclusion: **73% and 2.4x are discourse artifacts, not verified FinOps Foundation findings.**
  Do not attribute them to State of FinOps 2026. The verified FinOps facts are: 98% manage AI spend,
  and the Foundation itself says nobody can yet answer whether AI provides value.

Incentive: FinOps Foundation is "a Series of LF Projects, LLC" (Linux Foundation), funded by member
vendors (cloud providers, cost-tooling vendors) + certification/training revenue; its survey grows
the discipline it certifies. Even so, it is the most value-honest of the three vendors here — it
states the value question is unanswered rather than implying cost>value.

---

## 4. Counter-ledger fetches

### 4a. Coinbase (Armstrong), 2026-06-28 announcement; HN 2026-07-30
- Primary: Brian Armstrong X post (x.com/brian_armstrong/status/2070670644577280109, already in
  `../ai-cost-discourse/raw/`): "cut our AI spend nearly in half, while our token usage continues to
  grow"; defaults to open-weight GLM 5.2 + Kimi K2.7 Code via internal LLM gateway; smarter routing;
  caching hit rate 5%→60%; "91% of our employees were never hitting their usage caps."
- HN 7/30: story 49108109 "Coinbase moved to open models. Cut AI spend in half while increasing
  token usage" — 3 points, 1 comment (tiny thread; the claim's carrier is the X post + press:
  The Information "Coinbase Cuts AI Spending in Half As Usage Rises," Yahoo Finance, techtimes,
  analyticsindiamag). Also HN 49057963 (mlq.ai version, 10 pts, 7/26).
- Reading: spend is a *policy variable* — routing/caching/defaults halved the bill at growing usage.

### 4b. Cost-per-task benchmark (Composio, Jan? 2026 — x.com/composio/status/2083161879489220722)
26 agentic tasks across harnesses, costs at Kimi K3 list price (verbatim from post):
- Avg cost/task: Hermes Agent $0.39; Pi Agent $0.40; Codex $0.47; OpenCode $0.51; Kimi Code $0.54;
  Claude Code $1.47 ("about 3.7x as much as Pi").
- Median cost/task: $0.29 (Pi, Hermes); $0.35 OpenCode; $0.38 Kimi Code; $0.39 Codex; $0.72 Claude
  Code — "the cost gap holds for a typical task and is not driven by a few expensive runs."
- Success rates: Kimi Code 21/26, Hermes 20/26, Pi 19/26. So the *entire measured band* for a
  completed agentic coding task is roughly $0.30–$1.50.
- Caveat: 26 tasks, one model family priced, vendor-adjacent publisher (Composio sells agent tooling).

### 4c. LinearB AI-ROI dashboard / measurement products (searched, not deeply fetched)
- LinearB (linearb.io/lp/measuring-ai-impact, linearb.io/blog/ai-measurement-framework): sells GenAI
  ROI dashboards tagging AI-assisted PRs, cycle-time deltas; Essentials $29/contributor/mo. Publishes
  no cross-customer cost-per-PR benchmark we could find — the dashboards exist precisely because the
  ROI number is per-org and unpublished. Competitors: Jellyfish "AI token spend dashboard," Span
  (links spend to PRs). Net: a whole product category exists to *produce* the missing denominator.

### 4d. LeadDev "AI productivity gains are closer to 10% than 10x" (leaddev.com/reporting/ai-productivity-gains-are-closer-to-10-than-10x; HN 49113774)
- "For most organizations, today's AI coding tools are delivering a 5–15% throughput gain."
- Why: coding is ~16% of engineer time; review/integration unassisted — some devs report net-zero
  after extra scrutiny of AI output; skill/tooling immaturity.
- Framing: the error is measuring against a 2–3x expectation. A 10% gain on a ~$180k loaded engineer
  ≈ $18k/yr of capacity vs $1.8–3k/yr of tooling — still ~6–10x return *if* the 10% is real.

### 4e. METR RCT (metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- July 2025 RCT: 16 experienced OSS devs, 246 real tasks, Cursor Pro + Claude 3.5/3.7: **19% slower
  with AI**, while believing they were 20% faster. METR now labels the result historical.
- Secondary claim (valueaddvc.com, unverified): same group now estimates ~18% *faster* a year later.
  Treat as unconfirmed; the load-bearing point is that the best-measured value denominator was once
  *negative* and is at best modest — cost-vs-developer ratios are meaningless without it.

### 4f. Developer fully-loaded cost anchors (fullstack.com, kore1.com, korebpo.com, secondtalent.com, 2026 guides)
- BLS 2026 median US software developer salary: **$133,080**; fully loaded 1.25–1.4x →
  **~$166k–$186k/yr** (~$80–90/hr; other sources $80–150/hr).
- Offshore: India/South Asia $15–30/hr; SE Asia senior $25–45; Eastern Europe senior $30–59; LATAM
  senior $32–65. True loaded cost 1.4–1.8x quoted rate; e.g. $35/hr → $49–63/hr loaded
  (≈ $98k–126k/yr at 2,000 hr) — still 30–45% below US.
- Cheapest credible loaded offshore dev: ~$20–30/hr loaded ≈ **$40k–60k/yr**.

### 4g. Existing verified anchors reused (from ../uber-ai-budget/report.md and ../ai-cost-discourse/)
- Uber per-engineer: "$150 to $250 on average, with power users running between $500 and $2,000"
  (Forbes, verbatim; unclear if average is across all engineers). Cap: $1,500/mo per tool (Bloomberg
  via Willison). 5,000 engineers × $150–250/mo ≈ $10–25M/yr ≈ under 1% of Uber's $3.4B 2025 R&D.
- Anthropic published: $13/dev/active-day, $150–250/mo. Tokenade measured avg ~$6/day.

---

## Verdict lines (audit output)

1. RAMP: **CONTRADICTS THE CLAIM (for the typical company); documents the tail that keeps it alive.**
   Ramp's own line: median AI spend $2,246/mo is "not yet a COGS line item" — and its median
   per-employee figure (~$5–46/mo depending on series) is 0.03–0.3% of a loaded US developer.
2. MODELPLANE: **MEASURES SOMETHING ELSE (the vendor's forgone list revenue, not anyone's cost) —
   and read straight it contradicts the claim today**: even the 52x outlier is ~$78k/yr at list —
   below one loaded US senior — while the price actually paid is $125/mo.
3. SURVEYS (Mavvrik, FinOps): **MEASURE SOMETHING ELSE (forecast variance and visibility, not
   cost-vs-value)** — the FinOps Foundation itself says "Is your AI providing value? No one can
   answer that question yet," and the 73%/2.4x stats attributed to it do not verify against the primary.
4. COUNTER-LEDGER: **CONTRADICTS THE CLAIM on every measured average** — $0.30–1.50 per completed
   agentic task, $150–250/engineer/mo averages, ~$5–46 median PEPM, and a bill Coinbase cut in half
   at growing usage vs $40k+ (offshore floor) to $166–186k (US) loaded developers — while the honest
   caveat stays on the value side (5–15% throughput, once measured negative), not the cost side.

Saved artifacts: ramp-ai-index.html (1.9MB, scratchpad — page snapshot; JSON series greps above are
the durable record).
