# Copyhackers — ChatGPT for Headlines / Crossheads

Sources:
- https://copyhackers.com/ai-prompt/use-chatgpt-to-write-headlines/
- https://copyhackers.com/ai-prompt/optimize-headlines-and-crossheads/
Accessed: 2026-06-19

Copyhackers is a respected conversion-copywriting authority. Their AI-prompt advice is practitioner-grade.

---

## A. Writing headlines from pain points (use-chatgpt-to-write-headlines)

### Core strategy
Focus on PAIN POINTS as the foundation. "Pain points are great fodder for punchy headlines that resonate with your competitors' dissatisfied customers."

### Main prompt formula (VERBATIM)
> "You are a conversion copywriter for a new [product]. One of the unique value propositions of this new [product] is that it does not have the following pain point: [insert pain point]. Craft 50 product headlines that make this unique value proposition clear."

Additional instructions to append:
> "The headlines must talk to the reader directly using 'You.' Use emotion and empathy, and simple, direct language."

Optional voice-of-customer enhancement (feeding real source material / specific vocabulary):
> "Include the words 'newby' 'intuitive' 'overwhelming' and similar words."

### Generating multiple options
- **Batch size:** Generate ~50 headlines per prompt for optimal variety (big pool → cherry-pick).
- **Iterate when stuck:** Give feedback explaining WHY outputs miss, request reformulation.
- **Start fresh threads:** When outputs degrade, begin a new conversation on the same prompt to access different variations (avoids the model anchoring on its own earlier output).

### Refining output (iteration / steering examples, VERBATIM)
> "These sound too fluffy. Try sarcasm, humor, and more concrete language. Dig into the pain point more by making the frustration palpable."

> "You're using too many questions. Try again without using yes/no questions in the headline."

### Key takeaway (VERBATIM)
> "Don't overprompt ChatGPT until you get a perfect headline. You're better off taking bits and pieces of what it generates and turning it into a finished headline."

INSIGHT FOR PIPELINE: The model is a candidate generator, not a final author. Generate a large pool, then a human (or a selection step) assembles/picks. This matches the Nick/Isaac "pick from 3-5" workflow — but Copyhackers suggests generating MORE than 5 internally and shortlisting down.

---

## B. Optimizing headlines / crossheads (optimize-headlines-and-crossheads)

### How many variations
> "Asking for too many crosshead variations produced poorer results. Reviewer Chris Silvestri recommends that you keep your request to three to five variations."

NOTE: tension with the "50 headlines" advice above — for FROM-SCRATCH brainstorming, large batches give variety; for REFINING/optimizing existing lines, 3-5 per item keeps quality high. For a curated 3-5 candidate pipeline, generate a larger internal pool then shortlist, OR ask for 3-5 per distinct angle.

### Three-step prompt structure
**Step 1 - System setup / role:** Establish GPT-4's role as a conversion copywriter with expertise in psychology, behavioral economics, and UX design. Ends: "Your first task is to analyze the webpage URL or copy I'll share with you."

**Step 2 - Analysis trigger:** "Here is the URL/copy for you to analyze: [URL or paste your copy here]"

**Step 3 - Generation request (VERBATIM):**
> "Your second task is to give me [desired number] new version(s) for each of the crossheads you analyzed in your first task above. Organize this list in a table and show your thinking in a column labeled 'Rationale.'"

### Handling overlooked content
> "You overlooked these crossheads: [type/paste missed crossheads]. Please give me [desired number] new version(s)..."

### Quality control / rubric (KEY)
The method requires the model to ANALYZE existing copy BEFORE generating, evaluating against FIVE criteria:
1. Clarity
2. Engagement
3. Call-to-action effectiveness
4. Persuasiveness
5. Emotional appeal

INSIGHT: "Analyze-before-generate" + a "Rationale" column = built-in chain-of-thought + self-justification. The Rationale column forces the model to articulate WHY each option works, which (a) improves quality and (b) gives the human picker reasoning to evaluate. Directly usable: ask for hook candidates in a table with a Rationale/angle column.
