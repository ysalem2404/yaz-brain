---
{
  "id": "note-databricks-parsing-benchmark-accuracy-vs-cost",
  "title": "Databricks Parsing Benchmark \u2014 Accuracy vs Cost",
  "slug": "databricks-parsing-benchmark-accuracy-vs-cost",
  "date_captured": "2026-08-30",
  "category": "model-benchmark",
  "tags": [
    "document-ai",
    "document-parsing",
    "model-benchmark",
    "cost-control",
    "accuracy",
    "ocr",
    "evaluation"
  ],
  "entities": [
    "Databricks",
    "Azure Document Intelligence",
    "Mistral OCR",
    "Gemini 3.1 Pro",
    "Gemini 3.5 Flash",
    "GPT-5.5",
    "GPT-5.4 Mini",
    "Claude Opus 4.8",
    "Claude Sonnet 4.6",
    "Textract",
    "Snowflake"
  ],
  "source_type": "drive-image",
  "drive_id": "1khUB7_evqnCU7fAoqsmg75zKPWNgk0uC",
  "drive_name": "IMG_0010.HEIC",
  "drive_link": "https://drive.google.com/file/d/1khUB7_evqnCU7fAoqsmg75zKPWNgk0uC/view",
  "note_path": "notes/2026-08/databricks-parsing-benchmark-accuracy-vs-cost.md",
  "image_path": "public/img/notes/2026-08/databricks-parsing-benchmark-accuracy-vs-cost.png",
  "phash": "529610109745805d",
  "ocr": "multimodal_read",
  "ingested_at": "2026-08-30T12:15:00Z"
}
---

# Databricks Parsing Benchmark — Accuracy vs Cost

![Infographic](/img/notes/2026-08/databricks-parsing-benchmark-accuracy-vs-cost.png)

## Summary
A scatter plot benchmarking document-parsing options on text accuracy against price per 1,000 pages, positioning the Databricks parser in the top-left quadrant — highest accuracy at near-lowest cost — while frontier reasoning models sit far right at much higher price for equal or lower accuracy.

## Key points
- Axes are text accuracy (roughly 80-96%) against pricing in dollars per 1,000 pages (0 to ~60).
- Databricks is circled in the top-left: about 94% accuracy at very low cost per 1K pages.
- Mistral OCR and Azure Document Intelligence cluster nearby at roughly 92% for low single-digit to ~10 dollars.
- Frontier models are the expensive tail: GPT-5.5 with reasoning sits near 60 dollars per 1K pages for about 90-91% accuracy, and Claude Opus 4.8 near 40 dollars for about 89%.
- Gemini 3.1 Pro reaches roughly 92% around 22 dollars; Gemini 3.5 Flash and GPT-5.4 Mini land near 90% at 20-23 dollars.
- Snowflake is the low outlier at roughly 82.5% accuracy.
- Values are read off a photographed slide and should be treated as approximate; the vendor is benchmarking its own product.

## Why I saved this
Direct evidence for the argument that a purpose-built parser beats routing documents through a frontier LLM on both accuracy and cost — useful when defending a parsing choice on economics rather than preference.

## Source
- Google Drive: [IMG_0010.HEIC](https://drive.google.com/file/d/1khUB7_evqnCU7fAoqsmg75zKPWNgk0uC/view)
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
