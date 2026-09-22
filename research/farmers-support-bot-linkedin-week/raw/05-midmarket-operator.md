# Mid-market operator desk: narrow internal support and search assistants

Research date: 2026-09-22

Assignment: Find recent practical evidence about narrow internal support or search assistants in traditional firms, with emphasis on rollout, adoption, maintenance, or one bounded use case. Return one or two sourced pitches. Do not draft posts.

## Material reviewed

- Approved essay: `app/src/content/essays/farmers-built-a-support-bot.md`
- Comparable deployments report: `research/farmers-insurance-ai/comparables-report.md`
- Fresh last30days raw: `research/farmers-insurance-ai/raw/last30days/enterprise-ai-search-assistants-business-impact-raw-v3.md`
- Completed desks 01 and 02 in this folder
- Current first-party customer stories from ServiceNow and AWS, listed below

## What the fresh social sweep established

The last30days corpus kept enterprise knowledge retrieval in view, but it did not supply a strong current operator story. Its leading clusters were single-source and mostly vendor or creator claims. None gave a usable account of how a traditional firm rolled out, maintained, or drove adoption of a narrow internal assistant.

The pitches below therefore rely on current first-party customer pages. Both pages are vendor-authored, so their outcome claims are company and vendor reports rather than independent measurements.

## Finding 1: Hitachi Energy treated distribution and knowledge upkeep as part of the product

Hitachi Energy ran a three-month pilot of ServiceNow Now Assist for Virtual Agent and AI Search. The pilot focused on end-user and service-agent tasks such as incident summaries and resolution notes. The company reports satisfaction above 88% in the pilot, then expanded AI Search to 50,000 employees.

The rollout replaced four IT, HR, and finance service portals with one employee portal. Hitachi Energy added automatic translation across 17 languages and placed the virtual agent inside Microsoft Teams, its main employee communication channel. Global Head of Service Integration Oliver de Wilde says the Teams move "dramatically" increased adoption.

The current customer page reports a 25% fall in service-desk requests in the first week and 26,000 hours saved through automation and self-service. It also reports that 88% of users found the virtual agents helpful, 68% reported shorter searches, 79% found summaries helpful, and 64% found results more accurate and relevant. The page does not publish denominators, query volume, a control group, or the method behind the saved-hours total.

The maintenance details are unusually direct. Hitachi Energy says the underlying databases must remain current, consistent, and well maintained. It invested early in communication, training, and adoption promotion because service-desk staff were initially sceptical. It also started with a few use cases that could show value before adding more.

Primary source:

- ServiceNow customer story, Hitachi Energy: https://www.servicenow.com/customers/hitachi-energy-ai.html

Useful supporting current context:

- ServiceNow's 2026 AI Pacesetter article says Hitachi Energy has since put agentic incident prioritization, categorization, next-action recommendations, and change-plan generation into production. It gives a higher cumulative hours-saved figure than the customer page, so the two figures should not be mixed without a time basis: https://www.servicenow.com/uk/blogs/2026/5-ways-ai-innovation-leaders-beat-competition

## Finding 2: Jabil built one troubleshooting assistant, then spent the next weeks connecting the knowledge

Jabil's intelligent shop-floor assistant is a bounded manufacturing use case. Floor operators use it to retrieve troubleshooting and diagnostic information from policies, manufacturing specifications, incident tickets, and knowledge articles. It runs on Amazon Q Business.

AWS says Jabil built the first iteration in one week. The company then spent the following weeks adding data sources. The assistant now gives employees across Jabil's global operations access to more than 1,700 documents in several languages.

Jabil says the tool reduced average troubleshooting time and improved diagnostic accuracy, but AWS publishes neither delta, an operator count, query volume, nor a maintenance process for keeping the 1,700 documents current. The story does disclose one practical feedback loop: as an early user, Jabil asked AWS for multilingual support to fit its global plants.

The case also sits inside years of less glamorous groundwork. Jabil had centralized machine data, trained technical and non-technical staff, and worked through stability and scalability problems in its wider application environment before rolling out the assistant. The one-week demo was not the whole deployment.

Primary source:

- AWS customer story, Jabil: https://aws.amazon.com/solutions/case-studies/jabil-manufacturing-transformation-generative-ai/

## Pitch 1

### Hook

Hitachi Energy got its internal support bot adopted by putting it where 50,000 employees already worked.

### Story

Hitachi Energy piloted AI search and support for three months, then replaced four IT, HR, and finance portals with one employee portal. It added 17-language translation and put the virtual agent inside Microsoft Teams, which the company calls the point where adoption changed. The rollout also required maintained knowledge, early training, and adoption work with a sceptical service desk. ServiceNow reports a 25% fall in service-desk requests in week one, but does not disclose the request count or calculation behind the broader hours-saved claim.

### Verified URLs

- https://www.servicenow.com/customers/hitachi-energy-ai.html
- https://www.servicenow.com/uk/blogs/2026/5-ways-ai-innovation-leaders-beat-competition

### Why now

The customer story is current, and ServiceNow's 2026 award coverage says the program has moved beyond search into production incident workflows. The timely operator point is that adoption did not come from a better chat window. Hitachi Energy consolidated the entry point, put it in Teams, translated it, trained people, and kept the knowledge base maintained.

### Honest Nick angle

"The deployment detail I keep coming back to is Microsoft Teams. Hitachi Energy had an AI search tool, but adoption changed when the tool appeared in the place employees already used. The less glamorous work was four portals becoming one, 17 languages, maintained databases, training, and starting with a few support jobs."

Nick can carry this as an observation from a disclosed deployment. He should label every result as Hitachi Energy and ServiceNow's report, and avoid claiming the Teams integration alone caused the 25% request reduction.

## Pitch 2

### Hook

Jabil built the first version of its shop-floor support bot in a week. Connecting the useful knowledge took the next several weeks.

### Story

Jabil gave factory operators one narrow assistant for troubleshooting equipment. The first version took a week, then the team added incident tickets, knowledge articles, policies, and manufacturing specifications over the following weeks. It now searches more than 1,700 documents in several languages across Jabil's global operations. AWS says troubleshooting got faster and diagnoses improved, but gives no operator count, query volume, accuracy rate, or measured delta.

### Verified URL

- https://aws.amazon.com/solutions/case-studies/jabil-manufacturing-transformation-generative-ai/

### Why now

The Farmers story makes a very large operational claim around a search box. Jabil is a cleaner practitioner contrast: one named user, one job, a small disclosed corpus, and a rollout sequence that separates the fast prototype from the slower integration work.

### Honest Nick angle

"A one-week AI build makes a good demo line. Jabil's own sequence is more useful: first the chat interface, then weeks connecting the incident tickets and manufacturing documents that made it worth opening. AWS still leaves the adoption and accuracy numbers out, so this is a deployment lesson, not an ROI proof."

Nick can carry the arithmetic-free implementation point without implying client experience. He should not repeat AWS's words "significantly reducing" troubleshooting time as a measured result because the page gives no number.

## Desk recommendation

Pitch 1 is stronger for operators. It has a real adoption mechanism, a defined pilot, a full-workforce rollout, explicit upkeep and change-management details, and a first-week service-desk outcome with a clear caveat.

Pitch 2 is the cleaner bounded-use-case post. It is less measured, but the one-week build followed by several weeks of data integration cuts through the usual prototype story and stays close to internal support search.
