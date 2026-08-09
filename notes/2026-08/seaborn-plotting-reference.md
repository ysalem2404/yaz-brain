---
id: note-seaborn-plotting-reference
title: "Seaborn Plotting Reference"
slug: seaborn-plotting-reference
date_captured: 2026-08-03
category: data-visualization
tags:
  - python
  - seaborn
  - data-visualization
  - matplotlib
  - regression
  - ecdf
  - rugplot
  - plotting
entities:
  - Seaborn
  - Python
source_type: drive-image
drive_id: 1tFUqt1cUA8HQjtlUQz-RhwkoXCcIn13C
drive_name: "Screenshot 2026-08-03 at 7.49.25 PM.png"
drive_link: https://drive.google.com/file/d/1tFUqt1cUA8HQjtlUQz-RhwkoXCcIn13C/view
image_path: public/img/notes/2026-08/seaborn-plotting-reference.png
---

# Seaborn Plotting Reference

![Infographic](/img/notes/2026-08/seaborn-plotting-reference.png)

## Summary
A visual reference summarizes Seaborn regression, rug, and ECDF plots plus common parameters for data visualization.

## Key points
- lmplot supports regression views with categorical hue and styling controls
- rugplot marks the distribution of individual observations along an axis
- ecdfplot shows a cumulative distribution and the reference lists reusable parameters such as hue, palette, bins, and cmap

## Why I saved this
A practical plotting cheat sheet for quickly choosing and configuring common Seaborn views.

## OCR text

```text
pycode.hubb

Followin
Suggested for you g

° ——
LM PI lot o%< Parameters LM Plot Example (Tips Datase
- wx > Numerical columa sex = Male sex = Femals

Definition : 10 10
Regression plot with La a
(True /False)
category support,
negerg SUPP We bunedjust + Benduidth control
sns. Implot ( (smoothness)
data=tips,
x="total_bill", W color > Line or fill color
y="tip", We fill > Fill area (True/False)
hue="sex"

Definition :

| TD

sns.rugplot(

data=tips, 0 10 20 30 40 50 60
x="total_bill" total_bill
D
p)
ECDF Plot if ECDF Plot Example (Tips Dataset)
Definition : ’

Shows cumulative distribution.

sns.ecdfplot(
data=tips, 0.25

x="total_bill"
) 0.00 + ; ; ; : 1 1

0 10 20 30 40 50 60
total_bill

Important Parameters £0}

*® data — Dataset (DataFrame) to plot %& marker — Marker style for points
wx — Column for X-axis % linewidth —> Line thickness
wy — Column for Y-axis te alpha —> Transparency (0 to 1)
® hue — Different colors by category ' ,
w% bins — Number of bins (for histogram )
% style — Different markers by category i
W® size — Different sizes by category ® annot > Show values on heatmap
% palette > Color palette to use |W cmap — Colormap (for heatmap)
® color — Single color for plot \
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 7.49.25 PM.png](https://drive.google.com/file/d/1tFUqt1cUA8HQjtlUQz-RhwkoXCcIn13C/view)
- **Captured:** 2026-08-03
- **Tags:** #python #seaborn #data-visualization #matplotlib #regression #ecdf #rugplot #plotting
