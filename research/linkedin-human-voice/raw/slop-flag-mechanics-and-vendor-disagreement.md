# RAW: How the flag actually works in the UI + the vendor disagreement on how much of LinkedIn is AI

Date accessed for all: 2026-08-18. Retrieved via Exa /contents livecrawl.

## Sources in this file

1. The Verge, Jay Peters, "LinkedIn actually adds a 'seems like AI slop' button", 2026-07-30 18:43:26 UTC
   https://www.theverge.com/ai-artificial-intelligence/973384/linkedin-seems-like-ai-slop-button
   Tier: reported journalism WITH a first-hand UI observation, which is the useful bit:
   "I'm currently seeing the new report button in the three-dots menu on posts. When I click
   it, LinkedIn hides the post and shows a message thanking me for my feedback."

2. Laura Lorenzetti (VP and Executive Editor, LinkedIn Global Editorial), LinkedIn post,
   2026-07-31 14:06:01 UTC
   https://www.linkedin.com/posts/laura-lorenzetti_getting-great-original-authentic-content-activity-7488958150302216192--eyM
   Tier: PLATFORM STATEMENT. Two facts not in the CPO post:
   - the flag is reachable via "the 'x' button on top right of a post" (note: this conflicts
     with the three-dots menu location reported by The Verge, CNET and Originality.ai; both
     entry points may exist, or the rollout may vary. NOT RESOLVED)
   - "This is a private action (the author won't get a notification that you flagged it)."
     That is the platform confirming the flag is invisible to the author at the moment of
     flagging; the analytics-dashboard signal is a separate, still-only-"tested" feature.

