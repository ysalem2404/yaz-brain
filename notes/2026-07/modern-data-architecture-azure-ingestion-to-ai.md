---
id: note-modern-data-architecture-azure-ingestion-to-ai
title: "Modern Data Architecture on Azure: From Ingestion to AI"
slug: modern-data-architecture-azure-ingestion-to-ai
date_captured: 2026-07-25
category: architecture
tags:
  - azure
  - microsoft-fabric
  - data-architecture
  - lambda-architecture
  - power-bi
  - data-governance
entities:
  - Azure Event Hubs
  - Azure IoT Hub
  - Microsoft Fabric
  - Azure Machine Learning
  - Microsoft Foundry
  - Power BI
  - Microsoft Purview
  - Microsoft Entra ID
  - Azure Key Vault
  - Azure Monitor
  - Azure DevOps
  - Azure Policy
---

# Modern Data Architecture on Azure: From Ingestion to AI

## Summary

An end-to-end Azure data architecture diagram spanning ingestion (streaming, unstructured, semistructured, relational sources via Event Hubs/IoT Hub), processing (Lambda architecture with hot/cold paths, Fabric Eventstreams, Data Factory pipelines, Eventhouse, Fabric Lakehouse/Warehouse), enrichment (Microsoft Foundry, Azure ML), and serving (Power BI, Fabric data agent, vector store for agentic AI and AI applications). A cross-cutting governance layer covers Purview, Entra ID, cost management, Key Vault, Monitor, DevOps/GitHub, and Policy.

## Key Points

- Ingestion layer handles streaming, unstructured (image/video/audio), semistructured, and relational sources
- Lambda architecture splits hot path (real-time) and cold path (history/trend) processing
- Microsoft Fabric provides Eventstreams, Data Factory pipelines, Eventhouse, and Lakehouse/Warehouse capabilities
- Enrichment layer uses Microsoft Foundry and Azure ML for custom model training and machine learning operations
- Serving layer feeds Power BI analytics, Fabric data agent for agentic AI, and vector store for AI applications
- Cross-cutting governance: Microsoft Purview for discovery/governance, Entra ID, Key Vault, Monitor, DevOps/GitHub, Policy

## Why Yaz Saved This

A comprehensive Azure/Fabric reference architecture directly applicable to designing Bechtel's enterprise data platform feeding AI/agentic workloads — the governance layer (Purview, Entra ID, Policy) maps well onto FedRAMP/GCCH control requirements.

![Modern Data Architecture on Azure: From Ingestion to AI](/img/notes/2026-07/modern-data-architecture-azure-ingestion-to-ai.png)
