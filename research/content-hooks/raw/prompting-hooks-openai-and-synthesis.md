# OpenAI Best Practices + Synthesized End-to-End Hook Prompt

Sources:
- https://platform.openai.com/docs/guides/prompt-engineering
- https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api
- https://cookbook.openai.com/examples/gpt4-1_prompting_guide
- WebSearch aggregate ("OpenAI prompt engineering ... few-shot reference text reduce hallucination")
Accessed: 2026-06-19

---

## OpenAI transferable techniques
- **Few-shot:** "include a handful of input/output examples in the prompt; the model implicitly picks up the pattern." "When providing examples, try to show a diverse range of possible inputs with the desired outputs." (Diversity in examples prevents pattern-lock — same as Anthropic.)
- **Use reference text to reduce hallucination:** "Using reference text is particularly valuable for reducing hallucinations and ensuring responses are based on verified information rather than the model's training data alone." → For hooks: feed the actual source article/transcript so hooks draw on real specifics, not invented claims. This is the #1 reliability lever for an honest brand: a hook can only be honest if it's grounded in the source.
- **System vs user split:** "Put overall tone or role guidance in the system message; keep task-specific details and examples in user messages."
- **Decompose / chain:** "structure complex tasks as a sequence where outputs from earlier steps become inputs for later steps ... validating each stage before proceeding." → generate → critique → select.
- **Tool calling reduces guessing:** lets the model read source files rather than fabricate.

---

## CARE / AIDA-PAS-BAB framing (from copywriting-prompt aggregates)
- **CARE framework:** Context, Ask, Rules, Examples — a simple prompt pattern that reliably improves outputs. Combine with "require multiple distinctly different options by drafting across AIDA, PAS, and BAB" (proven copy formulas → built-in angle diversity).
  - AIDA = Attention, Interest, Desire, Action
  - PAS = Problem, Agitate, Solution
  - BAB = Before, After, Bridge
- Simple hook generator (aggregate): "I'm writing a post about [TOPIC] for [AUDIENCE]. Give me 10 different opening lines."
- Multi-intro pattern: "Version 1 opening with a surprising statistic or counterintuitive claim; Version 2 a relatable scenario illustrating the pain point; Version 3 a bold contrarian statement; each 80-120 words." (Assign a distinct opener TYPE per version = enforced variety.)
- Anti-generic note: "To stop ChatGPT from writing generic intros, start with a hook that names a specific frustration or observation."

---

## SYNTHESIS: the high-leverage techniques, ranked for an anti-hype 3-5-candidate pipeline

1. **Ground in real source material** (paste the article/transcript at top; quote specifics first). The only way hooks are honest + specific. Reduces hallucination. [Anthropic long-context + OpenAI reference-text]
2. **Name the failure mode explicitly + banned-word list.** Tell the model it defaults to generic clickbait slop and must not; give the banned hype/clickbait list; pair with a positive target. [Anthropic AI-slop language + anti-slop sources]
3. **Define audience + voice precisely.** Skeptical technical decision-maker who distrusts marketing; plain/specific/honest/understated voice; 3-5 voice adjectives. [FAST, persona prompting]
4. **Few-shot with 3-5 diverse, labeled on-voice examples** (good hooks; optionally anti-examples). [Anthropic, OpenAI]
5. **Force distinct angles via a taxonomy** — require one hook per honest angle category; no two share an angle; label each. [headline-variation research, multi-persona]
6. **Generate a larger pool, then score-and-select.** Brainstorm many (high temp / independent runs) → rubric-score in a table with Rationale → hard-gate fails → keep top 3-5 distinct. [Copyhackers, LLM-as-judge, Anthropic self-correction]
7. **Self-check before returning.** "Verify each hook is specific, honest, hype-free, and distinct; rewrite or drop any that fail." [Anthropic self-check]
8. **Keep it short / one idea per hook.** Counter the model's length+overwriting bias; instruct judge not to reward length. [overengineering note, judge length-bias]

---

## EXAMPLE END-TO-END PROMPT (synthesized, illustrative — for the pipeline)

```
<source_material>
{{PASTE FULL ARTICLE / TRANSCRIPT HERE}}
</source_material>

<role>
You write opening hooks for The Institute of Applied Artificial Intelligence. Our brand is
ANTI-HYPE: plain, specific, honest, understated. Our readers are skeptical technical
decision-makers who have seen every overstated AI pitch and instantly distrust marketing
language. A hook earns trust by being concrete and true, never by being loud.
</role>

<task>
First, pull the 5 most concrete, specific, or surprising facts from the source into
<facts> tags (quote or paraphrase tightly; each must be fully supported by the source).
Then write candidate opening hooks grounded ONLY in those facts.
</task>

<voice>plain, specific, skeptical, understated, honest. Sounds like a sharp engineer
talking straight, not a marketer.</voice>

<banned words and patterns>
No hype: revolutionary, game-changing, groundbreaking, unleash, supercharge, transform,
skyrocket, 10x, unlock, harness the power of, cutting-edge, seamless, effortless, powerful.
No clickbait: "you won't believe", "this one trick", "here's the secret", "...will change
everything", "X things that...". No filler openers: "In today's fast-paced world",
"Imagine a world where", "Picture this".
</banned words and patterns>

<angles>  (each hook must use a DIFFERENT angle; label each)
1. Lead with a specific number/finding from the source
2. State the real problem the reader actually has, plainly
3. A counterintuitive-but-true observation from the source
4. Correct a common misconception the source disproves
5. A concrete concrete example/scenario from the source
</angles>

<examples>  (on-voice hooks to match in tone — NOT in topic)
<example>{{REAL ON-VOICE HOOK 1}}</example>
<example>{{REAL ON-VOICE HOOK 2}}</example>
<example>{{REAL ON-VOICE HOOK 3}}</example>
</examples>

<instructions>
Generate 8 candidate hooks (one or more per angle), each <= 20 words, one idea each.
Then score them in a table: | # | Hook | Angle | Specific? | Honest/supported? | Hype or
clickbait word? | Voice fit (1-5) |. Disqualify any with hype/clickbait words or claims
not supported by <facts>. Do not reward length.
Finally, return the 3 best NON-disqualified hooks, each using a different angle, under a
<final> tag, with a one-line rationale each.
</instructions>
```

This single prompt stacks: source grounding, role/voice, negative constraints + named
failure mode, few-shot, enforced angle diversity, brainstorm-then-score-then-select with
hard gates and self-critique, and length control.
```
