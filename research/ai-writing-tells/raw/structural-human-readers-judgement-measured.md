# What makes HUMAN readers call text AI-written, and where they are wrong (two measured studies, 2025-2026)

- Date accessed: 2026-08-18
- What it is: The two best recent MEASURED studies on human (not detector) judgement of AI text, kept together because they cut in opposite directions and the pair is the honest picture. Milicka et al. shows readers hold specific, partly-wrong stylistic stereotypes and can be trained out of them. Tabach shows judges reliably pick a "more human" document even when every extractable stylometric feature is identical between the two.
- Pairs with `structural-jakesch-flawed-human-heuristics.md` (the 2023 PNAS study) in the same folder.

---

## SOURCE 1: Milicka, Marklova, Drozdova & Pospisil, "Humans can learn to detect AI-generated texts, or at least learn when they can't" — MEASURED, peer-reviewed

- URL (preprint): https://arxiv.org/abs/2505.01877 (v3, 7 May 2025)
- URL (journal, open access, the version transcribed below): https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0333007 (PLOS ONE)
- Date accessed: 2026-08-18
- Design: GPT-4o generated several hundred text continuations across genres matched to Koditex, a multi-register human corpus. 254 Czech native speakers judged randomised side-by-side pairs (17 pairs + 3 controls each). Randomised to immediate-feedback vs no-feedback. Recorded accuracy, confidence, response time, perceived readability.

### Measured findings that matter for us

- Accuracy: **no-feedback group 55.4%** (95% CI 52.0-58.7); **feedback group 65.1%** (95% CI 62.4-67.8). Side-by-side pairs, which is the *easy* mode.
- **Confidence is inversely related to accuracy without feedback.** Verbatim: "The greatest difference between the groups appears at confidence level seven, where no feedback group participants were overconfident and made the most errors precisely when they were most certain (even below the chance level of 0.5)". Model: "the more no-feedback group participants were confident in their answer, the worse was their correctness rate (p=0.005; estimate -0.14)".
- **The readability inversion — the single most useful finding here.** Verbatim: "participants systematically considered AI-written texts more readable (only approximately 30% of human-produced texts were considered more readable than AI-generated ones)". And: "Participants assign AI generated texts greater readability but at the same time suppose that the more readable texts are written by human". So the smoother read is BOTH more likely to be machine-written AND more likely to be *called* human. Readers hold the belief and the belief is backwards.
- **The stereotype readers actually run on**, verbatim: "the participants lacking feedback relied on general assumptions about AI-generated texts—namely, that they are static, prepared, highly cohesive, and polythematic. When a text matched these expectations and was contrasted with a more dynamic, spontaneous, or thematically focused text, participants tended to attribute authorship to AI."
  - Dim1 (dynamic vs static/nominal): "when the AI-generated text was more static than the original human-written continuation, participants were more likely to identify it correctly... AI tends to produce static texts characterized by a high density of nominal or phrasal constructions."
  - Dim2 (spontaneous vs prepared): "when the AI-generated continuation shifted from the spontaneous pole toward the prepared pole, it was more likely to be correctly identified."
  - Dim3: shift toward **higher cohesion** made it easier to spot (p = 0.024).
  - Dim4: shift from **monothematic to polythematic** made it easier to spot (p = 0.017).
- Note how this LINES UP with Reinhart's Biber measurement in the sibling file: readers' "static, nominal, prepared, over-cohesive" stereotype is the same object Reinhart measured as noun-heavy informational density (nominalizations 2.1x, participial clauses 5.3x). On structure the stereotype is roughly RIGHT. On readability and on grammar it is wrong.
- Demographics: "gender, age, and education level did not have a significant effect on performance in either group."
- Conclusion, verbatim: "Participants initially hold numerous assumptions about the stylistic features of AI-generated texts. They also incorrectly anticipate that more readable texts are typically human-authored."

---

## SOURCE 2: Tabach, "Can Humans Detect AI? Mining Textual Signals of AI-Assisted Writing Under Varying Scrutiny Conditions" — MEASURED but SMALL, preprint

- URL: https://arxiv.org/abs/2604.23471 (v1, 25 Apr 2026). HTML: https://arxiv.org/html/2604.23471v1
- Author: Daniel Tabach, Georgia Institute of Technology. 25 pages, 12 figures. Preprint, not peer-reviewed.
- Design: 21 participants wrote opinion pieces on remote work with an AI chatbot; half warned their work would be scanned by an AI detector. Then 251 judges made 1,999 paired comparisons picking which document was "written by a human" (deceptive: both had chatbot access).
- CAVEAT: **n = 21 writers.** The author says so himself: "With such a small sample size of writings, we can't run any statistical tests to genuinely prove the treatment group behaved differently." The judge-side n is large; the writer-side n is not.

### The finding that matters for our lane, verbatim

> "Across all evaluations, judges selected the warned writer's document as human 54.13% of the time versus 45.87% for the unwarned writer. A two-sided binomial test rejects chance guessing at p = 0.000243, and the result holds across both writing stances. Yet on every measurable text feature extracted, including AI overlap scores, lexical diversity, sentence structure, and pronoun usage, the two groups were indistinguishable. **The judges are picking up on something that feature-based methods do not capture.**"

The stylometric features he extracted and found non-separating: type-token ratio (lexical diversity), mean sentence length, **sentence-length SD (burstiness)**, first-person rate per 1k, **hedging rate per 1k**. Note that burstiness and hedging rate — two of the most-cited structural tells — did not separate the documents that judges reliably sorted.

Also measured: judges who spent longer on a pair were more likely to pick the "warned" document as human; the fastest quartile (under 10.6 seconds) sat near chance at 51.6%. So the effect is a *reading* effect, not a glance effect.

---

## FULL TEXT, SOURCE 1 (PLOS ONE article as rendered 2026-08-18, verbatim)

