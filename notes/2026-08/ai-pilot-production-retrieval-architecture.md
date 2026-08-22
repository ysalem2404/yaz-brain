---
{
  "id": "note-ai-pilot-production-retrieval-architecture",
  "title": "AI Pilot — Production Retrieval Architecture",
  "slug": "ai-pilot-production-retrieval-architecture",
  "date_captured": "2026-08-20",
  "category": "agentic-ai",
  "tags": [
    "rag",
    "retrieval",
    "agentic-ai",
    "ai-architecture",
    "orchestration",
    "guardrails",
    "observability",
    "governance",
    "vector-database"
  ],
  "entities": [
    "RAG",
    "OAuth",
    "RBAC",
    "OIDC"
  ],
  "source_type": "drive-image",
  "drive_id": "1sSpRFXc421AJrIY97vK9EILkGTAYrF0L",
  "drive_name": "Screenshot 2026-08-20 at 8.14.31 PM.png",
  "drive_link": "https://drive.google.com/file/d/1sSpRFXc421AJrIY97vK9EILkGTAYrF0L/view",
  "image_path": "public/img/notes/2026-08/ai-pilot-production-retrieval-architecture.png",
  "ocr": "local_tesseract_fallback"
}
---

# AI Pilot — Production Retrieval Architecture

![Infographic](/img/notes/2026-08/ai-pilot-production-retrieval-architecture.png)

## Summary
A production AI Pilot architecture connects user channels and SSO to an orchestrator with prompt management, memory, tools, human approval, retrieval components, business APIs, and an operations and governance layer.

## Key points
- Production architecture adds identity, API gateway, rate limits, and guardrails around the model interaction
- RAG combines embeddings, vector search, reranking, and context assembly before answers are generated
- Observability, security, review, privacy, audit, compliance, and capacity planning operate alongside the application

## Why I saved this
A useful architecture checklist for distinguishing a demo flow from a production-grade AI system.

## OCR text

```text
Prashant Rathi

Al Pilot —

Knowledge
Retrieval

Answer

Simple demo flow

Actual Al Implementation

What real production architecture looks like

Channels/ interfaces hentication / SSO

6] (8) (+) (6) B G |e sz fe

Web App Mobile App. Slack Teams Email API Clients SSO OIDC/ OAuth RBAC / ABAC

Input / Output
Guardrails
(Handles Both)

API Gateway Rate Limits

I

Orchestrator / Ag

Prompt
management

Memory I state @ J reflect
I
# [©

Tools / function} Workflow || Human-in-the-
calling engine loop approval

be || [| © t=)

Quer Vector
embedding] | database Reranker ‘context

Oo

Business systems /
APIs

embedd-
ing

op)
| document
J

indexing

Operations, Observability & Governance

Observability) 2)
monitoring / frases / security ) q
| Ue s / alerts ai © review J cle EO) eA

policies /
governance

capacity

sla
| planning

data privacy = management

audit /
compliance
```

## Source
- **Drive file:** [Screenshot 2026-08-20 at 8.14.31 PM.png](https://drive.google.com/file/d/1sSpRFXc421AJrIY97vK9EILkGTAYrF0L/view)
- **Captured:** 2026-08-20
