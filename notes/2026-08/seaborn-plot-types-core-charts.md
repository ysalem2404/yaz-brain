---
id: note-seaborn-plot-types-core-charts
title: "Seaborn Plot Types — Core Charts"
slug: seaborn-plot-types-core-charts
date_captured: 2026-08-03
category: data-visualization
tags:
  - python
  - seaborn
  - data-visualization
  - scatterplot
  - lineplot
  - barplot
  - countplot
  - histogram
  - matplotlib
  - statistics
entities:
  - Seaborn
  - Python
  - Matplotlib
source_type: drive-image
drive_id: 1yYo3lFWran_X0H2no4mK0sXxD7MSW5g8
drive_name: "Screenshot 2026-08-03 at 7.48.59 PM.png"
drive_link: https://drive.google.com/file/d/1yYo3lFWran_X0H2no4mK0sXxD7MSW5g8/view
image_path: public/img/notes/2026-08/seaborn-plot-types-core-charts.png
---

# Seaborn Plot Types — Core Charts

![Infographic](/img/notes/2026-08/seaborn-plot-types-core-charts.png)

## Summary
A compact Seaborn chart reference covers scatter, line, bar, count, and histogram plots, with the main parameters for axes, grouping, markers, bins, KDE curves, and palettes.

## Key points
- Scatter plots show relationships between two numerical variables; line plots show trends over time
- Bar and count plots compare category values or frequencies
- Histograms show distributions, with bins and optional KDE curves
- Parameters such as hue, style, size, order, palette, and estimator control grouping and appearance

## Why I saved this
A practical chart-selection reference for common exploratory data-analysis questions.

## OCR text

```text
pycode.hubb

Followin
A” Post Malone, Swae Lee - Sunfl... g
Q) Scatter P lot $ Parameters Scatter Plot Example
* ver ear 10
Definition : & x > Column for X-axis a
Shows relationship between wy > Column for Y-axis $
two numerical variables. te hue > Different colors
sns.scatterplot ( cae as
data=tips, bal catene,
otal_bill", ' Metab
te size > Different sizes
by category

kx +> Column for X-axis
Definition : .

Shows trends over time. ws Sas ee

tt hue > Different colors

sns.Lineplot ( by category

te style > Different line styles

% markers» Show markers
on line

Parameters
x > Categorical column
ey > Numerical column
te hue > Different colors

Definition :
Compares average values
across categories.

Pyreatanery
sns.barplot( % estimator > Function to
data=tips, aggregate (mean by
day”, default)
"total_bill" te ci + Confidence interval

@) Count Plot oad Parameters

Definition : x > Categorical column
Counts frequency of hue > Different colors
each category. by category

sns.countplot( %& order > Order of categories
datastipe; t palette + Color palette
, xe"day"

@) Histogram fff, (—— Paanetes

Dajan te bins > Number of bins 30
rs
Shows distribution of Ms
oa tt kde > Show KDE curve M 20
= = (True/False) 3
sns.histplot( color > Bar color 10
data=tips, % clement > ‘bars’ (default)

="total_bill” ‘step! am
a: -otal_bi or ‘step o 10 2 30 40 50 60
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 7.48.59 PM.png](https://drive.google.com/file/d/1yYo3lFWran_X0H2no4mK0sXxD7MSW5g8/view)
- **Captured:** 2026-08-03
