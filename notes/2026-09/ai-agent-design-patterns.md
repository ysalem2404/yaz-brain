---
{
  "id": "note-ai-agent-design-patterns",
  "title": "AI Agent Design Patterns",
  "slug": "ai-agent-design-patterns",
  "date_captured": "2026-09-19",
  "category": "ai-agents",
  "tags": [
    "ai-agents",
    "agent-architecture",
    "single-shot",
    "react",
    "planner-executor",
    "reflexion",
    "verification",
    "guardrails",
    "observability",
    "tool-use"
  ],
  "entities": [
    "LLM",
    "ReAct",
    "GenAI.Works"
  ],
  "source_type": "drive-image",
  "drive_id": "1ilqtsUgxJYc0sjsC7fTDmrG8lTCheHJI",
  "drive_name": "Screenshot 2026-09-19 at 10.27.08 AM.png",
  "drive_link": "https://drive.google.com/file/d/1ilqtsUgxJYc0sjsC7fTDmrG8lTCheHJI/view?usp=drivesdk",
  "note_path": "notes/2026-09/ai-agent-design-patterns.md",
  "image_path": "public/img/notes/2026-09/ai-agent-design-patterns.png",
  "phash": "d06e3b6e6e1a521a",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-20T12:10:00Z",
  "summary": "A comparison of five agent design patterns—single-shot, iterative ReAct, planner-executor, reflexive, and verifier-gated—showing how extra loops, planning, critique, and independent checks trade off against latency, cost, and reliability."
}
---

# AI Agent Design Patterns

![Infographic](/img/notes/2026-09/ai-agent-design-patterns.png)

## Summary
A comparison of five agent design patterns—single-shot, iterative ReAct, planner-executor, reflexive, and verifier-gated—showing how extra loops, planning, critique, and independent checks trade off against latency, cost, and reliability.

## Key points
- Single-shot agents are low-latency and low-cost for classification, extraction, summarization, and other deterministic tasks; they are not suited to complex multi-step work.
- Iterative ReAct agents reason, act, observe, and repeat; planner-executor agents separate long-term planning from sub-task execution and can run independent steps in parallel.
- Reflexive agents critique and refine their own output, while verifier-gated agents add an independent rules, schema, policy, API, or deterministic-calculation check before action or response.
- The production architecture combines planning, tools and agents, memory/state, reflexion, verification, guardrails, and observability; the slide recommends choosing the simplest pattern that solves the problem.

## Why I saved this
The most directly reusable agent-architecture reference in the vault: five patterns with pros, cons, and fit, plus a production topology combining planning, tools, memory, reflexion, verification, guardrails, and observability. The verifier-gated pattern is the concrete answer for high-risk or regulated actions, and it lines up with the deterministic-tools-for-agentic-ai concept note.

## Source capture
- **Drive file:** [Screenshot 2026-09-19 at 10.27.08 AM.png](https://drive.google.com/file/d/1ilqtsUgxJYc0sjsC7fTDmrG8lTCheHJI/view?usp=drivesdk)
- **Captured:** 2026-09-19

## OCR text

```text
With Al agents, complexity should earn its place.

Every extra loop comes with a cost:...more

Al Agent Design Patterns

1. Single-Shot Agent 2. Iterative ReAct Agent 3. Planner-Executor Agent 4. Reflexive Agent _5. Verifier-Gated Agent

One model invocation, no explicit Reason, act, observe and repeat Generate, crit Independent verification layer
agent loop. until the goal is achieved its own enforces rules and constraints.
User Goal User Goal User Request User Request
eB User Request ¢ a i t sno
il ics Decide Next Planner (LLM)
iad (Creates sractured plan ante eel Cont Agent GB teege
+ + Ox
rr eg sec AP ck trequed Self. Critique Verifier
‘ debe (ses ayo isu) Ondependent check) ||
(single invocation) Cate Action y iapwsarh } ryoam
(el) Seine
| Refine / Improve :
Observe Result Pass | Fall
. from emieonmert retort || fecutor2 |_| Exeter M | (meets all rules | (reject / retry /
Final Answer 1 Tecigent) || Collet) |" acgent No {| escalate)
La Goal 4 <> Excate Action
(continue loop) ~~ reached? by cts doe a! Ha or Return Rest
merge vate
ic 1 {% :
Final Output
Final Answer Final Answer ir

Dol usage or iteration is achieved. un sequentially

Best suited for

Example
Pros Pros
Qi ol © Caring y ate
iv) ¥ at iv) Rec wh te
iv} u a alle 6 cel vplex
© kasi w Cons
°° Mor lex arch Le e
@ Higher cost and a © setcitg ce rmolex setup and mantens
Putting It Together - Example Production Architecture Key Takeaways for Architects
These patterns can be combined to build robust agentic systems O «=
Reket Executors (Toots / Agents) °
Ss Mme , @ — Mls @ _,, Reflve |, Verir | Final @ vxr
alee (creates pla fork tater sie fee”) des ese) ppewer/ ction @ dAnncepe
| [t —— re rn
°

& GenAl.works
```
