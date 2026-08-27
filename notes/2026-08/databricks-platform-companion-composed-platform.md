---
{
  "id": "note-databricks-platform-companion-composed-platform",
  "title": "Databricks Platform Companion — Composed Platform",
  "slug": "databricks-platform-companion-composed-platform",
  "date_captured": "2026-08-27",
  "category": "enterprise-ai-platform",
  "tags": [
    "databricks",
    "enterprise-ai",
    "ai-platform",
    "mlflow",
    "mosaic-ai-gateway",
    "unity-catalog",
    "delta",
    "vector-search",
    "graphrag",
    "observability",
    "llm-evaluation"
  ],
  "entities": [
    "Databricks",
    "Mosaic AI Gateway",
    "MLflow",
    "Unity Catalog",
    "Delta",
    "Vector Search",
    "GraphRAG"
  ],
  "source_type": "drive-image",
  "drive_id": "1lcXIDrn6WEF0e5lPqZyB3vM5cBc8hT22",
  "drive_name": "IMG_0160.HEIC",
  "drive_link": "https://drive.google.com/file/d/1lcXIDrn6WEF0e5lPqZyB3vM5cBc8hT22/view",
  "note_path": "notes/2026-08/databricks-platform-companion-composed-platform.md",
  "image_path": "public/img/notes/2026-08/databricks-platform-companion-composed-platform.png",
  "phash": "aa95952a346b352f",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-27T12:01:00Z"
}
---

# Databricks Platform Companion — Composed Platform

![Infographic](/img/notes/2026-08/databricks-platform-companion-composed-platform.png)

## Summary
A case-study slide argues that an AI companion is only the tip of the system: the underlying Databricks platform composes governed data, workflows, feature store, vector search, model registry, tracing, evaluation, and runtime products.

## Key points
- The companion sits above Databricks Apps, Mosaic AI Gateway, MLflow Registry, Feature Store, Unity Catalog and Delta, Workflows and DLT, Vector Search, MLflow Traces with OpenTelemetry, and evaluation.
- The reported deployment combines 5,872 sellers, six companions, 80,000 Spark queries per day, 5,000-plus governed features, 60-plus queryable tables, and a 12-task go-to-market DAG.
- The slide frames the architectural choice as composition rather than building a separate stack from scratch.

## Why I saved this
A compact reference for explaining why enterprise agent projects depend on the platform layers below the visible assistant.

## OCR text

```text
THE PLATFORM IS THE STORY ° COMPANION IS THE TIP

The agent is the tip. Every layer below is a Databricks product.

$1.85B

Sales Lift

Success Rate

Tasks / Hr Peak

5,872 sellers - 6 companions

3h 29m max run: streamed

80K Spark queries / day

DATABRICKS APPS

MOSAIC Al GATEWAY

MLFLOW REGISTRY

FastAPI runtime : 3-min > 3h 29m

Unified front door : 49M+ calls

11 supervised ML systems

FEATURE STORE

UNITY CATALOG + DELTA

WORKFLOWS + DLT

5,000+ governed features

60+ queryable tables - Spark ACL

12-task GTM DAG - Bronze>Gold

VECTOR SEARCH

MLFLOW TRACES + OTEL

EVAL + LLM-AS-JUDGE

GraphRAG : 77-80% token reduction

355K traces : 9.35M+ spans

Workshop-as-Delta : lineage-tracked

“We didn’t build a stack. We composed the platform.”

ss

(oe
```

## Source
- **Drive file:** [IMG_0160.HEIC](https://drive.google.com/file/d/1lcXIDrn6WEF0e5lPqZyB3vM5cBc8hT22/view)
- **Captured:** 2026-08-27
- **Tags:** #databricks #enterprise-ai #ai-platform #mlflow #mosaic-ai-gateway #unity-catalog #delta #vector-search #graphrag #observability #llm-evaluation
