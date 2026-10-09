#!/usr/bin/env python3
"""Build the selector index from reviewed contracts and preserved catalog evidence."""

from __future__ import annotations

import csv
import hashlib
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CONTRACTS = ROOT / ".skills/social-meme-campaign/references/template-contracts.json"
MEMEGEN = ROOT / "research/social-meme-template-catalog/raw/memegen-templates.json"
IMGFLIP = ROOT / "research/social-meme-template-catalog/raw/imgflip-popular-templates.json"
SEMANTIC_INDEX = ROOT / "research/social-meme-template-catalog/raw/semantic-sources/index.json"
OUTPUT = ROOT / ".skills/meme-angle-selector/references/template-selection-index.json"


FAMILY_BY_ID = {
    "ackbar": "danger_warning", "ants": "danger_warning", "ski": "danger_warning",
    "db": "temptation_abandonment", "exit": "temptation_abandonment", "balloon": "temptation_abandonment", "bilbo": "temptation_abandonment",
    "drake": "preference_contrast", "perfection": "preference_contrast", "home": "preference_contrast", "money": "preference_contrast",
    "ds": "choice_conflict", "both": "choice_conflict", "ntot": "choice_conflict",
    "gb": "escalation", "oprah": "escalation", "xy": "escalation", "buzz": "escalation",
    "gru": "plan_reversal", "panik-kalm-panik": "plan_reversal", "gone": "plan_reversal", "success": "plan_reversal",
    "handshake": "equivalence_mirror", "same": "equivalence_mirror", "spiderman": "equivalence_mirror",
    "mordor": "hidden_constraint", "genie": "hidden_constraint", "center": "hidden_constraint",
    "pigeon": "misclassification", "inigo": "misclassification", "reveal": "misclassification", "glasses": "misclassification",
    "rollsafe": "false_logic", "stonks": "false_logic", "touch": "false_logic", "noidea": "delayed_admission",
    "3hd": "peer_mismatch", "aag": "causal_oversimplification", "afraid": "delayed_admission",
    "bender": "self_built_rejection", "bihw": "modest_legitimacy", "nice": "modest_legitimacy",
    "bus": "perspective_split", "kombucha": "perspective_split", "dbg": "expectation_reality", "facepalm": "expectation_reality",
    "dwight": "literal_correction", "fetch": "trend_rejection", "say": "trend_rejection", "fry": "ambiguity",
    "gears": "complaint", "made": "credit_ownership", "mouth": "credit_ownership", "patrick": "relocation_as_solution",
    "agnes": "knowing_falsehood", "biw": "tiny_rebellion", "boat": "impulsive_expansion",
    "gandalf": "institutional_memory", "remembers": "institutional_memory", "wddth": "institutional_memory",
    "morpheus": "revelation", "officespace": "coerced_request", "yodawg": "recursive_absurdity",
    "cake": "expectation_reality", "elf": "knowing_falsehood", "friends": "equivalence_mirror",
    "headaches": "complaint", "interesting": "habit_exception", "jw": "danger_warning",
    "khaby-lame": "false_logic", "kramer": "causal_reveal", "light": "hidden_constraint",
    "philosoraptor": "semantic_paradox", "spirit": "type_reveal", "whatyear": "institutional_memory",
}


