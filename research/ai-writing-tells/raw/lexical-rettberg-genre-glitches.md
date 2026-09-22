# Jill Walker Rettberg — "Genre glitches and unexpected promotional phrases as a sign of AI writing" (jilltxt.net, May 13 2026)

- URL: https://jilltxt.net/genre-glitches-and-unexpected-promotional-phrases-as-a-sign-of-ai-writing/
- Author: Jill Walker Rettberg, Professor and Co-Director, Center for Digital Narrative, University of Bergen
- Date published: 2026-05-13 (updated 2026-05-15). Date accessed: 2026-08-18.
- Cited by Wikipedia:Signs of AI writing as the source for its "Promotional and advertisement-like language" section.
- What it is: A named mechanism for a lexical tell that no word list captures — the "genre glitch". Not a word that is wrong, but a word whose REGISTER is wrong for the sentence it sits in: a burst of sensory ad-copy inserted into an informational sentence. This is the lexical failure mode that survives every blacklist, because each individual word is innocent.
- EVIDENCE TIER: **asserted** — the author is explicit and honest that it is a hypothesis from two examples: "OK, I wrote that definition based on two examples I've seen, so maybe it will change. But I'm pretty sure I'm on to something here." She also records that the NYT contacted the journalist in Example 1, who **confirmed she did not use AI**. Treat this as a useful editorial concept, not as evidence, and note that its own headline example was a false positive.
- WHY IT IS STILL WORTH KEEPING: as a self-editing rule it is checkable. "Does this phrase belong to a different genre than the sentence around it?" catches the travel-brochure adjective in a business paragraph, which is exactly the residue left after a word blacklist has been applied.

## FULL TEXT, VERBATIM (as rendered 2026-08-18)


JillMay 13, 2026May 15, 2026Post a Comment 

Genre glitching in the New York Times 

A genre glitch is a characteristic of LLM-assisted writing where the text suddenly switches genre, typically inserting a short promotional phrase full of sensory details into an informational text. Genre glitches occur when a word in the generated text is heavily associated with a genre or context that is markedly different to the overall genre or subject of the text, thus activating rhetorically inappropriate paths in the language model.

OK, I wrote that definition based on two examples I’ve seen, so maybe it will change. But I’m pretty sure I’m on to something here. Let me explain. 

Example 1: Yesterday, in the New York Times, an article on the rising price of tomatoes included a bizarre insert describing the flavour of tomatoes. (Update: The New York Times emailed me on May 14 to let me know they had contacted the journalist, who confirmed that she did not use AI to write this.)

The price of tomatoes — tart bursts of flavor in salads and sandwiches — surged nearly 40 percent in April from a year ago on a combination of bad weather, high tariffs and climbing transportation costs.

Julie Creswell, “Tomato Prices Soar as War, Tariffs and Weather Affect a Popular Crop,” New York Times, 12 May, 2026

“Tart bursts of flavor in salads and sandwiches”?? In the middle of a sentence about inflation? It’s not that a human couldn’t have written this. It just seems unlikely that they would write it like that. It’s a strange mix of genres – flipping from informational writing about inflation to something you’d be more likely to read in an ad for tomatoes, or a food blog, or even in the New York Times food section. There are other signs of AI too in that paragraph – the em-dashes (but they’ve always been common in the New York Times) and the three reasons, each perfectly balanced with an adjective and a noun, like those AI-generated crowd photos where all the people look like clones. 

And that comparison gives me a chance to show you the AI-generated ad for a far-right protest that Filter posted a story about today, because hardly anyone actually showed up. But look at those identical people in the crowd!

Screenshot from Filter nyheter’s story comparing Norgesdemokratenes AI-generated poster with the actual turnout for their protest. You should subscribe to Filter if you’re interested in Norwegian politics.

Anyway, back to the tomatoes. Scott spotted this genre glitch last night, after I had showed him an example of the phenomenon in the legal documents the US government submitted to obtain pretrial detention of Cole Allen, who was arrested for trying to assassinate Trump at the White House Correspondent’s Dinner on 25 April. And that’s Example 2, which was brought to my attention by Doremus Schafer, who has become aware that I collect examples of weird and probably AI-generated writing and so helpfully sends me things he finds. Thank you!

OK, here’s the genre glitch:

A genre glitch: from legal description to travel marketing.

This is from a 20 page document that lays out the evidence and explains Allen’s moves before the event. On page 9 it describes how Allen took the train from LA to Chicago, but on mentioning the “long-distance Amtrak passenger train to Chicago,” the text genre glitches and inserts a description of the route that you’d expect to find on a website promoting the journey, not in a legal document. 

On April 21, the defendant used a ride share application to travel from his home to Los Angeles Union Station, where he boarded a long-distance Amtrak passenger train to Chicago—a route famous for its scenic views of the mountains and deserts of the American West before traversing the vast expanse
of the Great Plains. 

United States of America v. Cole Tomas Allen. 29 April, 2026. “Governments Memorandum in Support of Pretrial Detention.”

