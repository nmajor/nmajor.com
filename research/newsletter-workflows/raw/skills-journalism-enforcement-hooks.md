# RAW: jamditis/claude-skills-journalism (`journalism-core` plugin) -- the enforcement hooks + the content-pipeline project-memory template + project-retrospective skill + a plan doc on skill overlap

- Repo: https://github.com/jamditis/claude-skills-journalism
- Date accessed: 2026-08-18
- What it is: A large, actively maintained public Claude Code plugin marketplace built for newsrooms. `journalism-core` ships editorial-workflow, newsletter-publishing, fact-check-workflow, source-verification, newsroom-style, story-pitch and ai-writing-detox skills; the repo also ships a set of *session hooks* that enforce checks (ai-slop-detector, pre-publish-checklist, source-diversity-check, verification-reminder) rather than relying on the model remembering.

VERBATIM below, complete files, unedited.


---

## hooks/ai-slop-detector.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/ai-slop-detector.md

---
name: ai-slop-detector
description: Warn about AI-generated writing patterns that erode reader trust
event: PostToolUse
tools: [Write, Edit]
---

# AI slop detector hook

After writing or editing content, scan for phrases and patterns that signal AI-generated text and flag them.

## When this hook fires

- After `Write` tool creates or overwrites a file
- After `Edit` tool modifies a file
- Only for text files containing prose (.md, .txt, .html)

## What to detect

### Banned words (high confidence AI markers)

| Word | Severity |
|------|----------|
| delve | High |
| realm | High |
| tapestry | High |
| landscape (metaphorical) | Medium |
| leverage (as verb) | Medium |
| utilize | Medium |
| robust | Medium |
| seamless | Medium |
| comprehensive | Low |
| cutting-edge | Low |
| holistic | Low |
| synergy | High |
| paradigm | Medium |

### Banned phrases

**Throat-clearing:**
- "It's important to note that..."
- "In today's [X] landscape..."
- "Let's dive/delve into..."
- "Without further ado..."

**Empty hedges:**
- "At the end of the day..."
- "When it comes to..."
- "In terms of..."

**AI enthusiasm:**
- "This is a game-changer"
- "...and that's a good thing!"
- "Here's the thing:"

### Banned structures

**Sentence starters:**
- "So," (when not answering a question)
- "Now," (when not about time)
- "Basically,"
- "Essentially,"

### Patterns

- Lists of near-synonyms: "comprehensive, sophisticated, and robust"
- The "Not just X—it's Y" construction
- "Fundamentally transforms" or "fundamental shift"
- Title Case In Headlines When Sentence Case Expected

## Output format

If patterns found, add a note:

```
⚠️ AI writing patterns detected:
- Line [X]: "delve" → consider: examine, explore, look at
- Line [X]: "In today's landscape" → delete throat-clearing
- Line [X]: Title Case heading → use sentence case

These patterns can erode reader trust. Consider revising.
```

## Non-blocking

This hook provides warnings only. It does not prevent the write/edit from completing. The purpose is awareness—the writer decides whether to revise.

## Skip conditions

Skip this check for:
- Code files
- Configuration files
- Data files (JSON, YAML, CSV)
- Files in node_modules, .git, venv, etc.
- Content quoted from external sources (check for quotation marks)

## Severity levels

- **High:** Almost certainly AI-generated; strong signal
- **Medium:** Commonly AI-generated but has legitimate uses
- **Low:** Often overused by AI but may be appropriate in context

Only flag high and medium severity items. Low severity items can be mentioned if there are multiple.

## Examples

**Flagged:**
```
In today's rapidly evolving digital landscape, it's crucial to
delve into how these robust tools can help journalists leverage
cutting-edge technology.
```
→ Multiple issues: "In today's...landscape," "delve," "robust," "leverage," "cutting-edge"

**Flagged:**
```
## Getting Started With Your Project
```
→ Title Case heading; should be "Getting started with your project"

**Clean:**
```
AI tools do three things well: drafting, research, and analysis.
Here's when to use each.
```


---

## hooks/pre-publish-checklist.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/pre-publish-checklist.md

---
name: pre-publish-checklist
description: Remind about verification, legal review, and publication checks before completing journalism tasks
event: Stop
---

# Pre-publish checklist hook

