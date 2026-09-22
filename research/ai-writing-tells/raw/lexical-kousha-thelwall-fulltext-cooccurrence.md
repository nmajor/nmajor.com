# Kousha & Thelwall — "How much are LLMs changing the language of academic papers after ChatGPT? A multi-database and full text analysis" (ISSI 2025 / arXiv 2509.09596)

- URL: https://arxiv.org/abs/2509.09596 — PDF: https://arxiv.org/pdf/2509.09596 (text extracted here from the PDF; no arXiv HTML version exists)
- Authors: Kayvan Kousha (Univ. of Wolverhampton), Mike Thelwall (Univ. of Sheffield)
- Presented: ISSI 2025 Conference. Preprint posted 2025-09.
- Date accessed: 2026-08-18
- What it is: 12 LLM-associated terms tracked across SIX databases (Scopus, Web of Science, PubMed, PubMed Central, Dimensions, OpenAlex) 2015–2024, plus 2.4 MILLION PMC open-access FULL TEXTS (2021–July 2025). Not abstracts — whole papers.
- EVIDENCE TIER: **measured** (large-scale; the authors are explicit that it is correlational: "the results do not provide direct causal evidence and cannot distinguish between LLM-generated text, LLM-edited text, or broader adoption of LLM-associated writing or publishing styles").
- WHY THIS ONE MATTERS MOST FOR HOW A BLACKLIST SHOULD WORK: it is the only source that MEASURES CLUSTERING. Every list says "one word means nothing, it's the pile-up that gives you away." This paper puts numbers on the pile-up. Pearson correlations between these words WITHIN THE SAME PAPER went from ~0.02 in 2022 to 0.3–0.5 in 2024. In 2024, 59.3% of PMC papers mentioning "delve" also mentioned "underscore"; in 2022 that figure was 1–14%. The co-occurrence, not the word, is the fingerprint — and it is now roughly a 20x stronger signal than it was pre-ChatGPT.
- IT ALSO CONTRIBUTES FIVE WORDS the earlier studies missed, found by the authors' own Scopus term-comparison rather than borrowed from the literature: **heighten, nuance, bolster, foster, interplay**.
- AND ONE REFINEMENT ON "delve": delve is used SELECTIVELY (highest growth in 1–5 uses per paper, rarely 6+), whereas underscore, intricate and meticulous are the ones that get hammered repeatedly. Repetition is a different tell from presence.

## Verbatim: abstract

This study investigates how Large Language Models (LLMs) are influencing the language of academic 
papers by tracking 12 LLM -associated terms across six major scholarly databases (Scopus, W eb of 
Science, PubMed, PubMed Central (PMC), Dimensions, and OpenAlex) from 2015 to 2024. Using over 
2.4 million PMC open -access publications (2021 –July 2025), we also analysed full texts to assess 
changes in the frequency and co -occurrence of these terms before and after ChatGPT’s initial public 
release. Across databases,  delve (+1,500%), underscore (+1,000%), and intricate (+700%) had the 
largest increases between 2022 and 2024. Growth in LLM -term usage was much higher in STEM fields 
than in  social sciences and arts and humanities.  In PMC full texts, the proportion of papers using 
underscore six or more times increased by over 10,000% from 2022 to 2025, followed by intricate 
(+5,400%) and meticulous ( +2,800%). Nearly half of all 2024 PMC papers using any LLM term also 
included underscore, compared with only 3%–14% of papers before ChatGPT in 2022. Papers using one 
LLM term are now much more likely to include other terms. For example, in 2024, underscore strongly 
correlated with pivotal (0.449) and delve (0.311), compared with very weak associations in 2022 (0.032 
and 0.0 18, respectively). These findings provide the first large -scale evidence  based on full -text 
publications and multiple databases that some LLM-associated terms are now being used much more 
frequently and together in academic writing. However, the results do not provide direct causal evidence 
and cannot distinguish between LLM -generated text, LLM -edited text, or broader adoption of LLM -
associated writing or publishing styles. The rapid uptake of LLMs to support scholarly publishing is a 
welcome development reducing the language barrier to academic publishing for non-English speakers.  

## Verbatim: how the 12 terms were selected, and Table 1 (term -> supporting studies)

