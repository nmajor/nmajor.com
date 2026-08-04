# Raw instance ledger — "AI coding costs more than the engineer / not worth it at API prices"

Collected 2026-08-04. Sources: (a) existing corpus `research/social-week-2026-08-04/raw/last30days/last-report-full.json`
(242 items, window 2026-07-05..2026-08-04) — all quotes below from that file are verbatim from its stored bodies;
(b) WebSearch/WebFetch sweep of press and HN, 2026-08-04 (fetch notes in `web-notes-2026-08-04.md`).

Legend per instance: WHO / WHERE / DATE / REACH / CLAIM (verbatim where possible) / EVIDENCE CITED / CONFOUND
(does it acknowledge the leaderboard-or-incentive inflation of the bills it cites? y = yes, n = no, partial = mentions
leaderboards as color but does not treat them as a confound to the cost claim).

Classification key (used in the report tally):
- **A = strict claim**: AI costs more than (or as much as) the human, now.
- **B = trajectory claim**: AI coding costs will surpass engineer pay (Gartner-style).
- **C = not-worth-it / ROI claim**: the spend bought nothing provable (weaker cousin, same discourse).

---

## Social-tier instances (from the last30days corpus)

### S1. @IdleProtocol — X, 2026-08-01 — class A
- URL: https://x.com/IdleProtocol/status/2083650530111324241
- Reach: 32 likes, 10 reposts, 4 replies (top-ranked item in the corpus's evidence clusters)
- Claim (verbatim): "Companies are now paying more to run AI than to employ the people using it."
- Evidence cited: Microsoft Claude Code license cancellations; Uber budget blowout; Nvidia exec quote via Fortune
  ("the cost of compute is far beyond the costs of the employees"); Goldman 24x token-growth projection.
- Confound: **n**. No mention of leaderboards or usage incentives.
- Note: account is a compute-marketplace project (IDLE Protocol) with a commercial interest in the "compute is scarce/expensive" frame.

### S2. @pukerrainbrow — X, 2026-08-01 — class A
- URL: https://x.com/IdleProtocol/status/2083661048905945330 → https://x.com/pukerrainbrow/status/2083661048905945330
- Reach: 29 likes, 13 replies
- Claim (verbatim): "everyone talks about AI replacing jobs and cutting costs. nobody talks about how the AI itself
  costs more than the people it's replacing"
- Evidence cited: Uber budget blowout; "microsoft stopped claude code usage because the bill exceeded their annual budget within months."
- Confound: **n**.
- Fact-checked in-thread by @kitsunedevs (see S11).

### S3. @macropaperr — X, 2026-07-25 — class A
- URL: https://x.com/macropaperr/status/2081032876846624950
- Reach: 33 likes, 6 reposts
- Claim (verbatim): "Companies are laying off workers to fund AI. But in many cases, the AI now costs more than the
  employees it replaced."
- Evidence cited: $740B big-tech AI infra spend figure; Uber blowout; "executives admitted the extra AI usage didn't
  translate into more useful products" (truncates before further bullets, which per the pattern continue with Microsoft/Amazon).
- Confound: **n**.

### S4. Peter Grant — LinkedIn, 2026-07-23 — class A/C
- URL: https://www.linkedin.com/posts/peterkgrant_uber-burned-its-entire-2026-ai-budget-in-activity-7486035311840391169-tUaI
- Reach: not visible (surfaced via Perplexity citation in corpus)
- Claim (from snippet): "Uber burned its entire 2026 AI budget in four months on Claude Code. ... Per-engineer spend ran
  $150 to $250 a month typically, with heavy users hitting $500 to $2,000."
- Evidence cited: Uber (The Information/Forbes numbers).
- Confound: **n** (in visible text).
- Same author as @pgrant67 (S5) — uses the story to sell an "AI ROI Index" product.

### S5. @pgrant67 — X, 2026-07-30 — class C
- URL: https://x.com/pgrant67/status/2082884352300527762
- Reach: 1 like
- Claim (verbatim): "Uber gave 5,000 engineers Claude Code. 4 months later, their entire 2026 AI budget was gone.
  This is what happens when adoption outruns proof."
- Evidence cited: Uber only. Confound: **n**. Commercial CTA (free AI ROI Index).

### S6. @wlassalle — X, 2026-07-15 — class C (confound-aware)
- URL: https://x.com/wlassalle/status/2077372892250001720
- Reach: 8 likes, 5 replies
- Claim (verbatim): "Uber just burned through its entire 2026 AI budget in four months. The company that encouraged
  employees to use AI 'as much as possible' — complete with internal leaderboards — now has a $1,500 per-engineer monthly cap..."
- Evidence cited: Uber + Gartner (28% of AI projects fully meet ROI; 20% fail) + Forbes (<1% of execs see ROI >20%).
- Confound: **y** — one of only two social instances in the corpus that names the leaderboards, though it uses them as
  color ("encouraged... as much as possible") rather than as a reason to discount the bill.

### S7. @MichaelGannotti — X, 2026-07-15 — class C
- URL: https://x.com/MichaelGannotti/status/2077406206545756515
- Reach: 8 likes
- Claim (verbatim): "Uber burned its entire 2026 AI budget in 4 months. Claude Code generated 70% of their code.
  Zero feature velocity gain."
- Evidence cited: Uber. Confound: **n**. ("Zero feature velocity gain" is itself an overstatement — sourced reporting says
  the link is unproven, not that gain was zero.)

### S8. @BIGMayrr — X, 2026-07-15 — class C-adjacent
- URL: https://x.com/BIGMayrr/status/2077278440378581338
- Reach: 25 likes, 9 replies
- Claim: uses Uber's bill as "the production version" of the agent-loop story ("The romantic version is a six-word tweet
  that hit two million views. The production version is the bill above.")
- Evidence cited: Uber. Confound: **n**.

### S9. davesaunders — Instagram reel, 2026-07-18 — class C
- URL: https://www.instagram.com/reel/Da7xd96ElQJ/
- Reach: 106 views (reel), companion YouTube video linked
- Claim (verbatim): "Uber is the cleanest cautionary tale I've got. 95% of their engineers use AI. 70% of the code they
  ship is AI-generated. Then they spent a full year's AI budget in four months, and admitted there was no clear tie between
  all that usage and anything customers actually wanted."
- Evidence cited: Uber. Confound: **n**.

### S10. Tony Xu podcast intro (Podcast Alpha, host "Jack") — 2026-07-30 — class C
- URL: https://podcastalpha.substack.com/tony-xu-co-founder-and-ceo-of-doordash
- Claim (episode blurb, verbatim): "Uber reportedly blew through its entire AI budget in a few months and still can't say
  what it got for it."
- Evidence cited: Uber. Confound: **n**.

### S11. @kitsunedevs — X, 2026-08-01 — FACT-CHECK (counter-instance)
- URL: https://x.com/kitsunedevs/status/2083666477551399211
- Reach: 0 likes (vs. 29 on the post it corrects)
- Text (verbatim): "uber said '2026 AI budget' not 'total AI spend' / microsoft stopped one tool claude code not all AI
  usage / the post treats these as the same thing but they're not"
- Notes viral versions overstate even the basic facts. Does not itself raise the leaderboard confound.

### S12. @stevenfiorillo — X, 2026-07-17 — CONTRARIAN (counter-instance)
- URL: https://x.com/stevenfiorillo/status/2078178532652638447
- Reach: 84 likes, 13 replies — the highest-engagement X take in the corpus
- Claim: "Everyone claiming $UBER cut its AI token budget is getting the story wrong as the data says the opposite."
  Adoption 32%→84% agentic in two months; 95% monthly use; ~70% of committed code — Uber doubled down; the cap is governance.
- Confound: n (argues from adoption data, not incentives).

### S13. r/technology — Reddit, 2026-07-30 — class A-adjacent (Amazon leak)
- URL: https://www.reddit.com/r/technology/comments/1vay198/amazon_accidentally_spent_18_million_using_claude/
- Reach: **23,552 upvotes, 1,176 comments — the single biggest social item in the corpus**
- Headline claim: "Amazon accidentally spent $1.8 million using Claude for menial coding task, went 860% over budget —
  'catastrophically expensive' coding blunders discovered in internal Amazon AI usage metrics" (Tom's Hardware headline).
- Evidence cited: leaked Amazon internal metrics (FT reporting).
- Confound: the underlying coverage (gHacks 2026-07-31) explicitly ties the waste to Amazon's 80%-weekly-usage goal and
  leaderboard ("tokenmaxxing"); comment-level confound uptake not retrievable (Reddit fetch blocked 2026-08-04).

### S14. HN thread "Uber torches 2026 AI budget on Claude Code in four months" — 2026-05-01 — mixed
- URL: https://news.ycombinator.com/item?id=47976415 (briefs.co link)
- Reach: **402 points, 475 comments** — the main HN venue for the claim
- Claim instances in comments (via Algolia fetch, 2026-08-04): jeffbee: "If you're asking whether you can afford it then
  it isn't productive by definition"; multiple cost-skeptic comments.
- Confound present in comments: **y** — joshuastuden: "At Cerebras I know of several people who burn tokens on completely
  USELESS tasks (randomly changing pixels in an image) just to keep them high up on the token leaderboard." fidotron: "It's
  actually incredible the extent to which non devs imposing KPIs on devs underestimate how badly this will get gamed."
  p_stuart82: "once the KPI is 'how much AI did you use' instead of 'what did you ship,' the budget blowout writes itself."
- The famous "~1% of R&D" arithmetic comment was not surfaced in this fetch (see uber-ai-budget report §7.1 — it exists but
  its arithmetic doesn't reconcile; our own math says 0.3–0.8%).

### S15. Beyond Coding (YouTube, Amos Haviv / Booking.com interview) — 2026-07-29 — class C
- URL: https://www.youtube.com/watch?v=U2p01LVC5Oo
- Reach: 6,111 views, 105 likes
- Claim (from description/transcript): "Everybody is burning through their AI budget right now and almost nobody can answer
  what it bought them." Names Uber and Microsoft. Confound: **n**.

### S16. transformationprincess — Instagram reel, 2026-07-25 — structural variant
- URL: https://www.instagram.com/reel/DbN5fsKxsG8/
- Reach: 30,212 views, 837 likes — biggest Instagram item in corpus
- Claim: enterprises hate usage-based licensing; "every CFO who got an unexpectedly high AI bill is being reminded in
  technicolor why they have pushed back against these licensing models for so long." Not the costs-more-than-engineer claim,
  but the same discourse. Evidence: general. Confound: n.

### S17. O'Reilly / Christina Stathopoulos — Instagram reel, 2026-07-14 — CONFOUND-AWARE (counter-instance)
- URL: https://www.instagram.com/reel/DayYuG0mw4g/
- Reach: 142 views
- Text (verbatim): "Christina Stathopoulos argues that tokenmaxxing was always a flawed productivity metric, and moves like
  Amazon shutting down its token leaderboard and Uber capping spending suggest companies are starting to focus on maximizing
  value instead." One of the few social items that treats the leaderboards as the story.

### S18. @LayoffAI "TOKENMAXXXXING — $UBER Pt. 2" — X, 2026-08-02 — CONFOUND-AWARE franchise
- URL: https://x.com/LayoffAI/status/2083944118372151759
- Reach: 68 likes, 11 reposts — highest-engagement X item in corpus
- Runs "tokenmaxxing" as a named franchise; this installment covers Uber CTO's Agentic Pods pivot. The naming itself
  spreads the incentive framing.

### S19. @anakinHQ — X thread, 2026-07-13 — structural variant (Jevons)
- URL: https://x.com/anakinHQ/status/2076606353276272822
- Reach: 4 likes
- Claim: "AI models got 99% cheaper to run in three years, and yet some teams still ended up with bigger bills." Cites Uber +
  Microsoft. Confound: n.

---

## Press-tier instances (web sweep 2026-08-04; see web-notes for fetch details)

### P1. Axios — 2026-04-26 — class A — **origin node for the Nvidia quote**
- URL: https://www.axios.com/2026/04/26/ai-cost-human-workers ("AI can cost more than human workers now")
- The Catanzaro interview ran here; Fortune's June piece attributes the quote to Axios April 2026. (403 on direct fetch;
  characterized via Fortune's attribution and TechSpot's retelling.)
- Evidence: Catanzaro (Nvidia VP applied deep learning): "For my team, the cost of compute is far beyond the costs of the
  employees." NOTE: said about Nvidia's own deep-learning research team (training/research compute), not about coding-assistant bills.

### P2. Futurism (Frank Landymore) — 2026-04-27 — class A
- URL: https://futurism.com/artificial-intelligence/bosses-more-money-ai-agents-human-salary
- "Bosses Are Blowing More Money on AI Agents Than It'd Cost Them to Just Pay Human Workers"
- Evidence: Catanzaro quote; Uber (The Information); Meta tying performance reviews to AI usage; an individual engineer
  claiming $150,000+/month token spend; engineer Max Linder claiming token spend exceeds salary.
- Confound: **partial** — explicitly describes "tokenmaxxing" (bills as status markers) but keeps the headline claim.

### P3. TechSpot (Skye Jacobs) — 2026-04-28 — class A
- URL: https://www.techspot.com/news/112209-ai-compute-costs-getting-high-they-starting-rival.html
- "At Nvidia, compute already costs more than employees. The rest of corporate America is catching up."
- Evidence: Catanzaro; Uber; Gartner IT-spend data. Confound: **n** (no leaderboard mention).

### P4. Fortune (Jake Angelo) — 2026-05-22 — class A — **the load-bearing headline**
- URL: https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/
- "Microsoft reports are exposing AI's real cost problem: Using the tech is more expensive than paying human employees"
- Evidence: Microsoft revoking Claude Code licenses (from ~May 14); Uber blowout "after creating internal leaderboards
  ranking teams by AI tool usage"; Meta "Claudeonomics"; Amazon "tokenmaxxing"; Catanzaro quote; Gartner; Goldman 24x.
- Confound: **y, but not treated as a confound** — the leaderboards appear in the article body for Uber/Meta/Amazon while
  the headline still asserts the cost claim. No counter-arguments presented (per fetch).

### P5. Fortune (Sasha Rogelberg) — 2026-06-14 — class A
- URL: https://fortune.com/article/why-is-the-cost-of-ai-higher-than-human-workers-nvidia-executive/
- "'The cost of compute is far beyond the costs of the employees': Nvidia exec says right now AI is more expensive than
  paying human workers" (syndicated to Yahoo Finance)
- Evidence: Catanzaro (via Axios, April); MIT 2024 study (AI automation economically viable in only ~23% of vision-work
  roles); Uber ("after incentivizing tool adoption via employee leaderboards"); Microsoft cancellations.
- Confound: **y** — explicitly says Uber incentivized adoption via leaderboards; headline claim retained anyway.
- This is the article @IdleProtocol (S1) compresses into "Fortune got the reason out of an Nvidia exec."

### P6. Entrepreneur — ~June 2026 — class A (derivative)
- URL: https://www.entrepreneur.com/business-news/nvidia-vp-says-it-costs-more-to-use-ai-than-to-hire-humans
- "Nvidia VP Says AI Costs 'Far' More Than Human Employees." Derivative of Axios/Fortune. Not fetched.

### P7. Windows Central — ~May 2026 — class A
- URL: https://www.windowscentral.com/artificial-intelligence/microsofts-own-data-suggests-ai-is-more-expensive-than-hiring-humans-as-a-mystery-firm-burns-usd-500-million-on-claude-in-one-month
- "Microsoft's own data suggests AI is more expensive than hiring humans, as a mystery firm burns USD 500 million on Claude
  in one month." (Fetch returned nav shell only; recorded from headline + search summary.)

### P8. KuCoin news flash — class A (derivative)
- URL: https://www.kucoin.com/news/flash/microsoft-halts-internal-use-of-claude-code-as-ai-token-costs-outpace-employee-expenses
- "Microsoft Stops Internal Use of Claude Code as AI Token Costs Exceed Employee Expenses." The claim reaches crypto-news feeds.

### P9. Forbes (Jemma Green, contributor) — 2026-07-02 — class A
- URL: https://www.forbes.com/sites/jemmagreen/2026/07/02/ai-costs-more-than-the-people-it-replaced/
- "AI Costs More Than The People It Replaced"
- Evidence: Uber; Microsoft; $500M mystery-company Claude bill; Catanzaro; MIT ~23% study; Goldman; Sequoia $600B; Gartner
  (95% of enterprise AI on costliest frontier models); Faros AI (code churn +800%); OpenAI subsidy economics.
- Confound: **y, extensively** — documents Amazon "KiroRank" gaming, Meta "Claudeonomics", tokenmaxxing culture; frames
  spending-as-measured-output. Headline claim retained anyway.
- Likely the source of @macropaperr's (S3) framing ("costs more than the people it replaced", laying off workers to fund AI).

### P10. Gartner press release — 2026-06-24 — class B — **the second independent root**
- URL: https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges
- "Gartner Predicts AI Coding Costs Will Surpass Average Developer's Salary by 2028 as Token Consumption Surges"
- (403 on direct fetch; characterized via The Register + CIO Dive.) Basis: escalation of per-dev monthly bills from
  $20–$100 toward $2,000–$5,000 (up to $20,000); consumption-based licensing; token growth. Analyst Nitish Tyagi.
- Notable Gartner statements (via Register): token costs in India "already match salaries of engineers with 4–6 years'
  experience"; "There is no direct relation between the increase in token consumption and an increase in productivity gains."
- Confound: **partial** — Register version has Tyagi accusing *vendors* of promoting "tokenmaxxing" to fake productivity.

### P11. The Register (Lindsay Clark) — 2026-06-24 — class B
- URL: https://www.theregister.com/ai-and-ml/2026/06/24/ai-coding-agents-could-soon-cost-more-than-the-developers-using-them/5260864
- "AI coding agents could soon cost more than the developers using them." Evidence: Gartner. Confound: partial (vendor tokenmaxxing).
- HN repost 2026-06-26: 3 points (id 48688993) — the trajectory claim did NOT take off on HN.

### P12. CIO Dive (Paige Gross) — 2026-06-24 — class B
- URL: https://www.ciodive.com/news/ai-spending-outpacing-human-developers/823690/
- "AI coding will soon get pricier than human developers." Evidence: Gartner + KPMG + Altimetrik. Confound: **n** (only
  "ungoverned autonomous agents" running for days unnoticed). No skeptical voices (per fetch).

### P13. CIO.com — ~June 2026 — class B
- URL: https://www.cio.com/article/4189149/ai-coding-token-costs-are-on-track-to-rival-human-payroll.html
- "AI coding token costs are on track to rival human payroll." Gartner derivative. Not fetched.

### P14. TechTimes — 2026-06-29 — class B
- URL: https://www.techtimes.com/articles/319333/20260629/ai-coding-costs-can-drain-budget-days-gartner-predicts-they-will-match-developer-pay.htm
- "AI Coding Costs Can Drain a Budget in Days: Gartner Predicts They Will Match Developer Pay." Gartner derivative.

### P15. ThePlanetTools blog — ~May 2026 — class A (SEO derivative)
- URL: https://theplanettools.ai/blog/microsoft-ai-token-economics-agents-cost-vs-employees-claude-code-copilot-may-2026
- "When AI Costs More Than an Engineer: The Token Bill." Derivative of the Fortune/Microsoft cluster. Illustrates the SEO
  long-tail of the claim.

### P16. The Next Web — class A-adjacent
- URL: https://thenextweb.com/news/microsoft-claude-code-retreat-ai-cost
- "Microsoft's quiet Claude Code retreat and the real cost of enterprise AI." Goldman 24x projection. In corpus's WebSearch appendix.

### P17. Tom's Hardware — 2026-07-30 — Amazon leak (evidence node, not the claim itself)
- URL: https://www.tomshardware.com/tech-industry/artificial-intelligence/amazon-accidentally-spent-usd1-8-million-using-claude-for-menial-coding-task-went-860-percent-over-budget-catastrophically-expensive-coding-blunders-discovered-in-internal-amazon-ai-usage-metrics
- $1.8M author-matching job ran 5 months undetected (860% over); $541K financial-audit overrun; $134K logistics overrun;
  SVP Dave Treadwell: "Please don't use AI just for the sake of using AI." Source: leaked internal docs via FT.
- Confound context: Amazon's 80%-weekly-usage goal + KiroRank leaderboard, gamed with junk agent tasks ("tokenmaxxing"),
  leaderboard shut late May 2026 (gHacks 2026-07-31; Tom's Hardware "Big tech has a tokenmaxxing habit"; FT).
- HN reposts: 2026-07-30 (5 pts), 2026-08-01 (8 pts). Reddit: S13 (23.5k upvotes).

### P18. $500M mystery-company cluster — 2026-05-28 — class A evidence node
- Tom's Hardware: "Mystery company accidentally blew $500 million on Claude in a single month — failed to put usage limit
  on licenses for employees"; Futurism; techstartups.com 2026-05-28; recycled by Forbes Jemma Green (P9) and Windows Central (P7).
- Single-sourced, company never named, no independent verification found in this sweep. Treat as unverified.

---

## Steelman corpus (best evidence FOR the claim, independent of Uber)

### F1. modelplane.ai (Bassam Tabbara, Upbound) — 2026-07-23 — own data
- URL: https://modelplane.ai/blog/ai-coding-subsidy-multiple — HN 2026-07-23: 20 points (the analysis got traction)
- Measured 20 engineers' June Claude Code session logs, priced at API list: average **13x** the $125/mo seat price;
  heaviest engineer **52x** (~$6,500/mo at list); one engineer on direct API actually paid ~$5,500/mo.
- Implication: at true API prices, heavy users cost $65k-80k/yr — real money, though still below a US senior salary;
  above some offshore rates. And the subsidy could end.

### F2. Gartner India datapoint — 2026-06-24
- Via Register (P11): token costs in India already match salaries of engineers with 4–6 years' experience. The strongest
  "already true somewhere" version of the claim, from a non-Uber source (though Gartner's inputs are undisclosed).

### F3. Ramp AI Index / Ramp blog — June 2026 — own panel data (70,000+ businesses)
- URLs: https://ramp.com/data/ai-index ; https://ramp.com/blog/ai-token-cost-for-businesses
- Token consumption across Ramp customers +1,001% Jan 2025→Apr 2026; monthly AI spend 4x Feb 2025→Feb 2026; total corporate
  AI spend doubled since late 2025 **while token prices fell >90% since 2023** (Jevons). Median company: **$11.38/employee/month**;
  top 1% of firms: **$7,450/employee/month**. The distribution's tail is where the claim lives.

### F4. Individual-scale blowouts — July 2026
- Theo (t3.gg) exhausted his Claude Code weekly limit in one workday (Digg cluster, 2026-07-30, https://di.gg/ai/xersgk0p).
- AI researchers burned Codex Pro budget 20x in 12 hours (Digg, 2026-07-30, https://di.gg/ai/rr0dxalp).
- Futurism (P2): one engineer claims $150k+/month in tokens; Max Linder claims token spend > his salary. (Self-reports.)

### F5. Amazon $1.8M single task (P17) — genuine unit-economics failure mode: an agent left running IS more expensive than
  the intern who would have noticed. But it is a governance story (ran 5 months undetected), and sits inside the 80%-goal culture.

### F6. Heavy-agentic band, sourced: Uber power users $500–$2,000/mo (Forbes verbatim, SOLID per uber-ai-budget report §4.1);
  Simon Willison's cap math: $18k/yr/tool, ~$36k/yr two-tool ceiling ≈ 11% of a (his figure) $330k Uber comp package.
  $24k/yr genuinely exceeds junior offshore all-in cost in some markets.

## Steelman corpus (best evidence AGAINST)

### A1. The averages: Anthropic's published $13/dev/active-day and $150–250/mo (particula.tech 2026-07-27,
  https://particula.tech/blog/ai-coding-agent-cost-per-engineer-spend-caps); Tokenade (2026-07-17, ~$6/day average Claude
  Code across its data, $200–500/dev/mo all-in at scale, "the heavy 10% blow the budget",
  https://tokenade.net/en/stats/ai-coding-cost-per-developer); Ramp median $11.38/employee/mo (F3).
  $150–250/mo ≈ 1–2% of a US engineer's loaded cost.

### A2. Uber's own arithmetic (from research/uber-ai-budget/report.md, all-sourced): 5,000 engineers × $150–250/mo →
  ~$10–25M/yr ≈ **0.3–0.8% of Uber's $3.4B 2025 R&D** ("under 1%" is the defensible phrasing). The budget that was "blown"
  was a small line item mis-forecast 3x, not spend approaching payroll.

### A3. Coinbase (Brian Armstrong, X, https://x.com/brian_armstrong/status/2070670644577280109; HN 2026-07-30):
  cut AI spend ~in half **while token usage kept growing** via routing to open-weight models (GLM 5.2, Kimi 2.7),
  caching (5%→60% hit rate), better defaults. "91% of our employees were never hitting their usage caps." Cost is a
  choice of defaults, not a law of nature.

### A4. The confound documentation: Uber leaderboards + adoption push by teams that didn't own the budget (Moneywise/Yahoo
  verbatim: "the teams promoting adoption weren't responsible for controlling the budget"); Amazon 80% weekly-usage goal +
  KiroRank gamed with junk tasks, shut late May (FT/gHacks/Tom's Hardware); Meta "Claudeonomics" ranking 85,000+ staff,
  "Token Legend" titles, 60T+ tokens/30 days, ~$221M in a month per IBTimes; Sendbird "Beginner"→"AI God" ranks.
  The three biggest blowout datapoints all sat inside usage-maximizing incentive systems.

### A5. Gartner's own caveat (via Register): "There is no direct relation between the increase in token consumption and an
  increase in productivity gains" — which equally means consumption-based cost projections are projections of an inflated,
  gameable input metric.

### A6. Price direction: OpenAI cut smaller-model prices 2026-07-30 (GPT-5.6 Luna input $1→$0.20/M); open-weight models at
  a fraction of frontier list; token prices down >90% since 2023 (Ramp). The unit-economics floor keeps falling even as
  the consumption ceiling rises.

### A7. Category error at the root: Catanzaro's quote (P1) is about Nvidia's applied-deep-learning research team — GPU
  training/research compute vs researcher salaries — transplanted into coding-assistant discourse where the numbers are
  100x smaller. No coverage found in this sweep flags the transplant.

---

## Not retrievable / gaps
- Reddit comment bodies for S13 (old.reddit and www.reddit JSON both blocked from this environment 2026-08-04).
- Axios (P1) and Gartner PR (P10) direct text (403); both characterized via secondary fetches.
- X search beyond the corpus's 28 stored posts (no X search tool); LinkedIn reach numbers (login-walled).
- The corpus window is 2026-07-05..08-04 plus targeted press from April-June; this is a sample of public discourse, not a census.
