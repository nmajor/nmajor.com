# "iRULER: Intelligible Rubric-Based User-Defined LLM Evaluation for Revision" (CHI 2026)

- URL: https://arxiv.org/abs/2602.12779 (HTML read at https://arxiv.org/html/2602.12779v1)
- Date accessed: 2026-08-18
- Authors: Jingwen Bai, Wei Soon Cheong, Philippe Muller, Brian Y Lim. To appear at CHI 2026.
- What it is: The most directly usable thing found on *rubric design for writing quality*. Six design guidelines for LLM writing feedback, and — the stealable bit — a **rubric-of-rubrics**: a meta-rubric with weights and a 6-step judging procedure that scores your rubric itself. Also carries an expert-vs-LLM calibration number (QWK .88 for rubric-based scoring vs .76 for free-text scoring).

## Abstract (VERBATIM)

> Large Language Models (LLMs) have become indispensable for evaluating writing. However, text feedback they provide is often unintelligible, generic, and not specific to user criteria. Inspired by structured rubrics in education and intelligible AI explanations, we propose iRULER following identified design guidelines to scaffold the review process by specific criteria, providing justification for score selection, and offering actionable revisions to target different quality levels. To qualify user-defined criteria, we recursively used iRULER with a rubric-of-rubrics to iteratively refine rubrics. In controlled experiments on writing revision and rubric creation, iRULER most improved validated LLM-judged review scores and was perceived as most helpful and aligned compared to read-only rubric and text-based LLM feedback.

## The six design guidelines (VERBATIM, §3)

> - **DG1. Specific.** Feedback should be specified in terms of explicit criteria (104; 69) that users can judge for themselves and take remedial action (132); generic feedback of vague or inconsistent concepts is not helpfully understandable and actionable (100; 65; 120).
>
> - **DG2. Scaffolded.** Defining evaluation criteria is challenging (31; 115). Not only do users need to decide what is important, they have to determine what passes or fails each criteria. Rather than leave this open-ended, which is cognitively demanding (41), feedback criteria can be scaffolded via a structured template (48; 5). Rubrics satisfy this by defining levels for each criteria, and supports weighting criteria by importance all in a tabular layout (62; 125; 19).
>
> - **DG3. Justified.** Rather than providing feedback based on opaque, subjective opinion, feedback needs to be justified with rationale and explanation (104). With AI generated judgment, this can be explained with explainable AI (XAI) methods. Rubrics are one way to justify the judgment score (98; 73). Yet, the judgment of each criteria may be unintelligible (84), thus deeper levels should be further justified too (86; 142) to explain why specific criteria level were chosen, and why not other levels.
>
> - **DG4. Actionable.** A primary goal of feedback is to improve ones work (132). Feedback needs to be actionable for users to make effective changes (104; 102). Therefore, suggestions should be provided via counterfactual feedback of how to achieve desired target outcomes (95; 134).
>
> - **DG5. Qualified.** Although any feedback is appreciated, they may be erroneous or unreliable, especially when developed by users who are not domain or topic experts (94; 18). Hence, it is important to judge the feedback, and even provide feedback on the feedback (137; 54). Similarly, this feedback should be specific, scaffolded, justified and actionable. Thus, we propose a recursive use of rubric-based feedback on the rubric-feedback using the rubric-of-rubrics (9; 8; 125).
>
> - **DG6. Refinable.** Moreover, despite accommodating user-defined criteria, users may change their mind (i.e., criteria drift (118) or evolution (127)) and iteratively refine feedback criteria (69; 11; 46). Hence, user-defined rubrics should be refinable through the end-to-end loop of rubric editing with feedback, and rubric usage for writing revision.

## Why rubrics at all (VERBATIM, §1 and §2)

> A rubric is a scoring tool that lists criteria for evaluating work alongside descriptions of different levels of performance quality (19). By clarifying what counts as quality work, well-crafted rubrics enable focused, transparent feedback and help writers internalize standards and self-regulate (107; 62; 125); rubrics also can be a way to explain judgment (98; 125); empirical studies further show that rubric-based feedback yields greater improvements than generic comments (51; 138; 115).

> However, the efficacy of rubric-based feedback hinges on the quality of the rubric itself. Creating and qualifying a rubric is a non-trivial task (20). Writers must translate genre knowledge into specific criteria and calibrate performance levels for scaffolding, which requires expertise (62; 115; 125). Without this expertise, many users, including students, novice instructors, and content editors, create unqualified criteria and poorly scaffolded levels […] This expertise barrier often results in the adoption of generic, one-size-fits-all rubrics that overlook specific task goals or genre nuances (19; 107).

> While these systems provide the necessary structure, they stop at judgment: the per-criterion scores they generate seldom include in-depth justification, and fail to translate into actionable revision guidance.

> Previous research demonstrated that enabling users to ask fundamental questions, such as "Why?", "Why not?", and "How to?", can significantly improve their mental model and trust in the system (84; 85). Subsequent work in Explainable AI (XAI) has consistently affirmed the value of these contrastive ("Why not…?") and counterfactual ("How to…?") explanations for making AI reasoning more meaningful (149; 36).

## THE RUBRIC-OF-RUBRICS (VERBATIM, Table 6 — with weights)

