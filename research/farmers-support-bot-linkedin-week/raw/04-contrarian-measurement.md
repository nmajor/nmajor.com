# Contrarian / measurement desk: when internal AI-assistant evidence gets harder than the headline

Captured: 2026-09-22

Assignment: investigate current or recent evidence showing measurement flaws, low accuracy, failed adoption, or inflated savings claims in internal AI search and support assistants. This file contains the full working findings and 2 newsroom pitches. It is not a drafted LinkedIn post.

## Starting context read for this desk

### Approved Farmers essay

The approved issue, `app/src/content/essays/farmers-built-a-support-bot.md`, separates two claims that Farmers' publicity tends to place together:

- askfarmers.ai is a conversational search layer over more than 300,000 internal documents, notifications, and articles that had been spread across five systems;
- 16.4 million hours a year is the claimed result of a broader two-year servicing-efficiency program involving process simplification, multiple functions, office visits, forums, listening sessions, and AI tools.

Farmers has not published query volume, adoption, answer accuracy, escalation rates, a wage assumption, realized financial impact, or a calculation allocating any share of the 16.4 million hours specifically to askfarmers.ai. Farmers says the assistant resolves more than 60% of questions that previously became service-center calls, but has not published the denominator or method behind that rate.

### Existing comparable-deployment report

`research/farmers-insurance-ai/comparables-report.md` finds that five positive company stories show impact is possible, not how often it happens. Every company case is published by the technology vendor or a company using its own product. None provides raw measurements, a control group, or an independent audit.

The strongest existing warning signs are:

- IBM reports current answer accuracy of 28% for Ask SW Support while projecting roughly 17,000 annual hours saved from correct answers.
- Orion Health's headline says its bot saves 50 staff hours per day, while the body says the figure is expected.
- FletcherTech reports 2,500 hours saved but bundles knowledge search with content generation, analysis, QA agents, and other work.
- Elastic reports five hours saved per employee per month and two-month payback without disclosing query volume, active use, wage assumptions, or the savings calculation. Elastic also avoided the licensing economics faced by an ordinary customer.

### Fresh last30days capture

`research/farmers-insurance-ai/raw/last30days/enterprise-ai-search-assistants-business-impact-raw-v3.md` covers 2026-08-23 through 2026-09-22 and contains 112 items across nine sources. It does not supply new primary deployment evidence that closes Farmers' measurement gap. Its top relevant themes are broad claims that enterprise knowledge is hard to find and that ROI should start with a specific workflow, but the surfaced items are mostly low-engagement promotional posts and general vendor discussion. I treated them as context, not evidence for either pitch.

### Completed follow-the-money desk

`research/farmers-support-bot-linkedin-week/raw/01-follow-the-money.md` already covers the most direct savings-measurement angles:

- Gemini Enterprise counts an answer as successful after a thumbs-up or 30 seconds without a follow-up, assumes three minutes saved, then multiplies by a customer-supplied wage;
- the published inputs in Microsoft's Worten customer story produce 4,375 baseline hours, not the 11,000-hour headline;
- Amazon's internal Q story implies 27 minutes saved per answered question;
- vendor ROI stories often turn activity into imputed value without measuring cash savings.

To avoid duplicating that desk, the pitches below focus on what happens when assistants meet contradictory or missing knowledge, and on the difference between self-reported time savings and observed task performance.

## Primary-source finding 1: a fresh enterprise RAG benchmark found that the strongest models usually failed the whole instruction

China Mobile's Jiutian Research submitted the EnterpriseRAG paper to arXiv on August 12, 2026. The benchmark begins with 491 authentic queries from production RAG logs and constructs 983 expert-validated cases across six domains: energy, medical, legal, financial, Party Building, and web search. It tests three deliberately difficult conditions that resemble internal-company knowledge problems:

- noisy retrieval, where topically similar but irrelevant documents enter the context;
- knowledge gaps, where the retrieved material does not contain enough evidence;
- factual conflicts, where retrieved sources contradict one another.

The benchmark also tests multi-part instructions such as extracting the requested facts, using a specified format, citing evidence, declaring missing information instead of guessing, and identifying conflicts.

