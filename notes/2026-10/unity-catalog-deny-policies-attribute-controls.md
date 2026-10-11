---
id: note-unity-catalog-deny-policies-attribute-controls
title: "Unity Catalog DENY Policies for Attribute-Based Controls"
slug: unity-catalog-deny-policies-attribute-controls
date_captured: 2026-10-11
category: "governance"
tags: ["Databricks", "Unity-Catalog", "ABAC", "DENY-policy", "access-control", "least-privilege"]
entities: ["Databricks", "Unity Catalog", "SQL"]
source_type: drive-image
drive_id: 1IVP5Dk_FEO4e_pT9D4DcIDU4uZltowtZ
drive_name: "IMG_0126.HEIC"
drive_link: https://drive.google.com/file/d/1IVP5Dk_FEO4e_pT9D4DcIDU4uZltowtZ/view?usp=drivesdk
source_url: https://drive.google.com/file/d/1IVP5Dk_FEO4e_pT9D4DcIDU4uZltowtZ/view?usp=drivesdk
image_path: public/img/notes/2026-10/unity-catalog-deny-policies-attribute-controls.png
phash: 916e6c6291996ead
ocr: local_tesseract_fallback
ingested_at: 2026-10-11T12:11:00Z
---

# Unity Catalog DENY Policies for Attribute-Based Controls

![Unity Catalog DENY Policies for Attribute-Based Controls](/img/notes/2026-10/unity-catalog-deny-policies-attribute-controls.png)

## Summary

A photographed example shows a Unity Catalog DENY policy used to stop data engineers from granting access-control permissions on finance catalog tables.

## Key points

- The slide labels DENY policies as a way to deny permissions by attributes.
- A governance administrator creates a policy on the finance catalog targeting data engineers and denies `MANAGE ACCESS CONTROL FOR TABLES`.
- The diagram separates business-area catalogs, schemas, and tables, and shows an attempted grant failing under the policy.
- The accompanying financial user cannot grant permissions, illustrating separation of duties; the exact current product scope should be checked in live documentation.

## OCR text

DENY policies
Deny permissions by attributes
Governance admin
Penn | | ra | Eo Prevent owners from granting permissions
CREATE POLICY no. sharing. for_own
TO data_engineer
iy al DENY MANAGE ACCESS CONTROL FOR TABLES;
Data engineer
permis lons | rramnenss

The visible policy syntax is transcribed from a photographed slide; the slide also labels the feature “PrP coming soon.”

## Source

- **Drive file:** [IMG_0126.HEIC](https://drive.google.com/file/d/1IVP5Dk_FEO4e_pT9D4DcIDU4uZltowtZ/view?usp=drivesdk)
- **Captured:** 2026-10-11
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
