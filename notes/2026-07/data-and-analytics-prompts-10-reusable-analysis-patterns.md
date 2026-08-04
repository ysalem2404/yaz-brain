---
id: note-data-and-analytics-prompts-10-reusable-analysis-patterns
title: "Data and Analytics Prompts — 10 Reusable Analysis Patterns"
slug: data-and-analytics-prompts-10-reusable-analysis-patterns
date_captured: 2026-07-04
category: data-engineering
tags:
  - data-analytics
  - prompts
  - eda
  - pandas
  - sql
  - cohort-analysis
  - funnel-analysis
  - statistics
  - dashboards
  - data-quality
entities:
  - pandas
  - SQL
source_type: drive-image
drive_id: 1r7aAMP6KeFxLTHuxZoQbqaXWz6nm4Ize
drive_name: "Screenshot 2026-07-04 at 2.20.33 AM.png"
drive_link: https://drive.google.com/file/d/1r7aAMP6KeFxLTHuxZoQbqaXWz6nm4Ize/view
image_path: public/img/notes/2026-07/data-and-analytics-prompts-10-reusable-analysis-patterns.png
---

# Data and Analytics Prompts — 10 Reusable Analysis Patterns

![Infographic](public/img/notes/2026-07/data-and-analytics-prompts-10-reusable-analysis-patterns.png)

## Summary
A prompt library for ten common data and analytics tasks: first-pass exploratory data analysis, messy-data cleaning, cohort retention SQL, funnel drop-off analysis, statistical sanity checks, decision dashboards, anomaly investigation, and related analysis workflows.

## Key points
- EDA prompt requests shape, dtypes, descriptive statistics, missingness, duplicates, anomalies, and follow-up questions
- Cleaning prompt sequences dtype coercion, text normalization, category standardization, missing-value decisions, deduplication, and snake_case naming
- Retention, funnel, and dashboard prompts force definitions, conversion logic, hypotheses, thresholds, and decision triggers

## Why I saved this
A practical prompt checklist for turning loosely specified analytics requests into reproducible analysis plans with explicit assumptions and decision criteria.

## OCR text

```text
11/12

M Data & Analytics

Prompts

Prompt 1

Run first-pass EDA on [DATASET]. Give me
pandas for: shape + df.info() dtypes,
df.describe() and value_counts() on key
columns, missing-value counts per column,
duplicate rows, and 3 obvious anomalies or
outliers worth investigating. End with 5
questions this data can answer and any
column I should not trust yet.

Prompt 3

Write SQL for a cohort retention table on
[TABLE]: group users by their
[SIGNUP_PERIOD] cohort, then show the %
still active in each following period. State the
cohort definition, the return-event that counts
as retained, and how you handle
partial/incomplete cohorts. Return the query
plus how to read the triangle.

Prompt 5

I see [RESULT] in [METRIC]. Before I act, run
sanity checks: is the sample large enough, is
the difference statistically significant (state test
+ p-value), could a confounder like
[VARIABLE] or seasonality explain it, is it
survivor/selection bias, and is the metric
definition stable. Output: verdict (real / noise /
unclear) + what to check next.

10/10 Data

Prompt 2

Write a pandas cleaning pipeline for messy
[DATASET]. Handle in order: coerce dtypes
(pd.to_datetime, numeric), strip/lowercase
text, standardize categories, decide drop vs
fillna per column with a stated reason, remove
exact + near-duplicates, and rename columns
to snake_case. Output runnable code plus a
before/after row-count log.

Prompt 4

Analyze funnel dropoff for [FUNNEL_STEPS]
using [TABLE]. Give me SQL counting distinct
users at each step, step-to-step conversion %,
the biggest dropoff, and a segment breakdown
by [DIMENSION]. Then list 3 hypotheses for
the worst leak and the one metric to watch
after a fix. Flag any step ordering assumptions.

Prompt 6

Design a decision dashboard for [GOAL] /
[TEAM]. Pick one North Star metric, then 4-6
supporting metrics pairing each leading
indicator next to the lagging one it drives, plus
1-2 guardrail metrics. For each: definition, why
it's actionable not vanity, and the threshold
that should trigger a decision. Return as a
table.

&
```

## Source
- **Drive file:** [ Screenshot 2026-07-04 at 2.20.33 AM.png ](https://drive.google.com/file/d/1r7aAMP6KeFxLTHuxZoQbqaXWz6nm4Ize/view)
- **Captured:** 2026-07-04
- **Tags:** #data-analytics #prompts #eda #pandas #sql #cohort-analysis #funnel-analysis #statistics #dashboards #data-quality
