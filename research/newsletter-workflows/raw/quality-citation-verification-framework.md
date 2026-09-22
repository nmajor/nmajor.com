# "Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents"

- URL: https://arxiv.org/abs/2605.06635 (HTML read at https://arxiv.org/html/2605.06635v1)
- Date accessed: 2026-08-18
- Submitted: 7 May 2026. Authors: Hailey Onweller, Elias Lumer, Austin Huber, Pia Ramchandani, Vamse Kumar Subbiah, Corey Feld.
- What it is: A three-stage framework that extracts every inline citation from an LLM-written Markdown report (via a Markdown AST parser, no LLM inference), fetches the cited page, and scores each citation-claim pair on three binary dimensions with rubric-constrained LLM judges. This is directly a "does the draft's evidence actually hold up" gate that could sit between draft and send.

## Abstract (VERBATIM)

> Large language models (LLMs) power deep research agents that synthesize information from hundreds of web sources into cited reports, yet these citations cannot be reliably verified. Current approaches either trust models to self-cite accurately, risking bias, or employ retrieval-augmented generation (RAG) that does not validate source accessibility, relevance, or factual consistency. We introduce the first source attribution evaluation framework that uses a reproducible AST parser to extract and evaluate inline citations from LLM-generated Markdown reports at scale. Unlike methods that verify claims in isolation, our framework closes the loop by retrieving the actual cited content, enabling human or model evaluators to judge each citation against its source. Citations are evaluated along three dimensions. (1) Link Works verifies URL accessibility, (2) Relevant Content measures topical alignment, and (3) Fact Check validates factual accuracy against source content. We benchmark 14 closed-source and open-source LLMs across three evaluation dimensions using rubric-based LLM-as-a-judge evaluators calibrated through human review. Our results reveal that even the strongest frontier models maintain link validity above 94% and relevance above 80%, yet achieve only 39-77% factual accuracy, while fewer than half of open-source models successfully generate cited reports in a one-shot setting. Ablation studies on research depth show that Fact Check accuracy drops by approximately 42% on average across two frontier models as tool calls scale from 2 to 150, demonstrating that more retrieval does not produce more accurate citations. These findings reveal a critical disconnect between surface-level citation quality and factual reliability, and our framework provides the evaluation infrastructure to assess the disconnect.

## The pipeline (VERBATIM, §3)

> Our framework evaluates source attribution quality in LLM-generated research responses through a three-stage pipeline (Figure 1). First, a deep research agent generates a comprehensive Markdown report with inline citations for a given query. Second, a Markdown Abstract Syntax Tree (AST) parser structurally extracts citation-claim pairs without requiring LLM inference. Third, three complementary evaluators assess each citation along distinct quality dimensions. The pipeline processes attributions independently at the sentence level, enabling fine-grained analysis rather than document-level assessment. This modular design enables evaluation of any LLM capable of generating Markdown responses with citations, requires no modification to the underlying model, and scales to thousands of cited pages.

## The three evaluators (VERBATIM, §3.3.1-3.3.3)

> #### 3.3.1 Link Works
>
> Link Works assesses URL accessibility without LLM inference. For each cited URL, a web content extractor capable of handling JavaScript-rendered pages retrieves the content. The evaluator produces a binary score of 1 if the URL returns accessible content and 0 if the request fails due to HTTP errors (404, 403), timeouts, or blocked access. This dimension identifies broken links, paywalled content, and URLs removed since the research was conducted.
>
> #### 3.3.2 Relevant Content
>
> Relevant Content measures topical alignment between the claim and the cited source using an LLM-as-a-judge approach. Given the attribution text and retrieved source content (truncated to 5,000 characters), the evaluator determines whether the source addresses the same topic as the claim. The evaluator produces a binary score with a natural language explanation. This dimension identifies citations that link to valid URLs but reference content unrelated to the claim's subject matter.
>
> #### 3.3.3 Fact Check
>
> Fact Check verifies whether specific factual claims are accurately supported by the source content. Using an LLM-as-a-judge approach, the evaluator examines facts, numbers, dates, and assertions in the attribution text against the retrieved source. The evaluator produces a binary score of 1 if the facts are supported or consistent and 0 if they are contradicted, absent, or uncertain. This dimension represents the most stringent evaluation, identifying citations where the source exists and is topically relevant but does not support the specific claims attributed to it. To ensure alignment with human judgment, the Fact Check evaluator was calibrated through manual review of 50-100 LLM judgments.

## Bias-mitigation design note (VERBATIM, §2.3)

> The use of LLMs as automated evaluators has gained significant attention as an alternative to costly human annotation (32). However, research has revealed systematic biases in LLM judges, including position bias, verbosity bias, and self-enhancement effects (25; 30). 26 demonstrate that even Large Reasoning Models remain susceptible to evaluation biases despite advanced reasoning capabilities. These findings are directly relevant to our framework, which relies on LLM-as-a-judge evaluators for the Relevant Content and Fact Check dimensions. To mitigate potential judge biases, we calibrate our evaluators through human review and employ rubric-based scoring that constrains evaluation to specific factual criteria rather than open-ended quality assessment. Our work extends the LLM-as-a-judge paradigm from general text evaluation to the specific task of source attribution verification, where the evaluator must assess whether a claim is supported by retrieved source content rather than judging overall response quality.

