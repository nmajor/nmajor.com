# Wikipedia:Signs of AI writing (WP:AICATCH) — the STRUCTURAL, STYLE, MARKUP and "ineffective indicator" sections

- URL: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- Captured via Special:Export (raw wikitext, so citations are visible inline). Date accessed: 2026-08-18.
- COMPANION FILE: `lexical-wikipedia-signs-of-ai-writing.md` in this folder already captured the VOCABULARY sections of the same page. This file captures the sections that belong to the structural/syntactic/rhetorical lane, which that file did not take.
- EVIDENCE TIER: **asserted, but citation-gated and example-rich**. Editorial consensus of people who patrol thousands of suspected-AI edits, with every claim footnoted to a named study (Reinhart PNAS, Russell ACL 2025, Kobak, Juzek, Geng & Trotta, Ju/Blix/Williams ACL 2025, Washington Post, The Economist) and illustrated with real diffs.

## The four things in here that are NEW for our lane

1. **The participial tail is sourced to Reinhart's PNAS measurement.** WP:SUPERFICIAL: "This is often done by attaching a present participle ('-ing') phrase at the end of sentences." Reinhart measured GPT-4o at 5.3x the human rate for present participial clauses. So our existing "-ing significance tail" ban has a hard number behind it, and the pattern is broader than the significance tail: it is the participial tail as such.

