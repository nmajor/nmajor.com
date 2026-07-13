---
name: content-repurposing
description: Turn one finished/approved newsletter post into a small batch of standalone LinkedIn posts (default 3) for Nick to approve and schedule in Postiz, AND auto-generate 1-3 short site "takes" that drip out after the issue (no approval, deduplicated against every past take). The minimum-viable distribution motion that hangs off the weekly newsletter. Use right after a post is drafted and approved (going into the publish queue), or any time you want to atomize an existing post. Always refines each LinkedIn post through a few rounds of the icp-focus-group panel before showing Nick, so he only ever sees a polished version. Composes with writing-voice, hooks, icp-focus-group, and content-builder. Backed by research/audience-strategy/report.md, research/linkedin-post-craft/report.md, and research/linkedin-breakout/report.md (the two-reach-games model: baseline saves vs the breakout spike, and why one of Nick's posts hit 171k while its siblings sat at ~200).
---

# Content repurposing: newsletter to LinkedIn

The newsletter is the weekly pillar (a full article on the site, emailed via Buttondown).
LinkedIn posts are **atomized slices** of it. This skill takes one finished post and
produces a small batch of LinkedIn posts (default **3**) for Nick to approve, tweak, and
schedule in his self-hosted Postiz. It is the minimum-viable, repeatable LinkedIn motion.

It sits on top of three authorities and does not duplicate them:

- **`writing-voice`** owns every word a reader sees, **including readability and sentence
  structure**. Every LinkedIn post follows it (no em dashes, no hype words, no "It's not X, it's
  Y", sentence case, plain and specific). Re-read it before drafting, and run its read-it-aloud
  audit before handing any post back: no run-on or nested-clause sentences that lose the reader,
  no metaphor that doesn't stand on its own, varied sentence length. Clunky or confusing prose is
  this skill's job to catch, not the focus group's.
- **`hooks`** owns the first line. Generate 3-5 first-line options per post and pick the
  strongest on-voice one (the first line is everything above the "see more" fold, ~210
  chars desktop / ~140 mobile).
- **`content-builder`** produced the source post and its provenance in `research/<topic>/`.
  This skill is its distribution arm.

Three research reports back this skill, read all three:
- `research/audience-strategy/report.md` — the funnel, cadence, algorithm, formats, CTAs, the
  consulting motion (the *why we post* and *how reach works*).
- `research/linkedin-post-craft/report.md` — the **craft layer**: expand-vs-atomize, the anatomy
  of a great standalone post, formatting mechanics, the 12-template hook swipe file, and a
  step-by-step issue-to-batch procedure (the *how to make the post actually good*). Its §7
  procedure and §4 swipe file are the working method; follow them when drafting a batch.
- `research/linkedin-breakout/report.md` — the **reach-games layer**: why in-network engagement
  (saves) and breakout reach (stranger reshares/comments) are *different games*, the breakout
  ingredient list, and the four-post diagnosis (171k vs ~200 on the same story). Read it to
  judge which post in a batch is the breakout spike and to build that post to the breakout
  shape. Summarized in "Two reach games" below.

> **This is the commercial-pull channel.** Unlike the Institute (neutral, firewalled), nmajor.com
> *is* Nick's personal + commercial channel. LinkedIn atomization off the "Actual Intelligence"
> newsletter is Nick's **reach engine**, and a tasteful pull toward the (future) consultancy is
> allowed and intended here: people who trust his work look him up and find the consultancy. That
> pull stays honest — full-value posts, reputation over promotion, never a hard pitch, and always
> anti-hype. Where `research/audience-strategy/report.md` frames a neutral publication as the
> selling or lead-gen entity, read it as nmajor.com/Nick's personal channel doing that work; the
> commercial conversation itself still happens on the consultancy.

## The one rule: every LinkedIn post stands alone and gives full value

Each post must deliver a complete, useful thought on its own, with no link or newsletter
required to get the value. The newsletter offers *more* (the full framework, the data, the
worked example, the template), never the *only* value.

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
first paragraph exceeds 140 characters. If the hook you want runs longer, break it so the
scroll-stopping line stands alone above the fold and the rest falls below. (Business/preview posts
are exempt, because they are link-summaries, not reach hooks.)

## The motion: 1 issue → 3 standalone personal posts (+ 1 company-page preview once that page exists)

Every atomized post goes to **Nick's personal profile** — that is the reach + selling
engine (personal profiles out-reach company pages 5-8x; `research/audience-strategy/report.md`
§4). Slice the issue into three different personal angles, each a different shape. (Welsh runs
10-20 slices per issue; 3 is the right starting dose for a part-time founder. Scale up later.)

- **Post A — story / insight** (`personal`, issue day or +1). The author's firsthand example
  or the single sharpest insight from the piece, told as a short narrative or a plain
  observation. Full value. Soft footer reference to the issue.
- **Post B — framework / how-to, as a carousel** (`personal`, +2-3 days). The piece's method
  or checklist turned into a document/PDF carousel (the highest-engagement, most-saved format,
  and underused). See the carousel spec below.
- **Post C — myth-bust / reasoned contrarian** (`personal`, +4-5 days). The piece's genuine
  position, argued against the common hype take. This is the natural anti-hype slot. Soft
  newsletter reference.

The A/B/C shapes are the default shapes. What each post is *about* is the next section.

### Source the batch from the whole research effort, not just the published essay (flexible)

A newsletter essay is ~700 words drawn from a research effort that is usually much larger: the
`research/<topic>/` corpus (braindump, seed, report, raw), the case-study library entries it
leaned on, and the adjacent findings, angles, and verified sources from the same push that never
fit the essay. That leftover research is some of the best raw material we have. Slicing only the
published 700 words wastes it and tends to produce three posts that read like one idea three
times, which the algorithm and the reader both punish.

So treat the **source pool** for a batch as the whole research effort behind the issue, not just
the essay. Then decide how far to range, per issue. This is a judgment call, never a hardcoded
ratio:

- **At least one post ties directly to the issue**, so the newsletter has a natural social
  companion and the week coheres. Usually that is the story/spike post (A).
- **The rest may range across angles and research the essay did not cover:** a different named
  case, a data point that got cut, a second finding from the same effort, a regulatory thread, a
  counter-example. Each is still its own standalone post with full value.
- **How far to range depends entirely on the material.** Some weeks the research effort is deep
  and yields two or three genuinely strong adjacent angles; lean in, and let only one post echo
  the essay. Other weeks the essay already used the strong material, and the honest move is to
  atomize the essay as before. Do not manufacture adjacent angles that are not there, and do not
  force everything back to the essay when better material is sitting unused in the research. Read
  the corpus first, then decide.

Guardrails, all still binding on an adjacent-research post exactly as on an essay-derived one:

- **Same rigor.** Every claim traces to a verified source in the research corpus. Adjacent does
  not mean unchecked; open and confirm each source, same as `content-builder`.
- **On-beat and thematically coherent.** Range across angles within the same broad theme or
  campaign, not onto an unrelated topic. The week should read as one body of thinking.
- **Distinct and deduplicated.** No two posts (or takes) make the same point; dedup against the
  essay, the other posts in the batch, the takes, and past batches.
- **Still Nick's, still standalone.** First person where it is genuinely his, full value with no
  newsletter required, on-voice, honest.

The point of doing research raw-first is that one effort should feed a whole week of posts (and
resurface later), not a single essay. This is how.

### The company-page channel is PENDING (route everything to personal for now)

The `channel: business` slot **has no page yet.** nmajor.com is a personal brand and has no
company page; the consultancy company page that would fill this slot is **not created yet**
(name TBD across the ecosystem). So for now the business channel is **disabled/pending**:
do **not** produce a `business-preview.md`, and route the full batch to `personal`. When the
consultancy page exists, this slot activates and gets the one auto-generated **preview of the
newsletter** per issue, described below — until then, skip it.

- **Post P — newsletter preview** (`channel: business`, **`offsetDays: 0`**) — *pending, skip until
  the consultancy page exists.* A short, honest summary of the issue — the gist plus the single most
  useful takeaway — ending with a link to read the full piece (`https://nmajor.com/writing/<slug>/`).
  `offsetDays: 0` resolves to the same day at `postingHourUTC` (15:00 UTC), i.e. ~1 hour after the
  14:00 UTC newsletter send. Its only job is to show the page is alive and point to the asset.
- **The personal-channel rules invert here on purpose.** The "no teaser / no link / be
  self-contained" rules exist to protect *personal-profile reach*; on the company page reach
  isn't the goal and an outbound link to the newsletter is correct and wanted. The one rule
  that still holds: make it a genuine standalone summary (it should read as complete even if
  someone never clicks), not a "read the full thing" cliffhanger.
- **Low effort is the point.** Don't run the company-page preview through the full ICP focus
  group or spend bespoke creative energy on it — it's a mirror of the issue, not a reach play.
  A read-aloud check for clean prose is enough.
- **It auto-publishes — write it to ship as-is.** The preview is the one post that does NOT
  wait for Nick's sign-off: the scheduler auto-approves `channel: business` + `angle: preview`
  posts (the `autoApprovePreview` policy in `app/linkedin.config.json`; see `app/linkedin/README.md`).
  You still leave `approved:` UNSET (agents never write it) — the policy handles it. Because it
  goes out automatically ~1h after the issue, it must be correct and on-voice when you save it:
  summary faithful to the issue, link to the right slug, no claim the issue doesn't make.

Each post maps to spine material from `research/<topic>/` (the braindump, seed, report) so
it is specific and true, never a generic AI opener. A post is "repurpose-ready" if the
source has 3-7 distinct points, 1-3 stories/examples, and 1-2 data points. If it doesn't,
the slice will be thin, say so rather than padding.

### Carousel spec (Post B)

Native carousels were discontinued; a LinkedIn "carousel" now = a multi-page **PDF document
post** rendered as swipeable slides.

- **Slide 1** = the hook (mirror the post's first line / the value promise).
- **Slides 2-N** = one point per slide, mapped to the source's distinct points.
- **Penultimate slide** = a one-screen recap.
- **Final slide** = soft CTA (subscribe for the full breakdown).
- **Length:** 3-10 slides (3-5 = quick tips, 6-10 = a deeper case/framework). Under 5 may
  not justify the swipe; over ~12-15 loses people.
- **Spec:** square 1080x1080 or portrait 1080x1350; mobile-first; big readable text; dense
  and genuinely useful (a deck an enterprise buyer would *save*), never padded to hit a count.

> **Postiz gotcha:** document/PDF posts are not supported by every scheduler. Confirm Postiz
> can natively schedule a document post; if it can't, schedule A and C in Postiz and post the
> carousel (B) manually. Don't assume.

## Two reach games: baseline (saves) vs the breakout spike

`research/linkedin-breakout/report.md` is required reading for this skill. Its core finding
changes how you judge a batch: **in-network engagement and breakout reach are different
games**, and the A/B/C posts above naturally play different ones. Do not score them the same,
and do not treat a low-impression save-game post as a failure.

- **Baseline (the save game) — the framework (B) and myth-bust (C), ~3 of every 4 posts.**
  Niche, ICP-specific, save-worthy. They win on saves, dwell, and meaningful comments from
  the *right* people, not raw impressions. A 234-impression checklist that books a call did
  its job. Measure by saves + comments + profile clicks. This is the home turf of
  `linkedin-post-craft` — keep it exactly as is.
- **Spike (the breakout game) — the story (A), and only when a real news peg exists.** The
  post that can escape Nick's network. Breakout is powered by stranger reshares and comments
  (public, identity-signaling acts), which a save can't produce — so a *checklist* is
  save-able and un-reshare-able, while a *story* is the reverse. Measure by impressions +
  reshares + stranger-comments.

**You cannot manufacture a breakout every week, and shouldn't try** — a feed of nothing but
"the latest AI disaster" becomes the fear-merchant the brand rejects. Most weeks the save
game *is* the job. But when the source essay genuinely rides a novel, named, first-of-kind
event (the `content-discovery` skill tags these **spike**), build the story post (A) to the
breakout shape:

1. **Lead with the event, not the lesson.** The news peg goes first.
2. **Make it a story, not a deliverable.** A narrative carries the reshare; a framework reads
   like a product and doesn't travel.
3. **Keep arousal high and honest.** Anxiety/surprise from *real* stakes, never manufactured.
   ("No hacker. No breach. Just someone trying to move a little faster" is high-arousal *and*
   true.)
4. **Maximize addressability.** Frame so the widest honest pool thinks "this could be us,"
   then let the ICP self-select in the comments.
5. **Close on a safe, answerable question** a stranger can answer and look thoughtful doing
   so — this is what drives the stranger-comments that break a post out. Not a flat hot take,
   never "comment YES." **This is the single cheapest lift on most drafts:** our posts tend to
   end on a statement or a newsletter CTA instead of a question that invites a reply.
6. **Carry a mild, universal moral frame** (accountability, protecting customers) — never
   partisan outrage, even though it would spread further. That line is the brand.
7. **Post it fast, in the timing window,** and be in the comments in the first hour —
   stranger-comments are the escape signal.

Everything in `writing-voice`, `hooks`, and `linkedin-post-craft` about honesty, specificity,
banned hype words, and no engagement-bait still governs. Breakout is an *addition* gated by a
real news peg, never a license to bait — and LinkedIn's 2026 algorithm demotes cheap virality
while rewarding the legitimate high-value breakout, so the honest version is also the effective
one. Full evidence and the four-post diagnosis: `research/linkedin-breakout/report.md`.

## CTA and link rules

- **The always-on CTA is the profile, not the post:** Nick's Featured section pins the lead
  magnet / newsletter as a 1-click link. Most posts need no link at all.
- **Soft footer CTA only, on 1-2 posts per batch:** Don't put a CTA on every post; aggressive
  CTAs on cold content tank reach and trust. In a 3-post batch, one or two carry the reference
  and the rest end on their own value.
- **Always self-identify the newsletter — assume the reader has never heard of it.** A cold
  LinkedIn reader does not know "Actual Intelligence" is a newsletter, so a bare "in this
  week's Actual Intelligence" reads as gibberish. Every mention must teach the stranger three
  things in the sentence itself: that it is **a newsletter**, its **name**, and **what it's
  about**. Pattern: "[value I gave] ... I go deeper on this in **Actual Intelligence, my
  newsletter on plain-English AI for people who run things**. Link's in my profile." Never a
  cadence claim the newsletter can't keep (say "my newsletter," not "my weekly newsletter,"
  unless it truly ships weekly). **Vary the wording** across posts and batches — the same
  self-ID sentence copy-pasted every time is an AI tell. Point to the profile/Featured for the
  subscribe link, never a raw URL in the body (reach penalty).
- **Link placement is genuinely contested (a real source conflict, not settled):** external
  links in the post body reduce reach (van der Blom: ~18.8%; some blogs claim more), and the
  old "link in first comment" workaround is now weakened/penalized. Until we have Nick's own
  A/B data, default to: **no link in most posts (drive via Featured), and when a post does
  link, put it at the end of a longer post with an image.** This is flagged for A/B testing
  in `research/audience-strategy/report.md` §7 — measure signups, not just reach.

## Cadence and scheduling

- **2-4 posts/week, held consistently.** 3 newsletter-derived posts plus an occasional
  self-crafted one lands right in the sweet spot. Don't post daily (it costs reach per post)
  and don't go quiet.
- **Spread the three across the week**, ideally Tue-Thu mornings in the audience's timezone
  (a starting hypothesis to confirm against when Nick's network actually engages).
- **Scheduling is automatic** once Nick approves and the issue is live: the LinkedIn pipeline
  (`scripts/schedule-linkedin.mjs`) resolves each post's `offsetDays` against the issue's real
  pubDate and (in live mode) pushes it to Postiz. You set the offset, not a date. Batch the
  mechanical work (formatting, carousel building) separately from the creative work (angles,
  drafting). NOTE: while the pipeline is in **shadow mode** it only announces the schedule to
  Discord and posts nothing — confirm the mode in `app/linkedin.config.json` (`enabled`).
- **No full automation of posting itself, no auto-DM bots, no engagement pods** (ToS risk,
  shadowban risk, and off-brand). Nick approves every post before it's scheduled.

## Engagement is the other half (remind Nick, don't automate it)

Posting is 20% of the job. The growth engine is the daily 10-20 minutes of genuine,
value-adding comments on an "engage list" (a handful of clients, prospects, peers) and
replying to every comment on his own posts in the first 30-60 minutes. This skill produces
the posts; it should remind Nick that the comments are where the audience actually comes
from, especially early.

## On-brand vs avoid (quick gate)

- **On-brand:** standalone full-value posts; dense save-worthy carousels; true, specific,
  plainly-stated hooks; the author's real firsthand experience leading; soft, infrequent
  CTAs; honest "here's what doesn't work" takes.
- **Avoid:** teaser-only posts; cliffhanger withholding; broetry (one-line-per-line drama);
  engagement bait ("comment YES"); manufactured-vulnerability stories; manufactured
  curiosity-gap hooks; hashtag stuffing (use 0-3); promotion-heavy batches; any claim not
  supported by the source post.

## Honest positioning (the guardrail)

These posts build Nick's authority while he is new to consulting. Follow the honest line
from `research/audience-strategy/report.md` §5: lead with demonstrated work and real
adjacent engineering expertise; never invent a track record, client count, or experience;
use first person only for what Nick genuinely did. "Show, don't tell." Not foregrounding how
new the consulting practice is fine; fabricating or implying a track record that doesn't
exist is not. If a post would only land by implying clients/results that aren't real, cut it.

## Output: schedulable drafts coupled to the newsletter

The batch is written as **schedulable files**, one per post, into the LinkedIn pipeline's
home — co-located with the newsletter by slug, NOT in `research/`:

```
app/linkedin/<newsletter-slug>/
  personal-story.md        # channel-angle.md ; one file per LinkedIn post
  personal-framework.md
  personal-mythbust.md     # all atomized posts are channel: personal
  business-preview.md      # PENDING — the ONE company-page post (offsetDays: 0); do not create
                           # until the consultancy company page exists
  carousel.md              # (optional) slide-by-slide copy for the PDF
```

Each file carries frontmatter (see `app/linkedin/README.md` for the full spec):

```yaml
---
newsletter: <newsletter-slug>   # the parent post; this is the coupling
channel: personal               # personal (all atomized posts) | business (pending: the one
                                # preview, only once the consultancy page exists)
offsetDays: 1                   # schedule = the issue's real pubDate + N days. Use the
                                # personal A/B/C cadence: A=+1, B=+3, C=+5; the company-page
                                # preview is always offsetDays: 0. NEVER an absolute date.
angle: story                    # label
# approved:                     # leave UNSET — Nick's sign-off, agents never set it
---
```

Storing the **offset, not a date**, is the whole point: the scheduler resolves it to a real
date only when the newsletter actually publishes, so a delayed or reordered issue carries its
LinkedIn posts with it automatically. You do **not** pick or write calendar dates here, and you
do **not** schedule in Postiz by hand — `scripts/schedule-linkedin.mjs` does that once Nick
approves and the issue goes live.

Then refine the batch through the ICP focus group (see "Required: refine with the ICP focus group"
below) and present the **refined** batch to Nick in chat: each post's full text, its angle, the
chosen hook (plus `hooks` runner-ups), its channel + offset, any link/CTA, and a one-line note of
what the panel improved across rounds. Nick approves by setting `approved:`
on the files he wants (same gate as the queue). The repo keeps them as provenance and for reuse
(top posts get reused over 4-6 weeks). Run `npm run linkedin:lint` to check the batch is valid.

## Required: refine with the ICP focus group before Nick ever sees it

Every batch goes through the `icp-focus-group` panel and gets refined **before** it is presented
to Nick. This is not optional. It is why Nick always sees a polished version, not a first draft.
**Default: run the panel (mini, 3 jurors) on each post and iterate at least two full rounds**, and
keep going until the gates pass and the blockers are gone, not until a number looks nice. A post
that already clearly passes can stop after one round; do not burn calls chasing a 4 up to a 5.

The `icp-focus-group` skill is the critic; this skill holds the pen. They **alternate**, and the
roles never mix:

1. `icp-focus-group` assesses a draft and returns prioritized fixes (the blockers, each juror's
   single highest-leverage fix, any failed gate). It does not rewrite anything.
2. **This skill applies them.** Read the fixes, decide which are real (a fix several jurors raise,
   or one tied to a failed gate, outranks a lone nitpick), and rewrite the post here, every word
   still following `writing-voice`. Even an obvious, tiny fix is applied here, never in the focus
   group.
3. **Re-run the read-aloud audit.** The thing the panel will most often miss is a clunky or
   confusing sentence, because jurors judge whether the *message* lands, not whether the *prose*
   is clean. That gap is this skill's job: fix run-ons, nested clauses, metaphors that don't stand
   on their own, and anything you stumble over reading it out loud.
4. Hand the revision back to `icp-focus-group` to re-assess. Loop until the gates pass and the
   blockers are gone, not until a number looks nice.

When you present the batch to Nick, show the **refined** version of each post plus a one-line note
of what the panel flagged and how the score moved across rounds, so he can see the lift was earned
and is always looking at the best version, not the first one.

The human gate is unchanged: an agent may draft, revise, and re-test, but only Nick sets
`approved`.

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

The motion starts with Nick's profile only. When Isaac comes online, the same skill can
produce a slice for his page from the same issue (a different angle, in his voice once we
have a `voice-isaac` profile), so one newsletter seeds both profiles without doubling the
writing.

## When not to use this

Don't repurpose a post whose point isn't sharp, or that has no real spine material, just to
hit a posting cadence. A thin post produces thin slices. Fix the post first, or skip the
week's LinkedIn batch rather than ship filler. Consistency matters, but one good post a week
beats three forgettable ones.
