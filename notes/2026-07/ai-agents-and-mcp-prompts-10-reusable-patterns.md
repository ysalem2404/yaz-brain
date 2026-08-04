---
id: note-ai-agents-and-mcp-prompts-10-reusable-patterns
title: "AI Agents and MCP Prompts — 10 Reusable Patterns"
slug: ai-agents-and-mcp-prompts-10-reusable-patterns
date_captured: 2026-07-04
category: agent-architecture
tags:
  - ai-agents
  - mcp
  - model-context-protocol
  - prompts
  - tool-use
  - multi-agent
  - agent-evaluation
  - memory
  - orchestration
  - guardrails
entities:
  - Model Context Protocol
  - MCP
  - Anthropic
  - LangGraph
source_type: drive-image
drive_id: 1HnbRMG2mH3fMreV-W8zHKAx5aRziZc95
drive_name: "Screenshot 2026-07-04 at 2.18.56 AM.png"
drive_link: https://drive.google.com/file/d/1HnbRMG2mH3fMreV-W8zHKAx5aRziZc95/view
image_path: public/img/notes/2026-07/ai-agents-and-mcp-prompts-10-reusable-patterns.png
---

# AI Agents and MCP Prompts — 10 Reusable Patterns

![Infographic](public/img/notes/2026-07/ai-agents-and-mcp-prompts-10-reusable-patterns.png)

## Summary
A ten-prompt agent architecture library covering agent-versus-workflow decisions, MCP server surfaces, tool design, orchestrator-subagent systems, eval harnesses, memory, error recovery, and guardrails.

## Key points
- Agent-versus-workflow prompt scores predictability, dynamic tool selection, and the cost of wrong actions before choosing a pattern
- MCP prompt separates tools, resources, and prompts with JSON Schemas, read/write labels, errors, and confirmation requirements
- Evaluation and recovery prompts track tool calls, tokens, runtime, failure rates, persistent state, retry policy, and hard stops

## Why I saved this
Directly relevant to Yaz's agent architecture work: it turns abstract agent design into explicit tool contracts, evaluation cases, approval gates, and recovery policies.

## OCR text

```text
M AI Agents & MCP

Prompts

Prompt 1

Decide agent vs workflow for [TASK]. Score it
on step predictability, need for dynamic tool
selection, and cost of a wrong action. Return:
recommended pattern (single prompt /
prompt-chain / router / orchestrator-workers
/ autonomous agent), one-line reason, the
simplest version that ships, and the failure
mode that would force the next tier up.

Prompt 3

Write the MCP server surface for [DOMAIN].
Split capabilities into tools (actions the model
calls), resources (read-only context the client
loads), and prompts (reusable templates). Give
each tool a JSON Schema, a clear description,
and a structured error shape. State which are
read vs write, and which need user
confirmation before executing.

Prompt 5

Build an eval harness for my agent on [TASK].
Give me 8-10 test cases spanning happy path,
ambiguous input, and tool failure. For each:
input, expected tool-call sequence, and a pass
rule. Track total tool calls, tokens, runtime,
and tool-error rate. Output a table plus the
single metric that best signals regressions.

4/12

3/10 Al Agents

Prompt 2

Design the tool set for an agent doing
[WORKFLOW]. List 3-6 high-impact tools
only (not one per API endpoint). For each:
name, one-sentence description, JSON
Schema inputs, and what the response returns.
Make responses token-efficient -- return IDs
and summaries, not full dumps -- and flag any
tool whose output could blow the context
window.

Prompt 4

Design an orchestrator-subagent system for
[GOAL]. Define the lead agent's job (plan,
delegate, synthesize), 2-4 specialized
subagents with a one-line scope each, what
context each receives, and how results merge.
Note which subagents run in parallel vs
sequentially, and the token/latency budget per
subagent.

Prompt 6

Add error recovery and memory to an agent
doing [WORKFLOW]. Specify: which tool
errors are retryable (with backoff) vs fatal, how
the agent reports being stuck instead of
looping, what state persists across steps vs gets
summarized, and a hard stop after N failed
actions. Return the recovery policy as a short
decision table.

Q
```

## Source
- **Drive file:** [ Screenshot 2026-07-04 at 2.18.56 AM.png ](https://drive.google.com/file/d/1HnbRMG2mH3fMreV-W8zHKAx5aRziZc95/view)
- **Captured:** 2026-07-04
- **Tags:** #ai-agents #mcp #model-context-protocol #prompts #tool-use #multi-agent #agent-evaluation #memory #orchestration #guardrails
