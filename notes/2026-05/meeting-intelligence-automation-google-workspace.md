---
id: note-meeting-intelligence-automation-google-workspace
title: "Meeting Intelligence Automation: Transcript to Actionable Insights (Google Workspace)"
slug: meeting-intelligence-automation-google-workspace
date_captured: 2026-05-08
category: agents
tags: [meeting-automation, google-workspace, gemini-api, apps-script, workflow-automation, no-code, structured-extraction]
source_type: drive-image
drive_id: 1a2Qyxg1DUYyRe7KlB_wJEapxjW4C1r3i
drive_name: "Screenshot 2026-05-08 at 9.00.27 PM.png"
drive_link: https://drive.google.com/file/d/1a2Qyxg1DUYyRe7KlB_wJEapxjW4C1r3i/view
image_path: public/img/notes/2026-05/meeting-intelligence-automation-google-workspace.png
---

# Meeting Intelligence Automation: Transcript to Actionable Insights (Google Workspace)

![Infographic](public/img/notes/2026-05/meeting-intelligence-automation-google-workspace.png)

## Summary
An end-to-end, fully automated pipeline turning meeting transcripts (from Meet/Zoom/Teams) into structured, distributed insights using only Google Workspace tools. Flow: transcript auto-saved to a Drive folder → Apps Script time-trigger checks every 15 minutes → Gemini API extracts structured JSON (decisions with rationale/alternatives, action items with owner/due-date/priority, dependencies, risks, open questions, next steps, stakeholder alignment/conflicts) → Apps Script parses and routes data to (6A) a live Google Sheet meeting tracker and (6B) an auto-generated 'minutes of meeting' email sent to stakeholders before the next meeting. Marketed as 'no manual work,' fully scheduled, keeping everyone aligned and accountable.

## Key points
- Zero external tools — entire pipeline runs on Drive + Apps Script + Gemini API + Sheets + Gmail
- Gemini extraction schema is unusually rich: decisions include 'alternatives considered,' not just the decision
- Risks/concerns and 'stakeholder alignment' (conflicts, misalignment) are extracted as first-class fields, not free text
- Auto-MOM email is sent proactively before the next meeting, not just archived
- 15-minute polling trigger keeps the Sheet as a continuously updated 'single source of truth'

## Entities & tools mentioned
Google Meet, Zoom, Microsoft Teams, Google Drive, Google Apps Script, Gemini API, Google Sheets, Gmail

## Why I saved this
A reusable low-code blueprint for a Bechtel meeting-intelligence pilot inside the Microsoft/Google hybrid tooling landscape — shows what a lightweight Copilot-equivalent workflow looks like using Gemini instead.

## Source
- **Drive file:** [Screenshot 2026-05-08 at 9.00.27 PM.png](https://drive.google.com/file/d/1a2Qyxg1DUYyRe7KlB_wJEapxjW4C1r3i/view)
- **Captured:** 2026-05-08
- **Tags:** #meeting-automation #google-workspace #gemini-api #apps-script #workflow-automation #no-code #structured-extraction
