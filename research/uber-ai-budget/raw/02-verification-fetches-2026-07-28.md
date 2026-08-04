# RAW — verification fetches, 2026-07-28

Unedited tool outputs from WebFetch/WebSearch during the verification pass for the
`uber-ai-budget` essay. One section per source. Retrieved 2026-07-28.

---

## Fortune — "Uber's COO says it's getting harder to justify the company's AI spend: 'That link is not there yet'"
URL: https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code
Date: May 26, 2026. Fetched 2026-07-28.

**Job Title:** Uber president and chief operating officer

**Quote 1:** "That link is not there yet."

**Quote 2:** "Maybe implicitly there's more that is getting shipped, but it's very hard to draw a line between one of those stats and 'Okay now we're actually producing like 25% more useful consumer features.'"

**Quote 3:** "If you're not actually able to draw a direct line to how [many] useful features and functionality you're shipping to your users, that trade becomes harder to justify."

**Quote 4 (Autonomous Driving):** "I don't think my daughters who are little kids today, I don't think they will end up getting a driver's license."

Key figures cited:
- Uber burned entire 2026 AI budget in 4 months
- 10% of Uber's committed code built by autonomous agents (per CEO Dara Khosrowshahi)
- Uber R&D spending 2025: 3.4% of revenue (9% increase from 2024)   <-- SEE DISCREPANCY NOTE
- Q1 2026 R&D: $951 million (17% increase year-over-year)
- Gartner forecast: AI agent software spending will reach $207 billion in 2026 (up 139% from $86.4 billion in 2025)

**Attribution Note:** The article does not attribute any reporting to The Information; it cites
The Verge regarding Microsoft's Claude Code licensing cancellation.

**DISCREPANCY FLAG:** Fortune renders 2025 R&D as "3.4%" (of revenue); Forbes renders it as
"$3.4 billion." SEC data (below) confirms **$3,402M**, i.e. Forbes is right and Fortune's
"3.4%" is a garbled restatement of the same digits. $3.4B against 2025 revenue would be ~7%,
not 3.4%. Do not cite Fortune for this figure.

---

## Forbes — "Uber Burns Its 2026 AI Budget In Four Months On Claude Code" (Janakiram MSV, Editors' Pick)
URL: https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code
Date: May 17, 2026. Fetched 2026-07-28.

**CTO Statement:** The article states that "Chief Technology Officer Praveen Neppalli Naga
confirmed the overrun to _The Information_," though **no direct quote from Naga appears in the
fetched text.**

**Financial Figures:**
- Monthly cost per engineer: "$150 to $250 on average, with power users running between $500 and $2,000"
- Naga's personal session: "$1,200 in a two-hour session"
- Uber's 2025 R&D spend: "$3.4 billion in 2025"

**Adoption Metrics:**
- 32% of engineers in February, rising to 84% by March
- "95% of Uber engineers used artificial intelligence tools monthly"
- "roughly 70% of committed code originated from those tools"
- "About 11% of live backend updates were written by agents with no human in the loop"

**Timeline:**
- Claude Code rollout: December 2025
- Budget exhaustion: April 2026 (within four months)
- Anthropic's pricing change announcement: May 13, 2026
- Implementation date for new pricing: June 15, 2026

**Organizational Issue:** "internal leaderboards" ranked engineers on usage, creating incentive
misalignment between adoption teams and finance teams managing the budget.

---

## SEC / financial data — Uber R&D and revenue

Direct SEC WebFetch of https://www.sec.gov/Archives/edgar/data/0001543151/000154315126000022/uber-20260331.htm
returned **HTTP 403 Forbidden** (SEC blocks this agent). Figures below come from
stock-analysis-on.net's rendering of the filed income statement plus search-surfaced
annual data. **Flagged for re-verification against the filing itself before publication.**

Source: https://www.stock-analysis-on.net/NYSE/Company/Uber-Technologies-Inc/Financial-Statement/Income-Statement/Quarterly-Data
Fetched 2026-07-28.

**Quarter ended March 31, 2026:**
- Research and development expense: **$951 million**
- Total revenue: **$13,203 million**

**Quarter ended March 31, 2025:**
- Research and development expense: **$815 million**
- Total revenue: **$11,533 million**

R&D up $136M YoY; revenue up $1,670M.

**Full year 2025 (search-surfaced, MacroTrends/valuesense):** R&D **$3,402 million**, +9.42% YoY.
Q4 2025 R&D was $885M (+12.74% YoY).

Note: $951M Q1-2026 R&D against $13,203M Q1-2026 revenue = **7.2% of revenue**, not 3.4%.

---

