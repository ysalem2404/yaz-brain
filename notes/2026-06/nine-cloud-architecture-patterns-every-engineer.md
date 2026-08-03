---
id: note-nine-cloud-architecture-patterns-every-engineer
title: "9 Cloud Architecture Patterns Every Engineer Should Know"
slug: nine-cloud-architecture-patterns-every-engineer
date_captured: 2026-06-05
category: architecture
tags:
  - cloud-architecture
  - microservices
  - serverless
  - event-driven
  - cqrs
  - hybrid-cloud
  - system-design
entities:

---

# 9 Cloud Architecture Patterns Every Engineer Should Know

## Summary

A reference infographic laying out nine cloud architecture patterns: serverless, microservices, event-driven architecture, CQRS (Command Query Responsibility Segregation), pipeline architecture, multi-tier architecture, active-passive failover, hybrid cloud, and pub-sub fan-out. Each pattern includes a diagram, a short description, a checklist of benefits, and a "best for" use-case recommendation, closing with the advice to combine patterns based on problem, scale, team, and business goals rather than following rules rigidly.

## Key Points

- Serverless: automatic scaling, pay-for-usage, best for variable-demand event-driven workloads
- Microservices: independent deployment and technology flexibility for complex, scalable apps
- Event-Driven Architecture: loose coupling and real-time processing via event bus
- CQRS: separates read/write models for optimized performance at different workload shapes
- Pipeline Architecture: modular staged processing, best for ETL/ELT and streaming
- Multi-Tier Architecture: separates presentation/application/data layers for traditional apps
- Active-Passive Failover: standby environment for high availability and disaster recovery
- Hybrid Cloud: combines public cloud and private infrastructure for control/compliance/scalability
- Pub-Sub Fan-Out: one-to-many message distribution for notifications and integrations

## Why Yaz Saved This

Directly applicable reference for Yaz's cloud/enterprise architecture design decisions across Azure and GCP deployments, including hybrid cloud patterns relevant to FedRAMP/GCCH constrained environments.

![9 Cloud Architecture Patterns Every Engineer Should Know](/img/notes/2026-06/nine-cloud-architecture-patterns-every-engineer.png)
