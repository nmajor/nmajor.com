# Meme angle selector forward test

Date: 2026-09-29

Scope: five draft posts under `app/linkedin/rockwell-knowledge-at-the-machine/`, tested against all 63 active established-template contracts. No image was rendered and no production file, campaign, skill, or catalog was changed.

## Results

| Post | Recommended template | Score | Current template | Current choice survives? |
|---|---|---:|---|---|
| Rockwell knowledge | One Does Not Simply (`mordor`) | 102 | One Does Not Simply | Yes, ranked first |
| FavTrip invoices | But It's Honest Work (`bihw`) | 101 | Drakeposting | No, hard failure |
| Domtar sensors | Panik Kalm Panik (`panik-kalm-panik`) | 103 | Panik Kalm Panik | Yes, tied first with Genie and preferred pairwise |
| Odyssey modernization | Scooby Doo Reveal (`reveal`) | 102 | Epic Handshake | No, hard failure |
| STG order entry | Expectation vs. Reality (`dbg`) | 101 | Is This a Pigeon? | No, hard failure |

The Rockwell choice survives cleanly. It expresses the actual relationship in the post: a task presented as simple contains substantial organizational work.

Domtar also survives. Panik Kalm Panik and Genie both score 103. Panik wins the manual pairwise review because all three of its roles come directly from the source and its reversal preserves the failed-motor opening. Genie is a legitimate, shorter alternative centered on the review-capacity constraint.

The other three current choices do not survive:

- FavTrip's Drakeposting invents an actor who rejects AI-written social posts and chooses invoice reconciliation. The source contains no such choice, so it violates Drake's same-person invariant.
- Odyssey's handshake treats the coding agent and seven-person team as separate peers even though the agent operated inside that team. "Needs a technical lead" also does not apply naturally to both sides as a shared trait.
- STG's pigeon meme invents an AI steering committee and gives it a misclassification scene that never appears in the post.

## Ranked alternatives

- Rockwell: Genie, 86. Scooby Doo Reveal scored 82 but failed the instant-clarity minimum.
- FavTrip: Genie, 98, for staged permissions; Matrix Morpheus, 92, for the counterintuitive bill-checking win.
- Domtar: Genie, 103; Expectation vs. Reality, 100.
- Odyssey: Genie and Peter Parker's Glasses, both 99.
- STG: Peter Parker's Glasses, 100; Matrix Morpheus, 92.

## Skill flaws exposed by the test

1. The read path omits the full contracts. `list_templates.py --json` returns template names, meanings, and slot names, but not invariants, word ceilings, required phrases, or anti-patterns. A selector following the instructions literally lacks information needed to judge role validity. The skill should explicitly require reading `template-contracts.json` for every shortlisted ID.

2. The packet and ranker do not prove that the full catalog was used. The added `catalog_scan` field is documentary only. The script ignores it and does not confirm that template IDs are active or even exist.

3. The ranker ignores the payload and angles. A candidate can cite a nonexistent angle, and a packet can omit the expected-versus-actual work entirely, yet still pass. The tool validates score shape, not the selection method.

4. There is no required role map. The prose says every story role must map to a declared slot, but the example schema has no `role_map` field and the ranker cannot check it. This is how familiar but structurally wrong choices such as Drake, Handshake, and Pigeon slip through.

5. Hard failures do not require reasons. The test added `hard_fail_reason` manually, but the script only checks for a Boolean. Requiring a reason would make rejections useful to the learning loop.

6. Exact ties have no editorial resolution. Domtar produced a 103-to-103 tie. The script preserved input order, which could masquerade as a recommendation. The packet needs an explicit pairwise decision with a written reason, and the tool should report unresolved ties rather than silently ordering them.

7. Freshness cannot be scored honestly one post at a time. Genie ranked near the top for Rockwell, FavTrip, Domtar, and Odyssey; Glasses ranked near the top twice. The workflow needs a batch-assignment pass plus recent-template history after individual ranking.

8. The scores are uncalibrated self-ratings. The 80-point threshold looks objective, but the same selector supplies every number. Structured accept, reject, and edit feedback from Nick can eventually calibrate examples and weights. Until then, the hard semantic checks and pairwise explanation are more trustworthy than a two-point score difference.

9. The output schema has no recommendation or alternative field. The ranker calculates eligibility and order, but it cannot distinguish a numerical leader from the editorial recommendation or enforce the rule that an alternative must represent a genuinely different angle.

## Artifact index

Each post has a `*-packet.json` containing the comic payload, five angles, shortlist, scores, and reasons. Each corresponding `*-ranking.json` is the exact output of `rank_candidates.py --json`.
