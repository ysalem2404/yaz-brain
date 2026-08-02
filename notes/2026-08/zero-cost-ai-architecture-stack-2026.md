---
id: note-zero-cost-ai-architecture-stack-2026
title: "The $0 AI Architecture Stack (2026 Edition)"
slug: zero-cost-ai-architecture-stack-2026
date_captured: 2026-08-02
category: architecture
tags: [free-tier, self-hosted, open-source, rag, agent-orchestration, observability, mcp, ollama, langgraph, chromadb]
source_type: drive-image
drive_id: 16w7y3CaijXs8OyWzwZ3OjChhCV0HdWdx
drive_name: "Screenshot 2026-08-02 at 1.01.10 PM.png"
drive_link: https://drive.google.com/file/d/16w7y3CaijXs8OyWzwZ3OjChhCV0HdWdx/view
image_path: public/img/notes/2026-08/zero-cost-ai-architecture-stack-2026.png
---

# The $0 AI Architecture Stack (2026 Edition)

![Infographic](public/img/notes/2026-08/zero-cost-ai-architecture-stack-2026.png)

## Summary
A 12-layer reference architecture for building a production-grade AI stack entirely on free tiers and open-weight models. Covers frontend, agent orchestration, RAG (Docling + BGE-M3 + ChromaDB + reranker), local LLM inference via Ollama with modern open models (Llama 3.3, Mistral Small 4, Qwen 3, Gemma 3, DeepSeek-R1, Phi-4), MCP-based tool use, code agents (Aider/OpenHands/Claude Code), memory (SQLite/Redis/LangGraph Store), guardrails (Guardrails AI, Promptfoo, Ragas), observability (Phoenix, Langfuse, OpenTelemetry), and free deployment surfaces (Docker, Cloudflare Workers, HF Spaces, Oracle Cloud Always Free VM).

## Key points
- Complete 12-layer stack: Input → Frontend → Orchestrator → RAG or LLM → Tools/MCP → Code → Memory → Guardrails → Observability → Deployment
- Concrete free-tier picks for each layer (e.g. Vercel free, ChromaDB, Ollama for local inference, Cloudflare Workers)
- MCP explicitly called out as the standard for tool use — reinforces the 'USB-C for AI' pattern
- Observability treated as a first-class layer (Phoenix/Langfuse/OTEL) — often missed in beginner stacks
- Guardrails AI + Promptfoo + Ragas as the eval + safety trio

## Entities & tools mentioned
Next.js, Streamlit, Vercel, LangGraph, CrewAI, Docling, BGE-M3, ChromaDB, BGE-Reranker-v2, Ollama, Llama 3.3 70B, Mistral Small 4, Qwen 3, Gemma 3, DeepSeek-R1, Phi-4, MCP, Aider, OpenHands, Claude Code, SQLite, Redis, DuckDB, Supabase, Guardrails AI, Promptfoo, Ragas, Phoenix, Langfuse, OpenTelemetry, Docker, Cloudflare Workers, Hugging Face Spaces, Oracle Cloud

## Why I saved this
Yaz's enterprise AI architecture work often has to demonstrate that a full production pattern can be prototyped without procurement — this is a compact reference for that conversation. Also directly relevant to his personal LLM lab and Ollama experimentation.

## Source
- **Drive file:** [Screenshot 2026-08-02 at 1.01.10 PM.png](https://drive.google.com/file/d/16w7y3CaijXs8OyWzwZ3OjChhCV0HdWdx/view)
- **Captured:** 2026-08-02
- **Tags:** #free-tier #self-hosted #open-source #rag #agent-orchestration #observability #mcp #ollama #langgraph #chromadb
