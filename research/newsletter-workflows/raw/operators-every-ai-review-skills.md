# RAW: Katie Parrott / Kate Lee (Every) — AI review "skills" inside a real editorial production loop

- URLs:
  - https://every.to/working-overtime/my-editor-caught-me-sounding-like-ai-now-ai-catches-me-first
  - https://every.to/working-overtime/i-taught-claude-every-s-standards-it-taught-me-mine
  - https://every.to/context-window/editing-ai-writing
- Date accessed: 2026-08-18
- Published: Jun 8, 2026 (updated Jul 21, 2026); Aug 25, 2025 (updated Jul 16, 2026); Mar 18, 2026
  (updated Jul 10, 2026)
- What it is: PRIMARY, and the most on-lane set of sources for "how AI is used in a real editorial
  production loop and where operators say it reads as slop." Katie Parrott is a staff writer at
  Every (paid daily AI publication) who builds named review skills that run over her drafts before
  a human editor sees them. Kate Lee is Every's editor in chief; the third piece reports she "built
  a 400-rule style guide and fed it into a Claude project."
- IMPORTANT: pieces 1 and 2 are PARTIALLY PAYWALLED. Everything below is the free portion; the
  paywall teasers (reproduced) list what the paid remainder covers, including a downloadable
  "draft checker kit" of her skills on Every's GitHub.

## VERBATIM — "My Editor Caught Me Sounding Like AI. Now AI Catches Me First." (free portion)

```

Midjourney/Every illustration. 

By Katie ParrottWorking Overtime

Katie Parrott is a staff writer. She writes Working Overtime and contributes to Vibe Checks, Source Code, and Context Window.

Working Overtime

### My Editor Caught Me Sounding Like AI. Now AI Catches Me First.

Turning a list of my writing foibles into a skill that stops me from getting away with them

Katie Parrott

Jun 8, 2026 · 11 min readUpdated Jul 21, 2026

Listen

Link copied

15Like this post1

Was this newsletter forwarded to you? Sign up to get it in your inbox.

Before a recent one-on-one with Kate Lee, Every’s editor in chief, I opened our shared document and found a list of my own writing fails staring back at me. My drafts had picked up too many of the AI tells that both I—and you—know how to spot from across the room: the symmetrical sentence structures, the little rhetorical throat-clears, the phrases that sound profound on first pass but on closer inspection contain nothing but air, and those pesky sets of three. 

The worst part was that I should know better. I am the person at Every who writes about writing with AI while using AI to write about writing with AI. I have custom agents, style guides, editorial workflows, and an apparently bottomless appetite for turning every lesson into a system. And still, I had let the machine’s smoothness pass for my own judgment enough times that my editors felt the need to intervene.

After the meeting, I did what I generally do when I learn something new, embarrassing or otherwise: I baked it into documentation for my agents. I opened the notes, pulled out the patterns Kate had flagged, and listed them in a new skill called /guardrails, which turns any agent I write with into an exacting editorial specialist that keeps me honest.

I’ll never be completely done with /guardrails, or any of the review skills like it that I’ve built, because my human tics and tendencies will move around like a squirmy toddler. But I’d rather make new mistakes than keep repeating the old ones. Review skills are the mechanism by which I do that. They’re another form of editor, one that can catch a draft’s more annoying weak spots before they become a human editor’s problem. 

The start of my guardrails skill, where I’ve compiled all the particular ways that content I submit can fall below par. (All images courtesy of Katie Parrott.)

Writing with AI tends to be portrayed as a bargain: The machine does more, so the human does less. But in my experience—a microcosm of Every CEO Dan Shipper’s argument in “After Automation”—it changes what the human does instead of reducing the workload. I have to be clear about defining my standards so a model can understand them. That creates more work—but it helps me understand them better myself. 

Setting up reviews like /guardrails takes time, attention, and a certain comfort with a tool like Codex or Claude Code. But once the reviewers are in place and working, I can spend more of my time pushing the draft from good to great. My drafts are now much cleaner and my own preferences are less of a mystery to myself, because I’ve had to think and talk about them enough that they’ve worn new grooves into my brain. 

I’m going to show you a few of the reviewers I rely on and what goes into them (I’ll share a set on Every’s GitHub along with this piece). But it should serve as an example, not a blueprint; the special sauce of this process comes from setting and enforcing your own collection of style requirements. 

### Skills rule everything around me

In the beginning of any good guardrail system, there are skills. 

At the mechanical level, a skill is a Markdown file with instructions inside it. Practically, it’s a way of packaging judgment. When I invoke the guardrails skill, I am asking the model to read a draft through a set of lenses: Look for AI tells, vague claims, hedges, limp openings, and all the little ways a zombie draft can pass as finished without a pulse.

I’ve become fanatical about naming conventions. After all, skill names have to be sticky enough that you remember them when you need them—although this gets less true with every model release, as AI becomes better at deciding which tools it needs to do the job. Still, “assess narrative momentum” sounds like a task someone puts in a project management tool shortly before everyone involved loses the will to live. Instead of clinical descriptors, I’ve given my more editorial skills their own personas: Sorkin is a reviewer with a job. He wants to keep the piece walking and talking, not mired in unnecessary specifics. Similarly, Mom wants to know where a reader who’s not as AI-pilled as I am might get lost. Asshole wants to attack the weakest version of the argument, which is annoying because sometimes the weakest version of the argument is the one I wrote.

Each of these reviewers asks a different question. Together, they give me a way to pressure-test a draft before I hand it to a human editor whose attention I would prefer is spent on problems only a human editor can solve. Our brains belong on the piece’s angle, claim, storytelling, and audience fit. You know, the fun stuff, with some stakes attached. 

### Running the guardrail gauntlet

Here’s an image to give you a sense of what a typical final review looks like before I hand a piece to an editor: 

Become a paid subscriber to Every to unlock this piece and learn about:

- How Katie uses skills to review her draft before sending to an editor

- The exact skill Katie uses to catch bloat in a draft 

- How Katie uses a committee of reviewers to catch different aspects of style, from tension to humor 

- Plus: Download Katie’s draft checker kit from GitHub, including all of her skills 

Subscribe

```

