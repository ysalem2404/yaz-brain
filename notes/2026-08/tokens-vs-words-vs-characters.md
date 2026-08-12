---
id: note-tokens-vs-words-vs-characters
title: "Tokens vs Words vs Characters"
slug: tokens-vs-words-vs-characters
date_captured: 2026-08-03
category: llm-fundamentals
tags: [tokens, words, characters, tokenization, llm, nlp, transformers]
source_type: drive-image
drive_id: 13mpznwYGVJ7Yh87qoeMH1WY1KxXOEaz_
drive_name: "Screenshot 2026-08-03 at 4.52.04 PM.png"
drive_link: https://drive.google.com/file/d/13mpznwYGVJ7Yh87qoeMH1WY1KxXOEaz_/view
image_path: public/img/notes/2026-08/tokens-vs-words-vs-characters.png
entities: [GPT, Claude, Llama]
---

# Tokens vs Words vs Characters

![Infographic](public/img/notes/2026-08/tokens-vs-words-vs-characters.png)

## Summary
A comparison clarifies that LLMs use tokens rather than human-style words or individual characters: tokens are a practical subword compromise that improves coverage of rare and new words.

## Key points
- Tokens can be full words or parts of words and are the unit used by LLMs and transformers
- Words align with human reading and traditional search or SEO but have trouble with unseen words
- Characters are useful for spell checking, regex, and some classical NLP but are inefficient for language modeling
- Modern LLM vocabularies commonly contain roughly 30k–200k tokens

## Why I saved this
A compact explanation of the basic unit an LLM actually consumes.

## OCR text

```text
(LLM-Series | ‘hgyas
Token vs Word vs Character <

LLMs don’t understand text like humans.
They convert text into tokens using a tokenizer.
Tokens, words, and characters are not the same!

apes | re & Ns | The smallest unit of text.
y izer. | P 1 spaces: Every letter, number,

Can be a full word or Matches how humans | bol
part of a word. read text. | SPAce,, OF SYMDO'-
Example Example | Example
unbelievable transformers ' [ unbelievable transformers unbelievable transformers
v | L v
(i) (Tan) (2) HooCuGouor
> 4 tokens } > 2 words | > 22+ characters
Used in | Usedin Ine ene Used in
LLMs & Transformers | Search Engines, SEO, | | Spell Check, Regex,
(GPT, Claude, Llama, etc.) Traditional NLP \ Some Classical Models

. |» @ Tokens are a compromise between words and characters.
-@ @ They help models handle rare words and any new words.
@ Most modern LLM vocab sizes: 30k —- 200k tokens

“
= aid Tokens are the language LLMs actually speak. LD
Text —> tokenize — integers —> model understands
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 4.52.04 PM.png](https://drive.google.com/file/d/13mpznwYGVJ7Yh87qoeMH1WY1KxXOEaz_/view)
- **Captured:** 2026-08-03
