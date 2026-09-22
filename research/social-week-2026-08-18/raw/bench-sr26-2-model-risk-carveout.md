# RAW — SR 26-2: revised interagency model risk guidance carves out generative and agentic AI

Beat: practitioner's workbench (how to instrument an AI deployment so an outcome is measurable later)
Date accessed: 2026-08-18

---

## SOURCE 1 (PRIMARY)

- **Title:** SR 26-2 / "Revised Guidance on Model Risk Management"
- **Publisher:** Board of Governors of the Federal Reserve System, Division of Supervision and Regulation; issued jointly with the OCC and the FDIC
- **Date published:** April 17, 2026
- **URL:** https://www.federalreserve.gov/supervisionreg/srletters/SR2602.pdf
- **Accessed:** 2026-08-18 (PDF fetched, text extracted with pypdf, 14 pages)

### VERBATIM — cover letter

> BOARD OF GOVERNORS OF THE FEDERAL RESERVE SYSTEM WASHINGTON, D.C. 20551
> DIVISION OF SUPERVISION AND REGULATION
> SR 26-2
> April 17, 2026
> TO THE OFFICER IN CHARGE OF SUPERVISION AT EACH FEDERAL RESERVE BANK
> SUBJECT: Revised Guidance on Model Risk Management
>
> Applicability: This letter is expected to be most relevant to banking organizations with over $30 billion in total assets regulated by the Federal Reserve.
>
> The Board of Governors of the Federal Reserve System, Office of the Comptroller of the Currency (OCC), and Federal Deposit Insurance Corporation (FDIC) (the "agencies") are issuing the attached Revised Guidance on Model Risk Management, which supersedes and replaces SR letter 11-7, Guidance on Model Risk Management (issued April 4, 2011) and SR letter 21-8, Interagency Statement on Model Risk Management for Bank Systems Supporting Bank Secrecy Act/Anti-Money Laundering Compliance (issued April 9, 2021). This revised guidance reflects supervisory experience and industry feedback accumulated over the past fifteen years, as well as significant advancements in modeling practices.
>
> Based on supervisory experience and industry feedback since the issuance of SR 11-7, the agencies have updated the model risk management guidance to clarify model risk management principles and to emphasize a risk-based approach to model risk management that is tailored to a banking organization's model risk profile and the size and complexity of its operations.

Signed: Randall D. Guynn, Director, Division of Supervision and Regulation.

### VERBATIM — the carve-out (Attachment, Section III, footnote 3)

> For the purposes of this guidance, the term "model" refers to a complex quantitative method, system, or approach that applies statistical, economic, or financial theories to process input data into quantitative estimates. The term "model" in this guidance excludes simple arithmetic calculations, such as those found within spreadsheets, as well as deterministic rule-based processes and software where there are no statistical, economic, or financial theories underpinning their design or use.[3]

> [3] Generative AI and agentic AI models are novel and rapidly evolving. As such, they are not within the scope of this guidance. Nonetheless, a banking organization's risk management and governance practices should guide the determination of appropriate governance and controls for any tools, processes, or systems not covered in this document. However, the principles described in this guidance apply to traditional statistical and quantitative models and non-generative, non-agentic AI models.

**VERIFIED COUNT:** the string "artificial intelligence" appears 0 times in the extracted text; "machine learning" appears 0 times. The only AI reference in the document is footnote 3 above.

### VERBATIM — non-enforceability language (Attachment, Section I)

> This guidance does not set forth enforceable standards or prescriptive requirements; accordingly, non-compliance with this guidance will not result in supervisory criticism against a banking organization.[1]
>
> [1] See 12 CFR Part 4, Subpart F, Appendix A (OCC); 12 CFR Part 262, Appendix A (Board); 12 CFR Part 302, Appendix A (FDIC). However, supervisory action may result for any violations of law or unsafe or unsound practices stemming from insufficient management of model risk.

### VERBATIM — scope threshold (Attachment, Section II)

