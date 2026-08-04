# Uber AI budget — verification report (claim ledger)

**Built:** 2026-07-28. **Sources:** `research/uber-ai-budget/raw/00-digest-seed-unedited.md`,
`raw/01-ai-cost-reckoning-unedited.md`, `raw/02-verification-fetches-2026-07-28.md`. No new
web research was done for this report; everything below is traceable to those three files.

**Working thesis being tested:** Uber blowing its 2026 AI budget in four months is not a
magnitude story (~1% of R&D annualized) but a budgeting-and-measurement story — an internal
leaderboard ranked engineers by token consumption, making a *cost* look like a *result*, and
it was pushed by people who did not own the budget. The $1,500/month per-tool cap controls
spend without fixing measurement, which is why the COO says "that link is not there yet."

**Verdict on the thesis as a whole:** the *shape* holds, but three of its load-bearing joints
are weaker than they look. See §7 ("Claims the thesis needs that the raw does NOT support")
before writing a word. The three biggest: (a) the "~1% of R&D" number traces to a Hacker News
comment whose arithmetic does not reconcile — our own math puts it lower, ~0.3–0.9%; (b) the
COO's "that link is not there yet" **predates** the cap by a week, so "still says" is
chronologically backwards; (c) nobody sourced says the leaderboard ranked on *tokens* — the
sourced metric is "usage."

---

## 0. Source hierarchy — read this first

**The Information is the paywalled primary for the entire story.** Every figure in the raw —
Forbes, Fortune, Project Flux, Moneywise, Outlook Business, the Reddit threads — is a
retelling of The Information's reporting. We have no direct access to it. The correct
attribution formula throughout the essay is **"reported by The Information"** or "as The
Information reported," never a phrasing that implies we read the original.

Tiers, for this story:

| Tier | Source | Use |
|---|---|---|
| Primary (paywalled, unread) | The Information | Attribute to it; never quote it directly |
| Primary (paywalled, unread) | Bloomberg, 2026-06-02 (the $1,500 cap) | Attribute to Bloomberg; we read Simon Willison's reproduction |
| First-order retelling, named reporter | Forbes (Janakiram MSV, 2026-05-17), Fortune (Jake Angelo, 2026-05-26) | Citable |
| First-order, independent event | Fortune / The Verge on the Rapid Response podcast interview | Citable for Macdonald quotes |
| Second-order | Project Flux, Outlook Business, Moneywise/Yahoo, Simon Willison | Corroboration only; don't make load-bearing |
| **Do not use** | Reddit paraphrases of a WIRED/Levy report; Forbes/Tim Bajarin 2026-04-29; dallasexpress.com; abhs.in, logicity.in, qwe.edu.pl, Medium reposts | See §6 |

---

## 1. The core event

### 1.1 "Uber burned through its entire 2026 AI budget in four months."
**VERDICT: SOLID.**
Best source: https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code
Ultimate primary: **The Information** (Forbes, Fortune, Project Flux, Outlook, Semafor and
Bloomberg all trace back to it).
Verbatim (Forbes): *"Uber exhausted its entire 2026 artificial intelligence budget by April,
four months into the calendar year, after Anthropic's Claude Code spread across roughly 5,000
engineers faster than the company's finance models had anticipated."*
Corroborated independently by Semafor (2026-05-28): *"Uber blew through its entire 2026 AI
budget in four months because of Claude Code usage."*
**Wording note:** it is the **AI / AI-coding-tools budget**, not Uber's whole AI budget in any
broader sense and certainly not R&D. Fortune calls it the "2026 AI coding tools budget";
Outlook Business and the Verge line call it the Claude Code budget. Safest phrasing: *"its
2026 budget for AI coding tools."*

### 1.2 "Uber CTO Praveen Neppalli Naga confirmed the overrun to The Information."
**VERDICT: SOLID (title and person).**
Best source: Forbes (above). Corroborated by Project Flux and Outlook Business, both of which
name Naga as CTO and attribute to The Information.
Verbatim (Forbes): *"Chief Technology Officer Praveen Neppalli Naga confirmed the overrun to
The Information, saying the company was back to the drawing board on its assumptions."*
**Caution:** Forbes' fetched text contains **no direct quote from Naga** (raw 02 flags this
explicitly). Outlook Business renders "back to the drawing board" inside quotation marks; that
phrasing may be Forbes' paraphrase promoted to a quote by a downstream aggregator. Treat *"back
to the drawing board"* as paraphrase, not quotation.
**Name spelling:** "Praveen Neppalli Naga" (Forbes, Project Flux). Outlook Business writes
"Neppali" — one L. Use the Forbes spelling.

### 1.3 Naga's own line: "the budget I thought I would need is blown away already."
**VERDICT: SOFT — attribute to Project Flux, or cut.**
Source: https://www.projectflux.ai/p/blown-by-april-why-uber-s-3-4-billion-r-d-budget-could-not-hold-the-line-on-ai-coding-spend
This is the only quote in the raw that reads like Naga speaking directly, and it appears in a
second-tier newsletter, unconfirmed by Forbes or Fortune. **How to word it if used:** *"Project
Flux, summarizing The Information's report, has the CTO saying the budget he thought he'd need
'is blown away already.'"* Better: don't quote the CTO at all. Macdonald's quotes (§4) are
solidly sourced and say more.

### 1.4 Timeline: Claude Code rolled out December 2025, budget exhausted April 2026.
**VERDICT: SOLID for December → April; the rollout month rests on Forbes alone.**
Best source: Forbes (raw 02 timeline block). Reddit r/artificial independently states "Uber
deployed Claude Code to engineers in December 2025," but that's a low-tier corroboration.
Also from Forbes: Anthropic announced a pricing change **2026-05-13**, effective **2026-06-15**.
Both single-sourced — use only as color, hedged ("Forbes reports").

