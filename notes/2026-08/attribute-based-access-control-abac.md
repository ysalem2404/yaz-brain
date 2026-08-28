---
{
  "id": "note-attribute-based-access-control-abac",
  "title": "Attribute-Based Access Control (ABAC)",
  "slug": "attribute-based-access-control-abac",
  "date_captured": "2026-08-28",
  "category": "authorization",
  "tags": [
    "authorization",
    "abac",
    "identity-attributes",
    "governed-tags",
    "policy",
    "row-level-security",
    "column-masking",
    "databricks",
    "unity-catalog"
  ],
  "entities": [
    "Databricks",
    "Unity Catalog"
  ],
  "source_type": "drive-image",
  "drive_id": "1Y94UtH1DzWyNiu36cOICNzBrkJtjr6lV",
  "drive_name": "IMG_0123.HEIC",
  "drive_link": "https://drive.google.com/file/d/1Y94UtH1DzWyNiu36cOICNzBrkJtjr6lV/view",
  "note_path": "notes/2026-08/attribute-based-access-control-abac.md",
  "image_path": "public/img/notes/2026-08/attribute-based-access-control-abac.png",
  "phash": "c0bf28d739237c61",
  "ocr": "local_tesseract_fallback",
  "ingested_at": "2026-08-28T12:09:00Z"
}
---

# Attribute-Based Access Control (ABAC)

![Infographic](/img/notes/2026-08/attribute-based-access-control-abac.png)

## Summary
An ABAC slide illustrates writing a policy once and letting governed tags, identity, or context attributes determine where it applies across catalogs, schemas, tables, and columns.

## Key points
- Policies define rules using attributes such as governed tags, identity attributes, and context attributes.
- Policies attach to a scope such as a catalog or schema and then apply automatically to every matching object in that scope.
- The example masks sensitive columns when a table has a PII tag, except in a permitted marketing context.
- The pattern emphasizes centralized policy logic with automatic propagation as metadata changes.

## Why I saved this
A concrete visual complement to RBAC: roles isolate active permissions, while attributes let one policy cover changing data scopes.

## OCR text

```text
i

———

|

\

f

a

|

i:

-

|

( 0 I »'

0)

/

|

yA\G

r

|

|

10h

wnere

tapopiles

et attributes aetermine

\Write the rule once. L

ci

SS

a

ea

$e

pind ond

SH

=

—

Policie:

— 2 aes

}e4

ak

-e ~ dy

ad

hs

Policie:

CODE

a-ha

—$—$—$—$—$ $$ ——_$_$_—$_—_—_

—_—_—

ve

sdelile

><

ed

ao

~— -. ——-~ j

—

we te

R :

ee ;
```

## Source
- **Drive file:** [IMG_0123.HEIC](https://drive.google.com/file/d/1Y94UtH1DzWyNiu36cOICNzBrkJtjr6lV/view)
- **Captured:** 2026-08-28
- **Tags:** #authorization #abac #identity-attributes #governed-tags #policy #row-level-security #column-masking #databricks #unity-catalog
