---
name: content-repurposing
description: Plan and draft the weekly LinkedIn batch off each approved newsletter issue — 5 short posts, one per weekday (offsets 0,1,2,3,6), sourced newsroom-style, not mechanically atomized. Only 1-2 posts slice the essay itself; the rest come from 6-10 "journalist" subagents who investigate the essay's concept in current news (web search + last30days) and return story pitches, saved raw-first, scored by icp-focus-group at the pitch stage, and whittled to the best 5. Posts are 100-180 words, natural, and hard-anti-slop (no hashtags, no tics — LinkedIn readers can now one-click flag AI slop). Drafts are refined through icp-focus-group before Nick sees them; he approves each post. ALSO auto-generates 1-3 short site "takes" that drip out after the issue (no approval, deduplicated against every past take). Use right after an essay is approved (going into the publish queue). Composes with writing-voice, hooks, icp-focus-group, last30days, and content-builder. Backed by research/audience-strategy/report.md, research/linkedin-post-craft/report.md, and research/linkedin-breakout/report.md (the two-reach-games model).
---

# Content repurposing: the weekly LinkedIn newsroom

The newsletter is the weekly pillar (a full article on the site, emailed via Buttondown).
This skill turns each issue's publish week into a **batch of 5 short LinkedIn posts, one per
weekday** — planned on publish day, drafted for Nick to approve, scheduled by the pipeline.
Only 1-2 of the 5 slice the essay itself; the rest are sourced fresh through a newsroom-style
pitch process (below). It also generates the site's `/takes` drip from the same issue.

**Why the redesign:** LinkedIn added a one-click button for readers to flag posts as AI slop.
Mechanically atomized, polished, hashtag-tailed posts are exactly what gets flagged. So posts
are now **short (100-180 words), natural, and individually sourced** — each one something Nick
would plausibly have typed that day, not a slice of a content machine. The anti-slop rules
below are hard rules, not style advice.

It sits on top of three authorities and does not duplicate them:

- **`writing-voice`** owns every word a reader sees, **including readability and sentence
  structure**. Every LinkedIn post follows it (no em dashes, no hype words, no "It's not X, it's
  Y", sentence case, plain and specific). Re-read it before drafting, and run its read-it-aloud
  audit before handing any post back. Clunky or confusing prose is this skill's job to catch,
  not the focus group's.
- **`hooks`** owns the first line. Generate 3-5 first-line options per post and pick the
  strongest on-voice one (the first line is everything above the "see more" fold).
- **`content-builder`** produced the source essay and its provenance in `research/<topic>/`.
  This skill is its distribution arm — but no longer only its slicer.

Three research reports back this skill, read all three:
- `research/audience-strategy/report.md` — the funnel, cadence, algorithm, formats, CTAs, the
  consulting motion (the *why we post* and *how reach works*).
- `research/linkedin-post-craft/report.md` — the **craft layer**: the anatomy of a great
  standalone post, formatting mechanics, and the hook swipe file. Its craft guidance still
  holds; its §7 issue-to-batch atomization procedure predates the newsroom model and is
  superseded by the sourcing process below.
- `research/linkedin-breakout/report.md` — the **reach-games layer**: why in-network engagement
  (saves) and breakout reach (stranger reshares/comments) are *different games*, the breakout
  ingredient list, and the four-post diagnosis (171k vs ~200 on the same story). Summarized in
  "Two reach games" below.

> **This is the commercial-pull channel.** Unlike the Institute (neutral, firewalled), nmajor.com
> *is* Nick's personal + commercial channel. LinkedIn off the "Actual Intelligence" newsletter is
> Nick's **reach engine**, and a tasteful pull toward the (future) consultancy is allowed and
> intended here: people who trust his work look him up and find the consultancy. That pull stays
> honest — full-value posts, reputation over promotion, never a hard pitch, and always anti-hype.
> Where `research/audience-strategy/report.md` frames a neutral publication as the selling or
> lead-gen entity, read it as nmajor.com/Nick's personal channel doing that work; the commercial
> conversation itself still happens on the consultancy.

## The one rule: every LinkedIn post stands alone and gives full value

Each post must deliver a complete, useful thought on its own, with no link or newsletter
required to get the value. The newsletter offers *more* (the full framework, the data, the
worked example), never the *only* value.

- **No teaser-only posts.** "New issue dropping tomorrow" with no same-day value does not
  work and is off-brand. If you point forward, do it from inside a post that already gave a
  full insight: "I go deeper on this in this week's issue."
- **No cliffhanger withholding.** Never "the #1 mistake is... subscribe to find out."
  Curiosity from demonstrated competence beats curiosity from withholding.
- **Each post is self-contained.** A reader who never clicks through still got something
  they can use. That is what earns reach (dwell time, saves) and trust.

## Hard rule: the hook clears the fold (≤ 140 characters)

The hook is the first paragraph, everything visible above LinkedIn's "see more" cut. On mobile,
which is most of the traffic, that cut lands at about **140 characters**, and a blank line ends
the preview even earlier (`research/content-hooks/report.md`, confirmed 2026). So on **every**
personal post the first paragraph is **140 characters or fewer**, kept as a single paragraph,
front-loading the most concrete, true thing. Design for the mobile fold and desktop takes care of
itself.

This is not a guideline, it is enforced: `npm run linkedin:lint` **fails** any personal post whose
first paragraph exceeds 140 characters. (Already-pushed history is grandfathered at the old 210
ceiling; business/preview posts are exempt, because they are link-summaries, not reach hooks.)

## The motion: 1 issue → 5 short personal posts, one per weekday

Every post goes to **Nick's personal profile** — the reach + selling engine (personal profiles
out-reach company pages 5-8x; `research/audience-strategy/report.md` §4). The batch is planned
on publish day (Tuesday) and covers the week:

