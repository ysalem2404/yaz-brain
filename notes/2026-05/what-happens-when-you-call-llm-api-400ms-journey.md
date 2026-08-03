---
id: note-what-happens-when-you-call-llm-api-400ms-journey
title: "What Happens When You Call Any LLM API: The Full Journey in ~400ms"
slug: what-happens-when-you-call-llm-api-400ms-journey
date_captured: 2026-05-21
category: architecture
tags:
  - llm-inference
  - api-architecture
  - latency
  - gpu
  - attention-mechanism
entities:
  - Brij Kishore Pandey
---

# What Happens When You Call Any LLM API: The Full Journey in ~400ms

## Summary

Brij Kishore Pandey's deep technical walkthrough traces the complete ~325-375ms journey of an LLM API call through eight stages: API Gateway (~5ms: TLS, auth, rate limiting, billing meter start), Load Balancer (~2ms: routing across GPU clusters), Tokenization (~3ms: BPE/SentencePiece conversion to token IDs), Model Router (routes to large/small/embedding model clusters based on request type), Inference Engine (where most latency lives: prefill phase building KV cache, decode phase autoregressive token generation, attention mechanism detail with Q/K/V matrices, hardware utilization across CPU/RAM/Tensor Cores/GPU, software stack of CUDA/cuBLAS/Triton/PyTorch), Post-Processing (~5ms: sampling, safety checks, format response), Response & Billing (token counting, cost calculation), and Logging & Observability (latency percentiles, error rates, throughput metrics logged at every step).

## Key Points

- Total end-to-end latency breakdown: ~325-375ms per request, with inference (~250-300ms) dominating over gateway/routing/tokenization (~10ms combined)
- API Gateway handles TLS termination, authentication, rate limiting by tier, request validation, and starts the billing meter
- Model Router hidden layer routes requests to large model, small model, or embedding clusters based on capability-aware routing
- Inference Engine's prefill phase builds the KV cache in parallel across all tokens; decode phase runs one token at a time autoregressively, consuming 80-90% of long-request latency
- Hardware utilization detail: A100/H100/H200-class GPUs at 312-989 TFLOPS, KV cache bandwidth ~2-3 TB/s
- Post-processing applies temperature/top-p sampling, safety/moderation filters that can block responses, and final response formatting before billing and logging

## Why Yaz Saved This

Highly technical, detailed reference for understanding LLM API latency and infrastructure — valuable for Yaz's enterprise architecture work on performance/cost optimization of LLM-backed systems.

![What Happens When You Call Any LLM API: The Full Journey in ~400ms](/img/notes/2026-05/what-happens-when-you-call-llm-api-400ms-journey.png)
