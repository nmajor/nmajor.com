---
slug: unitedhealth-ai-claims-denials
company: UnitedHealth Group (UnitedHealthcare / Optum)
sector: Health insurance
size: ~50M members served; 2025 revenue ~$400B
category: governance
tags: [claims, prior-authorization, denials, health-insurance, litigation, generative-ai, predictive-ml, roi-claims]
date_added: 2026-07-07
published: 2026-06 to 2026-07 (multiple)
verified: cross-checked
confidence: medium
sources:
  - https://www.unitedhealthgroup.com/ (Avery press release, 2026-03-26; Q1 2026 earnings call, Apr 2026)
  - https://www.bloomberg.com/news/articles/2026-06-19/unitedhealth-bets-3-billion-on-ai-to-cut-costs-tame-backlash
  - https://www.pymnts.com/healthcare/2026/unitedhealths-ai-is-rebuilding-the-payment-layer-of-american-healthcare/
  - https://www.fiercehealthcare.com/payers/unitedhealthcare-launches-avery-generative-ai-companion-members
  - https://www.hsgac.senate.gov/ (PSI "Refusal of Recovery," 2024-10-17)
  - Lokken v. UnitedHealth Group, No. 0:23-cv-03514 (D. Minn.)
  - https://www.statnews.com/2023/03/13/ (STAT "Denied by AI")
  - https://www.cms.gov/ (CMS-4201-F; Feb 6, 2024 AI FAQ)
---

## The one thing to get right: two systems, do not merge them
There are **two separate things** here, and conflating them is the trap:
1. **nH Predict** — an **older, predictive/statistical ML model** (matches a patient against a ~6M-patient database to estimate length of stay/discharge). **Not an LLM, not generative.** It is the subject of the denial lawsuit and the Senate report, and it predates the generative-AI era.
2. **The 2026 "$3B AI push"** — the current, marketed program. Within it, **only the member-service assistant (Avery) is confirmed generative AI**; the claims/prior-auth/pharmacy systems are described only as "AI-first," and **no source confirms an LLM makes any adjudication or denial decision.**

**Load-bearing finding:** No credible source ties a generative AI / LLM to claims adjudication or prior-auth *denial* at UnitedHealth. Writing "an AI/LLM denies your claim" about the current push is **not supported** and would conflate the two systems.

## What they did
UnitedHealth put AI at the center of a turnaround, planning ~$3B of AI investment across 2026-27 (~$1.5B in 2026) and telling investors (Q1 2026 earnings call; June 2026 Bloomberg interview) it is already earning a claimed 2-to-1 return. The work is administrative automation across the claims/coverage machine: claims adjudication and coverage validation (Optum Real), prior authorization (Digital Auth Complete), pharmacy approvals (PreCheck MyScript), chart summarization for nurses, member-call analysis, and a generative member companion (Avery) that answers benefit/billing questions, gives claim *status*, and schedules appointments (the "bots calling doctors" headline = scheduling, not denials). Separately and earlier, UnitedHealth is a defendant in a federal class action over **nH Predict**, alleged to have driven post-acute coverage denials.