### 1.5 "Roughly 5,000 engineers."
**VERDICT: SOLID as "roughly 5,000."** Forbes: *"roughly 5,000 engineers."*
The **5,500** figure comes from an anonymous Hacker News commenter citing an unnamed "[source]"
(raw 00, line 105). **Do not cite 5,500 as fact.** Use ~5,000, or "on the order of 5,000."

### 1.6 "AI-related costs at Uber have risen approximately six-fold since 2024."
**VERDICT: SOFT — single second-tier source.**
Source: Project Flux (only). Not in Forbes, Fortune, Bloomberg-via-Willison, or Outlook.
**How to word it:** *"Project Flux puts Uber's AI-related costs at roughly six times their 2024
level"* — or omit. It is useful as a sanity check on our own arithmetic (§5) but should not be
stated as established fact.

---

## 2. The mechanism — the leaderboard

### 2.1 "Uber ran an internal leaderboard that ranked engineers on AI tool usage."
**VERDICT: SOLID that a leaderboard existed and ranked on *usage*. CONFLICTED on the unit ranked
(engineers vs teams). NOT SUPPORTED that it ranked on *tokens*.**

Best source: Forbes — *"internal leaderboards ranked engineers on usage, creating incentive
misalignment between adoption teams and finance teams managing the budget."*

The renderings in the raw:

| Source | Ranked *whom* | Ranked *on what* |
|---|---|---|
| Forbes | **engineers** | "usage" |
| Fortune | **teams** | "total AI tool usage" |
| Project Flux | **teams** | "AI tool usage" |
| Moneywise/Yahoo | **engineers** | "their Claude Code usage" |
| Verge-line search result (raw 02) | **engineers** | "Claude Code usage" |

**Resolution:** 3 of 5 say engineers, 2 say teams, and no source says both. The safe formulation
that no source contradicts: **"internal leaderboards that ranked engineers and teams by how much
they used the tools."** If the essay needs one unit, use **engineers** (Forbes is the
best-sourced and Moneywise + the Verge line agree) but do not build a paragraph on the
distinction.

**On "tokens": no source in the raw says the leaderboard metric was token consumption.** The
closest is the Verge-derived line in raw 02: *"Uber ranked engineers on internal leaderboards
based on Claude Code usage, which created a cultural incentive to consume more tokens, which
translated directly into faster budget burn."* Note the causal chain — ranking was on *usage*,
and the *effect* was more token consumption. Moneywise says the same: leaderboards "encouraged
employees to consume more AI resources."
**How to word it:** *"a leaderboard that ranked engineers by how much they used the tools"* —
and then make the token point as **your inference**, e.g. "and the thing 'usage' cashes out to,
on consumption pricing, is tokens — which is to say dollars." That is an argument you own, not a
fact you're citing. **Do not write "ranked engineers by tokens consumed" as reported fact.**

### 2.2 "The people running the leaderboard didn't own the budget."
**VERDICT: SOLID as to *the teams promoting adoption*; NOT SUPPORTED as to *who built the
leaderboard*.**
Best source: Moneywise/Yahoo — verbatim: *"Uber also reportedly maintained internal leaderboards
that ranked engineers according to their Claude Code usage. That encouraged employees to consume
more AI resources **even though the teams promoting adoption weren't responsible for controlling
the budget**."*
Corroborated by Forbes' own framing: *"creating incentive misalignment between adoption teams
and finance teams managing the budget."*
**How to word it:** *"the teams pushing adoption weren't the ones responsible for the budget."*
**Do not write** "built by people who didn't own the budget" — no source identifies the builder.
The sourced claim is about the *promoters*, and it's an easy, lossless swap.

### 2.3 "The leaderboard made a cost look like a result."
**VERDICT: This is Nick's argument, not a claim to verify. Fine to assert — as argument.**
It is *consistent* with everything in the raw and it is close to what vaasblock articulates
independently (raw 01): *"AI spending where the deployment metric was treated as a proxy for
value creation, and the actual returns have never been [measured]."* That's a decent
corroborating quote for the *idea*, from a weak source — use the idea, not the citation.
No source in the raw states that Uber's leadership intended the leaderboard as a proxy for
productivity. Keep it in the register of interpretation ("what a leaderboard like that does is…"),
not reporting ("Uber treated tokens as a productivity metric").

### 2.4 "Adoption intensity, not seat count, is the cost driver."
**VERDICT: SOFT — good framing, weak provenance.**
Source: a Reddit r/artificial post (raw 00, line 97): *"Uber's experience suggests the actual
cost driver is adoption intensity, not seat count."* An anonymous Redditor. **Don't cite it.**
The same point can be made from Forbes' own comparison, which is fully citable — see §6.7.

---

## 3. The fix — the $1,500 cap

### 3.1 "Uber capped employees at $1,500 in monthly token spend **per AI coding tool**."
**VERDICT: SOLID, and the per-tool detail is explicitly confirmed.**
Best source: https://simonwillison.net/2026/Jun/3/uber-caps-usage/ (2026-06-03), reproducing
Bloomberg.
Ultimate primary: **Bloomberg**, 2026-06-02, paywalled —
https://www.bloomberg.com/news/articles/2026-06-02/uber-caps-usage-of-ai-tools-like-claude-code-to-cut-costs
Verbatim Bloomberg (as reproduced by Willison): *"The rideshare giant is limiting all employees
to $1,500 in monthly token spending per AI coding tool"* and these limits *"only apply to
agentic coding software such as Cursor or Anthropic PBC's Claude Code."*
Independently corroborated by Outlook Business: *"$1,500/month on token spending for agentic
coding software (Cursor, Claude Code) … applies per tool, tracked independently through an
internal dashboard."*
**Per tool, not total — this is settled.** Both independent retellings say so, and Willison's
whole analysis turns on it. Cite it as per-tool with confidence.
**Scope caveat worth keeping:** the cap covers *agentic coding tools only*. It is not a cap on
Uber's AI spending generally. Also note it applies to **all employees**, not just engineers.

