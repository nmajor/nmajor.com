# Content Hooks — Working Report

**Purpose:** A practical, directly-usable guide for writing more compelling hooks for
LinkedIn posts and newsletter subject lines / article ledes at The Institute of Applied
Artificial Intelligence — and for designing an AI pipeline step that generates 3–5 good,
distinct, on-voice hook options to pick from.

**Brand frame (read this first):** This is an anti-hype brand. The house voice bans
clickbait, hype words (unlock, leverage, transform, supercharge, game-changer, etc.),
em dashes, "It's not X, it's Y", the rule-of-three reflex, and fake-significance tails.
The audience is busy, skeptical decision-makers (CTOs, founders, operators) who have read
enough hype for a lifetime. So every technique below is tagged **ON-BRAND** (honest,
specific, credible — safe to use) or **AVOID** (clickbait / hype / engagement-bait /
manipulation — and why it burns trust). The single most valuable thing this report does is
separate durable hook craft from the clickbait that dominates most "hook" advice online.

> Raw sources live in `research/content-hooks/raw/` (32 files). This report is a synthesis
> of them and is fully re-readable against and regenerable from those raw inputs, per the
> repo's research pattern.

---

## 1. The big picture: what actually makes a hook work

A hook's only job is to earn the next sentence. Joseph Sugarman: "the sole purpose of the
first sentence is to get the reader to read the second sentence" (the "slippery slide").
John Caples: "The success of an entire advertising campaign may stand or fall on what is
said in the headlines." Ogilvy's most-cited figure: "On the average, five times as many
people read the headline as read the body copy. When you have written your headline, you
have spent eighty cents out of your dollar."

There are five durable principles underneath every honest hook. All five happen to be the
anti-hype principles, which is the central, lucky finding of this research: the honest move
and the effective move are the same move.

### A. The curiosity gap — done honestly (Loewenstein, 1994)
George Loewenstein, *The Psychology of Curiosity* (Psychological Bulletin, 116(1), 75–98,
1994). Curiosity is "a cognitively induced deprivation that arises from the perception of a
gap in knowledge and understanding." It works like a drive state (hunger): a gap creates an
aversive feeling that motivates closing it.

The critical mechanics for hooks:
- **Complete ignorance does not produce curiosity; partial knowledge that reveals a
  specific gap does.** "A small amount of information serves as a priming dose that greatly
  increases curiosity." You can't make someone curious about something they can't conceive
  of — you must give them enough to feel the specific thing they don't know.
- The gap must feel **bounded and closeable** ("I'm 90% there, I just need the last
  piece"). Kang et al. (2009, "The Wick in the Candle of Learning," *Psychological
  Science*): curiosity peaks at *intermediate* confidence (feeling close to knowing but
  not), activates reward circuitry, and improves memory of the answer. The "almost-know"
  sweet spot.
- **The reader must already care about the domain.** The gap must touch a question they
  already hold.
- Golman & Loewenstein (2016) is the warning: information gaps can also produce frustration
  and aversion. A manufactured or unresolved gap backfires. **This is the academic basis
  for why clickbait erodes trust:** it exploits the deprivation drive but never closes the
  gap honestly.

