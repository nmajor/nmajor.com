# What Nick's own LinkedIn corpus actually does

**Scope.** Every LinkedIn post in the repo as of 2026-08-18: **39 posts** across 10 issue
batches (`app/linkedin/*/personal-*.md` and `business-*.md`). The other 13 files in
`app/linkedin/` are Facebook, X and Instagram adaptations; they are referenced only where
they illuminate a LinkedIn shape. Counts below are mine, done by reading all 39.

**What "shipped" means here.** A post has `pushedAt` + `postizId` in frontmatter when the
pipeline actually pushed it. **23 of 39** are stamped:
`a-machine-cant-answer-for-it` (3), `the-bottleneck-moved` (3), `your-ai-made-an-offer` (3),
`the-case-study-was-an-ad` (4), `uber-measured-the-bill` (5), `second-deployment-is-smaller` (5).

**One correction to that count.** Four unstamped posts *were* posted — manually, before the
pipeline existed. `research/linkedin-breakout/report.md` records their impressions, and they
are the only posts in the whole repo with any engagement data attached. They map to these
files:

| Breakout report | File | Impressions |
|---|---|---|
| Post A (narrative) | `app/linkedin/banning-ai-is-the-risk/personal-story.md` | 171,633 |
| Post B (checklist) | `app/linkedin/banning-ai-is-the-risk/personal-framework.md` | 234 |
| Post C (contrarian) | `app/linkedin/banning-ai-is-the-risk/personal-mythbust.md` | 135 |
| Post D (framework) | `app/linkedin/build-versus-buy-broke/personal-own-it-framework.md` | single digits |

So: 27 posts have some evidence of having gone out; **4 of 39 have any measured outcome**,
and those 4 all come from one week in June. Everything else in this document is textual
analysis of what was written, not evidence of what worked. Treat every "this is what works"
inference accordingly. The honest position is that we have one natural experiment and no
other numbers at all.

---

## 1. Structural shapes: six, and two of them dominate

### The shapes

**Shape 1 — Named-incident narrative.** News lede, then the story in short beats, then the
turn, then a close. ~11 posts. The strongest and most repeated. Example arc, from
`your-ai-made-an-offer/personal-story.md`: "BMW Toronto's chatbot quoted a customer
$27,162.79." → the scene with Zack Giacomelli and "Quinn" → "Quinn was an AI, and the price
was a mistake." → "Now count what could have caught it. … A reporter did."

**Shape 2 — Numbered framework / checklist.** Promise N items, deliver N items, close on a
question. **5 posts**: "five questions" (`banning-ai/personal-framework`), "three rules"
(`build-versus-buy-broke/personal-own-it-framework`), the 5-step disclosure checklist
(`everyone-uses-ai/personal-framework`), the 4-point playbook
(`the-bottleneck-moved/personal-framework`), "7 checks" (`the-case-study-was-an-ad/personal-carousel`).
This is the shape with the only measured failures in the corpus (234 impressions and single
digits).

**Shape 3 — Myth-bust / stated-belief reversal.** Quote or paraphrase a common belief, then
flip it. **6 posts**. Openings: `"We keep a human in the loop" is the most oversold phrase in
corporate AI right now.` / `"They barely mention AI, so they must be behind." In banking, that
read is backwards.` / `Ban AI at work and you do not remove the risk. You lose sight of it.` /
`The data leaks from build-it-yourself software are rarely clever break-ins.`

**Shape 4 — Flat news note.** One fact, two or three paragraphs of sourced detail, stop.
Emerges only in August: most of `uber-measured-the-bill`, `second-deployment-is-smaller`, and
all five of `seven-days-to-close`. Word counts drop hard here — 70 to 240 words against
215-320 for the June/July batches.

**Shape 5 — First-person investigation.** "I went looking for X and here's what I found."
**4 posts**, all in `the-case-study-was-an-ad`, plus `uber/personal-scoreboard`. This is the
most distinctive writing in the corpus and the only shape where Nick is a character:
`I went looking for one honest account of what a homemade AI tool cost a company a year later.
The best one I found was written by an agency that sells building them.`

**Shape 6 — Preview / link post.** 1 LinkedIn post (`banning-ai/business-preview`), plus the
Facebook previews.

### How much repetition

The repetition is not subtle. **Four consecutive issues shipped the same three-slot template**
— `story` / `framework` / `mythbust` — under those exact `angle:` values in frontmatter:

