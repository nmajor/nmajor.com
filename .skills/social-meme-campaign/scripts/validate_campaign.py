#!/usr/bin/env python3
"""Fail-closed validation for nmajor.com classic-template meme campaigns."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[3]
SKILL = Path(__file__).resolve().parents[1]
CONTRACTS_PATH = SKILL / "references" / "template-contracts.json"
TEMPLATES = SKILL / "assets" / "templates"
PUBLISHABLE_RIGHTS = {"owned", "licensed", "public-domain", "cc-compatible"}
ALL_RIGHTS = PUBLISHABLE_RIGHTS | {"unverified", "fair-use-review", "classic-template-preview"}
STATUSES = {"draft", "review", "approved", "exported"}
FM_RE = re.compile(r"\A---\r?\n(?P<fm>[\s\S]*?)\r?\n---\r?\n?")
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
FIELD_RE = re.compile(r"^(?P<key>[A-Za-z0-9_]+):\s*(?P<value>.*)$")


def repo_path(value: str) -> Path:
    path = (ROOT / value).resolve()
    try:
        path.relative_to(ROOT.resolve())
    except ValueError as exc:
        raise ValueError(f"path escapes repository: {value}") from exc
    return path


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def body_hash(body: str) -> str:
    return digest(body.encode("utf-8"))


def file_hash(path: Path) -> str:
    return digest(path.read_bytes())


def word_count(value: str) -> int:
    return len(re.findall(r"\b[\w$%]+(?:[’'-][\w$%]+)*\b", value, flags=re.UNICODE))


def markdown_parts(path: Path) -> tuple[dict[str, str], str]:
    raw = path.read_text(encoding="utf-8")
    match = FM_RE.match(raw)
    if not match:
        raise ValueError("post has no frontmatter block")
    fields: dict[str, str] = {}
    for line in match.group("fm").splitlines():
        field = FIELD_RE.match(line)
        if field:
            fields[field.group("key")] = field.group("value").strip().strip('"\'')
    return fields, raw[match.end():]


def issue(problems: list[str], row: dict, message: str) -> None:
    problems.append(f"line {row.get('_line', '?')} ({row.get('id', 'unknown')}): {message}")


def load_rows(path: Path) -> list[dict]:
    rows = []
    for number, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not raw.strip():
            continue
        row = json.loads(raw)
        if not isinstance(row, dict):
            raise ValueError(f"line {number}: row must be an object")
        row["_line"] = number
        rows.append(row)
    return rows


def validate(path: Path, publish: bool) -> tuple[list[str], set[str]]:
    contract_document = json.loads(CONTRACTS_PATH.read_text(encoding="utf-8"))
    contracts = contract_document["templates"]
    active_templates = set(contract_document["admission"]["active"])
    admission_by_id = {
        template_id: status
        for status, template_ids in contract_document["admission"].items()
        for template_id in template_ids
    }
    manifest_path = TEMPLATES / "manifest.json"
    if not manifest_path.exists():
        return ["local template catalog is missing; run sync_templates.py"], set()
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))["templates"]
    rows = load_rows(path)
    problems: list[str] = []
    statuses: set[str] = set()
    seen_ids: set[str] = set()
    seen_signatures: set[tuple] = set()
    checked_selections: set[str] = set()
    campaign_assets: dict[str, set[str]] = {}
    selected_statuses: set[str] = set()

    for candidate in rows:
        post_value = candidate.get("post")
        asset_value = candidate.get("asset")
        if isinstance(post_value, str) and isinstance(asset_value, str):
            campaign_assets.setdefault(post_value, set()).add(asset_value)

    if not rows:
        return ["campaign is empty"], statuses

    for row in rows:
        required = [
            "version", "id", "post", "audience", "operator_moment", "template",
            "slots", "alt_text", "asset", "asset_sha256", "render_url", "rights",
            "status", "post_body_sha256", "attached",
        ]
        for key in required:
            if key not in row:
                issue(problems, row, f"missing `{key}`")
        if any(key not in row for key in required):
            continue

        meme_id = row["id"]
        if not isinstance(meme_id, str) or not SLUG_RE.fullmatch(meme_id):
            issue(problems, row, "`id` must be a lowercase hyphenated slug")
        elif meme_id in seen_ids:
            issue(problems, row, "duplicate id")
        seen_ids.add(str(meme_id))
        if row["version"] != 1:
            issue(problems, row, "`version` must be 1")
        if row["audience"] != "ai-decision-maker":
            issue(problems, row, "`audience` must be `ai-decision-maker`")
        if not isinstance(row["operator_moment"], str) or len(row["operator_moment"].split()) < 6:
            issue(problems, row, "`operator_moment` is not specific enough")

        template_id = row["template"]
        contract = contracts.get(template_id)
        catalog_item = manifest.get(template_id)
        if contract is None:
            issue(problems, row, f"unknown template `{template_id}`")
        elif template_id not in active_templates:
            issue(
                problems,
                row,
                f"template `{template_id}` is {admission_by_id.get(template_id, 'not active')}",
            )
        if catalog_item is None:
            issue(problems, row, f"template `{template_id}` is missing from the local catalog")
        blank = TEMPLATES / f"{template_id}.jpg"
        if catalog_item and (not blank.exists() or file_hash(blank) != catalog_item["sha256"]):
            issue(problems, row, f"local `{template_id}` template is missing or changed")

        slots = row["slots"]
        if not isinstance(slots, dict):
            issue(problems, row, "`slots` must be an object")
        elif contract:
            expected = [slot["key"] for slot in contract["slots"]]
            if list(slots.keys()) != expected:
                issue(problems, row, f"slot keys/order must be: {', '.join(expected)}")
            for slot in contract["slots"]:
                key = slot["key"]
                value = slots.get(key)
                if not isinstance(value, str) or not value.strip():
                    issue(problems, row, f"slot `{key}` is missing")
                    continue
                count = word_count(value)
                if count > slot["max_words"]:
                    issue(problems, row, f"slot `{key}` has {count} words; max is {slot['max_words']}")
                if "—" in value:
                    issue(problems, row, f"slot `{key}` contains an em dash")
                regex = slot.get("required_regex")
                if regex and not re.search(regex, value):
                    issue(problems, row, f"slot `{key}` fails required pattern `{regex}`")
                equal_to = slot.get("equal_to")
                if equal_to and value != slots.get(equal_to):
                    issue(problems, row, f"slot `{key}` must equal `{equal_to}`")
            signature = (template_id, *(str(slots.get(key, "")).casefold() for key in expected))
            if signature in seen_signatures:
                issue(problems, row, "duplicate meme")
            seen_signatures.add(signature)

        alt = row["alt_text"]
        if not isinstance(alt, str) or not 12 <= len(alt.split()) <= 90:
            issue(problems, row, "`alt_text` must be useful and 12–90 words")

        status = row["status"]
        statuses.add(str(status))
        if status not in STATUSES:
            issue(problems, row, f"unknown status `{status}`")
        if not isinstance(row["attached"], bool):
            issue(problems, row, "`attached` must be a boolean")

        rights = row["rights"]
        rights_status = rights.get("status", "") if isinstance(rights, dict) else ""
        if rights_status not in ALL_RIGHTS:
            issue(problems, row, f"unknown rights status `{rights_status}`")
        if not isinstance(rights, dict) or len(str(rights.get("provenance", "")).split()) < 6:
            issue(problems, row, "rights provenance is missing or too thin")

        try:
            post = repo_path(row["post"])
            asset = repo_path(row["asset"])
        except (TypeError, ValueError) as exc:
            issue(problems, row, str(exc))
            continue
        if not post.exists():
            issue(problems, row, f"post does not exist: {row['post']}")
            continue
        fields, body = markdown_parts(post)
        selected = fields.get("meme", "")
        if row["post_body_sha256"] != body_hash(body):
            issue(problems, row, "post body changed after meme conception")

        if row["post"] not in checked_selections:
            checked_selections.add(row["post"])
            if selected:
                if selected not in campaign_assets.get(row["post"], set()):
                    issue(problems, row, "frontmatter `meme` does not match a campaign asset for this post")
                else:
                    try:
                        selected_asset = repo_path(selected)
                    except (TypeError, ValueError) as exc:
                        issue(problems, row, f"invalid frontmatter `meme`: {exc}")
                    else:
                        if not selected_asset.exists():
                            issue(problems, row, f"selected meme does not exist: {selected}")
            elif publish:
                issue(problems, row, "publish validation requires a frontmatter `meme` selection")

        try:
            expected_media = asset.relative_to(post.parent).as_posix()
        except ValueError:
            issue(problems, row, "`asset` must live inside the target post's batch directory")
            continue
        media = fields.get("media", "")
        if row["attached"] and media != expected_media:
            issue(problems, row, f"attached row expects `media: {expected_media}`")
        if selected == row["asset"] and not row["attached"] and media:
            issue(problems, row, "target post already declares media; skip or explicitly replace it")

        if status in {"review", "approved", "exported"}:
            if not asset.exists():
                issue(problems, row, f"rendered asset missing: {row['asset']}")
            elif row["asset_sha256"] != file_hash(asset):
                issue(problems, row, "rendered asset hash changed after review")
            else:
                try:
                    with Image.open(asset) as image:
                        if image.format not in {"JPEG", "PNG", "WEBP"}:
                            issue(problems, row, f"unsupported rendered format: {image.format}")
                except OSError as exc:
                    issue(problems, row, f"rendered asset is unreadable: {exc}")
            if not str(row["render_url"]).startswith("https://api.memegen.link/images/"):
                issue(problems, row, "review row is missing the canonical Memegen render URL")

        if publish and selected == row["asset"]:
            selected_statuses.add(str(status))
            if status not in {"approved", "exported"}:
                issue(problems, row, "publish validation requires status `approved` or `exported`")
            if not re.fullmatch(r"Nicholas Major \d{4}-\d{2}-\d{2} \(via chat\)", str(row.get("approved", ""))):
                issue(problems, row, "publish validation requires explicit Nick approval provenance")
            if rights_status not in PUBLISHABLE_RIGHTS:
                issue(problems, row, f"rights status `{rights_status}` is review-only")

    return problems, selected_statuses if publish else statuses


def gate(statuses: set[str]) -> str:
    if statuses == {"exported"}:
        return "EXPORTED"
    if statuses and statuses <= {"approved", "exported"}:
        return "PRODUCTION-READY"
    if "draft" in statuses:
        return "DRAFT"
    return "REVIEW"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("campaign", type=Path)
    parser.add_argument("--publish", action="store_true")
    args = parser.parse_args()
    campaign = args.campaign.resolve()
    if not campaign.exists():
        print(f"ERROR: campaign not found: {campaign}", file=sys.stderr)
        return 1
    try:
        problems, statuses = validate(campaign, args.publish)
    except (ValueError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    if problems:
        print(f"{len(problems)} problem(s):", file=sys.stderr)
        for problem in problems:
            print(f"  - {problem}", file=sys.stderr)
        return 1
    print(f"OK: {campaign} passes {gate(statuses)} validation")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
