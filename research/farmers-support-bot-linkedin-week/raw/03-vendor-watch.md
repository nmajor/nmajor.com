# Vendor-watch findings: internal search and support assistants

Captured 2026-09-22 for the Farmers support-bot LinkedIn week. These are the full findings and pitches returned by the vendor-watch journalist. They are research notes, not post drafts.

## Assignment frame

- Look for current or recent named-company internal search, RAG, and support-assistant launches or case studies.
- Prefer first-party company and vendor pages with a concrete population, time window, usage count, or operational result.
- Treat vendor customer stories as claims, not independent validation.
- Keep the limitations attached to the numbers.

## Supplied context reviewed

- Approved essay: `app/src/content/essays/farmers-built-a-support-bot.md`
- Comparable-deployment report: `research/farmers-insurance-ai/comparables-report.md`
- Fresh last30days output: `research/farmers-insurance-ai/raw/last30days/enterprise-ai-search-assistants-business-impact-raw-v3.md`

The last30days run returned 112 items across nine sources, but its highest-ranked recent items were mostly generic commentary, vendor explanations, or unrelated enterprise AI material. The closest current signals were a Box interview about unstructured data and generic claims that fragmented company knowledge constrains AI. Neither supplied a named deployment with a reproducible outcome. I did not turn that material into a pitch.

## Source findings

### LegalZoom and Glean

Primary source: https://www.glean.com/resources/customer-stories/legalzoom

The Glean customer story says LegalZoom replaced an internal intranet that had less than 10% adoption. Glean became its enterprise search layer and reportedly reached a sustained 70% to 90% monthly active-user rate. The page also reports two to four hours saved per user each month and a 30% improvement in internal support-ticket resolution time.

LegalZoom also built an "Ask People Team" agent in Slack for travel-and-expense, stock-administration, and other employee questions. Glean says it logged thousands of runs from hundreds of users within a few months and sends a question to a human ticket only when needed. A performance-review agent became LegalZoom's most-used agent.

The numbers are unusually relevant to the Farmers story because they separate adoption, employee search time, support-ticket handling, and agent usage. They are still thinly documented. The page gives no employee denominator, observation period for the 70% to 90% adoption rate, query-level accuracy, ticket count, escalation rate, baseline resolution time, or method behind the two-to-four-hour estimate. It also mixes enterprise search with slide generation, performance reviews, coding, and other agent workflows.

There is a wording problem in the final section. It says the People team is pushing its "self-service deflection rate down, from a 30% reduction today toward a near-term goal of under 20%, with zero as the target." A lower deflection rate is normally worse. The sentence may mean unresolved or escalated requests, but the page does not define the metric. Do not repeat this claim without clarification.

The page has no visible publication date. It was present in Glean's current customer-story index and was crawled in September 2026, but crawl recency does not establish publication recency. Phrase it as a current case study, not a launch from this week.

No LegalZoom-owned page corroborating these metrics appeared in focused search. The evidence is a vendor case study containing named LegalZoom executive quotes.

### SafetyCulture and Glean

Primary source: https://www.glean.com/resources/customer-stories/safetyculture

Glean says SafetyCulture's engineers had spent up to four hours a week searching for internal content. The deployment reportedly cut search time by 50% and saved more than 1.5 hours of search time per employee each week. More than 90% of Glean users reportedly recommended keeping it as a standard tool.

SafetyCulture then built agents for internal product questions, debugging, performance reviews, customer insight, and go-to-market support. The case study says a performance-review agent saves engineers 30 to 40 minutes per review. The page's overview separately says 20 minutes per engineer during review cycles, which does not match the body. A go-to-market and support agent answers product questions that previously waited on R&D.

This is a close product match for Farmers: scattered knowledge, one search layer, and support deflection. The measurement is not inspectable. The page gives no workforce size, active-user count, query volume, before-and-after sample, method for estimating 1.5 hours, or dates. The four-hours-to-50%-less arithmetic suggests up to two hours rather than the stated 1.5-plus average, which could be valid if the populations differ, but the source does not explain them.

Glean promoted the case on LinkedIn roughly three months before this capture, so it is recent but not a same-week peg: https://www.linkedin.com/posts/scottwible_how-safetyculture-uses-glean-to-scale-effectively-activity-7454507210048688128-0_aw

No SafetyCulture-owned page corroborating the deployment metrics appeared in focused search. The case study includes named SafetyCulture engineering leaders, but Glean published it.

### pladis and Microsoft 365 Copilot

Primary source, dated 2026-09-10: https://www.microsoft.com/en/customers/story/27237-pladis-global-microsoft-365-copilot

