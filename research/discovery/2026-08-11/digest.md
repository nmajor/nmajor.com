# Discovery digest — August 11, 2026

Covers July 12 – August 11 for news (120 days for case studies). Sources: Exa `/search`
(12 beat + case-study intents) and `/findSimilar` on 5 seeds, Hacker News (6 keyword
seeds, 30-day window), Lobsters, Hugging Face daily papers, arXiv cs.SE/HC/IR/MA, plus
targeted web verification. ~180 raw candidates before dedupe and filtering; 12 kept.

The run has an unusually strong theme this cycle: **the bill and the rollback**. Three
separate named companies pulled back or overspent in public within two weeks, and the
cost-reckoning stories now have real numbers attached rather than survey vibes.

## Top candidates

### 1. Kinney Drugs pulled its AI phone assistant after hundreds of complaints — [WCAX](https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/)
**Source(s):** Hacker News (149 pts, 164 comments) · WCAX (Aug 7)
**Relevance 5 · Deep-cut 4 · Breakout 5 — spike** · `[incident/named-case]`
The regional pharmacy chain deployed an AI phone assistant called Burt in May; customers
reported incoherent calls, wrong medication dosages, and missed refill notifications.
Kinney went back to a touch-tone system for incoming patient calls and kept Burt only for
opt-in outbound refill texts. President John Marraffa on the failures: "We did not, and we
own that."
**Read:** [WCAX report](https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/) · [HN thread](https://news.ycombinator.com/item?id=49244569)

### 2. Curative cancelled a $600k Salesforce contract, then its model bill grew 6x a month — [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/curative-ceo-says-company-ditched-090701283.html)
**Source(s):** Exa (case-study hunt) · Business Insider · Hacker News
**Relevance 5 · Deep-cut 4 · Breakout 4 — spike** · `[named-case]`
CEO Fred Turner says the healthcare company vibecoded a replacement CRM in two months and
cancelled a $600,000-a-year Salesforce contract, with plans to cut total SaaS spend ~80%
this year. In the same reporting: its spend on Anthropic models has been growing about 6x
every month, from tens of thousands to millions a month. The SaaS line went down and a
different line went up faster.
**Read:** [Yahoo/BI syndication](https://finance.yahoo.com/technology/ai/articles/curative-ceo-says-company-ditched-090701283.html) · [HN thread](https://news.ycombinator.com/item?id=49000489)

### 3. Amazon spent $1.8m on one failed AI task and took five months to notice — [FT via Yahoo](https://finance.yahoo.com/technology/ai/articles/amazon-blew-1-8-million-143000231.html)
**Source(s):** Exa (failure intent) · Financial Times (Jul 31)
**Relevance 5 · Deep-cut 3 · Breakout 4 — spike** · `[incident/named-case]`
Per FT, employees were briefed on a project that spent $1.8m using Claude Sonnet to align
author details with shopping listings — an 860% cost overrun that went undetected for five
months. Amazon says it was one of a few isolated cases and that it has guardrails for
monitoring AI spend. Pairs directly with #4.
**Read:** [article](https://finance.yahoo.com/technology/ai/articles/amazon-blew-1-8-million-143000231.html)

### 4. SAP froze most travel and hiring, citing AI costs — [404 Media](https://www.404media.co/software-giant-sap-stops-most-travel-and-hiring-because-of-ais-soaring-cost/)
**Source(s):** Hacker News (102 pts, 69 comments) · 404 Media (Aug 9), from an internal email
**Relevance 4 · Deep-cut 4 · Breakout 4 — spike** · `[incident/named-case]`
An internal SAP email obtained by 404 Media shows most travel and hiring suspended, with
exceptions only for AI-related travel and AI hires. SAP's line is that it needs to "be
disciplined in how we spend." An employee notes a new company-wide AI tool is rolling out
at the same time. No cost figures given.
**Read:** [404 Media](https://www.404media.co/software-giant-sap-stops-most-travel-and-hiring-because-of-ais-soaring-cost/) · [HN thread](https://news.ycombinator.com/item?id=49229412)

### 5. Human reviewers missed 1 in 3 threats when approving AI agent commands — [Scale X](https://scalex.dev/blog/ai-agent-permissions-stats/)
**Source(s):** Hacker News (338 pts, 245 comments)
**Relevance 4 · Deep-cut 5 · Breakout 4 — baseline+** · `[framework/analysis]`
409,000 approve/deny decisions across 40,000+ sessions of a browser game where players
review an AI coding agent's commands. Mean accuracy 66.3%; only 20.8% of players caught
every threat. Misses were worst on scope violations (35.0%) and exfiltration (33.4%), and
rose toward the end of a session. It is a game, not a workplace, but it is the closest
public measurement of whether "human in the loop" is doing anything.
**Read:** [writeup](https://scalex.dev/blog/ai-agent-permissions-stats/) · [HN thread](https://news.ycombinator.com/item?id=49195468)

### 6. Bajaj Finance says bots handle 71% of self-service, and cut its agent target from 800 to 600 — [Medianama](https://www.medianama.com/2026/08/223-bajaj-finances-71-customer-service-2500-crores-disbursements/)
**Source(s):** Exa (earnings intent) · Medianama · ET BFSI
**Relevance 5 · Deep-cut 4 · Breakout 2 — baseline** · `[named-case]`
On the Q1 FY27 call the lender said voice and text bots handle 71% of DIY service queries
and drove Rs 2,500 crore in disbursements, with AI credited for Rs 517 crore in
incremental disbursements. Separately, in the Q4 FY26 call it trimmed its FY27 autonomous
agent target from 800 to 600. A company reporting both a number and a walked-back target
in the same year is rare on the record.
**Read:** [Q1 FY27 call coverage](https://www.medianama.com/2026/08/223-bajaj-finances-71-customer-service-2500-crores-disbursements/) · [target cut](https://www.medianama.com/2026/05/223-q4fy26-bajaj-finance-autonomous-agent-target-800-600-fy27/) · [ET BFSI](https://bfsi.economictimes.indiatimes.com/articles/bajaj-finance-boosts-ai-workforce-to-400-after-rs-517-crore-loan-disbursement-success/132747419)

### 7. Travelers on how it measures ROI for its own in-house LLM — [Digital Insurance](https://www.dig-in.com/news/how-travelers-measures-roi-for-its-in-house-llm)
**Source(s):** Exa (insurer workflow intent), Jul 21
**Relevance 5 · Deep-cut 4 · Breakout 2 — baseline** · `[framework/analysis]`
CTOO Mojgan Lefebvre says TravelersLLM is faster and cheaper than frontier models on
insurance-specific tasks, and that the company deliberately does not measure ROI as model
cost — it measures decision quality, speed to institutional knowledge, and consistency.
Tens of thousands of employees, millions of interactions. A named insurer explaining the
measurement problem rather than announcing a number.
**Read:** [article](https://www.dig-in.com/news/how-travelers-measures-roi-for-its-in-house-llm)

### 8. Investors are now suing over AI spending claims — [The D&O Diary](https://www.dandodiary.com/2026/08/articles/artificial-intelligence/another-ai-spending-related-securities-class-action/)
**Source(s):** Exa (first-of-kind + governance intents) · Bloomberg Law · San Antonio Business Journal
**Relevance 4 · Deep-cut 4 · Breakout 4 — spike** · `[first-of-kind]`
A securities class action was filed against Rackspace on Aug 4 alleging it misled
investors about how its AI investments were performing, following a similar suit against
ZoomInfo in June. The D&O Diary is tracking this as a distinct and growing category: not
suits about AI harm, but about what companies claimed AI would do for them.
**Read:** [D&O Diary, Aug 5](https://www.dandodiary.com/2026/08/articles/artificial-intelligence/another-ai-spending-related-securities-class-action/) · [Rackspace suit](https://www.bizjournals.com/sanantonio/news/2026/08/04/rackspace-investor-lawsuit-ai-disclosures.html) · [earlier analysis](https://www.dandodiary.com/2026/07/articles/artificial-intelligence/ai-related-securities-litigation-continues-to-evolve/)

### 9. Document-borne AI worms can self-propagate through Copilot for Word — [Enklype Salt](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/)
**Source(s):** Hacker News (384 pts, 300 comments)
**Relevance 4 · Deep-cut 5 · Breakout 3 — baseline** · `[framework/analysis]`
A technical writeup showing prompt-injection payloads carried inside Word documents that
spread as Copilot processes and produces further documents. Relevant because Copilot for
Word is the single most widely deployed AI surface inside ordinary companies, and the
attack path is a shared drive rather than an API.
**Read:** [writeup](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/) · [HN thread](https://news.ycombinator.com/item?id=49096188)

### 10. Danish wholesaler Lemvigh-Müller is handing 100,000 manual order confirmations to agents — [SAP News](https://news.sap.com/2026/06/lemvigh-muller-ai-agents-order-confirmations/)
**Source(s):** Exa (process-integration intent) · SAP News (Jun 26 and a follow-up Aug 11)
**Relevance 5 · Deep-cut 4 · Breakout 2 — baseline** · `[named-case]`
A steel and technical-goods wholesaler putting agents on order confirmation and document
processing in an existing procurement workflow. Vendor-published, so treat the numbers as
vendor-reported, but the company and the workflow are concrete. Kloeckner (steel
distribution, founded 1906) has a near-identical [PO confirmation
case](https://www.generalmind.com/case-studies/kloeckner) — two of the same story in the
same industry is the interesting part.
**Read:** [SAP News, June](https://news.sap.com/2026/06/lemvigh-muller-ai-agents-order-confirmations/) · [SAP News, Aug 11](https://news.sap.com/2026/08/ai-automating-document-processing-lemvigh-muller/)

### 11. W. R. Berkley told analysts AI is worth 20%+ underwriting efficiency — [Reinsurance News](https://www.reinsurancene.ws/w-r-berkley-sees-20-underwriting-efficiency-gains-from-ai-ceo/)
**Source(s):** Exa (back-office + earnings intents) · Seeking Alpha Q2 2026 call
**Relevance 5 · Deep-cut 3 · Breakout 2 — baseline** · `[named-case]`
CEO Rob Berkley put a figure on AI underwriting gains on the Q2 call and tied it to a
target expense ratio of 30% or better. Said to investors, under securities liability,
which makes it a firmer number than a press release.
**Read:** [Reinsurance News](https://www.reinsurancene.ws/w-r-berkley-sees-20-underwriting-efficiency-gains-from-ai-ceo/) · [Seeking Alpha call notes](https://seekingalpha.com/news/4615649-berkley-outlines-20-percent-underwriting-efficiency-gains-from-ai-tools-as-it-targets-expense)

### 12. When AI writes the number, who has a reasonable basis to certify it? — [Corporate Compliance Insights](https://www.corporatecomplianceinsights.com/when-ai-writes-numbers-who-has-reasonable-basis-certify-it/)
**Source(s):** Exa (governance intent), Jul 27
**Relevance 4 · Deep-cut 4 · Breakout 3 — baseline** · `[framework/analysis]`
On the CFO signature problem: officers certify financial statements personally, and AI is
now inside the pipeline that produces the figures. Companion pieces this month: India's
NFRA issued [its first tech guidance warning
auditors](https://www.financialexpress.com/business/news/nfras-first-tech-guidance-warns-auditors-of-ai-risks/4301803/) about AI risks, and the UK Jurisdiction Taskforce published its
[final legal statement on liability for AI harms](https://www.mills-reeve.com/publications/futureproof-ukjt-issues-final-legal-statement-on-liability-for-ai-harms/) (Aug 3).
**Read:** [CCI piece](https://www.corporatecomplianceinsights.com/when-ai-writes-numbers-who-has-reasonable-basis-certify-it/)

## Watch / wildcards

- **Georgia-Pacific used AI to stabilise recausticizing, a centuries-old pulp process** — manufacturing process control rather than document work, and a rare non-document AI deployment in heavy industry. Vendor-published (SAS). [link](https://blogs.sas.com/content/sascom/2026/05/18/georgia-pacific-sas-recausticizing/)
- **Fynd says it saved ₹13 crore a year replacing enterprise monitoring tools** — a large, specific SaaS-replacement number from a retail-tech company, self-reported. [link](https://www.fynd.com/en-gb/blog/why-fynd-stopped-renting-part-of-our-engineering-atack)
- **Ford rehired human engineers after AI failed to match quality checks** (BBC, Jun 29) — named manufacturer, clean reversal, but six weeks old and the wave has passed. [link](https://www.bbc.com/news/articles/cgrkd41n2v9o)
- **Aetna's gen AI reviews millions of medical records** (CIO, Jul 29) — healthcare back office at scale; thin on what broke. [link](https://www.cio.com/article/4202752/how-gen-ai-helps-aetna-review-millions-of-medical-records.html)
- **AWS billing thread: an Amazon forecast of $3bn** — an Ask HN with 206 points and one comment, unverified, but the same shape as #3. [link](https://news.ycombinator.com/item?id=48945681)

## Skipped but notable

- **Starbucks scrapping its "Automated Counting" AI inventory tool** — surfaced in a previous run and already in `seen.txt`; still the best failure case of the quarter if we want to revisit it with the new NomadGo "blindsided" reporting.
- **The first shadow-AI SEC 8-K (CB Financial)** — already covered in a previous run.
- **Klarna's customer-service reversal** — covered everywhere for two years; nothing new this cycle.
- **Meta Muse Glimmer, Qwen3.8 Max, Docker Sandboxes** — model and dev-tool launches, off-beat for us.
- **Microsoft's Claude Code retreat** (May) — developer-tooling story, and stale.