| slot | day | `offsetDays` |
|------|-----|--------------|
| 1 | Tuesday (issue day) | 0 |
| 2 | Wednesday | 1 |
| 3 | Thursday | 2 |
| 4 | Friday | 3 |
| 5 | the following Monday | 6 |

Weekends off. The scheduler machinery is unchanged: posts live in
`app/linkedin/<newsletter-slug>/`, carry an `offsetDays` (never a date), and each needs Nick's
per-post `approved:` — agents never set it.

**Only ~1-2 of the 5 atomize the essay itself.** Usually the issue-day post (slot 1) is the
essay's sharpest slice, so the newsletter has a natural social companion and the week coheres.
The other 3-4 range wider: they take the essay's general concept and investigate it freshly,
through the newsroom below. Five slices of one 700-word essay is the old model, and it read
like one idea five times — which the algorithm, the reader, and now the slop button all punish.

## Sourcing: the newsroom

The non-essay posts are sourced like a newsroom pitches stories, not written from thin air.

1. **Spin up 6-10 "journalist" personas as subagents**, each with a distinct beat anchored to
   the essay's general concept. Beats to draw from (vary them per week, don't run the same
   roster every time): follow-the-money, how-work-changed, vendor-watch, mid-market operators,
   the contrarian desk, the historical-precedent desk, regulation-and-liability, the
   practitioner's workbench. Each persona investigates **current news on its beat**: web search
   for reporting and primary sources, plus the **`last30days` skill** for what people are
   actually saying on Reddit, X, Hacker News, and YouTube in the last 30 days.
2. **Each journalist returns 1-2 story pitches.** A pitch is: a headline hook, the story in
   3-4 sentences, verified sources with URLs, why-now, and the first-person angle Nick could
   honestly carry. No sources, no pitch.
