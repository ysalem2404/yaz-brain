---
id: note-tokenization-in-llms
title: "Tokenization in LLMs"
slug: tokenization-in-llms
date_captured: 2026-08-03
category: llm-fundamentals
tags: [tokenization, llm, tokens, subwords, nlp, vocabulary, transformers]
source_type: drive-image
drive_id: 1yawVnb9iIJ44ITAPyboM-IjO5LQi_u_N
drive_name: "Screenshot 2026-08-03 at 4.51.48 PM.png"
drive_link: https://drive.google.com/file/d/1yawVnb9iIJ44ITAPyboM-IjO5LQi_u_N/view
image_path: public/img/notes/2026-08/tokenization-in-llms.png
entities: [LLM, Tokenizer]
---

# Tokenization in LLMs

![Infographic](public/img/notes/2026-08/tokenization-in-llms.png)

## Summary
A tokenization primer explains how raw text is split into subword tokens and mapped to integer IDs before entering an LLM, balancing the limits of characters and whole words.

## Key points
- Tokenization is the first processing step in every LLM
- Subword tokens can represent common words, parts of rare words, and spaces
- Characters are too granular while whole words struggle with new or rare vocabulary
- Each model has its own tokenizer and typical vocabulary sizes range from about 30k to 200k tokens

## Why I saved this
A foundational visual for understanding how language becomes model-readable integers.

## OCR text

```text
fedualaiotam
~ Tokenization: :

Tokenization is the process of breaking: raw text Z)

into smaller pieces called tokens. |
These tokens are mapped to integer IDs using a

fixed ee It’s the first ate in every LLM.
patel ae 2

C Example 2

“unbelievable transformers”

rare word : space is part
anes F P

revs i? a of the token
Z un ) oy (transform ) (ers )

4302 12871 8932 7421

tokens vs characters vs words

(a) chars: too short, no semantics

words: too many, can’t handle new ones

(ae) tokens: middle ground — subwords <— ‘he P pol

compromise

“yy. every model has its own tokenizer; |
g vocab size is usually 30k-200k |

Text —>» integers the model can consume ) oO
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.51.48 PM.png](https://drive.google.com/file/d/1yawVnb9iIJ44ITAPyboM-IjO5LQi_u_N/view)
- **Captured:** 2026-08-03
