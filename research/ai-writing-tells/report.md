# AI writing tells: what is measured, what is asserted

The standing reference for the `writing-voice` skill. Built only from the raw in
`research/ai-writing-tells/raw/` (27 files) plus seven files in
`research/newsletter-workflows/raw/`. Written 2026-08-18.

The one-line summary: our current rules are roughly right about structure, out of date
about vocabulary, and wrong about a small set of words that turn out to be human markers.

## How to read this

Every claim below carries a tier.

**measured** means a study or corpus with a number, and the number is named along with the
study. **asserted** means someone's judgement, and whose. The two are never blended. Where
a source flagged its own claim as unmeasured, that flag is carried through.

Three things worth knowing before the lists.

**Density beats presence, and the evidence for that is now quantified.** Kousha & Thelwall
(ISSI 2025, 2.4 million PubMed Central full texts) measured how often the marker words
appear *together in the same document*. Pearson correlations between them sat mostly below
0.05 in 2022. By 2024, `underscore` correlated with `pivotal` at 0.449, with `intricate` at
0.405 and with `nuance` at 0.338; `intricate` correlated with `pivotal` at 0.491 and with
`interplay` at 0.423. In 2024, 59.3% of papers mentioning `delve` also mentioned
`underscore`; in 2022 the equivalent conditional rates ran 1% to 14%. The pile-up is about
twenty times stronger a signal than it was before ChatGPT. A single word is close to
worthless as evidence. **measured**

**The tells decay, and at different speeds per model.** Yakura et al. (arXiv 2409.01754)
computed a log-odds ratio for each word between human text and the same text after ChatGPT
revised it. For `delve` that ratio exceeded 300:1 in GPT-3.5-turbo and GPT-4, fell to about
100:1 in GPT-4-turbo, and to about 40:1 in GPT-4o. **measured** Wikipedia's editors, who
patrol suspected-AI edits at volume, put it plainly: `delve` "was famously overused by
ChatGPT in 2023 and early 2024, but became less frequent later in 2024, then dropped off
sharply in 2025." **asserted**, though citation-gated. Any list built on 2023 tells is
already stale.

**Reading as AI and evading a detector are different jobs.** Human readers detect at 50% to
65%. Detectors do better but cannot say why. The rules below are for the first job: not
sounding like a machine to a person who reads a lot. They are not a way to beat Pangram, and
chasing a detector score is a bad use of an editing pass.

---

## Lexical tells

### The strongest current-era markers

Kobak et al. (Science Advances 2025, 14.2 million PubMed abstracts, 2010 to 2024) built the
foundational measurement: project each word's expected 2024 frequency from 2021 and 2022,
then measure the excess ratio `r` and the excess gap `delta`. Of the 319 excess *style*
words in 2024, 66% were verbs and 16% adjectives. Their estimate: at least 10% of 2024
abstracts went through an LLM, up to 30% in some subcorpora. **measured**

> Provenance note carried through from the raw: the paper prints only six per-word figures
> in prose (`delves` r=28.0, `showcasing` r=10.2, `underscores` r=10.9, `potential`
> delta=0.045, `findings` delta=0.031, `crucial` delta=0.029). The per-word table in the raw
> file was computed during this research pass by applying the authors' own published formula
> to their own published data files, and it reproduces the printed figures to within a
> snapshot difference. Treat the expanded per-word numbers as a derivation, not as something
> the authors printed.

| Word | Kobak r (2024 excess ratio) | Juzek & Ward, opm 2020 to 2024 | Other |
|---|---|---|---|
| delves / delve | 28.18 / 7.91 | 0.21 to 14.38 (+6,697%) | Kousha: +1,500% across databases |
| underscores / underscore | 13.78 / 6.73 | 4.50 to 45.19 (+904%) | Reinhart: 107x human rate for GPT-4o |
| showcasing | 10.70 | 0.59 to 8.79 (+1,396%) | Kousha seed term |
| meticulously / meticulous | 10.47 / 3.11 | not in the 21 | Liang: **34.7-fold** rise in ICLR 2024 reviews |
| intricacies / intricate | 7.65 / 7.40 | 6.22 to 44.22 (+611%) | Liang 11.2-fold; Reinhart 119x |
| surpassing | 7.09 | 1.37 to 10.50 (+667%) | |
| commendable | 6.82 | not in the 21 | Liang: 9.8-fold |
| garnered | 5.28 | 2.44 to 13.13 (+437%) | |
| realm | 4.97 | 2.25 to 10.85 (+381%) | **Not** attested in English news (see below) |
| emphasizing | 4.67 | 8.30 to 41.27 (+397%) | 34-language study: lpr 5.75 |
| groundbreaking | 4.87 | 0.87 to 3.75 (+330%) | |
| boasts | not tabulated | 0.11 to 1.15 (+918%) | |
| advancements | 3.61 | 12.49 to 47.17 (+278%) | |
| pivotal | 3.06 | not in the 21 | Kousha seed; Liang top 10 |
| aligns | not tabulated | 1.55 to 5.68 (+267%) | |

By excess *gap* (the measure that catches common words), the ten highest-delta style words
Kobak's team selected to maximise their lower-bound estimate were: `across`, `additionally`,
`comprehensive`, `crucial`, `enhancing`, `exhibited`, `insights`, `notably`, `particularly`,
`within`. Those ten alone account for a frequency gap of 0.110, meaning about 11% of 2024
abstracts contained at least one of them beyond expectation. **measured**

### What the human-preference stage added

Juzek & Ward (arXiv 2508.01930) ran the cleanest ablation available: Llama Base against
Llama Instruct, same weights, same architecture, so the only difference is instruction
tuning plus learning from human feedback. Top increases, in occurrences per million:

- `nuanced` (adj) 0.6 to 51.4, **+8,342%**
- `nuance` (verb) 0.6 to 39, +6,301%
- `firstly` (adv) 2.4 to 119.2, **+4,794%**
- `reliance` (noun) 1.2 to 40.1, +3,194%
- `generalizability` 2.4 to 78.5, +3,124%
- `underscore` (verb) 4.3 to 124.9, +2,829%
- `secondly` (adv) 6.1 to 103.4, +1,598%
- `necessitate` (verb) 0.6 to 9.6, +1,477%

813 of the 814 words used significantly more by Instruct than by Base were also used more
than in the human baseline. **measured**

The authors flag their own artefacts: `radar`, `theanine`, `daa`, `interoceptive` are PubMed
topic bleed, not style. Do not put those on a style list. Carried through as their caveat.

