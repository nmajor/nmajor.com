# Astra independent workflow review

Reviewed 2026-09-29. This is an architecture review, not a claim that any editorial choice guarantees reach. I reviewed the September LinkedIn strategy report, its source index and current-discussion capture, the existing discovery, repurposing, hooks, focus-group and visual skills, and the LinkedIn reader, lint, scheduler configuration and README.

## Recommendation

Keep `content-repurposing` as the single entry point and turn it into a weekly applied-AI newsroom. Its output should be a complete review packet that can be generated with no answers from Nick. Optional direction can influence the reporting, choice of stories, point of view, and final variants. Publication still needs explicit approval of the chosen text and image for each post.

The user has superseded two recommendations in the previous research report. Use seven available daily slots with a target of five, and require an image for every post. These are editorial preferences to test, not conclusions established by platform research. A sparse week is valid. Exactly one newsletter companion should be the default; additional stories can share its subject when they independently earn selection, but no other slot is reserved for its theme.

The durable beat is applied AI in identifiable work: results, failures, recovery, cost, adoption, implementation and accountability. A cautionary desk should always research potential stories. A cautionary publication quota should not force weak or sensational reporting into the slate.

## The unattended generation contract

Invocation needs one stable newsletter reference or a decided story brief. Everything else is optional. Capture these optional fields when supplied: this week's opinion, priority industries, sources, stories to include, topics to avoid, intended readers, and constraints. Never stop the run because those fields are empty.

The orchestrator loads the published or approved issue, the settled voice and editorial principles, recent posts, the case-study library, past performance findings if available, and the weekly input. It resolves omitted choices itself and records them. Do not fabricate first-person experience to replace missing input.

The critical distinction is between an editorial judgment proposed in Nick's established register and a belief Nick has explicitly expressed. Store the basis for each angle as `nick-this-week`, `nick-established`, or `editorial-proposal`. A proposed interpretation can make a useful draft without claiming that Nick has said it, tested the product, spoken to the company, or served the company as a client. In the review packet, make proposed judgments easy to spot. Avoid empty neutral summaries merely because Nick is absent.

If only a newsletter topic has been decided, generate the batch against a provisional issue reference and save the chosen story brief with it. The companion is provisional until checked against the final essay. Current LinkedIn lint requires a real essay file. Do not create an invented approved essay to satisfy that constraint. Either use an existing draft essay, or keep the packet and proposed post bodies under research until an essay slug exists, then materialize them in the scheduler directory. The packet should explicitly state this condition while all independent research and visuals finish normally.

## Seven slots, five as the target

Use offsets 0 through 6, Tuesday through Monday. Fill the normal Tuesday, Wednesday, Thursday, Friday and Monday positions first. Saturday and Sunday are expansion slots when additional stories clear the same bar. This priority is a starting schedule, not a statement that weekends underperform.

The companion belongs at the issue's actual publication time plus 60 minutes. Implement a true relative-time field if this is to remain valid for ad hoc publication times. An integer `postHourUTC: 15` only gives the right answer for the usual 14:00 issue.

The week can contain one through seven posts. Zero is a valid unsuccessful run when the companion itself cannot be supported or rendered. In that case the system must say that the required companion is missing. It must not call the batch complete or substitute an unrelated story into Tuesday. Five or more posts never compensates for a missing companion.

Editorial independence and scheduling independence are different. Keeping the current newsletter-relative scheduler is the smallest safe implementation. It means all posts still wait for the issue to go live even when their subjects are independent. State this in the skill. If the newsletter is delayed, rerun freshness checks and produce a revised slate; do not imply the existing code already handles an independent calendar.

## Reporting and selection

Start with 12 to 18 distinct pitches. Use several desks covering results in operations, cost and measurement, customer work, nontechnical adoption, and failures or recovery. Journalists must search across the durable beat, not inherit the issue's topic as a filter. Up to two desks can actively hunt cautionary stories because those are easy to miss in vendor success libraries.

