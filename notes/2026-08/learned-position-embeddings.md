---
id: note-learned-position-embeddings
title: "Learned Position Embeddings"
slug: learned-position-embeddings
date_captured: 2026-08-03
category: transformers
tags:
  - learned-position-embeddings
  - positional-encoding
  - transformers
  - llm
  - token-embeddings
  - sequence-length
entities:
  - Transformer
source_type: drive-image
drive_id: 1m_YEX5YtFqKK1iSWJueQ7aaGFvNtV8wE
drive_name: "Screenshot 2026-08-03 at 5.11.40 PM.png"
drive_link: https://drive.google.com/file/d/1m_YEX5YtFqKK1iSWJueQ7aaGFvNtV8wE/view
image_path: public/img/notes/2026-08/learned-position-embeddings.png
---

# Learned Position Embeddings

![Infographic](/img/notes/2026-08/learned-position-embeddings.png)

## Summary
Learned position embeddings use a trainable lookup table with one vector per position, offering flexibility but limiting generalization beyond the maximum sequence length seen in training.

## Key points
- The table has one row per position and one column per embedding dimension
- Each position vector is added or combined with token representations
- The method is easy to implement and learn
- A fixed maximum sequence length means extrapolation beyond training positions is weak

## Why I saved this
A simple baseline for contrasting learned absolute positions with RoPE and ALiBi.

## OCR text

```text
LLM-Series L EARNE D techwith.ram

A learnable table with one vector per position, just like a token embedding table.
Easy and flexible. Cannot generalize beyond the maximum
sequence length seen during training.

ew (
-@- ? THE TABLE EXAMPLE —|
Y: WHAT IS IT?
d_model columns max_seq_len = 6, d_model = 4
@ A trainable lookup table with ————— |
one vector per position. pos 0 Position | DimO | Dim1| Dim2 | Dim3
ch row
1 beet 4 |
Same idea as token embeddings, re® 2 = position pos | 0.12 | -0.47| 0.83 | 0.26
but for positions. max, seq_len pos < vector, pos1 | -0.51| 0.22 | 0.14 | 0.77 |
rows pos 3 learned
2 | 0.34 | 0.91 | -0.28 | 0.05
Learns the best representation pos 4 Fe = $j
for each position during training. 3 pos3 | -0.76 | O.11 | 0.62 | -0.33
pos4 | 0.28 | -0.64| 0.39 | 0.48

Simple to implement and pos (max_seq_len-1) | rl
computationally efficient. pos | 0.09 | 0.56 | -0.71 | 0.20

params = max_seq_len x d_model Each row is a learned vector
e.g. 2048 x 768 = 1.5M | representing that position.

JL } oh

Learned Positional Embeddings Sinusoidal Positional Encoding

© Learnable parameters (trained with the model) @ No parameters (fixed sine/cosine functions)

@ Adapts to data distribution @ Can extrapolate to longer sequences

@ Hard cap at max_seq_len seen during training @ Similar quality in most tasks
@ Cannot extrapolate to longer sequences @ Uses fixed mathematical patterns

Lookup in Learned Add to Token
Positional Table —_ Embeddings —
(N x d_model) (Element-wise)

Input to First

Transformer Layer

Learned positional embeddings let the model learn what each position means —
Every position gets its own vector.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.11.40 PM.png](https://drive.google.com/file/d/1m_YEX5YtFqKK1iSWJueQ7aaGFvNtV8wE/view)
- **Captured:** 2026-08-03
