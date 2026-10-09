#!/usr/bin/env python3
"""Verify wave-two source, contract, render, asset, and admission evidence."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path


BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[2]
SKILL = ROOT / ".skills/social-meme-campaign"


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    document = json.loads((SKILL / "references/template-contracts.json").read_text())
    manifest = json.loads((SKILL / "assets/templates/manifest.json").read_text())
    evidence = json.loads((BASE / "candidate-evidence.json").read_text())
    proposed = json.loads((BASE / "contracts-wave2.json").read_text())
    index = json.loads((BASE / "raw/index.json").read_text())
    render_hashes = json.loads((BASE / "rendered/render-hashes.json").read_text())
    candidates = index["candidate_ids"]

    assert len(candidates) == 22
    assert set(candidates) == set(evidence) == set(proposed) == set(render_hashes)
    assert len(document["templates"]) == 123
    assert {key: len(value) for key, value in document["admission"].items()} == {
        "active": 75,
        "hold": 27,
        "rejected": 21,
    }
    assert manifest["admission_counts"] == {"active": 75, "hold": 27, "rejected": 21}

    expected_new = {"active": 12, "hold": 6, "rejected": 4}
    actual_new = {key: 0 for key in expected_new}
    admission_by_id = {
        template_id: status
        for status, ids in document["admission"].items()
        for template_id in ids
    }
    for template_id in candidates:
        row = evidence[template_id]
        contract = document["templates"][template_id]
        asset_row = manifest["templates"][template_id]
        status = row["final_admission"]
        actual_new[status] += 1
        assert status == admission_by_id[template_id] == asset_row["admission"]
        assert row["renderer_id"] == contract["evidence"]["renderer_id"] == template_id
        assert row["renderer_lines"] == len(contract["slots"]) == asset_row["lines"]
        assert len(row["representative_uses"]) >= 3
        assert row["retrieved"] == "2026-09-29"
        assert row["semantic_source_url"].startswith("http")
        assert row["safety"]
        assert all(slot.get("role") for slot in contract["slots"])
        assert row["rights_status"] == contract["assessment"]["rights_status"] == asset_row["rights_status"] == "fair-use-review"
        assert (BASE / row["source_file"]).is_file()
        rendered = BASE / row["render_file"]
        assert sha256(rendered) == render_hashes[template_id]
        asset = SKILL / f"assets/templates/{template_id}.jpg"
        assert sha256(asset) == asset_row["sha256"]

    assert actual_new == expected_new
    for source in index["sources"].values():
        if source.get("file") and source.get("sha256"):
            assert sha256(BASE / source["file"]) == source["sha256"]
    print(
        "OK: 22 established templates verified; "
        "12 active, 6 hold, 4 rejected; catalog totals 75/27/21"
    )


if __name__ == "__main__":
    main()
