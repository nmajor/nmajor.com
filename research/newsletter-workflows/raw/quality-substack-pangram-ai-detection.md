# Substack ships reader-facing AI detection (Pangram), July 21 2026 — and the "How I make this" disclosure field

- URLs:
  - https://mediacopilot.ai/substack-ai-detection-pangram/ (The Media Copilot, Jul 23 2026)
  - https://www.popularai.org/p/pangram-ai-detector-accuracy-substack (Popular AI, detailed accuracy analysis)
  - https://theslowai.substack.com/p/substack-ai-detection-witch-hunt
  - Substack support page https://support.substack.com/hc/en-us/articles/50891130623508-How-can-I-detect-AI-on-Substack — COULD NOT FETCH (returned empty)
- Date accessed: 2026-08-18
- What it is: The newsletter-platform equivalent of LinkedIn's slop button. A reader can now scan any post over 100 words. Substack paired it with a voluntary "How I make this" process statement. This is the closest live analogue to what a newsletter like ours would face, and the reason a published process/standards page is worth having *before* a score answers the question for you.

## The Media Copilot (VERBATIM)

> Substack readers can now run a check on any post longer than 100 words to see how much of it an AI model likely wrote. The company rolled out the feature on July 21 in partnership with the detection firm Pangram, with the scan available on web and iOS and Android support promised later.

> The tool works only on content published starting on July 21. Alongside it, Substack is giving writers a dedicated space to state whether and how they used AI in a given piece. The idea, per the company, is to set reader expectations rather than police anyone.

> No AI detector is reliable enough to call a piece machine-written with certainty. Pangram uses a deep learning classifier trained on around a million documents rather than the older perplexity-and-burstiness heuristics, and it reports strong internal accuracy numbers. But The Atlantic examined how well Pangram actually performs and found the picture more complicated than the marketing suggests. False positives are a known problem across the category, and lightly edited or paraphrased AI text is far harder to catch than raw model output.

> Its acknowlegdment matters because a wrong flag carries real cost. A human writer who gets tagged as an AI user has little recourse in the moment, and the accusation sticks. Non-native English writers have historically drawn more false positives from detection systems, which raises fairness questions for a platform with a global base of newsletter writers. Pairing the automated score with a voluntary disclosure field is Substack's hedge against that, letting writers put their own account on the record next to the machine's.

> For newsrooms and independent publishers, the move is a preview of how disclosure norms may harden across platforms. If readers start expecting an AI provenance label on every post, editors will face pressure to document their own use of the technology and to decide where the line sits between an AI writing assistant and AI ghostwriting. Publishers who have built AI into their workflows […] will want a clear internal policy before a third-party score answers the question for them.

> The real test isn't whether the detector works. It's whether readers trust a score that Substack itself acknowledges can be wrong.

## Popular AI, on mechanics and accuracy (VERBATIM)

> Substack CEO Chris Best announced the Pangram partnership in a July 21 post titled "Against Claudefishing." Readers can request a scan of text longer than 100 words and receive an estimate of how much was written by hand or with AI assistance.

> Substack also added a "How I make this" statement where publishers can explain their creative process. Writers can scan drafts before publication, report a result they believe is wrong and disable reader detection on an individual post or Note.

> There is a catch. According to Substack's instructions, a writer must first generate a Pangram analysis before selecting "Disable detection." Readers who later request a scan will see "AI detection unavailable" instead of a result.

> The main control lever is reputation. Writers can disable detection, but readers then see an "AI detection unavailable" message, which can create suspicion of its own.

> Substack is not currently banning AI-assisted articles or automatically marking every post. Someone must choose to run the scan, and a writer can disable it.

> Pangram is a transformer-based neural classifier trained to distinguish human-written documents from machine-generated ones, according to its technical report. The full production system is proprietary, so outsiders cannot inspect every feature, weight, threshold or calibration decision.

> This active-learning process is intended to refine the decision boundary in the exact regions where false positives occur. Pangram's authors describe the method as "hard negative mining with synthetic mirrors".

> Substack requires more than 100 words because longer passages generally give the classifier more evidence.

> Pangram advertises a false-positive rate of about one human document in 10,000. That is a company claim based on its own datasets, and the rate should not be assumed to apply identically to every genre, text length, language and product integration.

> Even Pangram's advertised false-positive rate of one in 10,000 would produce 100 false positives for every million genuinely human documents scanned.

> An ACL 2025 study involving 300 nonfiction articles found that Pangram matched the near-perfect detection accuracy of five skilled human evaluators and outperformed almost every other automated system tested. The majority vote among those frequent LLM users misclassified only one article, showing that experienced human judgment can add context that an automatic classifier lacks.

> The reverse is also true. A human classification does not verify the byline, prove originality or certify accuracy. A ghostwritten article can be human. A copied article can be human. A misleading article can be human. A fully generated passage can also escape detection when it does not display the patterns the classifier expects.

> Substack itself concedes this point. Its announcement says Pangram cannot determine whether "great human care" went into the work or whether AI was merely used as a source. The detector classifies linguistic output. It does not measure effort, originality, accountability, accuracy or value.

> A nationally representative experiment involving 3,861 participants found that labeling an article as AI-produced reduced its perceived accuracy, even though the underlying content did not change. The label also reduced interest in the policy discussed by the article.

> A false positive is not a harmless UI mistake when the label itself changes how readers judge the work.

> In one Reddit account of a Pangram false positive, a user said a handwritten paragraph changed from 100 percent AI to 100 percent human after two words were replaced. In another discussion of Pangram's treatment of personal writing, a user reported a 99 percent AI-confidence result for an overview they said they had written themselves. These are unverified user accounts, so they should be treated as evidence of complaints and user concern rather than a measured error rate.

> ▪ A false positive creates a disclosure trap
> Does the writer publish the false result? Does the writer disable detection and accept an "AI detection unavailable" message? Does the writer add a defensive note denying AI use? Does that denial make the author look more suspicious?

> A writer can scan the draft, inspect the result, write a process statement, report an error, disable detection or publish without looking. None of these choices is neutral once readers know the scanner exists.
