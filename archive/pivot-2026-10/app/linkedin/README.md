# LinkedIn posts (coupled to newsletters)

Each LinkedIn post is a markdown file here, **coupled to a newsletter by slug**. It is
scheduled *relative to when that newsletter actually publishes* — never on an absolute
date. This is what makes a delayed or reordered newsletter "just work": the LinkedIn
posts carry an offset, not a date, so their real schedule is computed only at the moment
the issue goes live. Nothing is ever pushed to LinkedIn while the newsletter is still
queued.

## The weekly newsroom model (since 2026-09)

Each issue can carry **one to seven personal posts**, with five as the target. The seven available
`offsetDays` values are **0 through 6** (Tuesday through Monday). Tuesday is the required newsletter
companion. It uses `offsetMinutesAfterIssue: 60`, so it follows the issue by one hour even when an
issue publishes at an unusual time. Wednesday, Thursday, Friday, and Monday are the normal other
slots; weekends are available only when extra stories clear the same bar.

The other posts are independently reported applied-AI stories and do not need to share the
newsletter topic. The newsroom always investigates a cautionary lane, but weak or sensational
failure stories do not receive a slot. It is valid to produce four posts, or fewer, rather than
pad the week.

Posts are normally 100-180 words, with a ≤140-character first paragraph, no hashtags, and no
AI-slop tics. A longer post needs an explicit `lengthReason`; the normal ceiling is not a reason to
cut evidence the reader needs. Every new weekly post requires an image and sets
`mediaRequired: true`. Research packets, variants, and image alternatives live under `research/`,
never below this recursively scanned directory.

This directory is **not** an Astro content collection on purpose: a malformed file here
can never break the site build or the newsletter publish path. Validation is the
dedicated `npm run linkedin:lint` instead.

## Layout

```
app/linkedin/<newsletter-slug>/<channel>-<angle>.md
```

e.g. `app/linkedin/build-versus-buy-broke/personal-story.md`. The subfolder name
must match a real essay slug in `app/src/content/essays/`. One folder = one issue's batch.

## Frontmatter

```yaml
---
newsletter: build-versus-buy-broke          # slug of the parent essay (must exist)
channel: personal                           # personal (all weekly posts) | business (one preview)
offsetDays: 2                               # schedule = the issue's real pubDate + N days;
                                            # weekly slots use 0..6 (Tue through Mon)
                                            # (business preview is always offsetDays: 0)
weeklyBatchVersion: 1                        # opts into the current weekly contract
# offsetMinutesAfterIssue: 60                # Tuesday companion only; exact issue time + 1 hour
# postHourUTC: 18                            # deliberate fixed-hour override (0..23)
angle: vendor-bill                          # label only: a short name for the post's story
sourceKind: independent                      # newsletter | independent
editorialLane: implementation                # companion | value | cautionary | etc.
reachGame: baseline                          # baseline | spike
# lengthReason: "..."                        # required only above the normal body target
# meme: app/linkedin/.../03-pigeon.jpg       # chosen review option; repo-relative, not attached
# visual: support-agent-evidence              # chosen visual-ledger row; not approval or media
mediaRequired: true                           # fail closed until approved media is attached
# approved: "Nicholas Major 2026-06-30"     # Nick's sign-off — agents NEVER set this
# shadowedAt: ...                           # set by the scheduler in shadow mode (idempotency)
# pushedAt: ...                             # set by the scheduler once pushed to Postiz (idempotency)
---
The full LinkedIn post text goes here. Short (roughly 100-180 words), standalone, full value,
no link in the body (a link goes in the first comment if one is needed), no hashtags. Follows
the writing-voice skill, every word.
```

`meme:` records which campaign option Nick chose. It does not schedule the image or
approve it. The publishing workflow uses `media:` only after the exact asset clears
approval and rights checks.

`visual:` records a selection from `visuals/campaign.jsonl`. It is still not approval. The
guarded attachment script adds `media:` only after that exact ledger row has Nick's explicit
visual approval, publishable rights, matching post-body and asset hashes, and an unpushed post.
The ledger accepts exactly three formats: a real annotated source screenshot, a classic meme, or
a synthetic workbench photo. Workbench photos must disclose their generated provenance in the
ledger and alt text and must never be described as a real scene.
Post approval and visual approval remain separate gates.
New weekly posts set `mediaRequired: true`; once their post text is approved they cannot become
schedule-ready—or be pushed directly—until the guarded attachment command adds `media:`.