## VERBATIM — "I Taught Claude Every's Standards. It Taught Me Mine." (free portion)

```
I Taught Claude Every’s Standards. It Taught Me Mine.

Midjourney/Every illustration.

By Katie ParrottWorking Overtime

Katie Parrott is a staff writer. She writes Working Overtime and contributes to Vibe Checks, Source Code, and Context Window.

Working Overtime

### I Taught Claude Every’s Standards. It Taught Me Mine.

To build Every's AI editor, I had to make our taste legible—starting with my own

Katie Parrott

Aug 25, 2025 · 10 min readUpdated Jul 16, 2026

Listen

Link copied

35Like this post1

Was this newsletter forwarded to you? Sign up to get it in your inbox.

The first time I pasted a draft of an essay I’d written into the AI Every editor and it told me, “Spark is in the right place,” I practically whispered, Thank God. 

After weeks of error messages and failed demos, that tiny seal of approval proved something I’d started to doubt: Maybe you really could teach a machine to spot what makes Every’s writing work.

The relief was technical—finally, a version that didn’t collapse the moment I touched it—but it was also personal. It felt almost like a pat on the head from a real-life editor. I knew exactly how the feedback was generated, based on the examples I’d chosen, the values I’d spelled out, and the rules I’d written down. Still, when the system returned its blessing, I felt proud.

Previously, I described the winding path to building Every’s AI editor from a technical perspective. This time, I want to talk about what it took to teach AI Every’s taste—collecting examples, writing down patterns, and translating our instincts into a playbook the system I set up as a Claude project could follow.

I was surprised by how clearly my own judgment came into focus once I tried to write it down for AI. When you can teach taste to a machine, you’re forced to make it legible for yourself. Some rules you already know; others only reveal themselves through explaining. The Claude project gave me the vessel, but I had to decide what belonged inside.

### 

### Vibe code your marketing page

Your small team should focus fully on what matters—building the next big product. Let Framer take care of your marketing page. Use the tool to vibe code a website that feels authentic to your brand, with all the tools you need including SEO optimization, built-in analytics, and localization. Spend more time on the things that will actually make a difference to your customers.

Use code EVERY2025 for a free month of Framer Pro

Want to sponsor Every? Click here.

### Before you can teach taste, you have to define it 

When I first taught an AI editor, the only writer it had to worry about was me. The version I built for my column, Working Overtime, was tuned to its quirks: Start with a problem I was having, use personal stakes to frame insight, surface a bigger cultural pattern, land on a sticky phrase. If my piece is missing one of these components, my editor will call it out. These rules made sense for me, but they didn’t belong in Every’s rulebook.

In order to adapt the editor so that it worked for the team, I had to change my relationship with my own opinions. It was no longer enough to encode what I personally liked or thought was good. I had to draw a line between my own preferences and Every’s values, deciding which instincts deserved to become rules that applied to everyone. I had to collect evidence beyond my own hunches: the essays CEO Dan Shipper had flagged as canonical, the ones the data told us our audience couldn’t stop reading, the pieces we all pointed to as “this is what Every sounds like.” Then I dropped those examples into ChatGPT (I migrated to Claude after the release of Opus 4, but we’re reaching back in time) and asked the model to tell me what it saw.

The results read like an X-ray of Every’s signature moves. Strong introductions followed a rhythm: the spark of the idea on top, stakes established within 150 words, a quick zoom out, then a thesis pointing forward. Abstraction worked best when grounded in detail. Endings didn’t recap what had come before; they reframed.

Some of this we already knew. We’d been workshopping headline-subheading-introduction alignment in editorial meetings for months, reviewing each published piece and talking through how each component drew the reader into the piece (or didn’t). But seeing those judgments summarized in the chat window turned instinct into something visible, structured, and transferable.

Patterns alone don’t make a voice. To capture Every’s, I wrote in the three principles no model was going to surface on its own: optimistic realism, intellectual generosity, and conversational authority. Here, I let my own judgment creep back in. I had certain opinions about what makes Every Every, and I wanted those values to be baked into the editor’s DNA. Optimistic realism keeps us from lapsing into cynicism. Intellectual generosity makes sure we argue in a way that invites people in, not pushes them out. Conversational authority reminds us that confidence can coexist with humility. Without those anchors, the rules risked describing a style, not a voice. Style is the “how”: the choices of syntax, rhythm, and imagery that shape the prose. Voice is the “why”: the convictions that give those stylistic choices meaning.

### How to boss a robot around

Patterns and values on paper were a start, but they didn’t mean much until I could teach the system how to use them. Models don’t understand a rule like “spark should be on top” unless you spell out what “spark” means, how to find it, and what to do when it’s buried. The next step was translating taste into instructions precise enough that an AI could enforce them...

Become a paid subscriber to Every to unlock this piece and learn about:

- 
How to translate editorial DNA into systematic instructions

- 
The five-phase structure that makes AI feedback actionable

- 
Why deliberate friction improves the editing process

- 
The human-AI division of labor

Upgrade to paid
```

