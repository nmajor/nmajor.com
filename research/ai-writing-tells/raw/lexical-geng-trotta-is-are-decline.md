# Geng & Trotta - "Is ChatGPT Transforming Academics' Writing Style?" (arXiv 2404.08627)

- URL: https://arxiv.org/abs/2404.08627 - full text used: https://arxiv.org/html/2404.08627v2
- Date published: 2024-04-12 (arXiv). Same authors' follow-up, "Human-LLM Coevolution: Evidence from Academic Writing", appears in Findings of ACL 2025: https://aclanthology.org/2025.findings-acl.657.pdf
- Date accessed: 2026-08-18
- What it is: 1,000,000 arXiv abstracts, May 2018 to Jan 2024, calibrated against simulated data (real abstracts run through GPT-3.5 with the prompt "revise the following sentences"). 
  Estimates ~35% of computer-science arXiv abstracts are LLM-style.
- EVIDENCE TIER: **measured** (arXiv preprint; explicit before/after per-word frequencies, calibration and noise analysis).
- WHY IT EARNS A PLACE IN A LEXICAL LIST: it is the source of the single most useful NEGATIVE tell in the literature - the words that go DOWN. "is" and "are" drop by 9-17% when 
  ChatGPT revises a text. That is not a word to ban; it is a word to reach for. It is the measured backing for the Wikipedia editors' "avoidance of basic copulatives" section: 
  a model rewrites "X is Y" into "X serves as Y" / "X represents Y" / "X stands as Y". The fix is the opposite of a ban - restore the plain copula.
- Note also "significant" rising 53% to 308% depending on field when GPT-3.5 merely REVISES an existing abstract.

## Verbatim excerpts


Based on one million arXiv papers submitted from May 2018 to January 2024, we assess the textual density of ChatGPT’s writing style in their abstracts through a statistical analysis of word frequency changes. Our model is calibrated and validated on a mixture of real abstracts and ChatGPT-modified abstracts (simulated data) after a careful noise analysis. The words used for estimation are not fixed but adaptive, including those with decreasing frequency. We find that large language models (LLMs), represented by ChatGPT, are having an increasing impact on arXiv abstracts, especially in the field of computer science, where the fraction of LLM-style abstracts is estimated to be approximately 35%, if we take the responses of GPT-3.5 to one simple prompt, “revise the following sentences”, as a baseline. We conclude with an analysis of both positive and negative aspects of the penetration of LLMs into academics’ writing style.

We approach the problem by analyzing how the frequency of words changes after ChatGPT has been deployed. The frequency of some non-specialized words also starts to skyrocket in early 2023, as presented in Figure 1 (1 million abstracts are divided into 100 uneven time-periods, each encompassing 10,000 abstracts). The number of arXiv articles is getting more and more each month. In general, the larger the sample (the greater the number of articles), the more accurate the estimate will be. We used a similar number of articles in each period rather than the same time interval to keep the error in the estimates on the same scale, providing the same quality of observation and estimation.

How could the frequencies of words like “significant” grow significantly together? Another striking example is the frequency change of the words “are" and “is”. The counts in 10,000 abstracts of these two words were quite stable before 2023. However, the frequency of these two terms has dropped by more than 10% in 2023.

These examples, anecdotal as they are, may represent the tip of the iceberg of a wider and growing phenomenon: the rapid increase in the usage of ChatGPT or other LLMs. The rise and fall in frequency of specific technical nouns may well be related to the changing popularity of certain research topics, but that a research trend is responsible for the change in usage of adjectives appears implausible – even less so for words like “is” and “are”.

Previous studies have shown that ChatGPT has its own linguistic style (AlAfnan & MohdZuki 2023), and that likely includes the frequency of some words. Although there is no direct way to investigate ChatGPT’s word preference, we can ask ChatGPT to polish or rewrite real, pre-2023 abstracts, and use the resulting simulation data to calculate the estimated frequency change rate r^i​j\hat{r}_{ij} of word ii in category jj:

What are the prompts used in the real cases are still unclear, and we think simple prompts could better reflect the inherent word preferences of ChatGPT, as complex prompts may bring more human interference. So some simple prompts were used to reduce the bias due to prompts, for example,

GPT-3.5 was utilized in our simulations for 10,000 abstracts in period 14 (April 2022 to July 2022), although it may not have the same word preferences as other LLMs. Many words have different frequencies before and after ChatGPT processing, such as the words “is”, “are”, and “significant” that we mentioned earlier. For simplicity, the results of the 4 categories with the highest number of articles are shown in Table 1 and the rest parts in this paper, namely cs (computer science), math (mathematics), astro (astrophysics), and cond-mat (condensed matter).

This corroborates the hypothesis, formulated earlier, that the drop in the frequency of these two words observed in real abstracts in 2023 may have been caused by ChatGPT. Combined with Figure 6 in the Appendix showing the correlation between changes in simulated and real data, we speculate that ChatGPT is one of the important reasons, possibly even the main reason, for the recent word frequency change in abstracts.

## Verbatim: Table 1 - Word frequency (per abstract) before and after ChatGPT processing
(cs = computer science, math, astro = astrophysics, cond-mat = condensed matter)

Table 1: Word frequency (per abstract) before and after ChatGPT processing.
words
category
before
after
change rate
is, are
cs
2.01, 1.00
1.73, 0.83
-14%, -17%
is, are
math
1.78, 0.74
1.61, 0.71
-9%, -5%
is, are
astro
2.13, 1.39
1.90, 1.25
-11%, -1%
is, are
cond-mat
2.00, 0.92
1.68, 0.80
-16%, -13%
significant
cs
0.09
0.18
99%