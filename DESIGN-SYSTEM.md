# Design System
## Student Portfolio & Academic Management Website

A design system built around one idea: this should feel like a calm, credible academic workspace, not a flashy landing page, so the palette leans navy-and-warm-neutral, and the type pairing leans editorial-serif-meets-clean-sans.

---

## 1. Colour System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#1E3A5F` (Deep Academic Navy) | Header, nav background, primary buttons, headings |
| `--color-primary-dark` | `#122A45` | Hover states, footer background |
| `--color-primary-light` | `#3D5A80` | Secondary accents, links |
| `--color-accent` | `#D9A441` (Warm Gold) | CTAs, highlights, active states, badges |
| `--color-accent-dark` | `#B8862F` | Accent hover state |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FAF9F6` (Warm Off-White) | Page background |
| `--color-surface` | `#FFFFFF` | Cards, form fields |
| `--color-border` | `#E2E0DA` | Dividers, card borders |
| `--color-text-primary` | `#1F2933` (Charcoal) | Body text, headings |
| `--color-text-secondary` | `#5C6670` | Captions, meta text |
| `--color-text-muted` | `#8A939C` | Placeholder text, disabled states |

### Semantic Colours

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#2F8F5B` | Completed tasks, valid form fields |
| `--color-error` | `#C1443C` | Validation errors, delete buttons |
| `--color-warning` | `#D9A441` | Due-soon planner items |

### Usage Notes
- Navy carries authority and structure — reserve it for nav, headers, and primary actions
- Gold is used sparingly, as an accent only, never as a large fill (avoid it competing with navy for attention)
- Off-white background instead of pure white keeps the site feeling warm rather than clinical
- All text/background pairings above meet WCAG AA contrast at body-text size

---

## 2. Typography

### Font Pairing
- **Headings:** `"Lora", Georgia, serif` — an editorial serif that reads as academic and personal without feeling old-fashioned
- **Body & UI:** `"Inter", -apple-system, Segoe UI, sans-serif` — clean, highly legible at small sizes, ideal for forms, nav, and planner UI

Both are free on Google Fonts.

### Type Scale

| Token | Size (desktop) | Size (mobile) | Weight | Font |
|---|---|---|---|---|
| `--text-h1` | 48px | 32px | 600 | Lora |
| `--text-h2` | 36px | 28px | 600 | Lora |
| `--text-h3` | 24px | 20px | 600 | Lora |
| `--text-body-lg` | 18px | 16px | 400 | Inter |
| `--text-body` | 16px | 15px | 400 | Inter |
| `--text-small` | 14px | 13px | 400 | Inter |
| `--text-caption` | 12px | 12px | 500 | Inter |

- Line height: 1.5 for body text, 1.2 for headings
- Letter spacing: default for body, `0.02em` on all-caps nav labels and buttons

---

## 3. Spacing Scale

8px base unit, used consistently across margins, padding, and gaps:

`4px · 8px · 16px · 24px · 32px · 48px · 64px · 96px`

---

## 4. Component Styling Notes

**Buttons**
- Primary: navy fill, white text, gold on hover, 8px border-radius
- Secondary: transparent fill, navy border and text, navy fill on hover
- All buttons: subtle `transform: translateY(-2px)` + shadow lift transition on hover (150ms ease)

**Cards** (Projects, Skills)
- White surface, `--color-border` 1px border, 12px border-radius, soft shadow (`0 2px 8px rgba(0,0,0,0.06)`)
- Hover: shadow deepens, slight lift

**Nav**
- Sticky navy header, gold underline on active/hover link
- Collapses to hamburger below 768px, slide-in panel from the right

**Planner Task Items**
- Card-style row, checkbox on the left, gold-accented when due soon, green strikethrough text when complete, red delete icon on the right revealed on hover (or always visible on mobile)

**Form Fields**
- White background, `--color-border` outline, navy outline on focus, red outline + inline message on validation error, green check icon on valid field

---

## 5. Breakpoints

| Name | Range |
|---|---|
| Mobile | < 480px |
| Tablet | 481px – 768px |
| Desktop | > 768px |

---

## 6. Tone & Imagery

- Photography/screenshots: warm, natural lighting, avoid harsh stock-photo aesthetics
- Icons: single-weight line icons (Lucide or Feather work well) in navy or gold, never mixed icon styles
- Motion: subtle only — fades and lifts, nothing bouncy or attention-grabbing, this is an academic site, not a game