## Channels

Two channels, two different jobs (see `app/linkedin.config.json`):

- **`personal`** — Nick's own profile (Nicholas Major). The reach + selling engine. **All weekly
  newsroom posts** go here. This is where the craft and the ICP-focus-group refinement effort
  goes. This is the only channel that posts today.
- **`business`** — **PENDING, not wired.** nmajor.com has no company page yet: the consultancy
  (the only commercial entity in the ecosystem) is still TBD, so there is no business LinkedIn
  page to post to. Its `integrationId` in `app/linkedin.config.json` is intentionally empty, so
  the scheduler **skips it** — any `channel: business` post here (including the `business-*.md`
  previews carried over) will **not schedule until the consultancy company page exists** and its
  `integrationId` is filled in. When that page arrives, this channel would be the
  credibility/activity backstop, not a reach channel (personal profiles out-reach company pages
  5-8x): one post per issue, a short newsletter preview + link at **`offsetDays: 0`** so it lands
  ~1 hour after the send (newsletter 14:00 UTC → `postingHourUTC` 15:00 UTC).

## How it schedules

`scripts/schedule-linkedin.mjs` runs daily in the publish workflow. For each post whose
**parent newsletter is live + approved** and which is itself **approved** and not yet
sent, it computes `pubDate + offsetDays`. Independent posts use the target UTC weekday's
`HH:MM` entry in `postingTimesUTCByWeekday` from `app/linkedin.config.json`; a post-level
`postHourUTC` deliberately overrides that prior. The Tuesday companion normally uses
`offsetMinutesAfterIssue: 60`, so an unusual issue time moves its companion with it.

The weekday map is a testing prior for Nick's US-heavy professional audience, not a claim that
LinkedIn has a universal golden hour. Its evidence, limitations, and eight-week measurement plan
live in `research/linkedin-posting-times-2026-09/report.md`. Revisit the map using Nick's own
48-hour and seven-day results; keep weekends optional and do not let timing rescue a weak post.

The scheduler then:

- **shadow mode** (`enabled: false`): logs the schedule it *would* set,
  stamps `shadowedAt` so it announces once. No external side effects.
- **live mode** (`enabled: true`, Postiz wired): pushes the post to Postiz as a scheduled
  draft for that date and stamps `pushedAt`. `pushedAt` is the idempotency lock, exactly
  like `emailedAt` on newsletters — to deliberately re-push, clear it.

The two markers are separate so that turning live mode on never skips a post merely because
it was announced in shadow mode. They are machine state. Agents never set or clear either one by
hand.

## Integration identity is verified at push time

A Postiz integration ID is stable, but the account behind it is not: a LinkedIn re-auth can
silently rebind an existing ID to a different account. That happened on 2026-08-04 — the
`personal` integration became a stranger's company page and five posts were scheduled to it
before being caught by eye. So the scheduler never trusts the ID alone.

Every channel in `app/linkedin.config.json` with an `integrationId` also carries an `expect`
block (`identifier`, `name`, `profile`). Before pushing anything, the scheduler asks Postiz
who is actually behind each ID and compares; any mismatch — or a missing `expect` — aborts
the whole run before a single post goes out (shadow mode warns instead). Run
`npm run linkedin:doctor` to check the wiring by hand; on a mismatch, reconnect the right
account in Postiz or update `integrationId` + `expect` together.

## Hard rule

Only Nick sets `approved`. Agents may draft and refine a post and leave it unapproved, but
never approve it — same gate as the newsletter queue (see `CLAUDE.md`).

**One carve-out, by policy not by agent (currently dormant):** company-page **newsletter
previews** may publish without an `approved:` field. The scheduler treats a post as approved
when its channel sets `autoApprovePreview: true` AND its `angle` is exactly `preview` — see
`isAutoApproved` in `scripts/lib/linkedin.mjs`. This is Nick's standing trust in the low-stakes
previews, expressed once in config, not the agent stamping `approved`. It is scoped to
`angle: preview`, so any other post still needs his sign-off. **This carve-out is inactive on
nmajor today:** the only channel it could apply to is `business`, which is pending (empty
`integrationId`, `autoApprovePreview: false`), so nothing auto-approves until the consultancy
page exists. Agents still never write `approved:` on anything.
