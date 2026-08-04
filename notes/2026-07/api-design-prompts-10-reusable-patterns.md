---
id: note-api-design-prompts-10-reusable-patterns
title: "API Design Prompts — 10 Reusable Patterns"
slug: api-design-prompts-10-reusable-patterns
date_captured: 2026-07-04
category: software-architecture
tags:
  - api-design
  - prompts
  - rest
  - oauth2
  - rate-limiting
  - webhooks
  - pagination
  - idempotency
  - rfc-9457
  - security
entities:
  - REST
  - OAuth 2.0
  - RFC 9457
  - HMAC-SHA256
source_type: drive-image
drive_id: 1YTsLxlTIEkuIxhOUZ0Fg9BTyDlJ-sXzB
drive_name: "Screenshot 2026-07-04 at 2.20.08 AM.png"
drive_link: https://drive.google.com/file/d/1YTsLxlTIEkuIxhOUZ0Fg9BTyDlJ-sXzB/view
image_path: public/img/notes/2026-07/api-design-prompts-10-reusable-patterns.png
---

# API Design Prompts — 10 Reusable Patterns

![Infographic](public/img/notes/2026-07/api-design-prompts-10-reusable-patterns.png)

## Summary
A ten-prompt API design reference covering REST conventions, RFC 9457 problem details, cursor pagination, idempotency keys, OAuth2 and PKCE, rate limits, webhook signatures, retries, and backward-compatible contracts.

## Key points
- Idempotency pattern defines UUID keys, response caching, 24-hour TTLs, conflict behavior, and in-flight retries
- Security pattern covers OAuth2 flow selection, JWT claims and expiry, scopes, 429 responses, and jittered backoff
- Webhook and pagination patterns address stable event IDs, HMAC verification, replay protection, cursor consistency, and client loops

## Why I saved this
A compact contract-design checklist for APIs that agents and enterprise workflows can safely call and retry.

## OCR text

```text
RV API Design
Prompts

Prompt 1

Review [ENDPOINT] against REST
conventions. Check: noun-based resource
paths, correct verb + status code mapping,
consistent snake_case or camelCase,
pagination on list responses, and a versioning
strategy (URI /vi vs header). Output a table of
issue, why it matters, and the corrected
signature. Flag anything that breaks backward
compatibility.

. *

Prompt 3

Make [POST_ENDPOINT] idempotent.
Specify the Idempotency-Key header contract:
client generates a UUID, server caches the
response keyed on it with a 24h TTL, and
duplicate keys return the stored result without
re-running side effects. Define behavior on key
reuse with a different body (409) and on
in-flight retries. Return the request/response

flow.
@

Prompt 5

Design the auth and rate-limit layer for [API].
Pick an OAuth2 flow (client_credentials vs
authorization_code + PKCE) with reasoning,
JWT claims and expiry, and scope granularity.
Add rate limits returning 429 with Retry-After
plus X-RateLimit headers, and client-side
exponential backoff with jitter. Output the
headers and a limit table by tier.

9/12

8/10 API Design

Prompt 2

Design a machine-readable error taxonomy for
[API] using RFC 9457 problem+json. Give
8-10 error types with a stable type URI, title,
HTTP status, and detail. Mark each retryable
or not (4xx except 408/429 = no, 429 and 5xx
= yes). Include an example body and a rule for
when to expose internal detail vs redact it.

Prompt 4

Convert [LIST_ENDPOINT] from offset to
cursor pagination. Use an opaque cursor tied
to the last item so concurrent inserts don't skip
or duplicate rows. Return the response shape
(data, next_cursor, has_more), the query
change, page-size limits with a default, and
how the client loops until has_more is false.
Note the tradeoff vs random page jumps.

Prompt 6

Design webhooks for [EVENT_TYPE]. Cover:
event payload schema with a stable id and
type, HMAC-SHA256 signature header for
verification, a timestamp to reject replays, a
retry schedule with backoff, and consumer
idempotency on the event id. Specify what a
2xx vs non-2xx from the consumer means, and
how to expose a redelivery endpoint.

Q
```

## Source
- **Drive file:** [ Screenshot 2026-07-04 at 2.20.08 AM.png ](https://drive.google.com/file/d/1YTsLxlTIEkuIxhOUZ0Fg9BTyDlJ-sXzB/view)
- **Captured:** 2026-07-04
- **Tags:** #api-design #prompts #rest #oauth2 #rate-limiting #webhooks #pagination #idempotency #rfc-9457 #security
