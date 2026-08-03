---
id: note-ai-agent-architecture-multi-agent-shared-memory
title: "AI Agent Architecture: Multi-Agent Collaboration with Shared Memory and Context"
slug: ai-agent-architecture-multi-agent-shared-memory
date_captured: 2026-05-21
category: architecture
tags:
  - ai-agents
  - multi-agent-systems
  - shared-memory
  - sense-plan-act
entities:
  - Rathnakumar Udayakumar
---

# AI Agent Architecture: Multi-Agent Collaboration with Shared Memory and Context

## Summary

Rathnakumar Udayakumar's diagram details a multi-agent architecture where three agents connect to a shared memory store for collaboration, each internally running a Memory-Goals-Reason-Plan-Coordinate-Act-Tools-Sense loop powered by an LLM core. Each agent senses and acts upon both a Physical Environment Context (connected devices) and a Digital Business Context (unstructured data, vector stores, structured data, knowledge graphs), enabling agents to ground decisions in both real-world and business data.

## Key Points

- 3 agents connect to a central Shared Memory store enabling cross-agent collaboration
- Each agent's internal loop: Goals/Memory → Reason (via LLM) → Plan → Coordinate → Act → Tools/Sense
- Agents sense and act on a Physical Environment Context (devices) and a Digital Business Context (unstructured data, vector stores, structured data, knowledge graphs)
- Digital business context connects to both vector stores and structured data repositories, enabling grounded decision-making
- Illustrates how multi-agent systems combine physical/IoT awareness with business data awareness

## Why Yaz Saved This

Detailed multi-agent architecture reference showing how shared memory and dual physical/digital context grounding work together — useful for Yaz's enterprise multi-agent system design work.

![AI Agent Architecture: Multi-Agent Collaboration with Shared Memory and Context](/img/notes/2026-05/ai-agent-architecture-multi-agent-shared-memory.png)
