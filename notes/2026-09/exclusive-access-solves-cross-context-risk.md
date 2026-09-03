---
{
  "id": "note-exclusive-access-solves-cross-context-risk",
  "title": "Exclusive Access Solves Cross-Context Risk",
  "slug": "exclusive-access-solves-cross-context-risk",
  "date_captured": "2026-09-03",
  "category": "authorization",
  "tags": [
    "authorization",
    "access-control",
    "contextual-access",
    "least-privilege",
    "rbac",
    "separation-of-duties",
    "cross-context-risk",
    "databricks"
  ],
  "entities": [
    "Databricks",
    "Unity Catalog"
  ],
  "source_type": "drive-image",
  "drive_id": "18lNJL5xbP8FUTf7Z6skVDLwzOV1-gcD-",
  "drive_name": "IMG_0129.HEIC",
  "drive_link": "https://drive.google.com/file/d/18lNJL5xbP8FUTf7Z6skVDLwzOV1-gcD-/view?usp=drivesdk",
  "note_path": "notes/2026-09/exclusive-access-solves-cross-context-risk.md",
  "image_path": "public/img/notes/2026-09/exclusive-access-solves-cross-context-risk.png",
  "phash": "d02a2b742bf26bf0",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-03T12:04:00Z",
  "summary": "An access-control slide argues that users should assume one task-specific role at a time to prevent risky joins across contexts and persistent elevation."
}
---

# Exclusive Access Solves Cross-Context Risk

![Infographic](/img/notes/2026-09/exclusive-access-solves-cross-context-risk.png)

## Summary
An access-control slide argues that users should assume one task-specific role at a time to prevent risky joins across contexts and persistent elevation.

## Key points
- An HR analyst who can separately select employee and salary data may still be able to join them to a named person, creating cross-context risk.
- An SRE who can manage catalogs and select logs may be able to delete logs or remain elevated beyond the debugging task.
- Exclusive task roles constrain access to one context at a time instead of combining every privilege into a standing role.
- The framing complements granular permissions and contextual authorization with an operational separation-of-duties principle.

## Why I saved this
A concrete illustration of why permissions that look safe in isolation can become unsafe when combined across tasks.

## OCR text

```text
zs

C he)

a

—

Ss

jay

, f

= i

be

SIVE

-

ASSUME

”

ole to nola one context at a time

a

tess

eae oe

See a Se

mie

V—. oe

=e

—_—_———s = |

Cee

ft

ba

Mapreney

i Rae.

——

—_—e

a

~

a 25) |

~

-

Rte

ca,
```

## Source
- **Drive file:** [IMG_0129.HEIC](https://drive.google.com/file/d/18lNJL5xbP8FUTf7Z6skVDLwzOV1-gcD-/view?usp=drivesdk)
- **Captured:** 2026-09-03