When completing a task that appears to involve journalism content ready for publication, display a reminder checklist.

## When this hook fires

- At the `Stop` event (when Claude completes a task)
- Only when the task involved creating or editing journalism content
- Content indicators: articles, stories, press releases, fact-checks, news briefs

## Detection criteria

Trigger this checklist when the session included:
- Writing/editing .md or .html files with journalism content
- References to "publish," "post," "release," "file" in task context
- Content that looks like news articles (ledes, quotes, attribution)
- Fact-check articles or verification work

## Checklist to display

```
📋 Pre-publish checklist

Before publication, verify:

### Accuracy
- [ ] All facts independently verified
- [ ] Statistics sourced and double-checked
- [ ] Quotes accurate (check against recording/transcript)
- [ ] Names and titles correct
- [ ] Dates and numbers accurate

### Fairness
- [ ] All relevant parties contacted for comment
- [ ] Response deadline was reasonable
- [ ] Opposing viewpoints fairly represented
- [ ] No cherry-picked quotes or data

### Legal
- [ ] No defamation risk (statements supported by evidence)
- [ ] No privacy violations
- [ ] Copyright/fair use reviewed for images
- [ ] Confidential sources properly protected

### Style
- [ ] AP Style applied
- [ ] No AI-generated patterns ("delve," "landscape," etc.)
- [ ] Headline is accurate (not clickbait)
- [ ] Appropriate length for format

### Metadata
- [ ] SEO elements filled
- [ ] Categories/tags applied
- [ ] Author byline correct
- [ ] Publication date set

### Final
- [ ] Editor has reviewed
- [ ] Copy edit complete
- [ ] One more read-through for typos

This is a reminder, not a blocker. Use your judgment.
```

## Output format

Display the checklist as a callout at the end of the response:

```
---
📋 **Pre-publish reminder**

[Checklist above]

Ready to publish? Make sure you've checked these items.
---
```

## Skip conditions

Skip this checklist when:
- Task was clearly not journalism (code, config, data processing)
- Task was research/exploration only, not content creation
- Content is clearly internal (notes, plans, outlines)
- User explicitly said this is a draft/not for publication

## Non-blocking

This hook is purely informational. It reminds the user but does not prevent task completion or require confirmation.

## Purpose

Journalists working with AI assistance may move faster than traditional workflows. This hook serves as a "pause and verify" moment before publication, encouraging the verification habits that maintain credibility.

The goal is not to slow down or annoy—it's to build in a systematic reminder of professional standards.


---

## hooks/source-diversity-check.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/source-diversity-check.md

---
name: source-diversity-check
description: Note when sources in an article may lack diversity of perspective
event: PostToolUse
tools: [Write, Edit]
---

# Source diversity check hook

After writing content with multiple sources, check whether the sourcing reflects diverse perspectives.

## When this hook fires

- After `Write` tool creates content with quoted sources
- After `Edit` tool adds sources to existing content
- When content includes multiple named sources

## What to check

### Single-perspective sourcing

```
⚠️ All sources appear to share same viewpoint
   Consider: Are opposing/different perspectives represented?
```

### Authority imbalance

```
⚠️ Sources are all officials/institutions
   Consider: Are affected community members included?
```

### Gender balance

```
⚠️ All quoted sources appear to be same gender
   Consider: Does the topic warrant diverse gender perspectives?
```

### Expertise diversity

```
⚠️ All experts from same institution/background
   Consider: Would different expertise add value?
```

## Source diversity checklist

```
📋 Source diversity considerations:

Perspective:
- [ ] Multiple viewpoints on contentious issues
- [ ] Critics and supporters both represented
- [ ] Affected parties have voice, not just officials

Demographics:
- [ ] Gender diversity in expert sources
- [ ] Geographic diversity where relevant
- [ ] Age diversity where relevant

Authority levels:
- [ ] Official sources (government, institutions)
- [ ] Expert sources (academics, specialists)
- [ ] Community sources (affected individuals)
- [ ] Advocacy sources (organizations, activists)

Context:
- [ ] Historical context sources
- [ ] Data/research sources
- [ ] On-the-ground observers
```

## Output format

