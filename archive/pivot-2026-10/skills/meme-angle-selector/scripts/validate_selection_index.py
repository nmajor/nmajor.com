#!/usr/bin/env python3
"""Validate complete, evidence-linked coverage of the active meme catalog."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
DEFAULT_INDEX = ROOT / ".skills/meme-angle-selector/references/template-selection-index.json"
DEFAULT_CONTRACTS = ROOT / ".skills/social-meme-campaign/references/template-contracts.json"
DEFAULT_MEMEGEN = ROOT / "research/social-meme-template-catalog/raw/memegen-templates.json"
ALLOWED_PATTERN_SOURCES = {
    "contract_operator_example",
    "memegen_renderer_example",
    "contract_slot_pattern",
}
ALLOWED_FAMILIARITY = {"current_top_100_proxy", "established_unmeasured"}


def load_json(path: Path, errors: list[str]) -> object:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"{path}: {exc}")
        return {}


def nonempty_strings(value: object, minimum: int, maximum: int, label: str, errors: list[str]) -> bool:
    if not isinstance(value, list) or not minimum <= len(value) <= maximum:
        errors.append(f"{label}: expected {minimum}-{maximum} items")
        return False
    if any(not isinstance(item, str) or not item.strip() for item in value):
        errors.append(f"{label}: every item must be a non-empty string")
        return False
    if len(value) != len(set(value)):
        errors.append(f"{label}: duplicate items")
        return False
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--index", type=Path, default=DEFAULT_INDEX)
    parser.add_argument("--contracts", type=Path, default=DEFAULT_CONTRACTS)
    parser.add_argument("--memegen", type=Path, default=DEFAULT_MEMEGEN)
    args = parser.parse_args()

    errors: list[str] = []
    index = load_json(args.index, errors)
    contracts_doc = load_json(args.contracts, errors)
    memegen_doc = load_json(args.memegen, errors)
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    if not isinstance(index, dict) or not isinstance(contracts_doc, dict) or not isinstance(memegen_doc, list):
        print("Top-level JSON shapes are invalid", file=sys.stderr)
        return 1

    active = contracts_doc.get("admission", {}).get("active", [])
    contracts = contracts_doc.get("templates", {})
    entries = index.get("templates", {})
    if not isinstance(active, list) or not isinstance(contracts, dict) or not isinstance(entries, dict):
        print("Catalog or index structure is invalid", file=sys.stderr)
        return 1

    expected_hash = hashlib.sha256(args.contracts.read_bytes()).hexdigest()
    if index.get("active_catalog_sha256") != expected_hash:
        errors.append("active_catalog_sha256 does not match the current contract document")

    active_set = set(active)
    entry_set = set(entries)
    if active_set != entry_set:
        missing = sorted(active_set - entry_set)
        extra = sorted(entry_set - active_set)
        errors.append(f"active coverage mismatch: missing={missing} extra={extra}")

    memegen_by_id = {row.get("id"): row for row in memegen_doc if isinstance(row, dict)}
    for template_id in sorted(active_set & entry_set):
        prefix = f"templates.{template_id}"
        entry = entries[template_id]
        contract = contracts.get(template_id, {})
        renderer = memegen_by_id.get(template_id)
        if not isinstance(entry, dict) or not isinstance(contract, dict):
            errors.append(f"{prefix}: entry or contract is not an object")
            continue
        if entry.get("template_id") != template_id:
            errors.append(f"{prefix}.template_id: must equal key")
        if entry.get("name") != contract.get("name"):
            errors.append(f"{prefix}.name: must match contract")
        family = entry.get("semantic_family")
        if not isinstance(family, str) or not re.fullmatch(r"[a-z0-9_]+", family):
            errors.append(f"{prefix}.semantic_family: expected snake_case string")

        graph = entry.get("relationship_graph")
        expected_roles = [slot["key"].replace("_", " ") for slot in contract.get("slots", [])]
        if not isinstance(graph, dict):
            errors.append(f"{prefix}.relationship_graph: expected object")
        else:
            if graph.get("roles") != expected_roles:
                errors.append(f"{prefix}.relationship_graph.roles: must match contract slot order")
            if graph.get("relationships") != contract.get("invariants"):
                errors.append(f"{prefix}.relationship_graph.relationships: must match contract invariants")

        nonempty_strings(entry.get("humor_mechanisms"), 1, 5, f"{prefix}.humor_mechanisms", errors)
        nonempty_strings(entry.get("affect"), 1, 4, f"{prefix}.affect", errors)

        baggage = entry.get("audience_baggage")
        if not isinstance(baggage, dict):
            errors.append(f"{prefix}.audience_baggage: expected object")
        else:
            for field in ("cultural_context", "selection_risk"):
                if not isinstance(baggage.get(field), str) or not baggage[field].strip():
                    errors.append(f"{prefix}.audience_baggage.{field}: required string")

        familiarity = entry.get("familiarity_tier")
        if not isinstance(familiarity, dict):
            errors.append(f"{prefix}.familiarity_tier: expected object")
        else:
            if familiarity.get("tier") not in ALLOWED_FAMILIARITY:
                errors.append(f"{prefix}.familiarity_tier.tier: unsupported value")
            for field in ("evidence", "source", "date"):
                if not isinstance(familiarity.get(field), str) or not familiarity[field].strip():
                    errors.append(f"{prefix}.familiarity_tier.{field}: required string")
            source = familiarity.get("source")
            if isinstance(source, str) and source.strip() and not (ROOT / source).is_file():
                errors.append(f"{prefix}.familiarity_tier.source: repo-relative evidence file does not exist")
            date = familiarity.get("date", "")
            if isinstance(date, str) and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", date):
                errors.append(f"{prefix}.familiarity_tier.date: expected YYYY-MM-DD")

        neighbors = entry.get("near_neighbors")
        if not isinstance(neighbors, list) or not 1 <= len(neighbors) <= 4:
            errors.append(f"{prefix}.near_neighbors: expected 1-4 entries")
        else:
            seen: set[str] = set()
            for number, neighbor in enumerate(neighbors):
                label = f"{prefix}.near_neighbors[{number}]"
                if not isinstance(neighbor, dict):
                    errors.append(f"{label}: expected object")
                    continue
                other = neighbor.get("template_id")
                if other not in active_set or other == template_id or other in seen:
                    errors.append(f"{label}.template_id: must be a distinct active neighbor")
                if isinstance(other, str):
                    seen.add(other)
                if not isinstance(neighbor.get("distinction"), str) or len(neighbor["distinction"].split()) < 8:
                    errors.append(f"{label}.distinction: expected a concrete short distinction")

        patterns = entry.get("representative_caption_patterns")
        if not isinstance(patterns, list) or not 3 <= len(patterns) <= 5:
            errors.append(f"{prefix}.representative_caption_patterns: expected 3-5 entries")
        else:
            by_source: dict[str, list[str]] = {}
            for number, pattern in enumerate(patterns):
                label = f"{prefix}.representative_caption_patterns[{number}]"
                if not isinstance(pattern, dict):
                    errors.append(f"{label}: expected object")
                    continue
                source = pattern.get("source")
                lines = pattern.get("lines")
                if source not in ALLOWED_PATTERN_SOURCES:
                    errors.append(f"{label}.source: unsupported evidence source")
                if not isinstance(lines, list) or not lines or any(not isinstance(line, str) for line in lines):
                    errors.append(f"{label}.lines: expected non-empty list of strings")
                elif isinstance(source, str):
                    by_source[source] = lines
            if by_source.get("contract_operator_example") != contract.get("operator_example"):
                errors.append(f"{prefix}: operator example pattern is missing or changed")
            expected_role_pattern = [f"<{slot['key'].replace('_', ' ')}>" for slot in contract.get("slots", [])]
            if by_source.get("contract_slot_pattern") != expected_role_pattern:
                errors.append(f"{prefix}: slot pattern is missing or changed")
            if not isinstance(renderer, dict):
                errors.append(f"{prefix}: renderer record missing")
            elif by_source.get("memegen_renderer_example") != renderer.get("example", {}).get("text"):
                errors.append(f"{prefix}: renderer example pattern is missing or changed")

    if errors:
        print("selection index validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print(f"selection index valid: {len(active_set)} active templates covered")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
