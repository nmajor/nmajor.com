# "Is the Em Dash an AI Tell? We Measured Dash Density Across Human vs AI Texts" (SlopDetector, Jul 31 2026)

- URL: https://slopdetector.org/blog/em-dash-ai-tell-data
- Date accessed: 2026-08-18
- What it is: The counter-evidence file. A 702,939-word human-prose measurement showing the single most-cited "AI tell" convicts Twain and Melville, plus a per-model em-dash table. Captured because it is the clearest available argument that any single stylistic ban (including some of ours) is a weak, gameable signal, and that substance is the only durable check. CAVEAT: vendor blog for their own detector; the cited third-party sources (Freeburg arXiv 2026, McGill OSS, OpenAlex ecology-abstract analysis, Project Gutenberg corpus) are listed at the end and are the checkable part.

## FULL TEXT, VERBATIM (as rendered 2026-08-18)

> ← Back to Blog
> Data10 min readJul 31, 2026
> # Is the Em Dash an AI Tell? We Measured Dash Density Across Human vs AI Texts
> We counted em dashes across 700,000+ words of human prose and cross-checked GPT-4.1. Yes, there's a real gap — it's just a lot smaller and noisier than "AI uses em dashes and humans don't."
> ## TLToo Long; Didn't Read
> - →Published human prose is not em-dash-free. Across 700,000+ words of literary prose, humans used dash constructions at roughly 3.7 to 10 per 1,000 words, pooling to about 6.5 per 1,000.
> - →A controlled study puts GPT-4.1 at 10.62 em dashes per 1,000 words — about 3.3x a matched human baseline of 3.23 per 1,000 (Freeburg, 2026).
> - →The gap is in the density, not the presence. One or two em dashes prove nothing. A steady drumbeat of them, in short modern prose, is the actual signal.
> - →The em dash alone is a weak tell — good editors, 19th-century novelists, and plenty of newsletter writers blow past the threshold.
> - →The right question isn't "is it AI?" It's "is it slop?" Punctuation is one weak input; substance, cliché density, and sentence-length variance matter far more.
> Somewhere in 2025, the em dash got arrested. Post a paragraph with a couple of them and someone will squint and ask if a chatbot wrote it. Teachers flag it. Editors quietly delete it. There is even a nickname: the "ChatGPT hyphen."
> So is the em dash an AI tell, or a myth people repeat because it sounds smart? We didn't want another opinion piece. We build an AI slop detector that already measures punctuation density as a structure signal, so we did the obvious thing: we counted. This article reports the actual dash density we measured across 700,000+ words of human writing, cross-checks it against a controlled study of language models, and gives you a number to use — instead of a vibe.
> Short version: yes, there's a real gap. It's just a lot smaller and a lot noisier than "AI uses em dashes and humans don't."
> ## 1Why does ChatGPT use em dashes in the first place?
> Before measuring anything, it helps to know why the pattern exists. The "why does ChatGPT use em dashes" question has a boring, well-documented answer, and it isn't "the AI loves elegant prose."
> Two things stack up. First, training data. According to McGill University's Office for Science and Society, more than 60% of GPT-3's training corpus came from web crawls — essays, articles, long-form blog posts. That's exactly the register where the em dash lives. Everyday texts and chat messages barely use it; published essays lean on it constantly. The model learned the distribution of the writing it was fed, and that writing was dash-heavy.
> Second, the em dash is genuinely useful to a next-token predictor. It's a flexible connector. It can open an aside, tack on an afterthought, or swap in for a comma, colon, or parenthesis without breaking a sentence. A system optimizing for fluent, hedge-friendly continuations reaches for a tool that fits almost anywhere. So it reaches for that tool a lot.
> There's a third factor: reinforcement. OpenAI has publicly acknowledged tuning ChatGPT's em dash habit specifically. In November 2025, Sam Altman announced that if you tell ChatGPT not to use em dashes in your custom instructions, "it finally does what it's supposed to do" — a tidy admission that, until then, the model kept producing them even when asked to stop. When a company ships a fix so the model will quit doing something, that something was a pattern.
> That's the origin of the "ai em dash pattern." Now let's see how big it actually is.
> ## 2How we measured it
> We wanted a number, not a hunch. Here's exactly what we did, so you can reproduce or challenge it.
> Human corpus
> We pulled full public-domain texts from Project Gutenberg and measured dash density on the prose only, after stripping the license boilerplate. We deliberately mixed dash-heavy and dash-sparse authors so the human baseline reflects a real range, not a cherry-picked low number:
> - • Moby-Dick (Melville, 1851)
> - • Adventures of Huckleberry Finn (Twain, 1884)
> - • Walden (Thoreau, 1854)
> - • A Tale of Two Cities (Dickens, 1859)
> - • Pride and Prejudice (Austen, 1813)
> That's 702,939 words of published human writing.
> The counting rule. Typography is a trap here, so we counted two ways. The strict count is the em dash character itself (—, Unicode U+2014). But older typesetting frequently rendered the same parenthetical break as a double hyphen (--) or an en dash, and a reader perceives all of them as "a dash." So we also counted dash constructions — em dash, en-dash-as-dash, or double hyphen — normalized per 1,000 words. This is the same family of signal our detector's structure module looks at when it flags em dash density.
> Why this matters: it exposes a quiet bias in the whole debate. When people say "humans don't use em dashes," they're often looking at the character. Austen's Gutenberg edition scores 0.00 on the em dash character — and 3.47 per 1,000 once you count the double hyphens that are em dashes in disguise. The mark was always there. The Unicode codepoint is the new part.
> AI baseline. For the machine side we lean on the most rigorous public measurement we could verify rather than pretending we ran our own model farm. That study is described below, and it uses the same per-1,000-words unit, so the numbers are directly comparable.
> ## 3The numbers
> Here is what 700,000 words of human prose actually looks like, measured.
> Text (human, published)
> Em dash (—) per 1,000 words
> Any dash construction per 1,000
> Huckleberry Finn (Twain, 1884)
> 10.13
> 10.13
> Moby-Dick (Melville, 1851)
> 8.12
> 8.12
> A Tale of Two Cities (Dickens, 1859)
> 0.00
> 5.33
> Walden (Thoreau, 1854)
> 4.27
> 4.31
> Pride and Prejudice (Austen, 1813)
> 0.00
> 3.47
> Pooled (702,939 words)
> 4.76
> 6.43
> Two findings jump out.
> Human prose is not a dash desert. Twain and Melville sit above 8 per 1,000. If you drew a naive "AI line" at 5 or 6 dashes per 1,000 words, you'd convict two of the most celebrated American novels of being written by GPT.
> And the character-vs-construction split is real. Dickens and Austen read as 0.00 if you only count the modern em dash glyph, then jump to 5.33 and 3.47 when you count the double hyphens their typesetters used for exactly the same purpose. The dash was never absent. The typographic em dash — clean, curly, U+2014 — is what changed.
> ### What AI actually scores
> Now the machine side. The cleanest public measurement we found is E. M. Freeburg's 2026 analysis, "The Last Fingerprint: How Markdown Training Shapes LLM Prose," which ran multiple frontier models on matched prompts and counted em dashes per 1,000 words against a human control.
> Source
> Em dashes per 1,000 words
> GPT-4.1 (unconstrained)
> 10.62
> Claude Opus 4.6 (unconstrained)
> 9.09
> DeepSeek V3 (unconstrained)
> 6.95
> Gemini 2.5 Pro (unconstrained)
> 3.53
> Llama 3.1 8B
> 0.00
> Human control baseline
> 3.23
> So the headline "3x" figure is real: GPT-4.1's 10.62 per 1,000 is about 3.3 times the study's human baseline of 3.23. That lines up with our own human-prose reading of 4.8 to 6.5 per 1,000 — our literary sample runs a touch higher than a contemporary-functional-prose control, exactly what you'd expect from 19th-century novelists.
> But look at the spread. Llama produces zero. Gemini 2.5 Pro sits at 3.53 — indistinguishable from a human. "AI" is not one dash rate; it's a range from 0 to 10-plus depending on the model. Meanwhile a real, independent corpus check found the same drift outside the lab: an analysis of 10,000 ecology paper abstracts on OpenAlex found the em dash's relative frequency more than doubled between 2021 and 2025, with no other punctuation mark coming close to that jump. The mark really is surging in machine-adjacent text. It's just not a clean on/off switch.
> Twain's Huckleberry Finn scores 10.13 em dashes per 1,000 words. GPT-4.1 scores 10.62. On this one metric, one of the most distinctively human voices in American literature is statistically indistinguishable from a language model.
> ## 4So is the em dash an AI tell — yes or no?
> Here's the honest answer, and it's the reason we don't lead our product with punctuation.
> The em dash is a weak signal, not a fingerprint. Presence tells you almost nothing — humans have used the mark for centuries, and some of the best writers use it heavily. What carries a little information is density in the wrong register: a stream of clean U+2014 em dashes in short, modern, functional prose (a LinkedIn post, a cover letter, a product FAQ), where you'd normally see a comma or a period. That's the pattern that shifted the ecology-abstract numbers and the pattern Freeburg measured.
> Even then, it's easy to fool in both directions:
> False positives
> Newsletter writers, novelists, and anyone who edits carefully will trip any reasonable dash threshold. Journalists at Rolling Stone, The Washington Post, and The Globe and Mail have documented real writers getting accused of using AI over a punctuation habit they've had for decades — and editors keep making the same point: the em dash has been around for centuries, so the mark itself can't be the tell.
> False negatives
> Tell ChatGPT to skip the em dash — which, since late 2025, it actually will — and the tell vanishes while the writing stays exactly as generic. Llama never produced one to begin with. You can strip every dash from AI text in one find-and-replace and change nothing about its quality.
> That last point is the whole ballgame. A dash is a keystroke, not a thought. You can delete every em dash from a slop paragraph and it's still slop: still vague, still substance-free, still saying nothing in a confident voice. Punctuation is the easiest signal to game and the least connected to whether the writing is any good.
> This is why our tool judges quality, not authorship. We're not an "is it AI" detector — those chase a moving target and punish humans for their commas. We flag whether text reads like slop: low-substance, templated, cliché-dense content, whoever produced it. Em dash density is one small input to our Structure score, weighted deliberately low. To see what heavy-handed AI output looks like end to end — the dashes plus the empty confidence plus the cliché stacking — our AI slop examples page annotates real cases so you can calibrate your own eye.
> ## 5How our detector actually treats the em dash
> Since this is a data piece, here's the real logic, not a marketing summary.
> Inside our engine, em dash density feeds the Structure dimension — one of five signals, alongside Vocabulary, Cliché, Diversity, and Substance. The rule is deliberately conservative. It only starts adding points when em dash density climbs above 2 per 100 words (20 per 1,000) — roughly double the rate of the most dash-happy human novel in our sample. Below that, the mark contributes nothing to the score.
> And in our Unicode module, the em dash is explicitly filed as a warning-level stylistic signal — "not forensic on its own" — sitting a full tier below the actual smoking guns, which are invisible characters like zero-width spaces that a human essentially never types by hand. Our own code agrees with the finding in this article: a dash is a hint, not proof. What moves the needle is the combination of signals, and above all whether the content has anything to say.
> This is the difference between a black-box "87% AI" verdict and an explainable quality score. We can show you the exact reason a text scored the way it did — this many cliché phrases, this much sentence-length uniformity, this dash density — and you can argue with any single line of it.
> ## 6What to do with this if you write
> A few practical takeaways, whichever side of the keyboard you're on.
> If you're a human getting accused
> Don't surrender your punctuation. The em dash is not evidence, and deleting it to look "safe" just confirms a bad heuristic. Keep drafts and version history that show the writing has fingerprints an AI can't fake — specific numbers, real names, lived detail, a point of view.
> If you're trying to write less like a bot
> The em dash is the least of your problems. Watch the higher-signal stuff — cliché phrases ("in today's fast-paced world"), sentences that are all the same length, paragraphs that could be about anything, and confident conclusions that resolve nothing.
> If you're an editor or teacher
> Don't run a punctuation dragnet. You'll catch your best writers and miss the dash-suppressed slop entirely. Judge the substance.
> ## Check your own text
> Curious where your writing lands? You don't have to trust a punctuation rumor. Paste any text into our free, 100% local slop detector and you'll get a five-dimension breakdown — including how your structure signals, em dash density among them, actually score. Nothing leaves your browser; the analysis runs on your device. It won't tell you "a robot wrote this." It'll tell you something more useful: whether the writing is worth reading — and exactly why.
> ### Sources & Further Reading
> - → E. M. Freeburg, "The Last Fingerprint: How Markdown Training Shapes LLM Prose" (arXiv, 2026) — the controlled study we cite for GPT-4.1 (10.62), Claude, DeepSeek, Gemini, Llama, and the 3.23-per-1,000 human baseline.
> - → McGill University, Office for Science and Society — "Why Did LLMs Steal Our Em-Dashes?" — on the 60% web-crawl training data and why the em dash is a natural fit for LLMs.
> - → "The Rise of the Em Dash in Ecology Abstracts" (Piece of K, 2025) — the 10,000-abstract OpenAlex analysis showing em dash relative frequency more than doubled from 2021 to 2025.
> - → Engadget — "OpenAI says ChatGPT will listen if you tell it not to use em dashes" (Nov 2025) — Sam Altman's public acknowledgment of the em dash behavior and its fix.
> - → Rolling Stone — "'ChatGPT Hyphen': Are Em Dashes a Giveaway of AI Writing?" (2025) — reporting on the panic and the editor view that the em dash itself is not the tell.
> - → The Globe and Mail — "AI's theft of the em-dash isn't just disheartening" — a working writer's account of the mark being caught in the crossfire of AI-detection culture.
> - → Project Gutenberg — source of the public-domain human corpus (Melville, Twain, Thoreau, Dickens, Austen) measured in this article.
> ### Is It AI, or Is It Slop?
> Stop counting em dashes. Paste your text and get a five-dimension breakdown of whether it's actually worth reading.
> Try the Slop Detector
