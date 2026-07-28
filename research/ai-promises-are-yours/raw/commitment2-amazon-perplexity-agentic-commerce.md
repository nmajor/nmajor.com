# RAW — Amazon.com Services LLC v. Perplexity AI (Comet): the first agentic-commerce court fight

Fetched: 2026-07-20. Unedited excerpts with source URLs.

Case: Amazon.com Services LLC v. Perplexity AI, Inc., N.D. Cal.
Judge: Senior U.S. District Judge Maxine M. Chesney.
Filed: November 2025. PI granted 9 March 2026. Ninth Circuit stayed it 16 March 2026.
Oral argument on appeal: 11 June 2026. No ruling as of 2026-07-20.

*** NOT a "company disclaims its own AI's commitment" case. This is a platform-vs-agent
access fight. Included because it is the leading 2026 decision on whether a user's
authorisation of an agent binds the merchant. ***

---

## Source 1: Jones Day (cleanest legal summary)
URL: https://www.jonesday.com/en/insights/2026/05/authorized-by-the-user-blocked-by-the-platform-testing-the-legal-limits-of-ai-agents
Title: "Authorized by the User, Blocked by the Platform: Testing the Legal Limits of AI Agents"
Dated: 19 May 2026.

> Under the Computer Fraud and Abuse Act (CFAA), it is unlawful to obtain information by intentionally accessing a protected computer system without authorization or in excess of authorized access. In Facebook, Inc. v. Power Ventures, Inc., 844 F.3d 1058 (9th Cir. 2016), the Ninth Circuit held that a platform operator may revoke a third party's access to its systems—even where users voluntarily shared their credentials—and that continued access after a cease-and-desist letter constitutes unauthorized access under the CFAA. Until now, no court had applied this framework to AI agents.

> In November 2025, Amazon sued Perplexity AI, alleging that Perplexity's Comet application accessed Amazon's protected computer systems without authorization in violation of the CFAA and California's equivalent statute. Comet is an "agentic AI" browser that interacts with Amazon.com on behalf of users—logging into accounts, viewing products and initiating purchases. Amazon alleged Perplexity disguised Comet as a human user to evade technological barriers, and sought injunctive relief. Perplexity responded that the suit was Amazon's attempt to suppress a competing AI product that undermines Amazon's advertising and upselling practices.

> On March 9, 2026, relying on Power Ventures, Judge Maxine M. Chesney granted Amazon's motion for preliminary injunction, finding "strong evidence" that Perplexity violated the CFAA and California's equivalent statute by accessing Amazon's systems without authorization after Amazon issued a cease-and-desist letter and transmitting private user data to Perplexity's servers. Judge Chesney enjoined Perplexity from using AI agents to access Amazon's systems or creating or using Amazon accounts for that purpose, and ordered Perplexity to destroy all Amazon data obtained by its AI agents. Perplexity appealed and the Ninth Circuit stayed the injunction pending resolution of the appeal.

---

## Source 2: CNBC
URL: https://www.cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html
Dated: 10 March 2026.

> In a ruling dated Monday, U.S. District Judge Maxine Chesney wrote that Amazon has provided "strong evidence" that Perplexity's Comet browser accessed its website at the user's direction, but "without authorization" from the e-commerce giant.
> Chesney said Amazon submitted "essentially undisputed evidence" that it spent more than $5,000 to respond to the issue, including "numerous hours" where its employees worked to develop tools to block Comet from accessing its private customer tools and to prevent the tool from "future unauthorized access."
> "Given such evidence, the Court finds Amazon has shown a likelihood of success on the merits of its claim," Chesney wrote.
> Amazon sued Perplexity in November, alleging the startup took steps to "conceal" its AI agents so they could continue to scrape the online retailer's website without its approval. Perplexity called the lawsuit, which was filed in U.S. District Court in the Northern District of California, a "bully tactic."

---

## Source 3: GeekWire (the key judicial distinction)
URL: https://www.geekwire.com/2026/judge-blocks-perplexitys-ai-bot-from-shopping-on-amazon-in-early-test-of-agentic-commerce
By Todd Bishop.

