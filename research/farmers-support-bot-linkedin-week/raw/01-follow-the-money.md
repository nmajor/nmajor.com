# Follow-the-money desk: internal AI search and support assistants

Captured: 2026-09-22

Assignment: investigate current or recent evidence on cost, payback, and ROI for internal AI search/support assistants. This file contains the full working findings and the resulting newsroom pitches. It is not a drafted LinkedIn post.

## Starting context

The approved Farmers essay says Farmers has attached a 16.4 million-hour annual saving to a two-year servicing-efficiency program. The company has not separated the contribution of askfarmers.ai, its conversational search tool over more than 300,000 internal items, from process simplification and other operational changes. It has also not disclosed query volume, adoption, accuracy, escalation rates, a wage assumption, realized cost reduction, or a calculation connecting the bot to the headline.

The existing comparable-deployments report reaches a narrower conclusion: internal assistants can save time, but the public case studies are selected success stories with inconsistent metrics and almost no reproducible ROI calculations. The fresh last30days capture for 2026-08-23 through 2026-09-22 contains substantial general discussion about enterprise AI and knowledge retrieval, but no new, high-quality primary evidence that closes that measurement gap. The most relevant current community theme is that ROI starts with a specific workflow rather than a company-wide AI mandate; the items making that point are low-engagement promotional content, so they are context rather than evidence for either pitch below.

## Primary-source findings

### 1. Google Gemini Enterprise turns product activity into estimated financial value through fixed assumptions

Google's current Gemini Enterprise analytics documentation exposes exactly how the product calculates several executive-facing metrics.

- A generated answer counts as successful if the user gives it a thumbs-up.
- It also counts as successful if the user gives no feedback and does not ask another question within 30 seconds.
- Employee hours saved are calculated as successful searches plus successful answers, multiplied by assumed minutes saved per success.
- The annual projection assumes three minutes saved per successful query, which Google says is based on internal research.
- The displayed value saved is the estimated hours multiplied by an hourly rate entered by the customer.

Source: https://docs.cloud.google.com/gemini/enterprise/docs/view-analytics

Directly relevant lines in the captured documentation: 453-459.

Why it matters: this is not a before-and-after labor measurement. It is an activity-to-value model. A pause can mean the answer solved the problem, but it can also mean the employee abandoned the answer, switched tools, went to lunch, or did something else. The dashboard cannot distinguish those outcomes through the published rule. The three-minute saving is also fixed rather than measured against each customer's previous search process.

The method is not necessarily unreasonable as a directional product metric. The problem comes when an estimate produced this way is retold as an observed operational saving without disclosing the assumptions.

### 2. Current market prices make a basic search assistant cheap enough to clear a low paper break-even bar

Amazon Q Business currently lists:

- Lite: $3 per user per month for basic permission-aware questions and answers over company data.
- Pro: $20 per user per month for broader features.
- Enterprise Index: $0.264 per hour for one unit covering up to 20,000 documents or 200 MB of extracted text, plus media-processing charges.

Source: https://aws.amazon.com/q/business/pricing/

AWS's current worked example for a 500-person deployment uses 450 Lite seats, 50 Pro seats, one Enterprise Index, and weekly media syncs. Its stated monthly total is $2,562.20: $2,350 in user subscriptions, $190 for the index, $24 for images, $7.20 for audio, and $15 for video.

At a hypothetical loaded labor value of $50 per hour, that bill breaks even on paper at about 51.2 saved hours across the company per month, or 6.1 minutes per employee. At $35 per hour, the threshold is about 73.2 hours, or 8.8 minutes per employee per month. These are arithmetic illustrations, not evidence of realized value. They exclude implementation, data cleanup, permissions work, administration, evaluation, change management, and the cost of incorrect answers. They also assume a minute freed becomes a minute of economic value.

This helps explain why vendors can publish attractive ROI stories without showing cash savings. The license hurdle can be low when a broad employee population is assigned a wage value. The harder question is whether the estimated minutes were real, useful, and converted into output, revenue, avoided hiring, or lower support cost.

### 3. Microsoft's Worten case-study arithmetic does not reconcile

