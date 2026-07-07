# Breakout vs. In-Network: Why One of Nick's Four Posts Reached 171k and Three Didn't

**Purpose.** The existing research (`audience-strategy`, `content-hooks`,
`linkedin-post-craft`) covers hooks, dwell time, saves, cadence, and formats — the
craft of earning solid **in-network** engagement. It deliberately downplays
"virality." This report covers the thing those three do not: **breakout reach** — how
a professional post escapes the author's immediate network and reaches 100k+ people
on LinkedIn's interest-graph feed — and it uses Nick's own natural experiment (four
posts, one story, wildly different reach) to explain it.

**The natural experiment.** Nick posted four LinkedIn posts about the *same* verified
event — CB Financial Services filing the first-ever SEC 8-K caused by an employee
running customer data (names, SSNs, DOBs) through an unapproved AI tool
(`raw/12`). Same author, same voice, same "first-ever cautionary tale" core.

| Post | Shape | Impressions | Reactions | Comments | Reposts |
|---|---|---|---|---|---|
| **A** | Narrative / news-shaped, ends on a question | **171,633** | 202 | 65 | 22 |
| B | Checklist ("five questions to ask") | 234 | — | — | — |
| C | Contrarian explainer ("banning AI loses sight of the risk") | 135 | — | — | — |
| D | Framework ("three rules") | single digits | — | — | — |

Post A broke out ~700-1,000x beyond the others. This report explains why, from
grounded research, and turns it into how-we-write / what-to-cover / how-to-discover
guidance — all inside the anti-hype guardrails.

> **Raw sources** live in `research/linkedin-breakout/raw/` (12 files). Every claim
> below traces to one. Folklore is flagged inline, matching the discipline of the
> existing reports. **Solid, citable tiers:** the peer-reviewed papers (Berger &
> Milkman 2012 `raw/01`; Chen & Berger 2013 `raw/06`; Brady 2017 + 2023 replication
> `raw/07`; Vosoughi 2018 `raw/08`; Akpinar & Berger 2017 `raw/09`; Robertson 2023
> `raw/05`) and the verified news facts (`raw/12`). **Directional/folklore:** the
> LinkedIn-mechanics percentages (`raw/10`, `raw/11`) — same caveats already logged
> in `audience-strategy/report.md` §2 and §7.

---

## How this report relates to the other three (extend, don't duplicate)

| Report | Owns | This report's relationship |
|---|---|---|
| `audience-strategy` | Funnel, cadence, algorithm baseline, formats, CTAs, saves | **Extends** its "high-performing posts are built for SAVES, not virality" line. That is right *for the baseline diet*; this report adds the missing second mode (breakout) and reconciles the two. |
| `content-hooks` | Hook psychology, the 10-category taxonomy | **Defers** on hook craft. Adds *why the same hook material reaches 200 vs 170,000 people* depending on the post's shareability structure, not its first line. |
| `linkedin-post-craft` | Post anatomy, expand-vs-atomize, save mechanics | **Extends** its Post-A/B/C batch model. That model optimizes each slice for standalone value; this report shows the A-slot (story) and the B/C/D-slots (checklist/framework) are playing *different reach games*, and that's expected, not a failure. |

The single reconciliation this report owes the others: **they are not wrong to
optimize for saves.** Saves are the right target for the *weekly baseline*. Breakout
is a *different, rarer* play that needs a different content shape and a live news peg.
You cannot make every post a breakout, and you shouldn't try (§4, §5).

---

## 1. In-network engagement and breakout reach are two different games

They run on different signals, reward different content, and should be measured
differently. Conflating them is why the B/C/D posts "failed" — they were actually
fine *save-game* posts that happened to be measured against a *breakout-game* winner.

### The in-network (save) game
- **Signal:** dwell time + saves + meaningful comments from people who already
  follow you or are one hop away (`audience-strategy` §2). Likes are the weakest
  signal (`raw/10`).
