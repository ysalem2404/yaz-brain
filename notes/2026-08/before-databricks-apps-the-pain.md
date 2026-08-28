---
{
  "id": "note-before-databricks-apps-the-pain",
  "title": "Before Databricks Apps — The Pain",
  "slug": "before-databricks-apps-the-pain",
  "date_captured": "2026-08-28",
  "category": "platform-strategy",
  "tags": [
    "databricks",
    "databricks-apps",
    "platform-migration",
    "architecture",
    "aws-cognito",
    "workday-sso",
    "appsync",
    "graphql",
    "lambda",
    "mongodb",
    "react",
    "ml-explainability"
  ],
  "entities": [
    "Databricks Apps",
    "AWS Cognito",
    "Workday SSO",
    "AppSync GraphQL",
    "MongoDB Atlas",
    "AWS Lambda",
    "React",
    "Vite"
  ],
  "source_type": "drive-image",
  "drive_id": "1we05WapvrX-X7sw5H5HCzpsUuCcOCpst",
  "drive_name": "IMG_0156.HEIC",
  "drive_link": "https://drive.google.com/file/d/1we05WapvrX-X7sw5H5HCzpsUuCcOCpst/view",
  "note_path": "notes/2026-08/before-databricks-apps-the-pain.md",
  "image_path": "public/img/notes/2026-08/before-databricks-apps-the-pain.png",
  "phash": "bd152a442b357bd4",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-28T12:09:00Z"
}
---

# Before Databricks Apps — The Pain

![Infographic](/img/notes/2026-08/before-databricks-apps-the-pain.png)

## Summary
A retrospective slide describes the cost of building a UI-enabled ML explainability widget outside the lakehouse: duplicated identity, data, governance, API, compute, frontend, and infrastructure layers.

## Key points
- The depicted stack duplicated Workday identity with AWS Cognito, Databricks data with MongoDB Atlas, and governance primitives inside Lambda functions.
- AppSync GraphQL, four Lambda functions, a 15-minute execution ceiling, React/Vite, four chart libraries, Amplify CloudFormation, and three environments accumulated into roughly 7,465 lines of wrapper code.
- The model and UI evolved separately, with each model update requiring new GraphQL types, Lambda work, data synchronization, and React components.
- The slide argues that these ceilings made long-horizon agentic workflows architecturally impractical.

## Why I saved this
A concrete before-state for evaluating the platform and operational leverage promised by Databricks Apps.

## OCR text

```text
BEFORE DATABRICKS APPS — THE PAIN

One year. One basic Ul-enabled ML Explainability widget.

Dec 2024

. Oct 2025 - the stack we stood up just to serve one model's outputs.

Everything duplicated

Cognito # SSO. Mongo # Delta. Custom ACL in every

Identity

AWS Cognito user pool — separate from Workday SSO

Lambda. Every governance primitive rebuilt outside the

lakehouse

API

AppSync GraphQL - 468-line schema - 44 types

Model—UI divorce

4 Lambda functions

Compute

15-min hard ceiling

Every model update = new GraphQL type, new Lambda, a

Mongo sync, a React component. ML waited on UI; UI! waited

Data

MongoDB Atlas — replicated out of Databricks

on vendor

Frontend

React + Vite + 4 chart libs - 2,375 LOC

No path to long-horizon

Infra

Amplify CloudFormation

3 envs

15-min Lambda + 30-sec resolver ceiling made the entire

Class of agentic workflows we ship today arcnitecturally

Total

~7,465 LOC wrapper - 123 commits - 10 contributors

impossibie

A year to ship a display layer for one model.
```

## Source
- **Drive file:** [IMG_0156.HEIC](https://drive.google.com/file/d/1we05WapvrX-X7sw5H5HCzpsUuCcOCpst/view)
- **Captured:** 2026-08-28
- **Tags:** #databricks #databricks-apps #platform-migration #architecture #aws-cognito #workday-sso #appsync #graphql #lambda #mongodb #react #ml-explainability
