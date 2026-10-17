# Design System | MASTER v5.0
Source of truth for styling changes. If a change conflicts with this file, propose an update before implementation.

## Identity
**Majapahit Golden Hour (70%) + Batik Nusantara Contemporary (30%)**.
Warm, tactile, rooted in Javanese heritage, modern and easy to order.

## Color tokens
| Token | Hex | Use |
| --- | --- | --- |
| sunset-gold | #F4C76B | Hero light |
| warm-cream | #F5DEB5 | Warm background |
| paper | #FFF4DF | Product catalog |
| terracotta | #A85C30 | Accent/interactive |
| heritage-brown | #58301D | Text/buttons |
| mahogany | #27150F | Dark surfaces |
| antique-gold | #C49A55 | Lines and fine ornament |
| batik-maroon | #95192A | Story accents |
| ivory | #FFF9EC | Product card |

Color tokens are visual references, not automatic WCAG approval. Verify actual text contrast.

## Typography
Use an editorial serif for expressive headlines and a legible sans-serif for body, prices and controls. Limit to two font families; verify loading and Indonesian glyph support. Avoid unapproved font substitutions.

## Layout
Mobile first. Clear visual hierarchy, breathing room around food imagery, 44px minimum touch targets where practical. Avoid nested cards, decorative clutter and horizontal scrolling.

## Section contract
1. Hero: bright cinematic sunset and temple silhouette.
2. Catalog: calm cream editorial commerce.
3. Story: dark maroon batik art, distinct from hero.
4. Cart/checkout: functional, high contrast and restrained.
5. Footer: subtle heritage finishing detail.

## Motion
Hover and modal transitions communicate focus, not spectacle. Reduced-motion users receive equivalent static state. Keep keyboard focus visible.

## Components
Product card, modal, quantity stepper, cart drawer, review summary, feedback toast. Every component needs default, focus, active, disabled/error where applicable, and mobile states.

## Guardrails
Do not invent prices as confirmed, store information, testimonials or WhatsApp number. Do not mark a copied order as placed. Avoid repeated section art, generic AI-style star decoration, inaccessible motion and decorative text over food.

## Governance
Changes: design proposal > feature branch > focused commits > tests and browser inspection > Impeccable review > Draft PR > preview > approval. Update PRODUCT.md for product truth, DESIGN.md for direction, and this file for tokens/components. No direct main edits.