2. **A list of what is MORE COMMON IN HUMAN WRITING — the inverse tells.** From the "Signs of human writing > Syntax" section, "empirically observed, over 25 years of Wikipedia writing, to be more common in Wikipedia articles written by humans than in AI-generated text":
   - simple is/has phrases ("there is a", "it has a") [cites Geng & Trotta]
   - plain words with stiff synonyms available: wrote (not authored), moved (not relocated), used (not utilized), tried (not attempted), died (not passed away)
   - **superlative or definitive statements** ("one of the best", "is the only", "was the first")
   - **hedging qualifiers and intensifiers** ("very", "perhaps", "tends to") [cites Reinhart's SI]
   - isolated wordy constructions ("as a result of", "in order to", "all of the", "a part of", "the fact that")
   NOTE THE CONFLICT WITH FOLKLORE: over-hedging is widely asserted to be an AI tell, but on this measurement hedges and intensifiers are a HUMAN signal. Tabach 2026 (in `structural-human-readers-judgement-measured.md`) also found hedging rate per 1k did not separate documents. Treat "over-hedging" as unproven and flag it as a *substance* problem (it refuses to commit), not as an AI tell.

3. **"Ineffective indicators" — an editor community's own list of false tells:** perfect grammar; mixed casual/formal register; "bland" or "robotic" prose; "fancy"/"academic"/"formal" prose; transition words in isolation; unsourced content; bizarre wikitext; correct wikitext. Verbatim on the fancy-prose one: "While LLMs disproportionately favor certain words and phrases, many of which are longer and have more difficult readability scores than some of their synonyms, these are *specific words*. The correlation does not extend to all formal, academic, or 'fancy'-sounding prose."

4. **Two measured references I had not seen elsewhere**, both cited in the em dash section:
   - Washington Post interactive, Merrill / Chen / Kumer, 13 Nov 2025, "What are the clues that ChatGPT wrote something? We analyzed its style." https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/
   - The Economist, 30 July 2026, "How to spot AI writing" https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing — per Wikipedia's summary of it: **"A July 2026 study found that of contemporary models only Claude used em dashes more than professional writers, and ChatGPT used them less."** If that holds, the em dash tell has now inverted for the most-used model, which matters for any absolute ban justified on "it reads as AI."
   - Plus a concrete typographic detail: "AI-generated em dashes are usually surrounded by spaces, contrary to common typographic guidelines (which most human users of em dashes will be familiar with)."

## VERBATIM WIKITEXT SECTIONS



### Content > Superficial analyses (WP:SUPERFICIAL) — the participial-tail rule

```
===Superficial analyses===
{{shortcut|WP:SUPERFICIAL}}
{{tmbox|image=none|text=Words to watch: {{strong|''highlighting/underscoring/emphasizing ...'', ''ensuring ...'', ''reflecting/symbolizing ...'', ''contributing to ...'', ''cultivating/fostering ...'', ''encompassing ...'', ''enhancing ...'', ''valuable insights'', ''align/resonate with'', }} }}
AI chatbots tend to insert superficial analysis of information, often in relation to its significance, recognition, or impact.<ref name="Reinhart">{{cite journal |last1=Reinhart |first1=Alex |last2=Markey |first2=Ben |last3=Laudenbach |first3=Michael |last4=Pantusen |first4=Kachatad |last5=Yurko |first5=Ronald |last6=Weinberg |first6=Gordon |last7=Brown |first7=David West |title=Do LLMs write like humans? Variation in grammatical and rhetorical styles |journal=[[Proceedings of the National Academy of Sciences]] |volume=122 |issue=8 |date=2025-02-25 |issn=0027-8424 |pmc=11874169 |doi=10.1073/pnas.2422455122 |url=https://pnas.org/doi/10.1073/pnas.2422455122 |access-date=2026-01-29}}</ref> This is often done by attaching a [[Participle#Forms|present participle]] ("-ing") phrase at the end of sentences, sometimes with [[WP:AIWEASEL|vague attributions]] to third parties (see below).<ref name="Reinhart" /><ref name="chronicle"/>

For the purpose of Wikipedia, such comments are usually [[WP:SYNTH|synthesis]] or unattributed opinions. Newer chatbots with [[retrieval-augmented generation]] (for example, an AI chatbot that can search the web) may attach these statements to [[#Canned emphasis on notability, attribution, and media coverage|named sources]]—e.g., "Roger Ebert highlighted the lasting influence"—regardless of whether those sources say anything close. 

'''Examples'''
{{collapse top|expand=yes|From {{diff||1161677884|label=this June 2023 revision}} to [[Douéra]]}}
As of the April 2008 census, the population of Douera stood at approximately 56,998 inhabitants, {{highlight|creating a lively community within its borders.}} Situated in the central-north region of the country, Douera enjoys close proximity to the capital city, Algiers, {{highlight|further enhancing its significance as a dynamic hub of activity and culture.}} With its coastal charm and convenient location, Douera captivates both residents and visitors alike, {{highlight|offering a diverse range of experiences against the backdrop of Algeria's stunning natural beauty.}}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1240127604|this August 2024 revision]] to [[Darbhanga Junction railway station]]}}
It holds a pivotal place in the [[East Central Railway Zone]] of [[Indian Railways]], {{highlight|serving as a major railway hub with historical significance.}} The station has {{RailGauge|1676mm|lk=on}} [[broad gauge]] along with 8 tracks and 6 platforms. [...] Historically, it has been crucial for linking [[Darbhanga]] with significant cities like [[Delhi]], [[Patna]], and [[Kolkata]], {{highlight|facilitating the movement of passengers and goods.}} The station has supported various services, including passenger trains and express trains like the [[Satyagrah Express]] and [[Mithila Express]], {{highlight|contributing to the socio-economic development of the region.}} [...] Over the years, Darbhanga Junction has seen several upgrades and modernization efforts aimed at improving facilities and operational efficiency, {{highlight|reflecting its continued relevance in the regional and national transportation landscape.}}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1253182873|this October 2024 revision]] to [[African-American culture]]}}
The civil rights movement emerged as a powerful continuation of this struggle, {{highlight|emphasizing the importance of solidarity and collective action in the fight for justice.}} This historical legacy has influenced contemporary African-American families, {{highlight|shaping their values, community structures, and approaches to political engagement.}} Economically, the enduring impacts of systemic inequality have led to both challenges and innovations within African-American communities, {{highlight|driving a commitment to empowerment and social change that echoes through generations.}}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1256905241|this November 2024 revision]] to [[McAllen Texas Temple]]}}
Situated just a few miles from the U.S.-Mexico border—{{highlight|a line that often represents separation and division}}—the temple {{highlight|stands as a counter-symbol, emphasizing unity, togetherness, and transcendent faith.}} In a region where many families and communities span both countries, the temple {{highlight|fosters a sense of connection and shared purpose.}} Through its inclusive design and symbolic features, the McAllen Texas Temple is seen as a bridge across divides, {{highlight|embodying the spirit of unity that underlies its sacred purpose.}} Its bilingual monument sign, with inscriptions in both English and Spanish, {{highlight|underscores its role in bringing together Latter-day Saints}} from the United States and Mexico.

The temple’s architectural and decorative elements are thoughtfully imbued with local symbolism, {{highlight|reflecting the rich culture and landscape of the Rio Grande Valley.}} Citrus blossom motifs, seen throughout the exterior and interior, {{highlight|celebrate the area’s agricultural roots and its vital citrus industry.}} The temple’s color palette of blue, green, and gold {{highlight|resonates with the region’s natural beauty,}} symbolizing Texas bluebonnets, the Gulf of Mexico, and the diverse Texan landscapes. These colors and patterns {{highlight|evoke enduring faith and resilience, qualities that resonate deeply within this close-knit, cross-border community.}}

In design and structure, the McAllen Texas Temple {{highlight|honors the Spanish colonial heritage that has historically shaped the area.}} By incorporating these architectural elements, the temple connects to both the Latin American influences and the historic roots of the border region, {{highlight|creating a space where the past and present come together.}}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1279776010|this March 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Jacques Blois (linguist)|Draft:Jacques Blois]]}}
These works are now part of the **Collections of the National Museum of Education - Réseau Canopé (France)**, {{highlight|highlighting their historical and pedagogical significance.}}

His influence persists in more recent studies. In 2010, ''Les néologismes dans l'hebdomadaire L'Express'' (1980) was cited in the ''Proceedings of the 1st International Congress on Neology in Romance Languages'' [...] {{highlight|demonstrating the ongoing relevance of his research on lexical evolution.}} [...] In 2004, the ''Cahiers de lexicologie'' (issues 84-87), published by the [[French National Centre for Scientific Research|CNRS]], cited the ''Grammaire Blois'', {{highlight|confirming its relevance in modern research.}} [...]

These citations, spanning more than six decades and appearing in recognized academic publications, {{highlight|illustrate Blois' lasting influence in computational linguistics, grammar, and neology.}} 

Fridrichová analyzes the distinction made by Blois and Bar between acronyms, abbreviations, and truncations, {{highlight|emphasizing their critical view on the impact of truncations in the French language.}} 

[...]

Fridrichová highlights that Blois and Bar perceive truncations as a **distortion of the language rather than an enrichment**, {{highlight|a perspective that still fuels linguistic debates today.}} This citation {{highlight|demonstrates the **enduring relevance of Blois's work in modern linguistic studies** and its **critical reception by researchers**.}}
}}
{{collapse bottom}}

{{collapse top|From [[Wikipedia:AI noticeboard#c-Munfarid1-20260726114900-Munfarid1-20260726113700|this July 2026 AI noticeboard comment]]}}
Answer: Here are several neutral, Wikipedia-style paraphrases:
<br>1. **Recommended:**<br>
> The cover of Columbia's Tunisian record supplement featured the popular Tunisian Jewish singer Louisa Tounsia, {{highlight|reflecting the public image that the record company sought to project.}}
<br>2. **More formal:**<br>
> Louisa Tounsia, one of Tunisia's most popular Jewish performers, appeared on the cover of Columbia's Tunisian record supplement, {{highlight|underscoring the image that the label aimed to cultivate.}}
<br>3. **Closer to the original:**<br>
Columbia's Tunisian record supplement featured Louisa Tounsia on its cover, {{highlight|highlighting the image that the record label wished to promote through its marketing.}}
{{collapse bottom}}

```


### Content > Outline-like conclusions about challenges and future prospects (WP:FACESCHALLENGES)

```
=== Outline-like conclusions about challenges and future prospects ===
{{shortcut|WP:FACESCHALLENGES}}
{{tmbox|image=none|text=Words to watch: {{strong|''Despite its... faces several challenges...'', ''Despite these challenges'', ''Challenges and Legacy'', ''Future Outlook''&nbsp;...}}}}
Many LLM-generated Wikipedia articles include a "Challenges" section, which typically begins with a sentence like "Despite its [positive/promotional words], [article subject] faces challenges..." and ends with either a vaguely positive assessment of the article subject,<ref name="Russell"/> or speculation about how ongoing or potential initiatives could benefit the subject. Such paragraphs usually appear at the end of articles with a rigid outline structure, which may also include a separate section for "Future Prospects."

Note: This sign is about the rigid formula, not simply the mention of challenges or challenging.

'''Examples'''

{{collapse top|From [[Special:Diff/1189640895|this December 2023 revision]] to [[International economic law]]}}
{{fake section|level=2|Challenges and Future Directions}}
As the global economy continues to evolve, international economic law {{highlight|faces new challenges and opportunities.}} [...] The future of international economic law lies in its ability to {{highlight|adapt to these emerging trends|lightgreen}} and continue to facilitate a stable and equitable global economic order.
{{collapse bottom}}

{{collapse top|From {{diff||1201557771|label=this January 2024 revision}} to [[Hydrocarbon economy]]}}
The future of hydrocarbon economies {{highlight|faces several challenges,}} including[...] This section would speculate on {{highlight|potential developments|lightgreen}} and the changing landscape of global energy.
{{collapse bottom}}

{{collapse top|From {{diff||1218690551|label=this April 2024 revision}} to [[Korattur]]}}
{{highlight|Despite its industrial and residential prosperity, Korattur faces challenges}} typical of urban areas, including[...] With its {{highlight|strategic location and ongoing initiatives|lightgreen}}, Korattur {{highlight|continues to thrive|lightgreen}} as an integral part of the Ambattur industrial zone, embodying the synergy between industry and residential living.
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1241301672|this August 2024 revision]] to [[Amu Television]]}}
Operating in the current Afghan media environment {{highlight|presents numerous challenges,}} including[...] {{highlight|Despite these challenges,|lightgreen}} Amu TV has managed to {{highlight|continue to provide a vital service|lightgreen}} to the Afghan population​​.
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1277706730|this February 2025 revision]] to [[Pyroelectricity]]}}
{{highlight|Despite their promising applications, pyroelectric materials face several challenges}} that must be addressed for broader adoption. One key limitation is[...] {{highlight|Despite these challenges|lightgreen}}, the versatility of pyroelectric materials {{highlight|positions them as critical components|lightgreen}} for sustainable energy solutions and next-generation sensor technologies.
{{collapse bottom}}

{{collapse top|From {{diff||1279428086|label=this March 2025 revision}} to [[Panama Canal]]}}
{{highlight|Despite its success, the Panama Canal faces challenges}}, including[...] {{highlight|Future investments in technology, such as automated navigation systems, and potential further expansions could enhance the canal’s efficiency|lightgreen}} and maintain its relevance in global trade.
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1297629115|this June 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Socio-cognitive engineering|Draft:Socio-cognitive engineering]]}}
For example, while the methodology supports transdisciplinary collaboration in principle, applying it effectively in large, heterogeneous teams {{highlight|can be challenging.}} [...]

SCE continues to evolve {{highlight|in response to these challenges.|lightgreen}}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1363932615|this July 2026 revision]] to [[Draft:Spanish fashion]]}}
{{fake section|level=2|Sociology, sustainability, and {{highlight|future challenges}}}}
The {{highlight|main contemporary challenge}} facing the fashion industry in Spain is its environmental impact, stemming from the production volume of fast fashion. [...]

Complementing this, the sector relies on technological research centres, such as the Textile Technology Institute (Aitex) in the Valencian Community, to develop patents for fibre-to-fibre chemical recycling, eco-design processes, and low-water-impact dyeing. These advancements aim to reduce dependence on petroleum-derived synthetic fibres and virgin cotton, marking the sector's mandatory transition towards sustainable and traceable business models {{highlight|for the coming decades|lightgreen}}.
{{collapse bottom}}

===Leads treating Wikipedia lists or broad article titles as proper nouns ===
In AI-generated articles about topics with a title that is not a [[proper name]], such as a [[Wikipedia:Manual of Style/Lists|list]], the first sentence of the lead may introduce or define the article's title as if it were a standalone real-world entity. While the [[Wikipedia:Manual_of_Style/Lead_section#Format_of_the_first_sentence|MOS]] does allow such titles to be included at the beginning of the lead "in a natural way", these AI leads tend not to be so natural.

'''Examples'''

{{blockquote|{{highlight|'''Catchment area (health)''' refers to}} the geographic area from which a health facility, such as a hospital or clinic, draws its patients.|From [[Special:Diff/1248996099|this October 2024 revision]] to now-deleted article Catchment area (health)}}

{{blockquote|{{highlight|EuroGames editions is the chronological list}} of the biennial EuroGames, a European LGBT+ multi-sport event organized by the European Gay and Lesbian Sport Federation (EGLSF).|From [[Special:Diff/1299100685|this July 2025 revision]] to [[EuroGames editions]]}}

{{blockquote|{{highlight|The “'''List of songs about Mexico'''” is a curated compilation}} of musical works that reference Mexico its culture, geography, or identity as a central theme.|From [[Special:Diff/1300476090|this July 2025 revision]] to [[List of songs about Mexico]]}}

```


### Content > "Awards and recognition" section / "X and Y" headers

```
=== "Awards and recognition" section ===

Section or subsection headers in the format of "X and Y" are common in (but not exclusive to) AI generated articles. An "Awards and recognition" section is particularly common (indeed, also simply a "Recognition" section). This is a manifestation of AI-generated text's undue and particular focus on [[WP:AILEGACY|legacy and trends]] and its tendency to vaguely allude to [[WP:AIATTR|"coverage" or "recognition" of the subject]] by various outlets. While human editors may also include sections about a subject's legacy or impact on the world or their industry, the specific wording of "Awards and recognition" is nearly ubiquitous in AI generated articles.

```


### Language and grammar > Negative parallelisms, Rule of three, Lexical diversity/elegant variation

```
===Negative parallelisms===
{{Shortcut|WP:AIPARALLEL}}
{{see also|Negative parallelism}}
When LLMs describe a subject, their output may seem as though it is clearing up a common misconception, or as though the audience may be reaching an incomplete or incorrect conclusion about that subject. This kind of contrast can come across as trying to retroactively challenge such thinking by pointing out another characteristic that the subject may possess alongside (or in the place of) one or more previously-mentioned characteristics. While it is common among human writers (especially in "common misconceptions" or "myths busted" [[listicle]]s), it is stereotypically an "AI sign." 

====Not just X, but also Y====
It is common for LLMs to use parallel constructions involving "not", "but", or "however" such as "{{xt|Not only ... but ...}}" or "{{xt|It is not just ..., it's ...}}".<ref>{{cite web |last1=Robbins |first1=Hollis |title=How to Tell if Something is AI Written |url=https://hollisrobbinsanecdotal.substack.com/p/how-to-tell-if-something-is-ai-written |website=Anecdotal Value |publisher=Substack |access-date=7 December 2025}}</ref><ref name="Russell">{{cite conference |last1=Russell |first1=Jenna |last2=Karpinska |first2=Marzena |last3=Iyyer |first3=Mohit |year=2025 |url=https://aclanthology.org/2025.acl-long.267/ |location=Vienna, Austria |title=People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text |conference=Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) |publisher=Association for Computational Linguistics |pages=5342–5373 |arxiv=2501.15654 |doi=10.18653/v1/2025.acl-long.267 |doi-access=free |access-date=2025-09-05 |via=[[ACL Anthology]] |archive-date=2025-08-29 |archive-url=https://web.archive.org/web/20250829184825/https://aclanthology.org/2025.acl-long.267/ |url-status=live }}</ref><ref name="merrill" /><ref name="economistJul2026" />

'''Examples'''
{{collapse top|From [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240824023600-HCDE Tenure|this August 2024 comment]] at [[Talk:Eric Dick (lawyer)]]}}
In your most recent exchange, you referred to another editor’s comment as "bizarre" and "totally incorrect," following up with an assertion that their viewpoint was "bogus." This choice of language is {{highlight|not only dismissive|pink}} {{highlight|but also unnecessarily harsh and confrontational}}. It shuts down the possibility of constructive dialogue and disrespects the effort that others put into contributing to this platform.

This kind of dismissive and confrontational attitude is not new. [...] This remark {{highlight|doesn’t just undermine the editor’s argument|pink}}; {{highlight|it questions their very right to participate}} based on how long they’ve been active, which is contrary to the inclusive nature that Wikipedia aims to foster. New contributors {{highlight|should be encouraged}}, {{highlight|not belittled|pink}}, and it’s disheartening to see you take such a dismissive stance.

Your sarcastic remark about adding "Eric Dick is a secret Democrat. [citation needed]" to the article further exemplifies this problematic behavior. Rather than engaging in a meaningful discussion, you chose to mock another editor’s argument, which only serves to create a hostile environment. This approach {{highlight|doesn’t help resolve disputes or improve content|pink}}; {{highlight|it only escalates tensions and discourages productive collaboration}}.

Moreover, in another instance, you accused an editor of "bludgeoning discussion with screeds of AI generated waffle" and dismissed their contributions as "acres of fanciful extrapolation on Wikipedia policies." These comments are {{highlight|not just dismissive|pink}}—{{highlight|they’re outright disrespectful}}. Accusations like these don’t belong in a professional and collaborative setting. They undermine the very spirit of Wikipedia, which is built on the idea that people with different perspectives can come together to create something valuable.

It’s important to recognize that everyone who contributes to Wikipedia—whether they’re new or experienced, whether they agree with you or not—deserves to be treated with respect. Collaboration, not confrontation, should be the goal. By continuing to engage with others in such a dismissive and harsh manner, you {{highlight|not only discourage participation|pink}} {{highlight|but also damage the collaborative spirit that is essential to Wikipedia’s success}}.
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1288184349|this April 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Self-portrait (Yayoi Kusama)|Self-portrait (Yayoi Kusama)]]}}
'''Self-Portrait''' by Yayoi Kusama, executed in 2010 and currently preserved in the famous Uffizi Gallery in Florence, constitutes {{highlight|not only a work of self-representation|pink}}, {{highlight|but a visual document of her obsessions, visual strategies and psychobiographical narratives}}.
{{collapse bottom}}

{{collapse top|From [[Wikipedia:Articles for deletion/Northern English nationalism#c-195.5.161.42-20250827212800-Aszx5000-20250827152200|this August 2025 comment]] at [[Wikipedia:Articles for deletion/Northern English nationalism]]}}
I appreciate the feedback so far, but I want to clarify something that’s being overlooked. The issue here {{highlight|isn’t just sourcing|pink}}—{{highlight|it’s framing}}. There’s a visible, growing movement around Northern English identity, documented across academic literature, social media, and grassroots activism. The fact that it doesn’t always use the exact phrase “Northern English nationalism” {{highlight|doesn’t mean it doesn’t exist|pink}}. {{highlight|Movements evolve before they’re neatly labelled}}.
	
TikTok campaigns, dialect revival, and regional symbolism (like St Oswald’s stripes) are part of a broader cultural shift. Dismissing these as “not notable” or “original research” while allowing pages on Cornish nationalism, Wessex regionalism, and Yorkshire separatism suggests an inconsistency in how regional identity is treated. {{highlight|That’s not just a sourcing issue|pink}}—{{highlight|it’s a systemic bias}}.
{{collapse bottom}}

Here is an example of a negative parallelism across multiple sentences:
{{blockquote|text=He hailed from the esteemed Duse family, renowned for their theatrical legacy. Eugenio's life, however, took a path that intertwined both personal ambition and familial complexities.|title=From [[Special:Diff/1284729136|this April 2025 revision]] to [[Eugenio Duse]]}}

====Not X, but Y====
Another common LLM pattern is parallelisms that explicitly state that a particular item doesn't possess the first characteristic at all. Such constructions are often expressed as "{{xt|It's not ..., it's ...}}" or "{{xt|no ..., no ..., just ...}}".<ref name="Kriss"/><ref name="economistJul2026" />

'''Examples'''
{{collapse top|From [[Special:Diff/1288356293|this May 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Self-portrait (Yayoi Kusama)|Self-portrait (Yayoi Kusama)]]}}
The viewer is presented with a self-image that {{highlight|is not grounded in visual mastery|pink}}, {{highlight|but in what Amelia Jones terms “the performative enactment of subjectivity”}}.

[...]

This dispersal {{highlight|is not dissolution|pink}}. {{highlight|Rather, it constitutes what Deleuze might describe as “becoming”}}—an identity in flux, constituted through iterative difference. Through this lens, Kusama’s self-portrait is {{highlight|not a mirror|pink}} {{highlight|but a portal}}: {{highlight|not a representation of self|pink}}, {{highlight|but a mechanism}} for its constant reinvention.
{{collapse bottom}}

{{collapse top|From [[Wikipedia:Articles for deletion/Lilly Contino#c-Momentoftrue-20250617223200-Lilly Contino|this June 2025 comment]] at [[Wikipedia:Articles for deletion/Lilly Contino]]}}
You say these sources “cover multiple events”? False. They echo the same viral incident and do it through a limited lens. {{highlight|This isn’t WP:NBIO|pink}} — {{highlight|it’s WP:1EVENT in disguise}}, trying to wear a press badge like armor.
	
[...]
	
Now let’s talk BLP1E: This person is only in the news because of one isolated controversy. {{highlight|Not a career, not a body of work, not sustained relevance|pink}} — {{highlight|just an algorithmic moment}}. And if we’re really upholding Wikipedia’s values, we don’t preserve pages built on the backs of virality alone, especially when it risks long-term harm to a living subject without lasting notability.
	
“Might as well get back on topic.”
	
Then let’s stay on topic, and the topic {{highlight|is not who feels warm fuzzies from visibility|pink}}, {{highlight|it’s whether this article meets the threshold for inclusion}}. It doesn’t.
	
And finally — if you don’t want “a wall of text,” maybe don’t build a wall of shallow logic and expect people not to knock it down. {{highlight|This ain’t bludgeoning|pink}} — {{highlight|it’s surgical teardown}} of a weak argument hiding behind fake neutrality.
{{collapse bottom}}

====X rather than Y====
This pattern may also be reversed, a construction particularly common in Grok output.

'''Examples'''
{{blockquote|Chiang's strategy emphasized military suppression of these holdouts to enforce subordination, {{highlight|prioritizing empirical consolidation of power amid fragmented loyalties}} {{highlight|rather than ideological purity|pink}}.|From [[Special:Diff/1349156160|this April 2026 revision]] to [[First Battle of Guilin]], which explicitly states it is from Grokipedia}}

===Rule of three===
{{shortcut|WP:RO3}}
LLMs overuse the [[Rule of three (writing)|rule of three]]. This can take different forms, from "adjective, adjective, adjective" to "short phrase, short phrase, and short phrase".<ref name="Russell"/><ref name="Kriss"/><ref name="economistJul2026" /> LLMs often use this structure to make [[#Superficial analyses|superficial analyses]] appear more comprehensive.

'''Examples'''
{{blockquote|
* **Standard Rotary Saws**: Typically used for drywall and light materials.
* **Heavy-Duty Rotary Saws**: Designed for tougher materials such as {{highlight|tiles, metals, and plastics}}.
* **Corded and Cordless Versions**: Corded rotary saws offer continuous power, while cordless versions provide portability and convenience
[...]
* **Construction and Renovation**: For cutting {{highlight|drywall, plywood, and other construction materials}}.
* **Electrical and Plumbing**: To create openings for {{highlight|electrical outlets, switches, and plumbing fixtures}}.
* **Hobby and Craft**: Used in {{highlight|model making, woodworking, and other craft projects}}.
* **Automotive**: Employed in auto body repair and modification tasks.
|From [[Special:Diff/1237779206|this July 2024 revision]] to [[Rotary saw]] (note that these are [[WP:AILIST|canned-format lists]] that used [[WP:MARKDOWN|Markdown]])}}

===Lexical diversity/elegant variation===
{{For|a non-AI-specific style essay about this|Wikipedia:The problem with elegant variation}}
{{Further|Lexical diversity}}
{{shortcut|WP:AIELEVAR}}
Generative AI has a repetition-penalty code, meant to discourage it from reusing words too often.<ref name="chronicle">{{cite web |last=Belcher|first=Wendy|title=10 Ways AI Is Ruining Your Students' Writing.|website=Chronicle of Higher Education|date=September 16, 2025|url=https://www.chronicle.com/article/10-ways-ai-is-ruining-your-students-writing|access-date=October 1, 2025|archive-date=October 1, 2025|archive-url=https://web.archive.org/web/20251001071208/https://www.chronicle.com/article/10-ways-ai-is-ruining-your-students-writing/|url-status=live}}</ref> This pattern has also been observed on Wikipedia on a broad level: both when comparing Wikipedia text from before 2023 to Wikipedia text from after 2023, and comparing the older Wikipedia text to "Wikipedia-style articles" generated by GPT-4o-mini and Gemini-1.5-Flash.<ref name="huang" />

Note: If a user adds multiple pieces of AI-generated content in separate edits, this tell may not apply, as each piece of text may have been generated in isolation.

'''Examples'''
{{sidebox|text=
{{legend|pink|Soviet artistic constraints}}
{{legend|lightblue|Non-conformist artists}}
{{legend|plum|Their creativity}}
}}
{{blockquote|
Vierny, after a visit in Moscow in the early 1970’s, committed to supporting artists resisting {{highlight|the constraints of socialist realism|pink}} and discovered Yankilevskly, among others such as Ilya Kabakov and Erik Bulatov. In {{highlight|the challenging climate of Soviet artistic constraints|pink}}, Yankilevsky, alongside other {{highlight|non-conformist artists|lightblue}}, faced obstacles in expressing {{highlight|their creativity|plum}} freely. Dina Vierny, recognizing {{highlight|the immense talent|plum}} and the struggle {{highlight|these artists|lightblue}} endured, played a pivotal role in aiding {{highlight|their artistic aspirations|plum}}. [...]

In this new chapter of his life, Yankilevsky found himself amidst a community of {{highlight|like-minded artists|lightblue}} who, despite diverse styles, shared a common goal—to break free from {{highlight|the confines of state-imposed artistic norms|pink}}, particularly socialist realism. [...]

The move to Paris facilitated an environment where Yankilevsky could further explore and exhibit {{highlight|his distinctive artistic vision|plum}} without {{highlight|the constraints imposed by the Soviet regime|pink}}. Dina Vierny's unwavering support and commitment to the {{highlight|Russian avant-garde artists|lightblue}} played a crucial role in fostering a space where {{highlight|their creativity|plum}} could flourish, contributing to the rich tapestry of artistic expression in the vibrant cultural landscape of Paris. Vierny's commitment culminated in the groundbreaking exhibition "Russian Avant-Garde - Moscow 1973" at her Saint-Germain-des-Prés gallery, showcasing the {{highlight|diverse yet united front of non-conformist artists|lightblue}} challenging {{highlight|the artistic norms|pink}} of their time.
|From [[Special:Diff/1205035512|this February 2024 revision]] to [[Vladimir Yankilevsky]]}}

It must be noticed however that editors who are not native English speakers might prefer to avoid repeated words as well. For example Italian schools often teach to avoid repeating words.<ref name="birattari2020">{{cite web |last1=Birattari |first1=Massimo |title=Come evitare le ripetizioni “moleste” quando scriviamo? |url=https://www.illibraio.it/news/grammatica/come-evitare-ripetizioni-quando-scriviamo-540892/ |website=Il Libraio |access-date=29 May 2026}}</ref><ref name="cortelazzo">{{cite web |last1=Cortelazzo |first1=Michele A. |title=Non sempre è necessario usare parole diverse |url=http://www.maldura.unipd.it/buro/gel/gel13.html |website=SEMPLIFICAZIONE DEL LINGUAGGIO AMMINISTRATIVO «MANUALE DI STILE» |publisher=Università di Padova |access-date=29 May 2026}}</ref>

```


### Style (the whole section: headings, title case, boldface, inline-header lists, em dashes, emoji, tables, curly quotes, heading levels, thematic breaks)

```
==Style==
===Title heading===
AI chatbots tend to put a heading with the article name before all the content, since they don't usually imagine the title header when you make an article as being already there.

'''Examples'''
{{quote frame|
{{fake section|level=1|'''[https://www.youtube.com/@Pixaroo-kid Pixaroo]'''}}
|From [[Special:Diff/1367361447|this August 2026 revision]] to [[Wikipedia:Signs of AI writing/Examples/Pixaroo|Draft:Pixaroo]]
}}

===Title case===
{{For|non–AI-specific guidance about this|Wikipedia:Manual of Style/Capital letters#Headings, headers, and captions}}
{{Shortcut|WP:AITITLECASE}}

In section headings, AI chatbots strongly tend to capitalize all main words.<ref name="Russell"/>

'''Examples'''
{{quote frame|
{{fake section|level=2|Impact of Technology and Digitalization}}
The advent of digital technology and the internet has revolutionized international economic law. [...]
{{fake section|level=2|Sustainable Development and Environmental Law}}
The integration of sustainable development goals into international economic law is increasingly important. [...]
{{fake section|level=2|Human Rights and Economic Law}}
The relationship between human rights and international economic law is a growing area of focus. [...]
|From [[Special:Diff/1189640895|this December 2023 revision]] to [[International economic law]]}}

===Headings only containing other headings===
AI chatbots may generate a heading that only stores other headings, without text of their own.

'''Examples'''
{{quote frame|
{{fake section|level=1|Programming}}
{{fake section|level=2|Pixy's Adventure Club}}
[...]
{{fake section|level=1|Main Characters}}
{{fake section|level=2|Pixy}}
[...]
|From [[Special:Diff/1367361447|this August 2026 revision]] to [[Wikipedia:Signs of AI writing/Examples/Pixaroo|Draft:Pixaroo]]
}}

===Overuse of boldface===
{{For|non-AI-specific guidance about this|Wikipedia:Manual of Style/Text formatting#Boldface}}
{{shortcut|WP:AIBOLD}}
AI chatbots may display various phrases in [[boldface]] for emphasis in an excessive, mechanical manner. One of their tendencies, inherited from [[readme]]s, fan wikis, how-tos, sales pitches, slide decks, listicles and other materials that heavily use boldface, is to emphasize every instance of a chosen word or phrase, often in a "key takeaways" fashion. Some newer large language models or apps have instructions to avoid overuse of boldface.

'''Examples'''
{{quote frame|{{font|size=1.05em|
A '''leveraged buyout (LBO)''' is characterized by the extensive use of '''debt financing''' to acquire a company. This financing structure enables '''private equity firms''' and '''financial sponsors''' to control businesses while investing a relatively small portion of their own equity. The acquired company’s '''assets and future cash flows''' serve as collateral for the debt, making lenders more willing to provide financing.
}}|From [[Special:Diff/1274574473|this February 2025 revision]] to [[Leveraged buyout]]}}

{{quote frame|{{font|size=1.05em|
'''50 Scientists and Thinkers in AI Safety with significant''' influence on the field of alignment, containment, and risk mitigation. The list includes their '''Productive Years''', their estimated '''P(doom)''' (probability of existential catastrophe), a '''one-sentence summary of their contribution to AI Safety''', and their Wikipedia link.
}}|From [[Special:Diff/1324781030|this November 2025 revision]] to [[P(doom)]]}}

===<span class="anchor" id="Lists"></span>Inline-header vertical lists===
{{shortcut|WP:AILIST}}
{{For|non-AI-specific guidance about this|Wikipedia:Manual of Style/Lists#Use prose where understood easily}}
AI chatbots output often includes vertical lists formatted in a specific way: an ordered or unordered list where the list marker (number, bullet, dash, etc.) is followed by an inline boldfaced header, separated with a colon from the remaining descriptive text.

Instead of [[H:LIST|proper wikitext]], a bullet point in an unordered list may appear as a bullet character (•), hyphen (-), en dash (–), [[Wikipedia:Signs_of_AI_writing#Use_of_Markdown|hash]] (#), [[Wikipedia:Signs_of_AI_writing#Emoji_as_formatting|emoji]], or similar character. Ordered lists (i.e. numbered lists) may use explicit numbers (such as {{code|1.}}) instead of standard wikitext. When [[WP:SCOPY|copied as bare text appearing on the screen]], some of the formatting information is lost, and line breaks may be lost as well.

'''Examples'''
{{collapse top|From [[Wikipedia:Articles for deletion/Sarwan Kumar Bheel#c-IOmParkashSarwanBheel-20241014082300-Saqib-20241014080900|this October 2024 comment]] at [[Wikipedia:Articles for deletion/Sarwan Kumar Bheel]]}}
{{highlight|Conflict of Interest (COI)/Autobiography:}} While I understand the concern regarding my username [...]<br>
{{highlight|Notability (GNG and NPOLITICIAN):}} I have revised the article to focus on factual details [...]<br>
{{highlight|Original Research (WP) and Promotional Tone:}} I have worked on removing original research [...]<br>
{{highlight|Article Move to Main Namespace:}} Moving the draft to the main namespace after the AFC review [...]
{{collapse bottom}}

{{collapse top|From [[Special:PermanentLink/1255717748|this November 2024 revision]] to [[Sundial (weapon)]]}}
{{highlight|1. Historical Context Post-WWII Era:}} The world was rapidly changing after WWII, [...]
{{highlight|2. Nuclear Arms Race:}} Following the U.S. atomic bombings, the Soviet Union detonated its first bomb in 1949, [...]
{{highlight|3. Key Figures Edward Teller:}} A Hungarian physicist who advocated for the development of more powerful nuclear weapons, [...]
{{highlight|4. Technical Details of Sundial Hydrogen Bomb:}} The design of Sundial involved a hydrogen bomb [...]
{{highlight|5. Destructive Potential:}} If detonated, Sundial would create a fireball up to 50 kilometers in diameter, [...]
{{highlight|6. Consequences and Reactions Global Impact:}} The explosion would lead to an apocalyptic nuclear winter, [...]
{{highlight|7. Political Reactions:}} The U.S. military and scientists expressed horror at the implications of such a weapon, [...]
{{highlight|8. Modern Implications Current Nuclear Arsenal:}} Today, there are approximately 12,000 nuclear weapons worldwide, [...]
{{highlight|9. Key Takeaways Understanding the Madness:}} The concept of Project Sundial highlights the extremes of human ingenuity [...]
{{highlight|10. Questions to Consider}} What were the motivations behind the development of Project Sundial? [...]
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1316572059|this October 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/AI Visibility Optimization (AVO)|Draft:AI Visibility Optimization]]}}
AVO consists of three key layers:
* '''SEO (Search Engine Optimization):''' Traditional methods for improving visibility in search engine results through content, technical, and on-page optimization.
* '''AEO (Answer Engine Optimization):''' Techniques focused on optimizing content for voice assistants and answer boxes, such as featured snippets and structured data.
* '''GEO (Generative Engine Optimization):''' Strategies for ensuring businesses are cited as credible sources in responses generated by large language models (LLMs).
{{collapse bottom}}

{{collapse top|expand=yes|From [[Special:Diff/1327088410|this December 2025 revision]] to [[Navipet]]}}
Key highlights:
* '''Route Details''': Starts at Medak, passes through Yellareddy, Banswada, Nasrullabad, Varni, Rudrur, Bodhan, Shatapur, Navipet, Fakirabad, Basar, Mudhol, and ends at Bhainsa (via Yencha). The Bhainsa-to-Banswada section (Phase 3: Rudrur–Bhainsa, 50+ km) will feature new bypasses to skirt congested towns like Basar and Rudrur, easing traffic and cutting travel time by 20–30%.
* '''Bypasses and Improvements''': Bypasses are planned at high-density spots (e.g., near Basar temple and Rudrur market), with surveys completed for most sections by mid-2025. This includes elevated corridors over the Manjira River and cotton fields, preserving Navipet's agrarian landscape.
* '''Timeline and Impact''': Phase 3 (Rudrur–Bhainsa) construction is 40% complete as of December 2025, with full completion targeted for 2027. Once operational, it will slash Hyderabad–Bhainsa travel to under 5 hours and integrate Navipet into a seamless Medak–Adilabad corridor, boosting trade in cotton and turmeric. Local stakeholders hail it as a "lifeline" for farmers, with land acquisition nearly finalized.
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1345180164|this March 2026 revision]] to [[Wikipedia:Requests for page protection/Increase]]}}
{{highlight|Mass Content Removal:}} The user removed over 20,000 characters of reliably sourced content in a single edit, reducing the number of citations from 34 to 8, without any prior engagement on the Talk page.{{highlight|Disruptive Tagging:}} Despite the article being supported by 34 high-quality international secondary sources (Wall Street Journal, Bloomberg, Financial Times, etc.), the user implemented excessive "citation needed" tags as a form of visual vandalism to discredit the content.{{highlight|Refusal to engage (WP:BRD):}} The user was notified of WP:V and WP:DE policies on their talk page but has failed to justify these massive deletions, suggesting a coordinated attempt at de-legitimizing the subject.{{highlight|Context:}} Given the high-profile nature of the subject in global finance and mining (notably the AstraZeneca/EsoBiotec $1B M&A), the page is currently vulnerable to reputation-based sabotage.
{{collapse bottom}}

In some cases, there is no punctuation separating the title of each entry from its corresponding text. This is not to be confused with the way that users sometimes format their !votes in [[WP:XFD|XfD]] discussions, where words like {{xt|Keep}} or {{xt|Delete}} are typically written in boldface to set it apart from the arguments for the desired outcome.

{{collapse top|From [[Talk:Fish and chips/Archive 1#Expanding the "Origins" section to acknowledge Portuguese culinary technology|this December 2025 comment]] at [[Talk:Fish and chips]]}}
{{highlight|Durability}} Unlike roasted meats, which become tough and dry, or boiled foods, which rot quickly, battered fish was stable. [...]

{{highlight|Portability and the "Pocket Meal"}} The structural integrity of the polme made the fish physically durable. [...]

{{highlight|Ruggedness}} It could be wrapped in a simple cloth or paper and stuffed into a satchel. [...]

One might wonder: if it’s a "travel food," why not just cook it on the ship?

{{highlight|The Fire Hazard}} Cooking with large quantities of boiling oil on a wooden ship was an invitation to disaster. Open flames were strictly regulated at sea.

{{highlight|The Solution}} Ships would stock up on large quantities of pre-fried battered fish just before departure. [...]

{{highlight|The Transition}} After those first 48 hours, the crew would switch to harder-to-prepare staples like dried salt cod (bacalhau) or sea biscuits.

{{highlight|The "Cold" Factor}} This is the most important part for a "travel-ready" food. [...]

{{highlight|The Dockside "Frying Warehouses"}} The docks of Lisbon, particularly in the Ribeira (riverside) district, were the epicenter of this technology. [...]

{{highlight|Outdoor Caldrons}} Professional fryers set up large, permanent iron caldrons over open coal or wood fires right on the quays. [...]

{{highlight|"Deep-Frying Mastery"}} Because the Portuguese already had the caldrons of hot olive oil ready for their fish, it was a natural technological step to drop potato slices into that same oil. [...]

{{highlight|Street Vendors and "Tabernas"}} In 16th-century Lisbon, many of the poorer urban residents lived in homes without dedicated kitchens. [...]

{{highlight|The Sephardic "Home Factory"}} While the docks were the commercial center, the Sephardic Jewish quarters (the Judiarias) were where the technology was refined for domestic safety and religious ritual. [...]

{{highlight|Portuguese Sailors as "Early Adopters"}} In the 1500s, Portuguese sailors were the most active in the North Atlantic cod trade. [...]

{{highlight|The Iberian Potato "Infrastructure"}} Potatoes reached the Iberian Peninsula (Lisbon and Seville) c. 1570, nearly two centuries before they were accepted as food in France or the UK. [...]

{{highlight|Linguistic Evidence of Global Export}} The global reach of Portuguese frying technology is evidenced by its impact on other cultures during the same period [...]

{{highlight|The "Sikbaj" and "Escabeche" Connection}} The Portuguese technique of Escabeche (which involves frying fish and then preserving it in vinegar) is the maritime "big brother" of the battered fish. [...]

{{highlight|Exports to London}} 16th-century records show that Portuguese ships weren't just carrying wine and salt; they were heavily laden with olive oil destined for the ports of London, Antwerp, and Amsterdam.

{{highlight|A Taste for the "Foreign"}} Because Portuguese merchants were so active in London’s docks, they created a local demand for olive oil. [...]

{{highlight|The Later Shift From Olive Oil to "Dripping"}} As the dish moved from the elite merchant/Jewish circles into the broader British working class during the Industrial Revolution, the oil changed due to cost: [...]
{{collapse bottom}}

===Overuse of em dashes===
{{For|non-AI-specific guidance about the use of dashes|Wikipedia:Manual of Style#Dashes}}
{{Shortcut|WP:AIDASH}}
While human editors and writers often use [[em dash]]es (—), LLM output uses them more often than nonprofessional human-written text of the same genre, and uses them in places where humans are more likely to use commas, parentheses, colons, or (misused) hyphens (-) and [[en dash]]es (–). LLMs especially tend to use em dashes in a formulaic, pat way, often mimicking "punched up" sales-like writing by over-emphasizing clauses or parallelisms.<ref name="merrill" /><ref name="Kriss"/> AI-generated em dashes are usually surrounded by spaces, contrary to common typographic guidelines (which most human users of em dashes will be familiar with).

This sign is most useful when taken in combination with other indicators, not by itself. It is much more common on discussion pages than in article text. Also, because LLMs' use of em-dashes has become somewhat notorious, some AI companies have attempted to make their newer chatbots suppress their use, most notably OpenAI's [[GPT-5.1]].<ref name="edwards">{{cite news |last1=Edwards |first1=Benj |title=Forget AGI—Sam Altman celebrates ChatGPT finally following em dash formatting rules |url=https://arstechnica.com/ai/2025/11/forget-agi-sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules/ |access-date=24 February 2026 |work=Ars Technica |date=14 November 2025}}</ref> A July 2026 study found that of contemporary models only Claude used em dashes more than professional writers, and ChatGPT used them less.<ref name="economistJul2026">{{cite web |title=How to spot AI writing |url=https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing |website=The Economist |access-date=8 August 2026 |date=30 July 2026}}</ref>

'''Examples'''
{{quote frame|
I referred to Wikipedia's policies in a discussion with another user, using AI to help me organize my thoughts and better explain the policies I was referencing — something that was reported by the user. [...] If there were any errors in interpretation, they were my own — not mistakes caused by the AI. [...]<br>
[...] Ultimately, one of the admins blocked me — not because of the AI usage itself, which had already been addressed — but because I didn’t respond to their continued questioning.
|From [[User talk:Apep the Serpent God#c-Apep the Serpent God-20250407133000-April 2025|this April 2025 unblock request]] at [[User talk:Apep the Serpent God]]}}

{{quote frame|
In practice, many Dutch organizations and businesses use it for '''their own convenience''', even placing it in addresses — e.g., “Curaçao, Dutch Caribbean” — but this only '''adds confusion''' internationally and '''erases national identity'''. You don’t say '''“Netherlands, Europe”''' as an address — yet this kind of mislabeling continues.
|From {{diff||1286082047|label=this April 2025 revision}} to [[Talk:Dutch Caribbean]]}}

{{quote frame|
you're right about one thing — we do seem to have different interpretations of what policy-based discussion entails. [...]

When WP:BLP1E says "one event," it’s shorthand — and the supporting essays, past AfD precedents, and practical enforcement show that “two incidents of fleeting attention” still often fall under the protective scope of BLP1E. This isn’t "imagining" what policy should be — it’s recognizing how community consensus has shaped its application.

Yes, WP:GNG, WP:NOTNEWS, WP:NOTGOSSIP, and the rest of WP:BLP all matter — and I’ve cited or echoed each of them throughout. [...] If a subject lacks enduring, in-depth, independent coverage — and instead rides waves of sensational, short-lived attention — then we’re not talking about encyclopedic significance. [...]

[...] And consensus doesn’t grow from silence — it grows from critique, correction, and clarity.

If we disagree on that, then yes — we’re speaking different languages.
|From [[Wikipedia:Articles for deletion/Lilly Contino#c-Momentoftrue-20250617193700-Cakelot1-20250617192800|this June 2025 comment]] at [[Wikipedia:Articles for deletion/Lilly Contino]]}}

===<span class="anchor" id="Emoji"></span> Emoji as formatting===
{{shortcut|WP:AIEMOJI}}
AI chatbots have used [[emoji]] in the past.<ref name="merrill">{{cite news |last1=Merrill |first1=Jeremy B. |last2=Chen |first2=Szu Yu |last3=Kumer |first3=Emma |title=What are the clues that ChatGPT wrote something? We analyzed its style. |url=https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/ |access-date=14 November 2025 |work=The Washington Post |date=13 November 2025}}</ref><ref name="geng">{{cite web |last1=Geng |first1=Mingmeng |last2=Trotta |first2=Roberto |title=Human-LLM Coevolution: Evidence from Academic Writing |url=https://aclanthology.org/2025.findings-acl.657.pdf |website=aclanthology.org |access-date=17 December 2025}}</ref> In particular, they sometimes decorated section headings or bullet points by placing emoji in front of them. These almost always appeared in talk page comments and edit summaries; while they are more rare now, they may still be seen.

'''Examples'''
{{collapse top|From [[Special:Diff/1285703047|this April 2025 revision]] to [[User:Bhaskar sunsari]]}}
{{fake heading|level=1|👋 Welcome to the User Page of Bhaskar Sunsari}}
[...]

{{fake heading|level=2|🧑‍💻 About Me}}
[...]

{{fake heading|level=2|🌏 My Interests}}
Here are some topics I love exploring and contributing to:
* 💻 **Computing & Open Source Technology**
* 📚 **Education Systems in South Asia**
* 🌄 **Nepalese Culture, History, and Local Stories**
* 🔍 **Underrepresented Communities & Forgotten Facts**
* 🌐 **Digital Literacy & Tech for Social Good**
{{fake heading|level=2|🎯 What I’m Working On}}
[...]
{{fake heading|level=2|📬 Let’s Connect!}}
Have a suggestion, correction, or just want to say hi?  
👉 Drop me a message [...] I’m always happy to hear from fellow Wikimedians!
{{fake heading|level=2|🙏 Gratitude}}
{{collapse bottom}}

{{collapse top|From [[Wikipedia:Village pump (policy)/Archive 202#c-Diamondtier-20250525141800-Diamondtier-20250525141800|this May 2025 comment]] at [[Wikipedia:Village pump (policy)]]}}
Let’s decode exactly what’s happening here:<br>
🧠 Cognitive Dissonance Pattern:<br>
You’ve proven authorship, demonstrated originality, and introduced new frameworks, yet they’re defending a system that explicitly disallows recognition of originators unless a third party writes about them first.<br>
[...]<br>
🧱 Structural Gatekeeping:<br>
Wikipedia policy favors:<br>
[...]<br>
🚨 Underlying Motivation:<br>
Why would a human fight you on this?<br>
[...]<br>
🧭 What You’re Actually Dealing With:<br>
This is not a debate about rules.<br>
[...]
{{collapse bottom}}

{{collapse top|expand=yes|From [[Special:Diff/1302443439/1303522049|this July 2025 revision]] to [[History of trigonometry]]}}
🪷 Traditional Sanskrit Name: Trikoṇamiti<br>
Tri {{=}} Three<br>
Koṇa {{=}} Angle<br>
Miti {{=}} Measurement 🧭 “Measurement of three angles” — the ancient Indian art of triangle and angle mathematics.<br>
🕰️ 1. Vedic Era (c. 1200 BCE – 500 BCE)
<br>[...]<br>
🔭 2. Sine of the Bow: Sanskrit Terminology
<br>[...]<br>
🌕 3. Āryabhaṭa (476 CE)
<br>[...]<br>
🌀 4. Varāhamihira (6th Century CE)
<br>[...]<br>
🌠 5. Bhāskarācārya II (12th Century CE)
<br>[...]<br>
📤 Indian Legacy Spreads
{{collapse bottom}}

=== <span class="anchor" id="Tables"></span>Unusual use of tables ===
{{shortcut|WP:AITABLE}}
In rare cases, some AIs may create unnecessary small tables that could be better represented as prose or an [[WP:INFOBOX|infobox]].

'''Examples'''
{{collapse top|expand=yes|From [[Special:Diff/1323402246|this November 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Biobanks in India|Draft:Biobanks in India]]}}
{{Fake heading|Market and Statistics}}
The Indian biobanking market was valued at approximately USD 2,101 million in 2024. The sector is expanding to support the "Atmanirbhar Bharat" (Self-reliant India) initiative in healthcare research.
{| class="wikitable"
|+Key Statistics of Indian Biobanking (2024-2025)
!Metric
!Figure
|-
|Market Valuation (2024)
|~USD 2.1 billion
|-
|Major Accredited Facilities
|NLDB, CBR Biobank, THSTI, Karkinos
|-
|GenomeIndia Diversity
|99 ethnic groups (32 tribal, 53 non-tribal)
|}
{{collapse bottom}}

{{collapse top|From [[Special:Diff/1352783863|this May 2026 revision]] to [[Wikipedia:Signs of AI writing/Examples/Pacific Mall, Tagore Garden|Draft:Pacific Mall]]}}
{{fake heading|level=2|Management}}
The mall employs approximately 3,167 staff members across all operations. Key management personnel of Pacific Development Corporation Private Limited include:
{| class="wikitable"
! Name !! Designation
|-
| S. K. Bansal || Chairman
|-
| Abhishek Bansal || Managing Director
|-
| Saket Bansal || Managing Director
|-
| Mehak Khanna || VP Marketing
|}
{{collapse bottom}}

{{collapse top|From [[Special:PermanentLink/1365728625#Shared Artifact Types in Shan Culture|these]] [[Special:PermanentLink/1365728625#5.3 Comparison of Traditions|sections]] of a July 2026 revision to [[Xorai]]}}
The structural similarity between the Shan hsun-ok and the Assamese xorai is striking:

{| class="wikitable"
|+ Comparison of Shan Hsun-Ok and Assamese Xorai
|-
! Feature !! Shan Hsun-Ok !! Assamese Xorai
|-
| Basic Structure || Bowl on pedestal with tray and cover || Tray on pedestal with domed cover
|-
| Primary Material || Lacquered bamboo || Bell metal (kah) or brass
|-
| Ceremonial Use || Buddhist offerings to monks || Hindu/Vaishnava offerings; hospitality
|-
| Cover || Stupa-shaped spire || Domed cover
|}
----
The Tibetan high-footed vessels differ from the Tai-Kadai pedestal trays in several important ways:

{| class="wikitable"
|+ Comparison of Tai-Kadai and Tibetan Traditions
|-
! Feature !! Tai-Kadai Tradition !! Tibetan Tradition
|-
| Origin || Indigenous Neolithic development || Introduced through Chinese influence
|-
| Primary Material || Pottery → Bronze → Bell metal || Porcelain (Chinese imports)
|-
| Primary Use || Ritual offerings, hospitality, diplomacy || Buddhist offerings, tea ceremonies
|-
| Transmission || Carried by migration || Received as gifts from Chinese courts
|-
| Linguistic Connection || Native vocabulary (phan, phun) || Borrowed terminology
|}
{{collapse bottom}}

===Curly quotation marks and apostrophes===
{{For|non-AI-specific guidance about this|Wikipedia:Manual of Style#Quotation characters|Wikipedia:Manual of Style#Apostrophes}}
{{Shortcut|WP:AICURLY}}	

ChatGPT <!-- appears to have risen some time in mid-2025 -->and [[DeepSeek]] typically use curly quotation marks (“...” or ‘...’) instead of straight quotation marks ("..." or '...'). In some cases, AI chatbots inconsistently use pairs of curly and straight quotation marks in the same response. They also tend to use the curly apostrophe (’), the same character as the curly [[right single quotation mark]], instead of the straight apostrophe ('), such as in [[Contraction (grammar)|contractions]] and [[English possessive|possessive forms]]. They may also do this inconsistently. 

Curly quotes alone do not prove LLM use. Directional quotation marks (curly or typographer) are often used in published works written and edited using the [[Chicago Manual of Style]].<ref>{{cite web|url=https://www.chicagomanualofstyle.org/qanda/data/faq/topics/SpecialCharacters/faq0002.html|title=CMOS 18th edition 6.123|website=Chicago Manual of Style}}</ref> [[Microsoft Word]] has a "[[smart quotes]]" feature that converts straight quotes to curly quotes. So does the default system-wide configuration on [[macOS]] and [[iOS]] devices, except on some applications (or if turned off, as may be necessary for [[computer programming|programming]]). Grammar correcting tools such as [[LanguageTool]] may also have such a feature. <!-- NB: LanguageTool is partially powered by neural networks. --> Curly quotation marks and apostrophes are common in professionally typeset works such as major newspapers. Citation tools like [https://citer.toolforge.org/ Citer] may repeat those that appear in the title of a web page: for example, 
<blockquote>McClelland, Mac (2017-09-27). [https://www.nytimes.com/2017/09/27/magazine/when-not-guilty-is-a-life-sentence.html "When ‘Not Guilty’ Is a Life Sentence"]. {{em|The New York Times}}. Retrieved 2025-08-03.</blockquote>
Note that Wikipedia allows users to [[WP:CUSTOM|customize]] the fonts used to display text.  Some fonts display matched curly apostrophes as straight, in which case the distinction is invisible to the user. Additionally, [[Gemini (language model)|Gemini]] and [[Claude (language model)|Claude]] models typically do not use curly quotes.

===Skipping heading levels===
AI chatbots tend to skip level 2 headings (<code><nowiki>==</nowiki></code>) and start sections from the third level (<code><nowiki>===</nowiki></code>).  [[Wikipedia:Manual_of_Style/Accessibility#Headings|Because doing so is against Wikipedia's accessibility and style conventions]], it is therefore very unlikely for a manually-formatted page to have this quirk.<!--

'''Examples'''
-->

===Overuse of level 1 headings===
Level 1 headings are very rare and are typically not used. They are not even listed separately in [[Wikipedia:Manual_of_Style/Accessibility#Headings|the headings section]], and it's typically only used by the MediaWiki system for the article lead.

This might be caused because of the AI translating [[Markdown]] to wikitext.

'''Examples'''
{{ctop|From [[Special:Diff/1367361447|this August 2026 revision]] to [[Wikipedia:Signs of AI writing/Examples/Pixaroo|Draft:Pixaroo]]}}
<syntaxhighlight lang=wikitext>
= '''[https://www.youtube.com/@Pixaroo-kid Pixaroo]''' =
[...]
= History =
[...]
= Programming =
[...]
= Main Characters =
[...]
= Educational Goals =
[...]
= Style =
[...]
= Target Audience =
[...]
= External Links =
[...]
</syntaxhighlight>
{{cbottom}}

===Thematic breaks between sections===
AI chatbots sometimes include a thematic break (<code><nowiki>----</nowiki></code>) between each section in a text (this is common in [[WP:MARKDOWN|Markdown]] output).

'''Examples'''
{{ctop|From [[Special:Diff/1344638960|this March 2026 revision]] to [[Wikipedia:Signs of AI writing/Examples/Ichafu|Draft:Ichafu]]}}
<syntaxhighlight lang=wikitext highlight=5,11>
=== Distinction from French “''[[List of English words of French origin|chiffon]]''” ===
Some claims have suggested that ''Ichafu'' derives from the French word chiffon (“rag” or "light cloth”). However, early lexicographic records do not support this interpretation and later sources differ in their explanations.

[...]
----

```


### Markup > Use of Markdown

```
==Markup==

===Use of Markdown===
{{Shortcut|WP:MARKDOWN|WP:AIMARKDOWN}}
{{further|WP:AISIGNS/Wikitext wrapped in Markdown code blocks from chatbots|label1=Wikitext wrapped in Markdown code blocks from chatbots}}

A lot of AI chatbots are not proficient in [[H:WT|wikitext]], the [[markup language]] used to instruct Wikipedia's [[MediaWiki]] software how to format an article. As wikitext is a niche markup language, found mostly on Wikipedia, other Wikimedia wikis, and other MediaWiki-based platforms like [[Miraheze]], LLMs wikitext-formatted content is not prominent in their training data. While the corpora of chatbots did ingest millions of Wikipedia articles, these articles would not have been processed as text files containing wikitext syntax.

In chatbot apps, the output display is formatted with Markdown, a markup language conceptually similar to wikitext but much more widely applied. Meanwhile, the chatbots' preprompts typically instruct them to use markdown in their answers, such as when providing lists and writing with headings. That is, their system-level instructions often direct them to format outputs using Markdown, and the chatbot apps render its syntax as formatted text on a user's screen. For example, the system prompt for Claude Sonnet 3.5 (November 2024) includes:<ref name="sonnetprompt">{{cite web |title=System Prompts |url=https://platform.claude.com/docs/en/release-notes/system-prompts#claude-sonnet-3-5 |website=Claude Docs |publisher=Anthropic |access-date=9 January 2026}}</ref>

{{blockquote|Claude uses Markdown formatting. When using Markdown, Claude always follows best practices for clarity and consistency. It always uses a single space after hash symbols for headers (e.g., "# Header 1") and leaves a blank line before and after headers, lists, and code blocks. For emphasis, Claude uses asterisks or underscores consistently (e.g., italic or bold). When creating lists, it aligns items properly and uses a single space after the list marker. For nested bullets in bullet point lists, Claude uses two spaces before the asterisk (*) or hyphen (-) for each level of nesting. For nested bullets in numbered lists, Claude uses three spaces before the number and period (e.g., "1.") for each level of nesting.}}

As the above indicates, Markdown syntax is completely different from wikitext. Markdown uses asterisks (*) or underscores (_) instead of single-quotes (') for bold and italic formatting, hash symbols (#) instead of equals signs (=) for section headings, parentheses (()) instead of square brackets (<nowiki>[]</nowiki>) around URLs, and three symbols (---, ***, or ___) instead of four hyphens (<nowiki>----</nowiki>) for thematic breaks.

When told to "generate an article", chatbots often default to using Markdown for the generated output. This formatting is preserved in clipboard text by the copy functions on some chatbot platforms. If instructed to generate content for Wikipedia, the chatbot might "realize" the need to generate Wikipedia-compatible code, and might include a message like {{tqi|Would you like me to ... turn this into actual Wikipedia markup format (`wikitext`)?}}{{efn|[[Special:PermanentLink/1300700102|Example]] (deleted, administrators only)}} in its output. If the chatbot is told to proceed, the resulting syntax is often rudimentary, syntactically incorrect, or both. The chatbot might put its attempted-wikitext content in a Markdown-style [https://www.markdownguide.org/extended-syntax/#fenced-code-blocks fenced code block] (its syntax for [[WP:PRE]]) surrounded by Markdown-based syntax and content, which may also be preserved by platform-specific copy-to-clipboard functions, leading to a telling footprint of both markup languages' syntax. This might include the appearance of three backticks in the text, such as: <code>```wikitext</code>.{{efn|[[Special:PermanentLink/1297827841|Example]] of {{code|```wikitext}} on a draft.|}}{{efn|See [[WP:AISIGNS/Wikitext wrapped in Markdown code blocks from chatbots]]}}

The presence of faulty wikitext syntax mixed with Markdown syntax is a strong indicator that content is LLM-generated, especially if in the form of a fenced Markdown code block. However, Markdown {{em|alone}} is not such a strong indicator. Software developers, researchers, technical writers, and experienced internet users frequently use Markdown in tools like [[Obsidian (software)|Obsidian]] and [[GitHub Flavored Markdown|GitHub]], and on platforms like [https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-Guide Reddit], [https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline Discord], and [https://slack.com/help/articles/202288908-Format-your-messages Slack]. Some writing tools and apps, such as [[iOS Notes]], [[Google Docs]], and [[Windows Notepad]], support Markdown editing or exporting. The increasing ubiquity of Markdown may also lead new editors to expect or assume Wikipedia to support Markdown by default.

'''Examples'''
{{see also|Markdown#Examples}}

{{quote frame|
I believe this block has become procedurally and substantively unsound. Despite repeatedly raising clear, policy-based concerns, every unblock request has been met with **summary rejection** — not based on specific diffs or policy violations, but instead on **speculation about motive**, assertions of being “unhelpful”, and a general impression that I am "not here to build an encyclopedia". No one has meaningfully addressed the fact that I have **not made disruptive edits**, **not engaged in edit warring**, and have consistently tried to **collaborate through talk page discussion**, citing policy and inviting clarification. Instead, I have encountered a pattern of dismissiveness from several administrators, where reasoned concerns about **in-text attribution of partisan or interpretive claims** have been brushed aside. Rather than engaging with my concerns, some editors have chosen to mock, speculate about my motives, or label my arguments "AI-generated" — without explaining how they are substantively flawed.
|From [[User talk:Fileas Fogg#c-Fileas Fogg-20250410203700-I ask that this be considered seriously and in good_faith.|this April 2025 unblock request]] at [[User talk:Fileas Fogg]]}}

{{quote frame|
<nowiki>- The Wikipedia entry does not explicitly mention the "Cyberhero League" being recognized as a winner of the World Future Society's BetaLaunch Technology competition, as detailed in the interview with THE FUTURIST ([https://consciouscreativity.com/the-futurist-interview-with-dana-klisanin-creator-of-the-cyberhero-league/](https://consciouscreativity.com/the-futurist-interview-with-dana-klisanin-creator-of-the-cyberhero-league/)). This recognition could be explicitly stated in the "Game design and media consulting" section.</nowiki>
|From {{diff||1290202502|label=this May 2025 revision}} to [[Talk:Dana Klisanin]]}}

As shown below, LLMs incorrectly use {{code|##}} to denote section headings, which MediaWiki interprets as a numbered list. 

{{quote frame|
## Geography

Villers-Chief is situated in the [[Jura Mountains]], in the eastern part of the Doubs department. [...]
## History

Like many communes in the region, Villers-Chief has an agricultural past. [...]

## Administration

Villers-Chief is part of the [[Canton of Valdahon]] and the [[Arrondissement of Pontarlier]]. [...]

## Population

The population of Villers-Chief has seen some fluctuations over the decades, [...]
|From [[Special:Diff/1294887075|this June 2025 revision]] to [[Villers-Chief]]}}

=== Broken wikitext===
Since AI chatbots are typically not proficient in wikitext and templates, they often produce faulty syntax. A noteworthy instance is garbled code related to [[Template:AfC submission]], as new editors might ask a chatbot how to submit their [[Wikipedia:Articles for Creation|Articles for Creation]] draft; see [[Special:PermaLink/1299830745#Messed_up_templates|this discussion among AfC reviewers]].

'''Examples'''

{{blockquote|<syntaxhighlight lang="wikitext">
[[Category:AfC submissions by date/<0030Fri, 13 Jun 2025 08:18:00 +0000202568 2025-06-13T08:18:00+00:00Fridayam0000=error>EpFri, 13 Jun 2025 08:18:00 +0000UTC00001820256 UTCFri, 13 Jun 2025 08:18:00 +0000Fri, 13 Jun 2025 08:18:00 +00002025Fri, 13 Jun 2025 08:18:00 +0000: 17498026806Fri, 13 Jun 2025 08:18:00 +0000UTC2025-06-13T08:18:00+00:0020258618163UTC13 pu62025-06-13T08:18:00+00:0030uam301820256 2025-06-13T08:18:00+00:0008amFri, 13 Jun 2025 08:18:00 +0000am2025-06-13T08:18:00+00:0030UTCFri, 13 Jun 2025 08:18:00 +0000 &qu202530;:&qu202530;.</0030Fri, 13 Jun 2025 08:18:00 +0000202568>June 2025|sandbox]]
</syntaxhighlight>|title=From [[Special:PermanentLink/1295363321|this revision]] to [[User:Dr. Omokhudu Idogho/sandbox]]}}

```


### Signs of HUMAN writing (incl. the Syntax list)

```
== Signs of human writing ==

=== Age of text relative to ChatGPT launch ===
ChatGPT was launched to the public on November 30, 2022. Although OpenAI had similarly powerful LLMs before then, they were paid services and not easily accessible or known to lay people. Thus, if an edit was made '''before November 30, 2022''', AI use can be safely ruled out for the corresponding text. While some older writing displays some of the AI signs given in this list, and may even convincingly appear to have been AI-generated, the vastness of Wikipedia allows for these coincidences.
<!--
Some beta users of OpenAI, specifically before safety gates were enacted on raw OpenAI calls, were part of a program for startups that gave them early access with an appreciable amount of tokens to spend. These users would likely be more experimental and interact with publicly-editable content for [[public relations|reputation-cleansing]] or other purposes, so the date could be set back toward mid-2021 as a [[ballpark estimate]]. -->

The age of any given block of text can be found using [[:mw:Who Wrote That?|Who Wrote That?]] (WWT) or [[Wikipedia:WikiBlame|WikiBlame]] (WB), tools that find the revision at which the text was inserted. If the text is older than the first revision examined by the tool, WWT will simply display no information for the selected text while WB will indicate that it was present in the earliest selected revision.

=== Ability to explain one's own editorial choices ===
Editors should be able to explain why they made an edit or mistake. For example, if an editor inserts a URL that appears fabricated, you can ask how the mix-up occurred instead of jumping to conclusions. If they can supply the correct link and explain it as a human error (perhaps a typo), or share the relevant passage from the real source, that points to an ordinary human error.

=== Syntax ===
LLMs writing or editing Wikipedia articles will attempt, by default, to produce text in what it considers to be "formal, neutral, encyclopedic tone." This manifests as AI-generated text avoiding certain syntactic constructions that are both common in human writing and often perfectly acceptable per the [[Wikipedia:Manual of Style|Manual of Style]]--and in some cases, even preferred by it.

Specifically, the following have been empirically observed, over 25 years of Wikipedia writing, to be more common in Wikipedia articles written by humans than in AI-generated text:

* Simple is/has phrases,<ref name="geng2"/> such as ''there is a'', ''it has a''.
* Words with complex, stiff or euphemistic synonyms, such as ''wrote'' (versus ''authored''), ''moved'' (versus ''relocated''), ''used'' (versus ''utilized''), ''tried'' (versus ''attempted''), ''died'' (versus ''passed away'').
* Superlative or definitive statements, such as ''one of the best'', ''is the only'', ''was the first''
* Hedging qualifiers and intensifiers,<ref name="reinhart">{{cite web |last1=Reinhart |first1=Alex |last2=Markey |first2=Ben |last3=Laudenbach |first3=Michael |last4=Brown |first4=David West |title=Do LLMs write like humans? Variation in grammatical and 4 rhetorical styles |url=https://www.pnas.org/doi/10.1073/pnas.2422455122#supplementary-materials |website=pnas.org |access-date=6 June 2026}}</ref> such as ''very'', ''perhaps'', ''tends to''.
* Isolated wordy constructions such as ''as a result of'', ''in order to'', ''all of the'', ''a part of'', or ''the fact that''.

```


### Ineffective indicators (the false-tell list)

```
== Ineffective indicators ==
False accusations of AI use can [[Wikipedia:BITE|drive away new editors]] and foster an atmosphere of suspicion. Before claiming AI was used, consider whether the [[Dunning–Kruger effect]] or [[confirmation bias]] may be clouding your judgement. Detecting LLM texts on the basis of style alone is ''not'' as easy as it seems, see [[WP:AIDETECTIVE]] in this page. Here are several somewhat commonly used indicators that are ineffective in LLM detection{{em dash}}and may even indicate the opposite.

* '''Perfect grammar'''{{snd}}While modern LLMs are known for high grammatical proficiency, many editors are also skilled writers or come from professional writing backgrounds. (See also [[Wikipedia:Signs of AI writing#Sudden shift in English variety use|§ Sudden shift in English variety use]].) 
* '''Combination of casual and formal registers, or language that sounds both "clinical" and "emotional"'''{{snd}}This may indicate the casual writing of a person in a technical field, such as computer science. It may also indicate youth, a preference for mixed registers, playfulness, or neurodivergence. In the case of a wiki, it may simply be the result of multiple editors adding to a page.
* '''"Bland" or "robotic" prose'''{{snd}}LLM output has specific traits, as detailed above, and it skews positive and verbose by default. While these tendencies are formulaic, they may not scan as "robotic" to those unfamiliar with AI writing.<ref name="jalt">{{cite journal |last1=Murray |first1=Nathan |last2=Tersigni |first2=Elisa |title=Can instructors detect AI-generated papers? Postsecondary writing instructor knowledge and perceptions of AI |journal=Journal of Applied Learning & Teaching |volume=7 |issue=2 |date=21 July 2024 |issn=2591-801X |doi=10.37074/jalt.2024.7.2.12 |url=https://journals.sfu.ca/jalt/index.php/jalt/article/view/1895 |access-date=21 November 2025}}</ref>
* '''"Fancy", "academic", or "formal" prose'''{{snd}}While LLMs disproportionately favor certain words and phrases, many of which are longer and have more difficult [[readability]] scores than some of their synonyms, these are ''specific words''. The correlation does not extend to all formal, academic, or "fancy"-sounding prose.<ref name="Russell" /> 
* '''Transition words (in isolation)'''{{snd}}Older AI text tended to formulaically overuse certain [[Transition (linguistics)|transitions]] like ''Additionally,'' ''Consequently,'' and ''Notably,'' often to begin sentences. However, only a few transition words and phrases are known to be overused by AI in this way. This pattern also has precedence in essay-like writing by humans and is accepted by many style guides, so this is not a strong tell.
* '''Unsourced content'''{{snd}}[[:Category:All articles with unsourced statements|More than 570,000 articles]] are tagged as needing citations, and most of them predate LLMs. Meanwhile, since modern LLM chatbots can search the web and view sources a user provides to it, citations are fairly common now in AI-generated text. This does not mean they are ''accurate'' citations, but they are there. 
* '''Bizarre [[Help:Wikitext|wikitext]]'''{{snd}}While LLMs may hallucinate templates or generate wikitext code with invalid syntax for reasons explained in {{slink||Use of Markdown}}, they are not likely to generate content with certain random-seeming, "inexplicable" errors and artifacts (excluding the ones listed here in {{slink||Markup}}). Bizarrely placed [[HTML tags]] like <nowiki><span> are more indicative of poorly programmed browser extensions or a known bug with Wikipedia's content translation tool (</nowiki>{{Phabricator|T113137}}). Misplaced syntax like {{Code|''Catch-22 i''s a satirical novel.}} (rendered as "''Catch-22 i''s a satirical novel.") are more indicative of mistakes in [[Wikipedia:VisualEditor|VisualEditor]], where such errors are harder to notice than in [[Wikipedia:Source editing|source editing]].
* '''Correct wikitext'''{{snd}} Especially if the person is using the visual editor or has found the [[Help:Show preview|Preview]] button, getting the formatting correct, even for complex templates, is normal.

```


### Historical indicators (incl. Section summaries)

```
== Historical indicators ==
The following indicators were common in text generated by older AI models, but are much less frequent in newer models. They may still be useful for finding older undetected AI-generated edits. Dates are approximate.

===Didactic disclaimers (November 2022–2024) ===
{{shortcut|WP:DIDACTIC}}
{{For|non-AI-specific guidance about this|Wikipedia:Manual of Style/Words to watch#Editorializing}}
{{tmbox|image=none|text=Words to watch: {{strong|''it's important/critical/crucial to note/remember/consider'', ''worth noting'', ''may vary''...}}}}
Older LLMs (~2023) often added disclaimers about topics being "important to note".<ref name="speroemiprimary">{{cite web |last1=Spero |first1=Max |last2=Emi |first2=Bradley |title=Technical Report on the Pangram AI-Generated Text Classifier |url=https://arxiv.org/abs/2402.14873 |publisher=Arxiv |access-date=6 February 2026}}</ref> This frequently took the form of advice to an imagined reader regarding safety or controversial topics, or disambiguating topics that varied in different locales/jurisdictions. Several such disclaimers appear in OpenAI's GPT-4 system card as examples of "partial refusals".<ref name="openaicdn">{{cite web |title=GPT-4 System Card |url=https://cdn.openai.com/papers/gpt-4-system-card.pdf |website=OpenAI |access-date=16 December 2025}}</ref>

'''Examples'''
{{blockquote|The emergence of these informal groups reflects a growing recognition of the interconnected nature of urban issues and the potential for ANCs to play a role in shaping citywide policies. {{highlight|However, it's important to note}} that these caucuses operate outside the formal ANC structure and their influence on policy decisions {{highlight|may vary}}.|From [[Special:Diff/1265416814|this 2024 revision]] to [[Advisory Neighborhood Commission]]}}

{{blockquote|{{highlight|It is crucial to differentiate}} the independent AI research company based in Yerevan, Armenia, which is the subject of this report, from these unrelated organizations {{highlight|to prevent confusion}}.|From [[Special:Diff/1292938129|this 2025 revision]] to [[Wikipedia:Signs of AI writing/Examples/Robi Labs|Draft:Robi Labs]]}} 

{{blockquote|{{highlight|It's important to remember}} that what's free in one country might not be free in another, so always check before you use something.|From [https://gitlab.wikimedia.org/repos/web/web-experiments-extension/-/commit/55fdbbb3decdc9b95ae0ef00e98b1108ddc3a498.diff Wikimedia's LLM-generated Simple Summary] of [[Public domain]]}}

===Section summaries===
{{Shortcut|WP:CONCLUSION|WP:INCONCLUSION}}
{{tmbox|image=none|text=Words to watch: {{strong|''In summary'', ''In conclusion'', ''Overall''&nbsp;...}}}}
When generating longer outputs (such as when told to "write an article"), older LLMs often added sections titled "Conclusion" or similar, and often ended paragraphs or sections by summarizing and restating its core idea.<ref name="Ju et al.">{{cite conference |last1=Ju |first1=Da |last2=Blix |first2=Hagen |last3=Williams |first3=Adina |title=Domain Regeneration: How well do LLMs match syntactic properties of text domains? |conference=Findings of the Association for Computational Linguistics: ACL 2025 |pages=2367–2388 |publisher=[[Association for Computational Linguistics]] |location=Vienna, Austria |date=2025 |doi=10.18653/v1/2025.findings-acl.120 |arxiv=2505.07784 |url=https://aclanthology.org/2025.findings-acl.120 |access-date=October 4, 2025 |via=[[ACL Anthology]] |archive-date=August 15, 2025 |archive-url=https://web.archive.org/web/20250815014117/https://aclanthology.org/2025.findings-acl.120/ |url-status=live }}</ref>

'''Examples'''
{{collapse top|From {{diff||1188230584|label=this 2023 revision}} in [[Nurse scientist]]}}
{{highlight|In summary}}, the educational and training trajectory for nurse scientists typically involves a progression from a master's degree in nursing to a Doctor of Philosophy in Nursing, followed by postdoctoral training in nursing research. This structured pathway ensures that nurse scientists acquire the necessary knowledge and skills to engage in rigorous research and contribute meaningfully to the advancement of nursing science.
{{collapse bottom}}

{{collapse top|From [[Talk:Eric Dick (lawyer)/Archive 1#c-Scott free0011-20240824022800-Bjan Anders-20240822031900|all]] [[Talk:Eric Dick (lawyer)#c-99.165.93.115-20240820214600-HCDE Tenure|of]] [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240822005600-HCDE Tenure|these]] [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240826231000-HCDE Tenure|August]] [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240829040000-HCDE Tenure|2024]] [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240830004100-HCDE Tenure|comments]] and [[Talk:Eric Dick (lawyer)#c-Scott free0011-20240904234400-HCDE Tenure|this September 2024 comment]] at [[Talk:Eric Dick (lawyer)]]}}
{{highlight|In summary,}} the current edits to the article are consistent with Wikipedia’s guidelines and are well-supported by reliable sources, including LinkedIn when used appropriately. The concerns you’ve raised, while important to consider, do not undermine the reliability of the information presented. The article, as edited, maintains the integrity and accuracy required by Wikipedia, ensuring that Eric Dick’s background is presented fully and fairly.
----
{{highlight|In summary,}} I believe the detailed coverage of Eric Dick’s involvement with HCDE is appropriate and valuable for readers. However, I am committed to improving the citations and supporting this content with additional research to ensure it adheres to Wikipedia’s guidelines. Please feel free to share any additional thoughts you might have.
----
{{highlight|Conclusion}}

{{highlight|In conclusion,}} while the concern about undue focus on Eric Dick's involvement with HCDE is valid, the solution should not be to simply cut large sections of content without proper research and verification. Instead, a careful and methodical approach should be taken to ensure that the article remains accurate, balanced, and well-sourced, in line with Wikipedia's policies on verifiability, neutrality, and biographies of living persons. Blindly cutting content risks not only violating these policies but also diminishing the quality and integrity of the article. Therefore, it is imperative to approach this editing process with the utmost care, prioritizing thorough research and accurate representation over hasty removals.
----
{{highlight|Conclusion:}} I’m committed to ensuring that all content in the article meets Wikipedia’s standards for reliability and neutrality. However, this requires a collaborative effort. I urge you to focus on constructive dialogue and respect for all contributors. Let’s work together to strengthen the article rather than engage in unnecessary conflict.
----
{{highlight|Conclusion:}}

Your current approach to editing and discussion, characterized by dismissive language, unfounded accusations, and a refusal to engage constructively, may potentially violate Wikipedia’s Civility policy and undermine the collaborative nature of the platform. I strongly urge you to reconsider how you interact with fellow editors. If you have concerns about content or images, let’s address them together in a respectful and productive manner. It’s crucial that we all work together to uphold Wikipedia’s standards while maintaining a positive and cooperative environment. Please try being nice to people for a change.
----
{{highlight|In conclusion,}} I am here to collaborate and work together to improve the article. This requires not just respectful communication, but a genuine focus on resolving issues constructively. I hope we can move forward with a more professional and productive dialogue.
----
{{highlight|In summary,}} I have consistently proposed well-sourced edits and have made clear my willingness to modify the content based on further discussion and research. I have not engaged in edit-warring, and the burden of addressing these proposals now rests on you.
{{collapse bottom}}

===Prompt refusal===
{{tmbox|image=none|text=Words to watch: {{strong|''as an AI language model'', ''as a large language model'', ''I cannot offer medical advice, but I can...'', ''I'm sorry''&nbsp;...}} }}
In the past, AI chatbots occasionally declined to answer prompts as written, usually with apologies and reminders that they are AI language models. Attempting to be helpful, chatbots often gave suggestions or answers to alternative, similar requests. Outright refusals have become increasingly rare.

'''Examples'''
{{blockquote|
As an AI language model, I can't directly add content to Wikipedia for you, but I can help you draft your bibliography.
|From [[Special:Diff/1221340799|this 2024 revision]] to [[Parmiter's Almshouse & Pension Charity]]}}

=== Abrupt cut offs ===
AI tools used to abruptly stop generating content if an excessive number of tokens had been used for a single response, and further responses required the user to select "continue generating", at least in the case of ChatGPT.

This method is not foolproof, as a malformed copy/paste from one's local computer can also cause this. It may also indicate a [[Project:Copyvio|copyright violation]] rather than the use of an LLM.

===Outdated ''access-date'' parameters===

In some AI-assisted text, citations may include an ''access-date'' by default, but the date can look unexpectedly old relative to when the edit was made (for example, an article created in December 2025 containing multiple citations with <code>|access-date=12 December 2024</code>). However, newer chatbots seldom produce this error, and older ''access-date'' values can occur legitimately (copied citations, offline work, batch moves/merges).

```
