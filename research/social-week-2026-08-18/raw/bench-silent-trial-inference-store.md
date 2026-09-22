# RAW — Silent trials and the "inference store": how a hospital actually builds the tool-touched cohort

Beat: practitioner's workbench (how to instrument an AI deployment so an outcome is measurable later)
Date accessed: 2026-08-18

---

## SOURCE 1 (PRIMARY — peer-reviewed, named institution, working system)

- **Title:** "DEPLOYR: A technical framework for deploying custom real-time machine learning models into the electronic medical record"
- **Authors/institution:** Stanford University School of Medicine, Stanford Health Care, Stanford Children's Health (framework developed by a collaboration of Stanford Medicine researchers and Stanford Health Care IT staff)
- **Date published:** arXiv preprint, 11 March 2023 (arXiv:2303.06269); subsequently published in JAMIA
- **URL:** https://arxiv.org/abs/2303.06269 (PDF: https://arxiv.org/pdf/2303.06269)
- **Accessed:** 2026-08-18 (PDF fetched, text extracted with pypdf, 22 pages)

### VERBATIM — abstract

> [DEPLOYR is] a technical framework for enabling real-time deployment and monitoring of researcher created clinical ML models into a widely used electronic medical record (EMR) system. [...] monitoring modules that track performance of deployed models over time, silent deployment capabilities, and mechanisms to prospectively evaluate a deployed model's impact. We demonstrate the use of DEPLOYR by silently deploying and prospectively evaluating twelve ML models triggered by clinician button-clicks in Stanford Health Care's production instance of Epic. Our study highlights the need and feasibility for such silent deployment, because prospectively measured performance varies from retrospective estimates.

### VERBATIM — THE KEY MECHANISM: inference packets and the inference store

> **Extracting labels in production** To track ML performance in production, software must be implemented to collect labels. DEPLOYR uses LabelExtactors to perform this task. LabelExtractors are implemented in DEPLOYR-serve and are specific to a particular deployed model. They execute at user-defined frequencies using cron logic. At inference time, in addition to directing model outputs to Epic, we package inferences with relevant metadata (identifiers, timestamps, features) in inference packets (JSON objects) and save them to the inference store, an Azure Cosmos database maintained by Stanford Health Care. LabelExtactors consume inference packets from the inference store and pair to them their corresponding labels (once observable) using Epic and FHIR APIs. A model tasked with predicting unplanned (30-day readmission) might produce inference packets that include the patient's FHIR identifier and discharge time (inference time) along with the inference itself. The corresponding LabelExtractor would then use the FHIR identifier and discharge time to make HTTPS requests directed at relevant APIs, determining whether the patient was readmitted to the hospital within 30 days of the produced inference.

**This is, literally, the essay's ask implemented in code:** at the moment the model touches the case, write down which case it touched (FHIR identifier), when (timestamp), and what it said (the inference). Then a scheduled job — with the outcome window baked in — goes back at the date the number becomes readable and pairs each record to its real outcome.

### VERBATIM — tracking model performance

> After a LabelExtractor has paired a set of inference packets to their corresponding labels, standard model performance metrics can be estimated with the prospectively collected data. When monitoring binary classifiers, standard performance metrics may include threshold dependent measures like accuracy, sensitivity (recall), specificity, positive predictive value (precision) along with threshold independent metrics like area under the receiver operator characteristics curve (AUROC) and average precision. [...] In addition to full population estimates, these metrics can be continuously tracked over patient subgroups, particularly those belonging to protected demographic classes. Beyond classic ML metrics, measures of model usefulness such as net benefit and expected utility can be tracked to ensure model use is yielding more good than harm.

### VERBATIM — silent deployment (running the tool without letting it change anything yet)

> **Enabling silent deployment** Suitable deployment infrastructure requires the ability to silently deploy models prospectively to ensure reliability in production before "loud" deployment when inferences are displayed to end-users. Silent trials allow a data science team responsible for model deployment to ensure data pipes have been appropriately linked, especially useful when training and deployment data sources differ. Additionally, silent deployment can uncover faulty cohort design, for instance when a retrospective cohort was generated using exclusion criteria observable only after inference time, common when generating ML cohorts using case-control study design. DEPLOYR event and time based triggers can be configured to execute in the background, enabling silent trials.

### VERBATIM — randomisation built into the plumbing