> **Criteria Alignment (30%)**
> - Score 4: All criteria measure essential learning outcomes. Each is defined so precisely that a single piece of evidence can only be scored under one criterion.
> - Score 3: Most criteria measure essential learning outcomes. Criteria are defined clearly enough that evidence largely fits under a single criterion, with minimal ambiguity.
> - Score 2: Some criteria measure essential learning outcomes. Definitions are general, causing evidence to frequently fit under multiple criteria.
> - Score 1: Few or no criteria measure essential learning outcomes. Definitions are vague, causing criteria to be redundant and overlapping.
>
> **Level Distinction (40%)**
> - Score 4: The scale creates a clear, logical progression of quality. All levels are defined with enough detail to be clearly distinguished from their neighbors.
> - Score 3: The scale shows a logical progression of quality. Most levels are clearly distinguished from their neighbors, though some may require minor interpretation.
> - Score 2: The progression of quality is sometimes illogical or unclear. It is difficult to distinguish between some adjacent levels.
> - Score 1: The progression is illogical or arbitrary. Levels are not distinct, making differentiation of performance impossible.
>
> **Descriptive Language (30%)**
> - Score 4: Language describes precise, specific, observable evidence. All descriptions for a criterion follow a parallel grammatical structure across levels.
> - Score 3: Language is mostly descriptive and objective, but may include some minor, undefined subjective terms. Most descriptions follow a parallel structure.
> - Score 2: Language mixes descriptive and subjective/evaluative terms, providing limited observable evidence. Parallel structure is inconsistent.
> - Score 1: Language is primarily subjective and evaluative, offering no observable evidence. There is no parallel structure.
>
> Table 6. Rubric Creation Experiment rubric: Rubric-of-rubrics for evaluating rubric quality.

## The meta-judge prompt (VERBATIM, Appendix)

> <instructions>
> You have to do the following 6 steps:
> 1. Analyze the Rubric Structure: Examine the rubric to understand its dimensions, scoring scale, criteria descriptions, and weighting.
> 2. Evaluate with Meta-Rubric Standards: Assess the rubric against each of the three meta-rubric dimensions listed above.
> 3. Dimensional Assessment: For each of the three meta-dimensions, mentally evaluate the rubric on a 4-point scale: 4: Excellent/Exceeds standards. 3: Good/Meets standards. 2: Satisfactory/Partially meets standards. 1: Needs improvement/Below standards
> 4. Holistic Integration: Combine your dimensional scores into a single holistic score from 0--100, considering the relative importance of each meta-dimension for rubric effectiveness.
> 5. Synthesize Feedback: Based on your meta-dimensional assessment, identify the single greatest strength and the one or two most critical areas for improvement. Synthesize this into a concise, actionable feedback paragraph (2--3 sentences). The feedback should first acknowledge any strengths and then clearly state the areas needing improvement, referencing the relevant meta-rubric dimensions (e.g., Criteria Alignment, Level Distinction, Descriptive Language).
> 6. Quality Assurance: Ensure your score reflects the actual rubric quality demonstrated and your feedback is constructive and specific.
> </instructions>

> 3. Adopt a moderate evaluation approach: prioritize fairness by recognizing strengths in the rubric, avoid overly harsh penalties for minor errors, and focus on the overall alignment with the criteria.

## Results (VERBATIM, §6)

> We found that iRULER significantly improved writing quality (H1), efficiency (H2), perceived qualities (H3), writing confidence (H4), and skill transfer (H5) compared to Text-based LLM feedback.

> We found a significant main effect of Feedback Type (p < .0001) on both types of score improvements. iRULER's score improvements (Mtext = 26.7, Mrubric = 30.8) were significantly higher than in Text-LLM (Mtext = 16.1, Mrubric = 16.2, both p < .0001). iRULER was only significantly higher than in Rubric-LLM on the text-based score improvement (Mtext = 19.2, p = .0003), not on the rubric-based score improvement (Mrubric = 23.8, p = n.s.).

> There was a significant main effect of Feedback Type on # Iterations (p<.0001), with iRULER requiring the fewest iterations (M = 2.09) over Text-LLM (M = 3.38, p < .0001) but not Rubric-LLM (M = 2.69, p = n.s).

> We found a significant main effect of Feedback Type on perceived helpfulness (p < .0001). […] iRULER feedback (M = 2.3) was rated as significantly more helpful than both Rubric-LLM (M = 1.7, p = .0016) and Text-LLM feedback (M = 1.5, p < .0001).

## Expert vs LLM calibration (VERBATIM)

> The alignment between the experts and the Rubric-LLM total score was high (QWK = .88), and higher than the moderately high alignment with Text-LLM (QWK = .76). Expert alignment with criteria subscores were within moderate to substantial levels (.53–.73).

---

# Companion: "LitBench: A Benchmark and Dataset for Reliable Evaluation of Creative Writing"

- URL: https://arxiv.org/abs/2507.00769
- Date accessed: 2026-08-18
- Authors: Daniel Fein, Sebastian Russo, Violet Xiang, Kabir Jolly, Rafael Rafailov, Nick Haber.
- What it is: A ceiling estimate for how well any off-the-shelf LLM judge can score *writing quality* against real human preference.

### Abstract (VERBATIM)

> Evaluating creative writing generated by large language models (LLMs) remains challenging because open-ended narratives lack ground truths. Without performant automated evaluation methods, off-the-shelf (OTS) language models are employed as zero-shot judges, yet their reliability is unclear in this context. In pursuit of robust evaluation for creative writing, we introduce LitBench, the first standardized benchmark and paired dataset for creative writing verification, comprising a held-out test set of 2,480 debiased, human-labeled story comparisons drawn from Reddit and a 43,827-pair training corpus of human preference labels. Using LitBench, we (i) benchmark zero-shot LLM judges, (ii) train Bradley Terry and generative reward models, and (iii) conduct an online human study to validate reward model rankings on newly LLM-generated stories. Our benchmark identifies Claude-3.7-Sonnet as the strongest off-the-shelf judge, reaching 73% agreement with human preferences; among trained reward models, Bradley-Terry and Generative reward models both attain an accuracy of 78%, outperforming all off-the-shelf judges. An online human study further confirms that our trained reward models consistently align with human preferences in novel LLM-generated stories.
