#!/usr/bin/env python3
"""Preserve the upstream source page for every locally contracted meme template."""

from __future__ import annotations

import hashlib
import json
import time
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
RESEARCH = Path(__file__).resolve().parent
RAW = RESEARCH / "raw"
OUTPUT = RAW / "semantic-sources"
CONTRACTS = ROOT / ".skills" / "social-meme-campaign" / "references" / "template-contracts.json"
MEMEGEN = RAW / "memegen-templates.json"
USER_AGENT = "Mozilla/5.0 (compatible; nmajor-meme-research/1.0; +https://www.nmajor.com/)"


def fetch(url: str) -> tuple[bytes, str, str]:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read(), response.geturl(), response.headers.get_content_type()


def main() -> int:
    contracts = json.loads(CONTRACTS.read_text(encoding="utf-8"))["templates"]
    catalog: dict[str, dict] = {}
    for item in json.loads(MEMEGEN.read_text(encoding="utf-8")):
        catalog.setdefault(item["id"], item)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    index_path = OUTPUT / "index.json"
    previous = {}
    if index_path.exists():
        previous = json.loads(index_path.read_text(encoding="utf-8")).get("templates", {})
    records: dict[str, dict] = {}
    for template_id in contracts:
        source_url = catalog[template_id].get("source")
        record = {"source_url": source_url, "retrieved": date.today().isoformat()}
        if not source_url or not str(source_url).startswith(("http://", "https://")):
            record["error"] = "missing or invalid source URL"
            records[template_id] = record
            continue
        path = OUTPUT / f"{template_id}.html"
        prior = previous.get(template_id, {})
        if path.exists() and prior.get("source_url") == source_url and prior.get("sha256"):
            records[template_id] = prior
            print(f"{template_id}: kept {prior.get('bytes', path.stat().st_size)} bytes")
            continue
        try:
            data, final_url, content_type = fetch(source_url)
            path.write_bytes(data)
            record.update({
                "file": path.relative_to(RESEARCH).as_posix(),
                "final_url": final_url,
                "content_type": content_type,
                "bytes": len(data),
                "sha256": hashlib.sha256(data).hexdigest(),
            })
            print(f"{template_id}: {len(data)} bytes")
        except (urllib.error.URLError, TimeoutError) as exc:
            record["error"] = f"{type(exc).__name__}: {exc}"
            print(f"{template_id}: ERROR {exc}")
        records[template_id] = record
        time.sleep(0.15)
    index = {
        "version": 1,
        "retrieved": date.today().isoformat(),
        "note": "Files are unedited HTTP response bodies from each Memegen source URL.",
        "templates": records,
    }
    index_path.write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
