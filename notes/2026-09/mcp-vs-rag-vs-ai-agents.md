---
{
  "id": "note-mcp-vs-rag-vs-ai-agents",
  "title": "MCP vs RAG vs AI Agents",
  "slug": "mcp-vs-rag-vs-ai-agents",
  "date_captured": "2026-09-29",
  "category": "AI architecture",
  "tags": [
    "mcp",
    "rag",
    "ai-agents",
    "agent-architecture",
    "retrieval",
    "tool-use",
    "llm",
    "context-engineering"
  ],
  "entities": [
    "MCP",
    "RAG",
    "Claude",
    "Gemini",
    "GPT",
    "ByteByteGo"
  ],
  "source_type": "drive-image",
  "drive_id": "1JUAkchfQcYaMWRHFRnMpcMb4hSKMwfaF",
  "drive_name": "Screenshot 2026-09-27 at 7.24.25 PM.png",
  "drive_link": "https://drive.google.com/file/d/1JUAkchfQcYaMWRHFRnMpcMb4hSKMwfaF/view?usp=drivesdk",
  "note_path": "notes/2026-09/mcp-vs-rag-vs-ai-agents.md",
  "image_path": "public/img/notes/2026-09/mcp-vs-rag-vs-ai-agents.png",
  "phash": "9a0e3f6b0f63620d",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-29T12:11:00Z",
  "summary": "A side-by-side diagram separates MCP's tool-access protocol, RAG's retrieval-and-context pattern, and agents' goal-directed reasoning and action loop."
}
---

# MCP vs RAG vs AI Agents

![Infographic](/img/notes/2026-09/mcp-vs-rag-vs-ai-agents.png)

## Summary
A side-by-side diagram separates MCP's tool-access protocol, RAG's retrieval-and-context pattern, and agents' goal-directed reasoning and action loop.

## Key points
- MCP standardizes how an AI application connects to tool/resource servers for API calls, database queries, or file operations.
- RAG retrieves relevant chunks from an indexed knowledge base, combines them with the user query, and passes that context to an LLM.
- An agent pursues a goal through planning, acting, observing, and feedback, using tools and an environment/context.
- These are complementary layers rather than competing choices: an agent may use MCP to access tools and RAG to retrieve grounded context.

## OCR transcription (best effort)

```text
MCP

vs

RAG

vs Al Agents

‘a > la
Sere: reels Finds relevant context Uses reasoning and
resources & prompts for answers tools to pursue a goal

MCP Hosts G
User Goal
' '
Claude : : ve
oes, We Agent App : ' :
' '
Wcrcien ORC MP Cet Ovvwroieny | :
t
A A ' :
' : ' ‘ >
‘ ' ' 1 é
' ' : Y é
MCP Protocol MCPProtocol MCP Protocol
' ' :
' ' ' :
‘ ' : ' , - '
' ' : . f '
'
' H H H ‘ Retriever '
v v v to '
inden A
' '
Mcp mcp Mcp toe Observe Act
Server A Server B Server C sot
' ' ' : : o
H H ‘ H Question + content
' ' ' ' H ' H
' ' ' : ' ' outcome ‘
' ' : ' ' ' : '
' ' ‘ ; : ' ' v '
' t ' : ' '
' ' ' ' ‘ 4 . .
' ' : it coeervetion
' ' ' va ' :
Calls APIs Queries DB Reads /writes ‘ , '
' ‘ files Knowledge Base : Result
'
H '
' Source Content :
H '
‘
' ae '
' PDF DOC .
+
' POF Docs Code Gemini Tools / Environment / Context
\
v Retrieval Index Gemini 8 po
Q APIs Files © Apps Data.» Memory
oe ee Search Index Claude base
XY JS XY

f) ByteByteGo
```

## Source capture
- **Drive file:** [Screenshot 2026-09-27 at 7.24.25 PM.png](https://drive.google.com/file/d/1JUAkchfQcYaMWRHFRnMpcMb4hSKMwfaF/view?usp=drivesdk)
- **Captured:** 2026-09-29
