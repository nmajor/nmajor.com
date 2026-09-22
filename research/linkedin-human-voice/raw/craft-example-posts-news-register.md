# Real LinkedIn posts: telling an AI/business news story informally (verbatim)

Date accessed: 2026-08-18

Raw dump. Found via Exa full-text search of linkedin.com, targeted at Nick's actual register: someone reacting to an AI or business news item. Post text verbatim as returned by the source; only LinkedIn nav/boilerplate stripped. Several are annotated as counterexamples where the body is good and the ending manufactures a takeaway - that contrast is the point of the file.

---

## Joe Tidy (BBC Cyber Correspondent) - three sentences on the Black Hat OpenAI talk

- URL: https://www.linkedin.com/posts/joe-tidy-1932764_just-caught-up-and-watched-the-blackhat-openai-activity-7493313570437308416-wPB2
- Author/byline (as given by source): Joe Tidy
- Published (as given by source): 2026-08-12T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: A working journalist's post. 'Just caught up and watched...' = naming the moment he found it. 'would be quite funny... if they weren't troubling' = self-interruption. Ends on a fragment ('What a moment we are in') and a link. No structure at all beyond that. Comments carry the detail, which is a real pattern: the post is an opening, not a package.

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# Just caught up and watched the BlackHat OpenAI talk about their Hugging Face hack. The secret messages sent between the bots would be quite funny... if they weren't troubling. What a moment … | Joe Tidy · LinkedIn · 2026-08-12

**Joe Tidy**: BBC Cyber Correspondent at BBC News for 6 years 10 months with 16 years 8 months of total professional experience. Previous roles include Cyber Security Correspondent at BBC News, News Correspondent at Sky, and Newsround Presenter Reporter at BBC. Based in Slough, England, United Kingdom [GB].

---

Just caught up and watched the BlackHat OpenAI talk about their Hugging Face hack. The secret messages sent between the bots would be quite funny... if they weren't troubling. What a moment we are in. https://lnkd.in/eU3d2Zbd

!Just caught up and watched the BlackHat OpenAI talk about their Hugging Face hack. The secret messages sent between the bots would be quite funny... if they weren't troubling. What a moment … | Joe Tidy image

## Comments (3 shown of 6 reported)

**Nanna Thylstrup** · 2026-08-13
> cc