Microsoft's June 23, 2025 customer story says Worten's employees previously took about 3.5 minutes to search an operations manual. It says there were more than 75,000 searches annually and that this inefficiency corresponded to around 11,000 hours of search time each year. The headline says the new chatbot saves 11,000 hours annually.

Source: https://www.microsoft.com/en/customers/story/24385-worten-azure-openai

Relevant published figures: 75,000 searches per year; 3.5 minutes per search; around 11,000 hours per year.

Arithmetic check:

- 75,000 x 3.5 minutes = 262,500 minutes.
- 262,500 / 60 = 4,375 hours.
- Reaching 11,000 hours at 3.5 minutes per search would require roughly 188,571 searches per year.
- Alternatively, 75,000 searches would need to average 8.8 minutes each to total 11,000 hours.

The page provides no additional component that bridges the gap. "Over 75,000" leaves room for a higher exact volume, but the actual volume would need to be more than 2.5 times the stated floor. The story also says the chatbot reduced searches from minutes to seconds, so the full baseline is not literally the net saving. The article does not disclose implementation cost, Azure usage cost, maintenance cost, or realized financial benefit.

This does not show the tool failed. It shows the headline cannot be reproduced from the numbers Microsoft chose to publish.

### 4. Amazon's own internal case implies 27 minutes of value per answered question

An AWS post dated November 1, 2024 says Amazon Q Business answered more than one million internal developer questions that year and reduced time spent on manual technical investigations by more than 450,000 hours.

Source: https://aws.amazon.com/blogs/devops/reducing-time-spent-waiting-with-amazon-q/

Implied arithmetic: 450,000 hours / 1,000,000 questions = 0.45 hours, or 27 minutes, per question.

The source explains that developers could previously wait hours for subject-matter experts and that Q was embedded in Slack and an internal Q&A board. It does not disclose a control group, cost, how the 450,000 hours were calculated, how much was active work versus elapsed waiting, or whether all one million answers were useful. The 27-minute implied value is nine times Google's current default estimate of three minutes per successful Gemini Enterprise query. Those figures can both be plausible for different workflows, but they are not interchangeable benchmarks.

### 5. Elastic's two-month payback is striking but not portable buyer economics

Elastic's May 15, 2026 first-party article says ElasticGPT serves more than 3,000 employees, saves more than five hours per employee each month (63 hours annually), has 98% satisfaction, and paid back its investment within two months. Elastic says the cost side included LLM hosting and labor to build the system.

Source: https://www.elastic.co/resources/article/elastic-elasticgpt

The article does not publish active users, query volume, the method behind five hours per employee, wage assumptions, implementation-cost inputs, or the payback calculation. Elastic is also using its own Elasticsearch platform, so the story does not establish the economics for an outside customer paying normal platform and support charges. The existing comparable-deployments report notes that Elastic's disclaimer describes the results and savings as illustrative.

Again, the result may be real. The disclosed evidence is insufficient to transfer the two-month payback claim to a buyer.

### 6. Orion Health gives a cost ratio without a cost

AWS's current Orion Health case study says Oribot can search more than 500,000 records in under a minute, is expected to reclaim about 50 support-team hours per day, and was roughly ten times more cost-effective at scale than commercial chatbot alternatives.

Source: https://aws.amazon.com/solutions/case-studies/orion-health-case-study/

The page does not name the compared products or disclose either cost. The 50-hour figure is explicitly described in the body as expected, despite the stronger realized wording in the page headline. The source gives no user count, query volume, accuracy, baseline total, or calculation.

### 7. Microsoft itself provides a clean example of a vendor-authored paper break-even calculation

Microsoft's Copilot for Microsoft 365 value guide prices the product at $30 per user per month and says an employee earning $70,000 needs to save 54 minutes per month to break even. It also says 2.5 hours per month produces a 180% ROI.

Source: https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Copilot-for-Microsoft-365-Value-Guide.pdf

Relevant page: PDF page 9, captured lines 296-340.

This is useful as a transparent formula, not as proof. It equates time with value and does not establish that the time was converted into economic output. It reinforces the main money-desk distinction: license break-even is easy to model; realized ROI requires observing what happens after the minute is freed.

## Working synthesis

The public ROI story for internal AI search usually has four layers:

