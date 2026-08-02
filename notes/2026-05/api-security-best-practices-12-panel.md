---
id: note-api-security-best-practices-12-panel
title: "API Security Best Practices (12-Panel Reference)"
slug: api-security-best-practices-12-panel
date_captured: 2026-05-08
category: security
tags: [api-security, oauth2, rate-limiting, webauthn, owasp, api-gateway, authentication, input-validation]
source_type: drive-image
drive_id: 19URJDu1AAFfqvtLePtWlBwV_9mQ0jIH4
drive_name: "Screenshot 2026-05-08 at 8.00.30 PM.png"
drive_link: https://drive.google.com/file/d/19URJDu1AAFfqvtLePtWlBwV_9mQ0jIH4/view
image_path: public/img/notes/2026-05/api-security-best-practices-12-panel.png
---

# API Security Best Practices (12-Panel Reference)

![Infographic](public/img/notes/2026-05/api-security-best-practices-12-panel.png)

## Summary
A 12-panel API security reference covering: API Gateway as the single entry point to services; input validation before requests reach business logic; error handling that avoids leaking stack traces while staying empathetic in messaging; IP/user-based allowlisting; strict API versioning (`/v1/users/123` over unversioned paths); leveled API keys with HMAC-signed client-server exchange; HTTPS with public-key/session-key/encrypted-data flow; rate limiting rules by IP, user, and action group; authorization as a separate concern from authentication ('can view' vs 'cannot modify'); WebAuthn for external authenticator-based login; OAuth2's 3-step resource-owner/authorization-server/resource-server flow; and a final checklist to verify against the OWASP API Security Top 10.

## Key points
- Treats authentication (WebAuthn/OAuth2) and authorization (can view vs. cannot modify) as explicitly separate controls
- Recommends leveled/scoped API keys with HMAC signatures rather than flat static keys
- Error handling principle: be empathetic in user-facing messages, never expose internal stack traces or fix inaccurate codes silently
- Rate limiting should key on IP, user, action-group, not a single global threshold
- Closes with an explicit OWASP API Security Top 10 checklist as the final gate

## Entities & tools mentioned
Sandeep Bonagiri, OWASP, OAuth2, WebAuthn

## Why I saved this
A tight checklist for reviewing internal AI-service API layers before they touch Bechtel's FedRAMP/GCCH boundary — especially the authorization/authentication split and OWASP Top 10 sign-off gate.

## Source
- **Drive file:** [Screenshot 2026-05-08 at 8.00.30 PM.png](https://drive.google.com/file/d/19URJDu1AAFfqvtLePtWlBwV_9mQ0jIH4/view)
- **Captured:** 2026-05-08
- **Tags:** #api-security #oauth2 #rate-limiting #webauthn #owasp #api-gateway #authentication #input-validation
