---
{
  "id": "note-cyber-threat-intelligence-pipeline-network-ai",
  "title": "Cyber Threat Intelligence \u2014 Pipeline Network + AI",
  "slug": "cyber-threat-intelligence-pipeline-network-ai",
  "date_captured": "2026-08-30",
  "category": "security",
  "tags": [
    "security",
    "cyber-threat-intelligence",
    "data-pipelines",
    "cdc",
    "detection-engineering",
    "semantic-layer",
    "ai-classifier",
    "lakehouse"
  ],
  "entities": [
    "Databricks"
  ],
  "source_type": "drive-image",
  "drive_id": "1o1kGpZFbbwNR6uAFYcoOc-TS_nkIQOQK",
  "drive_name": "IMG_0166.HEIC",
  "drive_link": "https://drive.google.com/file/d/1o1kGpZFbbwNR6uAFYcoOc-TS_nkIQOQK/view",
  "note_path": "notes/2026-08/cyber-threat-intelligence-pipeline-network-ai.md",
  "image_path": "public/img/notes/2026-08/cyber-threat-intelligence-pipeline-network-ai.png",
  "phash": "e145998122fcbac1",
  "ocr": "multimodal_read",
  "ingested_at": "2026-08-30T12:15:00Z"
}
---

# Cyber Threat Intelligence — Pipeline Network + AI

![Infographic](/img/notes/2026-08/cyber-threat-intelligence-pipeline-network-ai.png)

## Summary
An architecture diagram for an AI-assisted cyber threat intelligence pipeline, running data from collection through a semantic transformer and CDC into detection-scoped views, with an AI classifier looping back to handle semantically unclassified records.

## Key points
- Linear path: Data Collector to Semantic Transformer to Semantic CDC to preemptive joins and detection-scoped views, then Detection CDC and finally Detection Rules.
- The Semantic Transformer is maintained as code, making the semantic layer version-controlled rather than ad hoc.
- Snapshot Context (G) sits under the detection views and exchanges data bidirectionally with them.
- Records that come out semantically unclassified are routed to an AI Classifier, which feeds its results back up into the Semantic Transformer.
- The AI component is deliberately scoped to classification of the unclassified residue rather than owning the whole detection path.

## Why I saved this
A good pattern for putting AI in a security pipeline without handing it the detection decision — the model triages what deterministic rules could not classify, and rules stay the enforcement point.

## Source
- Google Drive: [IMG_0166.HEIC](https://drive.google.com/file/d/1o1kGpZFbbwNR6uAFYcoOc-TS_nkIQOQK/view)
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
