---
id: note-loss-functions
title: "Loss Functions"
slug: loss-functions
date_captured: 2026-08-03
category: machine-learning
tags: [loss-functions, model-training, regression, classification, mse, mae, cross-entropy, huber-loss]
source_type: drive-image
drive_id: 1N_n8pG_tr00QyglvLIdtiA8LS3bOnDdI
drive_name: "Screenshot 2026-08-03 at 5.02.59 PM.png"
drive_link: https://drive.google.com/file/d/1N_n8pG_tr00QyglvLIdtiA8LS3bOnDdI/view
image_path: public/img/notes/2026-08/loss-functions.png
entities: [Mean Squared Error, Mean Absolute Error, Binary Cross Entropy, Categorical Cross Entropy, Huber Loss]
---

# Loss Functions

![Infographic](public/img/notes/2026-08/loss-functions.png)

## Summary

A loss-function guide compares objectives for regression and classification, emphasizing that the loss measures model error and supplies the signal used for learning.

## Key points

- MSE penalizes large regression errors strongly and is sensitive to outliers, while MAE treats errors more evenly and is more robust
- Binary cross-entropy penalizes confident but wrong two-class predictions
- Categorical cross-entropy is used for multi-class probabilities, often with softmax output
- Huber loss combines squared-error behavior for small errors with absolute-error behavior for large errors

## Why I saved this

A useful decision aid for connecting a prediction task, output layer, and training objective.

## OCR text

```text
Loss Functions @

They measure how wrong the model is.

The goal is to minimize the loss.

LOSS FUNCTION USED FOR INTUITION PLOT
Loss
Mean Squared Penalizes large
Error (MSE) _— errors more
(sensitive to
Regression Continuous outliers) 4
values ° Error Yy-9)
Le
Mean Absolute WANS | Penalizes all Re
Error (MAE) sae errors equally
; Continuous | (more robust to
Regression Saltese outliers) 4
| ° a!
| | Evvor'( 29)
|
aa are Loss wt, |
Binary Cross | Penalizes confident eat : %
Entropy (BCE) but wrong \
v | Ly: 'og(f.) + (1- yi) og(1- §.)] | | predictions
Binary Two classes m9 5: slits | heavily
Classification (0 or 1) yi = ipredicted ipectaility
yi € {0, 1}
———— FE
|
Categorical tae x se Ye 'og(Guz) | | Encourages high
Cross Entropy Orig oh eat probability for
(CCE) C = number of classes | the correct
Multi-class rv How Yie = true label (0 or 1) | class J
Ses classes _ ue | ° 05 1
Classification Jic = predicted probability Je (probebility of
= al | true class )
: 1 | combines mse | ‘st
‘ 1 f lel ss ombines
Huber Loss Bail L,(e) = | ae | (call: ereors)
Rampassion Continuous S(lel - 78) otherwise and MAE
values with 7 ” | (large errors)
RE a outliers = | (& "YY ° ercor (y-$)
QUICK COMPARISON
MSE | MAE BCE CCE Huber Loss
+ Smooth + Simple 5 Gar binary, + For multi-class + Best of MSE
+ Penalizes large + Robust to classification classification and MAE
errors heavily outliers * Output: probability | | * Output: probability | | Weeks well with
+ Sensitive to + Less sensitive 2 Uie with Sigmetd (Softmax) Suiliges
outliers to large errors + Most common

Right loss =

Better learning.

techwith.r
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 5.02.59 PM.png](https://drive.google.com/file/d/1N_n8pG_tr00QyglvLIdtiA8LS3bOnDdI/view)
- **Captured:** 2026-08-03
