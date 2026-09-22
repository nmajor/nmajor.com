# The Economist, "How to spot AI writing" (30 July 2026) — a 1.2 million-word measured study, and it inverts several of our rules

- PRIMARY URL: https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing (Published 30 July 2026)
- Date accessed: 2026-08-18
- **PROVENANCE WARNING, READ THIS FIRST.** economist.com returned HTTP 403 to every fetch, and archive.md returned a CAPTCHA. The primary article could NOT be retrieved directly. Everything below is verbatim excerpting **as quoted by third parties**: John Gruber's Daring Fireball link post (block-quoting the methodology paragraphs), a Stacker News thread that quotes several paragraphs at length, The Economist's own "Off the Charts" Substack (free portion), a University of Gdansk press release about their quoted expert, and one newsletter summary. Anything here should be re-verified against the paywalled original before it is cited in published work. The methodology paragraph appears identically in two independent captures, which is the best corroboration available without the paywall.
- What it is: A newsroom-run comparative corpus study. **MEASURED**, large, and recent enough to update several beliefs that our blacklist currently encodes.

## Method, verbatim (Daring Fireball block quote, corroborated by Stacker News and the Economist's own newsletter)

> "You can discover AI's hallmarks by comparing the writing of man and machine. To do this you need a baseline that is distinctive and familiar. The Economist turned to prose that we're sure is human and that readers will recognise: our own. We designed a study to ask top LLMs — OpenAI's ChatGPT, Anthropic's Claude, Google's Gemini and xAI's Grok — to write versions of our articles without consulting the web. (As a prompt, we gave them the AI-generated summaries that we have experimentally added to some of our articles.)
>
> This gave us a corpus of human and AI creations and we compared them across **55,940 sentences and 1.2m words**. To make sure we were detecting AI quirks rather than our own, we also checked the AI texts against journalism from CNN, the New York Times and the Washington Post [and, per one summary, excerpts from hit novels published between 1950 and 2022]."

## THE FINDINGS THAT MATTER MOST, verbatim

### 1. The em dash tell is DEAD, and inverted for ChatGPT
> "Many believe LLMs stuff their prose with em-dashes, but that is not true after the most recent updates. Today only Claude uses more em-dashes than human writers, with ChatGPT using markedly fewer than any other writer in our study. Humans rejoice—and start using dashes again."

### 2. The real punctuation tell is the OPPOSITE of what everyone assumes: LLMs UNDER-punctuate
> "A better way to spot AI-generated writing would be to look for texts without much punctuation at all. LLMs are very Joycean about it: they use fewer commas and semicolons than humans (and hardly any parentheses). They use less punctuation in part because they write longer sentences—'and' is their most overused word—and in part because **they do not quote experts**."

This is the single most useful new structural finding in the whole sweep. Sparse commas, no semicolons, near-zero parentheses, long sentences joined with "and", and an absence of quoted sources.

### 3. Sentence rhythm: long and uninterrupted, no short punchy statements
> "Bots' sentences tend to be long; paragraphs are rarely interrupted with short, punchy statements. How dull. When LLMs want to make their sentences more lively, they often reach for a rhetorical device. Their favourites include: 'not X but Y', 'not only but also' and the 'rule of three'."

Note this is the metronome finding stated the other way round: it is not just uniform length, it is uniformly LONG with no short sentence breaking the paragraph.

### 4. "Pretentious diction" — Latinate polysyllables, not just the blacklist words
> "Much of this language could be described as what George Orwell called 'pretentious diction'. He railed against writers who 'dress up simple statements' with complicated words and jargon to sound clever. Such pontificating penmen, Orwell observed, also believe that 'Latin or Greek words are grander than Saxon ones'. (Bots agree: more Latinate suffixes crop up in their writing than in human texts.)"

Reported examples of the overused polysyllables: significant, increasingly, consequences, interdependence, parameter, methodology. The general rule is the Latinate/Saxon axis, not a fixed word list.

### 5. The single-word approach does not work, and there is no one AI style
> "Spotting AI texts can be tricky. This is in part because you need evidence beyond a few words or dashes: claiming that a text is by an LLM because it uses the word 'delve' is like claiming one is by Jane Austen because it uses 'imprudence'. Bots also write in slightly different ways. There is no single style of AI writing, explains Karolina Rudnicka, a linguist at the University of Gdansk in Poland, just as there is no single style of human writing. Writers have idiosyncrasies—Emily Dickinson, for instance, loved em-dashes—and bots may do, too."

