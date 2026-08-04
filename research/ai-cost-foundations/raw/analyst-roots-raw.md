# Raw fetch notes — analyst roots of "AI costs more than a developer" (2026-08-04)

Audit of the three non-Uber roots identified in `research/ai-cost-discourse/report.md`:
(1) the Catanzaro/Nvidia quote, (2) the Gartner 2028 projection, (3) Goldman's 24x token forecast.
All fetches via WebSearch/WebFetch on 2026-08-04. Direct primary pages that 403'd are noted;
each was characterized through multiple independent mirrors/summaries. Verbatim quotes are marked.

---

## ROOT 1 — Bryan Catanzaro / Nvidia quote

### Primary source
- **Axios, 2026-04-26, "AI can cost more than human workers now"**
  https://www.axios.com/2026/04/26/ai-cost-human-workers — **403 on direct fetch** (also 403 in the
  earlier ai-cost-discourse sweep; web.archive.org blocked for WebFetch; creati.ai recap 403;
  mezha.ua mirror 403). Characterized via the mirrors below.
- Structure of the Axios piece, reconstructed from mirrors + contemporaneous summaries:
  - Thesis/headline is already the generalization: AI can now cost more than human workers.
  - Reported examples IN the Axios piece itself: Uber's CTO "already blew through his full 2026 AI
    budget due to token costs"; Amos Bar-Joseph, CEO of Swan AI, bragging about his Anthropic bill
    in a viral LinkedIn post (per WebSearch snippet of the Axios text, 2026-08-04).
  - Kicker (per search snippet, near-verbatim): "When AI labs raise prices, big spending on AI could
    shift from a flex to a liability."
  - The Catanzaro quote is the anchor quote of this piece. Contemporary X summary (Dr Efi Pylarinou,
    https://x.com/efipm/status/2049888518801965529): "Axios reports some companies spending more on AI
    compute/tokens than on salaries. Nvidia VP Bryan Catanzaro: 'For my team, the cost of compute is
    far beyond the costs of the employees.' Uber blew entire 2026 AI budget early on coding" — i.e.
    **the Axios article itself already sets the research-team quote beside the Uber coding-token story.**
  - Author not confirmed (page unreachable); Axios promoted it from @axios on X
    (https://x.com/axios/status/2048371166176317885).

### The quote — full extent
- VERBATIM (identical across every mirror): **"For my team, the cost of compute is far beyond the
  costs of the employees."** One sentence. No mirror, syndication, or summary located on 2026-08-04
  carries ANY additional Catanzaro sentence from the interview — not Fortune, Entrepreneur,
  TechRadar, IBTimes UK, Yahoo, theoutpost.ai, or the crypto mirrors. The full interview context
  beyond this sentence is effectively unrecoverable from secondary sources; the single line IS the
  entire circulating payload.

### What he and his team actually do (context establishing scope)
- Title: VP of Applied Deep Learning Research, Nvidia (ADLR — a research org).
- Per summaries of the Axios piece (surfaced via WebSearch snippet, matching TechRadar-family
  coverage): he "leads an incredibly senior team" that finds "new ways to use AI to improve projects
  ranging from language understanding to computer graphics and chip design."
- IBTimes UK (fetched): compute costs described as "electricity, hardware and data centre resources
  required" for the team's deep-learning model development/deployment on Nvidia GPUs. IBTimes also
  notes ambiguity — unclear if he meant total payroll vs per-worker comparison.
- HN thread on the Fortune version (https://news.ycombinator.com/item?id=47948320, 17 pts, 3
  comments; fetched): commenter david-gpu: VERBATIM "this was said by Bryan Catanzaro, the VP of
  applied deep learning at Nvidia. It is not generalizable to workers using AI tools on their
  day-to-day work." And: "A few teams like his are notorious for requiring a ton of computation as
  they try out different novel approaches, particularly in the context of training rather than
  inference" — internal GPU-farm research/training compute, not API coding-assistant bills.
- Om Malik, om.co 2026-04-30, "With AI, Headline isn't the story" (fetched): Catanzaro "runs the
  team doing advanced research to make advanced models that work on advanced chips. So of course his
  compute bill is going to be bigger than his payroll. It's the most obvious place where compute
  costs more." Om: most companies "are running customer support, payroll, dashboards, marketing, and
  code. For them the bill looks nothing like Catanzaro's." Om frames the quote as accurate in narrow
  context, "divorced from nuance in a velocity-driven information economy."
- No clarification/walk-back by Catanzaro himself found (searched X/press 2026-08-04).

### Transplant chain (dated)
1. **2026-04-26 Axios** — the first transplant happens AT the origin: a research-compute quote is
   published under the headline "AI can cost more than human workers now," adjacent to Uber's
   coding-token budget story and a founder's Anthropic bill.
2. **2026-04-27 Futurism** — "Bosses Are Blowing More Money on AI Agents Than It'd Cost Them to Just
   Pay Human Workers" (futurism.com/artificial-intelligence/bosses-more-money-ai-agents-human-salary)
   fuses quote + Uber + tokenmaxxing anecdotes ("I probably spend more than my salary on Claude" —
   Stockholm engineer) into the durable template.
3. **2026-04-28 Fortune** — "'The cost of compute is far beyond the costs of the employees': Nvidia
   exec says right now AI is more expensive than paying human workers"
   (fortune.com/2026/04/28/nvidia-executive-cost-of-ai-is-greater-than-cost-of-employees/; fetched).
   Fortune frames the quote as evidence against layoffs-for-savings; caveats it as a "short-term
   mismatch." Syndicated to Yahoo Finance / tech.yahoo.com.
4. **2026-04-28..30 wave** — Entrepreneur ("Nvidia VP Says AI Costs 'Far' More Than Human
   Employees"; adds MIT-2024 ~23% study, no new Catanzaro material; fetched), TechRadar, IBTimes UK,
   TechSpot, Tom's Hardware, wccftech (Facebook), and crypto-desk mirrors: KuCoin "news/flash",
   CryptoBriefing, MEXC, CoinStats.
5. **Corrections that did NOT propagate:** Om Malik 2026-04-30 (blog + X
   https://x.com/om/status/2049549820835385444); david-gpu on HN (thread total: 17 points).
6. **2026-06-14 Fortune re-run** — same story republished with new timestamp
   (fortune.com/article/why-is-the-cost-of-ai-higher-than-human-workers-nvidia-executive/; fetched;
   carries note "A version of this story was published on Fortune.com on April 28, 2026"). Adds
   Uber leaderboards detail, Microsoft Claude-license cancellation, and (notably) Gartner's 90%
   inference-cost-DECLINE projection — while keeping the costs-more-than-workers headline.
7. **2026-07-02 Forbes contributor** (Jemma Green, "AI Costs More Than The People It Replaced")
   consolidates quote + Uber + Gartner + Goldman.
8. **2026-08-01 @IdleProtocol** (X, 32 likes) cites the quote "via Fortune" alongside
   Uber/Microsoft/Goldman — account is a compute-marketplace project (IDLE Protocol) with a
   commercial stake in the compute-is-expensive frame (per instances.md S1).

### Amplifier stakes (root 1)
- Nvidia itself: the world's GPU vendor; "compute demand is enormous" is its business case — the
  quote is a seller of compute describing his own compute-heavy shop.
- Crypto/compute-token media (KuCoin, CryptoBriefing, MEXC, CoinStats) and @IdleProtocol
  (decentralized compute marketplace): monetize the scarce/expensive-compute narrative.
- Fortune/Entrepreneur/TechRadar/IBTimes: headline-traffic repackaging; Fortune re-ran the same
  story twice (4/28 and 6/14).

---

## ROOT 2 — Gartner "AI coding costs will surpass average developer's salary by 2028"

### Primary source
- **Gartner press release, 2026-06-24**: "Gartner Predicts AI Coding Costs Will Surpass Average
  Developer's Salary by 2028 as Token Consumption Surges"
  (gartner.com/en/newsroom/press-releases/2026-06-24-...) — **403 on direct fetch** (both sweeps).
  Characterized via: The Register 6/24 (fetched), NCNONLINE full-PR mirror (fetched), CIO.com
  4189149 (fetched), Computer Weekly (403; search snippet), TNW (fetched), TechTimes 6/29.
- Named analyst: **Nitish Tyagi, Senior Principal Analyst** (author of the prediction).

### Exact claim and scope
- Claim (near-verbatim from Register/mirrors): "by 2028, AI coding costs will overtake the average
  developer's salary due to rising LLM token consumption and the shift to consumption-based
  licensing models."
- **Baseline: a GLOBAL average developer salary of ~$2,000/month (~$24k/yr)** — per Computer
  Weekly/CIO.com. Explicit Gartner qualifier (VERBATIM via Register): "We're not saying AI token
  cost will be higher than every developer's salary on the planet, because US salaries tend to be
  higher than in India, for example."
- India datapoint (via Register): token costs "do not vary by location," and in India "they may
  already be equivalent to the salary of an engineer with four to six years' experience."

### Methodology (or absence)
- **No methodology disclosed in any fetched source.** No consumption dataset, sample, vendor data,
  or model is described (Register, CIO.com, TNW all checked; TNW explicitly: no detail on
  methodology, sources, sample).
- The numbers carried are client anecdotes from the 2026 blowout period: bills "leaping from $20 or
  $100 to $2,000 to $5,000 per developer per month," extremes "$20,000"; Tyagi VERBATIM (CIO.com):
  "I have heard scary numbers like 'My developer consumed $20K last month.'" CIO.com also
  paraphrases the intent as alarm-raising about ungoverned token costs.
- I.e. the projection extrapolates the consumption surge as observed in mid-2026 — the same window
  in which Uber/Amazon/Meta leaderboards and usage quotas inflated consumption (per
  ai-cost-discourse report). No fetched source shows Gartner adjusting for incentive-inflated usage.

### Gartner's own caveats (all from Gartner material)
- VERBATIM (Tyagi, via Register): **"There is no direct relation between the increase in token
  consumption and an increase in productivity gains."**
- Conditionality (Tyagi, via search snippet of PR): "Token discipline will not emerge through
  developer choice alone... Without a governed engineering operating model, costs can escalate
  faster than the productivity gains these tools are designed to deliver." The PR's back half is
  governance recommendations (route to smaller models, token thresholds, context optimization,
  sprint-retro token reviews) — the crossing is framed as what happens WITHOUT governance.
- Named cost drivers are governance failures + vendor opacity: "ungoverned agent autonomy, inflated
  context windows, absent optimization feedback loops"; "most vendors lack transparency in token
  calculation and billing" (NCNONLINE PR mirror).

### Price declines — Gartner's other hand
- **Gartner PR 2026-03-25**: "by 2030, performing inference on an LLM with 1 trillion parameters
  will cost GenAI providers over 90% less than in 2025" (gartner.com PR; covered by AIwire/HPCwire
  3/25, CIO Dive). Gartner's reconciliation: consumption rises faster than unit costs fall —
  agentic tasks need "5–30 times more tokens per task than a standard GenAI chatbot"; provider-side
  savings "will not be fully passed on to enterprise customers."
- So Gartner DOES address price declines — and still projects rising bills, by assuming the agentic
  consumption curve outruns them.

### Related Gartner variants (the "total cost of human workers" family)
- **PR 2026-01-26**: "GenAI cost per resolution for customer service will exceed offshore human
  agent costs by 2030" (>$3/resolution vs many B2C offshore agents). Reasoning: rising data-center
  costs + "AI vendors transitioning from subsidized growth models to profitability" + more complex
  use cases. Quinlan (Gartner) VERBATIM: "Full automation will be prohibitively expensive for most
  organizations." Potosky (Gartner) VERBATIM: "we are... investing in a more expensive technology
  solution to replace a less expensive talent source." (via customerexperiencedive.com, fetched.)
- Gartner article "AI Isn't Reducing Workforce Costs — It's Reshaping Them": up to 30% of
  AI-displaced roles rehired by 2029, often at higher cost.

### Amplifier stakes (root 2)
- Gartner sells the remedy: the PR is structurally an advisory pitch (problem + governance
  framework), and cost-governance advisory is Gartner's subscription product.
- Syndication within a week: The Register, CIO Dive, CIO.com/InfoWorld, Computer Weekly, TechTimes,
  TNW, Back End News — enterprise-IT-buyer trade press. The Register added no independent
  verification (checked).
- Headline drift: Gartner's $2,000/mo global-average scope survives in almost no headline; the
  claim circulates as "more than developers" full stop.

---

## ROOT 3 — Goldman Sachs 24x / 120 quadrillion tokens

### Primary source
- **Goldman Sachs Research, "Decoding the Agentic Economy: The Coming Inflection in AI Usage and
  Margins"**, published ~2026-05-20 (report title via ZeroHedge; date/author via Goldman's own
  insights article, fetched: goldmansachs.com/insights/articles/ai-agents-forecast-to-boost-tech-cash-flow-as-usage-soars).
- Lead analyst quoted: **Jim Schneider**, Senior Equity Analyst, US Semiconductors & IT Services
  (sell-side equity research).

### Exact claim and assumptions
- Token consumption to "multiply 24 times, to 120 quadrillion tokens per month, between 2026 and
  2030" (VERBATIM via Goldman insights page).
- Segment assumptions: consumer agentic AI 12x by 2030; enterprise agents the biggest multiplier,
  55x by 2040; adoption curve 12% of knowledge workers using agentic AI by 2030 → 37% by 2040;
  enterprise adoption explicitly modeled as lagging (testing/integration/compliance friction).

### Is it a cost claim?
- **No — it is a volume/revenue claim for AI PROVIDERS, explicitly paired with collapsing unit
  costs.** Same report: semiconductor advances "delivering lower cost per token of 60%-70% per
  year for inference"; Schneider: a "margin inflection" is coming because "costs are falling faster
  than the prices"; Goldman projects positive gross margins for major cloud/model providers as
  early as H1 2026. The 120-quadrillion figure is the demand side of a bull thesis on AI sellers
  (report names ~9 winner stocks per BigGo Finance coverage), not a projection of enterprise bills
  vs payroll.
- Buried counter-nugget in the same research (Schneider, via Goldman insights page): for real-time
  voice agents, "human cost was actually less than the LLM cost today" — the one place Goldman
  itself makes a cost-vs-human comparison, and it is a narrow present-tense case, not the 24x claim.

### How it enters the cost discourse
- Windows Central (per ai-cost-discourse raw notes) and Forbes 7/02 use "Goldman: 24x tokens by
  2030" as trajectory garnish for the costs-exceed-salaries claim; @IdleProtocol 8/01 cites it in
  the same breath as Uber/Microsooft/Catanzaro. In each case the volume multiplier is read as if it
  were a bill multiplier, with the report's own 60–70%/yr unit-cost decline dropped.

### Amplifier stakes (root 3)
- Goldman: sell-side research whose function is an investable thesis (long hyperscalers/semis).
- Amplifiers found: ZeroHedge (markets audience), Cointelegraph, KuCoin/MEXC/CoinStats news desks,
  XRP-promoter accounts (@BankXRP), Enterprise DNA (analytics training vendor) — audiences positioned
  long "number go up" compute narratives; plus @IdleProtocol (compute marketplace).

---

## Fetch failure log (2026-08-04)
- 403: axios.com (original), gartner.com (both PRs), finance.yahoo.com (one of two Fortune mirrors),
  computerweekly.com, mezha.ua, creati.ai, techradar.com (returned nav shell only).
- web.archive.org: blocked for WebFetch.
- Everything above characterized from at least two independent mirrors where the primary 403'd.
