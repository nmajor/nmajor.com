# "Replacing Judges with Juries: Evaluating LLM Generations with a Panel of Diverse Models" (PoLL)

- URL: https://arxiv.org/abs/2404.18796 (HTML read at https://arxiv.org/html/2404.18796v1)
- Date accessed: 2026-08-18
- Authors: Pat Verga, Sebastian Hofstatter, Sophia Althammer, Yixuan Su, Aleksandra Piktus, Arkady Arkhangorodsky, Minjie Xu, Naomi White, Patrick Lewis (Cohere). 29 Apr 2024.
- What it is: The paper our `icp-focus-group` skill is built on. Evidence that a panel of three *smaller* models from disjoint families beats a single large judge on correlation with humans, cuts intra-model bias, and costs 7-8x less. Also contains a very useful negative result: the strongest model was the *weakest* judge, and prompt wording swung its agreement with humans by 0.11 kappa.

## Abstract (VERBATIM)

> As Large Language Models (LLMs) have become more advanced, they have outpaced our abilities to accurately evaluate their quality. Not only is finding data to adequately probe particular model properties difficult, but evaluating the correctness of a model's free-form generation alone is a challenge. To address this, many evaluations now rely on using LLMs themselves as judges to score the quality of outputs from other LLMs. Evaluations most commonly use a single large model like GPT-4. While this method has grown in popularity, it is costly, has been shown to introduce intra-model bias, and in this work, we find that very large models are often unnecessary. We propose instead to evaluate models using a Panel of LLm evaluators (PoLL). Across three distinct judge settings and spanning six different datasets, we find that using a PoLL composed of a larger number of smaller models outperforms a single large judge, exhibits less intra-model bias due to its composition of disjoint model families, and does so while being over seven times less expensive.

## Contributions (VERBATIM)

> We propose to evaluate LLM generations using a Panel of LLm evaluators (PoLL) drawn from different model families rather than a single large judge (Section 2).
>
> We show that using an instantiation of PoLL correlates better with human judgements compared to a single large judge (GPT-4), while being over seven times cheaper (Sections 4.1 and 4.2).
>
> In some scenarios, GPT-4 is a relatively weak judge, exhibiting high variance with minor changes to the prompt (Section 4.3).
>
> Intra-model scoring bias is reduced by pooling judgements across a panel of heterogeneous evaluator models (Section 4.4).

## Panel composition and voting (VERBATIM, §3.1)

> In our experiments, We construct a PoLL from three models being drawn from three disparate model families (Command R, Haiku, and GPT-3.5). We consider two different voting functions for aggregating scores across the judges. For QA datasets, we use max voting, as all judgements are binary [correct, incorrect]. For Chatbot Arena we instead use average pooling because judgements are scores ranging from 1-5 and a three judge panel often does not produce a clear majority decision […] We also experimented with max voting with average voting fallback which yielded similar results with an identical overall ranking.

> To calculate the PoLL score, each evaluator model independently scores a given model output just as they would in any of the scenarios outlined above. Those individual scores are then pooled together through a voting function […] such that the final score = f(j∈P: j(a)) where P is a panel composed of individual judges j and f is a voting function.

> The above settings assume that all scoring is performed by a single capable judge. However, as outlined earlier, one of the largest issues with relying on a single model J, such as GPT-4, is that it introduces intra-model bias. To address this we instead propose to score answer correctness based not on a single judge, but instead on a panel composed of multiple evaluator models. Similar pooling techniques are used to reduce variance in human annotations by normalizing out both natural variation in human judgements caused by their own subjective biases as well as human error Voorhees 1998.

## Correlation with humans — Table 1 (VERBATIM, Cohen's Kappa on KILT single-hop QA)

> Judge | NQ | TQA | HPQA
> EM | 0.651 | 0.827 | 0.662
> GPT-4 | 0.627 | 0.841 | 0.830
> CMD-R | 0.734 | 0.902 | 0.815
> Haiku | 0.749 | 0.894 | 0.873
> GPT-3.5 | 0.726 | 0.859 | 0.833
> PoLL | 0.763 | 0.906 | 0.867

