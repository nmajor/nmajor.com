"""Verify expansion provenance, retained assets, and cached render evidence."""
import argparse
import hashlib
import importlib.util
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[2]
SKILL = ROOT / ".skills/social-meme-campaign"


def main():
    parser = argparse.ArgumentParser(__doc__)
    parser.add_argument("--refresh-sheets", action="store_true")
    args = parser.parse_args()
    document = json.loads((SKILL / "references/template-contracts.json").read_text())
    manifest = json.loads((SKILL / "assets/templates/manifest.json").read_text())["templates"]
    baseline = json.loads((BASE / "raw/baseline-manifest.json").read_text())["templates"]
    index = json.loads((BASE / "raw/index.json").read_text())
    evidence = json.loads((BASE / "candidate-evidence.json").read_text())
    hashes = json.loads((BASE / "rendered/render-hashes.json").read_text())
    candidates = index["candidate_ids"]
    assert len(candidates) == 22 and set(candidates) == set(evidence) == set(hashes)
    for key, item in baseline.items():
        assert manifest[key]["sha256"] == item["sha256"], key
        assert hashlib.sha256((SKILL / f"assets/templates/{key}.jpg").read_bytes()).hexdigest() == item["sha256"], key
        assert manifest[key]["admission"] == item["admission"], key
    counts = {"active": 0, "hold": 0, "rejected": 0}
    for key in candidates:
        contract = document["templates"][key]
        row = evidence[key]
        assert len(row["representative_uses"]) >= 3, key
        assert all(slot.get("role") for slot in contract["slots"]), key
        assert len(contract["slots"]) == contract["evidence"]["renderer_lines"] == manifest[key]["lines"], key
        assert (ROOT / contract["evidence"]["source_file"]).is_file(), key
        assert row["final_admission"] == manifest[key]["admission"], key
        counts[row["final_admission"]] += 1
        assert hashlib.sha256((BASE / f"rendered/{key}.jpg").read_bytes()).hexdigest() == hashes[key], key
        assert contract["assessment"]["rights_status"] == manifest[key]["rights_status"] == "fair-use-review", key
    for row in index["sources"].values():
        if row.get("file") and row.get("sha256"):
            assert hashlib.sha256((BASE / row["file"]).read_bytes()).hexdigest() == row["sha256"]
    assert counts == {"active": 13, "hold": 6, "rejected": 3}, counts
    if args.refresh_sheets:
        spec = importlib.util.spec_from_file_location("catalog_renderer", SKILL / "scripts/render_template_catalog.py")
        renderer = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(renderer)
        items = [(key, f"[{evidence[key]['final_admission'].upper()}] {document['templates'][key]['name']}", BASE / f"rendered/{key}.jpg") for key in candidates]
        for number, start in enumerate(range(0, len(items), 12), 1):
            renderer.sheet(items[start:start + 12], BASE / f"rendered/contact-sheet-{number:02d}.jpg")
    print(f"OK: {len(baseline)} prior assets and admissions unchanged; 22 source-backed contracts and renders verified; additions {counts}")


if __name__ == "__main__":
    main()
