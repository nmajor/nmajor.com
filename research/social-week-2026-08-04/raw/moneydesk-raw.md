# Money desk — raw research notes, week of 2026-08-04

Beat: unit economics of AI tools — token pricing, metered vs seat pricing, spend caps,
which budget line pays, invoice shock. Adjacent to (never retelling) this week's essay
"Uber measured the bill. It couldn't measure the work."

All facts below were verified against fetched pages on 2026-08-04 unless marked SOFT.

---

## Thread 1 — GitHub Copilot: flat fee ended June 1; promo credits expire end of August

### Primary: GitHub's own announcement (fetched)
https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
- Announced **April 27, 2026**; effective **June 1, 2026**.
- All Copilot plans move to usage-based billing via **GitHub AI Credits**; 1 credit = $0.01.
- Monthly credit allowances: Pro **$10**, Pro+ **$39**, Business **$19/user**, Enterprise **$39/user**.
- **Promotional credits June–August 2026 only:** Business gets **$30/month** (vs standard $19),
  Enterprise gets **$70/month** (vs standard $39).
- **Code completions and Next Edit Suggestions stay unlimited.** Everything else — chat, agentic
  workflows, code review — metered by token (input + output + cached) at published API rates.
  Code review additionally consumes GitHub Actions minutes.
- Budget controls at enterprise / cost-center / user level. When included credits exhaust, admins
  choose: allow overage at standard rates, or hard-cap (tool stops).
- GitHub's stated rationale: "The current premium request model is no longer sustainable."

### Developer reaction (fetched)
https://github.com/orgs/community/discussions/192948
- Original post: **958 downvotes vs 24 upvotes**; **534 comments, 845 replies**.
- User reports: "54% of my monthly quota gone with just one request — 822 credits gone in a
  single request"; a Pro+ user projecting the 7,000-credit quota depleted "in less than two days";
  "paying $39 a month for a service that runs out in 48 hours."
- GitHub staff: credits reset monthly (no rollover); promised a billing preview tool by May.

### Trade press (fetched)
https://www.developer-tech.com/news/ai-coding-tools-usage-based-billing/ (2026-06-11)
- Confirms June 1 switch, credit math, allowances.
- GitHub quote: "GitHub Copilot simply is not the same product it was a year ago — it now powers
  far more complex, agentic workflows that consume far more compute."
- Key mechanic: overages only occur if an admin sets a spending budget above zero; at zero the
  tool stops rather than billing. (The invoice shock is opt-in — but so is the outage.)
- Notes Cursor, Windsurf/Devin and Anthropic API repriced in the same window. SOFT model-pricing
  claim in this piece ("Fable 5 at $10/$50 per M tokens, double Opus 4.8") — single source, did
  not re-verify; do not use as load-bearing.

https://epinium.com/en/blog/github-copilot-token-billing-enterprise/ (2026-06-01)
- Developer cost projections: one team **$29/mo → $750/mo**; another **$50/mo → $3,000/mo**.
  (Projections, not paid invoices — word carefully.)
- Framing: promo buffer expires August 2026, so "the real cost shock lands exactly when Q4
  budgets freeze."
- Cites TechCrunch: "The golden age of Microsoft's GitHub Copilot appears to be at an end."
- SOFT (search snippet, digitalapplied/aimodelscompared): effective Enterprise price ~$60/user/mo
  because GitHub Enterprise Cloud ($21/user/mo) is required on top of the $39 — plausible,
  not verified against GitHub pricing pages. Re-verify before use.

### Why-now math (mine)
- August 2026 is the **last month of promo credits**. September invoices are the first at real
  allowances: Business drops from $30 → $19 of included credits/user (-37%), Enterprise from
  $70 → $39 (-44%). Every Copilot org's September bill is the first honest one.
- GitHub shipped a "preview bill" experience in early May — an operator can read their projected
  real cost **today**, before the cushion disappears.

---

## Thread 2 — Tokens got cheaper; bills got bigger (the volume paradox)

