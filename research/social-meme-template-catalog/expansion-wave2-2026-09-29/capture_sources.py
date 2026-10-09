#!/usr/bin/env python3
"""Preserve exact source responses for the second bounded meme-catalog expansion."""

from __future__ import annotations

import hashlib
import json
import shutil
import time
import urllib.error
import urllib.request
from pathlib import Path


BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[2]
RAW = BASE / "raw"
USER_AGENT = "Mozilla/5.0 (compatible; nmajor-meme-catalog-research/1.0)"

CANDIDATES = {
    "blb": "http://knowyourmeme.com/memes/bad-luck-brian",
    "box": "https://screenrant.com/hilarious-se7en-memes/",
    "cake": "https://www.youtube.com/watch?v=mDOKGa92NRo",
    "disastergirl": "http://knowyourmeme.com/memes/disaster-girl",
    "dragon": "https://knowyourmeme.com/photos/1052192-tumblr",
    "elf": "http://knowyourmeme.com/memes/you-sit-on-a-throne-of-lies",
    "friends": "https://knowyourmeme.com/memes/are-you-two-friends",
    "headaches": "https://knowyourmeme.com/memes/types-of-headaches",
    "interesting": "http://knowyourmeme.com/memes/the-most-interesting-man-in-the-world",
    "ive": "https://www.apple.com/pr/bios/jonathan-ive.html",
    "jw": "https://www.youtube.com/watch?v=RFinNxS5KN4&t=86",
    "khaby-lame": "https://knowyourmeme.com/memes/khaby-lame-shrug-its-that-simple",
    "kramer": "https://knowyourmeme.com/memes/kramer-whats-going-on-in-there",
    "light": "https://knowyourmeme.com/memes/everything-the-light-touches-is",
    "nails": "https://oldmeme.com/templates/guy-hammering-nails-into-sand/",
    "philosoraptor": "http://knowyourmeme.com/memes/philosoraptor",
    "spirit": "https://knowyourmeme.com/photos/2466845-fake-spirit-halloween-costumes",
    "spongebob": "http://knowyourmeme.com/memes/mocking-spongebob",
    "stop": "https://knowyourmeme.com/memes/stop-it-patrick-youre-scaring-him",
    "vince": "https://knowyourmeme.com/memes/vince-mcmahon-reaction",
    "whatyear": "http://knowyourmeme.com/memes/what-year-is-it",
    "wkh": "https://knowyourmeme.com/memes/who-killed-hannibal",
}


def fetch(url: str) -> tuple[bytes, str]:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                return response.read(), response.geturl()
        except (urllib.error.URLError, TimeoutError):
            if attempt == 2:
                raise
            time.sleep(1 + attempt)
    raise RuntimeError("unreachable")


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    inherited = {
        "memegen-templates.json": ROOT / "research/social-meme-template-catalog/raw/memegen-templates.json",
        "memefact-templates.csv": ROOT / "research/social-meme-template-catalog/raw/memefact-templates.csv",
        "memefact-readme.md": ROOT / "research/social-meme-template-catalog/raw/memefact-readme.md",
        "memegen-license.txt": ROOT / "research/social-meme-template-catalog/raw/memegen-license.txt",
    }
    sources: dict[str, dict[str, object]] = {}
    for name, source in inherited.items():
        destination = RAW / name
        shutil.copyfile(source, destination)
        sources[name] = {
            "kind": "exact inherited source snapshot",
            "source_file": str(source.relative_to(ROOT)),
            "file": f"raw/{name}",
            "sha256": digest(destination),
        }

    failures: dict[str, str] = {}
    for template_id, url in CANDIDATES.items():
        destination = RAW / f"{template_id}.html"
        try:
            body, final_url = fetch(url)
            destination.write_bytes(body)
            sources[template_id] = {
                "kind": "cultural source response",
                "requested_url": url,
                "final_url": final_url,
                "file": f"raw/{template_id}.html",
                "sha256": digest(destination),
                "bytes": len(body),
            }
        except Exception as error:  # preserve the failed request in the index
            failures[template_id] = f"{type(error).__name__}: {error}"

    catalog = json.loads((RAW / "memegen-templates.json").read_text(encoding="utf-8"))
    selected = [row for row in catalog if row["id"] in CANDIDATES]
    selected_path = RAW / "candidate-renderer-rows.json"
    selected_path.write_text(json.dumps(selected, indent=2) + "\n", encoding="utf-8")
    sources["candidate-renderer-rows"] = {
        "kind": "lossless subset of preserved Memegen snapshot",
        "file": "raw/candidate-renderer-rows.json",
        "sha256": digest(selected_path),
    }

    index = {
        "retrieved": "2026-09-29",
        "candidate_ids": list(CANDIDATES),
        "sources": sources,
        "failures": failures,
    }
    (RAW / "index.json").write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"captured": len(sources), "failures": failures}, indent=2))


if __name__ == "__main__":
    main()