### 3.2 "That works out to an $18,000-a-year ceiling per tool, $36,000 across two."
**VERDICT: SOLID arithmetic; the "two tools" assumption is Willison's, so own it.**
$1,500 × 12 = **$18,000 per tool per year**. Two tools = **$36,000**.
Source for the two-tool framing: Willison (above), who writes that two tools per engineer yields
a $36,000 annual ceiling.
**How to word it:** *"$18,000 a year per tool — and since engineers commonly run more than one,
Simon Willison notes the practical ceiling is nearer $36,000."* Presenting $36,000 as "the"
ceiling without the two-tool assumption is overstating it.

### 3.3 "$36,000 is about 11% of a median Uber engineer's $330,000 comp package."
**VERDICT: SOFT — the $330,000 is unsourced in our raw.**
Source: Willison's own calculation and his own comp figure; he cites no source for $330,000 in
the material we have. The arithmetic checks out (36,000/330,000 = 10.9%).
**How to word it, if used:** *"Simon Willison figures that's around 11% of the median Uber
engineer's compensation."* Attribute to Willison explicitly and don't restate $330,000 as fact.
**Better:** skip it. It's a nice line but it imports an unverified salary number into an essay
whose credibility rests on its numbers.

### 3.4 "The cap is generous — it only bites the extreme tail."
**VERDICT: SOLID, and this is your strongest original arithmetic. Show the work.**
Using only figures from Forbes (§4.1): the cap of **$1,500/month** is **7.5×** the ~$200 average
monthly cost per engineer, and sits **below** the top of the observed power-user band
($500–$2,000). So the cap does nothing to the average engineer and clips only the heaviest users
— exactly the point that it's a spend control, not a measurement fix.
**Second, sharper version:** if every one of ~5,000 engineers maxed both tools, that's
5,000 × $36,000 = **$180M/year**, or **5.3% of Uber's $3.4B 2025 R&D** — roughly **10× the
current estimated run-rate** (§5). The cap's ceiling is far above where spend actually sits.
Both computations use only cited figures; both are safe.

### 3.5 "The cap controls spend without solving the measurement problem."
**VERDICT: Fair as argument. But see §7.2 — the chronology forbids "still."**
Nothing in the raw says the cap addressed measurement, and nothing says Uber shipped any
productivity metric alongside it. Absence of evidence, but the argument is defensible.
**Do not write:** "even after the cap, the COO says the link is not there yet." The COO said it
**2026-05-26**; the cap landed **2026-06-02**. See §7.2.
**Safe wording:** *"The cap answers the spend question. It doesn't touch the measurement
question — and it was the measurement question the COO had raised the week before."*

### 3.6 Willison's read on the cap
**VERDICT: SOLID as opinion, correctly attributed.**
Willison characterized the policy as *"a rational policy response to over-spending"* and
notably more reasonable than internal competition leaderboards. That second half is a useful
third-party voice landing on the same read as the thesis. Cite as Willison's opinion.

---

## 4. The numbers

### 4.1 Per-engineer cost: "$150 to $250 a month on average, with power users between $500 and $2,000."
**VERDICT: SOLID.**
Best source: Forbes — verbatim: *"$150 to $250 on average, with power users running between $500
and $2,000."*
Corroborated verbatim by Moneywise/Yahoo (attributing Forbes) and by the Verge-line search
result in raw 02. Three renderings, identical numbers, no conflicts. Cite freely.
**Caution:** it is not stated whether the $150–250 average is computed across *all* engineers or
across *users*, or whether power users are inside or outside that average. This ambiguity is the
main driver of the range in §5. Don't imply precision the source doesn't have.

### 4.2 "One two-hour coding session cost $1,200."
**VERDICT: CONFLICTED on attribution. SOLID on the figure. Resolve toward Forbes: it was the CTO.**
- **Forbes (best source):** raw 02 records the figure under "**Naga's personal session**: '$1,200
  in a two-hour session.'" Forbes attributes the session to CTO Praveen Neppalli Naga.
- **Moneywise/Yahoo (retelling of Forbes):** *"One executive managed to rack up a $1,200 bill
  during a single two-hour coding session."* — generic "an executive."

**Resolution:** Forbes is upstream of Moneywise here; Moneywise is generalizing, not correcting.
Raw 02's conflict note reaches the same conclusion: *"Forbes is the better sourcing."*
**How to word it:** *"Forbes reports that the CTO himself ran up $1,200 in a single two-hour
coding session."* Attribute to Forbes by name, since it's a single-source attribution and the
detail is doing rhetorical work. **Do not write** "an executive" — it's weaker *and* less
accurate. **Do not** put quote marks around anything but the figure; we have no Naga quote.
**Residual risk:** medium. Only one source ties this to Naga specifically, and we could not read
The Information. If the essay leans hard on "the CTO did it himself," hedge with "Forbes reports."

### 4.3 Code authorship — THE BIG CONFLICT
**VERDICT: CONFLICTED. Three different numbers measuring three different things. Cite exactly
one: the CEO's ~10%.**

What exists in the raw:

| Figure | Metric as stated | Source | Ultimate attribution |
|---|---|---|---|
| **~10%** | *"of Uber's committed code built by autonomous agents"* | Fortune | **CEO Dara Khosrowshahi**, named |
| **~10%** | *"of company code generated by AI agents"* | Outlook Business | unattributed |
| **11%** | *"of live backend updates were written by agents with no human in the loop"* | Forbes | The Information |
| **70%** | *"of committed code originated from those tools"* | Forbes | The Information |
| 70% | "code uploaded to the platform generated by these tools" | Reddit paraphrase of WIRED | **unusable — see §6.1** |

**How to read the conflict:** 70% and ~10% are not in conflict — they measure different things.
70% is *AI-assisted* code (a human used a tool somewhere in producing it); ~10–11% is *fully
autonomous agent-authored* code with no human in the loop. The two can both be true. What *is*
in tension is **10% vs 11%** and **"committed code" vs "live backend updates"** — Fortune's 10%
is company-wide committed code per the CEO; Forbes' 11% is scoped to live backend updates. These
are probably the same underlying disclosure rendered at different scopes, but we cannot confirm
that from the raw.

