# Release readiness | Gethuk Lindri Blauran

Status: **PREVIEW / DRAFT**, not approved for production.

## Automated checks
- [x] Build copies HTML, CSS and SVG assets into dist.
- [x] Browser smoke suite covers desktop (1440), tablet (768), mobile (390), narrow mobile (320).
- [x] Browser smoke suite checks horizontal overflow, catalog count, touch CTA and Box 6 order totals.
- [x] Screenshots from Chromium are saved as GitHub Actions artifacts for manual review.
- [x] 3D render loop pauses offscreen and honors reduced-motion preferences.

## Required before production
- [ ] Human review of the captured screenshots and real-device testing, including browser zoom and touch.
- [ ] Consolidate legacy cascade overrides for hero, story and catalog **with pixel-level regression comparisons**. Do not move CSS declarations blindly because this changes cascade order.
- [ ] Confirm genuine product photography, business story, address, operating hours and availability.
- [ ] Confirm final prices and business WhatsApp number, then implement and verify real order handoff.
- [ ] Review accessibility: keyboard modal focus trap, screen-reader dialog state and color contrast.
- [ ] Performance budget / Lighthouse on a real network and midrange Android device.
- [ ] Product-owner sign-off, then PR review and release decision. Do not merge main without approval.

Current checkout only generates a DEMO order summary for manual copying. It does not submit an order.
