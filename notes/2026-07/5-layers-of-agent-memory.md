---
id: note-5-layers-of-agent-memory
title: "The 5 Layers of Agent Memory: Runtime Architecture and Biological Analogy"
slug: 5-layers-of-agent-memory
date_captured: 2026-07-17
category: architecture
tags:
  - agent-memory
  - runtime-architecture
  - episodic-memory
  - semantic-memory
  - procedural-memory
entities:

---

# The 5 Layers of Agent Memory: Runtime Architecture and Biological Analogy

## Summary

An AIForLeaders.com deep-dive into agent memory architecture with five layers: Working Memory (in-context, bounded, resets each session), Episodic Memory (append-only cross-session traces queried by similarity/time), Semantic Memory (typed entity store built by extraction), Procedural Memory (versioned skill registry indexed by task type), and Meta-Memory (offline control plane for archive/dedupe/deprecate/decay). Includes a runtime pipeline diagram and a biological analogy mapping each layer to a brain region (prefrontal cortex, hippocampus, temporal lobe, basal ganglia/cerebellum, anterior cingulate cortex).

## Key Points

- Working Memory holds current-turn context and resets at session end
- Episodic Memory is an append-only cross-session record retrieved at planning time
- Semantic Memory is a typed entity store that deduplicates and resolves contradictions
- Procedural Memory is a versioned skill registry that prevents repeated mistakes via reflection passes
- Meta-Memory is the offline control plane handling archive, dedupe, deprecate, and decay across all layers
- Biological analogy maps each memory layer to a specific brain region for intuition

## Why Yaz Saved This

A technically deep agent memory architecture reference useful when Bechtel's AI architecture team designs long-running enterprise agents that need cross-session memory with proper governance (retention/decay) built in from the start.

![The 5 Layers of Agent Memory: Runtime Architecture and Biological Analogy](/img/notes/2026-07/5-layers-of-agent-memory.png)