**THE SINGLE SAFEST FIGURE TO CITE: ~10%, attributed to CEO Dara Khosrowshahi.**
Why: it is the only code-authorship number in the entire raw attributed to a **named Uber
executive speaking on the record** rather than to a paywalled report we can't read. It is also
corroborated (as "~10%") by Outlook Business independently.
**Exact wording to use:** *"Uber's CEO has said roughly 10% of the company's committed code is
now built by autonomous agents."*
Source URL: https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code

**If the essay wants the 70% number** (it's a tempting contrast), the only defensible framing is:
*"Forbes, citing The Information, puts roughly 70% of committed code as originating from AI tools
— a much broader measure than the ~10% the CEO attributes to autonomous agents."* You must name
both the source and the metric difference in the same sentence.
**DO NOT** write "70% of Uber's code is AI-written." **DO NOT** blend: no sentence should contain
two of these numbers without explicitly naming what each one counts.
**DO NOT USE 11%** — it's the narrowest scope, single-sourced, and adds nothing the 10% doesn't.

**Bonus:** this conflict is itself *evidence for the thesis*. A company that can't produce one
consistent number for "how much of our code is AI-written" is a company with a measurement
problem. That's a legitimate observation you can make from the source disagreement without
asserting any of the numbers.

### 4.4 Adoption — THE SECOND CONFLICT
**VERDICT: CONFLICTED but reconcilable. Both can be true. Cite 95% monthly, and use 32%→84% only
with its metric named.**

| Figure | Metric as stated | Source |
|---|---|---|
| **32% (Feb) → 84% (Mar)** | share of engineers classified as **agentic coding users** | Forbes; Project Flux says "~84% of Uber's developers were classified as agentic coding users" by March 2026 |
| **95%** | *"of Uber engineers used artificial intelligence tools monthly"* | Forbes; also Outlook Business |

**Resolution:** these are not in conflict — different denominators. 95% is *any AI tool, monthly*
(includes autocomplete, chat, everything). 84% is the narrower *agentic coding* cohort. Note that
**both appear in the same Forbes article**, which is the strongest evidence they're compatible
rather than contradictory: Forbes lists "32% of engineers in February, rising to 84% by March"
and "95% of Uber engineers used artificial intelligence tools monthly" side by side.
The Reddit/WIRED rendering of 95% is unusable (§6.1), but 95% stands on Forbes + Outlook.

**Safest single claim:** *"95% of Uber's engineers use AI tools monthly"* (Forbes; corroborated
by Outlook Business).
**Best claim for the thesis** — because it shows the *velocity* that broke the forecast:
*"The share of Uber engineers using agentic coding tools went from 32% in February to 84% in
March."* Attribute to Forbes and **always say "agentic coding tools"**, never bare "AI."
**DO NOT** write "adoption went from 32% to 95%." That splices two metrics and is the single
easiest error to make here.

### 4.5 R&D and revenue figures — FLAGGED FOR RE-VERIFICATION
**VERDICT: SOFT (provenance), not SOLID. Numbers are internally consistent but were not obtained
from the filing.**

**Provenance warning, stated plainly:** the direct SEC fetch of the Q1-2026 10-Q
(https://www.sec.gov/Archives/edgar/data/0001543151/000154315126000022/uber-20260331.htm)
returned **HTTP 403 Forbidden**. The SEC blocked the agent. Everything below came from
**stock-analysis-on.net** (a financial-data aggregator rendering the filed income statement) and
search-surfaced MacroTrends/valuesense data. **These are FLAGGED: re-verify against the actual
10-K/10-Q before publication.** Do not present any of these as "per Uber's SEC filings" until
someone has opened the filing.

| Figure | Value | Provenance |
|---|---|---|
| FY2025 R&D | **$3,402M** (+9.42% YoY) | search-surfaced MacroTrends/valuesense — **FLAGGED** |
| Q1-2026 R&D | **$951M** | stock-analysis-on.net — **FLAGGED**; independently corroborated by Fortune |
| Q1-2026 revenue | **$13,203M** | stock-analysis-on.net — **FLAGGED** |
| Q1-2025 R&D | $815M | stock-analysis-on.net — **FLAGGED** |
| Q1-2025 revenue | $11,533M | stock-analysis-on.net — **FLAGGED** |
| Q4-2025 R&D | $885M (+12.74% YoY) | search-surfaced — **FLAGGED** |

Internal consistency checks (all pass): 951/815 = **+16.7%**, matching Fortune's "nearly 17%
increase." 3402/3109 = **+9.4%**, matching Forbes' "up 9% year over year." Q1-2026 R&D is
**7.2%** of Q1-2026 revenue. Annualizing Q1-2026 gives **~$3,804M** of 2026 R&D.

**The "$3.4 billion" claim itself is SOLID** independent of the aggregator: Forbes states
*"Uber's total research and development spend reached $3.4 billion in 2025, up 9% year over
year"* and Project Flux says the same. Two independent retellings of a public figure. You can
write "$3.4 billion in R&D in 2025" citing Forbes without touching the aggregator data.
**The Q1-2026 $951M is also SOLID via Fortune** — Fortune states *"$951 million on R&D in Q1
2026 alone, a nearly 17% increase"* year over year. Cite Fortune, not the aggregator.
**The $13,203M Q1 revenue is the one figure with no journalism behind it.** It exists only in the
aggregator. If the essay uses it, it must be re-verified first — or the essay should avoid
revenue entirely and work only in R&D terms, which it can (§5).

### 4.6 Fortune's "3.4% of revenue" — DO NOT USE
**VERDICT: DO NOT USE. Confirmed garbled.**
Fortune (2026-05-26) writes: *"Uber spent 3.4% on research and development in 2025, a 9% increase
from 2024."* This is a mangled restatement of Forbes' **$3.4 billion** — same digits, wrong unit.
Proof it's wrong: $3.4B against 2025 revenue is roughly **7%**, and the quarterly data gives
**7.2%** for Q1-2026. A "3.4% of revenue" R&D line would imply ~$100B of 2025 revenue, which is
not remotely Uber's scale.
**Never cite Fortune for the R&D figure.** Cite Forbes for $3.4B. Cite Fortune only for the
Macdonald quotes, the $951M Q1 figure, and the Gartner forecast.
This is also worth a footnote in the essay if it gets meta about measurement — a major business
publication turning a dollar figure into a percentage is a small, on-theme illustration of how
badly these numbers travel. Optional, but it's free.

### 4.7 Gartner: "AI agent software spending will reach nearly $207 billion in 2026, up more than 139% from $86.4 billion in 2025."
**VERDICT: SOLID as "Gartner forecasts, per Fortune."**
Source: Fortune (2026-05-26). We have not seen the Gartner release itself. Attribute to Fortune
citing Gartner. Fine as scene-setting; nothing in the thesis depends on it.

---

## 5. "Is this a lot of money?" — the arithmetic, with the work shown

**This is the load-bearing calculation for the thesis, so here is every assumption.**

### 5.1 Inputs (all citable)
- Engineer headcount: **~5,000** (Forbes). *Not* 5,500 — that's an unsourced HN comment.
- Average monthly cost per engineer: **$150–$250** (Forbes).
- Power users: **$500–$2,000/month** (Forbes).
- Adoption: 95% use AI tools monthly; 84% are agentic-coding users (Forbes).
- FY2025 R&D: **$3,402M** (Forbes' "$3.4 billion"; aggregator gives the precise figure).
- Annualized 2026 R&D: **~$3,804M** (Q1 × 4).

### 5.2 The three scenarios

**Scenario A — take the average literally, applied to all engineers.**
This is the reading where Forbes' $150–250 is the true mean across the engineering org (power
users already inside it).

| | $150/mo | $250/mo |
|---|---|---|
| 5,000 engineers | **$9.0M/yr** = **0.26%** of FY25 R&D | **$15.0M/yr** = **0.44%** |

**Scenario A range: $9M–$15M/year, or 0.26%–0.44% of R&D.**

**Scenario B — the average describes typical users; power users sit on top.**
Assume $200/mo typical and a power-user tail at the $1,250 midpoint of $500–2,000:

| Power-user share | Annualized | % of FY25 R&D |
|---|---|---|
| 10% of 5,000 | **$18.3M** | **0.54%** |
| 20% of 5,000 | **$24.6M** | **0.72%** |

**Scenario B range: $18M–$25M/year, or 0.54%–0.72% of R&D.**

**Scenario C — stress case: every engineer at the power-user midpoint.**
5,000 × $1,250 × 12 = **$75M/year = 2.20% of FY25 R&D.**
This is deliberately implausible (it assumes the entire org are power users, contradicting
Forbes' own $150–250 average) and exists only as a hard ceiling.

### 5.3 An independent cross-check that the low end is right
The budget was *set for a year* and *consumed in four months*. So four months of actual spend
equals the full-year plan, i.e. the run-rate is roughly **3× plan**. Back-solving:

| Assumed run-rate | Implied 4-month actual = implied annual plan |
|---|---|
| $12.6M/yr | $4.2M |
| $19.2M/yr | $6.4M |
| $75M/yr | **$25M** |

A $25M annual plan for AI coding tools at a company doing $3.4B of R&D — carefully budgeted, and
then overrun 3× — is a much bigger and stranger thing than the reporting describes. A **$4–7M**
plan overrun 3× fits the story ("finance models had not anticipated it") far better.
**Second check:** Project Flux's "AI costs up ~6× since 2024" implies a 2024 baseline of
$2–4M under Scenarios A/B, versus **$13M** under Scenario C. The $2–4M baseline is far more
plausible for Uber's pre-Claude-Code AI tooling. Both checks point to **A/B, not C**.

### 5.4 The answer

> **Defensible range: roughly $10M to $25M a year, i.e. between 0.3% and 0.8% of Uber's $3.4
> billion 2025 R&D budget. A hard ceiling of ~2% under assumptions the reporting itself
> contradicts.**

**How confident can the essay be?** Confident about the *order of magnitude*, not the number.
This is an estimate built from a reported average and a reported headcount — Uber has never
disclosed its AI tooling spend, and **the raw contains no figure at all for the size of the
budget that was blown.** Every number in §5 is ours.

**Exact wording that is defensible:**
> *"Work it out from Uber's own reported numbers — about 5,000 engineers at $150 to $250 a month
> — and the annualized spend lands somewhere under 1% of the $3.4 billion Uber spent on R&D last
> year. Less than a percent."*

**Wording to use if you want to be bulletproof:** *"under 1%"* or *"a fraction of a percent"* or
*"well under one percent of R&D."* These hold across Scenarios A and B and are conservative.

**Wording to AVOID:** *"roughly 1%."* It's not wrong, but it is the **top** of the defensible
range presented as the center of it, and it inherits its authority from a Hacker News comment
whose arithmetic doesn't reconcile (§7.1). Our own math says **0.3%–0.8%**. Say "under 1%" — it's
both more accurate *and* rhetorically stronger for the thesis.

**Wording to AVOID absolutely:** any specific dollar figure stated as fact ("Uber spent $12
million on AI coding tools"). Always mark it as a derivation: "works out to," "somewhere around,"
"on the order of."

### 5.5 The caveat that must appear somewhere
The percentage is only meaningful **if AI coding tool spend sits inside the R&D line**. That is
plausible (engineering tooling is opex, and R&D is where Uber books engineering) but **no source
in the raw confirms it**, and some of it could sit in a central IT or platform budget. The
comparison is a scale comparison, not an accounting claim. One clause is enough: *"assuming it
lands in R&D, where you'd expect engineering tooling to sit."*

### 5.6 The point that survives regardless
Even at the absurd Scenario C ceiling, the spend is ~2% of R&D. **There is no reading of the
available numbers on which this is a materially large sum for Uber.** That is the robust version
of the thesis's first move, and it does not depend on picking a scenario.

---

## 6. Sources to avoid entirely

### 6.1 The Reddit paraphrase of a WIRED / Steven Levy report — DO NOT USE
raw 00, lines 81–89. A Redditor's summary of a report we never saw. Its numbers are visibly
garbled: it says *"The cost for API tokens per developer literally jumped from $500 to $2,000 a
month"* — but $500–$2,000 is Forbes' **power-user range**, not a month-over-month increase. That
single error is enough to disqualify the whole paraphrase. It is also the only place in the raw
where the 70% and 95% figures appear together, which is exactly the blend §4.3–4.4 warn against.
**Consequence:** the essay cannot cite WIRED or Steven Levy at all. We have no WIRED URL and no
WIRED text. **Also unusable from this source: the Duolingo / Luis von Ahn claim** (that he killed
a rule requiring employees to use AI in performance reviews). It's an interesting, on-theme
anecdote and it is **completely unverified** — one Reddit sentence. Do not use it.

### 6.2 Forbes / Tim Bajarin, 2026-04-29 — DO NOT USE for the Uber facts
https://www.forbes.com/sites/timbajarin/2026/04/29/ai-compute-surpasses-human-costs-enterprise-budgets-shift
States *"Uber's CTO spent its entire 2026 AI budget before March."* **Wrong on timing** — every
other source says April / four months — and it garbles the actor (the CTO didn't spend it;
engineers did). raw 01 flags the discrepancy itself. The Bryan Catanzaro quote (*"The costs of
compute have exceeded the costs of my people"*) is fine to use **from this article for that quote
only**, and the Swan AI anecdote is usable as color if attributed to Bajarin.

### 6.3 The "$500 million uncontrolled AI spend" story — DO NOT USE as fact
Appears twice: Semafor mentions *"Axios reported that one company spent half a billion dollars on
AI after failing to enact usage caps for employees,"* and vaasblock lists an "Axios — Enterprise
AI governance investigation" in its source list. **We never fetched Axios.** raw 02 separately
flags a "$500M AI spending crisis" framing on dallasexpress.com as *"unverified and appears to be
a content-farm inflation of the story."*
**If used at all:** *"Semafor notes Axios's report of a company that spent half a billion dollars
on AI after failing to put usage caps in place."* Two layers of attribution. Better to cut it —
it's a bigger, flashier number that would distract from a thesis arguing the money isn't the
story.

### 6.4 Low-grade retellings — never load-bearing
abhs.in, logicity.in, qwe.edu.pl, Medium personal posts, developersdigest.tech
"enterprise-ai-coding-budget-blowouts-2026" (already in `seen.txt`), the Quartz Facebook post
summary, dallasexpress.com. Use none of them as a citation.

### 6.5 Secondary aggregators flagged in the raw
- **beri.net** on Zylo's 2026 SaaS Management Index (108% AI spend growth, $1.2M average, 78% of
  IT leaders hit by unexpected charges). raw 01 says: *"Go to Zylo's 2026 SaaS Management Index
  directly — this site is a secondary aggregator."* **We did not.** If the essay wants the 78%
  stat — and it's a genuinely good one for a budgeting thesis — it needs a direct Zylo source
  first. Currently **SOFT at best**. Also note beri.net's Copilot example is explicitly
  hypothetical, not a real case; do not repeat it as one.
- **mavvrik.ai**, **vaasblock.com** — vendor/SEO aggregations. Ideas only, no citations.

### 6.6 Contextual stats that ARE clean if the essay wants scene-setting
These come from named surveys via named publications and are safe with attribution:
- **CIO.com (Stephanie Overby, 2026-06-30):** *"77% of technology leaders say AI adoption is
  already outpacing their governance capabilities"* (IBM 2026 Tech Leader Study); *"nearly
  two-thirds of companies say employees have used AI without proper oversight, and almost half of
  large enterprises don't have full insight into what AI tools employees are using"* (Protiviti
  2026 AI Pulse Survey). https://www.cio.com/article/4189671/beware-ai-costs-hidden-in-plain-sight.html
- **CFO.com/BCG AI Radar (2,360 executives):** companies expect to spend ~1.7% of revenue on AI in
  2026, up from 0.8% in 2025.
- **Business Insider / RBC (117 IT professionals):** 90% plan to spend more on AI in 2026.
- **Semafor (2026-05-28):** the one-sentence Uber summary quoted in §1.1 — clean, independent,
  short.
All are surveys with self-reported data; attribute the survey by name.

### 6.7 The Microsoft contrast — SOLID and useful
Forbes (Janakiram) makes the seat-price-vs-consumption argument directly, and it's the citable
version of §2.4's Reddit point. Verbatim: *"Microsoft has taken the opposite approach with
Microsoft 365 Copilot Enterprise, which sells at $30 per user per month with an annual
commitment. The price caps the vendor's upside and gives finance teams a flat line item they can
multiply by headcount. Anthropic's consumption model gives the vendor unlimited upside on heavy
users and gives finance teams almost no forward visibility. Both models are defensible, and
neither is right for every workload, but treating them as interchangeable in a planning cycle is
what produced Uber's outcome."*
Separately (search-surfaced via The Verge, raw 02): **Microsoft asked employees to wind down
Claude Code and shift to GitHub Copilot CLI, with June 30 the last date for using the tool after a
December rollout.** SOFT — search-surfaced, not fetched. Use only with "reportedly" and only as an
aside; note Microsoft's motive there is plainly competitive, not purely budgetary, so it's a
weaker parallel than it first looks.

---

## 7. Claims the thesis needs that the raw does NOT support

*Read this section as if trying to kill the essay.*

### 7.1 "Roughly 1% of R&D annualized" — the number traces to a Hacker News comment that doesn't add up
This is the thesis's opening move and its provenance is the weakest thing in the file. The "1%
annualized" figure comes from **an anonymous HN commenter (ninjagoo)**, raw 00 line 105. His
arithmetic does not reconcile with itself:
- He multiplies **5,500 engineers × $1,250** — using the midpoint of the **power-user** band
  ($500–2,000) as if it were the average for *every* engineer, when Forbes' actual average is
  $150–250. That inflates by roughly 6×.
- He gets **$6.8M** and calls it "engineering AI spend," then says *"0.3% in 4 months or 1%
  annualized."* But 5,500 × $1,250 = $6.875M is a **monthly** figure. Four months of it is
  $27.5M (0.81% of R&D) and twelve months is $82.5M (**2.4%**). Read the other way — as a
  4-month total — annualizing gives $20.6M = 0.61%, not 1%. **Neither reading produces his
  stated numbers.** He has mixed a monthly rate with an annual comparison.
- He also uses 5,500 engineers, sourced to an unnamed "[source]," against Forbes' ~5,000.

**Consequence:** do not cite the HN comment, do not cite "1%," and do not let the essay's framing
inherit a number that was arrived at by accident. **Use our own §5 range instead — "under 1%," or
0.3%–0.8%.** The good news: our independent math lands *below* his figure, so the thesis's
conclusion (this is small) is *strengthened*, not weakened. But the essay must own the
calculation rather than borrow it.
*(The HN comment is still quotable for its rhetorical question — "The real question is, what did
they get for that amount?" — attributed as "a commenter on Hacker News." Just not for arithmetic.)*

### 7.2 "The COO **still** says 'that link is not there yet'" — the chronology is backwards
The thesis's closing move implies the COO's complaint post-dates the cap and therefore proves the
cap didn't fix measurement. The dates say otherwise:

| Date | Event |
|---|---|
| 2026-04 | Budget exhaustion disclosed (The Information) |
| 2026-05-17 | Forbes report |
| **2026-05-26** | **Fortune publishes Macdonald's "that link is not there yet" (Rapid Response podcast, recorded earlier)** |
| **2026-06-02** | **Bloomberg reports the $1,500 cap** |

Macdonald said it **a week before** the cap existed. **Nothing in the raw records any Uber
executive commenting on measurement after the cap.**
**Cut or rewrite:** any sentence containing "still," "even after the cap," "the cap didn't
change his mind," or "months later he says." All are false as written.
**Defensible replacements:**
- *"The cap came a week after the COO said the link between AI spend and shipped features 'is not
  there yet.' It answers a question he wasn't asking."*
- *"Uber solved the spend problem in about a month. The measurement problem the COO named is, as
  far as anything public shows, still open."* — "as far as anything public shows" is doing
  necessary work; keep it.

### 7.3 "Built by people who did not own the budget"
No source says who **built** the leaderboard. The sourced claim is narrower: **the teams
promoting adoption weren't responsible for the budget** (Moneywise; Forbes' "adoption teams" vs
"finance teams"). Swap "built" for "pushed" or "ran the adoption program" and the sentence is
both true and just as good. See §2.2.

### 7.4 "Ranked engineers by token consumption"
No source says the leaderboard's metric was tokens. Every source says **usage**. The token
consequence is reported as an *effect*, not the *metric*. See §2.1. This one matters because
"ranked by tokens = ranked by dollars" is the thesis's sharpest line, and it is currently an
inference dressed as a citation. **Make it an explicit inference** and it survives intact.

### 7.5 The thesis assumes we know the size of the budget. We don't.
**The raw contains no figure, anywhere, for the dollar size of Uber's 2026 AI budget.** Not the
plan, not the four-month actual, not the overrun amount. Every "how big was this" statement in
the essay is our estimate (§5) or a back-solve (§5.3). This is the single largest evidentiary
hole. It means:
- The essay cannot say Uber "overspent by $X."
- The essay cannot say the overrun was "3× the budget" as a *reported* fact — that follows from
  "annual budget consumed in four months," which is a reasonable inference (and worth making
  explicitly: *"a full-year budget gone in a third of a year is a 3× miss"*), but it is arithmetic
  on a reported fact, not a reported fact.
- The "not a magnitude story" claim rests entirely on our per-engineer extrapolation. Say so, at
  least implicitly, by showing the arithmetic in the essay rather than asserting the conclusion.

### 7.6 The thesis assumes the leaderboard **caused** the overrun. The sources assert it; none demonstrate it.
Forbes, Fortune, Moneywise and Project Flux all *state* the leaderboard drove consumption, but
every one of them is retelling the same Information report, so this is **one source, repeated
four times**, not four sources agreeing. And it's a causal claim about human behavior that nobody
has measured. The alternative explanation is in the reporting itself and is at least as
plausible: **agentic coding tools are genuinely useful and adoption compounded** (Forbes: spread
"faster than the company's finance models had anticipated"; 32%→84% in a single month).
**How to handle it honestly:** the strong version of the thesis doesn't actually need the
leaderboard to be the *cause*. It needs the leaderboard to be *the thing Uber chose to measure* —
and that's uncontested. Frame it as revealed priority, not causation: *"Whatever drove the spend,
the thing Uber built a scoreboard for was consumption."* That's unfalsifiable by the raw and
makes the same point.

### 7.7 "The fix doesn't solve the measurement problem" — true, but it's an argument from silence
No source says Uber shipped a productivity metric alongside the cap; no source says it *didn't*
either. We know only what Bloomberg reported about the cap. **Word it as an observation about the
policy's design, not about Uber's intentions:** *"A spending cap is a spending control. It
answers 'how much,' not 'for what.'"* That's a claim about what caps are, which needs no source.
**Avoid:** "Uber has no plan to measure this," "Uber isn't trying to fix measurement," or
anything about internal intent.

### 7.8 The implicit "Uber has no productivity data" is contradicted by the raw
Uber has *plenty* of numbers: 95% adoption, 84% agentic users, ~10% autonomous-authored code,
32%→84% growth. What the COO says is missing is not *data* — it's the **link from those stats to
customer value**. Read his actual words: *"it's very hard to draw a line between one of those
stats and 'Okay now we're actually producing like 25% more useful consumer features.'"* He is
explicitly complaining that he *has* the stats and can't connect them to outcomes.
**This is a better version of the thesis than the one in the brief.** The problem isn't absence
of measurement; it's that everything Uber measures is an **input** — usage, adoption, share of
code — and none of it is an **output**. The leaderboard is the purest example of that, not an
exception to it. Consider rewriting the thesis around this. It's more precise, it's supported by
a direct on-the-record quote, and it makes the leaderboard illustrative rather than causal
(sidestepping §7.6 entirely).

### 7.9 "Not a magnitude story" cuts against itself if pushed too hard
The budget that was blown was **the AI tools budget**, not R&D. Relative to *its own line item* it
was a ~3× miss, which is unambiguously a magnitude story to whoever owned that line. The essay's
"it's only 1% of R&D" move is a comparison to a *different, larger* budget — which is a
legitimate rhetorical point about proportion, but if a reader notices the switch it looks like a
sleight of hand.
**Pre-empt it in one clause:** *"Small against R&D. Enormous against the line it was actually
charged to. That gap is the whole story."* This converts the weakness into the thesis.

### 7.10 Uncheckable, therefore uncitable
- We never read **The Information**. Every Uber-internal fact is at one remove, minimum.
- We never read **Bloomberg**'s cap article — only Willison's reproduction of two sentences.
- We never read the **Rapid Response** podcast transcript. Macdonald's quotes come from Fortune,
  with a slightly different rendering in the Verge line (raw 02: *"'Okay, now we're actually
  producing 25 percent more useful consumer features'"* — no "like," different punctuation).
  **Use Fortune's rendering** (§8), and don't build anything on the exact wording of that clause.
- We never opened **Uber's SEC filings** (403). See §4.5.
- We have **no Uber statement** about the leaderboard — whether it still exists, whether it was
  retired with the cap, whether anyone at Uber considers it a mistake. The essay must not imply
  Uber has conceded the point.

---

## 8. Quote bank (verbatim, safe to use as written)

**Andrew Macdonald, Uber president and COO** — Fortune, 2026-05-26, from the *Rapid Response*
podcast. https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code
> "That link is not there yet."

> "Maybe implicitly there's more that is getting shipped, but it's very hard to draw a line
> between one of those stats and 'Okay now we're actually producing like 25% more useful consumer
> features.'"

> "If you're not actually able to draw a direct line to how [many] useful features and
> functionality you're shipping to your users, that trade becomes harder to justify."

> "We see a future where intelligence is a utility, like electricity or water, and people buy it
> from us on a meter."
*(Note: this last one is Macdonald on Uber's own AI ambitions, a different subject from the cost
discussion. Don't lift it into the spend argument — it will read as if he's describing Anthropic's
pricing, which is the opposite of what he means.)*

**Bloomberg, via Simon Willison** — https://simonwillison.net/2026/Jun/3/uber-caps-usage/
> "The rideshare giant is limiting all employees to $1,500 in monthly token spending per AI
> coding tool"

> [the limits] "only apply to agentic coding software such as Cursor or Anthropic PBC's Claude
> Code."

**Forbes (Janakiram MSV)** — https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code
> "Uber exhausted its entire 2026 artificial intelligence budget by April, four months into the
> calendar year, after Anthropic's Claude Code spread across roughly 5,000 engineers faster than
> the company's finance models had anticipated."

> "$150 to $250 on average, with power users running between $500 and $2,000"

> [Microsoft's model] "gives finance teams a flat line item they can multiply by headcount.
> Anthropic's consumption model gives the vendor unlimited upside on heavy users and gives
> finance teams almost no forward visibility."

**Moneywise/Yahoo** — https://finance.yahoo.com/technology/ai/articles/uber-blew-entire-2026-ai-145000897.html
> "even though the teams promoting adoption weren't responsible for controlling the budget"

**Semafor, 2026-05-28** — https://www.semafor.com/article/05/28/2026/companies-evaluate-aggressive-ai-spending-as-costs-pile-up
> "Uber blew through its entire 2026 AI budget in four months because of Claude Code usage, and
> its COO said on a recent podcast that there isn't yet a proven link between high AI adoption
> and useful customer-facing products."

**Bryan Catanzaro, VP Applied Deep Learning, Nvidia** — Forbes (Tim Bajarin), 2026-04-29. Safe
for this quote only; see §6.2.
> "The costs of compute have exceeded the costs of my people."

---

## 9. Pre-publication checklist

1. **[ ] Re-verify §4.5.** Open Uber's actual 10-K (FY2025) and 10-Q (Q1-2026). The SEC returned
   403 to the agent; a human browser will work. Confirm $3,402M, $951M, $13,203M. Until then, cite
   Forbes for "$3.4 billion" and Fortune for "$951 million" and use no revenue figure.
2. **[ ] Confirm no sentence blends the code-authorship numbers** (§4.3). Search the draft for
   "70%", "10%", "11%".
3. **[ ] Confirm no sentence says "32% to 95%"** (§4.4).
4. **[ ] Confirm the word "still" does not appear near the COO quote** (§7.2). Check the
   cap/quote chronology in any sentence containing both.
5. **[ ] Confirm "ranked by tokens" is framed as inference, not citation** (§7.4).
6. **[ ] Confirm "built by" → "pushed by" / "promoted by"** (§7.3).
7. **[ ] Confirm the percentage claim reads "under 1%," not "roughly 1%"** (§5.4).
8. **[ ] Confirm the essay shows its arithmetic** rather than asserting the percentage — the
   number is ours, not a source's (§7.5).
9. **[ ] Confirm Fortune is never cited for R&D** (§4.6).
10. **[ ] Confirm no WIRED, Levy, or Duolingo claim survives** (§6.1).
11. **[ ] Confirm every Uber-internal fact is attributed at one remove** ("reported by The
    Information," "Forbes reports," "Bloomberg reported") — §0.
