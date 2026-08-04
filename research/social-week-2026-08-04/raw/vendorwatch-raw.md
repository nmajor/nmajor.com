# Vendor watch — raw research notes, 2026-08-04

Beat: AI vendor pricing shifts, lock-in mechanics, contract terms, quiet cost-shifting.
Companion essay this week: "Uber measured the bill. It couldn't measure the work."
(essay: /app/src/content/essays/uber-measured-the-bill.md; ledger: research/uber-ai-budget/report.md).
Pitches must be adjacent, not a retell.

All facts below were verified against fetched pages on 2026-08-04 unless marked SOFT.

---

## Candidate 1 — Cursor renewal shock (SELECTED, pitch 1)

### Core reporting
- **The Information** (paywalled primary, 403 on fetch): "Cursor Customers Fight
  Price Hikes in Contract Talks" —
  https://www.theinformation.com/newsletters/applied-ai/cursor-customers-fight-price-hikes-contract-talks
  We could not read it. Attribute everything as "reported by The Information."
- **TNW retelling (fetched, primary usable source):**
  https://thenextweb.com/news/cursor-price-hikes-claude-code-harness-shift
  Ana Maria Constantin, published **2026-07-29 15:24 UTC**. Attributes to The Information:
  - An IT consulting firm with **800 Cursor licences** paid **~$200,000** for the year to May.
    At renewal Cursor asked **~$1.5M for the same usage**; the firm **negotiated it down to
    ~$250,000**.
  - **Sanofi** and **Druva** both faced renewals **~5x higher** than last year.
  - Sanofi CDO **Emmanuel Frenehard** (to The Information): *"I may not renew with Cursor.
    I get a better deal with Claude Code."*
  - TNW's own additions: Sapiom expects ~25% spend cut after moving to the OpenCode harness;
    Codestrap claims 97% cost reduction on a proprietary platform ("harness" thesis —
    Ilan Zerbib: "It's not about the model anymore. It's about the harness."). These are
    company self-claims; use only hedged or not at all.

### Cursor's own pricing change (fetched, vendor primary)
- https://cursor.com/blog/teams-pricing-june-2026 — "Improvements to Teams Pricing,"
  published **2026-06-01**. New tiers: **Standard $32/mo annual ($40 monthly)**,
  **Premium $96/mo annual ($120 monthly)** = "5x the included usage … at only 3x the cost."
  Effective **immediately for new customers, July 1, 2026 for renewing customers** — i.e.
  the renewal quotes landing now are on the new structure. Two separate usage pools
  (first-party models vs third-party API). Framed as predictability + spend alerts.

### Context: the acquisition
- **SpaceX agreed to acquire Cursor for $60B in stock, announced 2026-06-16**, days after
  SpaceX's IPO; expected to close Q3 2026. Widely reported:
  - https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/
  - https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html
  - https://www.bloomberg.com/news/articles/2026-06-16/spacex-cements-60-billion-deal-to-take-over-ai-startup-cursor (paywalled; headline verified via search)
  - Cursor crossed $1B annualized revenue in Nov 2025 (CNBC summary; search-surfaced — SOFT,
    corroborated by Fortune 2025-12-11 headline "cursor ipo 1 billion revenue").
- Note the sequencing: pricing change June 1 → acquisition announced June 16 → renewal
  quotes on new structure from July 1 → The Information story late July.

### History (background only, 2025 — too old to be the story)
- June–July 2025: Cursor's move from flat "fast requests" to usage credits; public apology
  2025-07-04; refunds. (wearefounders.uk timeline, finout.io — not fetched in depth; SOFT.)

### The analytical point that makes it a story
- The spread between the ask ($1.5M) and the settle ($250k) is **6x**. When list and settle
  are 6x apart, the renewal quote is an opening bid, not a price. Enterprises with
  procurement muscle (Sanofi) negotiate or walk; a mid-market shop that treats the quote
  as a price pays it.
- Adjacency to Uber essay without overlap: Uber = customer-side metering failure.
  This = vendor-side repricing at renewal, i.e. year one was the promotional price.

---

## Candidate 2 — Microsoft 365 July 1 increase, Copilot Chat folded in (SELECTED, pitch 2)

