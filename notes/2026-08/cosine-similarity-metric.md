---
{
  "id": "note-cosine-similarity-metric",
  "title": "Cosine Similarity Metric",
  "slug": "cosine-similarity-metric",
  "date_captured": "2026-08-03",
  "category": "embeddings",
  "tags": [
    "cosine-similarity",
    "embeddings",
    "vectors",
    "semantic-search",
    "nlp",
    "similarity-metrics"
  ],
  "source_type": "drive-image",
  "drive_id": "1ppQfIIWyndJxMCDSazl6dre9Y9-GUqTW",
  "drive_name": "Screenshot 2026-08-03 at 5.05.24 PM.png",
  "drive_link": "https://drive.google.com/file/d/1ppQfIIWyndJxMCDSazl6dre9Y9-GUqTW/view",
  "image_path": "public/img/notes/2026-08/cosine-similarity-metric.png",
  "entities": [
    "Cosine Similarity",
    "Vector Search",
    "Nearest Neighbor Retrieval"
  ]
}
---

# Cosine Similarity Metric

![Infographic](public/img/notes/2026-08/cosine-similarity-metric.png)

## Summary
Cosine similarity compares the angle between embedding vectors rather than their magnitude, making it a common metric for semantic search, clustering, analogies, and nearest-neighbor retrieval.

## Key points
- The metric is the dot product divided by the product of vector magnitudes: it measures direction, not length.
- A score of 1 means identical direction, 0 means orthogonal or unrelated, and -1 means opposite direction.

## Why I saved this
A worked geometric explanation of the metric behind many vector-search systems.

## OCR text

```text
LLM-Series

techi ram

> Cosine Similarity Metric :

Cosine Similarity measures the angle between two embedding vectors.
It ignores magnitude, so it only cares about direction.
Values range from -1 to 1, where 1 means identical direction

and O means unrelated.

VISUALIZING THE ANGLE

THE IDEA

Represent words as vectors
in high-dimensional space.

Compare the angle between
them, not their length.

If vectors point in similar
directions + high similarity.

If orthogonal — no similarity.

If opposite — negative similarity.

Perfect for semantic search |

u

angle, not magnitude

u-v
¥ cos(@) = ———.
lull [vil

6 eee ee
> u-v = dot product of u and v

\

' |}ul]_ = magnitude (length) of u
| [lvl] = magnitude (length) of v
i

and nearest neighbor retrieval! | L 0
wS.. 20. SS ee Se 4 Le
‘a INTERPRETATION J
cos 8 = 1.0 cos 6 = 0.0 cos 8 = -1.0
A A
| (ome | Lard
Pow
Same direction Orthogonal Opposite direction
(Identical meaning) (Unrelated) (Opposite meaning)
Example: king and king Example: king and table Example: hot and cold
a =
= =~
RANGE & MEANING QUICK EXAMPLE
uk Identical direction Exactly the same meaning Let: u-v = (1x1) + (1x0) + (0x1) = 1
(0, 1) Acute angle Similar meaning u = [1, 1, 0] llul| = V1? + 1? +0? = V2
(0) Right angle No relationship v = [1, 0, 1] livil = v1? + 0? + 1? = v2
(-1, 0) = sal : oe = cos 8 = cone = + = 0.5
-1 Opposite direction Opposite meaning > 6 = 60° (similar meaning)
eS =e
( WHY IT MATTERS IN NLP
Semantic Search OD _“usterina Analogy Tasks Efficient Retrieval
oo Finds words with aw Groups related Captures relationships gd Fast and scalable
similar meanings. words together. king - man + woman = queen. Bw using vector search.

Cosine Similarity focuses on direction, not length.

It's the backbone of semantic understanding in embedding spaces!
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.05.24 PM.png](https://drive.google.com/file/d/1ppQfIIWyndJxMCDSazl6dre9Y9-GUqTW/view)
- **Captured:** 2026-08-03