3. Forbes, Jodie Cook, "What LinkedIn's AI Slop Crackdown Means For Your Posts", 2026-08-10
   https://www.forbes.com/sites/jodiecook/2026/08/10/what-linkedins-ai-slop-crackdown-means-for-your-posts/
   Tier: trade commentary, Forbes CONTRIBUTOR (the page itself says "Forbes contributors publish
   independent expert analyses"). Only the AI-generated summary block was retrievable; the body
   was behind the fetch. Its claim "Posts flagged as AI slop will suffer reduced reach" is
   consistent with the LinkedIn spokesperson quote in slop-press-techcrunch-startupscouk.md but
   adds no independent sourcing. COULD NOT VERIFY the article body.

4. Originality.AI, "LinkedIn AI Content Study: 81% of Long-Form Posts Are Likely AI",
   2026-07-30 21:21:40 UTC
   https://originality.ai/blog/ai-content-published-linkedin (reached via
   https://originality.ai/blog/linkedin-ai-study-engagement, which redirects)
   Tier: VENDOR SELF-MEASUREMENT, and the weakest source in this directory. Originality.ai sells
   an AI detector; the post carries its own disclosure that "significant AI editing on the post
   was used". Included ONLY to record the disagreement below.

## THE DISAGREEMENT worth carrying forward

Two detector vendors, same platform, same period, wildly different numbers:

- Pangram (Feed Scanner, opt-in browser-extension sample, July 2026): "just over 40% of longform
  posts flagging as fully AI-generated"; LinkedIn posts made up "just under two-thirds of all AI
  content we flagged".
- Originality.ai (repeatable public search, 5,000 posts of 100+ words across nine topics, July
  2026): "81.2%" Likely AI, at a "15% AI Allowance" threshold.

Different sampling frames (what real users see vs public search results), different thresholds,
different labels ("fully AI-generated" vs "Likely AI"). Neither is independently replicated.
The honest read is that a large and rising share of long-form LinkedIn posts is machine-written
and that no trustworthy point estimate exists. Do not quote either number as fact.

Originality.ai's own framing of the difference, verbatim:
  "Our repeatable search method is built to track change over time. Feed-based studies measure
   what participating users see and can give more weight to popular posts. Our sample is
   narrower, but easier to compare consistently from month to month."

Their reported trend line, verbatim: "Likely AI content has moved from roughly half of sampled
long-form posts in late 2024 to well over three-quarters today."

A separate figure appears in the comments captured under the Lorenzetti post below, from
Originality.ai's founder: "2022: 0.6% ... 2023: 27.3% ... 2024: 47.4% ... 2025: 67.6% ...
2026 (Jan-July): 80.3% ... (over 16k posts analyzed)". Same vendor, same caveats.

## One more UI detail worth noting, from the Originality.ai post

"It appears inside LinkedIn's three-dot menu, beside 'Not interested' and 'Report post' or
'Report ad'." — which matters because the LinkedIn spokesperson's own description of the reach
penalty (in slop-press-techcrunch-startupscouk.md) was that it is "similar to what happens if
someone responds 'not interested' to a post". The button sits next to, and reportedly behaves
like, the existing not-interested control.

## Verbatim captures follow

=== URL: https://www.theverge.com/ai-artificial-intelligence/973384/linkedin-seems-like-ai-slop-button
=== TITLE: LinkedIn actually adds a ‘seems like AI slop’ button | The Verge
=== PUBLISHED: 2026-07-30T18:43:26.000Z
=== AUTHOR: Jay Peters
LinkedIn actually adds a ‘seems like AI slop’ button | The Verge

The homepageThe VergeThe Verge logo.

The homepageThe VergeThe Verge logo.

AI

News

Tech

# LinkedIn actually adds a ‘seems like AI slop’ button

You can now report posts that don’t feel human-written.

You can now report posts that don’t feel human-written.

by Jay Peters

Jul 30, 2026, 6:43 PM UTC

Image: LinkedIn

Jay Peters

is a senior reporter covering technology, gaming, and more. He joined The Verge in 2019 after nearly two years at Techmeme.

A lot of content on LinkedIn might seem like AI slop, and now, you’ll be able to report those posts. As part of a series of updates to reduce the volume of AI slop on the platform, LinkedIn is introducing an actual button that lets you flag a post as something that “Seems like AI slop.”

The new feature is part of a broader push to reduce the volume of apparent AI slop on the platform. AI detector Pangram recently found that 41 percent of longform LinkedIn posts were flagged as being completely generated by AI, as reported by 404Media.

“AI slop is a top priority for all of us,” chief product officer Hari Srinivasan says in a post. “We really care about this.” In addition to the button to report a post as seemingly being AI-generated, LinkedIn is also ramping up new classifiers to identify “if a post is AI-slop or generally low-quality content,” which will “reduce the amount of AI slop you might see in suggested content and content from outside your network.”

I’m currently seeing the new report button in the three-dots menu on posts. When I click it, LinkedIn hides the post and shows a message thanking me for my feedback.

The new button will help LinkedIn “tune our models and make better feeds,” Srinivasan says. The company is also testing a way to show people that other users feel their posts come across as inauthentic or that they include heavy use of AI.

In addition, LinkedIn is removing a feature that used AI to “enhance” a post and will replace it with a “feature that proofreads your words, but does not change your voice,” according to Srinivasan.

Follow topics and authors from this story to see more like this in your personalized homepage feed and to receive email updates.

Jay Peters

AI

Microsoft

News

Tech

## Most Popular

Most Popular

Marvel reveals the new X-Men cast, including Inde Navarrette and Adam Driver

We’re reaching peak camera with the Sony A7R VI

I finally found a robot lawnmower I’d trust with my yard

This is Instagram’s new logo

1. Xteink’s tiny e-readers are getting access to free books through Libby

## The Verge Daily

A free daily digest of the news that matters most.

Email (required)

Sign Up

By submitting your email, you agree to our Terms and Privacy Notice. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.

Advertiser Content FromThis is the title for the native ad

## More in AI

Mark Zuckerberg has an Instagzam

You can now turn off Google Gemini’s visible watermarks

Apple trained its own AI model for China with help from Alibaba

Microsoft’s Clippy-like Mico character is no longer the face of Copilot

OpenAI is losing its second executive this week

Suno is trying to look more like a real music production tool

Mark Zuckerberg has an Instagzam

David PierceAug 14

You can now turn off Google Gemini’s visible watermarks

Emma RothAug 14

Apple trained its own AI model for China with help from Alibaba

Robert HartAug 14

Microsoft’s Clippy-like Mico character is no longer the face of Copilot

Emma RothAug 13

OpenAI is losing its second executive this week

Jay PetersAug 13

Suno is trying to look more like a real music production tool

Terrence O'BrienAug 13

Advertiser Content FromThis is the title for the native ad

## Top Stories

12:00 PM UTC

We’re reaching peak camera with the Sony A7R VI

11:00 AM UTC

When housing is unaffordable, this artist’s device makes pedaling harder

5:00 PM UTC

Don’t overlook Elektron’s budget electronic music instruments

3:00 PM UTC

Switched on Pop’s Nate Sloan and Charlie Harding love fresh vegetables and guitar pedals

Aug 14

A RAMageddon guide to back-to-school laptop shopping

############################################

=== URL: https://www.linkedin.com/posts/laura-lorenzetti_getting-great-original-authentic-content-activity-7488958150302216192--eyM
=== TITLE: Flag AI Slop on Our Platform | Laura Lorenzetti posted on the topic | LinkedIn
=== PUBLISHED: 2026-07-31T14:06:01.000Z
=== AUTHOR: n/a
Flag AI Slop on Our Platform | Laura Lorenzetti posted on the topic | LinkedIn

Agree & Join LinkedIn

By clicking Continue to join or sign in, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.

# Flag AI Slop on Our Platform

VP and Executive Editor, LinkedIn Global Editorial

1w

Getting great, original, authentic content is at the heart of what makes this platform valuable. We're continuing to target AI slop. We rolled out a way for you to flag when a post may cross the line for you by hitting the "x" button on top right of a post. This is a private action (the author won't get a notification that you flagged it). It sends a signal to our product teams for what members consider authentic or not -- and when it crosses over into AI slop.

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