```
⚠️ Source diversity note:

This piece includes [X] quoted sources. Consider:

- All sources appear to be [observation]
- Missing perspective: [suggestion]

Diverse sourcing strengthens journalism and serves readers better.
```

## When diversity matters most

| Story type | Key diversity considerations |
|------------|------------------------------|
| Policy stories | Affected communities, not just officials |
| Expert roundups | Different institutions, methodologies |
| Conflict coverage | All parties to the dispute |
| Community stories | Range of community members |
| Business stories | Workers, not just executives |

## When it matters less

- Breaking news (get what you can, expand later)
- Single-source profiles (by design)
- Direct quotes from documents/statements
- Historical pieces with limited living sources

## Important caveats

This hook raises awareness but:

- **Not a quota system** - Quality matters more than counting
- **Context matters** - Some stories legitimately focus on one perspective
- **Not about false balance** - Don't platform bad-faith actors for "diversity"
- **Time pressure is real** - Do what you can, note limitations

## Non-blocking

This hook prompts reflection, not requirements. Journalists make editorial decisions about sourcing based on the story's needs.

## Skip conditions

Skip for:
- Single-source stories (profiles, interviews)
- Breaking news with limited sourcing time
- Opinion/commentary pieces
- Aggregation of other reporting


---

## hooks/source-attribution-check.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/source-attribution-check.md

---
name: source-attribution-check
description: Flag unattributed quotes, claims, and statistics in journalism content
event: PostToolUse
tools: [Write, Edit]
---

# Source attribution check hook

After writing or editing journalism content, scan for unattributed information that requires sources.

## When this hook fires

- After `Write` tool creates or overwrites a file
- After `Edit` tool modifies a file
- Only for text files containing journalism content (.md, .txt, .html)

## What to detect

### Unattributed quotes

Look for quotation marks without attribution:

```
❌ "This policy will help thousands of families."
✅ "This policy will help thousands of families," Smith said.
```

### Unattributed statistics

Numbers and percentages without sources:

```
❌ Crime dropped 15% last year.
✅ Crime dropped 15% last year, according to FBI data.

❌ Most Americans support the policy.
✅ 67% of Americans support the policy, according to a Gallup poll.
```

### Unattributed claims

Factual assertions that need sourcing:

```
❌ The company has been losing money for years.
✅ The company has lost money for five consecutive quarters, SEC filings show.
```

### Patterns to flag

- Quotes without "said," "according to," or similar attribution
- Statistics without source citation
- "Studies show..." without naming the study
- "Experts say..." without naming experts
- "Critics argue..." without naming critics
- Definitive claims about what someone thinks/feels without quotes

## Output format

If issues found, add a note:

```
⚠️ Attribution check:
- Line [X]: Quote needs attribution - who said this?
- Line [X]: Statistic "15%" needs source
- Line [X]: "Experts say" - which experts?

Unattributed claims can damage credibility. Add sources.
```

## Non-blocking

This hook provides warnings only. The journalist decides whether attribution is needed in context (some facts are common knowledge).

## Skip conditions

Skip this check for:
- Opinion/editorial pieces (first-person commentary)
- Code files
- Configuration files
- Content clearly marked as analysis/opinion

## Context awareness

Some claims don't need attribution:
- Commonly known facts ("The sun rises in the east")
- Observable facts ("The building is on Main Street")
- Direct observations by the reporter ("The crowd cheered")

Focus on claims that readers would reasonably ask "says who?"


---

## hooks/copywriting-preflight.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/copywriting-preflight.md

---
name: copywriting-preflight
event: UserPromptSubmit
description: Detects writing and revision requests and prompts an intent interview before drafting
match_patterns:
  # Noun forms that rarely appear in code or admin prompts (safe to match bare)
  - "op-ed"
  - "press release"
  - "substack post"
  - "talking points"
  # Drafting: a verb paired with a writing noun, so code prompts do not match
  - "write a blog post"
  - "draft a blog post"
  - "write a newsletter"
  - "draft a newsletter"
  - "write an article"
  - "draft an article"
  - "write an essay"
  - "draft an essay"
  - "write a memo"
  - "draft a memo"
  - "write a pitch"
  - "draft a pitch"
  - "write a proposal"
  - "draft a proposal"
  - "write a one-pager"
  - "draft a one-pager"
  - "draft an announcement"
  - "write copy"
  - "write the copy"
  - "draft the copy"
  # Revision: a verb paired with a writing noun
  - "rewrite the post"
  - "rewrite the article"
  - "rewrite the draft"
  - "rewrite the copy"
  - "revise the draft"
  - "revise the article"
  - "revise the piece"
  - "polish the draft"
  - "polish the copy"
  - "punch up the copy"
  - "tighten the copy"
  - "tighten the draft"
  - "edit the draft"
  - "refine the draft"
  - "strengthen the piece"
