---
id: note-rag-vs-agentic-rag-comparison-datasciencedojo
title: "RAG vs Agentic RAG: How Retrieval-Augmented Generation Evolves with Agents"
slug: rag-vs-agentic-rag-comparison-datasciencedojo
date_captured: 2026-05-29
category: architecture
tags:
  - rag
  - agentic-rag
  - vector-database
  - query-rewriting
  - self-reflection
entities:
  - Data Science Dojo
---

# RAG vs Agentic RAG: How Retrieval-Augmented Generation Evolves with Agents

## Summary

Data Science Dojo's side-by-side comparison contrasts classic RAG's linear seven-step flow (encode query, index in vector DB, similarity search, retrieve context, prompt LLM, generate response) with Agentic RAG's eleven-step iterative flow, which adds query rewriting, a 'need more details?' decision point, source selection among vector DB/tools-APIs/internet, and a final relevance check that can loop back to rewrite the query if the answer isn't satisfactory before producing the final response.

## Key Points

- Classic RAG: 7-step linear flow — encode query, index, similarity search, retrieve context, prompt, generate, respond
- Agentic RAG: 11-step iterative flow with decision points for 'need more details?' and 'is the answer relevant?'
- Agentic RAG can select among multiple sources: vector DB, tools/APIs, and internet search
- Agentic RAG includes a query rewrite loop that fires when the initial answer isn't deemed relevant
- Core distinction: classic RAG retrieves once and answers; agentic RAG iterates and self-corrects before finalizing

## Why Yaz Saved This

Clean visual comparison that complements Yaz's other saved RAG architecture references, useful for explaining the practical difference between classic and agentic RAG to stakeholders.

![RAG vs Agentic RAG: How Retrieval-Augmented Generation Evolves with Agents](/img/notes/2026-05/rag-vs-agentic-rag-comparison-datasciencedojo.png)