- **What wins:** dense, reusable, ICP-specific frameworks and checklists an executive
  screenshots (`linkedin-post-craft` §5). Narrow specificity is a *feature*: it
  triggers the "this is for me" response in exactly the right people
  (LinkedIn's own narrowcasting guide, `raw/11`).
- **Ceiling:** your network and its immediate interest-neighbors. Solid, compounding,
  converts — but bounded. A 234-impression checklist can still be the post that books
  a call, because the 234 are the right people.

### The breakout game
- **Signal:** early engagement from the initial sample, then — the actual escape
  hatch — **engagement from STRANGERS (2nd/3rd-degree)**, which a 2026 practitioner
  consensus weights ~3x a first-degree interaction (`raw/10`, folklore magnitude,
  solid direction). Stranger comments/reshares tell the algorithm "this travels
  beyond his bubble."
- **What wins:** content with a **large addressable pool** (many people can see
  themselves in it) × **high emotional arousal** × ideally a **live news peg** (§2).
- **Mechanism:** LinkedIn's **Relationship-Graph → Interest-Graph** shift
  (`audience-strategy` §2; `raw/10`). Distribution is decoupled from who-knows-you and
  routed by topic/interest match. A post shown to a small % of your network expands to
  2nd/3rd-degree and topic-followers if the early signal is strong, and strong posts
  keep resurfacing for **2-3 weeks** (`raw/10`) — the compounding that turns a good
  start into 171k.

**Why optimizing for saves ≠ optimizing for breakout.** A save is a *private,
individual utility* act ("I'll use this later"). A breakout is powered by *public,
identity-signaling* acts — reshares and stranger-comments — because on LinkedIn people
act under their real names, and what they reshare/comment is a statement about who
they are (NYT "Psychology of Sharing": **68% share to signal identity**, `raw/03`).
A checklist is eminently *save-able* and almost un-*reshare-able*: saving it is useful,
but resharing "5 questions to ask before approving an AI tool" says nothing flattering
about the resharer. A first-ever-SEC-filing story is the opposite — barely save-able,
eminently reshare-able, because resharing it lets a professional say *"this is the AI
risk I've been flagging."* Different act, different game.

---

## 2. The breakout ingredient list (ranked by evidence strength)

Each ingredient with its source and a folklore flag where due. Ranked strongest-
evidence first.

### Tier 1 — Peer-reviewed, replicated, causal-or-near-causal

**1. High-AROUSAL emotion (awe, anger, anxiety, surprise) — not just "emotion."**
Berger & Milkman 2012 (`raw/01`): analyzing ~7,000 NYT articles, high-arousal
*activating* emotion drove sharing; low-arousal *deactivating* emotion (sadness,
contentment) *suppressed* it — and this held **controlling for practical utility**.
Berger 2011 showed arousal is *causal*. This is the single best-evidenced driver.
→ Post A runs on anxiety + surprise ("an 8-K over a chatbot?"). A checklist runs on
zero arousal.

**2. Novelty / being genuinely FIRST.** Vosoughi et al. 2018, *Science* (`raw/08`):
across 126k cascades, the diffusion advantage of viral content traced to **novelty and
surprise** — we gain status by spreading novel "inside" information. The uncomfortable
finding (false news spread 70% more) has an honest flip side: *truth's usual
disadvantage is that it's rarely novel.* A verified **first-of-its-kind** real event
neutralizes that — it is maximally novel AND true. This is the most important
reconciliation of "virality favors lies" with an honesty brand: **compete on true
novelty.**

**3. Moral-emotional framing (accountability, fairness, breach of trust).** Brady et
al. 2017 (`raw/07`), replicated at N≈4.8M in 2023: each moral-emotional word raised
sharing ~13-20%. The *combination* of moral + emotional is the engine, not either
alone. → "A bank exposed ordinary customers' SSNs; who was accountable?" is moral
(fairness/trust) fused with emotion (anxiety/indignation). **Caveat:** the effect is
*bounded by shared group identity* — it spreads within a values-community, not
universally — and the brand must use the mild universal frame (protect customers,
be accountable), never partisan outrage (the outgroup-animosity engine that fuels the
ugliest viral content).

**4. Moderate — not high — controversy / a comfortably answerable question.** Chen &
Berger 2013 (`raw/06`): inverted-U. Moderate controversy maximizes conversation; high
controversy *suppresses* it because it creates discomfort — **and identity disclosure
(posting under your real name, i.e. all of LinkedIn) sharply amplifies that
avoidance.** → Post A's close, "who decided what it was allowed to see?", is the
productive version: a low-risk, identity-safe question a stranger *wants* to answer
publicly because answering makes them look thoughtful. This is also why comment count
(65) was high — the question manufactured safe, on-topic disagreement, and stranger
comments are the breakout signal (§1).

### Tier 2 — Well-established frameworks + a rigorous consumption study

**5. STEPPS shareability (Berger, *Contagious*).** `raw/02`. Post A hits 4 of 6 —
**Stories** (narrative), **Emotion** (high-arousal), **Social currency** (resharing it
signals you're on top of AI risk), **Practical value** (a real governance lesson). The
checklist hits 1 (Practical value) — the least activating. STEPPS predicts the gap.
Berger's **Trojan Horse** rule matters for the brand: the more a post reads as a
pitch/product, the less it's shared — so the *story* travels where the *framework*
(which reads like a deliverable) does not.

**6. Newsjacking — riding a breaking, first-of-kind event (David Meerman Scott).**
`raw/04`. Attention and *demand* spike when news breaks and "reporters and buyers are
looking for experts to comment." Timing + a legitimate expert take = reach the same
idea can't get once it's evergreen. Post A was a newsjack; B/C/D were timeless how-to
with no news wave to ride. **Guardrail (Scott's own):** a *legitimate* take on a
*relevant* story — never opportunistic disaster-jacking.

**7. Broad addressability / relatability ("this could be us").** `raw/11`. Breakout
needs a *large pool of people who can see themselves in the post*. Every org has
employees quietly using AI tools; every leader fears a compliance surprise. A
governance checklist's addressable pool is "people responsible for AI governance" — a
fraction of the size. LinkedIn's own guide: broad topics break out easily; niche
topics reach the right people but rarely break out. **This is a trade-off, not a
ranking** (see §4).

**8. Negativity/risk framing drives the CLICK (with a hard guardrail).** Robertson et
al. 2023, *Nature Human Behaviour* (`raw/05`): in a causal A/B dataset of 105k
headlines, each negative word raised click-through ~2.3%; positive words *lowered* it.
**But note the split:** that study measured *consumption* (clicking), and found
*sadness* worked best — whereas *sharing* (Berger) needs *high-arousal* negativity
(anxiety/anger), and sadness *suppresses* sharing. So risk/negative framing helps you
win attention; *anxiety/surprise* (not sadness) is what converts that attention into
the reshare. A cautionary-tale genre naturally pairs both. **Guardrail:** the authors
themselves warn negativity-optimization "spreads doomsday thinking and erodes trust" —
for an anti-hype brand this is the most dangerous temptation the data creates (§5).

### The multiplier, not a separate ingredient: **shares/reshares as the breakout act**
Across Twitter/Facebook research (`raw/01`, `raw/07`, `raw/08`) the reshare is *the*
breakout mechanic, and its psychology is **identity/social currency** (`raw/02`,
`raw/03`). **Honest LinkedIn-specific nuance:** 2026 practitioner data (`raw/10`) puts
*comments* at least level with *reshares* as the expansion signal, and some sources
rank reshares below saves. So on LinkedIn the "breakout act" is really **stranger
comments + reshares together**, both driven by the same identity motive. Post A earned
65 comments and 22 reposts; the checklist earned neither. [Folklore flag: exact
signal-weightings are vendor lore; the direction — beyond-network public engagement
expands reach — is solid.]

---

## 3. Applied diagnosis: why A broke out and B/C/D didn't

Same fact, four containers. The container decided the reach. Going ingredient by
ingredient (§2):

**Post A — narrative / news-shaped ("A US bank just filed an SEC disclosure because
an employee used the wrong AI tool. No hacker. No breach. Just someone trying to move
a little faster." → "who decided what it was allowed to see?")**
- **News peg / novelty (`raw/04`, `raw/08`):** led with the breaking, first-ever event
  itself. Rode the wave; maximally novel-and-true.
- **Arousal (`raw/01`):** anxiety + surprise, high-arousal/activating. "No hacker. No
  breach. Just someone trying to move faster" is a small horror story — the threat is
  *ordinary behavior*, which is what makes it travel.
- **Broad addressability (`raw/11`):** "an employee trying to move a little faster" is
  every company. The pool that can think "this could be us" is enormous.
- **Moral-emotional (`raw/07`):** accountability/trust frame baked in.
- **Moderate, answerable question (`raw/06`):** "who decided what it was allowed to
  see?" invites a safe, identity-flattering public opinion → 65 comments, incl.
  strangers → the breakout signal (§1).
- **Story (STEPPS, `raw/02`):** a narrative, not a deliverable — reshare-able, and the
  reshare carries Nick's actual thesis (valuable virality, `raw/09`).
- **Result:** big addressable pool × high arousal × live news peg × safe question =
  the legitimate breakout LinkedIn's 2026 algorithm still rewards (`raw/10`).

**Post B — checklist ("make whoever wants it answer these five questions"), 234
impressions.**
- Pure **practical value** (1 of 6 STEPPS), zero arousal (`raw/01`), no news peg
  (`raw/04`), no story (`raw/02`). Narrow addressable pool (people who approve AI
  tools). Reshaping it as a *thing to do* makes it **save-able, not reshare-able** —
  and saving doesn't expand reach the way stranger-resharing does (§1). This is a
  *good save-game post* mismeasured against a breakout. Its natural home is the
  weekly baseline, or a carousel in the ICP niche.

**Post C — contrarian explainer ("Ban AI at work and you do not remove the risk. You
lose sight of it."), 135 impressions.**
- A genuine, defensible position — but delivered as a **flat assertion**, not an
  **open, answerable question**. Chen & Berger (`raw/06`): stating a debate ≠ inviting
  one; on a real-name network, a bald contrarian claim invites *reading*, not
  identity-safe *commenting*. It also dropped the news peg and the concrete story, so
  arousal and novelty fell away. It's an idea, not an event.

**Post D — framework ("three rules keep it from turning into a data leak"),
single-digit reactions.**
- Same failure as B, more so: a **deliverable-shaped** post (Trojan-Horse-inverted —
  it reads like a product), no story, no arousal, no news peg, smallest addressable
  pool, least reshare-able. Frameworks are the *deepest* save-game format and the
  *weakest* breakout format.

**How much was luck/timing? Be honest: some.** Newsjacking is intrinsically
timing-dependent (`raw/04`) — the same Post A a month later, after the story saturated,
would reach far less. Early-engagement variance in the golden hour is real, and no
single post's exact number is reproducible. **But the pattern is not luck.** The one
post with the breakout *structure* broke out; the three without it didn't. You cannot
guarantee a 171k, but you can reliably tell *which* of four drafts is the breakout
candidate — and that is the usable finding.

---

## 4. Implications A — how to WRITE LinkedIn posts

**The core reframe: two post modes, deliberately mixed.** Stop treating B/C/D as
underperformers. They are **baseline (save-game)** posts; A is a **spike
(breakout-game)** post. A healthy feed is mostly baseline with occasional spikes —
you can't manufacture a genuine news peg every week, and a feed of nothing but
breakout attempts becomes the fear-merchant the brand rejects (§5).

**Recommended mix (extends `linkedin-post-craft` §7's A/B/C/D batch):**
- **Baseline (~3 of every 4 posts): niche, save-worthy, ICP-specific.** Checklists,
  frameworks, teardowns, named case studies. Compounds topic authority (which
  LinkedIn's 2026 interest-graph rewards, `raw/10`). This is the existing craft
  report's home turf — keep it exactly as is. *Measure by saves + meaningful comments
  + profile clicks, NOT impressions.*
- **Spike (~1 of every 4, or whenever a real news peg lands): the breakout shape.**
  Reserve this for genuinely novel, named, first-of-kind events in the lane.
  *Measure by impressions + reshares + stranger-comments.*

**The breakout-shape checklist (when you have a real news peg, build the post to hit
these — all sourced in §2):**
1. **Lead with the event, not the lesson.** News peg first (`raw/04`). "A US bank just
   filed an SEC disclosure because an employee used the wrong AI tool."
2. **Make it a story, not a deliverable** (`raw/02`, `raw/09`). Narrative container;
   the lesson rides inside it so every reshare carries the brand's thesis.
3. **Keep arousal high and honest** (`raw/01`): anxiety/surprise from *real* stakes —
   never manufactured. "No hacker. No breach" is high-arousal *and* true.
4. **Maximize addressability** (`raw/11`): frame so the widest honest pool thinks
   "this could be us" ("an employee trying to move faster"), then let the ICP
   self-select in the comments.
5. **Close on a moderate, answerable question** (`raw/06`), not a flat hot take —
   one a stranger can answer safely and look good doing so.
6. **Carry a mild, universal moral frame** (`raw/07`): accountability, trust,
   protecting customers — never partisan outrage.
7. **Post it fast, in the timing window** (`raw/04`, `audience-strategy` golden-hour),
   and be in the comments in the first hour — stranger-comments are the escape signal.

**What NOT to change:** everything in `content-hooks` and `linkedin-post-craft` about
honesty, specificity, banned hype words, no engagement-bait, saves-first baseline.
Breakout is an *addition* to that craft, gated by a real news peg — not a license to
bait. (Reinforced by `raw/10`: LinkedIn's 2026 model specifically demotes bait/rage
and rewards the *legitimate* high-value breakout. The honest version is also the
algorithmically-favored one.)

---

## 5. Implications B — what to FOCUS the newsletter on

**Yes — the breakout signal argues for more named-incident, cautionary-tale,
news-pegged stories in the essay/newsletter spine.** The reasons are sourced, not a
vibe: named incidents supply novelty (`raw/08`), high-arousal stakes (`raw/01`), a
moral frame (`raw/07`), and broad addressability (`raw/11`) — and because the essay IS
the newsletter issue AND the LinkedIn source (per project `CLAUDE.md`), a
news-pegged essay *feeds* a breakout Post A instead of forcing one to be invented at
repurposing time. The current library already leans this way (`research/case-studies/`,
`content-discovery` skill) — this is a *sharpening*, not a pivot.

**But the honesty guardrails are non-negotiable, because this is exactly where an
anti-hype brand can rot into a fear feed:**
- **Rotate the emotional register.** Berger & Milkman (`raw/01`): **AWE** (positive,
  high-arousal) travels as well as anxiety. A feed of nothing but "here's the latest
  AI disaster" is doom-mongering — the Robertson negativity trap (`raw/05`) the
  authors themselves warn erodes trust. Pair cautionary tales with awe-shaped wins
  (a genuinely impressive, honest applied-AI result) so the brand is "the person who
  tells you the truth," not "the person who scares you weekly."
- **Every cautionary tale must pay off constructively.** The arousal earns the read;
  the *value* has to be a calm, specific, do-this-instead lesson — not catastrophizing.
  This is the anti-hype version of the fear driver: name the real risk proportionately
  (as `content-hooks` §D already mandates), then de-escalate with judgment.
- **Valuable virality, always** (`raw/09`): never bolt an anti-hype lesson onto an
  unrelated shocking hook. The true, surprising incident must *be* the lesson, so the
  breakout carries Nick's worldview (governance, "the AI is the last step"), not just
  a jolt. A breakout that teaches 170k people nothing about what Nick stands for is a
  vanity metric.
- **Mild moral frame only** (`raw/07`): accountability and protecting customers —
  never outrage/partisan framing, even though it would spread further. That line is
  the brand.

Net: the newsletter should actively *cover* named, novel, first-of-kind
regulatory/legal/incident stories in applied AI — and treat each as a chance to model
*calm, accountable judgment about a scary thing*, which is the most on-brand possible
use of the breakout genre.

---

## 6. Implications C — how the DISCOVERY process should change

Make breakout potential a *first-class, scored dimension* of the `content-discovery`
skill, so the pipeline actively hunts the events that can spike — not just the deep
cuts that make good baseline essays.

**Concrete changes to `content-discovery`:**
1. **Add a standing "named-incident / first-of-kind" hunt.** Actively monitor for:
   - **First-of-kind events** (novelty, `raw/08`): "first SEC filing / first lawsuit /
     first regulation / first fine / first board resignation caused by AI…" These are
     the highest-value breakout pegs because true novelty is the scarce, honest
     substitute for bait.
   - **Named-company AI incidents** (specificity + addressability, `raw/11`, `raw/12`):
     a real company, real names, real stakes. Sources: SEC EDGAR 8-K filings (Item
     1.05), regulator actions (FTC, state AGs, banking regulators), court dockets,
     trade press (American Banker, law-firm client alerts like WSGR, Forbes
     governance columns) — exactly where the CB Financial story surfaced (`raw/12`).
   - **Breaking regulatory/legal/SEC actions** in the lane, while they're still
     breaking (newsjacking window, `raw/04`).
2. **Tag every candidate with a Breakout-Potential score** alongside the existing
   relevance/non-obviousness/opinion-strength scores. Score each candidate on the §2
   ingredients it can plausibly hit:
   - Is it genuinely FIRST / novel? (`raw/08`)
   - Named, concrete, verifiable? (`raw/12`)
   - High-arousal stakes (anxiety/awe/surprise), honestly? (`raw/01`)
   - Broad addressability ("could be us" for a wide pool)? (`raw/11`)
   - A mild moral/accountability frame? (`raw/07`)
   - A safe, answerable question it hands the reader? (`raw/06`)
   - Is it TIMELY right now (news wave still cresting)? (`raw/04`)
   A candidate hitting most of these is a **spike candidate** (write it as a
   news-shaped essay + a breakout Post A, fast). A candidate that's deep and useful
   but hits few is a **baseline candidate** (excellent save-game essay; don't force a
   breakout frame on it).
3. **Prioritize timeliness for spike candidates.** Baseline essays can wait in the
   queue; a news-pegged spike essay decays (`raw/04`) — flag it for fast-track so the
   newsjacking window isn't missed. (Mechanically compatible with the specific-date
   publish path in `CLAUDE.md`.)
4. **Keep the honesty filter first.** A candidate that only scores high on
   arousal/fear but is thin on real, checkable substance is a *reject*, not a spike —
   that's the bait the brand bans (`raw/05` guardrail; `content-hooks` AVOID list).

---

## 7. Anti-hype guardrails (every recommendation must pass these)

The breakout research is a loaded gun for a brand whose wedge is honesty. The
guardrails, each tied to where breakout tactics tempt toward bait and the honest
version to use instead:

| Breakout temptation | Why it's tempting | The honest version (and source) |
|---|---|---|
| Manufacture fear / doom | Negativity wins the click (`raw/05`) | Use *real* risk proportionately; always pay off with calm, specific judgment. Rotate in AWE/wins (`raw/01`) so the feed isn't a fear machine. |
| Exaggerate novelty ("SHOCKING first-ever…") | Novelty drives spread (`raw/08`) | Let the *genuinely* first/novel real event speak plainly. If it's not actually first, don't claim it is. |
| Manufacture high controversy / outrage | Feels like it'll drive comments | High controversy *suppresses* reach on a real-name network (`raw/06`); moral outrage poisons the brand (`raw/07`). Use moderate, answerable tension + mild universal moral frame. |
| Bolt a hot hook onto an unrelated lesson | Easy reach | Valuable virality (`raw/09`): the true incident must BE the lesson, or the reach teaches nobody who you are. |
| Chase breakout every week | 171k is addictive | You can't fake a news peg; forcing it produces bait. ~3:1 baseline:spike (§4). Most weeks, the save-game *is* the job. |
| Engagement-bait the question | Comments = reach | The question must be genuinely answerable and identity-safe, never "comment YES" (`content-hooks` AVOID; `raw/10`: LinkedIn 2026 demotes bait). |

**The reassuring finding, and the note to end on:** the anti-hype path and the
breakout path are *not* opposed. LinkedIn's 2026 direction specifically demotes cheap
virality (bait, rage, empty motivation) and rewards *legitimate* high-value breakout
(`raw/10`). Post A broke out precisely because it was true, novel, specific, and
substantive — the honest version. The brand doesn't have to choose between reach and
integrity here. It has to do the harder thing: hunt for genuinely novel, named, true
events, tell them as calm stories that carry a real lesson, and let the honest version
travel.

---

## 8. The one-paragraph version

In-network engagement (saves, dwell, first-degree comments) and breakout reach
(stranger-reshares/comments on the interest graph) are two different games; the
existing reports optimize the first, and they're right to for the weekly baseline.
Breakout is a rarer, different shape: a **large addressable pool** × **high-arousal
honest emotion** × a **live, novel news peg**, told as a **story** that hands the
reader a **safe, answerable question** and carries a **mild moral frame**. Post A had
all of that (first-ever SEC 8-K, "could be us," anxiety+surprise, "who decided what it
was allowed to see?"); B/C/D took the same fact and made it a checklist, a hot take,
and a framework — save-game shapes with small pools, no arousal, and no news wave, so
they stayed in-network. The move for nmajor.com: keep the save-worthy niche baseline
(~3 of 4 posts), and reserve the breakout shape for genuinely novel, named,
first-of-kind incidents the discovery process should now actively hunt and score —
always paying the arousal off with calm, accountable, brand-carrying judgment, never
fear for its own sake.
