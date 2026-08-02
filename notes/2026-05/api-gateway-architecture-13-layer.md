---
id: note-api-gateway-architecture-13-layer
title: "API Gateway Architecture (13-Layer Reference)"
slug: api-gateway-architecture-13-layer
date_captured: 2026-05-09
category: architecture
tags: [api-gateway, network-security, access-layer, identity-aware-proxy, microservices, vpc, api-governance]
source_type: drive-image
drive_id: 18Nrn2E3TK3g_lsDJsLLzKDQh0TjYtmbq
drive_name: "Screenshot 2026-05-09 at 2.53.22 PM.png"
drive_link: https://drive.google.com/file/d/18Nrn2E3TK3g_lsDJsLLzKDQh0TjYtmbq/view
image_path: public/img/notes/2026-05/api-gateway-architecture-13-layer.png
---

# API Gateway Architecture (13-Layer Reference)

![Infographic](public/img/notes/2026-05/api-gateway-architecture-13-layer.png)

## Summary
A 13-step API Gateway reference architecture. Consumer requests pass through a Network Security Layer (01. Firewall Rules) before reaching the API Gateway, which handles Staging, API Keys/Usage Plans/Throttling, Logging & Support, Documentation, Governance, Analytics/Trends/Metrics, Caching, Secured Access, and Orchestration (steps 02-10). From there, an Access Layer applies Identity Aware Proxy and Content Aware Access (11-12), passing through a Transformational Layer for Mediation (13) before reaching backend destinations: External APIs, Microservices, VPCs, and Databases.

## Key points
- Firewall sits ahead of the API Gateway itself — network security is a distinct layer, not baked into the gateway
- API Gateway's 9 named functions include both operational (caching, throttling) and governance (documentation, analytics) concerns
- Identity Aware Proxy and Content Aware Access form a distinct Access Layer after the gateway, before backend routing
- Mediation/Transformation is its own layer — protocol/format translation happens after access control, not before
- Four backend destination types are named explicitly: External APIs, Microservices, VPCs, Databases

## Entities & tools mentioned
Umair Ahmad

## Why I saved this
A clean numbered reference for reviewing Bechtel's own API gateway layering against a named-step best-practice model, especially the firewall-before-gateway and identity-aware-proxy-after-gateway sequencing.

## Source
- **Drive file:** [Screenshot 2026-05-09 at 2.53.22 PM.png](https://drive.google.com/file/d/18Nrn2E3TK3g_lsDJsLLzKDQh0TjYtmbq/view)
- **Captured:** 2026-05-09
- **Tags:** #api-gateway #network-security #access-layer #identity-aware-proxy #microservices #vpc #api-governance
