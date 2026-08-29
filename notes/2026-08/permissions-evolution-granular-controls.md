---
{
  "id": "note-permissions-evolution-granular-controls",
  "title": "Permissions Evolution — Granular Controls",
  "slug": "permissions-evolution-granular-controls",
  "date_captured": "2026-08-29",
  "category": "authorization",
  "tags": [
    "authorization",
    "permissions",
    "least-privilege",
    "rbac",
    "access-control",
    "metadata",
    "manage-access-control",
    "databricks"
  ],
  "entities": [
    "Databricks",
    "SRE",
    "Governance Admin"
  ],
  "source_type": "drive-image",
  "drive_id": "1Xd34NvgmUq0fivnCe4LdDvwxk3duSLpJ",
  "drive_name": "IMG_0121.HEIC",
  "drive_link": "https://drive.google.com/file/d/1Xd34NvgmUq0fivnCe4LdDvwxk3duSLpJ/view",
  "note_path": "notes/2026-08/permissions-evolution-granular-controls.md",
  "image_path": "public/img/notes/2026-08/permissions-evolution-granular-controls.png",
  "phash": "942a6a6d32366f6a",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-29T12:10:00Z"
}
---

# Permissions Evolution — Granular Controls

![Infographic](/img/notes/2026-08/permissions-evolution-granular-controls.png)

## Summary
A private-preview slide shows how a broad MANAGE permission can be split into narrower controls so each task receives only the access it needs.

## Key points
- The previous MANAGE permission bundled viewing grants, granting permissions, editing metadata, and deleting.
- New controls separate READ METADATA from MANAGE ACCESS CONTROL, allowing more precise delegation.
- The governance-admin example grants SREs only READ METADATA, reinforcing least-privilege access.

## Why I saved this
A concrete example of evolving coarse permissions into task-specific controls.

## OCR text

```text
Permissions evolution: Granular controls. Private Preview. Split MANAGE so each task gets only what it needs. Before: MANAGE provides elevated controls — view grants, grant permissions, edit metadata, delete. New: READ METADATA — view grants, policies, object properties. New: MANAGE ACCESS CONTROL — grant and revoke permissions, view metadata. Governance admin: Ensure least privilege access. GRANT READ METADATA TO SREs.
```

## Source
- **Drive file:** [IMG_0121.HEIC](https://drive.google.com/file/d/1Xd34NvgmUq0fivnCe4LdDvwxk3duSLpJ/view)
- **Captured:** 2026-08-29
- **Tags:** #authorization #permissions #least-privilege #rbac #access-control #metadata #manage-access-control #databricks