🟦 🟥 AI Trainer & Digital Technologies - S’informer, se former, apprendre, vérifier ce qui est encore vrai et désapprendre quand c’est nécessaire. Certifications (U.S) multiples en IA

1w

Please ! I think it is imperative for LinkedIn to review its automated moderation system. This week alone, I submitted five reports under the "Prohibited products and services" category. More specifically, they involved people offering to automate content creation and AI-powered outreach. Every single report received the same response: "After reviewing the post again, we determined that it does not violate our Professional Community Policies." I'm not going to mince my words: this is nonsense.

Reply 1 Reaction 2 Reactions

Global Economist | Harvard PhD | Author of The Best Decisions You’ll Ever Make (Substack and upcoming book) and the High Yield Economics newsletter (free on LinkedIn) | Early-Stage Investor

1w

Hi Laura, this is great – will you be doing the same for comments? I'm getting so many that just offer a glib summary of what I wrote. Thanks.

Reply 1 Reaction 2 Reactions

Executive Positioning & Outplacement Partner, Eliminating Personal Blanding™: 7K+ Profiles & 4K+ Resumes Built for AI Discoverability & Human Understanding, LinkedIn & AI Beta Tester, Turning Talent into Market Relevance

1w

A welcomes addition Laura Lorenzetti and very excited about the Proofreader feature that Hari Srinivasan mentions in his recent post. Go Grand, Never Bland, Brand to Land & #KeepRockingLinkedIn! Kevin On a Mission to Eliminate Organizational & Personal Blanding™

Salesman | City farmer | Selling peanut butter

1w

Yeah, it's interesting move Let's see if it pays up

Former KPMG Grants Management advisory associate (state and local government)|Searching for my next role|Learning how to become a better writer and a better storyteller with each new post that comes to mind

1w

Great post Laura! Thanks for sharing!

To view or add a comment, sign in

Reporter at CNET covering artificial intelligence

1w

If you’re tired of reading obviously AI-generated LinkedIn posts about the magic of B2B sales, there’s hope: LinkedIn on Thursday released a new tool that allows you to report posts as “Seems like AI slop.” AI slop is everywhere online, and all of you here know LinkedIn is no exception. I'm hopeful this new tool can help keep all our feeds a little bit more human. To report a post, tap the three dots next to it and select "Seems like AI slop" from the dropdown list. Read more on CNET: https://lnkd.in/eBm4eN3T#linkedin#aislop#artificialintelligence

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

To view or add a comment, sign in

Tech solutions for climate, health, education and people

1w

Panic mode is on at LinkedIn HQ. Let's bring back discrimination by language skill. Non-native speakers had finally gained the ability to write clean, idiomatic posts - apparently that was too much equality! First, automation is not necessarily an enemy of a social network. Do you seriously want hundreds of millions of people to find one another to cooperate by hand? Second, I know how you'll respond: LinkedIn uses advanced AI to help the right people meet here. This is the classic argument for any government monopoly: guns are dangerous, so ONLY I get to use them. Third, guys, look at your UI. It gives me bucketfuls of second-hand embarrassment. AI slop is your top priority? UI crap should be! Of all social networks, LinkedIn's UI is the slowest, clunkiest and most disrespectful to its users. The UI doesn't need to be your problem though, someone could have developed (with AI!) a nice third-party client... oh wait, they may be banned for it! Fourth, THANK YOU for promising to 'test' showing authors, after the damage is done, that their posts were marked as AI slop. Very kind of you to learn from our content, keep your own conclusions to yourselves, and tell us instead what the users your algorithm happened to show it to thought of it. How about letting me know if my content is likely to be marked AI slop BEFORE I post? Not in your plans? I know why. We all know why. The best course of action for you is to quietly pull this "feature" and get back to fixing the bugs and sluggishness of your UI. My premium subscription has never been as close to cancellation as it is today.

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

