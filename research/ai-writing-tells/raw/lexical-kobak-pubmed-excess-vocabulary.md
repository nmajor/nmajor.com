# Kobak, González-Márquez, Horvát & Lause — "Delving into LLM-assisted writing in biomedical publications through excess vocabulary" (Science Advances, 2025 / arXiv 2406.07016)

- URL (journal): https://www.science.org/doi/10.1126/sciadv.adt3813
- URL (preprint, full text used here): https://arxiv.org/html/2406.07016v4  — abs: https://arxiv.org/abs/2406.07016
- URL (data + code): https://github.com/berenslab/chatgpt-excess-words
- Publication: Science Advances vol. 11 no. 27, eadt3813 (2025). Preprint first posted 2024-06-11.
- Date accessed: 2026-08-18
- What it is: THE foundational measured corpus study of LLM lexical fingerprints. 14.2M PubMed abstracts 2010–2024. Method: "excess word usage" borrowed from excess-mortality analysis — project each word's expected 2024 frequency from 2021+2022, then measure the excess frequency RATIO (r = observed/expected) and GAP (delta = observed - expected). Gives a per-word number for how much a word spiked after ChatGPT. This is MEASURED, peer-reviewed, and the source everyone else's word lists are downstream of.
- EVIDENCE TIER: **measured** (peer-reviewed, open data, reproducible).

## Section A — verbatim excerpts from the paper

Recent large language models (LLMs) can generate and revise text with human-level performance, and have been widely commercialized in systems like ChatGPT. These models come with clear limitations: they can produce inaccurate information, reinforce existing biases, and be easily misused. Yet, many scientists have been using them to assist their scholarly writing. How wide-spread is LLM usage in the academic literature currently? To answer this question, we use an unbiased, large-scale approach, free from any assumptions on academic LLM usage. We study vocabulary changes in 14 million PubMed abstracts from 2010–2024, and show how the appearance of LLMs led to an abrupt increase in the frequency of certain style words. Our analysis based on excess words usage suggests that at least 10% of 2024 abstracts were processed with LLMs. This lower bound differed across disciplines, countries, and journals, and was as high as 30% for some PubMed sub-corpora. We show that the appearance of LLM-based writing assistants has had an unprecedented impact in the scientific literature, surpassing the effect of major world events such as the Covid pandemic.
Here, we suggest a novel, data-driven, and unbiased approach to track LLM usage in academic texts without these limitations: excess word usage.
We were inspired by studies of excess mortality (Islam et al. 2021; Karlinsky and Kobak 2021; Msemburi et al. 2023) that looked at the excess of fatalities during the Covid pandemic compared to pre-Covid mortality. We adapt this idea to LLM-induced changes in word usage and track the excess use of words after the release of ChatGPT-like LLMs compared to pre-LLM years.
Some words strongly increased their occurrence frequency in 2023–2024 (Figure 1). To quantify this increase, we calculated counterfactual expected frequency in 2024 based on the linear extrapolation of word frequencies in 2021 and 2022 (see Methods). Note that we did not use 2023 frequencies for this calculation, because they could already have been affected by ChatGPT. Comparing the empirical 2024 frequency pp with counterfactual projection qq, we obtained the excess frequency gap δ=p−q\delta=p-q and the excess frequency ratio r=p/qr=p/q as two measures of excess usage. These two measures are complementary. The frequency gap is well-suited to highlight excess usage of frequent words, while the frequency ratio points to the excess usage of infrequent words. For example, frequency increases from 0.001 to 0.01 and from 0.5 to 0.6 are both noteworthy in our case. Yet, the first example frequency increase is captured by a high rr value whereas the second example has a high δ\delta value.

In the following analysis, we focused on 26.6 K words with frequency pp above 10−410^{-4} in both 2023 and 2024. With over 1 million abstracts per year, this corresponds to >100{>}100 usages per year. Across all these words, we found many with strong excess usage in 2024 (Figure 2). Less common words with strong excess usage included delves (r=28.0r=28.0), showcasing (r=10.2r=10.2) and underscores (r=10.9r=10.9), together with their grammatical inflections (Figure 2a). More common words with excess usage included potential (δ=0.045\delta=0.045), findings (δ=0.031\delta=0.031), and crucial (δ=0.029\delta=0.029) (Figure 2b).

Is this unusual, or do similar frequency changes happen every year? For comparison, we did the same analysis for all years from 2013 to 2023 (Figures S1–S4). We found words like ebola with r=9.9r=9.9 in 2015 and zika with r=40.4r=40.4 in 2017, but from 2013 until 2019, no single word has ever shown excess frequency gap δ>0.01\delta>0.01. This changed during the Covid pandemic: in 2020–2022 words like coronavirus, lockdown, and pandemic showed very large excess usages (up to r>1000r>1000 and δ=0.037\delta=0.037), in agreement with the observation that the Covid pandemic had an unprecedented effect on biomedical publishing (González-Márquez et al. 2024).
To compare the size of excess vocabulary between years, we defined as excess words all words with δ>0.01\delta>0.01 or
log10⁡r>log10⁡24​log10​p\log_{10}r>\frac{\log_{10}2}{4}\log_{10}p where pp is frequency in 2024 (see dashed lines in Figure 2); these thresholds were chosen such that most words in pre-Covid years were well below (Figures S1–S4). The number of excess words showed a marked rise during the Covid pandemic (up to 189 words in 2021) followed by an even larger rise (to 382) in the first half of 2024 (Figure 3), roughly one year after ChatGPT was released.

