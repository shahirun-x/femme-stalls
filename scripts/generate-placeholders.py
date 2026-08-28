"""
Generate professional placeholder images for the Femme Stalls homepage.
These are intentional-looking gradient placeholders to be swapped for real
photography later. Run from the repo root:

    python scripts/generate-placeholders.py

Outputs to: public/images/placeholder/
"""

from __future__ import annotations

import math
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images" / "placeholder"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Brand palette
FEMME_PINK = (233, 30, 139)
FEMME_PINK_DEEP = (157, 23, 77)
FEMME_ROSE = (181, 34, 91)
GREY = (120, 120, 128)

WIN_FONTS = Path(os.environ.get("SystemRoot", r"C:\Windows")) / "Fonts"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = (
        ["arialbd.ttf", "seguisb.ttf", "segoeuib.ttf"]
        if bold
        else ["arial.ttf", "segoeui.ttf"]
    )
    for name in candidates:
        path = WIN_FONTS / name
        if path.exists():
            return ImageFont.truetype(str(path), size)
    try:
        return ImageFont.truetype("DejaVuSans.ttf", size)
    except OSError:
        return ImageFont.load_default()


def lerp(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def diagonal_gradient(size, start, end) -> Image.Image:
    w, h = size
    img = Image.new("RGB", size)
    px = img.load()
    denom = max(w + h - 2, 1)
    for y in range(h):
        for x in range(w):
            px[x, y] = lerp(start, end, (x + y) / denom)
    return img


def dot_overlay(img: Image.Image, spacing: int = 26, radius: int = 2, alpha: int = 40) -> Image.Image:
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for y in range(spacing // 2, img.height, spacing):
        for x in range(spacing // 2, img.width, spacing):
            d.ellipse([x - radius, y - radius, x + radius, y + radius], fill=(255, 255, 255, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def centered_text(draw, box, lines, fonts, fill, line_gap: int = 8):
    x0, y0, x1, y1 = box
    sizes = []
    for text, f in zip(lines, fonts):
        bbox = draw.textbbox((0, 0), text, font=f)
        sizes.append((bbox[2] - bbox[0], bbox[3] - bbox[1]))
    total_h = sum(h for _, h in sizes) + line_gap * (len(lines) - 1)
    cy = y0 + (y1 - y0 - total_h) / 2
    for (text, f), (tw, th) in zip(zip(lines, fonts), sizes):
        cx = x0 + (x1 - x0 - tw) / 2
        draw.text((cx, cy), text, font=f, fill=fill)
        cy += th + line_gap


def save(img: Image.Image, name: str) -> None:
    path = OUT_DIR / name
    if path.suffix.lower() in (".jpg", ".jpeg"):
        img.convert("RGB").save(path, quality=88)
    else:
        img.save(path)
    print(f"  wrote {path.relative_to(ROOT)}  ({img.size[0]}x{img.size[1]})")


# 1. Hero image ---------------------------------------------------------------
def make_hero() -> None:
    img = diagonal_gradient((800, 600), (255, 200, 224), (255, 224, 196))
    img = dot_overlay(img, spacing=30, radius=2, alpha=32)
    d = ImageDraw.Draw(img, "RGBA")
    d.rounded_rectangle([250, 250, 550, 350], radius=18, fill=(255, 255, 255, 70))
    centered_text(
        d,
        (250, 250, 550, 350),
        ["Community Photo"],
        [font(30, bold=True)],
        fill=(157, 23, 77, 235),
    )
    save(img, "hero-women.jpg")


# 2. Category tiles ----------------------------------------------------------
CATEGORIES = {
    "handicrafts.jpg": ("Handicrafts", (198, 122, 74), (232, 180, 120)),
    "jewellery.jpg": ("Jewellery", (204, 170, 110), (240, 224, 180)),
    "food-snacks.jpg": ("Food & Snacks", (224, 96, 64), (244, 168, 96)),
    "beauty-wellness.jpg": ("Beauty & Wellness", (240, 176, 208), (214, 196, 240)),
    "fashion.jpg": ("Fashion & More", (181, 34, 91), (233, 96, 157)),
}


def make_categories() -> None:
    for fname, (label, start, end) in CATEGORIES.items():
        img = diagonal_gradient((400, 400), start, end)
        img = dot_overlay(img, spacing=34, radius=2, alpha=28)
        d = ImageDraw.Draw(img, "RGBA")
        d.ellipse([150, 120, 250, 220], outline=(255, 255, 255, 210), width=4)
        d.line([170, 170, 230, 170], fill=(255, 255, 255, 210), width=4)
        d.line([200, 140, 200, 200], fill=(255, 255, 255, 210), width=4)
        centered_text(
            d, (20, 250, 380, 320), [label], [font(28, bold=True)], fill=(255, 255, 255, 240)
        )
        save(img, fname)


# 3. Event logo badge ------------------------------------------------------
def make_event_logo() -> None:
    img = Image.new("RGBA", (300, 300), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([10, 10, 290, 290], outline=FEMME_PINK, width=6)
    d.ellipse([26, 26, 274, 274], outline=FEMME_PINK, width=2)
    for i in range(36):
        ang = math.radians(i * 10)
        r1, r2 = 128, 138
        cx, cy = 150, 150
        d.line(
            [
                cx + r1 * math.cos(ang),
                cy + r1 * math.sin(ang),
                cx + r2 * math.cos(ang),
                cy + r2 * math.sin(ang),
            ],
            fill=FEMME_PINK,
            width=3,
        )
    centered_text(
        d,
        (30, 90, 270, 210),
        ["FEMME", "STALLS", "KILAKARAI"],
        [font(40, bold=True), font(40, bold=True), font(20, bold=True)],
        fill=FEMME_PINK_DEEP,
        line_gap=6,
    )
    save(img, "femme-stalls-event-logo.png")


# 4. Partner / media / sponsor / institution logos --------------------------
PARTNER_LOGOS = {
    "geohomz.png": ("Geohomz Initiatives", FEMME_PINK),
    "partner-2.png": ("Partner Name", GREY),
    "partner-3.png": ("Partner Name", GREY),
    "partner-4.png": ("Partner Name", GREY),
    "partner-5.png": ("Partner Name", GREY),
    "media-1.png": ("Media Partner", GREY),
    "media-2.png": ("Media Partner", GREY),
    "media-3.png": ("Media Partner", GREY),
    "sponsor-1.png": ("Sponsor Name", GREY),
    "sponsor-2.png": ("Sponsor Name", GREY),
    "institution-1.png": ("Institution Name", GREY),
    "institution-2.png": ("Institution Name", GREY),
}


def make_partner_logos() -> None:
    for fname, (label, colour) in PARTNER_LOGOS.items():
        img = Image.new("RGBA", (200, 80), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        d.rounded_rectangle([2, 2, 198, 78], radius=10, outline=colour + (140,), width=2)
        d.ellipse([14, 26, 42, 54], fill=colour + (255,))
        centered_text(d, (50, 0, 196, 80), [label], [font(15, bold=True)], fill=colour + (255,))
        save(img, fname)


# 5. Registrations badge --------------------------------------------------
def make_registrations_badge() -> None:
    img = Image.new("RGBA", (200, 200), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    red = (200, 30, 70)
    d.ellipse([8, 8, 192, 192], outline=red, width=6)
    d.ellipse([20, 20, 180, 180], outline=red, width=2)
    centered_text(
        d,
        (24, 40, 176, 160),
        ["REGISTRATIONS", "OPEN", "SOON!"],
        [font(20, bold=True), font(26, bold=True), font(30, bold=True)],
        fill=red,
        line_gap=6,
    )
    img = img.rotate(-10, resample=Image.BICUBIC, expand=False)
    save(img, "registrations-badge.png")


def main() -> None:
    print(f"Generating placeholders into {OUT_DIR.relative_to(ROOT)} ...")
    make_hero()
    make_categories()
    make_event_logo()
    make_partner_logos()
    make_registrations_badge()
    print("Done.")


if __name__ == "__main__":
    main()
