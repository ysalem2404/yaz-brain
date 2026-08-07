---
id: note-rag-patterns-from-naive-to-agentic
title: "RAG Patterns — From Naive to Agentic"
slug: rag-patterns-from-naive-to-agentic
date_captured: 2026-08-07
category: rag
tags:
  - rag
  - retrieval-augmented-generation
  - reranking
  - multi-query-rag
  - hierarchical-rag
  - graph-rag
  - corrective-rag
  - agentic-rag
  - information-retrieval
entities:
  - Level Up Coding
source_type: drive-image
drive_id: 1WoVajeg9q0p-_wIGRBLal8vuc5gkB_p3
drive_name: "Screenshot 2026-08-06 at 9.44.24 PM.png"
drive_link: https://drive.google.com/file/d/1WoVajeg9q0p-_wIGRBLal8vuc5gkB_p3/view
image_path: public/img/notes/2026-08/rag-patterns-from-naive-to-agentic.png
---

# RAG Patterns — From Naive to Agentic

![Infographic](/img/notes/2026-08/rag-patterns-from-naive-to-agentic.png)

## Summary
A visual catalog of RAG architectures progresses from naive retrieval through reranked, multi-query, hierarchical, graph, corrective, and agentic RAG.

## Key points
- Reranked RAG combines keyword and vector search, then scores candidate chunks for relevance
- Multi-query RAG rewrites a question into related queries and combines the retrieved documents
- Hierarchical, graph, corrective, and agentic patterns add structure, connected-fact retrieval, retry logic, and multi-step reasoning

## Why I saved this
A compact map for choosing a retrieval pattern before adding complexity to an AI system.

## OCR text

```text
itectures)

Naive RAG mean ee RAG

Query is matched : Results are
against vectors $ merged and ranked

— : he oa
UO Combines keyword
ag y
Top matching chunks are :

i search and vector : :
passed to the LLM : Nee search Ne

Reranked RAG ; Multi-Query RAG

: Rewrite question into
: multiple related queries
— adel =)

Combine, deduplicate,
Each query retrieves

and rank results
different documents

Fetches a larger set
of candidate chunks

C Co)
q —|
Scores which chunks @e.. - =|

are most relevant =

Hierarchical RAG ; Graph RAG
LO Content organized into : aa Balen steenresented
multiple levels - 4 A as entities and
A = : 2 relationships
4 eee %@--° =| see e neal e :
—
eas = :
43323 ; :
> : o Retrieval looks for
First retrieves Then it retrieves relevant om connected facts
broad areas chunks in those areas ° °

Corrective RAG : Agentic RAG

Decides if retrieval

Check if retrieved :
If needed, retry

context is useful ; CG perpeeded
retrieval or rewrite

query oe
> @
LEVEL UP CODING

©All Rights Reserved

Reasons through multiple
retrieval steps

Download our System Design Handbook for free: blog.levelupcoding.com
```

## Source
- **Drive file:** [Screenshot 2026-08-06 at 9.44.24 PM.png](https://drive.google.com/file/d/1WoVajeg9q0p-_wIGRBLal8vuc5gkB_p3/view)
- **Captured:** 2026-08-07
- **Tags:** #rag #retrieval-augmented-generation #reranking #multi-query-rag #hierarchical-rag #graph-rag #corrective-rag #agentic-rag #information-retrieval
