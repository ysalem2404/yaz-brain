---
id: note-hsbc-enterprise-ai-architecture
title: "Inside HSBC's Enterprise AI Architecture — Multi-Model, Multi-Topology, Governed by Design"
slug: hsbc-enterprise-ai-architecture
date_captured: 2026-07-25
category: case-study
tags: [case-study, hsbc, enterprise-architecture, multi-model, multi-topology, financial-services, governance, model-gateway, bigquery, google-cloud, openai, mistral, control-plane]
source_type: drive-image
drive_id: 1votWYhVohuHke3z_CTUZmcAGM46q_73g
drive_name: "Screenshot 2026-07-25 at 5.58.40 PM.png"
drive_link: https://drive.google.com/file/d/1votWYhVohuHke3z_CTUZmcAGM46q_73g/view
image_path: public/img/notes/2026-07/hsbc-enterprise-ai-architecture.png
---

# Inside HSBC's Enterprise AI Architecture — Multi-Model, Multi-Topology, Governed by Design

![Infographic](public/img/notes/2026-07/hsbc-enterprise-ai-architecture.png)

## Summary
HSBC's 5-plane architecture, published as a reference for regulated multi-model AI: (1) Business Applications — customer experience, wealth & advisory, payments & transactions, risk & compliance, operations & productivity; (2) Enterprise AI Platform (Control Services) — Model Gateway, AI Orchestration, Identity & Access, Policy Enforcement, Prompt Management, AI Observability — 'unified services for secure access, orchestration, governance and observability across all models'; (3) Inference Plane (Multi-Topology) — Google Cloud AML AI (managed ML: AML detection 1B+ transactions/mo, Vertex AI, BigQuery data plane, explainability, MLOps pipeline train→backtest→predict), OpenAI (API-based: wealth intelligence, RAG across 10K+ research sources, enterprise privacy controls, knowledge-intensive reasoning), Mistral AI (self-hosted: internal productivity, translation/multilingual reasoning, document intelligence, full data sovereignty, lower latency, full operational visibility); (4) Data Plane — structured operational data (transactions/payments/KYC/sanctions/risk), Analytics & ML Data Platform on BigQuery (validated table snapshots, immutable train/validate/backtest/predict datasets), Unstructured & Knowledge Data (research corpus 10K+, internal docs/policies, market data); (5) Control Plane — Identity (SSO/RBAC/Least Privilege), Policy (access + data + model), Observability (logs/metrics/traces, latency/token usage, quality signals), Lineage (data + model + version), Audit (end-to-end audit trails, evidence collection), Model Governance (risk mgmt, validation, fairness/bias monitoring), Runtime Guardrails (safety filters, moderation, policy enforcement). Scale: 57 countries, ~200K employees, $3.2T assets, regulated by FCA/PRA/Fed/OCC/MAS/HKMA/ECB.

## Key points
- Three inference topologies simultaneously: managed ML (AML on GCP), API-based (OpenAI), self-hosted (Mistral) — each chosen by workload/data sensitivity
- Model Gateway is the linchpin — one control point across all three topologies
- Sovereignty case is explicit: Mistral self-hosted for data-sovereign workloads
- BigQuery is the 'authoritative data plane' for ML — immutable snapshots for train/backtest/predict
- Regulator list (7 regulators, 57 countries) is why the Control Plane is 7 distinct services

## Entities & tools mentioned
HSBC, Google Cloud AML AI, OpenAI, Mistral AI, BigQuery, Vertex AI, FCA, PRA, Fed, OCC, MAS, HKMA, ECB

## Why I saved this
Gold-standard reference for Yaz's multi-cloud, regulated-industry architecture reviews. Directly analogous to nuclear/govt/FedRAMP contexts — 'multi-topology governed by design' is exactly the pattern for GCCH/sovereign AI work.

## Source
- **Drive file:** [Screenshot 2026-07-25 at 5.58.40 PM.png](https://drive.google.com/file/d/1votWYhVohuHke3z_CTUZmcAGM46q_73g/view)
- **Captured:** 2026-07-25
- **Tags:** #case-study #hsbc #enterprise-architecture #multi-model #multi-topology #financial-services #governance #model-gateway #bigquery #google-cloud #openai #mistral #control-plane
