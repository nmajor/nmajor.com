# SummIt — iterative summarize → self-evaluate → refine, with a CLOSED SET of edit operations (and the over-correction failure mode)

- URL: https://aclanthology.org/2023.findings-emnlp.714.pdf (also https://arxiv.org/abs/2305.14835) — "SummIt: Iterative Text Summarization via ChatGPT", Findings of EMNLP 2023
- Date accessed: 2026-08-18
- What it is: A two-role loop (summarizer + evaluator) that revises a summary across iterations. Two things here are worth stealing directly: (1) the evaluator is constrained to a **fixed vocabulary of five edit operations** rather than free-form feedback — the paper says this "improves the system performance significantly"; (2) their human study documents an **over-correction problem** — ~90% of edits follow the feedback but only ~50-60% of edits after iteration 2 are actually improvements, and the benefit rate falls as iterations rise. That is a direct argument for a hard iteration cap and a human gate. Extracted from the ACL PDF with pypdf.

---

## VERBATIM — architecture (Section 3.1)

> The system consists of two major components, a summarizer that generates and refines the summary, and an evaluator that generates feedback rationale.

> **Summarizer:** The summarizer is in charge of generating the initial summary and revising a summary conditioned on the given explanations and source document. We instantiate the summarizer with an instruction-tuned language model S.

> After obtaining the i-step self-evaluation feedback ei from the evaluator E, the summarizer will refine the summary accordingly and then generates refined summary y(i+1) as: pS(y(i+1) | x, ei).

> **Evaluator:** The evaluator is another instance of language model E that generates summary quality evaluation and corresponding explanations ei for the i-th iteration as: pE(ei | x, yi).

> **Stopping Criteria:** The evaluator gives a quality assessment of the generated summary and then outputs the rationale for the evaluation as feedback. The summarizer receives model evaluation and feedback from the evaluator, subsequently refining the summary based on this input. This iterative process can be repeated until 1) the evaluator determines that no further refinement is required or 2) fulfills rule-based stopping criteria, such as reaching a maximum iteration number.

## VERBATIM — in-context learning setup (Section 3.2)

> We also use in-context learning to guide our iterative summarization system, where we use "document-reference summary" pairs as the context for the summarizer S, and use "document-reference summary-human written explanation" triplets as the context for the evaluator E. We empirically find that in-context learning could improve the efficacy of our system.

## VERBATIM — THE FIVE EDIT OPERATIONS (Section 3.4) — the key design decision

> Notably, we empirically find that pre-defining the possible edit operations for the evaluator improves the system performance significantly since it avoids free-form edits to the summary by the large language model. Thus, we adopt the five types of text editing operations commonly used in text editing systems (Reid and Neubig, 2022; Faltings et al., 2020). We specifically require the evaluator to generate feedback based on the source document and summary at this iteration with the following five types of possible refinement operations:
> - Add: Add the information of <insert>
> - Remove: Remove the information of <insert> from the summary
> - Rephrase: Rephrase the information of <insert> in the summary
> - Simplify: Shorten the summary
> - Keep: Keep the summary unchanged

## VERBATIM — Table 8: SYSTEM PROMPTS (summarizer and evaluator, all settings)

> **Summarizer**
> You are a summarizer that follows the output pattern. You revise the summary based on the given instructions. You follow all the instructions without commenting on them. Make sure the summary is concise and accurate.
>
> **Evaluator**
> You are a summary evaluator that follows the output pattern. You give scores for the summaries as well as revise suggestions. Your score should be corresponding to your suggestions. You suggestions can be:
> 1. Add the information of []
> 2. Remove the information of []
> 3. Rephrase the information of []
> 4. Shorten the summary.
> 5. Do nothing.
> Only ask for the information that appeared in the document. If you find the summary is too long, ask for a shorter summary. Keep the summary short and concise. If you think there's no further revision is needed, you must add "<STOP>" at the end of your output at the end of the comment. Give precise and clear suggestions.

## VERBATIM — Table 9: USER PROMPTS by setting

> **Quality — Summarizer**
> Summarize: [In-context Examples] Please summarize the following document. [Document Content] [Format Instructions]
> Refine: [Revise Suggestions] Revise the summary. Follow all the suggestions and you can not make more comments. [Format Instructions]
>
> **Quality — Evaluator**
> Evaluate: [In-context Examples] Please evaluate the summary for the document. [Document Content] [Summary Content]. The output should be a probability distribution of assigning the score between 1-5 as well as its justification. Please give revise comments if you think this summary is not good enough. [Format Instructions]
>
> **Control — Summarizer**
> Summarize: [In-context Examples] Please summarize the following document based on the given topic sentence. [Document Content] [Topic Sentence] [Format Instructions]
> Refine: [Revise Suggestions] Revise the summary. Follow all the suggestions and you can not make more comments. [Format Instructions]
>
> **Control — Evaluator**
> Evaluate: [In-context Examples] Please evaluate the summary for the document to check if the summary follows the given topic sentence. [Document Content] [Summary Content] [Topic Sentence]. The output should be a probability distribution of assigning the score between 1-5 as well as its justification. Please give revise comments if you think this summary is not good enough. [Format Instructions]
>
> **Faithfulness — Summarizer**
> Summarize: [In-context Examples] Please summarize the following document based on the given relationships. [Document Content] [OpenIE Relationships] [Format Instructions]
> Refine: [Revise Suggestions] Revise the summary. Follow all the suggestions and you can not make more comments. [Format Instructions]
>
> **Faithfulness — Evaluator**
> Evaluate: [In-context Examples] Please evaluate the summary for the document to check if the summary follows the given relationships. [Document Content] [Summary Content] [OpenIE Relationships]. The output should be a probability distribution of assigning the score between 1-5 as well as its justification. Please give revise comments if you think this summary is not good enough. [Format Instructions]

