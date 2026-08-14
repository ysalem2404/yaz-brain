---
id: note-forward-propagation
title: "Forward Propagation"
slug: forward-propagation
date_captured: 2026-08-03
category: neural-networks
tags: [forward-propagation, neural-networks, activation-functions, weights, biases, deep-learning]
source_type: drive-image
drive_id: 1W95H6RGZ4LWV-JtmC9FTqI8pII97ZIh0
drive_name: "Screenshot 2026-08-03 at 5.02.25 PM.png"
drive_link: https://drive.google.com/file/d/1W95H6RGZ4LWV-JtmC9FTqI8pII97ZIh0/view
image_path: public/img/notes/2026-08/forward-propagation.png
entities: [Neural Network, ReLU, Softmax, Sigmoid, Tanh]
---

# Forward Propagation

![Infographic](public/img/notes/2026-08/forward-propagation.png)

## Summary

A neural-network primer shows how input data moves through weighted layers, biases, and activation functions to produce a prediction.

## Key points

- Each layer computes a linear combination z = Wa + b and then applies an activation function
- The output of one layer becomes the input activation for the next layer
- Common activations shown include sigmoid, tanh, ReLU, leaky ReLU, and softmax
- The overall flow is input to linear transform to activation to the next layer and ultimately an output prediction

## Why I saved this

A compact visual explanation of the forward pass that pairs naturally with the backpropagation note in this batch.

## OCR text

```text
Forward Propagation

Forward Propagation is how data moves forward

through the network to produce a prediction.

(2. How IT WORKS (OVERVIEW) |

ouTPuT
aad HIDDEN LAYER 1 HIDDEN LAYER L LAYER
Input data passes through LAYER
gach layer using weights, ©) O O ‘e
biases and activation © 6) ane 6) eo
functions to produce
the output. © O O O
x z! a a at y
3. MATHEMATICS (4. EXAMPLE (2-3-2 NETWORK) ]
Hidden Loyer
For layer L: Input (3) i Output
(2) (2)
Che L —" 5
t-1, 7 . *
e ig - aes mye @® Compute for Hidden Layer @ Compute for Orta Layer
bi: Bias of layer L z* = W*a! + b?
z' + Linear combination j = g(z”)
a! + Activations of layer L

g(-) ! Activation function

{5. COMMON ACTIVATION FUNCTIONS }

Sigmoid Tanh ReLU Leaky ReLU Softmax
¥ y y probability
al a | | 1h, [ l I. a [ :
° x x x
° 2 e : classes
g(z) = ts g(2) = max(0,z)| | | glz) = max(az, 2) AONE =
Range (0, 1) Range [0, 20) | (« = 0.01)

L

Sum of outputs = 1

6. KEY TAKEAWAY
Input ——> Linear (Wx+b) —> Activation g(-) —> Next Layer —> ... —> Output / Predicti
Forward Propagation = Feed data forward to get the prediction.

techwith.ram
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.02.25 PM.png](https://drive.google.com/file/d/1W95H6RGZ4LWV-JtmC9FTqI8pII97ZIh0/view)
- **Captured:** 2026-08-03
