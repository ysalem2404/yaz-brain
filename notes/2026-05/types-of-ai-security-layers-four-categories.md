---
id: note-types-of-ai-security-layers-four-categories
title: "Types of AI Security Layers: Data, Model, Infrastructure, and Access Control Workflows"
slug: types-of-ai-security-layers-four-categories
date_captured: 2026-05-17
category: security
tags:
  - ai-security
  - data-security
  - model-security
  - access-control
  - rbac
entities:
  - Sumeet Agrawal
---

# Types of AI Security Layers: Data, Model, Infrastructure, and Access Control Workflows

## Summary

A four-quadrant infographic by Sumeet Agrawal breaking AI security into Data Security (protecting training/inference data across its lifecycle), Model Security (protecting models from attacks and manipulation during training and deployment), Infrastructure Security (securing the cloud/servers/APIs hosting AI), and Access Control & Identity (RBAC/ABAC, MFA, least-privilege access), each with a concrete workflow of sequential controls.

## Key Points

- Data Security workflow: collect secure data -> encrypt & store -> apply access controls -> detect anomalies -> prevent leaks -> ensure compliance -> audit data flows -> update policies
- Model Security workflow: train securely -> validate integrity -> test against attacks -> detect model drift -> protect endpoints -> prevent adversarial inputs -> patch vulnerabilities -> retrain securely
- Infrastructure Security: secure environment setup, cloud security configuration, API/endpoint protection, intrusion detection, network isolation, patching, backups, uptime resilience
- Access Control & Identity: define user roles, implement RBAC/ABAC, enable MFA, monitor access logs, enforce least privilege, revoke unused access, audit regularly

## Why Yaz Saved This

A structured four-category AI security checklist directly relevant to Yaz's FedRAMP/GCCH compliance work — provides concrete workflow steps (not just principles) for data, model, infrastructure, and identity security that map well to government/enterprise AI security review criteria.

![Types of AI Security Layers: Data, Model, Infrastructure, and Access Control Workflows](/img/notes/2026-05/types-of-ai-security-layers-four-categories.png)
