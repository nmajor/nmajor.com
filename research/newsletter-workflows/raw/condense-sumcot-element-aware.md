# SumCoT — extract-then-integrate summarization (element-aware), with the real prompt files from the authors' repo

- URLs:
  - Paper: https://arxiv.org/pdf/2305.13412 / https://aclanthology.org/2023.acl-long.482/ ("Element-aware Summarization with Large Language Models: Expert-aligned Evaluation and Chain-of-Thought Method", ACL 2023)
  - Code + prompts: https://github.com/Alsace08/SumCoT
- Date accessed: 2026-08-18
- What it is: A two-stage condensing method — stage 1 asks fixed guiding questions to *extract* the core elements, stage 2 asks the model to *integrate* the source + questions + answers into a summary. It is the cleanest published version of "extractive-then-abstractive as a prompt chain", and the paper also publishes an expert **writing protocol** (micro demands = required elements; macro demands = quality dimensions) which is directly reusable as an editorial rubric. Paper extracted with pypdf; prompts cloned via `gh repo clone Alsace08/SumCoT`.

---

## VERBATIM — the actual prompt files in the repo (`prompts/`, complete)

`prompts/cot_element_extraction.txt` (Stage 1, the four guiding questions):
```
What are the important entities in this document?
What are the important dates in this document?
What events are happening in this document?
What is the result of these events?
Please answer the above questions:
```

`prompts/cot_generation_cnndm.txt` (Stage 2):
```
Let's integrate the above information and summarize the article:
```

`prompts/cot_generation_xsum.txt` (Stage 2, one-sentence variant):
```
Let's integrate the above information and summarize the article in one sentence:
```

`prompts/std_generation_cnndm.txt` (the baseline it beats):
```
Summarize the above article:
```

`prompts/std_generation_xsum.txt`:
```
Summarize the above article in one sentence:
```

## VERBATIM — the two-stage pipeline (Section 4.1)

> 4.1 Two-stage Pipeline
> We first ask the LLMs to extract core news elements in the source document by manually-set guiding questions, and later integrate the information based on the extracted elements and more details from the source documents. Pipeline details are as follows.
>
> • Stage 1: Core element extraction. In the first stage, we create guiding-question prompts to elicit the LLMs to extract four core elements: Entity, Date, Event, Result. For the i-th element, we set a simple question qi to guide the model for extracting it (shown in Figure 2), and then concatenate these questions into Q = [q1, q2, q3, q4]. Let the source document be S, then the LLMs input in this stage is formulated as [S; Q].
>
> • Stage 2: Multiple information integration and summarization. We obtain an extraction answer A from the LLMs in Stage 1. Next, we integrate the extracted elements and more detailed information from the source document. We concatenate the source document, questions, answer, and a simple prompt [p′]="Let's integrate the above information and summarize the article: " to prompt the LLMs for summary generation. The input in this stage is formulated as [S; Q; A; [p′]], and the output is the final summary.
>
> Similarly, for XSum, [p′]="Let's integrate the above information and summarize the article in one sentence: "

> Summary Chain-of-Thought (SumCoT) to elicit LLMs to generate summaries step by step ... extract the four most core elements for standardized news texts — Entity, Date, Event, Result —

## VERBATIM — the expert WRITING PROTOCOL (Section 2.2) — reusable as an editorial rubric

> Annotators must follow a comprehensive protocol when writing. Specifically, we divide the protocol into micro demands and macro demands. The former emphasizes our targets, namely element awareness, and the latter guarantees the professionalism and objectivity of the overall writing quality, which alleviates the simple stacking of elements. The two demands complement each other.

> **Micro Demands.** All news summaries should have four essential core elements — Entity, Date, Event, and Result — following the "Lasswell Communication Model" (Lasswell, 1948), and these elements must be faithful to the source document. For example, when there is no date in the source document, writers can not add dates to the final summary by force.

> **Macro Demands.** All news summaries should focus on four dimensions. (i) Fluency: No spelling, grammatical, or syntactic errors within sentences; (ii) Coherence: The summary should not be a heap of events, and linguistic transition must be smooth and logically correct; (iii) Consistency: No hallucinated facts — neither facts that do not appear in or are contrary to the source document are allowed; (iv) Relevance: Adequately weigh the importance of multiple facts, and find the core concern of the text. Non-core facts can be reduced in length, and redundant details are not allowed.

## VERBATIM — annotation process (what "expert-written" cost)

