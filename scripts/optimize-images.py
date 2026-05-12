"""
Optimize all images in src/assets/image:
- Convert JPG/PNG to WebP (quality 82)
- Re-compress existing WebP files that are oversized (>200KB) at quality 78
- Downsample images wider than 1400px
"""
import os
from pathlib import Path
from PIL import Image

ASSETS_DIR = Path(__file__).parent.parent / "src" / "assets" / "image"
WEBP_QUALITY = 82
RECOMPRESS_QUALITY = 78
RECOMPRESS_THRESHOLD_KB = 200
MAX_WIDTH = 1400

def human(size):
    return f"{size / 1024:.0f}KB"

def optimize(path: Path):
    original_size = path.stat().st_size
    ext = path.suffix.lower()

    try:
        img = Image.open(path).convert("RGBA") if ext == ".png" else Image.open(path)

        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            img = img.resize((MAX_WIDTH, int(img.height * ratio)), Image.LANCZOS)

        if ext in (".jpg", ".jpeg", ".png"):
            out_path = path.with_suffix(".webp")
            if ext == ".png":
                img.save(out_path, "WEBP", quality=WEBP_QUALITY, method=6)
            else:
                img.convert("RGB").save(out_path, "WEBP", quality=WEBP_QUALITY, method=6)
            new_size = out_path.stat().st_size
            saving = 100 * (1 - new_size / original_size)
            print(f"  CONVERTED  {path.name} -> {out_path.name}  {human(original_size)} -> {human(new_size)}  ({saving:.0f}% smaller)")
            if new_size < original_size:
                path.unlink()
            return

        if ext == ".webp" and original_size > RECOMPRESS_THRESHOLD_KB * 1024:
            img.save(path, "WEBP", quality=RECOMPRESS_QUALITY, method=6)
            new_size = path.stat().st_size
            saving = 100 * (1 - new_size / original_size)
            print(f"  RECOMPRESSED {path.name}  {human(original_size)} -> {human(new_size)}  ({saving:.0f}% smaller)")
            return

        print(f"  SKIP  {path.name}  {human(original_size)}")

    except Exception as e:
        print(f"  ERROR  {path.name}: {e}")

def main():
    images = sorted(
        p for p in ASSETS_DIR.rglob("*")
        if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp") and p.is_file()
    )
    print(f"Found {len(images)} images\n")
    for p in images:
        optimize(p)
    print("\nDone.")

if __name__ == "__main__":
    main()
