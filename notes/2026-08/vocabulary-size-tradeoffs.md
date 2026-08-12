---
id: note-vocabulary-size-tradeoffs
title: "Vocabulary Size Tradeoffs"
slug: vocabulary-size-tradeoffs
date_captured: 2026-08-03
category: llm-fundamentals
tags: [vocabulary-size, tokenization, llm, sequence-length, efficiency, coverage, model-cost]
source_type: drive-image
drive_id: 1b2QZTK29s3Bds54CLN0oYbvE7KJN2hNF
drive_name: "Screenshot 2026-08-03 at 4.52.41 PM.png"
drive_link: https://drive.google.com/file/d/1b2QZTK29s3Bds54CLN0oYbvE7KJN2hNF/view
image_path: public/img/notes/2026-08/vocabulary-size-tradeoffs.png
entities: [LLM, Tokenizer]
---

# Vocabulary Size Tradeoffs

![Infographic](public/img/notes/2026-08/vocabulary-size-tradeoffs.png)

## Summary
A vocabulary-size infographic frames tokenizer design as a tradeoff: smaller vocabularies improve coverage and flexibility but create longer sequences, while larger vocabularies shorten text at the cost of memory and rare-token inefficiency.

## Key points
- Small vocabularies create more tokens per text and longer sequences
- Large vocabularies can reduce sequence length and improve efficiency
- Increasing vocabulary size also raises embedding and output-layer memory requirements
- A practical balance must consider coverage, efficiency, speed, cost, and semantic coherence

## Why I saved this
A decision aid for connecting tokenizer vocabulary choices to model cost and context length.

## OCR text

```text
LLM

Series

techwi

~ VOCABULARY SIZE °

=

‘ TRADEOFFS ~

Vocabulary size is the number of unique tokens in a tokenizer.
Choosing the right size is a balance between efficiency,

coverage, cost, and performance.

Smaller Vocabulary

(~10k) <

iS 2
e S

Larger Vocabulary

> (200k+)

ram

ig More tokens per text

(longer sequences)

Sequence Length

Fewer tokens per text
(shorter sequences)

5

Higher computational cost
(more tokens to process)

(?) Efficiency & Speed

Lower computational cost
(faster training & inference)

Better at rare words,
typos, and new words

@

Coverage

Better at common words
and whole-word semantics

May split words into many

Captures whole words /
pieces (less coherent)

phrases (more coherent)

7 Semantic Coherence

Larger context window

RA Context Window

Smaller context window

in terms of characters “N (Chars vs Tokens) in terms of characters
Smaller embedding matrix = Model Size Larger embedding matrix
(fewer parameters) (Embeddings) (more parameters) 3
poco coor co----- 5 (EXAMPLES (Typical Ranges) ¢---------~-~~--- x
10k - 20k 30k - 50k a 100k - 150k 200k+

* Character/Word level
* Great for rare words

© Balanced choice ¢ Fewer tokens
¢ Better semantics

* Faster & cheaper

Very few tokens
Best for efficiency
Huge embedding size
Diminishing returns

© Good coverage
* More tokens ° Efficient
© Slower & costlier 2 © Most common range * Large embedding size

: #—_’ __@

vw KEY TAKEAWAYS WHAT MATTERS MOST?

~\Yi/ @ No one-size-fits-all. * Model quality > just bigger vocab
@ It depends on the model, data, and use case.
@ Smaller vocabs —> more flexible, more tokens.

@ Larger vocabs —> more efficient, more semantic.
@ Most modern LLMs use 30k - 200k tokens. _)

| }

© Good tokenizer design > raw vocab size
© Balance: efficiency, coverage, and cost
© Pick what works best for your use case!

Sf

XL

The goal is not the biggest vocabulary,
but the right vocabulary for the job.
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.52.41 PM.png](https://drive.google.com/file/d/1b2QZTK29s3Bds54CLN0oYbvE7KJN2hNF/view)
- **Captured:** 2026-08-03
