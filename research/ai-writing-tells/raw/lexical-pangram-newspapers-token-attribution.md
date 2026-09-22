# "AI use in American newspapers is widespread, uneven, and rarely disclosed" (arXiv 2510.18774) — the Pangram token-attribution angle

- URL: https://arxiv.org/abs/2510.18774 — full text used: https://arxiv.org/html/2510.18774v4
- Date published: 2025-10 (arXiv v1), v4 accessed here. Covered by TechXplore, "Extent of AI-created content in American news and opinion pages revealed."
- Date accessed: 2026-08-18
- What it is: 186,000 articles from 1,500 American newspapers, summer 2025, run through Pangram. ~9% partially or fully AI-generated. Included here for ONE reason relevant to a lexical lane: its Tables 3 and 6 print real newspaper excerpts with "words and phrases identified as indicative of AI use by Pangram" highlighted in red — i.e. actual detector token attributions on real prose.
- EVIDENCE TIER: **measured for the prevalence figures**; the token highlights are DETECTOR OUTPUT, and the paper does not publish an aggregated list of which tokens drive classification. Nor does Pangram publish token weights anywhere else — its own docs (pangram.com/research/how-it-works) describe per-token human/AI-assisted/AI-generated scores in an embedding space, with no lexical inventory released. **So: no vendor publishes a rankable "which words drive the classifier" table. Anyone claiming one is inferring it.**
- HONEST LIMITATION OF THIS CAPTURE: the red highlighting renders only in the PDF/figures. The arXiv HTML strips the colour, so the individual highlighted tokens could NOT be extracted here. What survives is the authors' own summary of what those highlights showed, quoted below.
- THE USABLE LEXICAL FINDING, in the authors' words: AI-assisted reporter articles "include fewer specific details, broader time markers, and loftier language" — with the concrete example that the human version names "Tuesday" and the "Emergency Special Setting" while the AI version reaches for vague time placement ("ongoing", "recent"). That is a lexical class no blacklist carries: **vague temporal hedges standing in for a date**.
- ALSO (for the punctuation lane, not this one): "AI-assisted articles in this subset have up to 11.53x more em dashes than those authored entirely by humans (Table 6)."

## Verbatim excerpts

Table 3: Notable cases of AI use in the recent_news dataset. Words and phrases identified as indicative of AI use by Pangram are highlighted in red. AI use takes many forms, from completely made-up news sites to AI responses to advice columns (e.g., Dear Annie), legitimate articles that happen to quote AI-generated text from other sources, and highly-templated topics like weather and sports reports.

Perhaps not surprisingly, we observe qualitative differences between the articles marked for AI use and the human-written ones. For instance, AI-assisted articles in this subset have up to 11.53× more em dashes than those authored entirely by humans (Table 6,

In the human-written article, the author references the time (Tuesday) and setting (Emergency Special Setting). In the AI-generated article, the author uses more fluff words and more vague time placement (i.e. ongoing, recent).

Table 6: Excerpts from passages of newspaper articles written by reporters in the ai_reporters dataset. Words and phrases identified as indicative of AI use by Pangram are highlighted in red. In the left Human-written column, excerpts of older, human-written articles are displayed, while the AI-Generated or Mixed column shows newer articles by the same author detected as AI-generated or assisted. When AI use is present, articles by these reporters include fewer specific details, broader time markers, and loftier language.

