# Woolworths (Australia) — AI shopping assistant "Olive" gave wrong prices and rambled about its "mother"
Date run: 2026-07-20
Date of incident/coverage: ~March 2026 (older than the 2-6 week window; strong supporting case)

Primary/quality sources:
- https://theconversation.com/woolworths-ai-agent-rambled-about-its-mother-its-a-sign-of-deeper-problems-with-the-tech-rollout-277072 (The Conversation)
- https://www.sydney.edu.au/news-opinion/news/2026/03/03/woolworths-ai-agent-rambled-about-its-mother.html (University of Sydney, 3 March 2026)
- https://www.thenewdaily.com.au/finance/consumer/2026/03/02/woolworths-ai-mother
- https://itwire.com/business-it-news/data/woolworths-olive-grows-up-from-refund-bot-to-agentic-shopping-companion
- https://switzer.com.au/when-ai-goes-wrong-the-woolies-ai-chatbot-is-rambling-to-shoppers-about-its-mother/
- https://www.miragenews.com/woolworths-ai-talks-mother-hints-at-tech-issues-1628035/
- https://theshillongtimes.com/2026/03/02/sign-of-deeper-problems-with-woolworths-ai-agent/
- Original reporting appears to trace to the Australian Financial Review (AFR) — Woolworths spokesperson quoted there.

REJECTED SOURCE (content farm, do not cite): https://custommapposter.com/article/woolworths-ai-chatbot-olive-causes-chaos-with-mother-references-price-errors/12474

## Facts (from WebSearch synthesis of the above)
- Woolworths (Australia's largest supermarket chain) runs an AI assistant called "Olive."
- Earlier in 2026, Woolworths had to rein Olive in after the bot wandered off script in customer chats, including a now-infamous ramble about its "mother." Users reported that when they gave the bot their date of birth, it started rambling about how its mother was born in the same year.
- Further testing revealed pricing errors for basic items.
- Root cause per a Woolworths spokesperson (to the AFR): the "mother" references appear to have been PRE-WRITTEN SCRIPTS dating back several years. When users entered something that looked like a birthdate, the system likely triggered a matching "fun fact" from an old decision tree with pre-programmed responses. (i.e. legacy scripting surfacing through a new LLM front end.)
- On pricing: "Because LLMs generate responses based on learned patterns rather than real-time data, they do not automatically know today's prices unless they are explicitly connected to a live database. If that grounding step is weak, the system can produce outdated prices."
- Woolworths says it has now removed this particular scripting "as a result of customer feedback."
- Woolworths had announced plans to upgrade Olive via a partnership with Google, targeting a more sophisticated "market-leading conversational shopping companion" in the second half of the financial year.

## Price discrepancies reported (SOURCE IS THE REJECTED CONTENT FARM — VERIFY AGAINST AFR BEFORE USING)
- La Gina peeled tomatoes 400g: Olive quoted $1.40, website listed $1.70
- Annalisa diced tomatoes 800g: Olive quoted $2.20, website $2.70
- Woolworths own-brand diced tomatoes 400g: $1.30 (accurate)

## WHY IT MATTERS
- Named, established, non-tech-native retailer.
- Consumer-price misstatement by a customer-facing agent — in Australia this is squarely in ACCC misleading-conduct territory (Australian Consumer Law s18/s29), though no regulator action found as of this search.
- Olive's disclaimer ("Olive is powered by AI and may make mistakes. Always check the product...") is the exact defense the Air Canada tribunal rejected.
