---
id: note-building-robust-rag-system-seven-step-framework
title: "Building a Robust RAG System: 7-Step Framework (Query Construction to Evaluation)"
slug: building-robust-rag-system-seven-step-framework
date_captured: 2026-05-29
category: architecture
tags:
  - rag
  - query-routing
  - reranking
  - indexing
  - evaluation
  - hand-drawn
entities:
  - Brij Kishore Pandey
---

# Building a Robust RAG System: 7-Step Framework (Query Construction to Evaluation)

## Summary

A hand-drawn-style diagram by Brij Kishore Pandey breaks robust RAG system design into seven steps: query construction (relational SQL, graph Cypher, vector similarity), RAG types (multi-query/RAG fusion vs HyDE/decomposition), routing (logical vs semantic), indexing (semantic split, multi-representation, ColBERT, RAPTOR), retrieval (refinement and reranking), generation (active retrieval, Self-RAG), and evaluation (Ragas, Grouse, DeepEval). A central flow diagram shows the question routed through graph DB, relational DB, or vector store, funneled into documents, and passed to the LLM for the final answer.

## Key Points

- Step 1 - Query Construction: choose between relational (SQL), graph (Cypher), or vector (similarity) query types
- Step 2 - RAG Types: multi-query/RAG fusion for broader recall vs HyDE/decomposition for complex queries
- Step 3 - Routing: logical route (structured decision tree) vs semantic route (similarity-based)
- Step 4 - Indexing: semantic splitting, multi-representation indexing, ColBERT, RAPTOR hierarchical indexing
- Step 5 - Retrieval: refinement and reranking of retrieved documents before passing to the LLM
- Step 6 - Generation: active retrieval and Self-RAG techniques for higher-quality answers
- Step 7 - Evaluation: Ragas, Grouse, and DeepEval frameworks for measuring RAG system quality

## Why Yaz Saved This

Technical RAG design reference with an evaluation framework checklist (Ragas/Grouse/DeepEval) that complements the other RAG architecture notes in Yaz's collection, useful for production RAG quality assurance.

![Building a Robust RAG System: 7-Step Framework (Query Construction to Evaluation)](/img/notes/2026-05/building-robust-rag-system-seven-step-framework.png)
