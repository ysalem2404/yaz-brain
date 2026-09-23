---
{
  "id": "note-rag-vs-cag",
  "title": "RAG vs CAG",
  "slug": "rag-vs-cag",
  "date_captured": "2026-09-22",
  "category": "AI architecture",
  "tags": [
    "rag",
    "cag",
    "retrieval-augmented-generation",
    "context-augmented-generation",
    "vector-database",
    "embeddings",
    "context-engineering",
    "prompt-engineering",
    "llm",
    "evaluation"
  ],
  "entities": [
    "RAG",
    "CAG",
    "Vector DB",
    "LLM"
  ],
  "source_type": "drive-image",
  "drive_id": "1HzI4mqovmXoFru9yAYUKQfYJFtMZ2sPc",
  "drive_name": "Screenshot 2026-09-22 at 6.40.38 AM.png",
  "drive_link": "https://drive.google.com/file/d/1HzI4mqovmXoFru9yAYUKQfYJFtMZ2sPc/view?usp=drivesdk",
  "note_path": "notes/2026-09/rag-vs-cag.md",
  "image_path": "public/img/notes/2026-09/rag-vs-cag.png",
  "phash": "ef31e437e1629688",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-23T12:16:54Z",
  "summary": "A comparison of retrieval-augmented generation (RAG) and context-augmented generation (CAG). RAG retrieves and filters relevant context from a vector database before response creation, while CAG injects domain knowledge and repository context, merges it with the query, then applies consistency and context-synchronization checks."
}
---

# RAG vs CAG

![Infographic](/img/notes/2026-09/rag-vs-cag.png)

## Summary
A comparison of retrieval-augmented generation (RAG) and context-augmented generation (CAG). RAG retrieves and filters relevant context from a vector database before response creation, while CAG injects domain knowledge and repository context, merges it with the query, then applies consistency and context-synchronization checks.

## Key points
- RAG encodes the user input, retrieves information from a vector database, extracts relevant context, removes noise, and then validates the generated response.
- The RAG flow explicitly includes quality checking, bias removal, and accuracy review before the final output.
- CAG injects domain knowledge and an information repository into query processing, merges the context, generates an answer, and verifies the response.
- CAG closes the loop with context enrichment, context synchronization, and a consistency check.

## Source
Captured from the AI Infographics Google Drive folder. [Drive image](https://drive.google.com/file/d/1HzI4mqovmXoFru9yAYUKQfYJFtMZ2sPc/view?usp=drivesdk)

## OCR text

```text
RAG VS CAG

RAG (RETRIEVAL-AUGMENTED GENERATION)
User Input → Input Encoding → Tokenization → Vector Representation →
Information Fetching → Relevant Context Extraction → Vector DB →
Integration Step → Remove Noise → Response Creation → Quality Check →
Bias removal → Accuracy Review → Final Output

CAG (CONTEXT-AUGMENTED GENERATION)
User Input → Query Processing → Context Injection → Domain Knowledge /
Information Repository → Data Merging → Output Generation →
Response Verification → Context Enrichment → Context Synchronization →
Consistency check → Final Output
```
