# LinkedIn Post Craft: Making Genuinely Good, Standalone Posts From a Newsletter

> **Funnel framing re-homed.** Where this report frames LinkedIn or the newsletter as feeding
> "consulting inbound" or "the consulting funnel," that motion belongs to the **consultancy and
> Nick's personal channel**, not the Institute (whose newsletter is a neutral research cadence).
> See `research/content-seo-governance/report.md` and `overview.md` "Independence and firewall".

**Purpose:** the craft layer for turning one weekly newsletter issue into LinkedIn posts that
are genuinely good on their own, for skeptical decision-makers (CTOs, founders, operators) at
traditional non-tech companies applying AI. LinkedIn is the top of funnel; it feeds the weekly
newsletter and consulting inbound. This report is for the writer (human or agent) at the desk,
about to draft. It answers "how do I make this post actually good?" not "how does the funnel
work?"

> Raw sources live in `research/linkedin-post-craft/raw/` (4 files: `01-repurposing-craft.md`,
> `02-post-anatomy.md`, `03-hook-patterns.md`, `04-teardowns.md`). This report is built from
> them and is re-readable against and regenerable from them, per the repo's raw-first research
> pattern. Stats are kept with their sources; folklore (self-reported numbers, vendor figures
> with no method, creator heuristics stated as law) is flagged inline, mirroring how
> `audience-strategy/report.md` flags it.

## How this relates to the other reports (read all three, don't duplicate)

Four reports, four jobs. Don't repeat across them.

| Report | Owns | Use it for |
|---|---|---|
| `audience-strategy/report.md` | The funnel, cadence, algorithm, formats, CTAs, the consulting motion | Why we post at all; how often; where links go; how reach works; the 30/60/90 |
| `content-hooks/report.md` | Hook theory and the hook-generation pipeline | The psychology of a hook; the 10-category taxonomy; prompting a model for hooks |
| `linkedin-breakout/report.md` | Breakout vs. in-network reach; the two-games model | Why the same story reached 200 vs 170,000; the breakout ingredient list; when to build a post as a spike vs a save; how discovery should score breakout potential |
| **this report** | **Post craft + repurposing craft** | Expand vs atomize; the anatomy of a whole post; formatting mechanics; what good looks like vs lazy; the issue-to-batch procedure |

The `content-repurposing` skill is the operational checklist that executes all of this (where
files go, frontmatter, Postiz). This report is the reasoning behind the craft the skill applies.
When this report and `audience-strategy` overlap (cadence, link placement, the no-teaser rule),
`audience-strategy` is the authority; here we only note the craft consequence and move on.

The single load-bearing finding that ties everything together: the platform's 2025-2026 drift
toward dwell time, saves, and meaningful comments, and away from engagement bait, is
structurally favorable to an anti-hype brand. Our liability is thin content, not honesty. Every
craft decision below serves one goal: make a post a CTO would save.

---

## 1. Expand vs atomize: the decision rule

This is the core craft finding, and it corrects a common reflex. Most repurposing advice
conflates "repurpose" with "atomize" (slice the issue into N summaries). The better operators
lead with **expansion**, and so should we.

**The two motions, named** (`raw/01`):

- **Atomize (slice):** pull the pillar apart into its components (the thesis, each supporting
  point, the best lines, lists, stats, stories) and reshape each into a native post. Translation,
  not copy-paste.
- **Expand (deepen one idea):** take ONE concept from the issue and develop it into a full
  standalone post that often goes *deeper* than the issue did, adding a story, more proof, or a
  sharper actionable the issue had no room for.

**The reframe that decides everything:** a newsletter issue is rarely one idea. It is a thesis
plus three to six supporting moves. So the repurposing question is not "how do I summarize this
issue?" It is "which of the ideas *inside* this issue is strong enough to be its own post?" Then
you expand each chosen idea into a self-contained post. The failure mode of pure slicing is
producing N shallow summaries that all gesture back at the newsletter ("read the full thing").
Those are teasers, and the algorithm and the audience both punish them.

### The decision rule (apply per candidate idea)

For each distinct idea in the issue, ask in order:

