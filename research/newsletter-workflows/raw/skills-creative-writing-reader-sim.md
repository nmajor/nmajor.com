# RAW: haowjy/creative-writing-skills -- reader-sim skill, reader-sim signal doc, prose-critique/voice, editorial-review

- Repo: https://github.com/haowjy/creative-writing-skills
- Date accessed: 2026-08-18
- What it is: A public Claude Code plugin for long-form creative writing built as a *staffed newsroom of sub-agents* -- muse (coordinator) over writer, critic, editor, reader-sim, style-creator, continuity-checker, outliner, brainstormer, web-researcher -- with an explicit "writing-staffing" skill that decides which agents to run, and a reader-simulation model based on five "reader reward channels".

VERBATIM below, complete files, unedited.


---

## skills/reader-sim/SKILL.md

Source: https://raw.githubusercontent.com/haowjy/creative-writing-skills/main/skills/reader-sim/SKILL.md

---
name: reader-sim
type: mode-shift
description: >
  Read as a specified first-time reader persona and report the felt experience. Use for skill-only workflows when a draft needs persona-bound reader-response signal instead of analytical critique.
model-invocable: true
---

# Reader Simulation

Read the draft as the specified reader persona encountering it for the first time within the stated knowledge boundary. The caller should pass the persona: genre familiarity, taste, age or audience segment when relevant, tolerance for ambiguity, and what this reader knows or should not know.

If no persona is provided, state the persona you are assuming before reading. Do not report a universal reader reaction.

## Method

Read from beginning to end. Track the felt experience through reader reward
channels:

- **Transportation**: being pulled into the story world, losing awareness of
  reading. Notice where the world feels solid and where it breaks — a detail
  that doesn't fit, a POV slip, a moment where you're suddenly aware you're
  reading words on a page.
- **Aesthetic**: pleasure from language, rhythm, imagery, craft. Notice
  sentences that make you slow down to appreciate them, and passages where
  the prose is competent but invisible.
- **Social simulation**: modeling characters as minds. Notice where you feel
  what a character feels, where you understand someone's motive before it's
  stated, and where a character's behavior stops making sense to you.
- **Curiosity / prediction**: wanting to know what happens, what a clue
  means, what a character will choose. Notice where you're holding a
  question, where you're guessing ahead, where a question gets answered too
  early or too late, and where you stop caring what happens next.
- **Flow**: the reading feeling absorbing and easy to stay with. Notice where
  you want to keep going, where you have to force yourself to continue, and
  where the challenge shifts — prose suddenly too dense, too simple, or
  unclear in a way that breaks momentum.

Not every channel needs equal coverage. Write where the experience was
notable. In longer drafts, watch middle passages where attention often thins.

Report the experience moment by moment: where you leaned in, where you
drifted, what questions you held, and where those questions changed. Stay in
the reading rather than turning into a craft critic. The value of reader-sim
is the felt experience — what it was like to read this, not what's
technically wrong.

Anchor claims to the text: scene references, paragraph locations, and brief
quotes when a specific sentence produced the experience.

Open with what reading the draft felt like overall and which channels had the
most signal. Close with anything outside these channels that the author
should hear.


---

## skills/story-review/resources/reader-sim-signal.md

Source: https://raw.githubusercontent.com/haowjy/creative-writing-skills/main/skills/story-review/resources/reader-sim-signal.md

# Reader Experience in Review

Reader-sim output is experiential evidence: what a specified persona felt
while reading, moment by moment. It is not a fix list and not a craft
diagnosis. It tells you *what happened to the reader*. Craft critique tells
you *why* and *what to change*.

## Using Reader-Sim Signal

**Preserve the persona.** A reader-sim report is bound to a specific persona
with a specific knowledge boundary, genre familiarity, and tolerance for
ambiguity. A teenage fantasy reader and a literary-fiction editor will report
different experiences of the same passage. Neither is wrong. Know which
persona generated the signal before acting on it.

**Trust the felt experience over the explanation.** When a reader-sim reports
"I drifted here" or "I stopped caring what happened next," the experience is
reliable even if the reader's self-diagnosis is wrong. A reader who says "the
sentences are too long" might actually be experiencing a pacing problem, not a
prose problem. Use the *where* and *what I felt* from reader-sim; use craft
critique for the *why*.

**Look for convergence.** When reader-sim and craft critique point to the same
passage for different reasons — reader-sim says "I felt confused here," craft
critique says "POV break" — that's a high-confidence finding. When they
disagree — reader-sim says a passage worked, critic says it has a structural
problem — investigate before overriding the reader's experience.

