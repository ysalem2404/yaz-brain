---
id: note-claude-agentic-ai-stack-skills-mcp-subagents-hooks
title: "Claude Agentic AI Stack: Skills, MCP, Subagents, Hooks, and Tools in One Architecture"
slug: claude-agentic-ai-stack-skills-mcp-subagents-hooks
date_captured: 2026-05-21
category: architecture
tags:
  - claude
  - agentic-ai
  - mcp
  - subagents
  - hooks
  - skills
  - plugins
entities:
  - Brij Kishore Pandey
  - Claude
  - MCP
  - Linux Foundation
---

# Claude Agentic AI Stack: Skills, MCP, Subagents, Hooks, and Tools in One Architecture

## Summary

A dense nine-panel architecture map by Brij Kishore Pandey unifying Claude's agentic building blocks: Skills as on-demand knowledge modules, a core Perceive-Reason-Act-Observe-Repeat agent loop wrapping an LLM-to-tools brain, MCP servers as the connection layer to external systems (GitHub, Notion, Slack, AWS, databases), the filesystem/CLAUDE.md always-on context layer, subagents as isolated delegated workers, hooks as deterministic pre/post-tool automation, a 'when to use what' decision table (Skills=training manual, MCP=USB-C port, Subagents=team members, Hooks=tripwires, Plugins=app package), and a worked real-world example of a competitor-analysis report triggering CLAUDE.md context, a skill, an MCP search, two subagents, and a hook-triggered formatter.

## Key Points

- Agent core loop: Perceive -> Reason (LLM plans next step) -> Act (tool call/code exec/API) -> Observe (evaluate results) -> Repeat
- MCP = ABILITY to connect to external world; ecosystem projected at 10,000+ servers under Linux Foundation governance by 2026
- Skills = WHAT to know (training manual analogy), MCP = HOW to connect (USB-C port analogy), Hooks = WHEN to automate (tripwire analogy)
- Subagents = delegation with isolated context, own model, own permissions — independent workers, not shared state
- Plugins bundle Skills + Hooks + Subagents + MCP into one installable unit, akin to an npm package for agent capabilities
- Worked example: CLAUDE.md loads project context -> competitive-analysis skill activates -> MCP searches Drive for past briefs -> subagents gather market/technical data -> hook auto-formats and lints output

## Why Yaz Saved This

A comprehensive single-diagram reference for Claude's full agentic stack that ties Skills, MCP, Subagents, and Hooks together with a concrete worked example — directly applicable to Yaz's own agent/skill design work and distinct enough from the LuMay CLAUDE.md kit (different visual structure, adds MCP ecosystem stats and a full worked example) to warrant its own note.

![Claude Agentic AI Stack: Skills, MCP, Subagents, Hooks, and Tools in One Architecture](/img/notes/2026-05/claude-agentic-ai-stack-skills-mcp-subagents-hooks.png)
