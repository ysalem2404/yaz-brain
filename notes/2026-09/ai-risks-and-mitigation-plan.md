---
{
  "id": "note-ai-risks-and-mitigation-plan",
  "title": "AI Risks and Mitigation Plan",
  "slug": "ai-risks-and-mitigation-plan",
  "date_captured": "2026-09-28",
  "category": "AI security",
  "tags": [
    "ai-risk",
    "prompt-injection",
    "data-poisoning",
    "model-inversion",
    "membership-inference",
    "algorithmic-bias",
    "hallucinations",
    "data-leakage",
    "api-security",
    "supply-chain",
    "model-extraction"
  ],
  "entities": [
    "AI systems"
  ],
  "source_type": "drive-image",
  "drive_id": "1QeGLLPOtiO1kMo2Bz-gOI1KwvtMji80R",
  "drive_name": "Screenshot 2026-09-26 at 3.42.18 PM.png",
  "drive_link": "https://drive.google.com/file/d/1QeGLLPOtiO1kMo2Bz-gOI1KwvtMji80R/view?usp=drivesdk",
  "note_path": "notes/2026-09/ai-risks-and-mitigation-plan.md",
  "image_path": "public/img/notes/2026-09/ai-risks-and-mitigation-plan.png",
  "phash": "807e7f7e7e2809a0",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-09-28T12:13:00Z",
  "summary": "A lifecycle risk register covers threats to data, models, applications, users, and production operations, with a concrete mitigation plan for each class."
}
---

# AI Risks and Mitigation Plan

![Infographic](/img/notes/2026-09/ai-risks-and-mitigation-plan.png)

## TL;DR
A lifecycle risk register covers threats to data, models, applications, users, and production operations, with a concrete mitigation plan for each class.

## Key points
- The register includes prompt injection, data poisoning, model inversion, membership inference, adversarial attacks, algorithmic bias, hallucinations, and sensitive-data leakage.
- Operational risks include insecure plugins, API abuse, denial of service, supply-chain risks, model evasion, model extraction, unauthorized access, and insecure training pipelines.
- Mitigation patterns include input validation, prompt filtering, trusted data sources, provenance, differential privacy, human oversight, retrieval-augmented controls, rate limits, DDoS protection, SBOMs, access controls, and continuous monitoring.
- The scope explicitly spans people, data, models, APIs, users, applications, and day-to-day production, making it useful as a checklist for end-to-end AI operations.

## OCR transcription (best effort)

