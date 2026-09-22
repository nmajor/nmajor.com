# RAW: "That's AI Slop, You Bot!" — Studying Accusations, Evidence, and Credibility in Online Discourse Towards LLM-Generated Comments

- URL: https://arxiv.org/abs/2606.12073v1  (also read via https://www.alphaxiv.org/abs/2606.12073
  and https://www.alphaxiv.org/overview/2606.12073 — the arxiv.org/html/ route 404s)
- Authors: Jason Miklian and John E. Katsos
- Publication: arXiv preprint, cs.SI (Social and Information Networks)
- Date published/submitted: 2026-06-10
- Date accessed: 2026-08-18
- Tier: MEASURED, NOT PEER REVIEWED. 25 million comments, Hacker News and Reddit, 2023-2026.
  Method is a mix of LLM judgment on 7,500 sampled accusations, speech-act coding of 300
  confirmed accusations, and a matched-control test. The LLM-as-judge step is itself a
  limitation the abstract does not quantify. NOT LinkedIn: the corpus is HN and Reddit, and
  the paper does not mention LinkedIn at all. It transfers to LinkedIn as the best available
  model of how reader accusation behaves on social, not as direct LinkedIn evidence.

## Abstract, verbatim

"Generative AI has made fluent prose cheap to produce, breaking the old promise to readers
that good writing meant real thinking. How have readers responded, and what can this tell us
about changing anti-AI attitudes? We analyzed 25 million comments from Hacker News and Reddit
(2023-2026), combining LLM judgment on 7,500 sampled accusations of AI use, sentiment
trajectories, speech-act coding of 300 confirmed accusations of AI use, and a matched-control
test of accused versus non-accused parent comments. We found that the pejorative-label share
of accusations rose more than tenfold on both platforms while a placebo vocabulary of pre-2022
inauthenticity terms (shill, astroturf) did not. This shift reflected a fast-growing trend of
branding any suspicious or seemingly inauthentic prose as "AI slop". The slop frame now
constitutes 94 percent of pejorative mentions, with the dominant comments shifting in tone
from mockery toward gatekeeping and structural protest. The key surprise comes from a
matched-control test which found that prose features that statistically distinguish AI from
human text do not predict which human text gets accused as AI. The new accusations work as
social gatekeeping of perceived authenticity without actually screening for AI. This research
extends signaling theory by showing that substitute signals used socially can grow even when
inaccurate if the underlying detection problem cannot be solved at the non-expert level. It
shows that AI's effects on writing from the reader side are distinct from those on the
production (writer) side. Detection technology cannot resolve this dynamic because the social
function of accusations is increasingly to perform social gatekeeping and in-group signaling
as opposed to identifying AI-generated writing."

## The five accusation tiers, verbatim from the alphaXiv overview

1. Direct (Tier 1): "Explicit statements like 'ChatGPT wrote this.'"
2. Pejorative (Tier 2): "Using derogatory labels such as 'AI slop,' 'GPT garbage,' or 'vomit.'"
3. Style (Tier 3): "Calling out specific linguistic markers, such as the frequent use of
   em-dashes or a 'classic AI signature.'"
4. Mocking (Tier 4): "Parodying AI-style writing through phrases like 'As a fellow human.'"
5. Indirect (Tier 5): "Using sensory or 'vibe-based' metaphors, such as 'this smells like AI'
   or describing the 'uncanny valley' of the text."

## The matched-control result — the load-bearing finding

"None of the statistical markers that reliably distinguish AI from human text could
significantly predict which human-written comments would be accused of being AI."

Reliability of the pejorative tier: "On Reddit, 78.0% of Tier 2 hits were classified as 'REAL'
accusations, compared to significantly lower rates for stylistic or mock-based tiers."

## Prose features they measured on the AI-vs-human side

- "AI-generated comments exhibited a 30% lower contraction rate"
- "2.3x higher density of formal-register adverbs"
- "2.9x higher sentence-length variance"
- "22% higher preposition density compared to human prose"

NOTE A CONTRADICTION with our own research/ai-writing-tells/report.md: that report carries
GPTZero's vendor claim that model output has LOWER sentence-length variance than human writing
(burstiness 0.2-0.4 vs 0.6-1.2), and Ju/Blix/Williams measuring reduced variance and a reduced
long tail at corpus scale. This paper measures AI comments at 2.9x HIGHER sentence-length
variance. Plausibly a genre effect — human social comments are short and uniform, so a model
writing a full paragraph reads as more varied than the humans around it — but the two are not
reconciled and should not be blended. Flagging it rather than resolving it.

## Speech-act trajectory, 2023 to 2026

- Structural protest: rose "14.8% to 38.8%"
- Gatekeeping: rose "1.9% to 16.5%"
- Mockery/dismissal: the early-stage mode, declining as a share

## Frame displacement

"The 'slop' frame had effectively displaced these older terms, accounting for 93.8% of all
pejorative accusations, up from just 12.9% in 2023."

## Sentiment

"The mean VADER sentiment score for REAL accusations on Reddit fell from a slightly positive
+0.21 in 2023 to a near-neutral +0.07 by 2026."

## Not verified in this pass

- The paper's own stated limitations section was not retrieved; the alphaXiv overview did not
  enumerate formal limitations.
- The full PDF was not read. Everything above comes from the arXiv abstract page plus two
  alphaXiv renderings of the same paper.
