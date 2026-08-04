---
id: note-prompt-engineering-prompts-10-reusable-patterns
title: "Prompt Engineering Prompts — 10 Reusable Patterns"
slug: prompt-engineering-prompts-10-reusable-patterns
date_captured: 2026-07-04
category: prompt-engineering
tags:
  - prompt-engineering
  - prompts
  - prompt-chaining
  - multishot
  - evaluations
  - hallucinations
  - citations
  - xml
  - reasoning
entities:
  - Anthropic
  - LLM-as-judge
source_type: drive-image
drive_id: 1RlB-NJVdf2aU21m0ZbQ_51MELWw0XjUS
drive_name: "Screenshot 2026-07-04 at 2.19.13 AM.png"
drive_link: https://drive.google.com/file/d/1RlB-NJVdf2aU21m0ZbQ_51MELWw0XjUS/view
image_path: public/img/notes/2026-07/prompt-engineering-prompts-10-reusable-patterns.png
---

# Prompt Engineering Prompts — 10 Reusable Patterns

![Infographic](public/img/notes/2026-07/prompt-engineering-prompts-10-reusable-patterns.png)

## Summary
A ten-prompt prompt-engineering reference covering direct rewrites, multishot examples, prompt chaining, evaluations, hallucination hardening, ambiguity removal, and structured XML outputs.

## Key points
- Rewrite prompts make goal, audience, sequence, edge cases, and output constraints explicit
- Chaining and multishot patterns split complex work into focused steps and use diverse normal, edge, and tricky examples
- Evaluation and grounding prompts define measurable success, test cases, grading methods, source quotes, and an explicit 'I don't know' path

## Why I saved this
A concise prompt-quality checklist for making model behavior clearer, more testable, and less prone to unsupported claims.

## OCR text

```text
M Prompt Engineering

Prompts

Prompt 1

Rewrite [PROMPT] to be clear and direct, as if
briefing a new hire with no context. Spell out
the goal, audience, and exact steps in order,
and state what to do with edge cases. Return
the rewritten prompt only, then a short bullet
list of every ambiguity you removed so I can
confirm the intent is still mine.

Prompt 3

Add chain-of-thought to [PROMPT] for a task
needing real reasoning. Instruct the model to
work step by step inside <thinking> tags
before answering, then give the final answer
inside <answer> tags. Do not let it skip the
thinking. Return the upgraded prompt and
one line on why separating reasoning from
output improves accuracy here.

Prompt 5

Design an eval for prompt [PROMPT]. Define
success criteria that are measurable, then
produce 8-10 test cases as a table: input |
ideal_output | what_it_probes (edge case,
format, refusal, hallucination). Recommend
the grading method (exact match, code
assertion, or LLM-as-judge) per case and how
I would score a pass rate.

4/10 Prompt Eng

Prompt 2

Improve [TASK] using multishot prompting.
Generate 3 diverse, high-quality examples
wrapped in XML: put each inside <example>
with <input> and <ideal_output> tags,
covering one normal case, one edge case, and
one tricky case. Keep examples consistent in
format so Claude pattern-matches the
structure, not just the content.

Prompt 4
Turn [TASK] into a prompt-chaining pipeline
instead of one mega-prompt. Break it into 3-4
focused subtasks, each its own prompt, where
every step passes its result to the next inside
XML tags. For each link give: input, single
responsibility, output tag. Explain where a
self-check or verification step should sit in the
chain.

Prompt 6

Harden [PROMPT] against hallucination using
Anthropic's methods. Explicitly permit 'I don't
know' when evidence is missing, require every
factual claim to cite a supporting quote from
[SOURCE], and for long documents instruct
the model to extract relevant word-for-word
quotes FIRST, then answer only from those.
Return the revised prompt.

Q
```

## Source
- **Drive file:** [ Screenshot 2026-07-04 at 2.19.13 AM.png ](https://drive.google.com/file/d/1RlB-NJVdf2aU21m0ZbQ_51MELWw0XjUS/view)
- **Captured:** 2026-07-04
- **Tags:** #prompt-engineering #prompts #prompt-chaining #multishot #evaluations #hallucinations #citations #xml #reasoning
