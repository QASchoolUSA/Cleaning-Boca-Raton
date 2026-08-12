# Cleaning Boca Raton — Design System (Palm Atlantic)

## Pattern
Brand-first full-bleed hero. Instant pricing calculator sits in a band below the fold.

## Style
Palm Atlantic — bright coastal Mediterranean-modern. Distinct from Sanford (blue cards) and Windermere (dark estate navy).

## Colors

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Ink / Primary | `#0B3D4A` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Sea glass | `#2A9D8F` | `--color-secondary` |
| Coral CTA | `#E07A5F` | `--color-accent` / `--color-coral` |
| Porcelain | `#F7F9F8` | `--color-background` |
| Mist | `#DCE8E6` | `--color-mist` |
| Champagne | `#C4A574` | `--color-highlight` |
| Foreground | `#0B3D4A` | `--color-foreground` |
| Muted | `#5A7278` | `--color-muted` |
| Border | `#C5D5D2` | `--color-border` |

## Typography
- **Display:** Playfair Display (headings, brand)
- **Body / UI:** Source Sans 3

## Layout principles
- Full-bleed hero image as the first viewport plane
- Brand name as the hero-level signal
- Hero: brand + one headline + one short sentence + CTA group + dominant image
- Calculator below the fold in Instant Pricing band
- No cards in the hero
- Soft mist section bands; coral for primary CTAs only
- Intentional motion: hero fade/rise, section reveal, CTA hover (150–300ms)
- `prefers-reduced-motion` respected

## Anti-patterns
- Sanford-style centered blue hero with embedded calculator
- Purple / pink AI luxury gradients
- Cream + terracotta AI cluster
- Emoji as icons
- Cards cluttering the first viewport
