# BooookScore — hierarchical merging vs. incremental updating (with full verbatim prompts) + an 8-type coherence error taxonomy

- URL: https://arxiv.org/pdf/2310.00785 ("BooookScore: A systematic exploration of book-length summarization in the era of LLMs", ICLR 2024)
- Date accessed: 2026-08-18
- What it is: The clearest published head-to-head of the two ways to compress a pile of source material into one piece — hierarchical map-reduce merging vs. incremental running-summary updating — with every prompt printed verbatim in Appendix M, plus a reusable coherence-error taxonomy and an LLM-judge rubric built on it. Extracted from the arXiv PDF with pypdf.

---

## VERBATIM — the two strategies (Section 2 / Figure 1 caption)

> Figure 1: To perform book-length summarization, we first divide a book into smaller chunks that fit within the context window of an LLM. Then, we explore two strategies for summarization: (1) hierarchical merging, in which chunks are first summarized and then the corresponding summaries merged via separate prompts; and (2) incremental updating, in which a global summary is updated and compressed as we step through the book chunk-by-chunk.

> Hierarchical merging: Wu et al. (2021) propose a method in which an LLM (in their case, GPT-3) is fine-tuned via reinforcement learning to summarize each chunk and then hierarchically merge the chunk-level summaries until one summary is left of the entire input document. This method has since been simplified into a zero-shot prompting strategy without further training... Hierarchical merging requires three unique prompts for (1) summarizing an input chunk, (2) merging chunk-level summaries, and (3) merging summaries with added context from previously-generated merged summaries.

> Incremental updating: It is possible that since hierarchical merging necessitates summarizing portions of the input document without complete context, it may introduce more coherence errors. For example, in the first level, chunks towards the end of the book will be summarized without knowledge of what came before, which can lead to incoherent summaries especially for non-linear or multi-perspective narratives. We thus explore an alternate prompting strategy — incremental updating — that iterates through each chunk in order while continuously updating a global summary with salient information. While this method may be better able to handle inter-chunk dependencies than hierarchical merging, it requires more complicated prompts for (1) summarizing an input chunk, (2) updating the global summary s1,2,...,i−1 with information from the current chunk ci, and (3) compressing the global summary when it exceeds the maximum summary length Gn.

## VERBATIM — Appendix A.1 / A.2 algorithms

> A.1 HIERARCHICAL MERGING
> Hierarchical merging works as follows:
> 1. Obtain summaries at the base level l = 0 by summarizing each chunk.
> 2. Obtain summaries for the first level l = 1 by prompting the LLM to merge as many consecutive level-0 summaries si, si+1, . . . as possible such that the total length of the merging prompt, the selected summaries, and the prior context (if there exists a preceding summary at the same level) is less than W − Gl, where Gl is a hyperparameter controlling summary length that varies depending on the level l.
> 3. Repeat the previous step recursively until we are left with a single summary for the book.

> A.2 INCREMENTAL UPDATING
> Incremental updating works as follows:
> 1. Feed the summarization prompt into the LLM along with the first chunk c1 to obtain a summary of the first chunk, which initializes the global summary g1
> 2. Now, provide the LLM with the updating prompt, the next chunk c2, and the current global summary g1. The model is prompted to updating the global summary to g2 with information from the current chunk.
> 3. Iterate through the remaining chunks. If gi exceeds the maximum summary length Gn, call the compression prompt to compress gi to fit within the length limit.

> A.2.1 COMPRESSION
> The compression step is required for incremental updating. Through our experimentation, we have observed that as the model processes a book through incremental updating, it consistently adds more information to the running summary instead of removing things. Even with an updating prompt, the summary often surpasses the target length as removing content from it is not in the model's natural inclination. Thus, a separate prompt is needed for the model to condense the summary. However, in hierarchical summarization, condensing is not required. The merging step is less likely to run over the summary limit since it does not have to work with a pre-existing running summary. If the summaries generated during hierarchical merging go over the summary limit, simply asking the model to regenerate up to a fixed number of times would suffice.

> Wu et al. (2021) suggest that since independent chunk-level summarization might miss vital context from earlier sections of the story, we can mitigate this effect by joining as many preceding summaries from the same level as possible. We thus implement this approach in our method.

## VERBATIM — Appendix M.1: INCREMENTAL UPDATING prompts

**Generate initial summary**
> Below is the beginning part of a story:
>
> --- {} ---
>
> We are going over segments of a story sequentially to gradually update one comprehensive summary of the entire plot. Write a summary for the excerpt provided above, make sure to include vital information related to key events, backgrounds, settings, characters, their objectives, and motivations. You must briefly introduce characters, places, and other major elements if they are being mentioned for the first time in the summary. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative. Despite this step-by-step process of updating the summary, you need to create a summary that seems as though it is written in one go. The summary should roughly contain {} words and could include multiple paragraphs.
>
> Summary ({} words):