> This guidance is expected to be most relevant to banking organizations with over $30 billion in total assets.[2] Models used by banking organizations with total assets of $30 billion or less typically are subject to internal risk management and governance practices appropriate for the size and risk profile of these banking organizations, and generally excluding them from this guidance is consistent with a tailored supervisory approach.

### VERBATIM — Outcomes Analysis (Attachment, Section V, "Model Validation and Monitoring")

> **Outcomes Analysis**
> Outcomes analysis compares model outputs to corresponding real-world outcomes to assess model performance relative to model objectives and business use. Outcomes analysis and other elements of the validation process may identify material errors or persistent deviations outside of the banking organization's established performance thresholds. In such cases, model adjustment, recalibration, or redevelopment may be warranted.
>
> Outcomes analysis can take many forms, including testing conducted during model development, reports or analysis performed as part of ongoing monitoring, or standalone activities such as back-testing or outlier analysis. A banking organization's approach depends on the model's objectives, methodology, and data availability. As part of model validation, sound practice involves reviewing outcomes analysis to evaluate the reasonableness and appropriateness of the results, with additional analysis and testing, if warranted. When a model's design relies substantially on expert judgment, quantitative outcomes analysis helps to evaluate the quality of that judgment.

### VERBATIM — Ongoing Model Monitoring

> **Ongoing Model Monitoring**
> Ongoing model monitoring involves an evaluation of the extent to which a model is performing as expected given potential changes in products, exposures, activities, clients, data relevance, or market conditions. A model that no longer performs as expected may warrant overlays, adjustment, or redevelopment of the model depending on a banking organization's model risk management policy as it pertains to model deterioration.
>
> An effective ongoing monitoring plan may also include regularly assessing any model limitations at the development stage and over time, along with procedures for responding to any issues that may occur, before and after a model is approved for use. The frequency and scope of monitoring reports will depend on the nature of the model, the availability of new data or modeling approaches, and model materiality.

### VERBATIM — Roles and Responsibilities (Section VI, Governance and Controls)

> Model risk management benefits from clear roles and responsibilities with well-defined accountability, including with respect to potential conflicts of interest (e.g., misalignment of incentives between different reporting lines, such as model development and validation groups). Sound governance practices delineate the individual(s) responsible for key activities throughout the model lifecycle, from development through validation and ongoing monitoring.

### VERBATIM — Model Inventory (Section VI)

> **Model Inventory**
> It is common industry practice for banking organizations to maintain a comprehensive set of information for models under development or in use to support effective model risk management. While the inventory may contain varying levels of information to reflect different levels of model complexity and a banking organization's overall level of model usage, an effective model inventory includes sufficient information to understand model risks, so as to support effective model risk management at the individual and aggregate levels.

### VERBATIM — Vendor and third-party products (Section VII)

> An important element of model risk management is the validation of vendor products, either by internal or outside parties. Sound practice includes developing an understanding of the vendor model, including its conceptual soundness, design, development data, and performance. Similarly, sound practice involves conducting ongoing monitoring and outcome analysis to assess whether vendor models are accurate, remain fit for purpose, and continue to be reliable.

### VERBATIM — materiality-based tailoring (Section III)

> Model purpose, together with model exposure, determines model materiality. Assessing risk based on model materiality is an important consideration for sound model risk management. Banking organizations may deem certain models immaterial based on model exposure and purpose. In those cases, model risk management may consist of identifying those models and monitoring model performance and conditions under which the use of those models may become material to the banking organization in the future. In contrast, models deemed of higher materiality by the banking organization—either through model exposure or purpose—warrant more comprehensive and rigorous oversight.

---

## SOURCE 2 (PRIMARY — the superseded document, for contrast)

- **Title:** SR 11-7, "Guidance on Model Risk Management" (Attachment: Supervisory Guidance on Model Risk Management)
- **Publisher:** Board of Governors of the Federal Reserve System / OCC
- **Date published:** April 4, 2011
- **URL:** https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107.pdf
- **Accessed:** 2026-08-18 (PDF fetched, text extracted with pypdf, 5 pages — the SR letter version)

