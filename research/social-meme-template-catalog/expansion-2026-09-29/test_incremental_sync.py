"""Offline regression tests for selective catalog syncing."""
import hashlib
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[3]
SCRIPT = ROOT / ".skills/social-meme-campaign/scripts/sync_templates.py"
spec = importlib.util.spec_from_file_location("sync_templates", SCRIPT)
sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync)


class IncrementalSyncTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.skill = Path(self.temp.name)
        (self.skill / "references").mkdir()
        self.assets = self.skill / "assets/templates"
        self.assets.mkdir(parents=True)
        self.document = {"version": 2, "templates": {key: {"slots": [{"key": "caption"}]} for key in ("old", "new")}, "admission": {"active": ["old", "new"], "hold": [], "rejected": []}}
        (self.skill / "references/template-contracts.json").write_text(json.dumps(self.document))
        (self.assets / "old.jpg").write_bytes(b"unchanged-old-art")
        old = {"lines": 1, "admission": "active", "rights_status": "fair-use-review", "sha256": hashlib.sha256(b"unchanged-old-art").hexdigest()}
        (self.assets / "manifest.json").write_text(json.dumps({"templates": {"old": old}}))
        self.catalog = [{"id": "new", "name": "New", "lines": 1, "blank": "https://example.invalid/new.jpg", "source": "https://example.invalid/source", "example": {"text": ["sample"]}}]
        self.catalog_path = self.skill / "catalog.json"
        self.catalog_path.write_text(json.dumps(self.catalog))

    def run_sync(self, ids=("new",)):
        args = ["sync_templates.py", "--output-dir", str(self.assets), "--catalog-file", str(self.catalog_path)]
        for key in ids:
            args += ["--id", key]
        with patch.object(sync, "__file__", str(self.skill / "scripts/sync_templates.py")), patch("sys.argv", args), patch.object(sync, "request", return_value=b"new-art") as request:
            result = sync.main()
        return result, request

    def test_only_new_asset_downloaded_and_old_preserved(self):
        result, request = self.run_sync()
        self.assertEqual(result, 0)
        request.assert_called_once_with("https://example.invalid/new.jpg")
        self.assertEqual((self.assets / "old.jpg").read_bytes(), b"unchanged-old-art")
        manifest = json.loads((self.assets / "manifest.json").read_text())
        self.assertEqual(set(manifest["templates"]), {"old", "new"})

    def test_unknown_id_rejected(self):
        with self.assertRaisesRegex(ValueError, "Uncontracted"):
            self.run_sync(("unknown",))

    def test_changed_retained_asset_rejected(self):
        (self.assets / "old.jpg").write_bytes(b"unexpected-change")
        with self.assertRaisesRegex(ValueError, "hash mismatch"):
            self.run_sync()

    def test_conflicting_selected_metadata_rejected(self):
        self.catalog_path.write_text(json.dumps(self.catalog + [{**self.catalog[0], "lines": 2}]))
        with self.assertRaisesRegex(ValueError, "conflicting rows"):
            self.run_sync()


if __name__ == "__main__":
    unittest.main()
