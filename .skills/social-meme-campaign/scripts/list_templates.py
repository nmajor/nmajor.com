#!/usr/bin/env python3
"""List researched meme templates by admission status and reusable meaning."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


SKILL = Path(__file__).resolve().parents[1]
CONTRACTS = SKILL / "references" / "template-contracts.json"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--status",
        choices=("active", "hold", "rejected", "all"),
        default="active",
    )
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    document = json.loads(CONTRACTS.read_text(encoding="utf-8"))
    status_by_id = {
        template_id: status
        for status, template_ids in document["admission"].items()
        for template_id in template_ids
    }
    rows = []
    for template_id, contract in document["templates"].items():
        status = status_by_id[template_id]
        if args.status != "all" and status != args.status:
            continue
        rows.append({
            "id": template_id,
            "status": status,
            "name": contract["name"],
            "meaning": contract["meaning"],
            "slots": [slot["key"] for slot in contract["slots"]],
        })
    if args.json:
        print(json.dumps(rows, indent=2, ensure_ascii=False))
    else:
        for row in rows:
            slots = ", ".join(row["slots"])
            print(f"{row['id']:<20} {row['name']}\n  {row['meaning']}\n  slots: {slots}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
