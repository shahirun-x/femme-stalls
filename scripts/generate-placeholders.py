"""
Generate warm, grained placeholder imagery for the Femme Stalls homepage.

These stand in for real photography until the client supplies it. They are
deliberately abstract — warm gradients (rose / terracotta / gold / cream)
with soft glows and film grain — so they read as intentional art direction
rather than broken images. No text, no invented emblems.

Also writes an honest "FS" monogram for the favicon / apple-touch-icon until
the real logo asset arrives.

Run from the repo root:

    python scripts/generate-placeholders.py
"""

from __future__ import annotations

import math
import os
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images" / "placeholder"
OUT_DIR.mkdir(parents=True, exist_ok=True)

RGB = tuple[int, int, int]
Stops = list[tuple[float, RGB]]

WIN_FONTS = Path(os.environ.get("SystemRoot", r"C:\Windows")) / "Fonts"

# Files from earlier iterations that are no longer used (fake emblems, flat
# pink tiles, logo placeholders). Removed on every run so they can't creep back.
OBSOLETE = [
    "femme-stalls-event-logo.png",
    "registrations-badge.png",
    "geohomz.png",
    *[f"partner-{i}.png" for i in range(2, 6)],
    *[f"media-{i}.png" for i in range(1, 4)],
    *[f"sponsor-{i}.png" for i in range(1, 3)],
    *[f"institution-{i}.png" for i in range(1, 3)],
    "hero-women.jpg",
    "fashion.jpg",
]


def hex_rgb(value: str) -> RGB:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


def interp(stops: Stops, t: float) -> RGB:
    t = max(0.0, min(1.0, t))
    for (p0, c0), (p1, c1) in zip(stops, stops[1:]):
        if t <= p1:
            local = 0.0 if p1 == p0 else (t - p0) / (p1 - p0)
            # smoothstep for softer transitions
            local = local * local * (3 - 2 * local)
            return tuple(round(c0[i] + (c1[i] - c0[i]) * local) for i in range(3))  # type: ignore[return-value]
    return stops[-1][1]


def gradient(size: tuple[int, int], stops: Stops, angle_deg: float) -> Image.Image:
    """Multi-stop linear gradient, rendered small then upscaled (fast + smooth)."""
    w, h = size
    sw = 120
    sh = max(2, round(sw * h / w))
    small = Image.new("RGB", (sw, sh))
    px = small.load()
    ang = math.radians(angle_deg)
    dx, dy = math.cos(ang), math.sin(ang)
    projections = [x * dx + y * dy for x, y in ((0, 0), (sw, 0), (0, sh), (sw, sh))]
    lo, hi = min(projections), max(projections)
    for y in range(sh):
        for x in range(sw):
            px[x, y] = interp(stops, (x * dx + y * dy - lo) / (hi - lo))
    return small.resize(size, Image.BICUBIC)


def glow(img: Image.Image, blobs: list[tuple[float, float, float, str, int]]) -> Image.Image:
    """Soft light blooms. Each blob: (cx, cy, radius) as fractions, colour, alpha."""
    w, h = img.size
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    for cx, cy, r, colour, alpha in blobs:
        rr = r * max(w, h)
        draw.ellipse(
            [cx * w - rr, cy * h - rr, cx * w + rr, cy * h + rr],
            fill=(*hex_rgb(colour), alpha),
        )
    layer = layer.filter(ImageFilter.GaussianBlur(max(w, h) * 0.09))
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def grain(img: Image.Image, sigma: float = 34) -> Image.Image:
    """Film grain via soft-light blend of neutral-centred Gaussian noise."""
    noise = Image.effect_noise(img.size, sigma).convert("RGB")
    return ImageChops.soft_light(img, noise)


def save_jpg(img: Image.Image, name: str) -> None:
    path = OUT_DIR / name
    img.save(path, quality=86, optimize=True, progressive=True)
    print(f"  wrote {path.relative_to(ROOT)}  ({img.size[0]}x{img.size[1]})")


