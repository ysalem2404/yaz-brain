---
id: note-ai-guardrail-categories-seven-layers
title: "AI Guardrail Categories — Input, Prompt, Retrieval, Tool, Output, Runtime, and Memory Guardrails"
slug: ai-guardrail-categories-seven-layers
date_captured: 2026-07-17
category: security
tags:
  - ai-guardrails
  - security
  - prompt-injection
  - tool-security
  - memory-security
  - runtime-monitoring
entities:
  - Alok Sharan
---

# AI Guardrail Categories — Input, Prompt, Retrieval, Tool, Output, Runtime, and Memory Guardrails

## Summary

A detailed Alok Sharan infographic cataloging AI guardrails across seven categories: Input Guardrails (validation, malware screening, rate limits), Prompt Guardrails (system prompt isolation, jailbreak detection, prompt injection checks), Retrieval Guardrails (source filtering, trust scoring, grounding rules), Tool Guardrails (tool allowlists, permission checks, human confirmation), Output Guardrails (toxicity checks, PII masking, hallucination checks), Runtime Guardrails (anomaly detection, cost controls, loop detection), and Memory Guardrails (memory expiry, sensitive data blocking, audit history). Each category lists 8-12 specific controls.

## Key Points

- Seven guardrail categories: Input, Prompt, Retrieval, Tool, Output, Runtime, and Memory
- Input guardrails include malware screening and MIME validation alongside standard input validation
- Prompt guardrails separately address jailbreak detection, hidden prompt protection, and prompt injection checks
- Tool guardrails include human confirmation and transaction limits, not just permission checks
- Runtime guardrails add loop detection, fallback routing, and concurrency control beyond basic monitoring
- Memory guardrails are the most granular category, covering retention, expiry, recall filtering, and deletion rules

## Why Yaz Saved This

The most comprehensive guardrail taxonomy captured in this batch — a detailed checklist Yaz can use directly when specifying security controls for enterprise agent deployments in FedRAMP/GCCH contexts.

![AI Guardrail Categories — Input, Prompt, Retrieval, Tool, Output, Runtime, and Memory Guardrails](/img/notes/2026-07/ai-guardrail-categories-seven-layers.png)
