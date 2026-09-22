---
newsletter: build-versus-buy-broke
channel: business
offsetDays: 5
angle: myth-bust
# approved: ""   # Nick sets this. Until then it stays a draft and never schedules.
---
The data leaks from build-it-yourself software are rarely clever break-ins.

They are usually a door someone left open and forgot. In 2023, that kind of door leaked Social Security numbers from US banks and state agencies.

The security reporter Brian Krebs found a run of organizations leaking private data through their own public websites, built on Salesforce. Salesforce was not hacked. Whoever set up each site had left the guest setting, the visitor who never logs in, able to read records meant to be private.

A State of Vermont site for pandemic unemployment aid exposed applicants' names, addresses, Social Security numbers, and bank account numbers. A bank's loan site exposed full Social Security numbers and payroll figures. Anyone who thought to look could read them. The door had been standing open since the day the site went live.

That is the shape of the risk as more non-tech companies build their own tools. A team needs a customer portal or an intake form. They stand one up in an afternoon and never quite stop to ask who, exactly, can see what. The tool works, so it ships, and the open door ships with it.

AI makes the trap easier to fall into. As the engineer Gautam Koul writes on Martin Fowler's site, you can tell a coding model to "be secure" and it will still reach for open storage and over-broad permissions, then describe them as standard.

The fix is dull and it works. Before a homemade tool connects to the internet, someone checks who can see what.

Who reviews access on the tools your teams build?

<!-- First comment (sources): Krebs on Salesforce guest-access leaks https://krebsonsecurity.com/2023/04/many-public-salesforce-sites-are-leaking-private-data/ · Gautam Koul on vibe-coding security https://martinfowler.com/articles/vibesec-reckoning.html -->