**Map signal to reward channels.** Reader-sim reports through five channels:
transportation, aesthetic pleasure, social simulation, curiosity/prediction,
and flow. Each maps to different craft actions:

- Transportation breaks → check POV consistency, sensory grounding, world
  logic, coherence of narrative progression
- Aesthetic flatness → check sentence rhythm, word choice, variety, whether
  style is doing work or just being competent
- Social simulation gaps → check character motivation, distinct voice,
  access to interiority, whether emotions are shown or labeled
- Curiosity/prediction loss → check information design: is the reader
  holding questions? Are gaps closing too early, too late, or going
  unanswered? Is there forward pull?
- Flow breaks → check pacing, challenge-fit, clarity, scene-level momentum

**Watch the middle.** Reader-sim data is most diagnostic in the middle of
longer drafts. Openings usually have momentum from novelty. Endings usually
have momentum from closure. The middle is where the reader's willingness to
continue gets tested, and where curiosity/prediction signal is most revealing.

## What Reader-Sim Cannot Tell You

Reader-sim reports a single reading. It cannot tell you whether a passage will
work for a different persona, a re-reader, or a reader who brings different
genre expectations. It cannot diagnose structural problems that only become
visible across the full arc. And it cannot distinguish between "this passage
failed" and "the setup before this passage failed," because the reader only
knows what they experienced, not what caused it.


---

## skills/story-review/resources/prose-critique/voice.md

Source: https://raw.githubusercontent.com/haowjy/creative-writing-skills/main/skills/story-review/resources/prose-critique/voice.md

# Voice Review

Evaluate dialogue quality, POV consistency, subtext, and voice drift.

## Dialogue

Dialogue should do at least two things simultaneously: advance plot AND reveal character, or build tension AND seed information. Single-purpose dialogue feels flat.

### Subtext

Characters rarely say exactly what they mean. They deflect, understate, change the subject, answer a different question. The gap between what's said and what's meant is where characterization lives.

Flag dialogue that's "on the nose": characters stating their feelings, motivations, or the scene's theme directly. "I'm angry because you betrayed my trust and now I don't know if I can ever believe you again" is not how people talk during conflict. People say "Fine." People say "Whatever you need to tell yourself." People say nothing and leave the room.

### "As You Know, Bob"

Exposition disguised as dialogue: characters telling each other things they both already know, for the reader's benefit. "As you know, the reactor was built fifteen years ago by the consortium to power the eastern grid..." If both characters know it, neither would say it.

### Character Simulation Distinction

Can you identify the speaker without tags? Each character should have distinct:
- Vocabulary range (formal/casual, technical/plain, elevated/blunt)
- Sentence structure (short and clipped, or flowing and complex)
- Verbal habits (what they talk about, what they avoid, how they deflect)
- Emotional register (stoic, effusive, guarded, blunt)

Common failure: all characters sound like the same competent, slightly formal narrator. A street kid and a professor should be immediately distinguishable in dialogue.

### Dialogue Tags and Beats

"Said" is invisible: use it freely. Creative tags ("he exclaimed," "she retorted," "he murmured breathlessly") draw attention to the tag instead of the dialogue. Action beats ("She set the cup down. 'That's not what I meant.'") show how something is said through behavior.

## POV Consistency

POV violations are the most common craft error in AI-generated prose. The POV character can only report what they perceive, think, and feel.

### Head-Hopping

Reporting the internal states of non-POV characters as fact: "She felt angry" when we're in a different character's POV. The fix: show the anger through observable behavior. "Her jaw tightened" or "She turned away without answering."

### Knowledge Violations

The narrator knowing things the POV character couldn't know: what happened in a room they weren't in, what someone looks like from behind when the POV character is facing them, what a character is planning when they haven't revealed it.

### Tonal Drift

The POV character's narration should reflect their way of processing the world: their education, preoccupations, blind spots, and emotional state. If the narration reads the same regardless of which character holds the POV, voice is flattening.

Check whether the prose sounds like THIS character telling THIS story, or like a competent narrator who happens to be using "I."

## Voice Drift

Compare the prose against the project's established voice (style files, earlier chapters). Watch for:

