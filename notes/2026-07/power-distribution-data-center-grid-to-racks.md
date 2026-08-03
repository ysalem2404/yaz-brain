---
id: note-power-distribution-data-center-grid-to-racks
title: "Power Distribution in a Data Center — From Grid to Racks (100 MW Flow)"
slug: power-distribution-data-center-grid-to-racks
date_captured: 2026-07-17
category: data-engineering
tags:
  - data-centers
  - power-distribution
  - ai-infrastructure
  - utility-grid
  - gpu-racks
entities:

---

# Power Distribution in a Data Center — From Grid to Racks (100 MW Flow)

## Summary

A data-center power infrastructure diagram tracing how 100 MW flows from the utility grid (115-230 kV) through campus substations, backup diesel generators, medium-voltage switchgear (13.8/13.2/4.16 kV), critical power systems (UPS/battery banks), low-voltage distribution (480V/277V or 415V/240V), and finally to AI/GPU racks drawing 50-120 kW per rack. It is framed within a broader 'Power Is the New Bottleneck' leadership perspective on AI data center development.

## Key Points

- Traces full power path: utility grid (115-230 kV) to GPU racks (50-120 kW per rack)
- Includes backup power (diesel generators, automatic transfer switch) as a distinct layer from primary grid supply
- Critical power system (UPS + battery banks) sits between medium-voltage distribution and low-voltage rack power
- GPU server racks shown drawing 50-120 kW per rack — orders of magnitude above traditional server racks
- Framed explicitly around the thesis that power, not compute, is now the leadership-level bottleneck for AI data center scaling
- Useful reference for understanding why SMRs and grid-forming batteries (seen elsewhere in this ingestion run) matter for AI infrastructure

## Why Yaz Saved This

Ties directly to Yaz's cloud infrastructure interests and the SMR/data-center power notes captured earlier in this backfill — a concrete technical reference for why power distribution, not just chip supply, gates AI data center capacity.

![Power Distribution in a Data Center — From Grid to Racks (100 MW Flow)](/img/notes/2026-07/power-distribution-data-center-grid-to-racks.png)