- `a-machine-cant-answer-for-it/` — personal-story, personal-framework, personal-mythbust
- `banning-ai-is-the-risk/` — personal-story, personal-framework, personal-mythbust
- `everyone-uses-ai-not-everyone-can-say-so/` — personal-story, personal-framework, personal-mythbust
- `the-bottleneck-moved/` — personal-story, personal-framework, personal-mythbust

That is **12 of 39 posts, three shapes, four times over**, filenames and all. The August
batches broke the template (five named-news angles instead), which is real progress — but
they replaced three repeating shapes with **one** repeating shape (Shape 4), which is how we
arrive at the current complaint.

`seven-days-to-close` is the purest case: **five posts, one shape, no variation.** All five
are 75-91 words. All five are fact-hook → two or three short detail paragraphs → one closing
generalisation. Three of the five come from the same publication (404 Media) inside an
eight-day window, and all five are about legal documents. There is no person in any of them
doing anything — only filings, declarations and reports. That is a large part of why they
read composed rather than typed.

---

## 2. Hooks: one dominant micro-shape, used in ~44% of the corpus

Every one of the 39 first sentences is under 140 characters (median 79, max 132), so the fold
rule is being followed rigidly. The problem is not length. It's that they all make the same
move.

### The dominant type: **two-beat antithesis** (~17 of 39)

Sentence one states a fact. Sentence two reverses, qualifies, or undercuts it. Verbatim:

- "The developers were sure AI made them 20% faster. **The stopwatch said 19% slower.**"
- "Air Canada told a tribunal it wasn't responsible for what its own chatbot said. **It lost.**"
- "Intercom charges $0.99 when its AI resolves a ticket. **It also charges $0.99 when the AI
  hands that ticket to a person.**"
- "State Farm's own lawyers filed seven fake case citations. **Two of the fakes were State
  Farm cases.**"
- "Banks mention AI least of any traditional industry in their filings. **They also use it the
  most.**"
- "JPMorgan staff now spend more on AI tokens than some of them earn in salary. **Its investor
  filings barely mention AI at all.**"
- "Thousands of vendors now sell 'AI agents.' **Gartner's estimate is that only about 130 are
  legitimate.**"
- "A firm selling '100% human-written, never AI' research **turned out to be entirely AI.**"
- "Allianz's underwriters got an AI assistant and saved 135 days' worth of time last year.
  **They didn't let it make any decisions.**"
- "Cancelling a software subscription doesn't delete the cost. **It moves it onto you.**"
- "For twenty years, build versus buy had one sensible answer: buy. **AI just broke that math.**"
- "Ban AI at work and you do not remove the risk. **You lose sight of it.**"

This is a good device. It is also, structurally, a first cousin of the banned "It's not X,
it's Y" — the same manufactured-contrast move wearing a different coat. `writing-voice` bans
the explicit form and the corpus has quietly rebuilt it as the default hook. When something
appears in nearly half of all posts, the reader stops noticing the contrast and starts
noticing the template.

### The other types, and how thin they are

- **Concrete-fact-first, no twist** (~9): "Insurers have started writing AI exclusions into
  commercial liability policies." / "On July 1 Microsoft raised 365 prices by up to 43% and
  folded Copilot Chat into every base plan." / "Someone hid white three-point text inside a
  court filing."
- **First person** (**5 of 39, 13%**): the four `the-case-study-was-an-ad` posts plus
  "I keep seeing this headline crop up…". That is the whole first-person inventory.
- **Genuine curiosity gap** (**1**): `second-deployment/personal-reversal-of-the-reversal` —
  "You may remember the bank that replaced a bunch of people with AI, then had to give them
  their jobs back. / Almost nobody knows what happened a year later." Exactly one post in 39
  opens a loop rather than delivering a fact.