> Note that according to OpenAI's document, the model could receive two categories of prompts: system prompt and user prompt, where the system prompt functions as the global instruction to initialize the model and the user prompt as the question proposed by users. In our experiment, we leverage both prompts to guide the model and select the best prompts on a dev set of 50 examples.

## VERBATIM — knowledge and topic extractors (faithfulness + controllability)

> **Knowledge Extractor:** In particular, we utilize OpenIE, which extracts knowledge k in the form of triplets from the source document. During each iteration, the summarizer (S) is guided to refine the summary in accordance with the extracted knowledge, represented as: pS(y(i+1) | x, ei, k). Moreover, the evaluator (E) can be directed to factor in faithfulness when delivering feedback, denoted as pE(ei | x, yi, k), as LLMs have shown to be efficient faithfulness evaluators.

> **Topic Extractor:** Given an aspect-oriented query q, we prompt both summarizer S and evaluator E to initially extract relevant snippets, each containing less than 5 words, from the source document x. Following the extraction, these components then proceed to either generate or assess the summary by taking into account the extracted snippets. The iterative nature of our framework further facilitates the controllable summary generation, allowing for the easy transformation of generic summaries into topic-focused summaries based on the user's preferences.

## VERBATIM — Table 6: ablation on the edit operations (CNN/DM, zero-shot)

> | | R1 | R2 | RL | G-Eval |
> | SummIt | 36.50 | 13.49 | 26.76 | 4.33 |
> | -w/o Add | 33.01 | 11.55 | 24.71 | 3.98 |
> | -w/o Remove | 36.46 | 13.44 | 26.55 | 3.64 |
> | -w/o Rephrase | 34.71 | 12.12 | 26.31 | 3.82 |
> | -w/o Simplify | 33.49 | 12.33 | 25.76 | 3.55 |
> | -w/o Keep | 33.87 | 13.03 | 25.70 | 3.94 |

> According to the results, each option contributes to the success of our method, and the add operation affects the ROUGE score most, while the simplify operation affects the GPT-evaluation scores the most. Without adding the operation, the information in the iterative process will only decrease, resulting in less n-gram overlap. On the other hand, without the simplify and remove operations, the redundant information results in low G-Eval scores.

## VERBATIM — Section 5.2, the OVER-CORRECTION ISSUE (the important warning)

> A recent work (Liu et al., 2023) highlights the potential issue of LLM-based evaluators having a bias towards the LLM outputs, which raises the doubt: [1) Does the refinement actually improve the summary?] 2) Does the refinement actually follow the rationale feedback from the evaluator?

> To address these two concerns and provide further validation for the step-wise summary refinement in SummIt, we conducted the corresponding human evaluations. Specifically, we asked expert human annotators to label 1) whether these edits resulted in improvements to the summary based on human judgment and 2) whether the edits made by the summarizer align with the feedback provided in the last step by the evaluator.

> The results of the human evaluation, presented in Figure 3, indicate that approximately 90% of the edits performed by the summarizer adhered to the provided feedback as intended on both datasets. However, only around 50−60% of these edits after 2 or more iterations were deemed beneficial according to human judgment, whereas the evaluator in SummIt still asks to perform the refinements. We also notice a clear trend that the percentage of beneficial refinements decreases as the iteration number goes up. The finding shows an Over-correction problem: the LLM may demand itself to continuously refine the summary based on its own evaluation criteria, rather than adhering to the true evaluation criteria of good summaries by humans.

> This finding highlights the need for better stopping criteria in developing iterative summarization systems, and we argue that incorporating human-in-the-loop may be a potential solution. We leave this for future work.

> Our human evaluation finds that the summary refinement by our framework can clearly follow the self-evaluation feedback, but is highly biased toward its own evaluation criteria, rather than human judgment. We believe the potential issue could be addressed with human-in-the-loop feedback.

## VERBATIM — limitations

> Instead of conducting experiments on the entire test set, we randomly sample 1000 examples from each dataset test set due to budget limits.
> We only use gpt-3.5-turbo model from openAI API as an instance of large language models.

---

## NOT FETCHED / GAPS
- Figure 3's exact per-iteration percentages (image) — only the ~90% / ~50-60% figures stated in the body text are captured.
- Table 7 / Appendix C full worked example of the iterative refinement not extracted.
