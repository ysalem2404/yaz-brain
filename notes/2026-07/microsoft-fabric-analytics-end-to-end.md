---
id: note-microsoft-fabric-analytics-end-to-end
title: "Analytics End-to-End with Microsoft Fabric — Ingest→Store→Process→Serve→Enrich"
slug: microsoft-fabric-analytics-end-to-end
date_captured: 2026-07-25
category: architecture
tags: [microsoft-fabric, onelake, data-warehouse, lakehouse, eventhouse, power-bi, copilot-in-fabric, data-engineering, data-science, real-time-intelligence, data-agent]
source_type: drive-image
drive_id: 113tnj-W4lArnB6jXJzrRAZNuxDGgaJHD
drive_name: "Screenshot 2026-07-25 at 2.47.37 PM.png"
drive_link: https://drive.google.com/file/d/113tnj-W4lArnB6jXJzrRAZNuxDGgaJHD/view
image_path: public/img/notes/2026-07/microsoft-fabric-analytics-end-to-end.png
---

# Analytics End-to-End with Microsoft Fabric — Ingest→Store→Process→Serve→Enrich

![Infographic](public/img/notes/2026-07/microsoft-fabric-analytics-end-to-end.png)

## Summary
End-to-end Microsoft Fabric analytics reference architecture across 5 phases (Ingest → Store → Process → Serve → Enrich) with Provider tenant + Consumer tenant separation via cross-tenant OneLake data share. Ingest layer accepts on-prem/structured/semi-structured, streaming (IoT Hub, Kinesis, Kafka, Event Hubs, Pub/Sub, Azure Data Explorer), and mirroring (Databricks, SQL DB, Cosmos DB, PostgreSQL, Snowflake) via Eventstream, Data Factory, and Notebook. Store: Mirrored database + Eventhouse + SQL database in Fabric + Data Warehouse + Lakehouse. Process: Real-Time Intelligence, Data Warehouse + SQL, Data Engineer, Data Science, all driven by Eventstream/Dataflow Gen2/Stored procedure/Notebook. Serve: Real-Time Intelligence dashboard, Data Warehouse, Lakehouse, Power BI with semantic model (Direct Lake), SQL analytics endpoint, GraphQL API. Enrich: Copilot, Data agent (preview), Machine Learning, Microsoft Foundry. Platform sidecar: Microsoft Entra ID, Cost Management, Azure Key Vault, GitHub, Azure DevOps, Azure Policy — with OneLake + Microsoft Purview + Workspace monitoring + Copilot in Fabric spanning across.

## Key points
- Fabric now bundles: DW + Lakehouse + Eventhouse + SQL DB + Mirrored DB — the four historical patterns unified
- Direct Lake mode in Power BI = query lakehouse without import/DirectQuery trade-off
- Data agent (preview) is the Fabric-native AI agent for analytics
- Provider/Consumer tenant separation via OneLake data share = the multi-tenant sharing model
- Purview and Copilot in Fabric span all phases (governance + AI throughout)

## Entities & tools mentioned
Ananya Ghosh Chowdhury, Microsoft Fabric, OneLake, Microsoft Purview, Copilot in Fabric, Data Lake Storage, Blob Storage, Dataverse, Google Cloud Storage, Amazon S3, AWS Kinesis, Kafka, IoT Hub, Azure Event Hubs, Google Cloud Pub/Sub, Azure Data Explorer, Azure Databricks, Azure SQL Database, Azure Cosmos DB, Azure Database for PostgreSQL, Snowflake, Eventstream, Data Factory, Notebook, Mirrored database, Eventhouse, SQL database in Fabric, Data Warehouse, Lakehouse, Dataflow Gen2 in Fabric, Data Engineer, Data Science, Real-Time Intelligence, GraphQL API, Semantic model (Direct Lake), SQL analytics endpoint, Data agent (preview), Machine Learning, Microsoft Foundry, Microsoft Entra ID, Azure Key Vault, GitHub, Azure DevOps, Azure Policy

## Why I saved this
Central to Yaz's Databricks/Fabric/Azure data architecture work. This is the current-state MS Fabric picture — pair with the Databricks lakehouse story for comparative decks.

## Source
- **Drive file:** [Screenshot 2026-07-25 at 2.47.37 PM.png](https://drive.google.com/file/d/113tnj-W4lArnB6jXJzrRAZNuxDGgaJHD/view)
- **Captured:** 2026-07-25
- **Tags:** #microsoft-fabric #onelake #data-warehouse #lakehouse #eventhouse #power-bi #copilot-in-fabric #data-engineering #data-science #real-time-intelligence #data-agent