- **Question as the opening line** (**0 on LinkedIn**). The two question-openers in the repo
  are both Facebook ("Who wrote the AI case study you're using to decide?", "Genuine question
  for anyone who has built software in-house.").
- **Quoted speech** (2): the Ford VP quote, "We keep a human in the loop".

**What is entirely absent from 39 hooks:** any opening from Nick's own week or his own work;
any mid-scene entry with a person doing something; any sentence starting with And / So / Or,
even though `voice-nick.md` names that as his register; any fragment, aside, or unfinished
thought. Every hook is a delivered, finished, third-person fact. So yes — they are samey, and
in a specific way: **they are all the same *kind of sentence*, not just the same subject.**

---

## 3. Endings: the finding

This is the clearest result in the analysis. Classifying the final move of all 39:

| Ending type | Count | Share |
|---|---|---|
| Direct question to the reader | **14** | 36% |
| Stated lesson / aphorism / verdict | **10** | 26% |
| Newsletter CTA or link as the last line | **5** | 13% |
| Instruction / imperative to the reader | **4** | 10% |
| **Flat on a detail, no conclusion** | **6** | **15%** |

**33 of 39 posts (85%) end with a tidy conclusion.** Nick's instinct is correct and the
corpus is worse than he probably thinks.

The question endings are near-interchangeable:

- "…who decided what it was allowed to see?"
- "Which of these five would your team struggle to answer right now?"
- "If you banned AI at your company, how sure are you that it stopped?"
- "Which of the tools you rent could you actually build this year?"
- "Who reviews access on the tools your teams build?"
- "…who owns them after the first month?"
- "…could you name every tool your team has built this year, and what data each one holds?"
- "Have you actually clocked that number, or are you going on how it feels?"
- "Where is the finished-looking work piling up fastest in your shop…?"
- "If one of your systems committed you to something nobody authorised, how would you find out?"

Ten posts, one sentence, ten times. Several use the identical `If [your situation]: [who /
which / how] …?` frame.

The **6 flat endings** are the interesting minority, and their distribution matters — **all
six are from late July onward**, and five of the six are in posts Nick visibly touched:

- `uber/personal-scoreboard`: "Maybe I'm missing something. And maybe claude code $200/mo
  subscriptions will end someday and we'll all have to eat API pricing. **No real takeaway I
  guess.**"
- `uber/personal-gray-beards`: "The rehired veterans are retraining the younger engineers and
  reprogramming the AI quality tools that missed the targets. **That's as far as the story has
  gotten.**"
- `uber/personal-agent-washing`: ends on the Gartner 2027 cancellation prediction and stops.
- `the-case-study-was-an-ad/personal-hot-take`: "**I'm not exempt from that. I passed both of
  these along.**"
- `the-case-study-was-an-ad/personal-story`: "Then I went back and checked the success
  stories. Including two I'd cited myself. Those didn't hold up either."
- `seven-days-to-close/personal-furnished-not-filed`: "Same company, same morning, two
  registers. Across all of EDGAR, they're the only filer who used that phrase in the window."

Note also the two *near*-flat lines that carry the same energy: "Maybe related, maybe not."
(gray-beards) and "I'd trust the pricing." (what-is-a-resolution). These, plus "No real
takeaway I guess," are the only genuine dry asides in 39 posts — against `voice-nick.md`'s
explicit "one dry aside per piece."

**Of the 17 posts in the four June/early-July batches, zero end flat.** The register Nick is
now asking for exists in the corpus; it is recent, it is rare, and it appears exactly where
he was closest to the keyboard.

---

## 4. Where the corpus and the reports contradict each other

**a) The reports mandate the ending Nick is now rejecting.**
`research/linkedin-post-craft/report.md` §2: "**The close: a real question, then a soft CTA.**"
§7 Step 4: "close on a real question." `research/linkedin-breakout/report.md` §4, breakout
checklist item 5: "**Close on a moderate, answerable question**, not a flat hot take."
`.skills/content-repurposing/SKILL.md` line 202 repeats it and calls it "the single cheapest
lift on most drafts." The 14 question endings are not a drafting accident; they are the
documented house rule being followed.

**b) `writing-voice` says the opposite, and loses.** `voice-nick.md` rule 7: "**End on the
last fact, not a sign-off.**" The genre note in `SKILL.md`: "End when you're done, not with a
summary." The corpus violates this in 33 of 39 posts. The authority Nick actually wrote is
being overridden by the research reports every single week.

**c) The repurposing skill contradicts itself, in the same file.** Line 169: "**No symmetric
callback endings** that snap neatly back to the hook. **End flat, even mid-thought.** A too
tidy bow reads as generated." Line 202: "**Close on a safe, answerable question.**" Both are
live instructions to the same drafter. This is the single most fixable thing in the system.

**d) The evidence for the question ending does not survive its own natural experiment.**
This is the important one. The breakout report attributes Post A's 171,633 impressions partly
to its closing question. But **all four posts in that experiment end on a reader-directed
question** (see the table in §1 of this document, and the four quoted closes in §3). A, B, C
and D held the ending constant and varied by roughly 700-1,000x. **The ending therefore
cannot be what distinguished them**, and the report's own diagnosis of what did — event-first
lede, story container, live news peg, broad addressability — is untouched by dropping the
question. Removing tidy conclusions costs us nothing the data can demonstrate.