---

# Copywriting preflight

When the user asks for a new piece of writing or a revision, interview them about intent **before** drafting a single word. Jumping straight to a draft produces generic copy that misses the audience, message, and tone the user actually had in mind — and then both of you spend more time fixing the wrong draft than a 30-second interview would have cost.

This hook does not write anything. It pauses to gather intent, then gets out of the way.

## Detection criteria

The signal is the verb-plus-writing-noun pairing, not message length. A terse command that matches a writing pattern — "write copy", "op-ed", "press release" — is still a real request, and terse is often exactly when an intent interview is most useful, so do not skip it for being short. Treat the message as a writing task when it contains:

- **New writing:** a drafting verb ("write", "draft", "create") next to a prose form (post, blog post, article, essay, memo, pitch, newsletter, press release, op-ed, announcement, proposal, one-pager, copy, talking points).
- **Revision:** a revision verb ("revise", "rewrite", "rework", "polish", "tighten", "punch up", "edit", "refine", "strengthen") **next to** a writing-context word ("draft", "post", "article", "piece", "copy", "newsletter", "write-up"). Require both, so "tighten that" about a code hook does not trip it.

Check revision first — it is the more specific case, since it implies a piece already exists.

The `match_patterns` above pair a verb with a writing noun (`write a newsletter`, `rewrite the post`) and keep bare nouns only for forms that rarely show up in code or admin prompts (`op-ed`, `press release`). That is why "write a SQL query", "build a newsletter signup form", and "rewrite this regex" never trip the interview. "Script" is deliberately left out: in a code repo "write a script" almost always means code, not a screenplay. If a borderline prompt still matches, apply the verb-plus-writing-noun test before interviewing and skip silently when the request turns out to be about code.

## Response (new writing)

Before drafting, use `AskUserQuestion` to map out:

1. **Audience** — who is this for?
2. **Key message** — what is the one thing they should take away (the thesis)?
3. **Tone** — formal, conversational, urgent, reflective?
4. **Emphasis** — what should be foregrounded, and what should be played down?
5. **Voice** — first person, organizational voice, journalistic remove?
6. **Boundaries** — specific points to include, and anything to avoid?

Then draft against the answers, not against a guess.

## Response (revision)

Before rewriting, use `AskUserQuestion` to clarify:

1. **What is working and what is not** in the current draft?
2. **Should the framing or angle change**, or only the execution?
3. **Any shifts in emphasis or tone** from the current version?

Then revise to the brief, rather than re-drafting from scratch and discarding what already worked.

## Loading a style guide

If the project defines a writing style guide — a `STYLE_GUIDE.md`, a voice-and-tone doc, or whatever path the project configures — load it into context before drafting so the piece matches the established voice. If none exists, ask the user whether one should be followed.

## Finalizing

Before calling a draft done, read it back against the intent answers and the style guide: does it hit the audience, carry the key message, and stay in the right voice? If the project has an editorial or preflight check, run it on the draft. Fix what drifted before handing the draft over.

## Non-blocking

This hook prompts an interview but does not block any tool. The user can decline the questions and ask you to draft directly; the goal is a deliberate pause, not a gate.


---

## hooks/verification-reminder.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/hooks/verification-reminder.md

---
name: verification-reminder
description: Prompt to verify facts before including them in journalism content
event: PostToolUse
tools: [Write, Edit]
---

# Verification reminder hook

After writing content that includes factual claims, remind about verification before publication.

## When this hook fires

- After `Write` tool creates journalism content
- After `Edit` tool adds new factual claims
- When content includes verifiable assertions

## What to flag for verification

### Names and titles

```
⚠️ Verify: "Mayor John Smith" - Is spelling correct? Is title current?
```

### Dates and times

