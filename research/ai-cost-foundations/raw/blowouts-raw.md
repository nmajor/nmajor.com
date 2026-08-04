# Raw fetch notes — foundations audit of the four root blowout stories
Collected 2026-08-04 via WebSearch/WebFetch. Purpose: audit the four root stories behind the
"AI costs more than a developer" claim to primary or nearest-to-primary sources. Builds on
(does not repeat) `research/ai-cost-discourse/` and `research/uber-ai-budget/report.md`.
All quotes verbatim as returned by fetches; each entry notes URL, date fetched, and what the
fetch returned. 403s and truncations logged.

---

## 1. UBER

Primary chain (established in uber-ai-budget/report.md, not re-fetched): The Information
(paywalled primary, April 2026) → Forbes Janakiram 5/17 → Fortune 5/26 (COO Macdonald quotes)
→ Bloomberg 6/2 via Simon Willison (the $1,500/tool/mo cap). Key verified facts carried over:
- Claude Code rolled out to ~5,000 engineers December 2025; "2026 AI budget" (AI coding-tools
  line item) exhausted by April — i.e. the budget was the FIRST annual forecast ever made for
  agentic-tool usage, set before/at rollout of a usage class with no historical baseline.
  Forbes verbatim: spread "faster than the company's finance models had anticipated."
- Leaderboard ranked "usage" (NOT tokens — no source says tokens); 3 of 5 renderings say it
  ranked engineers, 2 say teams. Run/pushed by adoption teams; Moneywise verbatim: "the teams
  promoting adoption weren't responsible for controlling the budget." No source names who BUILT it.
- $150–250/mo avg, $500–2,000 power users (Forbes). CTO's $1,200 2-hour session (Forbes,
  single-source attribution to Naga). Annualized org spend ≈ $10–25M ≈ 0.3–0.8% of $3.4B 2025 R&D.
- Cap: $1,500/mo per tool, agentic coding tools only, all employees (Bloomberg via Willison).
  Cap = 7.5x the reported average; below the top of the power-user band — clips only the tail.
- No dollar size of the blown budget was ever reported anywhere. The "blowout" = a ~3x forecast
  miss on a first-year line item (inference from "annual budget consumed in four months").

### New fetches 2026-08-04 — the "what Uber concluded" layer (Agentic Pods)

WebSearch `Uber "Agentic Pods" CTO Praveen Neppalli Naga finance HR legal two-week sprints August 2026`:
- Surfaced Naga's own X post (https://x.com/praveenTweets/status/2074605343439810922), text as
  rendered in search results (nearest-to-primary, Naga speaking): "Agentic AI adoption is on fire
  at @Uber, and it's changing the way we build, not just in engineering, but across the entire
  company. Today, 99% of our engineers use AI tools. More than 70% of pull requests are attributed
  to local or cloud agents. And our engineers have built 2,500+ agent skills across the software
  development lifecycle. ... How do we bring agentic AI beyond engineering? Finance. Legal.
  Operations. Mar[keting...]" (truncated in search render). NOTE: post-blowout numbers are HIGHER
  than the blowout-era ones (95%→99% monthly AI use; ~70% of PRs agent-attributed).
