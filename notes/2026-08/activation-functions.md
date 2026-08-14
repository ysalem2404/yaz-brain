---
id: note-activation-functions
title: "Activation Functions"
slug: activation-functions
date_captured: 2026-08-03
category: neural-networks
tags: [activation-functions, neural-networks, relu, sigmoid, tanh, softmax, classification]
source_type: drive-image
drive_id: 1P_G9E5iM0n9k12s-u7wwNxRlM73-yOiU
drive_name: "Screenshot 2026-08-03 at 5.02.48 PM.png"
drive_link: https://drive.google.com/file/d/1P_G9E5iM0n9k12s-u7wwNxRlM73-yOiU/view
image_path: public/img/notes/2026-08/activation-functions.png
entities: [ReLU, Leaky ReLU, Sigmoid, Tanh, Softmax]
---

# Activation Functions

![Infographic](public/img/notes/2026-08/activation-functions.png)

## Summary

A comparison of common activation functions shows how nonlinearities let neural networks learn complex patterns and how each function fits different layers or tasks.

## Key points

- Sigmoid maps values to 0-1 and is commonly used for binary-classification output
- Tanh is zero-centered and ranges from -1 to 1, while ReLU is an efficient default for hidden layers
- Leaky ReLU keeps a small negative slope to reduce the dying-ReLU problem
- Softmax produces class probabilities that sum to one for multi-class classification

## Why I saved this

A practical reference for choosing and explaining activations in basic neural-network architectures.

## OCR text

```text
Activation Functions @

Why they matter: They add non-linearity.

They help models learn complex patterns.

FUNCTION FORMULA GRAPH USE WHEN

ae as Ae Suerte Leas REX a Te ee ee \
Sigmoid 1 + Output layer for !
o(x) = Teese binary classification !
(0 to 1) tue Probabiliti }
Ne oe — J
nD il, ee ee ee oe a Sa a \
Tanh ran exi=er* + Hidden layers
anh(x) = X 4 eX + When zero-centered !
(-1 to 1) etre fl
output helps \
L J = ae ee ee eee ee ee ee ee J
aii, Ta y (-elieeelieetientiestintiontiententnetnntioed
H \
1 | « Hidden layers
ReLU ' 4 v H
(0, x) £(x) = max(0, x) H + Default choice "
mee X | «+ Efficient & sparse |
az} & my, = 4 i ge ee ee J
y
rc =) ; \ iniaieie aebaiaiaiaie ‘
Leaky ReLU F x, xz0 } + When ReLU 1
max (ax, x) () = ax, x<0 Fi | “dying neuron” H
(a = 0.01) 0 1 | problem occurs H
wo we = 1 ee a ,
Fr probability (ao ea=ce-= ‘
Softmax softmax(zi) = | « Output layer for |
: ezi ' — multi-class :
(Multi-class | paces 1
3 classification '
output) » je J ! '
| « Sum of outputs =1 |
h oa J alnseaz 2 ee” /
QUICK COMPARISON
Sigmoid Tanh ReLU Leaky ReLU a Softmax
Jv Bounded (0,1) Vv Zero-centered Vv Fast training Vv Fixes dying v Multi-class
X Vanishing X Still has V Sparse activation ReLU probabilities
gradient vanishing X Dying ReLU Vv Better gradient v Interpretabl.
gradient problem flow output

techwith.ram
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.02.48 PM.png](https://drive.google.com/file/d/1P_G9E5iM0n9k12s-u7wwNxRlM73-yOiU/view)
- **Captured:** 2026-08-03