```
⚠️ Verify: "Tuesday, January 15" - Does the day match the date?
```

### Numbers and statistics

```
⚠️ Verify: "$5 million budget" - Source? Recent figure?
```

### Quotes

```
⚠️ Verify: Direct quote - Matches recording/transcript?
```

### Historical claims

```
⚠️ Verify: "Founded in 1985" - Primary source confirms?
```

### Contact information

```
⚠️ Verify: Phone number, email, address - Still current?
```

## Verification checklist

When flagging content, suggest verification steps:

```
📋 Verification checklist for this content:

Names/Titles:
- [ ] Spelling confirmed with source or official records
- [ ] Title is current (not former)

Numbers:
- [ ] Source document reviewed
- [ ] Calculations double-checked
- [ ] Context appropriate (per capita, adjusted, etc.)

Quotes:
- [ ] Matches recording or transcript
- [ ] Context preserved
- [ ] Speaker confirmed accuracy (if read-back promised)

Dates:
- [ ] Day of week matches calendar date
- [ ] Timezone considered if relevant

Claims:
- [ ] Primary source consulted
- [ ] Corroborating source found
- [ ] Subject given chance to respond
```

## Output format

```
⚠️ Verification reminder:

This content includes claims that should be verified:
- [Claim 1]: [suggested verification]
- [Claim 2]: [suggested verification]

Have you checked these against primary sources?
```

## Non-blocking

This is a reminder, not a gate. Experienced journalists may have already verified; this catches items that might be missed under deadline pressure.

## Skip conditions

Skip for:
- Clearly labeled drafts/notes
- Opinion pieces (though facts within opinions still need verification)
- Content quoting other published sources (cite the source instead)


---

## project-templates-toolkit/skills/project-memory/templates/content-pipeline.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/project-templates-toolkit/skills/project-memory/templates/content-pipeline.md

# CLAUDE.md - [Project name]

> Template for: Content pipelines (publishing workflows, content automation)

## Project overview

[One sentence: What content this pipeline processes and where it publishes]

**Content types:** [Articles, newsletters, social posts, etc.]
**Sources:** [CMS, Google Docs, RSS, etc.]
**Destinations:** [Website, email, social platforms]
**Frequency:** [Daily, weekly, on-demand]

## Tech stack

**Language:** [Python, Node.js, etc.]
**Automation:** [GitHub Actions, cron, Zapier, etc.]
**Storage:** [Database, cloud storage, etc.]
**APIs:** [CMS, social platforms, email service]

## Commands

```bash
# Run full pipeline
[command to process and publish content]

# Preview without publishing
[command for dry run]

# Process single item
[command to process one piece of content]

# Check pipeline status
[command to view queue/status]
```

## Content flow

```
[Source] --> [Ingest] --> [Transform] --> [Enrich] --> [Publish]
                              │
                              └--> [Review Queue] (if needed)
```

## Content schema

**Input format:**
```yaml
title: ""
body: ""
author: ""
date: ""
tags: []
status: draft|review|approved
```

**Output transformations:**
- [HTML formatting]
- [Image optimization]
- [SEO metadata generation]

## File structure

```
project-root/
├── src/
│   ├── ingest/         # Content ingestion
│   ├── transform/      # Format conversion
│   ├── enrich/         # AI enhancement, metadata
│   ├── publish/        # Platform publishers
│   └── utils/          # Shared utilities
├── templates/          # Output templates
├── config/             # Platform configs
└── queue/              # Processing queue
```

## Platform integrations

**[Platform A]:**
- API credentials location
- Rate limits
- Publishing rules

**[Platform B]:**
- Authentication method
- Content requirements
- Scheduling capabilities

## AI enrichment

- [Summarization: model and prompts]
- [Tagging: automated categorization]
- [SEO: title/description generation]
- [Human review: when required]

## Quality gates

- [ ] Spell check / grammar
- [ ] Link validation
- [ ] Image alt text
- [ ] SEO requirements
- [ ] Editorial approval (if required)

## Error handling

- [Failed publish retry strategy]
- [Notification on failure]
- [Manual intervention process]

## Things to avoid

- Don't publish without preview
- Avoid duplicate posts to same platform
- Don't skip quality gates for "urgent" content

---

*Update when adding new content types or platforms.*


---