FAMILY_META = {
    "danger_warning": (["foreseeable_consequence", "recognition"], ["cautionary", "dry"]),
    "temptation_abandonment": (["temptation", "neglect", "self_sabotage"], ["cautionary", "incredulous"]),
    "preference_contrast": (["contrast", "rejection_and_choice"], ["decisive", "playful"]),
    "choice_conflict": (["dilemma", "contradiction", "false_choice"], ["frustrated", "playful"]),
    "escalation": (["repetition", "exaggeration", "scale_shift"], ["incredulous", "energetic"]),
    "plan_reversal": (["reversal", "reveal", "expectation_break"], ["cautionary", "wry"]),
    "equivalence_mirror": (["comparison", "recognition", "unexpected_similarity"], ["dry", "knowing"]),
    "hidden_constraint": (["constraint_reveal", "scale_mismatch"], ["incredulous", "dry"]),
    "misclassification": (["mislabeling", "unmasking", "perspective_correction"], ["dry", "corrective"]),
    "false_logic": (["irony", "self_defeating_logic", "overconfidence"], ["cautionary", "sarcastic"]),
    "peer_mismatch": (["comparison", "incongruity", "status_mismatch"], ["playful", "incredulous"]),
    "causal_oversimplification": (["absurd_attribution", "oversimplification"], ["sarcastic", "incredulous"]),
    "delayed_admission": (["self_own", "delayed_reveal"], ["self_aware", "awkward"]),
    "self_built_rejection": (["boast", "overcorrection", "wish_fulfillment"], ["defiant", "self_aware"]),
    "modest_legitimacy": (["understatement", "silver_lining"], ["wry", "warm"]),
    "perspective_split": (["reinterpretation", "reaction_change", "contrast"], ["reflective", "wry"]),
    "expectation_reality": (["contradiction", "disappointment", "reaction"], ["frustrated", "incredulous"]),
    "literal_correction": (["literalism", "pedantic_correction"], ["dry", "corrective"]),
    "trend_rejection": (["social_pressure", "predictable_repetition"], ["weary", "teasing"]),
    "ambiguity": (["suspicion", "alternative_explanations"], ["skeptical", "dry"]),
    "complaint": (["specific_grievance", "recognition"], ["frustrated", "comic"]),
    "credit_ownership": (["credit_reversal", "suppressed_truth", "role_inversion"], ["critical", "knowing"]),
    "relocation_as_solution": (["false_solution", "literalization"], ["deadpan", "incredulous"]),
    "knowing_falsehood": (["wink", "irony", "shared_secret"], ["knowing", "skeptical"]),
    "tiny_rebellion": (["overstatement", "scale_mismatch"], ["playful", "self_aware"]),
    "impulsive_expansion": (["overreaction", "leap_in_scope"], ["playful", "self_aware"]),
    "institutional_memory": (["nostalgia", "norm_inversion", "recognition_failure"], ["wry", "reflective"]),
    "revelation": (["assumption_flip", "counterintuitive_fact"], ["calm", "surprising"]),
    "coerced_request": (["passive_aggression", "understatement"], ["dry", "annoyed"]),
    "recursive_absurdity": (["recursion", "repetition", "nested_problem"], ["absurd", "playful"]),
    "habit_exception": (["fixed_exception", "character_habit", "self_portrait"], ["dry", "self_aware"]),
    "causal_reveal": (["specific_explanation", "surprise_cause"], ["incredulous", "curious"]),
    "semantic_paradox": (["wordplay", "logical_twist", "question"], ["playful", "reflective"]),
    "type_reveal": (["trait_inventory", "archetype_recognition"], ["satirical", "knowing"]),
}


IMGFLIP_ALIASES = {
    "aag": ["Ancient Aliens"], "drake": ["Drake Hotline Bling"], "ds": ["Two Buttons"],
    "gb": ["Expanding Brain"], "oprah": ["Oprah You Get A"], "reveal": ["Scooby doo mask reveal"],
    "rollsafe": ["Roll Safe Think About It"], "say": ["say the line bart! simpsons"],
    "yodawg": ["Yo Dawg Heard You"], "headaches": ["Types of Headaches meme"],
}


FALLBACK_NEIGHBORS = {
    "3hd": ["handshake", "same"], "aag": ["rollsafe", "morpheus"], "afraid": ["noidea", "gandalf"],
    "bender": ["boat", "home"], "dwight": ["inigo", "morpheus"], "fry": ["agnes", "dbg"],
    "gears": ["facepalm", "officespace"], "patrick": ["rollsafe", "yodawg"], "agnes": ["fry", "reveal"],
    "biw": ["center", "nice"], "boat": ["bender", "xy"], "morpheus": ["glasses", "dwight"],
    "officespace": ["gears", "mouth"], "yodawg": ["patrick", "buzz"],
    "interesting": ["say", "bihw"], "kramer": ["aag", "morpheus"],
    "philosoraptor": ["fry", "morpheus"], "spirit": ["3hd", "reveal"],
    "fetch": ["say", "wddth"], "say": ["fetch", "oprah"],
    "bihw": ["nice", "success"], "nice": ["bihw", "success"],
    "bus": ["kombucha", "glasses"], "kombucha": ["bus", "glasses"],
    "made": ["mouth", "handshake"], "mouth": ["made", "officespace"],
    "drake": ["perfection", "home"], "balloon": ["db", "exit"],
    "headaches": ["gears", "center"], "noidea": ["afraid", "gandalf"],
}


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.casefold())


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def repo_source_path(value: str) -> str:
    if value.startswith("raw/"):
        return f"research/social-meme-template-catalog/{value}"
    return value


