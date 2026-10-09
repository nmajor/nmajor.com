#!/usr/bin/env python3
"""Render every contract example and build visual QA contact sheets."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import textwrap
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


SKILL = Path(__file__).resolve().parents[1]
CONTRACTS = SKILL / "references" / "template-contracts.json"
TEMPLATES = SKILL / "assets" / "templates"
API = "https://api.memegen.link/images/"
USER_AGENT = "nmajor-social-meme-catalog-qa/1.0"


def request(url: str, data: bytes | None = None) -> bytes:
    headers = {"User-Agent": USER_AGENT}
    if data is not None:
        headers["Content-Type"] = "application/json"
    for attempt in range(3):
        req = urllib.request.Request(url, data=data, headers=headers, method="POST" if data else "GET")
        try:
            with urllib.request.urlopen(req, timeout=45) as response:
                return response.read()
        except (urllib.error.URLError, ConnectionError, TimeoutError):
            if attempt == 2:
                raise
            time.sleep(0.5 * (2 ** attempt))
    raise RuntimeError("unreachable")


def font(size: int) -> ImageFont.ImageFont:
    try:
        return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size)
    except OSError:
        return ImageFont.load_default()


def fit(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    contained = ImageOps.contain(image.convert("RGB"), size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", size, "#222222")
    x = (size[0] - contained.width) // 2
    y = (size[1] - contained.height) // 2
    canvas.paste(contained, (x, y))
    return canvas


def sheet(items: list[tuple[str, str, Path]], output: Path, columns: int = 4) -> None:
    tile_w, image_h, label_h = 360, 300, 76
    rows = (len(items) + columns - 1) // columns
    canvas = Image.new("RGB", (tile_w * columns, (image_h + label_h) * rows), "white")
    draw = ImageDraw.Draw(canvas)
    label_font = font(18)
    for index, (template_id, name, path) in enumerate(items):
        col, row = index % columns, index // columns
        x, y = col * tile_w, row * (image_h + label_h)
        with Image.open(path) as source:
            canvas.paste(fit(source, (tile_w, image_h)), (x, y))
        label = f"{template_id} — {name}"
        wrapped = "\n".join(textwrap.wrap(label, width=34)[:2])
        draw.text((x + 10, y + image_h + 8), wrapped, fill="black", font=label_font)
        draw.rectangle((x, y, x + tile_w - 1, y + image_h + label_h - 1), outline="#999999", width=1)
    output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output, format="JPEG", quality=88)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("scratch/social-meme-template-catalog"),
    )
    parser.add_argument("--page-size", type=int, default=20)
    parser.add_argument("--id", action="append", dest="template_ids")
    args = parser.parse_args()
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)
    contract_document = json.loads(CONTRACTS.read_text(encoding="utf-8"))
    contracts = contract_document["templates"]
    admission_by_id = {
        template_id: status
        for status, template_ids in contract_document["admission"].items()
        for template_id in template_ids
    }
    manifest = json.loads((TEMPLATES / "manifest.json").read_text(encoding="utf-8"))["templates"]
    if args.template_ids:
        unknown = sorted(set(args.template_ids) - set(contracts))
        if unknown:
            raise ValueError("unknown template ids: " + ", ".join(unknown))
        contracts = {key: contracts[key] for key in args.template_ids}
    items: list[tuple[str, str, Path]] = []
    hashes: dict[str, str] = {}

    for template_id, contract in contracts.items():
        if template_id not in manifest:
            raise ValueError(f"{template_id}: missing from asset manifest")
        payload = json.dumps({
            "template_id": template_id,
            "text": contract["operator_example"],
            "extension": "jpg",
            "redirect": False,
        }).encode("utf-8")
        result = json.loads(request(API, payload))
        data = request(result["url"])
        path = output / f"{template_id}.jpg"
        path.write_bytes(data)
        hashes[template_id] = hashlib.sha256(data).hexdigest()
        label = f"[{admission_by_id[template_id].upper()}] {contract['name']}"
        items.append((template_id, label, path))
        print(path)

    for page, start in enumerate(range(0, len(items), args.page_size), 1):
        sheet_path = output / f"contact-sheet-{page:02d}.jpg"
        sheet(items[start:start + args.page_size], sheet_path)
        print(sheet_path)
    (output / "render-hashes.json").write_text(json.dumps(hashes, indent=2) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