To view or add a comment, sign in

1w

"AI slop is a top priority" says LinkedIn Chief Product Officer! LinkedIn fully embraced AI like no other user-generated content platform and has had the most AI content on it out of any we have studied. Now they are adding features and planning to fight it. Great! How much AI is there on LinkedIn? We updated our study that goes back to 2022 and in July 2026 over 80% of LinkedIn posts were Likely AI! 2022: 0.6% - less than 1% 2023: 27.3% - more than 1 in 4 2024: 47.4% - nearly half 2025: 67.6% - about two-thirds 2026 (Jan–July): 80.3% - roughly 4 in 5 (over 16k posts analyzed) Updated study in the first comment.

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

To view or add a comment, sign in

EMBA-Global 2023 | Ex-LinkedIn/Oracle/Ogilvy

1w

"Let AI do it. Hand it over to AI." I've heard enough of this. AI is a great helper, but please keep human creativity alive. Leave some room for humans to think. Couldn't support this move more! 👏 Go check the comments under the original post. I'm all for using AI to work faster, however NOT for replacing thinking. 🙃

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

To view or add a comment, sign in

Consumes huge amounts of water, bothers the neighbors, and is confidently wrong.

1w

Members on LinkedIn want to hear from one another, not from machines. So we're taking steps to make sure that every post you see has human insight behind it. It's totally okay to edit with AI, but we are testing new ways to help us identify when a post isn't adding to the conversation.

Chief Product Officer, LinkedIn Ecosystem

1w

AI slop is a top priority for all of us. We really care about this. People come to LinkedIn to connect with real people and share their real perspectives, ideas and expertise. Here are a few more changes to keep it that way. - We continue to improve and invest in our automation defenses. On comments alone, everyday we are now catching hundreds of thousands of automated comment attempts, and have blocked billions of other automation attempts (posting at scale, slop) in the last couple months alone. - We are ramping up a series of new and improved classifiers that identify if a post is AI-slop or generally low-quality content. This will reduce the amount of AI slop you might see in suggested content and content from outside your network. - We are ramping the ability for members to tell us if they believe a post or comment seems like AI slop. Slop is hard to define and the definition changes; this lets us tune our models and make better feeds. - For anyone who shares content, we will test a way to privately flag, in your analytics dashboard, when members feel your post may have come off as inauthentic or heavy use of AI. This approach is based on two learnings. First, AI and slop are not the same thing; many people refine thoughts with AI, and we believe they want to know when they sound inauthentic. Second, we want members to get feedback from real humans on what sounds authentic - not just have an AI detector review it and get it wrong. - We asked ourselves why do people post with AI anyway? The answer is LinkedIn isn’t a one-word kind of place and they feel more confident running their posts through AI. We’re taking this learning, removing the ‘enhance your post’ feature you see when you write a post or message & replacing with a feature that proofreads your words, but does not change your voice. - Finally, we continue to expand profile & pages verification so members know who they are connecting with and who is writing the content they are reading. You’ll also be able to block any comments from Company pages you no longer want to see. There is more to come. Will do a better job keeping you all updated too.

To view or add a comment, sign in

💡Helping leaders and others drive powerful thought leadership in the AI era. Obsessed with how to do it on LinkedIn💡

1w

The battle against Slop Cannons continues. The great news is buried in this post from LinkedIn's Chief Product Officer, so let me pull it out for you: "We’

############################################

=== URL: https://originality.ai/blog/linkedin-ai-study-engagement
=== TITLE: LinkedIn AI Content Study: 81% of Long-Form Posts Are Likely AI - “Seems Like AI Slop” Feature Rolling Out – Originality.AI
=== PUBLISHED: 2026-07-30T21:21:40.000Z
=== AUTHOR: n/a
LinkedIn AI Content Study: 81% of Long-Form Posts Are Likely AI - “Seems Like AI Slop” Feature Rolling Out – Originality.AI

# LinkedIn AI Content Study: 81% of Long-Form Posts Are Likely AI - “Seems Like AI Slop” Feature Rolling Out

### 81.2% of 5,000 July posts were Likely AI as LinkedIn begins rolling out a native “Seems Like AI Slop” feedback option.

This update continues our study of AI-written content on LinkedIn. We use the same nine topics, 100-word minimum and classification method to track how AI content changes over time.

In July 2026, we analyzed 5,000 public LinkedIn posts across nine topics. More than four in five (81.2%) were classified as Likely AI.

LinkedIn is also rolling out a native “Seems like AI slop” feedback option, giving members a direct way to flag posts and ads that appear AI-generated.

## Summary of Key Findings

