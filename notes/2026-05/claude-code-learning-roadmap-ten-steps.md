---
id: note-claude-code-learning-roadmap-ten-steps
title: "Claude Code Learning Roadmap: 10-Step Guide to CLAUDE.md, Skills, Hooks, Subagents, and MCP"
slug: claude-code-learning-roadmap-ten-steps
date_captured: 2026-05-21
category: tooling
tags:
  - claude-code
  - agentic-coding
  - mcp
  - subagents
  - skills
  - hooks
  - learning-roadmap
entities:
  - Brij Kishore Pandey
  - Claude Code
  - Anthropic
  - MCP
---

# Claude Code Learning Roadmap: 10-Step Guide to CLAUDE.md, Skills, Hooks, Subagents, and MCP

## Summary

A 10-step hand-drawn learning roadmap for Claude Code by Brij Kishore Pandey, covering what Claude Code is (an agentic terminal tool vs. Copilot's autocomplete), the core primitives (CLAUDE.md, Skills, Hooks, Subagents, Plugins, MCP), installation/setup, the four-layer Claude Code stack (interface, reasoning, context, execution), agentic patterns (plan-and-execute, explore-then-edit, test-driven, parallel subagents, self-critique, tool-orchestrated), the SKILL.md standard, multi-agent workflow patterns, session evaluation metrics, and a curated list of learning resources. It is more comprehensive and pedagogically structured than prior single-diagram captures of similar Claude Code concepts.

## Key Points

- Claude Code = agentic tool that reads/writes/runs code in your terminal, built on Claude's reasoning; contrasted with Copilot (suggests code) vs Claude Code (ships features)
- Core primitives: CLAUDE.md (project memory), Skills (SKILL.md, on-demand), Hooks (PreToolUse/PostToolUse lifecycle automation), Subagents (isolated parallel roles), Plugins (bundled shareable packages), MCP (standardized external tool integration)
- Four-layer stack: Interface (CLI/VS Code/JetBrains/Slack) -> Reasoning (Opus/Sonnet/Haiku) -> Context (CLAUDE.md, skills, file indexing) -> Execution (bash, edit, fetch, MCP servers)
- Six agentic patterns: plan-and-execute, explore-then-edit, test-driven, parallel subagents, self-critique, tool-orchestrated
- Building workflow: define goal -> write CLAUDE.md -> explore codebase -> approve plan -> add skills -> add hooks -> run/verify/iterate -> commit with co-author tag
- Security & observability: permission prompts, sandboxed execution, audit trail, session transcripts, cost/token tracking per session
- Evaluation dimensions: quality (task success rate, PR merge rate, test pass rate) and efficiency (tokens per task, wall-clock time, cost per shipped feature)

## Why Yaz Saved This

A structured, step-by-step onboarding map for Claude Code that complements Yaz's existing collection of CLAUDE.md/agent-architecture captures (LuMay kit, Agentic AI Knowledge Graph) — useful as a practical checklist when standing up his own Claude Code-based subagent pipelines like the yaz-brain ingest tooling itself.

![Claude Code Learning Roadmap: 10-Step Guide to CLAUDE.md, Skills, Hooks, Subagents, and MCP](/img/notes/2026-05/claude-code-learning-roadmap-ten-steps.png)