## The numbers (tiered by evidence)
**REPORTED — company-stated on the Q1 2026 earnings call / Bloomberg, unaudited (NOT in the filed 8-K):**
- AI spend: ~$1.5B in 2026, ~$3B across 2026-27. Claimed ~2:1 return; ~$1B operating-cost reduction expected in 2026.
- Optum Real: ~1B transactions since launch; "cuts manual contact costs 76%." Described as "AI-first," never as generative/LLM.
- Digital Auth Complete: 96% first-submission approval rate (a throughput/*approval* metric, not a denial metric).
- PreCheck MyScript: pharmacy approval >8 hours → <30 seconds; 68% fewer denials tied to missing information.
- Prior auth context: ~95% electronic, ~half real-time, >90% within one business day.
- Internal capability (Dadlani, now CEO of Optum Insight): "1,000+ AI uses, 20,000 AI engineers, 117 LLMs available for staff." A staff-productivity statement — does **not** say LLMs make adjudication decisions.

**CONFIRMED — Avery (primary, UNH press release 2026-03-26):** explicitly "a generative AI companion"; member-facing (coverage Q&A, scheduling, claim *status*, EOB explanations); "human expertise guiding output"; scaling to ~20.5M members by end-2026.

**CONFIRMED — the denial-rate history (primary, PSI Senate report "Refusal of Recovery," 2024-10-17):** UnitedHealth's post-acute denial rate rose **8.7% (2019) → 22.7% (2022), +172%**; skilled-nursing denials **1.4% → 12.6%, ~9x**. The report frames this as denials rising **"at the same time"** as automation initiatives — **correlation, explicitly not a proven causal mechanism.** This is the **2020-2022 nH Predict era, not 2026.**

**ALLEGED — in the Lokken complaint (not proven fact; flag every time):** nH Predict had a "~90% error rate"; ">90% of claim denials / >80% of prior-auth denials reversed on appeal"; only ~0.2% of patients appeal; the tool was used "in lieu of physicians." These are plaintiffs' allegations/calculations, currently in discovery.

## What broke / the caveats
- The efficiency figures are all **company-reported and unaudited** (earnings-call/interview commentary; the Q1 2026 8-K lists AI only as a cost driver and a risk factor).
- The "savings might be denial-driven, not efficiency" argument is only cleanly attached to **nH Predict** (the *Lokken* "financial windfall" theory), not to the 2026 generative systems. The financial-math version ("2:1 on $1.5B ≈ ~16% of operating income, implausible") is from a **low-trust source (ainvest) and is speculative** — do not launder it.
- **Counter-current fact:** in 2026 UnitedHealth is *reducing* prior authorization (cut requirements ~30% in May; dropped it for rural providers; ~two-thirds of pediatric PA). A "they're using AI to deny more, right now" narrative is unsupported and partly cuts the other way.
- **Litigation status (CONFIRMED):** *Lokken v. UnitedHealth Group*, No. 0:23-cv-03514 (D. Minn.), Judge John R. Tunheim; filed Nov 14, 2023. Feb 13, 2025: breach-of-contract and good-faith claims allowed to proceed; others dismissed. **Class not yet certified** (cert declarations due Sept 14, 2026). **March 9, 2026:** court ordered UNH to produce internal records back to **Jan 2017 (~9 years)** — nH Predict analyses, naviHealth cost-savings records, internal AI-review-board materials, care-coordinator comp/performance data. *(The earlier draft of this entry said "June 2026" — that was unverified; the sourced order is March 9, 2026.)*
- **No verified dollar cost yet — do NOT invent one for a hook.** The class is not certified and **no settlement or damages have been reported** (settlement talks reportedly warming in 2026, secondary). The **"$5 million"** figure in press coverage is the class action's **amount-in-controversy threshold** (a jurisdictional pleading floor), NOT money UNH has paid — never write "it cost them $5M." UNH's stock/market-cap decline is **multi-causal** (DOJ probes, MA rate pressure, the CEO killing) and must not be attributed to this automation. The honest, citable "costs" are (a) the **consequence cascade** — a class action, the PSI Senate report, and the decade-of-files discovery order to a federal judge; and (b) the **human cost**: named plaintiff **Gene Lokken, 91**, had skilled-nursing coverage terminated after a fall; his family paid roughly **$12,000–$14,000/month out of pocket for ~a year until his death (July 17, 2023)** (CBS News). That human figure is the victim's cost, not UNH's — attribute it correctly.
- **UNH's defense (for balance):** "The naviHealth predict tool is not used to make coverage determinations… used as a guide… Coverage decisions are based on CMS criteria and the member's plan." The dispute is decision-*support* vs *in lieu of* physicians — unresolved, and what discovery targets.

## Regulatory guardrails (CONFIRMED — make human-in-the-loop a legal requirement, not a nicety)
- **CMS-4201-F (2024) + Feb 6, 2024 CMS FAQ:** an algorithm predicting length of stay "cannot be the sole grounds for terminating services"; "AI cannot be used to solely deny an inpatient admission"; determinations must rest on the individual patient.
- **California SB 1120** ("Physicians Make Decisions Act," eff. Jan 1, 2025): medical-necessity denials must be made by a licensed clinician; AI may not be the sole basis.
- **NAIC AI Model Bulletin** (adopted Dec 2023; ~24 states as of March 2025 — reverify count): soft governance guidance, not a hard mandate.

## Comparator (REPORTED)
- **STAT "Denied by AI"** (Ross & Herman, 2023; Pulitzer finalist): internal naviHealth target to keep rehab stays within 3% (later <1%) of the algorithm's projected days, with case managers disciplined for exceeding it. Reporting, not a court finding.
- **Cigna PXDX** (ProPublica, 2023): 300,000+ claims denied in two months, avg 1.2 seconds each — a rules-based matcher, also not an LLM. Shows the industry pattern.

## Why it matters for our beat
The most honest, on-brand story is **not** "AI denies your claim." It is that **"AI" in the $3B headline is three different things wearing one word** — confirmed generative (Avery, customer service), undisclosed adjudication systems (possibly rules+predictive ML), and an older predictive model (nH Predict) now in litigation — and that a decision-maker's real job is to disaggregate a reported "2:1 AI return" into *which* system, doing *what*, with the savings being genuine efficiency vs deferred liability (appeals, regulatory exposure, a decade of files to a federal judge). The dark mirror of "fix the process first": pointing automation at a coverage decision is where human-in-the-loop stops being a nicety and becomes the law.

## Post angles (honesty-safe)
- **"Which AI?"** — how to read a company's "AI ROI" headline: disaggregate the systems, ask what's generative vs predictive vs rules, and whether the "savings" are efficiency or avoided payouts. (No overclaim required; the ambiguity *is* the point.)
- **Automating a decision vs automating a denial** — where regulators already draw the human-in-the-loop line (CMS FAQ, SB 1120), and why that line exists.
- A synthesis leg for a "when AI meets regulated decisions" piece, alongside the Sedgwick insurer maturity gap and the FSB report.
