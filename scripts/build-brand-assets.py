"""
Builds every raster asset the static site (site/) uses from the client's
source files. Dev-time helper only — outputs are committed, so deploying the
site needs no build step.

    python scripts/build-brand-assets.py

Inputs
  ../brand-assets/femme-logo.jpeg          main logo (opaque white background)
  ../brand-assets/geohomz*.jpeg, geofudz-diner.jpeg, keelai-snacks.jpeg
  public/images/placeholder/*.jpg          warm placeholder photography
  public/stalls/<slug>/logo.png            stall client logos

Outputs (site/)
  assets/brand/femme-mark.{png,webp}       hands-and-heart mark, transparent
  assets/brand/femme-logo.{png,webp}       full logo, transparent (cream plate)
  assets/brand/<sister>.{png,webp}         sister-brand logos, full colour
  assets/brand/favicon-32.png, apple-touch-icon.png, og-image.png
  favicon.ico                              16/32/48
  assets/img/*.{jpg,webp}                  hero + category photography
  assets/img/stalls/<slug>/logo.{png,webp}
"""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT.parent / "brand-assets"
SITE = ROOT / "site"
BRAND = SITE / "assets" / "brand"
IMG = SITE / "assets" / "img"
for d in (BRAND, IMG):
    d.mkdir(parents=True, exist_ok=True)

CREAM = (253, 248, 243)


def remove_white(img: Image.Image, lo: int = 10, hi: int = 120) -> Image.Image:
    """Turn a white background transparent, keeping anti-aliased edges and soft
    shadows as partial alpha. Colour is un-premultiplied against white so edges
    don't keep a white fringe."""
    rgb = img.convert("RGB")
    out = Image.new("RGBA", rgb.size)
    src, dst = rgb.load(), out.load()
    w, h = rgb.size
    span = hi - lo
    for y in range(h):
        for x in range(w):
            r, g, b = src[x, y]
            d = 255 - min(r, g, b)
            a = 0.0 if d <= lo else 1.0 if d >= hi else (d - lo) / span
            if a == 0:
                dst[x, y] = (0, 0, 0, 0)
                continue
            un = lambda c: max(0, min(255, round((c - (1 - a) * 255) / a)))
            dst[x, y] = (un(r), un(g), un(b), round(a * 255))
    return out


def trim(img: Image.Image, pad: int = 0) -> Image.Image:
    box = img.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    if not box:
        return img
    x0, y0, x1, y1 = box
    return img.crop((max(0, x0 - pad), max(0, y0 - pad), min(img.width, x1 + pad), min(img.height, y1 + pad)))


def fit(img: Image.Image, max_w: int, max_h: int) -> Image.Image:
    scale = min(max_w / img.width, max_h / img.height, 1.0)
    if scale >= 1.0:
        return img.copy()
    return img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)


def save_pair(img: Image.Image, stem: Path, quality: int = 88) -> None:
    """PNG (or JPEG for photos) fallback + WebP."""
    if stem.suffix == ".jpg":
        img.convert("RGB").save(stem, quality=84, optimize=True, progressive=True)
        img.convert("RGB").save(stem.with_suffix(".webp"), quality=72, method=6)
    else:
        img.save(stem.with_suffix(".png"), optimize=True)
        img.save(stem.with_suffix(".webp"), quality=quality, method=6)
    print(f"  {stem.relative_to(SITE)}  {img.width}x{img.height}")


def mark_rows_end(alpha: Image.Image) -> int:
    """Bottom of the hands-and-heart mark: the first band of >= 8 empty rows
    below the top third of the logo (where the wordmark begins)."""
    w, h = alpha.size
    px = alpha.load()
    empty_run = 0
    for y in range(h // 4, h):
        row_empty = all(px[x, y] < 20 for x in range(0, w, 2))
        empty_run = empty_run + 1 if row_empty else 0
        if empty_run >= 8:
            return y - empty_run
    return h // 2


def on_cream(mark: Image.Image, size: int, fill: float) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), CREAM + (255,))
    m = fit(mark, round(size * fill), round(size * fill))
    canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return canvas


def build_femme() -> None:
    print("Femme logo")
    full = remove_white(Image.open(SRC / "femme-logo.jpeg"))
    full = trim(full, pad=4)
    save_pair(fit(full, 400, 432), BRAND / "femme-logo.png")

    cut = mark_rows_end(full.getchannel("A"))
    mark = trim(full.crop((0, 0, full.width, cut)), pad=2)
    save_pair(fit(mark, 192, 112), BRAND / "femme-mark.png")

    # Favicons — the mark centred on cream (legible at 16px).
    on_cream(mark, 32, 0.9).convert("RGB").save(BRAND / "favicon-32.png", optimize=True)
    on_cream(mark, 180, 0.72).convert("RGB").save(BRAND / "apple-touch-icon.png", optimize=True)
    on_cream(mark, 256, 0.9).convert("RGB").save(
        SITE / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("  favicon.ico, favicon-32.png, apple-touch-icon.png")

    # Open Graph: full logo on cream with a soft warm wash.
    # Blur an opaque layer (blurring against transparent black greys it out).
    wash = Image.new("RGB", (1200, 630), CREAM)
    d = ImageDraw.Draw(wash)
    d.ellipse([-260, -320, 640, 420], fill=(250, 226, 234))
    d.ellipse([700, 260, 1500, 980], fill=(246, 222, 204))
    og = wash.filter(ImageFilter.GaussianBlur(120)).convert("RGBA")
    logo = fit(full, 520, 520)
    og.alpha_composite(logo, ((1200 - logo.width) // 2, (630 - logo.height) // 2))
    og.convert("RGB").save(BRAND / "og-image.png", optimize=True)
    print("  og-image.png  1200x630")


SISTERS = {
    "geohomz": "geohomz.jpeg",
    "geohomz-kottaram": "geohomz-kottaram.jpeg",
    "geofudz-diner": "geofudz-diner.jpeg",
    "keelai-snacks": "keelai-snacks.jpeg",
}


def build_sisters() -> None:
    print("Sister brands (full colour, untouched apart from scaling)")
    for stem, file in SISTERS.items():
        img = Image.open(SRC / file).convert("RGB")
        save_pair(fit(img, 560, 280), BRAND / f"{stem}.png")


def build_photos() -> None:
    print("Photography")
    hero = Image.open(ROOT / "public/images/placeholder/hero.jpg")
    for w in (600, 800, 1200):
        img = hero.resize((w, round(w * hero.height / hero.width)), Image.LANCZOS)
        save_pair(img, IMG / f"hero-{w}.jpg")
        img.save(IMG / f"hero-{w}.webp", quality=60, method=6)  # LCP image: lighter WebP
    for f in sorted((ROOT / "public/images/placeholder").glob("*.jpg")):
        if f.stem == "hero":
            continue
        save_pair(Image.open(f), IMG / f"{f.stem}.jpg")


def build_stalls() -> None:
    print("Stall logos")
    for logo in sorted((ROOT / "public/stalls").glob("*/logo.png")):
        dest = IMG / "stalls" / logo.parent.name
        dest.mkdir(parents=True, exist_ok=True)
        save_pair(fit(Image.open(logo).convert("RGBA"), 320, 320), dest / "logo.png")


if __name__ == "__main__":
    build_femme()
    build_sisters()
    build_photos()
    build_stalls()
    print("Done.")
