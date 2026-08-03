---
id: note-8-types-of-data-pipeline-patterns
title: "8 Types of Data Pipeline Patterns"
slug: 8-types-of-data-pipeline-patterns
date_captured: 2026-07-17
category: data-engineering
tags:
  - data-pipelines
  - etl
  - elt
  - streaming
  - lambda-architecture
  - kappa-architecture
  - event-driven
entities:
  - Kafka
  - Flink
  - Spark
  - RocksDB
---

# 8 Types of Data Pipeline Patterns

## Summary

A reference infographic of 8 data pipeline patterns: ETL (transform before load), ELT (load raw then transform in-warehouse), Streaming Pipeline (continuous low-latency processing via Kafka/Flink), Lambda Architecture (batch layer for accuracy plus speed layer for low latency), Kappa Architecture (everything as a stream, replay from log), Micro-Batch Pipeline (small scheduled batches via Spark Structured Streaming), Fan-Out Pipeline (one source to many destinations), and Event-Driven Pipeline (steps trigger each other with no central scheduler).

## Key Points

- ETL transforms data before loading into the warehouse; best for data that must be clean before storage
- ELT loads raw data first and transforms inside the warehouse, leveraging cloud compute at scale
- Lambda Architecture merges a batch layer (accuracy) with a speed layer (low latency) at a serving layer
- Kappa Architecture treats everything as a stream, reprocessing historical data by replaying the log
- Micro-Batch Pipeline processes small batches on a tight schedule (seconds, not hours)
- Fan-Out Pipeline broadcasts one source's events to multiple independent consumers
- Event-Driven Pipeline triggers each stage automatically as prior stages complete, no scheduler needed

## Why Yaz Saved This

A practical data engineering pattern reference for designing Bechtel's data pipelines feeding AI/RAG systems — useful when choosing between batch ETL/ELT and streaming/event-driven approaches for enterprise data integration.

![8 Types of Data Pipeline Patterns](/img/notes/2026-07/8-types-of-data-pipeline-patterns.png)
