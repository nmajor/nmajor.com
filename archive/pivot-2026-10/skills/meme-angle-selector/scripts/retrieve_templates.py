#!/usr/bin/env python3
"""Retrieve established meme templates from the semantic selection index."""

from __future__ import annotations

import argparse
import json
import math
import re
from collections import Counter, defaultdict
from pathlib import Path


INDEX = Path(__file__).resolve().parents[1] / "references" / "template-selection-index.json"
CONTRACTS = Path(__file__).resolve().parents[2] / "social-meme-campaign" / "references" / "template-contracts.json"
STOP = {
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "in", "is",
    "it", "of", "on", "or", "that", "the", "their", "this", "to", "was", "with",
}
MECHANISM_EXPANSIONS = {
    "contradiction": "contradiction contrast expectation break correction reveal",
    "reversal": "reversal escalation disappointment plan failure worse reveal",
    "hidden_constraint": "constraint reveal hidden setup bottleneck difficult capability limit",
    "misclassification": "mislabeling literalism recognition failure unmasking wrong category",
    "false_shortcut": "false solution self defeating logic shortcut trap temptation",
    "scale_mismatch": "scale mismatch scale shift tiny disproportionate burden",
    "preference_contrast": "rejection and choice preference comparison ideal option",
    "false_choice": "false choice both shared unexpected similarity",
    "ownership_mismatch": "credit reversal role inversion ownership responsibility",
    "recursive_absurdity": "recursion nested problem repetition relocation",
    "reluctant_update": "reaction change perspective correction reconsideration suspicion",
    "institutional_memory": "nostalgia forgotten practice unfamiliar delayed admission",
}


def tokens(value: object) -> list[str]:
    words = re.findall(r"[a-z0-9]+", str(value).lower().replace("_", " "))
    return [word[:-1] if len(word) > 4 and word.endswith("s") else word for word in words if word not in STOP and len(word) > 1]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("query")
    parser.add_argument("--mechanism", action="append", default=[])
    parser.add_argument("--affect", action="append", default=[])
    parser.add_argument("--limit", type=int, default=8)
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args()
    if not 1 <= args.limit <= 20:
        raise SystemExit("ERROR: --limit must be from 1 to 20")

    index = json.loads(INDEX.read_text(encoding="utf-8"))["templates"]
    contracts = json.loads(CONTRACTS.read_text(encoding="utf-8"))["templates"]
    documents: dict[str, Counter[str]] = {}
    fields: dict[str, dict[str, object]] = {}
    for template_id, entry in index.items():
        contract = contracts[template_id]
        weighted: list[str] = []
        weighted += tokens(contract["meaning"]) * 4
        weighted += tokens(entry["semantic_family"]) * 3
        weighted += tokens(entry["relationship_graph"]) * 3
        weighted += tokens(entry["humor_mechanisms"]) * 4
        weighted += tokens(entry["representative_caption_patterns"])
        documents[template_id] = Counter(weighted)
        fields[template_id] = entry

    document_frequency: Counter[str] = Counter()
    for frequencies in documents.values():
        document_frequency.update(frequencies.keys())
    query_terms = tokens(args.query)
    for value in args.mechanism:
        normalized = value.lower().replace("-", "_").replace(" ", "_")
        query_terms += tokens(MECHANISM_EXPANSIONS.get(normalized, value))
    query_counts = Counter(query_terms)
    total_documents = len(documents)
    rows = []
    for template_id, frequencies in documents.items():
        score = 0.0
        matched = []
        for term, query_frequency in query_counts.items():
            if term not in frequencies:
                continue
            inverse_frequency = math.log((total_documents + 1) / (document_frequency[term] + 1)) + 1
            score += min(frequencies[term], 5) * inverse_frequency * query_frequency
            matched.append(term)
        mechanisms = set(fields[template_id]["humor_mechanisms"])
        affects = set(fields[template_id]["affect"])
        for requested in args.mechanism:
            normalized = requested.lower().replace("-", "_").replace(" ", "_")
            if normalized in mechanisms:
                score += 12
        for requested in args.affect:
            if requested.lower() in affects:
                score += 5
        if score:
            rows.append({
                "template": template_id,
                "name": fields[template_id]["name"],
                "semantic_family": fields[template_id]["semantic_family"],
                "score": round(score, 3),
                "matched_terms": sorted(set(matched)),
                "meaning": contracts[template_id]["meaning"],
            })
    rows.sort(key=lambda row: (-row["score"], row["template"]))

    selected = []
    family_counts: defaultdict[str, int] = defaultdict(int)
    for row in rows:
        if family_counts[row["semantic_family"]] >= 2:
            continue
        selected.append(row)
        family_counts[row["semantic_family"]] += 1
        if len(selected) == args.limit:
            break

    if args.as_json:
        print(json.dumps(selected, indent=2))
    else:
        for position, row in enumerate(selected, start=1):
            terms = ", ".join(row["matched_terms"]) or "mechanism/affect boost"
            print(f"{position}. {row['template']} ({row['name']}) [{row['score']}]\n  {row['meaning']}\n  matched: {terms}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
