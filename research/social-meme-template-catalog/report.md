# Social meme template catalog: v2 admission audit

**Audit date:** 2026-08-11  
**Decision scope:** the 79 contracts currently under `templates` in
[`template-contracts.json`](../../.skills/social-meme-campaign/references/template-contracts.json),
checked against the preserved raw inputs. `ACTIVE` below means semantically eligible
for review drafts. It does **not** clear the background art for publication.

## Decision

The defensible active catalog is **50 templates**, not all 79 currently present in the
JSON. Put **15 on HOLD** and **REJECT 14**. This is a deliberately broader result than
the earlier 20-template recommendation because 78 source bodies and all 79 exact
Memegen renders are now available; it is still narrower than the candidate file
because renderer compatibility is not semantic or safety approval.

The 50 should be admitted in two tiers:

- **Tier 1 — 34 supported contracts:** `ackbar`, `drake`, `ds`, `gru`, `handshake`,
  `mordor`, `rollsafe`, `aag`, `ants`, `balloon`, `bihw`, `bilbo`, `both`, `bus`,
  `buzz`, `center`, `dbg`, `dwight`, `exit`, `fetch`, `fry`, `gears`, `genie`,
  `home`, `inigo`, `kombucha`, `money`, `ntot`, `officespace`, `perfection`, `same`,
  `say`, `stonks`, `success`.
- **Tier 2 — 16 supported after the corrections below:** `db`, `gb`,
  `panik-kalm-panik`, `pigeon`, `3hd`, `afraid`, `bender`, `facepalm`, `gone`,
  `made`, `mouth`, `nice`, `noidea`, `patrick`, `reveal`, `touch`.

The HOLD list is `saltbae`, `away`, `badchoice`, `captain`, `firsttry`, `hagrid`,
`harold`, `michael-scott`, `millers`, `older`, `pooh`, `regret`, `right`, `seagull`,
and `wallet`. The REJECT list is `astronaut`, `fine`, `kermit`, `aint-got-time`,
`cbb`, `chair`, `chosen`, `cmm`, `crazypills`, `dodgson`, `midwit`, `woman-cat`,
`wonka`, and `worst`.

**Implemented outcome:** `template-contracts.json` now keeps all 79 researched
contracts but partitions every ID exactly once under `admission.active`,
`admission.hold`, or `admission.rejected`. Campaign validation and rendering accept
only the 50 active IDs. The 15 held and 14 rejected records remain searchable evidence,
not runtime options. The Tier-2 corrections and safety guards described below were
applied before activation.

## Evidence and method

The raw source index is [`raw/SOURCES.md`](raw/SOURCES.md). The main preserved inputs
and their originals are:

