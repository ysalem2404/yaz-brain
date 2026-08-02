---
id: note-universal-ai-agent-architecture-ananya-ghosh-chowdhury
title: "One Architecture Diagram That Explains Every AI Agent (Ananya Ghosh Chowdhury Edition)"
slug: universal-ai-agent-architecture-ananya-ghosh-chowdhury
date_captured: 2026-05-15
category: architecture
tags: [ai-agents, agent-architecture, reasoning-engine, memory-systems, guardrails, observability, model-context-protocol]
source_type: drive-image
drive_id: 19NVdfWZ6k__cB0WIsbdtOFtWxVX6mRpI
drive_name: "Screenshot 2026-05-15 at 11.22.55 AM.png"
drive_link: https://drive.google.com/file/d/19NVdfWZ6k__cB0WIsbdtOFtWxVX6mRpI/view
image_path: public/img/notes/2026-05/universal-ai-agent-architecture-ananya-ghosh-chowdhury.png
---

# One Architecture Diagram That Explains Every AI Agent (Ananya Ghosh Chowdhury Edition)

![Infographic](public/img/notes/2026-05/universal-ai-agent-architecture-ananya-ghosh-chowdhury.png)

## Summary
This infographic by Ananya Ghosh Chowdhury, titled identically to the Brij Kishore Pandey diagram captured earlier in this vault, presents the same core universal-agent-anatomy concept with distinct visual design: Input (user prompts, API requests, sensor signals, system events, workflow triggers) feeds a Perception Layer ("Perceive"), which flows into a Reasoning Engine/LLM ("Think," using Chain-of-Thought/ReAct/Plan-and-Execute) connected bidirectionally to a Memory System (short-term conversation context and active working state; long-term vector databases, episodic memory, learned behavior patterns). A decision diamond checks whether the goal is achieved; if not, a Planning Module splits the goal into subtasks feeding a Tool Execution/Action Layer ("Act") that reaches Model Context Protocol, API calls, code execution, database queries, file system, and external services like GitHub. An Observability Layer captures execution traces, logs, metrics, and latency, while a Guardrails & Safety sidebar spans permission controls, approval checkpoints, content moderation, rate limiting, and human oversight. The author lists this pattern as powering ChatGPT, Claude, GitHub Copilot, custom AI agents, multi-agent systems, and autonomous AI workflows.

## Key points
- Same core loop as the Brij Kishore Pandey version: Perceive → Think (Reasoning Engine/LLM with CoT/ReAct/Plan-and-Execute) → Act (Tool Execution) → Observe, with Memory and Guardrails threaded throughout
- Memory System explicitly split into short-term (conversation context, active working state) and long-term (vector databases, episodic memory, learned behavior patterns)
- Planning Module shown splitting goals into an explicit Step 1 → Step 2 → Step 3 task queue
- Tool Execution/Action Layer explicitly names Model Context Protocol alongside API calls, code execution, database queries, file system, and external services (e.g. GitHub)
- Guardrails & Safety sidebar lists permission controls, approval checkpoints, content moderation, rate limiting, human oversight
- Author claims the pattern powers ChatGPT, Claude, GitHub Copilot, custom AI agents, multi-agent systems, and autonomous AI workflows

## Entities & tools mentioned
Ananya Ghosh Chowdhury

## Why I saved this
A second independently authored version of the same universal-agent-architecture pattern already captured from Brij Kishore Pandey — kept as a distinct note because the attribution, visual design, and phrasing differ, but the underlying schema is identical, reinforcing that this Perceive-Think-Act-Observe-plus-Guardrails pattern is becoming a de facto industry standard worth adopting in Yaz's own agent design documentation. Note: this file was captured twice on the same day (11:22 AM and 12:05 PM); only this entry is kept as canonical and the second capture is logged as a duplicate.

## Source
- **Drive file:** [Screenshot 2026-05-15 at 11.22.55 AM.png](https://drive.google.com/file/d/19NVdfWZ6k__cB0WIsbdtOFtWxVX6mRpI/view)
- **Captured:** 2026-05-15
- **Tags:** #ai-agents #agent-architecture #reasoning-engine #memory-systems #guardrails #observability #model-context-protocol
