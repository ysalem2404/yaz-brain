---
id: note-claude-code-agent-development-kit-lumay
title: "Claude Code: The Agent Development Kit (CLAUDE.md + Skills + Hooks + Subagents + Plugins)"
slug: claude-code-agent-development-kit-lumay
date_captured: 2026-07-17
category: tooling
tags:
  - claude-code
  - agent-development
  - mcp
  - subagents
  - hooks
  - skills
entities:
  - Claude Code
  - Anthropic
  - LuMay AI
  - MCP
---

# Claude Code: The Agent Development Kit (CLAUDE.md + Skills + Hooks + Subagents + Plugins)

## Summary

A LuMay AI infographic breaking Claude Code's agent development architecture into five layers: CLAUDE.md as the memory layer (source of truth for architecture guidelines, naming conventions, and repo maps), Skills as the on-demand knowledge layer, Hooks as the deterministic guardrail layer (PreToolUse/PostToolUse/SessionStart/Stop events), Subagents as the delegation layer with isolated context and no infinite-loop spawning, and Plugins as the npm-package-based distribution layer. Sidebars note MCP servers as external tool connectors and agent teams as parallel-execution collaborators.

## Key Points

- Layer 1 CLAUDE.md: global and project memory, the 'source of truth' for agent behavior
- Layer 2 Skills: modular, task-specific knowledge loaded on demand rather than always-on
- Layer 3 Hooks: deterministic (not AI-driven) guardrails triggered on tool-use and session events
- Layer 4 Subagents: delegation with isolated context; subagents cannot spawn further subagents
- Layer 5 Plugins: npm-based distribution for sharing agent capabilities across a team
- MCP servers and agent teams shown as adjacent infrastructure, not part of the five core layers

## Why Yaz Saved This

Directly useful for Yaz's own subagent/skill design work — this is effectively the architecture pattern underlying the Claude-based agent pipelines he builds and evaluates, including this yaz-brain ingestion pipeline itself.

![Claude Code: The Agent Development Kit (CLAUDE.md + Skills + Hooks + Subagents + Plugins)](/img/notes/2026-07/claude-code-agent-development-kit-lumay.png)