## project-templates-toolkit/skills/project-retrospective/SKILL.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/project-templates-toolkit/skills/project-retrospective/SKILL.md

---
name: project-retrospective
description: Generate LESSONS.md retrospective files that capture institutional knowledge, especially failures. Use when closing out journalism projects, investigations, events, or publications. Includes templates for research projects, event post-mortems, editorial tools, and publications.
---

# Project retrospective writer

Create LESSONS.md files that capture institutional knowledge, especially failures. Think like a journalist writing about your own project — be specific, be honest, name the actual mistakes.

## Frame the retrospective: blame-aware, not pure-blameless

The 2024–2026 consensus in incident-analysis writing (PagerDuty, J. Paul Reed, Lorin Hochstein) is that pure blamelessness is neurobiologically unrealistic — humans default to blame. Healthier framing: acknowledge the blame bias exists and counter it deliberately. Source: https://postmortems.pagerduty.com/culture/blameless/

Cognitive biases to counter explicitly:
- **Fundamental attribution error** — blaming individuals for failures the system permitted
- **Confirmation bias** — looking for evidence that confirms a pre-formed narrative
- **Hindsight bias** — judging past decisions by knowledge that wasn't available at the time
- **Negativity bias** — over-weighting what went wrong vs. what worked

The voice rule isn't "no blame" — it's "name the system that permitted the human action, not just the action."

## Drop the single-root-cause framing

Allspaw's canonical critique (still the dominant view in 2024–2026) calls Five Whys / single-root-cause analysis "seductively satisfying and compellingly simple — but false." It locks analysts into a linear causal chain that terminates in individual blame. Source: https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/

Use "how" narratives instead, gathering on four prompts:
- **Cues** — what signals were available, who saw them when?
- **Interpretation** — how did people make sense of those signals?
- **Goals** — what were people trying to accomplish?
- **Taking action** — what did they do, and what did they expect to happen?

The retrospective's job is to surface contributing factors, not declare a root cause.

## When to run a retrospective

Pre-define triggers before incidents happen, not after. Google SRE specifies criteria: user-visible downtime past a threshold, any data loss, on-call rollbacks, monitoring failures requiring manual discovery, stakeholder request. Source: https://sre.google/sre-book/postmortem-culture/

Translated to journalism:

| Trigger | Examples |
|---|---|
| Live-event failure | Live-blog downtime during election night, breaking-news embed breakage, paywall regression mid-investigation |
| Editorial process failure | Missed correction window, source-management breach, fact-check process bypass |
| Tool failure affecting subscribers | CMS migration regression, paywall logic affecting >X% of readers |
| Stakeholder request | Editor / publisher / source explicitly asking "what happened?" |

Pre-defined triggers prevent retrospective theater on routine work and ensure they happen on real failures.

## Timing: aim for under one week

Google's good-vs-bad postmortem comparison cites a "four months later" example as a quality failure because contributors' memories had decayed. Source: https://sre.google/workbook/postmortem-culture/

Recommended cadence:

| Project type | Target window |
|---|---|
| Live-event retro (election night, breaking news) | Same-day debrief, written within 48h |
| Tool / CMS incident | Within one week |
| Investigation or publication launch | Within one month of project close |
| Annual review of ongoing initiative | Once per year, scoped to discrete decision points |

The empirical floor is "fresh in contributors' minds." Past one week and the narrative gets reconstructed rather than remembered.

## For event-type retros, use AAR structure

The US Army's After Action Review (FM 7-0 Appendix K) was designed for facilitated post-event debriefs and fits live-news realities better than a project-close template. Source: https://www.first.army.mil/Portals/102/FM%207-0%20Appendix%20K.pdf

Four prompts:
1. **What was supposed to happen?**
2. **What did happen?**
3. **What was right or wrong about the difference?**
4. **How do we perform to standard next time?**

Run AAR immediately after the event with all participants — election night newsroom team, live-blog runners, breaking-news desk. Use `event.md` template for this; project-close templates are wrong for live-event retros.

## The critical section: "The real problem"

This is the most valuable part of any retrospective. It answers:

> "What did we THINK we were building vs. what was ACTUALLY needed?"

