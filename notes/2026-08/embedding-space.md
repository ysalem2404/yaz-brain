---
{
  "id": "note-embedding-space",
  "title": "Embedding Space",
  "slug": "embedding-space",
  "date_captured": "2026-08-03",
  "category": "embeddings",
  "tags": [
    "embeddings",
    "vectors",
    "embedding-space",
    "semantic-geometry",
    "analogies",
    "nlp",
    "representation-learning"
  ],
  "source_type": "drive-image",
  "drive_id": "1yR-hGazWg6rkwfCksdObEQEMy1N7QmCN",
  "drive_name": "Screenshot 2026-08-03 at 5.05.10 PM.png",
  "drive_link": "https://drive.google.com/file/d/1yR-hGazWg6rkwfCksdObEQEMy1N7QmCN/view",
  "image_path": "public/img/notes/2026-08/embedding-space.png",
  "entities": [
    "Word Embeddings",
    "King",
    "Queen",
    "Paris",
    "Rome"
  ]
}
---

# Embedding Space

![Infographic](public/img/notes/2026-08/embedding-space.png)

## Summary
Embedding space represents words or tokens as points in a high-dimensional geometry where semantic relationships appear as positions and directional offsets, enabling analogies and semantic search.

## Key points
- Words or tokens become points in a high-dimensional space learned during training.
- Directional offsets can encode relationships such as king to queen or Paris to Rome, supporting semantic search and analogies.

## Why I saved this
A useful mental model for understanding why vector arithmetic and semantic neighborhoods work.

## OCR text

```text
LLM-Series

techwith.ram
—$$—

> Embedding Space <

The high-dimensional vector space where embeddings live.

Meaningful relationships, such as gender or plural,
become consistent directional offsets that work across many word pairs.

WHAT IS IT?

Q Every word/token is
@ point (vector) in a
high-dimensional space.

Q Dimensions are learned
by the model.

Q Semantic meaning is
captured by position
and direction.

We can't visualize 768+

VISUALIZING IN 2D (FoR INTUITION)

king
e

queen

S__ gender

direction

dimensions, so we project
them down to 2D for
intuition.

EXAMPLES OF RELATIONSHIPS

teacher - man + woman ~ teacher (female)

i & These aren't perfect, but they hold surprisingly well
Hl across many word pairs.

¢ Paris - France + Italy ~ Rome rt
dieses are close in space. $
¢ walk + ing ~ walking lirections Raisers bi I
encode e elationships become i
* cat + plural ~ cats meaning consistent directions. 1
© Arithmetic on vectors ys

= © This generalizes to unseen

HOW IT WORKS
@ Words with similar meanings

captures those relationships.

+
} word pairs.
i}
}

(G)_ The model learns this space during training
\ by predicting context.

KEY PROPERTIES

(©) | Continuous

Small changes in position
mean small semantic changes.

CE Structured Captures complex relationships
(synonyms, analogies, roles).
Universal Patterns transfer across many

(to some extent) languages and tasks.

Typically 512, 768, 1024, ... dims

(we just can’t see them!)

High-Dimensional

and relationships

In embedding space, meanings become geometry,

Relations live as offsets between points.

WHY IT MATTERS

@Q Enables semantic search

Analogy Example
and retrieval.

king - man + woman = queen

If this works,
the model understands
the underlying concept

@ Improves generalization
and reasoning.

Q Foundation for everything
the model does.

wy

become directions.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.05.10 PM.png](https://drive.google.com/file/d/1yR-hGazWg6rkwfCksdObEQEMy1N7QmCN/view)
- **Captured:** 2026-08-03
