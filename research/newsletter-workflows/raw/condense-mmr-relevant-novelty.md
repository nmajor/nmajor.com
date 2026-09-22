# MMR — "The Use of MMR, Diversity-Based Reranking for Reordering Documents and Producing Summaries" (Carbonell & Goldstein, SIGIR 1998)

- URL: https://www.cs.cmu.edu/~jgc/publication/The_Use_MMR_Diversity_Based_LTMIR_1998.pdf
- Date accessed: 2026-08-18
- What it is: The origin of "relevant novelty" as a rankable quantity — a single tunable knob (λ) that trades relevance against non-redundancy when picking items from a candidate pool. This is the classic formalization of "don't repeat what you already selected", i.e. exactly the dedup-across-past-issues / dedup-across-takes problem. Extracted from the PDF with pypdf; the OCR-era PDF garbles some math symbols (λ renders as "X"/"A"), noted inline.

---

## VERBATIM — Abstract fragments

> ... mal Marginal Relevance (MMR) criterion strives to re-[duce redundancy while maintaining query relevance]...
> ... sults indicate some benefits for MMR diversity ranking ...
> ... summaries, where MMR results are clearly superior to non-MMR passage selection.

## VERBATIM — Section 2, Maximal Marginal Relevance (the core definition)

> Most modern IR search engines produce a ranked list of retrieved documents ordered by declining relevance to the user's query. In contrast, we motivated the need for "relevant novelty" as a potentially superior criterion. A first approximation to measuring relevant novelty is to measure relevance and novelty independently and provide a linear combination as the metric. We call the linear combination "marginal relevance" - i.e. a document has high marginal relevance if it is both relevant to the query and contains minimal similarity to previously selected documents. We strive to maximize marginal relevance in retrieval and summarization, hence we label our method "maximal marginal relevance" (MMR).

Formula as printed (PDF text layer is degraded; symbols mangled — the canonical form is
`MMR = argmax_{Di ∈ R\S} [ λ·Sim1(Di, Q) − (1−λ)·max_{Dj ∈ S} Sim2(Di, Dj) ]`):
> MMR *A* Atg X(Siml(Di, Q)-(l-X)

> Where C is a document collection (or document stream); Q is a query or user profile; R = IR(C, Q, θ), i.e., the ranked list of documents retrieved by an IR system, given C and Q and a relevance threshold θ, below which it will not retrieve documents (θ can be degree of match or number of documents); S is the subset of documents in R already selected; R\S is the set difference, i.e, the set of as yet unselected documents in R; Sim1 is the similarity metric used in document retrieval and relevance ranking between documents (passages) and a query; and Sim2 can be the same as Sim1 or a different metric.

## VERBATIM — how to set λ (the tuning advice)

> Given the above definition, MMR computes incrementally the standard relevance-ranked list when the parameter λ=1, and computes a maximal diversity ranking among the documents in R when λ=0. For intermediate values of λ in the interval [0,1], a linear combination of both criteria is optimized. Users wishing to sample the information space around the query, should set λ at a smaller value, and those wishing to focus in on multiple potentially overlapping or reinforcing relevant documents, should set λ to a value closer to 1. We found that a particularly effective search strategy (reinforced by the user study discussed below) is to start with a small λ (e.g. λ = .3) in order to understand the information space in the region of the query, and then to focus on the most important parts using a reformulated query (possibly via relevance feedback) and a larger value of λ (e.g. λ = .7).

(The PDF text layer renders λ as "X"/"A"; the passage above restores the symbol. Original garbled text: "when the parameter X=1 ... a maximal diversity ranking among the documents in R when X=0 ... set X at a smaller value ... start with a small X (e.g. X = .3) ... a larger value of X (e.g. X = .7).")

## VERBATIM — user study on reordering

> We performed a pilot experiment with five users who were undergraduates from various disciplines. The purpose of the study was to find out if they could tell what was the difference between a standard ranking method and MMR. The users were asked to find information from documents and were not told how the order in which documents were presented - only that either "method R" [or method MMR] ...

> the most broad and interesting topics (MMR). In the fi[nal question, users were asked which method they would] use it for a search task. 80% chose the method MMR. The users indicated a differential preference for MMR in [certain task types]

## VERBATIM — summarization application

> [Summaries built by an abstractor contain] key points that the abstractor - rather than the user - deems important. A different user with different information needs may require a totally different summary of the same document. We created single document summaries by segmenting the document into passages (sentences in our case) and using MMR with a cosine similarity metric to rerank the passages in response to a user generated or system generated query. The top ranking passages were presented in the original document order.

> In the May 1998 SUMMAC conference, featuring a government-run evaluation of 15 summarization systems, our MMR-based summarizer produced the highest-utility query-relevant summaries with an F-score of .73 - derived from precision and recall by assessors making topic-relevance judgements from summaries. Our system also scored highest (70% accuracy) on informative summaries, where the assessor judged whether the summary contained the information required to answer a set of key questions. It should be noted that some parameters, such as summary length, varied among systems and therefore the evaluation results are indicative but not definitive measures of comparative performance.

> From these scores we can see there is no significant statistical difference between the λ=1, λ=.7, and λ=.3 scores. This is often explained by cases where the λ=1 summary failed to pick up a piece of relevant information and the reranking with λ=.7 or .3 might.

> The MMR-passage selection method for summarization works better for longer documents (which typically contain more inherent passage redundancy across document sections such as abstract, introduction, conclusion, results, etc.). MMR is also extremely useful in extraction of passages from multiple documents about the same topics. News stories contain much repetition of background information. Our preliminary results for multi-document summarization show that in the top 10 passages returned for news story collections in response to a query, there is significant repetition in content over the retrieved passages and the passages often contain duplicate or near-replication in the sentences. MMR reduces or eliminates such redundancy.

> We have shown that MMR ranking provides a useful and beneficial manner of providing information to the user by allowing the user to minimize redundancy. This is especially true in the case of query-relevant multi-document summarization.

---

## Related restatement found in a later paper (VERBATIM from search-result snippet, arXiv 2010.00117 "Multi-document Summarization with Maximal Marginal Relevance-guided Reinforcement Learning")
> MMR defines the score of a sentence s_j at time t as m_j^t = λ·S(s_j, D) − (1 − λ)·max_{e ∈ E_t} R(s_i, e), where λ ∈ [0, 1] is the weight balancing salience and redundancy.
> S(s_i, D) measures how salient a sentence s_i is, estimated by the similarity between s_i and D. E_t consists of sentences that are already extracted before time t. max_{e ∈ E_t} R(s_i, e) measures the redundancy between s_i and each extracted sentence e and finds the most redundant pair.

## NOT FETCHED / GAPS
- Table 1 precision scores (the .25 / .1 compression-factor numbers) did not survive text extraction cleanly.
- Section 4 heading/body partially garbled by the scanned PDF's OCR.
