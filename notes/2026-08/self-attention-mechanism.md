---
id: note-self-attention-mechanism
title: "Self-Attention Mechanism"
slug: self-attention-mechanism
date_captured: 2026-08-03
category: transformers
tags:
  - self-attention
  - transformers
  - llm
  - query-key-value
  - attention-weights
  - deep-learning
  - positional-encoding
entities:
  - Transformer
  - QKV
  - RNN
  - CNN
source_type: drive-image
drive_id: 1amZl4jdrjGcP5UYyOemw65SuPRKkinBC
drive_name: "Screenshot 2026-08-03 at 5.12.39 PM.png"
drive_link: https://drive.google.com/file/d/1amZl4jdrjGcP5UYyOemw65SuPRKkinBC/view
image_path: public/img/notes/2026-08/self-attention-mechanism.png
---

# Self-Attention Mechanism

![Infographic](/img/notes/2026-08/self-attention-mechanism.png)

## Summary
A visual explanation shows how self-attention lets every token compare its query with all keys, produce attention weights, and combine values into context-aware representations.

## Key points
- Each token creates a Query, Key, and Value representation
- Scaled dot-product scores are normalized row-wise with softmax
- The output is a weighted sum of value vectors, adapting to token content
- Unlike RNNs and CNNs, self-attention captures long-range dependencies in parallel

## Why I saved this
A foundational transformer concept that connects the QKV equations to the intuition behind contextual token representations.

## OCR text

```text
LLM-Series )

techwith.ram

SELF-ATTENTION MECHANISE?

Self-Attention lets each token focus on all other tokens in the same sequence

to build a context-aware representation.

It is the core idea behind Transformers.

{©3) KEY PROPERTIES

) WHAT IS SELF-ATTENTION? HOW IT WORKS (IDEA)
© Each token looks at all other tokens ae a c -) .
(including itself). Input ‘Compute Attention Weighted |
Embeddings | QakKV Scores Sum (Output), .
@ Computes how much attention to Se, P a
give to each token.
- , K = Key, V = Val
© Produces a weighted sum of all Vater ey ic é
values based on attention.
Each token creates a Query and compares it e

© No recurrence or convolution —

fully parallel.

THE MATH
Given input embeddings X € R”*4modet
(n = sequence length)

Input
=xWa | —— r
2 ; Wo, Wr, Wy © RémoderX4e ar
K = XWx ee | 1
[Vv=xw | — aa
Bing
4 QKT
Attention Scores: Scores =
van

Attention Weights: Weights = softmax(Scores) (row-wise)

Output: Z = Weights -V
EXAMPLE (3 TOKENS)
1, Input Tokens 2. Compute Q, K, V 3. Attention Scores
(QK" /Vai)
% om
a | [xa] {a [@ | [@2 | [@

K, | [ Ka | | Ks

(eg, “I” “love” “AI”)
Vi) Va | Vs

with all Keys to gather the most relevant Values.

Captures global dependencies
Fully parallel and efficient

Adaptive: attention weights depend
‘on content, not position

Core building block of Transformers

No extra parameters for positions

(uses positional encoding separately)

VISUAL VIEW

Attention Weights Output
(from each token to all tokens) (contextual

representations)

pias My

—| 4

Darker color = higher attention

SELF-ATTENTION VS OTHER MECHANISMS

RNNs CNNs
X Hard to capture long-range dependencies Limited by local receptive field
© Sequential (not parallel) © Need more layers for long context
Good for short sequences © Very efficient for local patterns

az
4. Attention Weights 5. Output (Weighted Sum)
(softmax row-wise)
XX, Xs
) 4 | Each output is a
% | 028 0.59 | 0.13 2 | weighted sum of
2
X2 | 0.15 | 0.29 | 0.56 Var Va» Va
ae ze based on weights.
x3 | 0.30 | 0.17 | 0.53
Self-Attention

@ Captures long-range dependencies directly
© Fully parallel and scalable
@ Adapts based on content (dynamic)

THE FLOW (SELF-ATTENTION)
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.12.39 PM.png](https://drive.google.com/file/d/1amZl4jdrjGcP5UYyOemw65SuPRKkinBC/view)
- **Captured:** 2026-08-03