**Generate intermediate summaries**
> Below is a segment from a story:
>
> --- {} ---
>
> Below is a summary of the story up until this point:
>
> --- {} ---
>
> We are going over segments of a story sequentially to gradually update one comprehensive summary of the entire plot. You are required to update the summary to incorporate any new vital information in the current excerpt. This information may relate to key events, backgrounds, settings, characters, their objectives, and motivations. You must briefly introduce characters, places, and other major elements if they are being mentioned for the first time in the summary. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative. Despite this step-by-step process of updating the summary, you need to create a summary that seems as though it is written in one go. The updated summary should roughly contain {} words and could include multiple paragraphs.
>
> Updated summary ({} words):

**Compression**
> Below is a summary of part of a story:
>
> --- {} ---
>
> Currently, this summary contains {} words. Your task is to condense it to less than {} words. The condensed summary should remain clear, overarching, and fluid while being brief. Whenever feasible, maintain details about key events, backgrounds, settings, characters, their objectives, and motivations - but express these elements more succinctly. Make sure to provide a brief introduction to characters, places, and other major components during their first mention in the condensed summary. Remove insignificant details that do not add much to the overall story line. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative.
>
> Condensed summary (to be within {} words):

## VERBATIM — Appendix M.2: HIERARCHICAL MERGING prompts

**Generate lowest-level summaries**
> Below is a part of a story:
>
> --- {} ---
>
> We are creating one comprehensive summary for the story by recursively merging summaries of its chunks. Now, write a summary for the excerpt provided above, make sure to include vital information related to key events, backgrounds, settings, characters, their objectives, and motivations. You must briefly introduce characters, places, and other major elements if they are being mentioned for the first time in the summary. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative. Despite this recursive merging process, you need to create a summary that seems as though it is written in one go. The summary must be within {} words and could include multiple paragraphs.
>
> Summary:

**Merge summaries**
> Below are several summaries of consecutive parts of a story:
>
> --- {} ---
>
> We are creating one comprehensive summary for the story by recursively merging summaries of its chunks. Now, merge the given summaries into one single summary, make sure to include vital information related to key events, backgrounds, settings, characters, their objectives, and motivations. You must briefly introduce characters, places, and other major elements if they are being mentioned for the first time in the summary. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative. Despite this recursive merging process, you need to create a summary that seems as though it is written in one go. The summary must be within {} words and could include multiple paragraphs.
>
> Summary:

**Merge summaries with prior context**
> Below is a summary of the context preceding some parts of a story:
>
> --- {} ---
>
> Below are several summaries of consecutive parts of a story:
>
> --- {} ---
>
> We are creating one comprehensive summary for the story by recursively merging summaries of its chunks. Now, merge the preceding context and the summaries into one single summary, make sure to include vital information related to key events, backgrounds, settings, characters, their objectives, and motivations. You must briefly introduce characters, places, and other major elements if they are being mentioned for the first time in the summary. The story may feature non-linear narratives, flashbacks, switches between alternate worlds or viewpoints, etc. Therefore, you should organize the summary so it presents a consistent and chronological narrative. Despite this recursive merging process, you need to create a summary that seems as though it is written in one go. The summary must be within {} words and could include multiple paragraphs.
>
> Summary:

## VERBATIM — Appendix M.3: ARTIFACT REMOVAL (the "make it read like one go" cleanup pass)

> Below is a summary of a book:
>
> --- {} ---
>
> Your task is to edit the book summary by removing any phrases that indicate it was developed progressively. Delete terms such as "in the ... segment," "in ... part of the story," "in the ... excerpt," "in the updated summary," and any similar phrases. The goal is to make the summary read as if it was written all at once, not in stages. In addition, eliminate any elements taken from non-narrative sections like the table of contents, acknowledgments, author's biography, author's note, information of the author's other works, and so on. Apart from these adjustments, do not make any other changes to the summary.

## VERBATIM — the 8-type coherence error taxonomy (Table 1), with prevalence (% errors per sentence, incremental / hierarchical)

> Entity omission — An entity (e.g., person, object, place) is mentioned in the summary, but key context or details are missing or unclear. — 7.3 / 3.71
> Event omission — An event is mentioned in the summary, but key details are missing or unclear. — 4.25 / 2.27
> Causal omission — A reason or motivation is missing or under-explained. — 2.75 / 1.21
> Discontinuity — An interruption in the flow of the narrative such as sudden jumps in time or perspective. — 2.23 / 1.56
> Salience — Inclusion of details that do not contribute to the main plot. — 1.42 / 1.03
> Language — Spelling or grammar issues; ambiguous wording. — 0.82 / 0.71
> Inconsistency — A discrepancy or contradiction within a story's plot, character development, or themes. — 0.97 / 1.03
> Duplication — Redundant repetition of similar information. — 2.12 / 1.18

## VERBATIM — Appendix M.4: the LLM-judge (BooookScore) error-identification prompt

