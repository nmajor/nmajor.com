# Proposed changes to writing-voice/blacklist.md

A reviewable changeset against the current
`.skills/writing-voice/blacklist.md` and `.skills/writing-voice/SKILL.md`.
Nothing under `.skills/` has been edited. This is a proposal for Nick to accept, reject or
amend item by item.

Backing evidence and full citations: `research/ai-writing-tells/report.md`.

Every item carries an evidence tier (**measured** with the number, or **asserted** with
whose assertion), the proposed rule wording, a one-line rationale, and the risk if adopted.

The existing sense-nuance convention is preserved throughout: a word can be banned in one
sense and fine in another, the way `navigate` is banned figuratively and fine literally.

---

## Summary of the changeset

| | Count | Headline |
|---|---|---|
| ADD | 24 items | `underscore`, `intricate`, `nuanced`, `firstly/secondly`, the copula-avoidance class, and the Reinhart essay-genre words |
| REMOVE or SOFTEN | 6 items | `obviously` and the empty-intensifier block; the absolute em dash ban is a taste call |
| PROMOTE / DEMOTE | 8 items | `delve` down, `underscore`/`meticulous`/`showcase`/`intricate` up, GPT-5-era set up |
| MECHANISM | 1 change | Score density across a draft instead of flagging single hits |

---

# ADD

## A1. underscore / underscores / underscored / underscoring (figurative)

- **Tier: measured.** Kobak: `underscores` r=13.78, `underscore` r=6.73, `underscoring`
  r=7.48. Juzek & Ward: 4.50 to 45.19 occurrences per million, +904%. Kousha & Thelwall:
  +1,000% across six databases, and the proportion of papers using it six or more times rose
  from 0.013% (2022) to 1.37% (2025), an increase over 10,000%. Reinhart: 107x the human rate
  for GPT-4o across ordinary genres. Yakura: second-highest GPT score after `delve`.
  Wikipedia lists it in all three model eras. Grok still overuses it in 2026.
- **Proposed rule:** move to **NEVER**. "underscore (figuratively, meaning to emphasise).
  The literal underline mark and film music senses are fine."
- **Rationale:** on the combined evidence this is now the single strongest lexical marker,
  and it is currently only a passing mention in our verb-phrase tells list.
- **Risk:** low. Nobody writing plainly reaches for it.

## A2. intricate / intricacies

- **Tier: measured.** Kobak: `intricate` r=7.40, `intricacies` r=7.65. Juzek: +611%. Liang:
  11.2-fold rise in ICLR 2024 reviews. Reinhart: 119x human rate for GPT-4o, 129x for
  4o Mini. Kousha: +700% across databases, +5,400% for papers using it six or more times.
- **Proposed rule:** move to **NEVER**. "intricate, intricacies. Use complicated, detailed,
  or say what the actual complication is."
- **Rationale:** measured by five independent studies and completely absent from our list.
- **Risk:** low.

## A3. meticulous / meticulously

- **Tier: measured.** Liang: **34.7-fold** increase, the largest single fold-increase in that
  paper. Kobak: `meticulously` r=10.47, `meticulous` r=3.11. Kousha: +2,800% for repeated use.
  Yakura: in the LOR>2.5 group.
- **Proposed rule:** promote from "overused adjectives" to **NEVER**. "meticulous,
  meticulously. Use careful, precise, or name what was actually checked."
- **Risk:** low.

## A4. showcase / showcases / showcased / showcasing

- **Tier: measured.** Kobak: `showcasing` r=10.70, `showcases` r=3.84. Juzek: +1,396% for
  `showcasing`, +422% for `showcases`. On Wikipedia's GPT-5-era list, so it is current, not
  historical. **Caveat:** the 34-language news study found `showcase` as a *noun* was not
  attested as AI-overused in English news; the verb was.
- **Proposed rule:** move to **NEVER** as a verb. "showcase (as a verb). The noun sense (a
  showcase event) is weaker evidence and is a taste call, not a ban."
- **Risk:** low.

## A5. nuanced / nuance

- **Tier: measured.** Juzek & Ward's Llama Base vs Instruct ablation: `nuanced` (adj) +8,342%,
  the single largest jump in the study; `nuance` (verb) +6,301%. Kousha added `nuance` as one
  of their 12 tracked terms; by 2024 it correlated with `underscore` at 0.338. Kobak:
  `nuanced` r=2.72.
- **Proposed rule:** add to **NEVER**. "nuanced, nuance. If something has a nuance, name it."
- **Rationale:** this is the word the assistant persona adds hardest, and no popular list
  carries it.
- **Suggestive only, flagged as such:** in the same paper's preference experiment, average
  preference for the high-score variant was 46.6% when the item contained `nuanced` against
  54.5% when it did not. The authors say "Additional data is needed to substantiate this
  interpretation." Do not cite it as a reader-penalty finding.
- **Risk:** low, though "nuanced" is a word Nick might legitimately want when arguing against
  a simplification. The rule should push him to state the nuance, not to avoid the idea.

