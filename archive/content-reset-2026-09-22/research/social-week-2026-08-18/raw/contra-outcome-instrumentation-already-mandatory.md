# CONTRA DUMP — "The instrumentation Nick prescribes is already mandatory in the essay's own example"

Desk: contrarian. Target thesis: essay `seven-days-to-close.md` — companies report the countable input because the outcome metric takes a business cycle and "almost nobody instruments for it in advance."
Counter-claim under test: in US banking specifically — the essay's lead example — pre-committed outcome measurement on models is not rare discipline, it is 15-year-old supervisory guidance, and there is at least one lender that pre-committed the metric, the reader AND the date and published the results.
All items accessed 2026-08-18.

---

## SOURCE 1 — Federal Reserve SR 11-7, "Guidance on Model Risk Management" (attachment: Supervisory Guidance on Model Risk Management)
URL: https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf
Publication: Board of Governors of the Federal Reserve System / OCC (joint). Date published: 4 April 2011. Accessed 2026-08-18.
Note: PRIMARY REGULATORY SOURCE. No vendor incentive.
Extraction: pypdf, 21 pages.

### Verbatim — the three core elements of validation (p.11)

> "• Outcomes analysis, including back-testing"
> "1. Evaluation of Conceptual Soundness"

(Listed as the third of three core validation elements, alongside conceptual soundness and ongoing monitoring.)

### Verbatim — Section III.3 "Outcomes Analysis" (pp.13-14)

> "The third core element of the validation process is outcomes analysis, a comparison of
> model outputs to corresponding actual outcomes. The precise nature of the comparison
> depends on the objectives of a model, and might include an assessment of the accuracy of
> estimates or forecasts, an evaluation of rank-ordering ability, or other appropriate tests. In
> all cases, such comparisons help to evaluate model performance, by establishing expected
> ranges for those actual outcomes in relation to the intended objectives and assessing the
> reasons for observed variation between the two. If outcomes analysis produces evidence
> of poor performance, the bank should take action to address those issues. Outcomes
> analysis typically relies on statistical tests or other quantitative measures. It can also
> include expert judgment to check the intuition behind the outcomes and confirm that the
> results make sense. When a model itself relies on expert judgment, quantitative outcomes
> analysis helps to evaluate the quality of that judgment. Outcomes analysis should be
> conducted on an ongoing basis to test whether the model continues to perform in line
> with design objectives and business uses."

### Verbatim — back-testing definition (p.14)

> "Back-testing is one form of outcomes analysis; specifically, it involves the comparison of
> actual outcomes with model forecasts during a sample time period not used in model
> development and at an observation frequency that matches the forecast horizon or
> performance window of the model. The comparison is generally done using expected
> ranges or statistical confidence intervals around the model forecasts. When outcomes fall
> outside those intervals, the bank should analyze the discrepancies and investigate the
> causes that are significant in terms of magnitude or frequency."

### *** THE KEY PASSAGE *** — Verbatim, p.15. This is a direct 2011 answer to the essay's exact problem (the outcome takes years).

> "Models with long forecast horizons should be back-tested, but given the amount of time it
> would take to accumulate the necessary data, that testing should be supplemented by
> evaluation over shorter periods. Banks should employ outcomes analysis consisting of
> 'early warning' metrics designed to measure performance beginning very shortly after
> model introduction and trend analysis of performance over time. These outcomes analysis
> tools are not substitutes for back-testing, which should still be performed over the longer
> time period, but rather very important complements."

### Verbatim — parallel outcomes analysis (p.14), i.e. champion/challenger

> "Models are regularly adjusted to take into account new data or techniques, or because of
> deterioration in performance. Parallel outcomes analysis, under which both the original
> and adjusted models' forecasts are tested against realized outcomes, provides an
> important test of such model adjustments. If the adjusted model does not outperform the
> original model, developers, users, and reviewers should realize that additional changes—
> or even a wholesale redesign—are likely necessary before the adjusted model replaces
> the original one."

### Verbatim — predetermined thresholds (p.14)

> "Outcomes analysis and the other elements of the validation process may reveal significant
> errors or inaccuracies in model development or outcomes that consistently fall outside the
> bank's predetermined thresholds of acceptability."

### Verbatim — vendor / bought-in models (pp.16-17)

> "should conduct ongoing monitoring and outcomes analysis of vendor model performance
> using the bank's own outcomes."

---

