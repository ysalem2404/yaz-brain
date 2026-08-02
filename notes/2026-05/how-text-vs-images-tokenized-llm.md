---
id: note-how-text-vs-images-tokenized-llm
title: "How Text vs Images Are Tokenized for LLMs"
slug: how-text-vs-images-tokenized-llm
date_captured: 2026-05-08
category: concept-primer
tags: [tokenization, vision-transformer, vq-vae, bpe, multimodal, llm-internals, image-patches]
source_type: drive-image
drive_id: 1xauh3MDgGosuvYF0WzRnuGRSWyiNrvq8
drive_name: "Screenshot 2026-05-08 at 9.08.59 PM.png"
drive_link: https://drive.google.com/file/d/1xauh3MDgGosuvYF0WzRnuGRSWyiNrvq8/view
image_path: public/img/notes/2026-05/how-text-vs-images-tokenized-llm.png
---

# How Text vs Images Are Tokenized for LLMs

![Infographic](public/img/notes/2026-05/how-text-vs-images-tokenized-llm.png)

## Summary
Explains why text and image tokenization differ fundamentally: 'text is discrete (words, letters), while images are continuous (pixel gradients).' Text tokenization uses subword methods (BPE/SentencePiece) — common words stay whole, rare words split into pieces, each mapped to an integer ID via vocabulary lookup (e.g., 'The quick brown fox jumps.' → 7 subword tokens → integer IDs). Image tokenization uses patches via two approaches: (A) Continuous/ViT — images split into small grid patches, each flattened into a vector ('patch embedding') fed directly to the model; (B) Discrete/VQ-VAE/Codebook — each patch matched to the closest pattern in a visual codebook and replaced by its index, producing a sequence of integers useful for image generation. Comparison panel contrasts 'Red Apple' → tokenizer → integer IDs [101, 202] against an apple image → patch & flatten → linear projection → embedding vectors.

## Key points
- Core distinction: text tokenization maps discrete symbols to a fixed vocabulary; image tokenization projects continuous patches into vector space
- Two image tokenization families named explicitly: continuous ViT patch embeddings vs. discrete VQ-VAE codebook indices
- VQ-VAE/codebook approach is specifically useful for image generation (produces discrete tokens like text)
- ViT approach is used for image understanding tasks, feeding patch embeddings directly to transformers
- Side-by-side 'Red Apple' vs apple-image example makes the abstraction concrete for non-ML audiences

## Entities & tools mentioned
Ujjyaini Mitra, BPE, SentencePiece, ViT, VQ-VAE

## Why I saved this
Solid primer for explaining multimodal model internals to Bechtel engineering teams evaluating vision-capable models for document/drawing analysis use cases.

## Source
- **Drive file:** [Screenshot 2026-05-08 at 9.08.59 PM.png](https://drive.google.com/file/d/1xauh3MDgGosuvYF0WzRnuGRSWyiNrvq8/view)
- **Captured:** 2026-05-08
- **Tags:** #tokenization #vision-transformer #vq-vae #bpe #multimodal #llm-internals #image-patches
