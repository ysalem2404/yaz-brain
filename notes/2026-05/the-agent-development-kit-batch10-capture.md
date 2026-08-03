---
id: note-the-agent-development-kit-batch10-capture
title: "The Agent Development Kit: CLAUDE.md + Skills + Hooks + Subagents + Plugins (Repeat Capture)"
slug: the-agent-development-kit-batch10-capture
date_captured: 2026-05-17
category: tooling
tags:
  - claude-code
  - agent-development
  - mcp
  - subagents
  - hooks
  - skills
  - duplicate
entities:
  - Claude Code
  - Anthropic
  - LuMay AI
  - MCP
duplicate_of: claude-code-agent-development-kit-lumay
---

# The Agent Development Kit: CLAUDE.md + Skills + Hooks + Subagents + Plugins (Repeat Capture)

## Summary

This is a repeat capture of the LuMay AI 'Agent Development Kit' infographic already ingested as 'claude-code-agent-development-kit-lumay', showing the same five-layer breakdown: CLAUDE.md as the memory layer, Skills as the knowledge layer, Hooks as the guardrail layer, Subagents as the delegation layer, and Plugins as the distribution layer, flanked by MCP Servers and Agent Teams sidebars.

## Key Points

- Layer 1 CLAUDE.md: architecture rules, naming conventions, test expectations, repo map — always loaded, the agent's 'constitution'
- Layer 2 Skills: description-matching, auto-invoked, task-specific context loaded on demand, run in isolated subagent context
- Layer 3 Hooks: PreToolUse/PostToolUse/SessionStart/Stop/SubagentStop deterministic automation, not AI-driven
- Layer 4 Subagents: delegation-only, own context window, model, tools, and permissions per subagent; cannot spawn further subagents
- Layer 5 Plugins: bundles skills/agents/hooks/commands into a marketplace/team-installable package, like npm packages for agent capabilities

## Why Yaz Saved This

Duplicate of a previously ingested LuMay AI Claude Code architecture infographic (5th+ occurrence of this exact five-layer framework across the vault); flagged rather than given a full new entry.

![The Agent Development Kit: CLAUDE.md + Skills + Hooks + Subagents + Plugins (Repeat Capture)](/img/notes/2026-05/the-agent-development-kit-batch10-capture.png)
