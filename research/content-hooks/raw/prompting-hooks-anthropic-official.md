# Anthropic / Claude Official Prompt Engineering Best Practices

Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
Accessed: 2026-06-19

These are the official prompt-engineering techniques from Anthropic. Captured verbatim / closely paraphrased with example snippets intact. Highly relevant to generating better, more reliable hooks and producing diverse on-voice candidate options.

---

## 1. Be clear and direct
Claude responds well to clear, explicit instructions. Being specific about your desired output enhances results. If you want "above and beyond" behavior, explicitly request it rather than relying on the model to infer it.

"Think of Claude as a brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result."

**Golden rule:** "Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too."

- Be specific about the desired output format and constraints.
- Provide instructions as sequential steps (numbered lists / bullets) when order or completeness matters.

Example:
- Less effective: `Create an analytics dashboard`
- More effective: `Create an analytics dashboard. Include as many relevant features and interactions as possible. Go beyond the basics to create a fully-featured implementation.`

WHY IT MATTERS FOR HOOKS: vague prompts → model defaults to the safest, most generic opener. Explicit constraints (length, voice, what to avoid, how many) move it off-distribution.

## 2. Add context / motivation behind instructions
Explaining WHY a behavior is important helps Claude generalize and deliver more targeted responses.

Example:
- Less effective: `NEVER use ellipses`
- More effective: `Your response will be read aloud by a text-to-speech engine, so never use ellipses since the text-to-speech engine will not know how to pronounce them.`

"Claude is smart enough to generalize from the explanation."

HOOKS APPLICATION: Don't just say "no hype words" — say WHY: "Our audience is skeptical technical decision-makers who distrust marketing language; hype words make them bounce. So avoid them."

## 3. Use examples effectively (few-shot / multishot)
"Examples are one of the most reliable ways to steer Claude's output format, tone, and structure. A few well-crafted examples (known as few-shot or multishot prompting) can dramatically improve accuracy and consistency."

Make examples:
- **Relevant:** Mirror your actual use case closely.
- **Diverse:** Cover edge cases and vary enough that Claude doesn't pick up unintended patterns.
- **Structured:** Wrap examples in `<example>` tags (multiple in `<examples>`) so Claude can distinguish them from instructions.

"Include 3–5 examples for best results. You can also ask Claude to evaluate your examples for relevance and diversity, or to generate additional ones based on your initial set."

HOOKS APPLICATION: Feed Claude 3-5 real examples of hooks that match your brand voice (good ones) AND label them. Diverse examples prevent the model from latching onto one template. You can also paste anti-examples (bad/clickbait) labeled as what to avoid.

## 4. Structure prompts with XML tags
XML tags help Claude parse complex prompts unambiguously when mixing instructions, context, examples, and inputs. Wrap each content type in its own tag (`<instructions>`, `<context>`, `<input>`, `<source_material>`, etc.). Use consistent descriptive names; nest when there's a hierarchy.

## 5. Give Claude a role (system prompt)
"Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference."

Example:
```
system="You are a helpful coding assistant specializing in Python."
```

## 6. Long context prompting (when feeding source material)
- **Put longform data at the top:** Place long documents/inputs near the top of the prompt, ABOVE your query, instructions, and examples. Can significantly improve performance. "Queries at the end can improve response quality by up to 30% in tests, especially with complex, multi-document inputs."
- **Structure documents with XML tags:** wrap each doc in `<document>` with `<document_content>` and `<source>`.
- **Ground responses in quotes:** "For long document tasks, ask Claude to quote relevant parts of the documents first before carrying out its task. This helps Claude cut through the noise."

Example quote-extraction pattern:
```
Find quotes from [source] that are relevant to [task]. Place these in <quotes> tags.
Then, based on these quotes, [do the task].
```

HOOKS APPLICATION (huge for anti-slop): paste the actual article/transcript/source at the top, ask Claude to first pull the most concrete, specific, surprising facts/quotes into <quotes>, THEN write hooks that draw only on those specifics. This forces specificity and prevents generic openers.

## 7. Control the format of responses
1. **Tell Claude what to do, not what not to do.** Instead of "Do not use markdown" → "Your response should be composed of smoothly flowing prose paragraphs."
2. **Use XML format indicators.** "Write the prose sections in <smoothly_flowing_prose_paragraphs> tags."
3. **Match your prompt style to the desired output.** Prompt formatting influences response style.
4. **Use detailed prompts for specific formatting preferences.**

## 8. Self-check / self-verification
"Ask Claude to self-check. Append something like 'Before you finish, verify your answer against [test criteria].' This catches errors reliably."

HOOKS APPLICATION: append a rubric/criteria and have Claude verify each hook against it before finalizing (e.g., "Before finishing, check each hook: is it specific? honest? free of hype words? distinct from the others? Drop or rewrite any that fail.")

## 9. Thinking / brainstorm before answering
- "Prefer general instructions over prescriptive steps. A prompt like 'think thoroughly' often produces better reasoning than a hand-written step-by-step plan."
- "Multishot examples work with thinking. Use <thinking> tags inside your few-shot examples to show Claude the reasoning pattern."
- Manual CoT fallback: ask Claude to think step by step, separating reasoning (<thinking>) from final output (<answer>).
- NOTE: "When extended thinking is disabled, Claude Opus 4.5 is particularly sensitive to the word 'think' and its variants. Consider using alternatives like 'consider,' 'evaluate,' or 'reason through'."

## 10. Chain complex prompts — the self-correction pattern (KEY for hook quality)
"The most common chaining pattern is **self-correction:** generate a draft → have Claude review it against criteria → have Claude refine based on the review. Each step is a separate API call so you can log, evaluate, or branch at any point."

HOOKS APPLICATION: Step 1 brainstorm many hooks; Step 2 score/critique each against rubric; Step 3 rewrite/keep the top 3-5.

## 11. Research with self-critique (transferable structure)
```
Search for this information in a structured way. As you gather data, develop several
competing hypotheses. Track your confidence levels... Regularly self-critique your
approach and plan...
```
The pattern of "generate several competing options, track confidence, self-critique" transfers directly to generating and ranking hook candidates.

## 12. The "AI slop" frontend aesthetics prompt (DIRECTLY transferable anti-slop language)
Anthropic's own guidance acknowledges models "tend to converge toward generic, 'on distribution' outputs" producing "AI slop." Their fix language (adapted from frontend to copy) is a model for anti-slop hook prompts:

```
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this
creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive
frontends that surprise and delight.
...
Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
Interpret creatively and make unexpected choices that feel genuinely designed for the
context. ... You still tend to converge on common choices ... across generations. Avoid
this: it is critical that you think outside the box!
</frontend_aesthetics>
```

KEY INSIGHT FOR HOOKS: The single most important anti-slop move per Anthropic is to NAME the failure mode explicitly ("you converge toward generic on-distribution outputs"), tell the model that's bad, list the specific clichés to avoid, and demand context-specific distinctiveness. This is the copywriting equivalent: list the banned hype words/clichéd opener patterns and tell the model it tends to default to them and must not.

## 13. Overengineering / minimalism note
Claude tends to overengineer / over-deliver. For hooks this maps to over-writing (too clever, too long, stuffed with adjectives). Pair with explicit constraints: short, plain, one idea per hook.
