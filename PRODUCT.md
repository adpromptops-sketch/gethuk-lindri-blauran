# Gethuk Lindri Blauran | Product Truth
Status: approved design direction, 2026-10-17

## Purpose
A mobile-first, visually distinctive storefront for Gethuk Lindri Blauran, focused on product discovery, clear package selection, and simple ordering.

## Audience
Customers discovering Indonesian traditional snacks, primarily on phones.

## Known product information
- Gethuk lindri with Coklat and Susu variants.
- Demonstration prices only: Satuan Rp3.000/pcs, Box 6 Rp18.000, Box 12 Rp36.000.
- No verified business address, seller WhatsApp number, operating hours, or production claims. Never invent them.

## Customer journey
Discover > inspect product > choose package and quantity > optional notes > add to cart > review > copy order for WhatsApp. Direct WhatsApp checkout stays disabled until an authorized business number is supplied.

## Experience principles
- Show food clearly before decoration.
- Accurate pricing, quantity, and order feedback.
- Distinguish preview/demo behavior from actual orders.
- Accessible keyboard controls, sufficient contrast, reduced-motion fallback.
- Mobile-first and fast-loading.

## Delivery constraints
- Feature branch only; small commits; CI lint/test/build; Draft PR review; preview deployment; merge only after approval.
- No secrets in frontend; escape untrusted text; validate input on server when backend is added.
- Impeccable is a design quality aid, not a security scanner.