### Primary: Ramp Token Spend Management data (fetched)
https://ramp.com/blog/ai-token-cost-for-businesses (published 2026-06-08, data through April 2026;
aggregated anonymized billing-API data from businesses on Ramp)
- **Jan 2025 → Apr 2026: token usage +1,001%, total spend +497%.** (Usage grew ~2x faster than
  spend — i.e. effective unit prices roughly halved — and bills still ~6x'd.)
- Monthly AI spend across tracked businesses: **median $2,246; average $140,842**; 75th pct
  $14,843; 90th $73,030; 95th $211,409. The average is ~63x the median — the tail owns the spend.
- 58% of tracked companies spend >$1k/mo; 31% >$10k; 13% >$50k; 9% >$100k.
- Per-employee-per-month medians by model sprawl: 4–10 models **$28**; 11–25 models **$130**;
  26+ models **$442**.
- April 2026 per-M-token benchmarks (Ramp's blended observed): GPT-5-nano $0.07 … GPT-4o $2.31;
  ~20x spread cheapest to priciest.
- Named cost drivers: model-tier migration, agentic workflows, volume expansion. Caching cited
  at ~5x savings.

### FinOps Foundation, State of FinOps 2026 (fetched)
https://data.finops.org/
- 1,192 respondents representing **$83B+ annual cloud spend**.
- **98% of orgs now manage AI spend, up from 63% in 2025 and 31% in 2024.** AI cost management
  is the #1 desired FinOps skillset.
- NOTE: the widely-quoted "**73% exceeded original AI cost projections**" is attributed to this
  report by secondary press (the-sourcecode.com, beri.net) but my fetch of data.finops.org did
  not surface it directly. Treat as "reported from the State of FinOps 2026 survey" with the
  secondary citation, or confirm in the full PDF before load-bearing use.

### Trade press (fetched)
https://www.the-sourcecode.com/ai-tech/token-costs-enterprise-ai-business-case-2026 (2026-07-15)
- 80–90% of AI spend is inference, not training (attributed to FinOps Foundation).
- Blended AI cost fell **67% YoY, $18.40 → $6.07 per M tokens** (Q1 2025 → Q1 2026), claimed
  from "analysis of 2.4B enterprise API calls" — SOFT provenance (pdpspectra presents the same
  numbers as its own analysis; no named primary). Prefer Ramp's 1,001%/497% instead.
- **Agentic multiplier: 5–30x** more tokens per task vs 2024 prompt-and-response. A customer
  service interaction: $0.04 (2023) → $1.20 (2026). SOFT — single source.
- Tiered-architecture gap: frontier-only $18.40 vs tiered $2.31 per M tokens (median). Same
  provenance caveat.
- Coinbase: halved AI spending while token usage grew; cache hit rate 5% → 60%. Quote (Armstrong):
  "Not with friction and spend alerts. With better defaults, routing, and caching." SOFT — single
  source; would want a Coinbase primary before quoting.
- TERN Group: cut API costs $40k → $24k/month by routing simpler tasks to cheaper models.
  Quote (Nigam): "The inference cost problem is the thing most AI roadmaps do not have a line
  for, then suddenly it is the biggest line on the P&L."
- Gartner (Sommer): "Token costs are going to explode to such an extent that you won't
  recognize a profit."

https://pdpspectra.com/blog/ai-token-pricing-economics-2026/ (2026-06-02)
- Same 67% / $18.40 / $6.07 figures, presented as own analysis — confirms the number circulates
  without a named primary. Goldman Sachs projection: 24x token-consumption growth by 2030 (SOFT).
- Example magnitudes: coding agent bug fix ~200k tokens; research agent single question ~1M.

### Also seen, not used
- OpenAI ChatGPT Enterprise added admin credit analytics + monthly spend caps in a June 2026
  update (beyondtmrw.org, search snippet only — not fetched; candidate for a future week).
- Walmart per-employee token allocations (search snippet only, unverified).
- "Microsoft terminated internal Claude Code licenses" — competitive move, weak parallel,
  already flagged SOFT in the Uber report (§6.7). Not used.
- beri.net summaries garble Uber's numbers ("$3.4B AI budget" — that's R&D). Reminder that
  aggregators on this story are unreliable; matches the essay's own source hierarchy.