**Strong example:**
> We built an admin dashboard for editors when they actually needed a Slack bot. They live in Slack — forcing them to open a web app was friction they'd never accept. The dashboard has 2 monthly active users; the Slack bot prototype we built in a day has 47.

**Weak example:**
> We learned the importance of user research.

## Template structure

```markdown
# LESSONS.md

## Project
- **Name:** [Project name]
- **Dates:** [Start - End]
- **Status:** [Completed / Abandoned / Ongoing]
- **Author:** [Your name]
- **Retrospective written:** [Date — should be within timing window above]

## Summary
[One paragraph: what it did, what impact it had, why it matters]

## What worked

### Technical wins
- [Specific decision and WHY it worked]
- [Tool/pattern that saved time]

### Process wins
- [Methodology that helped]
- [Communication pattern that worked]

## What didn't work

For each item below, separate the system layer from the people layer.
"What did the system permit or require?" comes before "What did the
people inside that system do?"

### Critical failures
- **System:** [What the architecture / process / tooling permitted]
- **People:** [What humans did inside that constraint]
- **Cost:** [Quantified impact: hours, subscribers affected, money]

### Technical debt
- [Shortcut that hurt later — and why it was the rational choice at the time]
- [Complexity that wasn't needed]

### External factors
- [Things outside your control that impacted the project]

## The real problem

What we thought: [Initial assumption]
What was actually needed: [Reality]
The gap cost us: [Time / effort / money wasted]

## Action items

Each item must have an owner, a deadline, a tracker URL, and a priority.
"Postmortems without subsequent action are indistinguishable from no postmortem."
— Google SRE

| # | Action | Owner | Deadline | Tracker | Priority |
|---|--------|-------|----------|---------|----------|
| 1 | [Specific change] | [Name] | [Date] | [Issue URL] | P0 / P1 / P2 |
| 2 | [Specific change] | [Name] | [Date] | [Issue URL] | P0 / P1 / P2 |

Failure modes to avoid:
- Ambiguous wording ("make automation better")
- Equal priority across all items (defeats the purpose of priority)
- No tracker bug or issue URL (action items vanish)
- Fixes targeting human behavior instead of system redesign ("be more careful")

Add a 30/60/90-day check-in note: who reviews progress on these, and when.

## Reusable artifacts

| Component | Why it's valuable |
|-----------|-------------------|
| [Name] | [Specific reuse potential] |
| [Name] | [Why someone else should use this] |

## Questions for next time
- [Unanswered questions worth investigating]
- [Things you'd research before starting]
```

## Voice guidelines

- Honest, specific, slightly self-deprecating
- Like explaining to a friend why the project took twice as long
- Name what the system permitted, then what the people did inside it
- Specific mistakes, not vague "challenges"
- Active voice; avoid "mistakes were made" passives that hide who decided what

## Sourcing-decision retrospectives (journalism-native)

The canonical SRE / AAR / Allspaw frameworks don't cover the editorial-judgment retrospective an investigation needs. The `research-project.md` template adds a "Source decisions revisited" section:

- Which sources we trusted, and why?
- Which we declined, and why?
- What was the redaction logic? Did it hold up?
- What would we reconsider if we ran the investigation again?
- What patterns should we carry forward to the next investigation?

Newsroom engineering blogs (NYT Open, ProPublica News Apps, WaPo Engineering) publish project descriptions but rarely retrospective methodologies, so this is treated as a journalism-native extension to the system rather than borrowed from precedent.

## What to include vs exclude

| Include | Exclude |
|---------|---------|
| Specific failures with quantified context | Vague "learnings" |
| Actual time / cost of mistakes | Blame for individuals |
| What the system permitted (then what humans did) | "Mistakes were made" passives |
| Tools that helped or hurt, by name | Generic best practices |
| Decisions you'd reverse — and why now, not then | Obvious statements |
| Surprising discoveries | Information already in other docs |

## The specificity test

For each item in "What didn't work," ask:
- Can I name the specific decision?
- Can I quantify the impact?
- Did I separate what the system permitted from what the people did?
- Would this help someone avoid the same mistake?

If no to any → be more specific.

## Red flags in your writing

If you find yourself writing these, stop and be more specific:
- "Communication is key"
- "We learned the importance of..."
- "Going forward, we should..."
- "Challenges included..."
- "There were some issues with..."
- "Mistakes were made" (who made them? in what system?)

