#!/usr/bin/env python3
"""Validate template and mechanism assignments across a meme batch."""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
CONTRACTS = ROOT / ".skills/social-meme-campaign/references/template-contracts.json"
MECHANISMS = {
    "contradiction", "reversal", "hidden_constraint", "misclassification",
    "false_shortcut", "scale_mismatch", "preference_contrast", "false_choice",
    "ownership_mismatch", "recursive_absurdity", "reluctant_update", "institutional_memory",
}


def fail(message: str) -> None:
    raise SystemExit(f"ERROR: {message}")


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("batch", type=Path)
    args = parser.parse_args()
    document = json.loads(args.batch.read_text(encoding="utf-8"))
    if document.get("version") != 1:
        fail("version must be 1")
    active = set(json.loads(CONTRACTS.read_text(encoding="utf-8"))["admission"]["active"])
    recent = document.get("recent_template_ids")
    if not isinstance(recent, list) or any(item not in active for item in recent):
        fail("recent_template_ids must contain only active template IDs")
    assignments = document.get("assignments")
    if not isinstance(assignments, list) or not assignments:
        fail("assignments must be a non-empty array")

    posts = set()
    template_counts = Counter(item.get("template") for item in assignments if isinstance(item, dict))
    mechanism_counts = Counter(item.get("mechanism") for item in assignments if isinstance(item, dict))
    for number, item in enumerate(assignments, start=1):
        if not isinstance(item, dict):
            fail(f"assignment {number} must be an object")
        post_id = item.get("post_id")
        if not isinstance(post_id, str) or not post_id or post_id in posts:
            fail(f"assignment {number} needs a unique post_id")
        posts.add(post_id)
        packet_value = item.get("packet")
        packet = ROOT / packet_value if isinstance(packet_value, str) else None
        if packet is None or not packet.is_file() or item.get("packet_sha256") != digest(packet):
            fail(f"assignment {post_id} has a missing or stale packet")
        template = item.get("template")
        mechanism = item.get("mechanism")
        if template == "NO_MEME_FIT":
            if mechanism != "none":
                fail(f"assignment {post_id}: NO_MEME_FIT requires mechanism none")
            continue
        if template not in active or mechanism not in MECHANISMS:
            fail(f"assignment {post_id} has an invalid template or mechanism")
        has_collision = template in recent or template_counts[template] > 1 or mechanism_counts[mechanism] > 1
        reason = item.get("collision_reason")
        if has_collision and (not isinstance(reason, str) or len(reason.split()) < 6):
            fail(f"assignment {post_id} repeats a recent/batch template or mechanism without a concrete collision_reason")
        if not has_collision and reason not in (None, ""):
            fail(f"assignment {post_id} has collision_reason without a collision")
    print(f"batch assignment valid: {len(assignments)} posts")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
