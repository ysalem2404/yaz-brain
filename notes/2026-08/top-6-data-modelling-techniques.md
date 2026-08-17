---
id: note-top-6-data-modelling-techniques
title: "Top 6 Data Modelling Techniques"
slug: top-6-data-modelling-techniques
date_captured: 2026-08-16
category: data-engineering
tags: [data-modeling, dimensional-modeling, relational-modeling, graph-data, data-vault, schema-design, analytics]
source_type: drive-image
drive_id: 1SA1rL4nHUFqncoY8SW9XY0SZ66hR0j8Z
drive_name: "Screenshot 2026-08-15 at 9.21.59 PM.png"
drive_link: https://drive.google.com/file/d/1SA1rL4nHUFqncoY8SW9XY0SZ66hR0j8Z/view
image_path: public/img/notes/2026-08/top-6-data-modelling-techniques.png
entities: [Dimensional Modeling, Relational Modeling, Graph Data Modeling, Data Vault Modeling, Semantic Layer]
---

# Top 6 Data Modelling Techniques

![Infographic](public/img/notes/2026-08/top-6-data-modelling-techniques.png)

## Summary
A comparison guide surveys relational, dimensional, graph, data-vault, and semantic-layer modeling approaches, showing how each organizes entities, relationships, history, or analytical meaning.

## Key points
- Relational modeling emphasizes entities, attributes, relationships, keys, normalization, constraints, and transactional database design
- Dimensional modeling organizes facts and dimensions for fast reporting and analytics
- Graph modeling represents connected data as nodes and relationships, while data-vault modeling supports flexible schemas and historical enterprise data
- A semantic layer maps business meaning for reports and analytics, complementing the physical models underneath

## Why I saved this
A practical orientation map for choosing a data-modeling technique based on transaction design, analytics, connected data, history, or business semantics.

## OCR text

```text
Top 6 Data Modelling Techniques

Ashish Joshi

@ashish-joshi

tot |__ Dimensional Modetng

Maps entities, attributes, and relationships

See linked tables using keys,

| Organizes facts and dimensions for fast

for structured transactional system design.

constraints, and normalized relational design.

analytics and business reporting.

Best for: Transactional database design

Best for: Structured tabular systems

Best for: Reporting and analytics

=

=

ss-e

=

@—9

38a — 8

Data

Staging /

Select

Data Sources +

Sources

Business

Identity Define Columns}

Tables

Process

Business

Identity

Define

Requirements

& Data Types

Requirements + Entities

Attributes

Data Sources

Define Grain

Be) F)

Define

Normalize

B- 2 —B,

Tables

Primary

Relationships

Keys

Identity

Identity Facts

ER

Cardinality

Define

Dimensions

& Measures

Diagram

& Keys

Relationships

4)-@)—

ey

Constraints

Relational

ie

?

Foreign

& Indexes

Schema

—

Keys

Dimension Tables

Fact Table

ae — a eS]

Relational

Normalization Database

ol

Schema

Schema

SQL

Queries

Se

‘Semantic /

Reports &

Schema

Bi Layer

Analytics

___GraphDetaodeting (Nese essing!)

|__ataVaut Modeling

Represents connected data through nodes,

‘Supports flexible schemas for distributed,

Captures historical enterpri

data with

relationships, properti

and graph traversals.

unstructured, and fast-changing application dat

traceability, auditability, and scalable integration.

Best for: Unstructured or fast-changing

Best for: History, traceability, and audit

Best for: Highly connected data

<P he

a-—6é

~s--

Data Sources + Application Define Acces:

Data Sources +

Create Nodes

Requirement

Ss

Patterns

Source

Staging

Identity

Identity

Systems

Layer

Business Keys

Use Cases

Entities

& Labels

%

Chgose Data Mod:

Hubs

+ —-O-—

Constraints

Add

Define

%

& Indexes

Properties Relationships

Document

Key-Value_/ Wide-Column

Links

Satellites (Attributes

& Types

(Relationships)

+ History)

Properties apply across

g

the graph model.

Design Keys

Partitioning

Embed /

Boa

Strategy

Denormalize

Business Vault

Data

Raw Data Vault

Ni ER ad

@—~s—-B

Gud

}—_o—_ "8

G

jh

Traversal / Analytics &

Monitor &

NoSQL

Indexes

tis

Database Cypher Queries

Insights

Optimize

Database

Analytics / BL

Information Marts

J
```

## Source
- **Drive file:** [Screenshot 2026-08-15 at 9.21.59 PM.png](https://drive.google.com/file/d/1SA1rL4nHUFqncoY8SW9XY0SZ66hR0j8Z/view)
- **Captured:** 2026-08-16