`firstly` and `secondly` are the interesting entries. They are pure discourse scaffolding,
they came in with the assistant persona, and almost no popular AI-word list carries them.

### The list that matters most for essays

Every study above measures scientific abstracts. Reinhart et al. (PNAS 2025) is the only one
built on a parallel corpus of *ordinary* genres: news, fiction, TV scripts, blogs, spoken
word, academic. Same source text, human continuation against each model's continuation. Word
rates relative to a matched human baseline: **measured**

| GPT-4o | rate | GPT-4o Mini | rate |
|---|---|---|---|
| camaraderie | 162x | camaraderie | 171x |
| tapestry | 155x | tapestry | 147x |
| intricate | 119x | palpable | 145x |
| underscore | 107x | grapple | 131x |
| unspoken | 102x | intricate | 129x |
| amidst | 100x | fleeting | 124x |
| palpable | 95x | ignite | 122x |
| solace | 95x | vibrant | 92x |
| fleeting | 84x | amidst | 90x |
| unravel | 83x | cacophony | 89x |

`tapestry` appeared in 23% of GPT-4o outputs and `amidst` in 27%. Llama 3 Instruct variants
favour `unease` (101x and 63x), `palpable`, `pang`, `waft`, `rut`, `grapple`, `reminder`.

The authors' own reading: "many of these words connote some form of complex relation among
objects (e.g., tapestry, intricate, camaraderie, cacophony, amidst). Coupled with positive
items such as vibrant and solace, these words together may signal a preference for
grandiose, if hollow, summative sentences."

Their caveat, carried through: `continuation` appears because Llama outputs sometimes begin
"Here is the continuation of the text", and proper nouns like `Deborah` (52x) come from a
single repeated document. Those are generation artefacts, not tells.

None of these words appear on our current blacklist except `tapestry`. For a personal essay,
this is the most relevant table in the whole body of work.

### Genre changes the answer

The 34-language news study (arXiv 2605.25358, **preprint, not peer reviewed**) ran a
split-halves continuation test on WMT News Crawl: give GPT-4.1 the first half of a real news
sentence stream, compare its continuation against the journalist's. Top English items by log
prevalence ratio: **measured**

| Rank | Lemma | Human count | Model count | lpr |
|---|---|---|---|---|
| 1 | additionally | **0** | 421 | 6.74 |
| 2 | emphasize | 16 | 5,180 | 5.75 |
| 3 | revolutionize | 0 | 59 | 4.78 |
| 4 | revitalize | 0 | 44 | 4.49 |
| 5 | captivated | 1 | 94 | 4.14 |
| 7 | streamline | 0 | 27 | 4.01 |
| 8 | firsthand | 0 | 25 | 3.93 |
| 9 | personalize | 1 | 74 | 3.91 |
| 10 | introspective | 0 | 24 | 3.89 |

Zero human occurrences of `additionally` against 421 model occurrences is the sharpest
single-word contrast anywhere in the raw.

The same study checked which academic tells survive the move to news. Of 27 items from the
scientific-English literature, 22 also showed up as AI-overused in English news. The five
that did **not**: `comprehend`, `noteworthy`, `realm`, `showcase` (as a noun), `surpass`.
Nick writes news-adjacent prose, so those five deserve a lower priority than the academic
lists imply.

### Model changes the answer too

Same study, cross-architecture check: GPT against Claude Haiku gives rho = 0.85; GPT against
Gemini Flash gives rho = 0.46. A word list tuned to GPT transfers well to Claude and poorly
to Gemini. **measured**

Wikipedia's editors add an observation nobody else has: "Grok output is particularly
idiosyncratic: it overuses superficially 'scientific' words like *causal*, *empirical*,
*correlate*, and continues to overuse *underscore* as of 2026." **asserted**, though the
page's house rule requires every listed word to be corroborated by a named external source.

Their era breakdown is the most useful drift map available: **asserted**

- **2023 to mid-2024 (GPT-4):** additionally, boasts, bolstered, crucial, delve,
  emphasizing, enduring, garner, intricate/intricacies, interplay, key, landscape,
  meticulous/meticulously, pivotal, underscore, tapestry, testament, valuable, vibrant
- **Mid-2024 to mid-2025 (GPT-4o):** align with, bolstered, crucial, emphasizing, enhance,
  enduring, fostering, highlighting, pivotal, showcasing, underscore, vibrant
- **Mid-2025 on (GPT-5):** emphasizing, enhance, highlighting, showcasing

The current-era set is four words, and three of them are not on our blacklist at all.

### Two lexical classes no word list carries

**Copula avoidance.** Models replace `is` and `are` with `serves as`, `stands as`, `marks`,
`functions as`, `operates as`, `represents`, `boasts`, `features`, `maintains`, `offers`.
Geng & Trotta (arXiv 2404.08627) measured the effect directly: when GPT-3.5 was prompted to
"revise the following sentences" over 10,000 arXiv abstracts, `is` and `are` fell by 14% and
17% in computer science, 9% and 5% in mathematics, 11% and 1% in astrophysics, 16% and 13%
in condensed matter. In the same simulation `significant` roughly doubled in computer
science (0.09 to 0.18 per abstract). **measured**

The fix here is the opposite of a ban. Restore the plain copula.

**Vague time markers standing in for a date.** From the Pangram newspaper study (arXiv
2510.18774, 186,000 articles from 1,500 US newspapers, about 9% partly or fully AI): the
authors' own comparison of a human and an AI version of the same story found that "In the
human-written article, the author references the time (Tuesday) and setting (Emergency
Special Setting). In the AI-generated article, the author uses more fluff words and more
vague time placement (i.e. ongoing, recent)." **measured** for the prevalence figures,
**asserted** for the class, since the paper does not publish an aggregated token list.

Worth noting what that paper explicitly does *not* provide: "no vendor publishes a rankable
'which words drive the classifier' table. Anyone claiming one is inferring it."

---

## Structural and syntactic tells

This is where our current rules hold up best, and where the measured numbers are strongest.