> Table 1: Cohen's Kappa Judge Model Performance on Different Single-hop QA Datasets from KILT, where best results are indicated by the bold font and second best results are underlined.

> Cohen's kappa measures inter-rater reliability, which quantifies the level of agreement between two or more raters or judges. The kappa statistic takes into account the possibility of agreement occurring by chance, making it a more robust measure than simple percent agreement. […] This results in a value of κ ranging from -1 to 1. Opinions vary on how scores should be interpreted, but in general κ>0.8 is considered a strong correlation and κ>0.6 is a moderate correlation.

## Rank correlation — Table 2 (VERBATIM, vs. Chatbot Arena leaderboard)

> Judge/Correlation | Pearson | Kendall Tau
> GPT-4 | 0.817 | 0.667
> Haiku | 0.883 | 0.722
> GPT-3.5 | 0.883 | 0.730
> CMD-R | 0.817 | 0.676
> PoLL | 0.917 | 0.778

## Prompt-sensitivity of a single judge (VERBATIM, §4.3)

> Based on the observation that GPT-4 was the weakest judge model on our KILT evaluations, we investigated how the model reacts to modifications to its prompt. GPT-4 is the most powerful judge model we tested, yet it performed worse than less capable models on what is essentially a fuzzy string matching exercise. We hypothesize that may be because GPT-4 is over-reasoning and injecting too much background knowledge into determining the correctness of an answer rather than simply aligning the gold reference with the generation. In Table 3, we can see how the correlation between GPT-4 and human annotators varies as the prompt changes. In all cases, having in-context examples improves the performance over zero-shot and the most effective strategy is an explicit instruction to the model not to 'overthink' and not to concern itself with the wider factuality of the answers with respect to the outside world.

> the 'don't overthink' prompt had a negligible positive effect on Haiku, minor negative effect to Command R and a severe negative impact on GPT-3.5.

> Prompt Variant | Kappa
> Zero-shot | 0.518
> Few-Shot Standard | 0.627
> +No Instruction Line | 0.594
> +Move Instruction Line | 0.637

## Intra-model bias, observed (VERBATIM, §4.4)

> We can clearly observe intra-model bias as the GPT-4 judge ranks another GPT-4 variant in position 2, higher than its actual position 4, which is in line with previous works that have also observed GPT-4's preference for its own generations Zheng et al. 2024; Panickssery et al. 2024

## Cost (VERBATIM, §4.5)

> At the time of writing, the cost of running our specific instance of PoLL is $1.25/input […] per million tokens + $4.25/output, whereas the cost of running GPT-4 Turbo is $10/input + $30/output. Depending on the ratio of input-to-output tokens in a given task, running the entire three model PoLL is seven to eight times less expensive than running a single GPT-4 judge.

## Conclusions and stated limitations (VERBATIM, §5)

> In this paper, we showed how a Panel of LLM Evaluators composed of smaller models is not only an effective method for evaluating LLM performance, but also reduces intra-model bias, latency, and cost. The benefits of PoLL are bolstered by the finding that there is not a single 'best' judge across all settings, while PoLL performs well consistently.

> In this work we investigated only three evaluator settings and a limited number of judges and panel compositions. While we showed that PoLL is an effective alternative to a single large model in these settings, further work is needed to see how broadly applicable the method is, for example, in math or reasoning evaluations, where language models often struggle Zheng et al. 2024. We also leave the task of 'panel selection', or identifying the best models to include in PoLL in terms of quality and cost, to future work.

## Human reference judgements (VERBATIM, §3.7)

> To gather human reference judgements, we utilized Cohere's internal highly-qualified annotation workforce. Annotators were shown a single anonymized model generated answer at a time along with the original question and reference answer.