### VERBATIM — the three core elements of validation

> • **Ongoing Monitoring.** This step in validation is done to confirm that the model is appropriately implemented and is being used and performing as intended. It is essential to evaluate whether changes in products, exposures, activities, clients, or market conditions necessitate adjustment, redevelopment, or replacement of the model and to verify that any extension of the model beyond its original scope is valid. Benchmarking can be used in this step to compare a given model's inputs and outputs to estimates from alternatives.
>
> • **Outcomes Analysis.** This step involves comparing model outputs to corresponding actual outcomes. Back-testing is one form of outcomes analysis that involves the comparison of actual outcomes with model forecasts during a sample time period not used in model development at a frequency that matches the model's forecast horizon or performance window.
>
> The results of the three core elements of the validation process may reveal significant errors or inaccuracies in model development or outcomes that consistently fall outside the banking organization's predetermined thresholds of acceptability. In such cases, model adjustment, recalibration, or redevelopment is warranted.

### VERBATIM — the inventory requirement

> Also, organizations should maintain an inventory of models implemented for use, under development for implementation, or recently retired.

### VERBATIM — limited-data caveat (directly relevant to "the number does not exist yet")

> At times, banking organizations may have a limited ability to use key model validation tools for various reasons, such as lack of data or of price observability. In those cases, even more attention should be paid to the model's limitations when considering the appropriateness of model usage, and senior management should be fully informed of those limitations when using the models for decision-making.

### NOTE ON LANGUAGE SHIFT (observed by comparing the two extracted texts)

SR 11-7 (2011) uses imperative/expectation language: validation "should include" the three core elements; organizations "should maintain an inventory"; redevelopment "is warranted."
SR 26-2 (2026) replaces this with permissive language throughout: "sound practice involves," "may be warranted," "an effective ongoing monitoring plan may also include," "it is common industry practice." SR 26-2 also states outright that it "does not set forth enforceable standards or prescriptive requirements."

---

## SOURCE 3 (CONTEXT — already used in the essay, restated for the link)

- Customers Bancorp Q2 2026 earnings release / 8-K furnished 23 July 2026, and the Q2 2026 earnings call.
- CEO Sam Sidhu described "a pilot of our new AI-powered loan closing process, which included successfully closing selected commercial loans in seven days, down from 30 to 60 days typically," and on the call called it **"a multi-agentic credit underwriting process."**
- URLs: https://www.customersbank.com/investor-relations/press-releases/press-release/Customers-Bancorp-Reports-Results-for-Second-Quarter-2026-1786/ and https://www.sec.gov/Archives/edgar/data/1488813/000148881326000082/
- Relevance: the exact adjective the bank used to describe its credit process — "multi-agentic" — is the exact category the April 2026 interagency guidance places outside its scope. Customers Bancorp is also comfortably above the $30bn threshold at which the guidance is "most relevant."

---

## VENDOR / SECONDARY MATERIAL CONSULTED (LABELLED — commercial incentive)

- **FICO blog, "The Benefits of Champion/Challenger Testing in Decision Management"** — https://www.fico.com/blogs/benefits-championchallenger-testing-decision-management — FICO sells decision-management software, so treat as marketing. Useful only for the standard practice description: a random ~10% of the portfolio is assigned to the challenger strategy — small enough that a bad challenger does not damage the book, large enough for statistical significance in reasonable time. Accessed 2026-08-18 via search summary only (not opened directly).
- **Sparkling Logic, "What Are Champion/Challenger Experiments in Decision Management"** — https://www.sparklinglogic.com/what-are-champion-challenger-experiments-in-decision-management/ — vendor. Same caveat.
- **HL Hunt, "Champion and Challenger: Deploying a New Credit Model Without Betting the Book"** — https://www.hlhunt.org/uncategorized/champion-and-challenger-deploying-a-new-credit-model-without-betting-the-book/ — provenance unverified; surfaced the swap-set framing ("Analyze the swap set, not the approval rate — identical approval rates can mean an entirely different book"). NOT opened directly; do not cite without verification.
