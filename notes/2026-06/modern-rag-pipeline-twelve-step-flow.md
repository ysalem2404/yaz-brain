---
id: note-modern-rag-pipeline-twelve-step-flow
title: "The Modern RAG Pipeline: 12-Step Ingestion-to-Citation Flow"
slug: modern-rag-pipeline-twelve-step-flow
date_captured: 2026-06-04
category: architecture
tags:
  - rag
  - vector-database
  - hybrid-search
  - reranking
  - citations
  - llm
entities:
  - Brij Kishore Pandey
---

# The Modern RAG Pipeline: 12-Step Ingestion-to-Citation Flow

## Summary

Brij Kishore Pandey's twelve-step RAG pipeline diagram organizes retrieval-augmented generation into four phases: ingestion (data sources, document loader, chunking, metadata extraction), indexing (embeddings, vector database), retrieval (query rewriting, hybrid search combining semantic and lexical, reranking), and generation and evaluation (context assembly, LLM generation, citation and evaluation). It closes with a framework of common failure points (poor chunking, missing metadata, weak query rewriting, no reranking), optimization levers (better chunking, metadata filters, hybrid retrieval, stronger rerankers, context compression), and the output goal of relevant, grounded, cited, fast, and trustworthy answers. The core thesis is that RAG quality is decided before the LLM ever sees the prompt.

## Key Points

- Central thesis: RAG quality is determined upstream of the LLM prompt
- Ingestion phase: data sources → document loader → chunking → metadata extraction
- Indexing phase: embeddings → vector database → indexed knowledge
- Retrieval phase: query rewriting → hybrid search (semantic + lexical) → reranking
- Generation phase: context assembly → LLM generation → citation and evaluation
- Common failure points: poor chunking, missing metadata, weak query rewriting, no reranking
- Optimization levers: better chunking, metadata filters, hybrid retrieval, stronger reranker, context compression

## Why Yaz Saved This

Complementary RAG architecture reference to the how.logix 10M-document pipeline saved the same batch — useful for cross-referencing RAG design patterns across sources in Yaz's enterprise AI architecture research.

![The Modern RAG Pipeline: 12-Step Ingestion-to-Citation Flow](/img/notes/2026-06/modern-rag-pipeline-twelve-step-flow.png)
