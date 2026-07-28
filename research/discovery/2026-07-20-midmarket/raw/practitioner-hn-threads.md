# RAW: Hacker News — full comment threads (HN Firebase/Algolia items)
Fetched: 2026-07-20

======================================================
## HN ITEM 47436526 — https://news.ycombinator.com/item?id=47436526
TITLE: Ask HN: Have you cancelled any software subscriptions because AI replaced them? | URL: None | by maxim_bg | 2026-03-19T08:43:50.000Z
TEXT: I went through all my subscriptions recently and haven't cancelled a single one because of AI - neither has my girlfriend.I built some small tools and browser extensions for myself that I use daily. But honestly, I wouldn't have paid for those anyway — maybe a one-time small purchase, but never a subscription.Curious if others had a different experience. Did you cancel something because chat with LLMs replaced it? Or did you build your own thing and make a paid tool redundant?

  [tsukiaki] grammarly

    [chistev] Are they still in business? They merged with Duolingo, right?

      [dormento] Duolingo is going to teach people wrong so they have to use Grammarly :P

    [Eawrig05] What about the inpalce corrections when you are typing or do you just copy and paste into a chat?

      [nsnzjznzbx] Not having that is a feature IMO. At work I wrote an .md and asked Rovo (similar to Claude Code) to check it.In similar news I'll probably stop the tab suggestions in GH Copilot now and just agent all the things.

  [loveparade] There are a few personal scripts I replaced with an LLM prompt/skill. Can't really think of any subscriptions though.

  [tmatsuzaki] We replaced our CRM with an in-house solution. Since our main use case was simply sending emails to lists, it made more sense for us to manage those lists in Google Sheets and build an LLM-powered workflow for email outreach and nurturing.

  [_pdp_] Yep. We've canceled some software we could build internally. But biggest win was deploying our own agents to help with the business. So in general, we spend more more money - not less.

    [xcubic] > But biggest win was deploying our own agents to help with the business.Can you tell us more?

  [wmeredith] Grammarly and Squarespace. I have a Gost Pro newsletter I am replacing next with my own custom solution.

  [sky2224] Chegg is a service many students used to get guidance and answers to homework problems for whatever courses they were taking. It was a sinking ship once GPT 4 came out, but GPT 5 was really it's final nail in the coffin.I don't know any student that really uses it now.

  [DarrenDev] Canva - I used it for simple designs but ChatGPT is betterGrammarly - ChatGPT and Claude are way better, and much more customizable. If I were a human editor I'd be very worried.On the flip side, using ChatGPT for diagrams made me pay for Mermaid. It might only be a one year subscription.

    [treetalker] > If I were a human editor I'd be very worried.Proofreaders, perhaps. But spellcheckers are superior, free, battle-tested, and ubiquitous anyway, yet people still can't be troubled to use them. As proof, behold comments on any given HN post.True, LLMs can convert style — but so far I've found that the edits always pick up an LLM smell.My pet hypothesis is that genuine upper-echelon writing, editing, and taste-making will become even more valuable than before.

    [dominotw] what does it mean to pay for mermaid

======================================================
## HN ITEM 48803546 — https://news.ycombinator.com/item?id=48803546
TITLE: Ask HN: What internal tools/SASS replacements are you building? | URL: None | by kostarelo | 2026-07-06T12:10:27.000Z
TEXT: I hear more and more from people in companies of all sorts, are building internal tools/replacements of SaSS businesses.We built an automated QA agent based on Playwright, that does QA on our own products, literally in a week and we continue to contribute to it. Our QA engineers love it.What sort of things/products are you building?

  [salvesefu] What are the stats around internal tool building in the last 2-3 years? rates of adoption? are internal users satisfied?

======================================================
## HN ITEM 46922432 — https://news.ycombinator.com/item?id=46922432
TITLE: Ask HN: Have AI companies replaced their own SaaS usage with agents? | URL: None | by tuxpenguine | 2026-02-07T09:05:05.000Z
TEXT: With all the SaaSmageddon going on, I am wondering if companies like Anthropic and OpenAI reduced their SaaS usage and developed their own agents to do the work?

