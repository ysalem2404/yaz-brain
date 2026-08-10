---
id: note-seaborn-plot-types-reference
title: "Seaborn Plot Types Reference"
slug: seaborn-plot-types-reference
date_captured: 2026-08-03
category: data-visualization
tags:
  - python
  - seaborn
  - data-visualization
  - kdeplot
  - boxplot
  - violinplot
  - boxenplot
  - countplot
  - matplotlib
  - statistics
entities:
  - Seaborn
  - Python
source_type: drive-image
drive_id: 1Agm4s_FlZw8IunAqjC5rtq7EgSTWbATj
drive_name: "Screenshot 2026-08-03 at 7.49.12 PM.png"
drive_link: https://drive.google.com/file/d/1Agm4s_FlZw8IunAqjC5rtq7EgSTWbATj/view
image_path: public/img/notes/2026-08/seaborn-plot-types-reference.png
---

# Seaborn Plot Types Reference

![Infographic](/img/notes/2026-08/seaborn-plot-types-reference.png)

## Summary
A Seaborn reference card explains KDE, box, violin, boxen, and count plots with the main parameters used to show distributions, quartiles, density, and category frequency.

## Key points
- KDE plots show probability density and expose bandwidth, fill, and color controls
- Box and violin plots summarize spread, quartiles, outliers, and density across categories
- Boxen plots are suited to distribution views for larger datasets
- Count plots show category frequency with optional hue grouping

## Why I saved this
A practical plotting cheat sheet for choosing a Seaborn distribution or categorical chart.

## OCR text

```text
@ pycode.hubb

Following

(@ KDE Plot

Definition :

Shows probability density

distribution.

sns. kdeplot(
data-tips,
x="total_bill"
)

@) Box Plot

Definition :
Shows median, quartiles,
spread, and outliers

sns.boxplot(
data=tips,
x="day",
y="total_bill"
)

Violin Plot

Definition :
Shows data distribution
and density.

sns.violinplot(
data=tips,

lay",
total_bill”

Parameters
fe x > Numerical column
fe shade > Fill area under curve
(True/False)
fe buadjust > Bandwidth control
(smoothness)

te color -> Line or fill color
te fill > Fill area (True/False)

EO ————————

Parameters
fe x > Categorical column
& y —> Numerical column
fe hue — Different colors

by category
te width > Width of boxes
t palette + Color palette

% shoufliers > Show outliers
(True/False)

Parameters
x > Categorical column
—> Numerical column
- Diffuent cles
by category

> Split by hue
(True/False)
Show inner markings
(box, quartile, stick)

te palette > Color palette

® imer ~

@) Boxen Plot

Definition
Shows distribution for
large datasets.

sns . boxenplot (
data=ti

Count Plot

Definition
Counts frequency of
each category

Parameters
x > Categorical column
fey > Numerical column
fe hue + Different colors

by category
te width +> Width of boxes
w palette + Color palette

te k depth + Depth of box
(number of quantiles)

sie ke le Sh arte,
Parameters
> Categorical column
+ Different colors
by category
te order +> Order of categories
te palette -> Color palette

wx
® hue

KDE Plot Example
0.05
0.04
0.03
2
80.02
0.01
0.00 +
0 10 20 30 40 50 60
@ total_bill J
Box Plot Example
60 .
: : =
= 40
q
3 20
0 r r r T
Thur Fri Sat Sun
day J
-)
Violin Plot Example
60
ye
$20
t)
Thur Fri. Sat Sun
doy  ,
Bevan Plot Example )
60
R ’ ' ‘
+ +
Fy] 40
ia
aa! Fi
ar tay = Sun
[ss Count Plot Example
- 60
3 40
* 20
°
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 7.49.12 PM.png](https://drive.google.com/file/d/1Agm4s_FlZw8IunAqjC5rtq7EgSTWbATj/view)
- **Captured:** 2026-08-03
