# "How to Clean Up AI-Generated Drafts Without Sounding Like ChatGPT" (Towards AI / Louis-Francois Bouchard)

- URL: https://www.louisbouchard.ai/ai-editing/
- Publication: What's AI / Towards AI (Louis-Francois Bouchard). Also exists as a video, "5 Edits That Instantly Make AI Text Sound Human".
- Published: January 15, 2026
- Date accessed: 2026-08-18
- What it is: The best practitioner account found for the STRUCTURAL lane specifically. The authors edit AI-assisted submissions at Towards AI at volume, and the whole thesis is that the skeleton, not the vocabulary, is what readers detect. EVIDENCE TIER: ASSERTED (editorial experience at volume, not measurement). The two numbers it quotes ("delve" +400% in PubMed; "meticulously researched" +3,900%) are second-hand and uncited here; treat as unverified.

## The thesis, verbatim (the single most useful line in the whole sweep)

> "The awkward part is that even when the most obvious 'AI words' are scrubbed out, the feeling often remains... The surface vocabulary has been cleaned; the underlying skeleton hasn't. Paragraphs still follow the same tidy arc, transitions march along like a five-paragraph essay, and conclusions zoom out to a vague 'bigger picture' no one asked for. The language has been de-delved, but the thought structure is still pure model."

> "So if you want AI-assisted writing not to feel like a compilation of AI slop, you can't just delete delve; you have to change the skeleton."

## The structural pattern list, verbatim

> Common structural patterns include:
> - Heavy use of bullet lists: Most of the piece is short bullets instead of developed paragraphs with examples or nuance.
> - Many similar subheadings: Every couple of paragraphs has a heading like "Understanding X," "The Importance of Y," "The Future of Z." Sections feel interchangeable.
> - Standard essay frame: General intro that announces the topic, three body sections that mirror that sentence, then a recap that restates each heading.
> - Strong signposting everywhere: Frequent lines like "Now that we've explored X...", "As mentioned earlier...", "In the next section, we will discuss...", even when the connection is obvious.
> - Same-sized paragraphs: Most paragraphs have similar length and follow the same pattern: definition, explanation, hedge, small summary. Pace barely changes.
> - Writing about the article instead of the topic: "In this section, we'll look at...", "First, we will examine... then we will explore...".
> - Generic over-simplified examples: "For example, businesses can use AI to streamline workflows and improve outcomes." This kind of example is technically correct, but so generic it adds no information.
> - Generic conclusion: A final paragraph that zooms out to a safe, high-level statement ("As AI continues to evolve...") without adding anything specific.

> "Individually, these are fine for the most part... The problem is that when all of them show up together, in the same order, no matter the topic. At that point, the piece stops feeling like someone's actual reasoning and starts feeling like a reused (not to say overused) frame."

## The diagnostic test (the reusable bit)

> "Do a structural pass before a language pass. Before you touch sentences, turn each paragraph into a one-line summary. Read those lines as if they were an outline. Does it sound like you, or like a generic blog post: definition -> list -> recap -> vague future? If it's the latter, reorder, cut, or tighten until the sequence matches how you'd explain the topic out loud. Often, removing the first paragraph, trimming the recap, and ending one step earlier is enough to remove most of the 'AI feel.'"

## The sentence-opening pass

> "Edit pass: read once just for openings. Ignore the meaning and look only at the first few words of each sentence. Wherever you see the same opener or pattern three times, cut or combine."

## Before/after fragments given

- Adjective fix: "robust system" -> "service that handles 10k requests per second without dropping data." ("Replace mood with detail.")
- Politeness fix: "I wanted to kindly follow up regarding..." -> "Just checking in on..." or "Any update on...?"
- Test: "if the first paragraph could be used on a different article with minor changes, cut or rewrite it."

## Named constructions banned in their prompt (note the two we do NOT already ban)

> - "It isn't just X, it's Y."
> - "X is more than just Y; it's Z."
> - "It wasn't X, it was Y."
> - **"This is where X comes in."**
> - "Do not ask a question and immediately answer it as a hook; state the point directly." (e.g. "So, what exactly is X?")
> - "Do not use sentence fragments as a stylistic device."
> - "Keep headings short and factual. Do not use dramatic or narrative two-part headings."
> - "Ensure smooth, natural transitions between sections WITHOUT meta lines like 'Now that we've explored X, let's move on to Y.'"
> - "Use one consistent point of view (either 'we' or 'you') and stick to it."
> - "At most one analogy in the whole piece, unless I explicitly ask for more."

