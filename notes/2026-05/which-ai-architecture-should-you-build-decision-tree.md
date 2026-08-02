---
id: note-which-ai-architecture-should-you-build-decision-tree
title: "Which AI Architecture Should You Actually Build? A Decision Tree"
slug: which-ai-architecture-should-you-build-decision-tree
date_captured: 2026-05-12
category: architecture
tags: [ai-architecture, decision-framework, rag, fine-tuning, multi-agent-systems, long-context, cost-latency-tradeoffs]
source_type: drive-image
drive_id: 1K8HKJ3uF5yQ9peysYIz-JF7gwt-zwtIX
drive_name: "Screenshot 2026-05-12 at 2.18.38 PM.png"
drive_link: https://drive.google.com/file/d/1K8HKJ3uF5yQ9peysYIz-JF7gwt-zwtIX/view
image_path: public/img/notes/2026-05/which-ai-architecture-should-you-build-decision-tree.png
---

# Which AI Architecture Should You Actually Build? A Decision Tree

![Infographic](public/img/notes/2026-05/which-ai-architecture-should-you-build-decision-tree.png)

## Summary
Brij Kishore Pandey's decision-tree infographic, subtitled "a no-fluff decision tree for choosing the right pattern — before you waste six months on the wrong one," walks through five branching questions to route a use case to one of six architectures: Single LLM Call, Single Agent + Tools, Multi-Agent System, Long Context, RAG, or Fine-Tuning. Each path is driven by concrete questions — does it need private data access, does it need to take actions/use tools, are multiple specialists needed, is the data static and under 200K tokens, and does it need consistent style or format. A summary table attaches cost ($ to $$$$), latency (1s to 120s), and complexity (low/med/high) ratings to each architecture, alongside "best for" use cases. Three closing principles reinforce the decision logic: "start dumb, scale up" (80% of use cases only need a single LLM call), "long context killed RAG for small docs" (under 200K tokens, just paste it), and "agents ≠ chatbots" (agents complete tasks, chatbots return messages).

## Key points
- Decision tree routes on 5 questions: private data access, tool/action use, need for multiple specialists, static data under 200K tokens, need for consistent style/format
- Six resulting architectures: Single LLM Call, Single Agent + Tools, Multi-Agent System, Long Context, RAG, Fine-Tuning
- Cost/latency/complexity table: Single LLM Call ($ / 1-3s / Low) up to Multi-Agent System ($$$$ / 30-120s / High)
- Rule of thumb: 'start dumb, scale up' — 80% of real use cases never need more than a single LLM call
- Rule of thumb: under 200K tokens of static data, skip RAG and just use long context
- Rule of thumb distinguishing agents from chatbots: task completion vs. message response

## Entities & tools mentioned
Brij Kishore Pandey

## Why I saved this
A practical, reusable decision framework Yaz can apply directly when scoping new AI initiatives at Bechtel — the cost/latency/complexity matrix gives him a fast way to push back on over-engineered multi-agent proposals when a single LLM call or RAG pattern would meet FedRAMP/GCCH requirements at far lower operational risk and cost.

## Source
- **Drive file:** [Screenshot 2026-05-12 at 2.18.38 PM.png](https://drive.google.com/file/d/1K8HKJ3uF5yQ9peysYIz-JF7gwt-zwtIX/view)
- **Captured:** 2026-05-12
- **Tags:** #ai-architecture #decision-framework #rag #fine-tuning #multi-agent-systems #long-context #cost-latency-tradeoffs
