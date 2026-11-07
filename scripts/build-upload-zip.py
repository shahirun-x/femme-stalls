"""
Packages site/ for upload to shared hosting (cPanel File Manager → Upload → Extract
into public_html/). index.html, .htaccess and web.config sit at the zip root.

    python scripts/build-upload-zip.py          → femme-stalls-site.zip (repo root, git-ignored)

Leaves out files the web server doesn't need: vercel.json (Vercel only), READMEs and
Markdown notes, and OS clutter (.DS_Store, __MACOSX, Thumbs.db, desktop.ini).
"""

from __future__ import annotations

import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
OUT = ROOT / "femme-stalls-site.zip"

SKIP_NAMES = {"vercel.json", ".DS_Store", "Thumbs.db", "desktop.ini", ".gitkeep"}
SKIP_DIRS = {"__MACOSX", ".git", ".vercel", "node_modules"}


def keep(path: Path) -> bool:
    rel = path.relative_to(SITE)
    if any(part in SKIP_DIRS for part in rel.parts):
        return False
    name = path.name
    if name in SKIP_NAMES or name.startswith("._"):
        return False
    if name.lower().startswith("readme") or path.suffix.lower() == ".md":
        return False
    return True


def main() -> None:
    files = sorted(p for p in SITE.rglob("*") if p.is_file() and keep(p))
    OUT.unlink(missing_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for f in files:
            z.write(f, f.relative_to(SITE).as_posix())
    for must in ("index.html", ".htaccess", "web.config", "404.html"):
        assert (SITE / must) in files, f"missing {must}"
    print(f"{OUT.name}: {len(files)} files, {OUT.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()
