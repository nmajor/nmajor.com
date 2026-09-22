# How readers react to disclosed AI involvement — two 2026/2025 experiments

- Date accessed: 2026-08-18
- What this is: Two controlled studies on the "transparency dilemma" — what happens to trust when you tell readers AI was involved. Relevant because it bears on whether an AI-assisted newsletter should disclose, how much, and where the reputational risk actually sits.

---

## PAPER 1: "Full Disclosure, Less Trust? How the Level of Detail about AI Use in News Writing Affects Readers' Trust"

- URL: https://arxiv.org/abs/2601.09620 (PDF read at https://arxiv.org/pdf/2601.09620)
- arXiv:2601.09620v1 [cs.HC] 14 Jan 2026. Manuscript submitted to ACM.
- Authors: Pooja Prajod, Hannes Cools, Thomas Röggla, Karthikeya Puttur Venkatraj, Amber Kusters, Alia ElKattan, Pablo Cesar, Abdallah El Ali (CWI / Univ. of Amsterdam / NYU / TU Delft / Utrecht).

### Abstract (VERBATIM)

> As artificial intelligence (AI) is increasingly integrated into news production, calls for transparency about the use of AI have gained considerable traction. Recent studies suggest that AI disclosures can lead to a "transparency dilemma", where disclosure reduces readers' trust. However, little is known about how the level of detail in AI disclosures influences trust and contributes to this dilemma within the news context. In this 3×2×2 mixed factorial study with 40 participants, we investigate how three levels of AI disclosures (none, one-line, detailed) across two types of news (politics and lifestyle) and two levels of AI involvement (low and high) affect news readers' trust. We measured trust using the News Media Trust questionnaire, along with two decision behaviors: source-checking and subscription decisions. Questionnaire responses and subscription rates showed a decline in trust only for detailed AI disclosures, whereas source-checking behavior increased for both one-line and detailed disclosures, with the effect being more pronounced for detailed disclosures. Insights from semi-structured interviews suggest that source-checking behavior was primarily driven by interest in the topic, followed by trust, whereas trust was the main factor influencing subscription decisions. Around two-thirds of participants expressed a preference for detailed disclosures, while most participants who preferred one-line indicated a need for detail-on-demand disclosure formats. Our findings show that not all AI disclosures lead to a transparency dilemma, but instead reflect a trade-off between readers' desire for more transparency and their trust in AI-assisted news content.

### Design detail (VERBATIM)

> In our study, one-line disclosures indicated whether AI was used for partial content generation or final editing, while detailed disclosures further described the specific production steps involving AI, confirmed human editorial oversight, and included contact information for error reporting.

### Results (VERBATIM)

> We found that detailed disclosures led to lower trust questionnaire scores and lower subscription rates, whereas one-line and no disclosure conditions yielded similar trust scores and subscription rates. We also found that, on average, participants checked sources the least in the no disclosure condition, followed by one-line disclosure, and the most in the detailed disclosure condition. Although AI involvement did not show considerable differences in trust questionnaire responses, high AI involvement often led to more source-checking and lower subscription, indicating that the level of AI involvement could contribute to the transparency dilemma. Results from our interview analysis showed that often interest prompted participants to check sources, whereas trust was the determining factor for subscription behavior. Interestingly, around two-thirds of the participants preferred detailed disclosures because of more transparency, and among those who preferred one-line, most of them expressed a desire for detail-on-demand disclosure designs. Our findings suggest that not all AI disclosures lead to a transparency dilemma, but detailed disclosures do. However, detailed disclosures are more aligned with the transparency expectations of the readers, highlighting a paradoxical trade-off between trust and transparency.

---

## PAPER 2: "Understanding Reader Perception Shifts upon Disclosure of AI Authorship"

- URL: https://arxiv.org/abs/2510.24011 (PDF read at https://arxiv.org/pdf/2510.24011)
- Authors: Hiroki Nakano, Jo Takezawa (IIS Lab, University of Tokyo), Fabrice Matulic (Preferred Networks), Chi-Lan Yang, Koji Yatani (University of Tokyo).

### Abstract (VERBATIM)

