---
{
  "id": "note-azure-databricks-integration-ecosystem",
  "title": "Azure Databricks Integration Ecosystem",
  "slug": "azure-databricks-integration-ecosystem",
  "date_captured": "2026-08-30",
  "category": "architecture",
  "tags": [
    "azure-databricks",
    "microsoft-fabric",
    "unity-catalog",
    "onelake",
    "data-platform",
    "integration",
    "copilot-studio",
    "azure-openai",
    "delta-lake",
    "iceberg"
  ],
  "entities": [
    "Azure Databricks",
    "Microsoft Fabric",
    "Microsoft Entra",
    "Microsoft Purview",
    "Unity Catalog",
    "OneLake",
    "Power BI",
    "Copilot Studio",
    "Microsoft Foundry",
    "Azure OpenAI",
    "SAP Business Data Cloud",
    "Delta Lake",
    "Apache Iceberg",
    "Azure Data Factory",
    "Azure Event Hubs"
  ],
  "source_type": "drive-image",
  "drive_id": "1vyroFOemM8UL0zdDW-wNddsN4qm_p0CR",
  "drive_name": "IMG_0138.HEIC",
  "drive_link": "https://drive.google.com/file/d/1vyroFOemM8UL0zdDW-wNddsN4qm_p0CR/view",
  "note_path": "notes/2026-08/azure-databricks-integration-ecosystem.md",
  "image_path": "public/img/notes/2026-08/azure-databricks-integration-ecosystem.png",
  "phash": "58d3f10d7b056836",
  "ocr": "multimodal_read",
  "ingested_at": "2026-08-30T12:15:00Z"
}
---

# Azure Databricks Integration Ecosystem

![Infographic](/img/notes/2026-08/azure-databricks-integration-ecosystem.png)

## Summary
A full-stack reference diagram of how Azure Databricks connects into the Microsoft estate: Entra and Purview spanning the top for identity and governance, Databricks components (Agent Bricks, AI/BI, Genie, Lakehouse, Lakebase, Lakeflow, Unity Catalog) on the left, and Microsoft solution surfaces on the right, joined by named connectors and catalog federation paths.

## Key points
- Microsoft Entra and Microsoft Purview span the whole diagram — identity and governance are platform-wide, not per-workload.
- Databricks internals shown: Agent Bricks, AI/BI, Custom Apps, Genie, Lakehouse, Lakebase, Lakeflow, Unity Catalog, over Postgres / Delta Lake / Iceberg.
- Named integration paths to Microsoft surfaces: Power Platform Connector, MCP for Copilot Studio Agents (Preview), MCP for Microsoft Foundry (Preview), and an AI Gateway.
- Ingestion into Databricks arrives via Azure Data Factory and Azure Event Hubs; SAP Business Data Cloud (BDC) Connect feeds in from the top-left.
- Fabric interop is bidirectional: Direct Publish Connector to Power BI, Mirrored Azure Databricks Catalog, OneLake Catalog Federation, and Store in OneLake (Preview), with Power BI able to use Direct Lake Mode.
- Everything sits on Azure Data Lake Storage (ADLS) as the common storage substrate.

## Why I saved this
This is the single clearest map of the Databricks/Fabric boundary — exactly the diagram to reach for when deciding what lands in OneLake versus Unity Catalog, and which Copilot or Foundry integration path to govern.

## Source
- Google Drive: [IMG_0138.HEIC](https://drive.google.com/file/d/1vyroFOemM8UL0zdDW-wNddsN4qm_p0CR/view)
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
