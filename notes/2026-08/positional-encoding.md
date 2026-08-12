---
id: note-positional-encoding
title: "Positional Encoding"
slug: positional-encoding
date_captured: 2026-08-03
category: transformers
tags: [positional-encoding, transformers, llm, sinusoidal, rope, alibi, sequence-order, attention]
source_type: drive-image
drive_id: 1svKAtNGxXPw7i2wxj16Kh3gWmoFxlt6d
drive_name: "Screenshot 2026-08-03 at 4.58.25 PM.png"
drive_link: https://drive.google.com/file/d/1svKAtNGxXPw7i2wxj16Kh3gWmoFxlt6d/view
image_path: public/img/notes/2026-08/positional-encoding.png
entities: [Transformer, RoPE, ALiBi]
---

# Positional Encoding

![Infographic](public/img/notes/2026-08/positional-encoding.png)

## Summary
A positional-encoding overview explains why transformers need explicit order information and surveys fixed sinusoidal, learned, rotary, and relative-bias approaches.

## Key points
- Without position signals, a transformer can treat “cat sat” and “sat cat” as equivalent bags of tokens
- Position information is added or injected before the first transformer layer
- Sinusoidal encodings are fixed and add no learned parameters
- Common alternatives include learned embeddings, RoPE rotations, and ALiBi-style relative biases

## Why I saved this
A foundation card for connecting token order to attention-based model architecture.

## OCR text

```text
techwith.ram

> POSITIONAL ENCODING <@

Adds information about the position of tokens in a sequence.

Since transformers have no recurrence or convolution,
positional encoding helps the model understand the order of tokens.

Q) way Is IT NEEDED?

WHERE IS IT ADDED? TYPES OF POSITIONAL ENCODING

1. Sinusoidal (Fixed)

+ Used in the original Transformer.

© Transformers treat all tokens equally.

= . a

( a
Positional | Input to First

Token | hats
Embeddings | Encoding | “Transformer Layer

a \ y

@ Without position, “cat sat” and

“sat cat" look the same. + No extra parameters.

© Positional encoding injects order
information into the model.

© Enables the model to learn patterns

2. Learned (Trainable)

‘+ Model learns position embeddings
during training

Element-wise addition of vectors
(same dimension: d_model)

that depend on position.

1) SINUSOIDAL POSITIONAL ENCODING (FIXED)

Uses sine and cosine functions with different frequencies.

+ Works well for many tasks.

2) LEARNED POSITIONAL ENCODING (TRAINABLE)

The model learns a positional embedding vector

For a position pos and dimension i (0-indexed): for each position.

- a |
| PE is a lookup table of shape (max_len, d_model) )

F pos
PE (pos,2i) = Sin (acta)

are PE Table
Pe i = dimension index ; |

PE pe ais = 008 (eo Lee

(pos,2+1) 2i/dmodel Emotes = embedding ;
L wiley ) dimension Position i

index 2
Example (d_model = 6) is)

Position (pos) | Dim 0) | Din | Dim2 | Dim 3 | Dima | Dims S 5 7 | (0.21, -0.33, 0.14, ..., 0.72]

o 0.0000 | 1.0000 | 0.0000 | 1.0000 | 0.0000 | 1.0000 d_model

1 . 0.5403 | 0.0464 | 0.9989 | 0.0022 | 1.0000 male foe

2 0.9093 | -0.4161 | 0.0927 | 0.9957 | 0.0043 | 0.9999 :

Best for tasks where the model needs to
| adapt positions beyond what fixed functions
can represent.

Different frequencies help represent both
short-range and long-range positions.

HOW IT IS USED

-@>|
L

Token IDs Token

(1, 4823, 9, 13,.) | > |_ Embeddings
oe end)

if Input to )

Positional
<n | Transformer Layer

Encoding

(from embedding table) (same shape) (with position info)

(oon nn nnn o-oo n ea ---------------- { THE FLOW ---~-~- ,

a ie > Token Embeddings —> @- Positional! Encoding | —> { Add (Element-wise) | ay,

Input to First
Transformer Layer

Positional encoding gives the transformer a sense of order.

Meaning comes from words, Order comes from position.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.58.25 PM.png](https://drive.google.com/file/d/1svKAtNGxXPw7i2wxj16Kh3gWmoFxlt6d/view)
- **Captured:** 2026-08-03
