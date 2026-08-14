---
id: note-backpropagation
title: "Backpropagation"
slug: backpropagation
date_captured: 2026-08-03
category: neural-networks
tags: [backpropagation, gradient-descent, neural-networks, training, gradients, weights]
source_type: drive-image
drive_id: 1dTydU8DBk9Mhu0Tve62drgTbUAYTLNv_
drive_name: "Screenshot 2026-08-03 at 5.02.37 PM.png"
drive_link: https://drive.google.com/file/d/1dTydU8DBk9Mhu0Tve62drgTbUAYTLNv_/view
image_path: public/img/notes/2026-08/backpropagation.png
entities: [Neural Network, Gradient Descent, Loss Function]
---

# Backpropagation

![Infographic](public/img/notes/2026-08/backpropagation.png)

## Summary

A neural-network primer explains backpropagation as the backward flow of error gradients used to update weights and biases during learning.

## Key points

- The forward pass produces a prediction and a loss compares it with the target
- Gradients are calculated at the output and propagated backward through the layers using the chain rule
- The gradients tell the optimizer how to change weights and biases to reduce future error
- The process alternates computation, error flow, gradient calculation, and parameter updates

## Why I saved this

A clear conceptual companion to forward propagation and loss functions for reviewing the neural-network training loop.

## OCR text

```text
Backpropagation

Backpropagation is how the model learns.

It computes errors backward and updates weights.

1. WHAT IS IT?

Backpropagation is the

[ 2. How IT WORKS (oveRvIEW) |

INPUT HIDDEN LAYER 4 HIDDEN LAYER L
LAYER

x = at ze at

OUTPUT
LAYER

O
oO

process of calculating the

error gradients from the

output layer back to the

input layer to update the

weights and biases. 7
Forward pass (compute) ——> Backward pass (error flow)
3. THE MATH (CORE IDEA) (4. EXAMPLE (2-2-4 NETWORK) }
@ Compute toss (£) Input Hidden Loyer Output
: (2) (2) (4)
L = Loss(J, y) @
xO p
@® Compute gradient at output layer O-— y
xO O (predicted)
(error term)
® Propagate error backward = == === ~~ , | @ Forward Pass (to get 7) , @ Backward Pass (error flow), @) Gradients

for, Fa i=4; 4.58

At output layer:

aiyr 4
8 = (Witt)! &!*4. g/(z2') for layer L gw Ok
22?
@® Compute gradients a linear =
25 8G , A = Etvction At hidden layer:
aiMeriaes 5* = (W?)"8? o g'(z')

© Update weights and biases

ae a0) dah el @® Update (Gradient Descent)
Wiewsqsa (lel aga,

\
\

I

\

\

\

i.
combination |
I

1

\

'

i

1

i}

i

!

'
1
1
!
'
i
!
i
I
ise fel:
I
I
'
I
f
\
I
1
\

H 1
hs p AY the eter lor
aL aL what went wrong and |
Bee tbe Ae Deke br ne | how to fa itl i
eye a e
5. INTUITION
Escpard fas Compute Loss Backward Pass Update Repeat
= O<0
© 0 > GF —+ Oa,o-ne = ae Ga
o—0 or oe RS

Make a prediction Until loss is small

6. KEY TAKEAWAY

( Teonaeapess. if
4 ‘orwart "ass 4 Si
I

How wrong is it? Find where it went wrong

(and by how much)

Adjust weights & biases

to reduce error and predictions are good

ce oa .aP* oe . rf a
te Le | Backward P
Compute Loss | | Backward Pass |

(Compare) ! H (Gradients) i

Update Parameters |
(Gradient Descent)

| (Compute) |

Repeat until the loss is minimized and the model performs well.

techwith.ram
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.02.37 PM.png](https://drive.google.com/file/d/1dTydU8DBk9Mhu0Tve62drgTbUAYTLNv_/view)
- **Captured:** 2026-08-03
