#!/usr/bin/env python3
"""Render exact Memegen examples for visual slot and phone-size review."""

from __future__ import annotations

import hashlib
import importlib.util
import json
import urllib.request
from pathlib import Path


BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[2]
API = "https://api.memegen.link/images/"
USER_AGENT = "nmajor-social-meme-wave2-review/1.0"


def request(url: str, data: bytes | None = None) -> bytes:
    headers = {"User-Agent": USER_AGENT}
    if data is not None:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, headers=headers, method="POST" if data else "GET")
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read()


def main() -> None:
    contracts = json.loads((BASE / "contracts-wave2.json").read_text())
    evidence = json.loads((BASE / "candidate-evidence.json").read_text())
    output = BASE / "rendered"
    output.mkdir(parents=True, exist_ok=True)
    hashes = {}
    items = []
    for template_id, contract in contracts.items():
        payload = json.dumps({
            "template_id": template_id,
            "text": contract["operator_example"],
            "extension": "jpg",
            "redirect": False,
        }).encode()
        result = json.loads(request(API, payload))
        body = request(result["url"])
        path = output / f"{template_id}.jpg"
        path.write_bytes(body)
        hashes[template_id] = hashlib.sha256(body).hexdigest()
        status = evidence[template_id]["proposed_admission"].upper()
        items.append((template_id, f"[{status}] {contract['name']}", path))

    renderer_path = ROOT / ".skills/social-meme-campaign/scripts/render_template_catalog.py"
    spec = importlib.util.spec_from_file_location("catalog_renderer", renderer_path)
    renderer = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(renderer)
    for page, start in enumerate(range(0, len(items), 12), 1):
        renderer.sheet(items[start:start + 12], output / f"contact-sheet-{page:02d}.jpg")
    (output / "render-hashes.json").write_text(json.dumps(hashes, indent=2) + "\n")
    print(f"Rendered {len(items)} candidates to {output}")


if __name__ == "__main__":
    main()