I think these genre glitches are another sign of AI-assisted writing. 

LLMs generate text associatively. “Long distance passenger train to Chicago” is connected, in the LLM’s model of all the language it’s been trained on, to tourist sites marketing the journey. So when the words “long distance passenger train to Chicago” are generated, the next most probable words are promotional, even though that breaks the genre of the text and is completely irrelevant to the purpose of this text, which is to lay out evidence to convince a judge that Allen is probably guilty.

The tomato switch follows the same mechanism. In the training data, the token “tomato” would almost always appear in the context of food, recipes or gardening, and only rarely in the context of inflation or the economy. Online food blogs often have that over-the-top promotional or just very sensory and appealing language that is rare in a legal document or news story about inflation. So the token “tomato” activates connections to this style of writing and the LLM adds an em-dash and breaks the genre completely.

Both these examples are in documents that must have been read by many people. But they’re also both genres of writing that are operational (like operational images – I saw Gabriele de Seta use the term operational writing the other day). They’re functional. In his blog post about the orbital argumentation of LLMs, John Gallagher argued that in fact, a lot of writing is not intended to be read. These texts weren’t written so we can savour reading them, or so the author(s) can think through a problem or experience. They are just intended to get a job done. The legal document is important, and one hopes it was written and proofread by several good lawyers before being published – but either none of them read it carefully enough to notice the scenic detour, or they noticed it but didn’t think it mattered. And in a way it doesn’t matter. It’s not wrong. It’s just weird.

The story about inflation is the sort of story that newspapers have been automating since at least 2016. It’s not a story that requires a lot to write. My local newspaper has published automated news stories about football matches, real estate sales and the weather for years, starting well before LLMs because this type of automation does not need an LLM. You need a structured dataset, an algorithm that extracts interesting data points (goals, the most expensive recent house sale, a photo of the house, the temperature) and an algorithm that combines these data points with prewritten phrases depending on characteristics of the data. In fact, LLMs make this process worse – because they add bizarre phrases as in the tomato and train examples, and because they don’t always accurately summarise data. 

If you spot more of these genre glitches, please let me know – leave a comment here, ping me on Bluesky (I’m @jilltxt) or send me an email at jill.walker.rettberg@uib.no. 

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

Share on Reddit (Opens in new window)
Reddit

Email a link to a friend (Opens in new window)
Email

Related

Discover more from Jill Walker Rettberg

Subscribe to get the latest posts sent to your email.

Type your email… 

Subscribe 

AI in the wildAI slopgenre glitchLLMs 

FacebookTwitterPinterestLinkedIn

Previous Post

UiB self-hosts the open source version of Canvas, so wasn’t affected by the breach 

Next Post

Don’t do a systematic review if you’re in the humanities 

Leave A Comment Cancel reply
You must be logged in to post a comment.

Recommended Posts

AI STORIES 

AI shimmer and sparkle

I have this hunch that sparkles and glow and shimmer are somehow a point in the latent spaces of LLMs that have more connections than you would expect. Perhaps their connotation to magic and to the unknown matches some of the mystique of genAI? Or perhaps these words are used […]

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

Share on Reddit (Opens in new window)
Reddit

Email a link to a friend (Opens in new window)
Email

AI and algorithmic culture 

Misaligned citations and LLM-generated scientific fraud

This LLM-generated paper demonstrates how LLMs fail to cite core scholarship on a topic but generate misaligned citations systematically.

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

Share on Reddit (Opens in new window)
Reddit

Email a link to a friend (Opens in new window)
Email

AI and algorithmic culture Digital Art 

Don’t do a systematic review if you’re in the humanities

This paper is a great example of why you probably shouldn’t use a systematic literature review for a theoretical and conceptual research question like “How does artificial intelligence affect the perception of authenticity and aura in art?” However, if you’re looking for an annotated list of 48 recent articles about […]

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

Share on Reddit (Opens in new window)
Reddit

Email a link to a friend (Opens in new window)
Email

Networked Politics University politics 

UiB self-hosts the open source version of Canvas, so wasn’t affected by the breach

On May 1st Canvas announced a security breach, and then yesterday the system was hacked. The login page was replaced by a ransom note: if universities don’t pay up by 12 May, student data will be released. Here’s what the login page looked like yesterday: Way back in 2015, when […]

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

Share on Reddit (Opens in new window)
Reddit

Email a link to a friend (Opens in new window)
Email

AI and algorithmic culture Networked Politics 

AI-generated images, fascist aesthetics: Dieselbrølet and Heimatstrom

My German is pretty dodgy, so when I first saw Heimatstrom on Bluesky, shared by Roland Meyer, a professor of visual culture at Universität Zürich’s Digital Society Initiative, I misinterpreted it and thought it was a far-right campaign. But no, Heimatstrom is a group of left-wing environmentalists using fascist AI […]

Share this:

Share on Bluesky (Opens in new window)
Bluesky

Share on Mastodon (Opens in new window)
Mastodon

Share on LinkedIn (Opens in new window)
LinkedIn

