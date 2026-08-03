---
id: note-tokenization-artifacts-llm-failure-modes
title: "Tokenization Artifacts: Why LLMs Fail at Letter Counting, Spacing, and Arithmetic"
slug: tokenization-artifacts-llm-failure-modes
date_captured: 2026-07-25
category: concept-primer
tags:
  - tokenization
  - llm-internals
  - hallucinations
  - arithmetic
  - prompt-engineering
entities:

---

# Tokenization Artifacts: Why LLMs Fail at Letter Counting, Spacing, and Arithmetic

## Summary

A technical explainer on why LLMs fail at seemingly simple tasks like counting letters in 'strawberry', showing sensitivity to leading spaces, and struggling with arithmetic. The root cause is that models operate on tokens, not characters — token boundaries obscure individual letters, the same word can tokenize differently based on preceding space, and numbers don't have stable token boundaries across contexts.

## Key Points

- Letter counting fails because tokens like 'straw' and 'berry' don't expose individual letters to the model
- Leading-space sensitivity: 'hello' at line start vs after a space can be different token IDs with different likely continuations
- Arithmetic is unreliable because numbers can tokenize inconsistently (e.g., 380 as one token or split into 3/80)
- These are systemic consequences of tokenization, not bugs specific to one model
- Practical fix: change the task (e.g., use external tools for exact math) rather than expecting the model to self-correct

## Why Yaz Saved This

Useful technical grounding for setting realistic expectations with Bechtel engineering teams about LLM limitations in precise counting/arithmetic tasks, reinforcing why tool-calling (calculator/code execution) should be paired with LLMs for numeric work.

![Tokenization Artifacts: Why LLMs Fail at Letter Counting, Spacing, and Arithmetic](/img/notes/2026-07/tokenization-artifacts-llm-failure-modes.png)
