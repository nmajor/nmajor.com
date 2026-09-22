# "Loki: An Open-Source Tool for Fact Verification" (COLING 2025 demos) — a human-in-the-loop 5-step fact-check pipeline

- URL: https://arxiv.org/abs/2410.01794 (HTML read at https://arxiv.org/html/2410.01794v1)
- ACL Anthology: https://aclanthology.org/2025.coling-demos.4/
- Code (MIT): https://github.com/Libr-AI/OpenFactVerification
- Related unified framework: OpenFactCheck, https://arxiv.org/pdf/2408.11832
- Date accessed: 2026-08-18
- What it is: The clearest published architecture for a fact-check gate you could actually run as a skill: five modules — Decomposer, Checkworthiness Identifier, Query Generator, Evidence Retriever, Claim Verifier — deliberately semi-automated so a human makes the final call, with parallelism so the whole check costs ~3 LLM calls + 1 web query of wall time.

## Abstract (VERBATIM)

> Loki adopts a human-centered approach, striking a balance between the quality of fact-checking and the cost of human involvement. It decomposes the fact-checking task into a five-step pipeline: breaking down long texts into individual claims, assessing their check-worthiness, generating queries, retrieving evidence, and verifying the claims. Instead of fully automating the claim verification process, Loki provides essential information at each step to assist human judgment, especially for general users such as journalists and content moderators. Moreover, it has been optimized for latency, robustness, and cost efficiency at a commercially usable level. Loki is released under an MIT license and is available on GitHub.

## The design stance (VERBATIM, §1)

> Here, we propose Loki, which offers a semi-automated, human-in-the-loop approach to fact verification. Instead of completely eliminating human participation, Loki assists users by breaking down the fact-checking process into five manageable steps, ensuring that human judgment remains integral to decision-making. This benefits users, such as journalists and content moderators, who need reliable tools to quickly and accurately verify information.

> Unlike fully automated solutions that aim to deliver a final verdict without intermediate steps, Loki presents critical information and insights at each step, to assist users in making well-informed decisions. This approach is especially beneficial for users such as journalists and content moderators, who need reliable tools to verify information while retaining control over the final judgment.

## The five modules (VERBATIM, §3.1)

> Previous work structures fact verification into a series of steps, commonly including text decomposition, checkworthiness identification, evidence retrieval and collection, stance detection, and correction determination (Wang et al. 2024a). In this work, we propose a five-step pipeline consisting of the following modules: Decomposer, Checkworthiness Identifier, Query Generator, Evidence Retriever, and Claim Verifier.

> **Decomposer** breaks down long texts into smaller, atomic claims. It produces individual claims that can be verified independently. For a better user experience, we ensure the decomposed claims are traceable to the original text. During the result presentation, Loki displays both the original and decomposed claims for contextual clarity.

> **[Checkworthiness Identifier]** filters out unworthy claims that are vague, ambiguous, or opinion-based, ensuring only factual statements proceed for verification. For instance, claims like MBZUAI has a vast campus are deemed unworthy due to the subjective interpretation of vast.

> **[Query Generator]** converts check-worthy claims into optimized queries for evidence retrieval, focusing on keyword-based retrieval.

> **[Evidence Retriever]** gathers relevant information to support the verification process. Currently, Loki retrieves evidence from online sources via search engine APIs.

> **Claim Verifier** evaluates retrieved evidence to verify the claim, presenting supporting or refuting snippets for users to make informed judgments.

## Implementation notes (VERBATIM, §3.2 / §3.3)

> Loki employs LLMs in four of its five components: Decomposer, Checkworthiness Identifier, Query Generator, and Claim Verifier. Each component is implemented as a Python class with functions that interact with LLMs to perform core tasks. For instance, the Decomposer class includes functions to break down long texts into claims and map these claims back to the original text.

> For each task, we hand-crafted 10 test cases and optimized the prompts to maximize LLM performance. An example prompt for the Decomposer is shown in Figure 1.

> We also parallelize all independent components and functions, as shown in Figure 2. This modular design allows different parts of the fact-checking process, such as claim decomposition, query generation, and evidence retrieval, to be executed concurrently. Ideally, the entire fact-checking process can be completed within the time required for three LLM calls and one web query, significantly reducing the overall response time.

## The comparison axes they use (VERBATIM, Table 1 caption)

> Table 1: Comparison of representative automatic fact-checking pipelines, demos and products in the last two years from seven perspectives: (1) UI — the system has user interface supporting easy interaction with general users; (2) Asynchronous processing for retrieving evidence from web pages and calling LLM APIs; (3) Multilingual — the system is designed to support languages other than English; (4) Multi-LLM — flexibly calling different LLM APIs as fact verifiers; (5) Granularity — the smallest granularity of document decomposition and verification supported by the system; (6) Transparency — the system can show fine-grained snippets of evidence with the corresponding URL, and the relationship between the evidence and the claim (support, refute, or irrelevant); and […]

## The prior art it consolidates (VERBATIM, §2)

> Numerous automated fact-checking systems have been developed, including RARR, FActScore, FacTool, Factcheck-GPT, and Longform SAFE Gao et al. 2022; Min et al. 2023; Chern et al. 2023; Wang et al. 2023; Wei et al. 2024b; Fadeeva et al. 2024. However, these tools are often inaccessible to general users who may not have a Python environment to compile code and run verification processes.

> Each fact-checking system also has its own strengths. For instance, Factcheck-GPT offers a fine-grained framework encompassing all possible subtasks to enhance the fact-checking process. FacTool uses a low-latency evidence retriever through asynchronous processing, while FActScore introduces a scoring metric that calculates the percentage of true claims within a text, providing a quantitative measure of the input's credibility. Loki integrates these advantages into a unified system Wang et al. 2024c.
