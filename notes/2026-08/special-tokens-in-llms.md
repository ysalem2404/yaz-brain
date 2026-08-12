---
id: note-special-tokens-in-llms
title: "Special Tokens in LLMs"
slug: special-tokens-in-llms
date_captured: 2026-08-03
category: llm-fundamentals
tags: [special-tokens, tokenization, llm, padding, bos, eos, unknown-token, chat-templates]
source_type: drive-image
drive_id: 1uGuiHxJ6Y-oFx50paFYYBwtjvnTpAsO3
drive_name: "Screenshot 2026-08-03 at 4.52.29 PM.png"
drive_link: https://drive.google.com/file/d/1uGuiHxJ6Y-oFx50paFYYBwtjvnTpAsO3/view
image_path: public/img/notes/2026-08/special-tokens-in-llms.png
entities: [LLM, Tokenizer]
---

# Special Tokens in LLMs

![Infographic](public/img/notes/2026-08/special-tokens-in-llms.png)

## Summary
A special-token reference explains reserved markers such as padding, beginning-of-sequence, end-of-sequence, unknown, separator, classification, and mask tokens that control structure and behavior around normal text.

## Key points
- PAD tokens make sequences the same length for batching
- BOS and EOS mark the boundaries of input or output
- UNK represents unseen vocabulary and SEP separates segments
- CLS and MASK support classification or masked-language-model workflows

## Why I saved this
A useful lookup for debugging token streams, chat templates, and model inputs.

## OCR text

```text
techwith ram
pecial Tokens <

Special tokens are reserved tokens with specific meanings.
They are not part of normal text.
LLMs use them to understand structure, control behavior,
and handle different tasks.

= i

—s

> (COMMON SPECIAL TOKENS } <

Token What it means Example / Usage

Padding token.
<PAD> lead th make all [1, 205, 89, <PAD>, <PAD>]

sequences the same length. (added at the end)

Beginning of sequence. é

<BOS> Marks the start of input. <BOS> Hello, how are you? e---»>
End of sequence. ‘

<EOS> I’m good, thanks! <EOS> e=-=-=—

Marks the end of output.

<UNK> Unknown token.

Used for unseen words. plonple => SUNG

Separator token.
<SEP> Separates two parts.

Classification token. wv
i !
<CLS> Represents the whole input. [ <CLS> The movie was great! ]

Question <SEP> Answer

Mask token.

Used in masked language I love <MASK>!

modeling.

A
=
>
n
n
Vv

-—— (WHY SPECIAL TOKENS? }—. —— WHERE THEY ARE USED? }

Chat models (system, user, assistant)

© Add structure and boundaries

© Help the model understand context © Translation models (sre <SEP> tgt)
| © Enable different tasks fj a © Sequence classification (<CLS>)
(chat, translation, classification, etc.) _ al * Text generation (BOS, EOS)
(2) Improve training and generation | |e Masked language models (<MASK>)
i = 24 & J

~_ Special tokens are the glue that holds the conversation, j
~ structure, and intelligence of LLMs together. #

Small tokens, huge impact! —

r

a
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.52.29 PM.png](https://drive.google.com/file/d/1uGuiHxJ6Y-oFx50paFYYBwtjvnTpAsO3/view)
- **Captured:** 2026-08-03
