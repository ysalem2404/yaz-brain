---
id: note-microsoft-fabric-data-and-ai-architecture
title: "Microsoft Fabric Data and AI Architecture"
slug: microsoft-fabric-data-and-ai-architecture
date_captured: 2026-08-23
category: data-platform
tags: [microsoft-fabric, lakehouse, data-engineering, data-warehouse, real-time-intelligence, power-bi, copilot, data-agents, onelake, governance]
entities: [Microsoft Fabric, OneLake, Microsoft Purview, Power BI, Copilot, Azure Machine Learning, Microsoft Foundry]
source_type: drive-image
drive_id: 1DpT_JkOUVsC7yGBCDupiWRlQCWJh-PdA
drive_name: "Screenshot 2026-08-20 at 1.43.22 AM.png"
drive_link: https://drive.google.com/file/d/1DpT_JkOUVsC7yGBCDupiWRlQCWJh-PdA/view
image_path: public/img/notes/2026-08/microsoft-fabric-data-and-ai-architecture.png
phash: 0001011100111111010100110100000101111011011111110111110000011110
---

# Microsoft Fabric Data and AI Architecture

![Infographic](/img/notes/2026-08/microsoft-fabric-data-and-ai-architecture.png)

## Summary
A Microsoft Fabric architecture map shows external batch and streaming sources flowing through storage, processing, serving, and enrichment across provider and consumer tenants. It connects Lakehouse, Warehouse, SQL Database, Eventhouse, Mirrored Database, Data Engineering, Data Science, Real-Time Intelligence, Power BI, GraphQL API, Data Agent, Copilot, OneLake, Purview, and platform services.

## Key points
- Data sources include on-premises datacenters, structured and semistructured data, AWS, Google Cloud, IoT Hub, Kafka, databases, Azure Event Hubs, Google Pub/Sub, Azure Data Explorer, and mirroring sources.
- The provider tenant separates store, process, serve, and enrich capabilities across Fabric workloads.
- Lakehouse, Warehouse, SQL Database, Eventhouse, mirrored databases, real-time intelligence, semantic models, Power BI, GraphQL API, and Data Agent form the serving and enrichment surface.
- OneLake, Microsoft Purview, Entra ID, Cost Management, Key Vault, Azure DevOps, and Azure Policy provide platform, governance, identity, and operations foundations.
- The diagram highlights cross-tenant OneLake data sharing through a consumer tenant.

## Why I saved this
A visual map of how Fabric unifies lakehouse, warehouse, real-time, BI, and agentic capabilities across tenants.

## OCR text

```text
Microsoft Fabric ~ ss
* Ge | Machine MicrosoR gy
| Learning Foundry
Data Sources Provider Tenant
— | a
( Store | Process iL ___Serve Enrich | |
+ On-premises Datacenter als pane a vs . —
+ Structured and Notebook book — & Lakohouse
Semistructured Data > A Latenouse  — © © Engneeing o* <}-- &
+ Amazon Web Services mal 25a mera Se oo Ee
+ Googie Cloud ao YB Oata science D) vireroun & GraphOt API Agent
bata Fact Warehouse storea procedure = | sou aubess [f (Preview)
a oe ee | ||
| = =
: paar Goa SOL Database 7
ayetgel iat Bhsesn worn? | irate + ccna bia Qh) St Amavecs |
> indpoint
is Rabaese 2 | Eventmouse ___g, Gy toe, Real-Time ra |
© Azure Event Hubs Event Stream intelligence <* 4 Intelligence ‘Semantic Model <}——#
© Google Cloud Pub/Sub Mirror Dashboard ¢ (Dwrect Lake)
# Azure Data Explorer 8 Coase ig Mirores = = a
+ Katia Meroe 4 je Database = ~*~ Bo atabase = @ Power Bi — <— Copllot
=
1) Microsoft Purview <C>
6@ ———— 7
Q Onetake 4
Bw if Platform | Microsoft Cost Azure Key Azure @ Azure
ee > Entra ID © Management (0) Vault @ one (3) DevOps Policy |
oe © 0060
——— Cross-tenant OneLake Data Share —e—!
DataLake Blob Dataverse Google Cloud Amazon $3 Onetshe @ é
```

## Source
- **Drive file:** [Screenshot 2026-08-20 at 1.43.22 AM.png](https://drive.google.com/file/d/1DpT_JkOUVsC7yGBCDupiWRlQCWJh-PdA/view)
- **Captured:** 2026-08-23
- **Tags:** #microsoft-fabric #lakehouse #data-engineering #data-warehouse #real-time-intelligence #power-bi #copilot #data-agents #onelake #governance