# --- Hero -------------------------------------------------------------------
def make_hero() -> None:
    img = gradient(
        (1200, 1400),
        [
            (0.0, hex_rgb("#F6DCCB")),
            (0.35, hex_rgb("#E3A184")),
            (0.68, hex_rgb("#C4643C")),
            (1.0, hex_rgb("#8E1A47")),
        ],
        angle_deg=62,
    )
    img = glow(
        img,
        [
            (0.78, 0.16, 0.26, "#F3DDA8", 150),
            (0.22, 0.42, 0.22, "#FDF8F3", 110),
            (0.55, 0.86, 0.30, "#B5225B", 120),
        ],
    )
    save_jpg(grain(img, 30), "hero.jpg")


# --- Category cards (3:4 portrait) ----------------------------------------
CATEGORIES: dict[str, tuple[list[str], float, list[tuple[float, float, float, str, int]]]] = {
    "handicrafts.jpg": (["#E9B48F", "#C4643C", "#7A2E1F"], 70, [(0.3, 0.25, 0.25, "#F6DCCB", 120)]),
    "jewellery.jpg": (["#F3DDA8", "#C5A55A", "#6E4E1E"], 55, [(0.7, 0.3, 0.22, "#FFF4D6", 150)]),
    "food-snacks.jpg": (["#F6C07A", "#D9773F", "#8E2F1F"], 80, [(0.35, 0.3, 0.24, "#FCE3B8", 130)]),
    "beauty-wellness.jpg": (["#FBEEF3", "#E7A3B9", "#9E3A5C"], 65, [(0.65, 0.22, 0.24, "#FFFFFF", 110)]),
    "textiles.jpg": (["#D86A93", "#B5225B", "#4A1428"], 75, [(0.3, 0.3, 0.22, "#F2B8C9", 120)]),
    "home-products.jpg": (["#F5EADF", "#D8B08C", "#8A5A3A"], 60, [(0.7, 0.28, 0.25, "#FFFFFF", 110)]),
    "spices.jpg": (["#F1C24B", "#D2691E", "#8E1A1A"], 70, [(0.32, 0.26, 0.24, "#FBE7A6", 140)]),
    "baked-goods.jpg": (["#FDF1E2", "#E2B07A", "#9A5B2E"], 65, [(0.6, 0.24, 0.26, "#FFFFFF", 120)]),
}


def make_categories() -> None:
    for name, (colours, angle, blobs) in CATEGORIES.items():
        stops = [(i / (len(colours) - 1), hex_rgb(c)) for i, c in enumerate(colours)]
        img = gradient((640, 854), stops, angle)
        img = glow(img, blobs)
        save_jpg(grain(img, 32), name)


# --- Honest monogram icon (placeholder until real logo arrives) ------------
def serif(size: int) -> ImageFont.FreeTypeFont:
    for candidate in ("georgiab.ttf", "timesbd.ttf"):
        path = WIN_FONTS / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def monogram(px: int) -> Image.Image:
    img = Image.new("RGB", (px, px), hex_rgb("#B5225B"))
    draw = ImageDraw.Draw(img)
    f = serif(round(px * 0.44))
    text = "FS"
    box = draw.textbbox((0, 0), text, font=f)
    tw, th = box[2] - box[0], box[3] - box[1]
    draw.text(((px - tw) / 2 - box[0], (px - th) / 2 - box[1]), text, font=f, fill=hex_rgb("#FDF8F3"))
    return img


def make_icons() -> None:
    apple = ROOT / "public" / "apple-touch-icon.png"
    monogram(180).save(apple)
    print(f"  wrote {apple.relative_to(ROOT)}  (180x180)")
    fav = ROOT / "src" / "app" / "favicon.ico"
    monogram(256).save(fav, sizes=[(16, 16), (32, 32), (48, 48), (256, 256)])
    print(f"  wrote {fav.relative_to(ROOT)}")


def clean_obsolete() -> None:
    for name in OBSOLETE:
        path = OUT_DIR / name
        if path.exists():
            path.unlink()
            print(f"  removed {path.relative_to(ROOT)}")
    logo = ROOT / "public" / "images" / "logo.svg"
    if logo.exists():
        logo.unlink()
        print(f"  removed {logo.relative_to(ROOT)}")


def main() -> None:
    print("Generating placeholders ...")
    clean_obsolete()
    make_hero()
    make_categories()
    make_icons()
    print("Done.")


if __name__ == "__main__":
    main()