======================================================
## HN ITEM 46937877 — https://news.ycombinator.com/item?id=46937877
TITLE: Ask HN: How do you maintain integrations once they're in production? | URL: None | by ksvmkoundinya | 2026-02-08T19:54:09.000Z
TEXT: Hi HN — I’m exploring a product idea around integration reliability and would really appreciate feedback.Many modern products depend on integrations across payments, analytics, messaging, auth, and cloud workflows. Setting these up is usually manageable, but maintaining them as systems evolve often becomes a hidden operational burden.I’m experimenting with building *VibeInfra*, a platform focused on:• One-click integration setup
• Automated workflow and business-logic testing
• Continuous monitoring for silent failures
• Ongoing maintenance when APIs, schemas, or workflows changeThe motivation came from repeatedly seeing issues like:• Billing systems and product entitlements drifting out of sync
• Analytics and attribution pipelines degrading over time
• Webhooks or event pipelines failing without immediate visibility
• Customer lifecycle messaging triggering incorrectly
• Different services disagreeing on core business state (orders, subscriptions, users)The goal is to treat integrations more like infrastructure that needs reliability guarantees rather than one-time connections.I’m trying to validate a few assumptions:• Are integrations a recurring maintenance burden for your team?
• What types of integration failures cause the most business impact?
• How do you currently test or monitor integration correctness?
• Would you consider outsourcing integration reliability if it worked well?I’d really value any thoughts, skepticism, or pointers to existing solutions I should study.

  [ksvmkoundinya] I am building vibeinfra.live

  [rawgabbit] Are integrations a recurring maintenance burden for your team?. YesWhat types of integration failures cause the most business impact? These involve money. Paying vendors or asking to be paid. It is usually an upstream system sent a code or format that was not agreed upon.How do you currently test or monitor integration correctness Manually. Business teams run reports daily. When they can’t fix or it is more than a few they escalate to IT.Would you consider outsourcing integration reliability if it worked well?. No, because it involves money.

    [ksvmkoundinya] If we are able to automate this accurately, is that something that will be valuable ? I understand lot of dev,sre,analyst bandwidth goes into this maintenance and monitoring tasks and we want to automate that so that crucial bandwidth is freed.

      [rawgabbit] Yes. Most definitely.

  [XCSme] Maintaining integrations in production can definitely become a hidden burden. Even simple analytics or attribution pipelines can silently fail if APIs or schemas change and that often only shows up when metrics look off. One approach that helps is self-hosting critical components like analytics [0]. You get local session and behavior data you can trust without depending on external services.[0] https://www.uxwizz.com

======================================================
## HN ITEM 48876134 — https://news.ycombinator.com/item?id=48876134
TITLE: Why we stopped using an automated SRE agent | URL: https://blog.neatcontext.com/operations/2026/07/12/why-we-stopped-using-an-automated-sre-agent/ | by tanglearncode | 2026-07-11T21:40:31.000Z
TEXT: 

  [tanglearncode] Some lessons learned when using the SRE agents to handle incidents. We eventually ended up to a semi automation way to get more accurate LLM results by providing domain knowledge and context to LLM. Wondering if you encountered the similar inaccurate or sometimes nonsense response from SRE agents. How would you solve it?

  [syntax-sailor] It's about the hardest agentic problem that has measurable results and will be adopted (because it's an engineering culture) that I can think of. RunWare have some good insights on this - much of the problem is context layer improvisation and repetition, and the only way out is an awful lot of diagnostic development.And anything less than 90% accuracy on causal analysis is more work than doing everything by hand.

    [tanglearncode] Yeah the context is the key to make the LLM really useful for oncall. But honestly the SRE agent companies today are trying to keep users in their platforms, not focusing on solving the context problem. That's what I saw.

======================================================
## HN ITEM 46890962 — https://news.ycombinator.com/item?id=46890962
TITLE: So We Built Our Own Agentic Developer | URL: https://builders.fullscript.com/posts/lessons-learned-from-building-nitro-fullscripts-autonomous-background-agent?v=1 | by ncrum | 2026-02-04T20:10:55.000Z
TEXT: 

======================================================
## HN ITEM 47298161 — https://news.ycombinator.com/item?id=47298161
TITLE: I replaced my freelance SaaS stack with 5 single-file HTML tools | URL: None | by AnnSri | 2026-03-08T15:35:07.000Z
TEXT: I noticed that as a freelancer I was paying several SaaS subscriptions just to handle simple tasks like invoices, proposals, contracts, and project tracking.None of those workflows seemed complex enough to justify full SaaS platforms, so I started experimenting with local-first tools instead.I ended up building five standalone HTML apps that run directly in the browser. No frameworks, no installation, and no accounts. Just open the file and use it.The tools cover invoices, proposals, contracts, expenses, and project roadmaps. Everything runs locally and data stays on the machine.Curious what others here think about local-first tools for this kind of workflow

  [ipaddr] It's a normal thing to do.

  [shoo] you can get pretty far without programming at all, using spreadsheet templates

    [AnnSri] True — and for a lot of people spreadsheets are perfectly fine. GoldFrame is for freelancers who want something that looks client-ready out of the box without formatting work

  [anonymous541908] Can you share the source code?

    [AnnSri] The free version is on GitHub — Five standalone HTML files, no dependencies, works offline. Paid version removes the watermark via license key.https://github.com/annsriai1986/goldframe-agency-suite

  [lurn_mor] I blogged about the shift to 'local only' web apps that seem to be proliferating: http://www.undr.com/understatement/2026/feb13_web_apps_work_...With a future of ChromeOS Flex running on millions of older hardware, the browser is the new 'App Store'....and congrats on reducing your dependency on third party tools!

    [AnnSri] Exactly this — the browser is the most universal runtime we have. No install, no update prompts, just open and use. The ChromeOS Flex angle is interesting too, hadn't thought about that audience

