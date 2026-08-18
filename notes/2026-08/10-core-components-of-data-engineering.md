---
id: note-10-core-components-of-data-engineering
title: "10 Core Components of Data Engineering"
slug: 10-core-components-of-data-engineering
date_captured: 2026-08-17
category: data-engineering
tags: [data-engineering, data-ingestion, batch-processing, streaming, data-storage, data-transformation, data-governance, data-quality, orchestration, observability, lakehouse]
source_type: drive-image
drive_id: 17te5uIQhZbqXLpsHiIvm2ZIWN9OjJpYQ
drive_name: "Screenshot 2026-08-17 at 2.12.55 PM.png"
drive_link: https://drive.google.com/file/d/17te5uIQhZbqXLpsHiIvm2ZIWN9OjJpYQ/view
image_path: public/img/notes/2026-08/10-core-components-of-data-engineering.png
entities: [Apache Beam, Databricks, Apache Spark, Apache Kafka, Airbyte, Flink, S3, dbt, DataHub, Dagster]
---

# 10 Core Components of Data Engineering

![Infographic](public/img/notes/2026-08/10-core-components-of-data-engineering.png)

## Summary
A component map lays out the data-engineering stack from ingestion through storage, processing, transformation, governance, quality, orchestration, and observability.

## Key points
- Data ingestion collects data from databases, APIs, apps, and external sources; batch processing handles scheduled or historical workloads while streaming handles live events
- Data storage holds raw, processed, and historical data, while data warehousing and lakehouses optimize querying and analytics
- Data transformation cleans, joins, enriches, and standardizes raw data into trusted models for use
- Governance and cataloging track metadata, ownership, lineage, permissions, and discovery
- Workflow orchestration manages dependencies and retries, while quality and observability monitor freshness, schema changes, failures, anomalies, and quality issues

## Why I saved this
A practical stack-level checklist for seeing data engineering as an operating system for reliable AI and analytics.

## OCR text

```text
10 Core Components of Data Engineering

Apache Beam Databricks

Apache Spark

Amazon SQS_ RabbitMQ Apache Kafka

Batch Processing

Message Queues

=

Processes large datasets on

Buffers events between systems,

Ashish Joshi

schedules for reporting, historical

independent producers

@ashish—joshi

analysis, and transformations.

| ———

consumers to avoid

\

downstream overload.

‘

rk

Azure

Google

AWS

Apache

Kafka

Structured Apache

Data Lake

Cloud

Kinesis

Airbyte

Kafka

[2 ae

Streams

Streaming

Flink

Amazon S3_ Storage

Storage

§)

&

oe

"

.-)

Data Ingestion

Stream Processing

Data Storage

Collects and reliabl;

moves data

Processes real-time events for

from databases,

Is, apps, and

Stores raw, processed, and

historical

d

lata for scalable

external sources into the data

faster analytics, monitoring, and

event-driven data pipelines.

processing and analytics.

platform.

O°

(3

o-

10 -

8) *

o*

Data Governance &

Data Warehousing &

Data Transformation

Cataloging

Lakehouse

Cleans, joins, enriches,

and

lines

Tracks metadata, ownership,

je, permissions, and data

Provides optimized storage for

transforms raw data into

trusted

|

assets for secure, trusted data

fast querying, dashboards,

models for analytics and business

iscovery.

reporting, and analytics.

use.

sik

xe)

8

o

Ex

"ar

Databricks Google Snowflake

SQL

Apache

dbt

DataHub OpenMetadata Unity

(7

Spark

Catalog

o-

BigQuery

Workflow Orchestration

Data Qualit

&

Observabil

tt

i

ty

Schedules pipelines, manages

Monitors data freshness, schema

dependencies, retries failures,

chi ’S, pipeline failures,

and coordinates data workflows.

anomal

s, and quality issues.

c

®

G

Monte Carlo

Soda

Great Expectations

Prefect

Dagster Apache Airflow
```

## Source
- **Drive file:** [Screenshot 2026-08-17 at 2.12.55 PM.png](https://drive.google.com/file/d/17te5uIQhZbqXLpsHiIvm2ZIWN9OjJpYQ/view)
- **Captured:** 2026-08-17
