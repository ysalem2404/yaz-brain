---
id: note-data-cleaning-using-sql-ten-techniques
title: "Data Cleaning Using SQL: 10 Common Techniques with Query Examples"
slug: data-cleaning-using-sql-ten-techniques
date_captured: 2026-05-29
category: data-engineering
tags:
  - sql
  - data-cleaning
  - data-quality
  - etl
entities:
  - Ashish Joshi
---

# Data Cleaning Using SQL: 10 Common Techniques with Query Examples

## Summary

Ashish Joshi's reference card lists ten SQL data-cleaning techniques with ready-to-use query patterns: replacing NULLs with default values (IFNULL), deleting rows with NULLs, converting text to lowercase, finding duplicate rows (GROUP BY/HAVING), removing leading/trailing spaces (TRIM), splitting full names into first/last, standardizing date formats, eliminating special characters (REGEXP_REPLACE), identifying and removing outliers via threshold queries, and fixing typo/incorrect categorical values.

## Key Points

- IFNULL() replaces NULL values with a default during query execution
- GROUP BY + HAVING COUNT(*) > 1 identifies duplicate rows within a column
- TRIM() removes leading/trailing spaces affecting comparisons
- REGEXP_REPLACE() eliminates special characters and standardizes phone number formats
- Threshold-based WHERE clauses identify and remove statistical outliers
- Includes ready-to-copy SQL syntax for each of the 10 techniques

## Why Yaz Saved This

Practical, directly reusable SQL reference for data cleaning tasks in Yaz's data engineering and ETL pipeline work.

![Data Cleaning Using SQL: 10 Common Techniques with Query Examples](/img/notes/2026-05/data-cleaning-using-sql-ten-techniques.png)
