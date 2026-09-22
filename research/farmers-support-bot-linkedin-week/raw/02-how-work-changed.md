# How work changed desk: internal AI support and search assistants

Research date: 2026-09-22

Assignment: Find current or recent evidence on how internal AI knowledge and search assistants change support work, escalation, or employee behavior. Return one or two sourced pitches. Do not draft posts.

## Material reviewed

- Approved essay: `app/src/content/essays/farmers-built-a-support-bot.md`
- Comparable deployments report: `research/farmers-insurance-ai/comparables-report.md`
- Fresh last30days raw: `research/farmers-insurance-ai/raw/last30days/enterprise-ai-search-assistants-business-impact-raw-v3.md`
- Primary research and company sources listed below.

## What the fresh social sweep did and did not establish

The last30days run covered 112 items across nine sources for 2026-08-23 through 2026-09-22. The corpus included 14 Reddit threads, 23 X posts, 11 YouTube videos, 18 TikToks, 4 Instagram reels, 13 Hacker News stories, 14 GitHub items, 8 Dripstack items, and 7 web pages.

The ranked clusters were weak for this assignment. Each of the top eight clusters was single-source. The most relevant items were vendor or creator claims about buried enterprise knowledge, workflow selection, unstructured data, or broad efficiency. None supplied recent measured evidence on support escalation or worker behavior. I did not use those claims as proof.

Useful discovery context from the sweep:

- Box said 90% of customer data is locked in unstructured formats, but the source was a Box interview with its own VP of product management.
- A low-engagement TikTok framed scattered contracts, Slack threads, tickets, CRM notes, SharePoint folders, proposals, and employee memory as a hidden constraint. It offered no deployment result.
- A Hacker News item on enterprise data quality had 16 points and 7 comments, but the captured evidence contained only the title.

Conclusion: the social window shows that enterprise knowledge retrieval remains a live topic, but it does not support a measured work-change story. The pitches below rely on primary research and first-party deployment disclosures.

## Verified primary-source findings

### 1. A support copilot reduced requests to speak to a manager

The strongest work-change evidence is the peer-reviewed paper "Generative AI at Work," published in the May 2025 issue of *The Quarterly Journal of Economics*. The researchers studied the staggered rollout of a real-time conversational assistant to 5,172 customer-support agents at a Fortune 500 business-process software company.

Verified findings:

- Access to the assistant increased successfully resolved chats per hour by 15% on average.
- Gains were concentrated among less experienced and lower-skilled agents. The most experienced and highest-skilled agents saw small speed gains and small declines in quality.
- Low-skill agents began communicating more like high-skill agents after adoption. The authors describe convergence in communication patterns.
- Customer requests to speak to a manager fell by almost 25% from a baseline rate of about 6%.
- The decline in manager requests was larger for less skilled and less experienced agents, though the subgroup estimates were noisy.
- The researchers measured customer requests for escalation, not completed escalations. They did not have data on actual escalations.
- The assistant offered live response suggestions drawn from successful prior conversations. Agents could accept, edit, or ignore them. This is adjacent to internal knowledge search, not the same product shape as askfarmers.ai.

Primary URLs:

- Oxford Academic / QJE article: https://doi.org/10.1093/qje/qjae044
- Stanford Digital Economy Lab publication page: https://digitaleconomy.stanford.edu/publication/generative-ai-at-work/
- NBER working paper record: https://www.nber.org/papers/w31161
- Author-hosted paper PDF: https://danielle.li/assets/docs/GenerativeAIatWork.pdf

Why this matters for Farmers: Farmers reports that askfarmers.ai resolves more than 60% of questions that used to become service-center calls. It does not publish query volume, actual escalation counts, transfer rates, or effects by agent experience. The QJE paper shows what an operational work-change result can look like when those downstream behaviors are measured.

### 2. Conversational search changes the worker's job from finding to judging

Microsoft Research's CHI 2025 paper studied LLM-based search in two randomized online experiments. The task was consumer product research, not workplace support, so it is evidence about search behavior rather than a direct enterprise deployment.

Verified findings:

- In the first experiment, 90 US participants used either traditional search or an LLM-based search tool to answer vehicle-comparison questions.
- LLM-search users finished routine tasks about twice as fast. They issued fewer, more complex queries and reported higher satisfaction.
- When the LLM was correct, decision accuracy was comparable to traditional search.
- When it returned incorrect information, users often failed to notice and made incorrect decisions.
- In the second experiment, confidence-based color highlighting helped users spot errors and improved decision accuracy without removing the other benefits.

Primary URLs:

- Microsoft Research publication page: https://www.microsoft.com/en-us/research/publication/effects-of-llm-based-search-on-decision-making-speed-accuracy-and-overreliance/
- CHI 2025 paper PDF: https://www.dangoldstein.com/papers/spatharioti_rothschild_goldstein_hofman_LLM_Search_CHI25.pdf
- DOI: https://doi.org/10.1145/3706598.3714082
- Microsoft Appropriate Reliance initiative: https://www.microsoft.com/en-us/research/articles/appropriate-reliance-research-initiative/

IBM's first-party support case makes the verification problem concrete. Ask SW Support uses RAG over product documentation and technotes for low-complexity cases. IBM says it saves 10 minutes when it produces a correct answer, but the footnote reports 28% current accuracy. IBM does not publish the time engineers spend checking wrong answers, the number of corrected answers, or the net handling-time effect across all attempts.

IBM also reports other support automation results, but they are separate products and projections:

- Analyze SW Support: an average reported saving of 31 minutes per case across 76 products, used to project 124,000 annual hours.
- Automate SW Support: 40 minutes per engineer per day in an initial 100-engineer rollout, used to project 56,000 hours a month after deployment to 2,800 engineers.

Primary URL:

- IBM Software Support case study: https://www.ibm.com/case-studies/ibm-software-support

The work-change claim here is an inference, not a measured result from IBM: when a conversational search tool returns direct answers, some effort moves from locating documents to deciding whether the answer is safe to use. Microsoft measured the overreliance behavior in a controlled search experiment. IBM disclosed an accuracy figure low enough to make that behavior operationally relevant. Neither source measures the verification load inside IBM.

### 3. Internal assistants can increase human contact instead of replacing it

The April 2026 INSEAD working paper randomized all 42 teams at one European technology-services company. Twenty-five teams with 197 employees received an organization-specific GenAI assistant plus training, and 17 teams with 121 employees continued normal work. The final panel contained 316 employees.

Verified findings after three months:

- Knowledge-network degree rose by 5.21 ties in the treatment group and 0.84 in the control group, a difference of 4.37.
- Collaboration-network degree rose by 7.77 ties in the treatment group and 1.12 in the control group, a difference of 6.65.
- The treatment group reported work on 12.71 projects, up from 9.93. The control group declined from 8.73 to 8.39.
- Knowledge-access satisfaction rose from 3.24 to 4.87 in the treatment group and barely changed in the control group.
- The network results were statistically significant at p < .001.

Limits:

- One firm and a three-month window.
- Network ties, project counts, and satisfaction were self-reported.
- The intervention included training and management encouragement.
- The assistant handled meeting preparation, drafting, summarization, CRM history, emails, recordings, and follow-up tasks. It was broader than enterprise search.

Primary URLs:

- SSRN record: https://ssrn.com/abstract=6028034
- DOI: https://doi.org/10.2139/ssrn.6028034

This is useful background but weaker as a standalone post for this week's narrow support-bot theme. The approved essay already mentions it, and the assistant did much more than internal search.

## Pitches

### Pitch 1: The support bot that made customers ask for the manager less often

Hook: A support assistant cut "let me speak to your manager" requests by almost 25%.

Story: Researchers followed 5,172 customer-support agents through the rollout of a live AI copilot. Resolved chats per hour rose 15%, but the cleaner work-change result was downstream: customer requests for a manager fell by almost a quarter from a 6% baseline. The drop was larger among less experienced agents, and their language began to resemble the language of stronger agents. The paper measured requests for escalation rather than completed escalations, so the result is about customer confidence and supervisor demand, not a proven reduction in manager workload.

Verified URLs:

- https://doi.org/10.1093/qje/qjae044
- https://digitaleconomy.stanford.edu/publication/generative-ai-at-work/
- https://danielle.li/assets/docs/GenerativeAIatWork.pdf

Why now: Farmers is promoting a bot that reportedly resolves more than 60% of questions that once became service-center calls, but it has not disclosed actual call volumes, transfer rates, or escalation data. The QJE study supplies a measured version of the operational behavior Farmers gestures toward.

Honest Nick angle: The number I would want from an internal support bot is not the size of the document index. It is what stopped landing on someone else's desk. This study found one answer: fewer customers asking for a manager. It also had the humility to say it could not observe completed escalations.

Fit: Strong. It is a named, measured support-work story with a surprising human consequence. It stays close to the week's theme without repeating the Farmers headline.

### Pitch 2: The search box removed clicks and created a checking job

Hook: Conversational search can halve lookup time. It can also make a wrong answer harder to notice.

Story: Microsoft randomized people between traditional search and an LLM answer box. On routine tasks, the LLM group was about twice as fast and used fewer, more complex queries. When the model was wrong, users often failed to catch it; confidence highlighting improved error detection in a second experiment. IBM's own support assistant reports 28% current answer accuracy and counts ten minutes saved only when it generates the correct answer, but IBM does not report the time spent verifying or correcting the rest.

Verified URLs:

- https://www.microsoft.com/en-us/research/publication/effects-of-llm-based-search-on-decision-making-speed-accuracy-and-overreliance/
- https://www.dangoldstein.com/papers/spatharioti_rothschild_goldstein_hofman_LLM_Search_CHI25.pdf
- https://doi.org/10.1145/3706598.3714082
- https://www.ibm.com/case-studies/ibm-software-support

Why now: Companies keep reporting time saved by replacing a list of links with a direct answer. Farmers has not disclosed askfarmers.ai's accuracy, correction rate, or verification cost. IBM did disclose accuracy, and the footnote changes how its saving should be read.

Honest Nick angle: A direct answer does not delete knowledge work. It changes the task. The employee searches less and judges more. That can still be a good trade, but the verification work belongs in the ROI story. This is an inference across two sources, not a measured verification result from IBM.

Fit: Strong, with a caveat. The Microsoft experiment used consumer vehicle research, not enterprise support. The IBM accuracy figure makes the connection relevant, but the post must label the inference and avoid claiming that IBM measured worker verification time.

## Recommendation to the editor

Pitch 1 is the cleanest how-work-changed story. It has a peer-reviewed field deployment, a support-team population, a concrete behavior change, and an honest measurement caveat.

Pitch 2 is sharper and more contrarian. It works if the week needs a post about the hidden work that appears after search becomes an answer. Keep the consumer-task limitation and cross-source inference in the post.

