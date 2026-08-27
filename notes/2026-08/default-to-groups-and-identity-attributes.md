---
{
  "id": "note-default-to-groups-and-identity-attributes",
  "title": "Default to Groups and Identity Attributes",
  "slug": "default-to-groups-and-identity-attributes",
  "date_captured": "2026-08-27",
  "category": "authorization",
  "tags": [
    "authorization",
    "identity",
    "access-control",
    "groups",
    "identity-attributes",
    "mapping-tables",
    "udfs",
    "governance",
    "databricks"
  ],
  "entities": [
    "Databricks",
    "session_user"
  ],
  "source_type": "drive-image",
  "drive_id": "1MN2rVmJnvZVxqUkHNL8IYKGdc8eTD4Ha",
  "drive_name": "IMG_0131.HEIC",
  "drive_link": "https://drive.google.com/file/d/1MN2rVmJnvZVxqUkHNL8IYKGdc8eTD4Ha/view",
  "note_path": "notes/2026-08/default-to-groups-and-identity-attributes.md",
  "image_path": "public/img/notes/2026-08/default-to-groups-and-identity-attributes.png",
  "phash": "947f542f54ee4087",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-27T12:01:00Z"
}
---

# Default to Groups and Identity Attributes

![Infographic](/img/notes/2026-08/default-to-groups-and-identity-attributes.png)

## Summary
An authorization guidance slide recommends groups and stable identity attributes for most access rules, reserving mapping-table lookups for decisions that genuinely depend on runtime context.

## Key points
- Platform-managed user information is faster to evaluate, evaluated once per session, easier to reason about, and automatable.
- Use groups for membership-based access, teams, roles, and policy target or exception groups.
- Use stable identity attributes such as department, region, and clearance for attribute-based rules.
- Use custom lookup functions or mapping tables when decisions depend on approval state, delegation, assignment, or arbitrary table contents; these are more costly and harder to track.

## Why I saved this
A practical least-complexity pattern for keeping enterprise authorization understandable and efficient.

## OCR text

```text
i

@

rt

i

-

=

avila 1 Wm ¢

=

{

he rule rea ly aeper

Hles wnen t

JSE mapping f:|

,- 0
```

## Source
- **Drive file:** [IMG_0131.HEIC](https://drive.google.com/file/d/1MN2rVmJnvZVxqUkHNL8IYKGdc8eTD4Ha/view)
- **Captured:** 2026-08-27
- **Tags:** #authorization #identity #access-control #groups #identity-attributes #mapping-tables #udfs #governance #databricks
