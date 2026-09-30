---
{
  "id": "note-end-to-end-azure-data-architecture",
  "title": "End-to-End Azure Data Architecture",
  "slug": "end-to-end-azure-data-architecture",
  "date_captured": "2026-09-30",
  "category": "Cloud data architecture",
  "tags": [
    "azure",
    "data-architecture",
    "data-factory",
    "adls-gen2",
    "databricks",
    "purview",
    "data-governance",
    "analytics",
    "azure-ai"
  ],
  "entities": [
    "Azure Data Factory",
    "ADLS Gen2",
    "Azure Databricks",
    "Microsoft Purview",
    "Microsoft Entra ID",
    "Azure Key Vault",
    "Power BI",
    "Azure AI Foundry",
    "Azure OpenAI Service"
  ],
  "source_type": "drive-image",
  "drive_id": "1EZV2gpor5utb-LAviHFMHskrADmotgsZ",
  "drive_name": "Screenshot 2026-09-28 at 6.11.53 AM.png",
  "drive_link": "https://drive.google.com/file/d/1EZV2gpor5utb-LAviHFMHskrADmotgsZ/view?usp=drivesdk",
  "note_path": "notes/2026-09/end-to-end-azure-data-architecture.md",
  "image_path": "public/img/notes/2026-09/end-to-end-azure-data-architecture.png",
  "phash": "a17f6a4a2e9c58ac",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-30T12:14:31Z",
  "summary": "A six-stage reference diagram maps Azure data sources through batch/stream ingestion, bronze-silver-gold lake storage, Databricks processing, Purview governance, security, and analytics/AI consumption."
}
---

# End-to-End Azure Data Architecture

![Infographic](/img/notes/2026-09/end-to-end-azure-data-architecture.png)

## Summary
A six-stage reference diagram maps Azure data sources through batch/stream ingestion, bronze-silver-gold lake storage, Databricks processing, Purview governance, security, and analytics/AI consumption.

## Key points
- Sources include SQL Server, Azure SQL, PostgreSQL, MySQL, MongoDB, Salesforce, SAP, APIs, files, and IoT devices; Azure Data Factory and Event Hubs-family services handle batch, streaming, and change-data ingestion.
- ADLS Gen2 holds bronze/raw, silver/cleansed, and gold/business-ready data; Azure Databricks adds Spark, Delta Lake, structured streaming, MLflow, ETL, data quality, and engineering workflows.
- Microsoft Purview supplies catalog, lineage, metadata, governance, and compliance/audit functions, alongside Key Vault, Entra ID, RBAC, and private endpoints.
- Consumption spans Power BI, Excel, SQL analytics, Azure AI Foundry, Azure OpenAI Service, machine learning, vector search, dashboards, and self-service applications.

## OCR transcription (best effort)

```text
AX END-TO-END AZURE DATA axl URE
CESSING GOVERNANCE & ANALYTICS & Al
@ ata sources | @ data incestion a DATA STORAGE wes |

) pene I Dats Lake St buh: DD picrosoft
(Ontren rage Databrh
i jatabricks
ies Data Factory Gen2 |Y re wa -—
none Apache Spark Power BI Excel SOL Anis
e—- | & | Bx |*% =e
S sparks
Dy mysae Pipelines Copy hctty Sh a cata nirgenet COE) Machine Learring
- ake
Mis * © . B= A™ ume 5 A S
SaaS Applications > Mapping Change > P= ie ‘Azure Al Azure Open
(Galesfoce, Workday) Data Hows Data Capture fl <) Structured Streaming fase ep
Sap rs
: ; Gold MUflow ; bend
ee <a) DB Real-Time Ingestion GB {Bisiness Red) Mii By security Layer 4 ene
Is ; Azure Key Vault Machine Leaming (A Applications)
(REST, Graphau = x Z aaa OF ata Transformation ¢ Ss :
ra wa Microsoft Entra ID GB Data consumption

Files ua
B (4.0K ML Pe) | Event Hubs oT Hub Event Grid fg HierarchicalNamespace (EL, GP AT D Memuces

oe x nae 5 2 Massive Scale a Control RBAC)
sors, Devices) Data oma * Self-Service A kopicators,
QO pach @ soning Q cxe irons Private Endpoints froges QD ont
Structured «Ser Stace GS ow cost storage (Network Security
‘Streaming + Unstructured 5)

Gen2 ‘Azure Databricks Purview Power Bi + Al m
oases fg Sey aa Ged <P oe) gH Ey RB Quantamas
```

## Source capture
- **Drive file:** [Screenshot 2026-09-28 at 6.11.53 AM.png](https://drive.google.com/file/d/1EZV2gpor5utb-LAviHFMHskrADmotgsZ/view?usp=drivesdk)
- **Captured:** 2026-09-30
