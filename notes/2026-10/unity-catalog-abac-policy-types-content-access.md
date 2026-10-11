---
id: note-unity-catalog-abac-policy-types-content-access
title: "Unity Catalog ABAC Policy Types: Content Protection and Access"
slug: unity-catalog-abac-policy-types-content-access
date_captured: 2026-10-11
category: "governance"
tags: ["Databricks", "Unity-Catalog", "ABAC", "row-filters", "column-masking", "GRANT", "DENY", "service-policies"]
entities: ["Databricks", "Unity Catalog", "MCP", "Model services"]
source_type: drive-image
drive_id: 1aHr8A66KSaCA32HaWyVz2BmviBQfn5vn
drive_name: "IMG_0124.HEIC"
drive_link: https://drive.google.com/file/d/1aHr8A66KSaCA32HaWyVz2BmviBQfn5vn/view?usp=drivesdk
source_url: https://drive.google.com/file/d/1aHr8A66KSaCA32HaWyVz2BmviBQfn5vn/view?usp=drivesdk
image_path: public/img/notes/2026-10/unity-catalog-abac-policy-types-content-access.png
phash: 807f41ec95335f2a
ocr: local_tesseract_fallback
ingested_at: 2026-10-11T12:11:00Z
---

# Unity Catalog ABAC Policy Types: Content Protection and Access

![Unity Catalog ABAC Policy Types: Content Protection and Access](/img/notes/2026-10/unity-catalog-abac-policy-types-content-access.png)

## Summary

A photographed framework groups Unity Catalog ABAC policies into content-protection controls and access-permission controls, with rollout status shown for each.

## Key points

- Content protection includes column masking (shown as GA), row filters (shown as GA), and service policies (shown as Beta) that filter request/response interactions when an agent calls an MCP or model service.
- Access controls include GRANT policies (shown as Beta) and DENY policies (shown as PrP / coming soon).
- Examples include masking columns tagged `sensitive`, restricting EU sales users to EU-region rows, granting access based on a `supply` tag, and denying reads of `restricted` data.
- The lifecycle labels are those visible in this photographed slide and may differ from current availability; check current Databricks documentation before implementation.

## OCR text

ABAC policy types
Content protection + access permissions
Content protection Access
Column maskin GRANT policies (Beta
Mask sensitive cap Mask any column tagged Grant aes 5 Supply chain team ca
! fsensitive’ to “*****? : Pp “ HSSTa data tagged “supply”
columns using attributes
Row filters 2m EU sales t 1 DENY policie
7 sales team can only see S @Ere
Filter rows for user records with region = “EU” Deny permissions Supply chain team cai
cohorts ‘ : READ “restricted” da’
using attributes
x
Service policies (Beta :
Pivenintetactionsicveie ase anes req./resp. if
MCPs, model services, Range ET ty AES

Photographed projection; rightmost example text is partly outside the camera frame.

## Source

- **Drive file:** [IMG_0124.HEIC](https://drive.google.com/file/d/1aHr8A66KSaCA32HaWyVz2BmviBQfn5vn/view?usp=drivesdk)
- **Captured:** 2026-10-11
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
