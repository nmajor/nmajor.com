# Russell, Karpinska & Iyyer - "People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text" (ACL 2025)

- URL: https://aclanthology.org/2025.acl-long.267/ - preprint https://arxiv.org/abs/2501.15654 (full text used: https://arxiv.org/html/2501.15654v2)
- Publication: Proceedings of the 63rd Annual Meeting of the ACL (Volume 1: Long Papers), pp. 5342-5373, Vienna, 2025
- Date accessed: 2026-08-18
- What it is: Five expert annotators (people who use LLMs for writing daily) detected AI-generated articles and WROTE OUT their reasoning for every judgement. The authors then coded 
  those free-form explanations into a taxonomy. It is the best available answer to "which cues do people who are actually good at this rely on" - and the answer is overwhelmingly LEXICAL.
- EVIDENCE TIER: **measured for the behavioural claims** (frequencies of cue types across coded explanations, detection accuracy); the word list in Table 12 is the annotators' own accumulated 
  detection guide, i.e. **expert-asserted**, not corpus-measured. Distinguish the two.
- KEY NUMBERS: "Vocabulary-related clues are mentioned in the majority (53.1%) of all explanations, while sentence structure (35.9%), grammar (24.8%), and originality (23.7%) are also common."
- THE MOST IMPORTANT FINDING FOR HOW TO USE A BLACKLIST AT ALL: experts and non-experts differ in KIND, not just accuracy. "nonexperts take the inclusion of any 'fancy' or otherwise 
  low-frequency word types as signs of AI-generated text; in contrast, experts are much more familiar with exact words and phrases overused by AI (e.g., testament, crucial)."
  That is a direct argument for a specific, evidence-gated list over a general "avoid fancy words" instinct - and against over-plainening prose.
- SECOND IMPORTANT FINDING: the word list stops working when the writer knows it. "57.1% of correct explanations about o1-Pro articles mention vocabulary, compared to only 42.3% for the 
  humanized o1-Pro articles prompted to avoid 'AI vocab'." And the residual false positives: "31% of explanations here mention vocabulary, typically when human-written content contains 
  'AI vocab' like delve and crucial." Human writers DO get flagged for these words.
- THIRD: model-specific familiarity matters. "Annotator 2 focuses more heavily on the existence of 'AI vocab' in the article than the other annotators, and they were not familiar with the 
  distribution of words that are overused by Claude."

## Verbatim excerpts


Qualitative analysis of the experts’ free-form explanations shows that while they rely heavily on specific lexical clues,