## Bloomberg (via Simon Willison) — Uber caps AI tool usage
Primary: https://www.bloomberg.com/news/articles/2026-06-02/uber-caps-usage-of-ai-tools-like-claude-code-to-cut-costs (June 2, 2026, paywalled)
Fetched secondary: https://simonwillison.net/2026/Jun/3/uber-caps-usage/ (June 3, 2026). Fetched 2026-07-28.

**Key Finding:** Uber implemented a **$1,500 monthly spending limit per AI coding tool**
(applied individually per tool, **not** as a total budget across multiple tools).

**Bloomberg quote as reproduced by Willison:** "The rideshare giant is limiting all employees to
$1,500 in monthly token spending per AI coding tool" and these limits "only apply to agentic
coding software such as Cursor or Anthropic PBC's Claude Code."

**Willison's Analysis:**
- Characterized the policy as "a rational policy response to over-spending" and notably more
  reasonable than internal competition leaderboards.
- Calculated that two tools per engineer yields a **$36,000 annual ceiling** — approximately
  **11% of the median $330,000 compensation package** for Uber software engineers.
- Personal context: his own usage runs ~$1,000/month per provider (Anthropic and OpenAI), on
  subsidized $100/month individual plans; under Uber's policy he'd still have ~$500/month
  headroom per tool.

---

## Outlook Business — "Uber Caps AI Tool Usage After Exhausting Yearly Budget In Just 4 Months"
URL: https://www.outlookbusiness.com/corporate/uber-caps-ai-tool-usage-after-exhausting-yearly-budget-in-just-4-months
Fetched 2026-07-28.

**Cap Amount:** $1,500/month on token spending for agentic coding software (Cursor, Claude Code)
**Scope:** applies **per tool**, tracked independently through an internal dashboard
**Trigger:** Uber exhausted its full-year AI budget within four months of 2026

**Statistics cited:**
- 95% of engineers use AI tools monthly
- ~10% of company code generated by AI agents
- Claude Code drove the budget exhaustion

**Attribution:**
- **Bloomberg:** confirmed the $1,500 monthly cap
- **The Information:** CTO Praveen Neppali Naga said the company was "back to the drawing board"
  after exhausting the annual AI budget due to increased Claude Code usage

**Effective Date:** not explicitly stated.

---

## Search-surfaced corroboration (Verge/Quartz line)
Query: "The Verge Uber Claude Code AI budget Macdonald token spending", 2026-07-28.

- Uber CTO Praveen Neppalli Naga disclosed in April that the company had exhausted its entire
  Claude Code budget for 2026 — four months into the year.
- Per The Verge: Macdonald, president and COO, made the comments in an interview with
  **Rapid Response** released over the weekend (late May 2026).
- Quote rendering in this telling: "it's very hard to draw a line between one of those stats and,
  'Okay, now we're actually producing 25 percent more useful consumer features'".
- Monthly cost per engineer $150–$250 average; power users $500–$2,000.
- "Uber ranked engineers on internal leaderboards based on Claude Code usage, which created a
  cultural incentive to consume more tokens, which translated directly into faster budget burn."
- Microsoft asked employees to wind down Claude Code and shift to GitHub Copilot CLI, with
  **June 30** the last date for using the tool after a December rollout.

---

## CONFLICTS AND CAUTIONS (carried forward for the report)

1. **Code-authorship figures conflict badly.** Forbes: "roughly 70% of committed code originated
   from those tools" AND "about 11% of live backend updates were written by agents with no human
   in the loop." Fortune/CEO Khosrowshahi: "10% of committed code built by autonomous agents."
   Outlook: "~10% of company code generated by AI agents." These are different metrics
   (AI-assisted vs fully autonomous agent-authored). **Do not blend them.** Safest citable claim
   is the CEO's own ~10% autonomous-agent figure.
2. **Adoption figures conflict.** 32%→84% (Feb→Mar, "agentic coding users", Project Flux) vs
   "95% of engineers use AI tools monthly" (multiple). Different denominators/metrics.
3. **The $1,200 two-hour session** is attributed by Forbes to CTO Naga's own session; the
   Moneywise retelling says "one executive." Forbes is the better sourcing.
4. **The Information is the primary and is paywalled.** Every figure here is a retelling.
   Attribute accordingly ("reported by The Information") rather than implying direct access.
5. **Fortune's "3.4%" R&D figure is wrong/garbled** — see discrepancy flag above.
6. **The "$500M AI spending crisis" framing** (dallasexpress.com) is unverified and appears to
   be a content-farm inflation of the story. Do not use.
7. **abhs.in, logicity.in, qwe.edu.pl, medium personal posts** — low-grade retellings. Not usable
   as load-bearing sources.