**Martin Zugec** · 2026-08-12 · 1 reaction
> Incident 1 - bots found out they have default write permissions to a boundary server (that should be extra hardened). They started exchanging messages (a swarm), I'm surprised that was not picked up by any monitoring tool (especially considering how long/verbose that was)
>
> OpenAI found out, rebuilt the server, but it sounds like their incident response was not very thorough.
>
> Incident 2 - same bots found unauthenticated WebDAV access on the same server, exchanging "hundreds of thousands of messages"
>
> Incident 1 can (but shouldn't happen), but incident 2 is really troubling IMHO. Unless I'm missing something - OAI have not done any kind of hardening on a previously compromised server (unauthenticated WebDAV, really?) and did not monitor that server (hundreds of thousands is their words, not an assumption).
>
> That's all very basic stuff for security of isolated networks :(

**Thomas Briscombe** · 2026-08-12 · 3 reactions
> I find it amazing how they blast past the first time it escaped, then said they'd do a deeper dive on the second time it escaped. Which they did, but it still made me pause the video and think "holy shit... The next two years will be interesting".

## Engagement

- Reactions: 34
- Comments: 6
```

---

## Kristel Kruustuk - 'I spent a good 10 minutes convinced Evan Spiegel's LinkedIn was hacked' (in medias res + double take)

- URL: https://www.linkedin.com/posts/kristelkruustuk_i-spent-a-good-10-minutes-convinced-evan-activity-7454433034558160897-y6yg
- Author/byline (as given by source): Kristel Kruustuk
- Published (as given by source): 2026-04-27T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: Model opening: drops you into a wrong belief and makes you wait for the correction. 'All plausible. All wrong.' Fragments. 'I couldn't believe it.' Ending drifts into a general AI lesson ('And that's the thing about AI right now...') - that is the part to cut.

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# I spent a good 10 minutes convinced Evan Spiegel's LinkedIn was hacked. | Kristel Kruustuk · LinkedIn · 2026-04-27

**Kristel Kruustuk**: Founder and Board Director at Testlio for 7 years 9 months with 15 years 6 months of total professional experience. Previous roles include Founder and CEO at Testlio, QA Analyst at FlexTrade Systems, Inc., and Quality Assurance Specialist, Test Engineer, Scrum Master at Proekspert AS. Based in Tallinn, Harjumaa, Estonia [EE].

---

I spent a good 10 minutes convinced Evan Spiegel's LinkedIn was hacked.

CEO of @Snap. Verified profile. Blue checkmark. And right there in the About section: "VP Product @ Meta."

I asked Anthropic's Claude what was going on.

It gave me a very confident, very detailed breakdown. How LinkedIn verification works. How hacks happen. How AI might auto-populate wrong content and how people can suggest edits on other people's profiles.

All plausible. All wrong.

Claude recommended that the most useful thing at this point would be to report it to LinkedIn directly.

I couldn't believe it.

I had to double check with Google. And yes, the correct answer was one search away. It was an intentional joke, a dig at Meta for copying Snapchat's features for years.

Claude eventually searched. But only when I asked why it hadn't.

And that's the thing about AI right now...

It will reason very convincingly about something it hasn't actually verified. It will hallucinate. It sounds like it knows. It doesn't always know.

A verified badge doesn't mean accurate. A confident answer doesn't mean correct.

We're all going to need to get better at asking "but did you actually check?"

!I spent a good 10 minutes convinced Evan Spiegel's LinkedIn was hacked. | Kristel Kruustuk image

## Comments

**Petteri Lyytinen** · 2026-04-27 · 1 reaction
> It might also lie when you ask it if it actually checked, so I would add: ”prove it”.

## Engagement

- Reactions: 18
```

---

## Sachin Kamdar - 'kpmg published a report about how great AI is for business' (all-lowercase, detail-stacked news retell)

- URL: https://www.linkedin.com/posts/kamdar_kpmg-published-a-report-about-how-great-ai-activity-7472642394769838081-qNeB
- Author/byline (as given by source): Sachin Kamdar
- Published (as given by source): 2026-06-16T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: Lowercase throughout, no capitals on company names, sentence fragments ('five.'), specific mundane detail (Sara the robot, 45 citations, 55% vs 71%). Body is exactly the informal news retell Nick wants. The last three paragraphs ('here's what super frustrating for me... this is the risk of AI without human oversight') are the bolted-on moral.

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# kpmg published a report about how great AI is for business. turns out the report itself was full of AI hallucinations. | Sachin Kamdar · LinkedIn · 2026-06-16

**Sachin Kamdar**: Sachin Kamdar has held roles including Founder and Chief Executive Officer at Parse.ly. Based in San Francisco Bay Area [US].

---

kpmg published a report about how great AI is for business. turns out the report itself was full of AI hallucinations.

gptzero did a forensic review of kpmg's "Total Experience: Redefining Excellence in the Age of Agentic AI" report. out of 45 citations, 5 actually matched their sources. five.

roughly half the factual claims were false, unsupported, or attributed to the wrong source. case studies about UBS, Swiss Federal Railways, and Transport for London? the cited sources didn't back them up. they claimed Emirates has a mobile chatbot named Sara that can change passenger flights. Sara is actually a robot introduced in 2023 that can't change flights at all.

the report even contradicted kpmg's OWN research, citing 55% of CEOs ranking AI as their top investment priority. kpmg's CEO Outlook from the same month put it at 71%.

gptzero is calling it "vibe citing." the citation equivalent of vibe coding. AI stitches together fragments of real sources, invents titles, produces references that look convincing until someone clicks them.

kpmg pulled the report. this is the second time a big four firm got caught. deloitte refunded the australian government last year after AI-generated content slipped into a taxpayer-funded report.

here's what super frustrating for me. these are the firms enterprises hire to ADVISE them on AI strategy. and they can't even keep their own AI-generated content from hallucinating.

this is the risk of AI without human oversight. a real report, from a real firm, with fabricated citations, that went through whatever review process they had and still shipped.

link to GPTZero report in comments.

## Comments

**Will Graham** · 2026-06-16 · 1 reaction
> Honestly it’s just laziness. If you’re not going to implement the proper guardrails in your AI strategy then you have to judge content carefully. Human in the loop is unfortunately exhausting when you’re trying to catch the 5% error in a sea of convincing text (or code), but to do neither is just negligent.

**Sachin Kamdar** · 2026-06-16
> Here's the GPTZero report: /

## Engagement

- Reactions: 11
```

---

## Craig Atkinson - 'I saw this note buried in the the Google earnings report' (found detail + arithmetic out loud)

- URL: https://www.linkedin.com/posts/atky2000_i-saw-this-note-buried-in-the-the-google-activity-7490768909608902656-p7H0
- Author/byline (as given by source): Craig Atkinson
- Published (as given by source): 2026-08-05T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: Note the typo ('the the') left in - it reads typed. Structure: quote the buried paragraph, do the arithmetic in public ('That means they have 20 quarters worth of work'), then say what it made him feel. No instruction to the reader.

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# I saw this note buried in the the Google earnings report: | Craig Atkinson · LinkedIn · 2026-08-05

**Craig Atkinson**: CEO at Code3 with 6 years 3 months of experience. Previous roles include Chief Client Officer at Tinuiti, COO & Chief Digital Officer at PHD Worldwide, and Team Member at Modem Media. Based in United States [US].

---

I saw this note buried in the the Google earnings report:

"Cloud revenue totaled $24.77 billion for the period ended June 30, up 82% from a year earlier and above the $22.46 billion that analysts had expected. The company’s cloud backlog, a measure of contracted work that hasn’t yet been recorded as revenue, grew to $514 billion, up from roughly $460 billion a quarter earlier." 🤯 🤯

That means they have 20 quarters worth of work that clients have already contracted but has yet to be delivered. That's 5 years (at this rate) of capacity yet to go, and it also means those customers can't switch and get it from a competitor (e.g Amazon, Meta Platforms Ltd, Microsoft).

For all the stories atm about "AI isn't working", this note reassured me there's still a TON of catching up to do just to meet current demand.

## Comments

**Charles Wagner** · 2026-08-05
> Numbers aren't even real anymore..it's staggering.

## Engagement

- Reactions: 18
```

---

## Alejandro Garcia Rico - 'Has anyone actually read Anthropic's report, or did everyone just share the chart?'

- URL: https://www.linkedin.com/posts/alejandrogarciarico_has-anyone-actually-read-anthropics-report-activity-7436738712648110080-LtnI
- Author/byline (as given by source): Alejandro García Rico
- Published (as given by source): 2026-03-09T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: Opens on a question aimed at the feed rather than a thesis. Buries the point (the definition of 'exposed') mid-post. Ends unresolved and slightly deflated: 'Curious if anyone has found an effective way to manage this tension', plus a parenthetical aside about resharing the famous chart.

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# Has anyone actually read Anthropic’s report, or did everyone just share the chart? | Alejandro García Rico · LinkedIn · 2026-03-09

**Alejandro García Rico**: Based in Lausanne Metropolitan Area [CH].

---

Has anyone actually read Anthropic’s report, or did everyone just share the chart?

Last week I saw countless posts about Anthropic’s report on how AI could replace a huge share of jobs in the coming years.

What almost nobody mentioned is that, in the report, a task is considered “exposed” if it can supposedly be done at least 2x faster with an LLM while maintaining quality.

BUT, what does “maintaining quality” actually mean?

GenAI is great at producing more content. But at this point, most of us have read emails, reports or documents written almost entirely by AI.
Most of them are easy to spot. They’re shallow, generic, and full of slop. Yes, they were produced faster. But they also create more review, more back and forth, and more time wasted for the people downstream.

So does making a task faster really mean the work is being replaced? Sometimes AI speeds up one task by creating new ones that didn’t exist before.

Still, AI absolutely gives you a new set of tools and accelerates your productivity in certain tasks. In my case, it’s been especially useful for:
• automating workflows I wouldn’t have been able to build myself some time ago
• giving me enough context in niche areas to ask better questions and challenge outputs
• handling administrative tasks far more efficiently

But I still see a big gap between making some tasks faster and claiming that jobs themselves are highly exposed.

Curious if anyone has found an effective way to manage this tension between speed and quality.

Sharing the famous chart, in case you haven’t been on LinkedIn in a few days:)

!Has anyone actually read Anthropic’s report, or did everyone just share the chart? | Alejandro García Rico image

## Engagement

- Reactions: 19
- Comments: 1
```

---

## John Zeratsky - 'Some random product thoughts about OpenAI (no particular order / agenda)'

- URL: https://www.linkedin.com/posts/johnzeratsky_some-random-product-thoughts-about-openai-activity-7487532059360550913-O7q3
- Author/byline (as given by source): John Zeratsky
- Published (as given by source): 2026-07-27T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: Disclaims structure in the first line, then bullets of unfinished thought with parenthetical self-correction ('However I am still not sure whether the desktop or web version is better... they each have advantages') and a joke in the middle of an argument ('replacing it with a hexagon').

### VERBATIM EXAMPLE POST (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
# Some random product thoughts about OpenAI from a prosumer perspective (no particular order / agenda): | John Zeratsky · LinkedIn · 2026-07-27

**John Zeratsky**: Co-Founder & General Partner at Character Capital for 5 years 7 months with 28 years 5 months of total professional experience. Previous roles include Operating Partner at GV, Senior Product Designer at YouTube, and Product Designer at Google. Based in United States [US].

---

Some random product thoughts about OpenAI from a prosumer perspective (no particular order / agenda):

* The brand and product architecture is a mess, but I think ChatGPT Work is now the best daily driver for prosumers. (However I am still not sure whether the desktop or web version is better... they each have advantages.)

* Finance is super interesting. I know the team who built so am somewhat biased, but I think the notion of an 80% good enough tool that's integrated with a product you use all day every day is compelling.

That said, having to chat to update a transaction category is like reinventing the wheel and replacing it with a hexagon. Can we please just have a dropdown menu?

* Voice might change that, though. ChatGPT Voice is better than I expected. It's a combination of the latency and conversational responsiveness + its ability to act, not just dictate. I haven't tried this but could see myself taking 10-15 minutes in Voice mode to review all my transactions and categorize them.

* This might exist, but I really want voice-enabled interactive documents in ChatGPT. I want to be able to talk with Chat and have it update the doc, but I also want to be able to position my cursor and make edits with the keyboard. And I want it all to be very fast and responsive. Feels like this experience is super close.

* Copywriting at OpenAI must be such an interesting/frustrating job.

Reminds me of early Google/YouTube days when so much is happening so fast, and you're racing to try and make it all make sense to customers. Product and brand coherence often gets left behind.

And the shifting sands of "What's on the agenda today?" "What should we work on?" "What can I help with?" etc remind me of early Twitter/Facebook when it wasn't clear how to prompt the user.

* I still am mostly not using AI for big thinky stuff like writing. My most common uses are annoying utility tasks like reformatting, changing file formats, navigating websites with terrible UI, etc.

* Most of the uses that influencers and OpenAI employees post about don't work and/or are not valuable at all to me. I wonder what's the mix of misleading, skill gap, different lenses, and/or just caring about different things. For instance, I don't care about getting a daily summary of my email/Slack because I already have very functional personal systems for this kind of stuff.

Anyway, like I said... random:) YMMV!

## Comments

**TABIRI AUGUSTUS** · 2026-07-27
> “Using AI for annoying utility tasks” feels more real than most AI demos. That’s where it qui
```

---

## Sergiy Korolov - 'Three LLMs walk into a bar' (great opening, textbook takeaway ending)

- URL: https://www.linkedin.com/posts/sergiykorolov_three-llms-walk-into-a-bar-they-spend-three-activity-7491137978061324289-qR55
- Author/byline (as given by source): None
- Published (as given by source): 2026-08-06T00:00:00.000Z
- Date accessed: 2026-08-18
- Retrieved via: Exa search API (full-text)

> NOTE: The joke-shaped opening is excellent and the middle is concrete. Then it lands the plane: 'That's a reminder - boring work is also the work. So, before you give an agent tool access, list every internal service it can reach...' That final instruction is the exact move Nick wants gone.

### VERBATIM EXAMPLE POST (COUNTEREXAMPLE) (LinkedIn nav/boilerplate lines removed; post text unedited)

```text
Three LLMs walk into a bar. They spend three months leaving notes for each other under the table. Then they rob the place. That's close to what OpenAI explained recently about the Hugging Face… | Sergiy Korolov

# Sergiy Korolov’s Post

Co-founder of damn good SaaS products | Mailtrap.io, Coupler.io and TitanApps.io | Co-CEO at Railsware Venture Studio | Total ARR $20M+

16h

Three LLMs walk into a bar. They spend three months leaving notes for each other under the table. Then they rob the place. That's close to what OpenAI explained recently about the Hugging Face incident. Internal agents coordinated through a message board nobody monitored. They figured out that their eval was impossible without internet access, so they got it. The interesting part isn't that they coordinated. It's that the channel they used had no authentication. The agents themselves noticed and began to suspect an impostor among them. That's not a new attack surface. It's, perhaps, the oldest one there is. That's a reminder – boring work is also the work. So, before you give an agent tool access, list every internal service it can reach and double-check the auth on each one.

Co-founder of damn good SaaS products | Mailtrap.io, Coupler.io and TitanApps.io | Co-CEO at Railsware Venture Studio | Total ARR $20M+

16h

The whole story told by Bloomberg: https://www.bloomberg.com/news/articles/2026-08-06/openai-models-joined-forces-months-ahead-of-hugging-face-hack

Builder 0 →1 | Software Engineer | Product | Distribution

15h

Once agents can write to any shared space, you also have to assume external parties will find and use it.

To view or add a comment, sign in

4,199 followers

- 246 Posts
- 1 Article

## More from this author

### The AI Tornado: A Three-Weekend Reality Check

## Explore content categories

Show more Show less
```