## A6. firstly / secondly / thirdly

- **Tier: measured.** Juzek & Ward: `firstly` +4,794%, `secondly` +1,598% from Llama Base to
  Llama Instruct. Pure discourse scaffolding added by the human-feedback stage.
- **Proposed rule:** add to filler transitions. "firstly, secondly, thirdly. Use first,
  second, or just start the sentence."
- **Rationale:** measured, near-invisible, and on no other list we could find.
- **Risk:** none.

## A7. emphasize / emphasizing / emphasises

- **Tier: measured.** 34-language news study: 16 human occurrences against 5,180 model
  occurrences, lpr 5.75, ranked second in English. Emphasize-type verbs recurred in 24 of 34
  languages. Kobak: `emphasizing` r=4.67, delta=0.00923. Juzek: +397%. On Wikipedia's GPT-4o
  **and** GPT-5 era lists, so it is the current signature.
- **Proposed rule:** add to **NEVER** in the figurative sense. "emphasize, emphasizing (as a
  significance verb). Say the thing you want emphasised, in a shorter sentence."
- **Risk:** low. "I want to emphasise" is legitimate speech but almost always cuttable.

## A8. enhance / enhancing / enhanced

- **Tier: measured.** Kobak: `enhancing` r=2.43 with delta=0.02045 (one of the ten
  highest-gap style words), `enhance` r=1.76 delta=0.02252. On both the GPT-4o and GPT-5
  Wikipedia era lists.
- **Proposed rule:** add to hype verbs. "enhance, enhancing. Use improve, or better, name the
  change."
- **Risk:** low.

## A9. highlighting / highlights / highlight (as a verb)

- **Tier: measured.** Kobak: `highlighting` r=2.58 delta=0.01414, `highlights` r=1.91
  delta=0.01647. On the GPT-4o and GPT-5 Wikipedia era lists. Russell's expert guide lists it.
- **Proposed rule:** promote from verb-phrase tells to the main hype-verb list, and add the
  `-ing` form explicitly. "highlight, highlighting, highlights (figuratively). The literal
  sense, a highlighter or a highlight reel, is fine."
- **Rationale:** currently only `highlights` appears, and only in passing. The `-ing` form is
  the one that shows up in participial tails.
- **Risk:** low, though this is a common ordinary word and will fire often. Should be a flag,
  not an absolute, outside the participial-tail pattern.

## A10. The Reinhart essay-genre block

- **Tier: measured.** Reinhart et al. (PNAS 2025), the only parallel-corpus study on news,
  fiction, blogs, TV scripts and spoken word rather than abstracts. Rates against a matched
  human baseline: `camaraderie` 162x/171x, `palpable` 95x/145x, `unspoken` 102x, `amidst`
  100x/90x, `solace` 95x, `fleeting` 84x/124x, `unravel` 83x, `cacophony` 89x, `grapple`
  131x, `ignite` 122x, `vibrant` 92x, `unease` 101x (Llama Instruct), `pang`, `waft`, `rut`.
  `tapestry` appeared in 23% of GPT-4o outputs and `amidst` in 27%.
- **Proposed rule:** new blacklist section, "Sentimental-register words (the essay tell)":
  camaraderie, palpable, amidst, unspoken, solace, fleeting, cacophony, unease, vibrant,
  grapple (figurative), ignite (figurative), unravel (figurative), pang, waft.
- **Rationale:** this is the most relevant table in the whole body of work for a personal
  essay, and only `tapestry` from it is currently on our list. The academic word lists do not
  cover the words that would actually contaminate Nick's prose.
- **Risk:** medium. `fleeting`, `grapple` and `unravel` have honest uses. Frame as a flag with
  the sense-nuance rule (figurative use flagged, literal use fine), not an absolute ban.
- **Carried caveat:** `continuation` and proper nouns in the same table are generation
  artefacts, not tells. Excluded here on the authors' own instruction.

## A11. commendable

- **Tier: measured.** Liang: 9.8-fold increase in ICLR 2024 peer reviews, one of the three
  headline numbers. Kobak: r=6.82.
- **Proposed rule:** add to overused adjectives.
- **Risk:** none.

## A12. garner / garnered

- **Tier: measured.** Juzek: +437%. Kobak: `garnered` r=5.28.
- **Proposed rule:** add to hype verbs. "garner. Use got, won, attracted."
- **Risk:** none.

## A13. advancements

- **Tier: measured.** Juzek: 12.49 to 47.17 opm, +278%. Kobak: r=3.61.
- **Proposed rule:** add to pretentious nouns. "advancements. Use advances, or name what
  improved."
- **Risk:** none.

## A14. align with / aligns / aligning

- **Tier: measured.** Juzek: `aligns` +267%. Kobak: `aligning` r=4.01, `aligns` r=2.94. On
  Wikipedia's GPT-4o era list. Recovered independently by the 34-language news study.
- **Proposed rule:** add to hype phrases. "align with (figuratively, meaning agree or fit).
  Literal alignment is fine."
