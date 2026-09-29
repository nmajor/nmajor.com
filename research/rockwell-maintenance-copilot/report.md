# Rockwell Automation Singapore maintenance copilot: evidence report

Prepared 2026-09-29. This is a research brief, not reader-facing copy. It separates the maintenance copilot from the other systems at the Singapore factory and preserves disagreements between sources instead of selecting the most convenient number.

## Bottom line

The documented story is narrower, and better, than the broad "AI factory" headlines.

Rockwell Automation had a familiar maintenance problem at its Singapore factory. A stopped machine sent a technician into a long manual. If the documented fix failed, the technician had to find a more experienced colleague who remembered a similar fault. That process was slow, varied by shift and depended on knowledge held by people with 20 to 30 years on the floor.

Rockwell interviewed technicians, had them document what they knew, organized those records around symptom, cause and response, added manuals for 394 pieces of equipment, and connected manufacturing and maintenance data. It then put a natural-language interface on that material. At the machine, a technician can ask by text or voice, see likely causes, retrieve past fixes and comments from colleagues, and get step-by-step instructions from manuals. Tablets and smart augmented-reality glasses are documented interfaces.

The system is advisory. The public accounts show a human diagnosing and repairing the machine. They do not show the copilot issuing control commands, changing machine settings, ordering parts, closing work orders or making an autonomous safety decision.

Rockwell reports meaningful results, but none has a published measurement method. Microsoft attributes 33% lower machine downtime, about 25% lower servicing and spare-parts cost, and a fall in troubleshooting competency time from nine months to three to the maintenance approach. IndustryWeek, reporting remarks by the same Rockwell executive, gives twelve months to four, mean time to repair from 18 to 12 minutes, and 25% lower spares inventory. The time-to-competency versions preserve the same 67% reduction and probably summarize a stated nine-to-twelve-month starting range. The two 25% claims may be related, but cost and inventory are not interchangeable. An essay must not merge them.

The plant's larger figures belong to a programme of more than 50 digital and AI deployments. They do not prove the copilot alone increased units per person-hour by 43% or reduced defects by 35%.

## Source map and quality

