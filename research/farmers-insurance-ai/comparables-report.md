# Internal AI search assistants: five comparable deployments

## Bottom line

The captured case studies show that internal AI search assistants can save time. They do not show how often that happens.

This report uses only the five captured company pages, the captured INSEAD working paper, and the existing Farmers reporting brief in this research folder.

All five company stories were published by the company selling the underlying technology or by the company using its own product. Four attach a time-saving claim to the deployment. None supplies the raw measurements, a control group, or an independent audit. Microsoft's Carlsberg story reports a 10-person test and planned broad launch, but no results from that rollout. Orion Health's headline says it "saves" 50 staff hours a day, while the body calls that figure an expectation. IBM combines a limited-use result with annual projections. FletcherTech and Elastic report realized savings but do not explain how they calculated them.

Farmers' claim is far larger than the claims in these five stories. Farmers says its broader servicing program freed 16.4 million hours a year across about 28,000 agents and staff. The clearest AI component, askfarmers.ai, is an internal search assistant over more than 300,000 items. The sources do not separate its contribution from the program's process simplification and other operational changes. Treating the full 16.4 million hours as the effect of AI search would make the comparison meaningless.

The INSEAD working paper supplies better evidence that a grounded internal assistant can improve work outcomes. It randomized teams at one technology services firm and found higher self-reported project output, knowledge access satisfaction, and network connectivity after three months. It is one firm, the outcomes were self-reported, and the tool did more than search. The study establishes a causal effect in that setting, not a success rate for this product category.

## Comparison at a glance

| Deployment | What it actually does | Population and data scope | Main claimed impact | Evidence status | Strongest caveat |
|---|---|---|---|---|---|
| **Carlsberg Global Brain** | Answers natural-language questions about supply-chain standards, training, compliance, and operational practices. It uses Azure AI, Azure OpenAI, Copilot Studio, and SharePoint. | Tested by 10 people on 200 queries. Intended launch population exceeded 10,000 supply-chain workers. SharePoint held the source material, including about 4,000 operational standards for one manufacturing site, but the total corpus size is not given. | Cuts a roughly 30-minute manual SharePoint search to seconds, described as about a 99% reduction. Microsoft also reports greater than 90% "engagement" in testing and projects thousands of hours saved annually after rollout. | The query activity occurred in a prototype test. The 99% figure is company and vendor reported, with no measurement method. Annual savings are projected. | The page reports no results from the planned broad launch. The test covered 10 people, and "engagement" is not defined. |
| **Orion Health Oribot** | Uses retrieval-augmented generation to find and connect technical documentation, past support cases, known issues, and previous resolutions across six knowledge silos. | Internal pilot, initially focused on the support team. The corpus contains more than 500,000 records. The page gives no user count. | Retrieves answers in under a minute and is expected to reclaim about 50 support-team hours per day. Orion also says Amazon Bedrock was about 10 times cheaper at scale than commercial chatbot platforms. | Retrieval speed and cost comparison are self-reported. The 50-hour figure is explicitly an estimate or expectation in the body, despite stronger wording in the headline. | No headcount, query volume, accuracy rate, baseline handling time, SLA result, or calculation for the 50 hours appears. The product was still in internal pilot use. |
| **FletcherTech Gemini Enterprise** | Searches and synthesizes Jira, ServiceNow, SharePoint, and other core sources through one natural-language interface. It also generates content, analyzes data, audits sensitive data, and runs custom agents, including QA automation. | Three-month trial with 222 employees. Google reports 31,778 answers. FletcherTech supports more than 30 Fletcher Building businesses, but the story does not say the trial covered all of them. | More than 2,500 work hours saved during the trial. | Query count may be an observed platform measure, although the page does not say. Saved hours are company and vendor reported with no disclosed method, so they are best treated as an estimate. | The assistant did much more than knowledge search. The page does not allocate the 2,500 hours among search, content generation, analysis, QA agents, and other work. The implied saving is about 4.7 minutes per answer, but the source does not confirm that this was its method. |
| **IBM Ask SW Support** | Uses retrieval-augmented generation over IBM product documentation and technotes to propose answers for low-complexity software support cases. | Used by IBM support engineers for four months. IBM's global support organization has thousands of engineers and handles hundreds of thousands of cases a year. IBM estimates 370,000 low-complexity cases annually and assumes AI-generated answers for 100,000. | Average of 10 minutes saved per addressed case, leading to a projected saving of about 17,000 hours a year. | IBM reports experience from four months of use, but its footnote calls the 10-minute gain "projected." The annual case volume and 17,000 hours are estimates or projections. | IBM reports 28% current answer accuracy. The annual total assumes 100,000 useful AI answers and does not disclose sample size, acceptance criteria, error cost, or observed total hours saved. |
| **ElasticGPT** | A Slack-based assistant that searches and summarizes internal Confluence and ServiceNow content. It answers HR, IT, legal, company, sales, product, and support questions, and offers secure access to multiple language models. | Available to more than 3,000 employees. The initial knowledge base used two main sources, internal Confluence and ServiceNow knowledge articles. | More than five hours saved per employee per month, or 63 hours annually, 98% employee satisfaction, and investment payback within two months. | Elastic reports these as results from the first three months. They are self-reported company claims, and the page does not disclose the time-saving or payback methodology. Satisfaction comes from user ratings. | Elastic is its own customer and did not incur normal licensing fees. Its disclaimer calls the results and savings illustrative. This weakens both the payback comparison and transferability to paying customers. |

