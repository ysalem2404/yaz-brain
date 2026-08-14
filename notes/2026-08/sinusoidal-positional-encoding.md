---
id: note-sinusoidal-positional-encoding
title: "Sinusoidal Positional Encoding"
slug: sinusoidal-positional-encoding
date_captured: 2026-08-03
category: transformers
tags: [positional-encoding, transformers, sinusoidal, token-embeddings, sequence-modeling, attention]
source_type: drive-image
drive_id: 1yV9qZBz9hBpiA0SELjcsYXQJmJZkM8yT
drive_name: "Screenshot 2026-08-03 at 4.58.37 PM.png"
drive_link: https://drive.google.com/file/d/1yV9qZBz9hBpiA0SELjcsYXQJmJZkM8yT/view
image_path: public/img/notes/2026-08/sinusoidal-positional-encoding.png
entities: [Transformer, Positional Encoding]
---

# Sinusoidal Positional Encoding

![Infographic](public/img/notes/2026-08/sinusoidal-positional-encoding.png)

## Summary

A visual guide explains sinusoidal positional encoding as a fixed, parameter-free way to add token order to transformer inputs using sine and cosine waves at different frequencies.

## Key points

- Each position maps to a vector whose dimensions use sine or cosine at different frequencies
- Lower dimensions change quickly and higher dimensions change slowly, capturing both short- and long-range position patterns
- The encoding is added to token embeddings before the first transformer layer and does not add learned parameters
- The smooth periodic representation can generalize to sequence lengths longer than those seen during training

## Why I saved this

A foundational reference for understanding how transformers represent order without recurrence or learned position tables.

## OCR text

```text
LLM techwith.ram

eries

> SINUSOIDAL POSITIONAL ENCOD

A fixed (non-parameter) positional encoding that uses sine and cosine functions

al
xs

of different frequencies to represent the position of tokens in a sequence.
It lets the model generalize to sequence lengths longer than seen in training.

©) WHY SINUSOIDAL? WHERE IS IT ADDED? HOW IT WORKS (IDEA)
GQoeete ors - = eg __| | Each position is mapped to a vector where
Fe ae ac) Sree | | Input to First | each dimension is a sine or cosine wave

© Works for any sequence lengtl ech Positional |—> 1, ncformer with a unique frequency.

(generalizes to longer sequences). le ings | | Encoding fi

“ i iimensic ir

© Encodes both absolute position x | ieeretl cumensionstice isane:

and relative position. Eletantawite ladiittion ‘of’ vectors + Odd dimensions use cosine.
© Smooth and continuous (same dimension: d model) + Higher dimensions change slower

representations. (lower frequency).

ao FM ¥

1) FORMULA | 2) FREQUENCY VIEW

For a position pos and dimension i (0-indexed):

Lower dimensions change quickly (high frequency).
Higher dimensions change slowly (low frequency).

F pos Position Index (pos)
PE SC" | —Seaapre
(pos,2i) Cad) i = dimension index ° 5 fo. 5 20) 25, 30
(0, 1, 2, os disoaar-0 | | Om 0 (sin) AAAAAAAAAAAAAAA
FE oe hey NAARARARARAAAAAAAAY
pos,2i+1) 100002!/4modet dmodet = embedding Dim

dimension

Example (d model = 6)

Dim

1) NPPLLD PDD PLS
2 (sin) VBS O62 8 6 EN VES

oe 0 | Dimi | dim2 | dims Dim 5 ,
| feet Creed) aces) iF (coo) | (Gn) | fos) (cos) let ig). CS a eS
| 0 0.0000 | 1.0000 0.0000 1.0000 | 0.0000 | 1.0000
| 2000 I 0000 | cui Dim 4 (sin) ee a
1 0.8415 0.5403 0.0464 0.9989 | 0.0022 1.0000
2 0.9093 | 0.4161 | 0.0927 | 0.9957 | 0.0043 | 0.9999 | a —~
oy Different frequencies allow the model to capture both | Trp Cesigg) helen the model, extiapelete: positions |
short=Tange and \longsrange \pcsitiondli petierns: beyond the training sequence length. J
HOW IT IS USED
r > r =] ou >) 5 —
Token IDs Token Sinusoidal Input to First
| (a, 4823, 9, 13, —| Embeddings -@> Positional Encoding |? Transformer Layer
Lu J ——— Y ) X
(from embedding table) (same shape) (with position info)
| aatatatatatatatatatatatataatatatataatatatataaataiaiatatatantana THE FLOW }}----------—--=-------—------=---- ,
f \ :
1 ¢ + ) r 3 > . =
' Positions Compute Sin & Cos Sinusoidal PE Matrix Add to Token Input to First '
Lo 12) N=1) | > | for each dimension | > | (N x d modet) ] ? l Embeddings j ? \[itrantedtreerllayer
ea ae ey ( y = = L )

Sinusoidal positional encoding adds order without adding parameters.

Every position gets a unique pattern. Patterns help the model understand order.

g
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.58.37 PM.png](https://drive.google.com/file/d/1yV9qZBz9hBpiA0SELjcsYXQJmJZkM8yT/view)
- **Captured:** 2026-08-03
