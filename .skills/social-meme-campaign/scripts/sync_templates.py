#!/usr/bin/env python3
"""Download every contracted classic template from Memegen.link.

The contract file is the allowlist. A template is never added merely because it
appears in a remote popularity feed: it must first have a reviewed semantic contract.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import urllib.request
from datetime import date
from pathlib import Path


API = "https://api.memegen.link/templates/"
USER_AGENT = "nmajor-social-meme-campaign/1.0"


def request(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as response:
        return response.read()


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    default = Path(__file__).resolve().parents[1] / "assets" / "templates"
    parser.add_argument("--output-dir", type=Path, default=default)
    args = parser.parse_args()
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)

    skill = Path(__file__).resolve().parents[1]
    contracts_path = skill / "references" / "template-contracts.json"
    contract_document = json.loads(contracts_path.read_text(encoding="utf-8"))
    contracts = contract_document["templates"]
    admission_by_id = {
        template_id: status
        for status, template_ids in contract_document["admission"].items()
        for template_id in template_ids
    }
    template_ids = list(contracts)

    catalog = json.loads(request(API))
    by_id: dict[str, dict] = {}
    for item in catalog:
        template_id = item["id"]
        if template_id in contracts and template_id in by_id and item != by_id[template_id]:
            raise ValueError(f"Memegen returned conflicting rows for `{template_id}`")
        by_id.setdefault(template_id, item)
    missing = [template_id for template_id in template_ids if template_id not in by_id]
    if missing:
        raise ValueError(f"Memegen catalog is missing expected templates: {', '.join(missing)}")

    manifest = {
        "version": 2,
        "contract_version": contract_document["version"],
        "contract_sha256": sha256(contracts_path.read_bytes()),
        "admission_counts": {
            status: len(template_ids)
            for status, template_ids in contract_document["admission"].items()
        },
        "catalog": API,
        "retrieved": date.today().isoformat(),
        "rights_note": (
            "Memegen is an open-source renderer. Its software license does not license "
            "the individual template images; default status is fair-use-review."
        ),
        "templates": {},
    }
    for template_id in template_ids:
        item = by_id[template_id]
        expected_lines = len(contracts[template_id]["slots"])
        if item["lines"] != expected_lines:
            raise ValueError(
                f"{template_id}: contract defines {expected_lines} slots but Memegen expects "
                f"{item['lines']} lines"
            )
        data = request(item["blank"])
        path = output / f"{template_id}.jpg"
        path.write_bytes(data)
        manifest["templates"][template_id] = {
            "name": item["name"],
            "lines": item["lines"],
            "blank_url": item["blank"],
            "source_url": item.get("source", ""),
            "catalog_example": item.get("example", {}).get("text", []),
            "catalog_example_url": item.get("example", {}).get("url", ""),
            "keywords": item.get("keywords", []),
            "admission": admission_by_id[template_id],
            "sha256": sha256(data),
            "rights_status": "fair-use-review",
        }
        print(path)

    manifest_path = output / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(manifest_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
