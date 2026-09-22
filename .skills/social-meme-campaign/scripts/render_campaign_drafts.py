#!/usr/bin/env python3
"""Render deliberately scrappy classic-template meme drafts with Memegen.link."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import tempfile
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
SKILL = Path(__file__).resolve().parents[1]
CONTRACTS = SKILL / "references" / "template-contracts.json"
TEMPLATES = SKILL / "assets" / "templates"
API = "https://api.memegen.link/images/"
USER_AGENT = "nmajor-social-meme-campaign/1.0"


def repo_path(value: str) -> Path:
    path = (ROOT / value).resolve()
    path.relative_to(ROOT.resolve())
    return path


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def request(url: str, data: bytes | None = None) -> bytes:
    headers = {"User-Agent": USER_AGENT}
    if data is not None:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, headers=headers, method="POST" if data else "GET")
    with urllib.request.urlopen(req, timeout=45) as response:
        return response.read()


def replace_jsonl(path: Path, rows: list[dict]) -> None:
    fd, tmp_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent, text=True)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            for row in rows:
                handle.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")
        os.replace(tmp_name, path)
    except Exception:
        try:
            os.unlink(tmp_name)
        except FileNotFoundError:
            pass
        raise


def write_asset(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as handle:
            handle.write(data)
        os.replace(tmp_name, path)
    except Exception:
        try:
            os.unlink(tmp_name)
        except FileNotFoundError:
            pass
        raise


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("campaign", type=Path)
    args = parser.parse_args()
    campaign = args.campaign.resolve()
    rows = [json.loads(line) for line in campaign.read_text(encoding="utf-8").splitlines() if line.strip()]
    contract_document = json.loads(CONTRACTS.read_text(encoding="utf-8"))
    contracts = contract_document["templates"]
    active_templates = set(contract_document["admission"]["active"])
    admission_by_id = {
        template_id: status
        for status, template_ids in contract_document["admission"].items()
        for template_id in template_ids
    }
    manifest = json.loads((TEMPLATES / "manifest.json").read_text(encoding="utf-8"))["templates"]

    for row in rows:
        if row.get("status") in {"approved", "exported"}:
            raise ValueError(f"{row['id']}: refusing to render over a {row['status']} meme")
        if row.get("attached"):
            raise ValueError(f"{row['id']}: refusing to render over an attached meme")
        template_id = row["template"]
        if template_id not in contracts or template_id not in manifest:
            raise ValueError(f"{row['id']}: template `{template_id}` is not in the local catalog")
        if template_id not in active_templates:
            raise ValueError(
                f"{row['id']}: template `{template_id}` is "
                f"{admission_by_id.get(template_id, 'not active')}"
            )
        blank = TEMPLATES / f"{template_id}.jpg"
        if not blank.exists():
            raise FileNotFoundError(f"{row['id']}: local template missing: {blank}")
        if sha256(blank.read_bytes()) != manifest[template_id]["sha256"]:
            raise ValueError(f"{row['id']}: local template hash does not match the catalog manifest")

    for row in rows:
        template_id = row["template"]
        contract = contracts[template_id]
        text = [row["slots"][slot["key"]] for slot in contract["slots"]]
        payload = json.dumps({
            "template_id": template_id,
            "text": text,
            "extension": "jpg",
            "redirect": False,
        }).encode("utf-8")
        result = json.loads(request(API, payload))
        render_url = result["url"]
        image = request(render_url)
        asset = repo_path(row["asset"])
        write_asset(asset, image)
        row["asset_sha256"] = sha256(image)
        row["render_url"] = render_url
        row["status"] = "review"
        row["attached"] = False
        row["rights"] = {
            "status": manifest[template_id]["rights_status"],
            "provenance": (
                f"Classic {manifest[template_id]['name']} template from the local Memegen catalog; "
                f"blank {manifest[template_id]['blank_url']}; source {manifest[template_id]['source_url']}."
            ),
        }
        print(asset.relative_to(ROOT))

    replace_jsonl(campaign, rows)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