## SOURCE 2 — Federal Reserve SR 26-2, "Revised Guidance on Model Risk Management"
URL: https://www.federalreserve.gov/supervisionreg/srletters/SR2602.pdf
Publication: Board of Governors of the Federal Reserve System, with OCC and FDIC. Date published: **17 April 2026** (four months before the essay). Accessed 2026-08-18.
Note: PRIMARY REGULATORY SOURCE. This supersedes SR 11-7. THIS IS THE "WHY NOW".

### Verbatim — header and supersession

> "SR 26-2
> April 17, 2026
> TO THE OFFICER IN CHARGE OF SUPERVISION AT EACH FEDERAL RESERVE BANK
> SUBJECT: Revised Guidance on Model Risk Management
> Applicability: This letter is expected to be most relevant to banking organizations with over $30
> billion in total assets regulated by the Federal Reserve."

> "The Board of Governors of the Federal Reserve System, Office of the Comptroller of the
> Currency (OCC), and Federal Deposit Insurance Corporation (FDIC) (the 'agencies') are issuing
> the attached Revised Guidance on Model Risk Management, which supersedes and replaces SR
> letter 11-7, Guidance on Model Risk Management (issued April 4, 2011) and SR letter 21-8,
> Interagency Statement on Model Risk Management for Bank Systems Supporting Bank Secrecy
> Act/Anti-Money Laundering Compliance (issued April 9, 2021). This revised guidance reflects
> supervisory experience and industry feedback accumulated over the past fifteen years, as well as
> significant advancements in modeling practices."

### *** THE BOMBSHELL *** — Verbatim, footnote 3, page 3.

> "3 Generative AI and agentic AI models are novel and rapidly evolving. As such, they are not within the scope of this
> guidance. Nonetheless, a banking organization's risk management and governance practices should guide the
> determination of appropriate governance and controls for any tools, processes, or systems not covered in this
> document. However, the principles described in this guidance apply to traditional statistical and quantitative models
> and non-generative, non-agentic AI models."

[DESK NOTE: Sidhu described the Customers Bancorp system as "a multi-agentic credit underwriting process." Four months earlier the three federal banking agencies wrote agentic AI OUT of the framework that would have compelled outcomes analysis. This CUTS BOTH WAYS — it undermines "the framework already covers it" for agentic systems specifically, while proving regulators thought hard about outcome measurement well in advance. Honest handling required.]

### Verbatim — Outcomes Analysis section, p.~8

> "Outcomes Analysis
> Outcomes analysis compares model outputs to corresponding real-world outcomes to
> assess model performance relative to model objectives and business use. Outcomes analysis and
> other elements of the validation process may identify material errors or persistent deviations
> outside of the banking organization's established performance thresholds. In such cases, model
> adjustment, recalibration, or redevelopment may be warranted.
> Outcomes analysis can take many forms, including testing conducted during model
> development, reports or analysis performed as part of ongoing monitoring, or standalone
> activities such as back-testing or outlier analysis. A banking organization's approach depends on
> the model's objectives, methodology, and data availability."

### Verbatim — Ongoing Model Monitoring

> "Ongoing model monitoring involves an evaluation of the extent to which a model is
> performing as expected given potential changes in products, exposures, activities, clients, data
> relevance, or market conditions. A model that no longer performs as expected may warrant
> overlays, adjustment, or redevelopment of the model depending on a banking organization's
> model risk management policy as it pertains to model deterioration."

---

## SOURCE 3 — CFPB, "An update on credit access and the Bureau's first No-Action Letter"
URL: https://www.consumerfinance.gov/about-us/blog/update-credit-access-and-no-action-letter/
Publication: Consumer Financial Protection Bureau (US federal regulator). Date published: 6 August 2019. Accessed 2026-08-18.
Note: PRIMARY REGULATORY SOURCE. Upstart is the subject, so the underlying data is self-reported by a lender with an incentive to look good — but the comparison method was pre-agreed with the regulator and the regulator published it.

### Verbatim / near-verbatim extracted

> "The NAL Recipient provides the Bureau with information comparing outcomes from its
> underwriting and pricing model (tested model) against outcomes from a hypothetical model
> that uses traditional application and credit file variables and does not employ machine
> learning (traditional model)."

Reported results:
> the tested model "approves 27% more applicants than the traditional model, and yields 16% lower average APRs for approved loans"
> "the tested model increasing acceptance rates by 23-29% and decreasing average APRs by 15-17%"

