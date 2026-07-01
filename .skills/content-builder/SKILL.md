---
name: content-builder
description: The end-to-end workflow for turning Nick's brain dump into a published, sourced essay. Use whenever Nick hands over a transcript, voice note, or pile of raw thoughts on a topic and wants it built into an essay — a field note, conversation, guide, or news-shaped piece. Each essay is the blog post, the newsletter issue (Actual Intelligence), and the source for LinkedIn atomization. Covers capture, extraction, research, drafting, audit, and publishing. Composes with the writing-voice skill (prose authority) and the repo's raw-first research pattern.
---

# Content builder: brain dump to published essay

This is how a raw brain dump becomes a finished essay on nmajor.com. Nick shows up with
a transcript, a voice-note dump, or a messy pile of thoughts on a topic. Your job is to
research it, back it, shape it, and ship it without losing what made the dump worth
publishing: Nick's actual take.

nmajor.com is Nick's personal brand — first person, opinionated, a real point of view.
It is not a neutral publication (that's the Institute). So an essay here is *allowed to
have an opinion and allowed to pull toward the consultancy* — softly, by earning trust,
never by pushing or hyping (see "Commercial pull" below). Each essay is one thing that
does three jobs: the blog post at `/writing/<slug>/`, the newsletter issue ("Actual
Intelligence, by Nicholas Major"), and the source for LinkedIn atomization. Do not think
of them as separate artifacts.

This skill is the orchestration. Three other authorities sit underneath it and you do
not duplicate them:

- **`writing-voice`** owns every word a reader sees. The draft and the final essay
  follow it exactly. When you reach the drafting stage, re-read it.
- **`hooks`** owns how a piece opens. At the drafting stage, use it to generate 3-5
  distinct, on-voice options for the title/subject and the lede, for Nick to pick
  from. It is backed by `research/content-hooks/report.md`.
- **The raw-first research pattern** (in `CLAUDE.md`) owns how research is stored: dump
  raw to `research/<topic>/raw/`, then a subagent parses it into a report. Never
  summarize in one pass, never throw raw away.

## The one rule that governs everything: the brain dump is the spine

Nick's dump is not raw material you replace with a cleaner AI article. It is the spine of
the piece. His specific stories, his numbers, his opinions, the way he phrases a thing —
that is the value, and it is the only part a reader cannot get from a vendor blog.
Research backs the spine and fills its gaps. Research never becomes the spine.

Concretely:

- **Mine the dump for Nick's own phrasing and anecdotes.** If he said "we tried to get
  the support bot to handle refunds and it confidently approved a $4,000 one," that
  sentence, lightly cleaned, goes in the piece. Do not launder it into "organizations
  deploying AI in customer service encounter edge cases."
- **Keep his position.** A brain dump almost always contains one real opinion. Find it,
  sharpen it into a single sentence, and make the piece argue it. On a personal brand
  this is the whole point — do not flatten it into balanced both-sides mush.
- **You add rigor, not a personality.** Sourcing, structure, fact-checks, a clean lead,
  cut repetition. You are not adding a voice; Nick already has one.

If after research you cannot find Nick's point in the dump, stop and ask him what it is.
Do not invent one.

## The second rule: every essay leaves the reader something to do

We are about applied AI, so a reader has to finish every essay with a usable tactical
take-home: a decision they could make, a first move they could try, a mistake they now
know to avoid. Picture the reader as a CEO who is overwhelmed by AI and does not know
where to start (the ICP: AI decision-makers at medium-to-large businesses — see
`overview.md`). What can they take from this story and apply on Monday?

Two hard parts:

- **Never label it.** No "the takeaway is," no "key lesson," no tidy bullet list of
  "action items" bolted to the end. The take-home is carried by the structure: tell the
  story so that following what the company actually did, in what order, and what it cost
  *is* the lesson. The reader should close the tab thinking "I should look at our claims
  process" without us ever telling them to.
- **It has to be real and earned.** The take-home comes out of the reporting, not a
  motivational tail. If the story doesn't support an applicable insight, that is a sign
  the story is thin, not a cue to manufacture advice.

This holds for every essay shape, field note to news. If you can't name the thing the
reader walks away able to do, the piece isn't ready.

## The third rule: weave in sources, and verify each one actually backs us

Credibility is the brand. So a piece pairs Nick's own experience and take with
real-world examples and research, linked inline, right where the claim is made. Weave
sources through the piece. Do not save them for a list at the end, and do not decorate.

Two parts, both required:

- **Support the take, don't dress it up.** A link earns its place by holding up the
  specific point next to it: a number, a named example, a research finding, an older
  principle that Nick's argument rests on. Nick's experience stays the spine; sources
  corroborate and extend it, they don't replace it.
- **Be 100% sure the source says what we claim.** Open every source and read the part that
  matters. Confirm it actually supports the exact claim it's attached to. A link that
  resolves is not proof it backs the point. A search snippet, a research summary, or a
  subagent's note is not proof either. If a source does not clearly support the claim, fix
  the wording, find a better source, or cut the claim. We would rather drop a point than
  cite something that doesn't hold. Getting caught misrepresenting a source costs more
  trust than the point was ever worth.

## The braid: experience, evidence, example

These rules come together as one texture. On each substantive point, weave three strands:

1. **Nick's firsthand experience** — what he has actually built, seen, or run, in first
   person. This leads. It is the part a reader cannot get anywhere else, and on a personal
   brand it is what makes the piece his.
2. **Evidence that it generalizes** — research, a named principle, a number, so the point is
   not just one person's anecdote.
3. **A real-world example** — a named company or a concrete case the reader recognizes.

Not every paragraph carries all three, but the piece as a whole should visibly braid them,
and Nick's experience should be present and leading. The common failure to watch for:
borrowing his ideas but dropping his voice, so the piece reads like a detached explainer
anyone could have written. If a stretch is all citations and no Nick, it has drifted. Pull
him back in, in first person, and let the research corroborate what he already knows from
doing the work.

Two guards:
- **Only real experience.** Use first person only for what Nick genuinely did or saw,
  drawn from the brain dump or confirmed with him. Never invent an anecdote, a project, a
  number, or a feeling to fill the slot.
- **Earned authority, with restraint.** First person establishes that Nick has done this,
  then hands off to the principle and the evidence. This is a personal brand, so the first
  person leads more than it would in a neutral publication — but the anti-hype,
  anti-grandiose voice still holds. Opinionated, not loud; confident, not a sales pitch.

## Commercial pull (this is the personal channel, not the firewall)

Unlike the Institute and the Association, nmajor.com is *allowed* to pull toward the
consultancy. But the whole strategy is **pull, not push**: someone reads Nick's take,
comes to trust him, and finds their own way to the work. So:

- The essay earns trust by being genuinely useful and honest; that trust is the pull. A
  hard sell breaks it.
- Any pointer toward "this is the kind of thing I help companies with" is light, true, and
  never hypey. It belongs at the close or in a single aside, not woven through the body.
- Never manufacture a commercial angle a topic doesn't have. The take-home (second rule)
  comes first; the pull is a byproduct of having delivered it, not a replacement for it.
- The consultancy has no name/site yet (see `overview.md`), so keep pulls generic until it
  does. When in doubt, be more useful and sell less.

## The stages

Work them in order. Stages 1–3 are cheap and decide whether the whole piece lands, so
do not skip to drafting.

### 1. Capture (raw, permanent)

Pick a short topic slug (kebab-case, e.g. `enterprise-rag-pilots`). Save the dump
**verbatim and unedited** to:

```
research/<topic>/raw/braindump.md
```

This is the raw-first rule applied to Nick's own words. Keep it forever. The finished
essay must always be re-readable against what he actually said.

### 2. Extract and annotate

Read the dump closely and write a working doc at `research/<topic>/seed.md`. It is for
us, not for readers, so it can be rough. Capture:

- **Thesis** — the single sentence the piece argues. Pulled from the dump, not invented.
- **Why a reader should care** — tie it to who we write for (decision-makers, operators;
  see `overview.md`). One line.
- **Tactical take-home** — the one thing an overwhelmed CEO could act on after reading:
  a first move, a decision, a mistake to avoid. Name it plainly here (it will be woven
  in, never labeled, in the draft). If you can't name one, the piece isn't ready. See
  "The second rule" above.
- **Shape** — field note, conversation, guide, or news (see "Essay shapes" below). Match
  it to what the dump actually is and to part-time capacity. No deep original experiments.
- **The spine material** — a bulleted list of Nick's concrete bits: anecdotes, numbers,
  named tools, opinions, direct phrasings worth keeping. Quote them.
- **Claims to back** — every factual claim that needs a source before it can run. Flag
  anything stated as fact that you cannot yet link.
- **Open questions and gaps** — what the dump assumes, glosses, or leaves unproven, and
  what a skeptical CTO would push on.

### 3. Checkpoint with Nick (one quick pass)

Before any research or drafting, show Nick the thesis, the chosen shape, and a short
outline (lead, the 3–5 moves, the close). Getting the angle wrong wastes the whole draft,
and the angle is his to confirm — it's his byline and his opinion. Keep it to a few lines.
Once he confirms or adjusts, proceed. This is the only mandatory checkpoint.

### 4. Research (raw-first, subagent-parsed)

For each "claim to back" and each gap from the seed, research it. Follow the repo
pattern exactly:

1. Gather raw findings — web search, fetched pages, docs, papers — and dump them
   **unedited** into `research/<topic>/raw/` (one file per source or search;
   keep URLs and dates).
2. **Use a subagent** to parse `research/<topic>/raw/` into `research/<topic>/report.md`:
   what each claim checks out to, the best source link for each, exact figures, and
   anything that contradicts the dump.

Rules:

- **A claim with no source gets softened or cut**, never shipped as fact. We hold
  ourselves to this: if a claim has no link behind it, assume we couldn't back it up.
- **If research contradicts Nick's take, surface it.** Do not quietly bend the piece
  around a wrong claim, and do not silently drop his point. Tell him.
- Prefer primary sources and named studies over aggregator blogs. Note the date; AI moves.

### 5. Draft

Now write the essay. **Re-read `writing-voice` first** and follow it for every word. That
includes the compact-for-busy-CEOs rule (short, dense, short paragraphs, get to the point)
and Nick's voice profile (`voice-nick.md`).

**Open with hook options, don't just write the first line.** Before drafting the lede,
run the **`hooks` skill** to generate **3-5 distinct, on-voice options** for (a) the
title/subject line and (b) the opening line, each grounded in the spine material and a
different angle. **Always show Nick both slates and let him pick** (or ask for another
round) before you write the body. This is not optional, and never just commit a first line
yourself. The chosen hook then sets the lead. The hook is the most concrete, true thing in
the piece, said first. If the best honest hook you can write is weak, the thesis isn't
sharp enough yet, fix that, not the wording.

**Give the piece a shape that closes the loop (bookend it).** Favor a structure with a
strong hook, a middle that develops it, and an ending that *rhymes with the beginning*:
return to the opening image, phrase, or tension and resolve it, so the last line echoes
the first and the reader feels the piece close rather than just stop. The close still
lands the consequence and carries the tactical take-home, it just does so by calling back
the lead. A title and a final line that mirror each other (e.g. a two-part title whose
halves the ending re-states) are a clean way to do it. Nick favors this symmetry strongly;
see `voice-nick.md`.

- Build on the spine: Nick's anecdotes and phrasings carry the piece; the report supplies
  the links and figures that back them.
- Open on the concrete thing, never a wind-up. State the one position. Cite sources
  inline as markdown links. End when you're done.
- Use the shape's structure (below). Keep it to real capacity: tight, sourced, honest about
  tradeoffs and what didn't work.
- **Carry the tactical take-home in the structure.** Order the story so the reader
  extracts the applicable insight by following it. Don't label it, don't append an
  "action items" list, and don't end on a motivational summary. End on the consequence.
- **Weave the sources in where each claim is made** (see the third rule): pair Nick's
  experience with the real-world examples and research that back it, inline. Only cite a
  source you have opened and confirmed actually supports that exact point.

Write the draft into the actual essay file so formatting is real:
`app/src/content/essays/<slug>.md` (the slug is the URL: `/writing/<slug>/`). Use a
recent published essay as a shape reference (e.g.
`app/src/content/essays/build-versus-buy-broke.md`). Set `draft: true` while it's in
progress.

Frontmatter (schema in `app/src/content.config.ts`):

```yaml
---
title: A plain, specific title in sentence case
summary: One line that says what the essay is. Shows on /writing and in the feed.
pubDate: 2026-06-16          # YYYY-MM-DD, the day it publishes
author: Nicholas Major       # default; a guest byline only if it's genuinely a guest post
draft: true                  # flip to false only when it's ready to ship
# Optional:
readingMinutes: 5            # override; otherwise computed from word count
featured: false              # true only for the one essay pinned to the home hero
heroTitleLead:               # split the title so the second half takes the accent color
heroTitleAccent:             # (home-hero rendering only)
heroLede:                    # a punchier hero lede; falls back to summary
---
```

**Never set `approved:` or `emailedAt:` yourself.** `approved:` is Nick's personal
sign-off — reserved for him, agents never set it; its presence is what gates an essay's
eligibility to publish and email. `emailedAt:` is the newsletter idempotency lock, stamped
by the send script once an issue has gone out. Leave both alone.

### 6. Audit

Run the `writing-voice` three passes (audit, rhythm, substance) and its pre-publish
checklist. On top of that, this skill's own checks:

- Every factual claim traces to a link in `report.md`, or it's been softened or cut.
- Nick's point is still in there and still sharp. It didn't get sanded off in editing.
- Nick's own experience is present and leading (first person where it's genuinely his),
  not just his ideas abstracted into a detached explainer. Major points braid experience
  with evidence, and a real example where it fits (see "The braid").
- **Every cited source has been opened and confirmed to actually support the specific
  claim it sits next to** (see the third rule), not just to resolve. Anything that doesn't
  clearly back its claim is re-sourced or cut. Note the check in `report.md`.
- Sources are woven through the piece, pairing Nick's take with real-world examples
  and research, not dropped in a list at the end.
- The lead earns a skeptical reader's next thirty seconds. The hook is specific and true,
  opens a gap the piece actually closes, and passes the `hooks` rubric (no clickbait, no
  banned words, accurately reflects the content).
- `summary` and `title` are specific and honest, not clickbait.
- An overwhelmed-CEO reader finishes with one thing they could act on, and it's woven
  into the story, not labeled or bolted on as an "action items" list.
- Any commercial pull is light, true, and non-hypey (see "Commercial pull"). It doesn't
  crowd out the take-home.

Show Nick the finished draft for a final read before it goes live. It's his byline.

### 7. Publish

Two decoupled mechanisms move an essay live and into the inbox. Both gate on Nick's
`approved:` sign-off — never yours.

1. **Nick sets `approved:`** (his personal sign-off). Until that field is present, nothing
   publishes and nothing emails.
2. **Publish.** Either:
   - **Queue-driven (default):** an approved, finished essay at the top of the queue is
     promoted on a cadence day by `npm --prefix app run publish:queue` (CI-run; dry-run
     with `publish:queue:dry`). It flips `draft:false`, stamps `pubDate`, and CI builds +
     deploys. `npm --prefix app run queue:lint` refuses to promote a broken/unapproved
     head. Use `npm --prefix app run preview:next` to see what's up next.
   - **Manual:** set `draft:false` and deploy with `npm --prefix app run deploy` (there's
     no usable localhost; ship to prod).
3. **Newsletter.** `npm --prefix app run newsletter:send` (dry-run `newsletter:send:dry`)
   emails any essay that is live, `approved:`, and has no `emailedAt:` lock — exactly once.
   It sends via Buttondown to the "Actual Intelligence" list using nmajor.com's **own
   scoped `BUTTONDOWN_API_KEY`** (in this project's gitignored `.env`). **Never the
   Institute's key** — the Buttondown account holds several newsletters. `emailedAt:` is
   double-locked (frontmatter + a Buttondown subject pre-check) so an issue never sends
   twice.
4. **Verify on the live URLs:** `/writing` lists it, `/writing/<slug>/` renders it, and it
   appears in `/rss.xml` (full content — Buttondown consumes the feed).

Leave `research/<topic>/` in place. The raw dump, the seed, and the report are the
essay's provenance, and a reader question later is answered from them.

### 8. Capture Nick's edits (close the loop, get better over time)

After Nick edits the draft or hands back wording suggestions, diff his version against ours
and read what he changed. Edits to his own byline are the highest-signal voice data we
have, higher than any blog analysis. When the changes point somewhere consistent (a plainer
phrasing, a structural habit like bookending, a word he reaches for or strikes, a framing
he prefers), **add it to his voice profile** (`voice-nick.md`, the "Refinements from Nick's
own edits" section) with a dated note and a short before/after example. The goal is that
next time we draft the line the way he'd write it, so we stop making him make the same edit.
This refinement loop is mandatory, not optional: every round of edits should leave the voice
profile a little sharper.

### 9. Repurpose for LinkedIn (distribution)

Once the essay is finished and **Nick has approved it** (the approval is his gate, never
ours), run the **`content-repurposing`** skill to turn the issue into a batch of standalone
LinkedIn posts (default 3: a story/insight, a framework carousel, a myth-bust) for Nick to
approve and schedule in Postiz. The newsletter is the weekly pillar; the LinkedIn posts are
atomized slices that each stand alone and give full value, driving audience and (softly)
newsletter signups. Personal profiles are the reach engine (they out-reach company pages
5-8x), so this is the standing distribution motion for every issue, not an afterthought.
The drafts land in `research/<topic>/linkedin/`. See `research/audience-strategy/report.md`
for the strategy behind it.

## Essay shapes

nmajor.com is one body of writing — the `essays` collection, no categories (see
`overview.md`). "Shape" is just the form you write in, not a taxonomy field. Pick by what
the dump is:

- **Field note** — short, observational: something Nick saw or did with AI, what it cost,
  what it means. The default and the easiest to ship. Naturally first-person and
  opinionated — the personal-brand sweet spot.
- **Conversation** — a recorded call with a researcher or operator, written up as Q&A.
  High credibility for low effort (primary source, named expert). Likely the flagship.
- **Guide** — a practical how-to synthesized from existing work and Nick's experience. Not
  an original experiment.
- **News** — brief, dated note on something that happened, with Nick's read on why it
  matters. On a personal brand, the read *is* the point — lead with the opinion.

(Separate from essays: `takes` are one-line opinions published at `/takes`, and `building`
is the engineering archive. Neither goes through this skill or the newsletter.)

## Working files for a piece, at a glance

```
research/<topic>/
  raw/
    braindump.md         # Nick's dump, verbatim — permanent
    <source>.md          # raw research, one per source/search — permanent
  seed.md                # our working extraction: thesis, spine, claims, gaps
  report.md              # subagent-parsed research: claims → sources → figures
  linkedin/              # LinkedIn slices from content-repurposing (post-a/b/c, carousel)
app/src/content/essays/
  <slug>.md              # the essay itself; <slug> is the URL (/writing/<slug>/)
```

## When not to use this

A page (About, Work-with-me, standards) is not an essay and never goes to the newsletter.
Edit those directly under `app/src/pages/`, still following `writing-voice`. A one-line
opinion is a `take`, not an essay. This skill is for essays: things that publish to
`/writing`, the feed, and the inbox.
</content>
</invoke>