## FULL ARTICLE TEXT (VERBATIM, as rendered 2026-08-18)

```
Skip to content

I am going all in on free AI engineering videos with one goal: reach 100K YouTube subscribers this year. Subscribe on YouTube

Louis-François Boucharda.k.a. What's AI
Newsletter

AI AgentsLarge Language ModelsGenerative AIAI AgentsLarge Language ModelsGenerative AI

AI AgentsJan 15, 202623 min read

# How to Clean Up AI-Generated Drafts Without Sounding Like ChatGPT

A practical editing workflow for using LLMs without losing your voice, with checks for slop, repetition, and fake polish.

Original video audio

## Listen instead

Source

5 Edits That Instantly Make AI Text Sound Human

0:00/23:22

Table of Contents

## The short version

Clean up AI-generated writing by fixing structure before wording. Own the outline; remove default intros, symmetrical sections, excess lists, signposting, and recaps; then impose direct language rules. Freeze the draft, use a separate editor model to diagnose exact issues before rewriting, and have a human check the argument, evidence, tone, and voice. Treat the first output as version zero, not a final draft.

- AI writing usually fails in predictable ways: generic words, repeated structure, over-polished claims, and weak human judgment.

- A good editing loop freezes the draft, judges it against evidence, then rewrites the weak parts once with a clear plan.

- The goal is not to make text sound less assisted. It is to make it accurate, useful, and still recognizably yours.

#### Watch the video!

If you want to use LLMs to write faster without sounding like an LLM, this article is for you. At Towards AI, we’ve spent the last two years editing thousands of AI-assisted submissions, creating hundreds of course lessons and videos, and we’ve learned exactly where models help, where they hurt, and how to keep your voice intact. In this piece, we share the concrete techniques and a bulletproof prompt template we use to get high-quality writing from LLMs while avoiding the telltale fingerprints of AI-generated prose, so you can do more than just gently ask it to “please don’t sound like ChatGPT” while crossing your fingers.

In 2023 and 2024, certain verbs and adjectives suddenly started showing up everywhere in submissions and published work: delve, realm, underscore, meticulous, commendable and the famous em-dash. Before ChatGPT, many professional editors barely saw them outside formal reports; now they’re in student essays, emails, internal memos, LinkedIn posts, and biomedical papers. One estimate finds that “delve” alone appears roughly 400% more often in recent PubMed articles than it did before late 2022. Outside academia, one widely cited analysis of online writing found that the phrase “meticulously researched” has increased in frequency by about 3,900% in the generative-AI era compared to earlier years.

So the collective hunch is justified: models haven’t just changed how we draft texts; they are visibly shifting the language around us. LLMs are trained on vast text corpora and then polished with reinforcement learning from human feedback (RLHF) to learn to generate what we want from them forcefully. A recent linguistics paper identified 21 “focal words” whose usage has spiked in scientific abstracts, and ChatGPT uses them far more often than human authors; the authors’ best explanation is that RLHF quietly nudges the model toward words that tired raters treat as a proxy for “good writing.” Journalists and linguists have gone further, arguing that because RLHF work is heavily outsourced to English-proficient annotators in countries like Nigeria, some of these words may reflect formal Nigerian English habits being rewarded repeatedly, then amplified at internet scale.

Once that style is baked in, millions of people start copying and lightly editing it. Over time, the polished, politely academic model voice bleeds into both AI-assisted and purely human text. Even if you never open ChatGPT, you end up living in an information environment where “delve into”, “underscore”, “ever-evolving landscape”, and “seamless, robust solutions” feel strangely common.

This is what we can call AI slop: not just a few suspicious words, but a bundle of habits that make prose feel synthetic. The awkward part is that even when the most obvious “AI words” are scrubbed out, the feeling often remains. And that feeling is hard to describe in clear terms. Yet, most readers can tell when a piece has been written by, or heavily laundered through, an LLM. The surface vocabulary has been cleaned; the underlying skeleton hasn’t. Paragraphs still follow the same tidy arc, transitions march along like a five-paragraph essay, and conclusions zoom out to a vague “bigger picture” no one asked for. The language has been de-delved, but the thought structure is still pure model.

So if you want AI-assisted writing not to feel like a compilation of AI slop, you can’t just delete delve; you have to change the skeleton. The next section looks at that skeleton first: how LLMs tend to organise ideas by default, and what you can adjust in your outlines, paragraphs, and transitions so a piece stops reading like an AI template before you even touch individual words.

### Improving the Structure

When people say “this sounds like ChatGPT,” they’re often reacting to structure, not just word choice. The sentences look fine on their own, but the way they’re arranged feels generic and over-familiar. There’s something off.

Common structural patterns include:

- Heavy use of bullet lists: Most of the piece is short bullets instead of developed paragraphs with examples or nuance.

- Many similar subheadings: Every couple of paragraphs has a heading like “Understanding X,” “The Importance of Y,” “The Future of Z.” Sections feel interchangeable.

- Standard essay frame: General intro that announces the topic, three body sections that mirror that sentence, then a recap that restates each heading.

- Strong signposting everywhere: Frequent lines like “Now that we’ve explored X…”, “As mentioned earlier…”, “In the next section, we will discuss…”, even when the connection is obvious.

- Same-sized paragraphs: Most paragraphs have similar length and follow the same pattern: definition, explanation, hedge, small summary. Pace barely changes.

- Writing about the article instead of the topic: “In this section, we’ll look at…”, “First, we will examine… then we will explore…”.

- Generic over-simplified examples: “For example, businesses can use AI to streamline workflows and improve outcomes.” This kind of example is technically correct, but so generic it adds no information. It could appear in almost any AI article, which is exactly why readers recognize it as machine-generated.

- Generic conclusion: A final paragraph that zooms out to a safe, high-level statement (“As AI continues to evolve…”) without adding anything specific.

Individually, these are fine for the most part. They’re useful for school essays, documentation, and how-to blogs. The problem is that when all of them show up together, in the same order, no matter the topic. At that point, the piece stops feeling like someone’s actual reasoning and starts feeling like a reused (not to say overused) frame.

LLMs fall into this because their training data is full of that pattern: textbooks, tutorials, corporate explainers, student essays. When you ask, “Write an article about X,” the model isn’t optimizing for an interesting shape; it’s reaching for “safe article structure” and slotting your topic into it.

If you want to keep the speed of AI without that template feel, you have to change this level: outline, paragraph shape, and transitions.

A helpful rule: you own the structure; the model fills it. A few practical ways to change that:

1. Decide the outline yourself

Before you prompt, sketch a quick outline yourself: where to start, which sections matter most, and where to end. Let some sections be short and others longer; they don’t need to be symmetrical.

Then ask the model for something like:

“Turn this outline into prose. Don’t add an intro or conclusion beyond what’s here. Don’t create extra subheadings.”

You’re telling it to stay inside your frame instead of inventing its own.

2. Favour paragraphs over lists

LLMs overuse bullet points and headings because that’s how a lot of online content is structured. If you want something that reads more like an article and less like a slide deck, you have to say so.

You can add a simple constraint:

“Write primarily in complete sentences and well-structured paragraphs. Avoid lists or bullet points unless the content clearly needs them (for example, specific steps or distinct items). Use subheadings sparingly, only for clearly different sections, not for every new idea.”

This pushes the model towards continuous narrative: fuller paragraphs, smoother transitions, and fewer list-shaped fragments. You can always turn part of it back into a list later if you genuinely need one.

3. Limit analogies so they don’t carry the structure

Models also like to lean on analogies as an easy way to sound engaging. Too many, or weak ones, make the piece feel padded and blurry.

You can keep them under control with a short rule:

“Use analogies very rarely, and only when they give real, non-obvious clarification for this audience. At most one analogy in the whole piece, unless I explicitly ask for more.”

That keeps the structure anchored in the actual argument, not in a string of metaphors the model has seen in other articles.

4. Reduce meta and signposting

In the prompt, cap the “in this section we will…” style:

“Avoid phrases like ‘In this section, we will…’, ‘Now that we’ve explored…’, ‘As mentioned earlier…’. Don’t describe the article; just explain the topic.” Avoid fillers that do not add value.

When you review the draft, do a fast pass just for meta and delete cutthroat-clearing openings, recap sentences that repeat headings, and any final paragraph that only rephrases what the reader already knows.

5. Break the symmetry

Tell the model:

“Vary paragraph length. Some sections can be short; others can go deeper. Don’t end every section with a mini-summary.”

If the draft still has three equal sections with similar headings, fix that manually: merge overlapping parts, demote weaker headings into plain paragraphs, or cut a section entirely. As soon as the outline stops looking like a neat three-part essay, the piece reads less like a default AI output.

6. Use AI for building blocks, not finished sections

Instead of “write Section 2,” use the model to generate components:

- “Give me three different ways to structure this section.”

- “List specific examples that would make this argument concrete,” or even better, “I want to make an analogy with the climbing world as I think it would help the reader connect the dots, help me come up with one that fits here.”

- “Suggest two transitions between these paragraphs that don’t recap what we just read.”

You then choose, reorder, and connect. The model gives you material; you decide how it flows.

7. Do a structural pass before a language pass

Before you touch sentences, turn each paragraph into a one-line summary. Read those lines as if they were an outline. Does it sound like you, or like a generic blog post: definition → list → recap → vague future?

If it’s the latter, reorder, cut, or tighten until the sequence matches how you’d explain the topic out loud. Often, removing the first paragraph, trimming the recap, and ending one step earlier is enough to remove most of the “AI feel.”

Once the structure is yours, the draft already feels less like a model, even if it was AI-generated. After that, you can focus on language: blocking your own list of “AI words,” tightening phrasing, and using an anti-slop prompt so the model stops reaching for the same vocabulary in the first place.

### Language rules you can add to your prompt

Once the structure works, most remaining “AI feel” comes from sentence-level habits: repetition, generic openings and endings, vague adjectives, over-polite tone, and a recurring set of “AI words.” You can turn these into explicit rules in your prompt, so the first draft already avoids most of them.

- Repetition

A common sign of AI is harmless-looking repetition that makes the text feel mechanical: several sentences or paragraphs starting the same way, or using the same rhythm again and again.

Prompt rule:

“Vary sentence openings. Avoid repeating the same transition phrases (‘In addition’, ‘Furthermore’, ‘Moreover’) more than once. Don’t restate the same idea in different words.”

Edit pass: read once just for openings. Ignore the meaning and look only at the first few words of each sentence. Wherever you see the same opener or pattern three times, cut or combine. Often, two model sentences can become one clearer sentence without losing content.

- Openings and endings

Generic intros and conclusions are another clear tell. They announce what the piece will do, then repeat it at the end.

Prompt rule:

“Don’t start with generic scene-setting like ‘In today’s fast-paced world’ or ‘As we navigate the complexities’. Start with a concrete example, a specific claim, or a clear problem. Don’t end with ‘In conclusion’ or a recap of the sections. End where the argument or explanation naturally ends.”

Edit pass: if the first paragraph could be used on a different article with minor changes, cut or rewrite it. If the last paragraph only repeats what the reader already knows, delete it or replace it with one specific closing sentence.

- Adjectives

Models often rely on positive but vague adjectives: robust, seamless, groundbreaking, transformative, pivotal, intriguing, innovative, comprehensive. They sound confident, but don’t add information.

Prompt rule:

“Avoid vague or dramatic adjectives like ‘robust’, ‘seamless’, ‘pivotal’, ‘groundbreaking’, ‘transformative’, ‘intriguing’, ‘innovative’, ‘comprehensive’. Only use an adjective if it adds concrete information (for example about scale, performance, or constraints). Otherwise, remove it.”

Edit pass: take one paragraph and strip out all adjectives. Then, only put back the ones that change meaning in a useful way. Replace mood with detail: “robust system” can become “service that handles 10k requests per second without dropping data.”

- Politeness

Because models are trained to be safe and inoffensive, they default to very polite, formal phrasing: “I hope this email finds you well…”, “I would like to take a moment to…”, “I humbly request…”.

Prompt rule:

“Write in a direct, neutral professional tone. Avoid stock email phrases like ‘I hope this email finds you well’ or ‘I would like to take a moment to express my sincere gratitude’. Get to the point in the first sentence. Avoid softeners like ‘just’, ‘I was wondering if’, ‘hopefully’ unless they’re essential for relationship reasons.”

Edit pass: ask “Would I say this out loud?” If not, tighten it until you can. “I wanted to kindly follow up regarding…” usually becomes “Just checking in on…” or “Any update on…?”.

- Word blacklist

Some words and phrases now read as standard AI output: delve, realm, tapestry, ever-evolving landscape, imagine, embark on a journey, navigate (as a metaphor), leverage, harness, endeavour, vibrant, crucial, compelling, “not just X, but Y”.

There is no universal list; different fields have different tics. Keep a small list of words you don’t want to see unless you’ve chosen them deliberately.

Prompt rule:

“Don’t use words like: delve, embark, imagine, realm, tapestry, vibrant, endeavour, leverage, harness, navigate (as a metaphor), seamlessly, pivotal, groundbreaking, transformative, compelling, ever-evolving, paradigm, ‘unlock the potential’. If you would normally reach for one of these, pick a simpler verb or a concrete description instead.”

Update this list over time as new patterns start to bother you.

- Fidelity and certainty

When the model is working from notes, a transcript, or a source article, it needs clear limits.

Prompt rule:

“When context or source text is provided, stay faithful to it. Don’t add or imply more confidence or certainty than the original. If a fact isn’t in the source, either leave it out or mark it as uncertain. Use ‘lesson’ for course lessons and ‘article’ for standalone pieces, depending on context.”

- Tone and point of view

You want consistency without performance.

Prompt rule:

“Make the piece readable and interesting through concrete detail and clear reasoning, not theatrics or added flair. Maintain a single, consistent tone and point of view throughout (choose ‘we’ or ‘you’ and stick to it). Don’t mix ‘I’, ‘we’, and ‘you’ in the same piece. For instructional content, use ‘we’ by default.”

- Directness, clarity, conciseness

Rhetorical hooks and repeated definitions are a common way slop creeps back in.

Prompt rule:

“Be direct. Avoid filler and conversational fluff. Don’t ask a question and immediately answer it as a device (for example: ‘So, what exactly is X?’). State the point or definition directly.

Each sentence should add new information or nuance. Avoid repeating the same point in different words. Don’t redefine the same acronym or concept multiple times in the same document or series. If removing a sentence doesn’t change what the reader understands, leave it out.”

### A reusable anti-slop prompt

Here’s the revised version with minimal changes, just the new rules slotted in.

You are helping me draft high-quality, non-sloppy writing with a human voice.

[1] Task & context

- Write a [format: article / section / email / script / etc.] about: [topic].

- Context: [where this will be used, and why it’s being written].

- Use the following source material as the factual base. Do not contradict it:

[paste notes, outline, quotes, links].

[2] Audience & goal

- Audience: [who they are: role, familiarity with topic, constraints].

- Assume they already know: [what not to over-explain].

- After reading, they should be able to: [1–3 concrete outcomes].

[3] Structure

- Follow this structure:

1. [Section 1 name + 1–2 lines on what it covers]

2. [Section 2…]

3. [Section 3…]

- Do NOT add extra sections beyond this outline.

- Use full paragraphs; each paragraph focuses on one clear idea.

- Use bullet lists only for truly distinct items (steps, pros/cons, etc.).

- Use subheadings sparingly; do not create a heading for every paragraph.

- Keep headings short and factual. Do not use dramatic or narrative two-part headings.

- Ensure smooth, natural transitions between sections WITHOUT meta lines like

“Now that we’ve explored X, let’s move on to Y.”

[4] Style & tone

- Clear, neutral prose: professional but slightly playful and witty where it helps understanding.

- Make the piece readable and engaging through concrete insight and clear reasoning,

not theatrics or added flair.

- Avoid drama, hype, buzzwords, and marketing-like language.

- Avoid purple prose (no ornate, exaggerated, or breathless language).

- Use one consistent point of view (either “we” or “you”) and stick to it.

- Be direct. Avoid filler and conversational fluff.

- Do not ask a question and immediately answer it as a hook; state the point directly.

- Use full sentences; do not use sentence fragments as a stylistic device.

- Do not use the em dash character (—). Use commas or full stops instead.

[Optional voice-matching]

- Match the rhythm, sentence length, and tone of this sample:

[paste 1–2 paragraphs of my own writing].

[5] Language & vocabulary constraints (anti-slop)

- Avoid generic essay and blog phrases like:

“In today’s fast-paced world…”, “As we navigate the complexities…”, “In conclusion…”.

- Do NOT use sentence structures such as:

- “It isn’t just X, it’s Y.”

- “X is more than just Y; it’s Z.”

- “It wasn’t X, it was Y.”

- “This is where X comes in.”

- Do NOT use these words/phrases unless I explicitly include them in my input:

amazing, fascinating, mind-blowing, must-read,

fast-moving world, cut through the hype/noise,

groundbreaking, paradigm-shifting, transformative, pivotal, paramount, outstanding,

a significant leap,

delve, dive into, embark/embarking, endeavour, realm, tapestry, vibrant,

leverage, harness, seamlessly integrates, start from the ground up,

tackle a novel problem,

crucial, critical, invaluable, significant/significantly, surprisingly, simply, neatly,

“the best part is”, “real magic happens”, “recipe for disaster”, “thrive”,

“unlock the real power”.

- Prefer plain, concrete verbs and specific technical terms over vague or dramatic wording.

- Only use adjectives when they add concrete information (scale, constraints, performance).

- Use analogies very rarely, and only when they provide non-obvious clarification.

Do not use introductory analogy phrases like “Imagine…” or “Think of it like this…”.

[6] Accuracy & terminology

- Stay faithful to the provided context and sources.

- Do NOT overstate certainty; if a fact is uncertain, either omit it or mark it as uncertain.

- For acronyms, write the full phrase on first use, then use the acronym.

“AI” and “LLM/LLMs” can be used without expansion unless the audience is completely new.

- Use “lesson” for course lessons and “article” for standalone pieces, as appropriate.

[7] Process

- First, silently check your own output against the rules above.

- Remove repeated sentence openings, banned words, and filler sentences that don’t add new information.

- Do not include internal commentary, notes to yourself, or placeholders in the final output.

The answer should read as a complete, polished product.

- Then present the final draft without explaining what you changed.

This block can sit inside your larger universal template (with task, audience, structure, and accuracy). For emails, you might keep the politeness rules and trim the rest. For long-form articles, you might keep everything and extend the blacklist with domain-specific clichés.

The main point is that you no longer have to reinvent “please don’t sound like ChatGPT” every time. You decide once how you want language to behave; the model reads that as part of its job description.

### What an AI revision loop looks like in practice

Even with a good structure and a careful prompt, most models will not follow every rule on the first try. They will still sneak in a “fast-paced world,” reuse the same transition three times, or drift back into an essay-style conclusion. That’s normal. The goal is not to get a perfect one-shot draft; it’s to set up a loop where the model does most of the cleanup before you spend serious editing time.

A useful way to think about this is: the first response is version 0, not a draft you’re stuck with. You start by prompting for content and structure using your full template: task, audience, outline, and your anti-slop language rules. Version 0 should have the right ideas in roughly the correct order. If the structure is wrong, you fix that first; there is no point polishing language on sections you are going to cut or move.

Once the structure works, you let an LLM act as a judge. In practice, that often means opening a second chat or using a different model. The first chat is your “writer” model, the one that produced the draft. The second chat/model is your “editor” model, whose only job is to find and label slop. You paste the draft and the rules into it and ask it to review, not rewrite. For example:

“You are reviewing a draft for AI slop and style issues, not rewriting it.

Here are the rules we are using (structure and language):

[paste your outline constraints + anti-slop block]

Here is the draft:

[paste draft]

1. Point out where this draft breaks the rules above:

– repetitive openings or transitions

– generic intros or conclusions

– vague or dramatic adjectives

– stock email phrases or excessive politeness

– AI-ish words from the blacklist

2. For each issue, suggest how to fix it in one short sentence.

Do not rewrite the whole piece yet.”

Treat that response as a diagnosis. It will usually highlight generic openings, repeated patterns, leftover banned words, and sections that read like a recap. You now have a concrete list of problems without having to do a full read-through yourself.

Next, you go back to the writer tab and ask for a second pass, using the judge’s notes as input. You don’t want a fresh article; you want a revision that keeps the structure and ideas but fixes the issues. A prompt for that might look like:

“Here is your original draft, plus a review that points out where it broke the style/anti-slop rules we agreed on.

[paste review]

Rewrite the draft, fixing only these issues:

– remove generic intros and essay-style conclusions

– vary repetitive sentence openings

– remove or replace vague adjectives and AI-ish words

– remove meta lines (“in this section we will…”) and heavy signposting

Keep the structure, sections, and main arguments the same.”

If a section is particularly bad, you can isolate it and do this one chunk at a time. That keeps the model from “helpfully” reintroducing patterns you just removed in other parts of the piece.

Once the “writer” and “judge” models have done their passes, you can add a few simple steps on top.

Use an external checker as a second opinion

One option is to run the revised draft through Slop Score, which gives you a sense of how “GPT-ish” the phrasing patterns look. Another is the Creative Writing Longform benchmark, which focuses on longer, more human-style text. These tools won’t decide for you, but they are useful signals. If scores spike or certain phrases are singled out as highly model-like, you can feed that back into your process: add those patterns to your blacklist, or ask the judge model in your second tab to look for them explicitly next time.

Keep your human edit focused

Once the models and tools have done their work, you do a short, focused human edit. Here, you read for structure, asking whether the paragraph order actually matches how you would explain the topic out loud. You read for accuracy, checking that numbers, names, and claims are grounded in sources or knowledge you recognise. You read for texture, noticing whether the piece sounds like you or your team, or like a generic explainer with no clear author. Any new pet words or patterns you notice at this stage can go straight onto your blacklist so they don’t reappear in future drafts. And crucially, you add examples or insights YOU think of as you read, adding your personality and touch to the piece.

Think in versions, not a single draft

In real workflows, this usually means two or three quick loops rather than one big, perfect draft. Version 0 is where you use your main prompt to get the content and broad structure in place. Version 1 is the same draft after the model has critiqued and revised itself against your rules, possibly with help from Slop Score or the longform benchmark. Version 2 is your edited version, where you adjust judgment, nuance, and voice. The prompt template, blacklist, judge tab, and external tools all exist to make each of these loops cheaper, so that “AI draft” comes to mean “something I can lightly edit” instead of “something I have to rewrite from scratch.”

### Why the human pass still matters

None of this removes the need for a human pass. Models can draft, reorganise, and revise against your rules, but they still can’t decide which points matter for your readers, how confident you should be about a claim, or whether the piece sounds like it belongs in your voice. Checking structure, facts, and tone is still your job.

The way to make that job manageable is to standardise the workflow. You reuse the same base prompt instead of writing new instructions each time. You keep a small blacklist and update it as new “AI words” appear. You use a fixed judge prompt in a second chat so the model can flag its own habits before you edit. Your final pass then follows a simple checklist: the structure makes sense, claims are grounded in something you recognise, and the language matches how you or your team usually write.

If you do that consistently, AI doesn’t remove editing, but it does change the kind of editing you do. Most of the mechanical slop is handled by the model and your prompts. Your time goes into decisions only you can make: what you want to say, how far you’re willing to go with a claim, and whether this is a piece you’re happy to put your name on.

If you enjoyed this article, check out our new course on mastering AI for work with a lot more tips and tricks on best leveraging LLMs and AI tools in your work! Link here.

## FAQ
How do you clean up AI-generated writing?
Freeze the draft, identify the slop, check the claims, remove repeated ideas, and rewrite the parts that do not sound like you.
What makes AI writing sound like ChatGPT?
The common signals are generic transitions, polished but empty phrasing, repeated sentence shapes, hype words, and claims with no evidence.
What should you avoid when editing with AI?
Avoid asking for vague polish. Give the model a clear review rubric, then keep the final judgment with the human writer.
Why use a second chat or model as an editor?
A separate context makes it easier to judge the frozen draft against a rubric instead of continuing the same generation pattern that produced it.
Why does the final human pass still matter?
A model can flag patterns and suggest revisions, but the writer must decide whether the ideas, evidence, rhythm, and voice are genuinely theirs.
Why should structure be fixed before sentence-level polish?
There is no value in polishing paragraphs you will later cut or move. Fix the argument, section order, and repeated ideas first.
How should an editor model review an AI-assisted draft?
Ask it to identify exact rule breaks, quote the evidence, and explain each issue before rewriting. That keeps the review specific and preserves the original ideas.

## Analytics preferences

Choose whether Google Analytics can use cookies. The site always keeps anonymous, cookieless page counts. Privacy details
```
