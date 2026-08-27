---
{
  "id": "note-platform-choice-first-principles",
  "title": "Platform Choice — First Principles",
  "slug": "platform-choice-first-principles",
  "date_captured": "2026-08-27",
  "category": "platform-strategy",
  "tags": [
    "platform-strategy",
    "databricks",
    "enterprise-identity",
    "data-platform",
    "ml-lifecycle",
    "unity-catalog",
    "delta",
    "model-registry",
    "governance",
    "access-control"
  ],
  "entities": [
    "Databricks",
    "Unity Catalog",
    "Delta",
    "Workday SSO",
    "Spark"
  ],
  "source_type": "drive-image",
  "drive_id": "11pqtNj3MmwU0hf-x20PZsnFjMopWzum8",
  "drive_name": "IMG_0155.HEIC",
  "drive_link": "https://drive.google.com/file/d/11pqtNj3MmwU0hf-x20PZsnFjMopWzum8/view",
  "note_path": "notes/2026-08/platform-choice-first-principles.md",
  "image_path": "public/img/notes/2026-08/platform-choice-first-principles.png",
  "phash": "bd942a117a176976",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-27T12:01:00Z"
}
---

# Platform Choice — First Principles

![Infographic](/img/notes/2026-08/platform-choice-first-principles.png)

## Summary
A platform-strategy slide argues that leaving Databricks would mean rebuilding three already-live substrates: enterprise identity, a governed data substrate, and the ML lifecycle.

## Key points
- Enterprise identity connects Workday SSO to Unity Catalog, with row- and column-level access controls enforced at query time by Spark.
- The data substrate includes Unity Catalog, Delta tables, and years of governed enterprise data.
- The ML lifecycle includes model registry, tracing, autologging, embedding stores, and prompt caching.
- The decision frame is that moving to another platform would spend a year rebuilding identity, governance, and data access.

## Why I saved this
A useful first-principles checklist for evaluating platform migration beyond model capability alone.

## OCR text

```text
PLATFORM CHOICE — FIRST PRINCIPLES

Building elsewhere meant rebuilding everything first

Three substrates already live in Databricks. Leaving would mean rebuilding all three.

Enterprise Identity

Data Substrate

ML Lifecycle

Unity Catalog, Delta tables, five years of

Model registry, tracing, autologging,

Workday SSO talks to Unity Catalog

governed enterprise data. Every seller

embedding stores, prompt caching. Every

Row- and column-level ACLs are

model we serve, every prompt.

enforced at query time by Spark

query runs against this stack

Bem: kete

‘If | put this on EKS or Vertex, I'd spend a year rebuilding identity, governance, and data access.
```

## Source
- **Drive file:** [IMG_0155.HEIC](https://drive.google.com/file/d/11pqtNj3MmwU0hf-x20PZsnFjMopWzum8/view)
- **Captured:** 2026-08-27
- **Tags:** #platform-strategy #databricks #enterprise-identity #data-platform #ml-lifecycle #unity-catalog #delta #model-registry #governance #access-control
