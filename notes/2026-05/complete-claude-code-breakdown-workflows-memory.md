---
id: note-complete-claude-code-breakdown-workflows-memory
title: "The Complete Claude Code Breakdown: Claude Code vs Claude AI vs Cowork, Workflows, and Memory Layer"
slug: complete-claude-code-breakdown-workflows-memory
date_captured: 2026-05-17
category: tooling
tags:
  - claude-code
  - agentic-workflows
  - hooks
  - skills
  - memory-systems
entities:
  - Claude Code
  - Claude AI
  - Claude Cowork
  - Anthropic
---

# The Complete Claude Code Breakdown: Claude Code vs Claude AI vs Cowork, Workflows, and Memory Layer

## Summary

A detailed reference distinguishing Claude Code (autonomous coding agent), Claude AI (chat interface for research/ideation with MCP tool access), and Claude Cowork (Claude Code's power plus a chat UI for productivity workflows), alongside the project file structure (.claude/ directory with settings, skills, commands, agents), three agentic workflow patterns (sequential, parallel with a meta-agent aggregator, and self-reflection with a verifier feedback loop), a sample SKILL.md hook configuration, and Claude Code's three-tier memory system (in-context memory, auto memory, CLAUDE.md).

## Key Points

- Claude Code vs Claude AI vs Cowork: autonomous full-app builder vs. research/ideation chat vs. combined agent+chat productivity workflows
- Project file structure: CLAUDE.md at root, .claude/ directory containing settings.json, skills/ (with SKILL.md per skill), commands/, agents/
- Three agentic workflow patterns: Sequential (agent-to-agent handoff), Parallel (meta-agent splits work across agents, aggregator combines results), Self-Reflection (meta-agent + verifier feedback loop for high-accuracy tasks like code review)
- Hooks example: PreToolUse hook matching 'Bash' commands triggers a security script (scripts/sec.sh) with a timeout
- Three-tier memory system: in-context memory (session-scoped) -> auto memory -> CLAUDE.md (persistent, always-loaded)

## Why Yaz Saved This

Another distinct, more workflow-and-memory-focused Claude Code reference (covers the Claude Code/AI/Cowork product distinction and concrete hook/workflow code samples) that complements rather than duplicates Yaz's other Claude Code architecture captures — useful for his own Claude-based tooling decisions.

![The Complete Claude Code Breakdown: Claude Code vs Claude AI vs Cowork, Workflows, and Memory Layer](/img/notes/2026-05/complete-claude-code-breakdown-workflows-memory.png)