3. **Save everything raw-first**, per the repo research pattern: each journalist's full
   findings and pitches go unedited to `research/<batch-topic>/raw/` (name the topic after the
   week's theme). After scoring, write `research/<batch-topic>/report.md` with the pitch pool,
   scores, and which pitches won — regenerable from raw at any time.
4. **Score the pitches with `icp-focus-group` at the pitch stage.** The panel scores the
   *idea*, not prose: stop-scroll appeal, relevance to the ICP, and breakout potential. The
   essay's own 1-2 strongest slices enter the pool as pitches too and compete on the same
   terms — with the one constraint that at least one essay-tied pitch survives, so the week
   connects to the issue.
5. **Whittle to the best 5 and draft them.** Nick sees the winning 5 as drafted, refined
   posts — never the pitch pile.

Guardrails, binding on every pitch-derived post exactly as on an essay-derived one:

- **Same rigor.** Every claim traces to a verified source in `raw/`. A journalist persona is a
  sourcing device, not a license to invent; open and confirm each source, same as
  `content-builder`.
- **On-beat and thematically coherent.** Range across angles within the essay's broad concept,
  not onto an unrelated topic. The week should read as one body of thinking.
- **Distinct and deduplicated.** No two posts (or takes) make the same point; dedup against the
  essay, the other posts in the batch, the takes, and past batches.
- **Still Nick's, still standalone.** First person only where it is genuinely his, full value
  with no newsletter required, on-voice, honest.

If the pitch pool only yields 4 posts worth shipping, ship 4 and leave a weekday empty rather
than pad to 5. The cadence is a target, not a quota.

## Post shape: short and natural

Target **roughly 100-180 words** per post. The rough shape — deliberately loose, never a
template: a hook first line (the ≤140-char fold rule above), then about two short paragraphs
of 2-3 sentences each, then stop. Variants are all fine: "hey, I learned this today," "here's
a thing I just found," setup→payoff, a plain observation with one number in it. The test is
that it reads like something Nick typed between meetings, and is short and punchy enough that
he'd actually read it in his own feed.

Enforced: `npm run linkedin:lint` fails any personal post whose visible body (HTML comments
excluded) exceeds **1400 characters** — roughly the 180-word ceiling with headroom. If a draft
needs more room than that, it's an essay or a take, not a LinkedIn post.

## Anti-slop rules (hard — this is the reason for the redesign)

LinkedIn readers can now one-click flag a post as AI slop. Every rule here exists because its
violation is a recognized slop marker. These are lint- or review-enforced, not suggestions:

- **NO hashtags.** None. The trailing `#AI #BuildVsBuy` block is dead. Lint fails any personal
  post with a hashtag in its visible body.
- **No uniform 1-line paragraph cadence.** Paragraph lengths must be uneven; broetry's
  one-line-per-line drumbeat is the single most recognizable slop shape.
- **No staccato fragment-echo tics** ("Not the launch post. The bill.") and no rule-of-three
  lists. (`writing-voice` already bans these; on LinkedIn they are also flag bait.)
- **No symmetric callback endings** that snap neatly back to the hook. End flat, even
  mid-thought. A too-tidy bow reads as generated.
- **Contractions, hedges, and mundane concrete detail are good.** "I think," "I'm not sure
  this holds," the name of the tool, the actual number, what day it was. Polish is suspect;
  a slightly unfinished edge is what human posts have.
- **Everything in `writing-voice` still governs** — no em dashes, no hype words, sentence
  case, plain and specific, read it aloud.

## Two reach games: baseline (saves) vs the breakout spike

`research/linkedin-breakout/report.md` is required reading for this skill. Its core finding:
**in-network engagement and breakout reach are different games.** Do not score the week's five
posts the same, and do not treat a low-impression save-game post as a failure.

- **Baseline (the save game) — most of the week.** Niche, ICP-specific, save-worthy. These win
  on saves, dwell, and meaningful comments from the *right* people, not raw impressions. A
  234-impression post that books a call did its job. Measure by saves + comments + profile
  clicks.
- **Spike (the breakout game) — at most one post per week, and only when a real news peg
  exists.** Breakout is powered by stranger reshares and comments (public, identity-signaling
  acts), which a save can't produce — a story travels, a checklist doesn't. Measure by
  impressions + reshares + stranger-comments. The newsroom is a natural spike source: a
  journalist pitch built on a novel, named, first-of-kind event is exactly the peg.

**You cannot manufacture a breakout every week, and shouldn't try** — a feed of nothing but
"the latest AI disaster" becomes the fear-merchant the brand rejects. Most posts play the save
game. When a genuine peg exists, build that one post to the breakout shape:

1. **Lead with the event, not the lesson.** The news peg goes first.
2. **Make it a story, not a deliverable.** A narrative carries the reshare.
3. **Keep arousal high and honest.** Anxiety/surprise from *real* stakes, never manufactured.
4. **Maximize addressability.** Frame so the widest honest pool thinks "this could be us,"
   then let the ICP self-select in the comments.
5. **Close on a safe, answerable question** a stranger can answer and look thoughtful doing
   so — this drives the stranger-comments that break a post out. Not a flat hot take, never
   "comment YES." This is the single cheapest lift on most drafts.
6. **Carry a mild, universal moral frame** (accountability, protecting customers) — never
   partisan outrage, even though it would spread further. That line is the brand.
7. **Post it fast, in the timing window,** and be in the comments in the first hour.

Everything in `writing-voice`, `hooks`, and the anti-slop rules still governs. Breakout is an
*addition* gated by a real news peg, never a license to bait. Full evidence and the four-post
diagnosis: `research/linkedin-breakout/report.md`.

## CTA and link rules

- **The always-on CTA is the profile, not the post:** Nick's Featured section pins the lead
  magnet / newsletter as a 1-click link. Most posts need no link at all.
- **Link only in the first comment, never in the body.** External links in the post body
  reduce reach; when a post genuinely needs its source or the issue linked, it goes in the
  first comment ("link in the comments"), and the body says so plainly or not at all.
- **Soft footer CTA on 1-2 posts per week, not five.** Aggressive CTAs on cold content tank
  reach and trust. Most posts end on their own value.
- **Always self-identify the newsletter — assume the reader has never heard of it.** A cold
  LinkedIn reader does not know "Actual Intelligence" is a newsletter, so a bare "in this
  week's Actual Intelligence" reads as gibberish. Every mention must teach the stranger three
  things in the sentence itself: that it is **a newsletter**, its **name**, and **what it's
  about**. Pattern: "[value I gave] ... I go deeper on this in **Actual Intelligence, my
  newsletter on plain-English AI for people who run things**. Link's in my profile." Never a
  cadence claim the newsletter can't keep. **Vary the wording** across posts and weeks — the
  same self-ID sentence copy-pasted every time is an AI tell.

## Cadence and scheduling

- **5 posts/week, one per weekday, weekends off.** The batch is planned once, on publish day.
- **Scheduling is automatic** once Nick approves and the issue is live: the LinkedIn pipeline
  (`scripts/schedule-linkedin.mjs`) resolves each post's `offsetDays` against the issue's real
  pubDate and (in live mode) pushes it to Postiz. You set the offset (0, 1, 2, 3, 6), never a
  date. NOTE: while the pipeline is in **shadow mode** it only announces the schedule to
  Discord and posts nothing — confirm the mode in `app/linkedin.config.json` (`enabled`).
- **No full automation of posting itself, no auto-DM bots, no engagement pods** (ToS risk,
  shadowban risk, and off-brand). Nick approves every post before it's scheduled.

### The company-page channel is PENDING (route everything to personal for now)

The `channel: business` slot **has no page yet** — the consultancy company page is not created.
Do **not** produce a `business-preview.md`; route the full batch to `personal`. When the page
exists, this slot activates with one auto-approved newsletter preview per issue at
`offsetDays: 0` (see `app/linkedin/README.md` for the dormant `autoApprovePreview` policy).
Until then, skip it.

## Output: schedulable drafts coupled to the newsletter

The batch is written as **schedulable files**, one per post, co-located with the newsletter by
slug, NOT in `research/`:

```
app/linkedin/<newsletter-slug>/
  personal-<angle>.md      # channel-angle.md ; one file per post, five per week
                           # angle = a short label for the post's story
                           # (e.g. personal-vendor-bill.md, personal-contrarian.md)
```

Each file carries frontmatter (see `app/linkedin/README.md` for the full spec):

```yaml
---
newsletter: <newsletter-slug>   # the parent issue; this is the coupling
channel: personal               # all posts, until the consultancy page exists
offsetDays: 2                   # 0,1,2,3,6 = Tue,Wed,Thu,Fri,following Mon.
                                # NEVER an absolute date.
angle: vendor-bill              # label
# approved:                     # leave UNSET — Nick's sign-off, agents never set it
---
```

Storing the **offset, not a date**, is the whole point: the scheduler resolves it to a real
date only when the newsletter actually publishes, so a delayed or reordered issue carries its
LinkedIn posts with it automatically. You do **not** pick or write calendar dates here, and you
do **not** schedule in Postiz by hand — `scripts/schedule-linkedin.mjs` does that once Nick
approves and the issue goes live.

Then refine the batch through the ICP focus group (below) and present the **refined** batch to
Nick in chat: each post's full text, its beat/pitch provenance (which journalist, which
sources), the chosen hook (plus `hooks` runner-ups), its offset, any link/CTA, and a one-line
note of what the panel improved. Nick approves by setting `approved:` on the files he wants
(same gate as the queue). Run `npm run linkedin:lint` to check the batch is valid — it now
enforces the fold rule, the 1400-char ceiling, and the hashtag ban on every unpushed personal
post.