> **Enabling prospective evaluation of impact** The ultimate evaluation of healthcare machine learning impact is not in a prospective ROC curve or simulation of clinical utility, but estimation of the causal effect of the model's implementation on clinical and operational outcomes. In some use-cases, a model's inference and corresponding recommendation will only be displayed to the end-user if a predicted risk exceeds some threshold value. In these situations, regression discontinuity designs may be suitable to estimate the local treatment effect of the model's implementation for patients with predicted risk near the threshold. In other use-cases when a model's inference is displayed irrespective of the value it takes, or when an average treatment effect on the deployment population at large is desired, randomized study designs may be required. **DEPLOYR supports functionality to inject randomization into the inference-directing mechanism to enable prospective determination of a model's impact.**

> The ability to randomize is similarly critical for deliberate randomized controlled trial evaluations of ML model impact on clinical outcomes.

### VERBATIM — the finding: production performance was WORSE than the pilot numbers

> As demonstrated by our silent trial, ML performance estimated on clinical data warehouse derived retrospective test sets can vary from prospectively observed performance in production. Across our twelve laboratory predictions tasks, AUROC in our prospective test sets were generally several percentage points lower than what is seen retrospectively. Poorer performance could be attributable to data drift, data-elements appearing to be accessible at inference time in the clinical data-warehouse not actually being accessible in production, and imperfect mappings between training and inference data sources. Due to these deviations, we recommend using performance measures estimated from prospectively collected test sets during silent trials to make final go decisions when deploying clinical ML models.

### VERBATIM — the numbers (Table 2, retrospective vs prospective AUROC, all 12 models)

> Table 2: Model performance estimates on retrospective and prospectively collected test sets for all twelve models. AUROC=area under the receiver operating characteristics curve.
>
> | Diagnostic | Component | AUROC Retrospective | AUROC Prospective |
> |---|---|---|---|
> | CBC with differential | Hematocrit | 0.86 [0.85, 0.88] | 0.83 [0.83, 0.84] |
> | | Hemoglobin | 0.88 [0.86, 0.89] | 0.83 [0.83, 0.84] |
> | | Platelets | 0.79 [0.77, 0.82] | 0.77 [0.76, 0.78] |
> | | White blood cell | 0.76 [0.74, 0.79] | 0.69 [0.68, 0.70] |
> | Metabolic panel | Albumin | 0.88 [0.86, 0.91] | 0.85 [0.84, 0.86] |
> | | Blood urea nitrogen | 0.85 [0.83, 0.87] | 0.80 [0.79, 0.81] |
> | | Calcium | 0.80 [0.76, 0.83] | 0.79 [0.78, 0.81] |
> | | Carbon dioxide | 0.69 [0.66, 0.72] | 0.62 [0.61, 0.63] |
> | | Creatinine | 0.78 [0.75, 0.80] | 0.75 [0.74, 0.76] |
> | | Potassium | 0.67 [0.61, 0.72] | 0.60 [0.59, 0.62] |
> | | Sodium | 0.79 [0.75, 0.82] | 0.71 [0.70, 0.72] |
> | Magnesium | Magnesium | 0.70 [0.67, 0.73] | 0.65 [0.63, 0.67] |

**Every one of the twelve dropped or held flat. None improved.** Largest falls: sodium 0.79 -> 0.71, potassium 0.67 -> 0.60, white blood cell 0.76 -> 0.69, carbon dioxide 0.69 -> 0.62.

### VERBATIM — the prospective cohort itself, and dates

> Table 1: Demographic breakdown of retrospective and prospective cohorts. Retrospective cohorts were sourced from Stanford's clinical data warehouse (STARR). Prospective cohorts were collected in real-time through Epic Chronicles as diagnostic orders triggered model inferences between January 11 and February 15, 2023. CBC=Complete blood count with differential.

Prospective cohort sizes (unique patients): CBC 18,982; Magnesium 5,234; Metabolic 16,441.
Retrospective cohort sizes (unique patients): CBC 13,362; Magnesium 11,771; Metabolic 13,410.
So: roughly five weeks of silent running produced a real-world cohort larger than the historical training/test cohort for two of the three tasks.

### VERBATIM — how it hooks into the EMR (the concrete integration surfaces)

> Some applications will better integrate with workflow through interruptive alerts in the clinical work-stream. Such active integration is possible through use of typical EMR alerts. Specifically, we use Epic BPA (Best Practice Advisory) web services. Epic supports two styles of web services: classic CDA (clinical document architecture) and CDS web-hooks. DEPLOYR currently uses classic CDA web services, which direct HTTPS requests at DEPLOYR-serve functions and await XML (Extensible Markup Language) responses.

