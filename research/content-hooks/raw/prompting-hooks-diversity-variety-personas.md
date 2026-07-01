# Generating Diverse / Distinct Options + Persona Prompting

Sources:
- https://medium.com/@stunspot/on-persona-prompting-8c37e8b2f58c
- https://gen-ai.agency/blog/2026/02/02/role-prompting-how-assigning-a-persona-changes-ai-behavior/
- https://www.vktr.com/ai-upskilling/a-guide-to-persona-prompting-why-your-ai-needs-an-identity-to-perform/
- https://resolve.cambridge.org/.../enhancing-design-concept-diversity-multi-persona-prompting-strategies (Cambridge paper)
- https://codesignal.com/learn/courses/advanced-techniques-in-prompt-engineering-1/lessons/brainstorming-techniques-in-prompt-engineering
- https://www.descript.com/blog/article/best-ai-brainstorming-prompt
- WebSearch aggregates (persona prompting; brainstorm diversity; temperature)
Accessed: 2026-06-19

---

## Persona / role prompting
"Persona prompting involves instructing the LLM to adopt a persona, professional role, or behavior pattern before asking the task." It's "one of the simplest, highest-leverage tricks" — "the model changes tone, priorities, and the kinds of reasoning it applies."

Three components to specify: **Persona/Role, Tone/Style, Audience.**
- Voice (professional / neutral / persuasive / educational) changes sentence structure and claims.
- Audience defines complexity, vocabulary, depth.
- "Negative prompting is highly effective when defining a persona — telling the AI what not to do is just as important as telling it what to do."

Example persona openers:
- "Act as an expert B2B marketing strategist with 15 years of experience in the SaaS industry."
- "You are a master copywriter specializing in direct, persuasive, and benefit-driven language."

CAVEAT (cross-ref Anthropic): modern models often don't need heavy-handed personas; over-constraining can limit helpfulness. A modern alternative is being explicit about the PERSPECTIVE you want rather than a costume: e.g., "Write hooks the way a skeptical staff engineer would phrase them — concrete, understated, allergic to marketing language."

ANTI-HYPE APPLICATION: a persona like "an honest analyst at a research institute who refuses to overstate" plus negative constraints ("never use hype or clickbait; never promise more than the source supports") is well-aligned to the brand.

---

## Multi-persona prompting for DIVERSITY (Cambridge research)
"LLMs can provide more diverse design concepts when given multiple prompts in parallel, each with a professional persona, or given a sequence of prompts with multiple professional personas to generate and update concepts gradually."

INSIGHT: To get genuinely distinct hook OPTIONS (not 5 paraphrases of one idea), assign each candidate a DIFFERENT persona or lens. E.g., generate one hook each as: the skeptic, the practitioner who's been burned, the numbers person, the contrarian, the plain-spoken explainer. Different personas → different angles → real variety.

---

## Forcing variety across distinct angles/categories
From the headline-variation research:
"Generate 10 variations that keep the core message but change the angle, test different emotional triggers (curiosity, fear, aspiration, urgency), vary in length (short punchy vs. longer descriptive), include at least 2 question-format headlines, and include at least 2 that start with 'How to...'"

TECHNIQUE: Instead of "give me 5 hooks", specify a TAXONOMY of angles and require one per category. This guarantees structural diversity instead of 5 near-duplicates. For an anti-hype brand, define honest angle categories, e.g.:
- The specific number/finding (lead with a concrete stat from the source)
- The counterintuitive-but-true observation
- The plain statement of the problem the reader actually has
- The "here's what's really going on" myth-correction
- The concrete scenario/example

Require: "Each hook must use a DIFFERENT angle from this list. No two hooks may share an angle. Label each with its angle."

## Brainwriting / SCAMPER / Six Hats / reverse brainstorming
Structured ideation methods that can be invoked in-prompt to force breadth:
- Brainwriting: dump many ideas, then build on them.
- Reverse brainstorming: generate deliberately BAD/clickbait hooks first, then invert them into honest ones (useful to surface and then explicitly avoid the slop patterns).
- SCAMPER: Substitute/Combine/Adapt/Modify/Put-to-other-use/Eliminate/Reverse.
- Six Thinking Hats: ideate from different mindsets.

## Independent runs beat one long list (IMPORTANT)
"Running the prompt multiple times independently is better than generating all ideas in one conversation, since LLMs are next-word-prediction machines and later ideas would be biased by earlier ones."

INSIGHT: If you ask for 10 hooks in one shot, items 6-10 are anchored to / derivative of items 1-5 (diminishing variety, drifting quality). For maximum diversity, run several independent generations (fresh context) and pool the results, OR explicitly instruct "make each option maximally different from the others; do not riff on the previous one."

## Temperature / sampling for variety
- Low temp (0–0.3): deterministic, focused, accurate.
- High temp (0.7–1.0): diverse, creative, sometimes chaotic.
- Brainstorming sweet spot: temperature ~0.8–1.2.
- Creative writing suggestion: temperature 0.9, top-K 40, top-P 0.99.

INSIGHT for a pipeline: generate candidates at higher temperature (variety), then SCORE/SELECT at low temperature (consistent judgment). Two phases, two settings.
