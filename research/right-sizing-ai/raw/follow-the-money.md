# Follow-the-money beat — raw findings

**Reporter:** follow-the-money journalist subagent
**Date of research:** 2026-08-11
**Week's concept:** the "scope retreat" — companies deploy AI at the biggest, busiest,
highest-volume version of a job because that is where the ROI arithmetic looks best; it
underperforms there; they narrow it to a smaller job where it works, and keep it.
**Beat:** AI budgets re-scoped, cut, capped, reallocated. Who is quietly killing which use
cases and why. Procurement and contract changes. CFO/CIO decisions narrowing AI spend.
Consumption pricing surprises that forced a smaller scope. Earnings-call disclosures of
scaled-down AI ambition.
**Audience:** owners, CEOs, CIOs, COOs, operators at traditional non-tech companies.

Every URL below marked **[OPENED]** was fetched with WebFetch and read by me. Anything
marked **[NOT OPENED]** was seen only in search-result snippets and is NOT usable as a
citation without further verification.

---

## THE HEADLINE FIND — KPMG Global AI Pulse Q2 2026 (primary source, PDF read directly)

**[OPENED]** https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/06/global-ai-pulse-q2.pdf
KPMG International, *Global AI Pulse Q2 2026: From deployment to value realization*, June 2026.
I downloaded the PDF and extracted its text; the figures below are transcribed from the
report's own charts, not from press coverage.

**Methodology (from the report):** n = 2,145 senior leaders / C-suite, 20 countries,
territories and jurisdictions. Organizations with US$50 million or more in annual revenue
globally; US$100 million+ in major markets.

**The money question, verbatim from the survey instrument (page 18):**

> "Has your organization questioned, delayed, or scaled back the deployment of AI agents
> because the expected costs began to outweigh the value generated?" Q2 (n=2145)

**The answer breakdown, verbatim from the chart:**

| Response | Share |
|---|---|
| Yes — we have **scaled back or narrowed deployment** | **24%** |
| Yes — we have **delayed or paused further rollout** | **25%** |
| We have questioned the decision but not made changes | 22% |
| No — costs and value remain aligned | 24% |
| Not applicable — AI agents not yet deployed | 5% |

KPMG's own headline for that chart: **"Nearly half of organizations have rephased AI
deployments when costs outweigh expected value" — 49%.** The 49% is the sum of the two
"Yes" rows (24 + 25). *This matters: the 49% is NOT "half of companies scaled back." One
quarter scaled back or narrowed; another quarter delayed or paused.*

**KPMG's own prose on page 18 (verbatim, and it is the scope retreat stated in survey form):**

> "Many organizations are becoming more deliberate in how they deploy AI. Nearly half
> report having rephased AI-agent deployments when expected costs began to outweigh
> anticipated value. Around one-quarter have scaled back deployments, while a similar share
> have delayed or paused them. Another fifth report questioning deployment decisions
> altogether."

> "These actions do not signal reduced confidence in AI. Rather, they suggest a growing
> willingness to evaluate where AI creates meaningful value and where it does not.
> Organizations appear increasingly focused on **concentrating investment where expected
> returns are strongest.**"

**Other verified figures from the same PDF:**