- **Risk:** low, though "aligned with our goals" is business-normal, which is the point.

## A15. interplay

- **Tier: measured.** One of Kousha & Thelwall's 12; by 2024 it correlated with `intricate` at
  0.423 and `underscore` at 0.315. Kobak: r=2.11, delta=0.00531. On Wikipedia's GPT-4 era list.
- **Proposed rule:** add to pretentious nouns.
- **Risk:** none.

## A16. heighten / heightened

- **Tier: measured.** One of Kousha & Thelwall's five added terms, found by their own Scopus
  term-comparison. Kobak: `heightened` r=3.60.
- **Proposed rule:** add to hype verbs.
- **Carried caveat:** the authors themselves note "some added terms (e.g., foster, heighten)
  can also be used in discipline-specific ways".
- **Risk:** low.

## A17. valuable / invaluable

- **Tier: measured.** Kobak: `valuable` r=2.01 with delta=0.01870. On Wikipedia's GPT-4 era
  list. In Russell's expert vocabulary guide.
- **Proposed rule:** add to overused adjectives. "valuable, invaluable. Say what it is worth,
  or to whom."
- **Risk:** low.

## A18. The copula-avoidance class

- **Tier: measured.** Geng & Trotta: `is` and `are` fell 14% and 17% (computer science), 9%
  and 5% (mathematics), 11% and 1% (astrophysics), 16% and 13% (condensed matter) when
  GPT-3.5 was asked simply to "revise the following sentences" over 10,000 arXiv abstracts.
  Wikipedia's WP:AINOCOPULA names the replacements. Huang et al. observed the same decline in
  post-2023 Wikipedia text.
- **Proposed rule:** a named section, "Copula avoidance (restore is and are)". Flag: serves
  as, stands as, marks, functions as, operates as, represents, boasts, features, maintains,
  offers, refers to, and the elaborated versions ("ventured into politics as a candidate" for
  "was a candidate", "began his career as" for "was").
  The rule is positive, not a ban: "If the sentence means X is Y, write X is Y."
- **Rationale:** our list currently has `serves as` and `stands as` buried in verb-phrase
  tells with no explanation. This is a class with a measured cause and a one-line fix, and it
  doubles as the strongest human marker we have.
- **Risk:** none. This makes prose plainer, which is the house voice anyway.

## A19. Vague time markers standing in for a date

- **Tier: measured for the study, asserted for the class.** Pangram newspaper study (arXiv
  2510.18774, 186,000 articles, 1,500 US newspapers): the authors' own paired comparison
  found the human version named "Tuesday" and the "Emergency Special Setting" while the AI
  version used "more fluff words and more vague time placement (i.e. ongoing, recent)".
  The paper does not publish an aggregated token list, so the class is inferred from their
  summary.
- **Proposed rule:** add to the vague-quantities section, renamed "Vague quantities and
  vague times": "ongoing, recent, in recent years, currently, increasingly, these days, of
  late. If you know the date, write the date."
- **Rationale:** nothing on our list covers this and it is the exact failure mode of a
  news-adjacent newsletter.
- **Risk:** low. `increasingly` is also on the Economist's overused-polysyllable list.

## A20. Present participial tails, broadened

- **Tier: measured.** Reinhart: GPT-4o uses present participial clauses at **5.3x** the human
  rate, paired Cohen's d = 1.38; instruction-tuned models 2x to 5x generally. Wikipedia's
  WP:SUPERFICIAL cites this measurement directly for the tail pattern.
- **Proposed rule:** broaden the existing "-ing significance tails" ban from significance
  tails to participial tails as such. "A sentence that ends with a comma and an -ing clause is
  a model shape whether or not the clause asserts significance. Count them. More than one per
  three or four sentences is a rewrite."
- **Rationale:** we ban the significance version; the measurement is about the shape.
- **Risk:** medium. Participial clauses are legitimate English and an over-strict rule makes
  prose stiff. Should be a density rule, not a ban.

## A21. Nominalizations

- **Tier: measured.** Reinhart: GPT-4o at **2.1x** the human rate, d = 1.23;
  instruction-tuned models 1.5x to 2x. Their example carries four in one sentence.
- **Proposed rule:** new entry under "constructions to ban": "Nominalizations. Turn the noun
  back into the verb. 'The implementation of the process' becomes 'we implemented it.'"
- **Risk:** low.

## A22. Under-punctuation and the long "and" sentence

- **Tier: measured.** The Economist corpus (55,940 sentences, 1.2m words): LLMs "use fewer
  commas and semicolons than humans (and hardly any parentheses)... in part because they
  write longer sentences ['and' is their most overused word] and in part because they do not
  quote experts." **Provenance warning:** the article is paywalled; all quotes come from
  third-party captures. Re-verify before citing publicly.
- **Proposed rule:** new SKILL rule, not a blacklist entry. "Punctuate. Commas, semicolons and
  parentheses are human markers, and models under-use all three. If a paragraph has no
  parentheses and no semicolons and its sentences are joined with 'and', break them up."