> Inferences can be directed back into the EMR passively, without interrupting clinical workflow. They can be written as smart data values or as external model score columns displayed in inpatient lists and outpatient schedules. [...] Model inferences can be written to flowsheet rows and visualized over time in conjunction with other vital sign data (e.g. heart rate, blood pressure, temperature). Inferences and suggested interventions can be directed as in-basket messages to specific providers.

> DEPLOYR [supports] time based triggering through the use of Azure Function timer triggers, which we configure using cron logic.

### VERBATIM — honest limitations (why this is harder than it sounds)

> Limitations to this study include that, while the DEPLOYR framework allows rapid deployment of models, it assumes model training will occur using data sourced from Stanford's common data model. Additionally, DEPLOYR is currently configured to integrate specifically with EMR software provided by Epic Systems and would require additional API mappings and wrappers to transfer to other institutions using different EMR systems and clinical data warehouse structures. Nevertheless, FHIR APIs were used when possible, which due to the 21st Century Cures Act have mandated support across U.S health institutions. Further, the design decisions and considerations we have outlined in this study remain relevant to any institution attempting to install a deployment framework of their own.

> DEPLOYR was developed through a collaboration of researchers within the Stanford School of Medicine and IT persona at Stanford Health Care and Stanford Children's Health.

(Note: the paper is explicit that this required a data-science team AND the hospital IT organisation. It is not a weekend job.)

### VERBATIM — feedback loops (why the cohort gets contaminated once the tool goes "loud")

> [...] mechanism, which can be used in tandem with traditional weighting estimators to recover true performance estimates in the presence of feedback. The ability to randomize is similarly critical for deliberate randomized controlled trial evaluations of ML model impact on clinical outcomes.

> Silent trials are necessary before ML applications are integrated into clinical work-streams. Deployment frameworks require mechanisms to trigger inference using production data without interacting with clinical work streams.

---

## SOURCE 2 (SECONDARY — evidence that silent trials are an established, named practice with no agreed standard)

- **Title:** "A scoping review of silent trials for medical artificial intelligence"
- **Publication:** Nature Health (Springer Nature)
- **Date published:** 2025
- **URL:** https://www.nature.com/articles/s44360-025-00048-z
- **Accessed:** 2026-08-18 — **NOT FULLY OPENED.** The article redirected to Nature's IdP login (HTTP 303 to https://idp.nature.com/authorize?...). Only the search-result abstract text was captured. Flagged as unverified; do not quote beyond the definition below without re-fetching.

### Captured (from search result summary, definition-level only)

> A 'silent trial' refers to the prospective, noninterventional testing of artificial intelligence (AI) models in the intended clinical setting without affecting patient care or institutional operations.

Also captured from the same search pass, across several results (each requires its own verification before citation):

> Silent deployment, or shadow mode, is a passive assessment method where an AI algorithm runs in a real clinical environment but remains hidden from end users.

> A testing infrastructure is needed whereby prototype AI tools can be integrated into current EMRs, using application programming interfaces, and their performance compared with standard care in 'silent trials' or 'shadow mode' conducted within live-data clinical environments.

> [T]here are no formal guidelines for performing silent AI evaluations in healthcare settings.

Related unopened links surfaced in the same search (for follow-up):
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11141172/ — "Achieving large-scale clinician adoption of AI-enabled decision support"
- https://www.sciencedirect.com/science/article/pii/S2949761225001014 — "A Comprehensive Approach to Responsible AI Development and Deployment"
- https://cdn.clinicaltrials.gov/large-docs/77/NCT05287477/Prot_000.pdf — "Passive Evaluation in Operational Environment of the AI Clinician Decision Support System for Sepsis Treatment"

---

## CROSS-REFERENCE TO THE WEEK'S ESSAY

The essay's closing ask: "write down the outcome number [...] tag the cases the tool touches at the moment it touches them [...] Name the person who reads the number, and the date it becomes readable."

DEPLOYR's four components map one-to-one:
1. the outcome number -> the LabelExtractor's definition (e.g. readmission within 30 days of inference time)
2. tag at the moment of touch -> the inference packet written to the inference store at inference time, carrying the FHIR identifier, the timestamp, the features, and the model output
3. the date it becomes readable -> the LabelExtractor's cron schedule
4. the owner -> the monitoring dashboard (DEPLOYR-dash), and the joint data-science / hospital-IT ownership the paper describes

And the payoff for having done it: they found production performance several points below pilot performance on all twelve models — a fact that is simply unavailable to anyone who did not log the cohort.