## Headline numbers (VERBATIM)

> Recent studies have documented citation hallucination rates ranging from 11% to 57% across commercially deployed models (31), yet no existing framework evaluates citation quality beyond binary attribution verification.

> High link validity and relevance coexist with low factual accuracy. Across all models, 12 of 14 exceed 94% on Link Works and all frontier models exceed 80% on Relevant Content. However, Fact Check scores range from 24% (OSS-120B) to 77% (Claude Opus 4.5), a 53% spread that makes factual accuracy the most differentiating dimension. This pattern means that a user encountering a citation in an LLM-generated report will almost always find a working link to a topically relevant page, yet the specific factual claims attributed to that source may be unsupported nearly half the time.

> Providers that generate more citations achieve lower factual accuracy. Performance patterns differ substantially across providers. OpenAI models achieve 100% task success and generate the most citations (GPT-5 Mini, 1,272 total attributions), but their Fact Check accuracy spans only 39-59%. Anthropic models show lower task success (83-97%) but excel in factual accuracy, with Claude Opus 4.5 achieving 77% Fact Check and Claude Haiku 4.5 achieving 69%. Google Gemini models occupy a middle ground (45-49% Fact Check). This inverse relationship between citation quantity and quality suggests that current LLMs face a fundamental trade-off between research thoroughness and factual reliability.

> We hypothesize that this trade-off arises from attention dilution during synthesis. Models generating more citations must aggregate information from a larger number of retrieved passages, increasing the likelihood of misattribution or conflation of facts across sources (13). Notably, Claude Opus 4.5 achieves the highest Fact Check score despite a lower task success rate than any OpenAI model, suggesting that selective citation may be a more effective strategy than exhaustive citation for maintaining factual accuracy.

> Factual accuracy generally degrades with search depth while surface metrics remain stable. Across both models, Fact Check accuracy drops approximately 42% on average from minimal (2 calls) to maximal search depth (Figure 2). GPT-5.4 shows the steepest decline, from 79% to 17% (62%). Claude Opus 4.6 demonstrates the greatest resilience, declining from 80% to 58% (22%). Critically, Link Works and Relevant Content remain above 92% at all search depths, indicating that the degradation is specific to factual synthesis rather than source selection.

> This asymmetric degradation pattern provides strong evidence for an information overload effect in LLM research synthesis (14). Models can consistently identify and cite accessible, topically relevant sources regardless of search depth, but accurately synthesizing factual claims becomes increasingly difficult as the number of sources grows. The sharpest Fact Check decline occurs between 2 and 10 tool calls for GPT-5.4 (79% to 46%, a 33% drop), suggesting that even modest increases in source volume can overwhelm factual synthesis capabilities.

> Link Works failures stem from three categories, including HTTP 404 errors (content removed or URL changed), blocked access (paywalls, bot detection), and connection timeouts. GPT-5.4 demonstrated the highest link reliability with only 1 failed link out of 2,159 evaluations, while open-source models showed substantially higher failure rates (Llama 4 Maverick at 19.2%, OSS-120B at 16.1%). Rate limit errors (HTTP 429) had minimal impact across all models, affecting fewer than 0.3% of evaluations with differences of less than 0.5% in adjusted pass rates.

## Table 1 (VERBATIM values, columns: Model / Success / Link Works / Relevant / Fact Check)

> Table 1: Source attribution quality across 14 LLMs ordered by Relevant Content. Success Rate indicates percentage of queries producing valid citations. Bold indicates best per metric.

```
Claude Opus 4.5      90.0%   98.7%   95.7%   76.8%
GPT-5.4             100.0%  100.0%   93.7%   47.7%
GPT-5.2             100.0%   98.3%   92.3%   58.8%
Codex               100.0%   96.9%   91.9%   54.1%
Claude Haiku 4.5     83.3%   98.9%   91.1%   68.9%
Claude Sonnet 4.6    93.3%   99.2%   89.8%   58.7%
Claude Sonnet 4.5    96.7%   98.9%   88.3%   51.8%
GPT-5 Mini          100.0%   99.3%   87.4%   38.9%
Claude Opus 4.6      93.3%   97.2%   83.9%   54.2%
Gemini 3 Flash      100.0%   94.7%   82.9%   45.2%
Gemini 3.1 Pro       90.0%   94.1%   80.7%   48.5%
OSS-120B             40.0%   83.9%   68.7%   24.4%
Pixtral Large        16.7%  100.0%   64.9%   51.4%
Llama 4 Maverick     30.0%   80.8%   60.6%   34.3%
```

## Stated limitation (VERBATIM)

> Our framework has several limitations that present opportunities for future work. First, the LLM-as-a-judge approach for Relevant Content and Fact Check evaluations, despite calibration through human review, may retain biases inherent to the judge model, including position bias and self-enhancement effects (25; 32). Ensemble judging with multiple LLM evaluators or hybrid approaches combining LLM judges with rule-based verification could mitigate single-model biases.
