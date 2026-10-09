# Selecting the right established meme template

Research date: 2026-09-29

## Bottom line

There is no proven general-purpose model that can take a business story and reliably choose the funniest established meme for it. The best available work supports a narrower and more useful design:

1. Convert the story into a small set of possible joke relationships.
2. Retrieve templates by their established meaning and usage examples, not by their visual appearance or the nouns in the story.
3. Write and render several valid candidates.
4. Reject structural mismatches before judging humor.
5. Rank the survivors for relevance, surprise, readability, audience fit, and safety.
6. Learn from Nick's pairwise choices and rejection reasons.

This should be its own selection skill. Catalog expansion and campaign rendering solve different jobs. The selector should never invent a template. If the active catalog has no strong match, it should return `NO_MEME_FIT`.

The immediate opportunity is retrieval and evaluation, not model fine-tuning. The current catalog already has semantic contracts. Those contracts need better retrieval fields and a selection loop that generates several joke angles before it names a template.

## What the research says

### A template has an established communicative function

The strongest recurring result is that a template is not interchangeable background art. It carries base semantics that the caption customizes.

The KYMKB work collected 5,220 Know Your Meme templates and more than 54,000 images, including template descriptions, origins, and examples. Its experiments found that template knowledge was competitive with or better than fine-tuned baselines on several meme-analysis tasks. Templates alone were often as useful as templates plus many example images. This supports the repo's contract approach: meaning, role slots, invariants, and examples are the useful unit of retrieval. It does not prove that KYMKB can choose a funny LinkedIn meme. [A Template Is All You Meme, NAACL 2025](https://aclanthology.org/2025.naacl-long.525/)

MetaMeme describes five broad structures: image macro, reaction image, exploitable, duality, and escalating progression. Its results are also a warning. A vision classifier achieved 99.8 percent template accuracy on held-out Imgflip images but only 40.5 percent on Reddit examples in the wild. A language model reached only about 42 percent accuracy on the authors' meta-category task. Prompting alone did not solve structural understanding. [MetaMeme, NAACL SRW 2025](https://aclanthology.org/2025.naacl-srw.35/)

Practical implication: first decide the relationship the joke needs. A familiar face, film still, or keyword match cannot substitute for that step.

### Textual usage is a better semantic signal than visual similarity