Each pitch needs a named subject, event date, operational setting, verified source text, exact supported claims, metric definition and denominator where relevant, undisclosed facts, contradictory evidence, operator relevance, possible angle, and freshness reason. Search snippets and social reactions are leads, never the only support for consequential allegations or numbers. Save raw before synthesis. Treat older strong cases as historical cases, not breaking news.

Apply evidence and duplication gates before model scoring. Then choose for usefulness, novelty, broad professional relevance, a clear interpretation, and slate variety. Do not let an average focus-group score outweigh a factual problem. Preserve why rejected pitches were dropped so the next run does not rediscover them as new stories.

Select the companion and the strongest independent stories. Consider industry, job function, story outcome, source type and repeated claim. Three reports about different companies cutting support costs can still be the same post. Conversely, one success and one failure can be distinct even in the same industry.

For cautionary coverage, aim to include one well-supported failure, disappointment, near miss or recovery story in a typical five-post week when reporting supports it. A second can earn a place if it exposes a different mechanism. Review the rolling four-week mix so the account does not drift into disasters by rewarding only raw impressions. This is a selection preference, not a hard quota or a ban on important news.

Every cautionary brief should answer what actually failed, who says so, what is confirmed versus alleged, whether the deployment changed or recovered, and whether the story's useful interpretation reaches beyond ridicule. Distinguish a missed projection from demonstrated failure, association from causation, and one system's problem from claims about all AI. A meme may target incentives or a recognizable decision error. It should not target affected customers or individual employees.

## Drafting and review

Generate distinct hook families from the evidence, then choose automatically. Give Nick the recommended hook and at most two meaningful alternatives. Hooks should be concrete and fit the mobile preview budget; the project's 140-character rule is a house limit, not a universal rendering guarantee.

Produce one recommended body and one materially different alternative when the story supports it. The alternative should offer a different framing or emphasis, not synonym substitutions. For a simple story, one good body plus alternative hooks is enough. Every final option must be source-checked independently because variants often add unsupported claims.

Keep 100 to 180 words as the normal target. Permit shorter posts that contain a complete story and longer posts when the evidence needs room. The current 1,400-character hard cap contradicts the user's explicit request not to set length in stone. A conservative implementation is a soft 1,400-character warning and a documented exception, with a real platform-limit hard stop. If exceptions require a field, use something narrow such as `lengthReason` rather than encouraging routine long posts. Confirm the current platform limit before encoding a changed maximum.

Write from the evidence packet, intended operator, proposed judgment and voice rules. Do not prompt for virality. Put a checkable receipt near the top, attach limitations to the relevant claim, and stop after the observation is complete. Negative stories do not automatically need a rhetorical question; a real question is optional when readers have useful experience to contribute.

Run claim checking separately from audience critique. Use a blind cross-provider panel for shortlisted pitches and final recommended drafts. One review pass is sufficient when it passes; allow one substantive revision and one reassessment. Persistent disagreement should be visible in the packet or cause a story to drop, not start an endless optimization loop. Provider failure should use the existing fallback chain and record reduced coverage. It should not trigger an obligatory new conversation with Nick before any work can continue.

## Images and alternatives

Keep the three existing formats and meme-first preference. Require one rendered, inspected image per retained post. Prefer one recommendation and optionally a second image only when its relationship or format is meaningfully different. The image is part of the review package, not a text prompt promising future work.

Start visual feasibility during pitch selection. A story should not survive to the end only to discover that all available images are illegible, irrelevant or barred by existing rights rules. Complete final rendering after copy stabilizes so body hashes do not churn.

A classic meme must work on a familiar professional situation even for someone who does not recognize the named company. Preserve correct template semantics and readable text. If the joke needs a paragraph of explanation, use a source capture. A synthetic workbench image remains the third option and should be explicitly identified as generated in its provenance and alt text.

Render requests can take time. Treat generation as a resumable job with a recorded request or job identity, expected artifact, state, retries and error. Poll a running job; do not duplicate it because the first wait returned no image. Save the resulting file, inspect full size and phone size, then hash it. Missing or failed images keep the affected post incomplete. Continue other posts and report the precise unfinished item rather than stopping the whole week.