Segment results:
- Near-prime borrowers (FICO 620-660): approved approximately **twice** as frequently
- Applicants under 25: **32%** more likely to be approved
- Consumers earning under $50,000: **13%** more likely to be approved

Fair lending:
> "The approval rate and APR analysis results provided for minority, female, and 62 and older applicants show no disparities that require further fair lending analysis under the compliance plan."

[DESK NOTE: This is a lender that, BEFORE switching the model on, agreed the metric (approval rate + APR vs a counterfactual traditional model), the owner/reader (the CFPB), and the reporting cadence. Exactly the "three lines on one page" the essay says almost nobody writes. It happened in 2017-2020, in lending, and was published.]

---

## SOURCE 4 — CFPB no-action letter conditions (Model Risk Assessment Plan)
URL: https://www.consumerfinance.gov/about-us/newsroom/cfpb-announces-first-no-action-letter-upstart-network/
Publication: Consumer Financial Protection Bureau. Date published: 14 September 2017 (original NAL); updated NAL December 2020. Accessed 2026-08-18.

Conditions summarised in coverage (Lexology / Consumer Finance Monitor, accessed 2026-08-18):
> As a condition of the no-action letter, "Upstart will regularly report lending and compliance
> information to the CFPB to mitigate risk to consumers and aid the Bureau's understanding of
> the real-world impact of alternative data on lending decision-making."

The 2020 NAL required a **Model Risk Assessment Plan ("MRAP")** including:
> "testing the model on a periodic basis for adverse impact and predictive accuracy by group;
> researching less discriminatory alternative models that 'meet legitimate business needs';
> and determining how Upstart's model compares to other credit models through access-to-credit testing."

---

## SOURCE 5 — WEAKNESS / COUNTER-COUNTER: the Upstart instrumentation was contested and then ended
URLs:
- https://protectborrowers.org/naacp-legal-defense-and-education-fund-and-student-borrower-protection-center-send-letter-to-financial-technology-firm-over-equal-credit-opportunity-act-and-fair-housing-act-violations/ (Student Borrower Protection Center, advocacy org — declared incentive: consumer-advocacy campaign against fintech underwriting)
- https://www.naacpldf.org/press-release/ldf-and-student-borrower-protection-center-send-letter-to-financial-technology-firm-over-equal-credit-opportunity-act-and-fair-housing-act-violations/ (NAACP Legal Defense Fund)
- https://www.bankingdive.com/news/wells-fargo-upstart-student-loan-case-study/571849/ (Banking Dive, trade press)
- https://www.americanbanker.com/news/upstart-says-its-improving-ai-models-after-report-finds-race-approval-disparities (American Banker, trade press)
- https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-order-to-terminate-upstart-no-action-letter/ (CFPB, June 2022)
- https://www.relmanlaw.com/media/cases/1088_Upstart_Initial_Report_-_Final.pdf (Relman Colfax, independent fair lending monitorship of Upstart — published method, published report)
All accessed 2026-08-18.

Key points:
- SBPC testing found "graduates from Howard University, where the student population is approximately 90% Black, would end up paying thousands of dollars more for credit than graduates from NYU, where the student population is just 6% Black—even controlling for income, savings, and all other relevant criteria."
- The NAACP LDF and SBPC "sent a demand letter to Upstart explaining how the firm's algorithm likely violates the Equal Credit Opportunity Act and the Fair Housing Act."
- SBPC argued "substantial unanswered questions and suspect business practices raised serious doubts over the appropriateness of the Bureau's extension of the NAL."
- June 2022: "Upstart requested termination of the 'no-action letter,' and as requested by Upstart, the CFPB's order terminated the 2020 'no-action letter,' effective immediately." Upstart's stated reason: to "keep our risk models accurate and up-to-date during a period of significant economic change."
- An independent monitorship (Relman Colfax) subsequently published reports on Upstart's model — a further example of pre-committed, externally-read outcome instrumentation.

[DESK NOTE: honest weakness for MY OWN counter-pitch. The best-documented case of pre-committed AI outcome measurement in lending was (a) partly self-reported, (b) attacked as measuring the wrong outcome, and (c) voluntarily wound up by the lender when conditions turned. That is arguably evidence FOR the essay's deeper point — the instrument existed and still didn't settle the question — and evidence that lagging outcome metrics are contestable and gameable.]
