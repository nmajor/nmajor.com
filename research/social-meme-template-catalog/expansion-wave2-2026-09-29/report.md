# Established meme catalog expansion, wave two

Date: 2026-09-29

## Result

This pass researched 22 established templates that were absent from the 101-template catalog. Twelve passed. Six remain on hold. Four were rejected.

The useful additions are not twelve more pictures to choose at random. They add twelve specific joke relationships:

| ID | Template | Relationship |
|---|---|---|
| `cake` | Office Space Milton | An explicitly promised resource never appears. |
| `elf` | You Sit on a Throne of Lies | Evidence makes a confident assurance obviously false. |
| `friends` | Are You Two Friends? | Two parties give different answers about whether they are aligned. |
| `headaches` | Types of Headaches | One recurring operational burden is worse than ordinary pain points. |
| `interesting` | The Most Interesting Man in the World | A rare behavior has a reliably distinctive execution. |
| `jw` | Probably Not a Good Idea | A concrete reckless action receives a dry warning. |
| `khaby-lame` | Khaby Lame Shrug | An elaborate workaround loses to the obvious direct method. |
| `kramer` | Kramer, What's Going On In There? | A visible symptom has an unexpectedly specific cause. |
| `light` | Everything the Light Touches is Our Kingdom | A broad scope claim has one important excluded area. |
| `philosoraptor` | Philosoraptor | A familiar premise creates a playful paradox. |
| `spirit` | Fake Spirit Halloween Costume | A recognizable organizational type is exposed by the concrete things it includes. |
| `whatyear` | What Year Is It? | An outdated practice makes the observer feel displaced in time. |

The exact evidence for every candidate is in [candidate-evidence.json](candidate-evidence.json). It records the renderer ID and line count, cultural source and retrieval date, origin, three representative uses, verified slot-to-image mapping, phone-size result, safety concern, rights status, and admission reason. [contracts-wave2.json](contracts-wave2.json) preserves the complete writing contracts used for the render audit.

## Render findings

Every candidate was rendered through the exact Memegen renderer. I inspected the results in two 360-pixel-wide contact sheets:

- [contact-sheet-01.jpg](rendered/contact-sheet-01.jpg)
- [contact-sheet-02.jpg](rendered/contact-sheet-02.jpg)

The inspection changed two decisions and one contract:

- `friends` originally had its response roles reversed. The second overlay labels the left character, who says "No." The third labels the right character, who says "Yes." The final contract encodes that exact order.
- `dragon` has a useful impossible-request joke, but its one editable speech bubble remains too small at 360 pixels. It moved to hold.
- `headaches` became readable when the final label was reduced to "Re-keying orders." Its contract now limits that slot to four words.

This is why a template name or blank image is not enough. Renderer slots are implementation details, and a semantically correct joke can still fail on a phone.

## Holds

| ID | Reason |
|---|---|
| `blb` | The format defaults to humiliating a human subject. It needs a reliable project or self-own target rule before activation. |
| `dragon` | The editable bubble failed the 360-pixel legibility check. |
| `ive` | The renderer points to an Apple biography, not evidence of the meme's accepted meaning and mutation. |
| `nails` | Several catalogs carry it, but no reliable cultural-origin account establishes a stable three-label relationship. |
| `stop` | Six dialogue captions failed the phone-size scan. |
| `vince` | The escalation mechanism works, but the real executive's current public baggage distracts from the joke and the source footage objectifies a performer. |

## Rejections

| ID | Reason |
|---|---|
| `box` | The concealed-box meaning depends on the murder reveal in *Se7en*. |
| `disastergirl` | Fire and implied responsibility for destruction are the joke. |
| `spongebob` | The established mechanism is ridicule, not clarification. |
| `wkh` | The blame-shifting relationship depends on a visible shooting. |

Rejecting these preserves the research decision. A later catalog sweep will not rediscover them and silently add them.

## Sources and provenance

The raw directory preserves exact copies of the Memegen catalog, MemeFact dataset, dataset documentation, renderer license, and each cultural-source response. [raw/index.json](raw/index.json) records final URLs, byte counts, and SHA-256 hashes. No generated or imitation art appears in this expansion.

The Memegen renderer is open source, but that does not license its third-party template art. Every candidate and admitted local asset remains `fair-use-review`. Catalog admission means the semantic contract passed. It does not mean the image is cleared for production use.

## Final counts

After admission, the full catalog contains 123 researched contracts:

- 75 active
- 27 hold
- 21 rejected

The twelve active additions cover distinct relationships. The six holds and four rejections are kept because a useful selection system needs negative knowledge too. It should know why a famous template is wrong, not merely fail to return it.