We started with a seed list of terms drawn from prior studies (Table 1) (e.g., underscore, delve, 
showcase, unveil, intricate, meticulous, pivotal) and used Scopus term -comparison outputs to identify 
additional words that were more common in Environmental Science titles/abstracts when the seed 
terms were present than when they were absent. This produced a long list of about 1,000 candidate 
associated terms. We then screened this list in two steps. First, we retained candidates that co-occurred 
with the seed-term set more often than expected using a χ² test (p < 0.01). Second, we checked each 
remaining candidate using Scopus annual trend graphs and kept only those showing a clear step-change 
in frequency in 2024. This produced five additional terms (heighten, nuance, bolster, foster, interplay), 
which were added to the seven terms drawn from the literature, giving the final set of 12 terms used 
in all analyses. We note that some added terms (e.g., foster, heighten) can also be used in discipline -
specific ways and the selection of LLM-associated terms is not comprehensive and is discussed further 
in the Limitations section. 
Table 1. lists the final terms selected for analysis and sources from which they were identified. Although 
there is no direct causal evidence that these terms originate from LLMs, it is reasonable to hypothesise 
that recent increases in their usage may be influenced by LLM-associated text. This assumption is based 
on previous studies and the fact that these terms are generic in nature, lacking any clear alternative 
origin (unlike domain-specific terms such as “Covid-19” or explicit labels like “LLM”).  
Table 1: Selected LLM-associated terms and supporting studies 
LLM-associated term Supporting studies 
underscore[s/d/ing] Kobak et al., 2024; Uribe & Maldupa, 2024; Juzek & Ward, 2025 
delve[s/d/ing] Kobak et al., 2024; Uribe & Maldupa, 2024; Juzek & Ward, 2025 
showcase[s/d/ing] Kobak et al., 2024; Liang et al., 2024; Uribe & Maldupa, 2024 
unveil[s/ed/ing] Uribe & Maldupa, 2024; Comas-Forgas et al., 2025 
intricate[s/d/ing] Gray, 2024; Liang et al., 2024; Uribe & Maldupa, 2024; Juzek & Ward, 2025 
meticulous[ly] Gray, 2024; Uribe & Maldupa, 2024 
5 
 
pivotal Gray, 2024; Liang et al., 2024 
heighten[s/ed/ing]  Authors’ analysis from Scopus articles in the Environmental Studies 
nuance[s/d] Authors’ analysis from Scopus articles in the Environmental Studies 
bolster[s/ed/ing] Authors’ analysis from Scopus articles in the Environmental Studies 
foster[s/d/ing] Authors’ analysis from Scopus articles in the Environmental Studies 
interplay[s/ed/ing] Authors’ analysis from Scopus articles in the Environmental Studies 

## Verbatim: repetition within full texts, 2022 vs 2025

 
Frequency of LLM term in PMC full texts (2022 vs 2025) 
Adding more detail to the results above, there were  sharp increases in the frequent use of individual  
LLM-associated terms within PMC full-text publications between 2022 and 2025  (Figure 9), indicating 
that frequent use has become more common . The most substantial increase is for underscore, where 
the proportion of papers using the term six or more times rose from 0.013% in 2022 to 1.37% in 2025, 
an increase of over 10,000% (calculated as ((1.372  − 0.013) / 0.013) × 100). Similarly, intricate and 
meticulous increased by over 5,400% and 2,800%, respectively, for papers where the terms appeared 
six or more times. However, delve had its highest increase in usage up to five times per article between 
2022 and 2025, suggesting that it is less likely to be used six or more times compared with terms such 
as underscore or intricate. This suggests that delve is used more selectively in academic writing rather 
than being repeatedly used within the full texts, although it appears more frequently in abstracts 
compared with other terms, as shown in Figure 2. 
 
Figure 9. Percentage increase in the repeated use of LLM-associated terms within PMC full -text 

## Verbatim: co-occurrence of the terms, 2022 vs 2024

Co-occurrence of LLM-associated terms in PMC full texts (2022 vs 2024) 
To assess how often LLM-associated terms are used together, we calculated the conditional probability 
of two terms appearing within the same PMC full -text publication. For example, Figure 11 shows that 
in 2024, 59.3% of PMC papers mentioning delve (37,534 in total) also mentioned underscore (22,241 
papers). However, only 16.1% of papers mentioning underscore (138,183 in total) also mentioned delve 
(22,241 papers). This shows that while papers using delve often also include underscore, the reverse is 
less common because underscore is used much more widely within PMC papers, and only about 16% 
of them mention delve as well. Therefore, the results differ within rows or columns because the 
probabilities are calculated relative to total numbers of papers for each term. 

14 
 
Figures 10 and 11 show how these co-occurrences patterns changed before and after the release of 
ChatGPT. In 2024, co -occurrence probabilities increased substantially compared with 2022, showing 
that papers using one LLM-associated term were significantly more likely to include others in the same 
paper. These probabilities are asymmetric, meaning that the likelihood of term A appearing given term 
B is not necessarily the same as the likelihood of term B appearing given term A.  For example, a large 
proportion of papers using LLM terms in this study also mentioned underscore, with co -occurrence 
probabilities ranging from 44% for foster to 59% for delve (first row in Figure 11), whereas the reverse 
probabilities were much lower. In contrast, in 2022 these co-occurrence rates were much lower, usually 
between 1% and 14% across most terms (first row of Figure 10). Similarly, papers using intricate, pivotal, 
or meticulous in 2024 often mentioned other LLM terms within the same publication, with co -
occurrence probabilities between 30% and 45%. In 2022, however, the same terms co -occurred in 
fewer than 8% of papers.  The increased co -occurrence of LLM terms  after ChatGPT release suggests 
their growing usage in academic writing, likely influenced by LLMs. 
 
