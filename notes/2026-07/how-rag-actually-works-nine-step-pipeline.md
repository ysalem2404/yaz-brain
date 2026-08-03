---
id: note-how-rag-actually-works-nine-step-pipeline
title: "How RAG Actually Works: The Full Nine-Step Retrieval Pipeline"
slug: how-rag-actually-works-nine-step-pipeline
date_captured: 2026-07-02
category: architecture
tags:
  - rag
  - retrieval-augmented-generation
  - vector-search
  - reranking
  - hallucination
entities:
  - Brij Kishore Pandey
---

# How RAG Actually Works: The Full Nine-Step Retrieval Pipeline

## Summary

Brij Kishore Pandey's detailed nine-step diagram traces the full RAG pipeline from user query to grounded answer: query processing (rewriting, decomposition, HyDE), embedding, hybrid search (vector + BM25 fused via RRF), vector database retrieval of top-K candidates, cross-encoder reranking (flagged as 'the most underrated step'), context assembly with dedup/citation attachment, LLM generation constrained to assembled context, and a final grounding check that traces every claim to a source chunk. Side panels call out where hallucinations sneak in (bad chunking, stale index, no reranker, missing grounding check), chunking tradeoffs (small chunks = precision, big chunks = context, 10-20% overlap), the value of caching embeddings/retrievals, and a 2026 shift from static RAG toward agentic retrieval where the agent decides when and what to search.

## Key Points

- Nine numbered steps: user query → query processing → embedding → hybrid search → vector database → reranking → context assembly → generation → grounding check
- Reranking (cross-encoder scoring of query + chunk together) is called 'the most underrated step in the pipeline'
- Grounding check requires every claim traced to a source chunk — 'no source, no claim' — as the final hallucination defense
- Hallucination sources named explicitly: bad chunking, stale index, no reranker, missing grounding check
- Chunking tradeoff rule of thumb: small chunks favor precision, large chunks favor context, with 10-20% overlap recommended
- 2026 shift flagged: static RAG is being replaced by agentic retrieval, where the agent itself decides when and what to search rather than following a fixed pipeline

## Why Yaz Saved This

A precise architectural reference for RAG pipeline design decisions Yaz makes when building enterprise knowledge-base and embedding systems — the reranking and grounding-check emphasis directly informs his RAG-vs-Work-IQ evaluation work.

![How RAG Actually Works: The Full Nine-Step Retrieval Pipeline](/img/notes/2026-07/how-rag-actually-works-nine-step-pipeline.png)