def main() -> None:
    document = json.loads(CONTRACTS.read_text(encoding="utf-8"))
    active = document["admission"]["active"]
    if set(active) != set(FAMILY_BY_ID):
        missing = sorted(set(active) - set(FAMILY_BY_ID))
        extra = sorted(set(FAMILY_BY_ID) - set(active))
        raise SystemExit(f"Family map mismatch. missing={missing} extra={extra}")

    contracts = document["templates"]
    memegen_rows = json.loads(MEMEGEN.read_text(encoding="utf-8"))
    memegen_by_id = {row["id"]: row for row in memegen_rows}
    imgflip_rows = json.loads(IMGFLIP.read_text(encoding="utf-8"))["data"]["memes"]
    imgflip_by_name = {normalize(row["name"]): row for row in imgflip_rows}
    semantic = json.loads(SEMANTIC_INDEX.read_text(encoding="utf-8"))["templates"]

    groups: dict[str, list[str]] = {}
    for template_id in active:
        groups.setdefault(FAMILY_BY_ID[template_id], []).append(template_id)

    output: dict[str, object] = {
        "version": 1,
        "generated": "2026-09-29",
        "active_catalog_sha256": sha256(CONTRACTS),
        "sources": {
            "contracts": str(CONTRACTS.relative_to(ROOT)),
            "memegen_snapshot": str(MEMEGEN.relative_to(ROOT)),
            "imgflip_snapshot": str(IMGFLIP.relative_to(ROOT)),
            "semantic_source_index": str(SEMANTIC_INDEX.relative_to(ROOT)),
        },
        "familiarity_note": "Current Imgflip top-100 placement is a volatile familiarity proxy, not a quality or rights signal. Established templates outside that snapshot remain unmeasured.",
        "templates": {},
    }

    entries = output["templates"]
    assert isinstance(entries, dict)
    for template_id in active:
        contract = contracts[template_id]
        renderer = memegen_by_id[template_id]
        family = FAMILY_BY_ID[template_id]
        mechanisms, affects = FAMILY_META[family]

        names = [contract["name"], *IMGFLIP_ALIASES.get(template_id, [])]
        popular = next((imgflip_by_name.get(normalize(name)) for name in names if normalize(name) in imgflip_by_name), None)
        if popular:
            familiarity = {
                "tier": "current_top_100_proxy",
                "evidence": f"Imgflip top-100 snapshot lists {popular['name']} with {popular['captions']} generated captions.",
                "source": str(IMGFLIP.relative_to(ROOT)),
                "date": "2026-08-11",
            }
        else:
            source_meta = semantic.get(template_id, {})
            contract_evidence = contract.get("evidence", {})
            familiarity = {
                "tier": "established_unmeasured",
                "evidence": "Established in the reviewed local catalog, but absent from the preserved Imgflip top-100 snapshot; no current audience-frequency claim is made.",
                "source": repo_source_path(contract_evidence.get("source_file", source_meta.get("file", str(SEMANTIC_INDEX.relative_to(ROOT))))),
                "date": contract_evidence.get("retrieved", source_meta.get("retrieved", "2026-09-29")),
            }

        same_family = [item for item in groups[family] if item != template_id]
        preferred_neighbors = FALLBACK_NEIGHBORS.get(template_id, [])
        neighbor_ids = preferred_neighbors[:2] if preferred_neighbors else same_family[:2]
        for fallback in preferred_neighbors:
            if fallback != template_id and fallback not in neighbor_ids:
                neighbor_ids.append(fallback)
            if len(neighbor_ids) == 2:
                break
        if len(neighbor_ids) < 2:
            shared = [
                other for other in active
                if other != template_id
                and other not in neighbor_ids
                and set(FAMILY_META[FAMILY_BY_ID[other]][0]).intersection(mechanisms)
            ]
            neighbor_ids.extend(shared[: 2 - len(neighbor_ids)])
        if len(neighbor_ids) < 2:
            raise SystemExit(f"Not enough near neighbors for {template_id}")

        near_neighbors = []
        for other in neighbor_ids[:2]:
            this_meaning = contract["meaning"].rstrip(".").lower()
            other_meaning = contracts[other]["meaning"].rstrip(".").lower()
            near_neighbors.append({
                "template_id": other,
                "distinction": f"Use {contract['name']} when {this_meaning}; use {contracts[other]['name']} when {other_meaning}.",
            })

        audience_baggage = {
            "cultural_context": f"Recognition may depend on familiarity with the {contract['name']} format; this audience-specific recognition has not been measured.",
            "selection_risk": contract["anti_patterns"][0],
        }

        role_lines = [f"<{slot['key'].replace('_', ' ')}>" for slot in contract["slots"]]
        patterns = [
            {"source": "contract_operator_example", "lines": contract["operator_example"]},
            {"source": "memegen_renderer_example", "lines": renderer["example"]["text"]},
            {"source": "contract_slot_pattern", "lines": role_lines},
        ]

        entries[template_id] = {
            "template_id": template_id,
            "name": contract["name"],
            "semantic_family": family,
            "relationship_graph": {
                "roles": [slot["key"].replace("_", " ") for slot in contract["slots"]],
                "relationships": contract["invariants"],
            },
            "humor_mechanisms": mechanisms,
            "affect": affects,
            "audience_baggage": audience_baggage,
            "familiarity_tier": familiarity,
            "near_neighbors": near_neighbors,
            "representative_caption_patterns": patterns,
        }

    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(entries)} active templates to {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