Across 13 current open and closed models, the best model satisfied 83.8% of individual constraints but only 26.8% of responses satisfied every requirement. The paper calls this a 57-point orchestration gap.

Two results are especially relevant to internal support/search assistants:

- When the answer was not present, the best reported rejection accuracy was 42.7%. That means even the strongest tested model still over-answered more often than it correctly refused in the benchmark's knowledge-gap cases.
- When retrieved documents contradicted one another, the best model recognized the conflict in 44.3% of cases. GPT-4.1 recognized 18.5% in the reported setup.

This does not show that askfarmers.ai has those failure rates. It does not test Farmers, its retrieval stack, its prompts, or its corpus. It is a model-and-RAG benchmark, not a field evaluation of a deployed bot. The cases deliberately stress non-ideal conditions, and some gap/conflict examples are augmented synthetically, although the authors say they were built from real operational queries and human-verified.

What it does establish is a missing precondition in the Farmers story. A question can be deflected from a service center without being answered correctly. A rigorous deflection claim therefore needs at least accuracy, refusal, conflict-handling, and escalation measures alongside the percentage of calls avoided.

Primary source:

- Paper: https://arxiv.org/abs/2608.11584
- Full HTML: https://arxiv.org/html/2608.11584v1

Useful locations in the full paper:

- abstract and affiliation: lines 72-80;
- benchmark design and production-log origin: lines 81-133;
- model results table: lines 135-164;
- best rejection and conflict-recognition results: lines 213-242;
- limitations: lines 243-245.

## Primary-source finding 2: a government Copilot evaluation found that diary savings could reverse under observation

The UK Department for Business and Trade published its 49-page evaluation of a 1,000-license Microsoft 365 Copilot pilot on August 28, 2025. Copilot included a browser chatbot and Microsoft 365 integrations that could answer from internet sources and work content the user was allowed to access.

The study combined dashboard usage, a one-week diary, interviews, and a small set of observed tasks. Its diary contained 1,411 adjusted task records. Participants estimated how long a task took with Copilot and how long it would have taken without it. Researchers excluded unused outputs, novel tasks that would not otherwise have happened, and inaccurate outliers.

The diary suggested an average saving of 0.4 hours for data analysis and 0.7 hours for searching existing information or resources. The authors explicitly warned that this was self-reported and could reflect enthusiasm or criticism of the tool.

Researchers then observed a small test/control exercise and blind-scored outputs. For Excel data analysis:

- Copilot users averaged 25:01, versus 20:33 for non-users;
- Copilot users averaged 1.5 out of 5 for accuracy, versus 2.7 for non-users;
- Copilot users averaged 1.5 out of 5 for quality, versus 2.7 for non-users.

For that task, the sign flipped: diary participants reported time saved, while the observed Copilot group was about 4 minutes 28 seconds slower and produced worse work. The PowerPoint task showed a different but equally awkward tradeoff: Copilot users were more than seven minutes faster, but their average accuracy was 1.5 versus 5 and their average quality was 1 versus 2.

The observed exercise is too small to establish a population effect. Only 11 people completed observed sessions. The data-analysis and presentation exercise had three Copilot users and three non-users; the summary/writing exercise had three users and two non-users. The report itself says the findings should be treated as supplementary because participant skill differences or other factors could explain them.

That caveat is the point, not a reason to discard the result. The evaluation is an unusually honest demonstration that "time saved" can change when researchers watch the work, grade the answer, and count unused output. It also found adoption was narrower than enthusiasm implied: 64% of license holders were active at least weekly, 30% on an average working day, and average activity was 1.14 Copilot actions per user per working day.

Primary sources:

- GOV.UK publication page: https://www.gov.uk/government/publications/microsoft-365-copilot-pilot-dbt-evaluation-report
- Full report PDF: https://assets.publishing.service.gov.uk/media/68adbe409e1cebdd2c96a19d/dbt-microsoft-365-copilot-evaluation.pdf

Useful locations in the report:

- tool and evaluation design: PDF pages 5-6;
- dashboard adoption and activity: PDF pages 15-16;
- diary time-saving method and task counts: PDF pages 28-29;
- observed speed, accuracy, and quality results: PDF pages 29-30;
- hallucination recall: PDF pages 35-36;
- observed-task sampling and blind assessment: PDF pages 45-46.

