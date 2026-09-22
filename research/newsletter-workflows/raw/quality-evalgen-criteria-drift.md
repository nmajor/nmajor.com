# "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences" (EvalGen, UIST 2024)

- URL: https://arxiv.org/abs/2404.12272 (PDF read at https://arxiv.org/pdf/2404.12272)
- ACM DL: https://dl.acm.org/doi/10.1145/3654777.3676450 (fullHtml at https://dl.acm.org/doi/fullHtml/10.1145/3654777.3676450 — could NOT be fetched, returned empty; excerpts below are from the arXiv PDF)
- Date accessed: 2026-08-18
- Authors: Shreya Shankar, J.D. Zamfirescu-Pereira, Björn Hartmann, Aditya G. Parameswaran (UC Berkeley), Ian Arawjo (Université de Montréal). UIST 2024.
- What it is: The paper that names "criteria drift" — you cannot write your quality rubric before you have graded real outputs, because grading is what teaches you the rubric. Directly challenges any fixed scoring rubric baked into a skill file, including ours.

## Abstract (VERBATIM)

> Due to the cumbersome nature of human evaluation and limitations of code-based evaluation, Large Language Models (LLMs) are increasingly being used to assist humans in evaluating LLM outputs. Yet LLM-generated evaluators simply inherit all the problems of the LLMs they evaluate, requiring further human validation. We present a mixed-initiative approach to "validate the validators"— aligning LLM-generated evaluation functions (be it prompts or code) with human requirements. Our interface, EvalGen, provides automated assistance to users in generating evaluation criteria and implementing assertions. While generating candidate implementations (Python functions, LLM grader prompts), EvalGen asks humans to grade a subset of LLM outputs; this feedback is used to select implementations that better align with user grades. A qualitative study finds overall support for EvalGen but underscores the subjectivity and iterative process of alignment. In particular, we identify a phenomenon we dub criteria drift: users need criteria to grade outputs, but grading outputs helps users define criteria. What is more, some criteria appears dependent on the specific LLM outputs observed (rather than independent criteria that can be defined a priori), raising serious questions for approaches that assume […]

## The core finding (VERBATIM, §1)

> Our findings find overall support for EvalGen, with one important caveat. We observed a "catch-22" situation: to grade outputs, people need to externalize and define their evaluation criteria; however, the process of grading outputs helps them to define that very criteria. We dub this phenomenon criteria drift, and it implies that it is impossible to completely determine evaluation criteria prior to human judging of LLM outputs. Even when participants graded first, we observed that they still refined their criteria upon further grading, even going back to change previous grades. Thus, our findings suggest that users need evaluation assistants to support rapid iteration over criteria and implementations simultaneously. Since criteria are dependent upon LLM outputs (and not independent from them), this raises questions about how to contend with criteria drift in the context of other "drifts"—e.g., model drift [4], prompt edits, or upstream changes in a chain.

## Findings summary (VERBATIM, §7)

> Overall, we found that:
>
> • Participants felt that EvalGen was a great starting point for assertions, and wanted to—and could—exercise control over EvalGen's assistance.
>
> • Participants struggled to align assertions with their preferences due to two main challenges in grading: (i) some criteria are difficult for humans to grade (e.g., under a target word count), and (ii) as they grade more LLM outputs, we observe a criteria drift phenomenon, in which criteria change as participants grade more LLM outputs (both definitions of existing criteria, and changes to the overall set of criteria).
>
> • Participants' perceptions of alignment and needs varied based on the evaluator type (i.e., code-based vs. LLM-based).

## Two types of drift (VERBATIM, §7.3.1)

> 7.3.1 Criteria drift. Grading outputs spurred changes or refinements in participants' criteria, which we refer to as criteria drift. We observed two types of drift.
>
> First, participants wanted to add new criteria when they observed new "types" of bad LLM outputs (P2, P5, P6, P8, P9). In the EvalGen interface, they could not go back and add new criteria; they had to wait for all candidate assertions to finish executing, move past the report card screen, and start a new EvalGen process.
>
> Second, as participants graded more outputs, we found that they reinterpret existing criteria to better fit the LLM's behavior (P2, P5, P6, P8, P9). For example, P2 and P8 had a "proper noun" criterion, which was supposed to assess that "the entities extracted were proper nouns." At first, they rated as bad any LLM outputs that contained any entity that was not a proper noun. But, after observing that responses had varying numbers of proper nouns, both wanted to change their criteria such that most of the entities were proper nouns, rather than all.

> "I think it's hard to know until you see it," P7 said.

## Per-criterion failure tolerance (VERBATIM, §7.3.2)

> Overall, participants generally liked the process of grading LLM responses and feeling like the grades were useful, but they wanted to prioritize grading criteria they felt needed their alignment —especially for LLM-based assertions (P3, P5, P7, P8). For example, P3 expressed that they would trust the assertions more if the EvalGen process allowed them to set different false failure rates per criteria (since LLMs might be bad at evaluating some criteria), instead of one global false failure rate constraint for the entire assertion set:
>
> > There are criteria where you can be okay with failing, and then there are other criteria where you are like, 'this must absolutely pass'... [T]here's a [spectrum] of failure as opposed to: it just passes or fails.

> Relatedly, some participants expressed that they didn't trust their grades because they themselves couldn't evaluate some criteria as well as an automated solution (P2, P5, P6, P7, P8 […]). A criterion like word count is hard for humans to assess but easy for a good Python function to evaluate. P8 desired to grade for only one criteria, reasoning that it might improve efficiency ("I generally want to be in the loop for these tests...but I want to put myself in the loop in a way that is efficient.").

## The workflow participants actually ran (VERBATIM, §7.1)

> (1) Eyeballing LLM outputs: Participants viewed the table of 100 LLM outputs, making sure the outputs seemed reasonable at a glance.
> (2) Starting EvalGen: […] This wizard presents three options (Fig. 2b): auto-generate criteria, write criteria, and grade outputs first (before generating criteria). 6 participants clicked the auto-generate button; 1 participant wrote a criterion themselves and then clicked the auto-generate button. The remaining 2 participants wanted to grade first (P4, P9).
> (3) Grading outputs: Participants who graded LLM outputs first graded between 5 and 10 outputs, with 2 to 4 "thumbs-down" grades. After grading, both participants clicked the button to auto-generate criteria.
> (4) Refining criteria: After receiving criteria suggestions from EvalGen, participants removed some suggestions and added 1-2 criteria of their own. They usually left evaluation type (code-based or LLM-based) unchanged from what EvalGen suggested, even if EvalGen suggested a type that did not make sense (e.g., checking word count with an LLM API call, rather than code), which happened rarely.
