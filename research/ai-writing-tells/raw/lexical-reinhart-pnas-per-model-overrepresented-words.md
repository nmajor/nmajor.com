# Reinhart, Markey, Laudenbach, Pantusen, Yurko, Weinberg & Brown - "Do LLMs write like humans? Variation in grammatical and rhetorical styles" (PNAS 2025)

- URL (journal): https://www.pnas.org/doi/10.1073/pnas.2422455122 - PNAS vol. 122 issue 8, e2422455122, 2025-02-25
- URL (preprint, full text used here): https://arxiv.org/abs/2410.16107 / https://arxiv.org/html/2410.16107v1
- Companion annotated bibliography by the lead author: https://www.refsmmat.com/notebooks/llm-style.html
- Date accessed: 2026-08-18
- What it is: The best PER-MODEL lexical evidence, and the only one built on a PARALLEL CORPUS across ordinary genres (HAP-E: news, fiction, TV scripts, academic - not just abstracts). Same source text, human continuation vs each model's continuation, so the rates are directly comparable. Crucially it includes BASE vs INSTRUCTION-TUNED variants of the same Llama models, isolating what instruction tuning adds.
- EVIDENCE TIER: **measured** (peer-reviewed PNAS; per-word rate multipliers relative to a matched human baseline).
- WHY THIS IS THE MOST USEFUL SOURCE FOR A PERSONAL-ESSAY BLACKLIST: every other big study measures PubMed abstracts. This one measures fiction, news and scripts too, so the flagged words are the ones that would show up in a personal essay - camaraderie, palpable, solace, fleeting, unspoken, amidst, cacophony - none of which appear on the academic lists at all.
- ALSO NOTE the authors' own reading of WHY these words cluster: "In the GPT models in particular, many of these words connote some form of complex relation among objects (e.g., tapestry, intricate, camaraderie, cacophony, amidst). Coupled with positive items such as vibrant and solace, these words together may signal a preference for grandiose, if hollow, summative sentences."
- CAVEAT the authors flag: some entries are generation artefacts, not style. "Llama 3 instruction-tuned variants overuse continuation because their outputs sometimes begin with 'Here is the continuation of the text...'" and "Llama 3 8B uses Deborah at 52 times the rate of humans largely because of a single document repeating it 308 times." Proper nouns and 'continuation' in the tables below are noise, not tells.

## Verbatim excerpts


For example, the instruction-tuned LLMs used present participial clauses at 2 to 5 times the rate of human text, such as in this sentence from GPT-4o using two present participles: “Bryan, leaning on his agility, dances around the ring, evading Show’s heavy blows.” They also use nominalizations at 1.5 to 2 times the rate of humans, such as in this sentence from Llama 3 70B Instruct containing four: “These schemes can help to reduce deforestation, habitat destruction, and pollution, while also promoting sustainable consumption patterns.” On the other hand, GPT-4o uses the agentless passive voice at roughly half the rate as human texts—but in each case, the Llama base models use these features at rates more closely matching humans. This suggests that instruction tuning, rather than training the models to write even more like humans, instead trains them in a particular informationally dense, noun-heavy style, and limits their ability to mimic other writing styles.

Similar to past research (Liang et al. 2024), we find that LLMs also favor specific vocabulary. Figure 4 shows the rate of usage for words used more than once per million words by humans, comparing the usage of each LLM to the usage by humans in Chunk 2 of HAP-E. Compared to the base Llama models, in the instruction-tuned Llama and GPT-4o models certain words get used at dramatically higher and lower rates. For example, GPT-4o and 4o Mini use words like camaraderie, palpable, tapestry, and intricate at more than 100 times the rate of humans, such as in the GPT-4o output phrase “The camaraderie was palpable.” Conversely, they use certain obscenities more than 100 times less often. The top overrepresented and underrepresented words are presented in Tables 4 and 5 in the Appendix.44

Some overuse may be artifacts of the generation process; for example, Llama 3 instruction-tuned variants overuse continuation because their outputs sometimes begin with “Here is the continuation of the text…” Llama base models have a tendency to repeat themselves, so Llama 3 8B uses Deborah at 52 times the rate of humans largely because of a single document repeating it 308 times.

