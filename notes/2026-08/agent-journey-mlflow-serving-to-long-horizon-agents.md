---
{
  "id": "note-agent-journey-mlflow-serving-to-long-horizon-agents",
  "title": "Agent Journey — From MLflow Serving to Long-Horizon Agents",
  "slug": "agent-journey-mlflow-serving-to-long-horizon-agents",
  "date_captured": "2026-08-28",
  "category": "agent-architecture",
  "tags": [
    "agentic-ai",
    "agents",
    "mlflow",
    "model-serving",
    "long-horizon-workflows",
    "timeouts",
    "rag",
    "graphrag",
    "reflection",
    "databricks"
  ],
  "entities": [
    "Databricks",
    "MLflow Model Serving"
  ],
  "source_type": "drive-image",
  "drive_id": "1zmcwKntJnPTVR-NHtEA_LpGiqqsqoSYY",
  "drive_name": "IMG_0157.HEIC",
  "drive_link": "https://drive.google.com/file/d/1zmcwKntJnPTVR-NHtEA_LpGiqqsqoSYY/view",
  "note_path": "notes/2026-08/agent-journey-mlflow-serving-to-long-horizon-agents.md",
  "image_path": "public/img/notes/2026-08/agent-journey-mlflow-serving-to-long-horizon-agents.png",
  "phash": "cdb5952e166a326a",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-28T12:09:00Z"
}
---

# Agent Journey — From MLflow Serving to Long-Horizon Agents

![Infographic](/img/notes/2026-08/agent-journey-mlflow-serving-to-long-horizon-agents.png)

## Summary
A journey slide describes how an initially successful MLflow Model Serving deployment hit infrastructure timeout ceilings as RAG, graph-RAG, analytical, and reflective agent workflows grew longer and more multi-step.

## Key points
- Early deployments served RAG, GraphRAG, and short lookups through MLflow Model Serving.
- Analytical agents introduced multi-step Spark, retrieval, and reflection workflows that often took more than four minutes end to end.
- Increasing MLflow and Gunicorn request limits still left a practical ceiling around three minutes in the depicted setup.
- The core lesson is that model-serving infrastructure is not automatically a suitable substrate for long-horizon agents.

## Why I saved this
A clear architecture signal for separating model-serving assumptions from agent-runtime requirements.

## OCR text

```text
JOURNEY - ACTI

MLflow Model Serving got us to v1. Then the agent grew up.

2024 — EARLY 2025

INFRASTRUCTURE TIMEOUT CEILING

Shipped Magneto via mlflow.pyfunc.log model +

databricks.agents.deploy. Served RAG, graph-RAG, and

short lookups successfully.

MID 2025

300s

Added analytical agents. Simple tasks became multi-step Spark +

retrieval + reflection workflows, often taking 4+ minutes end-to-end

HARD LIMIT - STILL CAPPED

MLFLOW_DEPLOYMENT_PREDICT_TIMEOUT

THE WALL

MLFLOW_HTTP_REQUEST_TIMEOUT

GUNICORN_TIMEOUT

Maxed out timeouts at 600s, yet remained capped at ~3 min.

MLflow Serving was built for models, but agents aren't models

j

Vi INNA

he

A

NEE)

ka

kb
```

## Source
- **Drive file:** [IMG_0157.HEIC](https://drive.google.com/file/d/1zmcwKntJnPTVR-NHtEA_LpGiqqsqoSYY/view)
- **Captured:** 2026-08-28
- **Tags:** #agentic-ai #agents #mlflow #model-serving #long-horizon-workflows #timeouts #rag #graphrag #reflection #databricks
