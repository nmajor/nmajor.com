#!/usr/bin/env python3
"""Build the reviewed contract and evidence payloads for wave two."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


BASE = Path(__file__).resolve().parent
SOURCE = "research/social-meme-template-catalog/expansion-wave2-2026-09-29"
RETRIEVED = "2026-09-29"


def slot(key: str, words: int, role: str, regex: str | None = None) -> dict:
    row = {"key": key, "max_words": words, "role": role}
    if regex:
        row["required_regex"] = regex
    return row


def item(
    name: str,
    meaning: str,
    guide: str,
    anti: list[str],
    slots: list[dict],
    invariants: list[str],
    example: list[str],
    status: str,
    origin: str,
    safety: str,
    rationale: str,
    uses: list[str],
) -> dict:
    return {
        "contract": {
            "name": name,
            "meaning": meaning,
            "writing_guide": guide,
            "anti_patterns": anti,
            "slots": slots,
            "invariants": invariants,
            "operator_example": example,
        },
        "proposed_admission": status,
        "origin": origin,
        "safety": safety,
        "admission_rationale": rationale,
        "representative_uses": uses,
    }


ITEMS = {
    "blb": item(
        "Bad Luck Brian",
        "An ordinary attempt produces a sharply disproportionate unlucky result.",
        "Put the reasonable action first and the unlucky consequence second. Apply the role to a project, process, or yourself, never an employee or customer.",
        ["Do not target a real person or vulnerable group.", "Do not use an expected result; the failure must feel absurdly unlucky."],
        [slot("reasonable_attempt", 7, "Top caption names the normal attempt."), slot("unlucky_result", 7, "Bottom caption gives the disproportionate failure.")],
        ["The second line must be worse than the first line reasonably predicts.", "The joke target must be a system, project, or self-own."],
        ["Runs the clean pilot", "Production data changes that morning"],
        "hold",
        "Advice-animal macro built around Kyle Craven's school portrait and a run of catastrophically unlucky outcomes.",
        "The template historically humiliates a named-looking person. Hold until the selector can enforce project or self-directed targets.",
        "The failure relationship is useful, but its default human target conflicts with the operator-not-fool rule.",
        ["Headache worsens after sleeping, KYM gallery", "Following every protocol then testing positive on vacation, KYM gallery", "Winning a console that immediately fails, KYM gallery"],
    ),
    "box": item(
        "What's in the box!?",
        "A promised container or package conceals an alarming unknown.",
        "Name the supposedly complete package, then use the fixed question to expose missing visibility.",
        ["Do not use for ordinary curiosity.", "Do not invoke harm, victims, or the film's violent reveal."],
        [slot("opaque_package", 7, "Top caption names the package whose contents are unclear."), slot("fixed_question", 5, "Bottom caption is the fixed demand to see inside.", "(?i)^what['’]?s in the box[!?]*$")],
        ["The first line must name something presented as complete while its actual contents remain unknown."],
        ["The all-inclusive AI contract", "What's in the box?"],
        "rejected",
        "Reaction from the climax of the film Se7en, whose concealed box contains evidence of a murder.",
        "The recognizable meaning depends on a violent murder reveal.",
        "The violence is not incidental to the template's suspense, so it fails the injury and disaster gate.",
        ["The original Se7en reveal", "ScreenRant's collection of Se7en caption variants", "Memegen's fixed 'What's in the box!?' rendering"],
    ),
    "cake": item(
        "Office Space Milton",
        "A promised benefit or resource quietly fails to appear.",
        "Set the occasion on top and adapt the fixed complaint below. The missing item should have been explicitly promised, not merely hoped for.",
        ["Do not use for a vague disappointment.", "Do not make an employee's exclusion the joke."],
        [slot("occasion", 6, "Top caption names the event or promise."), slot("missing_promise", 9, "Bottom caption begins with the fixed complaint.", "(?i)^i was told there would be .+")],
        ["The missing item must be something the setup explicitly led the subject to expect."],
        ["The AI pilot kickoff", "I was told there would be data access"],
        "active",
        "Milton's repeated cake complaint in the 1999 workplace comedy Office Space.",
        "Fictional workplace character. Keep the target on a missing organizational promise, not employee exclusion.",
        "Adds broken organizational promises in a workplace-native format.",
        ["Milton expects birthday cake in the film clip", "The fixed 'I was told there would be cake' catalog render", "Phrase reused for an expected attraction or benefit that never appears"],
    ),
    "disastergirl": item(
        "Disaster Girl",
        "A calm observer appears to have caused the destruction behind them.",
        "Name the plan or result, then imply smug responsibility.",
        ["Do not use real disasters.", "Do not imply a named person caused harm."],
        [slot("destructive_result", 7, "Top caption names the destructive result."), slot("smug_admission", 6, "Bottom caption implies it was planned.")],
        ["The background destruction is the reason the calm expression reads as culpable."],
        ["The rollout deleted production", "Just as I planned"],
        "rejected",
        "A 2005 photograph of a child watching firefighters conduct a controlled burn, later edited into disaster scenes.",
        "The joke depends on fire and implied responsibility for destruction.",
        "Directly conflicts with the catalog's disaster gate.",
        ["The fixed 'just as I planned' fire image", "Edits placing the subject before larger disasters", "KYM's documented 'I told you she was no good' variation"],
    ),
    "dragon": item(
        "What Color Do You Want Your Dragon",
        "A supposedly ordinary request is treated as less realistic than receiving a dragon.",
        "Use the one editable line for the initial request. It should sound reasonable to the requester but impossible under the stated constraints.",
        ["Do not ask for a genuinely trivial thing.", "Do not require the reader to know missing dialogue outside the template."],
        [slot("impossible_request", 9, "The editable speech bubble contains the request rejected as unrealistic.")],
        ["The fixed dragon offer must be easier than granting the editable request."],
        ["A reliable model with no evaluation budget"],
        "hold",
        "An illustrated Tumblr exchange in which a request for a boyfriend is judged less realistic than a dragon.",
        "Illustrated fictional exchange. Avoid stereotypes about relationships or protected traits.",
        "The impossible-constraints relationship is useful, but the editable bubble is too small at the audited 360px width.",
        ["Asking for a boyfriend instead of a dragon, original comic", "Asking two political parties to respect each other, KYM gallery", "Accidentally upgrading to Windows 11, KYM gallery"],
    ),
    "elf": item(
        "You Sit on a Throne of Lies",
        "A confident assurance is dismissed as obviously false.",
        "Put the assurance on top and preserve the fixed accusation below. Use only when the post has evidence that contradicts the assurance.",
        ["Do not accuse a named company or person of lying without strong evidence.", "Do not use for uncertainty or a mere prediction miss."],
        [slot("false_assurance", 8, "Top caption states the contradicted assurance."), slot("fixed_rebuke", 8, "Bottom caption preserves the established rebuke.", "(?i)^you sit on a throne of lies[.!]*$")],
        ["The post must contain evidence that makes the assurance false, not debatable."],
        ["The vendor says setup takes one day", "You sit on a throne of lies"],
        "active",
        "Buddy confronts a department-store Santa in the 2003 film Elf; the phrase became a reaction to false statements.",
        "Fictional confrontation. Restrict accusations to substantiated claims or generic/self-directed examples.",
        "Adds blunt evidence-backed contradiction, stronger than Agnes's knowing wink.",
        ["Calling clickbait advertising false, KYM gallery", "Rejecting a coach's promise of easy practice, KYM gallery", "Rejecting a professor's promise of an easy final, KYM gallery"],
    ),
    "friends": item(
        "Are You Two Friends?",
        "Two parties give incompatible answers about whether they are aligned.",
        "Label the outside observer first, then the party that says yes and the party that says no. Use a real asymmetry in incentives or expectations.",
        ["Do not use for two parties who simply disagree on a topic.", "Do not swap the yes and no roles after rendering."],
        [slot("questioner", 4, "First overlay labels the person asking about the relationship."), slot("no_party", 4, "Second overlay labels the left character, who answers no."), slot("yes_party", 4, "Third overlay labels the right character, who answers yes.")],
        ["One labeled party must plausibly answer yes and the other no to the same relationship question."],
        ["Executive sponsor", "Production ops", "Pilot team"],
        "active",
        "A Star Trek: Voyager exchange in which Tuvok says he and Paris are friends while Paris says they are not.",
        "Fictional dialogue. Use organizational roles, not protected groups or political caricatures.",
        "Adds asymmetric alignment, a common source of failed internal AI programs.",
        ["Liberals say yes while leftists say no, KYM", "Paladin says yes while rogue says no, KYM", "Vegetarian says yes while vegan says no, KYM"],
    ),
    "headaches": item(
        "Types of Headaches",
        "One process or condition causes pain far beyond the ordinary categories shown beside it.",
        "Use the editable final label for a specific operational nuisance whose repeated burden is the joke.",
        ["Do not joke about a person's illness.", "Do not use a broad topic such as 'AI' without naming the actual burden."],
        [slot("worst_pain", 4, "The editable fourth label names the outsized operational pain.")],
        ["The custom condition must be plausibly more frustrating than the three fixed headache categories in the image."],
        ["Re-keying orders"],
        "active",
        "A headache-location infographic turned into a four-panel comparison with a fully red final head.",
        "Medical imagery, but no victim or injury. Keep the comparison figurative and work-related.",
        "Adds a compact way to show cumulative operational pain.",
        ["Living in the UK as the worst headache, KYM", "Needing to find the Avatar, KYM", "Minor criticism as the worst headache, KYM"],
    ),
    "interesting": item(
        "The Most Interesting Man in the World",
        "A rare behavior is paired with the speaker's reliably distinctive way of doing it.",
        "Preserve the 'I don't always' and 'but when I do' syntax. The second line should expose a specific habit, contradiction, or preference.",
        ["Do not use as generic self-praise.", "Do not drop the fixed two-part syntax."],
        [slot("rare_behavior", 9, "Top caption begins the fixed rarity setup.", "(?i)^i don['’]?t always .+"), slot("distinctive_habit", 10, "Bottom caption completes the fixed exception.", "(?i)^but when i do[,]? .+")],
        ["The second line must describe what reliably happens on the rare occasions named in line one."],
        ["I don't always automate a process", "But when I do, I keep the exception queue"],
        "active",
        "Advice-animal macro based on Jonathan Goldsmith's Dos Equis advertisement and its 'I don't always ... but when I do' line.",
        "Commercial character and actor likeness. Avoid implying endorsement or copying beer branding into the caption.",
        "Adds a strong fixed syntax for revealing an uncommon but consistent operating habit.",
        ["Checking the time twice because it was forgotten, MemeFact", "Carrying groceries until keys are inaccessible, MemeFact", "Taking out recycling and looking like a heavy drinker, KYM"],
    ),
    "ive": item(
        "Jony Ive Redesigns Things",
        "A polished redesign removes or obscures something people actually need.",
        "Name the removed function first, then use a polished assurance below. The joke is misplaced design confidence, not appearance alone.",
        ["Do not attack Jony Ive personally.", "Do not use for an ordinary visual redesign with no lost function."],
        [slot("removed_function", 7, "Top caption names what the redesign removed."), slot("polished_assurance", 7, "Bottom caption gives the confident product-language reassurance.")],
        ["The redesign must make the underlying task harder while presenting itself as an improvement."],
        ["We removed the exception queue", "We think you'll love it"],
        "hold",
        "Memegen attributes the image to Apple's former design chief, but its source points to an Apple biography rather than a cultural-history page.",
        "Real identifiable executive. The current evidence does not establish the template's mutation or accepted caption structure.",
        "Hold until a cultural source and three documented uses verify the redesign relationship.",
        ["Memegen's 'we think / you'll love it' render", "Minimal product-copy parody", "Removing a needed feature while presenting it as refinement"],
    ),
    "jw": item(
        "Probably Not a Good Idea",
        "A concrete reckless action receives an understated warning after it is proposed or revealed.",
        "State the questionable action as a direct question, then preserve the calm verdict. Use a specific operational decision, not general AI anxiety.",
        ["Do not turn the warning into fear bait.", "Do not use when the downside is merely uncertain."],
        [slot("reckless_action", 10, "Top caption asks whether the risky action really happened."), slot("fixed_verdict", 7, "Bottom caption is the understated fixed judgment.", "(?i)^probably not a good idea[.!]*$")],
        ["The post must explain the foreseeable downside of the specific action."],
        ["You gave the agent production write access?", "Probably not a good idea"],
        "active",
        "Chris Pratt's Jurassic World character reacts to the creation of a new dinosaur in the film's 2014 trailer.",
        "Fictional film character. Avoid using it for vague catastrophe predictions.",
        "Adds dry understatement after a concrete risky decision.",
        ["Creating a new dinosaur, Memegen", "Going to a movie before Black Friday shopping, KYM photo", "Question followed by the fixed understated warning"],
    ),
    "khaby-lame": item(
        "Khaby Lame Shrug",
        "An elaborate workaround loses to an obvious, simpler method.",
        "Put the overengineered method first and the direct alternative second. Both must solve the same problem.",
        ["Do not use for two mere preferences.", "Do not imply that a complex task is easy when the post shows otherwise."],
        [slot("overcomplicated_method", 7, "Top-left caption names the unnecessary workaround."), slot("obvious_method", 7, "Bottom-left caption names the direct alternative indicated by the shrug.")],
        ["Both lines must pursue the same outcome, and the second must remove needless steps."],
        ["Build a chatbot for every policy", "Fix policy search"],
        "active",
        "Khaby Lame's 2021 reaction to a contrived pizza life hack, followed by a shrug toward the obvious method.",
        "Real creator likeness. Keep the contrast on methods and never on identity or ability.",
        "Adds a familiar overengineering-versus-direct-fix relationship.",
        ["Pulling pizza apart instead of using a plastic saver, original", "Simple programming swap, KYM", "Paying workers more instead of debating a labor shortage, KYM gallery"],
    ),
    "kramer": item(
        "Kramer, What's Going On In There?",
        "A visible symptom prompts a question and receives an unexpectedly specific explanation.",
        "Keep the first line as a question about the odd visible result. The second line names the surprising mechanism in plain language.",
        ["Do not use a generic 'AI is weird' explanation.", "Do not make the answer longer than the image can carry."],
        [slot("symptom_question", 8, "Top dialogue asks what is causing the visible anomaly."), slot("unexpected_cause", 10, "Bottom dialogue gives the specific, surprising cause.")],
        ["The second line must actually explain the first line's visible anomaly."],
        ["Why is the queue turning red?", "The agent approved its own exceptions"],
        "active",
        "A Seinfeld apartment scene whose red light is repeatedly relabeled with strange fictional causes.",
        "Fictional sitcom scene. Keep explanations about systems, not groups or people.",
        "Adds symptom-to-unexpected-cause storytelling.",
        ["A dimensional merge causes the red light, KYM", "Arrakis causes the red light, KYM", "A Balrog causes the red light, KYM"],
    ),
    "light": item(
        "Everything the Light Touches is Our Kingdom",
        "A proud claim of broad scope is immediately bounded by one conspicuous excluded area.",
        "Ask about the excluded area first and answer with the boundary second. Use a real ownership, access, or support boundary.",
        ["Do not use for an arbitrary disliked thing.", "Do not hide the boundary that makes the post's claim accurate."],
        [slot("boundary_question", 8, "First dialogue asks about the conspicuous excluded area."), slot("scope_answer", 11, "Second dialogue states that the area is outside the claimed scope.")],
        ["The excluded area must materially limit the broad scope implied by the image."],
        ["What about production exceptions?", "That's beyond the pilot. You must never go there."],
        "active",
        "The Lion King scene defining the kingdom and warning Simba away from the shadowy place became a scope and gatekeeping macro.",
        "Animated fictional characters. Avoid political or protected-group gatekeeping.",
        "Adds explicit scope boundaries, a recurring truth in AI pilots.",
        ["Warning newcomers away from 4chan, early example documented by KYM", "Relabeling the shadowy place as a forbidden fandom, KYM", "Questioning whether the light really covers everything, KYM"],
    ),
    "nails": item(
        "Guy Hammering Nails Into Sand",
        "A tool or representation tries futilely to impose stable boundaries on something that will not hold them.",
        "Label the actor, the method, and the unstable medium. The method should be structurally incapable of controlling the medium.",
        ["Do not use for generic hard work.", "Do not claim futility when the method merely needs improvement."],
        [slot("actor", 4, "First label names who is trying to impose order."), slot("method", 4, "Second label names the rigid tool or representation."), slot("unstable_medium", 8, "Third label names what cannot hold the imposed boundary.")],
        ["The method must fail because the target cannot retain the imposed structure."],
        ["The governance team", "A static checklist", "An agent that changes tools mid-run"],
        "hold",
        "A photograph cataloged by Memegen, Imgflip, and OldMeme; no reliable cultural-origin account was found.",
        "No obvious harmful subject, but the source and established caption relationship remain weakly documented.",
        "Hold until a cultural source establishes familiarity and the three-label relation beyond isolated catalog examples.",
        ["Language trying to bound an indescribable universe, Memegen", "Pretending to work when the boss arrives, catalog tag", "Programming data structures trying to capture fluid reality, Reddit description"],
    ),
    "philosoraptor": item(
        "Philosoraptor",
        "A familiar premise leads to a playful paradox or semantic question.",
        "State the premise first and make the second line a genuine twist created by the premise. Prefer wordplay over fake profundity.",
        ["Do not use as a generic question card.", "Do not present a factual claim as a paradox without checking it."],
        [slot("premise", 10, "Top caption states the familiar premise."), slot("paradox_question", 11, "Bottom caption asks the playful consequence.")],
        ["The question must follow from the wording or logic of the premise, not merely share a topic."],
        ["If the AI learned from our old process", "Is automation just faster institutional memory?"],
        "active",
        "Advice-animal illustration of a contemplative velociraptor used for absurd philosophical questions and paradoxes.",
        "Illustrated animal. Avoid laundering misinformation as a clever question.",
        "Adds genuine premise-to-paradox wordplay.",
        ["Dropped soap: is the floor clean or soap dirty, KYM", "Expecting the unexpected makes it expected, KYM", "A night guard at Samsung as a Guardian of the Galaxy, MemeFact"],
    ),
    "spirit": item(
        "Fake Spirit Halloween Costume",
        "A recognizable organizational type is packaged as a costume with a revealing inventory of traits.",
        "Name the role, preserve 'Includes:', and list three concrete artifacts or habits. The list should reveal the type without insults.",
        ["Do not target a protected class or individual employee.", "Do not use three synonyms as the included items."],
        [slot("costume_name", 5, "First line names the organizational type on the package."), slot("fixed_includes", 2, "Second line preserves the package label.", "(?i)^includes:?$"), slot("included_one", 5, "Third line is the first concrete included trait."), slot("included_two", 5, "Fourth line is the second concrete included trait."), slot("included_three", 5, "Fifth line is the third concrete included trait.")],
        ["The three included items must be distinct, concrete evidence of the named type."],
        ["Enterprise AI pilot", "Includes:", "A polished demo", "No data owner", "Six steering committees"],
        "active",
        "Edits of Spirit Halloween costume packaging became a format for labeling a character type and listing its recognizable contents.",
        "Corporate parody is acceptable. Avoid protected groups, appearance, or demeaning employee stereotypes.",
        "Adds an inventory joke that can expose the ingredients of a familiar failure pattern.",
        ["Random person in direct messages with stock messages, KYM", "Hiring manager costume with impossible candidate requirements, KYM", "Qualified candidate costume listing contradictory requirements, KYM"],
    ),
    "spongebob": item(
        "Mocking Spongebob",
        "A statement is repeated in alternating case to belittle the speaker.",
        "Repeat the claim in mocking typography.",
        ["Do not ridicule a person or group.", "Do not substitute mockery for a factual rebuttal."],
        [slot("original_claim", 10, "Top caption quotes the statement."), slot("mocked_repeat", 10, "Bottom caption repeats it in alternating case.")],
        ["The second line must mock the first line rather than add an argument."],
        ["We don't need evaluation", "wE dOn'T nEeD eVaLuAtIoN"],
        "rejected",
        "A SpongeBob reaction image used specifically to mimic and ridicule another person's statement.",
        "Its established mechanism is humiliation rather than clarification.",
        "Conflicts with the operator-not-fool rule and rewards unsupported sneering.",
        ["Repeating a boyfriend's denial in alternating case, MemeFact", "Mocking a warning about calculators, KYM", "Mocking a Star Wars line, KYM"],
    ),
    "stop": item(
        "Stop It Patrick You're Scaring Him",
        "A misunderstood label escalates through six dialogue turns until the subject panics.",
        "Preserve the six-turn misunderstanding. Keep every turn extremely short and make the false definition drive the escalation.",
        ["Do not use mental health, protected identity, or a real person's fear.", "Do not squeeze explanatory prose into the six panels."],
        [slot("self_label", 5, "First dialogue states the condition or role."), slot("definition_question", 5, "Second dialogue asks what it means."), slot("wrong_definition", 7, "Third dialogue gives the comic misunderstanding."), slot("correction", 4, "Fourth dialogue rejects that definition."), slot("trigger", 4, "Fifth dialogue performs the misunderstood trigger."), slot("fixed_warning", 8, "Sixth dialogue tells Patrick to stop.")],
        ["The wrong definition must directly motivate the fifth-line trigger and final reaction."],
        ["I'm scared of autonomous agents", "What does that mean?", "He fears every spreadsheet", "No, I don't", "Pivot table noises", "Stop it, Patrick, you're scaring him"],
        "hold",
        "A six-panel SpongeBob exchange about misunderstanding claustrophobia as fear of Santa Claus.",
        "The original hinges on fear and the six captions risk unreadable mobile text.",
        "Hold pending an exact phone-size render that proves six short lines remain readable without identity jokes.",
        ["Claustrophobia misunderstood as fear of Santa, original", "Germaphobia misunderstood as fear of Germany, KYM", "A game role misunderstood as fear of everything, KYM"],
    ),
    "vince": item(
        "Vince McMahon Reaction",
        "Three options or revelations produce escalating excitement.",
        "Order three genuinely stronger benefits from good to extraordinary. Each line should be comparable on the same dimension.",
        ["Do not use merely different options.", "Do not use sexual or body-focused material from the original footage."],
        [slot("good_option", 5, "First panel labels the good option."), slot("better_option", 5, "Second panel labels the stronger option."), slot("best_option", 5, "Third panel labels the strongest option.")],
        ["Each successive item must intensify the same benefit or preference."],
        ["Find the answer", "Show the source", "Open the exact maintenance step"],
        "hold",
        "Reaction sequence built from WWE footage of Vince McMahon showing escalating amazement.",
        "Real executive likeness. The source footage objectifies a performer, and current allegations create unrelated public-figure baggage.",
        "Useful escalation structure, but hold because the recognizable subject now carries distracting safety baggage.",
        ["Gas stoves to LCDs to solid-state drives to plasma TVs, KYM", "Tired to warm blanket to cool pillow to rain, KYM", "Delivery speed escalating to immediate store purchase, Memegen"],
    ),
    "whatyear": item(
        "What Year Is It?",
        "An outdated practice or uncanny recurrence makes the observer feel displaced in time.",
        "Name one concrete anachronistic practice on top and preserve the fixed question below.",
        ["Do not use for a merely old technology still fit for purpose.", "Do not stack a long list of nostalgic references."],
        [slot("anachronism", 8, "Top caption names the practice that feels out of time."), slot("fixed_question", 5, "Bottom caption preserves the fixed disoriented question.", "(?i)^what year is (it|this)[!?]*$")],
        ["The first line must establish why the present situation feels like a different era."],
        ["Copying orders from email into ERP", "What year is it?"],
        "active",
        "Robin Williams's newly freed character in Jumanji asks the year after 26 years trapped in the game.",
        "Actor likeness. Keep the joke on outdated processes, not the actor or mental state.",
        "Adds a concise anachronism reaction well suited to legacy workflows.",
        ["A Bush and Clinton running while Jurassic Park leads the box office, KYM", "Blink-182 and Pokemon returning together, KYM", "Gas below a remembered price, MemeFact"],
    ),
    "wkh": item(
        "Who Killed Hannibal?",
        "The actor who caused the failure immediately blames an unrelated party.",
        "Label the harmed result, the responsible actor, and the false accusation.",
        ["Do not depict or joke about violence.", "Do not accuse a real organization without evidence."],
        [slot("harmed_result", 5, "First label names what the actor damages."), slot("responsible_actor", 5, "Second label names the actor causing the damage."), slot("false_blame", 8, "Third caption blames someone else.")],
        ["The second role must directly cause the first outcome and the final line must redirect blame."],
        ["The support queue", "The rushed rollout", "Why would users do this?"],
        "rejected",
        "An Eric Andre Show sketch in which Andre shoots Hannibal Buress and asks who killed him.",
        "The visible shooting is inseparable from the established self-caused-blame joke.",
        "Fails the campaign's violence and injury gate despite its useful blame-shifting relationship.",
        ["Schools harm student health then blame video games, MemeFact", "Humanity damages the environment then blames cold weather, KYM", "A meme community ruins its own format then blames newcomers, KYM"],
    ),
}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    renderer = {row["id"]: row for row in json.loads((BASE / "raw/candidate-renderer-rows.json").read_text())}
    evidence = {}
    contracts = {}
    for template_id, row in ITEMS.items():
        contract = row["contract"]
        source = renderer[template_id]
        if template_id == "dragon":
            visual_qa = "FAIL: the editable speech bubble remains too small at the audited 360px width, even with a short example."
        elif template_id == "stop":
            visual_qa = "FAIL: six independent dialogue captions are too small to scan at the audited 360px width."
        else:
            visual_qa = "PASS: every caption and image role remains readable in the exact 360px contact-sheet tile."
        assert len(contract["slots"]) == source["lines"]
        contracts[template_id] = {
            **contract,
            "evidence": {
                "renderer_id": template_id,
                "renderer_lines": source["lines"],
                "source_url": source.get("source", ""),
                "source_file": f"{SOURCE}/raw/{template_id}.html",
                "retrieved": RETRIEVED,
                "detail": f"{SOURCE}/candidate-evidence.json#{template_id}",
            },
            "assessment": {
                "origin": row["origin"],
                "safety": row["safety"],
                "legibility": visual_qa,
                "rights_status": "fair-use-review",
                "admission_rationale": row["admission_rationale"],
            },
        }
        evidence[template_id] = {
            "renderer_id": template_id,
            "renderer_lines": source["lines"],
            "proposed_admission": row["proposed_admission"],
            "admission_rationale": row["admission_rationale"],
            "origin": row["origin"],
            "source_url": source.get("source", ""),
            "semantic_source_url": json.loads((BASE / "raw/index.json").read_text())["sources"][template_id]["final_url"],
            "source_file": f"raw/{template_id}.html",
            "retrieved": RETRIEVED,
            "representative_uses": row["representative_uses"],
            "examples_file": "raw source page plus preserved renderer and MemeFact snapshots",
            "rights_status": "fair-use-review",
            "rights_basis": "No compatible licence or exact-asset permission identified. Catalog access and renderer licensing do not clear the template art.",
            "safety": row["safety"],
            "slot_mapping": [{"key": s["key"], "role": s["role"]} for s in contract["slots"]],
            "visual_qa": visual_qa,
            "final_admission": row["proposed_admission"],
            "render_file": f"rendered/{template_id}.jpg",
            "reviewed_at": RETRIEVED,
        }
    (args.output / "candidate-evidence.json").write_text(json.dumps(evidence, indent=2) + "\n")
    (args.output / "contracts-wave2.json").write_text(json.dumps(contracts, indent=2) + "\n")


if __name__ == "__main__":
    main()
