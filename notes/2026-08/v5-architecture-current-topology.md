---
{
  "id": "note-v5-architecture-current-topology",
  "title": "V5 Architecture — Current Topology",
  "slug": "v5-architecture-current-topology",
  "date_captured": "2026-08-27",
  "category": "agent-architecture",
  "tags": [
    "agentic-ai",
    "multi-agent-systems",
    "langgraph",
    "graphrag",
    "smolagents",
    "dspy",
    "databricks",
    "fastapi",
    "websocket",
    "security-guard",
    "middleware",
    "vector-search"
  ],
  "entities": [
    "LangGraph",
    "GraphRAG",
    "SmolAgents",
    "DSPy",
    "Databricks Apps",
    "Mosaic AI Gateway",
    "Claude",
    "MongoDB"
  ],
  "source_type": "drive-image",
  "drive_id": "1mHdXrzxbkAx1sEQy04Bi6PK6PmWMq6Kg",
  "drive_name": "IMG_0153.HEIC",
  "drive_link": "https://drive.google.com/file/d/1mHdXrzxbkAx1sEQy04Bi6PK6PmWMq6Kg/view",
  "note_path": "notes/2026-08/v5-architecture-current-topology.md",
  "image_path": "public/img/notes/2026-08/v5-architecture-current-topology.png",
  "phash": "bc35971b38b4350e",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-27T12:01:00Z"
}
---

# V5 Architecture — Current Topology

![Infographic](/img/notes/2026-08/v5-architecture-current-topology.png)

## Summary
A V5 architecture capture describes an in-house multi-agent framework on LangGraph that bridges unstructured and structured data at scale through a layered execution, data-substrate, and middleware design.

## Key points
- Entry and response use Workday SSO, a LangGraph supervisor with reflection, researcher and deep-agent paths, streamed tokens, Plotly charts, data tables, WebSocket, and FastAPI.
- The data substrate combines Unity Catalog, MongoDB chat history and ACLs, Vector Search, and GraphRAG.
- Execution runs on Databricks Apps, a SmolAgent cluster, and Mosaic AI Gateway with Bedrock Claude models.
- Middleware adds a security guard, summary-before-model, dynamic prompts, sanitization, and service-token controls.

## Why I saved this
A concrete reference for the topology and controls required to move from agent experiments toward a production multi-agent system.

## OCR text

```text
—————————

V5 ARCHITECTURE - CURRENT TOPOLOGY

-agent framework on

An in-house multi

LangGraph

ata at scale.

Magneto is t

he framework — it bridges unstructured and structured d

RESPONSE

ENTRY

Researcher ‘ GraphRAG (8

Streamed tokens + Plotly

Deep Agent : Claude Sonnet +

tools) + Data Science -

charts + data tables

WebSocket - FastAPI

Haiku : 8 tools : 6 middleware

Workday SSO

SmolAgent PySpark

LangGraph supervisor + reflection : 2 sub-agents ° DSPy viz - adaptive compute

Security guard - summary-before-model - dynamic prompt - sanitization - service-token

3 - MIDDLEWARE

lifecycle

2 - DATA SUBSTRATE

Unity Catalog (60+ tables) - MongoDB (chat history + ACL + summaries) - Vector Search -

GraphRAG

Databricks Apps runtime - SmolAgent cluster - Mosaic Al Gateway — Bedrock (Claude 4.6 /

1 - EXECUTION

Haiku 4.5)

rN ONE
```

## Source
- **Drive file:** [IMG_0153.HEIC](https://drive.google.com/file/d/1mHdXrzxbkAx1sEQy04Bi6PK6PmWMq6Kg/view)
- **Captured:** 2026-08-27
- **Tags:** #agentic-ai #multi-agent-systems #langgraph #graphrag #smolagents #dspy #databricks #fastapi #websocket #security-guard #middleware #vector-search