> We use ellipsis here to keep this prompt concise. The complete version includes two full summaries and 42 sentence-level annotations, and will be made available in our codebase.
>
> Given a book summary and a sentence from that summary, determine if that sentence causes any confusion. Types of confusion include the following:
> - Entity omission: an entity, real or abstract (person, object, place, concept, etc.) is mentioned, but key details are missing or unclear
> - Event omission: an event is mentioned, but key details are missing or unclear
> - Causal omission: the reason or motivation for something is missing or unclear
> - Salience: inclusion of trivial details that do not contribute to the main storyline
> - Discontinuity: an interruption in the flow of the narrative, including but not restricted to: sudden jumps between perspectives, time periods, or settings; poor transition between sentences or paragraphs; sentences or paragraphs that seem out of place; illogical sentence order or summary structure
> - Duplication: redundant repetition of similar information

## VERBATIM — how the score is computed

> BOOOOKSCORE automatically measures the coherence of summaries generated by a book-length summarization system via few-shot prompting. BOOOOKSCORE is both source-free and reference-free (i.e., it does not require access to the input book or a reference summary)...

> Specification: Assume we have a summary S consisting of sentences s1, s2, . . . , sn. We develop a few-shot error-identification prompt E that instructs the LLM to identify any instances of one of the eight specified error types in a given sentence si of the summary. Concretely, we iterate over each sentence si in the summary, feeding the prompt E, full summary S, and target sentence si at each step. There are two acceptable outputs at each step: either (1) no error is found and the LLM outputs No confusion, or (2) an error(s) is identified and the LLM is asked to generate a corresponding question and associated error type. We include two full summaries with 42 sentence-level annotations in the prompt as demonstrations.

> BOOOOKSCORE(S) = 1/n × Σ_{si∈S} [LLM(E, S, si) == No confusion]

## VERBATIM — headline results (Table 2 + findings)

> Model | Chunk size | BOOOOKSCORE | Avg. length | % novel 3-grams | % rep. 3-grams
> **Summaries generated via hierarchical merging**
> GPT-4 | 2048 | 89.1 | 778.6 | 82.4 | 4.2
> GPT-3.5-Turbo | 2048 | 84.2 | 667.3 | 82.8 | 9.0
> Claude 2 | 2048 | 91.1 | 522.6 | 88.4 | 1.3
> Claude 2 | 88000 | 90.3 | 551.5 | 87.1 | 2.0
> Mixtral-8x7B | 2048 | 81.5 | 679.1 | 85.9 | 4.1
> LLaMA2-7B-Inst | 2048 | 72.4 | 684.9 | 76.4 | 36.1
> **Summaries generated via incremental updating**
> GPT-4 | 2048 | 82.5 | 805.4 | 84.1 | 3.4
> GPT-3.5-Turbo | 2048 | 67.0 | 484.5 | 68.2 | 3.5
> Claude 2 | 2048 | 78.6 | 657.1 | 89.4 | 1.9
> Claude 2 | 88000 | 90.9 | 493.7 | 84.7 | 1.9
> Mixtral-8x7B | 2048 | 64.5 | 558.7 | 82.3 | 3.5

> Incremental summaries are almost always less coherent than their hierarchical counterparts. Hierarchical summaries generally have higher BOOOOKSCORE than incremental summaries, likely because the incremental updating task requires the base LLMs to follow more complex instructions (e.g., deciding what to include from the current book chunk, what to discard from the summary, whether to restructure the summary, etc.). While hierarchical summarization potentially drops long-range dependencies, its instructions are generally simpler (summarize or merge).

> Incremental summarization benefits from increased chunk size. The one exception to the above result is Claude 2 with a chunk size of 88K, whose incremental configuration produces slightly more coherent summaries than the hierarchical version (90.9 vs. 90.3 BOOOOKSCORE). In contrast, using Claude 2 for incremental summarization with a chunk size of 2048 results in a BOOOOKSCORE of 78.6, so clearly the model benefits from fewer updating and compression steps. We do not observe similar behavior with hierarchical summaries, which suggests that hierarchical book-length summarization is preferred for smaller context models.

> Figure 4 compares the error distributions from GPT-4 to those of human annotators and shows that GPT-4 is more sensitive to omission errors and less sensitive to duplication or language errors.

> BOOOOKSCORE does not account for the relative importance of different error types. Unlike [prior work], we do not assign different weights to different error types.

> Unless otherwise specified, we set the chunk size to 2048, maximum summary length Gn to 900, decoding temperature to 0.5, and p = 1 for ancestral sampling. ... We use a temperature of 1 for compression, which improves adherence to the max summary length.

> LLM API costs for our experiments were $10K USD

---

## NOT FETCHED / GAPS
- Figure 4 error-distribution values (image) not extractable.
- The full few-shot BooookScore prompt (with 42 sentence annotations) is only in the authors' codebase, not the PDF.