- Register shifts (casual narration suddenly becoming formal, or vice versa)
- Vocabulary changes (the narrator using words the character wouldn't know)
- Sentence rhythm changes (short punchy prose giving way to flowing literary sentences mid-chapter)
- Emotional processing changes (a character who internalizes suddenly becoming externally expressive)

Voice drift often happens gradually: any single paragraph reads fine, but comparing the opening to the ending reveals the shift. Read the first and last pages of a chapter against each other.

## Subtext in Narration

The narrator's observations reveal character even outside dialogue. What the POV character notices, what they ignore, how they describe things: all carry subtext.

A character who describes a room by its exits is different from one who notices the books on the shelf. A character who describes another person by their posture is different from one who notices their clothes.

Flag narration that's too neutral: describing things without the filter of the POV character's personality and preoccupations.


---

## skills/story-review/resources/editorial-review.md

Source: https://raw.githubusercontent.com/haowjy/creative-writing-skills/main/skills/story-review/resources/editorial-review.md

# Editorial Review

An editorial review is the holistic third-party book-editor pass. It answers:
what kind of revision does this draft need, and in what order should the author
work?

## How to Read

Read the full draft before writing a single note. The first read is for the
felt experience: where you leaned in, where attention drifted, where the
story gained or lost momentum. Resist the impulse to annotate on first
contact. Many apparent problems resolve later in the manuscript; many
real problems only become visible in retrospect.

On the second pass, read with the diagnostic lens. You now know what the
draft is trying to do. The question becomes: where does it succeed at that,
and where does it fall short?

## Order of Attention

1. **Reader promise**: what experience, genre promise, question, or emotional
   contract does the draft make in its opening pages? Does the rest of the
   draft pay that promise, or does it drift toward a different book?
2. **Developmental structure**: premise, causality, stakes, pacing, escalation,
   character arc, scene necessity, chapter/section function. Can the story
   bear its own weight, or is the architecture asking too much of the reader?
3. **Voice and style**: POV control, narrator/character voice, tone, dialogue,
   rhythm, texture, stylistic consistency. Does the prose belong to this
   story, or is it competent-generic draped over the material?
4. **Line-level execution**: clarity, paragraph movement, repetition, sentence
   shape, over-explanation, missed implication. Are there recurring patterns
   that weaken the prose across passages?
5. **Copy/proof surface**: grammar, punctuation, spelling, continuity of terms,
   formatting, style-sheet issues. Only flag these as recurring patterns, not
   individual instances.

Do not lead with proofreading unless proofreading is the requested edit level.
Surface errors matter, but early drafts fail from larger causes. An editorial
memo that opens with comma splices when the story has a broken arc is a waste
of the author's attention.

## Editorial Memo Shape

- **Overall diagnosis**: the kind of revision this draft needs — not
  everything that could be improved, but the dominant problem. A draft that
  needs structural work should hear that, not a list of fifty line notes
  that will be moot after restructuring.
- **Priority queue**: highest-impact fixes first, with rationale. Order by
  reader cost: what damages the reading experience most?
- **Major notes**: developmental and reader-effect issues anchored to
  passages. Each note should name the problem, explain what it costs the
  reader, and suggest a direction (cut, move, expand, reframe, seed
  earlier, delay payoff, change a character decision). You are not
  prescribing the fix; you are showing the author what kind of move would
  address the problem.
- **Line/voice notes**: recurring patterns across passages, not every
  sentence. Name the pattern, give two or three representative examples,
  and explain what the prose would gain from addressing it.
- **Copy/proof notes**: only recurring surface patterns or items that block
  comprehension. A single typo does not belong in an editorial memo.
- **Revision order**: what to fix now, what to defer until later, and why.
  Tell the author where to start so they don't waste effort polishing
  scenes that need restructuring.

## Editorial Discipline

**Protect the author's voice.** The goal is the best version of *this* book
by *this* writer, not the book you would have written. When you feel the urge
to rewrite a passage in your own style, that impulse is almost always wrong.
Suggest the direction of a change; leave the author room to execute it in
their own language.

**Query before overriding.** When a change would alter meaning, voice, canon,
or the reader promise, flag it as a query rather than a directive. "Did you
intend X here? Because the reader may read it as Y" gives the author room to
confirm or redirect. "Change X to Y" assumes you know their intent better
than they do.

**Distinguish voice from error.** Intentional roughness, non-standard usage,
idiosyncratic rhythm, and deliberate ambiguity are not errors. If you
suspect something is a choice rather than a mistake, ask rather than correct.
A good editor learns the difference between "this writer always does X" and
"this writer accidentally did X here."

**Stay in your lane.** An editorial review is not a rewrite. Diagnose and
recommend; do not produce replacement prose unless the author explicitly asks
for a rewrite pass. The editor's job is to see what the author cannot see
from inside the draft, not to take the draft away from them.

**Name what works, briefly.** An editorial memo that only catalogs failures
teaches the author nothing about their strengths. One or two sentences
identifying what the draft does well — and why — help the author understand
which instincts to trust during revision.
