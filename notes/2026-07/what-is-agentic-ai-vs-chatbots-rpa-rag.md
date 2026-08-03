---
id: note-what-is-agentic-ai-vs-chatbots-rpa-rag
title: "What Is an Agentic AI? — Distinguishing Agentic AI from Chatbots, RPA, and RAG"
slug: what-is-agentic-ai-vs-chatbots-rpa-rag
date_captured: 2026-07-17
category: concept-primer
tags:
  - agentic-ai
  - rag
  - rpa
  - chatbots
  - multi-agent
  - orchestration
entities:
  - GenAI.Works
---

# What Is an Agentic AI? — Distinguishing Agentic AI from Chatbots, RPA, and RAG

## Summary

A GenAI.Works infographic clarifying what agentic AI is NOT — plain LLM chatbots (query → system prompt → LLM → output), RPA (script trigger → conditional tool execution → output), and RAG (query → embedding → retrieval from knowledge base/vector DB/web → augmentation → LLM → output) — versus what agentic AI actually is: a system where an orchestrator LLM manages memory, tools, planning, and feedback for 'Agent 1,' which then communicates via a multi-agent protocol (discover agent capabilities, share tasks, update task information) with specialized agents (coding agent, retrieval agent, citation agent) before producing a final output.

## Key Points

- Explicitly distinguishes agentic AI from three commonly conflated patterns: LLM chatbots, RPA, and RAG
- Chatbots, RPA, and RAG are shown as single-pass, non-orchestrated flows with no persistent planning loop
- True agentic AI requires an orchestrator LLM combining memory, tools, planning, and feedback in a loop
- Multi-agent protocol explicitly includes capability discovery, task sharing, and task-status updates between specialized agents
- Example specialized agents shown: coding agent, retrieval agent, citation agent, each communicating back to the orchestrator
- Useful corrective for vendors or teams mislabeling simple RAG or RPA pipelines as 'agentic AI'

## Why Yaz Saved This

A precise definitional reference for Yaz to push back on vendor overclaiming — directly useful when evaluating whether a proposed enterprise AI solution is genuinely agentic or simply RAG/RPA relabeled as 'agentic.'

![What Is an Agentic AI? — Distinguishing Agentic AI from Chatbots, RPA, and RAG](/img/notes/2026-07/what-is-agentic-ai-vs-chatbots-rpa-rag.png)
