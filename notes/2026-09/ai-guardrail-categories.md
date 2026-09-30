---
{
  "id": "note-ai-guardrail-categories",
  "title": "AI Guardrail Categories",
  "slug": "ai-guardrail-categories",
  "date_captured": "2026-09-30",
  "category": "AI safety and agent guardrails",
  "tags": [
    "ai-guardrails",
    "prompt-injection",
    "input-validation",
    "rag-security",
    "memory",
    "agent-security",
    "output-validation",
    "observability",
    "privacy"
  ],
  "entities": [
    "RAG",
    "MCP"
  ],
  "source_type": "drive-image",
  "drive_id": "1BQo93Nw8h5m7gr5hoUKbuH5mMKatPb69",
  "drive_name": "Screenshot 2026-09-28 at 6.15.16 AM.png",
  "drive_link": "https://drive.google.com/file/d/1BQo93Nw8h5m7gr5hoUKbuH5mMKatPb69/view?usp=drivesdk",
  "note_path": "notes/2026-09/ai-guardrail-categories.md",
  "image_path": "public/img/notes/2026-09/ai-guardrail-categories.png",
  "phash": "fe13f8701a3972e0",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-30T12:14:31Z",
  "summary": "A layered guardrail map organizes controls across inputs, prompts, retrieval, memory, tools/agents, runtime monitoring, and outputs."
}
---

# AI Guardrail Categories

![Infographic](/img/notes/2026-09/ai-guardrail-categories.png)

## Summary
A layered guardrail map organizes controls across inputs, prompts, retrieval, memory, tools/agents, runtime monitoring, and outputs.

## Key points
- Input controls include injection screening, rate/size limits, malware and MIME checks, content sanitization, schema validation, and file scanning; prompt controls add hidden-prompt/jailbreak detection, instruction locking, context boundaries, and role separation.
- Retrieval guardrails include citation and grounding enforcement, deduplication, chunk validation, freshness checks, reranking, source filtering, document allowlists, metadata filtering, and trust scoring.
- Memory and agent controls cover retention and expiry, recall filtering, user/session separation, sensitive-data blocking, tool allowlists, permission checks, API-scope limits, transaction limits, sandboxing, action approval, timeouts, retries, and human confirmation.
- Runtime and output controls include anomaly/session monitoring, latency and cost limits, loop/failure handling, fallback routing, moderation, toxicity checks, PII masking, policy filters, response validation, hallucination checks, and citation checks.

## OCR transcription (best effort)

```text
Al GUARDRAIL CATEGORIES

[ Hidden prompt

Policy injection

Input validation

detection [7 checks }
Prompt injection |_ | Language ‘ =
Jailbreak
screening detection Prompt rewriting | pire
‘
[ Rate limits \ size limits | instruction Prompt
locking a templates
Malware " . ‘
[ screening | | ie vo [ paontext | | Role separation |
Content .
sanitization Js (ee checks [ system prompt |, | Prompt trewat |

=1 | File scanning

Memory

retention lis

Memory expiry
(™m)

Recall filtering

Sensitive data
blocking

separation

Edit controls

Deletion rules

|
|
[ uUser/session
[
|

Audit history lL

Consent
boundaries

Hf |
‘| Write controls
}|
[

Citation
enforcement

Grounding
enforcement

Duplicate

removal Rg

‘Chunk validation

Freshness
checks

“3

(a

source fitering | _

|
|
[ Re-ranking
[

Document
allowlists

filtering

Trust scoring

|
I [ Metadata
|

[ Tool allowlists

1 | Action approval

logging

Permission ‘API scope
checks : control
aA
Transaction Tool
limits sandboxing

v—
} Timeout controls
Au

Retry limits

|
|
[ Execution
[

Session Anomaly Content
[ monitoring J- detection moderation Toxicity checks
wu L
| tracking be Token limits Piimasking || Policy filters
oh '
Format Response
| CoCr | enforcement validation ]

Failure handling

|= | Fallback routing

Hallucination
checks

Citation checks

Abuse

Loop detection |
monitoring |

[ concurrency
control

Restricted topic
blocking

“(
|
“|
Lf

Safety }
pe mely es

, | Human-in-the-
F* |1oop confirmation
```

## Source capture
- **Drive file:** [Screenshot 2026-09-28 at 6.15.16 AM.png](https://drive.google.com/file/d/1BQo93Nw8h5m7gr5hoUKbuH5mMKatPb69/view?usp=drivesdk)
- **Captured:** 2026-09-30
