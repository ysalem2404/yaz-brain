---
id: note-redis-vs-kafka
title: "Redis vs Kafka"
slug: redis-vs-kafka
date_captured: 2026-08-03
category: data-infrastructure
tags: [redis, kafka, data-infrastructure, event-streaming, caching, pubsub, microservices, etl]
source_type: drive-image
drive_id: 18tU2NwdEac4gI-keoIYu3Gk3q2KHKCmP
drive_name: "Screenshot 2026-08-03 at 10.09.01 AM.png"
drive_link: https://drive.google.com/file/d/18tU2NwdEac4gI-keoIYu3Gk3q2KHKCmP/view
image_path: public/img/notes/2026-08/redis-vs-kafka.png
entities: [Redis, Apache Kafka]
---

# Redis vs Kafka

![Infographic](public/img/notes/2026-08/redis-vs-kafka.png)

## Summary
A side-by-side flow comparison positions Redis for fast in-memory caching and lightweight real-time messaging, while Kafka is positioned for durable event logs, streaming, pipelines, and replayable analytics.

## Key points
- Redis serves low-latency cache, session, leaderboard, rate-limiting, pub/sub, and microservice communication use cases
- Kafka uses producers, topics, partitions, and consumers for durable event streaming
- Redis is a natural choice when the application needs a very fast cache hit or short-lived messaging
- Kafka is a natural choice for data pipelines, event history, replay, aggregation, and ETL

## Why I saved this
A clear architecture-selection reference for choosing between fast state and durable event streams.

## OCR text

```text
datastreakofficial

DataStreak Al info

REDIS vs KAFKA

SG redis

A &2 F Vt a

Caching Session Real-time Rate Pub/Sub Event Log Real-time  Microservices Data Pipeline /
Store Leaderboard Limiting (Messaging) Streaming Aggregation Analytics Communication ETL

FLOW CHART FLOW CHART

1. Client Request 00 *Producer

Ay "Vication sends request DO Application / Service
to Redis produces messages

2. 2. Kafka Cluster
nS YES (ur
Check in Redis nn Message is sent toa
Is the data Topic (Partitioned)
in cache?

3A. Return Data
Redis returns data
very fast

(in-memory)

NO (miss)

3B. Fetch from
S Database
Query the primary

database

ion & Replication

Message is stored in partitions
‘and replicated for fault tolerance ah Stream
“\~ Processing

Real-time

4. Consumer Group,

Consumers subscribe to the topic
and read messages

4. Store in Redis
Save the data in Redis
for future requests

5. Return Data
Send data back to

the client
EY HIGHLIGHTS KEY HIGHLIGHTS

5. Process & Acknowledge

and commits offset

In-Memory Single Node Data Structure (7M Not for Long-term Distributed & Durable =e Feit Tolerant Designed for |
4 - (or Cluster) Rich RS LogStorage Scalable se net OO sons
Super fast Best for low Strings, Hashes, Data can be Handles millions Datais persisted Replication across Not for low-latency

con disk brokers

read/write latency access Lists, Sets, ZSets evicted

of events/see key-value access
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 10.09.01 AM.png](https://drive.google.com/file/d/18tU2NwdEac4gI-keoIYu3Gk3q2KHKCmP/view)
- **Captured:** 2026-08-03
