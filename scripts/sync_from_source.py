#!/usr/bin/env python3
"""Sync web pages from the canonical course-source markdown file."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


MARKER = re.compile(r"^<!-- page: (?P<path>[^>]+?) -->\s*$", re.MULTILINE)


def parse_pages(source: Path) -> dict[str, str]:
    text = source.read_text(encoding="utf-8")
    matches = list(MARKER.finditer(text))
    if not matches:
        raise ValueError("no page markers found")
    pages: dict[str, str] = {}
    for index, match in enumerate(matches):
        page_path = match.group("path").strip().replace("/", "\\")
        if page_path in pages:
            raise ValueError(f"duplicate page marker: {page_path}")
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        content = text[match.end():end].lstrip("\r\n")
        pages[page_path] = content.rstrip() + "\n"
    return pages


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        default="../biomedical-rdm/docs/course-source/rdm-mini-course-source.md",
        help="canonical source markdown file",
    )
    parser.add_argument("--check", action="store_true", help="check without writing")
    args = parser.parse_args()

    source = Path(args.source)
    if not source.is_file():
        print(f"source not found: {source}", file=sys.stderr)
        return 1
    try:
        pages = parse_pages(source)
    except (OSError, UnicodeError, ValueError) as exc:
        print(f"cannot read source: {exc}", file=sys.stderr)
        return 1

    mismatches: list[str] = []
    for relative_path, expected in pages.items():
        target = Path(relative_path)
        actual = target.read_text(encoding="utf-8") if target.is_file() else None
        if actual != expected:
            mismatches.append(relative_path)
            if not args.check:
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text(expected, encoding="utf-8", newline="")

    if args.check:
        if mismatches:
            print("out of sync:")
            print("\n".join(f"- {path}" for path in mismatches))
            return 1
        print(f"OK: {len(pages)} pages are in sync")
        return 0

    print(f"synced {len(mismatches)} of {len(pages)} pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
