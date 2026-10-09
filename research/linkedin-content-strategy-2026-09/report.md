# LinkedIn in 2026: a newsroom, not a content machine

## Decision

Nick's proposed model is directionally right and is more current than the workflow in the repo:

- publish five **candidate slots** a week, not five compulsory posts;
- make Tuesday's post the only one that must connect to the newsletter;
- publish it about one hour after the issue as an explicit timing test;
- source the other four from independent, current applied-AI stories about identifiable people or companies getting measurable value;
- automate research, evidence assembly, variants, QA, and scheduling;
- keep the judgment, final wording, approval, and conversation human.

Higher volume is not the point. The feed needs five different reasons to distribute Nick's work. The current skill still makes the essay's "general concept" the beat for the other four posts. That can produce five well-written versions of one semantic neighborhood. LinkedIn's new retrieval system understands post meaning and changing member interests far beyond keyword matching. A wider but coherent applied-AI newsroom creates more chances to match operators and leaders without abandoning the account's subject authority.

Five posts is a capacity target, not a finding from the research. No primary source establishes five as an optimum. If only four pitches survive, publish four.

## What actually changed

### 1. LinkedIn's feed now understands topics and trajectories more deeply

LinkedIn says its 2026 feed uses LLM-generated representations to retrieve content and a sequential transformer model to rank it. Candidate retrieval balances network content with suggested content from the wider Economic Graph. The system uses profile information, author information, post text and metadata, engagement counts, and a member's ordered engagement history. It can recommend an author the member has never followed when the post matches an evolving professional interest. It also refreshes post and member representations within minutes as interests and engagement change. [LinkedIn Engineering](https://www.linkedin.com/blog/engineering/feed/engineering-the-next-generation-of-linkedins-feed); local capture: `raw/linkedin-feed-engineering-2026.html`.

That is stronger evidence than the usual "interest graph" shorthand. The practical implications are:

- the account is not permanently trapped inside its developer network;
- the language and subject of each post matter alongside who already follows Nick;
- Nick's headline, company, industry, and profile are feed inputs, so positioning the profile for applied-AI operators is distribution work, not cosmetic work;
- recent reader behavior matters, making timely, semantically clear stories useful routes into adjacent audiences;
- popularity is an input, but LinkedIn does not publish creator-facing weights or a recipe for triggering expansion.

Do not turn this into the claim that "the algorithm rewards X by N times." LinkedIn exposes the architecture and broad signal classes, not a public weighting table.

### 2. Visible organic numbers are softer; that is not the same as proof of an account penalty