> As AI writing support becomes ubiquitous, the question of how disclosing its use affects reader perception remains critical and underexplored. We conducted a controlled study with 261 participants to examine how disclosing varying levels of AI involvement shifts perceptions of the author across six distinct communicative acts. Our analysis of 990 evaluations reveals that disclosure generally erodes perceived trustworthiness, caring, competence, and likability, with the most precipitous declines observed in social and interpersonal writing. A thematic analysis of participant feedback attributes these negative shifts to a perceived loss of human sincerity, diminished authorial effort, and the contextual inappropriateness of AI. Notably, however, we find that higher AI literacy mitigates these negative perceptions, leading to greater tolerance or even appreciation for AI assistance. Our results highlight the nuanced social dynamics of AI-mediated authorship and inform design implications for transparent, context-sensitive writing systems that better preserve trust and authenticity.

### Method (VERBATIM)

> To investigate how the disclosure of AI assistance influences reader perception, we conducted a repeated-measures online study. Participants rated their impressions of a text before and after being informed that a specific percentage of the content was generated or edited by AI. Unlike prior work, our primary objective was to examine how perceptions shift across systematically varying levels of disclosed AI contribution. To achieve this, we used a deception-based design: while all texts were entirely AI-generated (with minor human proofreading), participants were told that only specific portions were created or altered by AI.

> We grounded our experimental design in the six fundamental acts of writing defined by Berge et al. [4]: Convince, Interact, Reflect, Describe, Explore, and Imagine. […] Convince, Interact, and Reflect are primarily person-oriented, focusing on others, social relationships, and the self, respectively. In contrast, Describe, Explore, and Imagine are object-oriented, centering on the organization, development, and creation of knowledge.

> The disclosed proportion varied from 0% to 100% in 10% increments across conditions, corresponding to approximately two sentences per increment (Figure 1).

### Results (VERBATIM)

> AIRatio exhibited a significant negative correlation across all models (p<.001). As the disclosed percentage of AI involvement increased, perceptions of the author declined significantly across all five metrics. The communicative purpose (Act) of the text also had a significant influence, with effects varying across the different perception metrics. Interact had a significant negative effect on TrustworthinessShift, CaringShift, and LikabilityShift (p<.001 for all of them). This suggests AI authorship is negatively viewed for social and interpersonal communication. In contrast, AI disclosure was viewed more favorably in terms of perceived competence and caring for certain acts. Convince, Interact, and Imagine were positively associated with CompetenceShift (p<.01 for Convince and Imagine, and p<.001 for Interact). Explore was linked to a more positive shift in perceived caring (CaringShift, p<.01).

> Collectively, these results indicate that readers were more tolerant of AI authorship in argumentative, creative, and exploratory writing compared to interpersonal communication.

> Overall, participants with higher AI literacy were more tolerant, and sometimes even appreciative, of AI use in writing.

### Coefficient table (VERBATIM extract, Table 3)

```
Variables            Trustworthiness  Caring/Goodwill  Competence  Likability  Future
Intercept            -4.676***        -2.446***        -3.866***   -4.013***   -1.074***
AIRatio              -3.236***        -2.838***        -1.774***   -3.729***   -1.034***
Act (Ref: To Describe)
To Convince           0.085           -1.075            1.496**     0.206       —
To Explore            0.536            1.612**          0.247       1.384       —
To Imagine            1.080            0.410            1.335**    -0.090       —
To Interact          -1.999**         -3.050***         1.853***   -3.800***    —
To Reflect           -0.388           -0.144            0.801      -1.094       —
```

### Qualitative themes (VERBATIM)

> In our thematic analysis of the 929 open-ended responses, we identified nine themes: five explaining negative shifts and four explaining positive or neutral ones.

> Theme N1: Loss of Human Touch and Sincerity (71 responses). This theme captures a perceived loss of authenticity and emotional connection.

> [Theme N3, participant quote] "Using AI to obtain specialized information is very effective, but since it's unclear whether the author has actually verified that information, it becomes very difficult to trust their judgment" (Act: Describe, AIRatio: 80%). This suggests that when AI is perceived to contribute core knowledge, it can undermine the author's perceived competence.

> Theme N4: Inappropriate Contexts for Using AI (82 responses). Participants felt that AI was simply inappropriate for certain communicative acts, particularly those with strong social and emotional stakes. This sentiment was most common for acts like Convince (25 occurrences) and Interact (29 occurrences).