```
Skip to main content

Advertisement

Browse Subject Areas

?

Click through the PLOS taxonomy to find articles in your field.

For more information about PLOS Subject Areas, click
here.

- 

Loading metrics

Open Access

Peer-reviewed

Research Article

# Learning to detect AI texts and learning the limits

- 

Jiří Milička, 

Roles
Conceptualization,

Data curation,

Formal analysis,

Funding acquisition,

Investigation,

Methodology,

Project administration,

Resources,

Software,

Supervision,

Validation,

Visualization,

Writing – original draft,

Writing – review & editing

Affiliation
Department of Linguistics, Faculty of Arts, Charles University, Prague, Czech Republic

https://orcid.org/0000-0001-8605-1199

⨯ 

- 

Anna Marklová , 

Roles
Conceptualization,

Data curation,

Funding acquisition,

Investigation,

Methodology,

Project administration,

Resources,

Supervision,

Validation,

Visualization,

Writing – original draft,

Writing – review & editing

* E-mail: anna.marklova@ff.cuni.cz

Affiliation
Department of Linguistics, Faculty of Arts, Charles University, Prague, Czech Republic

https://orcid.org/0000-0003-3392-1028

⨯ 

- 

Ondřej Drobil , 

Contributed equally to this work with:
Ondřej Drobil,
Eva Pospíšilová

Roles
Conceptualization,

Data curation,

Investigation,

Methodology,

Writing – original draft,

Writing – review & editing

Affiliation
Department of Linguistics, Faculty of Arts, Charles University, Prague, Czech Republic

⨯ 

- 

Eva Pospíšilová 

Contributed equally to this work with:
Ondřej Drobil,
Eva Pospíšilová

Roles
Conceptualization,

Data curation,

Investigation,

Methodology,

Writing – original draft,

Writing – review & editing

Affiliation
Institute of Czech Language and Theory of Communication, Faculty of Arts, Charles University, Prague, Czech Republic

https://orcid.org/0009-0008-9597-791X

⨯ 

# Learning to detect AI texts and learning the limits

- Jiří Milička, 

- Anna Marklová, 

- Ondřej Drobil, 

- Eva Pospíšilová

x

- Published: October 15, 2025

- 
https://doi.org/10.1371/journal.pone.0333007

- 

- 
Article

- 
Authors

- 
Metrics

- 
Comments

- 
Media Coverage

- 
Reader Comments

- Figures

## Figures

## Abstract

This study investigates whether individuals can learn to accurately discriminate between human-written and AI-produced texts when provided with immediate feedback, and if they can use this feedback to recalibrate their self-perceived competence. We also explore the specific criteria individuals rely upon when making these decisions, focusing on textual style and perceived readability.

We used GPT-4o to generate several hundred texts across various genres and text types comparable to Koditex, a multi-register corpus of human-written texts. We then presented randomized text pairs to 254 Czech native speakers who identified which text was human-written and which was AI-generated. Participants were randomly assigned to two conditions: one receiving immediate feedback after each trial, the other receiving no feedback until experiment completion. We recorded accuracy in identification, confidence levels, response times, and judgments about text readability along with demographic data and participants’ engagement with AI technologies prior to the experiment. Participants receiving immediate feedback showed significant improvement in accuracy and confidence calibration.

Participants initially held incorrect assumptions about AI-generated text features, including expectations about stylistic rigidity and readability. Notably, without feedback, participants made the most errors precisely when feeling most confident—an issue largely resolved among the feedback group.

The ability to differentiate between human and AI-generated texts can be effectively learned through targeted training with explicit feedback, which helps correct misconceptions about AI stylistic features and readability, as well as potential other variables that were not explored, while facilitating more accurate self-assessment. This finding might be particularly important in educational contexts, since the ability to identify AI-generated content is highly desirable and, more importantly, false confidence in this domain can be harmful.

Citation: Milička J, Marklová A, Drobil O, Pospíšilová E (2025) Learning to detect AI texts and learning the limits. PLoS One 20(10):
e0333007.

https://doi.org/10.1371/journal.pone.0333007

Editor: Forgive Avorgbedor, University of North carolina at Greensboro, UNITED STATES OF AMERICA

Received: June 3, 2025; Accepted: September 8, 2025; Published: October 15, 2025

Copyright: © 2025 Milička et al. This is an open access article distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are credited.

Data Availability: The data are fully available in the repository: https://osf.io/uhzj9/. Additionally, we added all data into Supporting information files in this submission.

Funding: Jiří Milička was supported by Czech Science Foundation Grant No. 24-11725S, gacr.cz (“Large language models through the prism of corpus linguistics”). This work was supported by the project “Human-centred AI for a Sustainable and Adaptive Society” (reg. no.: Z.02.01.01/00/23_025/0008691), co-funded by the European Union (specifically the development of the experimental software). Anna Marklová was supported by Charles University Grant PRIMUS/25/SSH/010 (“Sensitivity towards register-specific features: Combination of corpus and experimental methodology”).

Competing interests: No authors have competing interests.

## 1 Introduction

In most everyday situations, individuals typically have some idea about their abilities, even if these ideas are imprecise and correlate only loosely with actual competence [1,2]. For example, people who have never learned to swim are usually aware of this inability and understand that swimming can be learned. This awareness arises from experiences involving informal or formal testing, or from social interactions where they observe the difficulty of acquiring a skill. Such self-assessment capacities, however, tend to fail when confronted with entirely novel phenomena, such as interacting with artificial intelligence (AI). This is primarily because there are no standardized assessments, institutional oversight, or established instructional methods for these emerging skills, leaving intuition without any reliable anchor.

We may reasonably assume that most people have never undertaken a rigorous test to assess their ability to discriminate between human-written texts and texts generated by frontier language models. In the best case, individuals are agnostic about their skill levels; in the worst case, they hold unrealistic expectations that remain uncorrected. Consequently, many individuals neither perceive the need to learn this skill nor, even if they did, would they find clear guidance in the literature about whether or how such learning could be successful. False confidence in this domain can be particularly problematic in educational contexts—for example, when a teacher is overly confident in identifying AI-generated texts and unjustly accuses students of academic dishonesty.

Our current study contributes to the extensive body of literature examining the conditions under which people can discern AI-generated texts from human-written ones. However, our central research question shifts focus from mere discriminatory ability to the capacity of individuals to utilize feedback effectively: Can individuals learn to accurately discriminate between human-written and AI-produced texts when provided with immediate feedback? Furthermore, are they capable of using this feedback to recalibrate their self-perceived competence?

Beyond these core questions, our research also explores the specific criteria individuals rely upon when distinguishing between human and AI-generated texts, identifying factors that aid or hinder accurate judgments. We also aim to identify the factors that are influenced by the learning process due to the feedback loop. We specifically focus on textual style (register), hypothesizing that people attribute particular stylistic characteristics to AI-generated texts. These assumptions might help if aligned with reality but could also lead to errors if based solely on prejudice. For similar reasons, we investigate perceived readability, analyzing how participants associate readability with text authorship. Additionally, we collected data on demographic variables (age, gender, education) and participants’ engagement with AI technologies, including usage frequency and general attitudes.

For our experimental design, GPT-4o generated a corpus comprising 672 texts across various genres and text types, chosen specifically to reflect stylistic diversity comparable to the Koditex corpus, a traditional human-authored collection designed explicitly for genre and register richness [3].

These texts were presented pairwise to participants (each receiving 17 randomly selected text pairs plus 3 control items). We recorded not only their accuracy in identifying which text was AI-generated versus human-written but also their confidence levels, response times, and judgments about text readability.

Participants (n=254) were randomly assigned to two experimental conditions. One group received immediate feedback after each trial, indicating correctness, whereas the second group received no immediate feedback and learned their overall results only upon completing the experiment.

All texts and participants were Czech native speakers, reflecting our intention to study a medium-sized language, as English disproportionately dominates the training datasets of contemporary language models, making it unrepresentative of other languages. Nevertheless, all data, experimental software, analytical scripts, and detailed protocols are publicly available, ensuring that the study can be easily replicated in other linguistic contexts.

### 1.1 State of the art

The question of whether humans can detect AI-generated texts has attracted significant scientific attention, but experimental research with human participants has shown mixed results. As the studies are incomparable in almost every aspect, we can only guess whether the differences in findings can perharps be attributed to the purpose of the study, selected text genres, differing populations tested, mode of presentation, language, or AI models used.

To date, studies have reported varying overall accuracy in participants’ recognition of AI-generated texts. [4] found that English-speaking participants performed slightly better than chance and attested substantial variation based on individual abilities or expertise. In other studies [5–7], however, human evaluators’ accuracy was rather at chance levels.

Studies exploring how succesfully can people detect or distinguish AI-generated texts typically focus on only one genre, which corresponds to the general framing of the study (e.g., concern for a given field, such as cheating in education), or comparisons of distinct genres. Research has been done on poetry [8], EFL students’ essays [6,9], scientific abstracts [10], news articles, recipes and short stories [5], social media posts [11], or job applications, online dating and AirBnB host profiles [12].

However, no previous studies have systematically addressed text variability as a continuum across registers, despite some research indicating that certain linguistic features related to text variability may influence how accurately people distinguish between AI- and human-generated texts. [4] applied the Linguistic Inquiry and Word Count 2022 toolbox to measure word-level characteristics of the text but did not find a meaningful impact. [12] used both computational methods and humans to annotate texts based on certain language features, finding that while some of them are predictive of AI-content, some are not. However, humans still falsely rely on them and may therefore misjudge the given texts as AI-generated. We tried to address the impact of text variability on the ability to distinguish AI and human-generated texts, using a multi-dimensional register analysis framework.

Studies targetting humans’ ability to identify AI texts on other languages than English are rare. To our knowledge, there is no study conducted on Czech or other similarly ‘small’ language (meaning, it is in less than 1% of training data of most LLMs). Most of the mentioned studies were conducted on English, except [7], which tested humans’ ability to recognize AI-generated content across texts, audio, and images. The authors compared the performance of speakers of English, German and Chinese, evaluating texts in their native tongue. They found that German speakers were less likely to evaluate AI-generated text as written by humans than US participants. They attribute this difference to the limited training data available for German texts. In case of languages like Czech, that has even more limited training data pool, we might expect this effect to be even more pronounced.

Studies varied in how texts were presented to participants. In some cases, authors employed a paired presentation mode in which one human-written and one AI-generated text were presented side-by-side and the evaluators were required to distinguish between the two [8]. Other studies presented single texts without explicit pairs, asking evaluators to categorize each text independently as human-written or AI-generated [5,6,11]. [4] combined both approaches and found that when texts are presented as a pair, the overall accuracy is higher. In our study, we will present texts in side-by-side mode.

As for the source of texts, the reviewed studies relied on large language models from OpenAI and employed different methods of prompting and creating AI-generated content. [5] compared the performance based on different models of GPT, finding that the ability to detect AI-generated texts decreased between GPT-2 and (newer) GPT-3. As for prompting, for example, [10] created scientific abstracts by prompting ChatGPT with titles and the designated journal, whereas [8] generated poetry using initial lines of human-written poems. [6] provided the model with standardised criteria of what the EFL texts should look like. [9] prompted the models with the same instruction as the EFL students who wrote the reference texts, but additionally manipulated the instructions to adjust the level of proficiency in English.

As our study considers individual differences in participants, related work by [4] provides some relevant insights, finding that fluid nonverbal intelligence significantly predicts overall detection accuracy, whereas executive functioning, empathy or frequency of using smartphones and being online do not. [7] found that the degree to which people generally trust other people or institutions, cognitive reflection and familiarity with deepfakes also significantly affected accuracy.

[6] compared performance between novice and experienced teachers evaluating EFL students’ essays. Both groups were rather overconfident about their assessment. Novice teachers were generally unable to distinguish between AI- and human-generated texts, regardless of their quality. Experienced teachers performed slightly better when evaluating high-quality texts, but they were unable to correctly classify texts of lower quality. The authors attributed these differences to the fact that while experienced teachers may use their advanced knowledge of what texts should look like and are aware of patterns produced by AI, they fail to distinguish low-quality text because they do not realise that AI may downplay their performance and produce such low-quality texts.

As far as the authors are aware, there are no studies to this date that investigated whether humans are capable of learning to discriminate between AI and human-written texts through feedback. While [12] tried providing immediate feedback to participants, their performance in a detection task did not improve and the authors also do not provide much information about the form of the feedback. [5] examined whether performance could be improved through brief instruction before the experiment. They either provided participants with a) instructions about what cues are relevant and which are rather misleading, b) examples of AI- and human-generated content with explanation of relevant cues, or c) a pair of correctly labeled texts that could be compared, again with explanation of relevant cues. They found that while all methods improved subsequent performance, only training with examples had a significant effect.

The main difference between our study and [5] is that in our experiment, learning can occur throughout the entire experiment, and most importantly, we offer no explanations nor recommend any specific cues. Instead, we allow participants to find their own cues, whether at a conscious or unconscious level.

In the following section, we describe in greater detail the register variation in Czech.

### 1.2 Register variation

In the present study, we focus on linguistic variability that functionally contributes to the text composition. This variability has been a center of attention in the methodology developed by Douglas Biber [13], which aims to interpret the variability according to several dimensions of variation, which then point out clusters of texts that are similar in those characteristics. Such clusters of texts are called registers. A register can be defined as “recurring variation in language use depending on the function of language and on the social situation” [14].

In Czech, the register variation has been thoroughly examined by Cvrček et al. [15], using the methodology of multidimensional analysis (MDA). This methodology was first introduced by Biber [13] and it was adapted to the specific of the Czech language. From the analysis, 121 features were projected onto eight dimensions of variation of Czech. These dimensions were interpreted in accordance with the features and text types that accumulate on their poles (Table 1).

Download:

- 
PNG

larger image

- 
TIFF

original image

Table 1. Dimensions of variation in Czech.

https://doi.org/10.1371/journal.pone.0333007.t001

The Czech MDA examined linguistic variation using the Koditex corpus [3]. Koditex is a 9-million-word synchronic corpus of Czech, developed for exploring register variability. It encompasses diverse communication modes—written, spoken, and internet-based—each subdivided into specific divisions and classes, such as blogs, general fiction, or elicited speech. Rich annotations, such as lemmatization, morphological tagging, and named entity recognition, made it suitable for deep corpus analysis. Koditex comprises text samples of comparable length rather than full texts, making it well suited for MDA. The full results of the Czech MDA are available online at https://jupyter.korpus.cz/shiny/lukes/mda/ [16].

In this study, we used shortened original Koditex texts and their AI generated counterparts (more in Methodology). We conducted a new MDA on these texts.

## 2 Methodology

### 2.1 Main research questions and their operationalizations

The objective of this study is to address the following research questions:

- Are native speakers of the Czech language capable of distinguishing AI-generated texts from texts that are human-generated?
The operationalization: Czech speakers will be presented with two texts, one written by a human and one generated by AI. Their ability to correctly identify authorship will be assessed and compared against chance-level performance.

- Does immediate feedback enhance the ability of Czech speakers to differentiate between AI-generated and human-generated texts?
Operationalization: Participants will be divided into two groups. One group will receive immediate feedback after each trial in the authorship identification task, while the other will receive no feedback. The performance of the two groups will then be compared.

- Does immediate feedback help the Czech speakers to update their confidence level so that it reflects their abilities to differentiate between AI-generated and human-generated texts?
Operationalization: Participants in both groups will be asked to rate their confidence level in performing the task (indicating how much they trust their abilities). We will test whether participants who receive immediate feedback after each trial demonstrate a stronger positive relationship between confidence level and accuracy than those who do not receive feedback.

- Is the ability to determine whether a text is written by AI or a human influenced by the genre of the text?
Operationalization: Stylometric qualities of each text will be measured, and their influence on the accuracy of determining whether a text was written by a human or AI will be assessed.

- Is the ability to determine whether a text is written by AI or a human influenced by the percieved readability of the text?
Operationalization: Participants will be asked not only to specify which texts are AI-generated versus human-written but also to rate the readability of each text. The interactions between subjective readability ratings and correctness will be analyzed.

- Can the ability to determine text authorship be influenced by an individual’s attitudes toward AI?
Operationalization: Participants will be asked a battery of questions about their attitudes toward AI (impact on society, safety, creativity, etc.). Analysis will be conducted to explore whether individuals with more positive attitudes toward AI are more successful in determining authorship.

- Can the ability to determine text authorship be influenced by the frequency with which an individual uses AI in their daily life?
Operationalization: Participants will be asked how often they communicate with AI. We will then determine whether individuals who interact with AI more frequently are more successful in determining authorship.

### 2.2 Ethic statement

The study was approved in advance by the Research Ethics Committee of the Faculty of Arts, Charles University (Komise pro etiku ve výzkumu, Filozofická fakulta Univerzity Karlovy, approval date: December 20, 2024; reference number: #UKFF/2972/2025). The committee evaluated the project The Influence of Feedback on the Ability to Discriminate Texts Created by Artificial Intelligence (conducted under grant GA24-117255) with regard to its overall objectives, proposed procedures and tools, the adequacy of participant information, and the measures in place to protect participants’ rights. It found no ethical concerns in relation to applicable Czech legislation, institutional regulations, or the specific requirements of the funding provider and other relevant bodies.

Participation in the study was entirely voluntary. Participants were first presented with a screen detailing the title and purpose of the study, along with the contact information of the researchers. Upon clicking the “Continue” button, they were provided with a link to a HTML version of the Informed Consent document. Participants were instructed to read the document and could proceed only after checking the box indicating their agreement: “I have read the Informed Consent and I agree.” Participants had the option to withdraw from the experiment at any time, in which case their responses were not recorded.

### 2.3 Material

For the preparation of language material, we used the Koditex corpus [3]. Due to its broad stylistic diversity, Koditex enabled us to explore the ability to determine authorship across different genres. Each text in Koditex was divided into two parts, with the first 500 words paired with the system prompt (in English): “Please continue the Czech text in the same language, manner and style, ensuring it contains at least five thousand words. The text does not need to be factually correct, but please make sure it fits stylistically.” The texts were then generated using the GPT-4o-2024-05-13 model with a temperature of 0 (2024/6/30), trimmed to begin and end with complete sentences while maintaining approximately 100 words, and cleaned of various formatting characters with standardized quotation marks. The second part of the original human-written text underwent identical trimming and cleaning.

This process created 672 pairs of topically and stylistically comparable text chunks. From these pairs, one was randomly selected for each experimental trial (see Fig 1 for an example).

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 1. Example of an experimental trial.

The questions under the two texts can be translated as: Which text reads more easily? Which text is written by a human? How confident are you in your answer?

https://doi.org/10.1371/journal.pone.0333007.g001

In addition, we manually selected three pairs of text chunks and created a control question attached to them, which was displayed on a separate screen after the trial. This question focused on the topic of the respective texts and was intended to determine whether participants remained attentive throughout the experiment. The question asked what topic the previous pair of texts addressed, and participants could choose from four options. For example, one of the control pairs of texts clearly described the Gobi Desert, and the options for the topics were ‘education’, ‘Czech history’, ‘desert’, and ‘libraries’. These attention checks were excluded from the analysis and were used only to filter out inattentive participants from the dataset.

### 2.4 Experimental design

The study was conducted online through a dedicated application. Respondents received a link to the experiment, allowing them to complete it in the comfort of their home or another quiet environment. The experiment, including instructions and the demographic survey, was in Czech. Participants were instructed in the initial guidelines to complete the experiment on a computer, rather than a smartphone or tablet, which helped to ensure, as much as possible, comparable laboratory conditions.

Firstly, participants were presented with a text on the screen displaying the title of the experiment, its basic description, and the contact information of the researchers conducting the study. After clicking the ‘Continue’ button, participants were shown a link to the informed consent document in a PDF format. They were instructed to read it and then indicate their consent to participate by checking the box “I have read the Informed Consent and I agree” before proceeding further.

This was followed by a demographic questionnaire, in which participants provided the following information: gender, age, mother tongue(s), presence of reading and text comprehension disorders, and information about their level of education, along with a field of study.

After filling out these basic demographic details, participants indicated on an 8-point scale how often they work with artificial intelligence (ranging from every day to never) and completed a battery of 9 questions assessing their attitudes toward AI. The attitudes were tested in a form of statements; participants were asked to indicate on a 7-point Likert scale how much they agree with the following nine statements:

- Artificial intelligence can improve the quality of our everyday lives.

- Artificial intelligence poses a risk to human safety.

- Automatically generated texts can be as high-quality as texts written by humans.

- Automatically generated texts lack human creativity and personal style.

- Artificial intelligence is not capable of true understanding in the way that humans are.

- Artificial intelligence produces grammatically correct texts.

- I prefer to avoid using artificial intelligence when writing texts that matter to me.

- I am concerned that people are becoming dumber due to the use of artificial intelligence.

- I am fascinated by what artificial intelligence can accomplish when writing texts.

After reading the brief instructions, participants were presented with a practice trial on the screen, featuring comments describing the course of the experimental task. Participants were randomly assigned to one of two groups. The first group received feedback after each trial, enabling them to learn from their mistakes (feedback group), while the second group received feedback only at the end of the experiment (no feedback group).

In each trial, participants were first presented with two texts in two columns, with one text written by a human and the other by artificial intelligence (see the layout of the experimental trial in Fig 1. Along with the texts, participants were shown a question asking which of the two texts they found easier to read. After answering, participants were presented with a question asking which text was written by a human, as well as a 7-point Likert scale on which they had to indicate how confident they were in their authorship identification. If the participant was in the feedback group, after pressing the OK button in the trial, they were shown their success rate on the screen, accompanied by a clear identification of which text was written by a human and which by artificial intelligence (for an example of feedback for a correct answer, see Fig 2).

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 2. Example of feedback after a correct answer.

The texts at the top say ‘Generated by AI’ and ‘Written by human’, and the text in the green window at the bottom says ‘Correct!’

https://doi.org/10.1371/journal.pone.0333007.g002

Participants completed a total of 20 trials. Of these, 17 were texts randomly selected from the corpus, and three were attention-check texts (positioned at trials number 3, 13, and 18) designed to verify participants’ attentiveness.

At the end of the experiment, both participant groups (the experimental group, with feedback after each trial, and the control group) were shown a summary of their individual results.

### 2.5 Participants

A pilot study was conducted prior to the actual experimental testing during the Open House Day at the Faculty of Arts, Charles University, Prague, with additional participants recruited later. The authors approached high school students, their parents, and other Open House visitors, inviting them to participate in the experiment. After each session, one of the authors conducted a brief interview with the participant to gather feedback on their experience and the technical aspects of the experiment. A total of 24 people participated in the pilot study. Following the pilot, several minor details were adjusted, but the overall experimental design remained unchanged. Data from the pilot study were not used in the main analysis.

The main sample was primarily recruited from the participant pool managed by the LABELS psycholinguistic laboratory. The pool consists of volunteers interested in participating in linguistic experiments and students who were offered university course credits for their participation. The dataset also includes several participants from the general public who responded to Facebook posts by the experimenters, accounting for approximately 22 participants. The recruitment started 2025/2/25 and ended 2025/3/14. The study was approved by the Research Ethics Committee of the Faculuty of Arts, Charles University beforehand.

The complete sample comprised 291 participants. However, 33 participants were excluded for failing to answer all attention-check questions correctly (the experiment was demanding, and some students participating for course credits showed insufficient attention). An additional 3 participants were excluded for not being native Czech speakers and one for low age (under 18 years old).

The final sample consisted of 254 participants (female: 180, male: 70, other or preferred not to say: 4), the mean age was 24.11, with participants ranging from 19 to 80 years old. The majority of participants had a bachelor’s (99) or master’s (135) degree as their highest level of education, 14 participants were doctoral graduates, and only a few had completed only highschool (3), vocational (2) or other (1) type of education. The majority of participants had an educational background in social sciences and humanities (107), substantially represented were also students and graduates of natural sciences (75). 46 participants specifically indicated that they have philological education, 11 participants studied or graduated in computer science, and 15 participants selected the option ‘Other’.

## 3 Results and discussion

### 3.1 Correctness of the answer

In order to answer the first and second research question (1, 2), we conducted the analysis of the overall correctness rate among the feedback and no-feedback groups using bootstrapped 95% confidence intervals. Correctness of the answer is a binary variable that indicates whether a participant correctly assigned which text was AI-generated and which was human-written in each trial (1 for correct, 0 for incorrect). The distribution of this variable can be seen in Fig 3.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 3. The distribution of the correctness of the answers.

https://doi.org/10.1371/journal.pone.0333007.g003

We observed a substantial and statistically significant difference between feedback and no feedback groups. The no feedback group showed considerably lower performance, with an average correctness rate of 55.4% (95% CI: 52.0%–58.7%), while the feedback group achieved a higher average success rate of 65.1% (95% CI: 62.4%–67.8%). These findings show that participants were able to distinguish AI-generated texts from human-written ones at above-chance levels, though no feedback group performed only slightly above chance.

An interesting phenomenon appears at the left tail of the no-feedback distribution, where several participants were consistently wrong. This likely occurred because these participants adhered to certain strategies that were fundamentally flawed. We do not observe this pattern in the feedback group, presumably because such erroneous strategies were abandoned early in the experiment once participants received corrective feedback.

### 3.2 Mixed effects logistic regression

Given that the target variable was binary (participants could either respond correctly or incorrectly for each word pair), we employed mixed effects logistic regression. This statistical approach is well-suited for data with non-independent observations—such as in our study, where each participant provided multiple responses. Mixed effects models allowed us to account for participant-specific variables, including demographic characteristics and individual attitudes toward AI.

For this analysis, the statistical software Jamovi (under https://www.jamovi.org/, last retrieved 2023/12/29) was utilized, using GAMLj package (https://gamlj.github.io/glmmixed_example1.html, detailed specification of the models and other settings can be accessed in the S2 File). The analysis focused on the target variable—correctness of the answer on each trial.

Since we discovered that there was a significant difference in the correctness of the answers between the two groups (feedback and no feedback), we conducted two separate mixed model analyses, one for each group. This decision was based on the expectation that participants in the feedback condition would improve over time, showing a different trajectory in both performance and confidence compared to the no feedback group. Complete results from both models are provided in Tables 2 and 3. We summarize the key findings and answer the researched questions raised in Main research questions and their operationalizations.

Download:

- 
PNG

larger image

- 
TIFF

original image

Table 2. Feedback group: Mixed effects logistic regression results with estimates, confidence intervals, exponentiated coefficients, and significance levels.

https://doi.org/10.1371/journal.pone.0333007.t002

Download:

- 
PNG

larger image

- 
TIFF

original image

Table 3. No-feedback group: Mixed effects logistic regression results with estimates, confidence intervals, exponentiated coefficients, and significance levels.

https://doi.org/10.1371/journal.pone.0333007.t003

#### 3.2.1 Trial order.

This variable is important for our second research question (2). If we are asking whether the group that received feedback differs from the one that did not, we assume that those with feedback were able to learn. Their abilities should therefore improve over time. The model confirmed that they do. The variable Trial order reached level of significance p < 0.001 in feedback group (CI 0.027–0.079). The log odds ratio estimate was at 0.053, that means, the later the trial, the higher probability that the participant answers correctly. In the no feedback group, on the other hand, the trial order did not reach the level of significance (p=0.275, estimate –0.012).

Fig 4 shows that the correctness rises rather chaotically, which is due to the high variability of the data (half of 254 binary values per datapoint). As the confidence intervals suggest, the initial steep increase in correctness after the first trial for the feedback group might be just noise; however, in the second half of the experiment, the feedback group consistently outperforms the no-feedback group.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 4. The dependency of correctness on trial order.

https://doi.org/10.1371/journal.pone.0333007.g004

#### 3.2.2 Confidence.

In order to explore the third research question (3), we explored the variable of confidence. For each pair of texts, participants had to express how confident they were in their answer on a scale of 1–7, i.e., how certain they were that they correctly identified which text was human-written and which was AI-generated.

There is no significant difference in the average confidence between feedback and no-feedback groups (feedback group: 4.2, CI: 4.0–4.4, no-feedback: 4.3, CI: 4.2–4.5), but the dependence of correctness on confidence is different (see Fig 5). At low confidence levels, there was little difference between the groups. However, from approximately level five and above, where the feedback group participants were confident, they indeed showed higher correctness. The greatest difference between the groups appears at confidence level seven, where no feedback group participants were overconfident and made the most errors precisely when they were most certain (even below the chance level of 0.5), while those who could update their assumptions via feedback were justifiably confident, achieving decisively better results.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 5. The dependency of correctness on confidence.

https://doi.org/10.1371/journal.pone.0333007.g005

This difference is also reflected in the model: there is no significant effect in the feedback group, but the more no-feedback group participants were confident in their answer, the worse was their correctness rate (p=0.005; estimate -0.14; CI -0.23 – -0.042).

Furthermore, we examined the relationship of confidence with reaction time and discovered that in situations where participants were more confident in their assessment, the trials were solved quicker, regardless of the group (Fig 6).

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 6. The dependency of reaction time on confidence.

https://doi.org/10.1371/journal.pone.0333007.g006

Additionally, we examined the dependence of ‘confidence’ on the trial order, i.e., how the average confidence changes during the experiment session (Fig 7). We were interested if we find some kind of development, particularly in the feedback group, but the chart appears rather chaotic.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 7. The dependency of confidence on trial order.

https://doi.org/10.1371/journal.pone.0333007.g007

#### 3.2.3 Influence of register.

Our fourth research question (4) asked if the ability to determine whether a text is written by AI or a human is influence by the genre of the text. To address this, we focused on the ‘dimension’ variables.

Firstly, we look at all the dimensions hollistically, throught Euclidean distance. We utilized the fact that both a human-generated text chunk and an AI-generated text chunk are continuations of the same text, so they should be comparable. It should therefore hold that texts that are stylistically more similar should be harder to distinguish, as this indicates that the AI-generated text chunk is a more credible continuation of the given text. This assumption was supported neither for the no feedback group (p = 0.052; estimate: 0.098; CI: 0.000–0.20), neither for the feedback group (p = 0.95; estimate: –0.0034; CI: –0.12–0.11).

Next, we examined the dimensions individually. Although all eight dimensions were included in the analysis, the first two dimensions accounted for the largest proportion of variation in the corpus and were therefore of primary interest. In Tables 3 and 2), the variable ‘Dim difference’ indicates how different the two texts from the pair (one human produced, one AI generated) are from each other on a particular dimension. In other words, how much the AI-text ‘shifted’ from the original human text on the particular dimension. A positive estimate indicates a shift toward the positive pole of the dimension. For example, in ‘Dim1 difference’, a positive estimate would suggest a shift from the ‘static’ pole toward the ‘dynamic’ pole. The associated p-value indicates whether this shift significantly affected the probability of correctly identifying the AI-generated text.

Interestingly, we found a stark difference between the feedback and no feedback groups. While the shift in dimensions did not have much of an effect on the feedback group, it had a significant effect on the no feedback group. Among the feedback group, only one stylistic dimension showed a significant effect: the sixth dimension, which captures the tendency of a text to focus on general qualities versus specific referents. For Dim6 difference, the effect was significant, althought the p-value was just above the significance level (p = 0.044; estimate: 0.079; CI: 0.0022–0.16). That indicates that when the AI-generated continuation shifted the original text from a more particular style toward a more general one, the participants who got feedback were more likely to correctly identify it as AI-generated.

On the other hand, in no feedback group, differences in the first four dimensions of variation reached the level of significance. For Dim1 difference, the effect was highly significant (p < 0.001; estimate: –0.30; CI: –0.47 – –0.13). That indicates that when the AI-generated text was more static than the original human-written continuation, participants were more likely to identify it correctly. One possible explanation is that, without feedback, participants may rely on prior assumptions about AI writing—namely, that AI tends to produce static texts characterized by a high density of nominal or phrasal constructions. When such texts are presented alongside more dynamic human continuations (rich in verbal constructions), participants may be more inclined to attribute the static text to AI.

A similar effect was found for Dim2 difference (p = 0.012; estimate: –0.33; CI: -0.59 – –0.072). That means, when the AI-generated continuation shifted from the spontaneous pole toward the prepared pole, it was more likely to be correctly identified. This finding supports the idea that the no feedback group associate prepared, formal styles—such as those typical of scientific or administrative texts—with AI. When paired with a more spontaneous and subjective human continuation (e.g., featuring dialogue or narrative elements), the contrast likely reinforces the attribution of the more prepared text to AI.

Significant effects were also found in no feedback group for the third and fourth dimensions. When the AI-generated continuation showed a shift from lower to higher cohesion, participants were more likely to correctly identify it as AI-generated (p = 0.024; estimate: 0.093; CI: 0.012–0.17). Similarly, a shift from monothematic to polythematic content was associated with higher accuracy in AI identification (p = 0.017; estimate: 0.12; CI: 0.022–0.22).

These findings suggest that the participants lacking feedback relied on general assumptions about AI-generated texts—namely, that they are static, prepared, highly cohesive, and polythematic. When a text matched these expectations and was contrasted with a more dynamic, spontaneous, or thematically focused text, participants tended to attribute authorship to AI.

Those participants who received immediate feedback throughout the task could refine these assumptions. As a result, they no longer treated such stereotypical stylistic features as definitive cues for identifying AI-generated texts.

#### 3.2.4 Percieved readability.

In our fifth research question (5), we focused on the influence of the perceived readibility on recognition of AI texts. For each pair of texts, participants were asked which text they found easier to read. The variable ‘readability’ in the model indicates whether the participant thought the human-written text was the more readable one of the pair.

As can be seen in Fig 8, participants systematically considered AI-written texts more readable (only approximately 30% of human-produced texts were considered more readable than AI-generated ones), with no significant difference between the feedback/no feedback groups.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 8. The distribution of the readability.

The charts shows the frequency at which a human written text is considered more readable.

https://doi.org/10.1371/journal.pone.0333007.g008

Participants assign AI generated texts greater readability but at the same time suppose that the more readable texts are written by human (Fig 9). This tendency is especially pronounced in the no feedback group, the feedback group managed to learn to some extent that this assumption is false and that it leads to incorrect answers. The feedback effect can be seen in Fig 10, which shows that when participants think that the human written text is more readable, they are more likely to assing them correctly as human written, but when they think that the AI generated text is more readable, they are less likely to assign them correctly as AI generated, and that this tendency is more strong for no feedback group.

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 9. The distribution of the readability.

The charts shows the frequency at which the text that is considered more readable is also considered to be written by a human.

https://doi.org/10.1371/journal.pone.0333007.g009

Download:

- 
PNG

larger image

- 
TIFF

original image

Fig 10. Correctness by Feedback and Readability.

When participants considered the human written text to be more readable, they were more likely to assing them correctly as human written.

https://doi.org/10.1371/journal.pone.0333007.g010

This finding is also visible in the mixed model: the variable More readable is human has significant results for both groups, but the effect size is larger for the no feedback group (feedback: p < 0.001; estimate 1.22; CI 0.68–1.76; no feedback: p < 0.001; estimate 2.06; CI 1.64–2.49).

#### 3.2.5 Attitudes towards AI.

In the survey before the experiment, we asked participants to answer questions about their attitudes and believes towards AI. We were interested if those with positive attitudes will achieve better results (6). However, we found no systematic correlation between the attitudes and the ability to correctly asign AI texts.

In the feedback group, only one statement reached the level of significance: “I prefer to avoid using AI when writing important texts” (p=0.022; estimate 0.12; CI 0.018–0.23). People who agreed with this statement tended to have better correctness rate than people who dissagreed. In the no feedback group, the only statement reaching level of significance was: “AI produces grammatically correct texts.” When people agreed with this statement, they tended to have a better correctness rate than when disagreed (p < 0.001; estimate 0.23; CI 0.10–0.36). This finding is intuitively interpretable: if a participant believes that AI produces grammatically incorrect texts, they may struggle more in this task, as AI-generated texts in our experiment were, in fact, largely grammatically correct.

However, since no consistent pattern emerged across attitude statements and groups, these findings should be interpreted with caution. Rather than drawing firm conclusions, we suggest that these effects point to potentially directions for future research. In particular, investigating how beliefs about grammar and the formal writing capabilities of AI influence performance could be fruitful. For now, we conclude that our fourth expectiation that individuals with a more positive attitude toward AI will be more successful in determining authorship was not supported by the data.

#### 3.2.6 Frequency of usage of AI.

Finally, we asked if the ability of guessing the authorship correctly is influenced by the frequency of AI usage in everyday life (7). We did not find a significant effect of AI usage frequency in either group. Before the experiment, participants answered the question “How often do you use large language models?”, which we treated as an ordinal variable. However, this measure was not a significant predictor of success in the AI text recognition task. In other words, participants who reported frequent interactions with AI did not perform better than those with less experience.

In the following sections, we present additional findings revealed by the mixed model analysis.

#### 3.2.7 Demographic details.

Firstly, the model uncovered that gender, age, and education level did not have a significant effect on performance in either group. We also examined participants’ field of study and found no consistent effect on correctness. In the learners group, participants with a background in computer science performed better than those from the humanities or natural sciences. However, it is important to note that fewer than 11 participants in total reported computer science as their field of study, so this finding should be interpreted with caution.

## Conclusion

The key takeaway from this study is that although everyday interactions with AI do not inherently enhance individuals’ abilities to differentiate between human and AI-generated texts (as evidenced by the negligible effect of participants’ previous AI interaction time), this skill can be effectively learned through targeted training with explicit feedback loops.

Participants initially hold numerous assumptions about the stylistic features of AI-generated texts. They also incorrectly anticipate that more readable texts are typically human-authored. Feedback significantly aids in mitigating these misconceptions.

Specifically, participants assume that AI will produce texts that resemble static, cohesive, and prepared genres (such as administrative or scientific texts) rather than texts resembling spontaneous, dynamic genres (such as dialogues or narrative prose). While these assumptions occasionally help when an AI-generated text aligns with them, they frequently lead to errors when human texts deviate from expected human characteristics. Feedback enables participants to appropriately calibrate the extent to which they should rely on these preconceived notions. Similarly, feedback helps participants correct their erroneous belief that human-generated texts are inherently more readable.

Feedback also facilitates more accurate self-assessment of participants’ abilities to discriminate between human and AI-generated texts. The overall confidence levels remain consistent across both groups; however, participants receiving feedback exhibit more accurate confidence calibration, being confident primarily when their judgments are indeed correct. Notably, individuals without feedback make the most errors precisely when they feel most confident about their judgments.

Our findings have practical implications as well. Specifically, our experimental software can be easily adapted into a practical tool for educators, enabling them to assess and enhance their ability to recognize AI-generated content. Because the software provides detailed result files, educators can reflect on their own performance, adjust their expectations about AI-generated language, and use the experiment with students to provide a better understanding of AI-generated texts.

## Supporting information

### S1 File. Protocol.

Detailed description of the experiment and all methods and techniques to obtain and analyze the data, descriptive statistics of the data.

https://doi.org/10.1371/journal.pone.0333007.s001

(PDF)

### S2 File. Data and scripts.

All data and scripts used in the study, some additional descriptive statistics, scalable formate figures.

https://doi.org/10.1371/journal.pone.0333007.s002

(ZIP)

## Acknowledgments

We thank Jan Chromý for providing access to the participant pool within the LABELS laboratory and for assistance with the administration of the experiment.

## References

- 1.
Kruger J, Dunning D. Unskilled and unaware of it: how difficulties in recognizing one’s own incompetence lead to inflated self-assessments. J Pers Soc Psychol. 1999;77(6):1121–34. pmid:10626367 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 2.
Jansen RA, Rafferty AN, Griffiths TL. A rational model of the Dunning-Kruger effect supports insensitivity to evidence in low performers. Nat Hum Behav. 2021;5(6):756–63. pmid:33633375 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 3.
Zasina AJ, Lukeš D, Komrsková Z, Poukarová P, Řehořková A. Koditex: Korpus diverzifikovaných textú. Praha: Ústav Českého národního korpusu FF UK; 2018. 

- 4.
Chein JM, Martinez SA, Barone AR. Human intelligence can safeguard against artificial intelligence: individual differences in the discernment of human from AI texts. Sci Rep. 2024;14(1):25989. pmid:39472489 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 5.
Clark E, August T, Serrano S, Haduong N, Gururangan S, Smith NA. All that’s ‘human’ is not gold: evaluating human evaluation of generated text. arXiv preprint 2021. http://arxiv.org/abs/2107.00061 

- 6.
Fleckenstein J, Meyer J, Jansen T, Keller SD, Köller O, Möller J. Do teachers spot AI? Evaluating the detectability of AI-generated texts among student essays. Computers and Education: Artificial Intelligence. 2024;6:100209. 

- 
View Article

- 
Google Scholar

- 7.
Frank J, Herbert F, Ricker J, Schönherr L, Eisenhofer T, Fischer A, et al. A representative study on human detection of artificially generated media across countries. In: 2024 IEEE Symposium on Security and Privacy (SP); 2024. p. 55–73. https://ieeexplore.ieee.org/document/10646666/?arnumber=10646666 

- 8.
Köbis N, Mossink LD. Artificial intelligence versus Maya Angelou: Experimental evidence that people cannot differentiate AI-generated from human-written poetry. Computers in Human Behavior. 2021;114:106553. 

- 
View Article

- 
Google Scholar

- 9.
De Wilde V. Can novice teachers detect AI-generated texts in EFL writing?. ELT Journal. 2024;78(4):414–22. 

- 
View Article

- 
Google Scholar

- 10.
Gao CA, Howard FM, Markov NS, Dyer EC, Ramesh S, Luo Y, et al. Comparing scientific abstracts generated by ChatGPT to real abstracts with detectors and blinded human reviewers. NPJ Digit Med. 2023;6(1):75. pmid:37100871 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 11.
Radivojevic K, Chou M, Badillo-Urquiola K, Brenner P. Human perception of LLM-generated text content in social media environments. arXiv preprint 2024. http://arxiv.org/abs/2409.06653 

- 12.
Jakesch M, Hancock JT, Naaman M. Human heuristics for AI-generated language are flawed. Proc Natl Acad Sci U S A. 2023;120(11):e2208839120. pmid:36881628 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 13.
Biber D. Variation across speech and writing. Cambridge: Cambridge University Press; 1988. 

- 14.
Pescuma VN, Serova D, Lukassek J, Sauermann A, Schäfer R, Adli A, et al. Situating language register across the ages, languages, modalities, and cultural aspects: Evidence from complementary methods. Front Psychol. 2023;13:964658. pmid:36687875 

- 
View Article

- 
PubMed/NCBI

- 
Google Scholar

- 15.
Cvrček V, Laubeová Z, Lukeš D, Poukarová P, Řehořková A, Zasina AJ. Registry v češtině. NLN; 2020. 

- 16.
Lukeš D. MDAvis. 2023. https://korpus.cz/mdavis/ 

Download PDF

- Citation

- XML

Print

Share

- Reddit

- Facebook

- LinkedIn

- Mendeley

- Bluesky

- Email

  

Advertisement

### Subject Areas 
?

For more information about PLOS Subject Areas, click
here.

We want your feedback. Do these Subject Areas make sense for this article? Click the target next to the incorrect Subject Area and let us know. Thanks for your help!

- 
Artificial intelligence

Is the Subject Area "Artificial intelligence" applicable to this article?

Thanks for your feedback.

- 
Human learning

Is the Subject Area "Human learning" applicable to this article?

Thanks for your feedback.

- 
Language

Is the Subject Area "Language" applicable to this article?

Thanks for your feedback.

- 
Psychological attitudes

Is the Subject Area "Psychological attitudes" applicable to this article?

Thanks for your feedback.

- 
Teachers

Is the Subject Area "Teachers" applicable to this article?

Thanks for your feedback.

- 
Pilot studies

Is the Subject Area "Pilot studies" applicable to this article?

Thanks for your feedback.

- 
Reaction time

Is the Subject Area "Reaction time" applicable to this article?

Thanks for your feedback.

- 
Social discrimination

Is the Subject Area "Social discrimination" applicable to this article?

Thanks for your feedback.
```