This is the freshest bounded company case found. Snack manufacturer pladis ran an eight-week "Steal Back 10 Hours" program around Microsoft 365 Copilot, Power Platform agents, training, office hours, AI champions, and governance. Seventy employees entered training. Forty-eight completed all masterclasses and the productivity tracker. Those 48 self-reported 580 hours saved per month, a little over 12 hours each. Microsoft also says a safety agent at the Carlisle factory saves an estimated 800 hours a year.

This is not a pure internal-search deployment. People used Copilot for drafting, document and meeting summaries, analysis, reports, and administration. Purpose-built agents handled safety risk assessment and procurement research. That broader scope makes it a useful comparison with Farmers' broad operational program, not with askfarmers.ai alone.

The source is admirably specific about the cohort and completion count, which exposes the main limitation. Results come from the 48 people who finished the training and tracker, not all 70 trainees and not pladis's roughly 16,000 employees. The hours are participant reports, not observed labor reduction. The 800-hour safety-agent figure is explicitly an estimate, and the page does not show the calculation, accuracy, review time, error rate, or financial result. Microsoft published the story and supplied the product and partner.

### Swiggy in Glean's assistant launch

Primary source, dated 2026-02-17: https://www.glean.com/press/gleans-latest-ai-assistant-moves-every-employee-from-insight-to-execution

Glean's launch release for its new Assistant quotes Swiggy's CTO saying the product delivers nearly two hours saved per employee per day across Swiggy's technology organization. The product combines internal search, analysis, generation, and actions across connected systems. Glean also says users engage with Assistant six times per active day on average, apparently across its customer base rather than Swiggy specifically.

The Swiggy number is large and has no denominator, time window, measurement method, adoption rate, or split between search, generation, and action. It appears as one testimonial in Glean's product announcement, not a Swiggy case study. It is a clean example of a vendor attaching a huge time claim to a broad assistant while withholding the calculation. It is weaker than the LegalZoom and pladis cases as a standalone story.

### Existing comparables not repitched

The supplied comparison report already covers Carlsberg, Orion Health, FletcherTech, IBM Ask SW Support, and ElasticGPT. Reusing one would add no fresh reporting to the week's pitch pool.

## Pitches

### Pitch 1: LegalZoom replaced its intranet. The adoption number is more useful than the hours-saved number.

Hook: LegalZoom's old intranet had less than 10% adoption. Its replacement claims 70% to 90% monthly use.

Story: LegalZoom replaced its internal intranet with Glean's enterprise search layer, then added a Slack support agent that has handled thousands of employee questions from hundreds of users. Glean reports two to four hours saved per user each month and 30% faster internal support-ticket resolution. The adoption jump is the cleaner signal because it says employees chose to use the thing; the time and ticket claims have no disclosed method, sample, or baseline. The page also bundles search with slides, performance reviews, coding, and other agents, so even this relatively bounded case resists a neat "the search bot saved X" conclusion.

Verified URL: https://www.glean.com/resources/customer-stories/legalzoom

Why now: It is a current Glean customer story featuring a support agent launched only a few months before the case-study account. The page has no publication date, so the honest peg is the current named deployment, not "announced this week."

Honest Nick angle: The best proof in an internal search rollout may be that employees keep opening it. LegalZoom's adoption figure is concrete enough to discuss. The productivity figures still come from the vendor and lack the arithmetic. Nick can credit the successful replacement without pretending its headline metrics are audited.

### Pitch 2: pladis published the denominator most AI case studies hide.

Hook: Seventy employees entered pladis's AI productivity program. The headline result comes from the 48 who finished the training and tracker.

Story: In a Microsoft case study published September 10, pladis says 48 program completers self-reported 580 hours saved each month using Copilot and Power Platform agents. The company did more than turn on software: it ran an eight-week program with masterclasses, office hours, champions, governance, and a delivery partner. The result covers drafting, summaries, analysis, admin work, and custom agents, so it cannot be read as the return from one assistant feature. Publishing the 70-person starting cohort and 48-person measured cohort makes the claim more useful, while also showing the selection effect most vendor stories leave out.

Verified URL: https://www.microsoft.com/en/customers/story/27237-pladis-global-microsoft-365-copilot

Why now: Microsoft published the case on 2026-09-10, twelve days before this capture.

Honest Nick angle: This is what a more inspectable AI savings claim looks like. It still rests on self-reporting and completers, but it names the program, period, starting cohort, measured cohort, and total. It also supports the Farmers point from the other direction: the operational wrapper around the tool is often where the work happened.

## Editorial recommendation

Pitch 1 is the closer thematic match and the better save-game post for AI operators. Pitch 2 has the stronger news peg and a sharper measurement story. If both advance, keep them distinct: LegalZoom is about adoption as evidence that a search replacement works; pladis is about what the denominator reveals in a broad productivity claim.