**Present participial clauses.** Reinhart et al. measured GPT-4o at **5.3 times** the human
rate (paired Cohen's d = 1.38), with instruction-tuned models generally 2x to 5x. Their
example, two participles in one sentence: "Bryan, leaning on his agility, dances around the
ring, evading Show's heavy blows." **measured**

Our blacklist covers the *significance* version of this ("..., highlighting its importance").
The measurement says the pattern is broader: the participial tail as such.

**Nominalizations.** GPT-4o at **2.1x** the human rate (d = 1.23); instruction-tuned models
1.5x to 2x. Their example, four in one sentence from Llama 3 70B Instruct: "These schemes can
help to reduce deforestation, habitat destruction, and pollution, while also promoting
sustainable consumption patterns." **measured**

**"That" clauses as sentence subject**, 2.6x (d = 0.77). **Phrasal coordination**, 1.9x
(d = 0.81). **measured**

**Agentless passive voice**: GPT-4o uses it at roughly half the human rate. The folklore is
backwards for this model. **measured**

**Instruction tuning makes models less human, not more.** Llama 3 base models sit close to
human rates on these features; the instruct variants diverge sharply. A random forest on
Biber features alone separated human from one specific LLM at 93% to 98%; a seven-way source
classification hit 66% against 14% chance, with only 4.2% of LLM texts misclassified as
human. **measured**

**Syntactic templates.** Shaib et al. (EMNLP 2024) defined a template as a part-of-speech
n-gram that repeats across a corpus, and this matters because two sentences can share almost
no vocabulary and still be the same sentence. Their example: `DT JJ NN IN DT JJ NN` matches
both "a romantic comedy about a corporate executive" and "a humorous insight into the
perceived class". Findings: **measured**

- 76% of templates in model text are found in the pre-training data, against 35% for
  human-authored text, and they are not overwritten by fine-tuning or RLHF.
- Under summarization, 96.8% (+/- 0.6) of generations contained at least one 6-gram template,
  against 74.4% (+/- 2.1) for open-ended generation. On Rotten Tomatoes, about 95% of model
  outputs contained a 6-gram template against 38% for human references and input documents.
- Varying temperature and top-p barely moves this. "templatic text in summarization appears
  in spite of sampling strategies intended to increase (lexical) diversity."
- The synthetic corpus Cosmopedia: 99.1% of texts contain a template.

The implication for us is sharp. A repurposing pipeline works by summarising a source under
instructions, which is the exact mode with the highest template rate. Swapping words does not
break a template. Only changing the sentence's grammatical shape does.

**The missing long tail.** Ju, Blix & Williams (ACL Findings 2025) had models regenerate real
human articles from Wikipedia, CCNews and ELI5, then measured five levels of syntactic
abstraction at once: readability, sentence length, parse depth, Yngve score (how
left-branching the tree is), and unique dependency and constituency tags per sentence.
"the majority of the regenerated distributions show a **shifted mean, a lower standard
deviation, and a reduction of the long tail**, as compared to the human originals." Models
also *overshoot* the register: they simplify the simple domain further and complicate the
complex one. Open-weight models only (Llama and Mistral), which is the main limit.
**measured**

This generalises "vary sentence length" into something better: the deficit is a missing long
tail at every level of syntax. Keep the one sentence in the piece that is structurally
strange. The outlier is the signal.

**Punctuation and sentence rhythm.** The Economist (30 July 2026) ran a newsroom corpus study
comparing its own prose against ChatGPT, Claude, Gemini and Grok versions of the same
articles, 55,940 sentences and 1.2 million words, checked against CNN, the New York Times,
the Washington Post, and novels published 1950 to 2022. **measured**, with an important
provenance warning carried through from the raw: economist.com returned 403 and archive.md
returned a CAPTCHA, so every quote below comes from third-party captures (Daring Fireball,
Stacker News, the Economist's own newsletter). The method paragraph appears identically in
two independent captures. Re-verify before citing in published work.

> "A better way to spot AI-generated writing would be to look for texts without much
> punctuation at all. LLMs are very Joycean about it: they use fewer commas and semicolons
> than humans (and hardly any parentheses). They use less punctuation in part because they
> write longer sentences ['and' is their most overused word] and in part because **they do
> not quote experts**."

> "Bots' sentences tend to be long; paragraphs are rarely interrupted with short, punchy
> statements."

That is the metronome finding stated the other way round, and more usefully: not just uniform
length, but uniformly *long*, with no short sentence breaking the paragraph, and with too
little punctuation rather than too much.

**Burstiness.** GPTZero reports human writing spreading around 0.6 to 1.2 on
(standard deviation of sentence length divided by mean), with model output clustering at 0.2
to 0.4. This is the vendor's own methodology, not an independent study, so treat as
**asserted with a number**. And note the contradiction below: Tabach (2026) found
sentence-length standard deviation did *not* separate documents that judges reliably sorted.

---

## Rhetorical and composition tells

Less measured, more asserted, and still where the biggest quality gains sit.

**"Not X, it's Y" and its family.** Measured presence in the Economist corpus ("Their
favourites include: 'not X but Y', 'not only but also' and the 'rule of three'"), listed by
Wikipedia with citations to Robbins, Russell and the Economist, and named the single most
identified tell by tropes.fyi. **measured** for prevalence, **asserted** for the reading.

Hollis Robbins gives the best account of why, and it reframes the rule usefully. She calls it
computational hedging: "Because an LLM only knows the relationships between words, not
between words and the world, it wants to avoid falsifiable claims... By being all balance-y
it can sound comprehensive without committing to anything." **asserted**

Her paired examples matter more than the rule, because they show the construction is not the
problem. The emptiness on both sides of it is.

> AI: "It's not only efficiency that matters, but also stakeholder engagement."
> Human: "It's not that I'm cheap, it's that the restaurant had too many forks."
>
> AI: "Rather than focusing on obstacles, we should embrace transformative opportunities."
> Human: "Instead of apologizing, she brought donuts."
>
> AI: "Effective collaboration requires not only interpersonal care but also the strategic
> navigation of team synergy."
> Human: "His idea of teamwork was to circle my title and draw a sad face."

"When humans write this way, you have to work a little to understand (or half understand).
You can easily see forks, donuts, a sad face... You never have to work with LLMs. They play
it safe."

**The rule of three.** In the Economist's measured list of favoured devices. Also in
Wikipedia (WP:RO3) with citations, and in Russell's expert annotator guide. Keep the ban.
**measured**

**False balance.** Robbins again: "Look for unnaturally perfect balance, where every point
has a counterpoint, every advantage has a corresponding challenge mentioned." **asserted**

**Absence of concrete referents.** Her test is the best diagnostic in the raw and we do not
have anything like it: "if you can't see anything, if nothing springs to mind, it's probably
AI." Her pair: **asserted**

> Human: "That chair is red."
> LLM: "When considering furniture aesthetics, it's important to note that color plays a
> significant role in both visual appeal and functional design considerations. Red, as a warm
> tone, can create dynamic focal points while also presenting challenges in terms of spatial
> harmony."
>
> "Ask yourself: did anything spring to mind the way a red chair might have? You can probably
> picture a chair, but not 'furniture aesthetics.'"

**Anecdotes that are too tidy.** "A human personal narrative is full irrelevant details and
random memories. There is mess and uncertainty and sometimes cringe. LLM anecdotes serve the
argument too neatly." Directly relevant to first-person essays. **asserted**

**The skeleton, not the words.** The Towards AI editors, who edit AI-assisted submissions at
volume, put the whole structural case in one paragraph: **asserted** (editorial experience,
not measurement)

> "even when the most obvious 'AI words' are scrubbed out, the feeling often remains... The
> surface vocabulary has been cleaned; the underlying skeleton hasn't. Paragraphs still
> follow the same tidy arc, transitions march along like a five-paragraph essay, and
> conclusions zoom out to a vague 'bigger picture' no one asked for. The language has been
> de-delved, but the thought structure is still pure model."

Their structural pattern list: heavy bullet use, interchangeable subheadings ("Understanding
X", "The Importance of Y", "The Future of Z"), the standard essay frame, signposting
everywhere, same-sized paragraphs, writing about the article instead of the topic, generic
examples, a generic conclusion. Any one is fine. All of them in the same order, whatever the
topic, is the tell.

**The composition patterns nobody's blacklist carries.** tropes.fyi is one practitioner's
curated directory, **asserted**, no corpus and no counts. Its value is the taxonomy and the
trend tags, which are the author's read rather than data. The entries tagged `new` or
`rising` are almost all composition-level and almost none are on our list:

- **Preamble (announce-then-answer)**: "Two constraints shape the design." The sentence sets
  up the answer instead of being the answer.
- **Compulsive counting**: stating the number before the list. "Five things we wish to
  discuss."
- **Premise stacking**: a paragraph of evidence before the point, so the point arrives
  already made twice.
- **Reasoning leak**: narrating what the writing is about to do. "I want to be exact about my
  own role here."
- **Fractal summaries**: every subsection summarised, every section summarised, the document
  summarised.
- **Excessive enumeration**: a listicle disguised as prose. "The first wall is... The second
  wall is..."
- **The Tie-Back**: closing by looping the answer back to the question.
- **Never-ending conclusion**: the ending stacks clause after clause instead of landing once.
- **Invented concept labels**: "the supervision paradox", "the acceleration trap", "workload
  creep". Naming a thing to skip the argument.
- **Self-echo**: reusing your own earlier phrase as if paying it off.
- **Quotable one-liners**: a line built to be pulled out and read alone, carrying nothing.
- **Appeal to familiarity**: "a classic", "famously", "notoriously", "as we all know".
- **Synonym cycling**: the dashboard becomes the interface, then the portal, then the
  analytics hub.
- **Collaborative "we"** where the author means "I".
- **Grandiose stakes inflation**: a post about API pricing becomes a meditation on the fate of
  civilisation.

Synonym cycling has a measured cousin. Wikipedia's WP:AIELEVAR ties it to the repetition
penalty in generation, citing Huang et al.'s comparison of pre-2023 Wikipedia text against
post-2023 text and against GPT-4o-mini and Gemini-1.5-Flash output. Our SKILL already gets
this right: repeat the word rather than reaching for a synonym.

**Genre glitch.** Jill Walker Rettberg's name for a sentence whose *register* is wrong: a
burst of sensory ad copy inserted into an informational sentence. Her example from a legal
filing: the defendant "boarded a long-distance Amtrak passenger train to Chicago, a route
famous for its scenic views of the mountains and deserts of the American West before
traversing the vast expanse of the Great Plains." She is explicit that this is a hypothesis
from two examples, and the New York Times contacted the journalist behind her headline
example, who **confirmed she did not use AI**. So: a useful self-editing question ("does this
phrase belong to a different genre than the sentence around it?") whose own flagship example
was a false positive. **asserted**

---

## Formatting tells

- **Title Case headings.** Wikipedia and tropes.fyi both list it, tagged `consistent`. Our
  sentence-case rule stands. **asserted**
- **Bold-first bullets.** "**Security**: Environment-based configuration with..." tropes.fyi
  tags it `fading` because so many people now use formatting skills. Our "bold sparingly"
  rule stands. **asserted**
- **Emoji as structure.** Wikipedia notes these were common in 2023 to 2024 talk pages and
  are rarer now. **asserted**
- **Unicode arrows and curly quotes.** Wikipedia's own caveat is long and worth carrying:
  Chicago style, Microsoft Word, and the macOS and iOS defaults all produce curly quotes, and
  "Gemini and Claude models typically do not use curly quotes." Weak both ways. **asserted**
- **Markdown and citation artefacts.** `citeturn0search0`,
  `contentReference[oaicite:0]{index=0}`, `oai_citation`, `[attached_file:1]`. The
  avoid-ai-writing skill calls these "not patterns, they are fingerprints. Their presence is
  essentially proof the text was generated by a specific chat tool and pasted without
  cleanup." Our rule already covers it. **asserted**
- **Hashtag stuffing.** avoid-ai-writing's threshold: 6 or more tags is near-universal in LLM
  social output and rare in thoughtful human posts. Relevant to the LinkedIn half of the
  pipeline. **asserted with a number** (their empirical floor, not a published study)
- **Em dashes.** Its own section below, because the evidence has turned.

---

## Corrections to received wisdom

Six beliefs the raw contradicts.

### 1. Grammatical errors do not mean a human wrote it. They mean it more strongly than that.

Jakesch, Hancock & Naaman (PNAS 2023, N = 4,600, 7,600 self-presentations) regressed reader
judgements against language features *and* against actual authorship, so you can see cue by
cue where perception and reality part. Readers were 5% more likely to call flawed text AI. In
the data, grammatically flawed text was **15% less likely to be AI**. AI text had fewer
grammatical issues than human text, 14.8% against 19.6%. **measured**

Russell et al. (ACL 2025) found the same from the other side: "Nonexperts also believe that
human authors are more likely than AI to form grammatically-correct sentences, while experts
realize the opposite is true: humans actually make more grammatical errors." **measured**

### 2. The polished read is a machine signal, and readers have it backwards.

Milicka et al. (PLOS ONE 2025, 254 participants, GPT-4o continuations against a matched human
corpus) found that "participants systematically considered AI-written texts more readable
(only approximately 30% of human-produced texts were considered more readable than
AI-generated ones)" and at the same time "suppose that the more readable texts are written by
human." The smoother read is both more likely to be machine-written and more likely to be
*called* human. **measured**

Roger Kreuz's reading of the em dash panic makes the same point about the whole heuristic:
"Perhaps it's because this form of punctuation is primarily employed by experienced writers.
In other words, people may believe that writing that is 'too good' must be artificially
generated." **asserted**, by a cognitive scientist summarising measured work.

### 3. AI does not overuse the passive voice.

GPT-4o uses agentless passives at roughly half the human rate (Reinhart, PNAS). Llama base
models match humans. **measured**

### 4. "Fancy prose" is not the tell. Specific words are.

Russell et al.: "nonexperts take the inclusion of any 'fancy' or otherwise low-frequency word
types as signs of AI-generated text; in contrast, experts are much more familiar with exact
words and phrases overused by AI (e.g., testament, crucial)." Experts hit 96%+ true-positive
rates; non-experts do not. **measured**

Wikipedia's editors make it a rule: "While LLMs disproportionately favor certain words and
phrases, many of which are longer and have more difficult readability scores than some of
their synonyms, these are *specific words*. The correlation does not extend to all formal,
academic, or 'fancy'-sounding prose." **asserted**

This is a direct argument for an evidence-gated word list over a general "avoid big words"
instinct, and against over-plainening prose until it has no texture.

Note the tension with the Economist, which found "more Latinate suffixes crop up in their
writing than in human texts" and reported the overused polysyllables as `significant`,
`increasingly`, `consequences`, `interdependence`, `parameter`, `methodology`. Both can be
true: a measurable Latinate skew in aggregate, and a bad rule for judging one sentence.

### 5. The word list stops working the moment the writer knows it.

Russell et al.: "57.1% of correct explanations about o1-Pro articles mention vocabulary,
compared to only 42.3% for the humanized o1-Pro articles prompted to avoid 'AI vocab'." And
the cost lands on humans: "31% of explanations here [expert false positives] mention
vocabulary, typically when human-written content contains 'AI vocab' like delve and crucial."
**measured**

### 6. Detectors, including pattern-scoring like ours, are weaker than the marketing.

Human detection: 50% to 52% with money on the line and with immediate feedback (Jakesch);
55.4% without feedback and 65.1% with it, in the easy side-by-side mode (Milicka); 94% of
undergraduate exams written by ChatGPT went undetected by graders at a British university
(2024 study, via Kreuz). **measured**

Pattern-based scoring: the avoid-ai-writing skill measured its own composite against 875
human and 779 machine paragraphs and published the result against itself. At score >= 5:
4.2% false-positive rate (95% CI 3.1 to 5.8) against 7.2% true-positive rate. Paragraph-level
ROC-AUC 0.501, a coin flip. Document level 0.623. Their own conclusion: "the composite score
cannot reliably separate machine text from human text, and no threshold on it buys a useful
true-positive rate at a tolerable false-positive cost." **measured**, and the most honest
number in the whole sweep.

Commercial detectors: false-positive rates above 60% on non-native English writers (Liang et
al., Stanford, *Patterns* 2023); misclassification above 70% on open-source detectors
(Jabarian & Imas, BFI 2025); adversarial paraphrase cuts detection accuracy by about 88%
(arXiv 2506.07001). All three cited by avoid-ai-writing, none read directly in this pass.
**measured, second-hand.**

Pangram is the exception worth naming: an ACL 2025 study of 300 nonfiction articles found it
matched the near-perfect accuracy of five skilled human evaluators. It now runs on Substack
(since 21 July 2026) and its scan of LinkedIn found 40% of long-form posts and 30% of
short-form posts flagged as fully AI-generated. LinkedIn shipped a "Seems like AI slop" button
on 30 July 2026 that both hides the post and privately tells the author their post read as
inauthentic. So the practical exposure is real even though the science is soft.

---

## The em dash, specifically

Our absolute ban was written when the em dash was the most cited AI tell. The measured
picture has moved, and the sources now disagree with each other.

**Against the ban:**

- The Economist corpus, 2026: "Many believe LLMs stuff their prose with em-dashes, but that
  is not true after the most recent updates. Today only Claude uses more em-dashes than human
  writers, with ChatGPT using markedly fewer than any other writer in our study."
  **measured** (with the provenance warning above)
- In the study where participants explicitly named excessive em dashes as their AI marker,
  their detection rate was "only marginally better than chance." **measured**, via Kreuz
- A 702,939-word Project Gutenberg measurement: human dash constructions run 3.47 to 10.13
  per 1,000 words, pooling to 6.43. Huckleberry Finn scores 10.13 on the em dash character
  alone. Any naive threshold convicts Twain and Melville. **measured**, though on a vendor
  blog (SlopDetector) and on 19th-century prose.
- The em dash is the easiest signal in existence to game in both directions. OpenAI's GPT-5.1
  suppresses it on request; Llama 3.1 8B produced zero. You can strip every dash from a slop
  paragraph and it is still slop.

**For the ban:**

- Freeburg's 2026 controlled study (via SlopDetector, not read directly): GPT-4.1 at
  **10.62** em dashes per 1,000 words, Claude Opus 4.6 at **9.09**, DeepSeek V3 6.95,
  Gemini 2.5 Pro 3.53, Llama 3.1 8B 0.00, human control **3.23**. On these numbers Claude
  still sits at roughly 2.8x the human baseline. **measured, second-hand.**
- The Pangram newspaper study: AI-assisted articles in that subset had "up to 11.53x more em
  dashes than those authored entirely by humans." **measured**
- A 10,000-abstract OpenAlex analysis of ecology papers found the em dash's relative
  frequency more than doubled between 2021 and 2025, with no other punctuation mark close.
  **measured, second-hand.**
- Nick's drafting agents are Claude, and Claude is the model both the Economist and Freeburg
  agree is still above the human rate.

**The honest read.** The ban is no longer supported by "this reads as AI to a reader"; that
justification has decayed and, for ChatGPT-written text, inverted. It is still defensible as
a Claude-specific control and as a house voice choice: two short sentences usually do beat one
sentence held together by a dash. That is a taste decision and should be labelled as one
rather than dressed up as evidence. See the changeset for proposed wording.

Two smaller details worth keeping either way. Wikipedia notes "AI-generated em dashes are
usually surrounded by spaces, contrary to common typographic guidelines". And the Economist's
finding that models *under*-punctuate overall is the stronger and newer signal: a draft with
few commas, no semicolons, no parentheses and no quoted sources is a worse sign than a draft
with dashes.

---

## What the evidence says are human markers

This is the section our current rules most need. Several house bans are aimed at things the
measurements identify as human.

### Measured: the words models will not write

Reinhart et al. (PNAS 2025) publish the inverse fingerprint, as a fraction of the matched
human rate. Lower is more human. **measured**

| Word | Llama 3 8B Instruct | Llama 3 70B Instruct | GPT-4o | GPT-4o Mini |
|---|---|---|---|---|
| obviously | **0.014** | 0.018 | | |
| anyways | 0.0097 | | | |
| yep | 0.016 | 0.0075 | | |
| ok | 0.014 | 0.011 | 0.014 | |
| somebody | 0.012 | | | |
| extremely | | | | **0.0034** |
| blah | 0.015 | | 0.0063 | |
| horrible | | 0.0077 | | |
| nasty | | | 0.011 | |
| unhappy | | | | 0.010 |
| fortunately | | 0.017 | | |
| amid / amongst | | 0.015 / 0.019 | | |
| i.e. / and-or | | 0.018 | 0.0026 / 0.016 | 0.0095 |
| analyse / characterise | 0.011 / 0.013 | | | |
| obscenities generally | ~0.0097 to 0.016 | ~0.0075 to 0.013 | ~0.0079 to 0.014 | ~0.012 to 0.014 |

`obviously` is on our banned list, under empty intensifiers, and is measured at about 1.4% of
the human rate in Llama 3 8B Instruct. It sits in the same family as `anyways`, `yep`, `ok`,
`somebody`, `extremely` and `blah`: the ordinary spoken register that models strip out.

The British spellings (`analyse`, `characterise`) and `amongst` appearing on the
underrepresented side is suggestive and I would not build a rule on it. One model family, and
the human baseline includes British sources, so it could be a corpus effect. Flagging it
because our blacklist bans `whilst` with no evidence behind it at all.

### Measured: the copula

`is` and `are` fall 9% to 17% when a model revises a text (Geng & Trotta). Writing "X is Y"
is a human marker, and the models' replacements (`serves as`, `represents`, `stands as`) are
the tell. **measured**

### Empirically observed by editors: the syntax models avoid

Wikipedia's "Signs of human writing > Syntax" list, described as "empirically observed, over
25 years of Wikipedia writing, to be more common in Wikipedia articles written by humans than
in AI-generated text". Each entry cites a study; the aggregation is editorial. **asserted,
citation-gated**

- Simple is/has phrases: "there is a", "it has a" (cites Geng & Trotta)
- Plain words where a stiff synonym exists: *wrote* not *authored*, *moved* not *relocated*,
  *used* not *utilized*, *tried* not *attempted*, *died* not *passed away*
- **Superlative or definitive statements**: "one of the best", "is the only", "was the first"
- **Hedging qualifiers and intensifiers**: "very", "perhaps", "tends to" (cites Reinhart's SI)
- Isolated wordy constructions: "as a result of", "in order to", "all of the", "a part of",
  "the fact that"

Two of these cut against our rules. We ban `very` under empty intensifiers, and our
anti-overclaiming rule tells agents to soften absolutes, which pushes prose away from the
definitive statements that read as human. The overclaiming rule is a *substance* rule and
should stay. The point is that mechanically softening every definitive sentence has a cost.

### Measured: punctuation and quoted sources

Commas, semicolons and parentheses are human markers (the Economist). So is quoting a named
expert, which models "do not" do. So is the short punchy sentence that breaks up a paragraph.
**measured**

### Measured: the structurally strange sentence

The long tail at every level of syntax (Ju, Blix & Williams). The sentence that is unusually
long, unusually short, oddly left-branching or oddly nested is exactly what models drop.
**measured**

### Measured, in the negative: what readers *think* is human and is not

Jakesch's null cues. These predicted nothing at all about actual authorship, though readers
leaned on them: first-person speech, family content, longer texts, "authentic" or spontaneous
words, past-event focus, and use of contractions. **measured**

Worth stating plainly because our SKILL leans on first person and contractions. They are good
for voice and they are the right call for a personal brand. They are not evidence of humanity
and should not be treated as anti-AI armour.

### The two real cues readers have

Jakesch found only two heuristics where perception and reality aligned: **nonsensical
content** (10.5% more likely to be rated AI; actually 23% more likely to be AI) and
**repetition** (8% more likely to be rated AI; actually 47% more likely to be AI). Relying on
those two alone would have given 58.8% accuracy. Participants got 51.7%, because the flawed
cues destroyed the signal they had. **measured**

And the sting in the tail: text optimised against the flawed heuristics was judged human
65.7% of the time, against 51.6% for ordinary AI text and 51.7% for text actually written by
humans. More human than human. **measured**

---

## Where the sources disagree

Listed rather than resolved.

**Em dashes.** Covered above. The Economist says only Claude exceeds humans and ChatGPT falls
below. Freeburg has GPT-4.1 at 3.3x the human baseline. Pangram has AI-assisted newspaper
articles at up to 11.53x. Different model versions, different dates, different human
baselines, and OpenAI shipped a suppression fix in late 2025. Not reconciled.

**How much of the literature is LLM-touched.** Kobak's paper says at least 10% of 2024 PubMed
abstracts, up to 30% in some subcorpora, and `delves` at r=28.0. SlopDetector cites the same
paper as 13.5%, up to 40%, and "roughly 25 times". Different preprint versions of the same
work. Use the peer-reviewed figures.

**Is `delve` still a tell?** Yakura measures the odds ratio falling from >300:1 to ~40:1
across GPT versions. Wikipedia says it dropped off sharply in 2025. Mak & Walasek (4,820 UK
psychology reports) found ChatGPT-associated words "grew sharply in 2023 and 2024, before
declining in 2025". tropes.fyi tags it `fading`. But Kousha & Thelwall measured `delve` up
1,500% across databases between 2022 and 2024, and Wikipedia notes Grok still overuses
`underscore` in 2026. Reconcilable if you separate *what current frontier models generate*
from *what the published record now contains*, and by model.

**Hedging.** aicheckr and the humanize skill both treat hedge-stacking as an AI tell.
Wikipedia lists hedging qualifiers as a *human* marker, citing Reinhart's supplementary
material. Tabach (2026) measured hedging rate per 1,000 words and found it did not separate
documents that judges reliably sorted. My read: over-hedging is a substance failure (the text
refuses to commit) rather than an AI tell, and should be framed that way. Not resolved.

**Burstiness.** GPTZero publishes 0.6 to 1.2 human against 0.2 to 0.4 model. Ju, Blix &
Williams measure reduced variance and a reduced long tail at corpus scale. Tabach found
sentence-length standard deviation non-separating at document level with n = 21 writers.
Partly reconcilable: a corpus-level regularity need not separate two individual documents.

**Adjectives or verbs?** Liang et al. found adjectives the most stable discriminator and said
so explicitly: "We found this vocabulary choice to exhibit greater stability than using other
parts of speech such as adverbs, verbs, nouns, or all possible tokens." Kobak found 66% of
2024 excess style words were verbs and only 16% adjectives. Different methods (sentence-level
probability shift against excess frequency), same era. On Liang's evidence, adjective bans buy
more than verb bans.

**Short punchy fragments.** Our SKILL asks for them ("Follow a 30-word sentence with a
4-word one"), and the Economist's measurement supports that, since paragraphs "rarely
interrupted with short, punchy statements" is a model signature. But tropes.fyi tags "short
punchy fragments" as a `rising` AI tell: "RLHF training has pushed models toward 'writing for
readability'... It's an inhuman style and no real person writes first drafts this way."
Both can be true. A short sentence *inside* a paragraph reads human; a page of one-line
paragraphs reads machine. Worth watching, since the LinkedIn format pushes toward the second.

**Whether judges are even using extractable features.** Tabach's result is the awkward one:
251 judges made 1,999 paired comparisons and reliably picked the "warned" writer's document
as human 54.13% of the time (binomial p = 0.000243), "Yet on every measurable text feature
extracted, including AI overlap scores, lexical diversity, sentence structure, and pronoun
usage, the two groups were indistinguishable." His own caveat, carried through: n = 21
writers, and "With such a small sample size of writings, we can't run any statistical tests
to genuinely prove the treatment group behaved differently."

---

## Before and after

The rewrite pairs are the most teachable material in the raw. These are from aicheckr.io,
which is vendor content with no corpus behind it (**asserted**), quoted verbatim. Their
"human fix" versions use em dashes; ours would not.

**Hedging overload**
> AI: "This approach might potentially help some teams improve productivity in certain
> contexts, though results may vary depending on various factors, and it could be worth
> considering whether it aligns with your specific needs."
> Human: "This works for teams under ten people. Past that, the standup format collapses
> under its own weight ... and you're better off with async written updates."

**Orphan statistics**
> AI: "Studies show that 73% of businesses now use AI. Research indicates productivity
> increases by up to 40%. Experts agree this trend will accelerate."
> Human: "McKinsey's 2025 state-of-AI survey put enterprise AI adoption at 72%, up from 55% a
> year earlier. Productivity claims vary too much by task to average into one number, which
> is why we measured our own: 22% faster ticket resolution, flat for code review."

**Restating the question as the answer**
> AI: "How much does it cost? Pricing is an important consideration when choosing any tool.
> Costs can vary based on your needs, usage, and the features you require. It's worth
> evaluating your budget carefully."
> Human: "It costs $12/month billed annually, or $18 month-to-month. The free tier covers 5
> checks a day, which is enough for most students. Teams pay per seat with a 20% break at ten
> seats."

**The audience hedge**
> AI: "Whether you're a seasoned professional or just starting your journey, whether you run a
> Fortune 500 company or a small startup, this guide has something for everyone."
> Human: "This guide is for freelancers who invoice under $10k a month and do their own
> bookkeeping. If you have an accountant, skip to the audit section, the rest will bore you."

**The generic opener**
> AI: "In today's fast-paced digital world, artificial intelligence is transforming the way we
> live and work. From healthcare to finance, AI is revolutionizing industries at an
> unprecedented pace."
> Human: "Our support team closed 41% of tickets with no human involvement last quarter. A
> year ago that number was zero. This is what changed, what broke, and what we'd do
> differently."

Their own synthesis is the line worth keeping:

> "Every example above fails the same way: the slop version could have been written without
> knowing anything. No numbers that could be wrong, no positions that could be argued with, no
> details that could only come from doing the work. The human fixes aren't stylistically
> fancier, most are plainer, they're just specific. That's the transferable lesson: you fix
> slop by adding information, not adjectives."

Two more, from Towards AI (**asserted**, editorial):

- "robust system" becomes "service that handles 10k requests per second without dropping
  data." Their rule: replace mood with detail.
- "I wanted to kindly follow up regarding..." becomes "Just checking in on..."

And the substance pair from SlopDetector (**asserted**), the clearest version of the deletion
test:

> AI, survives deletion with nothing lost: "Nutrition plays a crucial role in overall
> wellness. By making mindful choices and understanding your body's needs, you can unlock a
> healthier lifestyle."
> Human, cannot be deleted without losing the fact: "Swap the 6 p.m. soda for water and you
> cut roughly 40,000 calories a year, about 11 pounds. That did more for my blood sugar than
> any app I tried."

Finally, two real published abstracts quoted by Kobak et al. as specimens of the register.
**measured** in the sense that these are genuine 2023 PubMed text the authors pulled to
illustrate their finding:

> "By meticulously delving into the intricate web connecting [...] and [...], this
> comprehensive chapter takes a deep dive into their involvement as significant risk factors
> for [...]."
> "A comprehensive grasp of the intricate interplay between [...] and [...] is pivotal for
> effective therapeutic strategies."

---

## How to actually check a draft

Six passes, in this order. Structure first, words last, because that ordering is the one thing
the practitioner sources agree on and the measurements support.

**1. Structure pass, before touching a sentence.** Towards AI's test: turn each paragraph into
a one-line summary and read those lines as an outline. Does it sound like Nick, or like
definition, list, recap, vague future? "Often, removing the first paragraph, trimming the
recap, and ending one step earlier is enough to remove most of the 'AI feel.'" Then check the
composition list: preamble, compulsive counting, fractal summaries, the Tie-Back, a conclusion
that restates the piece.

**2. Openings pass.** Read only the first few words of every sentence, ignoring meaning. Three
repeats of the same opener or shape, cut or combine. Then count paragraph-opening transitions:
if more than half the paragraphs open with a formal connective, that is stacking.

**3. Shape pass.** Because syntactic templates survive word-swapping (Shaib), this pass has to
be about grammar, not vocabulary.
- Count present participial tails. GPT-4o runs 5.3x human, so a draft with one every other
  sentence is model-shaped.
- Count nominalizations. Turn the noun back into a verb where the sentence allows.
- Find every `serves as`, `represents`, `stands as`, `functions as`, `boasts`, `features`,
  `offers` and ask whether `is` or `has` would do.
- Check the long tail: is there one sentence in the piece that is structurally strange? If
  every sentence is well-formed and medium, put one back.

**4. Counter pass.** Cheap and mechanical.
- Sentence-length variance: standard deviation divided by mean. Under 0.4 in ordinary prose is
  a flag (GPTZero's range, vendor-published).
- Punctuation counts: commas, semicolons, parentheses. Near-zero is the newer, stronger tell
  than dashes.
- Shortest sentence in each paragraph. If every paragraph's shortest sentence is 15 words,
  the rhythm is flat.
- Style-word density, per the changeset: count flagged words per 1,000 and count how many
  *distinct* flagged words share a 300-word window.

**5. Substance pass.** The one that survives every model update.
- Restatement test: after each paragraph, name one concrete thing you now know. A name, a
  number, a date, a trade-off. If more than half the paragraphs fail, the draft is empty
  whoever wrote it.
- Deletion test: remove the sentence. If the paragraph loses nothing, it was filler.
- Uncited-authority ratio: how many claims of authority carry a name, number, link or year?
- Named-source test: does the piece quote a real person? Models do not (the Economist).
- Visualisability test (Robbins): can you see anything? If nothing springs to mind, rewrite.

**6. One corrective second pass, then stop.** The avoid-ai-writing skill caps iteration at two
for a measured reason: "a rewrite plus one corrective pass clears the flagged patterns, and a
third pass costs a full regeneration while rarely finding more."

**What not to do.**

Do not run the draft through a detector and edit toward the score. The one skill that
published a self-measurement got ROC-AUC 0.501 at paragraph level against its own corpus.
Editing to a number that cannot separate machine text from human text just removes texture.

Do not strip the human markers on the way. If a pass removes the contractions, the plain `is`,
the definitive sentence, the parentheses, the odd short sentence and the one word repeated
rather than varied, it has made the draft *more* model-shaped while scoring better.

Do not treat any single hit as evidence. Wikipedia's version: "One or two of these words
appearing in an edit may be coincidental, but an edit (post-2022) introducing lots of them,
lots of times, is one of the strongest tells for AI use."

---

## Sources

Peer-reviewed and measured:

- Kobak, Gonzalez-Marquez, Horvat & Lause, "Delving into LLM-assisted writing in biomedical
  publications through excess vocabulary", *Science Advances* 11(27), 2025. arXiv:2406.07016
- Juzek & Ward, "Why Does ChatGPT 'Delve' So Much?", COLING 2025. arXiv:2412.11385
- Juzek & Ward et al., "Word Overuse and Alignment in Large Language Models", arXiv:2508.01930
- Reinhart, Markey, Laudenbach, Pantusen, Yurko, Weinberg & Brown, "Do LLMs write like
  humans? Variation in grammatical and rhetorical styles", *PNAS* 122(8), 2025.
  arXiv:2410.16107
- Liang et al., "Monitoring AI-Modified Content at Scale", ICML 2024. arXiv:2403.07183
- Geng & Trotta, "Is ChatGPT Transforming Academics' Writing Style?", arXiv:2404.08627
- Kousha & Thelwall, "How much are LLMs changing the language of academic papers after
  ChatGPT?", ISSI 2025. arXiv:2509.09596
- Yakura et al., "Empirical evidence of Large Language Model's influence on human spoken
  communication", arXiv:2409.01754
- Russell, Karpinska & Iyyer, "People who frequently use ChatGPT for writing tasks are
  accurate and robust detectors of AI-generated text", ACL 2025
- Shaib, Elazar, Li & Wallace, "Detection and Measurement of Syntactic Templates in Generated
  Text", EMNLP 2024. arXiv:2407.00211
- Ju, Blix & Williams, "Domain Regeneration", ACL Findings 2025. arXiv:2505.07784
- Jakesch, Hancock & Naaman, "Human heuristics for AI-generated language are flawed", *PNAS*
  120(11), 2023. arXiv:2206.07271
- Milicka, Marklova, Drozdova & Pospisil, "Learning to detect AI texts and learning the
  limits", *PLOS ONE*, 2025. arXiv:2505.01877
- "AI use in American newspapers is widespread, uneven, and rarely disclosed", arXiv:2510.18774

Measured, not peer reviewed:

- "AI-Associated Lexical Shifts Across 34 Languages", arXiv:2605.25358 (preprint)
- The Economist, "How to spot AI writing", 30 July 2026 (paywalled; captured via third parties)
- Tabach, "Can Humans Detect AI?", arXiv:2604.23471 (preprint, n = 21 writers)

Asserted, useful:

- Wikipedia:Signs of AI writing (WP:AICATCH), revision of 2026-08-17
- tropes.fyi, 49 tropes with trend tags
- Hollis Robbins, "How to Tell if Something is AI-Written", Anecdotal Value, 13 Aug 2025
- Louis-Francois Bouchard / Towards AI, "How to Clean Up AI-Generated Drafts", 15 Jan 2026
- Jill Walker Rettberg, "Genre glitches and unexpected promotional phrases", 13 May 2026
- Alex Reinhart, "LLM writing styles" running bibliography, refsmmat.com
- conorbronsdon/avoid-ai-writing SKILL.md (tiering, second pass, self-measured corpus)
- SlopDetector, tiered AI words list and em dash data study (vendor)
- aicheckr.io, 12 before-and-after pairs (vendor)
- Kreuz, "Too many em dashes?", The Conversation, 30 July 2025
- Goedecke, "Why do AI models use so many em-dashes?", 30 Oct 2025

Context on platforms and disclosure:

- LinkedIn "Seems like AI slop" button, 30 July 2026 (TechCrunch, Fortune, Social Media Today)
- Substack and Pangram detection plus "How I make this" disclosure, 21 July 2026
- Prajod et al., "Full Disclosure, Less Trust?", arXiv:2601.09620 (n = 40): detailed
  disclosures lowered trust and subscription rates; one-line disclosure matched no disclosure
- Nakano et al., "Understanding Reader Perception Shifts upon Disclosure of AI Authorship",
  arXiv:2510.24011 (n = 261, 990 evaluations): disclosure erodes perceived trustworthiness,
  caring, competence and likability, worst in interpersonal writing; higher AI literacy
  softens the effect