## Required: refine with the ICP focus group before Nick ever sees it

The focus group runs at **two stages**, and both are required:

1. **Pitch stage** (before drafting): score the pitch pool — the *ideas* — for stop-scroll
   appeal, ICP relevance, and breakout potential. This is what whittles 10-20 pitches to the
   best 5. No prose is judged here.
2. **Draft stage** (before Nick): run the panel (mini, 3 jurors) on each drafted post and
   iterate at least two full rounds, until the gates pass and the blockers are gone, not until
   a number looks nice. A post that already clearly passes can stop after one round; do not
   burn calls chasing a 4 up to a 5.

The `icp-focus-group` skill is the critic; this skill holds the pen. They **alternate**, and the
roles never mix:

1. `icp-focus-group` assesses a draft and returns prioritized fixes. It does not rewrite
   anything.
2. **This skill applies them.** Read the fixes, decide which are real (a fix several jurors
   raise, or one tied to a failed gate, outranks a lone nitpick), and rewrite the post here,
   every word still following `writing-voice`.
3. **Re-run the read-aloud audit — and the anti-slop check.** The panel judges whether the
   *message* lands, not whether the prose is clean or reads human. Fix run-ons, nested clauses,
   and anything you stumble over aloud; then scan for the slop markers above. Beware the
   failure mode where panel rounds *polish* a post into slop — if a revision got smoother and
   more symmetric, rough it back up.
