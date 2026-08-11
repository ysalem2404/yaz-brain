---
id: note-alibi-positional-bias
title: "ALiBi Positional Bias"
slug: alibi-positional-bias
date_captured: 2026-08-03
category: transformers
tags:
  - alibi
  - positional-encoding
  - transformers
  - llm
  - attention
  - long-context
  - extrapolation
entities:
  - ALiBi
  - LLaMA
source_type: drive-image
drive_id: 1C4d724kxUz9z6lY8UQhXDbRpW4pmvZyF
drive_name: "Screenshot 2026-08-03 at 5.12.25 PM.png"
drive_link: https://drive.google.com/file/d/1C4d724kxUz9z6lY8UQhXDbRpW4pmvZyF/view
image_path: public/img/notes/2026-08/alibi-positional-bias.png
---

# ALiBi Positional Bias

![Infographic](/img/notes/2026-08/alibi-positional-bias.png)

## Summary
ALiBi adds a distance-based linear bias to attention scores instead of positional embeddings, encouraging nearby attention while extrapolating to longer sequences.

## Key points
- The final attention score is QK transpose plus a bias based on relative distance
- Each attention head uses a fixed slope; farther tokens receive a larger negative bias
- The method is parameter-free and does not require learned positional embeddings
- ALiBi is presented as a simple long-context technique used in LLaMA-era models

## Why I saved this
A concise comparison point for understanding how positional information can be injected directly into attention scores.

## OCR text

```text
LLM techwith.ram

ALiBi
(Attention with Linear Biases)

ALiBi adds a linear bias to attention scores based on the distance between
query and key positions. It is parameter-free, simple, and generalizes

extremely well to longer sequences.

/a@a
@) WHAT Is ALiBi?
bd

© Adds a linear bias to attention
scores based on relative distance.

(2)

No positional embeddings
‘or extra parameters.

Encourages attention to focus
more on nearby tokens.

Enables strong extrapolation
to much longer sequences.

ALiBi BIAS MATRIX (EXAMPLE)

Bias added to the

HOW IT WORKS (IDEA)

QKT ALIBi Bias |, Softmax
| (Attention Scores) (Linear Bias = (Attention Weights)

)

Final Score = QK? + Bias

Bias depends only on the distance (j — i)
between query position i and key position j.

Key position (j) >

{3) KEY PROPERTIES

© Parameter-free
e Bias = —m, x (j - i)
(i = query pos, j = key pos)
© =m, is a (fixed) slope for each head
© Penalizes attention to distant tokens
linearly

© Generalizes to longer sequences

very well

© Used in LLaMA 2, 3 and many
modern LLMs

SLOPE (m,,) FOR EACH HEAD

Each attention head uses a different slope.

E 0 1 2 3 4 ‘ 2
atorit eects Typical slopes are set as: Head (h) | Slope (ms)
from position i ° 3m | 4m | ok ° 1.0000
(query) to j (key) Query | 1 -2m | -3m m, = 2” "nose 1 0.5000
= =m, x (j - i) ea ® Ce ee 2 0.2500

‘ xe 3 0.1250
"a 5 + hh = head index (0, 1, 2, ... Mreads ~ 1)
Los. Reads = total number of heads Higher h + smaller slope
LY Closer tokens > smaller penalty (near 0) (weaker penalty)
Farther tokens — larger negative bias
ALiBi VS OTHER POSITIONAL ENCODINGS
Learned Positional Embeddings Sinusoidal Positional Encoding ALiBi (Linear Bias)

Learnable parameters
Works within trained length
Poor extrapolation beyond

®0©O

max_seq_len

Token
Embeddings

Input Tokens
(positions 0...N-1) |

No parameters |
Can extrapolate to longer sequences

Fixed pattern (sin/cos)

®@OCO
©OOO

May degrade at very long lengths

THE FLOW (WITH ALiBi)

— > Compute QandK —>

‘Add ALiBi

(Linear Bias

Compute QkT |
(Attention Scores)

No parameters

Excellent extrapolation to very long lengths
Simple and lightweight

Better long-range behavior in practice

Softmax
Matrix) —> Output

(Attention Weights)

Y

ALiBi keeps it simple, adds a linear bias, and lets LLMs look far beyond
their training length — with better long-range understanding.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.12.25 PM.png](https://drive.google.com/file/d/1C4d724kxUz9z6lY8UQhXDbRpW4pmvZyF/view)
- **Captured:** 2026-08-03