```text
data, models, APIs, users, and day-to-day production
PEOPLE y ) MODEL
RISKS & MITIGATION PLAN © )-.
Protecting Al systems, data, models and operations across the lifecycle a AW
DATA » APPLICATIONS
@© Prompt injection (2) Data Poisoning ©) Model inversion © Membership inference
Manipulation of Al Biased or malicious Reconstructing sensitive Identifying whether a
<> instructions to bypass. training data information from model record was in the
A controls. @ a _ QO outputs. £ training data
ia pce be lay glee eae tap: Checking ta
homctone on fee te peor atl: por ae rent
@ Mitigation Pian @ Mitigation Pian @ Mitigation Pian @ Mitigation Pian
+ Input validation, prompt filtering, + Validate and clean data, use + Differential privacy, limit * Privacy techniques (differential
‘= content moderation, system trusted sources, monitor for ‘sensitive data in training, privacy, k-anonymity), limit
prompt protection. ‘anomalies, data provenance. regular privacy testing. model outputs
Adversarial Attacks Algorithmic Bias © Hiattucinations © sensitive Data Leakage
1 Meteadog outcomes Unto or dscrininatory Generation of fale or Exposure of confidential
em smal rt noes results from blased data. (Gag EAD mislading tommeton =) itormaton
Example Sight mage change Example: Loan approvals based = Example: Wrong legal or a Example: Sharing customer
par saber mae fnancal facts Sealine
Mitigation Plan Mitigation Plan Mitigation Pian Mitigation Pian
© Meet taneg ip Cerner ed © Srecceching sounding with | Oro eeise cece
jing, robust models fain trics, human oversight bust lata, retrieval-sugment rols filterir
precectag ae me iene mab haan omit nt data access comrls, ouput fern
(9) Insecure Plugins © API Abuse (11) Denial-of-Service (12) Supply-Chain Risks
Uneafeox urwertiod Misuse of API leading Service unvalabity ue Vulnerable from third:
itegrations wah took tounmpectedcotsce — GMIBR. tohtgntraticer sds party componaria oe
7 eee uwponre x ene A, eessceres
Example: Malicious plugin Example: Excessive API calls. —— Example: Compromised
poset eee foray h moda pps
@ Mitigation Pian @ Mitigation Plan @ Mitigation Pian © Mitigation Pian
+ Use approved plugins only, + Strong authentication, rate + Traffic management, DDoS «+ Software bill of materials (SBOM),
secuthy rove, senha ining. usage mentoring protection ssacacalig (deat ScSeaa or
poe tral EON. faover pop abet
Model Evasion Model Extraction ©@ Unauthorised access (JD) insecure Training Pipelines
Bypassing safeguards Risk of intellectual Risk of data breaches or Model tampering or
to evade restrictions. property theft by copying misuse of Al systems. compromise during
=> > eancel a ay " training and deployment.
cpl: treing La =e
aheehd conn ramp Repeated aries poem Erample: Mais code in
mene rn cre ppeine
‘+Red-team testing, input/output += Query limits, output obfuscation, + Role-based access controls, + Secure C/CD, code signing,
(oe cakes pre esata antec MPA lest priviege aust logs icon edt chalet
@ Poor Monitoring (13) Data Drift (19) Shadow Al ® Unsafe Fine-Tuning
Lack of visit into Decreased model Unauthorised use of Realty and security
Jy | recieetontemasinty SN, accuracy overtime due Altona by enployers §G} sees rom poor aaty
A 9 to changing data. 4 A - > data during fine-tuning
a .
ont oe Siete ni eos Cha frente dita rangle: Based or tne
page es : Faron we
@ Mitigation Pian @ Mitigation Pian @ Mitigation Pian @ Mitigation Pian
Poser oe ge * Monitor data quality and it +A gverranee polica approved abate od test atazets,
rrentang drt AMM. observa regular model retrain, took awareness raring retwork Irene ea sechesen
performance validation controls peal sano
Over-Reliance on Al Model Misalignment ® Regulatory Non-Compliance @ Environmental Impact
Blind trust in Al outputs Model behaviour not Violating legal, regulatory High compute usage
without human oversight. aligned with business = or industry requirements leading to increased
values or compliance. =O (e.g. GPR, DPDP, SAMA). energy consumption.
fam Agen eae ben ten aoe rior Saving li
are outputs. without consent with high carbon footprint.
Mitigation Plan Mitigation Pian Mitigation Plan Mitigation Plan
Oo om © reerermergoss wiey —O tmcecmatcentncore, “tate ads ctince
accountability, user trainir hmark: yntinuous testin yi ae, es a ee
ae Pepeemenr some aze oe RMF, regular audits energy usage.
CROSS-CUTTING Al SECURITY CONTROLS (END-TO-END)
svemanct uk feats. Detail SectmaDomlipenst  Aecmmsoniel __enboring nig Atel eimig Compan Asus
Croley ATiest Modeling 8 Privy wcveo Ciently _Rlcident Response Gudversaah Thode aTrohing
```

## Source
- **Drive file:** [Screenshot 2026-09-26 at 3.42.18 PM.png](https://drive.google.com/file/d/1QeGLLPOtiO1kMo2Bz-gOI1KwvtMji80R/view?usp=drivesdk)
- **Captured:** 2026-09-28
