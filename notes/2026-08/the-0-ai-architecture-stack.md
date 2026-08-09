---
id: note-the-0-ai-architecture-stack
title: "The $0 AI Architecture Stack"
slug: the-0-ai-architecture-stack
date_captured: 2026-08-04
category: ai-engineering
tags:
  - ai-stack
  - agents
  - rag
  - ollama
  - mcp
  - langfuse
  - observability
  - streamlit
  - fastapi
  - embeddings
  - reranking
  - open-source
entities:
  - Ollama
  - CrewAI
  - LangGraph
  - Docling
  - BGE-M3
  - BGE-Reranker-v2
  - Langfuse
  - MCP
  - Streamlit
  - FastAPI
source_type: drive-image
drive_id: 1aLNzdopqf1RGk50oX6oE9Frr7vKU7Efn
drive_name: "Screenshot 2026-08-03 at 9.25.44 PM.png"
drive_link: https://drive.google.com/file/d/1aLNzdopqf1RGk50oX6oE9Frr7vKU7Efn/view
image_path: public/img/notes/2026-08/the-0-ai-architecture-stack.png
---

# The $0 AI Architecture Stack

![Infographic](/img/notes/2026-08/the-0-ai-architecture-stack.png)

## Summary
A 2026 reference stack lays out a zero-cost AI application from frontend and orchestration through RAG, local models, MCP tool use, memory, and observability.

## Key points
- The stack combines a frontend, agent orchestrator, RAG pipeline, local open-weight models, and tool use via MCP
- Docling, BGE-M3, BGE-Reranker-v2, Ollama, and Langfuse cover ingestion, retrieval, inference, and telemetry
- The design emphasizes open components and free tiers for a practical end-to-end prototype

## Why I saved this
A strong systems map for building a low-cost agentic application without starting from a blank architecture.

## OCR text

```text
THE $0 Al ARCHITECTURE STACK

C1) User Input

Web ,Mobile, CLI

pe ea

' ©

Observability © (chromaps)

Monitor, trace
and evaluate

2026 EDITION (ES
Qo!

(2) Frontend Layer a] if e Agent Orchestrator

Captures input and Plans tasks and routes
streams responses to tools, RAG, or LLM

|
pact ona | Qs on
wae Streamlit tangorceh

© Vercel (free tier) P @ Crew al

ane
ame

@
(5) RAG Pipeline

Need external
knowledge?

LLM Layer

Get relevant context Run open-weight models
from your documents. locally
* a Ollama

(?) Ingest & Chunk

(Docling) OQ Hama 3.3 708

© Mistral small 4

5) Qwen 3/Gemma 3
© Deepseek-RI/Phi-4 ‘:

t

Context

</> Embed (BGE-M3)
Store & Search

_) Rerank
ail (BoE-Reranker-v2)

the system Application o
State (7) Tool Use via MCP
i +------~
encore Connects to
ternal systems =
Langf ex y’ box

1S Langfuse se and data. i

> Open Memory, Data & Cache |
“Telemetry Store data, memory and speed up ] BR

4 ~

S

1@----0--

responses

Code Agent
writes, edits and tests

a) @vemo (memory) @ satite

code.
| @ Redis (cache) © vuckoe O Aider
\@ LangGraph store “jp Supabase (free tier) 6® OpenHands
€23 claude code
---, Guardrails & Evals Y
¢ Ensure quality, safety and evaluate |
1 outputs ~
i ©) cuardrails Al @ Promptfoo »—- Ragas
1
+ $ I
Deployment i
Cloudflare Hugging Face Oracle Cloud
Dock

peoy ony where for w) acne Workers (free) Spaces (Always Free VM) 3
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 9.25.44 PM.png](https://drive.google.com/file/d/1aLNzdopqf1RGk50oX6oE9Frr7vKU7Efn/view)
- **Captured:** 2026-08-04
- **Tags:** #ai-stack #agents #rag #ollama #mcp #langfuse #observability #streamlit #fastapi #embeddings #reranking #open-source
