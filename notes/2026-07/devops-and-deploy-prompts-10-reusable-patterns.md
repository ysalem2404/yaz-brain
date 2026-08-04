---
id: note-devops-and-deploy-prompts-10-reusable-patterns
title: "DevOps and Deploy Prompts — 10 Reusable Patterns"
slug: devops-and-deploy-prompts-10-reusable-patterns
date_captured: 2026-07-04
category: devops
tags:
  - devops
  - prompts
  - docker
  - kubernetes
  - terraform
  - ci-cd
  - slo
  - incident-response
  - security
  - observability
entities:
  - Docker
  - Kubernetes
  - Terraform
  - TFLint
  - Checkov
  - Trivy
  - OPA
  - Prometheus
source_type: drive-image
drive_id: 1KjfsdSGY5qBJ0sDptUgVPq4tao8m7vJN
drive_name: "Screenshot 2026-07-04 at 2.20.21 AM.png"
drive_link: https://drive.google.com/file/d/1KjfsdSGY5qBJ0sDptUgVPq4tao8m7vJN/view
image_path: public/img/notes/2026-07/devops-and-deploy-prompts-10-reusable-patterns.png
---

# DevOps and Deploy Prompts — 10 Reusable Patterns

![Infographic](public/img/notes/2026-07/devops-and-deploy-prompts-10-reusable-patterns.png)

## Summary
A ten-prompt DevOps playbook covering Dockerfile optimization, Kubernetes manifest review, CI/CD audits, Terraform security and drift checks, SLO and burn-rate design, incident runbooks, and production deployment hygiene.

## Key points
- Container prompts emphasize multi-stage builds, pinned digests, caching, non-root users, and slim runtimes
- Kubernetes and Terraform prompts check resource controls, probes, security contexts, state locking, encryption, and public exposure
- SLO and incident prompts connect targets to error budgets, multi-window alerts, diagnosis, rollback, escalation, and verification

## Why I saved this
A reusable engineering review checklist for safer AI and application deployments, especially where reliability, security, and auditability need to be explicit.

## OCR text

```text
% DevOps & Deploy

Prompts

Prompt 1

Optimize this Dockerfile for size, build speed,
and security: [DOCKERFILE]. Convert toa
multi-stage build (build stage + slim runtime),
order layers so dependency installs cache
before source copy, pin the base image by
digest, run as a non-root USER, and add a
.dockerignore. Return the rewritten Dockerfile
with inline comments and a before/after
estimated image size.

Prompt 3

Audit this CI/CD pipeline config: [PIPELINE].
Flag slow or missing stages and reorder as lint
-> unit -> build -> integration -> deploy with
fail-fast and caching. Verify no plaintext
secrets, per-environment scoping,
least-privilege deploy identity, and
required-status gates on main. Output: Stage |
Problem | Fix | Est. time saved. Give the
corrected pipeline file.

Prompt 5

Define SLOs and burn-rate alerts for service
[SERVICE] with these SLIs: [SLIS]. For each
(availability, latency p99, error rate) set a
target, a 28-day error budget, and
multi-window burn-rate alerts (fast 1h + slow
6h) so paging fires only on real budget burn.
Output: SLI | SLO target | Alert threshold |
PromQL expression. Note what should page vs

ticket.
8

10/12

9/10 DevOps

Prompt 2

Review these Kubernetes manifests:
[MANIFESTS]. Check for missing resource
requests/limits, absent
liveness/readiness/startup probes (liveness
restarts, readiness gates traffic, startup covers
slow boot), no securityContext
(runAsNonRoot, readOnlyRootFilesystem),
and missing PodDisruptionBudget. Output:
Issue | Severity | Fixed YAML snippet.

Prompt 4

Review this Terraform for correctness, drift,
and security: [TERRAFORM]. Flag hardcoded
secrets, unpinned providers/modules, missing
remote state + locking, public exposure (open
SGs, public buckets), and no encryption. Map
findings to what TFLint, Checkov/Trivy, or an
OPA policy would catch. Output: Resource |
Risk | Severity | Fix (HCL). End with the plan
ou'd expect.
yi P @

Prompt 6

Write an incident runbook for failure mode
[FAILURE] on service [SERVICE]. Structure
it: Symptoms & alerts | Impact/blast radius |
Diagnosis (exact commands + dashboards) |
Mitigation (rollback or feature-flag kill) |
Escalation & on-call | Verification. Add a
zero-downtime rollback (blue-green switch or
canary halt). Keep every step copy-pasteable

NY
```

## Source
- **Drive file:** [ Screenshot 2026-07-04 at 2.20.21 AM.png ](https://drive.google.com/file/d/1KjfsdSGY5qBJ0sDptUgVPq4tao8m7vJN/view)
- **Captured:** 2026-07-04
- **Tags:** #devops #prompts #docker #kubernetes #terraform #ci-cd #slo #incident-response #security #observability
