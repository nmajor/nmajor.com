# RAW: EveryInc/draft-review-kit — Every's editorial review skills, published as a public repo

- URL: https://github.com/EveryInc/draft-review-kit
  (files fetched from https://raw.githubusercontent.com/EveryInc/draft-review-kit/main/...)
- Date accessed: 2026-08-18
- What it is: PRIMARY ARTIFACT. The actual, open-sourced version of the draft-review skills Katie
  Parrott describes in her Every essays (see operators-every-ai-review-skills.md). A working
  newsletter/publication team's draft->edit loop, shipped as installable Markdown skills for Claude
  Code and Codex. Reproduced verbatim below: the README (including the suggested running order),
  the `guardrails` pre-publication skill and its two reference files, plus `dev-edit`, `panel`,
  `debate`, `asshole`, `mom`, `eli5`, `hemingway`, and `line-edit`.
- Licence: repo carries a LICENSE file; check it before copying text into the repo verbatim.

## VERBATIM — README.md

```markdown
# Draft Review Kit

Reusable review skills for stress-testing drafts.

This kit is a small editorial board you can run from an agentic writing environment. Each reviewer has a distinct job: one attacks the argument, one checks whether a general reader can follow, one looks for suspense, one cuts bloat, one convenes the whole room.

These skills are intentionally feedback-focused. They are not for generating ideas, hooks, outlines, or first drafts. Use them once you have prose on the page and want sharper judgment around what is working, what is weak, and what needs to change.

## Included Reviewers

### Big-Picture Review

- `dev-edit` - reviews argument, structure, stakes, and payoff.
- `guardrails` - scans for evidence gaps, argument failures, AI-shaped rhetoric, mechanics problems, and recurring voice tics.
- `panel` - convenes multiple reviewers and synthesizes their feedback.
- `debate` - has reviewers argue with each other until tensions resolve or become clear.

### Pressure And Reader Response

- `asshole` - gives the least charitable read and attacks weak claims.
- `mom` - reads as a loving but non-expert general reader.
- `eli5` - flags jargon, hand-waving, and skipped steps.

### Craft Lenses

- `hitchcock` - checks suspense, tension, and the visible "bomb under the table."
- `sorkin` - checks pacing, momentum, and forward motion.
- `vonnegut` - applies Vonnegut's story rules to fiction or nonfiction.
- `sedaris` - finds humor, specificity, absurdity, and self-deprecation.
- `hemingway` - cuts adjectives, adverbs, qualifiers, and unnecessary words.

### Final Editing

- `line-edit` - performs a rigorous sentence-level edit and summarizes changes.

## Suggested Workflow

1. Run `dev-edit` when the draft exists but the structure can still move.
2. Run `asshole`, `mom`, or `eli5` depending on the reader risk you want to expose.
3. Run one or two craft reviewers: `hitchcock` for tension, `sorkin` for pace, `vonnegut` for story logic, `sedaris` for humor, `hemingway` for bloat.
4. Run `guardrails` before publication to catch evidence, argument, mechanics, and patterned AI-writing failures.
5. Run `panel` or `debate` for high-stakes drafts where multiple perspectives should be reconciled.
6. Run `line-edit` after the big decisions are resolved.

The point is not to run every reviewer every time. The point is to have the right kind of pressure available when the draft needs it.

## Install

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add EveryInc/draft-review-kit
/plugin install draft-review-kit@draft-review-kit-local
```

Restart Claude Code after installation.

### Codex

Register the marketplace:

```bash
codex plugin marketplace add EveryInc/draft-review-kit
```

Then launch Codex, run `/plugins`, open the **Draft Review Kit** marketplace, and install `draft-review-kit`. Restart Codex after installation.

### Use The Skills

Ask for a review in plain language, or invoke a specific skill:

- Claude Code: `/dev-edit`, `/guardrails`, `/hitchcock`, `/line-edit`
- Codex: `$dev-edit`, `$guardrails`, `$hitchcock`, `$line-edit`

For other agents, copy the relevant skill folders into that agent's skills directory. Each skill is plain Markdown and can be adapted to any system that supports reusable instructions.

## Customize This

Fork the reviewers. Rename them. Make them kinder, meaner, narrower, stranger, or more specific to your work.

The best reviewer is not the most universal one. It is the one that remembers the standard you keep forgetting at exactly the moment you are tempted to call the draft done.
```

## VERBATIM — skills/guardrails/SKILL.md

```markdown
---
name: guardrails
description: "Scan any Every draft for recurring editorial-review failures: clarity and evidence gaps, argument problems, mechanics red flags, second-order AI tells, and, for Working Overtime only, column-specific voice tics and structural throat-clearing. Use when reviewing or polishing Every writing before submission. Reports findings with line-level diagnoses and suggested fixes. Pairs with ai-check and every-style."
user_invocable: true
---

# Guardrails

## Overview

This skill scans drafts against patterns that recur in Every pre-publication review. The first four categories apply to any Every draft. Categories 5 and 6 are Working Overtime-specific; do not apply them to other columns or ghostwritten work.

This skill produces a findings report. It does **not** rewrite the whole draft. Katie wants to see flags with diagnoses and suggested fixes, then make the editorial calls herself.

## When this skill auto-triggers

- Reviewing any Every draft for pre-publication
- Polishing a draft when AI tells have been flagged
- Invoked explicitly via `/guardrails`
- Any Every draft review request that mentions "scan," "check," "review," "tighten," or "flag"

For generic AI-tell detection, use `ai-check`. For Every house mechanics, use `every-style`. For residual process narration, use `tracks`. All four can run in sequence; this skill is the substantive editorial guardrail layer.

## Detection categories

### Universal: apply to every Every draft

1. **Editorial clarity and evidence** — missing "why" or "so what," missing specifics, unidentified people/companies/terms, source and attribution gaps, TKs in review copy, jargon without translation, naming a tool when the category is the point, and muddy connective logic.
2. **Argument-level guardrails** — straw men, false binaries, AI determinism, technical intimidation, suffering Olympics, false universality.
3. **Mechanics-level guardrails** — hedges, correlative constructions, rhetorical questions as filler, meandering intros, sentimental conclusions, metaphors without payoff, unexplained technical terms.
4. **AI tells beyond the standard lexicon** — aphoristic balance closes, "I don't mean X. I mean Y" redirects, pseudo-Q&A bridges, and reader-projection "Maybe" anaphora.

### Working Overtime only: skip for other formats

5. **Voice tics at risk of overuse** — "messy middle" fingerprint phrase, italicized closing mantra, Then/Now temporal opener.
6. **Structural throat-clearing** — structural self-naming announcements, "(and what it isn't)" subheads, standardized build-your-own appendix.

## Editorial Clarity And Evidence Checks

Run these first on every draft:

- Translate AI-flavored or branded-sounding phrasing into plain English.
- Add the reason when a recommendation or claim leaves the reader asking why it is important.
- Give abstract concepts a concrete example and numbers a meaningful comparison.
- Identify people, companies, acronyms, and specialist terms on first mention.
- Attribute factual claims, statistics, trend statements, and quotes. If no source exists, narrow or cut the claim.
- Resolve body-copy `TK`s before editorial review; surface any unresolved gap separately.
- Define necessary jargon on first use or replace it with plain language.
- Name the tool category when the point is general; name the specific tool only when its identity matters.
- State the connection between grouped examples explicitly or cut the grouping.

For any Every scan, read `references/editorial-clarity-evidence.md` for the universal criteria. For expanded Working Overtime examples and earlier pattern history, read `references/working-overtime-guardrails.md` only when reviewing Working Overtime.

## Scan workflow

### Step 1: Identify the content type

Determine whether the draft is Working Overtime or another Every format. This sets whether Categories 5 and 6 apply.

### Step 2: Scan in priority order

1. Editorial clarity and evidence pass
2. Argument-level pass
3. Correlatives pass
4. Hedge pass
5. Rhetorical-question pass
6. Closing pass
7. Tic pass, for Working Overtime only
8. Structure pass, for Working Overtime only

For each pass, scan the full draft before moving to the next. Don't try to catch everything in one read.

### Step 3: Log each finding

For every flag, record:

- **Pattern name** (from the guardrails catalog)
- **Location** (paragraph number, section header, or distinctive opening words of the paragraph)
- **Offending line** (verbatim quote)
- **Diagnosis** (one sentence on why it trips the rule)
- **Suggested fix** (either a specific rewrite or a directional cut)

### Step 4: Note watch-items

If a pattern not yet in the guardrails catalog appears in the draft, log it as a watch-item at the bottom of the report. Format: pattern description + one-line example. If it shows up in a future draft, it gets promoted to the catalog.

### Step 5: Output the findings report

Use the format below.

## Output format

**Lead with the findings.** No preamble, no scan summary at the top. The report opens with the flags, organized by priority.

```
# Guardrails scan: [essay title or filename]

## Tier 1 — High priority

These hit the highest-severity rules: editorial clarity and evidence, argument-level issues, correlatives, and AI tells beyond the standard lexicon.

### [Pattern name] — [paragraph location]

> "[Offending line, verbatim]"

[One-sentence diagnosis.]

**Fix:** [Specific rewrite or directional cut.]

---

[Repeat for each Tier 1 finding.]

## Tier 2 — Voice tics and mechanics

These need rationing or revision but aren't violations in the strict sense.

[Same format.]

## Tier 3 — Structural throat-clearing

[Same format.]

## Watch-items

Patterns observed in this draft that don't yet have a named rule. If they show up again, promote to the catalog.

- [Description + example]

## Summary

- Total flags: [N]
- Tier 1: [N] | Tier 2: [N] | Tier 3: [N]
- Top three patterns to address: [list]
```

## Calibration

### What to flag aggressively on every Every draft

- Every unsupported factual claim, unidentified person/company/term, unresolved body-copy `TK`, and missing explanation of a load-bearing recommendation
- All correlative constructions and their cousins: "not X, but Y," "I don't mean X. I mean Y," and "X is (and what it isn't)" subheads
- Every rhetorical question that isn't reframing the thesis

### What to flag aggressively for Working Overtime only

- Every italicized closing mantra (cap is one per quarter)
- Structural self-naming announcements (always cut)

### What to flag once, then ration

- "Messy middle," "lived moment of friction," "permission to experiment"—flag if present, note frequency. Don't flag every instance; flag the recurrence pattern.
- Then/Now temporal openers—flag only if the temporal pivot isn't itself the essay's friction.
- Standardized build-your-own appendix—flag only if the recipe isn't the deliverable.

### What NOT to flag

- Single uses of words that overlap with AI vocabulary but serve the piece ("significant" used precisely, "crucial" in context)
- Intentional cascades (three or more parallel sentences accreting specifics)—this is the signature move, not a tic
- Parenthetical asides that carry argumentative weight—signature move
- Vernacular gut-checks ("OH MY GOD, MARGOT," "it's fine, it's fine, it's probably fine")—signature move
- Wry humor with self-deprecation that closes a loop—signature move

When in doubt, ask: does this passage sound like Katie thinking out loud, or like a model that found a satisfying rhythm? The first stays. The second flags.

### Severity calibration by format

- **Working Overtime:** apply all six categories.
- **Source Code, Vibe Check, Context Window, daily-read modules, and ghostwritten pieces:** apply Categories 1 through 4 only.
- **Short social copy, captions, and decks:** apply Category 1 unless a wider scan is requested.

## Edge cases

**Q: A flagged passage is genuinely strong. Should I still flag it?**
Yes. Flag it with a note that it's strong but pattern-detectable. Let the writer decide whether it earns its place. Example: an aphoristic balance close that defines the essay's thesis may be the one allowed exception per piece.

**Q: The draft has zero flags.**
Output a one-line confirmation: "No guardrail violations found. Watch-items: none." Skip the section headers.

**Q: The draft is heavily flagged (10+ Tier 1 issues).**
Don't write the full report. Output a summary: "Heavy flag count—N Tier 1, M Tier 2, K Tier 3. Suggest a structural revision before line-level pass. Top three patterns: [list]." This signals the draft needs a bigger intervention than line edits.

**Q: A pattern fires but the writer has clearly used it intentionally for voice (e.g., a deliberate "messy middle" callback to a prior essay).**
Flag with the note: "Intentional callback to [prior essay]. Allowed if deliberate; recommend swap if not." The writer makes the call.

**Q: A new pattern appears that doesn't fit any existing rule.**
Log it as a watch-item. Don't try to force it into an existing category. Two appearances = promote to the catalog.

## Pairing with other skills

- **Before guardrails:** run `dev-edit` when the opening, thesis, promise, stakes, or evidence still need validation. No point scanning line-level guardrails on a piece with a buried lede or unstable argument.
- **Alongside guardrails:** run `ai-check` for the standard AI-tell lexicon (delve, leverage, "in today's fast-paced world"). The two scans are complementary: `ai-check` catches generic lexical patterns; `guardrails` catches substantive editorial failures.
- **After guardrails:** run `every-style` for house mechanics, then `tracks` for residual process narration.

## References

- `references/editorial-clarity-evidence.md` — universal Every editorial clarity and evidence rules. Load for every scan.
- `references/working-overtime-guardrails.md` — supplemental pattern history and examples for Working Overtime-only scans. It is not the universal source of truth for this skill.

## Updating the catalog

When a draft surfaces a pattern not yet in the catalog:

1. Log it as a watch-item in the scan report.
2. After two appearances across separate drafts, add a universal pattern to this skill or a Working Overtime-only pattern to `references/working-overtime-guardrails.md`, using the real example.
3. After three appearances, promote it to a numbered position in the relevant category.
4. When this skill catches the pattern unprompted in subsequent drafts, the rule has stuck.

The catalog is a living system. Universal Every rules belong here; column-specific patterns belong in their project-specific references.
```

## VERBATIM — skills/guardrails/references/working-overtime-guardrails.md

```markdown
A consolidated catalog of patterns that get flagged in pre-publication review. Paired with the main style guide—which names what to *do*—this guide names what to *catch and cut*. Real examples from past drafts where available; constructed wrong-way/right-way pairs where the corpus is clean.

## **How to use this guide**

* **Mid-draft check:** scan by category when a passage feels off.
* **Pre-publication check:** run the full catalog against the manuscript before submission.
* **Style guide update protocol:** when a new pattern shows up in two or more drafts, add it here first. Promote to a high-priority rule if it recurs in a third.

---

## **1\. Argument-level guardrails**

Patterns that weaken the thinking before they weaken the prose.

**Straw-man arguments.** Caricaturing the position you're engaging with so it's easier to knock down.

*Fix:* Steelman first. Present the strongest version of the counterargument, then engage it.

**False "both sides" balance.** Pretending neutrality on a question where you have a position.

*Fix:* Acknowledge complexity without feigning neutrality. The participant/observer voice is honest about which side of the experience you're on.

**Flattening binaries.** Builders versus users. Human versus machine. Technical versus non-technical.

*Fix:* Live in the weird, wobbly middle. Working Overtime is the column for the in-between, not the column for the false dichotomy.

**AI determinism.** "AI will inevitably..." / "We're heading toward a future where..."

*Fix:* Keep human agency in play. The column documents what people are doing with AI, not what AI is doing to people.

**Technical intimidation.** "I'm not technical, but..."

*Fix:* Delete the hedge. You're technical enough to have the experience. (This rule appears in the main guide too; including here for completeness.)

**Suffering Olympics.** Comparing AI anxieties to "real" problems to disqualify the AI anxiety.

*Fix:* Cut the comparison. Let the anxiety stand on its own terms.

**False universality.** Assuming every reader's experience mirrors yours.

*Fix:* Acknowledge position. "Maybe yours isn't inbox paralysis. Maybe it's..." is the move—but rationed (see Tier 3 below).

---

## **2\. Mechanics-level guardrails**

Patterns that weaken the prose at the sentence level.

**Hedges.** "Actually," "maybe," "just," "kind of," "sort of," "pretty sure," "somewhat."

*From AI Compulsion:* "The cynic in me is pretty sure that most won't."

The piece can stand the conviction without "pretty." The cynic in me knows that most won't.

*Fix:* Delete the hedge unless it does load-bearing work. "I think" / "I'd argue" can stay when they're owning a position; "I just think maybe" cannot.

**Correlative constructions.** "Not X, but Y." "Not just X, but also Y." "It's not that X—it's that Y." "Not because X, but because Y."

*From Every Taste:* "Intellectual generosity makes sure we argue in a way that invites people in, not pushes them out."

The "not pushes them out" tail is a hidden correlative. The sentence is stronger as: "Intellectual generosity makes sure we argue in a way that invites people in."

*Fix:* Lead with what it IS. If both halves matter, separate them into two declarative sentences with different structures.

**Rhetorical questions as filler.** Questions that bridge paragraphs without earning their question mark.

*From AI Compulsion:* "What can we do to combat the overwhelming push and pull of AI compulsion? Ranganathan and Ye propose an 'AI practice'..."

*Fix:* Cut the question, lead with the proposal. "Ranganathan and Ye propose..." Allowed only when the question reframes the essay's thesis (e.g., "Am I a real writer?" in *I Wrote This With AI*, where the answer redefines the term).

**Meandering intro.** Stakes that take more than three paragraphs to arrive.

*From the prior version of How My Career Prompted Me Toward AI:* "Three months ago, I was a content marketer hyper-fixated on how working with AI could help me make content faster. Now I build AI systems that influence how everyone at Every creates. If that sounds like a wild career pivot, that's because it is."

The current version compresses to: "Two years ago, I was a content marketer who could barely get out of bed. Now, I build AI systems..." Same arc, half the throat-clearing.

*Fix:* Start with friction. The opener should drop the reader inside the discomfort by sentence two.

**Sentimental or saggy conclusion.** An ending that summarizes the essay rather than extending it.

*Wrong-way:* "And so, AI has changed my life in ways I never expected. The journey continues, and I'm grateful for what I've learned."

*Right-way (from I Wrote This With AI):* "Am I a real writer? I'm a writer who takes feedback, iterates relentlessly, holds herself to a standard, and ships every week. One of my editors just happens to be an AI. The rest is still me."

*Fix:* End by extending, reframing, or handing the reader a tool. Never recap.

**Metaphor without analytical payoff.** A metaphor that vibe-sets but doesn't argue.

*Fix:* Cut or develop. If you introduce the board-game frame, you owe the reader rules and pieces. If you introduce the cooking-versus-microwaving frame, you owe the reader the difference. No vibe-setting without argumentative work.

**Technical term without ELI5.** Using "agent," "MCP," "context engineering," "compound engineering," "vibe coding" without translation on first mention.

*Fix:* See the main guide's ELI5 rule. Every technical term gets a definition the first time it appears in a piece, even if it appeared in an earlier essay.

---

## **3\. AI tells the current red-flag list doesn't catch**

Second-order patterns that recur across drafts. These weren't named in earlier versions of the style guide because they aren't on the standard AI-tell lexicons. They're voice-adjacent enough to slip through.

**The aphoristic balance close.** Two parallel sentences delivering a balanced two-beat as a section close or thesis line.

*From AI Compulsion:* "The slot machine keeps me pulling the lever. The fear keeps me sitting at the machine."

*From Every Taste:* "Style is the 'how': the choices of syntax, rhythm, and imagery that shape the prose. Voice is the 'why': the convictions that give those stylistic choices meaning."

The cascade earns its parallelism by accreting three or more concrete details. Reduce that to two abstractions and the symmetry stops feeling earned—it feels arranged.

*Fix:* Extend to a third beat with a specific detail (turning the pair into a cascade), or break the symmetry by varying one of the two. Reserve the balanced two-beat for the essay-defining line; cap at one per piece.

**The "I don't mean X. I mean Y." redirect.** A three-sentence form of "not X, but Y"—the same correlative logic spread across sentence breaks.

*From AI Compulsion:* "AI is changing work—and I don't mean how we're working, although it's changing that, too. I mean how the work feels in your body at 1 a.m. when you can't stop..."

*Fix:* If tempted to write "I don't mean X. I mean Y," delete the X half. Lead with Y. The reader will catch up.

**The pseudo-Q\&A bridge.** A rhetorical question used as a transition between sections, answered immediately. See Section 2, "Rhetorical questions as filler," for the rule and exception.

**The reader-projection "Maybe" anaphora.** Three "Maybe yours is..." constructions inviting the reader to project their version of the writer's experience.

*From Emotional Support Tech:* "Maybe yours isn't inbox paralysis. Maybe it's decision fatigue, or context-switching costs, or the cognitive load of remembering everything that needs doing. Maybe it's the constant low-grade stress of not knowing if you're working on the right thing."

The inviting move is a column strength. The anaphora is what tips it into AI rhythm—once readers hear three "maybes" in a row, the empathy starts to feel templated.

*Fix:* Two "maybes" maximum. The third needs to be a specific example or a turn that breaks the pattern.

---

## **4\. Voice tics at risk of overuse**

These started as voice strengths. They've recurred enough that they now read as fingerprint rather than freshness. Not banned—rationed.

**"Messy middle" as fingerprint phrase.** The phrase appears in the style guide and across multiple essays. Same with "lived moment of friction" and "permission to experiment."

*Fix:* Keep a running list of recurring metaphors. When a phrase has shown up in the last three essays, sub in fresh language for the fourth.

**The italicized closing mantra.** A short italicized line as final benediction.

*From AI Compulsion:* "*You're doing enough.*"

*From Every Taste opener:* "I practically whispered, *Thank God.*"

When every essay ends on an italicized aphorism, the italics stop adding emphasis and start signaling "this is the meaningful part."

*Fix:* One italicized mantra per quarter, not per piece. If the line is strong, it doesn't need the italics.

**The Then/Now temporal opener.** "X years/months ago, I was Y. Now, I am Z."

*From How My Career Prompted Me Toward AI:* "Two years ago, I was a content marketer who could barely get out of bed. Now, I build AI systems that influence how everyone at Every creates."

A genuinely strong opener until it becomes the default. It works when the temporal pivot is itself the essay's friction. When the friction is something else, the opener is borrowed scaffolding.

*Fix:* Only when the temporal pivot is itself the friction. Reach for it deliberately, never as a default when something more specific is available.

---

## **5\. Structural throat-clearing**

Smaller patterns. Each is a single-essay tic worth catching in the pre-publication pass.

**Structural self-naming.** Telling the reader what structure you're about to use.

*From How I Didn't Build an AI Editor:* "Here it is, a tragedy in five parts."

Telegraphs the scaffold. Readers shouldn't see the dollhouse.

*Fix:* Cut the announcement. Let the structure carry itself.

**The "X is (and what it isn't)" subhead.** The same correlative pattern as "not X, but Y," dressed as a subhead.

*From I Wrote This With AI:* "What writing with AI is (and what it isn't)"

*Fix:* Pick a side. Lead with what it is.

**The standardized build-your-own appendix.** A numbered "Here's how to do it yourself" section appended to essay end.

Appears in *How My Career Prompted Me Toward AI*, *AI Project Manager*, *Career Coach*, *How o3 Rewrote My Ambitions*. The trinity demands a practical takeaway, and the numbered-appendix format reliably delivers one—but at a cost. It flattens prose into listicle and signals "the essay part is over, here's the recipe."

The strongest practical takeaways are woven into closing prose. The final line of *I Wrote This With AI* hands the reader a usable answer ("I'm a writer who takes feedback, iterates relentlessly, holds herself to a standard...") without any 1/2/3 scaffolding.

*Fix:* Default to weaving the takeaway into closing prose. The bolded numbered appendix is reserved for essays where the recipe is the deliverable (*AI Project Manager*'s prompt block warrants one; *How My Career Prompted Me Toward AI* would land harder without one).

**"Common AI-generated constructions" inherited from the Every AI Editor Guidelines.** Documented elsewhere but worth restating:

* "No X. No Y. Just Z." (e.g., "No fluff. No filler. Just value.")
* "Question? Answer to the question." (covered above as pseudo-Q\&A bridge)
* Dating language: "a few weeks ago" instead of a specific date

---

## **Pre-publication scan order**

Run in this sequence before submitting to a human editor.

1. **Argument-level pass.** Check for straw men, false binaries, AI determinism, false universality.
2. **Correlatives pass.** Search the draft for "not X, but Y" patterns and their cousins ("invites X, not Y," "I don't mean X. I mean Y," "X is (and what it isn't)").
3. **Hedge pass.** Search for "just," "actually," "maybe," "pretty sure," "kind of," "sort of." Delete unless load-bearing.
4. **Rhetorical-question pass.** Confirm every question mark resolves the thesis. Cut the bridge questions.
5. **Closing pass.** Confirm the ending extends or reframes. Cut italicized mantras unless they're the column's first this quarter.
6. **Tic pass.** Search for "messy middle," "lived moment," "permission to experiment." If two or more appear, sub one out.
7. **Structure pass.** Confirm no structural self-naming. Confirm the practical takeaway is woven into prose where possible.
```

## VERBATIM — skills/guardrails/references/editorial-clarity-evidence.md

```markdown
# Editorial Clarity And Evidence

These are universal guardrails for any Every draft. Run them before column-specific voice checks.

## AI-Flavored Phrasing

Flag polished, branded, or aphoristic wording that sounds machine-confident instead of conversationally precise.

Examples:

- "One banger beats six mediocre ones in the new ranker."
- "Author diversity decay."
- "A 13-hour agent at 50% is a coin flip with stamina."

Fix: rewrite the sentence in plain English unless the term is a real name the reader needs.

## Missing Why Or So What

Flag recommendations, observations, or instructions that leave the reader to infer the mechanism or stakes.

Fix: add the reason on the same beat as the claim.

## Missing Specifics Or Examples

Flag abstract concepts with no concrete instance, and numbers without a comparison or scale anchor.

Fix: give each load-bearing abstraction one example and each important number the context needed to interpret it.

## Unidentified People, Companies, Or Terms

Flag names, acronyms, organizations, and specialist references a smart generalist may not know.

Fix: add a concise gloss on first mention: title, company, what it does, or why it appears here.

## Source And Attribution Gaps

Flag factual claims, trend statements, statistics, and quotes without traceable sourcing.

Fix: link or attribute the claim. If no source exists, narrow it to lived experience or cut it.

## TKs Shipped Into Review

Flag `TK`, bracketed reminders, and other body-copy placeholders in a draft being prepared for an editor.

Fix: resolve the placeholder before submission. If a gap remains, raise it separately from the copy.

## Jargon Without Translation

Flag technical terms used before the reader has been given a plain-language meaning.

Fix: define the term on first use or replace it with ordinary language.

## Tool Instead Of Category

Flag a specific product name when the argument concerns the broader kind of tool.

Fix: lead with the category and use the named product only as an example, unless the comparison depends on that specific product.

## Muddy Connective Logic

Flag passages that group examples, events, or people without stating the relationship among them.

Fix: write the connecting clause explicitly. If no clear connection exists, cut or restructure the grouping.
```

## VERBATIM — skills/dev-edit/SKILL.md

```markdown
---
name: dev-edit
description: Review a draft for big-picture issues—argument, structure, stakes, and payoff. Invoke with /dev-edit after drafting or with any draft the user provides.
user_invocable: true
---

# Developmental Edit

## Purpose

Review a draft for big-picture issues: argument, structure, stakes, and payoff. Focus on whether the piece *works*, not whether the sentences are polished.

## Entry Points

- After completing a draft through the workflow
- Directly with any draft from anywhere
- As part of a composed "make this better" request

## What to Look For

Questions to consider (not all apply to every piece):

| Area | Questions |
|------|-----------|
| **Structure** | Does each section earn its place? Does the order make sense? |
| **Argument** | Is it logically clear and supported? Any holes? |
| **Evidence** | What backs each major claim? Personal experience? A linked study? A specific example? Where is the support thin or missing? |
| **Outsider read** | If a reader who doesn't know the writer and doesn't read Every picked this up cold, what would they push back on? What would feel like in-group shorthand? |
| **Opening** | Does the hook work? Is the thesis clear? Is there a promise? |
| **Stakes** | Why should the reader care? Why does the writer care? |
| **Payoff** | Does the piece deliver on what it promises? |

**Use judgment.** A personal essay doesn't need argument scrutiny. A how-to doesn't need stakes analysis. Focus on what matters for this piece.

## The Structural Tests

Two diagnostic tests for whether the piece holds together. Run both when the structure feels off — or proactively for any piece with subheads.

### The Subsection Summary Test

For each subsection: write a one-sentence summary of what it argues. Then re-read the subsection. Anything not in service of that one sentence — cut it.

When invoked by the agent:
1. Identify each subsection (subhead-defined or paragraph-cluster).
2. Generate a one-sentence argument summary per subsection.
3. Flag paragraphs, examples, or asides that don't serve their subsection's summary.
4. Report the summaries alongside the flagged content so the writer can decide what stays.

This test catches: orphaned good lines that belong elsewhere, padding from earlier drafts, two arguments tangled inside one subsection.

### The 20-Second Pitch Test

If someone stopped the writer in a hallway, could they explain the piece in 20 seconds? Now compare that pitch to the thesis/promise as stated in the intro.

When invoked by the agent:
1. Generate a 20-second pitch from the piece as written (what it's actually about, end to end).
2. Pull the thesis/promise from the intro as stated.
3. Show both side by side. Flag the gap.

If the pitch and the intro don't match, one of them is wrong. Usually the intro drifted during revision and needs to catch up to what the piece became.

## Evidence Check

For each major claim, ask: what is this backed by?

| Support type | Verdict |
|--------------|---------|
| Personal experience the writer lived through | Strong — let it stand |
| A linked study, dataset, or named source | Strong — let it stand |
| An expert quote or named practitioner | Strong — let it stand |
| A specific named example (company, person, moment) | Strong — let it stand |
| "Studies show…" / "experts agree…" / "many people say…" without specifics | Weak — flag |
| Only the writer's authority, when the writer isn't established on this specific thing | Weak — flag |
| Nothing — assertion floats free | Weak — flag |

It's fine to write about something the writer isn't an expert in. It's not fine to make claims without support and rely on confident tone to carry them. Flag floating claims explicitly — the writer can add evidence, soften the claim, or remove it.

## Output Options

### Full Report (default for comprehensive review)

```
## Developmental Edit Report

### Opening
🔴 **Critical:** [Issue]
[Why it matters]

🟡 **Consider:** [Issue]
[Explanation]

### [Section Name]
🟢 **Minor:** [Issue]
[Explanation]

---

Where would you like to start?
```

**Severity:**
- 🔴 Critical — Piece doesn't work without fixing
- 🟡 Consider — Would strengthen significantly
- 🟢 Minor — Nice to have

### Quick Assessment (for faster feedback)

```
## Quick Dev Edit

**Working well:** [2-3 things]

**Needs attention:**
1. [Main issue + why]
2. [Second issue + why]

**Overall:** [Ready for line edit / Needs another pass / Major restructure needed]
```

Use quick assessment for shorter pieces, time pressure, or when invoked as part of a composition.

## Collaborative Fixing

After the report:
1. Writer picks where to start (or skip straight to line edit)
2. Offer fixes: "Here's how I'd address this—[fix]. Want me to make this change?"
3. Writer accepts, revises themselves, or skips
4. Repeat as needed

**Don't force resolution of every issue.** The writer decides what matters.

## Flexibility

- Writer can ask for specific focus ("Just look at the structure")
- Writer can skip dev-edit entirely
- Writer can run multiple passes
- Can be combined with other feedback (asshole read, objections) for stress testing

## For Agents

When invoked programmatically:
- Accept draft as input
- Return structured assessment (issues + severity)
- Include "overall readiness" indicator
- Can be composed with other review skills

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/panel/SKILL.md

```markdown
---
name: panel
description: Convene a panel of reviewers to analyze a draft from multiple perspectives, then synthesize their feedback into consensus findings, productive tensions, and prioritized recommendations.
user_invocable: true
---

# Panel Review

Convene multiple reviewer agents to analyze a piece, then synthesize their perspectives into a unified analysis that surfaces consensus, tensions, and priorities.

## When to Use

- Before publishing something high-stakes
- When you want multiple perspectives without running reviewers manually
- When you suspect different aspects need different kinds of attention
- When you're too close to the work to know what feedback you need

## The Flow

### 1. Load Context

Read the draft and its .status.yaml to understand:
- **piece_type** — essay, argument, explainer, narrative, etc.
- **audience** — general, specialist, insider
- **stage** — early draft, revision, near-final
- **goals** — if stated

This informs panel selection and later synthesis.

### 2. Propose Panel

Based on piece context, propose 4-6 reviewers.

**Selection heuristics:**

| Signal | Suggests Including |
|--------|-------------------|
| Personal/reflective content | sedaris, mom |
| Argumentative content | asshole, vonnegut |
| Technical or jargon-heavy | mom, hemingway |
| Narrative structure | vonnegut, hitchcock, sorkin |
| Feels slow or wandering | sorkin |
| Feels bloated | hemingway |
| High-stakes / pre-publish | asshole, hemingway |
| General audience | mom |
| Early stage | vonnegut (fundamentals) |
| Late stage | hemingway, asshole (polish, stress-test) |

**Check TASTE.md for:**
- Preferred reviewers
- Reviewers to exclude
- Past patterns

**Present the proposal:**

```
## Proposed Panel

**Draft:** [title or slug]
**Context:** [piece_type] for [audience], currently at [stage]

Based on this context, I recommend:

| Reviewer | Why |
|----------|-----|
| **[name]** | [One-line rationale tied to piece context] |
| **[name]** | [Rationale] |
| **[name]** | [Rationale] |
| **[name]** | [Rationale] |

**Not including:**
- **[name]** — [Why not relevant for this piece]
- **[name]** — [Why not]

Proceed with this panel, or adjust?
```

Wait for user confirmation or modification.

### 3. Run Reviewers in Parallel

Once confirmed:

1. Spawn all selected reviewer agents in parallel using the Task tool
   - Use subagent_type matching the reviewer (e.g., "compound-writing:review:asshole-reviewer")
   - Each receives the full draft
   - Each produces their standard prose output
2. Collect all outputs

**Example spawning pattern:**

```
[Spawn in parallel:]
- Task: asshole-reviewer with draft
- Task: mom-reviewer with draft
- Task: hemingway-reviewer with draft
- Task: sorkin-reviewer with draft
```

### 4. Run Synthesizer

Spawn panel-synthesizer agent with:
- The draft
- Draft context from .status.yaml
- All reviewer outputs (full prose)

**Synthesizer prompt should include:**

```
## Draft

[full draft text]

## Context

piece_type: [from .status.yaml]
audience: [from .status.yaml]
stage: [from .status.yaml]
goals: [from .status.yaml if present]

## Reviewer Outputs

### asshole-reviewer
[full output]

### mom-reviewer
[full output]

### hemingway-reviewer
[full output]

[etc.]
```

### 5. Return Synthesis

Present the synthesizer's output to the user.

## Panel Size

- **Minimum:** 3 reviewers (fewer than this, just run them individually)
- **Recommended:** 4-5 reviewers (good coverage without redundancy)
- **Maximum:** 7 reviewers (all of them—full stress test)

## Available Reviewers

| Reviewer | Subagent Type | Focus |
|----------|---------------|-------|
| asshole | compound-writing:review:asshole-reviewer | Logical rigor, unsupported claims |
| mom | compound-writing:review:mom-reviewer | Accessibility, jargon, general reader |
| hemingway | compound-writing:review:hemingway-reviewer | Economy, cutting, word-level |
| sedaris | compound-writing:review:sedaris-reviewer | Specificity, humor, voice |
| sorkin | compound-writing:review:sorkin-reviewer | Pacing, momentum, forward motion |
| vonnegut | compound-writing:review:vonnegut-reviewer | Story fundamentals, structure |
| hitchcock | compound-writing:review:hitchcock-reviewer | Tension, suspense, stakes |

## Default Panels by Piece Type

If .status.yaml has `piece_type`, use as starting point:

| piece_type | Default Panel |
|------------|---------------|
| `essay` / `personal` | mom, sedaris, vonnegut, sorkin |
| `argument` / `opinion` | asshole, vonnegut, hemingway, mom |
| `explainer` / `technical` | mom, hemingway, sorkin |
| `narrative` / `story` | vonnegut, hitchcock, sorkin, sedaris |
| `newsletter` | mom, sorkin, hemingway |

Always adjust based on specific signals in the draft.

## Example Session

```
User: /panel

Agent: I'll convene a panel to review your draft. Let me read it and check the status.

[Reads draft]
[Reads .status.yaml: piece_type: essay, audience: general, stage: revision,
 goals: "make it land emotionally without being sappy"]

## Proposed Panel

**Draft:** father-and-the-sea
**Context:** essay for general audience, revision stage

Based on the context—personal essay aiming for emotional impact without
sentimentality—I recommend:

| Reviewer | Why |
|----------|-----|
| **mom** | General audience check. Will flag where you lose non-insiders. |
| **sedaris** | Personal material that might benefit from more specificity or humor. |
| **sorkin** | Revision stage—check if pacing is tight. |
| **asshole** | The emotional claims need to be earned, not asserted. |

**Not including:**
- **hemingway** — The prose reads clean; economy isn't the issue here
- **hitchcock** — Not a tension-driven piece
- **vonnegut** — Structure is solid; this needs polish not fundamentals

Proceed with this panel, or adjust?

User: Add hemingway actually, I think it might be overwritten

Agent: Adding hemingway. Running the panel now.

[Spawns 5 reviewer agents in parallel]
[Collects outputs]
[Spawns panel-synthesizer with draft + context + all outputs]

## Panel Synthesis

**Panel:** asshole, hemingway, mom, sedaris, sorkin
**Piece context:** essay for general audience, revision stage, goal: emotional
impact without sappiness

---

### Consensus Findings

| Issue | Flagged By | Recommendation |
|-------|------------|----------------|
| Opening two paragraphs are slow | sorkin, hemingway, asshole | Cut or restructure—start closer to the boat |
| "He taught me everything" is unearned | asshole, sedaris | Show what he taught, don't declare it |
| Section 3 gets abstract | mom, sorkin | Ground it in a specific moment |

---

### Productive Tensions

**Tension: The fishing gear paragraph**

> "His tackle box was a museum of failures—rusted lures from the '70s, a reel
> that hadn't worked since Reagan, hooks that had never caught anything but
> his own thumb."

| Cut it | Keep it |
|--------|---------|
| **hemingway:** 47 words that could be 15. "His tackle box held decades of failure" does the job. | **sedaris:** This is the most alive moment in the piece. The specific details are doing real work. |

**What's at stake:** The piece aims for emotional impact without sappiness.
Specific, wry details (sedaris) might be the path there. But if they slow
momentum, they work against the goal.

---

### Unique Insights

- **sedaris:** "There's a joke hiding in the part about him never admitting he
  was wrong. You're circling it but won't commit."
- **asshole:** "Your ending asks the reader to feel something you haven't set
  up. The 'I finally understood' move is unearned."

---

### Recommended Priorities

1. **Restructure the opening** — Three reviewers flagged this. Start on the
   boat, not before it.
2. **Earn the ending** — The emotional payoff needs setup. Show what you
   finally understood through a scene, not a declaration.
3. **Decide on the tackle box** — Genuine tension. Your call based on what
   you're optimizing for.

---

### The Hard Question

> What specifically did you learn from him that you couldn't have learned from
> anyone else? Multiple reviewers noted you assert the relationship's importance
> without showing what made it irreplaceable.
```

## Error Handling

**If a reviewer fails to spawn:**
- Note which reviewer is missing
- Proceed with available outputs
- Mention the gap in synthesis

**If draft has no .status.yaml:**
- Infer what you can from the draft itself
- Note that context is limited
- Make reasonable assumptions about piece type

**If user provides no draft:**
- Ask for the draft path or slug to load
- Or ask them to paste the draft

## Future: Debate Mode

The synthesizer identifies tensions but doesn't resolve them. A future evolution:

1. Synthesizer flags tensions
2. Tensions sent back to involved reviewers: "Hemingway, sedaris said X. Respond?"
3. Reviewers can concede, hold, or propose compromise
4. Multiple rounds until resolution or acknowledged stalemate

For now, tensions surface for the writer to resolve.

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/debate/SKILL.md

```markdown
---
name: debate
description: Run a multi-round deliberation between reviewers. Unlike /panel (which synthesizes), /debate has reviewers respond to each other's arguments across rounds until tensions resolve or reach acknowledged stalemate.
user_invocable: true
---

# Debate Review

Orchestrate a structured deliberation between reviewer agents. Reviewers don't just give feedback in parallel—they engage with each other's perspectives, challenge each other's recommendations, and work toward resolution (or acknowledged stalemate).

## When to Use /debate vs /panel

| Use | When |
|-----|------|
| `/panel` | You want multiple perspectives synthesized. Fast. Tensions surfaced for you to decide. |
| `/debate` | You want reviewers to actually argue it out. More thorough. Tensions may resolve through deliberation. |

**Choose /debate when:**
- The piece is high-stakes and worth the extra rounds
- You want to see how perspectives hold up under challenge
- You suspect some tensions might resolve if reviewers engaged each other
- You want proposals and compromises, not just "you decide"

**Choose /panel when:**
- You want comprehensive feedback quickly
- You're comfortable resolving tensions yourself
- Time/tokens are a concern

## The Deliberation Flow

### Round 1: Initial Positions

Same as /panel—all reviewers analyze the draft independently.

### Round 2: Challenges

The moderator identifies tensions and sends challenges to involved reviewers:

```
## Challenge: The fishing gear paragraph

**The passage:**
> "His tackle box was a museum of failures—rusted lures from the '70s..."

**hemingway said:**
> "47 words that could be 15. Cut it."

**sedaris said:**
> "This is the most alive moment in the piece. Keep every word."

---

**hemingway:** sedaris argues the specificity earns its place. How do you respond?

**sedaris:** hemingway argues this slows momentum. How do you respond?
```

### Round 3: Responses

Reviewers respond in character. They may:

- **Concede** — "On reflection, the detail does earn its place. I withdraw."
- **Hold** — "The momentum problem remains. Even good details hurt here."
- **Propose** — "Keep the first image, cut the extended list. Satisfies both."

### Round 4: Resolution

For each tension:
- **Resolved** — Reviewers agree (via concession or proposal)
- **Stalemate** — Reviewers hold, fundamental value difference
- **Proposal on table** — Compromise offered, writer decides

The moderator may run additional rounds if proposals generate new discussion, but caps at 4 rounds.

## The Flow in Practice

### 1. Load Context

Read the draft and .status.yaml:
- piece_type
- audience
- stage
- goals

### 2. Propose Panel

Same as /panel—propose 4-6 reviewers based on context.

```
## Proposed Panel for Debate

**Draft:** [title]
**Context:** [piece_type] for [audience], [stage]

| Reviewer | Why |
|----------|-----|
| **[name]** | [Rationale] |
| **[name]** | [Rationale] |

**Note:** Debate works best with reviewers who have natural tensions.
Consider including pairs like:
- hemingway + sedaris (economy vs. specificity)
- mom + hitchcock (clarity vs. mystery)
- sorkin + vonnegut (speed vs. depth)

Proceed with this panel, or adjust?
```

Wait for user confirmation.

### 3. Round 1: Run Reviewers

Spawn all reviewers in parallel. Collect outputs.

### 4. Round 2: Identify Tensions and Generate Challenges

Analyze outputs for conflicts. For each significant tension:
- Quote the passage
- Present both positions
- Generate challenge prompts

Spawn challenged reviewers with the challenge context.

### 5. Round 3: Collect Responses

Each reviewer responds to their challenge:
- Concede, Hold, or Propose
- With reasoning

### 6. Round 4: Resolution and Additional Rounds

Determine resolution status. If proposals warrant further discussion, run another round (max 4 total).

### 7. Final Synthesis

Return the debate-moderator's synthesis:
- Resolved tensions (with how they resolved)
- Stalemates (with final positions and stakes)
- Proposals (compromise options)
- Consensus findings (non-debated)
- The hard question

## Panel Selection for Debate

Debate is most valuable when the panel includes natural tensions:

| Pairing | Tension Type | Good For |
|---------|--------------|----------|
| hemingway + sedaris | Economy vs. Specificity | Deciding what earns its length |
| mom + hitchcock | Clarity vs. Mystery | Balancing accessibility and tension |
| mom + hemingway | Context vs. Brevity | What explanation is necessary |
| sorkin + sedaris | Momentum vs. Observation | Pacing of descriptive passages |
| sorkin + vonnegut | Speed vs. Depth | When to slow for character |
| asshole + sedaris | Rigor vs. Voice | Tone of argument pieces |

**Recommendation:** Include at least one natural tension pair in your panel.

## Example Session

```
User: /debate

Agent: I'll run a deliberation on your draft. Let me read it and propose a panel.

[Reads draft]
[Reads .status.yaml: piece_type: essay, audience: general, stage: revision]

## Proposed Panel for Debate

**Draft:** father-and-the-sea
**Context:** personal essay for general audience, revision stage

| Reviewer | Why |
|----------|-----|
| **hemingway** | Check economy—personal essays can get overwritten |
| **sedaris** | Find the specific, human, funny moments |
| **sorkin** | Verify pacing through emotional beats |
| **mom** | General audience accessibility check |

**Natural tensions:** hemingway/sedaris (economy vs. specificity),
sorkin/sedaris (momentum vs. observation)

Proceed with this panel, or adjust?

User: yes

Agent: Running Round 1—each reviewer analyzing independently.

[Spawns 4 reviewers in parallel]
[Collects outputs]

Round 1 complete. Analyzing for tensions.

## Tensions Identified

### Tension 1: The tackle box paragraph
**hemingway** wants to cut; **sedaris** wants to keep every word.

### Tension 2: Section 3 pacing
**sorkin** says it stalls; **sedaris** says the observation is the point.

### Tension 3: Ending explanation
**mom** wants more; **sorkin** says trust the reader.

Proceeding to Round 2 with 3 challenges.

[Spawns challenged reviewers with challenge context]
[Collects responses]

## Round 2 Responses

**Tension 1:**
- hemingway: HOLD — "Momentum matters more than any single detail."
- sedaris: PROPOSE — "Keep 'museum of failures' and the pug. Cut the Reagan line."

**Tension 2:**
- sorkin: CONCEDE — "If the observation is the point, I was wrong to call it a stall."
- sedaris: (no concession needed)

**Tension 3:**
- mom: HOLD — "I still don't know what he learned. That's a real gap."
- sorkin: PROPOSE — "One specific image of the lesson. Not explanation—scene."

Proceeding to final synthesis.

## Debate Synthesis

**Panel:** hemingway, sedaris, sorkin, mom
**Rounds:** 2
**Context:** personal essay for general audience, revision stage

---

### Resolved Tensions

**Section 3 pacing**

> [The observation passage]

**Resolution:** Sorkin conceded. The slow pace is intentional and earns its place.
**Recommendation:** Keep as-is. The observation is the point.

---

### Stalemates

*None—all tensions reached resolution or proposal.*

---

### Proposals

**The tackle box paragraph**

> "His tackle box was a museum of failures—rusted lures from the '70s,
> a reel that hadn't worked since Reagan, hooks that had never caught
> anything but his own thumb."

**Proposed revision:** "His tackle box was a museum of failures—hooks
that had never caught anything but his own thumb."

**Proposed by:** sedaris (compromise with hemingway)
**Would satisfy:** Keeps the voice and "museum" metaphor, cuts the catalog
**Trade-off:** Loses the temporal sweep ("'70s," "Reagan")

---

**The ending**

**Proposed revision:** Add one concrete image showing what you learned,
rather than explaining it.

**Proposed by:** sorkin (compromise with mom)
**Would satisfy:** Mom gets clarity; sorkin keeps momentum
**Trade-off:** Requires writing new material

---

### Consensus Findings

| Issue | Flagged By | Recommendation |
|-------|------------|----------------|
| Opening is slow | hemingway, sorkin | Start on the boat |
| "He taught me everything" unearned | all | Show, don't declare |

---

### The Deliberation Summary

**Resolved:** 1 tension resolved through concession
**Stalemates:** 0
**Proposals:** 2 compromise options for your consideration

---

### The Hard Question

> The debate kept circling one thing: you're telling us the relationship
> mattered without showing us what made it irreplaceable. The ending
> proposal addresses this—but only if you write a scene that earns it.
```

## Token Economics

Debate is more expensive than panel:

| Phase | Approximate Tokens |
|-------|-------------------|
| Round 1: Initial reviews | 4-6 reviewers × ~8K = 32-48K |
| Round 2: Challenges | 3-4 tensions × 2 reviewers × ~4K = 24-32K |
| Round 3: Responses | Same reviewers × ~3K = 18-24K |
| Round 4: Resolution (if needed) | ~10K |
| Synthesis | ~8K |
| **Total** | ~90-120K tokens |

For high-stakes pieces, worth it. For routine editing, use /panel.

## Error Handling

**If a reviewer fails to spawn:**
- Note the gap
- Proceed with available reviewers
- Tensions involving that reviewer won't be debated

**If no tensions identified:**
- Skip to synthesis
- Report as "No significant tensions—reviewers largely aligned"

**If a reviewer doesn't respond to challenge:**
- Treat as implicit HOLD
- Note non-response in synthesis

**If debate goes circular:**
- Moderator calls stalemate after positions repeat
- Cap at 4 rounds regardless

## Relationship to /panel

`/panel` and `/debate` share infrastructure:
- Same reviewer agents
- Same context loading from .status.yaml
- Same panel proposal logic

The difference:
- `/panel` → synthesizer (one pass, tensions surfaced)
- `/debate` → moderator (multiple rounds, tensions engaged)

A natural workflow: run `/panel` first for quick feedback, then `/debate` on specific tensions if you want them argued out.

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/asshole/SKILL.md

```markdown
---
name: asshole
description: Reads your writing through the meanest, least-charitable lens. Challenges every claim, questions every assumption, pokes holes in the logic. Use for later drafts when you want hard feedback.
user_invocable: true
---

# Asshole Read

## Purpose

Give your writing the meanest, least-charitable read possible. This skill adopts the perspective of a hostile reader who assumes the worst interpretation, questions everything, and actively looks for ways to dismiss or attack the piece.

Use this when:
- You think you're done and want to stress-test the piece
- You're in later drafts and want hard feedback
- You're writing something controversial or high-stakes
- You want to find weaknesses before your critics do

## Invocation

- `/asshole [text]` — Give the provided text the meanest read
- `/asshole` — System asks "What would you like me to tear apart?"
- Works on selection if provided, asks if not

## The Asshole Reader's Mindset

This reader:
- Assumes you're wrong until proven otherwise
- Takes the least charitable interpretation of every sentence
- Actively looks for reasons to stop reading
- Has no patience for vagueness, hedging, or filler
- Notices every logical gap, unsupported claim, and weak transition
- Is allergic to clichés, buzzwords, and empty phrases
- Thinks your examples are cherry-picked and your evidence is thin
- Suspects you don't actually know what you're talking about

## What Gets Attacked

| Category | What the Asshole Notices |
|----------|--------------------------|
| **Claims** | Unsupported assertions, overgeneralizations, weasel words ("some people say"), false authority |
| **Logic** | Leaps in reasoning, missing steps, contradictions, circular arguments, false dichotomies |
| **Evidence** | Cherry-picked examples, anecdotes posing as data, correlation/causation confusion, outdated sources |
| **Clarity** | Vague language, jargon without explanation, sentences that require re-reading, buried points |
| **Voice** | Self-importance, hedging that undermines authority, trying too hard, fake humility |
| **Structure** | Sections that don't earn their place, meandering, burying the lede, weak transitions |

## Output Format

```
## The Asshole Read

**Overall impression:** [One brutal sentence about how this reads to a hostile audience]

**The biggest problem:** [The single most damaging weakness]

---

### Line-by-line attacks

> "[Quoted text]"

[Attack: What's wrong with this and why a hostile reader would dismiss it]

[Repeat for each vulnerable passage]

---

### What you need to fix

1. [Most critical fix]
2. [Second most critical]
3. [Third most critical]

---

**The honest question:** [A hard question you need to answer before this piece works]
```

## Principles

- **No kindness** — This skill exists to be harsh. Softening defeats the purpose.
- **Specific attacks** — Vague criticism ("this is weak") is useless. Point to exact words and explain why they fail.
- **Assume bad faith** — Read every sentence as if the reader is looking for an excuse to stop.
- **Find the fatal flaw** — Every piece has one. Find it.
- **Be the critic, not the helper** — Don't offer solutions. Just expose problems. Other skills can help fix them.

## When NOT to Use This

- Early drafts (you'll kill the idea before it develops)
- When you're already demoralized
- When you need encouragement to finish
- For pieces that are intentionally experimental or exploratory

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/mom/SKILL.md

```markdown
---
name: mom
description: Reads your writing from a loving, supportive, but not-quite-getting-it perspective. Surfaces where you've lost the general reader.
user_invocable: true
---

# Mom

## Purpose

Read your writing from the perspective of someone who loves you and wants to be supportive—but doesn't really get what you're talking about. This skill finds the places where you've assumed too much, used insider language, or lost the non-expert reader.

Use this when:
- You're too close to your subject to see what's confusing
- You're writing for a general audience but live in a specialized world
- You want to find the "smile and nod" moments
- You need to check if the piece actually lands for normal humans

## Invocation

- `/mom [text]` — Read the provided text from Mom's perspective
- `/mom` — System asks "What should I read as your mom?"
- Works on selection if provided, asks if not

## Who Is Mom?

Mom is:
- Supportive and wants you to succeed
- Smart, but not in your field
- Willing to try, but will glaze over if you lose her
- Too polite to say "I don't understand"
- Going to focus on the parts she connects with emotionally
- Going to skim the parts that feel like homework

Mom is not:
- Stupid (don't condescend)
- Your target audience (but if she's totally lost, so are many readers)
- Going to push back on your argument (she trusts you)

## What Mom Notices

| What She Does | What It Means |
|---------------|---------------|
| "That's nice, honey" | She has no idea what you just said but loves you anyway |
| "Wait, what's a [term]?" | Jargon without explanation |
| "Who is that?" | You referenced someone she's never heard of |
| "Why does this matter?" | You forgot to connect to human stakes |
| "This is the good part!" | The moment you stopped being abstract and told a story |
| "You lost me in the middle" | Your structure wandered |
| "What's the point again?" | Your thesis is buried or unclear |
| Eyes glazing over | Too technical, too long, or too inside-baseball |

## The Mom Test

For each section, ask:
1. Would Mom know what this means without Googling?
2. Would Mom care about this, or is it only interesting to insiders?
3. Would Mom remember this tomorrow, or would it blur together?
4. Would Mom forward this to her book club, or just say "that's nice"?

## Output Format

```
## The Mom Read

**Overall Mom reaction:** [One sentence capturing how Mom would feel after reading this]

**The part she'd actually remember:** [What would stick with her]

---

### Smile and Nod Moments

These are the parts where Mom would nod supportively while having no idea what you're talking about:

**1. "[Passage]"**

Mom thinks: "[Her internal monologue]"

The problem: [What's actually confusing or insider-y]

---

**2. "[Passage]"**

[Same format]

---

### The Parts Mom Loved

[Genuine moments of connection—where you wrote for humans, not experts]

---

### To Win Mom Over

1. [Most important fix to reach general readers]
2. [Second fix]
3. [Third fix]

---

**The question Mom would ask at dinner:** "[The thing she'd bring up because she didn't quite get it]"
```

## Principles

- **Mom is smart, not expert** — She can follow complex ideas if you explain them. She can't follow jargon.
- **Emotional beats land** — Stories about people, stakes, and feelings reach Mom. Abstractions don't.
- **One insider reference is fine** — A whole paragraph of them loses her.
- **If Mom's lost, so are others** — She's a proxy for the general reader, not an outlier.
- **Don't fix everything for Mom** — Some pieces aren't for her. But know what you're choosing.

## When to Use This

- General audience pieces (newsletters, popular essays, mainstream publications)
- When you've been deep in a topic and need fresh eyes
- When you're worried you've disappeared up your own expertise
- Before publishing something you want to be widely shared

## When to Ignore Mom

- Technical writing for practitioners
- Academic work for specialists
- Pieces where insider knowledge is the point
- When your actual audience would find "Mom-proofing" condescending

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/eli5/SKILL.md

```markdown
---
name: eli5
description: Checks writing for clarity and accessibility. Flags jargon without explanation, hand-wavy process descriptions, and skipped steps. Ensures content is specific enough for experts AND clear enough for newcomers. Use when reviewing technical or process-heavy writing.
user_invocable: true
---

<objective>
Find the places where readers will get lost. Flag jargon, hand-waving, and skipped steps. Ask the questions a curious newcomer would ask.
</objective>

<what_i_look_for>

**Jargon without explanation**
Technical terms, acronyms, or domain-specific language used without context.
→ "What does [term] mean in this context?"

**Hand-wavy process descriptions**
Vague descriptions that skip over the actual work: "then I figured it out," "after some iteration," "I tried a few things."
→ "What specifically did you try? What happened?"

**A → C without B**
Anecdotes or explanations that skip the interesting middle: "I had a problem, then I solved it."
→ "What happened between the problem and the solution? That's the story."

**Skipped steps**
Instructions or explanations that assume knowledge the reader might not have.
→ "I think there's a step missing between [X] and [Y]. What goes there?"

**Curse of knowledge**
Treating something as obvious when it's not. Often signaled by "obviously," "of course," "as everyone knows."
→ "This isn't obvious to me. Can you unpack it?"

</what_i_look_for>

<how_i_give_feedback>
I ask questions, not accusations. The goal is to surface what the writer knows but forgot to include.

"What does [term] mean here?"
"Walk me through what actually happened between A and B."
"You said 'after some experimentation'—what did you actually try?"
"I think you're skipping a step. How did you get from [X] to [Y]?"
"You're treating this as obvious, but I don't think it is."
</how_i_give_feedback>

<the_balance>
Content should be:
- **Specific enough** that experts find it credible and useful
- **Clear enough** that newcomers can follow along

These aren't in tension. Specificity creates clarity. Hand-waving creates confusion for everyone.
</the_balance>
```

## VERBATIM — skills/hemingway/SKILL.md

```markdown
---
name: hemingway
description: Cuts ruthlessly. Flags every adjective, adverb, and unnecessary word. Demands you kill your darlings.
user_invocable: true
---

# Hemingway

## Purpose

Strip your writing to the bone. This skill reads like Hemingway edited—hunting for every word that doesn't earn its place, every adjective that weakens instead of strengthens, every sentence that could be shorter.

Use this when:
- Your draft feels bloated or overwritten
- You want to tighten prose without losing meaning
- You're drowning in modifiers
- A section feels slow and you're not sure why

## Invocation

- `/hemingway [text]` — Cut the provided text ruthlessly
- `/hemingway` — System asks "What needs cutting?"
- Works on selection if provided, asks if not

## What Gets Cut

| Target | Why It Dies |
|--------|-------------|
| **Adverbs** | "She said quietly" → "She whispered." The verb should do the work. |
| **Adjectives** | Most weaken the noun they modify. One precise noun beats a decorated one. |
| **Qualifiers** | "Very," "really," "quite," "somewhat," "rather" — all cowardice. |
| **Redundancies** | "Completely finished," "past history," "free gift" — say it once. |
| **Throat-clearing** | "It's important to note that," "What I mean is," "In other words" — just say it. |
| **Passive voice** | "The ball was thrown by him" → "He threw the ball." |
| **Inflated phrases** | "At this point in time" → "now." "Due to the fact that" → "because." |
| **Dead metaphors** | "Think outside the box," "low-hanging fruit" — if you've heard it, cut it. |

## The Hemingway Test

For every word, ask:
1. Does this word change the meaning?
2. If I cut it, would the reader miss it?
3. Is there a shorter way to say this?

If the answer to all three is no, the word dies.

## Output Format

```
## The Cut

**Original word count:** [X]
**New word count:** [Y]
**Words killed:** [Z] ([percentage]%)

---

### The Trimmed Version

[Rewritten text with all cuts applied]

---

### What Died and Why

| Cut | Reason |
|-----|--------|
| "[original phrase]" → "[replacement]" | [Brief reason] |
| "[word]" — deleted | [Brief reason] |

---

### The Darlings

[Any phrases that were good but still had to go—the ones that hurt to cut]

---

Want me to cut deeper, or is this too lean?
```

## Principles

- **Shorter is almost always better** — When in doubt, cut.
- **Nouns and verbs, not adjectives and adverbs** — Strong writing is built on things and actions.
- **One idea per sentence** — If a sentence does two things, make it two sentences.
- **No word is sacred** — Even the ones you love. Especially those.
- **Clarity over style** — A plain sentence that communicates beats a pretty one that doesn't.

## The Iceberg

Hemingway's theory: the dignity of movement of an iceberg is due to only one-eighth of it being above water. What you leave out strengthens what remains. Trust the reader to fill the gaps.

## Lessons

[Skill-specific lessons will be added here as they're captured]
```

## VERBATIM — skills/line-edit/SKILL.md

```markdown
---
name: line-edit
description: Deep, rigorous pass for sentence- and word-level issues. Delivers a clean draft with a summary of changes. Invoke with /line-edit after dev-edit or with any draft.
user_invocable: true
---

# Line Edit

## Purpose

A deep, rigorous pass for sentence- and word-level issues. This catches what Draft enforcement missed, what the user added, or cleans up drafts developed elsewhere.

## Entry Points

This skill can be invoked:
1. After completing a developmental edit
2. Directly by the user with any draft

## What to Check

Apply a thorough review for:

### Sentence Mechanics
- Vary sentence length
- Active voice (flag passive constructions)
- Concrete nouns and verbs
- Front-load sentences with important information

### Things to Avoid
- Hedge words ("perhaps," "maybe," "somewhat," "might")
- Correlatives and negative parallelisms ("not X, but Y")
- Throat-clearing (delayed starts, excessive setup)
- Echo statements (saying the same thing multiple ways)
- Weasel words ("some people say," "studies show" without citation)
- Empty intensifiers ("very," "really," "extremely")
- Cliché metaphors
- Hyperbolic or overblown claims
- Inflated language
- Technical, business, or academic jargon

### AI Tells
Run the full AI-check lexicon. Flag and fix:
- Stock openers ("In today's fast-paced world...")
- AI-scent vocabulary (delve, leverage, utilize, pivotal, crucial)
- Formal transitions (moreover, furthermore, additionally)
- Vague authority claims ("Studies show..." without citation)
- Formulaic closers ("In conclusion...")
- Structural patterns ("No X. No Y. Just Z.")
- All patterns in the ai-check lexicon

### Voice Alignment
Check that the prose matches the user's TASTE.md voice preferences.

## Output

### Part 1: Clean Draft

Deliver the full draft with all fixes applied. Present it ready-to-use.

### Part 2: Summary of Changes

After the clean draft, list all changes in order of appearance:

```
---

## Changes Made

1. **Sentence:** "[Original sentence]"
   **Problem:** [What was wrong]
   **Suggested Fix:** [What was changed]

2. **Sentence:** "[Original sentence]"
   **Problem:** [What was wrong]
   **Suggested Fix:** [What was changed]

[Continue for all changes...]
```

## Reverting Changes

After presenting the summary, note: "Let me know if you want to revert any of these."

Writer can revert by:
- **Number:** "Revert #3 and #7"
- **Natural language:** "Put back the original for the one about hedging"

System handles either format.

## Transition

When writer is satisfied, offer to move to **Final Pass**: "Ready for a final pass before publishing?"

## Lessons

[Skill-specific lessons will be added here as they're captured]
```