## 1. Carlsberg Global Brain

Carlsberg's Global Brain is a conversational front end for supply-chain knowledge in SharePoint. Employees can ask about Carlsberg Excellence standards, training modules, process-engineering practices, and manufacturing losses. The stated business problem is concrete: a site can have about 4,000 operational standards, and staff previously searched large SharePoint libraries manually.

The story describes a very early test. Microsoft and Carlsberg built the assistant in two days, then ran 200 queries with 10 testers. The page says searches that took about 30 minutes now take seconds and summarizes that as a roughly 99% reduction in query time. It also claims an engagement rate above 90%, without defining the denominator or the behavior that qualified as engagement.

The intended scale was more than 10,000 supply-chain workers. The page says the official launch was scheduled for late November, but reports only the test results and does not give post-launch evidence. It projects that modest daily use could save thousands of work hours annually. It reports no broad-launch usage, accuracy, task completion, operational compliance, or financial result.

Compared with Farmers, Carlsberg is a closer product match than an outcome match. Both tools put a conversational interface over scattered internal material for a large distributed workforce. Carlsberg's 99% figure concerns the duration of a single search task in a 10-person test. Farmers' 16.4 million hours covers an entire servicing program. Neither figure isolates a measured annual effect from the search assistant alone.

Source: [Microsoft customer story, "Carlsberg builds AI knowledge base in two days with Microsoft Unified"](https://www.microsoft.com/en/customers/story/25830-carlsberg-group-azure-openai-in-foundry-models)

## 2. Orion Health Oribot

Orion Health built Oribot for employees searching six internal knowledge silos. The corpus exceeds 500,000 records and includes technical documents and old support cases. The assistant uses retrieval-augmented generation to surface previous resolutions, known issues, and related product information. It runs inside Orion Health's Amazon Virtual Private Cloud.

AWS says employees had spent at least 15 minutes per silo each day looking for answers, with some losing more than an hour. Oribot retrieves information from the corpus in under a minute. The page repeatedly promotes 50 staff hours reclaimed per day, but its outcome section uses narrower wording: the automation "is expected" to reclaim approximately 50 hours daily for the support team. It gives no support headcount or observed before-and-after total.

The system launched as a functional prototype after two months and was still seeing internal pilot use. Orion Health planned a wider employee and customer rollout. AWS also reports that Orion found Bedrock about 10 times cheaper at scale than commercial chatbot platforms, without naming the alternatives or giving cost inputs.

The estimated 50 hours per workday would equal about 13,000 hours per year at 260 days. That is a small fraction of Farmers' claimed 16.4 million annual hours, but Orion covers one support team and Farmers covers about 28,000 agents and staff plus process changes. Orion's sub-minute retrieval claim is easier to understand than Farmers' program-wide total, yet neither source provides enough data to reproduce the savings calculation.

Source: [AWS case study, "Orion Health Saves 50 Staff Hours a Day with Generative AI Chatbot"](https://aws.amazon.com/solutions/case-studies/orion-health-case-study/)

## 3. FletcherTech Gemini Enterprise

FletcherTech connected Gemini Enterprise to Jira, ServiceNow, SharePoint, and other internal systems. Employees use one interface to find information, generate content, analyze data, and resolve IT issues. The deployment also includes custom agents. The case study names a pair of agents that automate QA testing and coach developers, so the reported result cannot be assigned to search alone.

Google reports 31,778 answers to 222 employees and more than 2,500 hours saved over three months. That is about 11.3 hours per participating employee during the trial. If sustained, it would equal roughly 45 hours per employee annually. It also works out to about 4.7 minutes for each answer, although the page never says it calculated savings that way.

This is one of the more useful company stories because it supplies a trial duration, user count, answer count, and time total. Its metric quality remains limited. There is no baseline, control group, accuracy measure, definition of an answer, or method for converting activity into hours. The source also bundles knowledge retrieval with content generation, analysis, data governance, and custom-agent automation.

Farmers' implied program-wide saving is about 586 hours per agent or staff member each year. That is roughly 13 times FletcherTech's annualized trial rate per participant. The difference is another sign that Farmers' total cannot reasonably be read as a search-assistant benchmark. It covers a larger operational program, and the underlying estimate is not disclosed.

Source: [Google Cloud customer story, "FletcherTech builds AI foundation for data-driven accuracy and operational efficiency"](https://cloud.google.com/customers/fletchertech)

## 4. IBM Ask SW Support

Ask SW Support is the closest support-workflow comparison. It uses IBM watsonx and retrieval-augmented generation to find answers in IBM product documentation and technotes for low-complexity support cases. Engineers remain responsible for complex cases.

IBM says engineers used the system for four months and saw an average saving of 10 minutes per case. The footnote is less definite, calling this a "projected 10 min productivity gain when correct answer generated" and stating current accuracy of 28%. IBM estimates 370,000 low-complexity cases a year, assumes AI-powered answers for 100,000, and projects about 17,000 hours saved annually.

The arithmetic is plausible. One hundred thousand cases at 10 minutes each is about 16,667 hours. The inputs are not independently established. The page does not give the four-month sample size, the number of correct answers, how correctness was judged, whether engineers accepted the answers, or the cost of checking wrong answers.

IBM's annual projection is about one thousandth of Farmers' 16.4 million-hour claim. IBM also scopes the estimate to one specific support use case. Farmers applies its figure to an enterprise program and separately says askfarmers.ai resolves more than 60% of questions that formerly became calls. Farmers does not define "resolves" or give query volumes, so the 60% rate cannot be converted into a comparable time total.

Source: [IBM case study, "AI-Powered support: Enhancing support productivity through automation"](https://www.ibm.com/case-studies/ibm-software-support)

## 5. ElasticGPT

Elastic built ElasticGPT for its own workforce and launched it in Slack in July 2025. The first version grounded answers in internal Confluence pages and ServiceNow knowledge articles. Employees use it for HR, IT, legal, company, sales, product, and support questions. Elastic also gives employees controlled access to several language models through the same system.

Elastic says more than 3,000 employees save over five hours a month each, equal to 63 hours per person annually. At 3,000 employees, that implies at least 189,000 hours a year. The company also reports 98% satisfaction from user ratings and says the deployment recovered its investment in two months.

The page gives no calculation for the 63 hours, no active-user rate, no query count, and no counterfactual. The payback figure includes model hosting and labor to build the system, but Elastic did not pay the licensing fees a normal customer would face. Its own disclaimer says normal costs were not incurred and describes the results and savings as illustrative.

Elastic's implied annual saving per employee is about one ninth of Farmers' roughly 586 hours per person. ElasticGPT also covers broad employee tasks, while Farmers' program targets insurance servicing work. Elastic's aggregate claim is larger than the other comparable company stories, but it remains about 1.2% of Farmers' total. The available sources do not justify treating that gap as a difference in product performance.

Source: [Elastic, "ElasticGPT built on Elastic"](https://www.elastic.co/resources/article/elastic-elasticgpt)

## Metric quality and magnitude compared with Farmers

| Story | Most concrete metric | Metric quality | Magnitude relative to Farmers |
|---|---|---|---|
| **Farmers** | 35% less routine servicing work and 16.4 million hours freed annually. askfarmers.ai resolves more than 60% of questions that formerly became calls. | Company executive claim, repeated by Farmers. No disclosed baseline method, query volume, control, or audit. The annual total combines AI with process and organizational changes. | Largest total by a wide margin. About 586 hours per member of the roughly 28,000-person population if spread evenly. |
| **Carlsberg** | About 30 minutes reduced to seconds for a search task. | Prototype result from 10 testers and 200 queries. Annual savings only projected. | No realized annual total. The intended population of more than 10,000 is smaller than Farmers' population. |
| **Orion Health** | More than 500,000 records searched in under one minute; about 50 support hours per day expected. | Pilot-stage vendor case study. The time total is explicitly expected, despite the headline's realized wording. | About 13,000 hours a year if the daily estimate held for 260 workdays, versus Farmers' 16.4 million. |
| **FletcherTech** | 31,778 answers and more than 2,500 saved hours across 222 users in three months. | Bounded trial with activity counts, but no calculation, control, or separation of search from other agents. | About 11.3 hours per trial participant over three months. Farmers implies about 13 times the annualized per-person saving. |
| **IBM** | 10 minutes per correct AI answer and about 17,000 hours projected annually. | Four months of reported use, mixed with estimated annual volumes. Current accuracy is 28%. | About one thousandth of Farmers' annual total. The scope is a single low-complexity support use case. |
| **Elastic** | 63 hours per employee annually, 98% satisfaction, and two-month payback. | Realized company claim with no disclosed time methodology. Self-use omitted normal licensing costs. | At least 189,000 hours annually across 3,000 employees, about 1.2% of Farmers' total. Farmers' implied per-person saving is about 9.3 times higher. |

Farmers has the weakest relationship between its headline and its disclosed AI tool. Carlsberg, Orion Health, IBM, and Elastic tie their claims directly to one named assistant, even when the calculation is weak. FletcherTech includes search and several other AI functions but at least bounds its claim to a three-month trial. Farmers reports a much broader operational outcome and describes askfarmers.ai as one component of the work.

The five stories also measure different things. Search duration, estimated labor time, answer volume, satisfaction, and payback are not interchangeable. Aggregate hours favor large populations and high-volume workflows. Per-person hours depend on assumptions about adoption and how a "saved" minute was used. None of the sources reports a realized profit, customer-retention change, error-rate improvement, or independently verified labor reduction attributable to internal search.

Farmers sources carried forward from the existing brief: [Insurance Business, "How Farmers used AI to free up 16.4 million agent hours"](https://www.insurancebusinessmag.com/us/news/technology/how-farmers-used-ai-to-free-up-164-million-agent-hours-587592.aspx) and [Phil Leininger's LinkedIn reshare](https://www.linkedin.com/posts/philipleininger_how-farmers-used-ai-to-free-up-164-million-activity-7498423667673141248-FYb3).

## Independent context: INSEAD randomized field experiment

The 2026 INSEAD working paper studied a grounded generative AI assistant at one Central European technology services company. It is not one of the five company stories above.

The assistant used retrieval-augmented generation with GPT-4 and later GPT-4o. It searched and summarized internal documents, CRM history, emails, and meeting recordings. Sales staff used it to prepare for meetings, retrieve product and legal information, answer questions during customer calls, summarize notes, and extract follow-up tasks. This was a broader work assistant than a pure enterprise search box.

The researchers randomized all 42 teams. Twenty-five teams with 197 employees received the assistant and training, while 17 teams with 121 employees continued with manual search, personal expertise, and normal colleague contact. The final analysis included 316 people who completed both surveys. Researchers measured the same outcomes before deployment and three months later.

The treatment group improved more than the control group on several measures:

- Knowledge-network degree rose by 5.21 ties in the treatment group and 0.84 in the control group, a 4.37 difference.
- Collaboration-network degree rose by 7.77 ties in the treatment group and 1.12 in the control group, a 6.65 difference.
- Average projects worked on over the prior three months rose from 9.93 to 12.71 in the treatment group. The control group declined from 8.73 to 8.39.
- Knowledge-access satisfaction rose from 3.24 to 4.87 in the treatment group and from 3.30 to 3.34 in the control group.

The network differences were statistically significant at p < .001. Generalists in the treatment group reported a 28.3% increase in projects, from 12.70 to 16.30. Specialists reported a 26.4% increase, from 4.29 to 5.42. The paper cautions that role membership was not randomized, so the generalist-specialist differences are correlational even though access to the assistant was randomized by team.

This study has stronger causal identification than any of the five company pages. Its limits matter:

- It covers one technology services firm in one region.
- The observation period lasted three months, so persistence is unknown.
- Project counts, collaboration ties, knowledge ties, and satisfaction were self-reported. Project counts came from participants consulting their own CRM records rather than a central extract.
- The intervention included training and management encouragement as well as tool access.
- The assistant supported drafting, live meetings, summarization, and task extraction in addition to internal search.
- The paper was a 2026 working paper, not evidence of prevalence across companies.

Source: [INSEAD working paper and SSRN record, "GenAI Adoption Increases the Density of Knowledge and Collaboration Networks: Evidence from a Field Experiment"](https://ssrn.com/abstract=6028034)

## Can the evidence establish how often these tools create meaningful impact?

No.

The five company cases were selected because their publishers had a positive story to tell. There is no count of unsuccessful, abandoned, low-adoption, or unmeasured deployments. Without that denominator, five positive cases cannot produce a success rate. The result definitions also move around. One page calls a faster query an impact, another estimates hours, another counts projects, and another claims payback using costs unavailable to ordinary customers.

The independent experiment changes the confidence that impact is possible, not the estimate of how common it is. It found causal improvements after one grounded assistant rollout in one firm. A frequency claim would require a representative sample of deployments, consistent outcome definitions, disclosed observation periods, and results from failures as well as successes. None of the captured material provides that evidence.

The available record supports a narrower conclusion. Internal AI assistants can improve knowledge retrieval and work outcomes in some settings. The size of the effect, its durability, and how often it appears remain unknown.