Figure 10. Heatmap of co -occurrence probabilities of LLM-associated terms in PMC full texts in 2022 

## Verbatim: correlations between terms, 2022 vs 2024 (Figures 12 and 13 data)

Correlations between LLM-associated terms (2022 vs. 2024) 
Figures 12 and 13 compare the Pearson correlations between LLM-associated terms in PMC full -text 
papers. In 2022, the Pearson correlations between most terms were very low , mostly below 0.05. For 
example, underscore had weak correlations with delve (r=0.018), showcase (r=0.014), and intricate 
(r=0.020), indicating that these terms were rarely used together within the same papers  before 
ChatGPT release. In contrast, there w ere much stronger correlations across almost all terms . In 2024, 
underscore had the highest overall correlations with other LLM -associated terms, such as pivotal 
(r=0.449), intricate (r=0.405), and nuance (r=0.338), compared with 2022, where the same correlations 
were much weaker (0.032, 0.020, and 0.063, respectively).  Similarly, intricate correlated highly with 
delve (0.335) and interplay (0.423), whereas these values were below 0.03 in 2022.  These findings 
indicate that almost two years after the release of ChatGPT  academic publications increasingly used 
multiple LLM-associated terms together.  
 
Figure 12. Pearson correlation heatmap of LLM-associated terms within PMC full -text papers in 2022 
(before ChatGPT ’s public release), showing associations between term frequencies within the same 
paper. 
 
underscore delve showcase unveil intricate meticulous pivotal heighten nuance bolster foster interplay
underscore 0.018 0.014 0.017 0.02 0.004 0.032 0.059 0.063 0.047 0.03 0.04
delve 0.018 0.016 0.019 0.029 0.012 0.017 0.018 0.042 0.031 0.018 0.02
showcase 0.014 0.016 0.016 0.029 0.006 0.008 0.009 0.025 0.013 0.02 0.02
unveil 0.017 0.019 0.016 0.041 0.007 0.061 0.01 0.006 0.009 0.012 0.053
intricate 0.02 0.029 0.029 0.041 0.013 0.045 0.018 0.025 0.015 0.011 0.084
meticulous 0.004 0.012 0.006 0.007 0.013 0.012 0.004 0.007 0.006 0.002 0.002
pivotal 0.032 0.017 0.008 0.061 0.045 0.012 0.019 0.008 0.011 0.018 0.061
heighten 0.059 0.018 0.009 0.01 0.018 0.004 0.019 0.069 0.052 0.036 0.033
nuance 0.063 0.042 0.025 0.006 0.025 0.007 0.008 0.069 0.054 0.049 0.037
bolster 0.047 0.031 0.013 0.009 0.015 0.006 0.011 0.052 0.054 0.041 0.018
foster 0.03 0.018 0.02 0.012 0.011 0.002 0.018 0.036 0.049 0.041 0.021
interplay 0.04 0.02 0.02 0.053 0.084 0.002 0.061 0.033 0.037 0.018 0.021
underscore delve showcase unveil intricate meticulous pivotal heighten nuance bolster foster interplay
underscore 0.311 0.272 0.233 0.405 0.29 0.449 0.295 0.338 0.23 0.224 0.315
delve 0.311 0.218 0.211 0.335 0.211 0.295 0.182 0.231 0.168 0.162 0.2
showcase 0.272 0.218 0.144 0.256 0.222 0.21 0.098 0.159 0.128 0.085 0.095
unveil 0.233 0.211 0.144 0.316 0.166 0.302 0.172 0.098 0.102 0.068 0.192
intricate 0.405 0.335 0.256 0.316 0.298 0.491 0.255 0.274 0.186 0.147 0.423
meticulous 0.29 0.211 0.222 0.166 0.298 0.251 0.136 0.197 0.146 0.084 0.118
pivotal 0.449 0.295 0.21 0.302 0.491 0.251 0.285 0.195 0.243 0.192 0.309
heighten 0.295 0.182 0.098 0.172 0.255 0.136 0.285 0.14 0.164 0.146 0.211
nuance 0.338 0.231 0.159 0.098 0.274 0.197 0.195 0.14 0.135 0.192 0.214
bolster 0.23 0.168 0.128 0.102 0.186 0.146 0.243 0.164 0.135 0.195 0.119
foster 0.224 0.162 0.085 0.068 0.147 0.084 0.192 0.146 0.192 0.195 0.13
interplay 0.315 0.2 0.095 0.192 0.423 0.118 0.309 0.211 0.214 0.119 0.13
16 
