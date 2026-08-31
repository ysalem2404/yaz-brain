---
{
  "id": "note-three-attribute-types-richer-conditions-fewer-policies",
  "title": "Three Attribute Types — Richer Conditions, Fewer Policies",
  "slug": "three-attribute-types-richer-conditions-fewer-policies",
  "date_captured": "2026-08-31",
  "category": "authorization",
  "tags": [
    "authorization",
    "attribute-based-access-control",
    "governance",
    "policies",
    "governed-tags",
    "identity-attributes",
    "context-attributes",
    "databricks",
    "unity-catalog",
    "least-privilege"
  ],
  "entities": [
    "Databricks",
    "Unity Catalog"
  ],
  "source_type": "drive-image",
  "drive_id": "1MHf_EeFB3Wm_CKbLSkgj_XmeBWysP7MQ",
  "drive_name": "IMG_0127.HEIC",
  "drive_link": "https://drive.google.com/file/d/1MHf_EeFB3Wm_CKbLSkgj_XmeBWysP7MQ/view",
  "note_path": "notes/2026-08/three-attribute-types-richer-conditions-fewer-policies.md",
  "image_path": "public/img/notes/2026-08/three-attribute-types-richer-conditions-fewer-policies.png",
  "phash": "906e6e916a3c3c79",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-31T12:09:00Z"
}
---

# Three Attribute Types — Richer Conditions, Fewer Policies

![Infographic](/img/notes/2026-08/three-attribute-types-richer-conditions-fewer-policies.png)

## Summary
A Databricks slide groups richer policy conditions into three attribute types—data, principal, and request—so one policy can express more context instead of multiplying separate rules.

## Key points
- Governed tags are set manually or through data classification and tag propagation, providing attributes on the data itself.
- Identity attributes come from the identity provider or a Databricks user administrator and describe the principal making the request.
- Context attributes are set by external callers and capture request-specific conditions such as purpose or environment.
- Combining these attributes in policy conditions is presented as a way to achieve richer conditions with fewer policies.

## Why I saved this
A compact mental model for how attribute-based controls can make authorization both more expressive and easier to manage.

## OCR text

```text
—

——————EEE

3 attribute types

Richer conditions, fewer policies

—

|

| K> ON THE DATA

Governed tags

|

Set by Manual - data classification - tag propagation

=

=

WHEN

(

5

pid

)

| ON THE PRINCIPAL

AND

Identity attributes

Set by IdP * user admin in Databricks

AND NOT.

pea =

ee

)

’

use

‘true’

ibute_value(

behalf

}

=

—— —

——-

on

k

ON THE REQUEST

Context attributes

Set hv eyternal eallare

DNatahrys abe
```

## Source
- **Drive file:** [IMG_0127.HEIC](https://drive.google.com/file/d/1MHf_EeFB3Wm_CKbLSkgj_XmeBWysP7MQ/view)
- **Captured:** 2026-08-31
- **Tags:** #authorization #attribute-based-access-control #governance #policies #governed-tags #identity-attributes #context-attributes #databricks #unity-catalog #least-privilege