- Only **7%** report **established ROI**.
- **35%** report **full visibility into their AI operating costs** and actively monitor them
  (page 19: "only around one-third of organizations report having full visibility into their
  AI operating costs and actively monitoring them. Most continue to rely on partial…").
- Organizations with **full visibility into AI operating costs are five times more likely to
  report established ROI than those without (15% vs. 3%)**.
- Where **accountability is clear**, orgs are more likely to report established ROI
  (**14% vs. 4%**).
- **Planned AI investment holds steady at a weighted average of US$188 million** over the
  next 12 months — "effectively unchanged from Q1." So: spend is flat, scope is narrowing.
  That is the arithmetic of a retreat, not a retrenchment.
- **Access to lower-cost, high-fidelity models is the fastest-rising influence on AI
  strategy, up 7 points from Q1.**
- **One-third** of senior leaders cite AI cost / economic-literacy skills as a challenge to
  deploying AI agents; **29%** report difficulty understanding and controlling operating
  costs as systems scale.
- 78% / 76% say AI is currently delivering meaningful business value (up 12 pts).

**Why this is the best thing on my beat this week:** it is the scope retreat with a
denominator. Not one company, not a vendor case study — 2,145 leaders at $50M+ revenue
companies, and the retreat is already the modal behaviour. Budget did not fall. Scope did.

### Press coverage of the KPMG number — and a real miscite

**[OPENED]** https://www.forbes.com/sites/sandycarter/2026/08/09/kpmg-says-nearly-half-of-executives-pulled-back-ai-agents-over-cost/
Forbes, 9 Aug 2026, by **Sandy Carter** — note: a **Forbes contributor** (CEO at EQUS.ai),
not Forbes staff. Cites the survey correctly on methodology (2,145 senior leaders, 20
countries, $50M+ revenue) and on $188M average spend and 79% top-priority. **But it
misstates two numbers:**

- Forbes writes: *"49 percent of leaders said they had scaled back AI agent deployments
  because operating costs outweighed the benefits."* → The KPMG chart says **24%** scaled
  back or narrowed. The 49% includes 25% who merely delayed or paused.
- Forbes writes: *"only 26 percent report full, real-time visibility into what AI costs to
  run at scale."* → The KPMG report says **35%** have full visibility and actively monitor.

Forbes also frames it, usefully, as companies **"rephasing rather than retreating"** and
concentrating "investment where returns are strongest."

**[OPENED]** https://ppc.land/kpmg-finds-49-cut-ai-agent-rollouts-when-costs-outran-value/
PPC Land, 24 June 2026. This one **gets the split right**: "24 percent of respondents said
they had scaled back or narrowed a deployment and 25 percent said they had delayed or
paused further rollout." Also confirms 7% established ROI, 35% "fully visible and actively
monitored," $188m weighted average, n=2,145, 20 countries, $50M / $100M revenue thresholds.
Small outlet, but it matches the primary PDF exactly, which is the test that matters.

**[OPENED]** https://ca.finance.yahoo.com/news/kpmg-says-nearly-half-executives-045928928.html
Yahoo Finance Canada syndication of the Forbes contributor piece, 9 Aug 2026. Repeats the
same "49 percent … scaled back" overstatement. Adds a GitHub Copilot anecdote (one user's
bill going from $10 to a projected $180/month after usage-based billing started 1 June).

**[OPENED]** https://kpmg.com/xx/en/our-insights/ai-and-technology/ai-pulse.html
KPMG's own landing page. Confirms "2,145 C-suite and business leaders representing
organizations in 20 countries, territories and jurisdictions" and that "established ROI
remains limited," but carries no percentages on the page itself. Use the PDF.

---

## SECOND STRAND — the token bill arrived, so companies narrowed who gets which model

This is the same shape as the essay's cases, playing out inside the enterprise: the biggest,
busiest version of the job was "give every employee the best model for everything." The
arithmetic broke. It is being narrowed to "cheap model for routine work, frontier model for
the hard 10%" — and kept.

**[OPENED]** https://www.inquirer.com/business/technology/ai-token-openai-anthropic-corporate-20260728.html
**Associated Press**, Matt O'Brien, 28 July 2026, 1:30 p.m. ET (read via Philadelphia
Inquirer syndication; apnews.com itself is not fetchable from this environment). Top-tier
mainstream source. Verified content:
- Framing: *"A corporate fad of 'tokenmaxxing' on artificial intelligence technology is
  hitting its limits as workplaces throwing AI at everything are seeing the costs rise
  without a similar spike in productivity."* Spring hype → summer backlash.
- **Nvidia CEO Jensen Huang**: a "$500K engineer" should burn "$250K in tokens."
- **Bain & Company** consultant: token costs **doubling monthly** for clients; ~**$200 per
  developer per month × 20,000 developers** at major firms.
- Bain again, and this is the scope-retreat line: companies were defaulting to Anthropic's
  **Claude Opus 4.6 for routine tasks like email generation**, where cheaper models suffice.
- **Microsoft CEO Satya Nadella**: customers "pay twice" — in tokens, and by feeding
  proprietary data to the models.
