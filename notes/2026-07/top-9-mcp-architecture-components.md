---
id: note-top-9-mcp-architecture-components
title: "Top 9 MCP Architecture Components"
slug: top-9-mcp-architecture-components
date_captured: 2026-07-17
category: architecture
tags:
  - mcp
  - model-context-protocol
  - architecture
  - tools
  - security
entities:
  - Model Context Protocol
  - Greg Coquillo
---

# Top 9 MCP Architecture Components

## Summary

An infographic by Greg Coquillo breaking the Model Context Protocol (MCP) architecture into nine components: Client, MCP Host, MCP Protocol, Security & Auth, MCP Server, Prompts, Capabilities, Tools, and Resources. It provides a compact reference for how MCP structures the connection between an AI application and external tools/data sources, with security and authentication called out as a distinct architectural component rather than an implementation detail.

## Key Points

- Nine MCP components: Client, MCP Host, MCP Protocol, Security & Auth, MCP Server, Prompts, Capabilities, Tools, Resources
- Security & Auth treated as a first-class architectural component, not an afterthought
- Distinguishes Capabilities from Tools and Resources as separate architectural concepts
- Positions MCP Host as distinct from MCP Server in the client-server relationship
- Serves as a compact onboarding reference for engineers new to MCP

## Why Yaz Saved This

Direct reference for Yaz's MCP-based agent tooling work — a compact architecture map he can use when designing or evaluating MCP server integrations for enterprise agent deployments.

![Top 9 MCP Architecture Components](/img/notes/2026-07/top-9-mcp-architecture-components.png)