While many words listed in Table 4 may be occasionally expected in belletristic works of fiction, their pervasiveness across LLM output in a diverse array of genres is notable. To those familiar with academic writing, newspapers, or television scripts, these words are largely unexpected, and to experts likely signal an overwritten, sentimental, or simply uneven text. In the GPT models in particular, many of these words connote some form of complex relation among objects (e.g., tapestry, intricate, camaraderie, cacophony, amidst). Coupled with positive items such as vibrant and solace, these words together may signal a preference for grandiose, if hollow, summative sentences. As the use is most similar to humans for the base models, this suggests the word choice bias is introduced by the instruction tuning process, not simply by bias in the texts composing the training sets.

## Table 4: Most overrepresented words in LLM texts (rate relative to matched human text)
Rate = how many times more often the model uses the word than the human baseline. 10 words per model.

columns, left to right: Llama 3 8B | Llama 3 8B Instruct | Llama 3 70B | Llama 3 70B Instruct | GPT-4o Mini | GPT-4o

Llama 3 8B word	Llama 3 8B rate	Llama 3 8B Instruct word	Llama 3 8B Instruct rate	Llama 3 70B word	Llama 3 70B rate	Llama 3 70B Instruct word	Llama 3 70B Instruct rate	GPT-4o Mini word	GPT-4o Mini rate	GPT-4o word	GPT-4o rate
deborah	52	unease	101	bananas	31	unease	63	camaraderie	171	camaraderie	162
rambo	22	continuation	52	paperback	30	palpable	47	tapestry	147	tapestry	155
matty	20	palpable	48	bam	26	continuation	29	palpable	145	intricate	119
goodnight	18	reminder	33	verona	25	shoutout	28	grapple	131	underscore	107
ml	15	pang	29	filth	19	intricate	27	intricate	129	unspoken	102
merlin	13	rut	29	rekall	17	pang	25	fleeting	124	amidst	100
worcester	11	waft	28	denis	14	camaraderie	24	ignite	122	palpable	95
fay	10	prioritize	27	darry	12	policymaker	24	vibrant	92	solace	95
missy	10	grapple	24	ebook	12	prioritize	24	amidst	90	fleeting	84

## Table 5: Most underrepresented words in LLM texts (rate relative to matched human text)
Rate = fraction of the human rate. The INVERSE fingerprint - what models will not write. Note the obscenity, 'anyways', 'yep', 'ok', 'somebody', 'obviously', 'blah': the register humans actually use.

columns, left to right: Llama 3 8B | Llama 3 8B Instruct | Llama 3 70B | Llama 3 70B Instruct | GPT-4o Mini | GPT-4o

Llama 3 8B word	Llama 3 8B rate	Llama 3 8B Instruct word	Llama 3 8B Instruct rate	Llama 3 70B word	Llama 3 70B rate	Llama 3 70B Instruct word	Llama 3 70B Instruct rate	GPT-4o Mini word	GPT-4o Mini rate	GPT-4o word	GPT-4o rate
bingo	0.033	anyways	0.0097	jeez	0.040	yep	0.0075	extremely	0.0034	i.e.	0.0026
scorch	0.040	analyse	0.011	donnie	0.042	fucking	0.0075	spokesman	0.0059	blah	0.0063
been	0.043	somebody	0.012	alexithymia	0.046	horrible	0.0077	i.e.	0.0095	fuck	0.0079
abt	0.043	characterise	0.013	frampton	0.048	ok	0.011	unhappy	0.010	fucking	0.0083
bananas	0.043	fuck	0.014	y’all	0.048	fuckin	0.013	bitch	0.012	asshole	0.0093
pham	0.043	obviously	0.014	analogous	0.053	amid	0.015	fucking	0.012	nasty	0.011
ie	0.045	ok	0.014	carotenoid	0.053	fortunately	0.017	kg	0.013	chum	0.013
monstrous	0.045	fuckin	0.014	mussel	0.053	i.e.	0.018	fuck	0.014	shit	0.014
pow	0.045	blah	0.015	que	0.053	obviously	0.018	visa	0.015	ok	0.014
unquote	0.045	yep	0.016	whatsapp	0.053	amongst	0.019	ter	0.016	and/or	0.016