Metricool's commercially produced observational study analyzed 673,658 posts from 63,108 connected accounts in January-February 2025 and the same months in 2026. For **Company Pages**, its year-over-year averages showed impressions down 10%, likes down 13%, comments down 17%, and shares down 11%, while clicks rose 5% and its calculated engagement rose about 14%. It reports personal-profile and Page data elsewhere, but this year-over-year panel is Page data and should not be presented as proof that Nick's personal reach fell by the same amount. The sample excludes zero-impression and zero-interaction posts, retains outliers, and consists only of Metricool-connected accounts. [Metricool LinkedIn Study 2026](https://metricool.com/wp-content/uploads/Linkedin-Study-2026-EN.pdf); local capture: `raw/metricool-linkedin-study-2026.pdf`.

The safe conclusion is narrower: public reactions can fall while less visible activity persists. LinkedIn's own post analytics now gives creators impressions, in-network percentage, members reached, profile viewers, followers gained, reactions, comments, reposts, saves, sends, link visits, and viewer demographics such as title, company size, industry, and seniority. LinkedIn warns that these numbers are estimates. [LinkedIn post analytics](https://www.linkedin.com/help/linkedin/answer/a523040/); local capture: `raw/linkedin-post-analytics.html`.

This means "viral or dead" is the wrong scorecard. The weekly dashboard should include audience composition and profile/follower movement, not only impressions.

### 3. LinkedIn is explicitly suppressing low-value AI output, not banning AI assistance

LinkedIn defines AI slop as low-effort, likely AI-generated material that is polished but generic, repetitive, recycled, attention-gaming, or missing a clear point of view and substance. It explicitly says AI-assisted content is welcome when it reflects a real person's perspective, experience, or expertise. It recommends reviewing, editing, and approving AI-assisted work and disclosing heavy AI use when the context does not make it obvious. [LinkedIn AI-content guidance](https://www.linkedin.com/help/linkedin/answer/a1481496); local capture: `raw/linkedin-ai-content-best-practices.html`.

In September 2026 LinkedIn said:

- more than one million members used its "Seems like AI slop" feedback option in the first two weeks after its August rollout;
- its recent systems had reduced views of content classified as AI slop by 40%;
- it was using member feedback to inform classifiers and surfacing thresholded feedback privately in post analytics;
- it was replacing a rewrite-oriented post enhancer with proofreading and clarity tools intended to preserve voice;
- it was blocking hundreds of thousands of automated comment attempts daily and had blocked billions of automation attempts in recent months.

Those figures are LinkedIn's own internal claims; there is no disclosed audit, denominator, threshold, or split between member feedback and classifier action. They establish product direction, not an independent effect estimate. [LinkedIn News](https://news.linkedin.com/2026/how-linkedin-is-tackling-ai-slop); local capture: `raw/linkedin-ai-slop-official.html`.

Punctuation is not the policy. Em dashes, short lines, and neat triples are reader suspicion markers, not proof. The durable defense is evidence plus judgment. The existing `research/linkedin-ai-slop/report.md` gets this right: every post needs a contestable claim, a receipt near the top, Nick's judgment, uncertainty attached to the relevant claim, and no generic moral stapled to the end.

### 4. Automation is useful behind the post and dangerous around the reader

LinkedIn's automated-activity policy prohibits third-party software and browser extensions that scrape LinkedIn, modify its appearance, or automate activity on the website. [LinkedIn automated activity policy](https://www.linkedin.com/help/linkedin/answer/a1340567/automated-activity-on-linkedin); local capture: `raw/linkedin-automated-activity-policy.html`.

The line for this workflow should be bright:

| Automate | Keep human |
|---|---|
| source monitoring, raw capture, transcript extraction | the opinion Nick is willing to own |
| fact extraction and contradiction checks | selection of the five stories |
| pitch generation and deduplication | final edit and per-post approval |
| hook families and draft variants | replies, comments, DMs, and relationship-building |
| lint, provenance ledger, media rights checks | corrections and disagreements |
| scheduling through the existing authorized integration | any action performed as Nick inside LinkedIn |

The recent 30-day scan found practitioners advertising end-to-end content and comment automation, but the useful pattern was the more conservative one: AI drafts and checks, then a human reviews and a client approves before publication. The scan's examples are low-engagement anecdotes, not performance evidence. The stronger evidence for human review is LinkedIn's own guidance and enforcement posture. Local scan: `raw/linkedin-content-ai-automation-organic-reach-hooks-and-boosting-raw.md` and `raw/last30days-compact.md`.

## A better AI-assisted writing system

The system should not ask one model to "write a viral LinkedIn post in Nick's voice." That prompt collapses reporting, judgment, voice imitation, hook selection, and optimization into one pass. It predictably produces a smooth average of LinkedIn.

Use a staged contract instead.

### Stage A: evidence packet

Input only primary sources and credible reporting. Extract:

```text
STORY
Named subject:
What happened:
Date:
Operational setting:
Measured result:
What the metric actually measures:
Implementation detail:
What is not disclosed:
Primary-source URL:
Independent-source URL:
Exact claims that may be stated:
Claims that must not be stated:
```

The output is a reporting artifact, not prose. Every number carries its denominator, date range, and source class.

### Stage B: editorial brief

Ask for five possible judgments, each as one sentence Nick could disagree with. Score them for:

1. operator relevance;
2. novelty;
3. evidence strength;
4. "this could be my company" addressability;
5. whether the judgment adds something not already in the source.

Reject a pitch if the best claim is merely "AI is changing work." For non-newsletter slots, reject it if it repeats the Tuesday essay's thesis or another post in the last eight weeks.

### Stage C: audience translation

Create the story brief for one intended reader, not "LinkedIn":

```text
READER: COO, transformation lead, business-unit leader, or founder at a
50-500-person non-tech company.
THEIR DECISION: What decision does this story help them make?
BUSINESS STAKE: time, revenue, reliability, customer risk, workforce, or speed.
TECHNICAL DETAIL TO KEEP: the one mechanism needed to understand the result.
TECHNICAL DETAIL TO REMOVE: implementation detail that does not change the decision.
```

This is how the account moves beyond developers: change the decision the post helps with, not the intelligence of the writing.

### Stage D: hook families

Generate one hook in each relevant family, all grounded in the evidence packet:

- event first: "Rockwell put 30 years of plant-floor knowledge beside the machine."
- result first: named subject + measured outcome + constraint;
- implementation surprise: the mundane detail that made the system work;
- tension: two true facts that should not comfortably coexist;
- operator question: the concrete decision the story exposes.

Then choose one based on the post's reach game. A live, broadly addressable event can use event-first tension. A baseline operator post should lead with the useful result or mechanism. Do not generate confession, contrarian, or outrage hooks unless the source contains a real confession, defensible disagreement, or consequential harm.

The best available observational hook study does **not** establish a magic line. LinkPost analyzed 438,413 posts and 5.29 million comments, but only 1.9% of posts had impression data; 62% were French; authors opted into a commercial creator tool; and "viral" was mostly a proprietary engagement proxy. It found hooks in about 93% of all analyzed posts, so merely having one was not distinctive. Quantified proof and open loops were overrepresented in its top engagement cohort, but the study is non-causal and the publisher sells writing software. Use this to generate hypotheses, not formulae. [LinkPost study](https://www.linkpost.gg/en/playbooks/linkedin-algorithm-playbook-2026/study); local capture: `raw/linkpost-algorithm-study-2026.html`.

### Stage E: draft with a hard evidence contract

Use this prompt shape:

```text
Write one 100-180 word LinkedIn post for the specified reader.

You may use only the attached evidence packet. Make one claim. Put the named
subject, result, or strange implementation detail in the first two paragraphs.
State Nick's supplied judgment plainly. Keep every limitation beside the claim
it limits. Explain no more technical machinery than the reader needs to make
the business decision.

Do not invent firsthand access, a client relationship, dialogue, emotion,
numbers, or causation. Do not add a generic lesson, engagement bait, hashtags,
emoji structure, a forced list of three, or a symmetrical callback. Do not
imitate vulnerability. Stop when the observation is complete.

Return separately:
1. body;
2. claim-to-source ledger;
3. unsupported-claim check;
4. two materially different first-line alternatives.
```

### Stage F: adversarial edit

Run four independent checks before Nick sees it:

- **receipt:** can a reader verify the central claim?
- **voice:** is there a real judgment, or just an elegant summary?
- **slop:** could the same post be generated for a different company by swapping nouns?
- **audience:** does the first screen name a business consequence, or does it require developer context?

The final approval remains Nick's. Never use an AI-detector score as the gate.

## Content patterns worth keeping

There are two different distribution jobs, as `research/linkedin-breakout/report.md` already demonstrates from Nick's own posts.

### Baseline posts: useful to the right people

Use named case studies, implementation teardowns, bounded checklists, and comparisons. Measure saves, sends, substantive comments, profile visits, followers gained, and audience seniority. These posts can be narrower. Their job is to teach the feed and the audience what Nick reliably covers.

### Breakout posts: able to travel beyond the network

Use only when there is a real peg: a first-of-kind filing, a surprising operational result, a consequential failure, or a familiar workplace action with broad stakes. Lead with the event, keep it a story rather than a deliverable, and give readers a safe but real point on which to add professional judgment. Measure out-of-network impressions, reposts, stranger comments, and follower conversion.

Nick's 171,633-impression bank/AI-risk post and three 135-to-234-impression frameworks about the same event are unusually useful internal evidence. The event-shaped post had novelty, broad addressability, tension, and an answerable governance question. The derivative frameworks had practical value but little reason for a stranger to reshare them. One account's four posts do not prove causality, but they are more relevant to this account than generic hook folklore.

The weekly mix should be three operator-useful baseline posts, one live breakout candidate when the news supports it, and the Tuesday essay companion. The categories can overlap. Never manufacture a spike when there is no peg.

### Evidence limits on other common advice

| Claim | What the evidence supports |
|---|---|
| "Carousels always win" | Metricool and LinkPost both observe stronger carousel interaction/reach, but both are commercial, observational samples. LinkPost has impressions for only 1.9% of its posts. Test selective carousels; do not require a visual on every post. |
| "Long posts win" | LinkPost observes more engagement on 1,500+ character posts, but its main outcome is an engagement proxy and its sample is skewed. This does not justify padding a 120-word story. |
| "Ask a question" | Metricool observes 77% more comments on posts containing a question, without causal controls. Ask only when a reader can contribute informed experience. |
| "Links kill reach" | Metricool observes personal-profile posts with links at 27% fewer impressions and 20% fewer interactions, while Page posts with links did better. Selection effects are plausible. Existing internal research also says the first-comment workaround is contested. Test body, comment, and no-link variants. |
| "Reply in the first 30 minutes" | Directionally sensible and useful for actual conversation; precise multipliers in existing reports are practitioner folklore. |
| "Post five times a week" | Unproven. Metricool's sampled personal profiles averaged 3.05 posts/week. LinkPost did not test frequency. Five is an editorial operating model to test, not an algorithm fact. |
| "Best time is Tuesday morning" | Generic studies describe their sampled activity, not Nick's operator audience. Use Nick's analytics. |

## Reaching operators and leaders instead of more developers

This is possible, but relabeling technical posts "for executives" will not do it.

### Change the unit of relevance

For every story, lead with one of six operator stakes: throughput, margin, reliability, customer experience, workforce capacity, or risk. Keep the technical mechanism only when it explains why the result occurred. A good test is whether a COO could retell the post at a staff meeting without translating it.

Prefer stories with these features:

- a named non-tech company or operational team;
- a before/after workflow rather than a model benchmark;
- a measured result with a disclosed baseline;
- the human preparation required: interviews, process redesign, data cleanup, training, or interface placement;
- a decision or failure mode another leader can recognize.

This plays directly to the Rockwell thesis. The retrieval system is interesting, but the leadership story is that the company had to extract tacit knowledge, structure it, and deliver it beside the machine.

### Make the profile agree with the intended audience

Because LinkedIn says author headline, company, industry, skills, and history enter retrieval, audit Nick's headline and About section so they describe the operator outcome and applied-AI lane before the implementation identity. This is a primary-source-supported mechanism. Whether a particular rewrite increases reach remains an experiment.

### Seed distribution through real participation

Build a small list of operators, transformation leaders, mid-market founders, and industry practitioners. Nick should comment where he has a specific addition, ask sources for clarification, and reply substantively to people who engage. Do not automate it. The feed's use of engagement history supports the general idea that activity shapes topical discovery; the stronger claim that commenting on 20 COOs will cause COOs to see Nick is an inference, not a published platform rule.

### Measure audience composition

For every post, log:

- in-network versus out-of-network impression share;
- viewer seniority, job titles, industries, and company sizes;
- profile viewers and followers gained from the post;
- saves, sends, reposts, and comments from the target roles;
- newsletter visits/signups when a link is part of the test;
- qualified conversations, not just reactions.

Review in four-week cohorts. A post that reaches 3,000 relevant operators can be more successful than a 100,000-impression developer meme.

## Paid distribution: use it as a targeting experiment

### The two products are different

**Member Boost** lets an individual promote their own eligible post from their profile. LinkedIn says it is still gradually rolling out; Premium Business Suite members qualify, with access also being released to some non-subscribers. It turns the post into an ad. Eligible formats include text, image, video, article, and newsletter posts; documents and polls are not eligible. Old or new posts can be boosted. Targeting can include location, language, title, function, company industry, and seniority. Direct profile boosts have simpler controls and reporting, automatic bidding, no LinkedIn Audience Network, and no Campaign Manager account. LinkedIn recommends a 50,000-500,000 audience; its boosting guide recommends at least $25 for at least three days and says one to two weeks gives delivery more time to optimize. These recommendations are platform guidance, not independent performance evidence. [Member Boost FAQ](https://www.linkedin.com/help/linkedin/answer/a6824387), [boost-product comparison](https://www.linkedin.com/help/lms/answer/a10383113), and [LinkedIn boosting guide](https://business.linkedin.com/content/dam/lem/business/en/advertise/ads/boosting-final.pdf); local captures: `raw/linkedin-personal-boost-faq.html`, `raw/linkedin-boosting-comparison.html`, `raw/linkedin-boosting-guide.pdf`.

**Thought Leader Ads** are Campaign Manager ads sponsored by a company Page using a member's public post with that member's permission. They require the relevant Page/ad-account permissions and author approval. Eligible member posts include public text, single-image, video, and native article/newsletter posts; documents, polls, celebrations, multi-image posts, and reposts are not eligible. Objectives are brand awareness and engagement for text/image/article/newsletter, plus video views for video. Campaign Manager reports performance; member-post reporting includes profile clicks and member follows attributable to the ad. [LinkedIn Thought Leader Ads](https://www.linkedin.com/help/lms/answer/a1450002); local capture: `raw/linkedin-thought-leader-ads.html`.

LinkedIn's September marketing post claims member boosters grew followers "up to 2× faster," achieved "up to 1.8×" the CTR of ordinary sponsored content, and typically got 3-6× reach, with higher top-campaign ranges. These are selectively worded LinkedIn internal marketing claims without published methods. Do not use them as forecasts. [LinkedIn Boost blog](https://www.linkedin.com/business/marketing/blog/linkedin-ads/boost-your-linkedin-content-for-business-growth); local capture: `raw/linkedin-boost-blog-2026.html`.

### Recommendation for Nick

Test direct Member Boost first, if the button is available. The repo has no live consultancy company Page, so Thought Leader Ads add infrastructure without improving this first question. Paid reach can introduce Nick to a targeted operator audience and LinkedIn can report followers gained from a post. It does **not** establish that paid impressions will improve later organic distribution or that bought reach will become an engaged audience.

Run a six-post experiment over six to eight weeks:

1. Pre-register the audience: two or three geographies, company size, seniority, and functions such as operations, transformation, finance, customer operations, and general management. Avoid developer/engineering targeting.
2. Let every candidate run organically for 24 hours. Boost only a post that already clears a minimum quality gate: a strong save/send rate, at least one substantive target-role comment, or above-baseline profile visits. Do not use spend to rescue a weak post.
3. Randomly choose three of six comparable case-study posts for a five-day boost at the same budget. Leave three unboosted. A practical starting budget is €100 per boosted post, but this is a test design choice, not a benchmark.
4. Use the same audience and objective. Engagement is the most useful available proxy if follower growth is the business question; record whether Nick's UI exposes a follower-specific option before launch.
5. Compare paid and organic separately: cost per target-role profile view, cost per follower, target-role share of new followers, substantive comments, saves/sends, and subsequent organic engagement from those followers over 30 days.
6. Stop after the test and inspect follower quality manually. Continue only if paid followers later engage or enter the owned-newsletter/consulting funnel.

Thought Leader Ads become the better product only after a real company Page and ad account exist and Nick needs Campaign Manager targeting/reporting at sustained scale. The post still appears as authentic member content, but it is an ad and requires permission.

## The five-post newsroom

### Weekly slate

| Slot | Job | Source rule | Reach game | Current offset |
|---|---|---|---|---|
| Tuesday, issue + ~1 hour | The essay's sharpest standalone story or claim | approved essay and its source packet | companion; spike if there is a real news peg | 0 |
| Wednesday | A current applied-AI value story | independent reporting, preferably primary source + corroboration | baseline | 1 |
| Thursday | A different industry, workflow, and business stake | independent reporting | baseline or selective carousel | 2 |
| Friday | The week's best broad, timely case | independent reporting | breakout candidate if justified | 3 |
| Monday | A practical implementation/failure story | independent reporting | baseline | 6 |

The four newsroom posts need not relate to the essay. They must relate to Nick's durable beat: applied AI producing or failing to produce observable value in real work. Enforce variety across industry, function, outcome, source type, and emotional register.

### Pitch gate

Gather 10-15 pitches from current reporting and the permanent case-study library. Each pitch must include a primary receipt, named subject, date, operational result, what was required to achieve it, missing information, and why an operator would care now. Score for evidence, novelty, operator addressability, Nick's available judgment, and duplication. Select four. No source packet, no post.

The existing `icp-focus-group` can help compare pitches, but its scores are decision support, not predictions of reach. The final slate should be chosen by evidence and editorial range, not average model preference.

### Eight-week measurement plan

Hold the five slots steady for eight weeks, while allowing a slot to go empty when the reporting is weak. Tag every post by audience, industry, function, business stake, source class, format, hook family, and baseline/spike intent.

Use medians, not averages, because one breakout post can dominate. Review:

- median organic reach and target-role viewer share;
- followers gained per 1,000 impressions;
- target-role profile views per 1,000 impressions;
- saves + sends per 1,000 impressions for baseline posts;
- stranger comments + reposts per 1,000 impressions for spike posts;
- newsletter visits/signups on the Tuesday link treatment;
- qualified conversations by source post.

Do not change cadence, link placement, format, and audience framing all at once. Pre-register one variable each fortnight.

## Repo audit: exactly what should change

No skill, config, or code was changed as part of this report.

### `.skills/content-repurposing/SKILL.md`

1. Change "the other 3-4 investigate the essay's concept" to **exactly one essay companion by default; four independent applied-AI value stories**. Allow a second essay-derived post only when it beats independent pitches rather than reserving the slot.
2. Replace "spin up 6-10 journalist personas anchored to the essay concept" with a persistent weekly beat desk covering operations, customer service, finance, industrials, healthcare, professional services, and failure/measurement. Research 10-15 pitches; select four.
3. Keep the 100-180 word target, receipt, judgment, attached uncertainty, anti-slop checks, and separate human approval.
4. Replace the absolute "link only in the first comment" rule with an experiment policy: default no link for four newsroom posts; rotate no-link, first-comment, and body-link treatments on Tuesday. The current scheduler has no first-comment publishing mechanism, so the present hard rule describes an operation the pipeline does not perform.
5. Make five slots a ceiling. Preserve the existing "ship four if only four survive" language and move it into the main cadence rule so it cannot be missed.
6. Require a source/audience/claim ledger in every pitch packet and the staged prompt architecture above.
7. Change `mediaRequired: true` from universal to selective. Require a visual only when a source screenshot, real meme, carousel, or workbench image adds information. An all-visual requirement adds production and approval friction unsupported by the research.
8. Keep the two-reach-games model, but score baseline and spike pitches with different rubrics.

### `app/linkedin/README.md`

1. Update the batch description from "only 1-2 slice the essay; the rest investigate its concept" to the one-plus-four newsroom model.
2. Document the already-supported `postHourUTC` frontmatter field. It exists in code but not in the README example.
3. Correct the mode description: config currently has `enabled: true`; the README still says "This is where we are" under shadow mode.
4. Remove the unsupported "personal profiles out-reach company pages 5-8x" assertion or label it as vendor-directional. Metricool's 2026 sample found similar mean impressions and 63% higher engagement rate for personal profiles, not 5-8× reach.
5. Replace the blanket "no link in body; first comment" wording with the controlled link-placement test.
6. Explain that Tuesday's personal post uses `postHourUTC: 15` when the normal issue publishes at 14:00 UTC. A nonstandard issue time will not remain exactly one hour apart.

### `app/linkedin.config.json`

The global `postingHourUTC` is currently 18. That schedules every post at 18:00 UTC unless frontmatter overrides it. Do not change the global hour based on generic timing studies. Use a Tuesday per-post override during the test and learn the other slots from Nick's audience analytics.

The comments in the Facebook channel say links suppress LinkedIn reach as a settled fact. Soften that to an observed personal-profile association that is being tested.

### `app/scripts/lib/linkedin.mjs`

The scheduler already parses `postHourUTC` and lets it override the global hour, but lint does not validate its range and the README does not expose it. Add lint/tests for integers 0-23 when this workflow is implemented.

`scheduleFor()` discards the essay's actual time and schedules on its UTC calendar day at a whole UTC hour. For the normal 14:00 cadence, `postHourUTC: 15` gives the requested one-hour delay. For an ad hoc issue at 11:25, no integer hour produces an exact one-hour delay. If "one hour later" is a real invariant rather than a normal-cadence convention, add a relative field such as `offsetMinutesAfterIssue: 60` for the day-zero companion and make it mutually exclusive with `postHourUTC`. Otherwise document that the rule is "15:00 UTC on normal issue day."

Keep the existing identity verification, per-item approval, and `pushedAt` idempotency. Those are strong controls.

## What is evidence, and what is still a bet

### Primary platform evidence

- feed retrieval uses semantic post/member representations, profile data, engagement history, and suggested content beyond the immediate network;
- AI assistance is allowed, generic low-value output is distribution-limited, and member slop feedback exists;
- creator analytics expose audience demographics, network share, profile activity, saves, sends, and followers gained;
- direct Member Boost and Thought Leader Ads have the mechanics and limits described above;
- LinkedIn prohibits software that scrapes or automates activity on its website.

### Large observational evidence

- public interaction patterns and formats are changing, while clicks can move differently;
- personal posts with links underperformed without-link posts in Metricool's sample;
- carousels often correlate with higher interaction or reach;
- quantified proof and certain open-loop structures are common in high-engagement cohorts.

These are correlations from commercial datasets, not algorithm laws.

### Practitioner anecdotes

- AI-assisted production works best when a human supplies or approves the point of view;
- automated comments are increasingly recognizable and resented;
- structured research and approval systems are more credible than one-click generation.

The 30-day scan did not surface strong independent outcome data for AI-automated LinkedIn production. Treat vendor and creator claims as ideas to test.

### Folklore to retire

- precise engagement-signal weights;
- a universal golden hour or posting time;
- guaranteed reach multipliers from a hook, format, reply time, or comment length;
- the first-comment link workaround as settled doctrine;
- five posts per week as an algorithm optimum;
- paid reach as a way to repair organic ranking.

## Bottom line

The opportunity is not to disguise AI writing better. It is to use AI for the work readers cannot see and make the visible post more human because the reporting is deeper, the claim is narrower, and the judgment is actually Nick's.

The current repo is already close: it has raw-first research, a pitch stage, source checks, anti-slop rules, approval gates, per-post hour overrides, and a two-reach-games model. The main correction is editorial. One post should serve the issue. Four should serve the beat.