An analysis of our expert’s explanations reveals that usage of “AI vocabulary” (e.g., vibrant, crucial, significantly) form the most common giveaways. Close behind are formulaic sentence and document structures (e.g., optimistically vague

To understand why experts far outperformed nonexperts at detecting AI-generated text, we analyze the comments each annotator provided in their explanations. Overall, nonexperts often mistakenly fixate on certain linguistic properties compared to experts. One example is vocabulary choice, where nonexperts take the inclusion of any “fancy” or otherwise low-frequency word types as signs of AI-generated text; in contrast, experts are much more familiar with exact words and phrases overused by AI (e.g., testament, crucial).1313

A complete list of “AI vocab” found in the detection guide (Table 11) is detailed in Table 12. Nonexperts also believe that human authors are more likely than AI to form grammatically-correct sentences, while experts realize the opposite is true: humans actually make more grammatical errors. Finally, nonexperts attribute any text written in a neutral tone to AI,

Annotator 2 did not have any prior experience using Claude, although three other annotators who were also unfamiliar with Claude achieved TPRs of at least 96.7%. However, Annotator 2 focuses more heavily on the existence of “AI vocab” in the article than the other annotators, and they were not familiar with the distribution of words that are overused by Claude.

One AI-generated article was misclassified by the expert majority vote. Analyzing their explanations, the three annotators most focused on vocabulary and sentence structure did not find enough clues in those categories to judge the article as AI-generated. The full text of the article is in Table 14.

While vocabulary is the most common clue, complex phenomena like originality, quotes and clarity are also distinguishing features.

In contrast to opaque automatic detectors, we can easily solicit explanations from human annotators. We use GPT-4o to code these explanations into a schema (Table 3) developed by the authors after careful manual analysis. Details of the coding process used to label explanations can be found in §D. Vocabulary-related clues are mentioned in the majority (53.1%) of all explanations, while sentence structure (35.9%), grammar (24.8%), and originality (23.7%) are also common. We note that many of these categories (e.g., originality, factuality, tone) are much more difficult to assess automatically than others (e.g., vocabulary), and these may currently be areas where humans have an advantage over automatic detectors.

shifts as the complexity of the article generation setup increases: for example, 57.1% of correct explanations about o1-Pro articles mention vocabulary, compared to only 42.3% for the humanized o1-Pro articles prompted to avoid “AI vocab”.

Studying expert false positives is also insightful (Figure 3): 31% of explanations here mention vocabulary, typically when human-written content contains “AI vocab” like delve and crucial.

Analysis of explanations provided by our expert annotators reveals that they pick up on not just vocabulary and sentence structure-related clues but also more complex properties like originality

## Verbatim: Table 11 (truncated detection guide) - the "Vocabulary / Word Choice Patterns" section and neighbours

## Vocabulary / Word Choice Patterns
- Certain words crop up unusually frequently throughout AI-generated text compared to human writing
- Words like ‘delve’ and ‘tapestry’ are overused in AI-generated text but infrequently used in human writing ...
## Grammar
- Human writing generally less strictly adheres to English grammar rules and punctuation than AI-generated text
- AI-generated text uses a very formal writing style unless explicitly told not to ...
## Sentence Structure
- AI-generated sentences often follow the complex sentence structure, with multiple dependent and independent clauses, while human writing contains more of a mixture of simple, complex, and compound sentences
- example AI-generated sentence: “When it comes to celebrating Halloween, this holiday is a testament to the importance of empathy and community.” ...
## Formatting
- When AI makes lists, it typically uses the format of creating a bold header per bullet point, followed by a colon and then description of that list item.
- If a book title is referenced in a text, AI-generated text will always italicize the title, while human writing does not always follow this convention.
- Some pieces of text, especially articles and essays, contain headers and sub-headers. The headers written by AI are quite repetitive ...
## Tone
- The tone of AI-written text is flowery and formal, and its sentences are frequently structured as a reflective, onlooking statement, regardless of topic.
- AI tends to be inherently positive, attempting to emotionally uplift the reader, especially towards the conclusion.
- AI prioritizes efficiency, sometimes sacrificing clarity or depth in its messaging ...
## Introductions
- AI-written introductions often contain a strong scene-opener with a description of a specific time or place, such as "On a drab November morning..." or "On December 8, 1660, a London audience gathered ..." ...
## Conclusions
- AI-generated text always ends with a neat conclusion, instead of just ending the article naturally.
- AI-generated conclusions are often overly long and summarize everything that has already been written in an article ...
## Content
- Unless specifically prompted, AI will avoid controversial topics at all costs.
- AI will avoid any type of swear word, including mild ones like ‘darn’, or any other offensive vocabulary ...
## Contextual Accuracy and Factuality
- Human writing in the domain of non-fiction is factually accurate and contains many specific factual claims.
- In human writing, people, places, brands, and other named objects can be verified or are highly plausible ...
## Creativity & Originality
- AI-generated text is much less creative than that of humans, lacking originality and sticking to an ‘obvious’ way to answer a prompt.
- Humans incorporate twists, unexpected insights, and twists that AI hasn’t seemed to master quite yet ...
Table 11: A truncated version of the AI Text Detection Guide.
AI Vocabulary Included in Detection Guide

## Verbatim: Table 12 - ALL "AI" vocabulary the expert annotators noted, as listed in their Detector Guide
(expert-asserted, grouped by part of speech; this is the working list of people with measured 96%+ true-positive rates)

AI Vocabulary Included in Detection Guide
Nouns: aspect, challenges, climate, community, component, development, dreams, environment, exploration, grand scheme, health, hidden, importance, landscape, life, manifold, multifaceted, nuance, possibilities, professional, quest, realm, revolution, roadmap, role, significance, tapestry, testament, toolkit, whimsy
Verbs: capturing, change, consider, delve/dive into, elevate, embrace, empower, enact, enhance, engage, ensure, evoking, evolving, explore, fostering, guiding, harness, highlights, improve, integrate, intricate, jeopardizing, journey, navigating, navigate, notes, offering, partaking, resonate, revolutionize, shape, seamlessly, support, tailor, transcend, underscores, understanding
Adjectives: authentic, complex, comprehensive, crafted, creative, critical, crucial, curated, deeper, diverse, elegant, essential, groundbreaking, key, meaningful, paramount, pivotal, powerful, profound, quirky, robust, seamless, significant, straightforward, structured, sustainable, transformative, valuable, vast, vibrant, vivid, whimsical
Adverbs: additionally, aptly, creatively, moreover, successfully
Phrases: as we [verb] the topic, cautionary tale, connect with, has shaped the, in a world of/where, in conclusion, in summary, it’s crucial to, it’s important to note, it’s not about ___ it’s about ___, manage topic issues/problems, not only ___ but also, packs a punch/brings a punch, paving the way, personal growth, quality of life, remember that, simple yet ___, step-by-step, such as, the effects of, the rise of, their understanding of, they identified patterns, to form the, to mitigate the risk, weaving, when it comes to topic
Table 12: All ‘AI’ Vocabulary our expert annotators noted, as listed in the Detector Guide. See the full detection guide prompt in Table 11.
Evader Template