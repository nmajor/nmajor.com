# A Hermes-operated workflow for Actual Intelligence

Date: 2026-09-22
Scope: Synthesis of `BRIEF.md` and the 78 files already captured under `raw/`. No new material was fetched for this report.

## Executive conclusion

The current pipeline has useful parts, but it should not be handed to Hermes unchanged.

The right operating model is an editorial desk, not an autonomous content machine. Hermes should maintain the topic bank, assemble research, produce a sourced brief, draft the essay, run mechanical checks, derive LinkedIn candidates, package decisions for review, and monitor the resulting work. Nick should choose the topic, supply or confirm the point of view, approve the essay, and approve each LinkedIn post separately. Publication should remain a deterministic action that can run only after those approvals have been recorded, committed, and pushed.

Three findings drive that recommendation.

1. More source collection does not guarantee better synthesis. In one 2026 benchmark, factual support fell by about 42 percent as research depth rose from 2 to 150 tool calls, even though links still looked valid and relevant. The workflow needs selective research and claim-level verification, not a contest to gather the most tabs. [Source-attribution benchmark](raw/quality-citation-verification-framework.md)
2. Model review helps, but repeated self-revision has a ceiling. In SummIt, models followed their own feedback about 90 percent of the time, yet only about 50 to 60 percent of changes after two or more iterations improved the result in human judgment. One or two constrained review passes are useful. An open-ended polish loop is not. [SummIt](raw/condense-summit-iterative-refinement.md)
3. The differentiator is Nick's judgment. AI-assisted stories can score better individually while becoming more similar to one another. LinkedIn now gives readers a direct way to report work that feels like AI slop. A workflow that optimizes polish without preserving a named person's argument is working against the product. [Homogenization evidence](raw/operators-ai-homogenization-evidence.md), [LinkedIn's reader flag](raw/quality-platform-ai-slop-flagging.md)

The immediate job is therefore not to restart the old routines. It is to build a two-week pilot around explicit states, source-backed drafts, short human decisions, and measurable outcomes. Only after Nick has graded real outputs should those judgments become standing Hermes instructions.

## What the evidence says

### Topic discovery needs a funnel, not a feed dump

The public digest agents follow a common pattern: fetch broadly, filter, score, then read the survivors in full. The better examples keep plumbing and judgment separate. `hn-brief` prunes comments with deterministic structural signals before an LLM sees them. `news-agent` uses a fast keyword-history check and then a semantic history check. The weighted-selection example distinguishes missing evidence from a neutral score and applies a diversity adjustment after ranking. [Digest skills](raw/condense-agent-digest-skills.md), [HN Brief](raw/condense-hn-brief-two-stage-digest.md), [dedup and scoring](raw/condense-news-agent-dedup-and-scoring.md), [weighted selection](raw/condense-scoring-rubric-weighted-selection.md)

The lesson is not to copy their scores. Their criteria serve their products. Actual Intelligence needs its own initial rubric:

| Criterion | Initial weight | Question |
|---|---:|---|
| ICP consequence | 25 | Does this change a decision for an owner, CEO, CIO, or COO? |
| Nick's point of view | 20 | Is there a specific claim Nick can defend, not a generic summary? |
| Evidence strength | 20 | Are there primary sources, direct operators, or reliable data? |
| Non-obviousness | 15 | Would the reader learn something beyond the week's common take? |
| Timeliness | 10 | Is there a reason to publish this issue now? |
| Distribution legs | 10 | Can it yield several genuinely distinct social arguments? |

These weights are a starting hypothesis. EvalGen's study of working practitioners found that criteria change as people grade real outputs. The rubric must remain versioned and revisable rather than becoming doctrine on day one. [EvalGen](raw/quality-evalgen-criteria-drift.md)

The selection pass should return a slate of three to five candidates, not an automatic winner. Each candidate needs a one-sentence thesis, the decision-maker consequence, two or three strongest sources, the contrary case, what is actually new, and the distinct LinkedIn angles it may support. Nick chooses one. A low-scoring week may produce no issue candidate rather than a padded one.

Deduplication also needs three outcomes: new, repeat, and material update. Comparing URLs is not enough. The permanent history should store the subject, claim, examples, and prior angle. A new event about an old subject can be worth covering; a new source repeating the same claim is not. The `news-agent` capture makes this distinction explicitly and treats past output as a negative reference for deduplication, not prose to imitate. [Dedup and scoring](raw/condense-news-agent-dedup-and-scoring.md)

### The essay should start with a claim, not a template

Strong solo operators keep a backlog and let an idea develop before the deadline. Ben Thompson describes knowing weekly topics days ahead and keeping a reserve list for quiet periods. Lenny Rachitsky attributes his growth mainly to publishing something useful every week, while also saying that long-term stamina matters more than chasing individual winners. Chenell Basilio's account stresses work that readers cannot get elsewhere: original analysis, combined data, interviews, or an unusually clear explanation. [Ben Thompson](raw/operators-ben-thompson-daily-routine.md), [Lenny Rachitsky](raw/operators-lenny-rachitsky.md), [Chenell Basilio](raw/operators-chenell-basilio-own-growth.md)

That supports an interview-first process for this publication. Before Hermes drafts, it should capture:

- Nick's actual claim in one or two sentences.
- What Nick has seen, done, or changed his mind about.
- The strongest objection.
- The decision a reader should make differently.
- The facts that would falsify or weaken the argument.

If those fields are empty, Hermes should produce questions and a research brief, not prose. The public writing pipeline closest to this project separates interview, outline, drafting, developmental edit, line edit, source check, and top edit. It also allows backward movement when an argument fails. That is more credible than treating the workflow as a conveyor belt. [Publication pipeline](raw/skills-writing-publication-pipeline-overview.md), [pipeline stages](raw/skills-writing-pipeline-stages.md)

For large evidence sets, Hermes should summarize sources independently and merge them hierarchically. BooookScore found hierarchical merging more coherent than repeated incremental updates for smaller context windows. Its error taxonomy is useful beyond books: missing entity context, missing event context, chronology errors, causal errors, discontinuity, language errors, inconsistency, and duplication. [BooookScore](raw/condense-booookscore-hierarchical-vs-incremental.md)

Before integration, Hermes should extract structured elements from each source. SumCoT improved summary quality by extracting entities, dates, events, and results before writing. For Actual Intelligence, the better schema is source, claim, date, actor, evidence, result, caveat, and relevance to Nick's thesis. If the source does not contain an element, the system must leave it blank. [SumCoT](raw/condense-sumcot-element-aware.md)

The finished essay can take many shapes. A fixed issue template will make the publication sound manufactured. What should stay fixed is the evidence contract and the decision path, not the number of sections or the type of opening.

### Citation presence is not evidence quality

The most important proposed addition is a claim ledger. For every checkable assertion in the draft, record:

| Field | Meaning |
|---|---|
| Claim ID | Stable identifier used during review |
| Exact claim | The sentence or smallest self-contained assertion |
| Type | Number, date, event, quote, causal claim, interpretation |
| Source | Local raw file and original URL |
| Support | Exact excerpt or structured evidence |
| Status | supported, qualified, unsupported, disputed |
| Action | keep, narrow, attribute, remove, ask Nick |

Claimify shows why this extraction step matters: claims need to be atomic, self-contained, and unambiguous before they can be checked. Loki then provides a practical sequence: decompose, decide which claims are check-worthy, generate retrieval queries, retrieve evidence, and verify, with a human making the final call. [Claimify](raw/quality-claimify-claim-extraction.md), [Loki](raw/quality-loki-factcheck-pipeline.md)

The gate must test three different things:

1. Does the link resolve?
2. Is the page about the claimed subject?
3. Does the page support the exact statement?

The third check is where apparently well-researched work fails. The citation benchmark found that leading models could exceed 94 percent link validity and 80 percent topical relevance while reaching only 39 to 77 percent factual support. URL checks still matter: another 2026 study found 3 to 13 percent of generated citation URLs were likely fabricated and reduced non-resolving links below 1 percent with post-generation checking. But a live URL is only the first gate. [Citation verification](raw/quality-citation-verification-framework.md), [URL health](raw/quality-url-hallucination-urlhealth.md)

For important claims, prefer original documents, direct testimony, datasets, and company filings over a chain of rewrites. NPR's standard is practical: an editor should be able to identify the source of every factual assertion and explain why it is credible. Its failure review also warns that several reports may still trace back to one source. [Newsroom standards](raw/quality-newsroom-accuracy-standards.md), [NPR checklist](raw/quality-npr-accuracy-checklist.md), [KSJ checklists](raw/quality-ksj-factcheck-checklists.md)

Every issue should fail closed if a material claim remains unsupported. The choices are to remove it, narrow it, attribute the uncertainty, or put it in Nick's review packet. Hermes should never search for corroboration after publication.

### Review needs separate jobs and a stopping rule

The current idea of an ICP focus group is directionally sound, but it should not be treated as a verdict. A panel of models from separate families can correlate better with human judgments and reduce same-family bias. The PoLL study supports that. CALM documents twelve judge biases, including position, verbosity, style, and self-enhancement effects. A strong model can still be a weak judge, and prompt wording can move its agreement with humans. [PoLL](raw/quality-poll-panel-of-judges.md), [CALM](raw/quality-llm-judge-biases-calm.md)

Use reviewers for distinct jobs:

- A developmental editor tests thesis, structure, missing counterarguments, and audience consequence.
- A source checker tests the claim ledger against retrieved evidence.
- A voice checker identifies specific deviations from Nick's approved examples.
- A skeptical reader marks confusion, disbelief, boredom, and moments that feel generic.
- A mechanical gate checks frontmatter, links, dates, spelling, banned placeholders, and approval state.

Do not ask five personas the same broad question and average the scores. Rubrics work best when criteria are specific, observable, weighted by importance, and paired with actionable changes. They also need calibration against human grades. [iRULER](raw/quality-rubric-design-iruler.md), [Every's review kit](raw/operators-every-draft-review-kit.md)

Each review pass should return one of five operations: add, remove, rephrase, simplify, or keep. Permit at most two model-led revision rounds before Nick sees the draft. This borrows SummIt's useful constraint while avoiding its documented over-correction loop. [SummIt](raw/condense-summit-iterative-refinement.md)

Anti-slop checks belong at the end, after the argument and evidence work. Measurable style tells can help locate problems, but no single marker proves machine authorship. The em dash study is a useful warning against turning a preference into a detector. The durable question is whether a paragraph contains a specific observation, mechanism, example, or consequence that Nick stands behind. [Measurable tells](raw/quality-ai-slop-measurable-tells.md), [em dash counter-evidence](raw/quality-em-dash-tell-measured.md), [Every's editorial use of AI](raw/operators-every-ai-review-skills.md)

### Five to seven LinkedIn posts should be a target, not a quota

The existing plan calls for five to seven weekly posts. That can work only if the essay contains enough independent ideas. Forcing seven variations of one claim will create the repetition readers now flag.

Hermes should first create an atom ledger:

| Atom | Required content |
|---|---|
| Claim | One defensible idea |
| Proof | Source, number, example, or firsthand observation |
| Tension | What most people get wrong or what changed |
| Reader | The decision-maker for whom it matters |
| Action | What the reader should notice, ask, stop, or change |
| Difference | How this differs from the other posts in the batch |

Each post then rebuilds one atom for LinkedIn. It must deliver value to someone who never reads the essay. The practitioner sources consistently distinguish that from changing the wrapper around the same paragraph, although this rule is marketing consensus rather than measured research. [Atomization sources and caveat](raw/condense-atomization-craft.md)

A good weekly mix could contain:

- One first-person field note.
- One management mistake or decision rule.
- One evidence-led contrarian claim.
- One concrete company case.
- One response to a live objection or misconception.
- One framework, when the material genuinely supports one.
- One essay teaser, used sparingly.

The mix should vary naturally. It should not become a seven-slot template.

Public repurposing skills show both the useful pattern and the trap. Extracting quotes, proof points, personal hooks, and counterintuitive angles before drafting is useful. Formulaic curiosity gaps, mandatory questions, hashtags, numbered threads, and engagement bait are exactly the kind of defaults that flatten a voice. [Building-block workflow](raw/skills-writing-pipeline-topedit-sourcecheck-repurpose.md), [mechanical repurposing example](raw/condense-blog-repurpose-skill.md)

Hermes should generate eight to twelve pitches, reject duplicates, and draft only the best five to seven. If only four survive, the review packet should contain four. The batch-level diversity check should compare thesis, evidence, opening shape, emotional register, and requested action. It should also compare against recent posts, not only the current batch.

Every draft gets a stable item ID and its own approval state. Essay approval does not approve any post. One post's approval does not approve the batch. Any material edit after approval invalidates that item's approval and returns it to review.

### Learning from edits must itself require approval

The LangChain social agent extracts persistent rules from user edits. That is a useful idea with a dangerous default: a one-off correction can become a universal rule. EvalGen's criteria drift finding makes the risk concrete. [LangChain social agent](raw/condense-langchain-social-media-agent.md), [EvalGen](raw/quality-evalgen-criteria-drift.md)

After each review, Hermes should produce a small learning proposal:

```text
Observed change: Nick removed the generic final question from three posts.
Possible rule: End with the conclusion unless a real question advances the discussion.
Evidence: post IDs A17, A22, A24.
Scope: LinkedIn only.
Confidence: repeated pattern.
Decision: approve rule, reject rule, or keep as observation.
```

Only Nick can promote that proposal into the voice guide or workflow. Keep rejected and one-off observations in a log so Hermes can detect a later pattern without silently changing the system.

Approved examples are more valuable than a giant prohibition list. Every's team reports that codifying taste improved its process, but it also says its own system is an example, not a blueprint. Anthropic's prompt-audit guidance likewise warns that old model workarounds and over-specified steps accumulate and degrade later behavior. The stable skill should contain the publication's facts, constraints, acceptance tests, and decision rights. Scripts should handle deterministic checks. Examples should be varied and traceable to Nick's approval. [Every review skills](raw/operators-every-ai-review-skills.md), [agent design and prompt audit](raw/skills-anthropic-agent-design-and-prompt-audit.md)

## Recommended operating model

### Roles

| Role | Owns | Does not own |
|---|---|---|
| Hermes | Monitoring, candidate bank, research capture, source brief, first draft, checks, social pitches, review packets, status, metrics | Final topic choice, Nick's opinion, approval, unsupervised publishing |
| Nick | Topic choice, firsthand input, editorial direction, essay approval, per-post approval, corrections policy | Repetitive collection and formatting work |
| Supervising agent | Workflow maintenance, audits, evals, safe implementation, failure investigation | Content approval or invented preferences |
| Deterministic publisher | Validate state, stamp dates, deploy, send, schedule, record machine state | Editorial judgment, inferred approval, recovery by guessing |

The publisher should have dedicated, narrow actions rather than general shell access to sending channels. External sends are hard to reverse and should be easy to gate and audit. [Agent design](raw/skills-anthropic-agent-design-and-prompt-audit.md)

### State machine

```text
candidate
  -> shortlisted
  -> selected_by_nick
  -> researched
  -> brief_ready
  -> essay_drafted
  -> claims_verified
  -> awaiting_essay_approval
  -> essay_approved
  -> social_pitched
  -> social_drafted
  -> awaiting_post_approvals
  -> preflight_passed
  -> scheduled
  -> published
  -> measured
  -> retro_complete
```

Every transition needs an artifact and an actor. The agent may move work into review. Only Nick may create `selected_by_nick`, `essay_approved`, and each individual post approval. The publishing job may create scheduled, published, and machine-state records after its checks pass.

Store these states in repository data rather than in chat memory. The editorial-calendar and status skills in the evidence set both make the same useful move: the backlog and stage are machine-readable files. [Editorial calendar as data](raw/condense-editorial-calendar-as-data.md), [pipeline context and status](raw/skills-writing-pipeline-context-and-support.md)

### Two-week rolling cadence

The existing Tuesday issue slot can remain, but the work should start earlier.

| Day | Work for issue publishing the following week |
|---|---|
| Tuesday | Hermes refreshes the candidate bank after the current issue publishes. |
| Wednesday | Hermes produces a three-to-five-item slate. Nick selects one. |
| Thursday | Hermes captures raw research and produces the evidence table and open questions. |
| Friday | Nick answers the point-of-view interview. Hermes writes the brief and outline. |
| Monday | Hermes drafts the essay and claim ledger. Separate checks run. |
| Tuesday | Nick reviews the essay. Hermes revises only the requested points. |
| Wednesday | Nick explicitly approves the final essay. Hermes generates social pitches. |
| Thursday | Hermes drafts the best five to seven posts and runs batch deduplication. |
| Friday | Nick approves, rejects, or revises each post separately. |
| Monday | Deterministic preflight checks repository state, provider readiness, dates, approvals, and the pushed commit. |
| Tuesday | The publisher deploys, sends, and schedules only approved items. |

This creates a one-issue buffer. It also gives Nick small decisions throughout the week instead of one exhausting review session at the deadline.

### Review packets

Hermes should present decisions in compact packets.

The topic packet contains three to five candidates, each with score evidence, thesis, strongest sources, contrary case, and possible social legs.

The essay packet contains the exact draft, a five-line editorial brief, unresolved claim-ledger items, material changes since the prior version, and three actions: approve, request changes, or reject.

The LinkedIn packet contains each exact post with its stable ID, intended date, source atom, overlap warning, and three actions: approve this item, request changes to this item, or reject this item. Batch approval must not be the default.

Approval should record the item ID, content hash, approver, timestamp, and provenance such as `via chat`. A content change after that hash was approved clears the editorial state automatically. Machine state such as send and push locks remains publisher-owned.

### Fail-closed preflight

No send or schedule action should occur unless all of the following are true:

- Buttondown's exact newsletter account, plan, sending identity, and scoped key have been
  reactivated and tested.
- The exact approved essay and posts exist in the pushed default branch.
- The queue references the same essay revision.
- Every required approval matches the current content hash.
- Every material factual claim is supported, qualified, or removed.
- Every cited URL resolves or has an explicitly approved archived replacement.
- Dates and offsets pass linting.
- The deployment succeeds before the email send begins.
- Each channel's credentials and destination identity match the intended account.
- A dry-run manifest shows the exact external effects before execution.

If any check fails, the job should stop before the first external effect and produce one repair packet. It should never continue halfway through the sequence because some items look safe.

## Measurement and refinement

### Measure the publication, not model confidence

The workflow currently needs a real post-send loop. Open rate should not be the primary decision metric because Apple Mail Privacy Protection can generate opens without a person reading. Trade sources in the corpus recommend clicks, conversions, replies, list health, and unsubscribe or complaint trends instead. Those benchmarks are directional, not controlled research, so the publication's own history should become the baseline. [Post-send metrics](raw/quality-post-send-metrics-and-length.md)

Track four layers:

| Layer | Measures |
|---|---|
| Operations | On-time rate, missed slots, failed preflights, review latency, revision rounds |
| Evidence | Claims checked, unsupported claims caught, dead links, corrections |
| Newsletter | Unique clicks, site conversions, replies, unsubscribes, complaints, net active subscribers |
| LinkedIn | Impressions, dwell proxies when available, saves, substantive comments, profile visits, site clicks, follower conversion, slop reports |

Do not reward Hermes for producing more words, sources, posts, or reviewer scores. Reward it for getting a strong, approved issue through the process on time, with no unsupported material, and for improving downstream reader actions without increasing disaffection.

### Run a weekly retro and a monthly calibration

The weekly retro should compare forecast to result:

- Which candidate score predicted the outcome poorly?
- Which claims needed human repair?
- What did Nick change repeatedly?
- Which posts were meaningfully distinct?
- Which reader actions occurred?
- Was any workflow step busywork?

The monthly calibration should sample accepted, rejected, strong, and weak outputs. Nick grades them without seeing Hermes's score. Compare the human grades with the rubric and reviewers. Then propose changes to the rubric, examples, or prompts. This follows the evidence that evaluation criteria emerge through grading and that skill changes should be tested against examples before adoption. [EvalGen](raw/quality-evalgen-criteria-drift.md), [skill evaluation loop](raw/skills-anthropic-skill-creator-eval-loop.md), [testing skills](raw/skills-superpowers-testing-skills-with-subagents.md)

Keep the first pilot small: four issues and roughly twenty to twenty-eight LinkedIn posts. That is enough to observe repeated corrections without pretending to establish statistical truth. The deliverable at the end is a versioned workflow, a set of approved and rejected examples, a failure log, and a decision about what Hermes may run unattended.

## What not to copy

The research contains many public workflows worth learning from, but few should be adopted whole.

- Do not use one giant skill that researches, drafts, publishes, and commits on a cron. It obscures decision rights and makes partial failure dangerous. The one-skill newsletter examples are useful prototypes, not production controls. [AI curator skill](raw/skills-newsletter-ai-curator-skill.md), [scored newsletter agent](raw/skills-newsletter-agent-scoring-pipeline.md)
- Do not force a fixed newsletter template every week. Fixed evidence and approval contracts are good. Fixed prose shapes become visible quickly.
- Do not equate many citations with rigor. Selective, verified citation beats exhaustive citation.
- Do not accept a panel score as approval. Model judges support Nick's review; they do not replace it.
- Do not let Hermes promote its own inferred lesson into permanent voice rules.
- Do not keep revising because an evaluator can still invent feedback. Stop after two model-led passes.
- Do not fill seven LinkedIn slots when only four distinct ideas survive.
- Do not optimize for opens, impressions, or generic engagement questions at the expense of trust and useful reader action.
- Do not use AI-origin detectors as a quality gate. Test substance, provenance, accuracy, specificity, and reader response.

## Recommended first implementation session

1. Document Hermes's actual runtime, repository access, scheduler, browser access, secret boundary, and external-channel permissions.
2. Disable any unattended send path until Buttondown is reactivated and channel identities are verified.
3. Define the repository state files and content-hash approval contract.
4. Build the candidate bank, topic packet, research brief, and claim ledger before touching the prose prompts.
5. Run the proposed workflow against one unpublished topic without sending anything.
6. Have Nick grade the slate, essay, and posts. Capture corrections as observations, not rules.
7. Repeat across four pilot issues, then promote only repeated, explicitly approved lessons into Hermes's skills.

## Evidence quality and limitations

The corpus mixes peer-reviewed papers, preprints, official newsroom standards, operator accounts, open-source skills, vendor studies, and search-result captures. They should not carry equal weight.

The strongest support in this report comes from published research on citation quality, summarization, evaluator behavior, and reader perception; official newsroom checklists; and primary operator descriptions of their own processes. Public skills show implementable patterns but rarely show measured outcomes. Vendor benchmarks and creator growth accounts are useful hypotheses, not universal laws. Several capture files explicitly mark pages that were not fetched or quotations returned through summarizing tools. Those claims were not used here as sole support for a critical recommendation.

The two AI-disclosure studies also deserve care. One involved 40 participants reading news and found detailed disclosures reduced trust and subscription while one-line disclosure behaved more like no disclosure. Another involved 261 participants and found that disclosed AI involvement generally reduced perceived trustworthiness, especially for interpersonal writing. Neither directly tests this newsletter or Nick's audience. The practical conclusion is to publish a plain process statement, make human accountability visible, and avoid turning each issue into a long defensive disclosure. [Disclosure studies](raw/quality-ai-disclosure-reader-trust.md), [Every's public policy](raw/operators-every-editorial-ai.md)

No evidence in this corpus proves that a five-to-seven-post weekly cadence is optimal for Nick, that Buttondown itself will improve growth, or that any LLM panel can predict this audience's behavior. The pilot must answer those questions with this publication's own approvals and outcomes.

## Source map

The report drew on every captured research lane. The files below are grouped by the decision they informed. The three files under `raw/fulltext/` are complete paper extracts that support the corresponding shorter quality captures.

- Discovery, scoring, deduplication, and condensation: `condense-agent-digest-skills.md`, `condense-booookscore-hierarchical-vs-incremental.md`, `condense-chain-of-density.md`, `condense-curation-selection-rubrics.md`, `condense-hn-brief-two-stage-digest.md`, `condense-mmr-relevant-novelty.md`, `condense-news-agent-dedup-and-scoring.md`, `condense-scoring-rubric-weighted-selection.md`, `condense-sumcot-element-aware.md`, and `condense-summit-iterative-refinement.md`.
- Editorial planning and repurposing: `condense-atomization-craft.md`, `condense-blog-repurpose-skill.md`, `condense-editorial-calendar-as-data.md`, and `condense-langchain-social-media-agent.md`.
- Operator practice and growth: all sixteen `operators-*.md` files, covering Every, Ben Thompson, Chenell Basilio, Gergely Orosz, Inbox Collective, Justin Welsh, Lenny Rachitsky, Zvi Mowshowitz, and the AI-homogenization study capture.
- Accuracy, evaluation, disclosure, platform risk, and measurement: all nineteen `quality-*.md` files, plus `raw/fulltext/nakano-reader-perception-ai-authorship-disclosure.txt`, `raw/fulltext/prajod-ai-disclosure-detail-news-trust.txt`, and `raw/fulltext/shankar-who-validates-the-validators-evalgen.txt`.
- Agent and skill design: all twenty-six `skills-*.md` files, covering Anthropic's official guidance, public writing pipelines, newsroom enforcement, research and source checks, reader simulation, anti-slop passes, skill evaluation, and newsletter agents.

This report is a synthesis of that local evidence, not an endorsement of every source or workflow in it.
