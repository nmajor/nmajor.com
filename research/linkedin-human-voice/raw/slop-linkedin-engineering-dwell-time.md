# RAW: LinkedIn Engineering — "Leveraging Dwell Time to Improve Member Experiences on the LinkedIn Feed"

- URL: https://www.linkedin.com/blog/engineering/feed/leveraging-dwell-time-to-improve-member-experiences-on-the-linkedin-feed
- Publication: LinkedIn Engineering Blog (first party)
- Date published: the page itself carries no visible date in the fetched text. Exa's index
  records 2024-10-01, and a LinkedIn post by Mohit Kothari announcing this exact blog post
  (https://www.linkedin.com/posts/mrkothari_leveraging-dwell-time-to-improve-member-experiences-activity-7246902932674150400-dQag)
  is also indexed at 2024-10-01. The charts inside cover January 2024 to July 2024, which is
  consistent. COULD NOT VERIFY the exact publication date from the page itself.
- Date accessed: 2026-08-18
- Retrieved via: Exa /contents livecrawl
- Tier: PLATFORM ENGINEERING STATEMENT. This is LinkedIn describing its own production
  ranking system. It is the authoritative source on dwell time vs reactions and it is
  roughly two years old — later systems (LiRank, the 2026 sequential recommender) may have
  moved on. No newer first-party post on dwell was found in this pass.

=== URL: https://www.linkedin.com/blog/engineering/feed/leveraging-dwell-time-to-improve-member-experiences-on-the-linkedin-feed
=== TITLE: Leveraging Dwell Time to Improve Member Experiences on the LinkedIn Feed
=== PUBLISHED: n/a
=== AUTHOR: n/a
Leveraging Dwell Time to Improve Member Experiences on the LinkedIn Feed

# Leveraging Dwell Time to Improve Member Experiences on the LinkedIn Feed

The LinkedIn Feed is central to the member experience, providing a space for sharing knowledge, ideas, career updates and job opportunities through different media types such as posts, articles, images, or videos. As members come across content in their feed that they are curious or interested in, they have multiple ways to engage with that content. They may take explicit actions by commenting on or resharing posts. They might also choose to passively consume the content by reading it (i.e. dwelling).

To make those different types of engagements possible requires relevance systems that underpin the LinkedIn Feed and are tasked with matching the right content with the right set of content consumers. LinkedIn’s Feed ranking system aims to understand member’s interests, goals and preferences to provide the most relevant professional content and conversations. Over the years, our team has continuously evolved different aspects of the systems from large scale modeling architectures, to serving infrastructure and optimizing for different aspects of the consumer and creator behavior.

Recently, we have used member time spent behavior (dwell time) to improve LinkedIn Feed ranking by predicting when members will have a short dwell time on a Feed post and leveraging that prediction as a negative signal for ranking.

In this blogpost, we will share how we have evolved in treating passive consumption as a positive signal to learn from and optimize. We'll share how we've updated our passive consumption models to better capture member preferences and improve their Feed experience. The innovations in this work provides us with a stable foundation for delivering more quality professional content to our individual members while limiting “click bait” or “dwell bait” content that detracts from the member experience.

## Primer on Ranking for the LinkedIn Feed

The LinkedIn Feed ranking system mainly consists of a two-pass funnel architecture, which generates candidates in the first pass and ranks them together in the second. There are multiple first pass systems, such as “ FollowFeed'' which is responsible for retrieving content from a member's network (e.g. posts, news, career updates, etc.) from thousands of potential candidates and “OON Recommendation” which is responsible for retrieving relevant out-of-network recommendations. These systems maximize for recall, supplying a large set of potential updates to show viewers. The second pass system gathers updates from different first pass systems and ranks the accumulated results for precision. We leverage a multi-objective, multi-task framework for second pass systems combining predictive likelihoods from different models into a single combined score for ranking. The final output from this second pass system is a ranked list of what we hope to be the most relevant and valuable content for a given viewer.

At a high level, the multi-objective optimization (MOO) framework attempts to balance three aspects of the content ecosystem:

1. Viewer Side Optimization: viewers’ knowledge value from content
2. 1. Passive Optimization: passive behaviors such as clicks, dwell time, etc.
2. Active Optimization: active contribution behaviors such as comments, reshares, etc.
3. Downstream Optimization: impact from viewer’s actions to their network
4. Creator Side Feedback Optimization: upstream value to the creator for different actions taken by the viewer

In the following graphic, you’ll see a high level representation of the viewer side optimization model which tries to maximize both passive and active optimization via Deep Neural Networks.

Figure 1: High-level model architecture for objectives related to Viewer Side Optimization. Note that models for Downstream and Creator Side Optimization have similar architectures.

Additionally, below we’ve shared a representation of the MOO function used for balancing the multiple engagement signals that the models learn and optimize. Here alpha, beta, gamma and W are all MOO hyper-parameters that are finely tuned to balance tradeoffs and returns from each aspect of the content ecosystem with the goal of maximizing not only the overall user engagement and retention on LinkedIn, but also personalization on a member level.

Figure 2: Feed Multi-Objective Optimization (MOO) function used by Feed Models for ranking the updates for members

## Dwell Time is Important

Dwell time refers to the duration users spend on content or posts. Unlike explicit signals such as likes, comments, and shares, dwell time signals are more abundant and offer broader coverage, capturing the engagement of users who passively consume content. This makes dwell time a critical indicator of not only content quality but also relevance, especially for members who enjoy reading content on LinkedIn, but may not frequently engage explicitly.

For instance, we found that a significant portion of our weekly active users are passive consumers who spend time on the LinkedIn Feed without taking any explicit actions. This group of users engages with content by reading and viewing without reacting, highlighting the importance of dwell time as their primary engagement signal. Additionally, dwell time is crucial for evaluating the relevance and engagement of out-of-network content, where interactions are less common. For specific content types, such as videos, dwell time becomes even more significant, as users might spend considerable time watching without necessarily liking, commenting, or sharing. This makes dwell time an essential metric for understanding how well different types of content resonate with our members.

Figure 3: Distribution of LinkedIn Weekly Active Users: A significant portion passively consumes content in the Feed, a majority actively engage with content in the Feed, and a smaller group does not use the Feed.

## Previous Dwell Optimization (Skipped Updates) for the LinkedIn Feed

As shared in our previous work, we analyzed LinkedIn members’ dwell time spent behaviors and identified a threshold Tskip, below which the probability of engagement is nearly zero, we classify updates viewed for less time as “skipped,” indicating members quickly decide to continue scrolling without engaging. This threshold Tskip is effective across different types of updates, showing a consistent pattern in user behavior. Incorporating these insights, we added P(skip) to our Passive Optimization framework, predicting the probability of skipping an update as a -ve signal in our MOO, which has been powering our Feed ranking function to enhance content quality and user engagement.

## Deep Dive: Modeling “Long Dwell” Behavior

Beyond P(skip) models acting as content quality controllers for the MOO function, we explored using dwell time as a positive feedback signal. Modeling only P(skip) is inadequate because the fixed threshold Tskip becomes less effective as user time on the platform increases, leading to a sparse signal that hinders model learning. Additionally, P(skip) captures only negative user preferences, missing the chance to identify content that users are positively engaged with. Therefore, we aim to develop a model that predicts “long dwell” behavior, where a member spends significant time engaging with a post positively.

However, creating this model involves several technical challenges. At LinkedIn, we have had multiple attempts in the past at either using a universal long dwell threshold to build binary classifiers or predicting total dwell time spent on the update, which proved inadequate. Some of the challenges that emerged during the process included:

- Noisy Dwell Time Signals per Update: Dwell time signals were found to be inherently noisy. Directly predicting the dwell time value or logarithm of dwell time proved unsuitable due to excessive volatility and lack of bounds. As illustrated in the example of dwell time on video posts in Figure 4, outliers with extremely high values are present in our data. Similar patterns are observed across various content types and Feed positions.
- Lack of Adaptive Threshold: Utilizing a universal, static threshold for determining "long dwell" could not effectively capture user preferences relative to inherent dwell time baselines. Manual determination of such a threshold by humans was subjective, lacking systematic consistency and varying from person to person. For instance, a dwell time of 30 seconds could be considered "long" for an image but not for a video. Moreover, it fails to adapt to changes in dwell time distribution over time, as seen in Figure 5, where users spend increasingly more time on certain content types over time. Figure 6 highlights shifts in user behavior over six months, favoring certain content types over the other within users’ networks. In this case, the static universal threshold was unable to adjust to frequent changes within the ecosystem. For example, shifts in content types displayed or the introduction of a new user interface could significantly impact user interactions, rendering the previously chosen static threshold detrimental to ranking algorithms.
- Introduction of Biases through Static Thresholds: Employing a fixed static threshold would introduce biases in the modeling process. The model might learn to prioritize update types with longer dwell times, such as long videos, over short articles. As shown in Figure 7, these results indicate a bias introduced by the fixed threshold, as certain content types may rarely exceed this duration (e.g. content type #1), while others surpass it more easily. However, the goal was to develop a model that promotes engaging posts across all content types rather than favoring a few specific ones.

Figure 4: Distribution of dwell time on video posts at the top position in LinkedIn Feed.

Figure 5: The median and average dwell time on out-of-network video Feed posts from January 2024 to July 2024.

Figure 6: Percentage change in median dwell time per Feed post impression across selected content types on LinkedIn from January 2024 to July 2024.

Figure 7: Percentage of Feed post impressions with dwell time exceeding a 30-second threshold, categorized by content type.

Addressing these challenges required the formulation of novel approaches to overcome noise in dwell time signals, develop adaptive thresholds, and avoid biases in the promotion of content types. Our team has developed an innovative method for modeling "long dwell" behavior and that method has demonstrated significant effectiveness in driving user retention and possesses the capability to adapt automatically as the ecosystem evolves.

## Auto Normalized Long Dwell Model

To tackle the challenges presented above, we created a binary classifier that predicts whether a user will allocate more time to a post compared to a specific percentage (x%) of its counterparts. We implemented normalization techniques to address bias and noise in dwell time data. By identifying the top-K attributes that significantly influence dwell time, such as content type, creator type, and distribution method, we calculated the percentile (e.g., 50%) of dwell time for each unique combination. Importantly, this normalization prevents us from over-recommending based on these specific attributes, and focuses instead on finding quality content within these attribute categories. The system can be extended to any combination of the categorical features unique to LinkedIn’s ecosystem, such as industry of creator, intent of a post, etc.

It is important to note that we do not manually select these thresholds; instead, we infer such values from real world data. This entire process is performed on a daily basis, ensuring that the percentiles remain dynamic rather than static. This adaptability enables our method to evolve alongside the ecosystem, accommodating changes in user behavior and shifts in content distributions. The output score of our classifier was integrated into the score utility, incorporating an adjustable weight which we use to control the importance of passive consumption utility in ranking.

As depicted in Figure 8, the previously mentioned challenges caused our initial approaches - directly modeling dwell time values, modeling dwell time percentiles, and deriving binary labels with manually selected thresholds (iterations #1, #2, and #3) - to fall short of our expectations. However, with the introduction of the current approach in iteration #4, we observed a notable improvement in the metrics: transitioning from unexpected negative impacts to directionally positive outcomes, and ultimately achieving statistically significant positive improvements in the target dwell time metrics.

Figure 8: Online impact on targeted dwell time metrics in different iterations.

Through rigorous online A/B testing, we observed an enhancement in user engagement metrics, including sessions, overall time spent, and time spent per post on the LinkedIn Feed platform. This effect was particularly pronounced among users who tend to passively consume content without explicit interactions. These findings validate our approach and underscore our commitment to enhancing the LinkedIn Feed experience for all members.

## What’s Next?

As demonstrated by the above example, modeling "long dwell" behavior of members has consistently provided value to our members both as a feedback as well as positive signals to our models learning to improve content ranking on the LinkedIn Feed. However, the work described in this post is just one part of a broader strategy to incorporate dwell time into our AI models and there are ongoing efforts on further improving its value by understanding biases / feature penetration as well as leveraging causal inference techniques for modeling long-term engagement. We hope to share the learnings in upcoming months.

## Acknowledgements

Many colleagues and teams played a role in this work in one way or another. In particular, we would like to thank Siddharth Dangi, Jim Sorenson, Alison Liu, Hailing Chen, and Yafang Yang for their helpful discussions, data analysis, and prior efforts on dwell time modeling that helped lay the foundation for this work. In addition, we appreciate the Data Science teams for helping us measure the impact of our experiments and deliver our improved models to all LinkedIn members. Finally, we are grateful for our fellow Feed AI team members for all the ways in which they have supported this work.

Related articles

High-Signal AI Code Review That Adapts to Your Codebase at Scale

Min Chen

Aug 13, 2026

The Training Infrastructure Behind AI-Powered Job Search: 8X F...

Jaideep Ray

Aug 6, 2026

Quality Assurance Agent: Reimagining Software Quality with AI-...

Asa Kusuma

Jun 18, 2026

############################################