## Corroborating 2026 government evaluations: the headline falls as the method gets stricter, but it remains mostly self-report

### HMRC, published July 9, 2026

HM Revenue & Customs randomly allocated 3,000 Copilot licenses across business groups for its Phase III trial. The primary outcome source was still a survey completed by 1,364 users, supplemented by usage statistics, 35 focus-group participants, and 49 task-based participants.

The report explicitly contrasts its result with the UK Government Digital Service's wider cross-government claim:

- the GDS study reported 26 minutes saved per day across more than 20,000 civil servants;
- HMRC reported around 60 minutes per week, or about 12 minutes per five-day workday;
- HMRC reduced self-reported time savings by roughly 20% to account for non-use and the higher likelihood that active users completed the survey;
- the report says the result is a baseline estimate, not a precise impact measure.

HMRC nevertheless projects around £50 million of annual net capacity benefits from a possible 50,000-license rollout. The source says the majority of saved time went into more business-as-usual work, higher quality, or wellbeing rather than cash cost reduction. This is a useful example of better adjustment without objective measurement of cash impact.

Primary source: https://www.gov.uk/government/publications/evaluation-report-phase-3-trial-of-microsoft-copilot/evaluating-the-impact-of-microsoft-copilot-in-hmrc

### DWP, published January 29, 2026

The Department for Work and Pensions compared 1,716 survey responses from licensed Copilot users with 2,535 responses from a stratified comparison sample of non-users and reported an estimated 19 minutes saved per day across eight routine tasks, with the biggest gains in email drafting and information retrieval.

Its own limitations are material:

- licenses were not randomized; volunteers and manager/peer nominations created selection risk;
- it had no pre-trial baseline;
- every main outcome was self-reported rather than objectively timed;
- the authors say enthusiasm and unobserved differences may overstate benefits even after regression controls.

The DWP report is stronger than a simple customer story and it supports that useful effects can exist. It still does not turn reported minutes into observed labor reduction.

Primary source: https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial

## Corroborating benchmark: internal search is still a low-accuracy category on a 2026 synthetic corpus

EnterpriseRAG-Bench, submitted in May 2026, created about 500,000 synthetic company documents across Slack, Gmail, Linear, Google Drive, HubSpot, Fireflies, GitHub, Jira, and Confluence, plus 500 questions involving noisy, conflicting, and missing information.

Its public leaderboard reports average correctness ranging from 68.2 for the best visible system down to 24.9 for Open WebUI. Several common frameworks score around one answer in four: LlamaIndex 27.2, LangChain 25.0, and Open WebUI 24.9. Vertex AI scores 41.9 in the published table.

The caveats are substantial. The corpus is synthetic, Onyx created the benchmark and sells an enterprise-search product, only five of nine systems are visible by default in the page interface, and the paper remains a draft. I would use it only as supporting context, not as the lead claim.

Primary sources:

- Paper: https://arxiv.org/abs/2605.05253
- Benchmark and leaderboard: https://onyx.app/enterpriserag-bench

## Synthesis for the newsroom

Three different measurements are being collapsed in internal-AI case studies:

1. adoption: did employees actually use the assistant, and how often?
2. activity or deflection: did it return an answer or keep a question out of a service queue?
3. work quality and economic effect: was the answer correct, did it improve the task, and did the freed time become useful output or cash impact?

The Farmers story publishes a deflection rate and a program-wide time total without the measures needed to connect them. The current evidence gives two clean ways to show why that matters without claiming the tool failed: recent RAG tests find serious refusal and conflict-detection failures under messy enterprise conditions, and a government evaluation found that some reported time savings disappeared or reversed when researchers observed and graded the work.

## Pitch 1

### Hook

The strongest model in a new enterprise RAG test knew when to say "I don't know" only 42.7% of the time.

### Story