We manually annotated all 829 unique excess words from 2013–24 into content words, like masks or convolutional, and style words, like intricate or notably (and a small number of ambiguous words, see Methods). The excess vocabulary during the Covid pandemic consisted almost entirely of content words (such as respiratory, remdesivir, etc.), whereas the excess vocabulary in 2024 consisted almost entirely of style words (Figure 3a). Out of all 319 excess style words in 2024, 66% were verbs and 16% were adjectives. For comparison, most excess words in prior years were nouns (Figure 3b).
The unprecedented increase in excess style words in 2024 allows to use them as markers of ChatGPT usage. Each frequency gap δ\delta gives a lower bound on the fraction of abstracts that went through LLMs in 2024. For example, δ=0.045\delta=0.045 for the LLM style marker word potential means that in 2024 there were 4.5 percentage points more abstracts containing that word than expected based on the 2021–22 data, suggesting that at least 4.5% of all abstracts in 2024 went through an LLM. We reasoned that combining multiple words together can increase the lower bound. For that, we grouped together all 2024 excess style words with frequency p<Tp<T and computed the frequency gap Δ=P−Q\Delta=P-Q in abstracts using at least one of these words, as a function of threshold TT (Figure 4). Here PP and QQ are the observed and the expected frequencies of such abstracts in 2024. We obtained the highest Δ\Delta value with T≈0.01T\approx 0.01 (resulting in 222 words). The frequency gap was Δrare=0.111\Delta_{\mathrm{rare}}=0.111, putting the lower bound on the LLM usage in 2024 at 11% (‘rare words’ in Figure 5a). Importantly, this is only a lower bound because some of the abstracts that did go through an LLM may not contain any of the style words we used for this analysis (see Discussion).

We found that we could obtain a very similar lower bound using a non-overlapping group of only ten excess style words with high individual δ\delta values: across, additionally, comprehensive, crucial, enhancing, exhibited, insights, notably, particularly, within. We manually selected these ten words to maximize their combined frequency gap in order to get the maximal lower bound. This group yielded a very similar frequency gap: Δcommon=0.110\Delta_{\mathrm{common}}=0.110 (‘common words’ in Figure 5a). As the two groups were non-overlapping, this serves as an independent confirmation of the lower bound.
In this paper, we leveraged excess word usage as a data-driven, principled method to show how LLMs have affected scientific writing. We found that the effect was unprecedented in quality and quantity: hundreds of words have abruptly increased their frequency after ChatGPT became available. In contrast to previous shifts in word popularity, the 2023–24 excess words were not content-related nouns, but rather style-affecting verbs and adjectives that ChatGPT-like LLMs prefer.
• 

By meticulously delving into the intricate web connecting […] and […], this comprehensive chapter takes a deep dive into their involvement as significant risk factors for […].

• 

A comprehensive grasp of the intricate interplay between […] and […] is pivotal for effective therapeutic strategies.

• 

Initially, we delve into the intricacies of […], accentuating its indispensability in cellular physiology, the enzymatic labyrinth governing its flux, and the pivotal […] mechanisms.

Our analysis of the excess frequency of such LLM-preferred style words suggests that at least 10% of 2024 PubMed abstracts were processed with LLMs. With ∼1.5{\sim}1.5 million papers being currently indexed in PubMed per year, this means that LLMs assist in writing at least 150 thousand papers per year. This estimate is based on our emerging lists of LLM marker words that showed large excess usage in 2024, which strongly suggests these words are preferred by LLMs like ChatGPT that became popular by that time. Importantly, this is only a lower bound: abstracts not using any of the LLM marker words are not included in our estimates, so the true fraction of LLM-processed abstracts is likely much higher.
Our results go beyond other studies on detecting LLM fingerprints in academic writing. Gray 2024 described a 22-fold increase in frequency for the words intricate and meticulously in 2023, while Liang et al. 2024b identified pivotal, intricate, showcasing, and realm as the top LLM-preferred words based on a corpus of LLM-generated text. Our study is the first to perform a systematic search for LLM marker words based on excess usage in published scientific texts. We found 319 style words with highly elevated frequencies, and indeed all the above examples appear in our list.
In conclusion, our work showed that the effect of LLM usage on scientific writing is truly unprecedented and outshines even the drastic changes in vocabulary induced by the Covid-19 pandemic. This effect will likely become even more pronounced in the future, as one can analyze more publication cycles and LLMs are likely to increase in adoption. At the same time, LLM usage can be well-disguised and hard to detect, so the true extent of their adoption is likely already higher than what we measured. This trend calls for a reassessment of current policies and regulations around the use of LLMs for science. Our analysis can inform the necessary debate around LLM policies by providing a measurement method for LLM usage that is urgently needed (Brinkmann et al. 2023; Heersmink 2024). Our excess word approach could help to track future LLM usage, including scientific (grant applications and peer review) and non-scientific (news articles, social media, prose) use cases.
We hope that future work will meticulously delve into tracking LLM usage more accurately and assess which policy changes are crucial to tackle the intricate challenges posed by the rise of LLMs in scientific publishing.
When computing excess words in year YY, we only looked at words with frequencies above 10−410^{-4} both in year YY and Y−1Y-1. To do the linear extrapolation, we took the frequencies p−3p_{-3} in year Y−3Y-3 and p−2p_{-2} in year Y−2Y-2 and computed the counterfactual projection q=p−2+2⋅max⁡{p−2−p−3,0}q=p_{-2}+2\cdot\max\{p_{-2}-p_{-3},0\}. This way, qq was always at least as large as p−2p_{-2} (see Figure 1), resulting in conservative estimates of r=p/qr=p/q and δ=p−q\delta=p-q.
We identified 829 unique excess words (surpassing thresholds on rr or δ\delta) from 2013 to 2024. Some of these words showed excess usage in multiple years. We sorted the list alphabetically and annotated them as content and style words while being blinded to the year in which they were selected as excess words. We assigned parts of speech (nouns, adjectives, verbs, etc.) in the same way. In case of doubt, the words were discussed between the authors. When we were not certain whether a word was content or style because of ambiguous usage, we did not label this word as either content or style.

