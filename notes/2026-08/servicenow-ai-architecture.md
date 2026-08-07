---
id: note-servicenow-ai-architecture
title: "ServiceNow AI Architecture"
slug: servicenow-ai-architecture
date_captured: 2026-08-06
category: enterprise-ai
tags:
  - servicenow
  - now-assist
  - ai-agents
  - agent-orchestration
  - knowledge-graph
  - rag
  - mcp
  - governance
  - human-in-the-loop
  - workflow
entities:
  - ServiceNow
  - Now Assist
  - RaptorDB Pro
  - Workflow Data Fabric
  - Azure OpenAI
  - Claude
  - Gemini
source_type: drive-image
drive_id: 1MLjIyVWdMGApgMGrbCN8sD8km7kJlcM9
drive_name: "Screenshot 2026-08-06 at 12.29.09 PM.png"
drive_link: https://drive.google.com/file/d/1MLjIyVWdMGApgMGrbCN8sD8km7kJlcM9/view
image_path: public/img/notes/2026-08/servicenow-ai-architecture.png
---

# ServiceNow AI Architecture

![Infographic](/img/notes/2026-08/servicenow-ai-architecture.png)

## Summary
A ServiceNow AI architecture traces requests from input channels through context, memory, orchestration, knowledge and RAG, reasoning, agent handoffs, governed tools, workflows, and a cross-cutting AI control tower.

## Key points
- The experience layer captures intent, record context, attachments, conversation history, authentication, rate limits, and prompt guardrails
- The orchestrator combines knowledge graph/RAG, LLM reasoning, agent-to-agent handoffs, skills, tools, and human approval gates
- The AI control tower covers discovery, runtime monitoring, identity and access, and ROI/adoption metrics across integrations

## Why I saved this
A strong enterprise reference for evaluating how agent orchestration and governance should fit into an existing workflow platform.

## OCR text

```text
SERVICENOW AI

ARCHITECTURE

a
How a request flows from user input to gover

1

User / Input Channels

Now Assist panel, Virtual Agent,
chat, voice, portal, Slack /
Teams

Now Assist Experience Layer

|

Captures intent, record context,

Mo attachments, conversation
c's history

Memory & State

Conversation context,

Authentication, rate limits, —_—_—— (oO)
& prompt guardrails, request session state, workflow
Validation o> checkpoints

Al Agent Orchestrator

|

Knowledge Graph / RAG
Intent understanding, task
& decomposition, agent & skill _. _ Knowledge Graph, Al Search,
routing RaptorDB Pro, Workflow Data

Fabric
5

(®

Now LLM / Reasoning Engine

Reasoning & planning with Now
LLM or Azure Opendal, Claude,
Gemini

Al Agent Fabric (A2A)

Discovers 3rd-party agents,
orchestrates hand-offs,
collaboration

Now Assist Skills / Tool Layer

|

GenAl skills, flow actions,
subflows, scripts, external
operations

4
Predictive Intelligence

rad

9 cP | Action Fabric i 09 3
Po ucp/ActionFabric ‘= ©.
= «(MCP Loki fenced rogieny. 3 ITSM HRSD CSM —_—DevOps
ZB) ___ governed actions for externa acer tiilliane icon iilliauets
gents a
2 Human-in-the-Loop 5
Approval gates for risky or ;
8 & sensitive actions before
execution
13 Aggregation / synthesis
A Workflow Engine)
© © Combines agent results, verifies
© _ inferences, executes the workflow

Rendered in UI (chat answer,

generated report, executed
task)

Go

ned Al A )

Al Control Tower
Cross-cutting governance
over every layer

Discovery (Al agents,

model & identity across
AWS, Azure, GCP, SAP +

30 integrations) |

&

Runtime monitoring: Al

| agent behavior, traces,
logs, toxic content

Identity & access graph,
permission scoping,
RBAC/ABAC/ACL

¥

ROI & adoption
dashboard: error rate,

latency, CSAT

Platform Foundation

A
saob
Scales across Al
Platform, RaptorDB Pro,
(CMDB / CSDM, Workflow
Data Fabric
```

## Source
- **Drive file:** [Screenshot 2026-08-06 at 12.29.09 PM.png](https://drive.google.com/file/d/1MLjIyVWdMGApgMGrbCN8sD8km7kJlcM9/view)
- **Captured:** 2026-08-06
- **Tags:** #servicenow #now-assist #ai-agents #agent-orchestration #knowledge-graph #rag #mcp #governance #human-in-the-loop #workflow