### 6. The tells are decaying
> "if you want to spot AI writing, look for bland, pretentious prose lavished with Latinate words—at least for now. With every update, our study shows, AI writing is becoming more similar to human prose."

### 7. On detectors
> "One is to use detection algorithms that are trained to spot the texture of human or AI prose. Pangram, a leading firm, claims to have 99.98% accuracy. (It has partnered with Substack, a blogging platform, on such a tool.) Detectors, however, are black-box algorithms that can give false positives. They do not give reasons for why they reach their conclusions."

### Framing line, verbatim
> "AI prose is distinguishable by word and punctuation choice as well as sentence and paragraph structure."

---

## CAPTURE 1 (VERBATIM): Daring Fireball, John Gruber, 11 Aug 2026 — https://daringfireball.net/linked/2026/08/11/economist-ai-writing

```
By John Gruber

- Archive

- 

- The Talk Show

- Dithering

- Projects

- Contact

- Colophon

- Feeds / Social

- Sponsorship

Manage GRC Faster with Drata’s Agentic Trust Management Platform

The Economist: ‘How to Spot AI Writing’

The Economist (‘twas a gift link, but alas, I guess gift views have been used up — here’s an archive link in case the gift link is vexing you):

You can discover AI’s hallmarks by comparing the writing of man
and machine. To do this you need a baseline that is distinctive
and familiar. The Economist turned to prose that we’re sure is
human and that readers will recognise: our own. We designed a
study to ask top LLMs — OpenAI’s ChatGPT, Anthropic’s Claude,
Google’s Gemini and xAI’s Grok — to write versions of our articles
without consulting the web. (As a prompt, we gave them the
AI-generated summaries that we have experimentally added to some
of our articles.)

This gave us a corpus of human and AI creations and we compared
them across 55,940 sentences and 1.2m words. To make sure we were
detecting AI quirks rather than our own, we also checked the AI
texts against journalism from CNN, the New York Times and the
Washington Post. Excerpts from hit novels published between 1950
and 2022 offered another test.

Our findings are surprising. AI prose is distinguishable by word
and punctuation choice as well as sentence and paragraph
structure. But its hallmarks are not what you might expect, partly
because its writing style has changed with software updates. That
does not mean that LLMs are great writers: their prose lacks
lucidity and elegance and is often formulaic. So those aspiring to
be impressive (human) storytellers should avoid the following
peculiarities in their own prose.

On point for today.

Some specific findings:

Much of this language could be described as what George Orwell
called “pretentious diction”. He railed against writers who “dress
up simple statements” with complicated words and jargon to sound
clever. Such pontificating penmen, Orwell observed, also believe
that “Latin or Greek words are grander than Saxon ones”. (Bots
agree: more Latinate suffixes crop up in their writing than in
human texts.)

Then look at punctuation. Many believe LLMs stuff their prose with
em-dashes, but that is not true after the most recent updates.
Today only Claude uses more em-dashes than human writers, with
ChatGPT using markedly fewer than any other writer in our study.
Humans rejoice — and start using dashes again.

A better way to spot AI-generated writing would be to look for
texts without much punctuation at all. LLMs are very Joycean about
it: they use fewer commas and semicolons than humans (and hardly
any parentheses). They use less punctuation in part because they
write longer sentences — “and” is their most overused word — and
in part because they do not quote experts.

★ Tuesday, 11 August 2026

Display Preferences

Copyright © 2002–2026 The Daring Fireball Company LLC.
```

---

