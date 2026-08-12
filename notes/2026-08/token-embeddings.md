---
id: note-token-embeddings
title: "Token Embeddings"
slug: token-embeddings
date_captured: 2026-08-03
category: transformers
tags: [token-embeddings, embeddings, tokenization, transformers, llm, positional-encoding, input-representation]
source_type: drive-image
drive_id: 19qGRERUVZyliDZUeAoQB6McKvU9qd2P1
drive_name: "Screenshot 2026-08-03 at 4.58.12 PM.png"
drive_link: https://drive.google.com/file/d/19qGRERUVZyliDZUeAoQB6McKvU9qd2P1/view
image_path: public/img/notes/2026-08/token-embeddings.png
entities: [Transformer, Tokenizer]
---

# Token Embeddings

![Infographic](public/img/notes/2026-08/token-embeddings.png)

## Summary
A token-embedding diagram shows an integer token ID being used as a row lookup in an embedding table, then combined with positional encoding before the first transformer layer.

## Key points
- Tokenization produces an integer ID such as 4823
- The ID indexes one row in an embedding table shaped by vocabulary size and model dimension
- The retrieved dense vector represents the token in a learned numerical space
- The token vector is combined with positional information before transformer processing

## Why I saved this
A bridge between token IDs, embedding tables, and the first layer of a transformer.

## OCR text

```text
LLM-Series techwith.ram

> TOKEN EMBEDDINGS< |

Converts each token ID into a dense vector by looking up a row
of the embedding table. The vector is added to a positional encoding
to form the input to the first transformer layer.

2) LOOKUP IN
1) TOKENIZE EMBEDDING TABLE

one row =

— one token’s vector

“

cat”

| ster
4823 4823 | LYWIMUDTA ——> \ (0.2, -0.1, 0.8, ...]J

token ID
(an integer)

3) GET TOKEN VECTOR

4) ADD POSITIONAL ENCODING

positional

4) — |% encoding
embedding table (pos N)
(vocab size x d_model)

e.g., 50,000 x 768

adds position
information

5) INPUT TO TRANSFORMER LAYER

[input to transformer layer |

Often shared with the output head

cuts params,
same weights as the final unembedding slightly hurts loss
(weight tying) <<

lookup row in
embedding table

add positional
encoding

input to first

transformer layer

token token ID
ES | >| (4823) >

* Token embeddings are the bridge between words and the transformer.

ID — vector — position — understanding
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.58.12 PM.png](https://drive.google.com/file/d/19qGRERUVZyliDZUeAoQB6McKvU9qd2P1/view)
- **Captured:** 2026-08-03
