---
id: note-generative-ai-project-structure-reference-layout
title: "Generative AI Project Structure: A Reference Codebase Layout"
slug: generative-ai-project-structure-reference-layout
date_captured: 2026-05-21
category: data-engineering
tags:
  - project-structure
  - rag
  - llm-abstraction
  - codebase-layout
  - mlops
entities:
  - Sivasankar Natarajan
---

# Generative AI Project Structure: A Reference Codebase Layout

## Summary

Sivasankar Natarajan's reference file-tree diagram lays out a standard generative AI project structure: config/ (model and logging configs), data/ (cache, embeddings, vector DB), src/core/ (LLM abstraction with base_llm.py, gpt_client.py, claude_client.py, local_llm.py, model_factory.py), src/prompts/ (templates and chaining), src/rag/ (embedder, retriever, vector_store, indexer), src/processing/ (chunking, tokenizer, preprocessor), src/inference/ (inference engine, response parser), docs/, scripts/ (setup, tests, embeddings, cleanup), and root files (.gitignore, Dockerfile, docker-compose.yml, requirements.txt).

## Key Points

- config/ holds model_config.yaml (LLM providers/models/params) and logging_config.yaml
- src/core/ implements LLM abstraction via base_llm.py plus provider-specific clients (gpt_client.py, claude_client.py, local_llm.py) and a model_factory.py for selection
- src/rag/ contains embedder.py, retriever.py, vector_store.py, and indexer.py for the RAG pipeline components
- src/processing/ handles chunking, tokenization, and preprocessing/normalization
- Root includes Dockerfile, docker-compose.yml, and requirements.txt for containerized multi-service setup

## Why Yaz Saved This

Practical, directly reusable reference architecture for structuring a generative AI/RAG codebase — useful template for Yaz's own Python-based AI development projects.

![Generative AI Project Structure: A Reference Codebase Layout](/img/notes/2026-05/generative-ai-project-structure-reference-layout.png)