- AOL syndication of Business Insider (https://www.aol.com/articles/ubers-cto-embedded-top-ai-152402000.html),
  fetched OK: Naga "embedded 30 of its 'most AI-proficient engineers' with teams across the
  company"; "Uber has run 16 such Agentic Pods over the past two months"; two-week embeds in
  finance/legal/HR. Results claimed: financial pacing reports 2 days → 10 minutes; capital
  allocation across 150 cities 15 hours → 30 minutes. Naga verbatim: "You can't automate them
  effectively by looking at process diagrams or documentation. You have to understand how the
  work actually gets done." And: "We're now forming a dedicated team to scale this further and
  go deeper." Original publication: Business Insider. Article also notes Uber "maxed out its
  Claude Code budget in spring" and COO Macdonald found "it was getting harder...to justify
  spending as much as it has on AI."
- webpronews.com and startupfortune.com pieces exist on the same story (not fetched; secondary).
- Marketing web QA "2 weeks → 50 minutes" figure appears in search summary (source: one of the
  secondary pieces; not independently verified).

Uber audit answers:
- What did the leaderboard rank? "Usage" (metric never specified as tokens by any source).
- Who ran it / why? Adoption-promoting teams who did not own the budget (Moneywise/Forbes
  "incentive misalignment between adoption teams and finance teams"). Builder unknown. No public
  Uber statement on the leaderboard's fate.
- Was the 2026 budget planned or a guess? It was a planned annual line item, but the first one
  ever set for agentic tools (Claude Code arrived Dec 2025) — a forecast with no baseline, which
  the reporting itself says the finance models "had not anticipated." Overrun = 3x forecast miss.
- What do the caps + Agentic Pods say Uber concluded? Keep the tools, cap the unmanaged tail,
  expand agentic AI company-wide. The cap sits ~7.5x above the average user; Uber then doubled
  down (99% adoption, pods in finance/HR/legal, dedicated scaling team).

---

## 2. AMAZON

Ultimate primary: leaked internal Amazon documents/presentations reviewed by the Financial Times
(paywalled; not directly read). Two distinct FT stories: (a) ~May 12 2026 — KiroRank leaderboard
+ 80% goal + tokenmaxxing; (b) July 30 2026 — leaked cost metrics ($1.8M/$541K/$134K).

### Fetches
- gHacks 7/31 (https://www.ghacks.net/2026/07/31/leaked-amazon-documents-detail-1-8-million-overrun-on-a-single-claude-ai-task-missed-for-five-months/): **403 Forbidden**, not read.
- Tom's Hardware article: fetch returned nav shell only, body truncated — not usable.
- cybernews.com version: **403 Forbidden**.
- Yahoo Finance syndication of Tom's Hardware
  (https://finance.yahoo.com/technology/ai/articles/amazon-accidentally-spent-1-8-160825610.html), fetched OK:
  - $1.8M Claude Sonnet author-matching project ("match author details with Amazon listings"),
    860% over allocated budget, "undetected for approximately five months." Article does not say
    why undetected. Other overruns: financial auditing tool +$541,000; logistics delivery-time
    system +$134,000.
  - Amazon PR verbatim: "As with any new technology, we're experimenting, learning and improving
    how we use it, including how we drive cost efficiencies." Characterized overruns as "small,
    isolated examples where teams are learning."
  - No total-AI-spend figure given. Attributed to internal Amazon presentations reviewed by FT.
- heise.de English (https://www.heise.de/en/news/Too-much-tokenmaxxing-Amazon-stops-internal-AI-ranking-11311902.html), fetched OK:
  - KiroRank ranked **token consumption** within Kiro (Amazon's AI development environment,
    launched July 2025). Shut down **by May 2026**.
  - Built informally by employees — Amazon statement verbatim: "The leaderboard was created by a
    group of employees who wanted to drive awareness for how AI can accelerate work."
  - 80% goal: "Amazon set targets requiring 80 percent of developers to use AI weekly."
  - Gaming: "Workers assigned AI agents to unnecessary tasks to artificially inflate their token
    consumption and improve their rankings" (= tokenmaxxing).
  - Treadwell (SVP Dave Treadwell) verbatim: "Please don't use AI just for the sake of using AI."
  - Replacement metric: "normalised deployments" — "how regularly developers use AI for
    meaningful code rather than token volume."
  - Source: FT.
- HCAmag US (https://www.hcamag.com/us/specialization/transformation/amazon-workers-are-gaming-the-ai-leaderboard-hr-built-it/575083), fetched OK:
  dated 5/13/2026; claims in headline/body "HR built it" / "HR leaders designed this" — but
  cites no source for the builder claim and never names KiroRank. CONFLICTS with Amazon's own
  statement (employee-built, via FT/heise). Treat "HR built it" as editorial framing, not fact.
- The Next Web (https://thenextweb.com/news/amazon-catastrophically-expensive-ai-cost-overruns-claude), fetched OK:
  - The $1.8M task "ultimately failed" / was never launched.
  - Why 5 months undetected, TNW's mechanism: "When a model does the work, a bad configuration
    just keeps running and quietly bills you... That invoice arrives on a monthly cycle, not in
    a build log."
  - "Catastrophically expensive": phrase used by senior engineers in the internal docs.
  - Amazon PR added the cases involved "a small number of groups" within ~300,000 employees.
  - Notes AWS itself sells the fixes (Bedrock batch inference −50%, prompt caching −90%, prompt
    routing, Haiku at ~1/3 of Sonnet price).
- WebSearch (FT scope): "The documents were presented internally on July 28 and made public this
  week, but Amazon has not released the full figures"; "Together, the three projects resulted in
  approximately $2.5 million in unplanned AI spending." Engineers attributed overruns to the
  shift from flat subscriptions to token billing. Unite.AI: "Amazon Engineers Move to Cap AI
  Spending After Cost Overruns" (caps being introduced; not fetched).

Amazon audit answers:
- $1.8M ran 5 months undetected because token billing lands as a monthly invoice with no
  budget alerting tied to the job — a monitoring/governance failure. The project also FAILED
  (never launched), so the $1.8M is not the unit cost of delivered work at all.
- The three leaked overruns total ~$2.5M. Amazon's total AI-tools spend was NOT in the leak and
  has never been disclosed; Amazon calls these "small, isolated examples" against ~300,000
  corporate employees.
- KiroRank: employee-built (per Amazon's statement to FT), ranked token consumption, gamed with
  junk tasks under the 80%-weekly-usage goal, shut by May 2026, replaced with a
  meaningful-usage metric ("normalised deployments").

---

## 3. META

Ultimate primary: The Information (paywalled, ~April 2026) — leaderboard details and shutdown.
Nearest-to-primary fetched: Fortune 4/09.

### Fetches
- Fortune 4/09 (https://fortune.com/2026/04/09/meta-killed-employee-ai-token-dashboard/), fetched OK:
  - "A Meta employee independently created the leaderboard; Meta did not sanction it."
  - Displayed top 250 token users of 85,000+ employees; titles "Token Legend," "Cache Wizard,"
    "Session Immortal," "Model Connoisseur." Zuckerberg and Bosworth not in top 250.
  - 30-day total: 60 trillion tokens. Highest individual: 281 billion tokens.
  - Cost estimate FOR THE TOP USER ONLY: "more than $1.4 million" — computed at list
    ("Claude Opus 4.6 at $5 per million tokens"). An estimate, not a bill.
  - Shutdown: dashboard went offline two days after news broke; dashboard message verbatim:
    "due to data from this dashboard being shared externally, we've made the decision to shutter
    Claudeonomics for now."
  - Meta statement verbatim: "The employee took down the dashboard at their discretion; Meta did
    not request this action."
  - Adoption-push context: Chief People Officer said "AI-driven impact" would be a "core
    expectation" in 2026; January performance-review restructure, up to 200% bonuses for high
    performers.
- explainx.ai (https://explainx.ai/blog/meta-73-trillion-tokens-spotify-shopify-ai-engineering-2026), fetched OK:
  - The $221M derivation laid out verbatim: "73.7 × 10^12 tokens ÷ 10^6 × $3 ≈ $221.1 million
    per month" — $3/M described as a "blended API-style rate."
  - 73.7T claim: "Meta's ~78,000 employees consumed 73.7 trillion AI tokens in about 30 days
    during a peak tokenmaxxing period" — attributed loosely to The Information (April–June 2026)
    + secondary sources; "no primary source or Meta confirmation."
  - Explicit caveats verbatim: "Meta has not published a confirmed invoice total. Analysts
    extrapolate from token count × list price" and "Real billing is discounted, tier-mixed, and
    cached — list math is an upper-bound story, not Meta's books."
  - Bosworth (CTO) verbatim: "All motion is not progress and token usage alone is not a measure
    of impact."
- IBTimes UK "$221M" piece (https://www.ibtimes.co.uk/enterprise-ai-budgeted-management-1806370), fetched OK:
  - **The $221M figure appears ONLY in the headline/subheading; the body never states it.**
  - Body figure: "Meta employees consumed more than 60 trillion AI tokens over a 30-day period"
    (a token count, not a bill). Sourcing mush: "research from SemiAnalysis, based on
    conversations with more than 50 enterprise customers and discussions at the Databricks AI
    Summit." Leaderboard "removed two days after The Information reported on it."
  - Note the arithmetic mismatch: 60T × $3/M = $180M, not $221M; $221M requires the unconfirmed
    73.7T count. The headline number cannot be produced from the article's own body figure.
- IBTimes UK "$500K engineer" piece (https://www.ibtimes.co.uk/meta-ai-transition-layoffs-claudenomics-1799390), fetched OK:
  - The "$500K/month engineer" is sourced to an X user: '"A single Meta engineer burned roughly
    $500K/month in Token consumption (about 300 billion tokens / month)" — @sheriyuo'. A social
    media claim, no bill, no Meta confirmation.
  - Layoff-risk claim ("lower usage raised concerns... essential in identifying which workers
    were worth keeping or letting go") — no primary source quoted.
- Gizmodo (https://gizmodo.com/cast-adrift-meta-employees-have-no-idea-who-the-token-legend-is-anymore-2000744189), fetched OK:
  - Shutdown message longer verbatim: "It was meant to be a fun way for people to look at tokens,
    but due to data from the dashboard being shared externally, we've made the decision to
    shutter Claudeonomics for now."
  - Gizmodo writes "Meta built" the system — conflicts with Fortune + Meta's own statement
    (employee-built). Weight of evidence: employee-built, company-tolerated.
  - Sources: The Information (primary), NYT (token equivalency), BI, Guardian.
- MLQ article: **403 Forbidden**, not read. (Search render of MLQ elsewhere included a
  "estimated at $9 billion using public pricing" line for the same 60T tokens — a third,
  wildly different list-price extrapolation; provenance weak, noted only to show the spread.)

Meta audit answers:
- $221M is NOT a reported bill. It is a list-price back-calculation (73.7T unconfirmed tokens ×
  $3/M blended) that its own popularizers caveat as "an upper-bound story, not Meta's books."
  The best-attested underlying figure is 60T tokens/30 days (The Information via Fortune), which
  doesn't even produce $221M at the stated rate. Competing extrapolations from the same token
  count range from $180M to "$9 billion." Meta's actual invoice: never disclosed, certainly
  negotiated/discounted/cached.
- What the leaderboard was FOR: employee-built gamification ("meant to be a fun way for people
  to look at tokens"), unsanctioned per Meta, taken down by its creator after external exposure —
  but it grew inside a real top-down adoption push ("AI-driven impact" a core 2026 review
  expectation; 200% bonuses; reported low-usage layoff anxiety). It ranked raw token consumption
  of the top 250 users; it was never an evaluation instrument Meta ran.
- "85k+ staff ranked" is imprecise: 85,000+ is company headcount; the board displayed the top 250.

---

## 4. MICROSOFT

Ultimate primary: Rajesh Jha's internal memo, reported by Tom Warren, The Verge "Notepad"
newsletter, 2026-05-14 (paywalled newsletter; read via retellings). Fortune covered ~5/22
("Microsoft reports are exposing AI's real cost problem..."). DigitalToday (KR) is a retelling
of Fortune, not a source.

### Fetches
- WebSearch: cancellation covers the **Experiences + Devices division** (Windows, M365, Outlook,
  Teams, Surface), Claude Code opened to it December 2025, licenses cancelled from ~May 14 with
  use ending **June 30, 2026 — the last day of Microsoft's fiscal year**. Jha verbatim (via
  Warren): "Copilot CLI has given us something especially important: a product we can help shape
  directly with GitHub for Microsoft's repos, workflows, security expectations, and engineering
  needs."
- OpenTools (https://opentools.ai/news/microsoft-cancels-claude-code-licenses-copilot-cli), fetched OK:
  - Jha fuller verbatim: "Claude Code was an important part of that learning. At the same time,
    Copilot CLI has given us something especially important: a product we can help shape directly
    with GitHub for Microsoft's repos, workflows, security expectations, and engineering needs."
  - Stated rationale: toolchain integration/control. Cost: "the article suggests" (speculation),
    paralleling Uber. Original source: The Verge.
- DigitalToday EN (https://www.digitaltoday.co.kr/en/view/58692/...), fetched OK:
  - Attributes its story to "a recent Fortune report." "Microsoft did not publicly state cost
    concerns"; reporter adds token-billing context himself. Verbatim: "The move does not affect
    Microsoft's contract to invest up to $5 billion in Anthropic, or Anthropic's deal to buy
    $30 billion of Azure computing capacity."
- Forbes Jon Markman 6/01 (https://www.forbes.com/sites/jonmarkman/2026/06/01/microsoft-ends-claude-code-licenses-as-it-pushes-copilot-cli/), fetched OK:
  - Asserts (no attribution shown): "Claude Code is priced by the token, the engineers used it
    heavily, and the costs ran past the annual AI budget months ahead of schedule." This is the
    strongest cost assertion found, and it is a columnist's line, not a Microsoft statement.
  - Markman's own framing: "renting intelligence by the token is a price Microsoft does not
    control, and leaning on a rival's tool is a dependence it would rather shed."
  - Survey color: nearly half of developers surveyed named Claude Code a favorite; Claude Code
    dominated at orgs <10,000 employees.
- PeopleMatters (https://sea.peoplemattersglobal.com/news/ai-and-emerging-tech/microsoft-cancels-claude-code-licences-after-engineers-use-it-too-much-49918), fetched OK:
  - "first reported by The Verge journalist Tom Warren through his Notepad newsletter on May 14";
    Warren: Claude Code had become "perhaps a little too popular."
  - "the official explanation given internally was 'toolchain unification', though reports
    suggested cost reduction also played a significant role" — cost inferred by press, not stated.
  - Microsoft "retains access to Claude models through platforms including Microsoft Foundry and
    Microsoft 365 Copilot."
- webcoda AI-checker piece: 65% markup claim attributed to Ben Thompson/Stratechery re: M365 E7
  pricing tier (methodology not shown); repeats "perhaps a little too popular" as the tell.
- Windows Central + TechRadar + windowsforum + windowsforum thread 2: fetches returned nav
  shells or **403** — bodies not read; their content captured via search renders above.
- Search-render note (multiple outlets): Anthropic's Claude models remain accessible to
  Microsoft engineers through Copilot surfaces; the cancellation was tool-level, not model- or
  partnership-level.

Microsoft audit answers:
- Microsoft never said cost. The documented, on-record rationale (Jha memo via The Verge) is
  dogfooding/toolchain control of Copilot CLI with GitHub. Cost is press inference from the
  fiscal-year timing and industry context; the one flat cost assertion (Markman) carries no
  attribution.
- Scope: one division's licenses for one third-party tool; Claude models still reachable via
  Foundry/M365 Copilot; $5B Anthropic investment and $30B Azure-purchase deal explicitly
  unaffected.
- There is no headline dollar figure in this root at all — it entered the "AI costs more than
  engineers" discourse purely via Fortune's 5/22 editorial frame and social compressions
  ("bill exceeded their annual budget within months" — no source states this of Microsoft).

---

## Cross-root: numbers in popular retellings that are simply wrong or unsupported
1. Meta "$221M/month": headline-only; a list-price derivation from an UNCONFIRMED 73.7T token
   count; the attested count (60T) yields $180M at the same assumed rate; a parallel
   extrapolation says "$9B." No bill exists publicly.
2. Meta "85,000+ staff ranked": board showed top 250; 85k is headcount (explainx says ~78k).
3. Meta "$500K/month engineer": an anonymous X post (@sheriyuo), laundered into IBTimes.
4. Microsoft "bill exceeded their annual budget" / "stopped AI because too expensive": Microsoft
   never stated a cost reason; one division, one tool; Claude models remain in use via Copilot
   surfaces; Anthropic deals unaffected.
5. Amazon "860% over budget" as an AI-unit-economics fact: the task FAILED and was never
   launched; total leaked unplanned spend ≈ $2.5M across three projects; Amazon's total AI spend
   was not in the leak. "HR built the leaderboard" (HCAmag) contradicted by Amazon's own
   statement (employee-built).
6. Uber: no reported dollar size of the "blown" budget exists anywhere; "zero feature velocity
   gain" and "total AI spend" renderings are known overstatements (see ai-cost-discourse);
   Bajarin's "spent entire budget before March" wrong on timing. Fortune's "3.4% of revenue on
   R&D" garble (uber-ai-budget §4.6).

## Fetch failures log (2026-08-04)
403 Forbidden: ghacks.net article, cybernews.com article, MLQ Meta article, windowsforum
thread 425488. Truncated/nav-shell only: Tom's Hardware, Windows Central, TechRadar. All
content for those obtained via syndications (Yahoo Finance), alternates (heise, TNW,
PeopleMatters, OpenTools, DigitalToday EN), or search renders — noted inline above.
