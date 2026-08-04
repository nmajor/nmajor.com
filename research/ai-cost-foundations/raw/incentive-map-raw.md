# Incentive map — raw fetch notes

**Collected:** 2026-08-04, foundations audit for the "AI costs more than a developer" claim.
**Method:** WebSearch + WebFetch sweeps on top of `research/ai-cost-discourse/report.md` (read, not redone)
and `research/uber-ai-budget/report.md`. Baseline documented schemes (Uber leaderboards, Amazon KiroRank +
80% weekly goal, Meta Claudeonomics/"Token Legend", Sendbird Beginner→AI God) taken from those reports;
everything below is what this sweep added or verified. Notes are condensed from tool output; URLs verbatim.

---

## 1. Usage leaderboards / quotas / mandates — search results

### 1.1 Microsoft — AI use in performance reviews (VERIFIED)
Query: `Microsoft internal memo AI use performance reviews metric "no longer optional" developers`
- Internal memo from **Julia Liuson**, CVP Developer Division, June 2025 (orig. Business Insider):
  "Using AI is no longer optional — it's core to every role and every level." Told managers AI use
  "should be part of your holistic reflections on an individual's performance and impact."
- Teams "reportedly weighing formal metrics to track AI usage in employee reviews," driven by weak
  internal Copilot adoption.
- URLs:
  - https://www.businesstoday.in/technology/news/story/ai-is-no-longer-optional-microsoft-makes-ai-usage-mandatory-ties-it-to-performance-reviews-482461-2025-06-30
  - https://www.pcgamer.com/gaming-industry/ai-is-no-longer-optional-microsoft-is-allegedly-pressuring-employees-to-use-ai-tools-through-manager-evaluations/
  - https://tech.yahoo.com/ai/articles/ai-no-longer-optional-microsoft-183003779.html
  - https://www.aol.com/github-ceo-says-microsofts-memo-155037592.html (GitHub CEO: "totally fair game")
- NOTE the irony for the essay: Microsoft is simultaneously an anchor of the "AI too expensive" cluster
  (revoked internal Claude Code licenses ~5/14/26 per discourse report) AND mandated AI use in reviews.

### 1.2 Broad sweep — companies with AI-usage KPIs in reviews
Query: `companies making AI usage a performance review metric mandate 2025 2026 employees`
- **Meta**: from 2026, "AI-driven impact" a core expectation in performance reviews for all employees
  (announced ~Nov 2025); 2025 self-reviews already urged to highlight AI-powered achievements.
  - https://winbuzzer.com/2026/02/04/meta-ties-employee-performance-reviews-ai-usage-2026-xcxwbn/
  - https://www.hrgrapevine.com/us/content/article/2025-11-17-meta-to-formally-review-employees-ai-performance-from-2026
