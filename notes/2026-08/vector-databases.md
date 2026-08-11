---
id: note-vector-databases
title: "Vector Databases"
slug: vector-databases
date_captured: 2026-08-03
category: vector-databases
tags:
  - vector-databases
  - embeddings
  - semantic-search
  - retrieval
  - rag
  - hybrid-search
  - metadata-filtering
  - indexing
entities:
  - OpenAI
  - BGE
  - Cohere
  - Pinecone
  - Weaviate
  - Qdrant
  - Chroma
source_type: drive-image
drive_id: 1I3Gxut05furnn2Gqw_fMLloM7Q7GN0bC
drive_name: "Screenshot 2026-08-03 at 5.09.48 PM.png"
drive_link: https://drive.google.com/file/d/1I3Gxut05furnn2Gqw_fMLloM7Q7GN0bC/view
image_path: public/img/notes/2026-08/vector-databases.png
---

# Vector Databases

![Infographic](/img/notes/2026-08/vector-databases.png)

## Summary
A vector-database reference shows how embeddings are stored, indexed, and searched for semantic similarity, while contrasting vector retrieval with traditional keyword databases.

## Key points
- Embedding models turn content into vectors that a database stores and indexes
- Nearest-neighbor search retrieves semantically similar items for RAG and recommendations
- Metadata filters and hybrid search can combine semantic and keyword signals
- Vector databases complement rather than replace traditional databases when native semantic search is limited

## Why I saved this
A system-level map for connecting embedding models to practical retrieval infrastructure.

## OCR text

```text
VECTOR
DATABASE

Store, index & search embeddings
for semantic similarity

Vector
Embedding 0.23)—>
Model 0.87 F
iE iY 0.41
Data =
-0.12

Popular Embedding Models:
* text-embedding-3-large (OpenAl)
+ BGE-M3 (BAAl)

+ E5-large (intfloat)

* Cohere Embed-v3 (Cohere)

_Teqires_

used_t Daslnnes

retrieves_from

Limited native semantic similarity search.
Semantic capabilities require embeddings 9)
and additional techniques. af

HYBRID DATABASE (VECTOR + GRAPH)
HOW IT WORKS
Semantic Path (Vector)

=)

User | Query —> Embed -> Vector Search —> Top-K Chunks
Query
Structure Path (Graph)
Query > Entity Extraction (NER) —> Graph Traversal J
> Related Entities & Context
Feature Vector DB Graph DB Hybrid (GraphRAG)
Semantic Search YT Strong A Moderate YT Strong
Relationships — YS Str008 YY Strong
‘Matihop Reasoning Weak YY Strong YY Strong
Scale & Speed Yo ast Moderate Yo Fast / Bolaced
Content Rhos Moderate YY Strong YS Very Strong

* With embeddings and addtional techniques

[ WHICH ONE Do | use? | {

© Simple semantic QA / similarity search > Vector DB is fine
@) Relationship-heavy / multi-hop queries > Consider Graph DB.
® Complex multi-hop or relationship-heavy RAG —> Consider Hybrid (GraphRAG).

“
HOW SEARCH WORKS gm

| BEST FOR:

| @ Semantic search & QA
© Document retrieval

| © Recommendation systems

© Image / audio similarity

| POPULAR VECTOR STORES:

Similarity Search
(Cosine / ANN)

4
a

ate

Fast at scale

Does not require
explicit relationship
modeling

May lose structure
& hierarchy

| GpPinecone Gap Weoviate Garant <D) mis @) chroma

Also used: PostgreSQL with pgvector extension

HOW SEARCH WORKS (GRAPH DB)

Connected

Query —> _ Graph

Traversal

ees

v Multi-hop reasoning
¥ Entity relationships

v Froud detection & compliance
v Supply chain & org hierarchies

POPULAR GRAPH DATABASES:

Results

&

Enables multi-hop traversal and
supports reasoning workflows.

<<

@
6

Leverages
Relationships
& Structure

Understands
connections
& structure

Explicit relationship
modeling

Slower to build
‘& maintain

A _Neodj (Go Amazon neptune ED Arngsoe Fy TigerGraph /\\ Memraph

Semantic search can be added through embeddings,
ies, and LLM-powered pipelines.

+ Neo4j + Pinecone
+ Neo4j + Weaviate
+ Neo4j + Qdrant

©

‘+ Amazon Neptune + Qdrant

+ ArangoDB (native hybrid)

DATABASE COMBINATIONS (EXAMPLES)

aly

techwith.ram. ]

Response

FRAMEWORKS & PIPELINES

+ LangChain
+ Llamaindex
‘+ GraphRAG Pipelines
+ Custom Pip,
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.09.48 PM.png](https://drive.google.com/file/d/1I3Gxut05furnn2Gqw_fMLloM7Q7GN0bC/view)
- **Captured:** 2026-08-03