Keep source and art rights states explicit. A review-only classic template can remain an optional comparison, but a generation run intended to remove future friction should provide at least one recommendation that can clear the current attachment policy. Use a publishable alternative when one exists. Do not infer a license from the meme renderer being open source.

The shared visual schema currently says each post has one row. The least disruptive options design is to keep a separate candidate/review manifest under research, preserve all rendered options there, and put only the selected recommendation into `visuals/campaign.jsonl`. Let the orchestrator set a recommendation without claiming Nick selected it. After Nick chooses an alternative, update the ledger row and hashes before approval. This avoids making attachment code interpret multiple competing selected assets.

## Review packet and resume behavior

Put research, alternatives, scores, editorial provenance and the review packet under `research/linkedin-weekly/<run-id>/`. Keep only one recommended schedulable `.md` file per selected post under `app/linkedin/<issue-slug>/`. Current `listItemIds()` recursively treats every Markdown file other than README as a social post, including files in nested folders. Placing `variants.md`, `brief.md` or `review.md` inside the scheduler tree will break lint or accidentally make them scheduling candidates.

The packet should show all seven slots, including empty ones and their reason. For each retained post, show recommended text, optional alternative, a rendered image thumbnail and link, optional second image, source receipts, factual limits, editorial-judgment provenance, and a short recommendation. One explicit approval of a displayed text-and-image pair can authorize both exact items when the wording is unambiguous. Record both approvals in their existing stores. Do not demand separate conversational ceremonies for something Nick has clearly approved together.

Use stable IDs and a manifest with schema version, issue reference, input hashes, stage statuses, chosen pitches, artifact paths, QA results and unresolved work. Resume from the last completed stage. Never overwrite manually edited, approved or pushed copy. Changed input should mark dependent output for regeneration or review. Do not silently reuse old images with changed text.

Separate `generation-complete`, `awaiting-publication-approval`, and `blocked-item` states. A completed generation run can be awaiting approval indefinitely. It has still accomplished the requested unattended generation job.

## Changes by file

| File or area | Required change |
|---|---|
| `.skills/content-repurposing/SKILL.md` | Make it the single autonomous generation entry point; optional weekly inputs; decided-topic support; seven-slot policy; independent reporting desks; cautionary lane; variants; rendered-image completion; resume manifest; bounded reviews; explicit approval boundary. Keep the existing takes behavior tied to a finalized approved essay. |
| New repurposing references | Weekly-input and run-manifest schemas; evidence-packet and pitch schema; review-packet template; prompt contracts; historical-performance method. Keep the main skill short enough to use. |
| `.skills/hooks/SKILL.md` | Add delegated selection mode: the orchestrator picks and records alternatives without awaiting the author. Keep interactive selection for standalone invocation. Reconcile its 210-character rubric with the current 140-character house limit. |
| `.skills/icp-focus-group/SKILL.md` | Add inherited-context mode for an explicitly invoked workflow with already-set content, goal and personas. Do not require repeated user OK. Preserve questions for genuinely missing indispensable context. Define documented provider degradation and bounded revision behavior. |
| `.skills/content-discovery/SKILL.md` | Add weekly-newsroom handoff so independent applied-AI pitches can feed social directly without requiring a separate essay decision. Preserve raw-first research and the case-study library. |
| `.skills/social-visual-system/SKILL.md` and schema | Support agent recommendation separately from human selection and approval; define alternative-candidate storage; resumable rendering and finite retries; one inspected recommendation per retained post. |
| `.skills/social-meme-campaign/SKILL.md` | Keep template semantics and art-rights checks. Clarify that verified cautionary stories are allowed, while fear bait and humiliating jokes are rejected. The current blanket word `fear` is too broad for the user's new direction. |
| `app/linkedin/README.md` | Document seven slots, target five, one companion, independent topics, exact approval semantics, current live mode, supported scheduling fields, and alternative storage. Remove directions to clear machine locks manually. |
| `app/scripts/lib/linkedin.mjs` | Parse and validate an optional companion delay such as `offsetMinutesAfterIssue`; resolve actual issue time plus delay, mutually exclusive with per-post hour. Preserve legacy behavior. |
| `app/scripts/linkedin-lint.mjs` | Validate hours, delay conflicts and day-zero-only delay. Add policy-aware weekly checks without applying new rules to historical batches. Make the short-post target a soft check or explicit exception rather than immutable 1,400-character ceiling. |
| Weekly manifest validator | Enforce at most seven recommended personal posts, unique offsets 0–6, at most one per day, required day-zero companion when complete, and one rendered visual recommendation per retained post. Validate candidates outside the scheduling tree. |
| `overview.md` and relevant project workflow instructions | Describe the new generation contract, pending analytics ingestion, and continued per-item publication gate. Remove stale five-weekday-only assumptions. |

