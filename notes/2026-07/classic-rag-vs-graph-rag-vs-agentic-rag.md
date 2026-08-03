---
id: note-classic-rag-vs-graph-rag-vs-agentic-rag
title: "Classic RAG vs Graph RAG vs Agentic RAG"
slug: classic-rag-vs-graph-rag-vs-agentic-rag
date_captured: 2026-07-25
category: architecture
tags:
  - rag
  - graph-rag
  - agentic-rag
  - knowledge-graph
  - vector-db
  - architecture-comparison
entities:
  - LazyGraphRAG
---

# Classic RAG vs Graph RAG vs Agentic RAG

## Summary

A three-column comparison of RAG architectural patterns: Classic RAG (query-embed-vector DB-top-K chunks-LLM-answer, used for ~70% of use cases like support bots and HR FAQs), Graph RAG (adds entity extraction and knowledge graph traversal for connected context, used for fraud detection and legal entity mapping, referencing Microsoft's 2025 LazyGraphRAG which cuts graph retrieval cost to 0.1%), and Agentic RAG (adds a reasoning agent with self-evaluation loops over vector DB + knowledge graph + tools, used for research workflows and contract analysis).

## Key Points

- Classic RAG covers ~70% of use cases and is the fastest, most cost-efficient pattern
- Graph RAG is used when relationships between data points matter (e.g., fraud detection, legal entity mapping)
- Agentic RAG is used when reasoning across disconnected facts is required
- Microsoft's LazyGraphRAG (2025) dramatically cuts graph retrieval cost to 0.1%
- Agentic RAG adds a self-evaluation loop before producing a final answer
- Use-case mapping: Classic for support/policy/HR, Graph for fraud/legal, Agentic for research/contracts/enterprise support

## Why Yaz Saved This

A clear architectural decision guide for choosing between RAG patterns on Bechtel enterprise AI projects — the cost/complexity tradeoffs (especially LazyGraphRAG's cost reduction) are directly relevant to Azure-based RAG implementation decisions.

![Classic RAG vs Graph RAG vs Agentic RAG](/img/notes/2026-07/classic-rag-vs-graph-rag-vs-agentic-rag.png)