> we ask three news experts to independently write professional summaries for 200 randomly sampled source documents according to a complete writing protocol ... Different from crowd-sourcing, the involvement of professional writers allows higher inter-annotator agreement. Also, to ensure the uniformity of writing style, we require one of the experts to lead the writing, and the other two to judge the completed summary in four dimensions from the protocol. If there exist inconsistent opinions, they will revise the summary after internal discussion until all pass this annotation. Statistically ... For CNN/DailyMail, a summary is written in 25-30 minutes on average, and for BBC XSum, in 15-20 minutes on average.

## VERBATIM — abstraction statistics (Table 1 commentary)

> we report the percentage of novel n-grams that are included in the summary but not in the source document. We note that the percent of novel n-grams in element-aware summaries is lower than that of dataset-specific summaries but with a reasonable gap, which reflects that expert-writing element-aware summaries would be more faithful to the source documents but not heavily replicate them.

> Reference Summary CNN/DailyMail — % of novel uni/bi/trigram | Avg. summary length of words/sentences
> Dataset-specific: 17.00/53.91/71.98 | 50.14/3.59
> Element-aware: 20.31/49.72/62.14 | 51.08/2.71
> Reference Summary BBC XSum — % of novel uni/bi/trigram | Avg. summary length of words/sentences
> Dataset-specific: 39.39/87.86/96.95 | 22.18/1.00
> Element-aware: 36.28/70.56/82.36 | 23.33/1.00

## VERBATIM — results

> Model | CNN/DailyMail: ROUGE-1 | ROUGE-2 | ROUGE-L | BERTSCORE
> Previous SOTA: 37.98 | 18.16 | 34.34 | 0.8905
> 175B GPT-3: 37.75 | 15.20 | 34.25 | 0.8905
> 175B GPT-3 w/ SumCoT: 43.03 (↑5.05) | 19.51 (↑1.35) | 38.67 (↑4.33) | 0.9023 (↑0.0118)
>
> Model | BBC XSum: ROUGE-1 | ROUGE-2 | ROUGE-L | BERTSCORE
> Previous SOTA: 31.74 | 10.95 | 25.42 | 0.8933
> 175B GPT-3: 31.74 | 10.95 | 25.42 | 0.8933
> 175B GPT-3 w/ SumCoT: 35.70 (↑3.96) | 15.31 (↑4.36) | 30.19 (↑4.77) | 0.9018 (↑0.0085)

> Table 6: Human evaluation scores (Scale -3~3, and 0 represents the level of element-aware summaries) for zero-shot summaries of GPT-3 w/o and w/ SumCoT. Flu/Coh/Con/Rel stands for Fluency/Coherence/Consistency/Relevance respectively.
> 175B GPT-3 — CNN/DailyMail: -0.18/-0.33/-0.37/-0.72 | BBC XSum: -0.19/-0.48/-0.33/-0.56
> w/ SumCoT — CNN/DailyMail: -0.10/-0.05/-0.23/-0.28 | BBC XSum: -0.11/-0.19/-0.07/-0.22

> Results (as shown in Table 6) indicate that the SumCoT technique further improves the performance of the standard zero-shot paradigm in all dimensions, particularly coherence and relevance.

> How does SumCoT affect summary writing? First, we explore the extent to which SumCoT affects the final summary generation. We compute the coverage, the fraction of extracted elements in Stage 1 actually appearing in the final summary generated in Stage 2.

## VERBATIM — worked example (Table 4), standard vs. SumCoT

> **GPT-3 Zero-shot Summary (Standard)** — prompt: *Summarize the above article:*
> The article discusses how Rod Blagojevich, a former Illinois governor, has let his hair go while serving his prison sentence. The photos show the former governor with white hair, rather than the black hair that was his trademark as a politician. Blagojevich is currently serving a 14-year sentence at the Federal Correctional Institution Englewood near Denver.
>
> **GPT-3 Zero-shot-cot Summary (Using SumCoT)** — prompt: *Let's integrate the above information and summarize the article:*
> In 2008, Rod Blagojevich was arrested for trying to sell Barack Obama's U.S. Senate seat. He was impeached and removed from office in 2009, and sentenced to 14 years in prison. He is currently serving his sentence at the Federal Correctional Institution Englewood near Denver. In 2014, his lawyers attempted to appeal his conviction, arguing that a recent Supreme Court ruling supported their view that Blagojevich was engaged in legal, run-of-the-mill political horse trading, not corruption.

---

## NOT FETCHED / GAPS
- Figure 2 (the pipeline diagram) and Figure 4 (human-eval bar chart values) are images; the PDF text layer for Figure 4's numbers is unrecoverable glyph codes.
- Appendix C.1 coverage examples not extracted.
