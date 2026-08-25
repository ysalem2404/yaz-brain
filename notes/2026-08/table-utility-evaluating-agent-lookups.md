---
id: note-table-utility-evaluating-agent-lookups
title: "Table Utility — Evaluating Agent Lookups"
slug: table-utility-evaluating-agent-lookups
date_captured: 2026-08-25
category: llm-evaluation
tags: [llm-evaluation, table-understanding, agents, structured-data, metrics, retrieval, benchmarking]
entities: [Table Utility]
source_type: drive-image
drive_id: 17MbM12uOK4sGMCcXKEaS8BVAWS7fWB82
drive_name: "IMG_0017.HEIC"
drive_link: https://drive.google.com/file/d/17MbM12uOK4sGMCcXKEaS8BVAWS7fWB82/view
image_path: public/img/notes/2026-08/table-utility-evaluating-agent-lookups.png
phash: af25218e19da5bd2
ocr: local_tesseract_fallback
ingested_at: 2026-08-25T12:13:00Z
---

# Table Utility — Evaluating Agent Lookups

![Infographic](/img/notes/2026-08/table-utility-evaluating-agent-lookups.png)

## Summary
The Table Utility metric evaluates whether a parsed table can answer the lookups an agent would actually run, scoring exact matches between ground-truth and predicted table values.

## Key points
- Form lookup keys from ground truth by creating each row-header and column-header tuple.
- Look up values in the parsed table using those header keys.
- Assign 1 when a value matches and 0 otherwise, then average across all cells.
- The metric focuses evaluation on practical agent utility rather than only document parsing similarity.

## Why I saved this
A focused evaluation idea for measuring whether table parsing supports downstream agent behavior.

## OCR text

```text

```

## Source
- **Drive file:** [IMG_0017.HEIC](https://drive.google.com/file/d/17MbM12uOK4sGMCcXKEaS8BVAWS7fWB82/view)
- **Captured:** 2026-08-25
- **Tags:** #llm-evaluation #table-understanding #agents #structured-data #metrics #retrieval #benchmarking