**e) Length guidance has already drifted and nobody updated the reports.**
`linkedin-post-craft` §2 says 1,301-2,500 characters, "about 250-350 words." The
`content-repurposing` skill says **100-180 words** with a hard 1,400-char lint. The August
posts run 70-240 words. The reports are stale here; the skill is the operative rule.

**f) The batch template in the reports is out of date.** `linkedin-post-craft` §7 prescribes a
3-4 post batch with fixed A/B/C/D roles (story / framework / contrarian / case) and
`audience-strategy` §3 prescribes exactly "Post A story, Post B framework/checklist, Post C
myth-bust." That table is the direct source of the four-times-repeated story/framework/mythbust
template in §1. The current cadence is five posts at offsets 0,1,2,3,6, newsroom-sourced. The
old table should not be read as live guidance.

---

## 5. What `voice-nick.md`'s record of Nick's own edits points at

The file has four dated sections recording changes Nick made to drafts himself. Every one of
them pushes toward the register he is asking for now.

**"Plain over clever" (2026-06-17).** "He strips writerly devices and compressed phrasing. …
If a line sounds crafted, flatten it to how he'd actually say it." The two-beat antithesis
hook in §2 is a writerly device. It is in ~44% of the corpus. This note already condemns it.

**"Open with And / Or / So, and use casual intensifiers" (2026-06-17).** His own edits added
"And given the costs…", "Or making rookie mistakes…", "which things must absolutely be correct
and perfect." Words like "rookie" and "absolutely" are named as his register. **Zero of 39
LinkedIn posts open this way.** This is the single most direct written instruction toward
informal register in the whole voice authority, and the corpus ignores it completely.

**"More direct, less crafted" (2026-06-19).** When a transition sounded composed he asked to
"rephrase to be more direct" and to "give it some flare," which the file glosses as "sharper
and plainer at once, not ornate."

**The preamble rule, given twice (2026-07-08 and 2026-07-20).** "I notice you do that a lot
when writing I dont like these like preambles I prefer to just get straight into it." The
mechanical test: delete the first sentence of a paragraph; if it's the same or stronger, it
was a preamble. **The tidy closing takeaway is the exact mirror-image fault.** A preamble is a
sentence whose only job is to tell the reader the *next* sentence matters. A takeaway close is
a sentence whose only job is to tell the reader the *previous* one did. Nick has objected to
the first form twice in writing; nobody ever generalised the rule backwards to the ending.
That generalisation is the finding to act on.

**"He wants the reaction shown, not announced" (2026-07-20).** "He is happy being opinionated
in the first person; what he cuts is telling the reader he is about to be." The right move is
therefore *not* to strip opinion from the posts. It is to let the selection of facts carry it
and delete the sentence that spells it out.

**"One dry aside per piece."** Named as what makes him human. Present in roughly 3 of 39 posts.

**Two honest counter-signals, which should not be ignored:**

1. **"Bookend hard: the end rhymes with the beginning" (2026-06-19).** Nick asked for this
   explicitly, with a worked example. It is the opposite of a flat ending. It was, however, a
   note about a **long essay**, where a reader needs the landing; the repurposing skill
   already carves out the exception for LinkedIn ("no symmetric callback endings"). Worth
   keeping the two genres separate rather than pretending the note doesn't exist.
2. **"Audience first, and not coded for engineers" (2026-06-19).** He cut a first-person
   "I build throwaway apps" opener as "too techy coded," and pulled the angle toward owners and
   operators. So "story-first, first person" does **not** mean opening on Nick's build log. The
   pattern he endorsed: "Hook on the reader's world…, bring his expertise in at the turn." A
   story-first post should still open on something the reader recognises; Nick enters second.

---

## 6. Honest limits

- **4 of 39 posts have engagement data.** Everything else is a reading of the text. Nothing
  here establishes that flat endings perform better; it establishes that tidy endings are
  overwhelmingly what we ship, that the corpus's own experiment cannot credit them, and that
  the voice authority argues against them.
- **The 171,633-impression post is one post, in one week, on one news cycle.** The breakout
  report is candid that timing was part of it. Don't over-fit.
- **No saves, dwell, or comment-quality data exists anywhere in the repo.** The metric the
  reports say matters most (saves) has never been observed here.
- **The August shift is confounded.** Those batches changed length, sourcing method, angle
  selection and ending style at once. We can't separate which change did what.
- **My shape and ending classifications are judgement calls.** The boundary between "stated
  lesson" and "flat on a detail" is genuinely fuzzy in about four posts; the counts would move
  by two or three under a stricter reading. The 85%/15% split is robust to that.