- [`raw/memegen-templates.json`](raw/memegen-templates.json)
  ([original API](https://api.memegen.link/templates/)),
  [`raw/memegen-openapi.json`](raw/memegen-openapi.json)
  ([original](https://api.memegen.link/docs/openapi.json)), and
  [`raw/memegen-guide.html`](raw/memegen-guide.html)
  ([original](https://memegen.link/guide/));
- [`raw/imgflip-popular-templates.json`](raw/imgflip-popular-templates.json)
  ([original API](https://api.imgflip.com/get_memes)),
  [`raw/imgflip-api.html`](raw/imgflip-api.html)
  ([original](https://imgflip.com/api)), and
  [`raw/imgflip-terms.html`](raw/imgflip-terms.html)
  ([original](https://imgflip.com/terms));
- [`raw/memefact-templates.csv`](raw/memefact-templates.csv)
  ([original CSV](https://huggingface.co/datasets/sergiogpinto/memefact-templates/resolve/main/imkg_final_final_final_processor.csv))
  and [`raw/memefact-readme.md`](raw/memefact-readme.md)
  ([original](https://huggingface.co/datasets/sergiogpinto/memefact-templates/raw/main/README.md));
- [`raw/metameme-paper.pdf`](raw/metameme-paper.pdf)
  ([original](https://aclanthology.org/2025.naacl-srw.35.pdf)) and
  [`raw/kymkb-paper.pdf`](raw/kymkb-paper.pdf)
  ([original](https://aclanthology.org/2025.naacl-long.525.pdf)).

For candidate semantics, [`raw/semantic-sources/index.json`](raw/semantic-sources/index.json)
records every original URL, redirect, retrieval date, byte count, and hash. It indexes
79 IDs: 78 response bodies were preserved; `fine` alone returned HTTP 409. The body
files are cited per candidate below. No substitute `fine.html` exists or should be
invented.

Evidence was assigned by function:

- **Template selection/familiarity:** current Imgflip top 100, Memegen availability,
  MemeFact engagement, and the broader research papers. Absence from one volatile top
  100 is not proof that a known format is obsolete.
- **Visual description and label placement:** the exact Memegen blank and operator
  render, checked visually; MemeFact's `description` was only a hypothesis. This is
  especially important for object-label templates.
- **Technical slot capacity:** Memegen `lines` for the renderer used by this skill.
  Imgflip/MemeFact `box_count` describes a different renderer and cannot override it.
- **Established meaning:** preserved KYM/source-page prose first, then Memegen's
  example and MemeFact `about`/captions. A YouTube title, Imgflip blank page, or KYM
  photo page is weak evidence and is called out as such.
- **Subtle caption invariants:** fixed phrases, role order, equality, and dialogue
  structure were accepted only when the page, example, and exact render agree.

## Catalog scope and data quality

| Catalog | Preserved scope | Fields and limits |
|---|---:|---|
| Candidate contract v2 | 79 unique IDs and names; 50 active, 15 hold, 14 rejected | Seven fields on every record: `name`, `meaning`, `writing_guide`, `anti_patterns`, `slots`, `invariants`, `operator_example`, plus a top-level exhaustive admission partition. The asset manifest separately records source URLs, examples, admission, exact hashes, retrieval date, and review-only rights. |
| Memegen | 210 rows; 209 unique IDs/names | Ten fields: `_self`, `blank`, `example`, `id`, `keywords`, `lines`, `name`, `overlays`, `source`, `styles`. Duplicate `morpheus` records remain. All 79 candidates resolve and every local slot count equals Memegen `lines`; only `ds` and `chosen` have examples shorter than their declared line capacity. |
| Imgflip popular | 100 unique IDs/names/URLs | Seven fields: `id`, `name`, `url`, `width`, `height`, `box_count`, `captions`. This is a changing popularity snapshot, not a full catalog, semantic authority, safety filter, or licence. |
| MemeFact | 658 rows and IDs; 656 normalized names/image URLs | Ten columns: `template_id`, `template_url`, `template_title`, `total_views`, `total_upvotes`, `box_count`, `about`, `captions`, `description`, `caption_style_explanation`. `about` exists for 293 rows (44.5%); all visual/style fields were AI-generated. There are 6,440 sampled captions. |
| Candidate semantic pages | 79 indexed; 78 fetched | 66 KYM pages, seven YouTube pages, two Imgflip pages, and one each from Gunshow, BuzzFeed, DeviantArt, and Reddit. `fine` (Gunshow) is the only failed fetch. The source mix explains why not every candidate can be treated equally. |

MemeFact's AI fields must not be trusted blindly. Its description of a face can be
useful while its inferred caption structure is wrong. Three concrete checks expose
that limit: Epic Handshake's generated prose does not establish Memegen's actual
left/right/center order; Why Not Both has `box_count: 2` even though most examples are
a single phrasal caption; and Woman Holding Dog's Mouth is described by its preserved
KYM page as generic speech suppression, not the current contract's fixed
seller/buyer/builder story. The human-authored `about`, real examples, blank, and
renderer order carry more weight.

## Memegen–MemeFact–Imgflip crosswalk

Normalization case-folds and removes punctuation/spacing; aliases are accepted only
when `about`, source, example, or the image confirms the identity.

- Memegen and MemeFact share **53 normalized-name keys**, producing 54 row pairs
  because Memegen's duplicate `morpheus` joins the same MemeFact record twice.
- Memegen and the Imgflip top 100 share **25** normalized-name keys.
- Imgflip and MemeFact share **41 numeric IDs** and **42 normalized-name keys**; the
  difference reflects duplicates and an older Woman Yelling at Cat ID.
- In the 79-candidate set, **17 candidates** exact-match MemeFact by normalized
  Memegen name. Eleven additional high-confidence alias families give **28 candidate
  bridges to 29 MemeFact rows**: Drakeposting/Drake Hotline Bling, Daily Struggle/Two
  Buttons, Galaxy/Expanding Brain, the two One Does Not Simply titles, Roll Safe/Roll
  Safe Think About It, Ancient Aliens Guy/Ancient Aliens, two “No Idea What I Am
  Doing” dog rows, Push/Put It Somewhere Else Patrick, Woman Yelling at a Cat, the two
  Condescending Wonka titles, and Shut Up and Take My Money/Fry. Do not merge those by
  name alone; retain both external IDs and the evidence for the alias.
- Six of the 54 whole-catalog exact-name pairs disagree on capacity: American Chopper
  Argument 6/5, Forever Alone 2/3, Confused Gandalf 2/3, Inhaling Seagull 2/4, Change
  My Mind 1/2, and Running Away Balloon 3/5 (Memegen lines/MemeFact boxes). For local
  use, the exact Memegen render resolves `balloon`; `chair` and `seagull` have other
  reasons not to activate.

Duplicate and naming defects remain material. Memegen has duplicate `morpheus` IDs;
MemeFact has duplicate normalized-name/image pairs for Waiting Skeleton and Marked
Safe From. Similar titles also conceal different assets: Kermit Tea is not Evil
Kermit, and the Pigeon and Woman Yelling at Cat families have multiple external IDs.
A future crosswalk needs stable local ID, external IDs, aliases, image hash, and a
human-confirmed semantic identity.

## Candidate-by-candidate audit

The `source` link in each row is the preserved response body; its original URL is in
the semantic index. `M` means the Memegen record/example; `MF` and `I` mean MemeFact
and Imgflip evidence.

### ACTIVE Tier 1 — 34

| ID | Concrete evidence and ambiguity |
|---|---|
| `ackbar` | [Source](raw/semantic-sources/ackbar.html) defines the trap catchphrase/reaction; M's two-line example fixes the warning second. Freshness is unverified, not disproved. |
| `drake` | [Source](raw/semantic-sources/drake.html), MF, and the exact two-panel render agree on rejection above and preference below. |
| `ds` | [Source](raw/semantic-sources/ds.html) defines two contradictory buttons; M exposes a third label and the exact render confirms it belongs to the chooser. M's own example omits that optional label. |
| `gru` | [Source](raw/semantic-sources/gru.html) describes an unexpected third board and fourth-panel confusion; M repeats lines three and four, supporting the equality invariant. |
| `handshake` | The [source](raw/semantic-sources/handshake.html) establishes the artwork/creator, not meaning. MF supports two sides sharing a trait; the exact M render alone establishes left/right/center order. |
| `mordor` | [Source](raw/semantic-sources/mordor.html) gives the “One does not simply X” snowclone; M and MF support setup then difficult action. |
| `rollsafe` | [Source](raw/semantic-sources/rollsafe.html), MF `about`, and examples support superficially clever but faulty logic. |
| `aag` | [Source](raw/semantic-sources/aag.html) explicitly describes unexplained phenomena attributed directly to aliens; the contract safely applies that one-cause overclaim to AI. |
| `ants` | [Source](raw/semantic-sources/ants.html) gives the exact question/warning snowclone and says it warns of a decision's negative consequence. |
| `balloon` | [Source](raw/semantic-sources/balloon.html) identifies goal, reaching figure, and restraining figure; exact M placement resolves the 3-line versus MF/I 5-box discrepancy. |
| `bihw` | [Source](raw/semantic-sources/bihw.html) gives the fixed modest-but-legitimate defence. It is positive and useful for small operational wins even without a top-100 bridge. |
| `bilbo` | [Source](raw/semantic-sources/bilbo.html) documents rationalizing the retention of borrowed objects; M supplies the two fixed lines. Use only when the post supplies the tempting object. |
| `both` | [Source](raw/semantic-sources/both.html) explicitly resolves a two-option problem by choosing both; M and MF agree on two lines. |
| `bus` | [Source](raw/semantic-sources/bus.html) and the blank directly show the same bus position with wall versus view; M placement supports opposite interpretations. |
| `buzz` | The [Imgflip source](raw/semantic-sources/buzz.html) is only a blank-page description, but M/MF captions and the exact render establish noun repetition and “X everywhere.” |
| `center` | [Source](raw/semantic-sources/center.html) says the phrase criticizes an unusually small object/image; the contract's undersized-effort relation is direct. |
| `dbg` | [Source](raw/semantic-sources/dbg.html) explicitly specifies expectation, excited reaction, disappointing reveal, and disappointment; M compresses this visual sequence into two captions correctly. |
| `dwight` | [Source](raw/semantic-sources/dwight.html) defines idiom/common belief followed by rationalist refutation. Keep the target a claim, not a person. |
| `exit` | [Source](raw/semantic-sources/exit.html) defines disapproved route, preferred exit, and swerving car; MF/I agree on three boxes and exact M order is verified. |
| `fetch` | [Source](raw/semantic-sources/fetch.html) gives the exact “Stop trying to make X happen / it won't happen” phrasal form. It rejects an idea or label, not a person. |
| `fry` | [Source](raw/semantic-sources/fry.html) explicitly gives “Not sure if X / or just Y” and internal-monologue use; M/MF/I agree on two lines. |
| `gears` | [Source](raw/semantic-sources/gears.html) says the phrase prefaces a specific grievance; the fixed setup/order is supported. Use it sparingly because it adds tone more than structure. |
| `genie` | The [source](raw/semantic-sources/genie.html) is only an Imgflip blank page, but its title and M's exact “phenomenal power / tiny space” example directly support capability versus constraint. This is the weakest Tier-1 provenance. |
| `home` | [Source](raw/semantic-sources/home.html) documents request, refusal because an option exists “at home,” and an inferior substitute; exact M order is clear. |
| `inigo` | [Source](raw/semantic-sources/inigo.html) explicitly calls out incorrect word/phrase use; M/MF support term then correction. |
| `kombucha` | The preserved [BuzzFeed article](raw/semantic-sources/kombucha.html) narrates disgust, reconsideration, and a final approving reaction; the two-panel contract captures that turn. |
| `money` | [Source](raw/semantic-sources/money.html) defines enthusiastic approval toward a product/idea; M supplies the split fixed phrase. |
| `ntot` | [Source](raw/semantic-sources/ntot.html) gives the exact outcome request, prerequisite refusal, and repeated demand; the three-slot contradiction is well supported. |
| `officespace` | [Source](raw/semantic-sources/officespace.html) defines non-confrontational requests ending “that'd be great”; M/MF support order and tone. |
| `perfection` | [Source](raw/semantic-sources/perfection.html) explicitly says two “real X” rejections precede the ideal reveal and “Perfection”; exact six-slot render is readable. |
| `same` | [Source](raw/semantic-sources/same.html), MF, and exact render agree on two compared things plus the evaluator's equivalence; it is distinct from Handshake's shared trait. |
| `say` | [Source](raw/semantic-sources/say.html) defines the crowd prompt and predictable catchphrase; use role/archetype labels, not a vulnerable individual. |
| `stonks` | [Source](raw/semantic-sources/stonks.html) explicitly ties the format to poor financial decisions; the contract targets a decision and already excludes hardship/layoffs. |
| `success` | [Source](raw/semantic-sources/success.html) says captions describe a situation going better than expected; apparent setback then small payoff is supported. |

### ACTIVE Tier 2 — 16, after contract corrections

| ID | Evidence and required correction |
|---|---|
| `db` | [Source](raw/semantic-sources/db.html) and exact render support tempting alternative/person/neglected commitment. Add a guard against identifiable-person infidelity allegations or humiliating a named operator; prefer teams, priorities, or self-critique. |
| `gb` | [Source](raw/semantic-sources/gb.html) and MF support ironic escalation. Replace “pilots you killed” with “pilots you stopped”; forbid death language and intelligence labels applied to people/groups. |
| `panik-kalm-panik` | [Source](raw/semantic-sources/panik-kalm-panik.html) and M support alarm → reassurance → worse reveal. Replace the layoff example with a harmless operational miss/revised target/revealed miss, and ban layoffs, injury, disaster, and personal hardship. |
| `pigeon` | [Source](raw/semantic-sources/pigeon.html) explicitly describes erroneous identification; exact three-role order is verified. Restrict the mistaken object and observer to claims, processes, systems, or self-critique—not a protected/vulnerable person. |
| `3hd` | [Source](raw/semantic-sources/3hd.html) confirms a three-headed object-labeling format; the blank/M render make the goofy third role visible. Replace “incompetent/ridiculous” with “conspicuously unserious” and restrict labels to approaches, artifacts, or systems rather than people/groups. |
| `afraid` | [Source](raw/semantic-sources/afraid.html) gives ignorance followed by the fixed delayed admission. Make it explicitly first-person/self-owning and prohibit assigning the humiliation to a named employee or junior. |
| `bender` | [Source](raw/semantic-sources/bender.html) supports dissatisfaction and a boastful self-built replacement, but the page is marked sensitive because the canonical quote names sexual/profane indulgences. Ban those literal features and keep the second line to harmless self-serving product choices. |
| `facepalm` | [Source](raw/semantic-sources/facepalm.html) defines dismay at a lapse of judgment and notes embarrassment. Restrict use to the speaker's own error or an abstract claim/process; never make an identifiable person the fool. |
| `gone` | [Source](raw/semantic-sources/gone.html) says lost opportunities or items ending “and it's gone.” Generalize the current over-narrow “promised investment entrusted to a system” meaning/slot to any clearly named item, opportunity, budget, or plan that vanishes immediately. |
| `made` | [Source](raw/semantic-sources/made.html) and M support creator, appropriator, and repeated attribution claim. Add: do not accuse an identifiable person/company of theft unless the post itself provides that evidence; prefer documented roles or generic systems. |
| `mouth` | [Source](raw/semantic-sources/mouth.html) says one person stops another from saying an unpopular, controversial, or corrective thing around a group. Rewrite the specific seller/buyer/builder meaning to generic `silencing_actor → audience → silenced_speaker_or_truth`; retain the current business story only as an example. |
| `nice` | [Source](raw/semantic-sources/nice.html) says captions contain an ordeal, a silver lining, then the fixed phrase. Rename line one to `ordeal_with_modest_silver_lining` and require both elements; the present `small_consolation` key alone is incomplete. |
| `noidea` | [Source](raw/semantic-sources/noidea.html) supports an animal posed doing a human task plus the catchphrase. Keep the local context/full-catchphrase two-line mode, but document that M's built-in example alternatively splits the catchphrase; require self-deprecation or an abstract role and keep the named-junior ban. |
| `patrick` | [Source](raw/semantic-sources/patrick.html) supports “take X and put it Y” as an alternative solution, but does not prove every move leaves the problem intact. Soften `meaning` to “relocation presented as the solution”; use the non-solution invariant only when the post establishes it. |
| `reveal` | [Source](raw/semantic-sources/reveal.html) supports unmasking jokes about similarities, not necessarily a polished lie or true hidden cause. Rewrite to surface identity → unmasking → underlying/similar identity → recognition, and restrict identities to claims, products, processes, or metrics. |
| `touch` | [Source](raw/semantic-sources/touch.html) supports brief self-doubt followed by blaming outsiders. Replace the operator example's blame of users with an abstract metric/process, and ban identifiable employees, customers, protected classes, or vulnerable groups. |

### HOLD — 15

| ID | Concrete blocker and next evidence needed |
|---|---|
| `saltbae` | [Source](raw/semantic-sources/saltbae.html) proves only flamboyant salt sprinkling; M leaves line one blank. It does not establish the contract's small-flourish/affected-target roles or disproportionate impact. Preserve examples that demonstrate both roles before admission. |
| `away` | [Source](raw/semantic-sources/away.html) is only a Jurassic Park YouTube clip. “Constrained force inevitably returns” is plausible but not independently documented as meme usage. |
| `badchoice` | [Source](raw/semantic-sources/badchoice.html) is only the Anchorman clip/title. Immediate-regret usage is plausible, but it overlaps `regret`; preserve real instances and pick one distinct contract. |
| `captain` | [Source](raw/semantic-sources/captain.html) is a YouTube clip with no usage account. The takeover meaning is plausible, but the hostage/piracy scene also needs a violence/dominance safety decision. |
| `firsttry` | [Source](raw/semantic-sources/firsttry.html) is only the LEGO clip. The current example is not visibly an unlikely success, so it fails its own invariant. |
| `hagrid` | [Source](raw/semantic-sources/hagrid.html) supplies the quote but not established disclosure-regret usage. Preserve examples before generalizing the two roles. |
| `harold` | [Source](raw/semantic-sources/harold.html) documents a sensitive stock-photo model associated with suppressed pain/discomfort. Hold for a no-suffering/no-age-mockery rule and exact stock-art rights review. |
| `michael-scott` | [Source](raw/semantic-sources/michael-scott.html) is only a YouTube scene/title. It supports rejection, not the contract's generalized repeat-event invariant. |
| `millers` | [Source](raw/semantic-sources/millers.html) is only a KYM photo page. M's four-level reward dialogue renders, but I defaults to two boxes. Preserve a semantic page/examples and ban personal pay, layoffs, and deprivation. |
| `older` | [Source](raw/semantic-sources/older.html) narrowly validates an outdated meme/cultural reference. The current “any old method/artifact remains valid” contract overgeneralizes it; narrow or support with examples. |
| `pooh` | [Source](raw/semantic-sources/pooh.html) identifies the fancy-Pooh reaction but does not explain the plain/grandiose two-panel invariant. M/render support it, but a semantic source and class/education/status-mockery guard are still needed. |
| `regret` | [Source](raw/semantic-sources/regret.html) is only a YouTube title, and the relationship duplicates `badchoice`. Preserve usage evidence and select the stronger of the pair. |
| `right` | The preserved [Reddit page](raw/semantic-sources/right.html) has no substantive description. Exact M order works, but five M lines versus three I boxes and the unsupported listener-role invariant require a better source. |
| `seagull` | [Source](raw/semantic-sources/seagull.html) contradicts the contract: panel one is normally fixed “inhales”; panel two is verbose copypasta/song lyrics, not a quiet grammatical lead-in completed loudly. Rewrite and re-audit; M 2 versus MF 4 is renderer-specific. |
| `wallet` | [Source](raw/semantic-sources/wallet.html) proves an exploitable altered dialogue scene; M supplies the accepted-premises/refused-conclusion example. Eight small dialogue slots fail the skill's thumbnail legibility preference until a shorter renderer mode or size test is defined. |

### REJECT — 14

| ID | Concrete safety/fit reason |
|---|---|
| `astronaut` | [Source](raw/semantic-sources/astronaut.html) makes the gun threat part of the invariant: the knower aims/prepares a gun behind the discoverer. The semantics are correct but the native art conflicts with the no-fear/violence gate. |
| `fine` | No body was preserved; the [index](raw/semantic-sources/index.json) records HTTP 409 for the original Gunshow URL. M/MF still establish calm denial, but the native burning-room disaster conflicts with the hard gate. |
| `kermit` | [Source](raw/semantic-sources/kermit.html) explicitly defines the phrase as a postscript to an insult or disrespectful remark toward a person/group. Humiliation is the mechanism, not an edge case. |
| `aint-got-time` | [Source](raw/semantic-sources/aint-got-time.html) is marked sensitive and documents a real apartment-fire evacuee; one person was hospitalized and residents were displaced. The format exploits real disaster testimony. |
| `cbb` | [Source](raw/semantic-sources/cbb.html) makes the Soviet hammer-and-sickle/red filter and property appropriation central. The political baggage is unnecessary for applied-AI commentary. |
| `chair` | [Source](raw/semantic-sources/chair.html) is an explosive shouting match. Six dense turns are hostile and poor at thumbnail size; M 6 versus MF 5 adds renderer ambiguity. |
| `chosen` | [Source](raw/semantic-sources/chosen.html) targets disappointment at a once-promising person/thing; the origin is a violent confrontation after genocide and the blank is fiery. Betrayal/humiliation is native to the joke. |
| `cmm` | [Source](raw/semantic-sources/cmm.html) is inseparable from a named polarizing political personality and a political campus sign. The one-slot thesis adds little that justifies that baggage. |
| `crazypills` | [Source](raw/semantic-sources/crazypills.html) and the fixed phrase make mental-health stigmatization the reaction. An anti-pattern cannot remove the title/punchline. |
| `dodgson` | [Source](raw/semantic-sources/dodgson.html) defines indifference toward someone seeking unwarranted attention. “Nobody cares” publicly dismisses the speaker; humiliation is the payoff. |
| `midwit` | [Source](raw/semantic-sources/midwit.html) explicitly says the diagram mocks people of average intelligence and records political/far-right origins. It directly violates the punch-down gate. |
| `woman-cat` | [Source](raw/semantic-sources/woman-cat.html) is marked sensitive and uses a real person crying/pointing during an argument; the contract turns that confrontation into accusation versus oblivious response. |
| `wonka` | [Source](raw/semantic-sources/wonka.html) explicitly characterizes the captions as patronizing and sarcastic. Condescension is the format's entire mechanism. |
| `worst` | [Source](raw/semantic-sources/worst.html) defines pessimistic worsening and says the original scene follows Bart's public humiliation. It invites fear/hardship escalation with little unique operator value. |

## Activation changes and remaining hardening

The admission partition, Tier-2 semantic corrections, safer examples, and runtime
active-only enforcement are implemented. Remaining hardening:

1. Add fuller provenance fields: verified aliases/external IDs, semantic source
   URL and local file, retrieval date, reviewed-by/date, and renderer-specific slot
   mapping.
2. Add structured risk flags and a manually reviewed visual description. AI descriptions may be
   retained as raw hypotheses but must not become invariants without review.
3. Keep rights in a separate exact-asset manifest: file, hash, creator/rightsholder,
   licence or legal basis, allowed uses, attribution, and review date.

## Rights and licensing

Nothing in the raw set clears a classic background for a business LinkedIn post.
This is separate from the 50/15/14 semantic decision.

- Memegen's [`MIT licence`](raw/memegen-license.txt)
  ([original](https://raw.githubusercontent.com/jacebrowning/memegen/main/LICENSE.txt))
  covers its software/documentation, not third-party film, TV, comic, stock-photo,
  YouTube, or artist backgrounds.
- MemeFact declares Apache-2.0 for the dataset package, while its CSV links to Imgflip
  images and has no asset-level licence field. The GitHub metadata says
  `NOASSERTION`; the repository LICENSE body was not preserved.
- IMKG's [`MIT licence`](raw/imkg-license.txt)
  ([original](https://raw.githubusercontent.com/riccardotommasini/imkg/eswc/LICENCE))
  likewise covers code/documentation, not scraped art.
- Imgflip's preserved terms say access does not confer ownership and content requires
  owner permission or another legal basis. Uploaders' warranties are not a downstream
  licence to this project.
- KYM/source pages, a successful Memegen render, AI descriptions, paper figures, and
  open dataset metadata are evidence about a format, not permission to republish it.

Every ACTIVE template therefore remains `fair-use-review` or `unverified` until the
exact local asset has its own defensible rights record or is replaced with compatible
art that preserves the recognizable semantic pattern. This report is a research and
workflow assessment, not legal advice.

## Claims not verifiable from the snapshot

- Publication rights for any exact classic background.
- `fine`'s original Gunshow page body; it returned HTTP 409.
- That absence from the one Imgflip top-100 snapshot means a template is obsolete.
- That a MemeFact AI description correctly identifies every person, emotion, role,
  scene, or cultural association.
- That a pattern inferred from at most ten MemeFact captions is universal.
- The generalized semantics of the YouTube-only HOLD candidates without additional
  preserved usage evidence.
- Whether close visual/name variants should share a local contract without comparing
  the exact image hashes and use patterns.

Those uncertainties justify the HOLD and rights gates; they do not justify treating
all 79 structurally valid records as active.