## VERBATIM — Context Window: "Editing AI Writing" (Kate Lee podcast highlights + Eleanor Warnock essay)

```
Editing AI Writing 

Midjourney/Every illustration.

By Every StaffContext Window

Context Window

### Editing AI Writing 

Plus a new episode of the AI & I podcast with Every editor in chief Kate Lee

Every Staff

Mar 18, 2026 · 6 min readUpdated Jul 10, 2026

Listen

Link copied

1Like this post

Was this newsletter forwarded to you? Sign up to get it in your inbox.

### ‘AI & I’: How Every builds a writing team in the age of AI

Today, we’re releasing a new episode of our podcast AI & I. Dan Shipper sits down with Every’s editor in chief, Kate Lee, to discuss how she views AI as an editorial leader and how she uses it daily. Kate’s career has spanned a stint as a New Yorker-featured literary agent to roles at Medium, WeWork, and Stripe. 

Contrary to his “early adopter” persona, Dan classifies Kate as a “pragmatic knowledge worker,” someone open to AI, but who isn’t going to immediately change her workflow unless a tool makes her life better. 

Watch on X or YouTube, or listen on Spotify or Apple Podcasts to learn what tools have convinced Kate. You can also read the transcript. 

Here are the highlights: 

- 
AI adoption clicks when it solves a real pain. Kate’s AI “aha moment” was when she used an agent on the Atlas browser to handle a dreaded Notion setup for hiring. The AI gave her a first pass on candidates and handled the administrative work, which made it possible to hire for multiple roles even when she had hundreds of applicants and no human resources department. 

- 
Codifying taste into AI is the new editorial superpower. Kate built a 400-rule style guide and fed it into a Claude project so that writers and editors could check drafts with it before they reach her for a final check. Every piece arrives at Kate in better shape, freeing her to focus on whether a piece is the best it can be for Every rather than catching mechanical errors. 

- 
Small teams can now do what big teams did, but it requires a certain mindset. Every went from four to 20 people while dramatically expanding its offering. Kate emphasizes that the step change happened around late 2024 and early 2025 when more powerful models and tools like Claude Code and Cowork emerged. That growth is only possible if you’re willing to learn new workflows and learn from others, she says. 

Miss an episode? Catch up on Dan’s recent conversations with LinkedIn cofounder Reid Hoffman; the team that built Claude Code, Cat Wu and Boris Cherny; Vercel cofounder Guillermo Rauch; podcaster Dwarkesh Patel; and others, and learn how they use AI to think, create, and relate.

### The machine translation problem 

A friend recently translated a healthcare app into French. “It was the most painful work I’ve ever done,” she told me. Instead of asking for a full translation, the app’s creator gave her a machine-translated version to correct, arguing that it would cost less money. Given how poor the writing was, it would have been far quicker—and better—to translate the app from scratch.

I’ve felt the same way when I edit writing clearly generated with AI. Just like my translator friend, I often feel as if it would be easier to write it from scratch rather than trying to save it with an edit. 

Besides the tells (staccato, lists of three), AI-generated text is flimsy. Poke it just a bit—what do you really mean?—and it falls down. It is the opposite of what I call “bulletproof writing,” a style that was drilled into me as a financial reporter at the Wall Street Journal. Each word printed was scrutinized by tough editors and even tougher readers—so they had to be intentional. 

This could be avoided, or at least mitigated. Our staff writer Katie Parrott recently shared her process for using AI to write, and the most striking thing was how much work she does before drafting. She fed Claude examples of her writing, had it interview her about her preferences, and produced a style guide that lives inside a dedicated project. She treats the whole thing like a bonsai garden—she prunes old examples, adds new ones, and reruns the analysis. With this upfront investment, Claude has her DNA when she sits down to write. As someone who often edits Katie, I can tell the difference. The writing feels like her. Kate, our editor in chief, has also codified Every’s style guide in a Claude project that everyone can use, as she talks about in this week’s podcast. 

Reading matters, too. It teaches you what good writing is—something Katie also believes. So before you summarize an article with ChatGPT, think again. What do you miss when you skip the actual text? Study the structure, the argument. Steal it. 

Writing is still hard. Don’t let AI make you think it’s easy.—Eleanor Warnock
```
