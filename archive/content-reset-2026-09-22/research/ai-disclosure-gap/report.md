# Report — claims → sources (all opened and confirmed)

Verification agent fetched each source; raw saved to `raw/01`–`raw/07`. Confirmed the
source backs the exact claim next to it (content-builder rule 3).

| Claim in essay | Source (confirmed) | Note |
|---|---|---|
| Insurance 82.9% / banks 22.8% / tech 77.4%, n=2,112; measures disclosure not deployment | Institute 10-K census — appliedartificialintelligence.org/research/ai-in-10k-filings-2025/ | Own sister-org data; figures read directly from `sector-mention-rates.csv`. |
| JPMorgan employees "spend more on tokens than salary"; PNC building own GPU compute; RBC token use +500% YoY | American Banker, 2026-06-29 | All three sub-claims SUPPORTED (Anderson/Demchak/McKay quotes). Corroborated: Semafor 2026-06-03. |
| JPMorgan 450 gen-AI use cases; 200,000 on LLM Suite in 8 months | Tearsheet, 2025-05-27 | **450 = proofs of concept, not "in production."** Essay says "in development" — matches. 200k SUPPORTED. |
| Fair-lending exposure via Fair Housing Act + state laws (post federal rollback) | Brookings AI fair-lending agenda | ECOA disparate-impact removed by 2026 Reg B rewrite (eff. 2026-07-21); essay deliberately frames as FHA + state laws + "this year's federal rollback." |
| Model-risk supervision "among the most constraining supervisory policies" on tech adoption | Bank Policy Institute, 2025-10-28 | Direct quote. BPI says "model risk management guidance" (that guidance is SR 11-7); essay avoids the code string, describes it plainly. |
| SEC began enforcement against AI overstatement in 2024 | Norton Rose Fulbright | Delphia/Global Predictions (Mar 2024), Presto (Jan 2025). Class actions ~doubled 2023→24 (Cornerstone) if a figure is wanted. |
| Insurers required to document AI: NAIC 2023 model bulletin + Colorado in statute | NAIC (2023-12-04) + Troutman/Locke Lord review | SUPPORTED; written AI program requirement, 24+ jurisdictions; CO SB 205 + C.R.S. 10-3-1104.9. |
| 84% of health insurers use AI/ML | NAIC survey press release, 2025-05-20 | Used the tight 84% figure, not the looser 92% tabulation. |

## Deliberate framing calls
- **22.8% is framed as disclosure, not adoption**, throughout — the census's own caveat.
  Avoids the "banks barely use AI" misread (the seed's top gap).
- **No hard banks-vs-insurers adoption-delta claim** (public data doesn't support one; it
  leaned on a single firm). The essay argues liability + regulation as the best-supported
  explanation, not the only one.
- BCG "insurance leads adoption" NOT cited (page 403'd); used NAIC 84% instead.

## Still open / for Nick
- **Nick's firsthand strand is not yet in the piece.** First person is currently limited to
  the true "I build AI systems for a living." If Nick has directly seen a regulated client
  stay vague about naming AI, that anecdote should replace or augment paragraph 2. Flagged
  in `raw/origin.md`.
- `approved:` intentionally absent (Nick's gate). `pubDate: 2026-07-21` is a placeholder;
  not in queue.
