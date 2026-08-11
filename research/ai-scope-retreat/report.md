# The scope retreat: companies that narrowed AI instead of killing it

Built 2026-08-11 from `raw/` (7 Exa sweeps, 2024-01-01 onward, plus targeted web
verification). Raw responses are unedited and kept.

## The pattern

A company points AI at the biggest, busiest, most visible version of a job. It
underperforms there. The company does not switch it off. It moves the AI to a narrower
job where it works, and keeps it.

This is distinct from the two patterns it gets confused with:

- **Kill** (Starbucks retiring its AI inventory counting after nine months; Aldi and
  Sainsbury's pulling checkout-free trials). The tool goes, nothing replaces its role.
- **Rehire** (Ford bringing back ~300-350 veteran engineers on quality; Klarna
  reversing its all-AI customer service). Humans come back, but the reporting is about
  headcount rather than a redrawn scope for the AI.

The scope retreat is the interesting one because the company still believes in the tool.
The public record then contains something rare: a before scope and an after scope, chosen
by people who had just been burned. The after scope is the useful artifact.

## Confirmed cases

### Kinney Drugs — narrowed by direction
Employee-owned pharmacy chain, New York and Vermont. Put an AI phone assistant, "Burt,"
on **incoming patient calls** in May 2026. Patients reported incoherent calls, wrong
medication dosages, and missed prescription notifications. By August incoming calls went
back to a **touch-tone system**, and Burt kept exactly one job: **opt-in outbound refill
texts**.
The axis: from calls the patient initiates and must get right, to messages the patient
asked to receive.
Source: [WCAX, 2026-08-07](https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/). Single local outlet, so thinner than the others here.

### Johnson & Johnson — narrowed by value concentration
CIO Jim Swanson describes an initial "thousand flowers" approach that reached **nearly
9,000 AI use cases**. On review, **only 10 to 15% of use cases were driving 80% of the
value**. J&J cut to a focused set, with four named priority areas: a sales rep co-pilot
for healthcare professionals, drug discovery (identifying the right moment to add
solvents in molecular processes), supply chain risk, and an internal HR chatbot handling
roughly **10 million employee interactions a year**.
The axis: from breadth of experiment to the measured minority that paid.
Source: [TBPN Digest, 2025-04-18](https://www.tbpndigest.com/story/2025-04-18/johnson-johnson-cuts-9000-ai-projects-down-to-its-highest-value-use-cases-after-a-year-of-experimentation). The strongest case in this file for our beat: traditional pharma, named CIO, a real ratio.

### Amazon, Just Walk Out — narrowed by basket size
Removed from **Amazon Fresh** large-format grocery stores in the US and replaced with
**Dash Carts** (smart trolleys, human checkout implied). Just Walk Out was **kept** in
Amazon Go convenience stores, UK Fresh stores, and dozens of smaller sites in airports,
arenas, amusement parks and hospitals, and Amazon continued licensing it to third-party
retailers, saying it has "strong conviction" the technology belongs in smaller stores.
The axis: from a 100-item weekly shop to a 3-item grab.
Sources: [NPR](https://www.npr.org/2024/04/03/1242508931/no-more-just-walk-out-at-amazon-grocery-stores-the-new-bet-is-smart-shopping-car) · [Chain Store Age](https://chainstoreage.com/amazon-removing-just-walk-out-installing-dash-cart-amazon-fresh) · [Amazon's own statement](https://www.aboutamazon.com/news/retail/amazon-just-walk-out-dash-cart-grocery-shopping-checkout-stores)

### Taco Bell — narrowed by traffic
Voice AI deployed at **hundreds of US restaurants**. After accuracy complaints and a
viral order for **18,000 water cups**, chief digital and technology officer Dane Mathews
told the WSJ the chain is reconsidering where it runs: "busier restaurants, for instance,
may benefit more from a human taking orders." Voice AI stays a "core part" of the
strategy. No count was given for how many locations lose it.
The axis: from peak-hour queues to quiet stores.
Sources: [Nation's Restaurant News, 2025-09-02](https://www.nrn.com/restaurant-technology/taco-bell-is-adjusting-its-voice-ai-plans) · [TechCrunch](https://techcrunch.com/2025/08/30/taco-bell-is-having-second-thoughts-about-relying-on-ai-at-the-drive-through/)

### Amazon retail engineering — narrowed by blast radius
March 2026: four high-severity incidents in a week, including a six-hour outage blocking
checkout, accounts and pricing. Amazon's account is that an engineer followed "inaccurate
advice that an agent inferred from an outdated internal wiki." Internal documents describe
the fix as introducing **"controlled friction"** into deployments touching the most
critical parts of the retail experience. Amazon disputes the framing: it says only one
incident involved AI tools and that none involved AI-written code.
The axis: same tool everywhere, extra human gates only on the paths that can take the
site down.
Source: [Fortune, 2026-03-12](https://fortune.com/2026/03/12/amazon-retail-site-outages-ai-agent-inaccurate-advice/)

### McDonald's — killed, then re-entered narrower
Ended its IBM voice-ordering test across **100+ US drive-thrus** in June 2024 after
viral misorders. Later returned to drive-thru voice AI with Google (ArchIQ) as a smaller,
more cautious test. A two-step version of the same retreat, useful as the counter-example
to "they gave up."
Sources: [AP](https://apnews.com/article/mcdonalds-ai-drive-thru-ibm-bebc898363f2d550e1a0cd3c682fa234) · [Restaurant Dive](https://www.restaurantdive.com/news/mcdonalds-ibm-drive-thru-automation-voice-ordering-ai/719085/)

## Weaker or unverified, worth a look later

- **Woolworths** reined in an AI assistant that claimed to be human (NBC News, Feb 2026). Fetch blocked, unverified.
- **Bunnings** added safeguards after its chatbot gave illegal electrical advice (Dec 2025).
- **Capital One** retired an AI ticket-assignment tool and framed the deprecation as proof of its engineering philosophy (Mar 2026). Single low-authority source.
- **Walmart and OpenAI** reworking their agentic shopping deal after a limited-catalogue trial (WIRED, Mar 2026).

## What the after-scopes have in common

Five different companies, five different narrowing axes, and the same underlying move:
each retreat lands somewhere the cost of being wrong is lower, and in four of the five
the customer either opted in or was never exposed.

Nobody picked these positions first. Every one of them was chosen after the failure, by
people who by then knew exactly which errors the system made. The deployment that worked
was available on day one and cost a fraction of what the first one did.

The corollary for a first deployment: the busiest, highest-volume version of a job is the
default choice because that is where the ROI arithmetic looks best, and it is reliably the
worst place to start. High volume means high error exposure, and the most visible channel
means your detection system is a customer.

## How this connects to the rest

- Feeds `research/case-studies/` under `failure` and `process-integration`.
- Related essays: `who-tells-you-when-it-breaks` (who detects the failure),
  `fix-the-process-first`, `a-machine-cant-answer-for-it`.
- Open question worth a later sweep: how many of these retreats later widened again, and
  on what evidence. Nobody seems to report the third deployment.
