---
id: note-rope-rotary-position-embeddings
title: "RoPE Rotary Position Embeddings"
slug: rope-rotary-position-embeddings
date_captured: 2026-08-03
category: transformers
tags:
  - rope
  - rotary-position-embeddings
  - positional-encoding
  - transformers
  - llm
  - long-context
  - attention
entities:
  - RoPE
  - Transformer
source_type: drive-image
drive_id: 1-yLA-x9zKqtcRRTqAJ1mV19vB2Ohz1Ik
drive_name: "Screenshot 2026-08-03 at 5.11.55 PM.png"
drive_link: https://drive.google.com/file/d/1-yLA-x9zKqtcRRTqAJ1mV19vB2Ohz1Ik/view
image_path: public/img/notes/2026-08/rope-rotary-position-embeddings.png
---

# RoPE Rotary Position Embeddings

![Infographic](/img/notes/2026-08/rope-rotary-position-embeddings.png)

## Summary
RoPE encodes token position by rotating pairs of query and key dimensions, preserving relative-position information with no learned positional parameters.

## Key points
- Position is represented through rotations in a complex plane
- The rotation is applied to query and key vectors before attention
- RoPE encodes relative rather than only absolute position
- The design is parameter-free and supports better length generalization than fixed learned tables

## Why I saved this
A core positional-encoding pattern for reading modern transformer architectures and long-context extensions.

## OCR text

```text
LLM-Series

techwith.ram

RoPE (ROTARY POSITION EMBEDDIRG)

RoPE encodes position by rotating query and key vectors in a complex plane.

It preserves relative positions, generalizes to longer sequences,

and is parameter-free.

Q WHAT IS RoPE?

© Encodes position by rotating
pairs of dimensions.

HOW IT WORKS (IDEA) fo}

KEY PROPERTIES

¢ Parameter-free

4 Tnput Linear RoPE Attention © Encodes relative, not absolute
12} ya Query (Q) and |Embedsings "Projection "(rotate Q&K)”) (QK") position
Key (K) vectors. C y \ > & y
© Captures relative position ® has bi ay tee tuence fog
naturally. longer than seen in training
RoPE is applied to Q and K before the dot-product :
© No extra parameters. ¢ Used in LLaMA, GPT-NeoX,
attention. PaLM, Cl Mi
© Enables stsonayentrapst aLM, Claude, Mistral and more
to longer sequences.
THE ROTATION (2D VIEW) HOW THE ANGLE IS CHOSEN
RoPE rotates each pair of dimensions Each pair of dimensions (2i, 2i+1) uses a different frequency.
by an angle that depends on the position.
m ir i 2/8)
Retatioleauie 6 = Pair i | Frequency (1 / 10000")
weed mt = F99002 moat 0 7.000000
R, =| 5 oe 1 0.000100
J [ sin@ cos® m = position index

Each pair of dimensions is rotated
by angle @ that depends on the
position index.

2 0.000010

d,

mension pair index

= embedding dimension

model Higher i —> slower rotation

LY Lower i (lower dimensions) change faster, higher i change slower — capturing both short and long range patterns.

EXAMPLE (ONE DIM PAIR)

Let a vector pair (x;, Xz) at position m.

Original vector
rotate by Bp;

y,
Rl |=
oy (8

=sind] [x
cosd | | x,

sin®

APPLIED TO Q AND K

RoPE is applied independently to every pair of dimensions
in the Query and Key vectors.

Attention

(QK")

Query (Q)
Ro, °Q ~ Key (K) ~
Re, -K

The dot-product now depends on relative position (nm —m).

RoPE VS OTHER POSITIONAL ENCODINGS

Learned Positional Embeddings Sinusoidal Positional Encoding | RoPE (Rotary Position Embedding)
© Learnable parameters © No parameters Q No parameters
© Easy to implement © Can extrapolate to longer sequences © Encodes relative position
® Cannot extrapolate beyond © Fixed patterns (sin/cos) © Extrapolates well to longer sequences
max_seq_len @ Less adaptable Q Better performance in long context tasks
THE FLOW (RoPE)
Input Tokens Token Linear Projection Apply RoPE Compute Attention
— — > __Oatput
(positions 0...N-1) Embeddings to Q and K (rotate Q & K) (QK") ie
RoPE turns positions into rotations — simple, effective, and powerful.

2

It helps LLMs understand long contexts with excellent generalization.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.11.55 PM.png](https://drive.google.com/file/d/1-yLA-x9zKqtcRRTqAJ1mV19vB2Ohz1Ik/view)
- **Captured:** 2026-08-03