======================================================
## HN ITEM 44800166 — https://news.ycombinator.com/item?id=44800166
TITLE: 10 years building internal tools, and the SaaS stack is still a nightmare | URL: None | by seyz | 2025-08-05T16:26:45.000Z
TEXT: Over the last 10 years, I founded Forest Admin and operated as CEO.We built a SaaS used by hundreds of companies (sometimes with thousands of employees per account) to manage their internal operations.We ate our own dog food from day one. If anyone was supposed to get this right, it was us. And yet… our SaaS stack ended up being a mess.We had a powerful admin panel from day one. But around it? Chaos.Each team had their own tools:- Sales lived in HubSpot- Support used Intercom- Docs were spread across Google Drive, Notion, and Slite- Comms happened in Slack, of course- BI ran on Metabase connected to a fragile warehouse- Automation was duct-taped with n8n- Data modeling happened in dbt, pulling from a dozen disconnected SaaS toolsBut context was scattered. Workflows broke easily. APIs failed silently. Engineers debugged glue instead of shipping. The SaaS bill was huge. Onboarding/Offboarding took hours. Invoices reconciliation too. We used dozens of tools. Many forgotten, none truly integrated.You can’t scale on a stack you don’t control. Even with the best internal tooling, if the foundation is fragmented, it will break.At some point, engineers lost control of the stack. And I think it’s time to get it back and rebuild systems that are coherent by design.So I’ve decided to go back to first principles. I’m bootstrapping a new company to rethink how the SaaS stack should be architected from the ground up. Not patched, rebuilt. A rethink of the foundation itself.If you’ve hit the same wall. Too many tools, not enough truth. I’d love to hear how you approached it.
Where did you start? What tradeoffs did you make? And what would you do differently, if you had to rebuild your internal stack from scratch? What should a modern foundation for SaaS systems look like?

  [pambrus] What I see now are the waehouse-first tools, where the data is stored in the warheouse, and any other analytics or cdp run on top of it

======================================================
## HN ITEM 48568221 — https://news.ycombinator.com/item?id=48568221
TITLE: AI Made Internal Tools Easy to Build. Keeping Them Alive Is the Hard Part | URL: https://www.dforge.io/blog/internal-tools-built-to-last | by andreypt | 2026-06-17T10:20:50.000Z
TEXT: 

======================================================
## HN ITEM 47253299 — https://news.ycombinator.com/item?id=47253299
TITLE: We replaced $100K/year in SaaS with a custom build in 15 days | URL: https://www.youtube.com/watch?v=CBaP02CS7ok | by htuzel | 2026-03-04T20:25:31.000Z
TEXT: 

======================================================
## HN ITEM 46360038 — https://news.ycombinator.com/item?id=46360038
TITLE: My 6-Month Retrospective: Using AI Coding Assistants for Database Infrastructure | URL: https://mazhar.bearblog.dev/ai-coding-retrospective/ | by maznaq | 2025-12-22T22:40:55.000Z
TEXT: 

======================================================
## HN ITEM 47139978 — https://news.ycombinator.com/item?id=47139978
TITLE: I built a governance layer for multi-agent AI coding – lessons after 6 months | URL: None | by vincentvandeth | 2026-02-24T17:35:57.000Z
TEXT: Six months ago I started coordinating multiple AI coding agents (Claude Code, Codex CLI, Gemini CLI) across parallel terminals for a production project. The agents were productive, but I had no idea what they were actually deciding or why.The problem wasn't capability — it was accountability. An agent would make a choice buried in a 50-file commit, and I'd only find out weeks later when something broke. No trace of which agent did what, when, or based on what context.So I built a governance layer on top. The core idea: every agent decision gets recorded in an append-only receipt ledger (NDJSON). Each receipt links a specific agent action to a git commit, a dispatch ID, and a quality verdict. The orchestrator (T0) reviews receipts and decides what happens next — approve, hold, or redispatch.Some things I learned:
1. Sub-agents are a black box. I never use them. When a bug surfaces, you can't trace which agent's context was polluted. Instead, I run independent agents in separate terminals with their own context windows, reporting back to T0.
2. Quality gates need to be deterministic, not LLM-based. An automated advisory checks every completion against pre-registered rules (file size limits, test coverage, open blockers). The LLM proposes, the gate validates. No vibes.
3. Context rotation is unsolved by the ecosystem. When an agent fills its context window mid-task, most workflows just fail. I built an automated rotation pipeline using Claude Code hooks — detects context usage, writes a structured handover, clears the window, and resumes. Zero human intervention.
4. The receipt ledger is the most valuable artifact. After 1100+ entries, patterns emerge: which types of tasks fail, which agents struggle with what, where context pollution happens. That data feeds back into dispatch planning.
5. Terminal locking prevents chaos. Each terminal can only work on one dispatch at a time. Sounds obvious, but without it you get overlapping work, merge conflicts, and agents overwriting each other's changes.The system runs across 4 tmux panes (T0 orchestrator + 3 worker tracks), supports multiple AI providers, and everything is filesystem-based — no database, no cloud dependency. Open-sourced it recently.Happy to answer questions about the architecture or specific failure modes.
