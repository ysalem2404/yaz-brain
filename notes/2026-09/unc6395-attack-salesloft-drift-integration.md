---
{
  "id": "note-unc6395-attack-salesloft-drift-integration",
  "title": "UNC6395 Attack via Salesloft-Drift Integration",
  "slug": "unc6395-attack-salesloft-drift-integration",
  "date_captured": "2026-09-01",
  "category": "cybersecurity",
  "tags": [
    "cybersecurity",
    "unc6395",
    "salesloft",
    "drift",
    "oauth",
    "credentials",
    "salesforce",
    "google-workspace",
    "attack-chain"
  ],
  "entities": [
    "UNC6395",
    "Salesloft Drift",
    "Salesforce",
    "Google Workspace",
    "AWS",
    "Snowflake"
  ],
  "source_type": "drive-image",
  "drive_id": "10CFgvGMPJBh1SNvaimzi65QvLJL71wlT",
  "drive_name": "IMG_0082.HEIC",
  "drive_link": "https://drive.google.com/file/d/10CFgvGMPJBh1SNvaimzi65QvLJL71wlT/view?usp=drivesdk",
  "note_path": "notes/2026-09/unc6395-attack-salesloft-drift-integration.md",
  "image_path": "public/img/notes/2026-09/unc6395-attack-salesloft-drift-integration.png",
  "phash": "ed2d559a712a70b8",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-01T12:10:00Z",
  "summary": "A timeline maps UNC6395 abuse of Salesloft Drift OAuth tokens and API keys through Salesforce and Google Workspace into data access and credential-pivot attempts."
}
---

# UNC6395 Attack via Salesloft-Drift Integration

## Summary
A timeline maps UNC6395 abuse of Salesloft Drift OAuth tokens and API keys through Salesforce and Google Workspace into data access and credential-pivot attempts.

## Key points
- Initial access abused Salesloft Drift integrations via compromised OAuth tokens/API keys.
- The actor queried exposed Salesforce instances and exported data.
- OAuth tokens enabled access to Google Workspace accounts, followed by searches for AWS keys, passwords, and Snowflake tokens; access was revoked as containment.

## Source capture
- **Drive file:** [IMG_0082.HEIC](https://drive.google.com/file/d/10CFgvGMPJBh1SNvaimzi65QvLJL71wlT/view?usp=drivesdk)
- **Captured:** 2026-09-01

## OCR transcription (best effort)
UNC6395 Attack via Salesloft-Drift
Integration

Key Players
fs UNC6395: threat » _ Salesloft Drift: platform
ae actor group behind DRIFT integrated with Salesforce, Salesforce: Gmail: secondary
the campaign frome Seren entry point for connected primary target target environment
platforms environment

Initial Access

Execution & Exfiltration Credential Access
(T1199 &T1078) (T1059, T1867.002) (T1114, T1552, T1530)

UNC6395 abused Salesloft Actor connecledilg
exposed Salesforce
Drift integrations via

Using OAuth tokens for Drift,
actor accessed Google
Workspaces accounts with
Drift integrations

Actor searched for
credentials to pivot into AWS
access keys/ passwords/
Snowflake tokens

instances to query &
compromised OAuth export large amounts of
tokens / API keys

data

Salesloft & Salesforce
revoked Drift active access,
refresh tokens & removed
Drift from Salesforce
AppExchange

Google identified users,
revoked tokens, disabled
Drift-Workspace integration
