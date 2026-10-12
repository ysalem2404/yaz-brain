---
id: note-spark-declarative-pipelines-data-ingestion-architecture
title: "Spark Declarative Pipelines: Data Ingestion Architecture"
slug: spark-declarative-pipelines-data-ingestion-architecture
date_captured: 2026-10-12
category: "data engineering"
tags: ["Spark", "data-ingestion", "ETL", "streaming", "Kafka", "data-quality", "agents"]
entities: ["Spark Declarative Pipelines", "Kafka", "Airflow", "Snowflake"]
source_type: drive-image
drive_id: 19AIIncaJ6-BFkdEC2jrlyQU1oWVc31-k
drive_name: "IMG_0054.HEIC"
drive_link: https://drive.google.com/file/d/19AIIncaJ6-BFkdEC2jrlyQU1oWVc31-k/view?usp=drivesdk
source_url: https://drive.google.com/file/d/19AIIncaJ6-BFkdEC2jrlyQU1oWVc31-k/view?usp=drivesdk
image_path: public/img/notes/2026-10/spark-declarative-pipelines-data-ingestion-architecture.png
phash: 9861678e79e91e86
ocr: local_tesseract_fallback
ingested_at: 2026-10-12T12:00:00Z
---

# Spark Declarative Pipelines: Data Ingestion Architecture

![Spark Declarative Pipelines: Data Ingestion Architecture](/img/notes/2026-10/spark-declarative-pipelines-data-ingestion-architecture.png)

## Summary

A photographed architecture diagram routes enterprise sources through connectors and ETL into a lake, with Spark Declarative Pipelines supporting batch, streaming, SQL, Python, and real-time modes.

## Key points

- Source categories include message queues, enterprise apps, databases, unstructured data, and cloud storage; visible integration labels include Kafka, SaaS Connector, CDC Tool, and home-grown ETL.
- A no-code Designer and Spark Declarative Pipelines form the central preparation and processing layer, with Batch + Streaming, SQL + Python, and Real-Time Mode called out.
- The right side depicts data consumers including real-time operations, agents, apps, dashboards, and analytics; Snowflake and Airflow also appear in the downstream area.
- The photo crops some connectors and small labels, so this note summarizes the visible structure without inferring a complete reference design.

## OCR text

Designer nae

Data Sources g

| Detabeses + Spark Declarative Pipelines

i a
- —

Photographed diagram; the major source, processing, and consumer labels are legible, while parts of the outer edges are cropped.

## Source

- **Drive file:** [IMG_0054.HEIC](https://drive.google.com/file/d/19AIIncaJ6-BFkdEC2jrlyQU1oWVc31-k/view?usp=drivesdk)
- **Captured:** 2026-10-12
- Captured at the Databricks Data + AI Summit 2026 (photographed session slide).
