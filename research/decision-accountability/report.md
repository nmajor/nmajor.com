# Decision accountability — grounded ideas for the essay

**Purpose:** citable philosophical/academic scaffolding for Nick's argument that *AI may
get good enough to make basic decisions, maybe better than most humans — but that is not the
crux. The crux is accountability and responsibility. For decisions that affect people's
health and lives, there may be a class of decision we should refuse to hand to a machine at
all, no matter how accurate, because putting a life in a machine's hands removes the human
who is answerable for it.* Live example: UnitedHealth's **nH Predict** (a predictive model,
not an LLM) driving post-acute care denials, now in litigation (*Estate of Lokken v.
UnitedHealth*).

Every idea below is grounded in a real named work. Support for Nick's specific thesis is
graded **STRONG / PARTIAL / STRETCH**, honestly. Raw extracts (with URLs) are in `raw/`.

---

## Tier 1 — the load-bearing four (build the essay on these)

### 1. The Responsibility Gap — Andreas Matthias (2004) — **STRONG**
*"The responsibility gap: Ascribing responsibility for the actions of learning automata,"
Ethics and Information Technology 6(3):175–183.*
- **Plain idea:** With autonomous/learning machines, control decouples from responsibility —
  no one (programmer, operator, or machine) can be *fairly* held responsible for the outcome.
  Matthias states the choice bluntly: either society **refuses to use this class of machine**,
  or it lives with a responsibility gap traditional concepts cannot bridge.
- **Why it's the spine:** Nick's "a class of decision we should refuse to hand to a machine
  at all" *is literally* Matthias's first horn. This is the academic name for his intuition.
- **Best line to use:** the gap arises where "nobody has enough control over the machine's
  actions to be able to assume responsibility for them."
- **Honest flag:** Matthias's strict subject is *learning* automata whose behavior is
  unpredictable; nH Predict is a fixed predictive model. Don't imply nH Predict is a
  self-learning agent. The gap he identifies generalizes cleanly, but cite him for the
  *principle*, and let the newer literature (below) carry the application.

### 2. The Moral Crumple Zone — Madeleine Clare Elish (2019) — **STRONG**
*"Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction," Engaging Science,
Technology, and Society 5:40–60.*
- **Plain idea:** When a human is placed "in the loop" of a complex automated system, they
  absorb the moral and legal blame for failures they had little real control over. "The moral
  crumple zone protects the integrity of the technological system, at the expense of the
  nearest human operator."
- **Why it maps exactly:** the pressured case-manager / nurse who "rubber-stamps" an nH
  Predict denial is the crumple zone — the name on a decision they didn't really make.
- **Best line to use:** the verbatim "protects the integrity of the technological system, at
  the expense of the nearest human operator." Also her puncturing of the "human in the loop
  = oversight" myth.
- **Honest flag:** none material. She even studied ML in clinical care directly (2018), so
  the healthcare transfer is legitimate, not a reach.

### 3. Meaningful Human Control — Santoni de Sio & van den Hoven (2018) — **STRONG**
*"Meaningful Human Control over Autonomous Systems: A Philosophical Account," Frontiers in
Robotics and AI 5:15.*
- **Plain idea:** For morally weighty decisions, humans must keep *meaningful* (not token)
  control. Two necessary conditions: **tracking** (the system responds to the humans' morally
  relevant reasons) and **tracing** (the outcome is traceable to a specific human who
  understood and can be held responsible).
- **Two uses:**
  - *Analogy:* society already accepts, in the autonomous-weapons debate, that life-and-death
    calls require a genuinely answerable human in the loop. Cutting off a frail elder's
    necessary care is life-and-death by another route — same norm.
  - *Diagnosis:* nH Predict fails **both** conditions — it doesn't track the individual
    patient's reasons (it matches to "similar" patients), and no human genuinely owns the
    decision. This is the precise vocabulary for "the control was token, not meaningful."
- **Best concept to use:** *meaningful* vs. *token* control; the **tracing** condition = a
  human who can be held responsible must exist.
- **Honest flag:** none material; this is the strongest bridge from the killer-robots norm to
  healthcare denials.

### 4. Accuracy-isn't-the-crux — Due process + the automated-decision right — **STRONG**
Two mutually reinforcing sources:
- **Citron & Pasquale, "The Scored Society: Due Process for Automated Predictions," Washington
  Law Review 89 (2014).** A decision can be *illegitimate regardless of accuracy* if it is
  opaque and the subject cannot meaningfully contest it. Calls for "technological due process":
  auditability + a real right to challenge. nH Predict's alleged ~90% appeal-reversal design is
  a textbook due-process failure. **(STRONG, US-grounded.)**
- **GDPR Article 22.** The law encoding Nick's intuition: a person has the default right "not
  to be subject to a decision based solely on automated processing ... which produces legal
  effects ... or similarly significantly affects him or her," plus rights to "human
  intervention," "to express his or her point of view," and "to contest the decision."
  Accuracy is nowhere in the test — the safeguard is *human answerability and contestability*.
  **(STRONG as a principle a major legal regime already adopted.)**