4. Hand the revision back to `icp-focus-group` to re-assess. Loop until the gates pass and the
   blockers are gone.

When you present the batch to Nick, show the **refined** version of each post plus a one-line
note of what the panel flagged and how the score moved, so he can see the lift was earned.

The human gate is unchanged: an agent may pitch, draft, revise, and re-test, but only Nick sets
`approved`.

## Engagement is the other half (remind Nick, don't automate it)

Posting is 20% of the job. The growth engine is the daily 10-20 minutes of genuine,
value-adding comments on an "engage list" (a handful of clients, prospects, peers) and
replying to every comment on his own posts in the first 30-60 minutes. This skill produces
the posts; it should remind Nick that the comments are where the audience actually comes
from, especially early. With a post going out daily, this matters more, not less.

## On-brand vs avoid (quick gate)

- **On-brand:** short standalone full-value posts; true, specific, plainly-stated hooks; the
  author's real firsthand experience leading; fresh sourced stories off the week's concept;
  hedges and mundane detail; soft, infrequent CTAs; honest "here's what doesn't work" takes.
- **Avoid:** hashtags (zero, lint-enforced); teaser-only posts; cliffhanger withholding;
  broetry and uniform one-line cadence; fragment-echo tics; rule-of-three; symmetric callback
  endings; engagement bait ("comment YES"); manufactured-vulnerability stories; posts over
  ~180 words; promotion-heavy weeks; any claim without a verified source in `raw/`.

## Honest positioning (the guardrail)

These posts build Nick's authority while he is new to consulting. Follow the honest line
from `research/audience-strategy/report.md` §5: lead with demonstrated work and real
adjacent engineering expertise; never invent a track record, client count, or experience;
use first person only for what Nick genuinely did. "Show, don't tell." Not foregrounding how
new the consulting practice is is fine; fabricating or implying a track record that doesn't
exist is not. If a post would only land by implying clients/results that aren't real, cut it.
This binds journalist-pitch posts too: Nick's angle on a sourced story is his *opinion* on it,
never an implied engagement.

## Also: auto-generate the /takes drip (no approval, deduplicated, skip when nothing's fresh)

Every repurposing run has a **second output** alongside the LinkedIn batch: **0-3 short
"takes"** — one-line, opinionated site content atomized from the same essay — written as
real files in the `takes` collection and scheduled to drip onto `/takes` in the days after
the issue. This is the steady, always-on pulse on the site between weekly essays.

**These are different from LinkedIn posts in one crucial way: takes need NO approval.** They
auto-generate and auto-schedule. There is no `approved` field on a take (unlike essays and
LinkedIn posts, takes are exempt from the human gate by design — Nick asked for this). You
still never touch `approved`/`emailedAt`/`pushedAt`/`pubDate` on essays or LinkedIn posts;
takes simply don't have that gate. Write them to ship.

### The rules (this is the whole spec — follow it exactly)

- **1-3 per issue, and 0 is allowed and correct.** Aim for a steady drip, but never pad.
  If the essay yields only one genuinely fresh take, ship one. If it yields none that aren't
  already covered, **ship zero and say so** — the cadence is regular, not forced. Skipping an
  issue is fine; a later issue with fresh material picks the drip back up.