### Vendor primary (fetched)
- **Microsoft's own licensing announcement:**
  https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates
  (page dated 2026-02-16 as fetched). Effective **July 1, 2026**. Copilot Chat
  enhancements ("inbox and calendar awareness and access to Word, Excel, and PowerPoint
  agents") added to Office 365 E1/E3/E5, Microsoft 365 E3/E5/F1/F3, Business
  Basic/Standard/Premium. Commercial USD prices (with Teams):
  - Business Basic **$6 → $7 (+16%)**; Business Standard **$12.50 → $14 (+12%)**
  - Office 365 E3 **$23 → $26 (+13%)**; O365 E5 **$38 → $41 (+8%)**
  - Microsoft 365 E3 **$36 → $39 (+8%)**; M365 E5 **$57 → $60 (+5%)**
  - Frontline F1 **$2.25 → $3 (+33%)**; F3 **$8 → $10 (+25%)**
  - "Existing customers remain on current pricing **until renewal**." **No opt-out
    mechanism mentioned.**
- Announcement-date discrepancy: USCloud says Microsoft announced 2025-12-04; the MS
  licensing page as fetched is dated 2026-02-16. Don't hang anything on the announce date;
  "took effect July 1, 2026" is the safe formulation.

### Press corroboration (fetched)
- **Windows Latest**, 2026-07-05:
  https://www.windowslatest.com/2026/07/05/microsoft-365-just-got-a-price-hike-over-continuous-innovation-but-copilot-is-the-ai-tax-on-businesses/
  Same SKU table; adds **F1 without Teams +43%** (steepest), Windows Enterprise
  $5.85 → $7.63 (+31%); frames bundled Copilot Chat as "the AI tax on businesses";
  quote: "Whether their AI spending justifies a 43% jump on some SKUs is a different
  conversation." No opt-out discussed — features mandatory across tiers.
- **MarketScale** headline (search-surfaced, matches Windows Latest): "Microsoft 365
  prices rise up to 43% as Copilot Chat folds into base plans."
  https://www.marketscale.com/industries/software-and-technology/microsoft-365-prices-rise-up-to-43-as-copilot-chat-folds-into-base-plans
- **US Cloud** (fetched), published 2026-06-16:
  https://www.uscloud.com/blog/microsoft-365-price-increase-july-1-2026-what-enterprise-buyers-need-to-know-part-1/
  Same with-Teams/without-Teams tables (without-Teams: O365 E3 $14.45→$17.45 +14%, etc.).
  Fine print gem: **Security Copilot bundled into E5 at 400 SCUs/month per 1,000 paid
  licenses (cap 10,000 SCUs/mo), overage $6/SCU** — a usage meter embedded inside a seat
  product. E5/E7 packaging additions expected Q3 2026; E7 price unchanged.
- Rollout window: packaging changes began June 2026, complete by **2026-08-01**
  (redriver.com summary, search-surfaced — SOFT but consistent with MS page).

### Distinction to keep straight in any piece
- What's bundled is **Copilot Chat** (chat + agents), NOT the full Microsoft 365 Copilot
  seat, which remains a separate paid add-on (historically $30/user/mo — the very price
  Forbes praised for predictability in the Uber story). Never blur the two.

### The analytical point
- Uber's problem: a meter it could read but not justify. Microsoft's move is the mirror
  image: the AI charge with **no meter at all** — folded into the seat price, no opt-out,
  arrives automatically at renewal. "Usage-based pricing surprises you; bundled pricing
  never even asks."
- Mid-market relevance: Business Basic/Standard are exactly the mid-market SKUs; +16%/+12%
  applied to headcount is a real number, and it lands whether or not anyone opens Copilot.

---

## Candidates investigated and NOT selected

- **Anthropic Claude Code limit churn (May–Aug 2026):** 2026-05-06 permanent 2x of 5-hour
  limits; 2026-05-13 announced programmatic usage would move to a separate credit pool at
  full API rates effective 2026-06-15, then **paused the change on 06-15**; weekly limits
  temporarily +50% (through 2026-08-19 per one tracker). Sources: explainx.ai timeline,
  findskill.ai "June 15 split," truefoundry.com (all search-surfaced, none authoritative;
  Anthropic's own posts not fetched). Rejected: chronology is churny and half-reversed,
  weakly sourced, and too close to the Uber/Claude Code essay's subject matter.
- **Salesforce Agentforce Flex Credits** ($500 per 100k credits, ~$0.10/action): announced
  2025-05-15 — outside the 90-day window, no fresh July hook found. Rejected as stale.
- **Claude Enterprise ~$1.1M/yr for 800-person org** (coworker.ai, 2026-07-16): rep-supplied
  math, single anonymous org, and the same article admits its ChatGPT figures trace to a
  2023 Reddit post. Too soft to be load-bearing. Noted only.
- **Zylo 2026 SaaS Management Index** (per-seat 21%→15%, hybrid 41%, 78% of IT leaders hit
  unexpected charges): good scene-setting stats but survey-shaped, and the Uber ledger
  already flags the 78% stat as needing a direct Zylo fetch. Usable as garnish later.
- **"Harness" migration thesis** (Sapiom/Codestrap/Weave routing data in the TNW piece):
  interesting but the numbers are vendor self-claims; better as a future story once a
  named non-vendor customer shows real invoices.

## Chronology check vs the essay (avoid-overlap audit)
- Essay topics NOT reused: Uber budget burn, leaderboards, $1,500 cap, Macdonald quotes,
  Microsoft-as-predictable-contrast is referenced only to invert it (new fact: the
  predictable seat just got repriced with AI inside).
