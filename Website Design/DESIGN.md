---
name: Reliable Flow
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The brand personality for this design system is built on the pillars of **reliability, transparency, and technical precision**. As a service-based business, the UI must immediately instill confidence in the homeowner or property manager. The emotional response should be one of relief and assurance—communicating that the problem will be solved efficiently by experts.

The design style follows a **Corporate / Modern** aesthetic. It prioritizes clarity and functional hierarchy over decorative elements. By utilizing a "High-Trust" layout, the system uses generous whitespace to prevent the user from feeling overwhelmed during a plumbing emergency, while structured modules communicate a sense of organized professionalism.

## Colors

The color palette is anchored by **Deep Navy (#0F172A)**, representing stability and authority. This is contrasted with a **Cool White background** to ensure the interface feels sterile and clean—mirroring the quality of the physical work performed.

**Vibrant Orange (#F97316)** is reserved exclusively for primary Calls to Action (CTAs) and urgent status indicators (e.g., "Emergency Service Available"). This creates a high-contrast focal point against the deep blues. **Cyan (#0EA5E9)** acts as a secondary accent for highlighting features, icons, or links that require attention but do not carry the urgency of a conversion point. Grays are kept in the "cool" spectrum to maintain a modern, tech-forward feel.

## Typography

This design system utilizes **Inter** for all typographic needs. Chosen for its systematic and utilitarian nature, Inter provides exceptional legibility across both mobile and desktop environments. 

Headlines use a tighter letter-spacing and heavier weights to project strength. Body copy utilizes a generous line-height (1.6) to ensure that service descriptions and instructions are easy to digest. Small labels and categories use "Label-Caps" with increased tracking to create clear visual compartmentalization between different sections of a service page.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, ensuring content remains centered and readable on ultra-wide monitors. On mobile, the system transitions to a single-column layout with 16px side margins.

A strict **8px base unit** governs all spacing decisions. Component internal padding should follow this scale (8, 16, 24, 32). Large vertical gaps (80px to 120px) are used between major homepage sections—such as the transition from "Our Services" to "Testimonials"—to reinforce the clean, high-end positioning of the brand.

## Elevation & Depth

To maintain a "trustworthy" and "grounded" feel, this design system avoids aggressive shadows. Instead, it utilizes **Tonal Layering** and **Ambient Depth**.

1.  **Low Elevation:** Surface-on-surface containers use a subtle 1px border (#E2E8F0) with no shadow for standard sections.
2.  **Medium Elevation:** Active cards (like a hovered service card) use a soft, diffused shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.05)`.
3.  **High Elevation:** Overlays and modals use a more pronounced shadow with a slight blue tint to stay within the brand's color space, ensuring the element feels physically lifted above the page.

## Shapes

The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This strikes the perfect balance between the rigidity of industrial plumbing and the approachability of a friendly home service. 

- **Buttons & Inputs:** Use the base 8px radius.
- **Service Cards:** Use 16px (rounded-lg) to create a softer, more inviting container for imagery.
- **Icon Enclosures:** Use a "Squircle" or fully circular shape to differentiate functional icons from structural containers.

## Components

### Buttons
- **Primary:** Solid Orange (#F97316) with White text. Bold weight. Designed to be the most visible element on any screen.
- **Secondary:** Deep Navy (#0F172A) with White text for less urgent actions like "Learn More."
- **Ghost:** Transparent background with a Navy border for navigation or secondary filters.

### Service Cards
Cards feature a high-quality photo at the top, followed by an 8px radius container. They include a Cyan-tinted icon, an H3 headline, a short paragraph of body text, and a text-link with a right-arrow chevron.

### Contact Forms
Forms must feel "unbreakable." Use large input fields (minimum 48px height) with clear 1px Slate Gray borders. Focused states should use a 2px Cyan glow. Labels are always positioned above the field for accessibility.

### Testimonial Sections
Testimonials are styled as "Quotable Blocks." They utilize a light Cyan background (#F0F9FF) to set them apart from the main white flow, featuring the customer's name in bold and a 5-star rating visual using the accent Orange.

### Trust Bar
A horizontal strip below the hero section featuring grayscale logos of certifications, local associations, or "Years in Business" to provide immediate social proof.