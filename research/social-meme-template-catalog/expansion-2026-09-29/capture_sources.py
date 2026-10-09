#!/usr/bin/env python3
"""Capture unedited source responses and source examples for the bounded audit."""
import csv
import hashlib
import json
import shutil
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
RAW = BASE / "raw"
IDS = "agnes biw boat ch crowd gandalf glasses jim lrv morpheus oprah remembers sb scc ski spiderman wddth xy yodawg ptj drowning pool".split()
ALIASES = {"yodawg": "Yo Dawg Heard You", "lrv": "Laundry Viking", "oprah": "Oprah You Get A"}
CATALOG = {}
for item in json.loads((RAW / "memegen-templates.json").read_text()):
    CATALOG.setdefault(item["id"], item)

def fetch(pair):
    key, url = pair
    fetch_url = url.replace("http://", "https://", 1)
    path = RAW / (key + ".html")
    row = {"source_url": url, "requested_url": fetch_url, "retrieved_at": datetime.now(timezone.utc).isoformat()}
    try:
        request = urllib.request.Request(fetch_url, headers={"User-Agent": "Mozilla/5.0 (nmajor source audit)"})
        with urllib.request.urlopen(request, timeout=40) as response:
            data = response.read()
            row.update(status=response.status, final_url=response.url, content_type=response.headers.get_content_type())
        path.write_bytes(data)
        row.update(file=str(path.relative_to(BASE)), bytes=len(data), sha256=hashlib.sha256(data).hexdigest())
    except Exception as exc:
        row["error"] = str(exc)
    print(key, row.get("bytes", row.get("error")), flush=True)
    return key, row

def main():
    RAW.mkdir(parents=True, exist_ok=True)
    pages = [(key, CATALOG[key]["source"]) for key in IDS]
    pages.extend([
        ("ptj-semantic", "https://knowyourmeme.com/memes/phoebe-teaching-joey"),
        ("memegen-license", "https://raw.githubusercontent.com/jacebrowning/memegen/main/LICENSE.txt"),
        ("imgflip-terms", "https://imgflip.com/terms"),
    ])
    records = dict(ThreadPoolExecutor(max_workers=5).map(fetch, pages))
    for filename in ["memefact-templates.csv", "memefact-readme.md"]:
        source = BASE.parent / "raw" / filename
        shutil.copyfile(source, RAW / filename)
        records[filename] = {"file": "raw/" + filename, "copied_unedited_from": str(source.relative_to(BASE.parents[2])), "fresh_fetch": False, "sha256": hashlib.sha256(source.read_bytes()).hexdigest()}
    rows = list(csv.DictReader((RAW / "memefact-templates.csv").open()))
    normalize = lambda value: "".join(c for c in value.lower() if c.isalnum())
    examples = {}
    for key in IDS:
        item = CATALOG[key]
        title = ALIASES.get(key, item["name"])
        matched = [r for r in rows if normalize(r["template_title"]) == normalize(title)]
        examples[key] = {"memegen_record": item, "memefact_rows_unedited": matched}
    (RAW / "candidate-examples.json").write_text(json.dumps(examples, indent=2) + "\n")
    (RAW / "index.json").write_text(json.dumps({"version": 1, "candidate_ids": IDS, "sources": records}, indent=2) + "\n")

if __name__ == "__main__":
    main()