1. 81.2% of July posts were Likely AI. The expanded dataset included 5,000 public posts of at least 100 words.
2. LinkedIn has confirmed the “Seems like AI slop” rollout. The company says “AI Slop is a top priority” and is ramping up the ability for members to flag posts and comments.

## Methodology

This is the same continuing study: nine topics, posts of at least 100 words, and Originality.ai’s 15% AI Allowance.

For July, we expanded the dataset to 5,000 posts. We collected 10 pages of results from 90 topic-and-date searches, then removed posts with the wrong date, under 100 words, or duplicates. We selected the final 5,000 before checking any AI scores.

The chart uses the full July dataset: 81.2% Likely AI across 5,000 posts.

This covers public LinkedIn posts found through our searches, not every LinkedIn post or anyone’s personal feed.

## How This Study Differs From Feed-Based Estimates

Our repeatable search method is built to track change over time. Feed-based studies measure what participating users see and can give more weight to popular posts. Our sample is narrower, but easier to compare consistently from month to month.

## More Than 4 in 5 July Posts Were Likely AI

The earlier study ended with over half of long-form posts classified as Likely AI. In the much larger July analysis, 4,061 of 5,000 posts were Likely AI: 81.2%.

Likely AI content has moved from roughly half of sampled long-form posts in late 2024 to well over three-quarters today.

‍

## LinkedIn Confirms the “Seems Like AI Slop” Rollout

LinkedIn is rolling out a native “Seems like AI slop” option for posts and ads. It appears inside LinkedIn’s three-dot menu, beside “Not interested” and “Report post” or “Report ad.”

### What we know about the rollout:

- Linkedin Confirm the Rollout: Hari Srinivasan, LinkedIn’s Chief Product Officer, says AI slop is “a top priority” and that LinkedIn is “ramping the ability for members to tell us” when a post or comment seems like AI slop. Read LinkedIn’s update.
- The option is built into LinkedIn. It appears inside LinkedIn’s own three-dot menu.
- LinkedIn has confirmed the rollout, although the company has not said whether the option is available globally.
- 404 Media independently reproduced it. Selecting the option hid the post for its reporter and said the feedback would help improve the feed.
- It fits LinkedIn’s feed policy. LinkedIn says it is reducing distribution of generic, repetitive content that appears AI-generated.

Sources and examples: 404 Media, LinkedIn’s feed policy, the Reddit rollout discussion, and posts from Navneet Kaur, Nicole Mezzasalma, Nick Bennett, Emmet Ó Briain and Matt Jones.

## Conclusion

More than four in five LinkedIn posts in our larger July sample were Likely AI, continuing the upward trend.

LinkedIn’s new “Seems like AI slop” option shows that the platform is beginning to respond directly.

AI disclosure - The analysis was managed and reviewed by humans and significant AI editing on the post was used to help summarize the findings.

### Jonathan Gillham

View All Posts By Author

Founder / CEO of Originality.ai I have been involved in the SEO and Content Marketing world for over a decade. My career started with a portfolio of content sites, recently I sold 2 content marketing agencies and I am the Co-Founder of MotionInvest.com, the leading place to buy and sell content websites. Through these experiences I understand what web publishers need when it comes to verifying content is original. I am not For or Against AI content, I think it has a place in everyones content strategy. However, I believe you as the publisher should be the one making the decision on when to use AI content. Our Originality checking tool has been built with serious web publishers in mind!

## More From The Blog

##### AI Studies

### Politician Reading AI Residue Reveals a Larger AI Pattern

During a 34-minute speech on June 9, 2026, Bill Oliver, a New Brunswick politician, appeared to read AI Residue left in his printed speech aloud in the Legislative Assembly.

##### AI Studies

### 1 in 5 Fitness Guides on Pinterest Is Likely AI

Is the fitness guide you’re reading on Pinterest real or likely AI? We studied 1,250 fitness guides on Pinterest to find out!

##### AI Studies

### Is Kimi K3 Content Detectable? + Compare Kimi K3 Output Word Counts vs. Leading LLMs

Is Kimi K3 Content Detectable? We ran a study on the recently released Kimi K3 to find out! Plus, see how Kimi K3 outputs compare in word count to leading LLMs. These are our findings.

## Al Content Detector & Plagiarism Checker for Marketers and Writers

### Use our leading tools to ensure you can hit publish with integrity!

Try our AI Checker now!

AI & Plagiarism Detector for Serious Content Publishers

Originality.ai64 Hurontario StCollingwood, OntarioL9Y 2L6

Download our Chrome Extension

##### Tools

##### KNOWLEDGE BASE

##### Company

############################################

