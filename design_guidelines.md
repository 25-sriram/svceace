# Design Guidelines: Engineers Without Borders College Club Website

## Design Approach

**Selected Approach:** Hybrid Reference + Material Design System

Drawing inspiration from modern educational and non-profit organizations (Khan Academy, charity:water, educational institutions) combined with Material Design principles for clean, accessible components. The design emphasizes community, impact, and accessibility while maintaining a professional yet welcoming college club aesthetic.

**Core Principles:**
- Welcoming and inclusive visual language
- Clear hierarchy emphasizing mission and community
- Professional credibility balanced with youthful energy
- Accessible, mobile-first responsive design

## Color Palette

**Primary Colors:**
- Primary Blue: 210 75% 45% (trust, education, engineering)
- Primary Dark: 210 75% 35% (headers, emphasis)

**Accent Colors:**
- Accent Teal: 175 65% 50% (call-to-action, highlights)
- Warm Orange: 25 85% 60% (events, engagement elements)

**Neutrals:**
- Background White: 0 0% 100%
- Light Gray: 220 15% 96% (section backgrounds)
- Medium Gray: 220 10% 65% (secondary text)
- Dark Text: 220 20% 20% (primary text)

**Semantic Colors:**
- Success: 145 65% 45%
- Error: 0 70% 55%

## Typography

**Font Families:**
- Primary: 'Poppins' (headings, navigation, emphasis)
- Secondary: 'Inter' or system-ui (body text, optimal readability)

**Type Scale:**
- Hero Headline: 3rem/3.5rem (mobile: 2rem), weight 700
- Section Headings: 2.5rem (mobile: 1.75rem), weight 600
- Subsection Headings: 1.75rem, weight 600
- Card Titles: 1.25rem, weight 600
- Body Text: 1rem, weight 400, line-height 1.6
- Small Text: 0.875rem, weight 400

## Layout System

**Spacing Primitives:**
- Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Consistent section padding: py-16 md:py-24 (top/bottom)
- Container max-width: max-w-7xl with px-4 md:px-8

**Grid System:**
- Team Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4, gap-8
- Events: grid-cols-1 md:grid-cols-3, gap-6
- Gallery: grid-cols-2 md:grid-cols-3, gap-4

## Component Library

### Navigation Bar
- Sticky positioning (sticky top-0 z-50)
- Background: white with subtle shadow (shadow-md)
- Height: 64px-72px
- Logo/Club name on left, nav links on right
- Mobile: Hamburger menu with slide-in drawer
- Active section indicator with teal underline

### Hero Section (Home)
- Full-width auto-sliding carousel with 3 images
- Height: 60vh-70vh
- Overlay gradient: linear gradient from 210 50% 15% / 0.7 to transparent
- Headline centered over carousel in white text
- Navigation dots at bottom center
- Transition: smooth 500ms fade

### Section Structure
- Alternating backgrounds: white and light gray (220 15% 96%)
- Section headings: centered, teal accent underline (w-20, h-1, mx-auto, mb-8)
- Max-width containers with generous whitespace

### Team Member Cards
- Round profile images (w-32 h-32, border-4 border-white, shadow-lg)
- White background cards with subtle shadow
- Centered layout: image → name → role
- Hover: lift effect (translateY -4px, enhanced shadow)
- Padding: p-6, rounded-xl

### Event Cards
- White background, shadow-md, rounded-lg
- Date badge in top-right corner (orange background)
- Title (1.25rem, weight 600)
- Description text (gray, 0.875rem)
- Hover: shadow-xl transition

### Gallery Grid
- Responsive image grid with aspect-ratio-square
- Rounded corners (rounded-lg)
- Hover: scale 1.05, overlay with view icon
- Lightbox modal on click (fullscreen view)

### Contact Form
- Two-column layout on desktop (form + contact info)
- Input fields: border-2, rounded-lg, focus:border-teal
- Labels: weight 500, small text above inputs
- Submit button: teal background, white text, rounded-lg, px-8 py-3
- Form validation with inline error messages

### Buttons
- Primary: teal background (175 65% 50%), white text, rounded-lg, px-6 py-3
- On images: backdrop-blur-md, white border, white text
- Hover: brightness increase, no active state needed

## Images

**Hero Carousel Images (3):**
1. Students collaborating on engineering project (workshop/lab setting)
2. Community impact scene (field work, building, helping communities)
3. Team group photo at event/conference

**Team Member Photos:**
- Professional headshots on neutral backgrounds
- Consistent lighting and framing
- 400x400px minimum resolution

**Gallery Images (6):**
- Mix of project work, team events, community impact
- Candid and action shots preferred
- High-quality, well-lit photographs
- Varied compositions for visual interest

## Interaction Design

**Smooth Scrolling:**
- scroll-behavior: smooth on all navigation links
- Offset for sticky nav height

**Animations:**
- Subtle fade-in on scroll (Intersection Observer)
- Carousel auto-advance every 3 seconds with pause on hover
- Card hover effects (transform, shadow)
- Form submission loading state

**Responsive Breakpoints:**
- Mobile: < 768px (stack all grids, hamburger nav)
- Tablet: 768px-1024px (2-column layouts)
- Desktop: > 1024px (full grid layouts)

## Accessibility

- WCAG AA color contrast ratios
- Keyboard navigation for carousel and forms
- Focus states with visible outline (teal, 2px)
- Alt text for all images
- Semantic HTML structure (header, nav, main, section, footer)
- Form labels properly associated with inputs

This design creates a professional, welcoming digital presence that reflects the club's mission of sustainable engineering solutions while maintaining the energy and accessibility expected by college students.