- **KPMG**: from 2026, employees assessed on meeting "AI objectives" in annual reviews.
- **Block (Jack Dorsey)**: mandated every employee use generative AI daily; built into performance evaluations.
- **Qorvo**: standalone AI-tool exploration/deployment objective in FY2025 *executive incentive plan*, weighted 20%
  (per Harvard Law corp-gov roundup https://corpgov.law.harvard.edu/2026/03/02/ai-as-a-performance-metric-what-companies-are-disclosing-now/).
- **Google**: CEO message mid-2025 similar to Microsoft's; AI adoption reportedly factored into reviews.
- Framing found: "the dominant corporate playbook of early 2026: treat AI fluency as a performance metric,
  track it, and tie it to career advancement."
  - https://smarterarticles.co.uk/forced-to-use-ai-the-corporate-mandate-reshaping-every-career

### 1.3 Shopify — the template memo (VERIFIED)
Query: `Shopify Tobi Lutke AI memo performance reviews "reflexive AI usage" hiring bar`
- April 2025 leaked memo, then posted by Lütke himself: "Reflexive AI usage is now a baseline expectation
  at Shopify." Six points incl.: **AI use added to performance AND peer reviews**; teams must prove AI can't
  do a job before requesting headcount; applies to execs incl. Lütke.
  - https://x.com/tobi/status/1909251946235437514
  - https://www.digitalcommerce360.com/2025/04/08/internal-memo-shopify-ceo-declares-ai-non-optional/
  - https://www.tomshardware.com/tech-industry/artificial-intelligence/shopify-ceo-teams-must-prove-ai-cant-do-a-task-before-asking-for-new-hires-resources
- One retrospective claims the memo became the industry template ("eight months after Lütke's directive…
  Meta, Microsoft, Google, Nvidia now include AI fluency scores") — treat that specific list as blog-tier,
  but the template effect is corroborated by 1.1/1.2.
  - https://www.get-ryze.ai/blog/reflexive-ai-usage-one-year-on-how-the-shopify-memo-reshaped-commerce

### 1.4 Sendbird — VERIFIED, richer than the meme version
Query: `Sendbird AI usage ranking employees "AI God" leaderboard` + Forbes fetch (1.6)
- Running leaderboard of **token spend**; tiers Beginner (<1M tokens/day) → Intermediate → Expert →
  Architect → Catalyst → **AI God (100M+ tokens/day)**. Every manager sees team members' tiers.
  Rewards: coffee gift cards, swag, planned extra vacation days.
- Growth lead Abhi Jothilingam: "people are motivated by competition."
- CEO John Kim's own hedge: 8 of top 10 spenders are highly productive, "the rest may be more experimental";
  token spend is "a conversation starter," and he flags the echo of **lines-of-code-era measurement**.
  - https://www.forbes.com/sites/richardnieva/2026/03/31/the-ai-gods-spending-as-much-as-they-can-on-ai-tokens/
  - https://www.lennysnewsletter.com/p/how-i-ai-quests-token-leaderboards (Lenny's podcast: "Sendbird's elite AI-adoption playbook", quests + token leaderboards)

### 1.5 Duolingo — mandate AND retraction (the control case)
Query: `Duolingo "AI-first" memo von Ahn performance reviews AI use constitutional`
- April 2025 "AI-first" memo (Luis von Ahn): AI use tracked in performance reviews, AI proficiency in
  hiring, contractors cut where AI could do the work. Massive backlash.
- **April 2026: reversed.** Von Ahn (Silicon Valley Girl podcast): employees asked "Do you just want us to
  use AI for AI's sake?" — "…if it can't [help], I'm not going to force you to do that." AI use dropped
  from performance reviews.
  - https://fortune.com/2026/04/13/duolingo-ceo-luis-von-ahn-ai-usage-requirement-employee-performance-evaluations/
  - https://winbuzzer.com/2026/04/14/duolingo-drops-ai-performance-reviews-rivals-push-mandates-xcxwbn/
- Useful as the one company that publicly named the failure mode ("AI for AI's sake") and exited the scheme.

### 1.6 Forbes "AI Gods" (Richard Nieva, 2026-03-31) — FETCHED
URL: https://www.forbes.com/sites/richardnieva/2026/03/31/the-ai-gods-spending-as-much-as-they-can-on-ai-tokens/
New schemes it documents:
- **Databricks**: public celebration of high token spenders. CEO Ali Ghodsi on an engineer who spent
  $7,000+ in two weeks via internal tool "Isaac": "We had everybody in engineering clap for him, and
  celebrate what he did."
- **Nvidia**: CEO Jensen Huang sets an explicit spend *floor* expectation: "If that $500,000 engineer did
  not consume at least $250,000 worth of tokens, I am going to be deeply alarmed."
- **Meta**: CTO Andrew Bosworth on token spending: "It's like, this is easy money. Keep doing it. No limit."
- **Google**: AI tool adoption reportedly factored into performance reviews.

### 1.7 Yahoo Tech / Business Insider "Office AI leaderboards are here" — FETCHED
URL: https://tech.yahoo.com/ai/articles/office-ai-leaderboards-tell-us-083501369.html
- **JPMorgan**: dashboards categorize employees as "non," "light," or "heavy" users by AI token consumption.
- **Disney**: "AI Adoption Dashboard" tracking Claude API invocations; one employee logged **460,000
  invocations in nine days** (suggests automated/agent gaming).
- **Meta**: gamified "Token Legend" titles (matches Claudeonomics reporting in discourse ledger).
- Article names the practice "tokenmaxxing" and frames the open question: healthy competition vs
  "reward volume over value."

### 1.8 Coinbase — adoption mandate by firing (the other enforcement style)
Query: `Coinbase Brian Armstrong fired engineers who did not onboard AI coding tools`
- Aug 2025 (TechCrunch, Fortune/Yahoo): Armstrong "went rogue" in Slack — every engineer must onboard to
  Cursor/Copilot within a week; those without a good reason at the Saturday meeting were fired on the call.
  - https://techcrunch.com/2025/08/22/coinbase-ceo-explains-why-he-fired-engineers-who-didnt-try-ai-immediately
  - https://www.cio.com/article/4050185/fire-any-developer-who-doesnt-use-ai-why-coinbase-ceos-tough-message.html
- Nuance for the map: Coinbase mandated *adoption* but not usage volume — and later became the
  cost-discipline counterexample (cut AI spend ~half while usage grew; discourse report §3b). Mandates and
  cost governance are separable.

### 1.9 Not everything fetched
- sidehustles.com token-maxxing roundup returned HTTP 403 — not retrieved (title indexed in search results only).

---

## 2. Who profits — amplifier notes

### 2.1 "AI costs more than devs" side
- **@IdleProtocol** — already in discourse ledger raw (`ai-cost-discourse/raw/instances.md` S1, note
  verbatim): "account is a compute-marketplace project (IDLE Protocol) with a commercial interest in the
  'compute is scarce/expensive' frame." Its 8/01 post is the top class-A social instance.
- **FinOps / cost-governance vendors** — the Uber story is literally their content marketing:
  - MindStudio: "What Is the AI Token Cost Crisis? Why Uber Burned Its Entire AI Budget in 4 Months"
    https://www.mindstudio.ai/blog/ai-token-cost-crisis-uber-budget
  - elvex: "AI Token Cost Enterprise: Stop Budget Blowouts in 2026" (sells a governance layer between org
    and LLM providers) https://www.elvex.com/blog/ai-token-cost-enterprise-budget-control
  - Vantage: "AI Cost Observability: Measuring and Justifying Token Spend in 2026"
    https://www.vantage.sh/blog/finops-for-ai-token-costs (also monetizes the Cursor confusion:
    "Cursor Pricing Explained 2026")
  - Finout: "What Happened to Cursor Pricing? 2026 Guide & 5 Cost Cutting Tips"
    https://www.finout.io/blog/what-happened-to-cursor-pricing-2026-guide-5-cost-cutting-tips
  - CloudZero: "GitHub Copilot cost: what teams actually pay in 2026" https://www.cloudzero.com/blog/github-copilot-cost/
  - FinOps Foundation has a working group: "Token Economics: Managing AI Value in SaaS"
    https://www.finops.org/wg/token-economics-saas/
  - Ecosystem tools cited as sitting in the API path: LiteLLM, Portkey, Helicone.
  - Stat circulating in this content: "73 percent of companies over plan" on AI budgets (innobu).
- **Neoclouds / GPU marketplaces** — the cheaper-compute pitch needs the "you're overpaying" frame:
  - Marketing claims of 60–80% savings vs hyperscalers (Thunder Compute A100 $1.09/hr vs AWS $3.43/hr);
    Vast.ai, RunPod marketplace models; Hivenet "billing clocks continue even when instances sit unused."
  - https://www.thundercompute.com/blog/neoclouds-the-new-gpu-clouds-changing-ai-infrastructure
  - https://vast.ai/article/what-is-a-neocloud-business-model-explained
  - https://compute.hivenet.com/post/economics-of-the-neocloud
- **Gartner** — sells advisory subscriptions; the 2028 crossover projection is its demand generator. Also
  (per discourse ledger P12/Register) Gartner's Tyagi accuses *vendors* of promoting tokenmaxxing — the
  analyst profits from naming the problem either way.
- **Media** — man-bites-dog economics: Fortune ran the confound in body text under a "more expensive than
  paying human employees" headline (discourse report §1); Reddit Amazon-$1.8M thread = 23.5k upvotes.
- **modelplane** — even the best self-measured steelman post (13x subsidy) is published by an open-source
  **control plane for AI inference** with "cost controls" in its pitch (https://modelplane.ai/,
  https://modelplane.ai/blog/open-control-plane-for-inference). Doesn't invalidate the data; it is another
  problem-sells-product incentive.

### 2.2 "AI is cheap / AI replaces workers" side
- **AI vendors' ROI marketing**: Anthropic's own published $13/dev/active-day and $150–250/mo figures
  (already in discourse report §3b) are the canonical "it's cheap" numbers — produced by the seller.
- **Execs using AI as layoff cover**: 2026 layoffs avg 1,115/day; Meta, Oracle, Block cite AI for ~184k
  cuts; Sam Altman calls it "AI washing." SHRM: "Real Transformation, or Scapegoat?"; HBR (Jan 2026):
  "Companies Are Laying Off Workers Because of AI's Potential — Not Its Performance"; The Interview Guys:
  "56% of 2026 Layoffs Now Blame AI, But the Companies Cutting Jobs Are the Same Ones Spending Billions on
  It"; MIT: AI automation economically viable in only ~23% of roles; Tom's Hardware: no correlation between
  workforce reductions and improved ROI.
  - https://hbr.org/2026/01/companies-are-laying-off-workers-because-of-ais-potential-not-its-performance
  - https://www.shrm.org/topics-tools/news/technology/ai-layoffs-transformation-scapegoat
  - https://www.techtimes.com/articles/318466/20260616/tech-layoffs-hit-1115-day-2026-companies-cite-ai-cuts-fail-boost-returns.htm
  - https://blog.theinterviewguys.com/56-of-2026-layoffs-now-blame-ai-but-the-companies-cutting-jobs-are/
  - https://www.tomshardware.com/tech-industry/artificial-intelligence/executives-are-cutting-jobs-for-an-ai-future-that-hasnt-fully-arrived-yet-even-as-productivity-gains-remain-difficult-to-prove-data-neither-confirms-nor-refutes-an-ai-unemployment-apocalypse

---

## 3. Vendor pricing — subsidy-then-reprice cycle

### 3.1 Cursor (June 2025)
Query: `Cursor pricing change June 2025 backlash unlimited plan repriced bill shock refunds`
- June 16, 2025: Pro plan flipped from 500 fast requests + unlimited slow to a $20 usage pool at API rates;
  poorly communicated; users found the change after incurring charges; "silently raised their price by over
  20x" (Medium user framing). July 4, 2025: public apology + refunds for surprise charges 6/16–7/4.
  - https://www.fintechweekly.com/magazine/articles/cursor-pricing-change-user-backlash-refund
  - https://www.wearefounders.uk/cursors-pricing-disaster-the-full-timeline-of-how-an-ai-coding-darling-burned-its-most-loyal-users/
  - https://medium.com/@jimeng_57761/when-cursor-silently-raised-their-price-by-over-20-and-more-what-is-the-message-the-users-are-6af93385f362

### 3.2 Anthropic Claude Code (July–Aug 2025, then 2026 loosening)
Query: `Anthropic Claude Code weekly rate limits "unlimited" Max plan subsidy losing money power users`
- 7/28/2025 announcement, effective late Aug 2025: weekly rate limits for Pro/Max; "less than 5% of
  subscribers"; Anthropic cited a user consuming "tens of thousands in model usage on a $200 plan";
  targets 24/7 usage, account sharing, reselling.
  - https://x.com/AnthropicAI/status/1949898502688903593
  - https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users
- Then the cycle turns again when competition bites: 5/6/2026 Anthropic permanently doubled Claude Code's
  5-hour limits and removed peak-hour reductions; a further +50% weekly-limit promo through 7/13/2026
  framed as an "anti-Codex move."
  - https://www.explainx.ai/blog/claude-usage-limits-2026-timeline-explained
  - https://pasqualepillitteri.it/en/news/2494/claude-code-weekly-limits-50-percent-anti-codex-anthropic-2026
- Cross-ref: modelplane 13x/52x measured seat-price subsidy (discourse report §3) is the size of the wedge
  between flat-plan price and API list.

### 3.3 GitHub Copilot (June 2025, then June 2026)
Query: `GitHub Copilot premium requests billing June 2025 pricing change unlimited backlash`
- June 2025: "premium requests" enforced — Pro capped at 300/mo, overages $0.04.
- **June 1, 2026**: full move to usage-based billing; PRUs replaced by "GitHub AI Credits" tied to token
  consumption; base price unchanged but community projections of **10x–50x cost increases for heavy agentic
  workflows**; dev sentiment: "You will get less, but pay the same price"; core complaint = unpredictability.
  - https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - https://www.techtimes.com/articles/317536/20260601/github-copilot-pricing-change-drives-backlash-agentic-bills-jump-10x-50x-power-users.htm
  - https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx
  - https://devops.com/github-resets-copilot-pricing-as-ai-compute-costs-surge/
  - https://github.com/orgs/community/discussions/192963

### 3.4 The cycle, stated
Flat/"unlimited" plans priced below marginal cost → adoption + "too cheap to meter" impression + usage
habits formed under zero marginal price (the same period the leaderboards ran) → repricing to usage →
bill-shock stories → "AI costs more than devs" headlines. Both halves of the discourse are artifacts of the
same pricing strategy; neither half is a clean read of unit economics. Corroborating background: token
unit prices fell ~67% early-2025→early-2026 (innobu) and >90% since 2023 (Ramp, via discourse report)
while agentic request volume multiplied (Meta 30x in six months per innobu; Goldman 24x tokens by 2030).

### 3.5 Historical rhymes (one-liner material)
Not separately researched (well-established): gym memberships priced on predicted non-attendance;
printer razor-and-blades (cheap printer, metered ink); cloud egress fees (cheap in, expensive out —
regulated into free-tier concessions by EU Data Act pressure 2024). The AI twist that makes it novel:
here the *buyers'* own leaderboards pushed usage toward the meter, i.e., the customer side helped
manufacture its own bill shock.

---

*Everything above is condensed tool output; re-fetch any URL to re-verify. Baseline schemes and all
Uber/Amazon/Meta sourcing live in `research/ai-cost-discourse/` and `research/uber-ai-budget/`.*