- **Never a duplicate idea. Different framing of the same claim IS a duplicate.** The whole
  point: someone scrolling `/takes` must never think "these five are basically the same." A
  reworded, re-angled, or narrowed version of a claim already in the corpus does **not** count
  as new. Only a genuinely distinct claim does.
- **Consistent with the essay's real takeaways.** Every take is a sharp, standalone one-liner
  drawn from a point the essay actually makes (use the spine in `research/<topic>/`). Never
  invent a claim the essay doesn't support. Same honesty guardrail as the LinkedIn posts.
- **Each take stands alone and follows `writing-voice` to the letter.** A take is a complete
  thought in one or two sentences — no link, no teaser, no "read more." Look at the existing
  takes in `app/src/content/takes/*.md` for the exact register.

### The procedure

1. **List candidate takeaways.** From the essay + its spine, pull the sharpest standalone
   one-liners it could yield (usually 3-6 candidates before dedup).
2. **Load the dedup ledger.** Read the `idea:` line of **every** existing take in
   `app/src/content/takes/*.md`. That set of canonical claims is the memory — no separate
   ledger file exists, and none is needed.
3. **Write each candidate's `idea`** — a canonical, framing-independent statement of its claim
   (e.g. "Banning AI drives it into unmonitored shadow use, which is riskier than allowing
   it."). This is the fingerprint the dedup compares on.
4. **Drop duplicates.** Remove any candidate whose `idea` is basically the same as one already
   in the corpus, or as another candidate in this same batch. Judge on the *claim*, not the
   wording. Be strict: when in doubt, it's a duplicate — drop it.
5. **Keep 1-3 survivors (or 0).** If nothing survives, generate no files and note "no fresh
   takes this issue — all takeaways are already covered" when you report to Nick. Otherwise
   take the 1-3 sharpest, most distinct survivors.
6. **Write the files** (see frontmatter below), sharpest take at the shortest offset.
7. **Validate:** run `npm run takes:lint`. It enforces the structure and a hard exact-duplicate
   backstop; fix anything it flags. (Your step-4 judgment is the real dedup — the lint only
   catches a literal repeat that slipped through.)

### Output: schedulable take files

One file per take at `app/src/content/takes/<short-descriptive-kebab-slug>.md` (name it like
the existing ones — a memorable slug from the claim, e.g. `shadow-use-is-the-risk.md` — unique
across the dir; `source` carries the provenance, not the filename). The body is empty; the
`text` field IS the take.

```yaml
---
text: "The take itself, one or two sentences, full writing-voice."
draft: true                 # the lock: unscheduled until the source essay publishes.
source: <essay-slug>        # the parent essay; how schedule-takes finds & stamps it.
offsetDays: 2               # drip cadence: A=+2, B=+4, C=+6 days after the issue.
idea: "Canonical, framing-independent claim — the dedup fingerprint."
pubDate: 2099-01-01         # PLACEHOLDER. schedule-takes stamps the real date at publish.
# no `approved` — takes have no human gate.
---
```

**Storing `draft: true` + `offsetDays` + a placeholder `pubDate` is the whole trick** (same as
LinkedIn's offsets). When the source essay actually goes live, `scripts/schedule-takes.mjs`
stamps `pubDate = essay pubDate + offsetDays` (at 00:00 UTC) and flips `draft: false`; the
site's `isLive` gate then reveals each take on its day as the daily build runs. You never pick
a calendar date, and a delayed or reordered issue carries its takes with it automatically. Nick
approves nothing here — it just happens.

### When you report to Nick

Mention the takes briefly under the LinkedIn batch: how many you generated (or that you skipped
because nothing was fresh), each take's text, and one line on what made it distinct from the
existing corpus. He doesn't approve them — this is an FYI so he can see the drip is honest and
non-repetitive, and delete or tweak any file if he ever wants to (they're just files).

## Isaac later

The motion starts with Nick's profile only. When Isaac comes online, the same newsroom can
pitch for his page from the same weekly pool (different beats, in his voice once we have a
`voice-isaac` profile), so one investigation seeds both profiles without doubling the work.

## When not to use this

A thin essay no longer sinks the week — the newsroom ranges wider than the essay by design.
But the same honesty applies to pitches: don't ship a post whose pitch has no verified source
or no real why-now, just to fill a weekday. If only 4 pitches survive scoring, ship 4. If a
whole week's pool is weak, say so and run a lighter week rather than pad — a flagged-as-slop
post costs more than a quiet Friday.
