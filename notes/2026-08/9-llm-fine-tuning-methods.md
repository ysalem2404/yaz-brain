---
id: note-9-llm-fine-tuning-methods
title: "9 LLM Fine-Tuning Methods"
slug: 9-llm-fine-tuning-methods
date_captured: 2026-08-15
category: ai-models
tags: [llm, fine-tuning, sft, rlhf, lora, qlora, peft, prompt-tuning, adapter-tuning, dpo]
source_type: drive-image
drive_id: 1y2oMFp2MV3ku2fodvJKTem65E7WUx25V
drive_name: "Screenshot 2026-08-14 at 9.11.12 PM.png"
drive_link: https://drive.google.com/file/d/1y2oMFp2MV3ku2fodvJKTem65E7WUx25V/view
image_path: public/img/notes/2026-08/9-llm-fine-tuning-methods.png
entities: [SFT, RLHF, LoRA, QLoRA, PEFT, DPO, PPO]
---

# 9 LLM Fine-Tuning Methods

![Infographic](public/img/notes/2026-08/9-llm-fine-tuning-methods.png)

## Summary
A comparison chart surveys nine ways to adapt language models, from supervised fine-tuning and preference optimization to parameter-efficient methods such as LoRA, QLoRA, PEFT, adapters, and prompt tuning.

## Key points
- Supervised fine-tuning updates model parameters on task examples for specialized behavior, while RLHF aligns outputs using human preference feedback
- Prefix tuning, adapters, LoRA, QLoRA, and PEFT reduce compute or memory needs by training a smaller parameter subset or low-dimensional representation
- DPO learns directly from preference comparisons, while PPO optimizes a policy with reinforcement learning
- Quantization can make large-model adaptation practical on constrained hardware, but quality, stability, and deployment trade-offs remain
- Method choice depends on task specificity, available compute, data type, alignment goal, and whether full model weights should remain frozen

## Why I saved this
A useful decision map for choosing between full adaptation, preference alignment, and parameter-efficient tuning strategies.

## OCR text

```text
9 LLM FINE-TUNING

Antrixsh Gupta

Production-Ready Al

Pre-trainit

pipet

LJ Ter

y

"BES --->

Prompt

H

{ Gigantic

Base LLM

Fine

MERGER Encoder (Fixed)

dataset

web-

tuned

Sao

scale

Supervised !

LLM

Human

dataset

fine tuning

Reward

aligned LLM

model

A

ss

Specific (Private)

i

Ey

knowledge base

toss

E8@ ¢----'

RL algorithm

+ Fine-tunes all model parameters

+ Learns trainable prefix vectors for

* Aligns outputs using human preference

efficiently.

prompts.

feedback.

+ Delivers highest accuracy for specific

+ Preserves original pretrained model

+ Improves helpfulness, safety, and

tasks.

weights completely.

response quality.

ee

Pre-trained

Preference

Multihead self-attention +-:

1

remains frozen

data

Fully connected layer

'

E

1 connection

Skip

H

Adapter

a

1

Input

el H

LayerNorm

cone

=

Fully connected layer

ac GQerl--2

Adapter

Metrics of lower dimensionality

Ge Final LLM

2.

LayetNorm --—

+ Trains lightweight adapters without full

+ Learns directly from preference

+ Inserts compact adapters between

retraining.

comparison data.

transformer layers.

+ Reduces memory and computational

+ Simplifies alignment without reward model

* Achieves efficient task-specific model

requirements significantly.

training.

adaptation.

iS ii So

=

Pre-trained

=

remains frozen

>

->j eee

ay LORA

Prompt

4-bit quantized

dataset

model

7_ ay QLORA

ae pe

Input

Output

comm «2.

<--->

LLM

Reward

~—D Prefix tuning

model

Loe Qxl-

---- $28@ q----!

Metrics of lower dimensionality

“4 Adapters

PPO algorithm

* Uses 4-bit quantization for efficient

+ Optimizes policies using stable

training

+ Updates only a small parameter subset

reinforcement learning.

+ Enables faster and cost-effective model

+ Supports large models with limited

tuning.

+ Prevents excessive changes during model

hardware.

optimization.
```

## Source
- **Drive file:** [Screenshot 2026-08-14 at 9.11.12 PM.png](https://drive.google.com/file/d/1y2oMFp2MV3ku2fodvJKTem65E7WUx25V/view)
- **Captured:** 2026-08-15
