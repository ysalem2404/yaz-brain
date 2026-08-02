---
id: note-agentic-ai-data-architectures-distributed-sql-memory
title: "Agentic AI Data Architectures: Why Distributed SQL Becomes the Memory Layer"
slug: agentic-ai-data-architectures-distributed-sql-memory
date_captured: 2026-05-16
category: architecture
tags: [agentic-ai, distributed-sql, ai-memory, data-architecture, tidb, rag, governance, oreilly]
source_type: drive-pdf
drive_id: 18WsvTf0XlM1yENl6kpLulDg_X2e1EnYZ
drive_name: "file_4E95B673-A3CA-4D64-A90D-6CBE5E9BE36A.pdf"
drive_link: https://drive.google.com/file/d/18WsvTf0XlM1yENl6kpLulDg_X2e1EnYZ/view
image_path: public/img/notes/2026-05/agentic-ai-data-architectures-distributed-sql-memory.pdf
---

# Agentic AI Data Architectures: Why Distributed SQL Becomes the Memory Layer

![Infographic](public/img/notes/2026-05/agentic-ai-data-architectures-distributed-sql-memory.pdf)

## Summary
This O'Reilly report by Blaize Stewart and Ed Huang, sponsored by TiDB/PingCAP, argues that "memory" — not raw model capability — is the binding constraint on agentic AI, and that distributed SQL is best positioned to serve as the underlying memory infrastructure. The table of contents outlines four chapters: what makes AI "agentic" and why memory matters, memory as infrastructure (covering fragmented data ecosystems and failure modes), architectural patterns for agentic applications (blending real-time inference with up-to-date context, retrieval patterns, and oversight), and operationalizing the AI memory layer (latency, elasticity/isolation, governance, and accuracy as a "continuous, systemic responsibility"). The report frames governance as something that must be "baked-in, not layered on top" of the data architecture supporting agent memory.

## Key points
- Central thesis: traditional fragmented data architecture falls short of agentic AI's need for persistent, unified memory
- Proposes distributed SQL as the architectural answer to memory-as-infrastructure for AI-native applications
- Covers mixed workloads blending real-time inference with up-to-date retrieval context
- Chapter 4 treats governance as something that must be 'baked-in, not layered on top' of the memory layer
- Frames accuracy as 'a continuous, systemic responsibility,' not a one-time model property
- Published by O'Reilly Media in collaboration with PingCAP (TiDB), January 2026, First Edition

## Entities & tools mentioned
Blaize Stewart, Ed Huang, O'Reilly Media, TiDB, PingCAP

## Why I saved this
Directly relevant to Yaz's enterprise embeddings/RAG interest — this report's argument that governance must be architecturally baked into the memory layer (not bolted on) aligns closely with FedRAMP/GCCH control philosophy, and distributed SQL as an agent memory substrate is a data-engineering pattern worth evaluating against Databricks-based alternatives.

## Source
- **Drive file:** [file_4E95B673-A3CA-4D64-A90D-6CBE5E9BE36A.pdf](https://drive.google.com/file/d/18WsvTf0XlM1yENl6kpLulDg_X2e1EnYZ/view)
- **Captured:** 2026-05-16
- **Tags:** #agentic-ai #distributed-sql #ai-memory #data-architecture #tidb #rag #governance #oreilly