> A federal judge in San Francisco granted Amazon a preliminary injunction Monday blocking Perplexity from using its Comet browser's AI agent to access password-protected sections of the Amazon website to shop on behalf of customers.
> It's an early legal milestone in the fast-moving field of agentic commerce, in which AI assistants browse, compare and buy products on behalf of consumers. The case highlights a fundamental question: who controls access when an AI agent shows up at a retailer's digital front door?

*** THE MONEY QUOTE: ***
> The judge drew a key distinction, finding that Comet accesses Amazon accounts "with the Amazon user's permission, but without authorization by Amazon."

> Amazon CEO Andy Jassy has acknowledged that agentic commerce "has a chance to be really good for e-commerce" but said agents aren't good enough yet at personalization and pricing accuracy. Amazon has its own AI shopping tools, including Rufus and Buy For Me.

---

## Source 4: Courthouse News (the appeal)
URL: https://www.courthousenews.com/perplexity-ai-asks-ninth-circuit-to-allow-shopping-tool-on-amazon

> The appeal comes after Senior U.S. District Judge Maxine Chesney of San Francisco ruled in March that Amazon is likely to succeed on the merits of its claim that Perplexity's Comet application violates the federal Computer Fraud and Abuse Act and California's Comprehensive Computer Data Access and Fraud Act. Chesney granted a preliminary injunction.
> "Amazon has provided strong evidence that Perplexity, through its Comet browser, accesses with the Amazon user's permission, but without authorization by Amazon, the user's password-protected account, thereby obtaining information as to the user's private Amazon account information," the Bill Clinton appointee wrote. "That such information is transmitted to Perplexity's servers for the purpose of conducting said user's requested tasks."
> Amazon sued Perplexity in November. The AI search company was valued at $21 billion as of early 2026.
> Amazon says automated AI agents such as Comet that access its online store and private account information on behalf of customers must transparently identify themselves.
> Michel argued that Perplexity is not hacking Amazon's systems and that using Comet is akin to a customer accessing Amazon through Safari or Chrome.
> "All of the intent to access Amazon is coming from the user," Michel said.

---

## Source 5: Decrypt (the terms-of-service change)
URL: https://decrypt.co/360629/amazon-perplexity-comet-court-order-agentic-commerce
Dated: 10 March 2026.

> Amazon updated its Business Solutions Agreement, effective March 4, 2026, formally requiring all AI agents to identify themselves when accessing its services.
> If the injunction stands, it may set an early precedent: platforms can refuse access to AI agents even when users have explicitly authorized it.
> How the Computer Fraud and Abuse Act applies to agentic software acting on a human's behalf has never been tested at trial. That question is now squarely before the court.

---

## Source 6: nohacks.co (secondary blog — treat with caution, but has the appeal detail)
URL: https://nohacks.co/blog/amazon-perplexity-cfaa-agent-visitor-rights
Updated 13 June 2026.

> On March 10, 2026, US District Judge Maxine Chesney granted Amazon a preliminary injunction. The order blocked Comet from accessing password-protected portions of Amazon.com, including account pages, order history, and checkout. The judge accepted Amazon's CFAA theory at the preliminary-injunction stage, finding that Amazon's terms of service govern who is authorized to access logged-in areas and that a user's instruction to an agent does not extend that authorization to the agent itself. Public-facing Amazon pages remained accessible to Comet under the order.
> Oral arguments were heard June 11, 2026, and the court has not yet ruled.

---

## CONFLICTING DATES — RESOLVE BEFORE PUBLISHING
- CNBC, GeekWire, Jones Day, Courthouse News: PI ruling dated **March 9, 2026** (reported March 10).
- Decrypt and nohacks.co say March 10.
- novadata.io (an SEO-ish vendor blog, LOW TRUST) claims the case was filed in W.D. Washington
  in Feb 2026 and that a TRO issued. This CONTRADICTS Jones Day, CNBC and Courthouse News,
  which all say N.D. Cal., filed November 2025, preliminary injunction (not TRO).
  **Disregard novadata.io.**
- Use: filed November 2025, N.D. Cal., PI granted March 9 2026, 9th Cir. stay March 16 2026.