Honest rule of thumb: **open a gap you will genuinely close, that a smart reader actually
has, stated specifically.** Related: the Zeigarnik effect (Bluma Zeigarnik, 1927) — people
remember unfinished tasks better than finished ones; an open loop creates tension that
demands closure. The narrative version of the same mechanism. (Caples' "They Laughed When I
Sat Down at the Piano... But When I Started to Play!" is the canonical open loop.)

### B. Specificity / concreteness (the most anti-hype-compatible principle there is)
- Caples: "Specifics sell better than generalities." Tested: "Lose 10 pounds in 30 days"
  beats "Lose weight fast." The specific number is both more believable and more
  compelling.
- Ogilvy's Rolls-Royce headline: "At 60 miles an hour the loudest noise in this new
  Rolls-Royce comes from the electric clock." One concrete fact outsells any superlative;
  the detail *is* the proof.
- Heath & Heath, *Made to Stick* (2007): "concrete details don't just lend credibility to
  the authorities who provide them; they lend credibility to the idea itself." They name
  the "curse of knowledge" — experts communicate in abstractions the audience can't grasp;
  the cure is concreteness. (Directly relevant for a technical/expert brand.)
- The principle stated plainly: a superlative ("revolutionary," "world's best,"
  "game-changing") asks a skeptic to trust a vague claim, which they discount to zero. A
  specific checkable fact ("cut inference cost 37% by quantizing to int8") supplies its own
  evidence and survives scrutiny. **Vague words signal you have nothing concrete; specifics
  signal you actually did the thing.**
- The nuance (from the honest-curiosity research): an analysis of thousands of randomized
  headline experiments found *more than half of headlines fail because they are too
  concrete* — they resolve the gap and leave nothing to be curious about. So the craft is:
  **be specific about the setup/stakes, withhold the resolution/lesson.** "Specific enough
  to matter, vague enough to intrigue."

### C. Real stakes and real numbers
PAS (Problem–Agitate–Solve), popularized by Dan Kennedy, works because of loss aversion
(Kahneman & Tversky): people fear loss more than they want equivalent gain. Naming the
reader's real pain precisely creates recognition ("they get me"). For this brand: name the
pain honestly and proportionately; never fear-monger or over-agitate. Use business outcomes
(revenue, KPIs, real budgets) over generic benefits.

### D. A genuine position
Hooks that stake out a real, reasoned, defensible view outperform safe summaries — but only
if the position is genuinely held and argued, not flamebait. Kirsten Powers: "There is no
way to be an interesting writer, thinker, or anything really and please everyone." The
trap: the contrarian "It's not X, it's Y" / "Most advice is dead wrong" reflex, which is
both a banned brand pattern and empty when there's no real argument under it.

### E. Audience-awareness (Schwartz)
Eugene Schwartz, *Breakthrough Advertising* (1966). The most-quoted idea: **"Copy cannot
create desire... It can only take the hopes, dreams, fears and desires that already exist
in the hearts of millions of people, and focus those already existing desires onto a
particular product."** The hook channels a desire the reader already has; it does not
manufacture excitement. (Gary Halbert's "starving crowd" is the same point: find real,
demonstrated demand; don't try to invent it.)

Schwartz's **5 Stages of Awareness** determine how directly you can open:
1. Unaware → must use story/indirection to even raise the issue.
2. Problem-aware → name the pain precisely.
3. Solution-aware → differentiate your mechanism.
4. Product-aware → lead with proof and specifics.
5. Most-aware → lead with the offer directly.
Rule: "The more aware your prospect, the more direct your headline can be. The less aware,
the more you must lead with story, intrigue, or the problem."

Schwartz's **5 Stages of Market Sophistication** (how tired the market is of the claims)
matter for an AI audience drowning in hype: by stage 3, the audience is numb to bigger
claims and you must lead with a **new mechanism** — a genuinely new explanation of *why*
something works, not a louder claim. By stage 5, lead with **identification** (who the
reader is). For a jaded expert audience, "new real mechanism" is the credible move.

### Stats to keep (with sources) — and folklore to flag

Credible / sourced:
- **LinkedIn "see more" cutoff:** ~210 characters desktop, ~140 mobile (varies by
  device/app version; some sources say desktop up to ~250 and mobile ~210). Hard post limit
  3,000 chars. (Repeatedly confirmed platform mechanic.)
- **LinkedIn length sweet spot:** 1,301–2,500 characters generates highest engagement
  (~2.61–2.67% median), "27% higher engagement than posts under 400 characters." Source:
  AuthoredUp analysis of 372,126 posts, Sep 2025–Feb 2026 (named tool, stated sample/window
  — relatively credible vendor data).
- **Subject-line length:** Retention Science study of 260M+ emails across 540 campaigns —
  6–10 words gives the highest open rate (21%), vs 16% for ≤5 words, 14% for 11–15.
  Reported via MarTech. Note most phones display only ~5–6 words, so front-load meaning.
- **Conflicting length advice (reconcile, don't pick one):** Campaign Monitor says 3–5
  words / 17–24 chars; VerticalResponse says 3–7 words / under 50 chars ("under 50 chars
  achieve 56% open rates"); Axios HQ (Smart Brevity, 69,000+ internal emails, 700+ orgs,
  Jun 2022–Aug 2024) says 3–6 words / 31–49 chars. Resolution: **keep it short (under
  ~50–60 chars), 6–10 words is a defensible sweet spot, and front-load the meaning because
  mobile truncates to ~5–6 words.**
- **Subject-line accuracy matters for deliverability AND trust:** ~30.4% of subscribers
  would opt out of emails whose subject lines didn't match the content (attributed to a
  2022 Gartner study via MarTech). 69% of recipients have reported email as spam after
  reading the subject line (Invesp, 2021). Misleading subjects raise spam complaints and
  harm sender reputation/deliverability (Benchmark, MarTech).
- **Perkbox A/B test (via Kayla Medica, Substack):** funny/clickbait subject won the
  *open* rate; the corporate/straightforward subject won *click-through* and *conversion*
  (redemption). The honest line won the metrics that matter. Caveat the source gives:
  "every audience is unique... never assume the result."
- **Axios HQ finding worth noting:** the *absence* of a question mark made a statistically
  significant positive difference in opens for their professional audience — which cuts
  against the generic "questions boost opens" advice and aligns with a skeptical-operator
  audience.
- **Curiosity peaks at intermediate confidence** (Kang et al., 2009, fMRI).

Folklore / treat as directional only (flag if cited):
- **"340% more engagement from strong hooks"** — repeated across SEO blogs with no
  traceable primary source. Marketing folklore.
- **LinkedIn 2026 "Depth Score," "60% engagement-bait penalty," "VP of Product briefing"**
  — directionally consistent across many marketing/SEO blogs but NOT from LinkedIn's
  official engineering. Treat exact figures as estimates; the *direction* (dwell time up,
  engagement-bait down) is well-supported.
- **"-20% drop for two-line hooks"** (Jasmin Alić) — single-practitioner claim, not a
  study. Useful, not gospel.
- **Round unsourced percentages** in example hooks ("90% of consumers...", "75% of
  professionals...", "92% of B2B buyers...") — read as fabricated to a data-literate
  audience unless they are the writer's own real numbers or properly cited.
- **Open-rate figures in formula listicles** (Balistro's "28.3% for questions" etc.) —
  single-source vendor averages; directional only.
- **"56% open rate from emojis"** (Campaign Monitor / OptinMonster) — off-brand regardless;
  emojis read as manufactured emphasis here.
- **Caples' "80% of readers read only the headline"** — commonly cited from the book, exact
  figure is approximate/oft-paraphrased.

---

## 2. LinkedIn hooks

### Mechanics (the load-bearing facts)
- **The hook is everything visible above "see more":** ~210 chars desktop, ~140 mobile.
  "Your first 210 characters decide whether anyone reads the rest." Front-load the most
  compelling content before the fold.
- **Dwell time is now the dominant ranking signal**, weighted far above likes (cited
  correlation 15.6% vs 1.2%; posts with 61+ sec dwell ~15.6% engagement, 0–3 sec ~1.2%).
  Most reach is set in the first ~90 minutes. **Implication: a hook's job is to buy reading
  time, not bait a reaction.** This is structurally on-brand.
- **Engagement bait is now penalized** ("Comment YES if you agree," reaction polls,
  "swipe for more" carousels that deliver platitudes). External links also downranked. The
  platform now rewards the honest, specific opener and punishes clickbait. (Exact penalty
  percentages are blog-sourced estimates; direction is solid.)
- **Line length:** keep the hook to one line. Jasmin Alić: write the whole post idea in the
  first ~3 lines (LinkedIn previews ~3 lines including blanks before "Read more"); a
  one-line hook leaves room for a second informative line in the preview, a two-line hook
  eats that space (he claims a ~20% engagement drop — practitioner claim). Optimal hook
  length cited as 5–15 words. Use deliberate line breaks + white space so the post looks
  like it continues.
- **The specificity contrast that captures the whole thesis** (verbatim from the algorithm
  research):
  - Downranked opener: "Content marketing is changing in 2026"
  - Rewarded opener: "We spent $23,000 on LinkedIn ads last quarter and generated exactly
    zero qualified leads"
  - "I spent $47,000 on a product launch that completely failed. Here's exactly what went
    wrong." → reportedly 10x normal reach; the same author's generic "5 tips for product
    launches" carousel barely broke 1,000 impressions.

### ON-BRAND LinkedIn hook categories (with real example templates)

Cross-confirmed across AuthoredUp, Grow With Ghost, Justin Welsh, Jasmin Alić, StrategyKiln
as the credible-for-skeptics set. Use the writer's OWN real numbers wherever a number
appears.

1. **Specific-result / outcome-first.** A concrete first-party number.
   - "I generated $1.5M in course sales in 2022 using a simple framework" (Justin Welsh —
     his own real figure).
   - "We spent $23,000 on LinkedIn ads last quarter and generated exactly zero qualified
     leads."
   - Trap: a round/unsourced number that isn't yours reads as fabricated.

2. **Confession / failure (real stakes).** First-person, vulnerable, true.
   - "I spent $47,000 on a product launch that completely failed. Here's exactly what went
     wrong."
   - "Yesterday, I lost a £100k deal because of one email."
   - "I'm terrible at networking. Here's how I compensate."
   - Trap: manufactured vulnerability or a "failure" that's actually a humblebrag.

3. **Reasoned contrarian / genuine position.** A real, defensible disagreement — argued,
   not shouted.
   - "Most LinkedIn advice is written by people who don't use LinkedIn."
   - Trap: the banned "It's not X, it's Y" / "Most advice is dead wrong" flamebait with no
     argument under it. (Grow With Ghost #1, #4, #6, #10 are exactly the banned pattern —
     do not copy that structure.)

4. **Surprising-but-real data.** Lead with a concrete finding, ideally your own analysis.
   - "I analysed 1,000 LinkedIn profiles. 87% made the same mistake." (only if you actually
     did)
   - "It takes 8 touchpoints to generate a qualified lead. Most stop at 2." (only if
     sourced)
   - Trap: unsourced round percentages; the data hook is the easiest to fake and the
     fastest to lose a data-literate reader.

5. **Direct, genuinely-answerable question (used sparingly).**
   - "What's the real cost of losing a customer?"
   - Avoid yes/no questions; ask one requiring real consideration. Note: for the
     newsletter/subject-line side, Axios data says skip the question mark for this audience
     — so prefer questions in the body of a post over the subject line.

6. **One-line story / in medias res.** Drop into the middle of a true scene.
   - "I watched a 22-year-old outsell our entire team. Here's how."
   - "The day I realised I was the problem, not the process."
   - Trap: the loop must close honestly in the body; a manufactured mystery is clickbait.

7. **Named example / timeline / before-after with real numbers.**
   - "Five years ago, I couldn't get a meeting. Now I book 20+ per month."
   - Trap: invented or inflated transformation.

8. **Plain-useful / "how to" with concrete scope.**
   - "How I gained 5,000 followers in 90 days by doing one thing differently."
   - Trap: vague "how to succeed" with no scope.

Welsh's structural note worth keeping: he's "extremely clear about the topic and benefit,
while adding a twist that sets up curiosity" — clarity + specificity first, curiosity
second. His "Trailer" has two jobs: break the scroll with line one, make each line earn the
next. StrategyKiln's B2B guidance maps cleanly to the brand: use business outcomes (revenue,
KPIs), name the role (CTO, founder, operator) to signal relevance, "temper hyperbole; use
phrases like 'made me question' instead of grand prophecies," "be prepared to source
claims," "think of your hook as a service to the reader."

### AVOID list for LinkedIn (and why it burns trust)
- **Engagement bait** ("Comment YES if you agree!", reaction polls) — now algorithmically
  penalized AND insults a skeptical reader.
- **Mystery / pure curiosity bait** ("What happened next took me completely by surprise,"
  "I discovered a strategy that felt like uncovering a secret society," "The 7-word phrase
  that ends every objection," "Number 4 cost me the most") — curiosity with no substance;
  the Golman & Loewenstein frustration-and-trust-loss failure mode.
- **Inspirational / empty motivation** ("Every setback is a setup for a comeback") — hype
  with no information.
- **Famous-quote openers** (Steve Jobs / Churchill / Disney) — generic, low credibility.
- **Social proof / FOMO / bandwagon** ("Millions are using X," "Join 10,000...") — reads as
  marketing.
- **Humorous gimmicks / puns** ("I asked Alexa for my tasks and she resigned") — gimmicky,
  off-voice.
- **The "It's not X, it's Y" contrarian structure** — explicitly banned brand pattern.
- **Unsourced round stats** ("90% of consumers...") — read as fabricated.
- **Em dash + rule-of-three drama** ("Leadership books won't make you a better
  leader—real-world experience will") — violates the em-dash and rule-of-three bans.
- **"Swipe for more" carousels promising insight, delivering platitudes** — now downranked.

---

## 3. Newsletter hooks

Two distinct surfaces: the **subject line** (gets the open) and the **lede / first 30
seconds** (keeps the reader). Plus **preview text** as a third lever.

### Subject lines — mechanics and data
- **Length:** short. Reconciled guidance — under ~50–60 chars; 6–10 words a defensible
  sweet spot; front-load meaning because phones show ~5–6 words. (Retention Science,
  Campaign Monitor, VerticalResponse, Axios HQ — see §1 for figures and the conflict.)
- **Sentence case, plain words.** "quick check-in on your March order," not Title Case or
  ALL CAPS. Sentence case reads like a person wrote it.
- **Specificity wins:** "Your Q1 content benchmarks are out" beats "This week's
  newsletter." Generic subjects consistently underperform. Concrete-outcome framing ("Cut
  reporting time from hours to minutes") beats abstract benefit.
- **Question marks:** for this professional/skeptical audience, Axios HQ found *no* question
  mark performed better. Default to statements, not questions, in the subject line.
- **Preview text** (Litmus): keep under ~90 chars but front-load the first ~40–50 (display
  ranges from ~278 chars down to 0). Make preview *complete or extend* the subject, never
  repeat it, and never let it auto-pull the first body line. Pattern: subject states the
  topic; preview adds the specific payoff or the one-line "why it matters."

### Subject lines — ON-BRAND patterns
- **Honest curiosity gap with specificity** (the strongest model): the gap is real,
  topical, and the email closes it.
  - "I was wrong about Facebook Ads" → for the brand: "Why our RAG eval scores dropped after
    the model upgrade," "What we got wrong about RAG."
  - "We tested this for 90 days — here's what happened" (drop the em dash for the brand).
- **Number/list with real, unhypey numbers** ("3 SEO fixes you can implement today" → use
  honest scope).
- **How-to with concrete scope** ("How to set up GA4 in 15 minutes").
- **Benefit-first** — Balistro flags this as "most sustainable long-term, building
  consistent trust." Keep it literal and specific.
- **Plain, human, relationship-style lines** (VerticalResponse — the single most
  brand-aligned source): "your 2025 pricing summary," "fyi on your Q2 report," "one question
  about your onboarding." Adapt the tone to content: "what we got wrong about RAG." These
  "signal a real person wrote them, not an automation tool."
- **The genuine "quick question."** A real one is fine; manipulative one-worders are not.

### Subject lines — AVOID (clickbait + deliverability + voice all at once)
- **Pure clickbait:** "You won't believe what's inside this email!", "This shocking news
  will change your life!", "You've won a prize – open to claim it now!" (Benchmark).
- **Deceptive framing** (MarTech's five categories): fake replies ("RE: Your pending
  order"), fake forwards ("FWD: $100 Credit"), fake errors ("FWD: Code Error"), false
  urgency resends ("Did you forget something?"), layered deception ("Fw: 50% OFF Code you
  requested"). The Perkbox "Oops, there's an error with your account" is exactly this — it
  won the open and lost the conversion. ~30.4% would opt out over subject/content mismatch.
- **Manufactured urgency/scarcity** ("Last 6 hours," "Only 12 spots left") unless the
  deadline is genuinely real. (Urgency posts higher opens but the sources warn of fatigue;
  it's the manipulative tactic this audience punishes.)
- **Emojis** — manufactured emphasis, off-voice (and the open-rate stats are folklore-grade
  for this audience).
- **Social-proof FOMO** ("Join 10,000 marketers...").
- **Spam/hype trigger words** (SpamAssassin list) — these hurt deliverability AND violate
  the brand voice simultaneously, so avoiding them is doubly correct: "Act Now," "URGENT,"
  "Click Here," "FREE," "Guarantee," "Risk-Free," "Double Your Income," "Best Price,"
  "Save Big," "Miracle," "Exclusive Deal," "Instant Access," "Unlimited," "Luxury," ALL
  CAPS, "!!!". (Note "invoice" appears in 13.2% of malicious emails — avoid even neutrally.)
- Even the "honest alternatives" some sources suggest ("Unlock Exclusive Insights") still
  use banned hype words — soften further.

### The lede / opening line (the next 30 seconds)
Once opened, the first sentence or two must establish what the piece is and pull the reader
in. Kirsten Powers: be clear, succinct, intriguing; "establish what the piece is about
within the first sentence or two." Common mistakes she names: dense opening paragraphs,
lengthy preambles about how you conceived the topic, hedging/over-qualification, burying the
premise under background.

Journalism discipline worth stealing: the **35-word lede test** — "Write your lead, then
count the words. If you're over 35, look for phrases you can trim." And: "Read it out
loud... If you stumble, your reader will stumble too." And the anti-bait rule at body level:
"Your lead should accurately reflect what the rest of the article covers."

ON-BRAND lede patterns (from dslx's 7 lead-ins, journalism leads, Newsletter Glue,
Morning Brew/Hustle structure):
- **Summary / direct-point lede** — state the key facts or the main point immediately. Best
  for busy operators. "Google is sunsetting third-party cookies in 2025, a shift that could
  upend how 60% of ad spend is tracked online." / Newsletter Glue's "Direct Main Point":
  dive into the point so the reader knows exactly what the email is about.
- **Clear benefit statement** — say what this is and who it's for, fast.
- **Anecdotal / first-person lede, tight** — open with a short, specific true story, then
  broaden. "1 detail > 5 generalizations." Emma Gannon's opener is a good model: "This
  Substack you're reading now, The Hyphen, accidentally turned into a 6-figure business
  last year." (specific, concrete, mildly surprising, no hype). Keep it short and tied to
  the point; the brand bans rambling.
- **Observational lede** — a fresh, true, gutsy observation. "Don't mistake vagueness for
  insight."
- **The zinger** — short and sharp, but "substance must follow; zingers without supporting
  material feel like clickbait." ("Your landing page reads like a hostage negotiation.")
- **Consistent summary line** — a low-risk repeating one-liner that sets expectations
  (Brain Food: "a weekly newsletter full of timeless insights"; Morning Brew's editor's
  note). Honest, repeatable structure.

AVOID for ledes:
- Slow wind-ups, journal-entry openings, "how I came to write this" preambles.
- Hedging / excessive qualification.
- The Scene Setter that never connects to substance; the zinger with nothing behind it.
- Morning Brew / Hustle's casual puns and "dude/damn" voice — the *structure* (one
  narrative idea in a real human voice, not a table of contents) transfers; the casual,
  hype-adjacent tone does not.

---

## 4. Consolidated HOOK CATEGORY TAXONOMY (for forcing variety)

This is the reusable list the generation step uses to force genuinely distinct options. For
each: name, when it fits, a credible example, and the trap. All are ON-BRAND when used as
described; the trap is what tips each into AVOID.

1. **Specific-result** — when you have a real first-party number/outcome.
   - "We spent $23,000 on LinkedIn ads last quarter and generated exactly zero qualified
     leads."
   - Trap: a round or borrowed number that isn't yours → reads fabricated.

2. **Confession / failure** — when there's a real, instructive mistake to own.
   - "I spent $47,000 on a product launch that completely failed. Here's exactly what went
     wrong."
   - Trap: humblebrag dressed as failure; manufactured vulnerability.

3. **Reasoned contrarian** — when you genuinely disagree with the consensus and can argue
   it.
   - "Most LinkedIn advice is written by people who don't use LinkedIn."
   - Trap: "It's not X, it's Y" / "everyone is wrong" flamebait with no argument (banned
     pattern).

4. **Surprising data / "I analysed N"** — when you have real, sourced or first-party data.
   - "I analysed 1,000 LinkedIn profiles. 87% made the same mistake."
   - Trap: unsourced round percentages.

5. **Direct question** — when the question exposes real tension and is genuinely
   answerable.
   - "What's the real cost of losing a customer?"
   - Trap: yes/no or obvious-answer questions; for subject lines, skip the question mark
     entirely (Axios).

6. **One-line story / in medias res** — when a true scene carries the idea.
   - "I watched a 22-year-old outsell our entire team. Here's how."
   - Trap: the loop must close honestly; no manufactured mystery.

7. **Named example** — when a specific, recognizable case proves the point.
   - "At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric
     clock." (the concrete detail as proof)
   - Trap: cherry-picked or misrepresented example.

8. **Plain-useful** — when the value is a clear, scoped how-to or takeaway.
   - "How to set up GA4 in 15 minutes."
   - Trap: vague "how to succeed" with no scope.

9. **Problem-named (PAS-lite)** — when naming the reader's exact pain creates recognition.
   - "Your email open rates are tanking. Is it your subject line, or your timing?" (state
     it plainly; for a subject line, drop the question mark).
   - Trap: over-agitation / fear-mongering.

10. **New-mechanism** — for a jaded expert audience: a genuinely new explanation of *why*
    something works (Schwartz sophistication stage 3).
    - "Why our RAG eval scores dropped after the model upgrade."
    - Trap: dressing an old idea as a "secret" or "weird trick."

Rule for the pipeline: **no two generated options may share a category.** Variety comes from
different angles, not paraphrases.

---

## 5. Prompting to generate 3–5 good, distinct, on-voice hooks

The reliable recipe stacks eight techniques. Sources: Anthropic and OpenAI official prompt
guides, Copyhackers, the anti-slop / persona / diversity research, and the LLM-as-judge
rubric sources.

### A. Ground every hook in the real source material
The #1 reliability lever for an honest brand: a hook can only be honest if it's grounded in
the source. Paste the actual brain dump / article / transcript at the **top** of the prompt
(Anthropic: longform data above the query can improve quality up to ~30%; OpenAI: reference
text reduces hallucination). Then make the model **quote/extract the concrete specifics
first**, and write hooks only from those.

> "Find quotes from [source] that are relevant to [task]. Place these in <quotes> tags.
> Then, based on these quotes, [do the task]." — Anthropic

Applied: "First, pull the 5 most concrete, specific, or surprising facts from the source
into `<facts>` tags (each fully supported by the source). Then write hooks grounded ONLY in
those facts." This is what stops generic, hallucinated openers.

### B. Name the failure mode + supply a banned-word list
Anthropic's own anti-slop guidance: models "tend to converge toward generic, 'on
distribution' outputs" — "AI slop." The fix is to **name that failure explicitly**, say
it's bad, list the specific clichés, and demand context-specific distinctiveness. The copy
equivalent:

> You tend to converge on generic, marketing-flavored openers. That is exactly wrong for
> this brand. Do not use hype words (revolutionary, game-changing, unleash, supercharge,
> transform, skyrocket, 10x, unlock, harness the power of, cutting-edge, seamless,
> effortless, powerful), clickbait patterns ("you won't believe," "this one trick," "here's
> the secret," "...will change everything," "X things that..."), filler openers ("In
> today's fast-paced world," "Imagine a world where"), em dashes, "It's not X, it's Y," or
> rule-of-three flourishes.

Important: models follow "do this" better than "don't do that." So **pair the banned list
with a positive target** ("plain, concrete, the way an honest engineer would say it") plus
examples, and have the model self-check against the banned list afterward (negative
constraints alone leak).

### C. Supply audience + voice precisely
Every missing constraint gets filled with the model's blandest prior. Give it:
- **Audience mindset:** "a skeptical technical decision-maker (CTO/founder/operator) who has
  seen every overstated AI pitch and instantly distrusts marketing language."
- **Voice (3–5 adjectives):** "plain, specific, skeptical, understated, honest — sounds like
  a sharp engineer talking straight, not a marketer."
- **Why** it matters (Anthropic: explaining the reason helps the model generalize): "hype
  words make this audience bounce, so avoid them."
- A perspective beats a costume: "Write hooks the way a skeptical staff engineer would phrase
  them" rather than a heavy persona.

### D. Few-shot with 3–5 diverse, labeled on-voice examples
"Examples are one of the most reliable ways to steer Claude's output format, tone, and
structure." Use 3–5, make them **diverse** (so the model doesn't lock onto one template),
wrap them in `<example>` tags, and match them on *tone, not topic*. Optionally include
labeled anti-examples (clickbait) as what to avoid.

### E. Force distinct angles via the taxonomy
Don't ask for "5 hooks" — you'll get 5 paraphrases. Require **one hook per distinct category
from §4, no two sharing an angle, each labeled.** Optionally assign a different lens/persona
per option (the skeptic, the practitioner who got burned, the numbers person, the
plain-spoken explainer) — multi-persona prompting demonstrably increases concept diversity
(Cambridge research).

### F. Brainstorm a larger pool, then score-and-select
The Copyhackers practitioner insight: the model is a candidate generator, not a final
author — "you're better off taking bits and pieces... than overprompting for a perfect
headline." For from-scratch brainstorming, generate **more than you need** (Copyhackers
generates ~50 for variety), then shortlist; for refining specific lines, 3–5 per item keeps
quality high. Two practical notes:
- **Independent runs beat one long list** for diversity (later items in one list anchor to
  earlier ones). Either run a few fresh generations and pool, or instruct "make each option
  maximally different; do not riff on the previous one."
- **Two temperatures:** generate at higher temp (~0.8–1.2) for variety; **score/select at
  low temp** for consistent judgment.

### G. Score with a rubric (LLM-as-judge), with hard gates
Do critique as a separate step — generation and judgment are different modes. Score each
candidate in a table with a **Rationale** column (Copyhackers' "analyze-before-generate" +
rationale forces justification and catches slop). Guard against known judge biases:
- **Length bias** — "LLM judges consistently give higher scores to longer outputs." Hooks
  should be short, so **explicitly tell the judge not to reward length.**
- **Self-preference bias** — if feasible, judge with a different model family.
- **Position bias** — randomize order in any pairwise comparison.

### H. Self-check before returning
Anthropic: "Append something like 'Before you finish, verify your answer against [test
criteria].'" Applied: "Before finishing, check each hook — is it specific? honest and
supported by the source? free of banned words? distinct from the others? Drop or rewrite any
that fail." Optionally refine survivors ("rewrite tighter / more specific") before
presenting to Nick/Isaac.

### Example end-to-end prompt (illustrative)
```
<source_material>
{{PASTE FULL BRAIN DUMP / ARTICLE / TRANSCRIPT HERE}}
</source_material>

<role>
You write opening hooks for The Institute of Applied Artificial Intelligence. The brand is
ANTI-HYPE: plain, specific, honest, understated. Readers are skeptical technical
decision-makers (CTOs, founders, operators) who have seen every overstated AI pitch and
instantly distrust marketing language. A hook earns trust by being concrete and true, never
by being loud.
</role>

<task>
1. Pull the 5 most concrete, specific, or surprising facts from the source into <facts>
   tags (each fully supported by the source).
2. Write candidate hooks grounded ONLY in those facts.
</task>

<voice>plain, specific, skeptical, understated, honest. A sharp engineer talking straight,
not a marketer.</voice>

<do_not_use>
Hype: revolutionary, game-changing, groundbreaking, unleash, supercharge, transform,
skyrocket, 10x, unlock, harness the power of, cutting-edge, seamless, effortless, powerful,
leverage. Clickbait: "you won't believe", "this one trick", "here's the secret", "...will
change everything", "N things that...". Filler: "In today's fast-paced world", "Imagine a
world where". Also banned: em dashes, "It's not X, it's Y", rule-of-three flourishes.
You tend to default to these; do not.
</do_not_use>

<angles>  (each hook must use a DIFFERENT angle; label each)
1. Specific-result (a concrete number from the source)
2. Confession/failure (a real mistake from the source)
3. Reasoned contrarian (a genuine, argued position)
4. Surprising data (a real finding from the source)
5. Problem-named (the real pain the reader has, stated plainly)
6. One-line story / named example
7. New-mechanism (a genuinely new "why it works")
</angles>

<examples>  (match the TONE, not the topic)
<example>{{REAL ON-VOICE HOOK 1}}</example>
<example>{{REAL ON-VOICE HOOK 2}}</example>
<example>{{REAL ON-VOICE HOOK 3}}</example>
</examples>

<instructions>
Generate 8 candidate hooks (one or more per angle), each <= 20 words, one idea each.
Then score in a table:
| # | Hook | Angle | Specific? | Supported by <facts>? | Banned word? | Voice fit (1-5) |
Do NOT reward length. Disqualify (mark DQ) any hook with a banned word/pattern or a claim
not in <facts>.
Return the 3-5 best non-DQ hooks, each a different angle, in a <final> block, with a
one-line rationale each.
</instructions>
```

This stacks all eight levers. Generate at higher temperature; if running the scoring as a
separate call, do it at low temperature.

---

## 6. Recommended hook rubric (the gates + scoring for THIS brand)

Use this both as the LLM-judge rubric and as the human checklist for Nick/Isaac.

**Hard PASS/FAIL gates — auto-reject if any fail:**
- Contains a banned hype/clickbait word or pattern (em dash, "It's not X, it's Y",
  rule-of-three, fake-significance tail)? → FAIL.
- Makes a claim not supported by the source / brain dump? → FAIL.
- Over the length limit (LinkedIn hook ≤ ~210 chars / ~20 words and ideally one line;
  subject line ≤ ~50–60 chars / 6–10 words)? → FAIL.
- Manufactured urgency, false scarcity, or deceptive framing (fake RE:/FWD:, "Oops")? →
  FAIL.

**Score each survivor 1–5 (do NOT reward length):**
1. **Specificity** — a concrete fact/number/detail from the source, not a platitude.
2. **Honesty / accuracy** — fully supported; no overstatement; the piece will deliver what
   the hook implies (it accurately reflects the content).
3. **Clarity** — plain language, instantly understood by a skeptical operator; reads like a
   person wrote it.
4. **Hook strength** — opens a real, bounded curiosity gap the reader actually has, and
   sets up the next sentence — without resolving the gap or resorting to clickbait.
5. **Voice fit** — plain, skeptical, understated; not marketing copy.
6. **Distinctiveness** — a different angle from the other options.

**Keep:** the top 3–5 non-disqualified hooks, each from a different category. Front-load the
specific. Withhold the lesson, not the substance. When in doubt, the more concrete and the
more understated option is the more on-brand one — and, per the LinkedIn algorithm and the
Perkbox/Gartner data, usually the more effective one too.