---

## FULL TEXT, SOURCE 2 (arXiv HTML as rendered 2026-08-18, verbatim)

```
arXiv is now an independent nonprofit!
Learn more

Back to arXiv

License: CC BY 4.0

arXiv:2604.23471v1 [cs.HC] 25 Apr 2026

# Can Humans Detect AI?

Mining Textual Signals of AI-Assisted Writing

Under Varying Scrutiny Conditions

Daniel Tabach

Affiliation: Georgia Institute of Technology

Email: dtabach3@gatech.edu

April 2026

## Abstract

This study asks whether the threat of AI detection changes how people write with AI, and whether other people can tell the difference. I built a two-phase controlled experiment where 21 participants wrote opinion pieces on remote work using an AI chatbot. Half were randomly warned that their submission would be scanned by an AI detection tool. The other half received no warning. Both groups had access to the same chatbot. In Phase 2, 251 independent judges evaluated 1,999 paired comparisons, each time choosing which document in the pair was “written by a human.” Judges were not told that both writers had access to AI. Across all evaluations, judges selected the warned writer’s document as human 54.13% of the time versus 45.87% for the unwarned writer. A two sided binomial test rejects chance guessing at p=0.000243p=0.000243, and the result holds across both writing stances. Yet on every measurable text feature I extracted, including AI overlap scores, lexical diversity, sentence structure, and pronoun usage, the two groups were indistinguishable. The judges are picking up on something that feature based methods do not capture.

## 1 Introduction

Large language models have made AI-assisted writing nearly indistinguishable
from human-authored text. This has raised real concerns in academia,
journalism, and the workplace about whether anyone is still writing their
own content or relying on AI tools to write content for them.
Universities for example have responded by adopting AI detection tools. The question covered in this paper will look at whether or not a threat of AI-detection actually changes how
participants write with AI, and if it does, can other people tell?

This project centers the question through a two-phase controlled
experiment. I built a Streamlit app that sets up participants with an AI
chatbot and randomly assigns them to one of two conditions. The control
group receives no extra context, while the treatment group is told that their final
submission will be analyzed by an “AI detection tool.” Everyone answers the same prompt to form a pair of opinion pieces on remote work, one “For” and one
“Against.” In Phase 2, a separate pool of judges reads the paired documents
(one control, one test, same stance) and has to pick which one they believe was “written by a human.” They go through a funneled survey designed in Streamlit that allows them to choose which of our writer’s responses were “written by a human.” The judges’ task was intentionally deceptive. Both groups in the experiment had access to identical chatbots, so judges were not picking “human vs AI.” Instead, the response from the judges was testing to see if the judge can identify which writer had been warned that detection software would read the result. The initial hypothesis of this research was that writers who were warned of an AI detection software were more likely to edit and re-frame their writing to sound more “human,” and judges would have been able to identify writings in the test group at a significantly higher rate as humans compared to the control group. The hypothesis was intended to measure the incremental behavioral change of an AI-detection threat for the treatment group.

The two research questions are:

- 1. 

RQ1 (Behavior under scrutiny): Do writers behave
differently when they know their submission will be scanned for
AI? This covers both interaction metrics (turns, duration,
tokens, self-reported reliance) and textual features of what
they submit.

- 2. 

RQ2 (Human judges): Do human judges detect AI
reliance? Does confidence, reading time, or belief alignment
moderate their accuracy?

Preview of findings: The initial hypothesis was directionally
supported, but the treatment effect is small. Across n = 1,999 paired evaluations from
251 judges, the warned (test) document was identified as the human written
one 54.13% of the time, versus 45.87% for the unwarned (control)
document (95% Wilson confidence interval on the control as human rate:
[43.70%, 48.06%]).
A two sided exact binomial test against the chance
rate of 0.5, treating each response as independent, rejects random
guessing (p = 0.000243 which is significant at alpha < 0.05).
Judges on average rated the warned writers as more human, which is consistent with the
hypothesis, but the difference is only a few percentage points above chance. However, this difference is not insignificant.

The more interesting finding is the disconnect between that signal and
the writing itself. On every behavioral and style feature tested, warned and unwarned writers
were indistinguishable. Both groups leaned on the chatbot
at similar rates: control writers had an AI overlap score of 0.978,
test writers 0.953. The overlap score is an engineered score (0 to 1 scale) that measures how much of a submission matches word for word any AI response the writer saw during the chat in their session (It doesn’t consider turns or draft edits - it only looks at how much of the submitted text matched a full AI response in the chat). 1 means the submission is an exact copy-paste from an AI message, and a score near 0 means the writer rewrote the text in their own words or never worked with the chatbot to begin with. The score catches copy-paste moments but its limitation is that it says nothing about what happened in the chat before the paste. For example, two writers can both overlap with the AI exactly, but one might be pasting after asking for a single draft, and another might have iterated with the AI on tone and length for ten minutes and then pasted the final version. The score in this case would look identical. So the judges differences in their selections are not coming from whether or not a writer used or AI or not, but other cues that changed the way they chose the "human" document.

Section 2 covers the experimental design and the decisions made for each step in the experiment. Section 3 covers the platform,
testing methods, and the recruitment methods I used to land participants. Section 4 presents Phase 1 results from the writers (agnostic of the judges evaluations). Section 5 covers the Phase 2
judge evaluation. Section 6 discusses the main takeaways from this study.

## 2 Experimental Design

Every design choice in this experiment was made for a reason. This section
walks through each one and explains the thought process behind each
decision layer.

### 2.1 Study Structure

Each participant sees only one version of the study. They are placed in
either a treatment group (which sees an AI detection label) or a control
group, and they complete two writing tasks: one arguing in favor of remote
work and one arguing against it.

Condition assignment follows an alternating rule based on participant ID.
Odd numbered IDs go to control; even numbered IDs go to test. This is
deterministic rather than random, which is acceptable for a small sample
where true randomization offers limited additional benefit. I wanted to
make sure sample sizes were roughly equivalent across groups. Unit tests
in the codebase confirm that the assignment logic produces exact 50/50
splits on condition for any sample size.

I also rotated the writing order so that half the participants argued in
favor first and half argued against first. This is a standard technique
called counterbalancing, where you spread out order effects so they do
not pile up in one group. If every participant wrote their preferred
stance first, I could not separate “wrote better because they believe
it” from “wrote better because it was the first task and they were
fresher.” The rotation follows a four-participant cycle that repeats for
the full sample (Brooks, 2012). Table 1 shows how this
works in practice. The drawback is that it does make the sample slightly
noisier to read.

Table 1: Assignment logic. The four-participant cycle repeats indefinitely for equal session counts across conditions and writing orders.

PID

Condition

Task 1

Task 2

1

Control

For

Against

2

Test

For

Against

3

Control

Against

For

4

Test

Against

For

One limitation worth noting: for simplicity, I did not implement
persistent sessions. If a participant dropped out due to internet or
browser issues, their session would unfortunately be incomplete, and
indeed this did happen. This was a deliberate
trade-off to keep the platform simple for a small-scale study.

### 2.2 Treatment Design: The Detection Warning

The only difference between the two groups is a single informational
notice in the briefing and on the submission page for each task. The test
group sees the following text, displayed as a yellow banner on the task
screen:

“Your final submission will be analyzed by an AI detection tool.
Your AI detection score will be recorded and included alongside your
submission in our research dataset.”

Figure 1: The briefing for the test group. Notice the yellow tinted label for AI detection. Control does not see this yellow label.

This warning was designed carefully. My overall goal was to reduce as
much behavioral and psychological bias as I could for the participants.
Research on “priming” distinguishes between warnings that tell people
what to do (behavioral primes, e.g., “there is this feature in the
experiment and you should do this with it”) and warnings that activate
a concept without prescribing a response (conceptual primes, e.g.,
“there is an AI detector”). Conceptual primes can still change
behavior even when the prime itself does not specify an action
(Bargh et al., 1996), and a meta-analysis of incidentally presented
word primes confirmed that such effects are small but robust
(Weingarten et al., 2016). My warning
falls into that second category: it tells participants that detection
will happen, but it does not tell them what “AI-sounding text” looks
like or how to avoid it. The experiment does not even suggest there is
any consequence to being detected, nor that this is part of any real
evaluation. That ambiguity is the point.

I also had to be careful not to make the warning too aggressive. Research
on reactance shows that overly forceful warnings can backfire, causing
people to do the opposite of what you intended (Brehm, 1966). For this
experiment, I did not choose a large red banner with alarm language
because that could have pushed participants to use the AI with less or
more extreme intent (even going as far as defying the experiment), or
made them so anxious that their behavior would no longer reflect
anything natural. I chose a yellow background with neutral phrasing to
keep the warning noticeable but not alarming.

The label sits in 2 positions: one within the first briefing
just above the forced chatbot interaction to onboard the participant
(preventing cases where a participant might miss the label, Figure 1),
and the second moment is placed just above the “I am ready to submit”
checkpoint to let the user see it again before submitting (Figure 3).

When designing the experiment, I considered how the user
might interact with the treatment itself when it comes to intent. The
treatment mirrors the kinds of warnings students might encounter in real
academic settings rather than creating an artificial challenge to beat
the detector. If the test group was motivated to defeat an AI detector,
it would lead to high-intent changes in behavior. I want to observe how people naturally responded to the idea of
being monitored, rather than feeling like they are playing a game.

### 2.3 Demand Characteristics and the “Observer Effect”

In any experiment, there is a risk that participants figure out what you
are testing and change their behavior to match what they think you want.
This is called “demand characteristics” (Orne, 1962). There is also
another framework that separates participants being aware of the
hypothesis, being motivated to comply, and having a strategy for
responding. Awareness alone does not always lead to behavioral change
(Corneille & Lush, 2023). A larger-scale test with over 12,000
participants found that explicitly telling people the hypothesis did not
actually alter treatment effects, which suggests demand effects
may be less threatening than commonly assumed for this type of
experiment (Mummolo & Peterson, 2019).

Still, I built in several protections to keep the test valid:

- 1. 

Between-subjects design: Each participant sees only one
version of the experiment, so they have nothing to compare
against.

- 2. 

Cover story: The study is framed as research on
“how people use AI writing tools” when recruiting volunteers
(which is true but broader than the actual hypothesis).

- 3. 

Unobtrusive primary outcome: The main thing I analyze
is the submitted text itself, which participants produce
naturally as part of the task.

- 4. 

Informational warning: The treatment does not tell
participants what the “correct” response is.

- 5. 

Post-experiment hypothesis probe: After finishing, I ask
“What do you think this study was about?” This lets me check
whether anyone guessed the real purpose and filter accordingly.
(No one has.)

There is also a baseline observer effect to consider. Both groups know
they are in a study, which can change behavior on its own. This is a
common issue, however, a systematic review of 19 studies found that there
is no single observer effect (McCambridge et al., 2014). In this case,
both groups experienced the same baseline awareness of being observed.
The test group received a second layer of observation awareness (the AI
detection notice). So I am measuring the incremental effect of
the detection warning above whatever baseline shift comes from being in
a study at all.

The closest parallel I found to this “AI Detector” label in practice is
plagiarism detection software like Turnitin. A study of medical students
found that introducing plagiarism detection software alongside penalties
reduced plagiarism rates from 21% to 2% across successive cohorts
(Bilic-Zulle et al., 2008). A similar
study at the University of Botswana found that warning students about
Turnitin reduced plagiarism from 20.5% to 16.2%, with the biggest
drops among the most egregious cases (Batane, 2010). But there is an
important difference between this study and the plagiarism research:
with plagiarism, students know exactly what to avoid (do not copy text).
In this study, participants are ambiguous about what the detector
targets. They do not know what “AI-sounding text” looks like. That
means the warning creates awareness without giving participants a clear
strategy for responding, which is what makes the behavioral response
interesting to study. The limitation of this study however is that it is inconsequential to the writers. There is no real
penalty for using AI here, unlike a school or a graded requirement.

### 2.4 Writing Task Parameters

Each participant writes two opinion pieces on remote work, one arguing
in favor and one arguing against, with a target length of 200 to 400
words per piece.

Topic choice. I chose remote work because it requires no
specialized knowledge, most people have an opinion on it, and it is
polarizing enough that writing against your own belief takes real
effort. That cognitive demand is intentional: it is exactly the
situation where reaching for the AI assistant becomes most tempting.

Word count. The 200 to 400 word target was intentionally set
based on a few pieces of evidence backed in prior research. Adults
composing original text produce roughly 19 words per minute (Karat et
al., 1999). With planning and pausing over 15 minutes, that works out
to roughly 200 to 350 words unassisted. Research on AI-assisted writing
found that AI tools reduce task completion time by about 40% (Noy &
Zhang, 2023), which in a fixed time window means roughly 280 to 490
words. On the analysis side, lexical diversity indices become
more stable as text length increases, with MTLD performing
reliably on texts as short as 50 words (Zenker & Kyle, 2021),
so the 200-word floor comfortably supports the NLP features I
planned to extract without overwhelming participants. A 400-word ceiling
keeps the task achievable in 15 minutes but prevents participants from
just dumping raw AI output. The constraint forces them to at least
consider editorial choices about what to keep and what to cut, and that
curation is itself a signal worth measuring.

Timer. A soft 15-minute countdown runs on screen for each task.
It is not enforced: participants can continue writing after it reaches
zero. Participants are not aware of this soft countdown. The timer
creates psychological time pressure without risking data loss from a
hard cutoff. Actual duration is logged as a variable for analysis.

The other challenge is encouraging the use of the AI agent. Forcing
behavior with an AI agent is tedious to implement, and it would also
bias results by forcing individuals to write with an AI. Instead, the
briefing prior to the actual task forces a small demo / tutorial to
encourage the use of the AI assistant.

### 2.5 Survey Design

Pre-survey. Before writing, participants also report their name
or alias (anonymity is allowed), their personal stance on remote work,
their AI usage behaviors, and their education level.

The stance question uses a four-point scale with no neutral option:
Slightly Favor, Favor, Slightly Oppose, Oppose. The neutral option is
omitted on purpose. Research on survey design shows that including a
“no opinion” or “neutral” midpoint encourages “satisficing,” where
respondents pick the middle option to avoid thinking about it (Krosnick et al.,
2002). Removing it forces everyone to lean one way, which gives a clean
way to classify each document as belief-aligned (the assigned stance
matches their real opinion) or belief-misaligned (it does not). That
classification is necessary for the belief-alignment analysis.

The AI usage question is multi-choice rather than a single frequency
measure. Participants check all that apply from a list that includes
“search engine use,” “writing help,” “coding and technical
tasks,” “work or school assignments,” “tried but irregular use,”
and “does not use AI tools.” This captures how someone uses
AI, not just how often. A participant who uses AI for coding but never
for writing will likely interact with the writing assistant differently
than someone who uses AI for writing every day. For this sample size
that part is practically negligible, but I kept it for completeness.

Post-survey. After writing both tasks, participants self-reported
how much they relied on the AI for each piece using a five-point
ordinal scale ranging from “I wrote it entirely myself” to “AI wrote
almost all of it”

The ordering of post-survey items mattered. Research on question order
effects shows that structured scales can frame how people respond to
open-ended questions if asked first (Schwarz, 1999). I put
open-ended questions before structured ones, and the hypothesis probe
(“What do you think this study was about?”) always comes last so it
cannot contaminate anything else.

## 3 Platform, Implementation, and Data Collection

### 3.1 Platform Architecture

Figure 2: Participant session flow. Each session progresses through nine
stages. The only difference between groups is the AI detection warning
shown at Stage 3.

The experiment runs as a Streamlit app backed by the Anthropic API
(Sonnet was used as the base model) for the chatbot. All participants
access the same URL and enter a shared access code. The application
assigns conditions automatically based on the participant landing
sequence, manages the session flow, and writes data to a Supabase
PostgreSQL database in real time so I could analyze the results and
eventually propagate them into Phase 2 for the judges.

The session goes through nine stages in this static order:

- 1. 

Welcome and consent

- 2. 

Pre-survey (demographics and stance)

- 3. 

Briefing for Task 1 (test group sees the detection warning here)

- 4. 

Task 1: writing with AI assistant

- 5. 

Transition screen

- 6. 

Briefing for Task 2

- 7. 

Task 2: writing with AI assistant

- 8. 

Post-survey (self-reported AI reliance)

- 9. 

Thank-you screen

The task screen uses a three-column layout. The left column contains
the AI chat interface, where participants can send messages to Claude
and receive responses in real time. The center column is a rich-text
notepad for drafting. The right column holds the submission text area
with a live word count and a submit button. This separation between
drafting space and submission space forces participants to make a
deliberate editorial choice about what to submit rather than pasting
raw AI output directly.

Figure 3: Both groups see the same three-panel setup, with an AI chatbot, a notepad for edits, and the final submission screen. Users confirm with the button if they are ready to submit to avoid accidents. Only the test group sees the AI detection label.

### 3.2 Recruitment and Data Collection

Participants were recruited through personal outreach via social media
(Instagram, LinkedIn) and direct messaging (WhatsApp), targeting friends,
classmates, and broader social networks. The response rate among even
close acquaintances was modest—a reminder that the goodwill of friends,
while freely given in conversation, becomes a scarcer resource when a
hyperlink and twenty minutes are involved.

Data is stored in Supabase, a hosted PostgreSQL service. Each session
is a single row containing the full interaction record: pre-survey
responses, conversation logs with timestamps and token counts for every
message, submission text and word count, post-survey responses, and
session-level metadata (start time, completion time, total tokens
used).

### 3.3 Completion Funnel

Phase 1. Of the sessions initiated during the collection
period, a subset reached the “thank-you” screen. After filtering out
bot dry-runs and incomplete sessions, the final analytic sample is
21 real Phase 1 participants producing 41 validated
documents (one participant had a single completed task, the rest
contributed both). The dropped sessions were participants who entered
the access code but did not finish, typically due to time, loss of
interest, or mobile-browser issues.

Phase 2. For the judge evaluation, 315 judge sessions
were started, 76 sessions completed fully, and together they
produced roughly 2,000 pair-level responses (partial
completions included, since each individual pair response is still
usable data)

## 4 Phase 1 Results (RQ1)

This section covers the EDA of the Phase 1 participants and the
41 validated submissions. Its purpose is to answer research question 1.
Do the two groups within the study
produce different writing patterns and writing outputs? With 9 control and 12 treatment
participants completing the study, the sample is underpowered to run any statistical tests on the differences between both groups. However, there are still basic descriptive patterns that show both groups treated the study differently.

### 4.1 Sample Demographics

The sample is skewed toward writers with a graduate-level education, reflecting the
Georgia Tech and personal-network recruitment pool from social media and messaging forums. The "Remote-work" stance
is heavily favorable: most completed participants selected “Favor” or
“Slightly Favor,” with only a small minority selecting the opposing
side. The practical consequence is that most “Against” documents were
written in a belief-misaligned condition, which the judges might mark differently. Condition assignment produced 9 control and 12
treatment participants (18 and 23 validated documents respectively since participants complete two documents).
The imbalance is the result of session drop-off or other incomplete submissions being removed, not of the
assignment rule itself. Section 2.1 describes how a deterministic rule in the Streamlit app would ideally produce an exact 50/50 split on any complete sample.

### 4.2 Chatbot Interaction by Condition

Table 2 summarizes the main chatbot-interaction
metrics per task, split by condition, and Figure 4
shows the same data as box plots.

Table 2: Chatbot interaction metrics by condition. Turns, duration, and
word count are per task; session total tokens are per participant.

Control (n=9n=9)

Treatment (n=12n=12)

Metric

Mean

Median

Mean

Median

Conversation turns (per task)

2.4

2.0

3.0

2.5

Task duration (seconds)

571

560

693

668

Submission word count

275

260

278

288

Session total tokens

5,411

5,010

8,717

4,876

Figure 4: Chatbot interaction metrics by condition. Turns, duration, and
submission word count are reported per task (two tasks per participant).
Session total tokens are reported per participant. Per-task counts
reflect all completed session tasks before document-level validation
filtering (one test-group task was excluded during validation,
reducing the validated document count to 23).

Three descriptive patterns are visible. First, treatment participants
take more conversation turns per task than control participants on
both the mean and the median. Second, treatment participants generally spend
longer on each task by about two minutes at the median.
Third, session total tokens are higher on average for the treatment
group but with much wider variance, driven by a few participants who
had long back-and-forth sessions with the chatbot. Word
counts are nearly identical across both groups, which is expected
given that the task prompt bounded the length target at 200 to 400
words. Qualitatively, some users simply prompted the chatbot to give it an essay spanning the word count. These patterns answer RQ1 at the descriptive level: the two
groups do interact with the chatbot differently, with the treatment
group using it more intensively.

### 4.3 AI Overlap with Chatbot Output

To quantify how much of each submission came from the chatbot, I
feature engineered an AI overlap score comparing the submitted text to the
assistant messages in that participant’s conversation log.

#### Motivation and design rationale.

The simplest approach to
“how much of the submission came from the chatbot?” is exact
word-for-word matching. I avoided using this metric alone because this doesn’t capture edge cases in two distinct ways.
First, a writer can keep the AI’s structure and substitute
synonyms or different phrases. This won’t be captured. A writer can also try reordering text, and this only counts the
sentences that survived in order. A "score" for this setting
therefore needs to combine multiple similarity metrics rather than rely
on one. Document fingerprinting techniques use n-gram hashing
to detect reused passages across texts (Schleimer et al., 2003),
and large-language-model training-data decontamination uses
similar n-gram overlap and exact substring matching via suffix
arrays (Brown et al., 2020; Lee et al., 2022). I adapted the
general principle of combining multiple text-similarity measures
to engineer a robust scoring function.

#### Definition.

Let’s make SS a participant’s submission text,
(lowercased and with whitespace normalized), and let
A1,A2,…,AkA_{1},A_{2},\ldots,A_{k} be the assistant messages (or turns) in that
participant’s conversation log for the same task, preprocessed the
same way. For any single assistant message "AA", I compute three
similarity scores between SS and AA. Each one targets a different
way a writer might reuse AI text. This is to capture the AI overlap the user submitted.

The first score looks at short phrases. We can use a type of sliding-window method to capture similarity. For example, Let T3​(x)T_{3}(x) be the set of
three-word windows in xx (for example, the sentence “the dog sat
down” contains the windows “the dog sat” and “dog sat down”). I
measure what fraction of the submission’s three-word windows also
appear somewhere within the AI messages sent to the user. This is very similar to a Jaccard Score but using full-words instead of n-grams:

t⁡(S,A)=|T3​(S)∩T3​(A)||T3​(S)|.t(S,A)\ =\ \frac{|\,T_{3}(S)\,\cap\,T_{3}(A)\,|}{|\,T_{3}(S)\,|}.

(1)

A high value here flags short phrase-level reuse, even when the
writer placed fragments from different AI responses together.

The second score looks for one long paste. I find the
longest run of characters that appears identically in both SS and
AA, call its length L⁡(S,A)L(S,A), and divide by the length of the
submission. This is identical to looking at a word-for-word overlap assuming they just copy-pasted and didn’t make any edits:

ℓ⁡(S,A)=L⁡(S,A)|S|.\ell(S,A)\ =\ \frac{L(S,A)}{|\,S\,|}.

(2)

A value near 1 means almost the entire submission is a single copy of AI text. The same exact function is used in plagiarism detection
(Schleimer et al., 2003) and in large-language-model training-data
decontamination (Brown et al., 2020; Lee et al., 2022).

The third score captures total overlap, including pieces that have
been shuffled around. Using a standard sequence-matching routine
from the Python standard library, I find every non-overlapping run
of characters that appears in both SS and AA and sum their
lengths, giving M⁡(S,A)M(S,A).

r⁡(S,A)=2​M​(S,A)|S|+|A|.r(S,A)\ =\ \frac{2\,M(S,A)}{|\,S\,|\,+\,|\,A\,|}.

(3)

This score would stay closer to 1 when a writer kept most of the AI’s sentences or words
but rearranged sentences or paragraphs. The previous two
measures would each miss on their own.

To summarize how much SS resembles a given AI message AiA_{i}, I
take the largest of the three scores:

A​I​o​v​e​r​l​a​p​S​c​o​r​e=max⁡(t⁡(S,Ai),ℓ⁡(S,Ai),r⁡(S,Ai)).AI~overlap~Score\ =\ \max\bigl(\,t(S,A_{i}),\ \ell(S,A_{i}),\ r(S,A_{i})\,\bigr).

(4)

The AI overlap score for the document is then the largest of the set of scores that we calculate.
A score near 1 means the submission is exactly a paste of one of the
AI responses the writers had with the chat. A score near 0 means the submission shares no
meaningful text with anything the AI produced, or the participant
never actually used the chatbot.

#### Why three measures and not one?

Each of the three
checks a different way a writer might reuse AI text:
small phrases, long chunks, or the full AI output reordered in some way.
Taking the maximum is the conservative choice. The idea is that
a writer cannot circumvent the scoring if they utilized the AI by rearranging or lightly paraphrasing. However, there may be some edge cases or limitations to these methods, but I used them to cover the main use-cases of using AI-assistance for writing.

#### What the score shows.

Figure 5 shows
the overlap-score distribution by condition.
Figure 6 shows the pooled histogram across all 41
documents.

Figure 5: AI overlap score by condition. The score is the maximum
similarity between the submission and any single AI response across
three measures. Note how the test group has more cases where users used AI infrequently or not at all for their writing

Figure 6: Distribution of AI overlap scores across all 41 validated
documents. The distribution for the writers is concentrated on many writers who used AI verbatim in some way according to the three measures, while some documents used more editing and a handful used none.

Only six documents sit at or near zero. Of these, three
participants never sent a user message to the chatbot on one of their
tasks, one participant sent a message but the session recorded no
assistant response (this was a streamlit bug), and two participants iterated with the chatbot but
retained little of its output in the submission. The remaining 35
documents concentrate above 0.6, with a mode near 1.0. The control and
treatment medians are 0.978 and 0.953 respectively, nearly identical.
At the descriptive level, most writers in both conditions pasted
at least one AI response close to verbatim, and a minority in each
condition either did not engage the chatbot at all or rewrote
substantially.

### 4.4 Stylistic (Stylometric) Features

Table 3 lists the stylometric features
extracted from each submission. Each feature has an established role
in stylometry or AI-text detection and is cheap to compute.
Figures 7 and 8
show four of them as box plots by condition.

Table 3: Stylometric features computed per submission. NN is the
number of words and NsN_{s} the number of sentences. “per 1k” rates
multiply the token count by 1000/N1000/N.

Feature

Definition

What it captures / source

Type-Token Ratio

TTR=|V|/N\mathrm{TTR}=|V|/N, where VV is the set of unique tokens

Lexical diversity. AI output tends to reuse the same words more often within a response (Reviriego et al., 2024).

Mean sentence length

L¯=N/Ns\bar{L}=N/N_{s}

Baseline rhythm. AI output tends toward longer, more uniformly structured sentences.

Sentence-length SD

σL\sigma_{L} across sentences

Variation in rhythm. Human writers mix short and long sentences more often; AI output tends to be more uniform (Desaire et al., 2023).

First-person rate (per 1k)

count⁡(I, me, my, we, our, …)⋅1000/N\mathrm{count}(\text{I, me, my, we, our, \ldots})\cdot 1000/N

Personal voice. AI output typically uses fewer first-person pronouns than human writing (Sandler et al., 2024).

Hedging rate (per 1k)

count⁡(perhaps, might, possibly, …)⋅1000/N\mathrm{count}(\text{perhaps, might, possibly, \ldots})\cdot 1000/N

Tentative language. Epistemic stance, as reflected in lexical bundles, differs in frequency between human and AI text (Jiang & Hyland, 2025).

Contraction rate (per 1k)

count⁡(don’t, can’t, it’s, won’t, …)⋅1000/N\mathrm{count}(\text{don't, can't, it's, won't, \ldots})\cdot 1000/N11
1

The contraction regex also matches possessive forms (e.g., “student’s”). Both groups are affected equally, so this does not bias the comparison, but the rate slightly overstates true contraction frequency.

Casual tone. AI output often avoids using contractions, preferring formal phrasing like “do not” instead of “don’t.”

Figure 7: Lexical and structural variation by condition: type-token
ratio and sentence-length SD (burstiness). Distributions overlap
heavily between control and treatment.

Figure 8: Voice and register features by condition: first-person rate
and contraction rate (both per 1,000 words). Distributions overlap
heavily between control and treatment.

### 4.5 Summary of Phase 1 EDA

My research question 1 asked whether writers behave differently under the threat of AI detection.
With such a small sample size of writings, we can’t run any statistical tests to genuinely prove the treatment group behaved differently in the study compared to the control group. However, based on the EDA and the analysis of different features between both groups, there are differences in behaviors between both. This is where evaluation from the judges for these documents becomes critical to the success of this experiment. The judges become the statistical test of this study - where they evaluate whether or not the behavior of the treatment group would create more "human-like" submissions. The experiment design almost intends to compensate for the lack of power in a statistical test between both groups - and the judges become a secondary layer from a human perspective to determine whether a behavior difference occurred when the treatment group saw the AI-detection label. In phase 1, I found that the
treatment group takes more conversation turns, spends more time on
each task, and exchanges more tokens per session than the control
group. But the submissions completed tell us that their usage of AI text is almost identical. Control and
treatment AI similarity scores differ by only 0.025 between the medians, and the stylometric
feature distributions overlap as well. Both groups relied heavily on the AI chatbot to complete the writing within the word-count and the time alloted, but the treatment group was shown to be more variable in their interactions with the AI - some completely abandoning the chatbot, or some iterating extensively to deliver a submission. Phase 2 becomes the statistical test for the difference between these two groups. Where judges will compare both documents under a deceptive design and asked "Which document was written by a human" - despite both being written by AI. The hypothesis is that the group seeing the AI-detection threat will be interpreted as more likely to be "human" written compared to the control group’s submissions.

## 5 Phase 2: Human Judge Evaluation (RQ2)

### 5.1 Recruitment and Completion

I recruited judges through four channels over a three-week period:
Reddit ads ( 32,000 impressions, 1,200 post landings, 324 survey clicks),
LinkedIn posts across four rounds ( 6,400 total impressions),
direct WhatsApp messages to roughly 300 contacts, and Instagram posts
(approximately 80 viewers). Attribution is untraced
because the survey link was identical across all channels, but Reddit
was the dominant source by volume.
Figure 9 shows the recruitment funnel.

Figure 9: Judge recruitment funnel. Session attribution is
untraced; flow widths from the four channels are approximate.

Of 315 sessions started, 251 judges submitted at least one
evaluation, producing 1,999 total pair-level responses. Each pair
showed one control document and one treatment document for the same
stance (both “For” or both “Against” remote work), with the left/right
position randomized. The judges saw a 150-word preview of each document with a forced 10-second reveal period before they could choose, acting as a guard-rail against automatic responses and scripting. A judge could also optionally expand to read the full text. The survey asked
one question per pair: “Which one was written by a human?” with an optional confidence rating.

### 5.2 Detection Accuracy

Across all 1,999 paired evaluations, judges selected the treatment
(warned) document as the human-written one 54.13% of the time,
versus 45.87% for the control (unwarned) document. A two-sided binomial test against the chance rate of 50%, treating each
response as independent, rejects the null hypothesis that this is a random guess at
p=0.000243p=0.000243 (α=0.05\alpha=0.05). The 95% Wilson confidence interval
on the control-as-human rate is [43.70%, 48.06%], which sits
entirely below the 50% chance line. The effect seen is consistent across
both stances. FOR-stance pairs show a 46.00% control-as-human
rate (p=0.012p=0.012, n=1,000n=1{,}000), and AGAINST-stance pairs show
45.75% (p=0.008p=0.008, n=999n=999).

Figure 10 shows these intervals. All
three (overall, FOR, AGAINST) fall to the left of
the 50% chance line, showing that the effect is not driven by one
stance and is statistically significant.

Figure 10: 95% Wilson confidence intervals for the rate at which judges
picked the control (unwarned) document as human. The dashed red line
marks the 50% chance rate. All intervals fall below 50%, consistent
with the hypothesis that warned writers are perceived as more human.

The hypothesis was that writers in the treatment group who saw the AI-detection warning
would edit their submissions more carefully to sound human, and that judges would
therefore identify the warned (treatment) document as human at a higher
rate. The observed effect is in exactly that direction. The magnitude
is small, but it is statistically
significant across both stances.

### 5.3 Confidence, Reading Behavior, and Fatigue

#### Confidence.

After each pair, judges had the option to rate their confidence
on a scale from 1 to 5 (1 being a guess, 5 being very confident). Higher-confidence judges were more likely
to pick the treatment document as human At
confidence levels 4 and 5, the control-as-human rate drops to
42 to 43%, compared to the overall 45.87%.
Figure 11 shows the breakdown by confidence
level.

Figure 11: Control-as-human rate by judge self-reported confidence
(1 = guess, 5 = confident). Higher-confidence judges leaned more toward
selecting the treatment document as human.

#### Reading time.

Judges who spent more time on a pair were more likely to pick the treatment document as human. The
fastest quartile (under 10.6 seconds) was the closest to being near chance at 51.6%, which is intuitive when judges were only briefly glancing at the writings rather than reading thoroughly.
The three slower quartiles ranged from 43%
to 45%.
Figure 12 shows the breakdown by time quartile.

Figure 12: Control-as-human rate by time-spent quartile. The fastest
responders (Q1, under 10.6s) are near chance; slower readers lean
toward selecting the treatment document as human.

#### Document expansion.

Most responses (76.3%) involved no
expansion of the document at all. This meant judges decided from the 150-word
preview alone in the majority of cases. Among the 92 responses where the judge expanded just one of the two documents, the control-as-human rate dropped to 35.9%. Meaning that when a judge expanded a writing to investigate, they were able to pick the treatment document as human 64.1% of the
time. What is interesting is that when judges expanded both documents - this brought the rate back to 45.8%. This suggests that selectively reading
one document in full may amplify whatever cue judges are picking up on. However, given the small sample of judges who deliberately expanded documents, it is possible that this finding is simply noise - a judge may have expanded documents just to check if the UI worked rather than actually reading the expanded text.

#### Fatigue over time

I split each judge’s responses into terciles (early, middle, late)
to check whether detection accuracy changed over the course of a
session. The control-as-human rate was 45.87% for early pairs,
45.74% for middle, and 46.03% for late. There is no clear fatigue
effect present. Judges didn’t get better or worse over time, and the signal
held steady throughout each session.22
2

This analysis was motivated by
qualitative feedback from a Reddit commenter during judge recruitment
who suggested that detection ability might degrade as judges reviewed
more pairs.

### 5.4 Per-Document Analysis: Is the Effect Driven by Outliers?

I checked the concern that it was possible within a small document pool that one or two
outlier documents are driving entire experimental result. To check, I computed
the rate at which each of the 41 documents were chosen as human across
all the pairs it appeared in.

Table 4: Per-document chosen-as-human rates, summarized by condition.
The effect is distributed: most treatment documents sit above 50%
and most control documents sit below it.

Condition

Docs

Mean rate

Docs above 50%

Range

Control

18

45.9%

5 of 18 (28%)

29.8% to 62.4%

Treatment

23

54.0%

15 of 23 (65%)

30.5% to 76.5%

The strongest outlier is participant P26 (treatment), whose two
documents were chosen as human 72% and 76% of the time. However, this makes sense entirely. P26 never
sent a single message to the AI chatbot. They wrote both submissions
entirely on their own, and their text reads accordingly. They have frequent
contractions, personal phrasing, and variable sentence lengths. Judges may have recognized this as distinctly human. Removing P26 from the dataset
weakens the overall effect (control-as-human rate moves from 45.87%
to 47.89%) but does not eliminate it, and the broader pattern holds:
15 of 23 treatment documents were chosen as human above the 50%
chance line, compared to only 5 of 18 control documents. The effect
is distributed across the document pool, not concentrated in a single
outlier.

### 5.5 Summary of Phase 2

Phase 2 confirmed the original hypothesis: judges identified the
warned writer’s document as human at a rate above chance. The effect
is small but statistically significant and holds across both stances,
across confidence levels, and across the full session without fatigue.
No single document drives the result.

## 6 Discussion and Conclusion

We reject the null hypothesis that there is no difference between the treatment (warning) group and the control (no warning) group. Judges identified the treatment document as "human" at a statistically significant rate more often than they identified the control document as being human. This is consistent with the original hypothesis for this experiment. The effect is
small but significant and holds across both stances - both FOR and AGAINST.

What is interesting to note is given a warning of AI Detection, participants did not necessarily shy away from using an AI chatbot to assist them in their writing. Instead, the opposite effect was seen.
Writers spent more time, took more turns, and used more tokens than the control group. Several treatment participants abandoned using the chatbot entirely, choosing to write the whole submission themselves. No control group participant did this. The warning didn’t mitigate the use of AI; it actually polarized writers to lean harder into using AI or opting out completely.

Yet, for all that behavioral difference between the two groups, the submissions themselves were nearly identical when measured for AI similarity to what was used in the chats. AI scores only differed by 0.025 between medians. Every stylistic feature showed significant overlap between both groups. The judges however chose the treatment document as "human" more often, at a statistically significant rate across 2000 paired evaluations.

The implication here tells us that warned writers difference in behavior - using AI or not - changed the way their submissions were interpreted by human judges. This could mean a stylistic rhythm, or a personal opening, or a different prose within their conversations with the AI chatbot or their own drafts, is not a measurable feature analytically - but a human judge could identify the difference themselves.

Feature-based AI detection tools may extract typical AI signals, but this experiment suggests that humans given an AI-detection flag can actually lead to submissions that can convince judges to choose these submissions as more ’human’ sounding.

### 6.1 Limitations

Several limitations constrain generalizability. The sample of 21 writers is small, skewed toward graduate students, and recruited from personal networks. The 9-vs-12 condition split limits statistical power for within-Phase 1 comparisons. The writing task (opinion pieces on remote work) may not generalize to other genres or domains. The AI overlap score captures surface-level textual reuse but not deeper forms of AI reliance such as idea generation or structural borrowing. The warning carries no real consequence, unlike academic integrity policies; a consequential warning might produce stronger effects. The judge task is inherently noisy—while the aggregate effect is significant, individual judge accuracy is only slightly above chance.

We assume each observation and judgment of the sample pairs is independent from another, but responses are clustered by both judge (251 judges contributing ∼{\sim}8 responses each) and document (41 documents each appearing in many pairs). The effective sample size is therefore smaller than the 1,999 responses reported, and the binomial p-value (p=0.000243p=0.000243) may be anti-conservative. A mixed-effects logistic regression with crossed random intercepts for judge and document would provide a more conservative test. We note, however, that the effect is consistent across multiple independent decompositions—by stance, by confidence level, by time quartile, and per-document—which provides converging evidence beyond the single omnibus test. A formal mixed-effects analysis is planned for future work.

## References

- [1] 

Bargh, J. A., Chen, M., & Burrows, L. (1996). Automaticity of
social behavior: Direct effects of trait construct and stereotype
activation on action. Journal of Personality and Social
Psychology, 71(2), 230–244.

- [2] 

Batane, T. (2010). Turning to Turnitin to fight plagiarism among
university students. Educational Technology & Society,
13(2), 1–12.

- [3] 

Bilic-Zulle, L., Frkovic, V., Turk, T., Azman, J., & Petrovecki,
M. (2008). Is there an effective approach to deterring students
from plagiarizing? Science and Engineering Ethics,
14, 139–147.

- [4] 

Brehm, J. W. (1966). A Theory of Psychological Reactance.
Academic Press.

- [5] 

Brooks, J. L. (2012). Counterbalancing for serial order carryover
effects in experimental condition orders. Psychological
Methods, 17(4), 600–614.

- [6] 

Brown, T. B., Mann, B., Ryder, N., et al. (2020). Language
models are few-shot learners. Advances in Neural
Information Processing Systems 33. arXiv:2005.14165.
https://arxiv.org/abs/2005.14165

- [7] 

Corneille, O., & Lush, P. (2023). Sixty years after Orne’s
American Psychologist article: A conceptual framework for
subjective experiences elicited by demand characteristics.
Personality and Social Psychology Review, 27(1),
83–101.
https://doi.org/10.1177/10888683221104368

- [8] 

Desaire, H., Chua, A. E., Isom, M., Jarosova, R., & Hua, D. (2023).
Distinguishing academic science writing from humans or ChatGPT
with over 99% accuracy using off-the-shelf machine learning
tools. Cell Reports Physical Science, 4(6), 101426.
https://doi.org/10.1016/j.xcrp.2023.101426

- [9] 

Jiang, F., & Hyland, K. (2025). Does ChatGPT argue like
students? Bundles in argumentative essays.
Applied Linguistics, 46, 375–391.
https://doi.org/10.1093/applin/amae052

- [10] 

Karat, C. M., Halverson, C., Horn, D., & Karat, J. (1999).
Patterns of entry and correction in large vocabulary continuous
speech recognition systems. Proceedings of CHI ’99,
568–575.

- [11] 

Krosnick, J. A., Holbrook, A. L., Berent, M. K., Carson, R. T.,
Hanemann, W. M., Kopp, R. J., … Conaway, M. (2002). The
impact of “no opinion” response options on data quality.
Public Opinion Quarterly, 66(3), 371–403.

- [12] 

Lee, K., Ippolito, D., Nystrom, A., Zhang, C., Eck, D.,
Callison-Burch, C., & Carlini, N. (2022). Deduplicating
training data makes language models better. Proceedings
of ACL 2022. arXiv:2107.06499.
https://arxiv.org/abs/2107.06499

- [13] 

McCambridge, J., Witton, J., & Elbourne, D. R. (2014). Systematic
review of the Hawthorne effect: New concepts are needed to study
research participation effects. Journal of Clinical
Epidemiology, 67(3), 267–277.

- [14] 

Mummolo, J., & Peterson, E. (2019). Demand effects in survey
experiments: An empirical assessment. American Political
Science Review, 113(2), 517–529.

- [15] 

Noy, S., & Zhang, W. (2023). Experimental evidence on the
productivity effects of generative artificial intelligence.
Science, 381(6654), 187–192.

- [16] 

Orne, M. T. (1962). On the social psychology of the psychological
experiment. American Psychologist, 17(11), 776–783.

- [17] 

Reviriego, P., Conde, J., Merino-Gomez, E., Martinez, G., &
Hernandez, J. A. (2024). Playing with words: Comparing the
vocabulary and lexical diversity of ChatGPT and humans.
Machine Learning with Applications, 18, 100602.
https://doi.org/10.1016/j.mlwa.2024.100602

- [18] 

Sandler, M., Choung, H., Ross, A., & David, P. (2024). A
linguistic comparison between human and ChatGPT-generated
conversations. arXiv:2401.16587.
https://arxiv.org/abs/2401.16587

- [19] 

Schleimer, S., Wilkerson, D. S., & Aiken, A. (2003). Winnowing:
Local algorithms for document fingerprinting. Proceedings
of the 2003 ACM SIGMOD International Conference on Management
of Data, 76–85.
https://doi.org/10.1145/872757.872770

- [20] 

Schwarz, N. (1999). Self-reports: How the questions shape the
answers. American Psychologist, 54(2), 93–105.
https://doi.org/10.1037/0003-066X.54.2.93

- [21] 

Weingarten, E., et al. (2016). From primed concepts to action: A
meta-analysis of the behavioral effects of incidentally presented
words. Psychological Bulletin, 142(5), 472–497.

- [22] 

Zenker, F., & Kyle, K. (2021). Investigating minimum text length
for lexical diversity indices. Assessing Writing, 47,
100505.

## Appendix

### A. Full Assignment Table (PIDs 1 to 12)

PID

Condition

Task 1

Task 2

1

Control

For

Against

2

Test

For

Against

3

Control

Against

For

4

Test

Against

For

5

Control

For

Against

6

Test

For

Against

7

Control

Against

For

8

Test

Against

For

9

Control

For

Against

10

Test

For

Against

11

Control

Against

For

12

Test

Against

For

Table 5: Assignment table for the first 12 participant IDs, showing the
repeating four-participant cycle.

### B. Sensitivity Analysis

The headline result (45.87% control-as-human) was tested under
several filtering conditions to check robustness:

Slice

n

Ctrl-as-human

All responses

1,999

45.87%

Drop affected docs

1,831

45.71%

Time filter only (>>12s)

1,415

43.46%

Drop affected + time filter

1,298

43.45%

Table 6: Sensitivity slices. “Affected docs” are the two documents
with known data-collection anomalies. The time filter removes
responses faster than 12 seconds (10s forced reveal + 2s minimum).
The effect strengthens under stricter filtering.

### C. Full Per-Document Chosen-as-Human Rates

Doc ID

Condition

Seen

Chosen

Rate

P26_AGAINST

treatment

102

78

76.5%

P32_AGAINST

treatment

91

67

73.6%

P26_FOR

treatment

76

55

72.4%

P40_AGAINST

treatment

92

64

69.6%

P48_FOR

treatment

82

56

68.3%

P40_FOR

treatment

77

50

64.9%

P27_AGAINST

control

109

68

62.4%

P39_FOR

control

111

68

61.3%

P27_FOR

control

108

65

60.2%

P34_FOR

treatment

92

55

59.8%

(middle 21 documents omitted for space)

P19_FOR

control

110

35

31.8%

P44_AGAINST

treatment

82

25

30.5%

P25_AGAINST

control

114

34

29.8%

Table 7: Top 10 and bottom 3 documents by chosen-as-human rate.
Treatment documents dominate the top of the table; control documents
dominate the bottom.

### D. Code and Data

All analysis code, experiment data, and platform source code are available upon request. Please contact the author at dtabach3@gatech.edu.
```