- **Honest flags:** (a) GDPR is EU law; Lokken is US — cite Art. 22 as an enshrined
  *principle*, not the governing law. (b) **Wachter, Mittelstadt & Floridi (2017)** argue
  Art. 22 is weaker in practice than claimed (a "right to be informed," not a robust "right to
  explanation") — which *reinforces* Nick's deeper point: a paper appeal-right is not
  accountability. Mention it rather than let a critic spring it.

---

## Tier 2 — strong support for specific legs

### 5. Automation bias & complacency — Parasuraman & Manzey (2010) — **STRONG (mechanism)**
*"Complacency and Bias in Human Use of Automation," Human Factors 52(3):381–410.*
- **Plain idea:** Humans systematically over-defer to automated recommendations (automation
  bias) and under-monitor them under caseload (complacency) — in **both experts and novices**,
  and it **cannot be fixed by training**.
- **Use:** the empirical *why* behind Elish. "A human reviews every denial" is not a real
  safeguard — the human check predictably degrades into a rubber stamp by cognitive mechanism,
  not laziness. Pair Parasuraman & Manzey (why) with Elish (consequence: the human eats the
  blame anyway).

### 6. Kantian dignity / Formula of Humanity — Kant (1785) — **PARTIAL→STRONG if framed right**
*Groundwork of the Metaphysics of Morals; Formula of Humanity at 4:429, dignity vs. price at
4:434.*
- **Plain idea:** "So act that you use humanity ... always at the same time as an end, never
  merely as a means." A person has *dignity* (beyond price, irreplaceable); a thing has a
  price. Reducing a sick person to a statistical match against a database of "similar"
  patients treats them *merely* as a fungible instance — a means to an actuarial end.
- **Use:** the *dignity* leg — why automating this feels like a category error. nH Predict's
  alleged "match to similar patients rather than defer to the physician" is almost a caricature
  of treating a person as a data point rather than an end.
- **Honest flag:** Kant is about *how to treat persons*, not directly about *who is answerable*.
  Use it for dignity/framing; keep the accountability spine on Matthias / Santoni de Sio. Cite
  the standard Akademie pages, not a loose paraphrase.

---

## Tier 3 — analogy only, flag clearly

### 7. Sandel, *What Money Can't Buy* (2012) — **STRETCH (borrow the shape, not the authority)**
- **Plain idea:** Some goods are *corrupted* when the wrong logic (market/price) is applied —
  "markets don't only allocate goods; they also express and promote attitudes toward them."
- **Use:** a clean rhetorical frame — *"the moral limits of automation,"* by analogy to the
  moral limits of markets. Some decisions are corrupted by *automation/actuarial* logic the
  way some goods are corrupted by market logic.
- **Honest flag (important):** Sandel wrote about markets, **not** automation. Present it
  explicitly as "Sandel argued X about markets; the same structure applies here," never as if
  Sandel is an authority on AI. Honest as analogy; a stretch as citation.

---

## The 3 ideas that most powerfully AND honestly ground the thesis

If Nick keeps only three, these carry "some life-affecting decisions shouldn't be a machine's
to make, because accountability can't be automated":

1. **Matthias's Responsibility Gap (2004)** — the thesis *is* his dilemma. It gives Nick the
   academic warrant to say: for some machines the honest choice is refusal, because
   responsibility genuinely cannot be assigned. This is the spine.

2. **Santoni de Sio & van den Hoven's Meaningful Human Control (2018)** — supplies both the
   life-and-death analogy (we already demand a real answerable human for autonomous weapons)
   and the diagnostic test (tracking + tracing) that shows nH Predict's "human in the loop"
   was token, not meaningful. This is the bridge to healthcare.

3. **Elish's Moral Crumple Zone (2019)** — names what actually happens when we automate anyway
   but keep a human as a fig leaf: the pressured case-manager becomes the liability sponge, the
   system is protected, the patient is harmed, and no one is truly accountable. (Back it with
   Parasuraman & Manzey for the "why the human can't really check it" mechanism.)

Together: **accountability can't be automated (Matthias); for life-and-death decisions we
already know it must not be (Santoni de Sio); and pretending to keep a human in the loop just
turns that human into a scapegoat (Elish).** The nH Predict / Lokken case is where all three
land at once — and, crucially, it's a *predictive model, not an LLM*, which is exactly Nick's
"accuracy isn't the crux" wedge.

---

## Raw files created (in `raw/`)
- `01-matthias-responsibility-gap.md`
- `02-elish-moral-crumple-zone.md`
- `03-santoni-de-sio-meaningful-human-control.md`
- `04-gdpr-article-22.md`
- `05-citron-pasquale-scored-society.md`
- `06-wachter-right-to-explanation.md`
- `07-kant-formula-humanity.md`
- `08-sandel-moral-limits-markets.md`
- `09-parasuraman-manzey-automation-bias.md`
- `10-nh-predict-lokken-case.md`

## Verification notes / honesty ledger
- All ten primary works are real, verified by title/author/journal/year against publisher or
  scholarly index pages (Springer, ESTS, Frontiers/PMC, SageJournals, Washington Law Review,
  Oxford IDPL, gdpr-info.eu). Abstracts for Elish and Santoni de Sio are quoted from the
  publisher's own pages (see raw files).
- **Kant** page numbers are the standard Akademie citations; verify the exact translation
  wording against a specific edition (Gregor/Cambridge is the usual scholarly choice) before
  printing a quotation.
- **nH Predict / Lokken** details (the ~90% error/reversal rate; "counted on non-appeal") are
  **plaintiffs' allegations in ongoing litigation** — attribute as such, not as adjudicated
  fact.
- Not independently re-verified line-by-line against the full PDFs: the Matthias
  "nobody has enough control..." quotation is the widely-circulated formulation of his thesis;
  confirm against the article body before printing it inside quotation marks.
