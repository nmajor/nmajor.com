# Raw — negative results, dead sectors, and source-quality flags
Fetch date: 2026-07-20

This file records what was searched and came back EMPTY or unusable, so the next run
does not repeat it. Honest yield accounting.

## Queries run (all via Tavily advanced + WebSearch, date-bounded 2025-09-01 onward unless noted)

1. "credit union AI loan processing automation hours saved named credit union 2026" — PARTIAL YIELD (see midmarket-credit-unions-lending.md). Nearly every result was a lending-vendor blog recycling the same handful of CU names.
2. "mid-size manufacturer AI quoting order entry cut cycle time case study 2026" — MOSTLY SLOP. Airbus/GE recycled endlessly. One anonymous German case (SimplifieD).
3. "regional business journal AI automation invoice processing accounts payable named mid-size company saved hours 2026" — NEAR-TOTAL FAILURE. Results were 100% AP-software vendor listicles and comparison pages (NetSuite, BILL, Medius, Tipalti, Stampli, SourceForge, Slashdot, Payhawk, Kognitos, ChatFin, Gennai, Punku, MakersHub, WiseTREND, Cevinio). **Only named customer surfaced in the entire query: Carrot-Top Industries** (below).
4. "freight brokerage trucking company AI dispatch quoting automation employees named company results FreightWaves 2026" — PARTIAL (see midmarket-logistics-construction.md).
5. "insurance agency MGA claims intake OR prior authorization AI deployment named company 200 employees results 2026" — **TOTAL FAILURE.** Zero named mid-market insurers. Everything was MGA-tech vendor content (Insurnest, Vertafore, Genasys, Strada, Send, Earnix), carrier-scale names (Travelers, Allstate, State Farm, Liberty Mutual, Lemonade, Progressive, GEICO), or UnitedHealth nH-Predict litigation coverage already in the corpus. Insurance mid-market is a genuine blank.
6. "community hospital OR physician group AI prior authorization denials revenue cycle results named 2026" — **TOTAL FAILURE on named mid-market providers.** All results were RCM-vendor directories (Becker's "385+ RCM companies to know"), survey/benchmark reporting (HFMA/Guidehouse, Adonis, AHA Costs of Caring), or vendor self-claims (R1, Humata Health, Jorie AI, Assembly Health). No named community hospital or physician group with before/after numbers.
7. "diginomica mid-market company AI agent one workflow results what broke lessons 2026" — FAILURE. Returned agentic-AI think pieces, not case studies.
8. "Retool OR Airtable OR Zapier customer story replaced software built internal tool saved per year distribution manufacturing company" — FAILURE FOR THIS LANE. Retool's public customer roster is DoorDash/Ramp/Amazon/Boeing/Pfizer/Komatsu — big tech and mega-enterprise. Mid-market names absent.
9. "'we built' internal AI tool cancelled SaaS subscription saved company 300 employees 2026" — FAILURE. Returned the SaaSpocalypse commentary genre (HBR, BCG, CIO.com, Forbes) and LinkedIn hot takes, not operator case studies.
10. "AI project 'what went wrong' rework maintenance cost mid-size company named CIO honest retrospective one workflow 2026" — **TOTAL FAILURE.** This is the single highest-value thing the ICP panel asked for and it essentially does not exist in public search. Everything returned was: generic failure-rate statistics (Gartner 40% cancelled by 2027; CIO.com State of the CIO 81% missing goals; MIT/BCG 95% of pilots), anonymised consultancy anecdotes, or cost-estimator marketing pages. **Nobody publishes a named mid-market post-mortem.**
11. WebSearch (domain-restricted) americanbanker/cutimes/cuinsight/bankingdive — returned survey aggregates only ("Community banks (78%) and credit unions (73%) were the most likely to cite workflow automation as a reason for AI spending"). No named institution with before/after numbers.
12. WebSearch (domain-restricted) constructiondive/law.com/abajournal/enr — PARTIAL YIELD (Gilbane, Boldt).
13. WebSearch bizjournals.com — **BLOCKED.** "The following domains are not accessible to our user agent: ['bizjournals.com']". Regional business journals — explicitly named in the brief as the best mid-market source — are not reachable via WebSearch. Crain's titles were reachable but returned nothing on this query. **This is a structural gap in the toolchain, not an absence of stories.**

---

## The one named AP/invoice customer found (vendor source)

SOURCE: https://www.netsuite.com/portal/resource/articles/accounting/ap-automation-business-case.shtml
Title: Make the Business Case for AP Automation in 2026 | NetSuite (VENDOR)

"Carrot-Top Industries, a North-Carolina-based retailer whose flag-and-banner business has surged with ecommerce growth, realized its finance team was losing too many hours due to hand-keying invoices and printing paper checks, hampering growth. The company deployed NetSuite Bill Capture and Payment Automation, which uses AI-powered object detection and OCR to automatically extract invoice data, matches it to purchase orders, and route each bill for online approval before releasing payment. NetSuite's AP automation reduced Carrot-Top's AP labor costs by 50%, shaved hours off the month-end close, and gave managers real-time visibility into cash requirements—all without adding headcount, even as order volume continues to climb."

Carrot-Top Industries: Hillsborough NC, flag/banner retailer. SMALL — likely under 100 staff, i.e. below the band. Single vendor source, no independent corroboration found. WEAK.

---

## CONTENT-FARM / LOW-QUALITY SOURCES ENCOUNTERED (flagged, numbers NOT passed through)

None of the specifically blacklisted domains (theapplied.co, insideraitrends.com, elladvisory.com,
nssg.consulting, altstack.ai, moonpool.ai, bahrku.com, fwdslash.ai, articsledge.com, enkiai.com,
klover.ai, talyx.ai, intuitionlabs.ai, vaasblock.com, skycrumbs.com, aicepartners.com) appeared
in results this run. But the following NEW low-quality/aggregator sources showed up repeatedly
and should be treated the same way — **do not pass their numbers through**:

- **stealthagents.com** — "AI Loan Underwriting Automation Statistics 2026". Pure statistic-aggregation farm. Source of the "Commonwealth Credit Union 70-83% automated via Zest AI", "Marshall Capital Group 40% faster / 3x deal volume", and "one Canadian lender 48h→4h" claims. All uncited. FLAGGED.
- **beri.net** ("THE D*AI*LY BRIEF") — AI-failure statistic aggregation, invented composite examples ("A Fortune 500 manufacturer spent $12M…"). FLAGGED.
- **osforyour.business** — "AI Business OS" credit-union content with fully fabricated-looking composite case ("Results After 180 Days: turnover 19%→12.5%, loan processing 5.2→2.1 days"). No named institution. FLAGGED — this is a synthetic case study presented as real.
- **braincuber.com**, **phantasma.global**, **agilesoftlabs.com**, **conversight.ai**, **marketjoy.com**, **raininfotech.com**, **masterofcode.com**, **riseuplabs.com**, **intellectyx.com**, **punku.ai**, **rivuletiq.com**, **bosio.digital**, **alicelabs.ai** — all AI-agency SEO listicles recycling the same Airbus/GE/McKinsey numbers. FLAGGED.
- **multimodal.dev**, **algebrik.ai**, **fusefinance.com**, **timvero.com**, **insurnest.com**, **getstrada.com**, **kognitos.com**, **chatfin.ai** — legitimate vendors, but their case numbers are self-published marketing. Usable ONLY with the vendor label attached and ideally a second source.

---

## Named cases found that are TOO BIG for this lane (noted separately, per brief)

- **Penske Logistics** (~40,000 staff) — Augie validating ~600,000 loads, anticipates 30-40% productivity gains.
- **NFI** (~16,000 staff) — build-vs-buy framework; >100 hrs/week reclaimed in back office, 4 FTE equivalent saved in load tracking, training time -20%, appointment scheduling 75% faster, Digital Twin finds 5-10% transportation savings per customer. **This is actually the best-documented build-vs-buy case in the sweep — just at the wrong size.**
- **Gilbane** (~3,000+ staff) — Trunk Tools / TrunkText, 87% answer accuracy, $100k/month rework avoided. Deployment is single-project scoped so it reads mid-market in practice.
- **Teachers FCU** ($9B, ~1,000+ staff) — 8 million clicks / 13,250 workdays saved, processing times halved.
- **Suncoast Credit Union** (Florida's largest, ~2,500 staff) — check-fraud review capacity +1,000% without added headcount.
- **First Internet Bank** ($6B, one office) — SBA due diligence 8-10 hrs/case → 87% reduction, 24,300 hours saved year one (Bretton AI, vendor-claimed via LinkedIn).
- **Armstrong Transport Group** ($1.3B brokerage) — qualitative testimonial only, no numbers.
- **Commonwealth Credit Union** — 70-83% of consumer loan decisions automated (Zest AI). Sourced only to a content farm; needs primary.
- **The Boldt Co.** (~2,600 staff) — Document Crunch enterprise-wide, no numbers published.
