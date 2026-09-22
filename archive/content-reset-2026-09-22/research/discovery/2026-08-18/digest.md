# Discovery digest — 2026-08-18

Compressed run (three parallel lanes: first-of-kind/accountability, enterprise deployment,
Exa neural + practitioner). Raw in `raw/`. Deduped against `../seen.txt`.

## Top candidates

### A. Fivetran published the full cost of replacing a $65k/yr SaaS product with AI
Mike Gordon, VP Platform Engineering, wrote up two engineers replacing Atlassian Statuspage
over four months: ~1,050 hours (~$105,000 of engineering) plus ~$4,500 in tokens, against a
forecast $12,400-$25,000/yr to run. Production hardening was 537 hours, 56% of total effort,
more than requirements, tooling and the entire MVP combined. 8 of 46 PRs never merged.
Migrating 26,000 subscribers took 40+ hours.
- https://www.fivetran.com/blog/we-built-our-own-status-page-with-ai-replacing-a-65k-saas-product (2026-08-07)
- Self-reported, but publishes numbers that undercut its own headline. 2 points, 0 comments on HN.
- Shape: baseline essay with a strong tactical take-home. Extends the build-vs-buy beat with audited numbers.

### B. Starbucks ran an AI inventory counter in 11,300 stores for nine months, then reverted to hand counts
99% accuracy in controlled tests; in stores it counted fridge reflections as milk cartons and
bins as food. Wi-Fi drops wiped counts with no manual fallback. Seasonal packaging needed up to
six weeks of retraining. A 1990s AS/400 backend blocked real-time data. Cost estimated north of
$10m. Vendor NomadGo cut most of its 30 staff; CEO called it "a complete surprise."
- https://www.geekwire.com/2026/report-starbucks-scrapped-an-ai-inventory-tool-and-left-a-seattle-area-startup-blindsided/ (2026-07-27)
- https://thenextweb.com/news/starbucks-ai-inventory-tool-nomadgo-automated-counting-failure (2026-08-06)
- Fast Company original; Reuters carried the cancellation; Starbucks gave a statement.
- Shape: spike candidate. Big brand, vivid detail. NOTE overlap risk with 2026-08-11 issue (Kinney pullback).

### C. Customers Bancorp says AI cut commercial loans to 7 days ready-to-close — and The Hartford won't say
Customers Bancorp (~$22B regional bank) reported a multi-agent underwriting engine taking
readiness-to-close from a stated 30-60 day industry norm to 7 days on a Q2 2026 pilot, in an
SEC-filed earnings release. Caveats: a pilot on selected loans, "ready to close" is not closed,
and the baseline is an asserted industry norm rather than their own measured before-state.
The Hartford's CEO told investors underwriting is "being completed in a fraction of the time"
and the company declined to provide specific results.
- https://www.customersbank.com/investor-relations/press-releases/press-release/Customers-Bancorp-Reports-Results-for-Second-Quarter-2026-1786/ (8-K, 2026-07-23)
- https://www.dig-in.com/news/how-ai-is-slashing-underwriting-time-for-the-hartford (2026-07-24)
- Shape: the contrast is the piece. What a filed number costs you versus what vague confidence costs you.

### D. Congress demands eight airlines account for AI-set individual prices
Pallone letters dated 2026-08-11 to American, Delta, United, Alaska, JetBlue, Southwest,
Frontier, Hawaiian; written answers due 2026-08-25. Question 8 asks each carrier to name every
customer data element fed to its pricing AI, who reviews prices, how often they change, whether
there is an upper limit, and whether prices take effect automatically or a human decides.
New York forces the on-page line "This price was set by an algorithm using your personal data";
Target already displays it.
- https://democrats-energycommerce.house.gov/sites/evo-subsites/democrats-energycommerce.house.gov/files/evo-media-document/2026.8.11-letter-re-surveillance-pricing.pdf
- Shape: the 19 questions are a governance checklist any CIO could be handed. Live deadline.

### E. American Airlines' AURA reassigns seats before passengers have actually misconnected
Predicts who is certain to misconnect and gives the seat away in advance. Incidents at ORD,
CLT, DFW, MEX. AA says the tool "is automated, not artificial intelligence, with clearly
defined guardrails." The claim that gate agents cannot reverse it is secondary reporting only.
- https://viewfromthewing.com/american-airlines-ai-keeps-removing-passengers-from-flights-they-run-to-the-gate-but-their-seats-are-gone/ (2026-08-11)

## Supporting material (not standalone issues)
- **AI securities class actions**: 15 filings H1 2026 vs 16 in all of 2025; AI cases were $385B
  of the $529B Disclosure Dollar Loss Index. Good backing evidence for a piece about what
  executives claim publicly.
- **PenFed** switched off its IT support phone line after an agent deflected ~70% of ITSM cases
  (diginomica, 2026-08-11). Universal back-office workflow.
- **Manulife** ~$213M "enterprise AI value", a self-defined composite. Useful as a cautionary
  case in how big AI-benefit numbers get built.
- **Ask HN null result** (2026-08-16, 105 pts): someone hunted for a company that reverted from
  AI-written code and found none that survived scrutiny. An honesty check against reversal-shaped
  arguments.

## Rejected
- Claimed EU AI Office €47M fines: content-farm domains only, contradicted by the Commission's
  own 2026-08-02 release. Do not use.
- Texas AG / Pieces Technologies "August 2026": actually a September 2024 action.
- Ford rehiring ~350 quality engineers: aggregator sources only, needs primary sourcing.
- BaFin ~$40M fine ceiling: not in BaFin's own release.