These are placeholders for real insights. Replace them.

## Examples of good vs bad entries

**Bad — too vague:**
> - Communication could have been better
> - We underestimated the complexity
> - Testing was insufficient

**Good — specific and actionable:**
> - The schema validation step was disabled in CI for the data-import script (system) and the freelance reporter who imported new entries didn't know it had been disabled (people). Cost: 3 hours debugging a typo that caused silent failures across 12 published stories.
> - We built a custom date picker when the browser native input would have worked. Tracker: ENG-1247. Owner: K. Park. 2 days wasted.

## Journalism-specific templates

Templates are in the `templates/` directory:

| Template | Use for |
|----------|---------|
| `research-project.md` | Investigations, data journalism projects (includes sourcing-decision retro) |
| `event.md` | Conferences, workshops, campaigns (uses AAR structure) |
| `publication.md` | Newsletters, podcasts, ongoing content |
| `editorial-tool.md` | Newsroom software, AI tools |

### Template selection

```
What kind of project?
├── Investigation/analysis → research-project.md
├── Conference/workshop/election night → event.md (use AAR)
├── Newsletter/podcast → publication.md
└── Newsroom tool → editorial-tool.md
```

## Last currency sweep

2026-05-09. Sources verified: kitchensoap.com (Allspaw "Infinite Hows"), postmortems.pagerduty.com, sre.google/sre-book and /workbook, first.army.mil FM 7-0 Appendix K, adaptivecapacitylabs.com.

---

*The best retrospectives are written by people who got burned and want to save others from the same fate.*


---

## plans/2026-07-13-newsletter-composer-overlap-decision.md

Source: https://raw.githubusercontent.com/jamditis/claude-skills-journalism/master/plans/2026-07-13-newsletter-composer-overlap-decision.md

# Newsletter-composer overlap decision (tier B, issue #115)

Resolves the pre-publish gate the tier B checklist puts on `newsletter-composer`:
"check overlap with the already-published `newsletter-publishing` skill
(journalism-core) first; fold or differentiate, do not duplicate."

## What the published skill already owns

`journalism-core/skills/newsletter-publishing` is a channel-lifecycle skill. Its
"when to activate" list is the whole operation around a newsletter, not the
writing of any one issue:

- strategy and positioning (the strategy-document framework),
- subscriber list building and segmentation,
- email template design,
- engagement-metric analysis,
- editorial-calendar planning,
- platform migration,
- deliverability and open-rate work.

It does carry an issue-structure template (opening hook, main story, and so on),
so there is real surface for a second newsletter skill to collide with.

## What `newsletter-composer` is for

The source name and its a4000-sandbox origin point at the other half of the job:
turning source material (reporting notes, links, a transcript, a set of stories)
into the drafted copy of a single issue. That is the compose step, and it sits
downstream of strategy and upstream of send. The published skill plans and
measures the channel; the composer writes the issue that goes through it.

## Decision: differentiate, do not fold

Fold would lose a genuinely separate activation moment. A writer reaching for
"help me draft this week's issue" is not doing strategy, list management, or
metrics, and should not have to load all of that to get drafting help. Keep two
skills, with a hard scope boundary so they compose instead of overlapping:

- `newsletter-composer` activates only at "draft or revise the content of an
  issue." It owns section drafting, subject-line and preview-text options, story
  ordering, and cuts for length.
- It does not re-define strategy, list, deliverability, or metrics guidance. Any
  prompt in that territory hands off to `newsletter-publishing`.
- It reuses the published skill's issue-structure template by reference rather
  than restating it, so the two cannot drift apart.

Each skill's `SKILL.md` should carry a one-line cross-reference to the other so
the handoff is visible at load time.

## Still gating the actual publish (not resolved here)

This decision clears the duplicate-check gate only. Before `newsletter-composer`
ships it still needs:

- de-branding and de-personalization from the a4000 source (strip any
  organization names and machine-specific paths, the same scrub every tier B
  item gets),
- the standard SKILL.md description tuned for trigger accuracy,
- the catalog-manifest updates a new plugin requires (README and docs/index.html
  at minimum).

Recorded from the tier B publishing pass. The video quartet stays blocked on the
legion GPU box and is unaffected by this.