### Verbatim: the paper's own examples of LLM-flavoured prose (from published abstracts)

The following examples from three real 2023 abstracts illustrate this ChatGPT-style flowery language:

• 

By meticulously delving into the intricate web connecting […] and […], this comprehensive chapter takes a deep dive into their involvement as significant risk factors for […].

• 

A comprehensive grasp of the intricate interplay between […] and […] is pivotal for effective therapeutic strategies.

• 

Initially, we delve into the intricacies of […], accentuating its indispensability in cellular physiology, the enzymatic labyrinth governing its flux, and the pivotal […] mechanisms.


## Section B — DERIVED TABLES (computed 2026-08-18 by this research pass from the authors' own published raw data)

PROVENANCE / HONESTY NOTE: the paper itself prints only a handful of r and delta values in prose
(delves r=28.0, showcasing r=10.2, underscores r=10.9, potential delta=0.045, findings delta=0.031,
crucial delta=0.029) and puts the rest in scatterplot figures. The tables below were COMPUTED HERE by
applying the authors' own published formula (Methods: q = p_2022 + 2*max(p_2022 - p_2021, 0);
r = p_2024/q; delta = p_2024 - q) to the authors' own published data files:
  results/yearly-counts.csv.gz (per-word, per-year count of abstracts containing the word)
  results/excess_words.csv     (the authors' manual content/style/part-of-speech annotation of all 900 excess words)
Sanity check: this reproduces the paper's printed figures — computed delves r=28.18 (paper: 28.0),
underscores r=13.78 (paper prints 10.9 for the arXiv v1 cut), showcasing r=10.70 (paper: 10.2),
potential delta=0.0518 (paper: 0.045). Small differences come from the PubMed snapshot version.
So: the METHOD and the DATA are the authors'; the per-word table expansion is this pass's derivation.
Frequencies are "fraction of 2024 abstracts containing the word" — so delta=0.0345 for "delves" means
3.45 percentage points more 2024 abstracts contained it than projected.

--- TOP 60 STYLE WORDS BY FREQUENCY GAP delta (common words) ---
potential	adjective	delta=0.05184	r=1.30	freq2024=0.225259
these	pronoun	delta=0.04171	r=1.14	freq2024=0.350596
findings	noun	delta=0.04098	r=1.31	freq2024=0.175249
crucial	adjective	delta=0.03710	r=2.11	freq2024=0.070601
additionally	adverb	delta=0.03646	r=1.91	freq2024=0.076703
exhibited	verb	delta=0.03182	r=1.89	freq2024=0.067681
while	preposition	delta=0.03065	r=1.20	freq2024=0.182719
insights	noun	delta=0.02961	r=2.04	freq2024=0.058083
within	adverb	delta=0.02835	r=1.29	freq2024=0.126334
particularly	adverb	delta=0.02736	r=1.73	freq2024=0.064785
across	preposition	delta=0.02722	r=1.41	freq2024=0.093457
comprehensive	adjective	delta=0.02641	r=1.76	freq2024=0.061056
demonstrated	verb	delta=0.02539	r=1.31	freq2024=0.107977
this	pronoun	delta=0.02424	r=1.03	freq2024=0.726806
through	preposition	delta=0.02400	r=1.16	freq2024=0.170911
into	preposition	delta=0.02324	r=1.13	freq2024=0.201308
enhance	verb	delta=0.02252	r=1.76	freq2024=0.052348
challenges	noun	delta=0.02216	r=1.60	freq2024=0.059001
approach	noun	delta=0.02195	r=1.24	freq2024=0.112100
notably	advebr	delta=0.02187	r=2.63	freq2024=0.035254
revealed	verb	delta=0.02160	r=1.21	freq2024=0.124468
including	preposition	delta=0.02121	r=1.12	freq2024=0.193386
impact	noun	delta=0.02112	r=1.23	freq2024=0.114245
various	adjective	delta=0.02107	r=1.22	freq2024=0.114743
enhancing	verb	delta=0.02045	r=2.43	freq2024=0.034766
understanding	verb	delta=0.02029	r=1.30	freq2024=0.088862
employed	verb	delta=0.01872	r=1.68	freq2024=0.046147
valuable	adjective	delta=0.01870	r=2.01	freq2024=0.037190
outcomes	noun	delta=0.01791	r=1.16	freq2024=0.131817
strategies	noun	delta=0.01698	r=1.29	freq2024=0.075436
remains	verb	delta=0.01662	r=1.29	freq2024=0.074767
highlights	verb	delta=0.01647	r=1.91	freq2024=0.034611
their	pronoun	delta=0.01645	r=1.06	freq2024=0.275609
conducted	verb	delta=0.01616	r=1.14	freq2024=0.135430
diverse	adjective	delta=0.01565	r=1.64	freq2024=0.040155
offering	verb	delta=0.01446	r=4.25	freq2024=0.018902
research	noun	delta=0.01423	r=1.09	freq2024=0.166382
highlighting	verb	delta=0.01414	r=2.58	freq2024=0.023089
leading	verb	delta=0.01405	r=1.35	freq2024=0.054098
using	verb	delta=0.01402	r=1.04	freq2024=0.349355
observed	verb	delta=0.01394	r=1.12	freq2024=0.130062
despite	preposition	delta=0.01374	r=1.29	freq2024=0.061733
offers	verb	delta=0.01370	r=2.07	freq2024=0.026524
both	pronoun/adverb	delta=0.01370	r=1.07	freq2024=0.211831
assess	verb	delta=0.01360	r=1.18	freq2024=0.089916
need	verb	delta=0.01349	r=1.21	freq2024=0.078400
underscores	verb	delta=0.01335	r=13.78	freq2024=0.014389
promising	verb	delta=0.01317	r=1.25	freq2024=0.064864
address	verb	delta=0.01301	r=1.44	freq2024=0.042357
utilizing	verb	delta=0.01275	r=2.09	freq2024=0.024421
thereby	adverb	delta=0.01257	r=1.72	freq2024=0.030103
aims	verb	delta=0.01251	r=1.29	freq2024=0.056046
like	particle	delta=0.01224	r=1.24	freq2024=0.063826
distinct	adjective	delta=0.01216	r=1.48	freq2024=0.037451
individuals	noun	delta=0.01194	r=1.21	freq2024=0.068065
exhibit	verb	delta=0.01192	r=1.76	freq2024=0.027690
pivotal	adjective	delta=0.01165	r=3.06	freq2024=0.017299
offer	verb	delta=0.01161	r=1.79	freq2024=0.026268
role	noun	delta=0.01151	r=1.09	freq2024=0.136077
enhanced	verb	delta=0.01132	r=1.25	freq2024=0.056647

--- ALL 407 STYLE WORDS, ALPHABETICAL (word / pos / r / delta) ---
accentuates	verb	r=2.81	delta=0.00012
achieving	verb	r=1.77	delta=0.00912
acknowledges	verb	r=1.88	delta=0.00015
acknowledging	verb	r=1.86	delta=0.00049
across	preposition	r=1.41	delta=0.02722
additionally	adverb	r=1.91	delta=0.03646
address	verb	r=1.44	delta=0.01301
addresses	verb	r=1.87	delta=0.00299
addressing	verb	r=2.15	delta=0.01081
adept	adjective	r=3.12	delta=0.00019
adhered	verb	r=1.85	delta=0.00075
adhering	verb	r=1.91	delta=0.00071
advancement	noun	r=2.01	delta=0.00378
advancements	noun	r=3.61	delta=0.00961
advancing	verb	r=2.96	delta=0.00511
advocates	verb	r=1.71	delta=0.00058
advocating	verb	r=3.11	delta=0.00081
affirming	verb	r=2.04	delta=0.00056
afflicted	verb	r=1.91	delta=0.00030
aiding	verb	r=3.25	delta=0.00187
aims	verb	r=1.29	delta=0.01251
akin	adjective	r=2.36	delta=0.00055
align	verb	r=1.90	delta=0.00154
aligning	verb	r=4.01	delta=0.00159
aligns	verb	r=2.94	delta=0.00102
alongside	preposition	r=2.03	delta=0.00449
amid	preposition	r=1.26	delta=0.00016
amidst	preposition	r=1.74	delta=0.00039
analysis	noun	r=1.01	delta=0.00389
announced	verb	r=0.62	delta=-0.00011
apologizes	verb	r=1.08	delta=0.00001
approach	noun	r=1.24	delta=0.02195
assess	verb	r=1.18	delta=0.01360
assessed	verb	r=1.14	delta=0.01113
assessing	verb	r=1.34	delta=0.00603
assessments	noun	r=1.50	delta=0.00612
attains	verb	r=1.93	delta=0.00013
attributed	verb	r=1.38	delta=0.00422
augmenting	verb	r=2.13	delta=0.00081
avenue	noun	r=1.84	delta=0.00200
avenues	noun	r=2.35	delta=0.00346
based	verb	r=0.92	delta=-0.02164
between	preposition	r=1.01	delta=0.00371
bolster	verb	r=2.13	delta=0.00048
bolstered	verb	r=2.44	delta=0.00014
bolstering	verb	r=3.76	delta=0.00039
both	pronoun/adverb	r=1.07	delta=0.01370
broader	adjective	r=1.70	delta=0.00350
burgeoning	verb	r=2.32	delta=0.00042
capabilities	noun	r=1.85	delta=0.00563
capitalizing	verb	r=2.05	delta=0.00015
categorized	verb	r=1.54	delta=0.00464
categorizes	verb	r=1.84	delta=0.00015
categorizing	verb	r=2.28	delta=0.00052
challenge	verb	r=1.35	delta=0.00872
challenges	noun	r=1.60	delta=0.02216
combating	verb	r=1.75	delta=0.00092
commendable	adjective	r=6.82	delta=0.00041
compelling	adjective	r=1.96	delta=0.00120
complex	noun	r=1.17	delta=0.01075
complicates	verb	r=1.72	delta=0.00045
complicating	verb	r=1.72	delta=0.00041
comprehend	verb	r=1.62	delta=0.00055
comprehending	verb	r=3.74	delta=0.00090
comprehensive	adjective	r=1.76	delta=0.02641
comprising	verb	r=1.51	delta=0.00413
conditions	noun	r=1.13	delta=0.01017
conducted	verb	r=1.14	delta=0.01616
consequently	verb	r=1.47	delta=0.00514
consolidates	verb	r=3.86	delta=0.00025
contributing	verb	r=1.73	delta=0.00784
conversely	adverb	r=2.06	delta=0.00532
correlating	verb	r=1.75	delta=0.00099
crafted	verb	r=1.81	delta=0.00021
crafting	verb	r=2.87	delta=0.00023
crucial	adjective	r=2.11	delta=0.03710
culminating	verb	r=2.36	delta=0.00050
customizing	verb	r=1.96	delta=0.00013
declare	verb	r=0.81	delta=-0.00007
declared	verb	r=0.61	delta=-0.00069
deductively	adverb	r=0.91	delta=-0.00002
delineates	verb	r=2.60	delta=0.00043
delve	verb	r=7.91	delta=0.00172
delved	verb	r=12.31	delta=0.00065
delves	verb	r=28.18	delta=0.00345
delving	verb	r=6.95	delta=0.00047
demonstrated	verb	r=1.31	delta=0.02539
demonstrates	verb	r=1.53	delta=0.00886
demonstrating	verb	r=1.81	delta=0.00720
dependability	noun	r=1.93	delta=0.00009
dependable	adjective	r=3.01	delta=0.00032
despite	preposition	r=1.29	delta=0.01374
detailing	verb	r=1.68	delta=0.00042
detrimentally	adverb	r=2.08	delta=0.00009
diminishes	verb	r=1.97	delta=0.00049
diminishing	verb	r=1.75	delta=0.00055
discern	verb	r=2.08	delta=0.00075
discerned	verb	r=2.17	delta=0.00024
discernible	adjective	r=3.10	delta=0.00082
discerning	verb	r=2.47	delta=0.00028
displaying	verb	r=1.55	delta=0.00115
disrupts	verb	r=1.67	delta=0.00082
distinct	adjective	r=1.48	delta=0.01216
distinctions	noun	r=2.04	delta=0.00048
distinctive	adjective	r=1.67	delta=0.00206
diverse	adjective	r=1.64	delta=0.01565
during	preposition	r=0.96	delta=-0.00716
easing	verb	r=0.75	delta=-0.00006
effectively	adverb	r=1.31	delta=0.01033
elevate	verb	r=1.79	delta=0.00057
elevated	verb	r=1.34	delta=0.00856
elevates	verb	r=2.03	delta=0.00031
elevating	verb	r=1.89	delta=0.00060
elucidate	verb	r=1.65	delta=0.00661
elucidates	verb	r=2.29	delta=0.00131
elucidating	verb	r=2.25	delta=0.00263
embracing	verb	r=1.77	delta=0.00022
emerged	verb	r=1.72	delta=0.01061
emerges	verb	r=3.16	delta=0.00270
emphasises	verb	r=2.41	delta=0.00044
emphasising	verb	r=3.83	delta=0.00063
emphasize	verb	r=1.77	delta=0.00327
emphasizes	verb	r=2.64	delta=0.00504
emphasizing	verb	r=4.67	delta=0.00923
employed	verb	r=1.68	delta=0.01872
employing	verb	r=2.30	delta=0.00821
employs	verb	r=2.33	delta=0.00257
empowers	verb	r=2.14	delta=0.00020
emulating	verb	r=2.01	delta=0.00012
emulation	noun	r=2.24	delta=0.00011
enabling	verb	r=1.85	delta=0.00668
encapsulates	verb	r=2.49	delta=0.00018
encompass	verb	r=3.07	delta=0.00168
encompassed	verb	r=4.94	delta=0.00247
encompasses	verb	r=2.35	delta=0.00167
encompassing	verb	r=4.38	delta=0.00612
endangering	verb	r=1.01	delta=0.00000
endeavors	noun	r=3.65	delta=0.00119
endeavours	noun	r=2.30	delta=0.00014
enduring	verb	r=2.06	delta=0.00063
enhance	verb	r=1.76	delta=0.02252
enhanced	verb	r=1.25	delta=0.01132
enhancements	nount	r=2.79	delta=0.00125
enhances	verb	r=2.18	delta=0.00813
enhancing	verb	r=2.43	delta=0.02045
ensuring	verb	r=1.93	delta=0.00497
equipping	verb	r=2.02	delta=0.00013
escalating	verb	r=3.48	delta=0.00137
essentials	noun	r=1.07	delta=0.00001
evaluates	verb	r=1.55	delta=0.00184
evolving	verb	r=1.56	delta=0.00224
exacerbating	verb	r=2.46	delta=0.00084
examines	verb	r=1.53	delta=0.00343
exceeding	verb	r=2.38	delta=0.00280
excels	verb	r=5.87	delta=0.00029
exceptional	adjective	r=2.80	delta=0.00389
exceptionally	adverb	r=1.79	delta=0.00077
exerting	verb	r=1.67	delta=0.00056
exhibit	verb	r=1.76	delta=0.01192
exhibited	verb	r=1.89	delta=0.03182
exhibiting	verb	r=2.31	delta=0.00582
exhibits	verb	r=1.69	delta=0.00797
expedite	verb	r=1.98	delta=0.00053
expediting	verb	r=3.60	delta=0.00029
exploration	noun	r=1.55	delta=0.00485
explores	verb	r=2.05	delta=0.00742
facilitated	verb	r=1.51	delta=0.00317
facilitates	verb	r=1.46	delta=0.00264
facilitating	verb	r=2.16	delta=0.00712
featuring	verb	r=2.02	delta=0.00188
fight	noun/verb	r=0.72	delta=-0.00052
findings	noun	r=1.31	delta=0.04098
focusing	verb	r=1.76	delta=0.00889
formidable	adjective	r=3.90	delta=0.00113
fostering	verb	r=3.12	delta=0.00261
fosters	verb	r=2.61	delta=0.00042
foundational	adjective	r=2.07	delta=0.00103
furnish	verb	r=1.86	delta=0.00017
garnered	verb	r=5.28	delta=0.00296
garnering	verb	r=2.08	delta=0.00013
gauged	verb	r=2.47	delta=0.00017
grappling	verb	r=4.91	delta=0.00020
groundbreaking	adjective	r=4.87	delta=0.00065
groundwork	noun	r=2.36	delta=0.00088
hardest	noun	r=0.57	delta=-0.00006
harness	verb	r=1.74	delta=0.00052
harnesses	verb	r=2.80	delta=0.00022
harnessing	verb	r=1.95	delta=0.00084
heighten	verb	r=2.02	delta=0.00014
heightened	adjective	r=3.60	delta=0.00465
highlight	verb	r=1.43	delta=0.01014
highlighting	verb	r=2.58	delta=0.01414
highlights	verb	r=1.91	delta=0.01647
hinder	verb	r=1.54	delta=0.00119
hinges	verb	r=2.38	delta=0.00030
hinting	verb	r=2.22	delta=0.00016
hold	verb	r=1.93	delta=0.00353
holds	verb	r=3.21	delta=0.00718
however	adverb	r=1.01	delta=0.00272
identified	verb	r=1.08	delta=0.01080
illuminates	verb	r=2.42	delta=0.00032
illuminating	adjective	r=1.83	delta=0.00021
imbalances	verb	r=1.74	delta=0.00056
impact	noun	r=1.23	delta=0.02112
impactful	adjective	r=1.30	delta=0.00025
impacting	verb	r=1.94	delta=0.00309
impede	verb	r=1.61	delta=0.00072
impeding	adjective	r=1.90	delta=0.00062
imperative	adjective	r=1.99	delta=0.00318
impressive	adjective	r=2.10	delta=0.00138
inadequately	adverb	r=2.20	delta=0.00065
including	preposition	r=1.12	delta=0.02121
incorporates	verb	r=1.95	delta=0.00163
incorporating	verb	r=1.87	delta=0.00657
indicating	verb	r=1.33	delta=0.00876
individuals	noun	r=1.21	delta=0.01194
influencing	verb	r=1.36	delta=0.00452
inherent	adjective	r=1.61	delta=0.00275
initially	adverb	r=1.38	delta=0.00402
innovative	adjective	r=1.88	delta=0.00863
inquiries	noun	r=2.62	delta=0.00027
insights	noun	r=2.04	delta=0.02961
integrates	verb	r=2.08	delta=0.00233
integrating	verb	r=1.74	delta=0.00599
integration	noun	r=1.43	delta=0.00572
interconnectedness	noun	r=2.69	delta=0.00019
interplay	noun	r=2.11	delta=0.00531
into	preposition	r=1.13	delta=0.02324
intricacies	noun	r=7.65	delta=0.00100
intricate	adjective	r=7.40	delta=0.00858
intricately	adverb	r=4.98	delta=0.00079
introduces	adjective	r=2.21	delta=0.00455
invaluable	adjective	r=1.66	delta=0.00054
investigates	verb	r=1.71	delta=0.00463
involves	verb	r=1.56	delta=0.00531
involving	verb	r=1.42	delta=0.00898
juxtaposed	adjective	r=2.19	delta=0.00011
leading	verb	r=1.35	delta=0.01405
leverages	verb	r=2.43	delta=0.00131
leveraging	verb	r=3.08	delta=0.00506
like	particle	r=1.24	delta=0.01224
limitations	noun	r=1.34	delta=0.00645
linked	verb	r=1.31	delta=0.00904
maintaining	verb	r=1.37	delta=0.00475
merges	verb	r=1.96	delta=0.00009
methodologies	noun	r=1.61	delta=0.00258
meticulous	adjective	r=3.11	delta=0.00116
meticulously	adverb	r=10.47	delta=0.00151
midst	preposition	r=0.42	delta=-0.00012
multifaceted	adjective	r=2.87	delta=0.00373
necessitate	verb	r=2.31	delta=0.00103
necessitates	verb	r=2.55	delta=0.00221
necessitating	verb	r=4.25	delta=0.00429
necessity	noun	r=2.08	delta=0.00329
need	verb	r=1.21	delta=0.01349
notable	adjective	r=3.42	delta=0.01043
notably	advebr	r=2.63	delta=0.02187
noteworthy	adjective	r=2.27	delta=0.00246
nuanced	adjective	r=2.72	delta=0.00189
nuances	noun	r=2.00	delta=0.00046
observed	verb	r=1.12	delta=0.01394
offer	verb	r=1.79	delta=0.01161
offering	verb	r=4.25	delta=0.01446
offers	verb	r=2.07	delta=0.01370
optimizing	verb	r=1.84	delta=0.00459
orchestrating	verb	r=1.82	delta=0.00035
outcomes	noun	r=1.16	delta=0.01791
outlines	verb	r=1.60	delta=0.00104
overlook	verb	r=1.99	delta=0.00030
overlooking	verb	r=3.52	delta=0.00036
overwhelmed	verb	r=0.75	delta=-0.00009
particularly	adverb	r=1.73	delta=0.02736
paving	verb	r=2.39	delta=0.00149
persist	verb	r=1.52	delta=0.00148
pinpoint	verb	r=2.18	delta=0.00062
pinpointed	verb	r=3.16	delta=0.00042
pinpointing	verb	r=2.99	delta=0.00028
pioneering	verb	r=2.55	delta=0.00090
pioneers	noun	r=3.23	delta=0.00022
pivotal	adjective	r=3.06	delta=0.01165
poised	verb	r=2.22	delta=0.00044
pose	verb	r=1.63	delta=0.00350
posed	verb	r=1.75	delta=0.00164
poses	verb	r=2.37	delta=0.00708
posing	verb	r=2.37	delta=0.00221
postponed	verb	r=0.56	delta=-0.00014
potential	adjective	r=1.30	delta=0.05184
potentially	adverb	r=1.32	delta=0.00982
precise	adjective	r=1.73	delta=0.00849
predominantly	adverb	r=1.61	delta=0.00516
presents	verb	r=1.54	delta=0.00992
preserving	verb	r=1.51	delta=0.00171
pressing	adjective	r=2.03	delta=0.00144
prevalent	adjective	r=1.47	delta=0.00738
primarily	adverb	r=1.74	delta=0.01118
primary	adjective	r=1.12	delta=0.01003
promise	verb	r=2.63	delta=0.01096
promising	verb	r=1.25	delta=0.01317
pronounced	adjective	r=1.53	delta=0.00337
propelling	verb	r=2.40	delta=0.00014
providing	verb	r=1.37	delta=0.01088
realizes	verb	r=0.51	delta=-0.00042
realm	noun	r=4.97	delta=0.00181
realms	noun	r=2.67	delta=0.00021
recognizing	verb	r=1.73	delta=0.00183
refine	verb	r=2.01	delta=0.00165
refines	verb	r=2.14	delta=0.00014
refining	verb	r=2.71	delta=0.00124
reframing	verb	r=0.98	delta=-0.00000
remains	verb	r=1.29	delta=0.01662
remarkable	adjective	r=1.51	delta=0.00418
renowned	adjective	r=4.91	delta=0.00085
research	noun	r=1.09	delta=0.01423
resulting	verb	r=1.28	delta=0.01056
rethink	verb	r=0.78	delta=-0.00004
revealed	verb	r=1.21	delta=0.02160
revealing	verb	r=1.68	delta=0.00410
reveals	verb	r=1.41	delta=0.00434
revolutionize	verb	r=3.93	delta=0.00093
revolutionizing	verb	r=4.07	delta=0.00055
revolves	verb	r=2.14	delta=0.00010
role	noun	r=1.09	delta=0.01151
scrutinize	verb	r=2.49	delta=0.00034
scrutinized	verb	r=1.79	delta=0.00033
scrutinizing	verb	r=3.21	delta=0.00016
seamless	adjective	r=2.16	delta=0.00042
seamlessly	adverb	r=3.08	delta=0.00052
seeks	verb	r=1.75	delta=0.00135
serves	verb	r=1.98	delta=0.00438
serving	verb	r=1.68	delta=0.00208
shaping	verb	r=1.52	delta=0.00157
shedding	verb	r=2.03	delta=0.00158
showcased	verb	r=3.82	delta=0.00070
showcases	verb	r=3.84	delta=0.00081
showcasing	verb	r=10.70	delta=0.00208
signifying	verb	r=1.82	delta=0.00030
solidify	verb	r=2.08	delta=0.00009
spanned	verb	r=1.97	delta=0.00038
spanning	verb	r=2.14	delta=0.00277
specifically	adverb	r=1.35	delta=0.00982
spurred	verb	r=1.98	delta=0.00023
stands	verb	r=3.34	delta=0.00243
statement	noun	r=0.88	delta=-0.00044
stemming	verb	r=1.72	delta=0.00049
strategically	adjective	r=1.94	delta=0.00044
strategies	noun	r=1.29	delta=0.01698
streamline	verb	r=2.29	delta=0.00058
streamlined	verb	r=1.83	delta=0.00045
streamlines	verb	r=2.30	delta=0.00018
streamlining	verb	r=2.51	delta=0.00033
struggle	verb	r=1.84	delta=0.00076
subsequently	adverb	r=1.44	delta=0.00813
substantial	adjective	r=1.62	delta=0.01038
substantiated	verb	r=2.06	delta=0.00048
substantiates	verb	r=1.95	delta=0.00010
surged	verb	r=1.96	delta=0.00017
surmount	verb	r=2.22	delta=0.00010
surpass	verb	r=1.85	delta=0.00031
surpassed	verb	r=2.57	delta=0.00070
surpasses	verb	r=3.82	delta=0.00076
surpassing	verb	r=7.09	delta=0.00238
swift	adjective	r=2.88	delta=0.00059
swiftly	adverb	r=1.85	delta=0.00019
techniques	noun	r=1.27	delta=0.00979
their	pronoun	r=1.06	delta=0.01645
thereby	adverb	r=1.72	delta=0.01257
these	pronoun	r=1.14	delta=0.04171
this	pronoun	r=1.03	delta=0.02424
thorough	adjective	r=1.74	delta=0.00300
through	preposition	r=1.16	delta=0.02400
transformative	adjective	r=2.97	delta=0.00152
typically	adverb	r=1.38	delta=0.00478
ultimately	adverb	r=1.53	delta=0.00542
uncharted	adjective	r=2.35	delta=0.00012
uncovering	verb	r=1.90	delta=0.00071
underexplored	verb	r=2.72	delta=0.00145
underscore	verb	r=6.73	delta=0.00976
underscored	verb	r=5.14	delta=0.00158
underscores	verb	r=13.78	delta=0.01335
underscoring	verb	r=7.48	delta=0.00494
understanding	verb	r=1.30	delta=0.02029
unexplored	adjective	r=1.57	delta=0.00183
unlocking	verb	r=1.88	delta=0.00017
unparalleled	adjective	r=1.80	delta=0.00020
unraveling	verb	r=2.71	delta=0.00072
unveil	verb	r=2.15	delta=0.00106
unveiled	verb	r=3.41	delta=0.00214
unveiling	verb	r=2.19	delta=0.00040
unveils	verb	r=2.72	delta=0.00076
uphold	verb	r=2.20	delta=0.00014
upholding	verb	r=2.69	delta=0.00013
urging	verb	r=2.82	delta=0.00017
using	verb	r=1.04	delta=0.01402
utilized	verb	r=1.46	delta=0.01041
utilizes	verb	r=1.96	delta=0.00228
utilizing	verb	r=2.09	delta=0.01275
valuable	adjective	r=2.01	delta=0.01870
various	adjective	r=1.22	delta=0.02107
varying	verb	r=1.50	delta=0.00660
verifies	verb	r=0.42	delta=-0.00049
versatility	noun	r=1.87	delta=0.00124
wandering	verb	r=0.98	delta=-0.00000
warranting	verb	r=2.18	delta=0.00081
were	verb	r=0.96	delta=-0.02338
while	preposition	r=1.20	delta=0.03065
within	adverb	r=1.29	delta=0.02835
yielding	verb	r=1.59	delta=0.00187

--- TAIL: style words with LOWEST r (i.e. flagged in earlier years, not 2024-specific) ---
midst	preposition	r=0.42	delta=-0.00012
verifies	verb	r=0.42	delta=-0.00049
realizes	verb	r=0.51	delta=-0.00042
postponed	verb	r=0.56	delta=-0.00014
hardest	noun	r=0.57	delta=-0.00006
declared	verb	r=0.61	delta=-0.00069
announced	verb	r=0.62	delta=-0.00011
fight	noun/verb	r=0.72	delta=-0.00052
easing	verb	r=0.75	delta=-0.00006
overwhelmed	verb	r=0.75	delta=-0.00009
rethink	verb	r=0.78	delta=-0.00004
declare	verb	r=0.81	delta=-0.00007
statement	noun	r=0.88	delta=-0.00044
deductively	adverb	r=0.91	delta=-0.00002
based	verb	r=0.92	delta=-0.02164
were	verb	r=0.96	delta=-0.02338
during	preposition	r=0.96	delta=-0.00716
reframing	verb	r=0.98	delta=-0.00000
wandering	verb	r=0.98	delta=-0.00000
analysis	noun	r=1.01	delta=0.00389
endangering	verb	r=1.01	delta=0.00000
between	preposition	r=1.01	delta=0.00371
however	adverb	r=1.01	delta=0.00272
this	pronoun	r=1.03	delta=0.02424
using	verb	r=1.04	delta=0.01402
their	pronoun	r=1.06	delta=0.01645
essentials	noun	r=1.07	delta=0.00001
both	pronoun/adverb	r=1.07	delta=0.01370
identified	verb	r=1.08	delta=0.01080
apologizes	verb	r=1.08	delta=0.00001
