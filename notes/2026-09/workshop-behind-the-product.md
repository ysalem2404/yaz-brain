---
{
  "id": "note-workshop-behind-the-product",
  "title": "The Workshop Behind the Product",
  "slug": "workshop-behind-the-product",
  "date_captured": "2026-09-03",
  "category": "production-ai",
  "tags": [
    "production-ai",
    "databricks",
    "unity-catalog",
    "graphrag",
    "evaluation",
    "deep-eval",
    "ai-gateway",
    "document-parsing",
    "feature-store",
    "auditability"
  ],
  "entities": [
    "Databricks",
    "Unity Catalog",
    "GraphRAG",
    "DeepEval",
    "AI Gateway"
  ],
  "source_type": "drive-image",
  "drive_id": "1IXkoxXe1BvBxZbk1d-SPqOzhdjvVTZfT",
  "drive_name": "IMG_0161.HEIC",
  "drive_link": "https://drive.google.com/file/d/1IXkoxXe1BvBxZbk1d-SPqOzhdjvVTZfT/view?usp=drivesdk",
  "note_path": "notes/2026-09/workshop-behind-the-product.md",
  "image_path": "public/img/notes/2026-09/workshop-behind-the-product.png",
  "phash": "80003fc13fd63fd5",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-03T12:04:00Z",
  "summary": "A production case study shows an AI product built by testing approaches as governed Delta tables, measuring quality, and shipping a unified data and gateway architecture."
}
---

# The Workshop Behind the Product

![Infographic](/img/notes/2026-09/workshop-behind-the-product.png)

## Summary
A production case study shows an AI product built by testing approaches as governed Delta tables, measuring quality, and shipping a unified data and gateway architecture.

## Key points
- Evaluated approaches are stored in Unity Catalog as lineage-tracked, reproducible, governed Delta tables.
- The workshop compares chunking, GraphRAG on GPUs, community detection, and fast lexical-plus-LLM approaches using evaluation scores before shipping.
- One AI Gateway fronts three backends and 16-plus endpoints, while ingestion supports multiple formats and document parsing services.
- Feature-store choices, bronze-to-silver-to-gold layers, tens of millions of auditable calls, and a shared ACL fabric make the product operational rather than merely demonstrative.

## Why I saved this
A useful “behind the product” view of experimentation, evaluation, governance, and platform integration as one delivery loop.

## OCR text

```text
THE WORKSHOP BEHIND THE PRODUCT

We didn't pick the first thing that worked. We proved the

winner.

Every approach we evaluated lives as a Delta table in Unity Catalog — lineage-tracked, reproducible, governed.

News NER

Chunking

GraphRAG - GPU

° approaches tested - GPU-cluster

9 strategies - DeepEval-scored

cuGraph - Leiden 13.5x community

shipped

detection

¥ Interquartile shipped

¥ FlashText + GPU LLM

¥ + pickle cache - 400~x fast

Al Gateway

Ingestion

Feature store

One gateway - three backends

16+ endpoints

Multi-format - BDA + Al Parse PDF

Tecton > Databricks Feature Store

Y Bronze > Silver > Gold

Y ~49M calls - audit as Delta

“ PAS + PtB- one ACL fabric

_

UA YES. EVER
```

## Source
- **Drive file:** [IMG_0161.HEIC](https://drive.google.com/file/d/1IXkoxXe1BvBxZbk1d-SPqOzhdjvVTZfT/view?usp=drivesdk)
- **Captured:** 2026-09-03