Do not change the global posting hour from unrelated timing folklore. No schema change is needed merely to support weekend offsets: the reader already accepts nonnegative integers. Enforce 0–6 within the new weekly batch contract rather than breaking legacy posts with longer offsets.

## Historical posts and performance

Create an optional ingestion lane now, but do not infer the results before Nick supplies the data. Preserve the original export and screenshots. Normalize post ID, URL, exact text, timestamp and timezone, media, impressions, reactions, comments, reposts, saves, sends, profile views, follows, paid status and collection date. Missing fields must stay missing, not zero.

Separate organic and boosted performance. Compare posts at similar ages where possible and account for changing follower count or reach era when the export allows it. A lifetime total for an old post cannot fairly compete with yesterday's post. Avoid treating a preselected set of viral posts as the whole account history.

Have a blind content-coding pass record hook family, story shape, negativity or positive outcome, stakes, named subject, evidence strength, image format, audience, length, CTA and specificity before exposing performance. Then inspect patterns across the full sample using medians, ranges and rates. A few correlated features in one viral post are hypotheses, not a recipe. Compare cautionary posts with success stories that had similar novelty and addressability so emotion is not confounded with stronger reporting.

Produce a compact pattern report and update a hypothesis ledger. Each finding needs supporting post IDs, counterexamples, sample size, uncertainty and a next test. Do not silently turn an association into a hard writing rule. New runs should read only the current pattern summary and approved examples, not the entire historical export every time.

## Acceptance checks

1. Invoke with a real issue and no weekly input. The run completes research, editorial choices, recommended post files, alternatives, images and a review packet without asking Nick to pick hooks, pitches, jurors or templates.
2. Invoke with a decided topic but no essay file. The system produces a complete provisional packet and explains the materialization dependency; it does not invent an approved essay.
3. A seven-story pool produces no more than seven daily recommendations. A three-story pool yields three, with honest empty slots. Failure to produce a companion leaves the run incomplete rather than falsely compliant.
4. Independent story briefs need no semantic overlap with the newsletter. Duplication checks still reject the same claim in new nouns.
5. At least one cautionary research lane runs. Weak failure evidence loses to stronger constructive stories. Verified failures remain eligible even when the meme skill rejects fear bait.
6. Every recommended body and alternative has a claim ledger. Unsupported first-person experience and unattributed vendor metrics fail review.
7. Every retained post has an actual inspected image and a recommendation. A timed-out generator resumes its existing job, and copy changes invalidate stale body hashes.
8. Review artifacts and variants never enter `readAllItems()`. Running ordinary LinkedIn lint over the full repository remains successful.
9. A Tuesday issue at 11:25 UTC resolves its companion at 12:25 UTC. A near-midnight issue crosses the date correctly. Relative delay plus `postHourUTC` fails validation. Existing absolute-hour behavior stays unchanged for legacy files.
10. Re-running a batch preserves manually edited, approved and pushed items. No run writes approval or machine send locks without the existing authorization and scheduling path.
11. No-approval output cannot push through the live scheduler. An approved text-and-image pair clears the existing attachment and identity gates. An approved post without its image remains blocked from sending.
12. Historical ingestion preserves missing metrics, separates boosts, does not double-count repeated exports, and reports sample limits. A viral-only sample is labeled selected and cannot establish account-wide success rates.

The first practical proving run should use the already-live Rockwell issue, in generation-only mode. It will expose whether the one-skill contract actually finishes without Nick's choices and whether rendered visuals, variants and evidence fit into a compact review experience.
