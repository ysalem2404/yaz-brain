---
id: note-cpu-gpu-tpu-npu-lpu-dpu-comparison
title: "CPU vs GPU vs TPU vs NPU vs LPU vs DPU — The Six Processors Powering Modern AI Infrastructure"
slug: cpu-gpu-tpu-npu-lpu-dpu-comparison
date_captured: 2026-07-17
category: concept-primer
tags:
  - hardware
  - gpu
  - tpu
  - npu
  - lpu
  - dpu
  - ai-infrastructure
entities:
  - Brij Kishore Pandey
---

# CPU vs GPU vs TPU vs NPU vs LPU vs DPU — The Six Processors Powering Modern AI Infrastructure

## Summary

A Brij Kishore Pandey infographic comparing six processor types powering modern AI infrastructure: CPU (general-purpose backbone, best for orchestration/preprocessing), GPU (massive parallelism, best for training/inference via CUDA), TPU (Google-scale systolic-array tensor processing, tied to Google ecosystem), NPU (on-device neural processing for mobile/edge AI with very low power), LPU (inference-focused chip for low-latency LLM serving via on-chip SRAM and deterministic token generation), and DPU (SmartNIC/infrastructure offload processor handling networking, encryption, and storage I/O routing). Each entry lists strengths, limitations, and a 5-step processing flow, closing with a quick decision guide by workload type.

## Key Points

- Six processor types: CPU, GPU, TPU, NPU, LPU, DPU, each with strengths/limitations and a 5-step processing flow
- LPU explicitly framed for 'real-time LLM serving' via deterministic execution and very high tokens/sec — directly relevant to Groq-style inference platforms
- DPU framed as infrastructure offload (networking, encryption, storage I/O), freeing CPU/GPU for AI workloads rather than doing AI compute itself
- TPU noted as tightly tied to the Google ecosystem with less framework flexibility than GPU
- NPU highlighted for on-device inference with data staying on-device and no cloud latency
- Closing decision guide maps each chip to a workload category: orchestration, training, Google-scale tensor ops, edge inference, real-time LLM serving, data center infrastructure

## Why Yaz Saved This

Directly matches Yaz's stated learning interest in hardware requirements for local/cloud model deployment (LPUs, TPUs) — a clean side-by-side reference distinguishing Groq-style LPUs from GPUs/TPUs/NPUs/DPUs for his AI infrastructure evaluation work.

![CPU vs GPU vs TPU vs NPU vs LPU vs DPU — The Six Processors Powering Modern AI Infrastructure](/img/notes/2026-07/cpu-gpu-tpu-npu-lpu-dpu-comparison.png)
