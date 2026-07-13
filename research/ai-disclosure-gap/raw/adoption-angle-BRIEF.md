# Research brief: Why is AI disclosure so uneven across industries — insurance leads, banking lags

**Date:** 2026-07-13 · **For:** Actual Intelligence (nmajor.com) story candidate
**Anchor:** Institute of Applied AI census of AI mentions in 2,112 traditional-company 2025 10-Ks — Insurance 82.9% (highest, above tech's 77.4%), Banks & lenders 22.8% (lowest of all traditional sectors).
Report: https://www.appliedartificialintelligence.org/research/ai-in-10k-filings-2025/

## The one-line thesis the evidence actually supports

The 10-K gap is **mostly a disclosure gap, not an adoption gap.** Banks are among the heaviest real AI users in the economy — they just have the strongest legal reasons to stay quiet in a legally-binding investor document. Insurance's lead is partly real (it genuinely adopts fast) and partly manufactured by **state regulation that requires insurers to document and govern AI**, which pushes AI language into the open. So the census is best read as a map of **liability exposure and disclosure incentives**, not a leaderboard of who runs the most AI.

---

## Q1 — Why does insurance disclose/adopt AI so highly?

**Adoption is genuinely high (independent surveys, not the 10-K):**
- Conning 2025 survey: 90% of insurers somewhere on the genAI journey; 55% in early or full deployment; machine learning at 74% adoption. https://www.conning.com/about-us/news/ir-pr---ai-survey-2025
- BCG (Sept 2025): "The insurance industry has outpaced other sectors in its early embrace of artificial intelligence" — but only **7% have brought AI systems to scale.** https://www.bcg.com/publications/2025/insurance-leads-ai-adoption-now-time-to-scale
- NAIC regulator data, by line of business: 92% of health insurers, 88% auto, 70% home, 58% life report current/planned AI use. https://content.naic.org/insurance-topics/artificial-intelligence
- ~three-quarters of US carriers report using AI in claims and underwriting (Insurance Business survey).

**Why insurance is structurally an AI-native business:** Evident co-CEO Alexandra Mousavizadeh: "Insurance companies have the opportunity to automate pretty much everything that they're doing at speed, which is not the case for banks. The industry may be more disruptable than banking." Insurance *is* prediction — underwriting, actuarial pricing, claims triage, fraud — so ML has an obvious home. https://www.ciodive.com/news/insurance-industry-generative-ai-adoption-evident-manulife-axa/751874/

**Why insurers DISCLOSE (the piece that lifts the 82.9%):** state insurance regulators now *require* AI governance and documentation, which normalizes writing about AI:
- NAIC 2023 Model Bulletin "Use of AI Systems by Insurers" — mandates governance, documentation, audit; adopted across many states.
- Colorado SB 205 / C.R.S. §10-3-1104.9 — bans predictive models causing unfair discrimination, requires quantitative disparate-impact testing, annual reporting to the Division, senior-management accountability; **expanded Oct 15 2025 to auto and health.** https://www.troutman.com/insights/locke-lord-quickstudy-artificial-intelligence-state-insurance-regulation-a-year-in-review/
- The Institute's own report flags this: "Insurance's rate may be raised by state disclosure expectations" (they did NOT control for it).

**Verdict:** Supported. Insurance high rate = real fast adoption **plus** a regulatory regime that forces AI into the open.

## Q2 — Why do banks disclose AI so much LESS despite being heavy users?

**Banks are heavy real users (so the 22.8% is not low adoption):**
- JPMorgan: 500+ AI use cases in production; AML false positives cut 95%; proprietary LLM Suite used daily by 230,000+ employees (American Banker's 2025 "Innovation of the Year"); named systems COiN, LOXM, IndexGPT; Jamie Dimon cites $2bn in savings. https://emerj.com/artificial-intelligence-at-jpmorgan-chase/
- Benchmarking firm Evident frames insurers as *following the lead of big banks* on genAI — i.e., banks are ahead on real deployment while disclosing far less. https://www.ciodive.com/news/insurance-industry-generative-ai-adoption-evident-manulife-axa/751874/

**Why banks stay quiet (the strongest, best-sourced hypotheses):**
1. **Fair-lending liability.** ECOA + Fair Housing Act prohibit discrimination even if unintentional; OCC examiners analyze AI outputs for disparate impact. Disclosing AI in credit decisions invites scrutiny into model validation and bias — a paper trail plaintiffs and regulators can pull. (BIS FSI Insights No 63; multiple law-firm analyses.) https://www.bis.org/fsi/publ/insights63.pdf
2. **Supervisory / model-risk drag.** Fed SR 11-7 model-risk guidance treats AI/ML models as in-scope; the Bank Policy Institute calls model-risk guidance "among the most constraining supervisory policies on banks' adoption of technology," "often used by examiners as a set of check-the-box instructions," and says "fear of enforcement actions and adverse supervisory outcomes can significantly delay AI adoption" — months-long model-risk reviews before deploying even low-risk tools. https://bpi.com/the-overlooked-risk-in-bank-ai-adoption-regulatory-inaction/
3. **Disclosure conservatism.** A 10-K is a legally binding statement to investors; banks minimize forward AI claims to avoid both fair-lending exposure and securities risk.

**The countervailing force worth naming — "AI-washing" litigation** (cuts against *over*-stating, industry-wide): AI-related securities class actions ~doubled 2023→2024; Stanford SCAC counted 53 AI-related suits through H1 2025; SEC brought multiple enforcement actions against firms overstating AI. So there's real downside to *hyping* AI in filings — which reinforces conservative disclosers like banks staying terse. https://www.corporatecomplianceinsights.com/rising-tide-ai-washing-cases-securities-litigation/ · https://www.nortonrosefulbright.com/en/knowledge/publications/9ab5047f/sec-heightens-enforcement-for-ai-related-disclosures

**Verdict:** Regulatory-caution + fair-lending-liability + disclosure-conservatism hypotheses are all **supported.** "Banks genuinely use less AI" is **refuted** by the JPMorgan-scale deployment evidence and the Evident "insurers follow banks" framing.

## Q3 — Is the gap real ADOPTION or mostly DISCLOSURE?

**Mostly disclosure.** Direct evidence:
- The Institute's own caveat: "It measures disclosure... It is not an audit of what companies run." Their spot-check of 12 production-tier filers found **7 had AI results in investor decks/news releases that never appeared in the 10-K** — systematic underreporting of real deployment.
- Independent adoption surveys don't show banks trailing insurance the way 22.8% vs 82.9% implies — they show financial services broadly as a leading adopter (McKinsey: 88% of orgs use AI in ≥1 function; financial institutions among the most data-rich adopters, >70% expected at scale by late 2025). https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-2025-agents-innovation_cmyk-v1.pdf
- **Thin spot (flag honestly):** no clean public survey puts a single AI-adoption % on *banks* vs *insurers* side by side — McKinsey and most trackers lump them as "financial services." The strongest banks-lead claim (Evident) comes from one benchmarking firm, so treat "banks actually out-adopt insurers" as *directional*, not settled.

## Q4 — What do the high vs low sectors have in common?

**High disclosers (insurance 83%, transport/logistics 71%, telecom 66%):** AI use cases are **back-office, measurable, and low consumer-protection liability.**
- Logistics: route optimization cutting fuel 10-15%, delivery times 15-20%, late shipments ~30%; matured past pilots into production. https://www.truckinginfo.com/10241279/ai-in-logistics-penske-survey-uncovers-surging-adoption-rising-concerns
- Telecom: ~9 in 10 say AI raises revenue/cuts cost; top ROI = autonomous networks (50%); 89% growing AI budgets. https://blogs.nvidia.com/blog/ai-in-telco-survey-2026/
- These stories are safe to tell shareholders — no ECOA, no disparate-impact exposure.

**Low disclosers (banks 23%):** AI touches **credit, consumer eligibility, and heavily supervised decisions** — every disclosure is a potential fair-lending or securities-litigation surface.

**The pattern:** disclosure rate tracks **(a) how much regulation *requires* documenting AI** (insurance ↑) and **(b) how much legal liability attaches to *admitting* AI in consumer-facing decisions** (banks ↓) — NOT how much AI a sector runs. Data-richness and adoption are high across all these sectors; what differs is the *cost of putting it in writing.*

---

## Best 3-4 primary/independent sources for the writer to cite

1. **Institute of Applied AI 10-K census** — the anchor dataset + its own disclosure≠deployment caveat and 7/12 spot-check. https://www.appliedartificialintelligence.org/research/ai-in-10k-filings-2025/
2. **Bank Policy Institute, "The Overlooked Risk in Bank AI Adoption: Regulatory Inaction"** — banks' own trade body on why supervisory/model-risk drag makes banks cautious; quotable lines. https://bpi.com/the-overlooked-risk-in-bank-ai-adoption-regulatory-inaction/
3. **Troutman/Locke Lord, "AI State Insurance Regulation: A Year in Review"** (NAIC Model Bulletin + Colorado SB 205) — the regulatory machinery that pushes insurers to document AI. https://www.troutman.com/insights/locke-lord-quickstudy-artificial-intelligence-state-insurance-regulation-a-year-in-review/
4. **BCG, "Insurance Leads in AI Adoption. Now It's Time to Scale."** — independent confirmation insurance out-adopts other sectors, and the 7%-at-scale reality check. https://www.bcg.com/publications/2025/insurance-leads-ai-adoption-now-time-to-scale
- Bonus named contrast: JPMorgan deployment scale (emerj.com/artificial-intelligence-at-jpmorgan-chase) + Evident "insurers follow banks" (ciodive.com link above) + AI-washing litigation (Norton Rose Fulbright / Corporate Compliance Insights).

## Where the evidence is thin / honest caveats

- **No clean banks-vs-insurers adoption %.** Trackers bundle them as financial services; the "banks actually adopt more than insurers" claim rests largely on Evident. Directional, not proven.
- **Can't fully separate insurance's real-adoption lead from its disclosure-requirement lift** — the Institute didn't control for state rules, so we can't quantify how much of 82.9% is genuine adoption vs mandated documentation.
- **10-K = willingness to disclose, not deployment.** True in both directions; the whole story rides on this caveat, so lead with it rather than treating 22.8% as "banks barely use AI."
- **AI-washing cuts the opposite way** from "everyone hypes AI" — worth a sentence so the piece doesn't imply disclosure is purely upside; for conservative filers there's genuine litigation downside to overstating.