SemanticMemes learned template representations from the captions people actually used. It grouped 6,384 templates and 3.8 million Reddit meme instances into 784 semantic clusters. Human raters judged whether text from one template could reasonably transfer to another. The text-only RoBERTa representation had 0.78 semantic precision and 0.44 visually adjusted precision. The CLIP representation scored 0.65 and negative 0.09 respectively, meaning its clusters were strongly contaminated by visual resemblance. The annotators' agreement was substantial at Krippendorff's alpha of 0.75. [SemanticMemes, NAACL 2024](https://aclanthology.org/2024.naacl-long.166/)

SemioMeme reaches the same conclusion from a knowledge-graph direction. It separates cultural relationships from image and text embeddings because visually similar memes can have different cultural meanings, while semantically related memes may look nothing alike. Its released resource covers 16,707 meme concepts, 507,000 instances, and 7.2 million graph triples. It supports hybrid queries that apply semantic constraints before similarity search. [SemioMeme, ICWSM 2026](https://ojs.aaai.org/index.php/ICWSM/article/view/42792)

Practical implication: index contract meanings, relationship invariants, and real captions. Do not rank templates from blank-image embeddings. Visual information matters later for slot mapping, expression, and readability.

### Retrieval gets candidates. It does not reliably pick the funniest one

The closest current evidence is a 2026 meme-reply benchmark with 100,000 context and manga-panel pairs, rated through 500,000 human annotations. A preference-based language model reached a mean Score@1 of 0.325. The best text-embedding retrieval reached 0.320. Random selection scored 0.255. On the high-agreement subset, the best consensus hit rate was only 5.2 percent. Visual and multimodal models did not consistently improve selection. The paper found that retrieval was good at avoiding irrelevant choices, while preference models sometimes caught irony, escalation, and persona. Both struggled to distinguish subtle differences among semantically similar candidates. [Memes-as-Replies preprint](https://arxiv.org/abs/2602.15842)

That task uses licensed manga replies, not classic image macros or LinkedIn posts. The absolute scores should not be transferred to this workflow. The failure pattern still matters: similarity gives safe, obvious matches; surprise requires a second judgment.

Two older systems show why an embedding-only implementation is not enough:

- memeBot trained a closed-set classifier on 177,942 captions from only 24 templates. Its best model achieved about 69 percent template accuracy. This proves that captions contain template signal, but the test mostly asks the model to recover the template that generated an existing caption. It does not test open-ended editorial angle selection. [memeBot](https://arxiv.org/abs/2004.14571)
- An ICCC 2024 proof of concept embedded descriptions for 18 templates and retrieved with FAISS. Its authors reported that selection tended toward the same three templates and that some selected templates were unrelated to the input. It offered examples, not a comparative selection evaluation. [Computational Creativity in Meme Generation](https://computationalcreativity.net/iccc24/papers/ICCC24_paper_189.pdf)

Practical implication: semantic retrieval should produce a diverse shortlist. A separate critic should score the rendered joke. The retrieval score must never become the final recommendation by itself.

### Humor needs both fit and a turn

The meme-reply benchmark found that the obvious, semantically closest answer was often relevant but unfunny. Stronger selections added exaggeration, irony, an unexpected persona, or a recontextualization that still made sense. This gives the selector a concrete distinction:

- `topic match`: the meme repeats what the post already says.
- `joke move`: the meme changes the reader's interpretation through contrast, reversal, escalation, recognition, understatement, or another valid mechanism.

A 2026 Journal of Experimental Social Psychology paper ran four experiments with 999 participants. Its abstract reports that fluency increased perceived coherence and that making visual memes harder to process reduced funniness. The precise effect sizes require the full paper, which was not openly accessible in this run. The result supports a readability gate, not a formula for humor. [Gorenz and Schwarz, 2026](https://doi.org/10.1016/j.jesp.2026.104970)

An older Scientific Reports study found that less similar meme concepts were more successful in a 2011 to 2013 MemeGenerator dataset of 326,181 implementations across 562 memes. The study did not examine LinkedIn, current audience norms, or choosing a template for a fixed story. Treat novelty as a tie-breaker, not a promise of reach. [Average Is Boring](https://www.nature.com/articles/srep06477)

### Pairwise preference data is useful, within limits

The HUMOR preprint trains a pairwise reward model within groups that share a template. It explicitly avoids cross-template score calibration because humor judgments are noisy across different conventions. It also separates template-level intent from context-level writing. This is a sound pattern for improving captions once a template has been selected. It does not solve the choice between, for example, One Does Not Simply and Drakeposting. [From Perception to Punchline preprint](https://arxiv.org/abs/2512.24555)

MemeArena is about harmfulness evaluation rather than funniness, so its substantive scores do not transfer. Its methodology supports two useful practices: compare candidates pairwise, and use an explicit context-specific rubric rather than an unconstrained global score. [MemeArena, EMNLP 2025](https://aclanthology.org/2025.emnlp-main.890/)

Practical implication: collect two types of feedback separately. Record which template best expresses the angle, then which caption works best within that template.

## Recommended selection system

### 1. Build a meme brief before searching

The selector should transform each post into this structured brief:

| Field | Question |
|---|---|
| factual spine | What happened, without editorial language? |
| operator truth | What does the reader recognize from work? |
| target | What behavior, incentive, process, or institution is fair game? |
| protected subject | Who must not become the joke? |
| stance | Admiration, warning, frustration, disbelief, relief, or self-critique? |
| tension | What two facts or expectations collide? |
| reveal | What is the surprising second fact? |
| audience knowledge | What can an AI decision-maker understand without the post caption? |

Named companies remain evidence. The meme should usually encode the reusable work pattern.

### 2. Generate joke mechanisms before templates

Create three to five distinct joke briefs. Each must name its mechanism and relation, not a template. A useful mechanism vocabulary for this audience is:

- supposedly simple action with a hidden constraint
- rejected option versus preferred option
- tempting distraction versus neglected obligation
- confident plan followed by the overlooked failure
- alarm, temporary relief, worse reveal
- ordinary to absurd escalation
- two unlikely groups sharing one specific condition
- false category or mistaken recognition
- stated policy versus actual incentive
- tiny task versus disproportionate process
- expert confidence versus missing operational detail
- literal interpretation that exposes an absurdity

This list is a starting ontology, not a quota. The selector should drop mechanisms that the story cannot support.

### 3. Retrieve by meaning and relationship

Add retrieval fields to every active template contract:

- `semantic_family`
- `relationship_graph`, such as `actor -> abandons -> obligation -> for -> temptation`
- `humor_mechanisms`
- `affect`
- `audience_baggage`
- three to ten representative caption patterns
- `familiarity_tier` with date and source
- `selection_notes`, including near-neighbor templates and why this one differs

Use weighted lexical search first because the catalog is small and the result is auditable. Search the meaning, invariant, usage examples, and mechanism fields. A local sentence-embedding index can become a second retriever after the baseline exists. Merge results, but require exact relationship compatibility.

The query should contain the abstract joke brief. It should omit company names and most topic nouns. Searching `factory knowledge Rockwell AI` invites superficial matches. Searching `action described as easy but blocked by years of tacit setup` correctly retrieves a difficulty template such as One Does Not Simply.

Retrieve no more than three templates per joke mechanism. Then diversify the combined shortlist so that five near-identical contrast templates do not crowd out other valid moves.

### 4. Instantiate and render before ranking

Generate one concise caption for each shortlisted template under its slot contract. Render every candidate at the actual output size.

Reject a candidate if any answer is no:

1. Does every label occupy its established semantic role?
2. Is the joke understandable without reading the LinkedIn post?
3. Does it add a turn rather than paraphrase the story?
4. Is every factual implication supported?
5. Is the target a decision, process, incentive, or the author, rather than a vulnerable person?
6. Is the text readable at phone size?
7. Is the template established, active, and within the accepted safety and rights gate?

This gate should run before any weighted scoring. A structurally wrong but recognizable meme must not win on familiarity.

### 5. Rank the survivors with a bounded rubric

Use a 0 to 3 scale for each dimension. The numbers make tradeoffs visible; they are not universal humor measurements.

| Dimension | 0 | 3 |
|---|---|---|
| relationship fit | template roles distort the idea | the established relationship is exact |
| surprise with coherence | obvious paraphrase or random twist | a non-obvious turn clicks immediately |
| compression | needs explanation | the image and a few words carry the joke |
| operator recognition | generic internet joke | evokes a specific work experience |
| audience familiarity | obscure or misleading baggage | recognizable without overpowering the point |
| voice and target | smug, cruel, corporate, or unlike Nick | dry, specific, and aimed at the right thing |
| visual fluency | crowded or unreadable | legible in a feed thumbnail |

Require `relationship fit = 3`. Among the rest, use the rubric to choose two or three finalists. Then run pairwise comparisons with the meme brief visible:

> Which candidate makes the sharper, more surprising version of this exact operator truth without changing the claim?

Do not ask a model to assign one global funniness score across the entire catalog. Do not let multiple critics debate until they converge. The evidence does not show that either practice improves template choice.

### 6. Return an explanation with the winner

The output should list:

1. recommended rendered meme
2. one sentence naming its joke mechanism
3. one sentence explaining why its template relationship fits
4. runner-up only if it expresses a materially different joke
5. rejected finalists and their concrete failure reasons
6. confidence as `high`, `medium`, or `low`
7. `NO_MEME_FIT` when nothing clears the gate

The recommendation should be easy to audit. “Embedding score 0.84” is not an editorial explanation.

## What to train and what not to train

### Start with retrieval plus rules

There are only 63 active templates in the current local catalog. A transparent lexical retriever over rich contracts, followed by structured generation and a pairwise critic, is likely to be easier to improve than a fine-tuned model. The research supports this architecture, but no paper validates it for Nick's audience. Treat it as the baseline to test.

### Capture learning data from every run

For every post, save:

- the meme brief
- all joke mechanisms considered
- retrieved templates and retrieval scores
- rendered candidates
- hard-gate failures
- rubric scores
- Nick's selected candidate or `none`
- pairwise choices when Nick compares two candidates
- Nick's free-text reason, converted into a controlled rejection code without deleting the original comment
- post performance after publication, including impressions, dwell or click measures if available, reactions, comments, and follows

Useful rejection codes include `wrong_relationship`, `obvious`, `too_explanatory`, `wrong_target`, `stale`, `obscure`, `too_much_text`, `not_my_voice`, and `good_template_bad_caption`.

### Learn two models, not one

When enough consistent decisions exist, train or fit:

1. A template retriever. Positive examples are templates Nick accepted for a given abstract joke brief. Hard negatives are semantically close templates he rejected for relationship mismatch. Evaluate this model with Recall@3, Recall@5, and mean reciprocal rank.
2. A within-template caption ranker. Positive labels come from pairwise caption preferences under the same template and brief. This is the task best supported by current preference-learning research.

Cross-template final ranking should remain a rubric plus human approval until the local data shows reliable agreement. There is no defensible fixed sample threshold in the reviewed work. Begin model experiments only after the rejection labels stop changing and the same kinds of decisions recur often enough for a held-out test set.

### Treat LinkedIn engagement as weak feedback

Engagement mixes template quality with topic, hook, posting time, reach, existing audience, and platform distribution. It cannot tell us that a template was correct from one post. Use it as a secondary outcome after normalizing for impressions and comparing against posts from similar content lanes. Never train directly on raw likes.

A stronger near-term signal is Nick's blinded choice among two or three rendered candidates. It directly measures the editorial target and produces useful hard negatives.

## Evaluation plan

Build a small frozen benchmark from past posts and new briefs. Each item should have one or more acceptable templates, explicit unacceptable near-misses, and a short rationale. Multiple acceptable answers are important because meme selection is not single-label truth.

Track these measures:

| Measure | What it catches |
|---|---|
| Recall@3 and Recall@5 | whether retrieval surfaced any acceptable template |
| MRR | whether good templates appear early |
| relationship violation rate | semantic misuse despite surface relevance |
| `NO_MEME_FIT` precision | whether the system avoids forced memes |
| pairwise agreement with Nick | whether the final critic matches the editorial choice |
| explanation sufficiency | whether a reviewer can verify the choice without rerunning research |
| template repetition rate | whether one familiar template is becoming a default crutch |
| phone-size failure rate | whether rendered candidates survive actual feed conditions |

Compare three systems on the same benchmark:

1. current direct LLM selection from the catalog
2. semantic retrieval from enriched contracts
3. semantic retrieval plus diversified joke mechanisms and pairwise reranking

That test will show which part improves hit rate. Do not credit the whole pipeline for gains without an ablation.

## Proposed skill boundary

Create a dedicated `meme-selector` skill between writing and `social-meme-campaign`.

Input:

- exact post body
- source facts
- target audience
- optional opinion or intended angle
- active template contracts
- recent template-use history

Output:

- `meme-brief.json`
- `joke-angles.jsonl`
- `retrieval.jsonl`
- rendered shortlist
- `selection.json` with recommendation, runner-up when justified, scores, and rejection reasons

Responsibilities:

- generate joke angles
- retrieve active established templates
- validate semantic relationships
- render candidates for judgment
- rank and explain
- record feedback

Non-responsibilities:

- finding or admitting new templates
- generating replacement artwork
- clearing image rights
- approving or scheduling a post

Catalog research remains a separate process. `social-meme-campaign` continues to render, validate, record rights, and attach the selected asset.

## Claims the evidence does not support

- “Use an embedding database and the best meme will appear.” Retrieval systems repeatedly produce relevant but unfunny or biased shortlists.
- “A multimodal model will understand the image better.” In the closest selection benchmark, visual inputs did not consistently improve results.
- “More templates automatically improve choices.” A larger catalog raises recall and also produces more hard negatives. Contracts and reranking matter more.
- “A model can assign an objective funniness score.” Humor labels are noisy, context-dependent, and more stable within coherent comparison groups.
- “The most popular template will perform best.” Familiarity helps comprehension, but the reviewed popularity evidence does not establish that rule for LinkedIn.
- “LinkedIn likes can train the selector directly.” Platform distribution and topic confound the result.
- “Several agents agreeing means the meme is funny.” Agreement can repeat shared model bias. The useful test is agreement with held-out human choices.

## Recommended next move

Implement the selector as a rule-guided retrieval and reranking skill first. Enrich the existing 63 active contracts with relationship, mechanism, affect, examples, and freshness metadata. Create a benchmark from prior successful and rejected meme decisions. Run the three-way comparison above.

This can improve hit rate without pretending the humor problem has been solved. It also gives the system a clean way to learn: every selection, rejection, and “none of these” becomes structured evidence for the next run.

## Research artifacts

The unedited PDFs, HTML responses, API snapshots, repository READMEs, extracted text, checksums, and source index are preserved under [`raw/`](raw/). The index records source type, URL, and intended use.
