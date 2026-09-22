#!/usr/bin/env python3
"""Safely attach explicitly approved, hash-sealed memes to LinkedIn posts."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
FM_RE = re.compile(r"\A---\r?\n(?P<fm>[\s\S]*?)\r?\n---\r?\n?")
PUBLISHABLE_RIGHTS = {"owned", "licensed", "public-domain", "cc-compatible"}


def repo_path(value: str) -> Path:
    path = (ROOT / value).resolve()
    path.relative_to(ROOT.resolve())
    return path


def replace_campaign(path: Path, rows: list[dict]) -> None:
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


def file_hash(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def frontmatter_fields(post: Path, meme_id: str) -> tuple[str, re.Match, dict[str, str]]:
    raw = post.read_text(encoding="utf-8")
    match = FM_RE.match(raw)
    if not match:
        raise ValueError(f"{meme_id}: post has no frontmatter")
    fields = {
        m.group(1): m.group(2).strip().strip('"\'')
        for line in match.group("fm").splitlines()
        if (m := re.match(r"^([A-Za-z0-9_]+):\s*(.*)$", line))
    }
    return raw, match, fields


def is_selected(row: dict) -> bool:
    post = repo_path(row["post"])
    _, _, fields = frontmatter_fields(post, row["id"])
    return fields.get("meme", "") == row["asset"]


def attach(row: dict, write: bool) -> str:
    post = repo_path(row["post"])
    asset = repo_path(row["asset"])
    if row.get("status") != "approved":
        raise ValueError(f"{row['id']}: status must be approved")
    if not re.fullmatch(r"Nicholas Major \d{4}-\d{2}-\d{2} \(via chat\)", str(row.get("approved", ""))):
        raise ValueError(f"{row['id']}: explicit Nick approval provenance is missing")
    rights = row.get("rights") if isinstance(row.get("rights"), dict) else {}
    if rights.get("status") not in PUBLISHABLE_RIGHTS:
        raise ValueError(f"{row['id']}: rights status is not publishable")
    if not asset.exists():
        raise ValueError(f"{row['id']}: asset missing: {row['asset']}")
    if file_hash(asset) != row.get("asset_sha256"):
        raise ValueError(f"{row['id']}: rendered asset changed after review")
    raw, match, fields = frontmatter_fields(post, row["id"])
    block = match.group("fm")
    if fields.get("meme", "") != row["asset"]:
        raise ValueError(f"{row['id']}: post does not select this asset in `meme`")
    if fields.get("pushedAt"):
        raise ValueError(f"{row['id']}: post was already pushed")
    media = asset.relative_to(post.parent).as_posix()
    existing = fields.get("media", "").strip('"\'')
    if existing and existing != media:
        raise ValueError(f"{row['id']}: existing media is protected: {existing}")
    if existing == media:
        if write:
            row["attached"] = True
        return f"unchanged {row['post']}"

    lines = block.splitlines()
    insert_at = next((i + 1 for i, line in enumerate(lines) if line.startswith("platform:")), len(lines))
    lines.insert(insert_at, f"media: {media}")
    next_raw = "---\n" + "\n".join(lines) + "\n---\n" + raw[match.end():]
    if write:
        post.write_text(next_raw, encoding="utf-8")
        row["attached"] = True
    return f"{'attached' if write else 'would attach'} {media} -> {row['post']}"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("campaign", type=Path)
    parser.add_argument("--write", action="store_true", help="apply changes; default is a dry run")
    args = parser.parse_args()
    campaign = args.campaign.resolve()
    rows = [json.loads(line) for line in campaign.read_text(encoding="utf-8").splitlines() if line.strip()]
    try:
        selected_rows = [row for row in rows if is_selected(row)]
        if not selected_rows:
            raise ValueError("campaign has no frontmatter `meme` selections")
        previews = [attach(row, False) for row in selected_rows]
        if not args.write:
            for preview in previews:
                print(preview)
            return 0
        for row in selected_rows:
            print(attach(row, True))
        replace_campaign(campaign, rows)
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