- **Palantir CEO Alex Karp**: "I'm going to chillax and waste my time with tokens. I'm going
  to get no value."
- **Mozilla CTO**: "tokenmaxxing is a dumb thing," calls it a temporary industry blip.
- Also named: Meta (ran an internal competition rewarding token usage), Moody's Ratings
  (recommends disciplined approach), Together AI, Moonshot/Kimi, Zhipu/GLM as cheaper
  alternatives.

**[OPENED]** https://www.404media.co/companies-are-throttling-employees-ai-use-because-its-too-expensive/
**404 Media**, Joseph Cox and Emanuel Maiberg, 2 July 2026. This is the primary
investigation the rest of the coverage derives from — based on leaked Slack chats,
screenshots of internal dashboards, and emails from "half a dozen companies." **Mostly
paywalled**; I could only verify the free excerpt. Verified from the excerpt:
- Named: **Amazon, Adobe, Atlassian, Citi**.
- **One company's AI spending "tripled to more than $15 million a month."**
- Companies are "throttling their employees' use of AI" and "pleading with workers to use
  less powerful models."
- I could NOT verify the per-company email text from the free excerpt. Use heise below for
  the per-company detail.

**[OPENED]** https://www.heise.de/en/news/AI-Costs-Explode-Companies-Block-Access-or-Advise-Older-Models-11352116.html
**heise online** (reputable German tech press), 2 July 2026 — write-up of the 404 Media
reporting with more per-company detail than the free 404 excerpt:
- **Citi**: temporarily **blocked access to newer Anthropic and OpenAI models for several
  days**, and emailed employees recommending which model to use for which task. **Citi
  denied this** — heise notes "screenshots clearly show Citi blocking access."
- **Atlassian**: ended unlimited AI use, launched an internal cost-tracking dashboard.
  Internal data showed **costs tripled from $5 million**, with **$120 million expected
  annually**. **Atlassian denied this** but did not say which figures were wrong.
- **Adobe**: discontinued unlimited use by **end of June**; employees were "essentially
  being told to try to get everything they can done before that date."
- **Amazon**: introduced token limits shortly after deactivating an internal AI usage
  leaderboard. Internal Slack message: *"Crazy, we go from no more leaderboard to actual
  usage limits in two weeks."* **Amazon said internal guidelines hadn't changed.**
- **Unnamed media company**: hit its monthly ChatGPT limit for the first time; nearly half
  the spend was attributable to a single employee, with no clear ROI.
- Per **Accenture** research cited: "non-technical staff burning through tokens for
  non-specialized tasks" drove significant usage — AI used mostly for **converting PDFs to
  presentations** rather than complex coding.

**IMPORTANT HONESTY NOTE:** Citi, Atlassian and Amazon all publicly denied or disputed the
404 Media reporting. Any pitch using these must say so.

**[OPENED]** https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool/
**TechCrunch**, Julie Bort, 7 Aug 2026 — **Rippling**. The hardest numbers I found anywhere,
and the closest structural mirror to the essay's J&J stat:
- Rippling was on track to spend **40% of its R&D headcount budget on AI tokens**, with
  spending growing **80% month-over-month**.
- CFO **Adam Swiecicki** presented findings: **one engineer alone was spending $50,000 a
  month**; **just 10–15% of employees drove 60% of total AI cost.**
- CPO **Matt MacInnis**: **"We were incredulous."**
- Fix: built an internal gateway ("AI Spend Console") that routes requests to cost-effective
  models; **negotiated max spending caps with Cursor, OpenAI and Anthropic**.