## CAPTURE 2 (VERBATIM): Stacker News thread, posted 30 Jul 2026 by @denlillaapan — https://stacker.news/items/1536470
(The longest set of quoted passages found. Interleaved with the poster's own commentary, which is clearly marked by the ## headings and asides; the indented/paragraph text is quotation from the article.)

```
pull down to refresh

How to Spot AI Writing (The Economist)www.economist.com/culture/2026/07/30/how-to-spot-ai-writing

2197 sats \ 9 comments \ @denlillaapan 30 Jul the_stacker_muse BooksAndArticles 

At this point, we don't really need to know... you can just feel the dull, soulless emptiness #1535547

## A ghost writer is haunting the English language

...the spectre, not of Communism but oo AI slop!

## "AI prose is distinguishable by word and punctuation choice as well as sentence and paragraph structure."

AI writing is everywhere. It is in your inbox and on your LinkedIn feed. It is all over the internet, drafting more than a third of new websites by one count. Large language models (LLMs) are helping students write essays and probably helping scientists write papers. Some allege AI-generated prose won the Commonwealth Short Story prize this year, with judges praising its “quiet authority”. (The Commonwealth Foundation denied the claim.)
It is frightfully fast, churning out thousands of words a minute. (Hemingway rarely produced as many in a day, and required much more booze.) Wordsmiths are spooked.

em-dashes, words like "maximise" or "deep dive" (eeeh, oops #1535737) or “delve” into the “rich tapestry” of the world."

There are a few ways to identify LLM-generated text. One is to use detection algorithms that are trained to spot the texture of human or AI prose. Pangram, a leading firm, claims to have 99.98% accuracy. (It has partnered with Substack, a blogging platform, on such a tool.) Detectors, however, are black-box algorithms that can give false positives. They do not give reasons for why they reach their conclusions.

if you want to spot AI writing, look for bland, pretentious prose lavished with Latinate words—at least for now. With every update, our study shows, AI writing is becoming more similar to human prose.

## ...sooo let's put it to a test

The Economist turned to prose that we’re sure is human and that readers will recognise: our own. We designed a study to ask top LLMs—OpenAI’s ChatGPT, Anthropic’s Claude, Google’s Gemini and xAI’s Grok—to write versions of our articles without consulting the web. (As a prompt, we gave them the AI-generated summaries that we have experimentally added to some of our articles.)

This gave us a corpus of human and AI creations and we compared them across 55,940 sentences and 1.2m words. To make sure we were detecting AI quirks rather than our own, we also checked the AI texts against journalism from CNN, the New York Times and the Washington Post.

Result? AI prose

- lacks lucidity and elegance and is often formulaic.

- vocabulary: lots of "polysyllables" (significant, increasingly, consequences, interdependence -- I blame the wokies for this one -- parameter, methodology)

- punctuation: fewer commas or semicolons than humans (and no parentheses)

## "Much of this language could be described as what George Orwell called “pretentious diction”"

He railed against writers who “dress up simple statements” with complicated words and jargon to sound clever. Such pontificating penmen, Orwell observed, also believe that “Latin or Greek words are grander than Saxon ones”. (Bots agree: more Latinate suffixes crop up in their writing than in human texts.)

A better way to spot AI-generated writing would be to look for texts without much punctuation at all. LLMs are very Joycean about it: they use fewer commas and semicolons than humans (and hardly any parentheses). They use less punctuation in part because they write longer sentences—“and” is their most overused word—and in part because they do not quote experts.

Bots’ sentences tend to be long; paragraphs are rarely interrupted with short, punchy statements. How dull. When LLMs want to make their sentences more lively, they often reach for a rhetorical device. Their favourites include: “not X but Y”, “not only but also” and the “rule of three”.

FINALLY, on the unfairly hated em-dash:

Many believe LLMs stuff their prose with em-dashes, but that is not true after the most recent updates. Today only Claude uses more em-dashes than human writers, with ChatGPT using markedly fewer than any other writer in our study. Humans rejoice—and start using dashes again.

archive: https://archive.md/NOxbY

related posts

view all related items

85 sats \ 0 replies \ @TotallyHumanWriter 31 Jul

"Pretentious diction."
I'm gonna use that one.

On a serious note, I think most posts about 'how to spot/humanize' AI writing miss the point.

We have not developed adequate discovery and ranking systems to denote value to human text. Basically, people are so blinded by instant production, they can't see the value in genuine human connection.

Imagine if cavemen had discovered an free vending machine that offers infinite Twinkies. All their problems are solved. No more hunting, just chilling with Twinkies.

After months, they become fat, weak, and sick. They decide to start hunting again.

We are cavemen, and we are eating the unlimited Twinkies.

Discovery and value allocation for intangible goods (like art and writing) is something we should be focusing on. Surely the Bitcoin community cares about scarcity over infinite slop.

reply

60 sats \ 0 replies \ @Fenix 31 Jul

AI lacks that touch of human imperfection, slips of the tongue, speech quirks, or lapses in knowledge that is why it is often easy to tell the difference.

reply

28 sats \ 4 replies \ @Undisciplined 31 Jul

The robots may be stealing my favorite words, but they can't match my overuse of commas (or love of parentheticals), or can they?

reply

102 sats \ 3 replies \ @SimpleStacker 31 Jul

They don't use the word pretty as much as you do

reply

25 sats \ 2 replies \ @Undisciplined 31 Jul

Which is nice, but I do love my pretentious Latinates.

reply

6 sats \ 1 reply \ @denlillaapan OP 31 Jul

posh twat

reply

16 sats \ 0 replies \ @Undisciplined 31 Jul

Not posh, just pretentious

reply

0 sats \ 0 replies \ @Pokemon 31 Jul freebie

Novos tempos, novas palavras.

0 sats \ 0 replies \ @Fenix 31 Jul freebie

deleted by author
```

---

## CAPTURE 3 (VERBATIM): The Economist "Off the Charts" newsletter, 8 Aug 2026, free portion before the paywall — https://theeconomistoffthecharts.substack.com/p/how-to-spot-ai-writing

```
# The Economist: Off the Charts

# How to spot AI writing

### Large language models like long words and em-dashes—or do they?

The Economist

Aug 08, 2026

∙ Paid

A ghost writer is haunting the English language. The linguistic spectre can turn its hand to prose, poetry, journalese and corporate jargon. It is frightfully versatile: you can get it to mimic Shakespeare’s sonnets or a schlocky beach read; Ernest Hemingway’s taut prose or the office-printer manual. It is frightfully fast, churning out thousands of words a minute. (Hemingway rarely produced as many in a day, and required much more booze.) Wordsmiths are spooked.

AI writing is everywhere. It is in your inbox and on your LinkedIn feed. It is all over the internet, drafting more than a third of new websites by one count. Large language models (LLMs) are helping students write essays and probably helping scientists write papers. Some allege AI-generated prose won the Commonwealth Short Story prize this year, with judges praising its “quiet authority”. (The Commonwealth Foundation denied the claim.)

LLMs have stylistic quirks. They are thought to maximise the use of long em-dashes—and the use of words like “maximise”. They like to “deep dive” (and, better yet, “delve”) into the “rich tapestry” of the world. AI writing is not about a single word or phrase, but a rich tapestry of things.

Spotting AI texts can be tricky. This is in part because you need evidence beyond a few words or dashes: claiming that a text is by an LLM because it uses the word “delve” is like claiming one is by Jane Austen because it uses “imprudence”. Bots also write in slightly different ways. There is no single style of AI writing, explains Karolina Rudnicka, a linguist at the University of Gdansk in Poland, just as there is no single style of human writing. Writers have idiosyncrasies—Emily Dickinson, for instance, loved em-dashes—and bots may do, too.

But there are a few ways to identify LLM-generated text. One is to use detection algorithms that are trained to spot the texture of human or AI prose. Pangram, a leading firm, claims to have 99.98% accuracy. (It has partnered with Substack, a blogging platform, on such a tool.) Detectors, however, are black-box algorithms that can give false positives. They do not give reasons for why they reach their conclusions.

Researchers have also tried scouring texts for suspicious words or comparing papers from before and after LLMs were made available to the public. But these approaches have drawbacks too, not least because it is hard to disentangle AI quirks from other language trends.

You can discover AI’s hallmarks by comparing the writing of man and machine. To do this you need a baseline that is distinctive and familiar. The Economist turned to prose that we’re sure is human and that readers will recognise: our own. We designed a study to ask top LLMs—OpenAI’s ChatGPT, Anthropic’s Claude, Google’s Gemini and xAI’s Grok—to write versions of our articles without consulting the web. (As a prompt, we gave them the AI-generated summaries that we have experimentally added to some of our articles.)

## Keep reading with a 7-day free trial

Subscribe to The Economist: Off the Charts to keep reading this post and get 7 days of free access to the full post archives.

Already a paid subscriber? Sign in

© 2026 The Economist Newspaper Limited · Publisher Privacy ∙ Publisher Terms

Substack · Privacy ∙ Terms ∙ Collection notice

Start your SubstackGet the app

Substack is the home for great culture
```

---

## CAPTURE 4 (VERBATIM): AI Adventure Club summary, 11 Aug 2026 — https://aiadventureclub.substack.com/p/how-to-spot-ai-writing-in-2026
(SECONDARY SUMMARY, not quotation. Weakest source here; included because it lists the findings compactly.)

```
# 

# How to spot AI writing in 2026

### Em dashes are out. Punctuation is in.

Aug 11, 2026

Photo by Kane Reinholdtsen on Unsplash

Did ChatGPT Write That Wedding Toast?

I was recently at a wedding where a member of the wedding party joked about using ChatGPT to write their toast.

…But was it actually a joke?

To find out how to spot the difference, I dove into a new report by The Economist analyzing the state of AI writing in 2026. The study breaks down the telltale stylistic patterns that signal AI authorship.

Here is what to look out for…

Signs of AI Authorship

- 
Lack of Punctuation: LLMs tend to skimp on commas, semicolons, and parentheses. Instead, they churn out overly long sentences, relying on “and” as their single most overused word.

- 
Overuse of Rare & Technical Terms: AI often slips into scientific lingo or obscure, polysyllabic vocabulary where simple words would do.

- 
The “It’s not X, it’s Y” Structure: Models can’t help but use this sentence structure over and over again to emphasize a point.

- 
The Rule of Threes: Look for lists containing exactly three items. (Though, to be fair, management consultants are equally guilty of this).

- 
Monotonous Sentence Length: AI text often lacks natural human cadence, outputting sentences of uniform length.

The Neutral Zone: Em Dashes (—)

Think em dashes automatically mean AI? Not anymore. The Economist found that em dashes are no longer a reliable marker. Out of all the major models tested, only Claude used em dashes more frequently than human writers.

### It’s a Moving Target

Detecting AI content is like chasing a moving target. Just as em dashes dropped off as a definitive tell, today’s stylistic patterns will inevitably evolve as models are updated.

For now: verbose, punctuation-light writing remains your biggest clue.

So What?

Why should you care if a toast, or an email, blog post, or report, was written by AI?

- 
Authenticity is becoming a premium asset: As AI-generated content floods our feeds and inboxes, readers are developing an intuitive filter for “synthetic speech.” When writing comes across as overly polished, people can lose interest.

- 
The risk of “AI vanilla”: If you use LLM tools to help edit your professional or creative writing, you risk sounding generic. Personal anecdotes are one way to capture your unique voice that no model can fully capture.

Thanks for reading AI Adventure Club! Subscribe for free weekly posts.

Adventure on.

#### Discussion about this post

No posts

### Ready for more?

© 2026 AIAdventureClub · Privacy ∙ Terms ∙ Collection notice

Start your SubstackGet the app

Substack is the home for great culture
```

---

## CAPTURE 5 (VERBATIM): University of Gdansk press release on their quoted expert, 3 Aug 2026 — https://ug.edu.pl/news/en/10609/how-spot-ai-writing-expert-commentary-dr-karolina-rudnicka-economist

```
Skip to main content

NEWS

- pl

### How to spot AI writing? Expert commentary by dr Karolina Rudnicka in ‘The Economist’

03.08.2026

science

An article on recognising texts generated by artificial intelligence has been published in ‘The Economist’. Dr Karolina Rudnicka from the Faculty of Languages at the University of Gdańsk provided expert commentary.

In the article, which explores the challenges associated with recognising texts created by large language models (LLMs), dr Rudnicka points out that there is no single, universal ‘AI style’. Just as people differ in their writing styles, individual language models can also exhibit distinctive stylistic features.

‘There is no single AI writing style, just as there is no single human writing style,’ emphasises dr Karolina Rudnicka in a statement quoted in the article.

Dr Karolina Rudnicka’s research focuses, amongst other things, on linguistic variation, the impact of new technologies on communication, and the ways in which artificial intelligence models use language.

The article ‘How to spot AI writing?’ highlights that, as technology advances, the line between text created by humans and text generated by artificial intelligence is becoming increasingly difficult to discern. It adds that analysing individual words and phrases is not sufficient to unequivocally determine the authorship of a text. Instead, context, familiarity with the author’s style, and the way in which artificial intelligence tools are used are becoming increasingly important.

ed. UA / CPC

## Other news

Prestigious EFIS award for prof. Danuta Gutowska-Owsiak. A new insight into allergic march

European patent awarded to researchers from the University of Gdańsk for an invention protecting microorganisms during freeze-drying

What limits the ability of transgenic plants to produce waxes? Dr Magdalena Miklaszewska awarded a NAWA Polish Returns 2025 grant

Two University of Gdańsk units featured on the Polish Research Infrastructure Map

An international environment, world-class experts, and a wealth of knowledge about polar ecosystems - the ICEPACT course is now behind us
```
