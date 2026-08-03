---
id: note-anatomy-of-an-agent-harness
title: "Anatomy of an Agent Harness — The Vendor Ships the Loop, You Shape the Environment"
slug: anatomy-of-an-agent-harness
date_captured: 2026-07-17
category: architecture
tags:
  - agent-harness
  - claude-code
  - mcp
  - skills
  - hooks
  - sandbox
entities:
  - Brij Kishore Pandey
  - Claude Code
  - Codex CLI
  - Gemini CLI
  - Cursor
  - Windsurf
  - Devin
---

# Anatomy of an Agent Harness — The Vendor Ships the Loop, You Shape the Environment

## Summary

A Brij Kishore Pandey infographic explaining agent harness architecture: a harness is a finished agent runtime you configure rather than rebuild. The core agent loop cycles through Context Manager, Planner/Model Call, Tool Executor, and Permission Gate, running on top of sub-agents (parallel workers), compaction (context pruning), sandbox (isolated execution), and session state (resumable runs). The engineering surface for extending a harness has five levers: Skills (reusable expertise loaded on demand), MCP Servers (standard tool/data connections), Hooks (intercept and automate loop events), Plugins (packaged extensions), and System Prompts (persistent instructions/memory files). It traces the evolution from chatbot to copilot to framework agent to harness to full agent environment, and catalogs the harness landscape by category: Terminal (Claude Code, Codex CLI, Gemini CLI), IDE (Cursor Agent, Windsurf, Cline), Autonomous (Devin, Jules, OpenHands), and Data layer (Oracle AI Database Select AI Agent).

## Key Points

- Core agent loop: Context Manager → Planner/Model Call → Tool Executor → Permission Gate, cycling continuously
- Five extension levers for a harness: Skills, MCP Servers, Hooks, Plugins, System Prompts
- Evolution ladder: Chatbot → Copilot → Framework Agent → Harness → Agent Environment
- Harness landscape categorized: Terminal tools, IDE tools, Autonomous agents, and Data-layer agents
- Key insight: 'the loop is now a product, not a project' — vendors ship the runtime, users configure the environment
- States 'your moat is the environment you build,' not the underlying model or loop code

## Why Yaz Saved This

Directly informs Yaz's own use of Claude Code and similar harnesses for building the yaz-brain pipeline and other agent tooling — a precise vocabulary for the harness/loop/extension-lever distinctions he's actively working with.

![Anatomy of an Agent Harness — The Vendor Ships the Loop, You Shape the Environment](/img/notes/2026-07/anatomy-of-an-agent-harness.png)
