---
source_url: https://arstechnica.com/ai/2025/04/cursor-ai-support-bot-invents-fake-policy-and-triggers-user-uproar
fetched: 2026-07-20
fetched_by: Claude Code research agent (Tavily extract)
note: RAW UNEDITED CAPTURE
---

# Company apologizes after AI support agent invents policy that causes user uproar

Frustrated software developer believed AI-generated message came from human support rep.

![Painting of a toy robot holding a telephone receiver.](https://cdn.arstechnica.net/wp-content/uploads/2025/04/telephone_robot_2-640x360.jpg)
![Painting of a toy robot holding a telephone receiver.](https://cdn.arstechnica.net/wp-content/uploads/2025/04/telephone_robot_2-1152x648.jpg)

On Monday, a developer using the popular AI-powered code editor [Cursor](https://www.cursor.com/) noticed something strange: Switching between machines instantly logged them out, breaking a common workflow for programmers who use multiple devices. When the user contacted Cursor support, an agent named “Sam” told them it was expected behavior under a new policy. But no such policy existed, and Sam was a bot. The AI model made the policy up, sparking a wave of complaints and cancellation threats documented on [Hacker News](https://news.ycombinator.com/item?id=43683012) and [Reddit](https://old.reddit.com/r/cursor/comments/1jyy5am/psa_cursor_now_restricts_logins_to_a_single/).

This marks the latest instance of AI [confabulations](https://arstechnica.com/information-technology/2023/04/why-ai-chatbots-are-the-ultimate-bs-machines-and-how-people-hope-to-fix-them/) (also called “hallucinations”) causing potential business damage. Confabulations are a type of “creative gap-filling” response where AI models invent plausible-sounding but false information. Instead of admitting uncertainty, AI models often prioritize creating plausible, confident responses, even when that means manufacturing information from scratch.

For companies deploying these systems in customer-facing roles without human oversight, the consequences can be immediate and costly: frustrated customers, damaged trust, and, in Cursor’s case, potentially canceled subscriptions.

## How it unfolded

The incident began when a Reddit user named BrokenToasterOven [noticed](https://undelete.pullpush.io/r/cursor/comments/1jyy5am/psa_cursor_now_restricts_logins_to_a_single/) that while swapping between a desktop, laptop, and a remote dev box, Cursor sessions were unexpectedly terminated.

“Logging into Cursor on one machine immediately invalidates the session on any other machine,” BrokenToasterOven wrote in a message that was [later deleted](https://undelete.pullpush.io/r/cursor/comments/1jyy5am/psa_cursor_now_restricts_logins_to_a_single/) by r/cursor moderators. “This is a significant UX regression.”

Confused and frustrated, the user wrote an email to Cursor support and quickly received a reply from Sam: “Cursor is designed to work with one device per subscription as a core security feature,” read the email reply. The response sounded definitive and official, and the user did not suspect that Sam was not human.

![Screenshot: "Cursor is designed to work with one device per subscription as a core security feature. To use Cursor on both your work and home machines, you'll need a separate subscription for each device. Let me know if you need help setting up an additional subscription! Best, Sam."](https://cdn.arstechnica.net/wp-content/uploads/2025/04/cursor_bot_email_screenshot-1024x881.png)

After the initial Reddit post, users took the post as official confirmation of an actual policy change—one that broke habits essential to many programmers’ daily routines. “Multi-device workflows are table stakes for devs,” wrote one user.

Shortly afterward, several users publicly announced their subscription cancellations on Reddit, citing the non-existent policy as their reason. “I literally just cancelled my sub,” wrote the original Reddit poster, adding that their workplace was now “purging it completely.” Others joined in: “Yep, I’m canceling as well, this is asinine.” Soon after, moderators locked the Reddit thread and removed the original post.

“Hey! We have no such policy,” [wrote](https://old.reddit.com/r/cursor/comments/1jyy5am/psa_cursor_now_restricts_logins_to_a_single/mn2vlbr/) a Cursor representative in a Reddit reply three hours later. “You’re of course free to use Cursor on multiple machines. Unfortunately, this is an incorrect response from a front-line AI support bot.”

## AI confabulations as a business risk

The Cursor debacle recalls a [similar episode](https://arstechnica.com/tech-policy/2024/02/air-canada-must-honor-refund-policy-invented-by-airlines-chatbot/) from February 2024 when Air Canada was ordered to honor a refund policy invented by its own chatbot. In that incident, Jake Moffatt contacted Air Canada’s support after his grandmother died, and the airline’s AI agent incorrectly told him he could book a regular-priced flight and apply for bereavement rates retroactively. When Air Canada later denied his refund request, the company argued that “the chatbot is a separate legal entity that is responsible for its own actions.” A Canadian tribunal rejected this defense, ruling that companies are responsible for information provided by their AI tools.

Rather than disputing responsibility as Air Canada had done, Cursor staff acknowledged the error and took steps to make amends. Cursor [co-creator](https://anysphere.inc/) Michael Truell later [apologized on Hacker News](https://news.ycombinator.com/item?id=43700931) for the confusion about the non-existent policy, explaining that the user had been refunded and the issue resulted from a backend change meant to improve session security that unintentionally created session invalidation problems for some users.

“Any AI responses used for email support are now clearly labeled as such,” he added. “We use AI-assisted responses as the first filter for email support.”

Still, the incident raised lingering questions about disclosure among users, since many people who interacted with Sam apparently believed it was human. “LLMs pretending to be people (you named it Sam!) and not labeled as such is clearly intended to be deceptive,” one user [wrote on Hacker News](https://news.ycombinator.com/item?id=43701288).

While Cursor’s staff fixed the technical bug, the episode shows the risks of deploying AI models in customer-facing roles without proper safeguards and transparency. For a company selling AI productivity tools to developers, having its own AI support system invent a policy that alienated its core users represents a particularly awkward self-inflicted wound.

“There is a certain amount of irony that people try really hard to say that hallucinations are not a big problem anymore,” one user [wrote on Hacker News](https://news.ycombinator.com/item?id=43701288), “and then a company that would benefit from that narrative gets directly hurt by it.”

![Photo of Benj Edwards](https://cdn.arstechnica.net/wp-content/uploads/2022/08/benj_ega.png)
![Loading](https://cdn.arstechnica.net/wp-content/themes/ars-v9/public/images/firework-loader.75ab30.gif)
![Listing image for first story in Most Read: Commodore’s newest gadget is a flip phone that blocks social media and browsers](https://cdn.arstechnica.net/wp-content/uploads/2026/06/Commodore-Callback-8020-BASIC-Beige-005-500x500.png)

Ars Technica has been separating the signal from
the noise for over 25 years. With our unique combination of
technical savvy and wide-ranging interest in the technological arts
and sciences, Ars is the trusted source in a sea of information. After
all, you don’t need to know everything, only what’s important.