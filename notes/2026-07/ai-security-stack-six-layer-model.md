---
id: note-ai-security-stack-six-layer-model
title: "AI Security Stack — Six-Layer Enterprise Defense Model"
slug: ai-security-stack-six-layer-model
date_captured: 2026-07-17
category: security
tags:
  - ai-security
  - identity-access
  - data-protection
  - prompt-security
  - compliance
  - observability
entities:
  - Okta
  - OneTrust
---

# AI Security Stack — Six-Layer Enterprise Defense Model

## Summary

An AI Security Stack infographic organizing enterprise AI defenses into six layers: Identity & Access (RBAC/ABAC, zero-trust, API authentication via tools like Okta), Data Protection (data masking, tokenization, encryption for PII/financial data), Prompt & Input Security (input checks, prompt filtering against injection/jailbreak/data-extraction attacks), Governance & Compliance (audit records, risk categorization, GDPR/EU AI Act/ISO 42001 coverage via tools like OneTrust), Output Validation (fact verification, policy validation, output moderation against hallucination and unsafe responses), and Monitoring & Observability (behavior tracking, audit logging, performance monitoring for model drift).

## Key Points

- Six-layer stack: Identity & Access, Data Protection, Prompt & Input Security, Governance & Compliance, Output Validation, Monitoring & Observability
- Names specific vendor tools per layer (Okta for identity, OneTrust for governance/compliance)
- Governance & Compliance layer explicitly lists GDPR, EU AI Act, and ISO 42001 as framework coverage
- Output Validation layer distinguishes hallucination detection from compliance-issue and unsafe-response detection
- Prompt & Input Security layer names three specific risks: prompt injection, data extraction prompts, jailbreak attempts
- Practical, tool-referenced format rather than purely conceptual

## Why Yaz Saved This

A vendor-grounded security stack reference Yaz can use alongside the more exhaustive Alok Sharan guardrail taxonomy — useful for identifying concrete tooling (Okta, OneTrust) when specifying AI security controls for enterprise deployments.

![AI Security Stack — Six-Layer Enterprise Defense Model](/img/notes/2026-07/ai-security-stack-six-layer-model.png)
