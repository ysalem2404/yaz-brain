---
id: note-model-context-protocol-complete-architecture
title: "Model Context Protocol: From Zero to Plumbing — The Complete Architecture"
slug: model-context-protocol-complete-architecture
date_captured: 2026-05-25
category: architecture
tags:
  - mcp
  - model-context-protocol
  - json-rpc
  - tool-integration
  - protocol
entities:
  - Brij Kishore Pandey
  - Anthropic
  - OpenAI
  - Google DeepMind
  - Cursor
  - Zed
  - Windsurf
  - Claude Code
  - Claude Desktop
---

# Model Context Protocol: From Zero to Plumbing — The Complete Architecture

## Summary

Brij Kishore Pandey's deep-dive explains Model Context Protocol (MCP) end to end: the NxM integration problem MCP solves by turning many-to-many connections into an N+M hub-and-spoke model; the adoption timeline (Anthropic open-sourced MCP Nov 2024, OpenAI adopted Mar 2025, Google DeepMind adopted Apr 2025, native support shipped in Cursor/Zed/Windsurf/Claude Code in 2025, de facto standard status by 2026); the Host-Client-Server architecture built on JSON-RPC 2.0; the three primitives (Tools, Resources, Prompts); transport mechanisms (stdio for local, Streamable HTTP for remote, replacing legacy SSE in 2025); the connection lifecycle; a real JSON-RPC message example; a full multi-server picture; and unstated operational costs (token tax, OAuth sprawl, tool sprawl, schema drift, observability gap). It closes with a comparison table of MCP vs Function Calling vs LangChain Tools on vendor lock-in, ops overhead, ecosystem growth, transport flexibility, and future-proofing.

## Key Points

- MCP solves the NxM integration problem: turns many-to-many model-to-tool connections into N+M via one protocol
- Adoption timeline: Anthropic open-sourced Nov 2024, OpenAI adopted Mar 2025, Google DeepMind Apr 2025, de facto standard by 2026
- Architecture: Host (AI app) contains Client (one per server) which talks to Server (exposes capabilities), built on JSON-RPC 2.0
- Three primitives: Tools (model-controlled, AI decides when to call), Resources (app-controlled context injection), Prompts (user-controlled, explicitly invoked)
- Transport: stdio for fast local subprocess use, Streamable HTTP for remote/cloud services (replaced legacy SSE in 2025)
- Hidden operational costs: token tax (every tool schema rides in every LLM call), OAuth sprawl, tool sprawl, schema drift, observability gap
- Comparison: MCP has low vendor lock-in and high future-proofing vs Function Calling (high lock-in) and LangChain Tools (medium, narrow ecosystem)

## Why Yaz Saved This

Comprehensive, technically deep MCP reference directly relevant to Yaz's enterprise AI architecture work on agent tool integration and vendor-neutral protocol adoption decisions.

![Model Context Protocol: From Zero to Plumbing — The Complete Architecture](/img/notes/2026-05/model-context-protocol-complete-architecture.png)
