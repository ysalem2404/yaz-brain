---
id: note-ai-security-control-library-agent-tool-misuse
title: "AI Security Controls as a Control Library"
slug: ai-security-control-library-agent-tool-misuse
date_captured: 2026-10-10
category: security
tags: ["ai-security", "agent-security", "tool-use", "prompt-injection", "least-privilege", "monitoring", "red-teaming", "governance"]
entities: ["Aakash Yadav", "ISO/IEC 27002", "NIST CSF 2.0", "OWASP"]
source_type: drive-image
drive_id: 1yA5vgUk9oSTNa3cECpgiFNhyLmXWJBBF
drive_name: "Screenshot 2026-10-09 at 6.16.52 AM.png"
drive_link: https://drive.google.com/file/d/1yA5vgUk9oSTNa3cECpgiFNhyLmXWJBBF/view?usp=drivesdk
source_url: https://drive.google.com/file/d/1yA5vgUk9oSTNa3cECpgiFNhyLmXWJBBF/view?usp=drivesdk
image_path: public/img/notes/2026-10/ai-security-control-library-agent-tool-misuse.png
phash: aa363b3e3b384385
ocr: local_tesseract_fallback
ingested_at: 2026-10-10T12:12:00Z
---

# AI Security Controls as a Control Library

![AI Security Controls as a Control Library](/img/notes/2026-10/ai-security-control-library-agent-tool-misuse.png)

## Summary

A control-library infographic distinguishes preventive design, runtime enforcement, detective monitoring, assurance testing, and governance; it applies those categories to unauthorized agent-tool use.

## Key points

- The example control library includes architecture features, input filters, monitoring alerts, red-team tests, and policy.
- Controls play different roles: preventive mechanisms, runtime constraints, detective signals, assurance activities, and governance processes.
- For unauthorized tool use, the illustrated sequence is tool manifest, policy gateway, tool-call alerts, release test, and access review.
- Evidence includes deployed tool/IAM configuration, allow/deny decision logs, alerts and triage records, versioned test results, and approved policies or risk acceptances.
- The slide warns that policy alone does not enforce behavior and that categories left out of the control path create blind spots.

**Credit shown on image:** Aakash Yadav (@aayadav), as credited on the image.

## OCR text

s Policies, architecture features,
What exactly is an 32e5ngnns
meetings all get field under one
a word. They do five different jobs,
Ay Ss curit Cc ntr 172 Cp Ge CU Tai
e re) Oo a failure.
y a Aakash Yadav
) @aayadav
Five entries from one contro! library, each filed under the same label The concrete example for each column is labeled
PINJECTION CONTROL FINJECTION CONTROL.
Architecture feature [| input fitter YF | Monitoring alert a Red-team test BQ | Policy &
The agent that reads Screens each retrieved Fires when session traces Acne tin eter Agents must not act on
Lntrusted content hasno | document before the model | show suspected injected pacers instructions found in
tools that write or send reads it. instructions. ye sere cr untrusted content.
On the failure path these stop it or see it Around the path these check and direct
constraint re activity
‘Acts on every action. Runs per release or ona
The job it does
| Removes the failure path by Checks each action as it | Surfaces a failure, or an reas iainec tha othr Sets the rules, assigns
design, before anything happens, then allows, attempt, so that someone owners and accepts the
runs. blocks or escalates it. can respond. controls work as clelmed., residual risk.
The evidence it produces
Deployed configuration: Decision logs: every allow, Test results against a Approved policy, decision
tool manifest, IAM scopes, deny and escalation, with fractal ply tee threshold, with date, scope | _records and signed risk
lac. the rule that fired. io" 7 and version. acceptances.
What it cannot do alone
‘Stop misuse of access the Block a call its rules never Stop the action. it reports Protect between runs. It Enforce itself. A policy
agent legitimately holds. anticipated. during or after the event. samples one point in time. changes no behaviour.
Nearest terms in the standards
ISO/IEC 27002: preventive. _{ ISO/IEC 27002: preventive. ISO/IEC 27002: detective. Nist __-NISTSP.800-S3A:examine. | wict csF 2.0 and Al RMF:
NIST CSF 20: Protect. | OWASP: complete mediation. | CSF 20:betect. Interview, test. Al RMF: Govern. iSO/IEC 42001.
Assembled for one risk: An agent calls a tool it should not, or uses a permitted tool in a way nobody approved.
unauthorized tool use
Agent requests a tool call e+ result observed «¢—————e—®_ loops back over the path
@ Too! manifest || ® Policy gateway @® Toot-calt alerts ® Release test © Access review
Can this agent reach the too! | | Is this specific call allowed Did something get through, Do, 2and 3 still work as Who decided, who owns is,
atoll? || right now? or try to? claimed? what risk is accepted?
Each agent identity gets only | | Checks each call against an Each release, a test suite ‘named owner approves
thstoosand scopsetstoce” || siotstandargument.” | |Alertsfireon spikesindenied | | Stoweeunauthorized cals | new tool scopes. Beeptions
needs. Nothing eise is schema. Destructive calls ae eo chicane les through injection and expire. The manifest is
registered need a human. 9 Les privilege escalation. reviewed each quarter.
Accept if Accept if Accept if Accept if lacoark
No tool in production Every tool call passes A seeded unauthorized Every attempt Is blocked macl Secrateaen oanec
‘outside the approved through the gateway. No call raises an alert within and alerted, or the fad revteus ake
manifest. direct route. the agreed time. release stops. =
Platform engineering Security engineering ‘Security operations Al red team or QA Al risk owner
Leave a category out and a blind spot opens
Only 4 and 5 Jand 2 without 3 1,2, 3 without 4 Nos
Documented and tested on paper. A bypass or a misfire goes unseen They worked on the day they shipped. | Exceptions have no owner and no
Nothing on the path stops the call until the damage shows up. Nobody knows about today. expiry. Scope creeps quietly.
jot every risk needs one of each. Star -ompared with control language in -S3A, i i
what you have, then see which jobs are CSF 2.0 and Al RMF, ISO/IEC 27002 and 42001, and the library are mechanisms, and how
covered and which are only assumed. OWASP LLM and agentic Top 10: try it on your library; many are policies or review
where do categories overlap, and what is missing? activities?

## Source

- **Drive file:** [Screenshot 2026-10-09 at 6.16.52 AM.png](https://drive.google.com/file/d/1yA5vgUk9oSTNa3cECpgiFNhyLmXWJBBF/view?usp=drivesdk)
- **Captured:** 2026-10-10