| Source | What it contributes | Quality and incentive |
|---|---|---|
| [Microsoft Source, 24 Sep 2026](https://news.microsoft.com/source/features/digital-transformation/rockwell-automation-pairs-ai-with-decades-of-shop-floor-know-how-so-workers-can-solve-glitches-faster/) | Named technician account, deployment date, workflow, current stack, 33% downtime, roughly 25% cost, nine-to-three months, rollout plans | Detailed first-party customer story. Microsoft sells the cloud and AI stack. All outcome figures come from Rockwell. No methods or comparison periods. |
| [IndustryWeek, 24 Sep 2026](https://www.industryweek.com/technology-and-iiot/artificial-intelligence/article/55407517/rockwells-singapore-lighthouse-plant-heavily-leverages-ai) | Direct quotes from chief supply chain officer, 394 assets, capture process, data inputs, 12-to-four months, MTTR, inventory, separate AI systems, implementation philosophy | Independent trade publication, but the evidence is an executive presentation and company-supplied images. No independent measurement. Strongest source for what Buttermore said, not for causal verification. |
| [World Economic Forum, 22 Jun 2026](https://www.weforum.org/press/2026/06/new-global-lighthouse-sites-demonstrate-how-ai-is-rewiring-manufacturing-and-supply-chains/) | More than 1,000 SKUs, 20,000 changeovers, more than 50 solutions, 43% productivity, 35% defects, 67% competency | External designation by an independent expert panel, but the figures are site-level and almost certainly submission-based. It does not isolate the copilot or publish methods. |
| [Rockwell Investor Day presentation, 19 Nov 2025](https://www.rockwellautomation.com/content/dam/rockwell-automation/documents/pdf/company/about-us/ir/2025/InvestorDay2025_withAppendix.pdf) | Earlier plant-wide baseline: 33% labor efficiency, 60% time to competency, 25% quality, 35% energy, 7% OEE, 21% ROI, payback under three years | Primary corporate disclosure to investors. Useful dated snapshot, but promotional, programme-wide and method-free. |
| [Investor Day transcript](https://stockanalysis.com/stocks/rok/transcripts/393288-investor-day-2025/) | Factory setting, mature baseline, programme components, scale to Twinsburg, commercial logic | Third-party transcript of Rockwell's event. Direct executive remarks, still company claims. |
| [Singapore EDB, 16 Jul 2026](https://www.edb.gov.sg/en/business-insights/insights/from-singapore-to-the-world-how-rockwell-automations-local-innovations-and-digital-transformation-are-being-scaled-as-global-best-practices.html) | Singapore history, current hub role, more than 50 applications, WEF figures, workforce ecosystem | Government economic-development source with direct involvement in supporting Rockwell and an incentive to promote Singapore investment. Corroborates the programme, not the copilot result. |
| [Rockwell 2024 Sustainability Report](https://literature.rockwellautomation.com/idc/groups/literature/documents/br/esap-br035_-en-p.pdf) | AI-guided troubleshooting and predictive maintenance existed in some form in 2024; training partnerships | Primary dated source. Creates an unresolved chronology question against the October 2025 named-copilot start. |
| [OpenAI, 17 Mar 2026](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) | Release date of the model Microsoft says the copilot currently uses | Primary model-release source. Establishes that GPT-5.4 mini was not the October 2025 launch model. |

The saved `manufacturing-digital.html`, `partner-network-conference-2026.html` and original `wef-lighthouse.html` captures contain access challenges, not article text. They should not be cited for facts. The useful primary and trade-source captures are retained under `raw/`.

## Chronology

### 1991 to the early 2020s: Singapore becomes more than a sales office

Singapore EDB says Rockwell opened a small regional sales office in Singapore in 1991. The operation grew into the Asia Pacific Business Center, combining research and development, manufacturing and regional sales across Rockwell's Intelligent Devices, Software & Control, and Lifecycle Services businesses.

The factory makes industrial automation hardware, including controllers and networking components, for sectors such as pharmaceuticals, automotive and semiconductors. It also has a second job: demonstrating Rockwell technology to customers and testing systems that Rockwell may later sell or deploy elsewhere.

### Around early 2024: the broader transformation begins

In September 2026, chief supply chain officer Bob Buttermore said the team had started choosing AI use cases about two and a half years earlier. That points to roughly early 2024. He described an initially unsettled process. The team struggled to quantify likely savings and decide where to begin. It chose visible waste and deliberately small first steps.

Rockwell opened a Singapore Customer Experience Centre in March 2024 to demonstrate AI, robotics and virtual-reality technology. This is commercial context, not evidence about the maintenance copilot.

Rockwell's 2024 Sustainability Report says the Singapore manufacturing team had already "activated AI-guided troubleshooting assistance" and predictive maintenance that year. It also describes mobile robots, warehouse automation, real-time asset monitoring, process automation and energy systems.

This creates a chronology problem. Microsoft says technicians have used the named GenAI-Powered Maintenance Copilot since October 2025. Public sources do not say whether the 2024 troubleshooting assistant was a prototype, a separate tool, a limited deployment, or the predecessor later renamed and rebuilt.

### Around September 2024: conveyor predictive maintenance

IndustryWeek reported on 24 September 2026 that the conveyor predictive-maintenance system had come online two years earlier. The approximate date is September 2024. This system ingests hundreds of thousands of controller and MES data points into 64 machine-learning algorithms for a conveyor that runs between two floors. Rockwell says the conveyor has not negatively affected production since. This is not the generative maintenance copilot.

### October 2025: named maintenance copilot in use

Microsoft gives October 2025 as the start of technician use of the GenAI-Powered Maintenance Copilot. This is the firmest date for the named production system.

### 19 November 2025: Rockwell presents the plant-wide programme to investors

Rockwell's Investor Day deck presents the Singapore "Factory of the Future" as a broad operating programme. It reports 33% higher labor efficiency, 60% better time to competency, 25% quality improvement, 35% lower energy, 7% better OEE, a 21% return on investment and payback under three years.

The presentation emphasizes digital twins, automated material movement, lights-off warehousing, autonomous mobile robots, software and AI. It does not isolate the maintenance copilot's contribution. It calls Singapore an already highly automated, highly efficient, world-class plant before this work.

### 17 March 2026: current model becomes available

OpenAI released GPT-5.4 mini on 17 March 2026. Microsoft's September account says Rockwell's copilot runs on that model. It therefore describes the stack after an upgrade, not the launch configuration in October 2025. No source names the original model or the upgrade date.

### 22 June 2026: World Economic Forum designation

The WEF added Singapore to its Global Lighthouse Network. Its citation says the site operates more than 1,000 SKUs and more than 20,000 changeovers a year. Across more than 50 digital and AI solutions, units per person-hour increased 43%, defects fell 35%, and time to competency shortened 67%.

### July and August 2026: the programme is packaged as a global model

Singapore EDB repeated the WEF measures in July and described the facility as a Singapore-built launchpad for practices scaled across Rockwell's network. A Manufacturing Digital interview in August framed the wider transition as automation moving toward autonomy. The saved page is blocked by a challenge, so it should not support essay claims unless recaptured.

### 24 September 2026: detailed public accounts appear

Microsoft published the most detailed worker-level story. IndustryWeek published an account of several AI systems based on remarks by Buttermore. Together they expose the maintenance workflow and also reveal unresolved differences in the numbers.

### Planned next stage

Microsoft quotes Buttermore saying Rockwell will roll the maintenance copilot out to Twinsburg, Ohio, Poland and Mexico. No dates, current deployment status or target plants within Poland and Mexico are published. Rockwell's November 2025 investor presentation separately says Twinsburg will incorporate what it did in Singapore and extend it with live digital twins, agentic AI, robots and MES integration. That wider Twinsburg programme is not proof that the maintenance copilot has already shipped there.

## Factory context

The Singapore operation is an unusually favorable test bed.

- It combines R&D and manufacturing, so engineers can test changes on production lines without a long handoff between design and operations.
- Rockwell owns much of the automation, controls and manufacturing software underneath the project. It calls this "Rockwell on Rockwell."
- It was already highly automated and high-performing. The case is not a rescue of a poorly run plant.
- The factory occupies the fourth and fifth floors of an office building, according to Buttermore. The inter-floor conveyor explains why that single asset is operationally important.
- Microsoft says the maintenance estate covers hundreds of machines. IndustryWeek gives 394 pieces of equipment.
- Engineering assistant Mangleswaran Mahalingam says he now oversees about 50 machines.
- The WEF says the site manages more than 1,000 SKUs and more than 20,000 annual changeovers.

There is one direct context contradiction. The WEF calls the site "high-mix, low-volume." At Investor Day, the event's interviewer called Singapore "high-volume, low-mix" relative to Twinsburg. The sources do not resolve this. The WEF version is more specific and tied to SKU and changeover counts, but the essay should avoid assigning either label unless the distinction matters.

## The original workflow and problem

The pre-copilot sequence was:

1. A machine stopped or displayed an error.
2. The technician searched hundreds of manual pages for the error code and recommended fix.
3. If that fix failed, the technician looked for a colleague or senior technician who had seen the error before.
4. Troubleshooting proceeded through prior experience and trial and error.
5. Success depended on who was present, which made night shifts harder for a newer worker.

Mahalingam joined the factory in 2021 and says it took him more than a year to feel confident handling night shifts, when fewer colleagues were available. His experience is a named anecdote, not the formal onboarding baseline used in Rockwell's metrics.

Plant director Li Wang names two goals. The first is preserving tacit or "tribal" knowledge before veteran workers retire. The second is giving every technician a consistent troubleshooting process regardless of shift or tenure.

The operational issue is therefore more precise than generic knowledge management. It is a repeated, time-sensitive fault-diagnosis workflow across hundreds of assets, with useful information split among manuals, production records, maintenance history and veteran memory.

## What Rockwell appears to have done, in order

The public record supports this build sequence, although it does not give project dates for each step.

1. **Choose the workflow.** Rockwell focused the assistant on equipment troubleshooting and the steep learning curve across 394 assets.
2. **Collect the documented corpus.** It loaded manuals for those machines and maintenance or troubleshooting records, including downtime information.
3. **Interview the workforce.** Buttermore says the team sat down with all technicians and had them document the useful things they had learned. Microsoft describes the resulting database as expert insights from veteran engineers with 20 to 30 years of floor experience.
4. **Structure the knowledge.** Records were organized by symptom, cause and "reaction," which in context means the response or repair. The structure lets the system rank likely causes rather than return a generic document list.
5. **Connect plant information.** IndustryWeek says control-layer data that passes through the manufacturing execution system, plus maintenance and downtime data, feed the AI engine.
6. **Add retrieval and a language interface.** Azure AI Search and Azure OpenAI provide search, conversational interaction and reasoning over the collected material.
7. **Put it at the point of work.** Technicians use tablets, voice and smart AR glasses rather than leaving the machine to consult a desktop or find a colleague.
8. **Keep the technician in control.** The system returns prior fixes, likely causes and instructions. The worker decides what to inspect and performs the repair.

"Trained on" is Microsoft's phrase, but the disclosed components look like a retrieval system over a curated knowledge base. There is no evidence that Rockwell fine-tuned GPT-5.4 mini on maintenance records. A technically careful account should say the assistant searches or draws on these sources, not that Rockwell trained a foundation model, unless Rockwell clarifies the method.

## Knowledge capture in detail

The public sources give more detail than most customer stories, but not a complete governance process.

What is documented:

- The team held sessions with technicians and asked them to write down accumulated troubleshooting knowledge.
- Microsoft highlights engineers with 20 to 30 years of shop-floor experience.
- The system organizes entries by symptom, cause and response.
- It stores colleague comments and whether the issue occurred on another production line.
- Machine manuals are part of the searchable corpus.
- Maintenance, troubleshooting and downtime records are part of the data feeding the system.

What is not documented:

- Whether "all technicians" contributed equally or veteran engineers were the only approved authors.
- Who converted interviews into the symptom-cause-response schema.
- Whether subject-matter experts reviewed each entry before release.
- How conflicting fixes are resolved.
- Whether a technician can rate, edit or challenge an answer.
- How a successful new repair becomes a future record.
- Whether every answer cites the exact manual page or prior incident.
- Who owns the knowledge base and how often it is refreshed.
- Whether retired workers consented to or were compensated for codifying their expertise.

The defensible claim is that Rockwell did deliberate knowledge capture and structured the result. Claims about rigorous validation, continuous learning or automated feedback loops would go beyond the evidence.

## Technical architecture

### Disclosed components

The current system, as described in September 2026, includes:

- Microsoft Azure as the cloud platform.
- Azure OpenAI Service in Microsoft Foundry.
- GPT-5.4 mini as the current language model.
- Azure AI Search for retrieval.
- Azure security, identity and governance services.
- Machine manuals covering 394 pieces of equipment.
- A structured expert-knowledge database.
- Data from Rockwell's manufacturing software.
- Control-layer data passing through the MES.
- Maintenance, troubleshooting and downtime records.
- Tablet, voice and smart-AR-glasses interfaces.

The likely information path is:

`machine/control data -> MES and maintenance records -> indexed operational context`

`manuals + structured technician knowledge + prior incidents -> Azure AI Search`

`technician question -> retrieved context -> language-model response -> human technician`

That diagram is an inference from the named components, not a Rockwell-published architecture. Public sources do not disclose the vector store, embedding model, prompt design, orchestration layer, data-refresh latency, identity model, network separation, edge behavior or connection to a computerized maintenance management system.

Buttermore tells IndustryWeek that Rockwell's strategic Microsoft partnership also includes cloud MES and computerized maintenance-management software. That describes the partnership and product direction. It does not prove the Singapore copilot writes to a CMMS.

### Model chronology

The named copilot entered use in October 2025. GPT-5.4 mini launched in March 2026. The system must have started on another model or started without its current generative layer. The sources do not say which. This matters because the performance figures may span at least one model change.

### Security and governance

Microsoft says Azure's security, identity and governance services provide enterprise protection and compliance. That is a vendor description, not a control inventory. There is no published evidence about data residency, role-based permissions, logging, retention, red-team results, prompt-injection controls, answer evaluation or safety certification.

## What the technician sees and does

When the factory detects an error, the technician can ask the copilot a natural-language question. The reported response may include:

- the most likely causes, such as a worn gear or faulty sensor;
- prior remedies for the same issue;
- comments from colleagues;
- evidence that the issue appeared on another line;
- a step-by-step guide derived from the relevant manual.

IndustryWeek says operators can use text or voice. Microsoft names a tablet and says Mahalingam has learned to use smart augmented-reality goggles. The sources do not say whether the goggles overlay instructions on the exact component, merely display the interface, or support hands-free voice only.

The assistant shortens the search and recall phase of the repair. The technician still interprets the recommendation, checks the machine and carries out the work.

## Human and autonomous boundaries

The maintenance copilot is not shown operating equipment autonomously.

Documented human responsibilities:

- formulate or speak the question;
- choose among likely causes;
- inspect the physical equipment;
- decide whether the suggested response is appropriate;
- perform the repair.

Documented system responsibilities:

- search relevant expert records and manuals;
- use current or historical manufacturing context;
- rank likely causes;
- present prior fixes and step-by-step guidance.

Not documented:

- automatic machine shutdown or restart;
- control-system write access;
- automatic parts orders;
- autonomous work-order creation or closure;
- a confidence threshold that forces escalation;
- safety interlocks tied to model output;
- approval rules for high-risk repairs.

Rockwell executives describe a long-term move from automation to autonomy and say AI should be "in the loop" for every piece of work. Those are ambitions for the broader factory strategy, not evidence that this assistant acts without a technician.

## Four systems that must not be collapsed into one

### 1. GenAI-Powered Maintenance Copilot

Purpose: help people diagnose and troubleshoot hundreds of machines.

Method: natural-language retrieval across manuals, plant data, maintenance history and technician knowledge.

Human boundary: recommendations and guides go to a technician, who repairs the equipment.

Safest associated measures: 18-to-12-minute MTTR from IndustryWeek; company-reported 33% lower downtime and estimates of faster troubleshooting competency from Microsoft. Even these lack methods.

### 2. Conveyor predictive maintenance

Purpose: anticipate failure of a critical conveyor connecting factory floors.

Method: hundreds of thousands of controller and MES data points fed into 64 machine-learning algorithms.

Timeline: approximately September 2024 to September 2026.

Claimed result: no instance of the conveyor negatively affecting production after deployment.

This is conventional predictive machine learning, not the generative assistant. Its clean run cannot be presented as proof of the copilot's downtime effect.

### 3. Multi-agent quality assurance

Purpose: detect and investigate defects and correlate rising error rates with parts of the production process.

Method: multiple specialized agents cover inputs such as visual inspection, vibration and metrology. IndustryWeek describes an "AI action agent" that proposes options to a human decision-maker.

Claimed result: 35% fewer defects after installation, according to IndustryWeek. WEF also gives 35% fewer defects across the factory's transformation.

Microsoft says the system "detects and addresses" defects in real time, but IndustryWeek's more detailed account keeps a human decision-maker above the action agent. The public evidence supports detection, correlation and recommendations. It does not establish unsupervised corrective action.

### 4. The more-than-50-solution factory programme

Purpose: improve productivity, flexibility, quality, energy use and workforce performance across the site.

Components include flexible automation, digital twins, lights-off warehousing, autonomous mobile robots, automated material movement, energy optimization, AI quality control, predictive maintenance and the maintenance copilot.

The WEF's 43% units-per-person-hour, 35% defect reduction and 67% faster time-to-competency belong here. Rockwell's 2025 investor metrics and 21% ROI also belong here.

The programme creates confounding. A faster technician may benefit from the copilot, standardized processes, automation, better data and a changed training programme at the same time.

## Metric ledger

| Metric | Reported baseline and outcome | Date/source | Scope | Evidence quality and safe use |
|---|---|---|---|---|
| Machine downtime | 33% lower; no absolute baseline | Microsoft, Sep 2026, attributed to plant director and internal tracking | Wording says "their machines" after the consistent maintenance approach; asset count, comparison period and formula absent | Use only as "Rockwell says" or "Rockwell's internal tracking says." Do not call independently verified or plant-wide. |
| Servicing and spare-parts cost | About 25% lower; no currency or baseline | Microsoft, Sep 2026 | Combined phrase, unclear whether labor, service contracts, consumed parts or all three | Company-reported. Keep "about." Do not turn into inventory reduction. |
| Time to troubleshooting competency | Nine months to three months, 67% reduction | Microsoft, Sep 2026, described as Rockwell estimate | New workers learning to troubleshoot hundreds of machines | Use as an estimate, not measured onboarding for every job. |
| Time to competency | Twelve months to four months, 67% reduction | IndustryWeek, Sep 2026 | New technicians at Singapore | Same relative change as nine-to-three. Likely endpoint choice within a nine-to-twelve-month baseline, but unresolved. |
| New-worker ramp range | Nine to twelve months before | Direct Buttermore quote in IndustryWeek | "Bring them up to speed" across 394 assets | Best bridge between the two endpoint versions. |
| Mean time to repair | 18 minutes to 12 minutes, 33.3% reduction | IndustryWeek, Sep 2026 | No asset, incident class or period stated | Strongly relevant to copilot, but still a bare company figure. Attribute. |
| Spares inventory | 25% lower | IndustryWeek, Sep 2026 | No units, valuation basis or period | Separate from Microsoft's cost measure. Do not combine. |
| Conveyor production impact | Zero negative production incidents since system came online about two years earlier | IndustryWeek, Sep 2026 | One inter-floor conveyor | Predictive-maintenance result, not copilot result. No counterfactual or expected failure rate. |
| Defects | 35% lower | IndustryWeek and WEF, Jun/Sep 2026 | IndustryWeek links it to multi-agent QA; WEF links it to the >50-solution site programme | Do not credit to maintenance copilot. |
| Units per person-hour | 43% higher | WEF, Jun 2026 | Whole Singapore transformation | Externally recognized, company-originated, programme-level. |
| Time to competency | 67% shorter | WEF, Jun 2026 | Whole Singapore transformation | Matches both 9-to-3 and 12-to-4 ratios; does not resolve endpoints or isolate copilot. |
| Labor efficiency | 33% higher | Rockwell Investor Day, Nov 2025 | Whole factory programme | Earlier programme snapshot; not the same as 33% lower downtime. |
| Time to competency | 60% improvement | Rockwell Investor Day, Nov 2025 | Whole factory programme | Earlier and differently defined than WEF's 67%. Do not treat as identical. |
| Quality | 25% improvement | Rockwell Investor Day, Nov 2025 | Whole factory programme | Earlier figure than 35% defect reduction. Different measure or measurement date unknown. |
| Energy | 35% reduction | Rockwell Investor Day, Nov 2025 | Whole factory programme | Unrelated to maintenance copilot. |
| OEE | 7% improvement | Rockwell Investor Day, Nov 2025 | Whole factory programme | Unrelated to copilot unless Rockwell later decomposes contribution. |
| ROI and payback | 21% ROI; payback under three years | Rockwell Investor Day, Nov 2025 | Broad Singapore investment | No investment amount, cash-flow assumptions or boundary. Do not assign to copilot. |
| Bus transport savings | More than $500,000 | IndustryWeek, Sep 2026 | Across multiple Rockwell plants with employee transport, Singapore included | Separate AI route-optimization use case. Not factory-maintenance savings. |

## Reconciling the conflicts

### Nine to three versus twelve to four

Both are 67% reductions. IndustryWeek includes a direct quote that workers historically took "nine to 12 months" to get up to speed. Microsoft selects the lower pair, nine to three. IndustryWeek selects the upper pair, twelve to four. The WEF reports only the shared percentage, 67%.

The most plausible reconciliation is that Rockwell had a nine-to-twelve-month starting range and a three-to-four-month current range. No source states that range explicitly as a paired before-and-after measure, so that remains an inference.

Safe formulation: Rockwell says troubleshooting competency now takes roughly one-third as long, with public accounts variously giving nine to three months and twelve to four.

Unsafe formulation: the assistant definitively cut company onboarding from exactly nine months to exactly three months.

### 60% versus 67% time-to-competency improvement

The November 2025 investor presentation says 60%; the June 2026 WEF citation says 67%. This may show continued improvement, a revised definition, rounding or different workforce groups. There is no bridge in the sources. For a current story, use WEF's later 67% for the whole programme and label the older 60% as an earlier snapshot if needed.

### About 25% cost versus 25% spares inventory

Microsoft says spending on servicing and spare parts fell about 25%. IndustryWeek says spares inventory fell 25%. Cost flow and inventory stock are different measures. One can fall without the other. They may originate in one executive slide or reflect two benefits, but no public document resolves this.

Safe use: choose the measure from the source being cited and preserve its noun.

Unsafe use: "maintenance costs and inventory both fell 25%" or "spare-parts cost fell 25%" as though all sources agree.

### 25% quality versus 35% defects

The 2025 investor deck says a 25% quality improvement. WEF and IndustryWeek say a 35% defect reduction in 2026. These may represent progress over time, or different denominators. A quality-improvement percentage is not necessarily the inverse of defect rate. Do not present them as one continuous measure.

### 33% downtime versus 33% labor efficiency

These are separate metrics that happen to share a number. Microsoft reports a 33% reduction in machine downtime. The 2025 investor deck reports a 33% improvement in labor efficiency across the factory programme. Neither source says one caused the other.

### 18-to-12-minute MTTR versus 33% lower total downtime

The IndustryWeek MTTR change is also a 33.3% reduction, but it is not the same measure as Microsoft's 33% lower machine downtime. MTTR is the average repair duration for whatever incident population Rockwell included. Total downtime also depends on how often failures occur, how long technicians wait before work begins, parts availability, planned outages and the number of affected assets. The matching percentage may be coincidence or may indicate that repair time drove most of Rockwell's downtime result. No source provides the decomposition. An essay may report both, with attribution, but must not use the MTTR baseline as though it proves the total-downtime figure.

### High-mix/low-volume versus high-volume/low-mix

WEF's detailed citation says high-mix, low-volume. Rockwell's Investor Day interviewer says high-volume, low-mix relative to Twinsburg. The safest context is the disclosed operational fact: more than 1,000 SKUs and 20,000 annual changeovers. Avoid the disputed label.

### 2024 troubleshooting assistance versus October 2025 copilot deployment

The 2024 Sustainability Report establishes some AI-guided troubleshooting before the named copilot's October 2025 use date. It does not establish equivalence. Describe October 2025 as the start date of the named current copilot and treat the earlier system as a predecessor or separate deployment only if explicitly marked uncertain.

## Change management and operating choices

The sources support several organizational actions behind the deployment.

1. **Operations and technology built together.** Plant director Wang credits close collaboration between operations and technical teams. This matters because the corpus and the symptom-cause-response structure require maintenance judgment, not only software work.
2. **Technicians contributed the content.** The project did not begin by asking a generic model to infer plant knowledge from manuals alone.
3. **The team started with measurable waste.** Buttermore says early use-case selection was hard because benefits were uncertain. His team chose large pockets of waste and split the use case into smaller parts that could earn a return, even at a 2% quality improvement.
4. **The tool lives in the workflow.** Tablet, voice and AR access let the technician consult it at the machine.
5. **Rockwell invested in skills outside the application.** Its 2024 report says it worked with Singapore workforce training and certification programmes. EDB describes links to local educational institutes and continuing upskilling in analytics, automation and AI.
6. **The company measures the factory as a portfolio.** Investor materials emphasize labor, quality, energy, OEE, ROI and payback rather than model benchmarks.
7. **The baseline was strong.** Executives repeatedly say Singapore was already world-class. The gains were made on a mature operation, although that maturity also means good data and disciplined processes were already available.

The sources do not document workforce resistance, union consultation, job losses, incentives for knowledge contribution, training hours, adoption rates, prompt training, or the support process when the assistant is wrong.

## Rollout and scaling

Rockwell says the maintenance copilot is planned for:

- Twinsburg, Ohio;
- an unspecified plant or plants in Poland;
- an unspecified plant or plants in Mexico.

The company operates more than 25 plants globally. The Singapore factory is explicitly a reference site for both internal replication and customer demonstrations.

Scaling will require more than copying the application. The high-value corpus is site-specific. Manuals, failure history, technician language, asset identifiers and repair practices differ by plant. Microsoft's cloud-native architecture may make the software repeatable, but the public story provides no evidence that Singapore's knowledge base transfers directly.

No source publishes rollout dates, budgets, localization plans, safety validation, supported languages, target metrics or results outside Singapore. "Will be rolled out" is the safe status as of September 2026.

## Commercial and vendor incentives

The sources are unusually aligned because every major institution benefits from the success story.

- **Rockwell** sells industrial automation, MES, maintenance software, digital services and transformation work. It explicitly uses Singapore as proof that its technology works before taking the approach to customers.
- **Microsoft** supplies Azure, Azure OpenAI, AI Search and the current model hosting. Its article is a customer story, not independent reporting.
- **OpenAI** supplies the model through Microsoft's platform. The story advertises the model's use in an industrial setting.
- **Singapore EDB** supported Rockwell's R&D and talent connections and markets Singapore as an advanced-manufacturing hub.
- **WEF** benefits from evidence that its Lighthouse programme identifies scaled industrial transformation. Its panel offers an external review layer, but the site figures remain method-free.
- **IndustryWeek** is editorially independent, but its report largely transmits an executive presentation and company-supplied claims.
- **Investor materials** are designed to persuade shareholders that capital spending creates margin and growth.

This does not make the story false. It means the evidence establishes what Rockwell built and what it reports, not a controlled causal evaluation.

## Important unknowns

### Measurement

- What calendar periods define "before" and "after"?
- Did the comparison begin before October 2025, or does it include the earlier 2024 troubleshooting system?
- How many faults, machines, technicians and shifts are in each measure?
- Does downtime mean unplanned downtime only, or all unavailable minutes?
- Is MTTR averaged across all incidents or a selected fault class?
- Does time to competency come from an assessment, supervisor judgment or elapsed employment time?
- Are the nine-to-three and twelve-to-four figures ranges, cohorts or alternate summaries?
- Is the roughly 25% cost result recurring annual expense, avoided cost or a one-time inventory change?
- What changed simultaneously in staffing, maintenance procedures, asset mix and automation?

### Product and model

- What model powered the October 2025 version?
- When did Rockwell move to GPT-5.4 mini, and were the outcome measures revalidated after the change?
- Is the application retrieval-augmented generation, fine-tuning, or a hybrid?
- Does it display citations and source dates?
- How does it handle conflicting technician advice?
- What is the measured answer-accuracy or unsafe-advice rate?
- What happens when confidence is low?
- Can it operate during a cloud or network outage?

### Governance and safety

- Who approves content and model changes?
- Are queries and repairs logged for audit?
- What permissions restrict access across production lines?
- Can the system see sensitive production or customer data?
- What safety rules prevent an incorrect step from causing injury or equipment damage?
- Does any answer require a second technician or engineer to approve it?

### Adoption and labor

- How many technicians use it, how often, and for what share of faults?
- What percentage of suggestions do technicians accept?
- Did workers see knowledge capture as recognition, surveillance or a threat to role security?
- Did Rockwell redesign jobs or staffing after the reported gains?
- How much training was required to use the tool?

### Economics and scale

- What did the copilot itself cost to build and operate?
- How much of the 21% plant-programme ROI belongs to software, automation, logistics or energy work?
- Will each new plant need a full knowledge-capture project?
- Are the systems being productized for customers, used in consulting engagements, or retained as internal patterns?

## Claim ledger for an essay

### Safe with direct attribution

| Proposed claim | Best source | Required wording |
|---|---|---|
| Rockwell's Singapore technicians have used the named GenAI-Powered Maintenance Copilot since October 2025. | Microsoft | State as Microsoft/Rockwell account. |
| Before it, a technician searched long manuals and then found an experienced colleague if the manual fix failed. | Microsoft, named technician | Attribute the experience to Mahalingam or describe it as the reported workflow. |
| Rockwell interviewed technicians and documented accumulated troubleshooting knowledge. | IndustryWeek direct Buttermore quote | "Buttermore says" if describing every technician. |
| Veteran engineers contributing knowledge had 20 to 30 years of shop-floor experience. | Microsoft | Attribute to Microsoft's Rockwell case study. |
| The system organizes material by symptom, cause and response, and can surface prior fixes and cross-line comments. | Microsoft | "Response" is clearer than the source's "reaction," but note the source terminology in research. |
| The corpus includes manuals for 394 pieces of equipment, manufacturing data and maintenance/downtime records. | IndustryWeek and Microsoft | Do not imply all data is necessarily real-time. |
| Technicians can query it through a tablet, voice or smart AR glasses. | Microsoft and IndustryWeek | Do not claim a specific AR overlay behavior. |
| The current stack uses Azure OpenAI in Microsoft Foundry, Azure AI Search and GPT-5.4 mini. | Microsoft | Say "current" because the model postdates deployment. |
| The assistant recommends likely causes and instructions; the technician performs the repair. | Microsoft and IndustryWeek | This is the supported human-in-the-loop boundary. |
| Rockwell says downtime fell 33%. | Microsoft | Always label as Rockwell-reported/internal tracking. |
| Public accounts put troubleshooting competency at about one-third of the previous time. | Microsoft, IndustryWeek, WEF | Explain the nine-to-three and twelve-to-four variants if giving endpoints. |
| IndustryWeek reports MTTR fell from 18 to 12 minutes. | IndustryWeek | Attribute to Rockwell via IndustryWeek; methods unpublished. |
| The factory deployed more than 50 digital and AI solutions. | WEF | Keep factory-wide. |
| WEF reports 43% more units per person-hour, 35% fewer defects and 67% shorter time to competency across the transformation. | WEF | Explicitly say these are programme-level. |
| Rockwell plans maintenance-copilot rollouts in Ohio, Poland and Mexico. | Microsoft | Future tense; no dates. |
| Singapore is both an internal pilot site and a customer showcase. | Investor transcript, Microsoft, EDB | This commercial context is explicit. |

### Safe only with a caveat

| Claim | Caveat |
|---|---|
| Costs fell about 25%. | Microsoft says servicing and spare-parts costs; IndustryWeek separately says spares inventory. Choose one source and do not merge. |
| Onboarding fell from nine months to three. | Microsoft calls it an estimate about learning to troubleshoot; IndustryWeek says twelve to four. Prefer "troubleshooting competency" over all onboarding. |
| The assistant was "trained on" worker knowledge. | Use the source's phrase only if quoted. Otherwise say it searches or draws on a curated knowledge base. Fine-tuning is not documented. |
| Rockwell started with one narrow use case. | True for the maintenance assistant's learning-curve problem, but the factory transformation itself included more than 50 solutions. Avoid implying a single-project programme. |
| The copilot caused the downtime and cost reductions. | The sources associate them, but no causal design is published and other maintenance systems changed at the same time. Use "Rockwell credits" or "Rockwell reports after introducing." |
| The copilot preserves knowledge before retirement. | This is Rockwell's stated purpose. No longitudinal evidence shows preservation after an expert leaves. |
| The current model powered the reported results. | Unknown. GPT-5.4 mini launched five months after deployment. |

### Do not publish as fact

- The maintenance copilot produced the factory's 43% productivity improvement.
- The copilot reduced defects by 35%.
- The copilot autonomously repairs or controls machines.
- Rockwell fine-tuned GPT-5.4 mini on technician knowledge.
- The system had no hallucinations or safety incidents.
- Every Rockwell technician contributed and approved the database.
- The 25% cost reduction and 25% inventory reduction are the same measure.
- The Singapore results have been independently audited.
- The copilot is already running in Ohio, Poland or Mexico.
- The Singapore knowledge base can be copied to another factory without new capture work.
- The project replaced technicians or reduced headcount.

## Best-supported story spine

For a later essay, the clean factual sequence is:

1. A stopped machine forced a technician through manuals and then a search for whoever remembered the fault.
2. The dependency was on accumulated human knowledge, especially on thinly staffed shifts.
3. Rockwell captured that knowledge deliberately and imposed a symptom-cause-response structure.
4. It combined that corpus with manuals and operational history, then made it available by natural-language query at the machine.
5. The tool advises; a technician still diagnoses and repairs.
6. Rockwell reports faster repair and learning, but the public numbers need attribution and carry unresolved endpoint and scope differences.
7. The wider factory results belong to a portfolio of more than 50 systems, including a separate conveyor predictor and multi-agent quality system.
8. The commercial test will be whether Rockwell can repeat the result in other plants, where the software may scale more easily than the site-specific knowledge.

That account is both useful and supportable. It does not need the stronger, unproven claim that generative AI transformed the whole factory by itself.

## Counterexample research

### Finding

No well-sourced case in this set is a complete inverse of Rockwell. The failures split
across different layers:

- Docusign and HP describe general internal assistants that employees abandoned because
  the products were generic, poorly introduced and hard to use. They are close to Nick's
  interface argument, but neither source documents a maintenance-like corpus or a narrow
  retrieval workflow.
- Air Canada is a strong, adjudicated example of inconsistent source information and
  absent answer governance. The public record does not establish that its chatbot used
  an LLM or retrieval-augmented generation.
- McDonald's and IBM tested a real-time voice-ordering system, not an information-
  retrieval assistant. Its most visible problems concerned speech, dialogue and order
  accuracy in a noisy physical setting.

The defensible comparison is therefore layered. Rockwell's account shows deliberate
knowledge capture, a narrow operational job and point-of-work access. Docusign supplies
the closest contrast on interface and adoption. Air Canada can supply a short second
contrast on keeping an assistant's answers consistent with the authoritative policy.
McDonald's should not appear as evidence that retrieval assistants fail when they are
poorly designed.

### Candidate comparison

| Candidate | What is verified | Source quality | Exact failure layer | Closeness to Rockwell | Overinterpretation risk |
|---|---|---|---|---|---|
| Docusign AskGPT 1.0 | A lead designer's account says nearly 400 employee-survey comments called the internal tool "clunky," "slow" and "terrible." The old interface opened on a blank prompt, buried custom-assistant management and had no response-feedback control. The author says the September 2025 redesign left the underlying AI capabilities largely unchanged, then reports 27% more daily new chats and 16% more active users in the following month. | [Personal portfolio of the designer who says he led the work](https://www.innovatingux.com/case-studies/askgpt), with screenshots and concrete process detail. It is a firsthand practitioner account but also a promotional portfolio. Docusign has not publicly corroborated the quoted survey, baselines or outcome measures, and no raw analytics are available. | Product discovery, start-state design, feature discoverability, feedback and trust. The account establishes an adoption failure more clearly than a model or retrieval failure. | Moderate. It is an internal conversational AI product and the redesign shows that access alone is not usable access. It is less close on the job itself: AskGPT was a broad workplace tool, not a narrow, time-sensitive retrieval system embedded beside machinery. | Do not say Docusign's AI failed technically, that its knowledge base was poor, or that the redesign improved answer accuracy. The source says the capabilities barely changed and reports engagement, not business outcomes. "Nobody was using it" is the author's headline language, not a literal zero-user measure. |
| HP internal AI assistant | A product manager's account says HP launched a broad internal assistant for document access, content generation and automation, then saw low adoption, inconsistent use and abandonment. The page describes generic answers, no guidance and weak connection to employee jobs. It says a 200-person structured pilot added role-based onboarding, department personas, prompt templates, feedback and workflow integration, and reports Q1 adoption growth of 40% and satisfaction moving from 2.8 to 4.1. | [Personal consulting portfolio of the product manager](https://www.anamariazamfirache.com/casestudies/empowering-employees-with-ai-the-product-strategy-behind-an-enterprise-internal-assistant). The page provides a named role and implementation detail but ends in a sales call. No HP-owned case study, raw measures or independent reporting was found. "12,000 impacted" does not mean 12,000 active users. | Use-case selection, persona fit, onboarding, workflow integration and change management. It is a broad-tool problem before it is a corpus problem. | Moderate to low. The assistant included document access, so retrieval was within scope, but it was also expected to generate content and automate tasks for very different departments. Rockwell instead started from one technician job. | The source is too weak to carry a headline counterexample. Do not state that HP wasted an investment, had zero users, or verified a 40% company-wide adoption increase. The page does not define adoption, the Q1 denominator or the relation between pilot and global rollout. |
| Air Canada chatbot | The British Columbia Civil Resolution Tribunal found that Air Canada's website chatbot gave Jake Moffatt inaccurate information about retroactive bereavement fares while another page on the same website gave the correct policy. The tribunal found negligent misrepresentation and ordered C$650.88 in damages plus interest and fees. It rejected the idea that customers should have to cross-check one part of Air Canada's website against another. | [Published tribunal decision](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html), also reproduced in [CanLII's case roundup](https://blog.canlii.org/tag/hotoncanlii/page/3/). This is the strongest primary evidence in the set for what happened. It is a British Columbia small-claims tribunal decision, not an appellate ruling or a controlled technical postmortem. | Source-of-truth consistency, answer validation, content ownership and organizational accountability. The customer interface was easy to reach; the answer behind it was wrong. | Moderate on information governance, low on the LLM claim. Both cases concern getting operational information to a person at the moment of need. Air Canada was public customer service rather than internal maintenance, and the decision does not identify the chatbot architecture. | Do not call the answer an LLM hallucination or a RAG failure. The record does not establish an LLM, embeddings or generative AI. Do not generalize one tribunal decision into universal chatbot law. The useful comparison is narrower: an interface can retrieve or produce an answer cleanly while the organization has failed to keep that answer aligned with its authoritative policy. |
| McDonald's and IBM automated order taking | McDonald's and IBM announced the partnership in 2021 and named language, dialect and menu variation as scaling problems. McDonald's ended the IBM automated order-taking test in 2024. AP documented public examples of incorrect orders and reported, via CNBC's unnamed sources, problems with accents and dialects. McDonald's declined to publish accuracy and said it still expected drive-through voice ordering to have a future. | [McDonald's and IBM's launch statement](https://corporate.mcdonalds.com/corpmcd/our-stories/article/IBM-McD-Tech-Labs.html) verifies intent and scope. [Associated Press](https://apnews.com/article/mcdonalds-ai-drive-thru-ibm-bebc898363f2d550e1a0cd3c682fa234) verifies that the trial ended and reports visible errors. The reason for ending the partnership was not disclosed, and the accent claim rests on unnamed sources one publication removed. | Speech recognition, turn-taking, environmental audio, menu interpretation and transaction accuracy. This was a real-time automation problem at the point of sale. | Low. Both put conversational systems in a physical workplace, but Rockwell's technician initiates retrieval from a curated corpus and remains in control. McDonald's system had to hear a customer, infer an order and write a transaction under noisy conditions. | Do not say McDonald's cancelled the trial because accuracy was below a threshold. No threshold or official reason is public. Do not describe the system as an LLM or RAG system. Viral videos show errors, not representative error rates. |

### Docusign AskGPT in more detail

The Docusign account is unusually useful because it describes a failed first version and
a recovery while claiming little change to the underlying AI. AskGPT 1.0 presented an
empty prompt with no orientation, examples or templates. A high-value feature for making
custom assistants sat in a narrow side panel. Users could not rate or flag bad output.
The designer says many employees returned to consumer tools instead.

The redesign made history and assistant management visible, supplied four starter tasks,
added a live preview while creating assistants, and tested the working build with 13
people from seven departments. One month after launch, the author reports more chats,
users, attachments and assistants.

That is a clean contrast to Rockwell's point-of-work design. The Rockwell technician
does not face a general blank box and have to invent a use for it. A machine fault already
defines the task, and the interface can surface likely causes, earlier fixes and manual
steps beside the asset. Docusign suggests that a capable model behind an unstructured
blank prompt can remain practically unavailable.

There are hard limits. The portfolio does not document AskGPT's knowledge sources, search
architecture, answer quality or business return. Its author measured engagement for one
month and has an incentive to attribute improvement to design. It supports "poor UX
suppressed use," with attribution. It does not support "Docusign built retrieval wrong."

### HP in more detail

The HP account reinforces the same point but has weaker provenance and a broader product.
The first version tried to serve document access, writing and automation across Sales,
Marketing, HR and R&D. The author's diagnosis was that it did not know the user's role,
offered no useful starting guidance and returned generic results. The proposed recovery
started with interviews and jobs-to-be-done, then added department personas, contextual
prompts, role-based access, business rules and workflow integration.

This mirrors Rockwell's choice to define the technician's task before choosing the
interface. It also shows why "an assistant for everyone" is not the opposite of an
assistant designed for one recurring job. But the HP page is a consultant's portfolio,
not an HP disclosure. It supplies supporting texture, not evidence strong enough for the
essay's main contrast. Docusign is more concrete and has screenshots, user-test counts
and a dated launch.

### Air Canada in more detail

Air Canada gives the strongest evidence of what happens when the answer layer and the
source of truth diverge. The chatbot told a customer that he could claim a bereavement
fare after buying and travelling. The linked policy page said the fare could not be
claimed retroactively. Air Canada later relied on the correct page to deny the claim.

The tribunal's criticism was organizational, not architectural. Air Canada was
responsible for information across its website and did not take reasonable care to keep
the chatbot accurate. This maps to the open questions in the Rockwell case: who approves
an entry, how conflicting advice is resolved, whether an answer cites its source, and
what happens when the corpus changes.

Air Canada should remain a short governance comparison. Calling it an example of an LLM
used badly would be factually unsafe. The decision does not say how the chatbot generated
or selected its answer.

### McDonald's and IBM in more detail

McDonald's is visually tempting because both systems operated at a physical point of
work and used conversational interaction. The technical jobs are too different for a
clean comparison. The drive-through system had to separate voices from background noise,
handle accents and interruptions, interpret a changing menu and enter the right order.
Rockwell's assistant answers a technician's deliberate query from controlled internal
material and leaves the action to the technician.

The public evidence also does not prove a simple failure narrative. McDonald's ended the
IBM test, but said the work increased its confidence that voice ordering would be part of
its future. It did not publish accuracy or say that visible mistakes caused the decision.
This case can illustrate poor task-model fit only if the essay spends several sentences
on caveats. For a short piece, it adds noise.

### Recommendation for the essay

Use Docusign AskGPT as the primary counterexample, but define it precisely as an
interface and adoption failure that the company later repaired. Attribute every fact and
metric to the lead designer's portfolio. The strongest sentence available is not that
Docusign's AI was bad. It is that employees rejected the first product even though the
redesign reportedly changed the experience more than the underlying AI.

Use Air Canada, if needed, as a brief secondary example of the other half of Nick's
argument. A good interface cannot rescue an answer layer that disagrees with the
authoritative policy. Label it a chatbot and information-governance failure, not an LLM
or RAG failure.

Do not use HP as a named proof point unless a stronger HP-owned or independently reported
source appears. Its story is plausible and closely aligned, but its current evidence is a
sales-oriented personal case study with undefined measures. Exclude McDonald's from this
essay. It tested a harder and materially different automation task, and the reason the
IBM partnership ended remains undisclosed.

The contrast should not claim that one company did every layer wrong while Rockwell did
every layer right. The evidence supports a more useful sequence:

1. Rockwell chose a bounded retrieval job and did the manual work of building a corpus.
2. Docusign shows that employees may still abandon a tool when the interface gives them
   no starting point, hides its value and provides no feedback path.
3. Air Canada shows that an accessible answer is dangerous when nobody keeps it
   consistent with the source of truth.

Together, the cases support Nick's argument without inventing a perfect failed twin for
Rockwell.

## Internal operational counterexample follow-up

### Bottom line

There is a strong **internal** counterexample, but not a perfect failed LLM twin. NASA's
Lessons Learned Information System is the most defensible case for the essay. It was an
internal repository meant to carry technical and operational knowledge from one project
to the next. Two official audits found that people did not reliably contribute to it or
use it, that finding relevant lessons was difficult, and that the material was often
outdated or disconnected from engineering standards. Use it as a historical knowledge-
management contrast, with the explicit caveat that it was not an LLM, not a factory
maintenance assistant, and not delivered at the physical point of work.

The anonymous Tenten metal-stamping story is the closest literal mirror of Rockwell, but
its evidence is too weak to carry the contrast as fact. The academic detergent-factory
study is the best direct evidence that Rockwell's design choices address real shop-floor
failure modes, but it is a prototype study rather than a documented failed company
rollout.

### Candidate assessment

| Candidate | Corpus and retrieval | Point-of-work UX and adoption | Source and identity | Defensible use |
|---|---|---|---|---|
| NASA Lessons Learned Information System | NASA created an internal repository for lessons from engineering, science, operations, maintenance and other work. GAO found in 2002 that lessons were not routinely captured or shared, old entries were not reviewed for currency, broad coverage made relevant material hard to find, and managers fell back on reviews and conversations with colleagues. The 2012 NASA Inspector General audit found only 16 of 28 surveyed project managers used LLIS and only 12 contributed; users called it outdated, not user friendly and often irrelevant. Six of ten centers did not cross-reference lessons to management or engineering standards. | This was a searchable web repository rather than a tool embedded in a specific workflow. The audits do not report a factory-like adoption rate, but they document weak contribution and use over a decade. | Named organization; primary government audits from GAO and NASA OIG. Strongest provenance in this set. | Best counterexample. It supports the claim that a repository does not become useful merely because an organization fills it with lessons: capture, maintenance, structure, retrieval and workflow all matter. Caveat every comparison as pre-LLM and non-factory. Do not imply Rockwell solved every problem NASA had. |
| Two European detergent factories, Freire et al. (2024) | The researchers built GPT-3.5 RAG over standard operating documents and operator-submitted issue reports. Reports were structured around location, issue, cause and solution, with separate source classes and human approval. Operators nevertheless warned that an incomplete or stale knowledge base would become useless, that maintenance consumed unavailable man-hours, and that generic or insufficiently detailed answers discouraged use. | The study observed concrete interface failures: factory noise made voice unreliable; headsets were uncomfortable; some older operators struggled with the smartphone; networks sometimes caused 30-second waits or no response. One factory had previously bought tablets for documentation that were never adopted. An operator also blocked a context-tracking camera. | Detailed academic field study at two unnamed factories, with 40 participants and four prototype phases. It names the LLM and retrieval design, but the factories are anonymous. The authors state that actual-work tests were brief, generally about 30 minutes, and do not establish long-term adoption or business outcomes. | Use as corroborating evidence, not as "a company tried Rockwell's idea and failed." It shows that the exact corpus, retrieval and factory-interface problems are real and can break deployment. The failed tablet attempt was not established as AI, and the LLM assistant itself was not a failed production rollout. |
| Anonymous metal-stamping operation, Tenten AI (2026) | Tenten says an initial generic assistant answered with manual chapter references and attracted mainly new hires. It says connecting the assistant to maintenance work orders, quality exceptions and line-specific SOPs through cited RAG raised weekly active adoption from 18% to 34%. | Tenten says a standalone web login barely moved adoption to 38%, while embedding an already-contextualized sidebar in the MES work-order screen moved it to 51%; shift champions and task-based measurement reportedly took it to 73% over 14 weeks. | Anonymous client; vendor-authored marketing case study; no raw analytics, methodology, customer confirmation or independent reporting. The page calls it an AI copilot and RAG system but does not identify the model or enough architecture to verify the claim that the "tool" stayed the same while its data and interface changed. | Closest narrative match, weakest proof. It can be mentioned only as an attributed vendor account: "Tenten says..." The precise caveat is that neither the customer nor the adoption figures are independently verifiable. It should not be the essay's main counterexample. |

### Recommended contrast

Use NASA in two or three sentences. The clean comparison is that NASA had a named,
internal system for preserving hard-won technical knowledge, yet official audits found
that employees did not consistently feed it, could not reliably find the relevant lesson
and often returned to colleagues instead. Rockwell's story is interesting because it
appears to attack those same failure points: deliberate technician interviews, a symptom-
cause-response structure, semantic retrieval and access beside the machine.

The caveat should sit in the sentence, not in a footnote: **NASA is a pre-LLM knowledge-
management failure, not evidence that a factory maintenance copilot failed.** If the
essay needs a modern factory-specific supporting line, cite the Freire study's observed
friction rather than presenting its unnamed factories as a failed rollout. Exclude the
Tenten story unless the text explicitly labels it an unverified vendor case study.

## Draft claim audit

Draft checked 2026-09-29: `app/src/content/essays/rockwell-knowledge-at-the-machine.md`.

- The Microsoft customer story was opened and confirms the technician interviews, 20-to-30-year experience range, tablet and smart-glasses access, 33% company-reported downtime reduction, and nine-to-three-month troubleshooting competency claim.
- The IndustryWeek report was opened and confirms 394 pieces of equipment, the symptom-cause-response structure, the disclosed operational data sources, and the company-reported 18-to-12-minute mean-time-to-repair change.
- The 2002 GAO report was opened and confirms the 27%, 58%, and 53% survey figures used in the NASA contrast.
- The 2012 NASA Inspector General audit was opened and confirms the 28-project sample, 16 users, 12 contributors, and respondent complaints that LLIS was outdated, not user friendly, and often irrelevant.
- The draft keeps the broader World Economic Forum factory figures out of the assistant-specific result, describes Azure AI Search as the retrieval component, and makes no claim that the copilot controls equipment.