1. **Can it stand alone?** Could a reader who never sees the newsletter walk away with a
   complete, usable takeaway from this post alone? If no, it is a fragment, not a post. Either
   merge it into a richer idea or drop it.
2. **Is it rich enough to expand?** Does it have its own hook, its own proof (a number, a named
   example, a real decision), and its own actionable? If yes, **expand** it into a full post,
   adding the material the issue compressed out. This is the default and the higher-value move.
3. **Is it complete but not deep?** A clean, self-contained point that does not need expansion
   (a sharp definition, one checklist, one stat with its implication) can be **atomized** as is,
   reshaped natively. Fine to do, but it is the secondary motion.
4. **Does the issue contain several genuinely distinct full-value ideas?** Then slicing is
   legitimate: each slice is one of those ideas, expanded. If the issue has one idea wearing
   three hats, you have one post, not three.

**The warning, stated plainly: thin source equals thin slices.** "You can't atomize thin content
into thirty useful pieces; you just get thirty pieces of thin content" (`raw/01`). A pillar is
repurpose-ready only if it has roughly 3-7 distinct points, 1-3 stories or examples, and 1-2 data
points (matches `content-repurposing` and `audience-strategy` §3). If an issue does not, the
honest move is fewer posts (or skip the week's batch), never padding. Better three dense posts
than seven thin ones. One good post a week beats three forgettable ones.

**Why expand beats slice for us specifically:** our audience rewards specificity and depth
(Edelman: 86% prefer content that challenges their assumptions, 91% value insight that uncovers
a problem they hadn't recognized; see `raw/02` §5 and `raw/04` §A). A summary cannot do that; an
expanded single idea, with a real number and a real example, can. Expansion is also how a post
earns dwell time and saves honestly, which is the only way a text post wins (see §3).

**The operator evidence** (`raw/01`, all self-reported, treat ratios as folklore): Justin Welsh's
"1 idea to 7 pieces" is re-angling one idea seven ways (story, listicle, teardown, observation,
contrarian, past-vs-present, prediction), each a complete post. Jasmin Alic's "1-to-9" crosses
three statement types by three hook styles on one idea. Lara Acosta pulls "1 main idea per post."
Ship30's atomic essay is 250 words, single idea. Every credible model is single-idea expansion,
not issue-summary. Their volume claims ("5-7 pieces minimum," "10-20 across platforms") are
full-time-creator folklore; for a part-time founder the right dose is **3-4 expanded
single-idea posts per issue**, spread across the week (see §8).

---

## 2. The anatomy of a great post (our version)

A reusable template. Lengths reference the documented sweet spot (see §3). Every line follows the
`writing-voice` skill and Nick's `voice-nick.md`.

### Line 1: the hook (the only thing guaranteed visible)

The first line is roughly 80% of the job; it is all most people see in the feed (`raw/02` §4).
Write it to land inside the **mobile fold of about 140 characters** so it works on phones (57% of
traffic) and desktop both. One line. A true, specific, slightly surprising claim or number, stated
plainly. No warm-up, no "I wanted to share." Pull the hook from the §5 swipe file; generate 3-5
options with the `hooks` skill and pick the most on-voice one.

The honest constraint from hook theory (`content-hooks/report.md`, `raw/03`): a hook is a
promise; the body is the proof; breaking that promise costs trust permanently with this audience.
Open a gap you will genuinely close. Be specific about the setup and stakes, withhold only the
resolution or lesson.

### Line 2: the re-hook (still above the fold)

The second line's job is to pay off enough of the hook to earn the "see more" click without a
cheap cliffhanger (`raw/02` §1b, `raw/03` §3). Add the concrete specific, name the stake, or state
the "here's what I found" promise plainly. Statement, then elaboration. For us this is where you
prove the hook is real: the number's context, the named company, the actual decision. No "and what
happened next shocked me." The re-hook is honesty doing the work that bait does for everyone else.

### Body: pick one shape, fit it to the idea

One idea per post. Choose the shape that fits the idea, not a default:

- **PAS (Problem, Agitate, Solve).** Name the reader's exact problem, sharpen its cost
  *proportionately* (never fear-monger an expert who already knows their own pain), then resolve.
  Best for "here's a mistake operators make" posts. Matt Barker uses it on "99% of my posts"
  (`raw/03` §1.5).
- **Story arc.** Setup, tension or turn, resolution, lesson. Strongest pull, highest broetry risk
  (see §4). Use a true, specific scene the post actually unpacks. Confess the ugly thought before
  the lesson (Oluwole, `raw/04` B2) so the wisdom feels earned, not preached.
- **Framework / numbered list.** Name a model or list steps. Highest *save* rate because it is
  reusable and reference-able (`raw/02` §3b). The canonical executive-save format.
- **Teardown.** Analytical breakdown of how or why something works, often a named example. "I
  reviewed N, here's what held up" is the strongest on-brand variant (Lewis Walker, `raw/04` B1).
- **Honest failure.** Mistake (specific), lesson, what changed, reader takeaway (`raw/04` D). The
  differentiator is concrete nouns and numbers and a takeaway that makes the confession *useful*.
  Pass the dinner-party test: if the story would cause an awkward silence, it is too raw.

Body craft: short sentences, mostly under 20 words, one idea per paragraph, specific examples and
real data. Every line should earn the next; add a quick win per section so the post stays dense
and complete rather than thin (Lara Acosta's "every line is a hook," `raw/01`).

### The close: a real question, then a soft CTA

Land the point, then end on a **genuine open question tied to the reader's experience**, or a
clear "here's what I'd do." Not "comment YES." The honest way to earn the 15+ word comments the
algorithm rewards is a question only someone with relevant experience can answer, or a clear,
defensible position people want to add to or push back on (`raw/02` §3c).

CTA rules (deferring to `audience-strategy` §3 and `content-repurposing`): the always-on CTA is
the profile's Featured section, not the post. Use a soft footer reference on only 1-2 posts per
batch ("I go deeper on this in this week's issue"), and only after full value is delivered. Never
withhold the value to sell the click.

### The length finding (good news for us)

The data supports substantial mid-length text, not one-liners and not 3,000-character essays:

- AuthoredUp, 372,126 posts (Sep 2025-Feb 2026): the **1,301-2,500 character** band is the sweet
  spot. 1,301-2,000 chars gives 2.61% median ER; 2,001-2,500 gives 2.67%; under 400 chars gives
  2.10%. So mid-length posts get about **27% higher engagement than sub-400-char posts** (`raw/02`
  §2c).
- Reconciliation with van der Blom's "optimal 800-1,000 chars" but "top 5% average 1,700+ chars":
  the defensible target is **roughly 1,300-2,000 characters, about 250-350 words**.

This is the anti-hype dividend: depth is rewarded. But **each post earns its length** by
substance, never by padding. A 1,300-character post with one real idea, one number, and one
example beats a 2,000-character post with filler. If it runs long, it is usually padding to cut
(house voice: most posts land well under 800 words; LinkedIn posts are tighter still).

---

## 3. Formatting mechanics

Text posts are the lowest-reach format on purpose (van der Blom: text 0.88x vs documents 1.45x,
`raw/02` §0). We accept that for credibility and win on the signals text *can* win: dwell, saves,
real comments. The mechanics below all serve that.

- **White space without broetry.** Line breaks are the most powerful formatting tool on LinkedIn
  because they control how the hook renders at the fold and keep the body scannable. The line
  between scannable and broetry: short paragraphs (mostly 1-3 lines) plus a few single lines *for
  emphasis only* is good; one-sentence-per-line for the *whole* post is broetry, and broetry now
  signals low credibility to our exact audience (`raw/02` §2b). Vary paragraph length to aid
  reading, not to manufacture drama. Heuristic, not law: mostly 1-3 short lines per paragraph, a
  rare single line to land a point.
- **Readability grade 5-7.** Plain words, concrete nouns, no jargon. Posts above 10th-grade
  reading level reportedly get about 35% less reach (FOLKLORE: the exact figure traces to vendor
  summaries of van der Blom, not a published table; the direction is consistent everywhere). This
  aligns exactly with the house voice: depth of *idea* at a low *reading grade*. Dense, not
  complicated.
- **One structural emoji at most.** Going 0 to 1 emoji reportedly lifts ER about 7% and reach
  about 22% (AuthoredUp, 847k posts), then flat from 1 to 15 (`raw/02` §2e). FOLKLORE caveat: the
  reach swing is correlation, not cause; people who use one purposeful emoji may just write better.
  For an anti-hype voice, use **0 or 1 functional marker** (mark a section, flag a number), never
  decoration, never stacked at line ends. The house voice bans emoji as structure in our own
  long-form, so default to zero and treat one as the ceiling, not a target.
- **0-3 hashtags.** LinkedIn disabled hashtag follow pages in October 2024; hashtags lost most
  discovery value, and more than about six can hurt reach (`raw/02` §2f; `audience-strategy` §2
  agrees, posts without hashtags can outperform by 5-10%). Use **0-3 tightly relevant tags at the
  end, or none.**
- **Link placement: not in the body.** Outbound links in the post body suppress reach (the robust
  finding). The exact penalty is contested and flagged folklore: van der Blom's best-sourced
  figure is about 18.8%, many blogs claim 40-60% (`raw/02` §2g; `audience-strategy` §3 carries the
  full conflict and the now-weakened "first comment" workaround). Practical default: **most posts
  carry no link; drive via the Featured section.** When a post does link, follow
  `audience-strategy` (end of a longer post, or first comment) and treat it as an A/B test, not a
  settled rule.
- **No fake-unicode bold.** LinkedIn supports only line breaks, emojis, and plain text natively;
  no bold, italics, or headings. The unicode "bold" trick reads as gibberish to screen readers,
  renders inconsistently, and looks automated. For a credibility-first brand, **never use it**
  (`raw/02` §2a). Accessibility is not optional.

---

## 4. The hook swipe file

The 10-12 strongest hook templates, each rewritten into our anti-hype register, with a short
brand-relevant example (applied AI at a traditional company), why it works, and the trap.
Cross-referenced to the `content-hooks/report.md` §4 taxonomy so the two stay in sync. The
through-line: the pull in every proven hook comes from a real curiosity gap plus specificity, not
from hype words. Keep the structure, strip the hype.

| # | Template | Hooks taxonomy | Example (our beat) | Why it works | The trap |
|---|---|---|---|---|---|
| 1 | **Specific-result / outcome-first** | §4.1 Specific-result | "A 40-person logistics firm cut invoice processing from 6 days to 1, with the same headcount." | A concrete number plus context is a credibility signal and a curiosity gap (how?). Data-led hooks beat dramatic ones for conservative audiences. | Rounding or inflating the number, or a body that never delivers the "how." Use real, citable figures only. |
| 2 | **Curator / "I reviewed N, here's what held up"** | §4.7 Named example / §4.1 | "I read 60 AI case studies from non-tech companies this month. Four were worth your time. Here they are." | The number signals real work done; the hard filter promises curation. The single most on-brand pattern (Lewis Walker, `raw/04` B1). | Claiming volume you didn't do, or a list of vague names with no outcome. Name the company and the result. |
| 3 | **Reasoned contrarian / myth-bust** | §4.3 Reasoned contrarian | "Most AI pilots at traditional companies don't fail on the model. They fail on the org around it." | Interrupts a familiar narrative with a credible alternative; Edelman says 86% of buyers want their assumptions challenged. | A hot take you can't defend, or a strawman. Only challenge a belief you can back with substance later in the post. Banned: "It's not X, it's Y." |
| 4 | **Honest failure / "I was wrong"** | §4.2 Confession / failure | "We automated a report nobody used for three weeks before anyone noticed. Here's the check we skipped." | Humility lowers a skeptic's defenses and makes the lesson credible; rare enough to stand out. | Manufactured vulnerability or a humblebrag in disguise. A specific, bounded, real mistake with a concrete lesson. Pass the dinner-party test. |
| 5 | **Surprising data / "I analysed N"** | §4.4 Surprising data | "We measured it: the AI agent handled 70% of tickets, but needed a human on the 30% that mattered most." | A counterintuitive real number is itself the curiosity gap; best for technical, skeptical readers. | Unsourced round percentages, or burying that it's a tiny sample. Be ready to cite it if challenged. |
| 6 | **Problem-named (PAS-lite)** | §4.9 Problem-named | "Your team is pasting the same prompt into ChatGPT forty times a day and calling it an AI strategy." | Recognition creates trust; the reader sees their own situation named precisely. | Over-agitation. Telling a CFO they're "bleeding money" insults their competence. Precise observation, not fear-mongering. |
| 7 | **One-line story / in medias res** | §4.6 One-line story | "The ops manager turned off the AI tool we built two days after launch. She was right to." | Narrative tension; an open loop the reader must close. Lower risk than a bold claim for conservative readers. | Broetry: fake suspense, one word per line, no payoff. A true scene the post actually unpacks. |
| 8 | **New-mechanism / "here's what actually works"** | §4.10 New-mechanism | "Most AI rollouts start with the tool. The ones that stick start with the one workflow people already hate." | Promises a specific named method, not a vague secret; right for a market numb to bigger claims (Schwartz stage 3). | "The secret nobody tells you" with a generic payoff. The mechanism must be genuinely new and specific. |
| 9 | **Named-company case** | §4.7 Named example | "Klarna walked back parts of its AI customer-service push. The walk-back is the lesson, not the launch." | A real, checkable name borrows credibility and sets up "what happened?" Our case-study library is the strongest version. | Name-dropping a company the post doesn't actually analyze, or implying insider access you lack. |
| 10 | **Self-application / show your own number** | §4.1 Specific-result | "We ran our own newsletter ops through the workflow we recommend. It cut drafting time about 30%. Here's the catch." | Show-don't-tell authority: you prove the principle on yourself and report the number (Katelyn Bourgoin, `raw/04` C2). | Inflating your own result, or hiding the catch. Report the honest number, including the limit. |
| 11 | **Plain-useful / scoped how-to** | §4.8 Plain-useful | "How to decide whether a process is worth automating, in four questions you can answer in ten minutes." | Clear, scoped value; sets up a save-worthy framework. | Vague "how to succeed with AI" with no scope. Name the scope and deliver the steps. |
| 12 | **Direct address (modifier, prepend to any of the above)** | §4 (role-naming note) | "Operators at 50-to-500-person companies: " + any hook above. | Filters the right audience in the first two words; signals relevance instantly. | None inherent; just don't bolt it to a bait body. Use sparingly so it doesn't read as a template. |

Hook mechanics that apply to all of these (`raw/03` §3, `content-hooks` §2): keep the hook to one
line, roughly 5-15 words, inside the about-140-character mobile fold; front-load the most
interesting element; end the hook on a colon, ellipsis, or the natural pause that signals more is
coming. Draft several, pick one. For the full generation pipeline (grounding in source, banned-word
list, taxonomy-forced variety, rubric scoring), use the `hooks` skill; this swipe file is the menu
it draws from.

---

## 5. Engagement and saves, honestly

The metric to optimize for an executive audience is the **save**. It is the strongest reach signal
in 2025-2026, and saves are now public (rolled out September 2025) and resurface a post for 2-3
weeks instead of about 24 hours (`raw/02` §3b).

- **What executives save:** frameworks, checklists, templates, step-by-step playbooks, contrarian
  breakdowns, data breakdowns. Content worth remembering and reusing. "Hot takes and personal
  updates rarely get saved." The single most actionable craft instruction in this report: **build
  the post so a CTO would screenshot or save it.** A reusable structure beats a performance.
- **Comments: depth over volume.** Meaningful comments (15+ words that add insight or ask a real
  question) carry weight; one-word comments and "comment YES" bait do not (the latter is
  penalized). Earn depth by ending on a question that requires the reader's own experience, or by
  taking a clear, defensible position (`raw/02` §3c).
- **Reply fast.** Author replies within the first 30 minutes reportedly lift total comments about
  64% and views about 2.3x (FOLKLORE-tier magnitudes, van der Blom via vendors; the direction,
  first-hour engagement sets the trajectory, is consistent). The controllable lever is showing up
  in the comments substantively in the first half hour, not the exact posting minute.
- **80/20 engage-to-post.** Spend roughly 80% of LinkedIn time engaging with others' content and
  20% creating (`audience-strategy` §2). From zero, genuine value-adding comments on a small
  engage list are the top growth lever. This report makes the posts; the comments are where the
  audience actually comes from.
- **No bait, ever.** "Comment YES if you agree," reaction-polling, follow-bait, manufactured
  urgency, and the worn-out phrases ("this feels illegal to know," "unpopular opinion:") are
  detected, penalized, and they insult a skeptical operator (`raw/03` §4). The save-worthy
  framework is the honest substitute for every one of them.

The numbers folklore (saves "5x a like," 80% next-post visibility, 130% follow lift, etc.) is
flagged in §9 and should not be quoted as fact. What is safe to act on: **saves > meaningful
comments > likes**, and the way to earn saves is a reusable, specific, genuinely useful post.

---

## 6. What good looks like vs lazy repurposing

### Lazy (avoid)

- **Copy-paste the issue or a section verbatim.** Universal "don't." Rewrite for the format.
- **Carbon copies across angles or platforms.** Change the lead, add a specific, space them out.
- **Teasers instead of value.** Summarizing the issue only to say "read the full thing." The
  curiosity-gap-without-payoff pattern, punished by algorithm and audience.
- **Templated "personal lesson" posts.** By late 2025 the honest-failure post had become one of
  the most overused, AI-assisted patterns on the feed. Real vulnerability now needs specificity to
  not read as formula (`raw/01` §5, `raw/03` §4).
- **Thin atomization.** Slicing a thin issue into many shallow posts.

### Good (do)

- **Reshape, don't excerpt.** Rebuild each idea native to LinkedIn: new hook, new structure,
  scannable. Translation, not copy-paste.
- **Specificity is the credibility.** Named companies, real numbers, actual decisions, named
  failure modes. Adjectives do not build authority; nouns and figures do. This is the through-line
  of every credible example found (Walker, Bourgoin, Moreno) and it maps exactly onto the house
  voice.
- **One idea per post.** Overstuffing kills text posts and carousels alike.
- **Each post is complete standalone value plus a next step.** Give the idea away fully; the CTA
  lives at the end or in the Featured section, never as a withholding device.

### The structural lessons from the teardowns (the model posts)

From `raw/04`, the patterns worth copying, each tied to its model:

1. **The curator / case-study roundup (Lewis Walker):** do real volume of homework, filter hard,
   name names and numbers, invite additions. "I reviewed 3,427 AI case studies. These 40 stood
   out." Anti-hype by construction. The single most on-brand example found, and almost exactly our
   beat. (Scraped live: ~718 reactions, ~559 comments, the one verified engagement figure in the
   set.)
2. **Proof on your own metrics (Katelyn Bourgoin):** don't claim expertise, demonstrate it on
   yourself and report the number. When we test an AI workflow internally, publish the result,
   including the limit. Show-don't-tell in its purest form.
3. **One spiky, defensible POV returned to weekly (Chris Walker):** authority comes from
   consistency of a defensible position plus fresh evidence, not from tactics. Pick 1-2 spiky-but-
   true positions on applied AI ("most AI pilots fail for org reasons, not model reasons") and come
   back to them with new proof.
4. **The honest-failure archetype (The Trusted Voice / Braydon Moreno):** mistake (specific) ->
   lesson -> what changed -> reader takeaway. Named product, named failure modes, no spin. The
   specificity is the credibility. Keep it useful, not confessional.
5. **The myth-bust carousel:** slide 1 frames the myth provocatively; body gives truth plus
   research per myth; final slide asks a real question. Pairs perfectly with anti-hype and is a
   save-worthy format. (Carousels are the highest-saved native format; the exact multipliers are
   folklore, see §9 and `audience-strategy` §3 for the carousel spec.)

Common thread the teardowns name independently (`raw/04` B2, G): first lines create tension or a
claim, never warm up; concrete details over generality; one central idea per post; endings invite
a substantive response rather than conclude. The "here's how a named company solved this" frame
beats self-promotion every time (Drift, `raw/04` C5).

---

## 7. The procedure: one issue into a batch of 3-4 posts

Step by step, for the writer turning one approved issue into a schedulable batch. This produces the
files the `content-repurposing` skill specifies; read that skill for the exact frontmatter and
Postiz handling. Defer all cadence and link rules to `audience-strategy`.

**Step 1: Extract the distinct ideas.** Read the issue and list its *distinct* full-value contents:
the thesis, each supporting point, each stat, each story, each named example, each list. This is
the candidate pool.

**Step 2: Apply the expand/atomize rule (§1) to each candidate.** Keep only ideas that can stand
alone. For each keeper, decide expand (default, add the material the issue compressed out) or
atomize (clean, complete points reshaped as is). If the issue yields fewer than 3 genuinely
distinct full-value ideas, ship fewer posts. Do not pad.

**Step 3: Choose 3-4 ideas and assign each a body shape and a hook template.** Aim for variety
across the batch so it doesn't read as one idea three times. A workable default mix:

| Post | Idea type | Body shape (§2) | Hook template (§4) | Channel | offsetDays |
|---|---|---|---|---|---|
| A | The sharpest firsthand insight or story | Story arc or honest failure | #4 Honest failure, #7 One-line story, or #10 Self-application | personal | +1 |
| B | The method or checklist | Framework / numbered list (consider a carousel) | #11 Plain-useful or #1 Specific-result | personal | +3 |
| C | The genuine position vs the hype take | Teardown or PAS | #3 Reasoned contrarian or #8 New-mechanism | business | +5 |
| D (optional) | A named case from the case-study library | Teardown / curator | #2 Curator or #9 Named-company case | personal | +2 or +6 |

The personal/business channel split follows the `content-repurposing` file convention; the offsets
are relative to the issue's real pubDate (A=+1, B=+3, C=+5), never absolute dates, so the batch
travels with the issue if it's delayed or reordered. Spreading across the week (about 2-3 days
apart) is what keeps it non-spammy; same-idea same-day bursts read as recycling.

**Step 4: For each post, draft in order:** generate 3-5 hooks with the `hooks` skill against the
issue, pick one on-voice option; write the re-hook that proves it; write the body in the chosen
shape, one idea, specific and sourced; close on a real question plus (on at most 1-2 of the batch)
a soft issue reference. Keep it about 250-350 words.

**Step 5: Audit every post against the house voice** (`writing-voice`, `voice-nick`): zero em
dashes, no banned hype words, no "It's not X, it's Y," no rule-of-three reflex, sentence case,
varied rhythm, every claim specific and backed, no overclaiming, no fake-unicode bold. Then the
craft gate from this report: line 1 inside the mobile fold, one idea, complete standalone value,
built so a CTO would save it, no teaser, no bait. Cut any post that only lands by implying clients
or results that aren't real.

**Step 6: Write the schedulable files and present the batch to Nick.** Leave `approved` unset
(Nick's gate; agents never set it or queue). Nick approves, tweaks, and the LinkedIn pipeline
schedules to Postiz once the issue is live.

---

## 8. Cadence note (defers to audience-strategy)

The craft consequence only: **3-4 expanded single-idea posts per issue, spread Tue-Thu mornings,
2-3 days apart**, lands in the documented founder sweet spot of 3-4 posts/week and is fully fed by
one newsletter, no separate content treadmill (`raw/01` §4; `audience-strategy` §2 carries the
full cadence conflict and the consistency-beats-intensity finding). Beyond about 5 posts/week,
engagement per post drops and audience fatigue sets in. Hold the cadence for a year; expect
meaningful inbound around the 3-6 month mark. One honest caveat from `raw/01`: Matt McGarry's
candid 6-month data showed 4-5 LinkedIn posts/week drove consulting clients but few newsletter
signups, so don't assume volume converts to subscribers; design explicit value-first CTAs and
measure the consulting funnel and the signup funnel separately.

---

## 9. Folklore ledger

Every number below is directional or unverified. Keep each with its source; never quote it
publicly as fact without hedging. Mirrors `audience-strategy/report.md` §7 and the per-file flags
in the raw captures. **Trust only two tiers as solid: the Edelman-LinkedIn 2025 report (about
2,000 buyers, named method) and the one live-scraped example (Lewis Walker, ~718 reactions / ~559
comments).** Everything else here is observational vendor data or self-report.

| Claim | Source tier | Status |
|---|---|---|
| van der Blom format multipliers (text 0.88x, documents 1.45x, polls 1.64x, etc.) | Practitioner report, 1.8M posts, relayed via blogs | Directional; verify against the actual report before quoting a multiplier |
| Reach down ~50%, engagement down ~25%, follower growth down ~59% YoY; avg reach 8-12% of followers | van der Blom via vendors | Directional |
| Document carousels 6.60% ER, "highest of any format"; carousels 3.7x reach; personal carousels "63% higher" | Agency blogs (dataslayer, meet-lea, oktopost) | FOLKLORE, likely cherry-picked; direction (carousels save/dwell well) plausible |
| Length sweet spot 1,301-2,500 chars (2.61-2.67% ER), +27% vs sub-400 | AuthoredUp, 372,126 posts, method stated | Strongest non-Edelman tier; still observational, treat as solid-ish |
| 0 to 1 emoji: +7% ER, +22% reach; flat 1-15 | AuthoredUp, 847k posts | Correlation not cause; the reach swing especially |
| Above 10th-grade reading level = -35% reach | Vendor summaries of van der Blom | FOLKLORE; direction (plain wins) solid |
| External link penalty (18.8% van der Blom / 40% / ~60%) | Conflicting: 18.8% best-sourced, 40-60% vendor | Real direction, contested magnitude; A/B test |
| "4+ links = 3-5x reach" | Vendor | Almost certainly an artifact; ignore |
| "First comment beats body link" | Practitioner consensus | Was true ~2021-2023, now contested/weakened; A/B test |
| Dwell 61+ sec = 15.6% ER vs 0-3 sec = 1.2% | van der Blom via vendors | Magnitudes directional; mechanism solid |
| Saves: "1 save = 5x a like," "= 2x a comment," "80% next-post visibility," "130% follow lift" | van der Blom / vendors | FOLKLORE; only "saves > comments > likes" is safe |
| Saves resurface 2-3 weeks; public save counts since Sept 2025 | dewey / Medium | Platform-mechanic claims, widely reported, plausible |
| Comments weighted "2x likes" (some say "15x") | Vendor | 2x is the more-cited; 15x is inconsistent, drop it |
| Author reply in 30 min = +64% comments, 2.3x views; reply threads up to 2.4x reach | van der Blom via vendors | Magnitudes folklore; direction (reply fast) solid |
| Engagement bait / links "penalized ~60%" | Vendor | The bait penalty itself is real LinkedIn policy; the 60% is a vendor number |
| "Algorithm penalizes broetry formatting" specifically | Vendor assertion | The bait-CTA penalty is documented; the broetry-formatting penalty specifically is asserted, not proven. Safe read: broetry no longer helps and signals low credibility |
| Hook multipliers: story ~4x, contrarian ~3x, bold ~2x; "under 10 words +40%"; per-hook-type ER tables | Vendor/agency, no primary study | FOLKLORE; hook *categories* are real, the numbers are not |
| Operator repurposing ratios: Welsh "5-7 / 10-20 pieces per issue," "215% from reformatting," Acosta "10x faster" | Self-report | FOLKLORE; the craft principles hold, the numbers don't |
| Company organic content ~2% of feeds vs ~31% top personal creators; personal out-reaches pages 5-8x | Vendor, echoed widely | Directional; supports founder-personal-profile strategy |
| Edelman-LinkedIn 2025 figures (71%, 86%, 91%, 95%, 79%, 63% >1hr/wk, 40%+ deals stall) | Edelman/LinkedIn, ~2,000 buyers, named method | **Solid. Trust these.** The load-bearing evidence for the anti-hype wedge |

---

## 10. The one-paragraph version

A newsletter issue is a thesis plus several supporting moves. Find the ideas inside it that can
stand alone, and expand each into its own full post that goes deeper than the issue had room to,
rather than summarizing the issue N times. Thin source equals thin slices, so ship fewer, denser
posts. Open with a true, specific, slightly surprising hook inside the 140-character mobile fold,
re-hook with the concrete proof, write one idea in one body shape at about 250-350 words and grade
5-7, close on a real question, and build the whole thing so a CTO would save it. White space not
broetry, 0-1 emoji, 0-3 hashtags, no link in the body, no fake-bold, no bait. Specificity is the
credibility, and saves are the score.
