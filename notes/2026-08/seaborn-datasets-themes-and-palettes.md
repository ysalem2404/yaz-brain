---
id: note-seaborn-datasets-themes-and-palettes
title: "Seaborn Datasets, Themes, and Palettes"
slug: seaborn-datasets-themes-and-palettes
date_captured: 2026-08-03
category: data-visualization
tags:
  - python
  - seaborn
  - data-visualization
  - datasets
  - themes
  - color-palettes
  - pandas
  - matplotlib
entities:
  - Seaborn
  - Python
  - Pandas
  - Matplotlib
source_type: drive-image
drive_id: 1MjhHmoocHM1Q2kFthdIAnhnUQMDXGWWu
drive_name: "Screenshot 2026-08-03 at 7.48.48 PM.png"
drive_link: https://drive.google.com/file/d/1MjhHmoocHM1Q2kFthdIAnhnUQMDXGWWu/view
image_path: public/img/notes/2026-08/seaborn-datasets-themes-and-palettes.png
---

# Seaborn Datasets, Themes, and Palettes

![Infographic](/img/notes/2026-08/seaborn-datasets-themes-and-palettes.png)

## Summary
A Seaborn setup guide shows how to load built-in tips, iris, titanic, and penguins datasets, inspect their shape and summary, and configure themes and color palettes.

## Key points
- Built-in datasets provide fast practice material for restaurant tips, flowers, passenger survival, and penguins
- head, info, describe, shape, and columns provide quick dataset inspection
- Themes include white, dark, whitegrid, darkgrid, and ticks
- Deep, pastel, bright, and muted palettes change the visual language of plots

## Why I saved this
A lightweight starter card for moving from data loading to consistent chart styling.

## OCR text

```text
(@) pycode.hubb Falltewtia

A” Post Malone, Swae Lee - Sunfl...

(5) Load. Dataset

Popular Built-in Datasets + j 2/7

tips = sns.load_dataset (“tips”) @ tips —: Restaurant tips data
iris = sns.load_dataset (“iris”) @ iris —: Flower measurement data +
titanic = sns.load_dataset (“titanic”) @ titanic : Passenger survival data seaborn

penguins = sns. load_dataset (“penguins”) @ penguins : Penguins species data

©) View Dataset ( Some
tips. head() > first 5 rows @ head() : Shows first 5 rows of data
tips. info () > dataset info @ info() : Shows dataset information
tips.describe() — summary stats © describe() : Shows statistical summary
tips. shape > rows, columns © shape : Returns (rows, columns)

tips.columns  —> column names @ columns —: Returns column names

() Themes

sns.set_theme() — # default theme

sns.set_style (“white”)
sns. set_style (“dark”)
sns.set_style (“whitegrid e)
sns.set_style (3 darkgrid ”)
sns.set_style (“ticks”)

Color Palettes sur @@ © OOO OOOO
sns.color_palette()  # default deep @©080008080080080 Palettes help
sns.set_palette ( “deep”) pastel @9@e@e@eee8e00O(™ choose

sns.set_palette (“pastel”) beautiful. color

sns.set_palette (“bright”) bright @©eeee00000 e
sns.set_palette (“muted”) med @@OOOOO OOO
```

## Source
- **Drive file:** [Screenshot 2026-08-03 at 7.48.48 PM.png](https://drive.google.com/file/d/1MjhHmoocHM1Q2kFthdIAnhnUQMDXGWWu/view)
- **Captured:** 2026-08-03
