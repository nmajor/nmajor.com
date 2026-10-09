#!/usr/bin/env python3
"""Validate semantic meme contracts and their local Memegen asset manifest."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path


SKILL = Path(__file__).resolve().parents[1]
ROOT = SKILL.parents[1]
CONTRACTS_PATH = SKILL / "references" / "template-contracts.json"
ASSETS = SKILL / "assets" / "templates"


def words(value: str) -> int:
    return len(re.findall(r"\b[\w$%]+(?:[’'-][\w$%]+)*\b", value, flags=re.UNICODE))


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def validate_contracts(document: dict) -> list[str]:
    problems: list[str] = []
    if document.get("version") != 2:
        problems.append("contract document version must be 2")
    templates = document.get("templates")
    if not isinstance(templates, dict) or not templates:
        return problems + ["templates must be a non-empty object"]
    review = document.get("admission_review")
    if not isinstance(review, dict):
        problems.append("admission_review is missing")
    else:
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(review.get("date", ""))):
            problems.append("admission_review.date must be YYYY-MM-DD")
        if review.get("rendered_examples") != len(templates):
            problems.append("admission_review.rendered_examples must match the contract count")
        for field in ("report", "source_index"):
            value = review.get(field)
            if not isinstance(value, str) or not (ROOT / value).is_file():
                problems.append(f"admission_review.{field} does not resolve to a file")
    admission = document.get("admission")
    if not isinstance(admission, dict) or set(admission) != {"active", "hold", "rejected"}:
        problems.append("admission must contain exactly active, hold, and rejected lists")
    else:
        admitted: list[str] = []
        for status in ("active", "hold", "rejected"):
            ids = admission[status]
            if not isinstance(ids, list) or not all(isinstance(value, str) for value in ids):
                problems.append(f"admission.{status} must be a string list")
                continue
            admitted.extend(ids)
        if len(admitted) != len(set(admitted)):
            problems.append("admission lists contain duplicate template ids")
        if set(admitted) != set(templates):
            missing = sorted(set(templates) - set(admitted))
            unknown = sorted(set(admitted) - set(templates))
            if missing:
                problems.append("admission is missing: " + ", ".join(missing))
            if unknown:
                problems.append("admission has unknown ids: " + ", ".join(unknown))

    for template_id, contract in templates.items():
        prefix = f"{template_id}: "
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", template_id):
            problems.append(prefix + "invalid template id")
        if not isinstance(contract.get("name"), str) or not contract["name"].strip():
            problems.append(prefix + "`name` is missing")
        for field in ("meaning", "writing_guide"):
            if not isinstance(contract.get(field), str) or len(contract[field].split()) < 4:
                problems.append(prefix + f"`{field}` is missing or too thin")
        for field in ("invariants", "anti_patterns"):
            value = contract.get(field)
            if not isinstance(value, list) or not value or not all(isinstance(x, str) and x.strip() for x in value):
                problems.append(prefix + f"`{field}` must be a non-empty string list")
        slots = contract.get("slots")
        example = contract.get("operator_example")
        if not isinstance(slots, list) or not slots:
            problems.append(prefix + "`slots` must be non-empty")
            continue
        if not isinstance(example, list) or len(example) != len(slots):
            problems.append(prefix + "operator example must have exactly one value per slot")
            continue
        keys: list[str] = []
        values: dict[str, str] = {}
        for index, (slot, value) in enumerate(zip(slots, example), 1):
            key = slot.get("key") if isinstance(slot, dict) else None
            if not isinstance(key, str) or not re.fullmatch(r"[a-z][a-z0-9_]*", key):
                problems.append(prefix + f"slot {index} has an invalid key")
                continue
            if key in keys:
                problems.append(prefix + f"duplicate slot `{key}`")
            keys.append(key)
            if not isinstance(slot.get("max_words"), int) or slot["max_words"] < 1:
                problems.append(prefix + f"slot `{key}` has invalid max_words")
            if not isinstance(value, str) or not value.strip():
                problems.append(prefix + f"operator example `{key}` is blank")
                continue
            values[key] = value
            if words(value) > slot.get("max_words", 0):
                problems.append(prefix + f"operator example `{key}` exceeds max_words")
            regex = slot.get("required_regex")
            if regex:
                try:
                    if not re.search(regex, value):
                        problems.append(prefix + f"operator example `{key}` fails required_regex")
                except re.error as exc:
                    problems.append(prefix + f"slot `{key}` has invalid regex: {exc}")
            equal_to = slot.get("equal_to")
            if equal_to and value != values.get(equal_to):
                problems.append(prefix + f"operator example `{key}` must equal `{equal_to}`")
    return problems


def validate_manifest(document: dict) -> list[str]:
    problems: list[str] = []
    manifest_path = ASSETS / "manifest.json"
    if not manifest_path.exists():
        return ["asset manifest is missing; run sync_templates.py"]
    manifest_document = json.loads(manifest_path.read_text(encoding="utf-8"))
    if manifest_document.get("version") != 2:
        problems.append("asset manifest version must be 2; run sync_templates.py")
    if manifest_document.get("contract_version") != document.get("version"):
        problems.append("asset manifest contract version is stale; run sync_templates.py")
    if manifest_document.get("contract_sha256") != sha256(CONTRACTS_PATH):
        problems.append("asset manifest contract hash is stale; run sync_templates.py")
    contracts = document["templates"]
    admission_by_id = {
        template_id: status
        for status, template_ids in document["admission"].items()
        for template_id in template_ids
    }
    manifest = manifest_document.get("templates", {})
    if set(manifest) != set(contracts):
        missing = sorted(set(contracts) - set(manifest))
        extra = sorted(set(manifest) - set(contracts))
        if missing:
            problems.append("manifest is missing: " + ", ".join(missing))
        if extra:
            problems.append("manifest has uncontracted templates: " + ", ".join(extra))
    for template_id, contract in contracts.items():
        item = manifest.get(template_id)
        if not isinstance(item, dict):
            continue
        if item.get("lines") != len(contract["slots"]):
            problems.append(f"{template_id}: manifest line count differs from contract")
        if item.get("admission") != admission_by_id.get(template_id):
            problems.append(f"{template_id}: manifest admission status is stale")
        if item.get("rights_status") != "fair-use-review":
            problems.append(f"{template_id}: catalog art must default to fair-use-review")
        if not item.get("source_url") or not item.get("catalog_example"):
            problems.append(f"{template_id}: source or catalog example evidence is missing")
        asset = ASSETS / f"{template_id}.jpg"
        if not asset.exists():
            problems.append(f"{template_id}: local blank is missing")
        elif sha256(asset) != item.get("sha256"):
            problems.append(f"{template_id}: local blank hash differs from manifest")
    return problems


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--contracts-only", action="store_true")
    args = parser.parse_args()
    try:
        document = json.loads(CONTRACTS_PATH.read_text(encoding="utf-8"))
        problems = validate_contracts(document)
        if not args.contracts_only:
            problems.extend(validate_manifest(document))
    except (OSError, json.JSONDecodeError, KeyError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    if problems:
        print(f"{len(problems)} problem(s):", file=sys.stderr)
        for problem in problems:
            print(f"  - {problem}", file=sys.stderr)
        return 1
    counts = {status: len(ids) for status, ids in document["admission"].items()}
    print(
        f"OK: {len(document['templates'])} researched contracts are valid "
        f"({counts['active']} active, {counts['hold']} hold, {counts['rejected']} rejected)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
