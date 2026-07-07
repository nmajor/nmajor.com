# FSB — Sound Practices for Responsible Adoption of AI (primary PDF)

URL: https://www.fsb.org/uploads/P100626.pdf
Captured: 2026-07-07 (parsed locally from the PDF with pypdf; the WebFetch small-model
summary mangled the metadata, so all quotes below are from the raw extracted text).

## Document identity (CONFIRMED, from the PDF itself)
- Title (cover, p.1): "Sound Practices for Responsible Adoption of Artificial Intelligence (AI) — Consultation report"
- PDF metadata title: "Sound Practices for Financial Institutions' Responsible AI Adoption: Consultation Report"
- Publisher: Financial Stability Board (FSB). p.2: "The Financial Stability Board (FSB) coordinates at the international level the work of national financial authorities and international standard-setting bodies..."
- Date: **10 June 2026**
- Status: **CONSULTATION report** (a draft out for comment), NOT a final standard. p.3: "Responses to this consultation report should be submitted via this secure online form by 22 July 2026." Also note p.2: FSB activities "shall not be binding or give rise to any legal rights or obligations."
- 66 pages.

## The buried insurer case study (CONFIRMED — verbatim, ~p.15)
Header in the report: "Case study: Operational efficiency with AI adoption"

Verbatim:
> "A large internationally active insurer conducted a global review of manual workflows to identify where AI could have the most immediate and governable impact. This resulted in the elimination of approximately 400,000 manual processing instances in 2025."

> "One notable example that the insurer embarked on was the underwriting quick quote process. In this workflow, front line staff submit email enquiries to the underwriting team containing client information, which the team then analyses to prepare Preliminary Assessment documents. These assessments play a critical role in the sales process, helping producers narrow their insurer selection before proceeding to formal applications. With approximately 4,000 such requests received each month, the process involved significant time and manual work."

> "With the deployment of AI, upon receipt of a producer's email, the system now automatically analyses the client information and generates a draft Preliminary Assessment for underwriting team's review. This reduces turnaround time from one business day for simpler cases and two to three days for complex ones, to approximately 45 seconds."

> "The insurer is also adopting AI for software development to improve developer efficiency. This has increased productivity through leveraging AI code generation tool across the company to write six million lines of code in 2025, with around 80% adoption rate among developers."

Figure check:
- ~4,000 producer/email requests per month — CONFIRMED (worded "approximately 4,000 such requests received each month").
- Turnaround "1 business day (simple) / 2-3 days (complex)" -> "approximately 45 seconds" — CONFIRMED.
- ~400,000 manual processing instances eliminated in 2025 — CONFIRMED (firm-wide figure, not just quick-quote).
- Company is UNNAMED — CONFIRMED ("A large internationally active insurer").
- IMPORTANT nuance: this is NOT a fully-autonomous decision. AI "generates a **draft** Preliminary Assessment for **underwriting team's review**." A human still reviews the output — i.e., human-in-the-loop by design. The 45 seconds is time-to-draft, not time-to-bound-quote.

## The governance spine — the 12 "sound practices" (CONFIRMED, verbatim summary, ~pp.1-2)
Sound practices 1-4 (organisation-wide AI governance):
> "(i) the pivotal role the board and senior management play in setting the overall approach and providing oversight so that AI adoption is aligned with the financial institution's business model, risk appetite, and strategy; (ii) the importance of establishing clear governance frameworks, policies, procedures, and processes to identify, assess, monitor, and manage AI-related risks; (iii) the importance of defining clear responsibilities and accountabilities throughout the organisation; and (iv) how financial institutions benefit from continuous learning and adaptation..."

Sound practices 5-10 (managing use cases across the AI lifecycle):
> "(v) effectively and systematically assessing the materiality and risks of AI use cases at inception and thereafter; (vi) selecting appropriate AI models or systems...; (vii) maintaining appropriate data governance so that the data for training, testing, and using AI is accurate, complete, reliable, and secure; (viii) understanding differences in the explainability of various types of AI and, if appropriate and feasible, adopt more explainable AI...; (ix) evaluating the performance of AI use cases proportionately to their materiality and risk...; and (x) implementing appropriate and effective human oversight that is relevant to the materiality, risk, autonomy, complexity, and explainability of different AI use cases."

Sound practices 11-12:
> "(xi) AI-related cyber and information and communication technology (ICT) risks...; and (xii) risks from AI third-party use with a focus on performance, transparency, data quality, supply chain and concentration risks, and business continuity."

> "The board and senior management of financial institutions are strongly encouraged to reference the sound practices as they consider business strategy, technology adoption, and risk management..."

## The financial-stability RISK framing (CONFIRMED, verbatim, ~pp.14-16)
Building on the FSB's 2024 report, four AI vulnerabilities that can increase financial-stability risk:
> "(i) third-party dependencies and service provider concentration; (ii) market correlations; (iii) cyber risks; and (iv) model risk, data quality and governance."

On systemic/herding risk:
> "Homogeneous behaviours and correlated outcomes: Reliance on common AI models, datasets, or infrastructure can lead to correlated behaviours across financial institutions, amplifying risks like herding and procyclicality. This could exacerbate market stress, liquidity crunches, and asset price vulnerabilities during periods of financial instability."

On consumer/conduct risk:
> "Inadequate guardrails around AI could give rise to consumer harm and market conduct risks. This includes: Inadequate disclosure of AI use in financial services..."