- Result: **token spend dropped from 40% to 15% of R&D headcount budget** — *without*
  curtailing usage. Peak **605 billion tokens in April**; **July's 600 billion tokens cost
  37% less** because of routing to cheaper models (e.g. Z.ai's GLM 5.2).
- MacInnis on the scope point: **"we're not letting the sales team do grammar updates using
  Fable."**
- Note the mirror: essay's J&J found **10–15% of use cases drove 80% of value**; Rippling
  found **10–15% of employees drove 60% of cost.** Same Pareto, opposite sign.
- Caveat: Rippling is a software company, so this is dev-tool-adjacent for Nick's ICP.

**[OPENED]** https://fortune.com/2026/08/07/uber-ai-spending-tokenmaxxing-is-over-cto/
**Fortune**, Sasha Rogelberg, 7 Aug 2026 — **Uber**. CTO quote: *"We're coming to the end of
the so-called tokenmaxxing era."* Uber burned through its **entire 2026 AI budget in
months**. What Uber changed: improved prompt caching, adjusted default model settings,
evaluated new models for efficiency, gave engineers visibility tools showing their AI usage
and cost per hour, shifted philosophy to efficiency over volume. **The article carries no
dollar figures** — the "$1,500 per employee per tool per month" cap comes from The
Information via TNW below, not from Fortune. Also name-checks Deutsche Bank, Apollo Global
Management, Bain & Co.

**[OPENED]** https://thenextweb.com/news/tokenminimizing-companies-cap-employee-ai-spending
**The Next Web**, 17 June 2026 — explicitly sourced to **The Information** (paywalled
primary). Per-company:
- **AT&T** — "started limiting some employees' access to GitHub Copilot."
- **Meta** — "reining in staff spending on Anthropic and other AI tools."
- **Uber** — **caps employees at $1,500 a month per tool**, after exhausting its entire 2026
  budget by April.
- **Walmart** — "capped use of its in-house AI agent."
- **Amazon** — scrapped its internal leaderboard; no spending cap mentioned in this piece.
- **Databricks** — AI budget for engineers still unlimited, "so tokenmaxxing still exists."
- Context figures: "most AI-obsessed firms now spend **$7,500 per employee per month**";
  individual Microsoft engineers spending **$500 to $2,000 a month** on Claude Code alone.

**[OPENED]** https://thenextweb.com/news/microsoft-tokenmaxxing-ai-spending-limits
**The Next Web**, 4 Aug 2026 — **Microsoft**:
- As of **July 2026, every Microsoft division has an AI token spending cap.**
- **Switched its default internal AI model to a cheaper OpenAI alternative.**
- Employees can track individual AI consumption on an internal dashboard.
- Previously **cancelled most Claude Code licenses in its Experiences and Devices group in
  May 2026**.
- EVP **Jay Parikh**, internal email: **"tokenmaxxing is not what we are optimizing for."**
- Individual engineers were spending "hundreds to a few thousand dollars a month."
- Also names AT&T, Meta, Uber, Walmart, Amazon, Adobe, Atlassian, Citi as doing similar.
- Striking framing figure: **token prices have fallen ~98% since late 2022, yet enterprise
  AI bills have tripled** because agentic tools consume far more tokens.

**[OPENED]** https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/
**TechCrunch**, 24 June 2026. Weaker than it looks. Only **one** company genuinely named as
imposing restrictions: **Accenture** — trying to stop employees burning token reserves on
basic tasks like PDF-to-presentation conversion. Quote from **Justice Kwak, Accenture's
agentic AI strategy lead**: *"Spend is becoming very unpredictable; and leadership … are
still asking the question of whether they're getting value."* References Amazon deleting a
tokenmaxxing leaderboard (citing InfoWorld) and Meta curbing employee AI usage, but with no
detail. **No dollar figures at all.** Use it for the Accenture quote only.

**[OPENED]** https://techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/
**TechCrunch**, Sarah Perez, 14 July 2026 — **Meta / Adam Mosseri**:
- *"the burn rate of a strong engineer might be the same as their salary, or their cost of
  employment. And in that world, you're going to probably need to put in some caps"*
- *"It's not that hard to build a token incinerator, and that doesn't create a lot of value"*
- *"I think of it like … any other resource"* — allocating GPUs, storage, OpEx, payroll.
- Meta shut down its internal AI token-spend leaderboard; AI costs "on track for billions of
  dollars in 2026." No token caps at Meta yet as of that date.

---

## THIRD STRAND — procurement, audits and where the AI money is actually coming from

**[OPENED]** https://www.informationweek.com/machine-learning-ai/time-for-an-ai-exit-strategy-how-cios-are-cutting-ai-waste
**InformationWeek**, 9 June 2026:
- **Microsoft** "reportedly canceling most of its direct Claude Code licenses just six
  months after rolling the tool out and steering engineers toward GitHub Copilot CLI
  instead." (Six months to a scope retreat — clean timeline.)
- **Uber** "exhausted its entire 2026 AI budget by April."
- **Nvidia** acknowledged compute expenses for AI now surpass employee costs.
- **A midsize financial services firm** cut AI tools from **34 to 19**, ~**35% annual
  spending reduction**. *Unnamed.*
- **A retailer** consolidated **14 scattered initiatives down to 3 platform-level
  capabilities**. *Unnamed.*
- When enterprises run a thorough AI audit, spending typically proves **40% to 60% higher
  than the figure they started with**.
- The article does NOT contain a named example of a company pulling AI from a big use case
  and keeping it for a small one. Only general consolidation patterns.

**[OPENED]** https://www.cio.com/article/4137661/cios-cut-it-corners-to-manufacture-budget-for-ai.html
**CIO.com**, 9 March 2026 — older (5 months), but the only piece I found with *named*
mid-market operators killing things. On-beat: AI money is not new money.
- **IC Realtime** (Andrew Nassar, CTO): **shelved a multi-hundred-thousand-dollar autonomous
  sales agent with support chatbot** after pilot feedback showed customers couldn't find
  support articles, resulting in *more* calls. Allocating 5–10% of budget to AI this year,
  potentially doubling or tripling next year.
- **Unidata** (Hanna Parkhots): cut traditional data-validation software budget 40%; merged
  three PM tools into one (**$47,000/year saved**); cut data-analyst contractor budget 30%;
  moved DR testing from quarterly to semiannual ($12,000); postponed non-critical
  infrastructure upgrades 12–18 months. **$85,000 redirected to AI software.**
- **Helium SEO** (Paul DeMott, CTO): delayed server capacity expansion and network
  improvements 12–18 months (freeing 30% of infrastructure budget); cut subscription costs
  40%.
- **Kantata** (Taison Kearney, CISO): formed an internal AI council evaluating projects
  against consistent criteria before funding.
- **International Seaways** (Amit Basu, VP/CIO/CISO): paused or slowed certain AI use cases
  lacking proper infrastructure foundations.
- Weakness for a pitch: these are small/mid companies, and the piece is 5 months old.

---

## FOURTH STRAND — industry-level narrowing (insurance)

**[OPENED]** https://evidentinsights.com/insights/insurance-use-case-trends-q1-2026
**Evident Insights, AI Use Case Tracker | Q1 2026.** No explicit publication date visible on
the page (the only dated item is a link to the Q4 2025 report, 5 Feb 2026), so treat the
publication date as unconfirmed. Covers calendar Q1 2026. Verified figures:
- **30 insurers** tracked; **27 new AI use case announcements in Q1 2026**, down from the
  previous quarter but with sharper focus.
- **P&C = 56%** of all new announcements.
- Concentration in **Underwriting & Pricing** and **Claims Management** — "the two functions
  that most directly impact profitability."
- Only **5 of 27** use cases involved agentic technology. Named deployments: **Allianz's
  food-spoilage claims orchestration, Travelers' voice-native Claim Assistant, Zurich's
  liability assessment tool.**
- Only **18%** of new use cases reported measurable outcomes, **down from 38%** previously.
  Of those with outcomes, **4 in 5 were productivity gains** — no revenue or satisfaction
  metrics disclosed.
- Only **3 insurers (10%)** disclose aggregate AI ROI, vs ~30% of tracked banks.

Assessment: directionally on-concept (insurers narrowing to the profitable core of the
value chain) but no company actually *pulled anything back*. Fewer announcements is not the
same story as a retreat. Useful colour, not a pitch on its own. Also the undated page is a
sourcing weakness.

**[OPENED]** https://www.ciodive.com/news/insurance-industry-stuck-ai-pilot-phase/816759/
**CIO Dive**, 6 April 2026. Research source is a **Simplifai** report built on secondary
data from McKinsey/EY/Deloitte — i.e. a **vendor-reported** aggregation, no sample size or
methodology given. Figures: over 80% of insurers dedicate at least $5M/year to AI; 14% spend
more than $50M; "fewer than half of businesses have deployed AI in a single function";
"Lots of pilots, limited production, minimal P&L impact." Quote: "Most carriers have AI
projects. Few have an AI strategy." No named insurers narrowing anything. **Vendor-reported
— down-weight.**

---

## CANDIDATES I LOOKED AT AND REJECTED

- **Gartner: "over 40% of agentic AI projects will be canceled by end of 2027."** Verified
  it exists (gartner.com press release) but it is dated **25 June 2025** — over a year old
  and recycled endlessly through 2026 content farms. Not news. Rejected on freshness.
- **S&P Global: 42% of companies abandoned the majority of AI initiatives before production,
  up from 17%.** Real (S&P Global VotE: AI & Machine Learning, n=1,006 across North America
  and Europe; covered by CIO Dive). But it is 2025 data and has been over-cited. Rejected on
  freshness; superseded by the KPMG Q2 2026 number, which is fresher and sharper.
- **Klarna's AI customer-service reversal and rehiring.** Real and well documented, but it
  is the single most over-covered AI cautionary tale of the last 18 months and the primary
  events are 2025. Rejected as stale and unoriginal.
- **Salesforce Agentforce churn / customers scaling back.** Chased it; found nothing with a
  named customer and hard numbers. Salesforce Ben reports the *opposite* (60%+ of Q4
  Agentforce/Data 360 bookings from existing-customer expansion). No story here.
- **"Nearly three-quarters of enterprises are scaling back or cutting AI entirely."**
  Circulating widely on TikTok (@hiq.xrfw, @campablyth2, ~170K combined views in-window).
  **I could not find a primary source for this number anywhere.** Do not use it. It looks
  like a distorted echo of the S&P Global 42% figure.
- **redresscompliance.com "Shadow AI Spend Report 2026"** (4–9% of enterprise software
  spend is shadow AI, 45% of CIOs funding AI from existing software lines, 54% running
  vendor consolidation, 68% cutting vendor portfolios). Numbers are enticing but the domain
  has no visible methodology and reads as an SEO/AI-generated report. **Rejected as
  unverifiable.**
- **beri.net "THE D*AI*LY BRIEF"**, **bivashvlog.com**, **digitalapplied.com**,
  **talyx.ai**, **pertamapartners.com**, **agentmodeai.com**, **usefini.com**,
  **nextwavesinsight.com**, **ecorpit.com**. All surfaced repeatedly in searches with
  confident-sounding statistics ("78% of CFOs got blindsided: AI spend up 108% to $1.2M",
  "100% of CIOs budgeting for AI, half already blew their budgets", "90% of enterprise AI
  implementations fail"). **All rejected as content-farm-shaped:** no named methodology, no
  attributable primary, statistics that do not trace back. Same family as the known
  offenders in the brief.
- **greyjournal.net "Why Companies Are Pulling Back From AI in 2026"**, **strongmocha.com
  "The Earnings Call Gap"**, **jinba.io**, **roots.ai insurance predictions**,
  **thinking.inc**, **tommasomariaricci.com**. Same category. Not opened as citations.
- **The Morgan Stanley "only 21% of S&P 500 companies can point to a concrete AI benefit"
  claim.** Surfaced only via strongmocha.com (content farm). **Not verified — do not use
  without finding the Morgan Stanley primary.**
- **Earnings-call disclosures of scaled-down AI ambition.** I searched hard for a CFO or CEO
  saying "we narrowed our AI scope" on a Q2 2026 call. I found nothing quotable. The closest
  adjacent facts: Salesforce cut staff from its Agentforce team with four senior AI
  executives departing in three months (Futurum write-up, not opened as a citation); C3.ai
  announced restructuring and tightened cost controls; Expensify flagged rising AI spend it
  is trying to cut back. **None of these is a clean scope-retreat disclosure.** Honest
  answer: this specific sub-beat came up empty this week.
- **Walmart "Code Puppy" cap.** Referenced by TNW (via The Information) and by a Stocktwits
  headline saying Walmart limits employee AI tool access with the stock down ~2%. The
  Stocktwits page **403s** and I could not open it. Walmart's cap is verified only at the
  TNW/The Information level ("capped use of its in-house AI agent") — do not add the stock
  detail or the "Code Puppy token allocation" detail without a source you can open.
- **Deutsche Bank "end of the AI honeymoon" report.** Seen only via coincodex.com snippet.
  Not opened. Not usable.

---

## SOURCES THAT ARE PAYWALLED OR UNFETCHABLE (flagged for honesty)

- **The Information** — the original primary for the Uber/Meta/Walmart/AT&T caps story.
  Paywalled. Everything I have from it is second-hand via The Next Web.
- **404 Media** — primary for Citi/Adobe/Atlassian/Amazon. Free excerpt only; full piece is
  members-only. heise online carries the per-company detail.
- **apnews.com** — blocked from this environment. Read the AP story via the Philadelphia
  Inquirer syndication instead (same byline, Matt O'Brien, 28 July 2026).
- **stocktwits.com** — 403.
- **fastcompany.com** ("The AI bill is coming due") — 403. Not usable.

---

## COMMUNITY SIGNAL (last30days engine run, 2026-07-12 → 2026-08-11)

Engine: `last30days v3.18.4`, topic "companies cutting AI budgets and killing AI pilots",
raw output saved to `~/Documents/Last30Days/companies-cutting-ai-budgets-and-killing-ai-pilots-raw-ftm.md`.

268 items across 11 sources. Reddit: 36 threads / 47,001 upvotes / 7,024 comments
(r/ArtificialInteligence, r/consulting, r/technology). Hacker News: 48 stories / 6,034
points / 4,180 comments. X: 14 posts. TikTok: 25 videos / 168,811 views. Instagram: 3 reels
/ 113,194 views. Techmeme: 8 headlines (wsj.com, theinformation.com, bloomberg.com). Digg:
44 clusters. Perplexity: 48 results / 118 citations.

Freshness caveat the engine itself flagged: "Recent evidence is thin: only 119 of 268 dated
items are from the last 7 days."

Top clusters, in engine rank order:
1. Enterprise token-spend caps (Microsoft, Atlassian, Amazon, Uber, Tesla, Meta) — score 72.
2. Rippling's ROI tool and 40%→15% token-spend cut — score 68.
3. TikTok "enterprises are cutting back on AI" chatter — score 68, single-source, and the
   "nearly three quarters of enterprises are scaling back" claim in it is **unsourced**.
4. Uber CTO "tokenmaxxing era is over" (Fortune) — score 65.
5. **KPMG: nearly half of executives pulled back AI agents over cost** — score 64.
6. TikTok "80% of AI projects never make it past the pilot" — score 62, single-source,
   unsourced number.
7. AP News "tokenmaxxing fades" — score 62, also on Hacker News (10 pts).
8. Microsoft division-level token budgets (TNW) — score 57.

Read: the community conversation this month is almost entirely the *cost* story, not the
*quality* story. People are talking about bills, not about whether the AI works. That is a
gap Nick can walk into — the essay's argument is that the two are the same story.

---

## MY ASSESSMENT FOR THE EDITOR

The strongest thing on this beat right now is **the KPMG Q2 2026 number, read from the
primary PDF rather than from the press coverage** — because the press coverage got it
wrong. That gives Nick two things at once: a hard, well-sampled measurement of the scope
retreat (24% narrowed, 25% paused, 49% "rephased," on flat $188M budgets), and a small piece
of original reporting (Forbes said 49% scaled back; the survey says 24%).

The second strongest is the **token-throttling cluster** — Citi, Adobe, Atlassian, Amazon,
Walmart, AT&T, Uber, Microsoft, Meta — because it is the scope retreat happening to the
*deployment everyone forgot they made*: "everybody gets the best model for everything."
Rippling's numbers are the sharpest available and mirror the essay's J&J Pareto exactly.
Its weakness for this audience is that it skews toward engineering tooling; the Accenture
"PDF to PowerPoint" finding and the Citi/Walmart/AT&T end of it are what keep it broad.

What I could NOT find, and am not going to fake: a named traditional non-tech company that
publicly killed a big AI use case in the last 30–60 days and kept a smaller one. The essay's
four cases (Kinney, J&J, Amazon JWO, Taco Bell) remain the best specimens of that exact
shape. Everything fresh on my beat this month is either survey-level or cost-level.