China Mobile researchers built 983 enterprise-style cases from production RAG queries, then tested missing knowledge, irrelevant retrieval, and contradictory documents across 13 models. Even the best model correctly refused fewer than half of unanswerable cases, and the best conflict-recognition rate was 44.3%. That does not tell us askfarmers.ai's accuracy, but it shows why "60% of questions no longer became calls" is incomplete without correctness, refusal, and escalation rates. A support call can be deflected by a good answer or a confidently wrong one; the published Farmers evidence does not distinguish them.

### Verified URLs

- EnterpriseRAG paper record: https://arxiv.org/abs/2608.11584
- Full EnterpriseRAG paper: https://arxiv.org/html/2608.11584v1
- Farmers source interview: https://www.insurancebusinessmag.com/us/news/technology/how-farmers-used-ai-to-free-up-164-million-agent-hours-587592.aspx
- IBM support-assistant case, for the real deployment reporting 28% current answer accuracy: https://www.ibm.com/case-studies/ibm-software-support

### Why now

The benchmark was submitted on August 12, 2026, inside the current 30-day research window. Farmers is simultaneously circulating a large internal-AI result without publishing answer-quality or escalation data, so the benchmark exposes the exact metric missing from the story.

### Honest Nick angle

"I don't know whether Farmers' bot is accurate because Farmers hasn't published the number. A new enterprise RAG benchmark made me look harder at the 60% call-deflection claim. If a system cannot reliably refuse when the documents don't contain the answer, deflection is not a quality metric on its own."

Nick can carry this as source analysis. He should not imply the benchmark tested Farmers or claim that deflected calls were answered incorrectly.

## Pitch 2

### Hook

UK civil servants reported that Copilot saved time on Excel. When researchers watched, it was slower and less accurate.

### Story

The Department for Business and Trade's diary study estimated 0.4 hours saved on data-analysis tasks. In a small observed exercise, Copilot users instead took 25:01 versus 20:33 without it, while average accuracy and quality both fell from 2.7 to 1.5 on a five-point scale. The observed sample was only three users and three non-users, so it cannot prove Copilot generally makes Excel work worse. It can prove something narrower and more useful: self-reported time saved is not the same measurement as timed, graded work, and the sign can flip when answer quality is counted.

### Verified URLs

- GOV.UK DBT evaluation landing page: https://www.gov.uk/government/publications/microsoft-365-copilot-pilot-dbt-evaluation-report
- Full DBT evaluation PDF: https://assets.publishing.service.gov.uk/media/68adbe409e1cebdd2c96a19d/dbt-microsoft-365-copilot-evaluation.pdf
- HMRC's July 2026 evaluation, which explicitly adjusts reported savings downward for non-use and response bias: https://www.gov.uk/government/publications/evaluation-report-phase-3-trial-of-microsoft-copilot/evaluating-the-impact-of-microsoft-copilot-in-hmrc
- DWP's January 2026 evaluation and its self-report/baseline caveats: https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial

### Why now

The newest HMRC evaluation, published July 9, 2026, reports about 60 self-reported minutes saved per week after a 20% adjustment, less than half the 130 minutes per week implied by the wider government's 26-minute-per-day headline. The older DBT observed test shows why the measurement method can change the story. Together they offer a timely counterweight to Farmers' unexplained 16.4 million-hour total.

### Honest Nick angle

"I keep finding the same problem in internal-AI case studies: the easiest number to collect is how much time users think they saved. The DBT evaluation did the harder thing and watched a few people work. On Excel, the reported saving reversed. The sample is tiny, but it is a good reminder that timing and grading the task can tell a different story from the survey."

Nick can carry this as desk research. He should foreground the six-person Excel comparison and avoid generalizing it to all Copilot work; the same report found clear gains for summarizing reports.

## Pitch priority

Pitch 1 is the stronger contrarian-desk story for this week. It is genuinely current, squarely about internal knowledge assistants, and adds a measurement dimension the approved essay names but does not develop: a call avoided is not evidence of a correct answer. It has a precise why-now peg and a clean connection to Farmers without pretending the benchmark audited Farmers.

Pitch 2 is the stronger human measurement story. Its hook is excellent and the primary source is unusually candid, but the observed sample is tiny and the product is a broad Microsoft 365 assistant rather than a pure support-search bot. It should be used only if the final post gives the sample size in the body and preserves the positive result for summarization so the critique remains fair.
