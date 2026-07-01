---
name: hooks
description: Generate 3-5 distinct, on-voice opening hooks to pick from — for a newsletter subject line/title, an article lede (the first line of a post), or a LinkedIn post's first line. Use whenever you need to open a piece: inside content-builder at the drafting stage, or standalone for a LinkedIn post or a subject line. Composes with writing-voice (every word follows it) and is backed by research/content-hooks/report.md.
---

# Hooks: generate options to pick from

A hook's only job is to earn the next sentence. This skill produces a short slate of
**3-5 genuinely different hook options** for a human (Nick or Isaac) to choose from,
grounded in the real material so they are specific and honest, not generic AI openers.

It covers three surfaces:

- **Newsletter subject line / essay title** (in our system the essay title is the email
  subject, since each essay *is* the newsletter issue — "Actual Intelligence, by Nicholas
  Major").
- **Article lede** — the first one or two lines of a post, the "next 30 seconds."
- **LinkedIn post** — the first line, everything above the "see more" fold.

The full evidence and examples live in `research/content-hooks/report.md` (raw in
`research/content-hooks/raw/`). Read it when you want depth; this skill is the procedure.

## The one principle that governs everything

**For our audience, the honest hook and the effective hook are the same hook.** Our
readers are skeptical decision-makers who distrust marketing language on sight. A
specific, true, concrete opener earns their trust and their attention; a loud or
clickbait one loses both. (The LinkedIn algorithm now rewards dwell time over reaction
bait, and subject-line data shows honest lines win click-through and conversion even when
clickbait wins the open. So this is not just our taste, it is what works.)

This means a hook is never bolted on after the fact. It is the most concrete, true thing
in the piece, said first. If the best hook you can write isn't compelling, that usually
means the piece's actual point isn't sharp yet. Fix the point, not the wording.

Everything here sits on top of `writing-voice` — re-read it. The hook obeys every ban
(no em dashes, no "It's not X, it's Y", no rule-of-three, no hype words, sentence case,
no fake-significance tails). A hook that breaks a `writing-voice` rule is disqualified,
not "edgy."

## What makes a hook work (the durable levers)

Use these as the things to reach for. All are on-brand.

- **Specificity / concreteness.** A checkable fact, a real number, a named thing. "Cut
  inference cost 37% by quantizing to int8" beats any superlative. Vague words signal you
  have nothing concrete; specifics signal you actually did the thing. This is our single
  strongest lever.
- **An honest curiosity gap.** Open a real gap the reader actually has, stated
  specifically, that the piece genuinely closes. Be specific about the *setup and stakes*,
  withhold the *resolution or lesson*. "Specific enough to matter, vague enough to
  intrigue." A gap you never close is clickbait and it burns trust.
- **Real stakes / real numbers.** Name the reader's actual pain or a real outcome,
  proportionately. Never fear-monger.
- **A genuine position.** A real, reasoned, defensible view, argued — not flamebait and
  not the banned "everyone is wrong" reflex.
- **Audience awareness.** Channel a question the reader already holds. For a jaded expert
  audience, a genuinely new *mechanism* (a new "why it works") beats a louder claim.

## The hook category taxonomy (use it to force variety)

Don't generate "5 hooks" — you get 5 paraphrases. Generate **one hook per distinct
category**, so the options are real alternatives. Each is on-brand as described; the trap
is what tips it into clickbait.

1. **Specific-result** — a real first-party number/outcome. Trap: a round or borrowed
   number that isn't yours reads as fabricated.
2. **Confession / failure** — a real, instructive mistake, owned in first person. Trap:
   a humblebrag dressed as failure.
3. **Reasoned contrarian** — a genuine, argued disagreement with consensus. Trap: "It's
   not X, it's Y" / "everyone is wrong" with no argument under it (banned pattern).
4. **Surprising data** — a real, sourced or first-party finding ("I analysed N..."). Trap:
   unsourced round percentages.
5. **Direct question** — exposes real tension, genuinely answerable. Trap: yes/no or
   obvious-answer questions. For subject lines, skip the question mark entirely (it tests
   worse for this audience).
6. **One-line story / in medias res** — drop into a true scene. Trap: the loop must close
   honestly; no manufactured mystery.
7. **Named example** — a specific, recognizable case as proof. Trap: cherry-picked or
   misrepresented.
8. **Plain-useful** — a clear, scoped how-to or takeaway. Trap: vague "how to succeed."
9. **Problem-named (PAS-lite)** — name the reader's exact pain so they feel recognized.
   Trap: over-agitation / fear-mongering.
10. **New-mechanism** — a genuinely new explanation of *why* something works. Trap:
    dressing an old idea as a "secret" or "weird trick."

## Surface mechanics (the load-bearing constraints)

- **LinkedIn:** the hook is everything visible above "see more" — roughly the first 210
  characters on desktop, ~140 on mobile. Front-load the most compelling content. Keep the
  hook to one line (a one-line hook leaves room for a second informative line in the
  preview). Aim ~5-15 words. Engagement bait ("Comment YES") is penalized and insults the
  reader; the honest specific opener is what the platform now rewards.
- **Subject line / title:** short. Under ~50-60 characters, 6-10 words is a defensible
  sweet spot, and front-load the meaning because phones show only ~5-6 words. Sentence
  case, plain words, so it reads like a person wrote it. Prefer a statement to a question.
  The subject must accurately reflect the piece (a mismatch is the fastest way to lose a
  subscriber). Avoid spam/hype trigger words, which hurt deliverability and violate the
  voice at the same time.
- **Lede:** get to the point in the first sentence, no wind-up, no "how I came to write
  this," no hedging. A useful discipline: if the lede runs over ~35 words, trim. Read it
  aloud; if you stumble, the reader will. The lede must match the article.

## The generation procedure

When asked to open a piece (or invoked from content-builder), do this. It stacks the
techniques that make LLM-generated hooks reliable instead of generic.

1. **Ground in the real material.** Pull the most concrete, specific, or surprising facts
   straight from the brain dump / draft / source (`research/<topic>/`), each genuinely
   supported by it. Write hooks **only** from these. This is what stops generic,
   hallucinated openers. If a candidate hook makes a claim not in the source, cut it.

2. **Brainstorm wide, across angles.** Generate a pool of ~8-10 candidates, deliberately
   spreading them across **different categories** from the taxonomy. Make each maximally
   different from the others; do not riff on the previous one. Keep each to one idea and
   within the surface's length limit.

3. **Score against the rubric and cut.** Apply the hard gates first (below), disqualify
   any that fail, then keep the strongest survivors that are each a *different* angle. Do
   not reward length; for hooks, shorter and more concrete usually wins.

4. **Present 3-5 distinct options to the author.** Label each with its angle and add a
   one-line note on why it works (or what it trades off). Make them real alternatives, not
   variations of one line. The author picks or asks for another round. Example shape:

   ```
   1. [Specific-result] "We spent $23,000 on agents last quarter and shipped one thing that stuck."
      — leads with a real number; sets up "which one, and why."
   2. [Confession] "I let an AI approve a $4,000 refund. It shouldn't have."
      — owns a real mistake; the stakes pull the reader in.
   3. [New-mechanism] "Why our RAG scores dropped after the model upgrade."
      — a genuinely new 'why' for a jaded expert reader.
   ...
   ```

5. **For a newsletter essay, offer both a title/subject slate and a lede slate** (the
   title is the email subject; the lede is the opening line). For LinkedIn, offer one slate
   of first lines.

## The rubric (gates + scoring)

**Hard PASS/FAIL gates — auto-reject if any fail:**

- Contains a banned hype/clickbait word or pattern (em dash, "It's not X, it's Y",
  rule-of-three, fake-significance tail, anything in `writing-voice/blacklist.md`).
- Makes a claim not supported by the source material.
- Over the surface's length limit (LinkedIn first line ≤ ~210 chars / one line; subject
  ≤ ~50-60 chars / 6-10 words).
- Manufactured urgency, false scarcity, deceptive framing (fake RE:/FWD:, "Oops"), pure
  mystery bait, engagement bait, or a curiosity gap the piece won't actually close.

**Score each survivor (do not reward length):** specificity, honesty/accuracy (the piece
delivers what the hook implies), clarity (a skeptical operator gets it instantly), hook
strength (opens a real bounded gap without resolving or baiting), voice fit (plain,
understated, not marketing), distinctiveness (a different angle from the others).

**Keep** the top 3-5 non-disqualified hooks, each from a different category. When in
doubt, the more concrete and more understated option is the more on-brand one, and usually
the more effective one too.

## When not to use this

Don't use it to manufacture a hook for a piece with no real point — that produces
clickbait by construction. If no honest, specific hook is available, the piece isn't ready;
sharpen its point first. And a hook is never an excuse to overstate what the piece
delivers: the gates above make the hook match the content, every time.
