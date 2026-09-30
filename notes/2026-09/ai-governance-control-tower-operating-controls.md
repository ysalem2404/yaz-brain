---
{
  "id": "note-ai-governance-control-tower-operating-controls",
  "title": "AI Governance Control Tower and Operating Controls",
  "slug": "ai-governance-control-tower-operating-controls",
  "date_captured": "2026-09-30",
  "category": "AI governance",
  "tags": [
    "ai-governance",
    "ai-inventory",
    "risk-classification",
    "model-cards",
    "fairness",
    "human-oversight",
    "kill-switch",
    "ai-security",
    "servicenow"
  ],
  "entities": [
    "ServiceNow AI Control Tower",
    "Hugging Face Hub",
    "EU AI Act",
    "NIST AI RMF",
    "Okta",
    "AWS Bedrock",
    "Google Cloud Platform"
  ],
  "source_type": "drive-image",
  "drive_id": "1040fj06a7AVPt9PEyr_FBIX1SKODv47A",
  "drive_name": "Screenshot 2026-09-27 at 10.47.24 PM.png",
  "drive_link": "https://drive.google.com/file/d/1040fj06a7AVPt9PEyr_FBIX1SKODv47A/view?usp=drivesdk",
  "note_path": "notes/2026-09/ai-governance-control-tower-operating-controls.md",
  "image_path": "public/img/notes/2026-09/ai-governance-control-tower-operating-controls.png",
  "phash": "837a7e7c7c6c2620",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-30T12:14:31Z",
  "summary": "A governance control-tower graphic connects asset discovery, risk tiers, model documentation, fairness checks, human review, runtime monitoring, and a rapid agent kill switch."
}
---

# AI Governance Control Tower and Operating Controls

![Infographic](/img/notes/2026-09/ai-governance-control-tower-operating-controls.png)

## Summary
A governance control-tower graphic connects asset discovery, risk tiers, model documentation, fairness checks, human review, runtime monitoring, and a rapid agent kill switch.

## Key points
- The asset inventory registers models, agents, MCP servers, datasets, owners, and lifecycle state; discovery connectors feed a shared registry and risk classification.
- Risk tiers map unacceptable systems to prohibition, high risk to controls and audits, limited risk to transparency, and minimal risk to monitoring.
- Model cards record purpose, training data and provenance, slice-level metrics, limitations, intended use, version, and owner; fairness gates compare group metrics and flag disparities.
- A human-review queue routes decisions by confidence and impact, while a kill-switch flow can revoke identity tokens, cloud-model keys, and tool/MCP access to contain a compromised agent.

## OCR transcription (best effort)

```text
CHEAT SHEET FOR Al GOVERNANCE

@ oc,
u )

Al governance is the set of controls that keep Al systems visible, accountable and safe to operate, from the moment a
® model is discovered to the moment it is switched off.

tk It answers four questions for every model and agent: what do we have, how risky is it, who is responsible, and how fast can
we stop it.

s ServiceNow Al Control Tower | |
> Alasset 4
| Hugaing Face -

‘Model hubs (HF)
(Saas copitots

1 and register every
model, agent and Mc {internat repos
server, with an owner and

lifecycle state models « agents « MCP servers « datasets

classification i
configuration items, lifecycle synced | MCP server

I systems become CSDM-aligned | agent

EU AI Act risk tiers

Unacceptable

Unacceptable > prohibited

Risk

ment

High-risk > controls + audit High
+ purpose J
fh * affected people ;
classification PB Gpeccelariey Limited transparency | ( Limited )
tier each Al system by its a
potential harm, and scale imal > monitor only
controls to the tier obligations scale with the tier
Hugging Face Hub model cards
Model Card ,
Training data } ‘Aascilvors README.md - model card metadata
J purpose regulators ch
(sane) brnliers license: apache-2.0
y povenenoe Developers
Model cards Intended use & metrics by slice integrating it metrics: [accuracy, fl]
document purpose, data, limits hnicwn inkcdions intended _use:
metrics and limi we Suersioa “Caner! Procurement & limitations & bi
others can judge fitness for ee tas risk review eval results by task
e update on every retrain ‘one card travels with every model version

Fairlearn- Credo Al
selection rate

a =

Test set Group A 0.62
Bias & fairness stood bY
testing group _) Group B
@ outcomes acrot
deployment, and gate on
the gap dashboards + policy checks

NIST AI RMF: ServiceNow intelligent
Approvals

‘agent proposes jee
!
1

(“high confidence) (_

Al decision + - =
Human confidence ( medium } [review queue)
oversight

human approves |_|
keep a person in the loop orrejects
forhigh-Impact or fow (_ tow righ impact) ( esectate
confidence decisions
reviewed decisions feed back as labels ‘Oversight sits inside Manage
| Al Control Tower kill
Runtime | switch ied, auditable
monitoring containment
7 in c
ES | | compromised
plane | agent (kta
ill swi |
& een aomaiy cial flagged (TE
contain a misbehaving policy br (AWS Bedrock)
agent in seconds, across meantime tocontain  \_AWS Bedrock
' ServiceNow

.

seconds ~30minbefore | agents
```

## Source capture
- **Drive file:** [Screenshot 2026-09-27 at 10.47.24 PM.png](https://drive.google.com/file/d/1040fj06a7AVPt9PEyr_FBIX1SKODv47A/view?usp=drivesdk)
- **Captured:** 2026-09-30
