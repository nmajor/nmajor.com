# Weekly newsroom rules

## Slate

There are seven available offsets, one per day from Tuesday through Monday:

| day | offset | priority |
|---|---:|---|
| Tuesday | 0 | required newsletter companion |
| Wednesday | 1 | normal |
| Thursday | 2 | normal |
| Friday | 3 | normal |
| Saturday | 4 | expansion |
| Sunday | 5 | expansion |
| Monday | 6 | normal |

Target five posts. One to seven may ship. Four is an ordinary good week. Weekend slots are filled
only when extra stories clear the same quality bar. Zero is a valid failed run, but it must be
reported as incomplete because the companion is required.

The Tuesday companion uses `offsetDays: 0` and `offsetMinutesAfterIssue: 60`. The other posts use
their daily offset and the day-specific `postingTimesUTCByWeekday` prior in
`app/linkedin.config.json`. A post-level `postHourUTC` is only for a deliberate exception. The
evidence and eight-week measurement plan live in
`research/linkedin-posting-times-2026-09/report.md`; the current map is a US-heavy-audience prior,
not a universal LinkedIn rule. Independent posts still wait for the parent issue to go live because
the current scheduler couples the batch to that issue.

Exactly one slot is reserved for the newsletter. Other selected stories may share its subject if
they win on their own evidence and usefulness, but they do not receive a quota. All slots stay on
the durable beat: applied AI producing, failing to produce, or changing observable value in real
work.

## Reporting desks

Start with 12 to 18 pitches. Run distinct desks across:

- operational results and workflow change;
- cost, measurement, and build-versus-buy;
- customer work and nontechnical adoption;
- implementation, interfaces, and knowledge retrieval;
- accountability, regulation, and liability;
- failures, disappointments, near misses, and recoveries;
- one open desk for the strongest timely applied-AI story.

At least one desk actively hunts cautionary stories. This is a reporting obligation, not a
publication quota. A typical five-post slate should include one well-supported cautionary story
when one clears the bar. A second can win if it exposes a different failure mechanism. Review the
rolling four-week mix so raw reach does not turn the account into a disaster feed.

For every negative story, distinguish confirmed facts from allegations, a missed projection from
a demonstrated failure, association from causation, and one deployment from AI in general. Look
for recovery and changed practice. Aim the joke at incentives or a recognizable decision error,
never affected customers or individual employees.

## Selection order

Apply hard gates before model scoring:

1. evidence and claim support;
2. operator relevance;
3. duplication against the issue, recent posts, the current slate, and takes;
4. a defensible interpretation Nick can honestly carry;
5. visual feasibility and rights path.

Then score survivors from 0 to 5 on evidence strength, novelty, operator addressability, practical
usefulness, reach potential, and slate distinctiveness. Record the reasons, not only the totals.
The panel is decision support. It cannot rescue a factual failure.

Choose across industry, job function, business stake, source type, outcome, and emotional
register. Different companies making the same claim still count as duplicate posts.

Most posts play the baseline game: saves, sends, useful comments, profile visits, and the right
readers. At most one post per week plays the spike game. A spike requires a real, timely, named event with broad
professional stakes. Never manufacture one with fear or a louder hook.

## Draft contract

Write for an owner, COO, CIO, transformation lead, or business-unit leader at a non-tech company.
Lead with throughput, margin, reliability, customer experience, workforce capacity, or risk.
Keep technical detail only when it explains the result.

Normal length is 100 to 180 words. Shorter is fine when complete. Longer is allowed when evidence
needs room, but must carry an explicit `lengthReason` in frontmatter. The platform limit remains a
hard stop; the normal house limit is a warning, not a reason to pad or amputate a good post.

Every post needs one checkable claim, a receipt near the top, one attributable judgment, and the
uncertainty beside the claim it limits. No hashtags, engagement bait, fake firsthand experience,
uniform one-line cadence, forced rule of three, or tidy callback ending. Apply `writing-voice` and
`unslop` after every revision.

Generate 8 to 10 grounded hooks across distinct families. In autonomous mode, select the strongest
one against the post's reach game and keep at most two real alternatives. Do not pause for a human
choice.

Do not manufacture body variants to make the review packet look fuller. Create one only when the
same evidence supports a different judgment, reader, mechanism, or emotional register that could
reasonably change the selection. Store it as a standalone Markdown file under the run's `variants/`
directory and pair it with a meaningfully different rendered visual. Candidate 1 is always the
recommended scheduler-facing pair; variants can replace it only after Nick selects them.

## Review

Keep fact checking separate from audience critique. Run the focus group in inherited-context mode
at pitch and draft stages with the fixed goal and `.icps` personas supplied by this workflow. One
pass is enough when gates pass. Allow one substantive revision and one reassessment. Persistent
disagreement is reported or the story is dropped. Provider degradation is recorded and does not
create a new user-confirmation step.

## Visual contract

Every retained post gets an actual rendered, inspected image. Test the formats in this order:
classic meme, real annotated source capture, synthetic workbench photo. Prefer the meme when a
familiar relationship carries the post at a glance. A source capture is better when the source
itself is the proof or joke. Workbench photos are the fallback.

The orchestrator chooses and records one recommendation without waiting for Nick. An optional
backup must use a meaningfully different visual relationship or format. Store all candidates in
the run's research manifest. Put only the recommendation into the scheduler-facing visual ledger,
at `status: review`, with `recommended_by: agent`. Recommendation is not human selection,
approval, rights clearance, or attachment.

Start feasibility during pitch selection and render only after copy stabilizes. Record a job ID,
expected path, state, and retries for long-running generation. Resume the same job after a wait;
do not start duplicates. Inspect at full size and about 300 pixels wide. A classic-template
recommendation may remain review-only while its exact rights state is assessed. Never replace a
recognizable meme image with generated imitation artwork.
