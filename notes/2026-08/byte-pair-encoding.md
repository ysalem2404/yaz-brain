---
id: note-byte-pair-encoding
title: "Byte Pair Encoding"
slug: byte-pair-encoding
date_captured: 2026-08-03
category: llm-fundamentals
tags: [bpe, byte-pair-encoding, tokenization, llm, vocabulary, subwords]
source_type: drive-image
drive_id: 1v_L8tp0jA9tl8idQf9RzpaQCBftdC4ib
drive_name: "Screenshot 2026-08-03 at 4.52.16 PM.png"
drive_link: https://drive.google.com/file/d/1v_L8tp0jA9tl8idQf9RzpaQCBftdC4ib/view
image_path: public/img/notes/2026-08/byte-pair-encoding.png
entities: [GPT, Llama, Claude]
---

# Byte Pair Encoding

![Infographic](public/img/notes/2026-08/byte-pair-encoding.png)

## Summary
A Byte Pair Encoding (BPE) infographic shows how a tokenizer repeatedly merges the most frequent adjacent byte or character pairs until it builds a bounded vocabulary of useful subword tokens.

## Key points
- BPE starts from characters or bytes and counts adjacent pairs
- The most frequent pair is merged into a new token and the process repeats
- Training stops when the vocabulary-size limit is reached
- BPE is widely used in modern LLM tokenizers, including GPT-, Llama-, and Claude-family systems

## Why I saved this
A procedural reference for the algorithm behind many practical subword tokenizers.

## OCR text

```text
(LLM-Series } = = techwith ram
(Byte Pair Encoding)

BPE is a tokenization algorithm that builds a vocabulary
by iteratively merging the most frequent pairs of bytes
(or characters). It’s simple, efficient, and widely used
in modern LLMs like GPT, Llama, Claude, and more.

[ HOW BPE WORKS (Example) }

Let’s tokenize the word: lowest
Most Frequent Pair Merge —> New Token

@ Start with ) bel i fe) Go F4 All pairs occur 1 time.

characters P l t
cate a (0, x - Gs ) (ow) => ow
@ Merge the most {fe s a
frequent pair cat ioe ow) (ow, J c ¥ é +t) (ow,e) > owe
1 1 1 1 1
© Megane | 5 ee
Pairs: (lowe) (owe,s) (6. Cd bs
Merge again
C4) 9505) (me) GJ (¢) (lowe,s) —> lowest
Pairs: (lowe, s) (s,t)
1
© Final merge (¢) (lowest,t) > lowestt
Pairs: (lowest, t)

1

te Final token: “lowestt” (would be a single token in the vocab) ey
In real models, we stop when vocab size limit is reached (e. 9+ 50k, 100k) '

= WHY BPE? nae) Ga WHERE IS IT USED?
© Handles any word (even unseen ones) GPT (tiktoken)
Q Reduces vocabulary size ,

ul SentencePiece — BPE,
© Balances between characters @ ee Sernaceivage )

and whole words = * Claude

(9 Fast and scalable ¢ Many other modern LLMs

2] &

BPE builds a smart vocabulary by learning what pieces of text

to keep together.
Better compression, better generalization! qx
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.52.16 PM.png](https://drive.google.com/file/d/1v_L8tp0jA9tl8idQf9RzpaQCBftdC4ib/view)
- **Captured:** 2026-08-03