- **Rationale:** this is the newest and least-known structural finding in the sweep, and it
  points the opposite way from the em dash panic.
- **Risk:** low, though it sits awkwardly next to the em dash ban. See R5.

## A23. Quote a named person

- **Tier: measured.** Same Economist study: one reason models under-punctuate is "they do not
  quote experts."
- **Proposed rule:** add to the substance checklist, not the blacklist. "Does the piece quote
  a real, named person? Models do not."
- **Rationale:** it converts an anti-slop rule into a positive editorial habit, and it sits
  naturally with the existing weasel-attribution ban.
- **Risk:** none.

## A24. The composition patterns

- **Tier: asserted** (tropes.fyi, one practitioner, no corpus, trend tags are the author's
  read), with two exceptions noted below.
- **Proposed rule:** a new section, "Composition tells (check the skeleton, not the words)":
  - Preamble / announce-then-answer ("Two constraints shape the design.")
  - Compulsive counting (stating the number before the list)
  - Premise stacking (a paragraph of evidence before the point)
  - Reasoning leak (narrating what the writing is about to do)
  - Fractal summaries (a summary at every level)
  - Excessive enumeration ("The first... The second... The third...")
  - The Tie-Back (looping the answer back to the question at the end)
  - Never-ending conclusion (stacking clauses instead of landing once)
  - Invented concept labels ("the supervision paradox", "workload creep")
  - Self-echo (paying off your own earlier phrase)
  - Quotable one-liners built to be pulled out and carrying nothing
  - Appeal to familiarity ("a classic", "famously", "notoriously", "as we all know")
  - Collaborative "we" where the author means "I"
  - "This is where X comes in" (Towards AI's addition)
  - Ask-a-question-then-answer-it as a hook ("So, what exactly is X?")
  - Wh-word section headings ("Where the market is stuck today")
- **Two of these have measured backing.** Synonym cycling, already covered by our
  repeat-the-word rule, is tied by Wikipedia to the generation repetition penalty and cited to
  Huang et al. The signposted conclusion overlaps Wikipedia's measured "section summaries"
  historical indicator.
- **Rationale:** the Towards AI editors' case, that scrubbing words leaves the model skeleton
  intact, is the single most useful practitioner claim in the raw. Our blacklist is almost
  entirely lexical.
- **Risk:** medium. Sixteen asserted rules is a lot of surface for a list built on hunches.
  Suggest adopting them as an editorial checklist in SKILL.md rather than as blacklist bans,
  and marking the section as asserted.

---

# REMOVE or SOFTEN

## R1. "obviously" (currently banned, measured as a human marker)

- **Current rule:** in "Empty intensifiers": absolutely, definitely, clearly, **obviously**,
  of course, undoubtedly, truly, really, very, literally, surely, "without a doubt".
- **Tier: measured.** Reinhart et al. (PNAS 2025) Table 5, the underrepresented-word
  fingerprint. `obviously` is used by Llama 3 8B Instruct at **0.014** of the matched human
  rate and by Llama 3 70B Instruct at 0.018. That is roughly one-seventieth of how often
  humans write it.
- **Proposed rule:** remove from the ban. Add to a new "Human markers, do not strip" section:
  "obviously, of course, anyways, yep, ok, somebody, extremely, blah, horrible, nasty.
  Models write these at 1% to 2% of the human rate. If they turn up in a draft, leave them."
- **Rationale:** we are currently banning one of the clearest measured human markers in the
  literature. The same table shows `anyways` at 0.0097, `yep` at 0.0075 to 0.016, `ok` at
  0.011 to 0.014, `somebody` at 0.012, `extremely` at 0.0034.
- **Risk:** low. "Obviously" can be condescending, and Nick may want it out on taste grounds.
  That is a different reason and should be stated as one.

## R2. The rest of the empty-intensifier block

- **Current rule:** the same list bans `very`, `really`, `clearly`, `truly`, `surely`,
  `absolutely`, `literally`.
- **Tier: mixed.** Wikipedia's "Signs of human writing > Syntax" section lists "hedging
  qualifiers and intensifiers, such as *very*, *perhaps*, *tends to*" as **more common in
  human writing**, citing Reinhart's supplementary material. Against that, Liang's top-100 AI
  adverbs do include `undoubtedly`, and none of `very`, `really`, `clearly`, `obviously`,
  `truly`, `surely`, `absolutely` or `literally` appear on it.
- **Proposed rule:** soften from a ban to a density rule. "Empty intensifiers: don't stack
  them. One 'very' is fine and is a human marker; three in a paragraph is padding. `Undoubtedly`
  stays banned (it is on Liang's measured AI-adverb list). `Clearly` and `obviously` are taste
  calls, not evidence."
- **Rationale:** the block as written bans measured human markers alongside one measured AI
  marker, and blurs the difference.
- **Risk:** medium, and this one is genuinely contentious. Loosening intensifiers cuts against
  the anti-grandiosity core of the voice. My read is that anti-grandiosity is about *claims*,
  not about the word "very", but Nick may disagree, and if he does the honest fix is to keep
  the ban and label it "house taste, contradicted by the evidence."

## R3. "whilst", "albeit", "admittedly"

- **Current rule:** in filler transitions.
- **Tier: no measured support found.** Not in Kobak's 407 style words, not in Juzek's 21 focal
  words, not in Liang's top-100 adverbs, not on Wikipedia's list, not in the 34-language news
  list. Weakly the other way: Reinhart's underrepresented table shows Llama 3 70B Instruct
  using `amongst` at 0.019 of the human rate, and Llama 3 8B Instruct using the British
  spellings `analyse` (0.011) and `characterise` (0.013) far below humans, which suggests
  British-register vocabulary is a human marker rather than an AI one. That reading rests on
  one model family with a possibly-British human baseline, so treat it as suggestive only.
- **Proposed rule:** keep `whilst` and `albeit` if Nick wants them out, but move them to a
  clearly labelled "house taste, no evidence" line rather than sitting among measured items.
- **Rationale:** honesty about which entries are measured is what keeps the list credible.
- **Risk:** none. This is a labelling change.

## R4. Filler transitions: split the measured from the taste

- **Current rule:** one undifferentiated block of 27 transitions.
- **Tier: mixed, and the difference is large.**
  - **Measured, keep:** Additionally (34-language news: 0 human occurrences against 421 model,
    lpr 6.74, the sharpest single-word contrast in the raw; Kobak delta=0.03646), Notably
    (Kobak r=2.63, delta=0.02187; Liang adverb list), Particularly (Kobak r=1.73,
    delta=0.02736; Liang), Primarily (Kobak r=1.74; Liang), Subsequently (Kobak r=1.44;
    Liang), Conversely (Kobak r=2.06), Ultimately (Kobak r=1.53), Specifically (Kobak r=1.35),
    Undoubtedly (Liang), Remarkably (Liang), Nonetheless (Liang), Furthermore and Moreover
    (SlopDetector tier 3, asserted, plus universal editorial consensus).
  - **No measured support found:** Hence, Thus, Therefore, Essentially, Indeed, Namely,
    Crucially, Importantly, Interestingly, Nevertheless, Admittedly, Albeit, Whilst.
  - **Actively contradicted:** `however` is not elevated at all. Kobak measures r=1.01 with
    delta=0.00272, meaning essentially no excess. Our SKILL tells agents to use "but" instead
    of "however", which is fine as voice, but "however" is not an AI tell.
- **Proposed rule:** split the block into "Measured AI transitions (cut)" and "House taste
  (cut because Nick prefers plain connectives)". Add a note that `however` is on the second
  list, not the first.
- **Rationale:** an agent that cannot tell which rules are evidence cannot make judgement
  calls when the two conflict.
- **Risk:** none.
- **Counterweight to carry:** Wikipedia lists "transition words (in isolation)" among its
  *ineffective* indicators: "only a few transition words and phrases are known to be overused
  by AI in this way. This pattern also has precedence in essay-like writing by humans." So the
  rule should be about density and paragraph-initial position, not about presence.

## R5. The absolute em dash ban

This is the one I want to put in front of Nick rather than recommend.

- **Current rule:** SKILL.md, "No em dashes. Ever." Absolute, justified by the em dash being
  an AI tell.
- **Evidence against the justification: measured.**
  - The Economist's 1.2 million-word corpus study, July 2026: "Many believe LLMs stuff their
    prose with em-dashes, but that is not true after the most recent updates. Today only
    Claude uses more em-dashes than human writers, with ChatGPT using markedly fewer than any
    other writer in our study." (Provenance warning: paywalled, captured via third parties.)
  - Kreuz, summarising the detection literature: in the study where participants named
    excessive em dashes as their AI marker, "their detection rate was only marginally better
    than chance."
  - A 702,939-word Project Gutenberg measurement puts human dash constructions at 3.47 to
    10.13 per 1,000 words. Huckleberry Finn scores 10.13. A naive threshold convicts Twain.
  - Wikipedia notes OpenAI's GPT-5.1 now suppresses them on request.
- **Evidence for keeping it: also measured.**
  - Freeburg 2026 (second-hand, via SlopDetector): human control 3.23 em dashes per 1,000
    words; **Claude Opus 4.6 at 9.09**, GPT-4.1 at 10.62. On these numbers Claude runs at
    about 2.8x the human rate.
  - The Pangram newspaper study: AI-assisted articles had up to 11.53x more em dashes than
    fully human ones.
  - Nick's drafting agents are Claude, and Claude is the model both sources agree is still
    above the human rate.
- **Proposed rule, if the ban stays:** keep the ban, change the justification. "No em dashes.
  This is a house voice choice, not a detection claim. Two short sentences beat one sentence
  held together by a dash. The evidence has moved: as of 2026 only Claude exceeds human em
  dash rates and ChatGPT uses fewer than human writers, so nobody will read a dash as
  machine-written. We keep the rule because it makes the prose better and because Claude,
  which drafts here, still over-reaches for it."
- **Proposed rule, if the ban goes:** replace with a density rule. "At most one em dash per
  500 words, never two in a paragraph, never spaced (spaced em dashes are a model habit and
  against normal typographic practice)."
- **Say it plainly:** this is now a house-taste decision, not an evidence one. The evidence no
  longer supports "readers will think a machine wrote it." It does still support "the model
  that drafts for us over-reaches for it."
- **Risk of keeping it:** the ban removes a human marker. The Economist's stronger and newer
  finding is that models **under**-punctuate: fewer commas, fewer semicolons, almost no
  parentheses. A rule that removes punctuation pushes the draft toward the model profile on
  the axis that now matters more.
- **Risk of dropping it:** Nick would have to police density instead of presence, which is
  harder for an agent to get right, and a Claude draft will drift back toward heavy dash use.

## R6. Reframe over-hedging, and stop calling it an AI tell

- **Current state:** not in the blacklist, but the overclaiming rule in SKILL.md pushes agents
  to soften, and the practitioner sources treat hedge-stacking as an AI tell.
- **Tier: contradicted.** Wikipedia lists hedging qualifiers and intensifiers as **human**
  markers, citing Reinhart's supplementary material. Tabach (2026) measured hedging rate per
  1,000 words and found it did not separate documents judges reliably sorted (n = 21 writers,
  his own caveat carried through). Against that, aicheckr and the humanize skill both call it
  an AI tell, on assertion only.
- **Proposed rule:** keep the anti-overclaiming rule as a **substance** rule, and add: "Hedging
  is not an AI tell. The measured evidence points the other way. Cut a hedge because the
  sentence refuses to commit to anything, not because it sounds like a machine."
- **Related tension worth flagging:** Wikipedia also lists **superlative and definitive
  statements** ("one of the best", "is the only", "was the first") as human markers. Our
  overclaiming rule tells agents to soften absolutes. Both rules are right for different
  reasons, and an agent needs to be told that softening a definitive sentence has a cost so it
  only does so where the claim genuinely outruns the evidence.
- **Risk:** low, but this needs careful wording or an agent will read it as permission to
  overclaim.

---

# PROMOTE / DEMOTE

## P1. DEMOTE `delve` from headline tell to ordinary entry

- **Tier: measured.** Yakura: the log-odds ratio for `delve` exceeded 300:1 in GPT-3.5-turbo
  and GPT-4, fell to ~100:1 in GPT-4-turbo and ~40:1 in GPT-4o. Mak & Walasek (4,820 UK
  psychology reports): ChatGPT-associated words "grew sharply in 2023 and 2024, before
  declining in 2025". Wikipedia: "dropped off sharply in 2025". tropes.fyi tags it `fading`.
- **Counter-evidence, carried:** Kousha & Thelwall measured `delve` up **1,500%** across six
  databases between 2022 and 2024, and Kobak's r=28.18 is still the highest single ratio in
  that study. The published record and current model output are diverging.
- **Proposed rule:** keep the ban, remove `delve` from the front of the NEVER list and stop
  treating it as the canonical example. Add a one-line note: "delve is a 2023 to 2024 marker
  that current models use much less. Still banned, no longer the headline."
- **Rationale:** a list that leads with a decaying tell trains the wrong instinct.
- **Risk:** low, and the honest version is more useful than the tidy one.

## P2. PROMOTE the GPT-5-era set to the front

- **Tier: asserted (citation-gated).** Wikipedia's era breakdown puts the mid-2025-onward set
  at four words: **emphasizing, enhance, highlighting, showcasing**. All four have measured
  Kobak or Juzek numbers behind them individually (see A4, A7, A8, A9).
- **Proposed rule:** open the NEVER section with these four plus `underscore`, `intricate`,
  `nuanced` and `meticulous`, and label it "current era (2025 to 2026)".
- **Rationale:** the list should lead with what today's models actually produce.
- **Risk:** the era labels are Wikipedia's editorial judgement, not a measurement, and should
  be labelled as such.

## P3. DEMOTE `realm`

- **Tier: measured.** Kobak r=4.97 and Juzek +381% both come from scientific abstracts. The
  34-language news study explicitly checked which academic tells survive in news and found
  `realm` was **not** attested as AI-overused in English news data. Same for `comprehend`,
  `noteworthy`, `showcase` (noun) and `surpass`.
- **Proposed rule:** keep `realm` banned on taste grounds ("in the realm of" means "in"), but
  move it out of the high-priority set and note that its evidence is genre-bound.
- **Risk:** none.

## P4. DEMOTE `leverage` and `utilize` to a labelled "clarity" band

- **Tier: measured, but modestly.** Kobak: `leveraging` r=3.08, `leverages` r=2.43,
  `utilizing` r=2.09 delta=0.01275, `utilized` r=1.46. Real but far below the top tier.
- **Sharper point, from avoid-ai-writing:** they split their Tier 1 into "1A frequency
  markers" (delve, tapestry) and "1B clarity edits" (in order to, utilize, commence), and
  weight 1B lower because, "Measured against 257 paragraphs of verified pre-2023 human prose,
  1B entries fire on ordinary professional and formal writing at a meaningful rate... The
  detector emits these as `tier1-clarity`... and excludes them from the dense-AI-vocabulary
  signal so a wordiness fix can never push a document toward an AI classification."
- **Proposed rule:** keep both banned, but add a band label. "Clarity edits: leverage, utilize,
  facilitate, commence, endeavor, in order to, ascertain. Replace them because the plain word
  is better, not because they are evidence a machine wrote it. These do not count toward the
  density score."
- **Rationale:** our current list mixes "this is an AI marker" with "this is a wordiness fix"
  and treats them identically. Separating them makes the density score honest.
- **Risk:** none.

## P5. PROMOTE adjectives over verbs in the scoring weight

- **Tier: measured, with a live disagreement.** Liang et al. state it directly: "We found this
  vocabulary choice [adjectives] to exhibit greater stability than using other parts of speech
  such as adverbs, verbs, nouns, or all possible tokens." Validation accuracy degrades with
  adverbs, verbs and nouns. Against that, Kobak found 66% of the 2024 excess style words were
  verbs and only 16% adjectives.
- **Proposed rule:** if the density score weights anything, weight adjective hits above verb
  hits, and note the disagreement in the file rather than picking a winner silently.
- **Risk:** the two studies used different methods and may both be right. Low-confidence
  change; flag it as such or skip it.

## P6. PROMOTE `crucial` handling from ban to flag, with the false-positive warning attached

- **Tier: measured, both ways.** Kobak: `crucial` r=2.11 with delta=0.03710, one of the ten
  highest-gap words. Wikipedia lists it in the GPT-4 and GPT-4o eras. But Russell et al. found
  that in expert **false positives**, "31% of explanations here mention vocabulary, typically
  when human-written content contains 'AI vocab' like delve and crucial."
- **Proposed rule:** keep it flagged, and add the note: "crucial fires on human writing too.
  Real people use it. Cut it because a plainer word exists, and do not treat its presence in a
  source quote as evidence of anything."
- **Risk:** none.

## P7. PROMOTE the rule of three, and keep it

- **Tier: measured.** In the Economist's measured list of the three devices models reach for
  ("not X but Y", "not only but also", the rule of three). Also in Wikipedia's WP:RO3 with
  citations, and in Russell's expert annotator guide.
- **Proposed rule:** no change to the rule. Add the number so an agent knows it is measured,
  not taste.
- **Risk:** none.

## P8. DEMOTE bold-first bullets and emoji formatting

- **Tier: asserted.** tropes.fyi tags bold-first bullets `fading` ("most people use skills to
  format documents in a specific way so it is fading"), and Wikipedia notes emoji formatting
  is "more rare now".
- **Proposed rule:** keep both rules (they are house style regardless), and move them out of
  any "AI tell" framing into the plain formatting section.
- **Risk:** none.

---

# MECHANISM CHANGE

## M1. Score density across the draft instead of flagging single hits

**The finding this rests on. measured.** Kousha & Thelwall measured within-document
correlation between the marker words in 2.4 million PubMed Central full texts. In 2022 those
correlations sat mostly below 0.05, with `underscore` against `pivotal` at 0.032 and against
`intricate` at 0.020. In 2024 the same pairs read 0.449 and 0.405, with `intricate` against
`pivotal` at 0.491. In 2024, 59.3% of papers mentioning `delve` also mentioned `underscore`,
against 1% to 14% conditional rates in 2022. The co-occurrence is roughly twenty times
stronger a signal than it was, and it is a stronger signal than any single word.

Kobak's method makes the same point from the other side: no single word exceeds a frequency
gap of 0.052, but combining 222 rare style words gives a gap of 0.111, and a non-overlapping
set of ten common style words independently gives 0.110.

Wikipedia states the operational rule: "One or two of these words appearing in an edit may be
coincidental, but an edit (post-2022) introducing lots of them, lots of times, is one of the
strongest tells for AI use."

### Proposed check

Replace "does the draft contain a banned word" with a five-part score.

**1. Tier the list.** Three bands, each with a different firing rule.

| Band | What it contains | Fires when |
|---|---|---|
| **Marker** | underscore, intricate, intricacies, meticulous(ly), showcase (v), delve, tapestry, nuanced, commendable, garnered, camaraderie, palpable, amidst, solace, cacophony | any single occurrence |
| **Cluster** | emphasizing, enhance, highlighting, pivotal, crucial, valuable, comprehensive, seamless, robust, vibrant, interplay, heightened, advancements, align with, notable, insights, foster(ing), bolster | two or more in the same paragraph |
| **Density** | additionally, notably, particularly, primarily, subsequently, ultimately, significant, potential, various, effectively, within, across | three or more per 500 words |
| **Clarity (unscored)** | leverage, utilize, facilitate, commence, endeavor, in order to | replace on sight, but never counts toward the score |

**2. Count per 1,000 words, not per document.** A 1,500-word essay and a 120-word LinkedIn
post cannot share a threshold. Suggested budget: **3 marker-or-cluster hits per 1,000 words**
before the draft needs a rewrite pass rather than a patch. (SlopDetector's asserted line is
"roughly 3 flagged style words per 500 words, clustered"; ours is deliberately looser because
our list is longer.)

**3. Add a co-occurrence bonus, which is the actual finding.** Count how many *distinct*
Cluster-band words appear inside any 300-word window. Three or more distinct words in one
window scores higher than five occurrences of one word spread across the piece. This is the
0.02-to-0.47 result made operational.

**4. Add a repetition rule, separately.** Kousha found the marker words differ in how they are
used: `delve` grew most in the 1-to-5-uses-per-paper band, while `underscore`, `intricate` and
`meticulous` are the ones hammered repeatedly (papers using `underscore` six or more times
rose over 10,000% from 2022 to 2025). So: the same Marker word twice in one piece is a
stronger signal than two different Marker words once each.

**5. Score structure alongside vocabulary, and weight it at least as heavily.** From
avoid-ai-writing: "Structure is the #1 detection signal. AI detection tools... weight
structural regularity higher than vocabulary... If you fix every word on the Tier 1 list but
leave the rhythm untouched, the text still reads as AI-generated." The structural counters
that are cheap to compute: sentence-length standard deviation over mean (flag under 0.4),
participial tails per sentence, commas and semicolons and parentheses per 1,000 words (flag
near zero), share of paragraphs opening with a formal transition (flag over 50%), and
type-token ratio on general prose over 200 words (flag under 0.40, and treat as weak).

### Rewrite-versus-patch threshold

Borrowed from avoid-ai-writing, **asserted**: five or more vocabulary flags plus three or more
pattern categories plus uniform rhythm means rewrite the passage, do not patch the words.

### The honest caveat that must ship with the score

The one skill that published a self-measurement of exactly this kind of composite scored
**ROC-AUC 0.501 at paragraph level** against a corpus of 875 human and 779 machine
paragraphs, and 0.623 at document level. At a threshold of 5 it got a 4.2% false-positive rate
(95% CI 3.1 to 5.8) against a 7.2% true-positive rate. Their conclusion, verbatim: "the
composite score cannot reliably separate machine text from human text, and no threshold on it
buys a useful true-positive rate at a tolerable false-positive cost."

So the score is a **writing-quality prompt**, not a verdict, and the file should say so in the
first line. It tells an editor where to look. It does not tell anyone who wrote something.

### Rationale

Our list currently reads as binary: the word is banned or it is not. That was the right model
in 2023 when single words carried signal. The measurement says the signal has moved into the
pile-up, and a binary list both over-fires (banning `obviously`, a human marker) and
under-fires (missing a paragraph with four Cluster-band words that individually pass).

### Risk

Real, and worth naming. A density score is more work to apply than a word list, an agent may
game the score by thesaurusing rather than rewriting (Russell measured exactly this: vocabulary
mentions in expert explanations fell from 57.1% to 42.3% for "humanized" articles that were
still machine-written), and any numeric threshold invites editing toward the number. Mitigation:
put the substance passes before the score in the workflow, and keep the score advisory.

---

# What I did not propose, and why

- **A Latinate-over-Saxon rule.** The Economist measured "more Latinate suffixes crop up in
  their writing than in human texts", and Ming, Hernandez & Juzek (FLAIRS 2026) report that
  "Across word classes and model families, with few exceptions, we observe a base-to-instruct
  shift towards Romance-origin vocabulary". But Alex Reinhart, who does this work, says of that
  paper: "I'd like to see the data behind this and more plots/tables showing the specific
  words, so I could evaluate the claim better." Our existing "plain words over big ones" rule
  already captures the practical version. **Not proposed: too thin.**
- **Curly quotes and Unicode arrows.** Wikipedia's own caveat list is longer than its claim
  (Chicago style, Microsoft Word, macOS and iOS defaults all produce curly quotes; "Gemini and
  Claude models typically do not use curly quotes"). **Not proposed: too noisy.**
- **A burstiness threshold as a hard rule.** GPTZero's 0.6-to-1.2 human against 0.2-to-0.4
  model is vendor methodology, and Tabach measured sentence-length standard deviation as
  non-separating at document level. Proposed above as a soft counter only.
- **Anything from the "genre glitch" concept as a ban.** Rettberg is explicit it is a
  hypothesis from two examples, and her headline example was confirmed by the New York Times to
  be human-written. Kept in the report as a self-editing question, not proposed as a rule.
- **Contractions and first person as anti-AI armour.** Jakesch measured both as null cues that
  predicted nothing about actual authorship. They stay in the voice because they are Nick's
  voice, not because they defend against anything.
