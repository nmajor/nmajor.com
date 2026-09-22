# The em dash and the "too good to be human" heuristic: measured evidence and the practitioner argument

- Date accessed: 2026-08-18
- What it is: Two sources on the punctuation tell, kept together because they answer different halves of the question. Kreuz (The Conversation) is a cognitive scientist summarising the MEASURED detection literature and the finding that em-dash-based human detection is barely better than chance; Goedecke is a practitioner arguing about causes with one original measurement. Captured for the brief's "get the MEASURED evidence, not the folklore" instruction.
- EVIDENCE TIER: Kreuz = summary of measured studies (secondary, but each study named). Goedecke = one original small measurement (Nigerian English corpus, 0.022% em dashes per word) plus asserted causal theory that he himself labels speculation.

## The load-bearing findings

MEASURED (via Kreuz's summary, each study named in the text):
- 2021 online study: participants **could not distinguish** human vs ChatGPT stories, news articles, recipes.
- 2023 study: editorial board members of top **linguistics** journals could not tell which article abstracts were ChatGPT-written.
- 2024 study: **94% of undergraduate exams written by ChatGPT went undetected** by graders at a British university.
- In the study where participants explicitly named excessive em dashes as their marker for AI, **their detection rate was "only marginally better than chance."**
- Burrows' Delta stylometry needs **~1,000 words per author** to work, so it cannot judge a short piece.
- BERT-based detectors run **80-98% accurate** but are black boxes; nobody knows which features they key on, so they yield no rule a human can apply.

THE KEY INTERPRETIVE LINE (asserted, by a cognitive scientist, and directly relevant to our brief):
> "Given such poor performance, why do so many people believe that em dashes are a clear tell for chatbots? Perhaps it's because this form of punctuation is primarily employed by experienced writers. In other words, people may believe that writing that is 'too good' must be artificially generated."

This is the sharpest statement of the gap the brief asks about: the reader heuristic ("too polished = machine") is not the forensic signal. Avoiding *reading* as AI and *evading a detector* are different jobs, and the em dash belongs to the first.

Also worth noting, from Kreuz asking GPT-4o to name its own tells: the model's 10-item list included **hedges ("often," "generally"), redundancy, an overreliance on lists, and a "polished, neutral tone"** — and concluded "none are definitive on their own."

MEASURED (Goedecke, original): Nigerian English corpus = **0.022% of words are em dashes**, versus a published general-English estimate of **0.25-0.275%** (peaking ~0.35% in 1860). So the "African English RLHF" folk explanation for the em dash is contradicted by data. He also notes GPT-3.5 did not use em dashes and **GPT-4o used ~10x more than GPT-3.5**.
ASSERTED (Goedecke, explicitly speculative): the cause is digitisation of late-1800s/early-1900s print books, which use ~30% more em dashes than contemporary prose.

---

## SOURCE 1 (VERBATIM)

- URL: https://theconversation.com/too-many-em-dashes-weird-words-like-delves-spotting-text-written-by-chatgpt-is-still-more-art-than-science-259629
- Publication: The Conversation
- Author: Roger J. Kreuz, Associate Dean and Professor of Psychology, University of Memphis
- Published: July 30, 2025
- Date accessed: 2026-08-18

```
Skip to content

Academic rigour, journalistic flair

Language experts fare no better than everyday people.
Aitor Diago/Moment via Getty Images

# 

Too many em dashes? Weird words like ‘delves’? Spotting text written by ChatGPT is still more art than science

Published: July 30, 2025 2.30pm CEST

https://theconversation.com/too-many-em-dashes-weird-words-like-delves-spotting-text-written-by-chatgpt-is-still-more-art-than-science-259629

https://theconversation.com/too-many-em-dashes-weird-words-like-delves-spotting-text-written-by-chatgpt-is-still-more-art-than-science-259629

Link copied

Share article

Email 

Bluesky 

Facebook 

WhatsApp 

Messenger 

LinkedIn 

X (Twitter) 

Print article

People are now routinely using chatbots to write computer code, summarize articles and books, or solicit advice. But these chatbots are also employed to quickly generate text from scratch, with some users passing off the words as their own.

This has, not surprisingly, created headaches for teachers tasked with evaluating their students’ written work. It’s also created issues for people seeking advice on forums like Reddit, or consulting product reviews before making a purchase.

Over the past few years, researchers have been exploring whether it’s even possible to distinguish human writing from artificial intelligence-generated text. But the best strategies to distinguish between the two may come from the chatbots themselves.

## Too good to be human?

Several recent studies have highlighted just how difficult it is to determine whether text was generated by a human or a chatbot.

Research participants recruited for a 2021 online study, for example, were unable to distinguish between human- and ChatGPT-generated stories, news articles and recipes.

Language experts fare no better. In a 2023 study, editorial board members for top linguistics journals were unable to determine which article abstracts had been written by humans and which were generated by ChatGPT. And a 2024 study found that 94% of undergraduate exams written by ChatGPT went undetected by graders at a British university.

##### 

Clearly, humans aren’t very good at this.

A commonly held belief is that rare or unusual words can serve as “tells” regarding authorship, just as a poker player might somehow give away that they hold a winning hand.

Researchers have, in fact, documented a dramatic increase in relatively uncommon words, such as “delves” or “crucial,” in articles published in scientific journals over the past couple of years. This suggests that unusual terms could serve as tells that generative AI has been used. It also implies that some researchers are actively using bots to write or edit parts of their submissions to academic journals. Whether this practice reflects wrongdoing is up for debate.

In another study, researchers asked people about characteristics they associate with chatbot-generated text. Many participants pointed to the excessive use of em dashes – an elongated dash used to set off text or serve as a break in thought – as one marker of computer-generated output. But even in this study, the participants’ rate of AI detection was only marginally better than chance.

Given such poor performance, why do so many people believe that em dashes are a clear tell for chatbots? Perhaps it’s because this form of punctuation is primarily employed by experienced writers. In other words, people may believe that writing that is “too good” must be artificially generated.

But if people can’t intuitively tell the difference, perhaps there are other methods for determining human versus artificial authorship.

## Stylometry to the rescue?

Some answers may be found in the field of stylometry, in which researchers employ statistical methods to detect variations in the writing styles of authors.

I’m a cognitive scientist who authored a book on the history of stylometric techniques. In it, I document how researchers developed methods to establish authorship in contested cases, or to determine who may have written anonymous texts.

One tool for determining authorship was proposed by the Australian scholar John Burrows. He developed Burrows’ Delta, a computerized technique that examines the relative frequency of common words, as opposed to rare ones, that appear in different texts.

It may seem counterintuitive to think that someone’s use of words like “the,” “and” or “to” can determine authorship, but the technique has been impressively effective.

A stylometric technique called Burrow’s Delta was used to identify LaSalle Corbell Pickett as the author of love letters attributed to her deceased husband, Confederate Gen. George Pickett.
Encyclopedia Virginia

Burrows’ Delta, for example, was used to establish that Ruth Plumly Thompson, L. Frank Baum’s successor, was the author of a disputed book in the “Wizard of Oz” series. It was also used to determine that love letters attributed to Confederate Gen. George Pickett were actually the inventions of his widow, LaSalle Corbell Pickett.

A major drawback of Burrows’ Delta and similar techniques is that they require a fairly large amount of text to reliably distinguish between authors. A 2016 study found that at least 1,000 words from each author may be required. A relatively short student essay, therefore, wouldn’t provide enough input for a statistical technique to work its attribution magic.

More recent work has made use of what are known as BERT language models, which are trained on large amounts of human- and chatbot-generated text. The models learn the patterns that are common in each type of writing, and they can be much more discriminating than people: The best ones are between 80% and 98% accurate.

However, these machine-learning models are “black boxes” – that is, we don’t really know which features of texts are responsible for their impressive abilities. Researchers are actively trying to find ways to make sense of them, but for now, it isn’t clear whether the models are detecting specific, reliable signals that humans can look for on their own.

## A moving target

Another challenge for identifying bot-generated text is that the models themselves are constantly changing – sometimes in major ways.

Early in 2025, for example, users began to express concerns that ChatGPT had become overly obsequious, with mundane queries deemed “amazing” or “fantastic.” OpenAI addressed the issue by rolling back some changes it had made.

Of course, the writing style of a human author may change over time as well, but it typically does so more gradually.

At some point, I wondered what the bots had to say for themselves. I asked ChatGPT-4o: “How can I tell if some prose was generated by ChatGPT? Does it have any ‘tells,’ such as characteristic word choice or punctuation?” 

The bot admitted that distinguishing human from nonhuman prose “can be tricky.” Nevertheless, it did provide me with a 10-item list, replete with examples.

These included the use of hedges – words like “often” and “generally” – as well as redundancy, an overreliance on lists and a “polished, neutral tone.” It did mention “predictable vocabulary,” which included certain adjectives such as “significant” and “notable,” along with academic terms like “implication” and “complexity.” However, though it noted that these features of chatbot-generated text are common, it concluded that “none are definitive on their own.”

Chatbots are known to hallucinate, or make factual errors. 

But when it comes to talking about themselves, they appear to be surprisingly perceptive.

- 
Research

- 
Language

- 
Linguistics

- 
Stylometrics

- 
Letters

- 
Black box

- 
Poker

- 
Cheating

- 
Chatbots

- 
Studies

- 
ChatGPT

- 
Authorship

- 
Generative AI

Roger J. Kreuz, University of Memphis

### Author

- 

Roger J. Kreuz

Roger J. Kreuz is a Friend of The Conversation.

Associate Dean and Professor of Psychology, University of Memphis

### Disclosure statement

Roger J. Kreuz does not work for, consult, own shares in or receive funding from any company or organisation that would benefit from this article, and has disclosed no relevant affiliations beyond their academic appointment.

### Partners

View all partners

### DOI

https://doi.org/10.64628/AAI.pxevmf9r5

### Events

More events
```

---

## SOURCE 2 (VERBATIM)

- URL: https://www.seangoedecke.com/em-dashes/
- Publication: seangoedecke.com (personal blog; author is a staff engineer at GitHub)
- Published: October 30, 2025
- Date accessed: 2026-08-18

```
### sean goedecke
October 30, 2025 │ ai, ai writing

# Why do AI models use so many em-dashes?

If you asked most people to name a defining feature of AI-generated writing, they’d probably say the em-dash — like this. Language models use em-dashes so much that real humans who like em-dashes have stopped using them out of fear of being confused with AI. It’s also surprisingly hard to prompt models to avoid em-dashes: take this thread from the OpenAI forums where users share their unsuccessful attempts. Given all that, it’s kind of weird that we don’t really know why language models use the em-dash so much.

### Explanations I don’t find convincing

One common explanation is that normal English text contains a lot of em-dashes, so it’s just learned behavior from the training data. I find this fairly unconvincing, for the reason that everyone thinks AI uses a lot of em-dashes. If em-dashes were as common in AI prose as human prose, they would be as unremarkable as the use of other punctuation marks.

Another explanation I’m not convinced by is that AI models like em-dashes because they’re so versatile. When the model is trying to predict the next token, an em-dash keeps its options open: it could either continue on the same point or make a brand new point. Since models are just trying to pick the next most likely token, could they just be “playing it safe” by using em-dashes? I don’t think so. First, other punctuation marks are similarly flexible. Second, I’m not sure that “playing it safe” is a good idiom for thinking about how models generate text.

Other people have argued that AI models use em-dashes because model training explicitly biases for brevity, and em-dashes are very token-efficient. From what I can tell by playing with the OpenAI tokenizer, the em-dash itself isn’t inherently more efficient, but plausibly without it you’d have to write some connective tissue like ”, therefore”. Still, I don’t buy this. Many em-dashes (e.g. the common “it’s not X — it’s Y” pattern) could simply be replaced with a comma, which is equally brief0. I also don’t think GPT-4o is so brevity-focused that it’s doing micro-optimizations around punctuation like this: if it wanted to use fewer tokens, it could simply waffle less0.5.

### Could em-dash use be RLHF-ed in from African English?

One theory I spent more time looking into was that em-dash use could reflect the local English dialect of the RLHF workers. The final stage of training a language model1 involves RLHF: reinforcement learning with human feedback. Essentially, hundreds of human testers are paid to interact with the model and grade model outputs, which are then fed back into the model to make it more helpful and friendly.

The AI company paying for this work is incentivized to do it in countries that are low cost-of-living but have many fluent English speakers. For OpenAI, this meant African countries like Kenya and Nigeria. But one interesting consequence of this decision is that African English is subtly different from American or British English. For instance, African English uses the word “delve” more liberally, which is the explanation for why GPT-4o really likes the word “delve” (and other flowery words like “explore” and “tapestry”)2.

Does African English use a lot of em-dashes, causing African RLHF workers to rate responses with em-dashes highly? This would be a neat explanation, but I don’t think it’s true. I pulled a dataset of Nigerian English text and measured the frequency of em-dashes per-word. Out of all words in the dataset, 0.022% of them were em-dashes. This paper about the frequency of punctuation marks in English text in general estimates general em-dash rates as between 0.25% and 0.275%:

The use of the dash increased after 1750, then reached its peak (about 0.35%) in 1860, but afterwards continued to drop up until the 1950s before starting to fluctuate between 0.25% and 0.275%. The frequency of punctuation marks calculated in the current study is relative to word count in corpora.

Remember that point about em-dash rates peaking in 1860 for later. But for now, it seems like Nigerian English, which is a good-enough stand-in for punctuation rates in African English, is actually less prone to use em-dashes. For that reason, I don’t think the overuse of em-dashes and “delve” are caused by the same mechanism.

### Digitization of print media

One interesting observation about em-dashes is that GPT-3.5 did not use them. GPT-4o used ~10x more em-dashes than its predecessor, and GPT-4.1 was even worse. However, Anthropic and Google’s models do use em-dashes. Even the open-source Chinese models use em-dashes3. What changed between November 2022 and July 2024?

One thing that changed was the makeup of the training data. In 2022, OpenAI was almost certainly training on a mix of public internet data and pirated books from sites like LibGen. However, once the power of language models became apparent, AI labs quickly realized that they needed more high-quality training data, which meant scanning a lot of print books. Only OpenAI employees know when or if OpenAI started scanning books, but court filings have revealed that Anthropic started their process in February 2024. I think it’s reasonable to assume that OpenAI did something similar. In other words, between 2022 and 2024 the training data changed to include a lot of print books.

Remember the punctuation rates study above that showed em-dash rates peaking in 1860? I think it’s a plausible theory that the books AI labs digitized skewed closer to 1860 than the pirated books. Intuitively, pirated content biases towards contemporary and popular literature, because that’s what people want to download. If AI labs wanted to go beyond that, they’d have to go and buy older books, which would probably have more em-dashes. We now arrive at what I think is the most plausible explanation for why AI models include so many em-dashes:

State-of-the-art models rely on late-1800s and early-1900s print books for high-quality training data, and those books use ~30% more em-dashes than contemporary English prose. That’s why it’s so hard to get models to stop using em-dashes: because they learned English from texts that were full of them.

I want to thank this blog from Maria Sukhareva for putting me onto this point. I disagree with her that em-dashes are structurally preferred, for reasons I’ve briefly covered above, but I think it’s very plausible that she’s correct about digitization driving em-dash usage. For some more specific examples and a similar point, you can also check out this post, which shows just how many em-dashes some classic works have. My favorite book, Moby-Dick, has a staggering 1728 em-dashes!

### Summary

There are three broad categories of possible explanation for why models use em-dashes so much.

The first category are structural explanations, which argue that em-dashes are somehow inherently preferred by autoregressive models because they save tokens, or preserve optionality, or something else. I don’t find this convincing because GPT-3.5 didn’t overuse emdashes, and it just doesn’t match my intuition about how inference works.

The second category are RLHF explanations, which argue that human raters prefer em-dashes because they’re more conversational or they’re more common in the particular variant of English where the RLHF-ers live. I think there’s no support for the variant-of-English argument, but the “it’s more conversational” argument could be right. Hard to say what evidence could confirm or deny it.

The third category are training data explanations, which argue that em-dashes are just in the training data. I don’t buy this as a general explanation, but it does seem likely to me that they might be overrepresented in some high-quality training data: in particular, early-1900s print books. Overall, I think that’s the strongest explanation.

### Final thoughts

This is still largely based on speculation. Maybe I’m wrong about when OpenAI started digitizing written text. If they did it before GPT-3.5, then it couldn’t be the cause of em-dashes. Certainly models trained today are at least in part infected with em-dashes by training on the output of other AI models. Either they’re deliberately trained on synthetic data, or they just can’t avoid vacuuming in a host of AI-generated content along with other internet texts.

One thing I’m still a bit confused about: if em-dashes are common because they’re a feature of late-1800s/early-1900s writing, why doesn’t AI prose read more like Moby-Dick? Is it plausible that the models are picking up fragments of older English prose stylings, like punctuation, but are still producing contemporary-sounding text?

I also might be wrong that newly-digitized content would have older publication dates. It’s plausible to me that pirated books would skew more contemporary, but could that be outweighed by the number of older books that are in the public domain?

There also might be a simpler explanation for em-dash prevalence: for instance, maybe em-dashes just read more conversational, so they were preferred by RLHF-ers, and this created a vicious cycle that biased towards more and more em-dashes. This would kind of line up with a Sam Altman interview clip where he says they added more em-dashes because people liked them. I don’t know how you’d go about proving or disproving this.

In general, I’m still surprised that there’s no widespread consensus about the cause of one of the most identifiable features of AI prose. I do think I’m probably right that digitizing late-1800s/early-1900s works is the cause — but it would be really nice if someone who was at OpenAI between GPT-3.5 and GPT-4o (or who’s in a position to know for some other reason) could confirm that this is what happened.

edit: this post got some comments on Hacker News. There’s an an interesting comment indicating that the CEO of Medium believes that Medium is responsible, since Medium automatically converts two hyphens (”—”) into an em-dash, and Medium was a source of high-quality training data.

This just isn’t plausible to me at all. If it were common for humans to use hyphens or doubled hyphens as a standin for em-dashes, and the question was “why do LLMs use the em-dash character instead of a hyphen”, then I might believe a typography-related explanation like this. But the question is “why do LLMs use the em-dash punctuation more than humans do”: i.e. the punctuation mark that acts like parentheses or more punchy final comma.

For this reason, I’m a bit puzzled by the commenters who refer to Unicode, or Russian-language training, or Wikipedia typographic conventions, or mis-OCR-ed hyphens as possible explanations. None of these could possibly explain why the models are doing em-dash things! Misreading a hyphen (e.g. in “double-crossed”) as an em-dash during training will not make the model more likely to use em-dashes as parentheses, it will make the model more likely to use em-dashes as hyphens. And so on.

edit: I went on 99% Invisible to chat about this topic. You can skip to 25 minutes in to hear my segment (though the whole thing is worth listening to).

- 

The linked blog post tries to experimentally show that em-dashes save tokens by asking models to paraphrase em-dash sentences and noting that those paraphrased sentences are longer. To be convinced by this, I would like to see if paraphrased non-em-dash sentences are typically the same length or shorter. I suspect that paraphrasing adds tokens no matter what.

↩

- 

Incidentally, I do think that GPT-5’s overuse of semicolons probably is a brevity bias, because GPT-5 is noticeably less verbose than its predecessors.

↩

- 

At least, in the era of GPT-4o.

↩

- 

Cultural differences in English is a deep rabbit-hole to go down, which I encountered for the first time via Paul Graham’s tweet about “delve”, subsequent tweet about good writing, and the torrent of criticism from Nigerians, Indians, and other post-colonial countries that see a willingness to use flowery language as part of competency with language in general.

↩

- 

Maybe some of this can be explained by those models training on the output from American labs’ models, but I doubt it. By now it seems pretty clear that the Chinese labs can train pretty strong models on their own.

↩

If you liked this post, consider subscribing to email updates about my new posts, or sharing it on Hacker News.

Here's a preview of a related post that shares tags with this one.

Don't feed me AI slop

In the early days of any new technology, the relevant social norms are still being workshopped. For mobile phones, that meant collectively deciding when and where phones should be on silent mode. For instant messaging, that meant jumping right into the request instead of trying to do small talk first. What are the social norms we’re working out for AI right now? In my view, they’re about when it’s appropriate to show somebody AI-generated content.

Continue reading...
```
