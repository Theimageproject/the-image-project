# The Image Project — Angular Application

## Project Structure

```
src/
├── index.html                          ← App entry point
├── main.ts                             ← Angular bootstrap
├── styles.css                          ← ★ ALL global styles & design tokens
└── app/
    ├── app.module.ts                   ← Module: declares all components
    ├── app.component.ts                ← Root shell (nav + content + footer)
    │
    ├── services/
    │   └── scroll.service.ts           ← Smooth scroll-to-section logic
    │
    ├── directives/
    │   └── reveal.directive.ts         ← IntersectionObserver scroll reveal
    │
    └── components/
        ├── top-nav/
        │   ├── top-nav.component.ts    ← Nav state, scroll detection, links
        │   ├── top-nav.component.html  ← Nav markup + mobile menu
        │   └── top-nav.component.css   ← Hamburger states only
        │
        ├── content/
        │   ├── content.component.ts    ← Services/steps/testimonials data
        │   ├── content.component.html  ← All 6 page sections
        │   └── content.component.css   ← (minimal — global handles sections)
        │
        └── footer/
            ├── footer.component.ts     ← Footer links + year
            ├── footer.component.html   ← Footer markup
            └── footer.component.css    ← (minimal — global handles footer)
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
ng serve

# 3. Open browser
# http://localhost:4200
```

## Key Design Decisions

### Styles Architecture
- **All CSS class names are global** in `src/styles.css`
- Component `.css` files hold only isolated overrides (hamburger states, etc.)
- No ViewEncapsulation changes needed — global classes are accessible everywhere
- CSS custom properties (`--accent`, `--cream`, etc.) power the entire theme

### Scroll-to-Section (Nav Feature)
- `ScrollService.scrollToSection(id)` is the single source of truth
- Accounts for fixed navbar height (80px offset)
- Called from `TopNavComponent`, `ContentComponent` (service links), and `FooterComponent`
- Every nav link maps `label → sectionId` matching the HTML `id` attributes

### Reveal Animations
- `[appReveal]` directive uses `IntersectionObserver` — no scroll listeners
- `[revealDelay]="1"` maps to `.reveal-delay-1` (stagger children)
- Auto-disconnects observer after element is visible (performance)

### Responsive Breakpoints
| Breakpoint        | Behaviour                              |
|-------------------|----------------------------------------|
| ≥ 1800px          | `--section-px: 160px` (ultra-wide)     |
| ≥ 1440px          | `--section-px: 120px` (large desktop)  |
| Default           | `--section-px: 80px`                   |
| ≤ 1100px (tablet) | 2-col grids, adjusted spacing          |
| ≤ 900px (mobile)  | Single column, hamburger menu          |
| ≤ 540px (sm)      | Further font/padding reductions        |

## Customisation

### Replace placeholder content
- **Founder name** → `content.component.html` → `.founder-tag-name`
- **Services** → `content.component.ts` → `services[]` array
- **Testimonials** → `content.component.ts` → `testimonials[]` array
- **CTA email** → `content.component.html` → `href="mailto:..."`

### Replace placeholder images
The `.hero-img-figure`, `.founder-img-placeholder` etc. are CSS silhouette
placeholders. Replace with:
```html
<img src="assets/founder.jpg" alt="Founder" class="founder-real-img" />
```

### Accent colour
Change `--accent: #AF848C` in `styles.css` `:root` to update every accent.
