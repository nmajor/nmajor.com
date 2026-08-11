# LinkedIn posts (coupled to newsletters)

Each LinkedIn post is a markdown file here, **coupled to a newsletter by slug**. It is
scheduled *relative to when that newsletter actually publishes* — never on an absolute
date. This is what makes a delayed or reordered newsletter "just work": the LinkedIn
posts carry an offset, not a date, so their real schedule is computed only at the moment
the issue goes live. Nothing is ever pushed to LinkedIn while the newsletter is still
queued.

## The batch model (since 2026-08): 5 short posts, one per weekday

Each issue gets a batch of **5 personal posts** planned on publish day, dripped daily with
`offsetDays` **0, 1, 2, 3, 6** (Tue, Wed, Thu, Fri, the following Monday — weekends off).
Only 1-2 posts slice the essay itself; the rest are sourced through the newsroom process in
the `content-repurposing` skill (journalist-persona subagents investigate the essay's concept
in current news, pitches are scored, the best 5 get drafted). Posts are **short and natural**:
roughly 100-180 words, a ≤140-char hook line, no hashtags, no AI-slop tics. Lint enforces the
hook fold, a 1400-char visible-body ceiling, and the hashtag ban on every not-yet-pushed
personal post (already-pushed history is grandfathered). Batches before 2026-08 used the older
3-post A/B/C atomization model; they remain here as provenance.

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
                                            # the weekly drip uses 0,1,2,3,6 (Tue-Fri + Mon)
                                            # (business preview is always offsetDays: 0)
angle: vendor-bill                          # label only: a short name for the post's story
# meme: app/linkedin/.../03-pigeon.jpg       # chosen review option; repo-relative, not attached
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

## Channels

Two channels, two different jobs (see `app/linkedin.config.json`):

- **`personal`** — Nick's own profile (Nicholas Major). The reach + selling engine. **All five
  weekly posts** go here. This is where the craft and the ICP-focus-group refinement effort
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
sent, it computes `pubDate + offsetDays` (at `postingHourUTC` from `app/linkedin.config.json`)
and:

- **shadow mode** (`enabled: false`): logs + Discord-announces the schedule it *would* set,
  stamps `shadowedAt` so it announces once. No external side effects. This is where we are.
- **live mode** (`enabled: true`, Postiz wired): pushes the post to Postiz as a scheduled
  draft for that date and stamps `pushedAt`. `pushedAt` is the idempotency lock, exactly
  like `emailedAt` on newsletters — to deliberately re-push, clear it.

The two markers are separate so that turning live mode on never skips a post merely because
it was announced in shadow mode.

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
