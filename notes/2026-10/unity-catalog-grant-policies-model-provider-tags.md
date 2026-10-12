---
id: note-unity-catalog-grant-policies-model-provider-tags
title: "Unity Catalog GRANT Policies for Model Providers"
slug: unity-catalog-grant-policies-model-provider-tags
date_captured: 2026-10-12
category: "governance"
tags: ["Databricks", "Unity-Catalog", "ABAC", "GRANT-policy", "model-governance", "access-control"]
entities: ["Databricks", "Unity Catalog", "Anthropic", "Google", "Alibaba"]
source_type: drive-image
drive_id: 1plxB2SGCi52S1Nldt3DFTtOpvAPH_18D
drive_name: "IMG_0125.HEIC"
drive_link: https://drive.google.com/file/d/1plxB2SGCi52S1Nldt3DFTtOpvAPH_18D/view?usp=drivesdk
source_url: https://drive.google.com/file/d/1plxB2SGCi52S1Nldt3DFTtOpvAPH_18D/view?usp=drivesdk
image_path: public/img/notes/2026-10/unity-catalog-grant-policies-model-provider-tags.png
phash: 816e4abd403d6abd
ocr: local_tesseract_fallback
ingested_at: 2026-10-12T12:00:00Z
---

# Unity Catalog GRANT Policies for Model Providers

![Unity Catalog GRANT Policies for Model Providers](/img/notes/2026-10/unity-catalog-grant-policies-model-provider-tags.png)

## Summary

A photographed example shows a Unity Catalog GRANT policy limiting model execution to approved providers based on model tags.

## Key points

- The example policy grants `EXECUTE` on models when the `model_provider` tag is `anthropic`.
- The visible policy comment describes allowing only approved providers to data scientists while excluding contractors.
- The slide marks model policies as Beta; this status is captured from the image and may change.
- The listed model names and provider labels are examples shown on the slide, not a complete or current catalog.

## OCR text

———S——
GRANT policies
Grant permissions by attributes
oe rtivopio
Governance admin
anthropic vy
a Grant EXECUTE on models by their provider tag
CREATE POLICY execute_approved_model_providers
5 EXCEPT “contractors”
=== GRANT EXECUTE FOR MODELS ’
an WHEN has_tag_value\ model_provider'’, ‘anthropic’ )
es

The policy example and model-provider labels are legible in the photographed slide.

## Source

- **Drive file:** [IMG_0125.HEIC](https://drive.google.com/file/d/1plxB2SGCi52S1Nldt3DFTtOpvAPH_18D/view?usp=drivesdk)
- **Captured:** 2026-10-12
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
