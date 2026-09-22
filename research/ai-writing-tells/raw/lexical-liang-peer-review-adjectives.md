# Liang et al. — "Monitoring AI-Modified Content at Scale: A Case Study on the Impact of ChatGPT on AI Conference Peer Reviews" (ICML 2024 / arXiv 2403.07183)

- URL: https://arxiv.org/abs/2403.07183 — full text used: https://arxiv.org/html/2403.07183v2
- Proceedings: https://proceedings.mlr.press/v235/liang24b.html (PMLR v235, ICML 2024)
- Authors: Weixin Liang, Zachary Izzo, Yaohui Zhang, Haley Lepp, Hancheng Cao, Xuandong Zhao, Lingjiao Chen, Haotian Ye, Sheng Liu, Zhi Huang, Daniel A. McFarland, James Y. Zou
- Date published: 2024-03-11 (arXiv v1), ICML 2024
- Date accessed: 2026-08-18
- What it is: Measured the sentence-level probability shift of individual ADJECTIVES in ICLR/NeurIPS peer reviews before vs after ChatGPT, then validated which adjectives/adverbs/verbs/nouns occur disproportionately in AI-generated vs human text. Source of the "commendable / meticulous / intricate" fold-increase figures everyone quotes. Also the paper Kobak cites for "pivotal, intricate, showcasing, realm as top LLM-preferred words."
- EVIDENCE TIER: **measured** (peer-reviewed ICML, corpus-based, with fold-change numbers for the headline three; the top-100 tables are RANKED but the paper does not print a per-word number for each).
- IMPORTANT NUANCE for a house style list: the paper found ADJECTIVES are the most discriminative part of speech. Their own words: "We found this vocabulary choice to exhibit greater stability than using other parts of speech such as adverbs, verbs, nouns, or all possible tokens." Validation accuracy DEGRADES with adverbs, verbs, and nouns. So adjective bans buy more than verb bans, on this evidence.

## Section A — verbatim, the measured fold-increases

Shift in Adjective Frequency in ICLR 2024 Peer Reviews.
We find a significant shift in the frequency of certain tokens in ICLR 2024, with
adjectives such as “commendable”, “meticulous”, and “intricate” showing 9.8, 34.7, and 11.2-fold increases in probability of occurring in a sentence. We find a similar trend in NeurIPS but not in Nature Portfolio journals. Supp. Table 2 and Supp. Figure 12 in the Appendix provide a visualization of the top 100 adjectives produced disproportionately by AI.
Inspired by empirical evidence that the usage frequency of these specific adjectives like “commendable” suddenly spikes in the most recent ICLR reviews (Figure 1), we run systematic validation experiments to show that these adjectives occur disproportionately more frequently in AI-generated texts than in human-written reviews (Supp. Table 2,3, Supp. Figure 12,13). These adjectives allow us to parameterize our compound probability distribution framework (Section §\lx@sectionsign 3.5), thereby producing more empirically stable and pronounced results (Section §\lx@sectionsign 4.2, Figure 3). However, we also demonstrate that similar results can be achieved with adverbs, verbs, and non-technical nouns (Appendix D.5, D.6, D.7).
In all of our experiments in the main body of the paper, we take the vocabulary VV to be the set of all adjectives. Experiments comparing against these other possibilities such as adverbs, verbs, nouns can be found in the Appendix D.5,D.6,D.7. That is, all of our calculations depend only on the adjectives contained in each document. We found this vocabulary choice to exhibit greater stability than using other parts of speech such as adverbs, verbs, nouns, or all possible tokens.

## Section B — verbatim, Table 2: Top 100 adjectives disproportionately used more frequently by AI
(ranked most-disproportionate first, read across in rows of 5; the paper prints no per-word number here)

Table 2: Top 100 adjectives disproportionately used more frequently by AI. 

commendable | 
innovative | 
meticulous | 
intricate | 
notable | 

versatile | 
noteworthy | 
invaluable | 
pivotal | 
potent | 

fresh | 
ingenious | 
cogent | 
ongoing | 
tangible | 

profound | 
methodical | 
laudable | 
lucid | 
appreciable | 

fascinating | 
adaptable | 
admirable | 
refreshing | 
proficient | 

intriguing | 
thoughtful | 
credible | 
exceptional | 
digestible | 

prevalent | 
interpretative | 
remarkable | 
seamless | 
economical | 

proactive | 
interdisciplinary | 
sustainable | 
optimizable | 
comprehensive | 

vital | 
pragmatic | 
comprehensible | 
unique | 
fuller | 

authentic | 
foundational | 
distinctive | 
pertinent | 
valuable | 

invasive | 
speedy | 
inherent | 
considerable | 
holistic | 

insightful | 
operational | 
substantial | 
compelling | 
technological | 

beneficial | 
excellent | 
keen | 
cultural | 
unauthorized | 

strategic | 
expansive | 
prospective | 
vivid | 
consequential | 

manageable | 
unprecedented | 
inclusive | 
asymmetrical | 
cohesive | 

replicable | 
quicker | 
defensive | 
wider | 
imaginative | 

traditional | 
competent | 
contentious | 
widespread | 
environmental | 

instrumental | 
substantive | 
creative | 
academic | 
sizeable | 

extant | 
demonstrable | 
prudent | 
practicable | 
signatory | 

continental | 
unnoticed | 
automotive | 
minimalistic | 
intelligent | 

Figure 12: 

## Section C — verbatim, Table 3: Top 100 adverbs disproportionately used more frequently by AI
(same caveat: ranked, no per-word numbers; and the paper notes adverb-based detection performs WORSE than adjective-based)

Appendix B Top 100 adverbs that are disproportionately used more frequently by AI

Table 3: Top 100 adverbs disproportionately used more frequently by AI. 

meticulously | 
reportedly | 
lucidly | 
innovatively | 
aptly | 

methodically | 
excellently | 
compellingly | 
impressively | 
undoubtedly | 

scholarly | 
strategically | 
intriguingly | 
competently | 
intelligently | 

hitherto | 
thoughtfully | 
profoundly | 
undeniably | 
admirably | 

creatively | 
logically | 
markedly | 
thereby | 
contextually | 

distinctly | 
judiciously | 
cleverly | 
invariably | 
successfully | 

chiefly | 
refreshingly | 
constructively | 
inadvertently | 
effectively | 

intellectually | 
rightly | 
convincingly | 
comprehensively | 
seamlessly | 

predominantly | 
coherently | 
evidently | 
notably | 
professionally | 

subtly | 
synergistically | 
productively | 
purportedly | 
remarkably | 

traditionally | 
starkly | 
promptly | 
richly | 
nonetheless | 

elegantly | 
smartly | 
solidly | 
inadequately | 
effortlessly | 

forth | 
firmly | 
autonomously | 
duly | 
critically | 

immensely | 
beautifully | 
maliciously | 
finely | 
succinctly | 

further | 
robustly | 
decidedly | 
conclusively | 
diversely | 

exceptionally | 
concurrently | 
appreciably | 
methodologically | 
universally | 

thoroughly | 
soundly | 
particularly | 
elaborately | 
uniquely | 

neatly | 
definitively | 
substantively | 
usefully | 
adversely | 

primarily | 
principally | 
discriminatively | 
efficiently | 
scientifically | 

alike | 
herein | 
additionally | 
subsequently | 