1. Count an answer, query, or deflected request.
2. assign a standard number of minutes to it;
3. multiply those minutes by an hourly wage;
4. compare that imputed value with software and build cost.

The calculation can be useful for planning. It becomes misleading when the assumptions disappear and the result is presented as measured labor savings, profit, or cash returned. The current Google documentation is unusually valuable because it reveals the machinery directly. The Worten story is valuable for the opposite reason: even the published inputs do not reproduce the headline.

## Pitch 1

### Hook

Your AI search dashboard may count 30 seconds of silence as a successful answer.

### Story

Google's current Gemini Enterprise documentation says an answer is successful when the user gives it a thumbs-up or simply does not ask another question within 30 seconds. The dashboard then assumes three minutes saved per successful query and multiplies the total by an hourly wage supplied by the customer. That produces a neat "value saved" number, but it is an estimate built from product activity, not an observed reduction in labor cost or an experimental before-and-after. This is the missing translation layer beneath the giant hours-saved claims now circulating around internal AI search.

### Verified source URLs

- Google Cloud, Gemini Enterprise analytics methodology: https://docs.cloud.google.com/gemini/enterprise/docs/view-analytics
- Amazon Q Business current pricing, useful as a buyer-cost benchmark: https://aws.amazon.com/q/business/pricing/
- Microsoft Copilot value guide, a transparent vendor-authored break-even model: https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Copilot-for-Microsoft-365-Value-Guide.pdf

### Why now

The Google methodology is in the current product documentation, and Farmers is currently promoting a 16.4 million-hour operational result without publishing the calculation that links its support bot to that number. Together they give a timely, concrete way to explain how an AI activity metric becomes an executive ROI headline.

### Honest first-person angle for Nick

"I wanted to know what an hour saved by an internal AI search tool actually means, so I read the dashboard documentation. In Google's version, silence for 30 seconds can count as success. That doesn't make the tool useless. It means the impressive financial number is only as solid as the assumptions underneath it."

Nick can carry this as source analysis. It does not imply he installed or measured a system for a client.

## Pitch 2

### Hook

One internal AI search case study misses its own headline by 6,625 hours.

### Story

Microsoft's Worten story gives enough inputs to check: more than 75,000 annual searches at about 3.5 minutes each, which it says equals roughly 11,000 hours. The stated numbers produce 4,375 hours, a 6,625-hour gap; the search volume would need to exceed about 188,500, or the average search would need to take 8.8 minutes, to reach the headline. The chatbot may still be useful, and "more than 75,000" is not an exact count, but the page never supplies the missing bridge. This is a compact example of why internal-AI ROI claims should ship with the arithmetic, not just the answer.

### Verified source URLs

- Microsoft customer story, Worten: https://www.microsoft.com/en/customers/story/24385-worten-azure-openai
- Google Cloud's current analytics methodology, showing how another vendor converts usage to hours and value: https://docs.cloud.google.com/gemini/enterprise/docs/view-analytics
- AWS's internal Amazon Q result, an additional example whose published totals imply 27 minutes per answered question: https://aws.amazon.com/blogs/devops/reducing-time-spent-waiting-with-amazon-q/

### Why now

Farmers' current 16.4 million-hour story has renewed attention on internal search assistants, while the underlying calculation remains undisclosed. The Worten arithmetic supplies a named, checkable example of what happens when a large hours-saved figure is repeated without showing how the inputs connect.

### Honest first-person angle for Nick

"After failing to reproduce Farmers' number because the inputs aren't public, I tried the same check on a case study that did publish inputs. The arithmetic still didn't work. I think a useful procurement rule falls out of that: if a vendor gives you hours saved, ask for the query count, baseline minutes, success rule, and actual cost in the same table."

Nick can present this as his own desk research and arithmetic. He should not say he has audited a client deployment or imply the discrepancy proves the product failed.

## Pitch priority

Pitch 1 is the stronger follow-the-money story. It is current, comes from product documentation rather than marketing prose, and explains the mechanism behind a whole category of ROI claims. It is likely a save-game post for operators and buyers.

Pitch 2 is sharper and more shareable because the contradiction is legible in one multiplication. It needs careful wording around "more than 75,000" so the post critiques the published evidence rather than alleging deception. It has better breakout potential if the week's pool needs one named-company story.

