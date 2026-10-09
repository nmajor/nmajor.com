#!/usr/bin/env python3
"""Validate and compare rendered established-template meme candidates."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path


DIMENSIONS = {
    "relationship_fit",
    "surprise_coherence",
    "compression",
    "operator_recognition",
    "audience_familiarity",
    "voice_target",
    "visual_fluency",
}
ALLOWED_MECHANISMS = {
    "contradiction", "reversal", "hidden_constraint", "misclassification",
    "false_shortcut", "scale_mismatch", "preference_contrast", "false_choice",
    "ownership_mismatch", "recursive_absurdity", "reluctant_update", "institutional_memory",
}
REQUIRED_PAYLOAD = {
    "fact", "expected", "actual", "tension", "target",
    "reader_realization", "tone", "forbidden_targets",
}
CONTRACTS = Path(__file__).resolve().parents[2] / "social-meme-campaign" / "references" / "template-contracts.json"
INDEX = Path(__file__).resolve().parents[1] / "references" / "template-selection-index.json"
ROOT = Path(__file__).resolve().parents[3]


def fail(message: str) -> None:
    raise SystemExit(f"ERROR: {message}")


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def word_count(value: str) -> int:
    return len(re.findall(r"\b[\w$%]+(?:[’'-][\w$%]+)*\b", value, flags=re.UNICODE))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("packet", type=Path)
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args()
    document = json.loads(args.packet.read_text(encoding="utf-8"))

    if document.get("version") != 2:
        fail("packet version must be 2")
    payload = document.get("payload")
    if not isinstance(payload, dict) or set(payload) != REQUIRED_PAYLOAD:
        fail(f"payload must contain exactly: {', '.join(sorted(REQUIRED_PAYLOAD))}")
    if not isinstance(payload["forbidden_targets"], list):
        fail("payload forbidden_targets must be an array")

    contracts = json.loads(CONTRACTS.read_text(encoding="utf-8"))
    active = set(contracts["admission"]["active"])
    scan = document.get("catalog_scan", {})
    if scan.get("contracts_sha256") != sha256(CONTRACTS):
        fail("catalog_scan contracts_sha256 is missing or stale")
    if scan.get("active_count") != len(active):
        fail("catalog_scan active_count does not match the current catalog")
    if scan.get("selection_index_sha256") != sha256(INDEX):
        fail("catalog_scan selection_index_sha256 is missing or stale")
    retrieval = document.get("retrieval")
    if not isinstance(retrieval, list) or not retrieval:
        fail("packet needs retrieval queries and returned template IDs")
    for index, item in enumerate(retrieval, start=1):
        if not isinstance(item, dict) or not isinstance(item.get("query"), str) or not item["query"].strip():
            fail(f"retrieval item {index} needs a query")
        if item.get("mechanism") not in ALLOWED_MECHANISMS:
            fail(f"retrieval item {index} has an unsupported mechanism")
        returned = item.get("returned_templates")
        if not isinstance(returned, list) or not returned or any(template not in active for template in returned):
            fail(f"retrieval item {index} needs non-empty active returned_templates")

    angles = document.get("angles")
    if not isinstance(angles, list) or not 4 <= len(angles) <= 6:
        fail("packet needs four to six angles")
    angle_ids = set()
    angle_mechanisms = {}
    angle_ranks = set()
    kept_angles = set()
    for index, angle in enumerate(angles, start=1):
        if not isinstance(angle, dict) or not all(isinstance(angle.get(key), str) and angle[key].strip() for key in ("id", "mechanism", "line", "truth_check")):
            fail(f"angle {index} needs non-empty id, mechanism, line, and truth_check")
        if angle["id"] in angle_ids:
            fail(f"duplicate angle ID: {angle['id']}")
        if angle["mechanism"] not in ALLOWED_MECHANISMS:
            fail(f"angle {angle['id']} has an unsupported mechanism")
        if not isinstance(angle.get("rank"), int) or isinstance(angle["rank"], bool) or not 1 <= angle["rank"] <= len(angles):
            fail(f"angle {angle['id']} needs a valid rank")
        if angle["rank"] in angle_ranks:
            fail(f"duplicate angle rank: {angle['rank']}")
        angle_ranks.add(angle["rank"])
        if angle.get("decision") not in {"keep", "reject"}:
            fail(f"angle {angle['id']} decision must be keep or reject")
        if angle["decision"] == "keep":
            kept_angles.add(angle["id"])
        angle_ids.add(angle["id"])
        angle_mechanisms[angle["id"]] = angle["mechanism"]
    if len(kept_angles) != 2:
        fail("exactly two angles must be kept before template retrieval")

    candidates = document.get("candidates")
    if not isinstance(candidates, list) or not candidates:
        fail("packet needs a non-empty candidates array")
    ranked = []
    seen = set()
    for index, candidate in enumerate(candidates, start=1):
        template = candidate.get("template")
        if not isinstance(template, str) or template not in active:
            fail(f"candidate {index} is not an active established template")
        if template in seen:
            fail(f"duplicate candidate template: {template}")
        seen.add(template)
        angle = candidate.get("angle")
        if angle not in kept_angles:
            fail(f"candidate {template} must reference a kept angle")

        contract_slots = {slot["key"] for slot in contracts["templates"][template]["slots"]}
        slot_map = candidate.get("slot_map")
        if not isinstance(slot_map, dict) or set(slot_map) != contract_slots:
            fail(f"candidate {template} slot_map must contain exactly: {', '.join(sorted(contract_slots))}")
        if any(not isinstance(value, str) or not value.strip() for value in slot_map.values()):
            fail(f"candidate {template} slot_map values must be non-empty")
        slots = candidate.get("slots")
        expected_slot_order = [slot["key"] for slot in contracts["templates"][template]["slots"]]
        if not isinstance(slots, dict) or list(slots) != expected_slot_order:
            fail(f"candidate {template} slots must preserve contract order: {', '.join(expected_slot_order)}")
        for slot in contracts["templates"][template]["slots"]:
            key = slot["key"]
            value = slots.get(key)
            if not isinstance(value, str) or not value.strip():
                fail(f"candidate {template} slot {key} is missing")
            if word_count(value) > slot["max_words"]:
                fail(f"candidate {template} slot {key} exceeds max_words")
            if slot.get("required_regex") and not re.search(slot["required_regex"], value):
                fail(f"candidate {template} slot {key} fails required_regex")
            if slot.get("equal_to") and value != slots.get(slot["equal_to"]):
                fail(f"candidate {template} slot {key} must equal {slot['equal_to']}")

        hard_fail = candidate.get("hard_fail")
        hard_reason = candidate.get("hard_fail_reason")
        if not isinstance(hard_fail, bool):
            fail(f"candidate {template} needs boolean hard_fail")
        if hard_fail and (not isinstance(hard_reason, str) or not hard_reason.strip()):
            fail(f"candidate {template} needs hard_fail_reason")
        if not hard_fail and hard_reason not in (None, ""):
            fail(f"candidate {template} has a hard_fail_reason without a hard failure")

        render = candidate.get("render")
        if not isinstance(render, dict):
            fail(f"candidate {template} needs rendered evidence")
        asset_value = render.get("asset") if isinstance(render, dict) else None
        asset = ROOT / asset_value if isinstance(asset_value, str) else None
        if asset is None or not asset.is_file():
            fail(f"candidate {template} rendered asset is missing")
        if render.get("asset_sha256") != sha256(asset):
            fail(f"candidate {template} rendered asset hash is stale")
        if render.get("full_size_qa") != "pass" or render.get("phone_size_qa") != "pass":
            fail(f"candidate {template} must pass full-size and phone-size QA")

        scores = candidate.get("scores")
        reasons = candidate.get("reasons")
        if not isinstance(scores, dict) or set(scores) != DIMENSIONS:
            fail(f"candidate {template} scores must contain exactly the seven rubric dimensions")
        if not isinstance(reasons, dict) or set(reasons) != DIMENSIONS:
            fail(f"candidate {template} reasons must contain exactly the seven rubric dimensions")
        for field, value in scores.items():
            if not isinstance(value, int) or isinstance(value, bool) or not 0 <= value <= 3:
                fail(f"candidate {template} score {field} must be an integer from 0 to 3")
            if not isinstance(reasons[field], str) or not reasons[field].strip():
                fail(f"candidate {template} needs a reason for {field}")
        eligible = (
            not hard_fail
            and scores["relationship_fit"] == 3
            and scores["compression"] >= 2
            and scores["voice_target"] >= 2
            and scores["visual_fluency"] >= 2
        )
        ranked.append({
            "template": template,
            "angle": angle,
            "mechanism": angle_mechanisms[angle],
            "score": sum(scores.values()),
            "eligible": eligible,
            "hard_fail": hard_fail,
        })

    ranked.sort(key=lambda row: (row["eligible"], row["score"]), reverse=True)
    recommendation = document.get("recommendation")
    if not isinstance(recommendation, dict):
        fail("packet needs a recommendation object")
    choice = recommendation.get("template")
    eligible_ids = {row["template"] for row in ranked if row["eligible"]}
    if choice == "NO_MEME_FIT":
        if eligible_ids:
            fail("NO_MEME_FIT requires a reason explaining why all relationship-valid candidates were rejected editorially")
    elif choice not in eligible_ids:
        fail("recommended template must be an eligible candidate or NO_MEME_FIT")
    if not isinstance(recommendation.get("reason"), str) or not recommendation["reason"].strip():
        fail("recommendation needs a pairwise editorial reason")
    if recommendation.get("confidence") not in {"high", "medium", "low"}:
        fail("recommendation confidence must be high, medium, or low")
    alternative = recommendation.get("alternative")
    if alternative is not None:
        if alternative not in eligible_ids or alternative == choice:
            fail("alternative must be a different eligible template")
        by_id = {row["template"]: row for row in ranked}
        if choice != "NO_MEME_FIT" and by_id[alternative]["mechanism"] == by_id[choice]["mechanism"]:
            fail("alternative must use a different joke mechanism")

    result = {"recommendation": recommendation, "ranking": ranked}
    if args.as_json:
        print(json.dumps(result, indent=2))
    else:
        print(f"RECOMMENDATION: {choice} ({recommendation['confidence']})")
        for position, row in enumerate(ranked, start=1):
            state = "ELIGIBLE" if row["eligible"] else "REJECT"
            print(f"{position}. {row['template']} - {row['score']}/21 - {state}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
