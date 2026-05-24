# AGENTS.md - BubbleCorp SAP Financial Services Website

## Project Overview
A modern, static financial services website for BubbleCorp offering SAP Group Reporting services. Built with Astro and React islands, deployed to GitHub Pages.

**Live Site**: `https://yourgithubusername.github.io/BubblesCorpDemo`
**Repository**: `BubblesCorpDemo`
**Status**: Under development (as of May 2026)

---

## Tech Stack

### Core Framework
- **Astro 6.x+** — Static site generator, partial hydration with React islands
- **React 18.x** — Used for interactive components (ContactForm, AnimatedCard, AnimatedHeroSection, AnimatedSection, AnimatedStats) via Astro `client:load` directive
- **Node.js 26.x+** — Runtime for build and development

### Styling & Design
- **CSS3** (custom properties/CSS variables for theming)
- **Tailwind CSS v4** (integrated via `@astrojs/tailwind` + `@tailwindcss/vite` plugin)
- **CSS Modules** (component-scoped styles for isolation)

**Design System**:
- **Color Palette**: Modern/vibrant with gradients and bold accent colors
- **Animation**: Moderate (scroll animations via framer-motion, page transitions, hover effects)
- **Typography**: Clean, modern sans-serif (e.g., Inter, Poppins)
- **Breakpoints**: 320px (mobile), 768px (tablet), 1024px+ (desktop)

### Animation Library
- **framer-motion 11.x** — React animation library for scroll-triggered animations, entrance effects, and interactive transitions

### Deployment & Hosting
- **GitHub Pages** — Static hosting, free, auto-deployed via GitHub Actions
- **GitHub Actions** — CI/CD pipeline (build and deploy on push to `main`)
- **Base URL**: `https://yourgithubusername.github.io/BubblesCorpDemo/`

### Form & Data Collection
- **Formspree** (recommended) or **EmailJS** — Client-side form submission to email
- **Email Endpoint**: [Configure during setup]
- **Fields**: Name, Email, Phone Number
- **Validation**: Required fields, email format, phone format

### Development Tools
- **npm** — Package manager
- **ESLint** — Linting and code quality
- **Prettier** — Code formatting
- **Astro CLI** — Local dev server (`npm run dev`), build (`npm run build`)

### Optional Enhancements
- **Google Analytics** (optional) — Visitor tracking
- **Lighthouse** — Performance audits (target: >90 score)
- **axe DevTools** — Accessibility audits

---

## Project Structure

```
BubblesCorpDemo/
├── .github/workflows/
│   └── deploy.yml                 # GitHub Actions deployment
├── src/
│   ├── pages/
│   │   ├── index.astro            # Home page
│   │   ├── about.astro            # About Us page
│   │   ├── services.astro         # Services page
│   │   ├── contact.astro          # Contact page
│   │   └── 404.astro              # Not found page
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ContactForm.tsx        # React island (client:load)
│   │   ├── AnimatedCard.tsx       # React animated card component
│   │   ├── AnimatedHeroSection.tsx # React animated hero section
│   │   ├── AnimatedSection.tsx    # React animated section wrapper
│   │   ├── AnimatedStats.tsx      # React animated statistics display
│   │   ├── HeroSection.astro
│   │   ├── ServiceCard.astro
│   │   ├── Button.astro
│   │   └── Card.astro
│   ├── layouts/
│   │   └── MainLayout.astro       # Shared layout wrapper
│   ├── styles/
│   │   ├── globals.css            # Global styles, CSS variables, animations
│   │   └── global.css             # Additional global styles
│   └── assets/
│       ├── images/                # (to be populated)
│       ├── icons/                 # (to be populated)
│       └── fonts/                 # (to be populated)
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs               # Astro configuration for GitHub Pages
├── tsconfig.json                  # TypeScript config
├── .eslintrc.json                 # ESLint config
├── .prettierrc.json               # Prettier config
├── package.json
└── README.md
```

---

## Core Guidelines for Future Implementations

### 1. **Astro Component Best Practices**
- **Static-first**: Write `.astro` components by default (HTML, CSS, no JavaScript overhead)
- **React Islands**: Use React (`.tsx`) **only** for interactive features (forms, animations, modals, carousels)
- **Client Directives**: Mark React components with appropriate Astro directives:
  - `client:load` — Load immediately (for ContactForm and animated components)
  - `client:idle` — Load when browser is idle
  - `client:visible` — Load when component enters viewport
  - `client:media` — Load based on media query
- **Props Pattern**: Pass data to components via props; use TypeScript interfaces for type safety

### 2. **Styling Standards**
- **Design Tokens**: All colors, spacing, fonts defined in `src/styles/globals.css` as CSS custom properties
  ```css
  :root {
    --color-primary: #6366f1;
    --color-accent: #ec4899;
    --color-bg: #0f172a;
    --color-text: #f1f5f9;
    --spacing-unit: 1rem;
    --font-sans: 'Inter', system-ui, sans-serif;
    --animation-duration: 0.3s;
    --animation-timing: cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```
- **Component Isolation**: Use scoped `<style>` blocks for component styles
- **Responsive Design**: Mobile-first approach; use CSS media queries or Tailwind breakpoints
- **Animations**: Use framer-motion for React component animations; use CSS transitions for Astro component hover states; prefer GPU-accelerated properties (`opacity`, `transform`, `scale`)

### 3. **Page & Content Management**
- **Content Structure**: Keep content separate from presentation; use YAML frontmatter or data files for reusable content
- **SEO**: Every page must have:
  - Meta description (150-160 chars)
  - Canonical URL
  - Open Graph tags (title, description, image)
  - Heading hierarchy (H1 → H2/H3, no skipping levels)
- **Accessibility**: 
  - WCAG 2.1 AA compliance
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`)
  - ARIA labels where needed
  - Keyboard navigation support
  - Alt text for all images
  - Respect `prefers-reduced-motion` for animation components

### 4. **Contact Form Standards**
- **Service Integration**: Use Formspree (free tier, email-based) or EmailJS (client-side, more control)
- **Form Flow**:
  1. Validate on client (email format, required fields)
  2. Submit via POST to Formspree/EmailJS endpoint
  3. Handle success (redirect, success message) or error (display error message)
- **Spam Prevention**: Include honeypot field (hidden `<input>` that users shouldn't fill)
- **User Experience**: 
  - Show loading state during submission
  - Clear success/error feedback
  - Prevent double-submit (disable button during submission)

### 5. **Deployment & CI/CD**
- **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
  - Trigger on push to `main` branch
  - Install dependencies (`npm ci`)
  - Build Astro project (`npm run build`)
  - Deploy to `gh-pages` branch
- **Build Output**: Astro generates static HTML/CSS/JS in `dist/` folder; no server runtime needed
- **Environment Variables**: Store sensitive data (API keys, email endpoints) in GitHub Secrets, reference via `import.meta.env` at build time

### 6. **Performance Targets**
- **Lighthouse Score**: ≥90 on Home, About, Services pages
- **Core Web Vitals**: 
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1
- **Bundle Size**: Keep individual page bundles <50KB (JS + CSS)
- **Image Optimization**: Use `.webp` format, lazy loading for below-fold images, responsive images with `srcset`

### 7. **Future Feature Expansion**
- **Blog/Case Studies**: Add `src/pages/blog/` directory with `.md` or `.mdx` files
- **Internationalization**: Use Astro i18n routing for multi-language support
- **CMS Integration**: Connect to Contentful, Sanity, or Astro DB for dynamic content (while keeping static export)
- **E-commerce** (if needed): Integrate Stripe or Shopify for services purchase flow
- **Analytics**: Add Google Analytics or Vercel Analytics tracking script to MainLayout

### 8. **Code Quality & Maintenance**
- **Linting**: Run `npm run lint` before commits (ESLint checks TypeScript, Astro files)
- **Formatting**: Auto-format code with Prettier (`npm run format`)
- **Testing** (optional): Use Vitest for component unit tests, Playwright for E2E
- **Git Workflow**: Feature branches, PR reviews, merge to `main` for auto-deployment
- **Documentation**: Inline comments for complex logic; maintain README with setup/build instructions

### 9. **Browser & Device Support**
- **Target Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Device Testing**: Verify at 320px, 768px, 1024px, 1440px breakpoints
- **Touch Optimization**: Ensure buttons ≥44px for mobile, proper spacing for touch targets

### 10. **Security & Best Practices**
- **Secure Form Submission**: Use HTTPS only (GitHub Pages enforces this)
- **No Client Secrets**: Never hardcode API keys in client-side code; use build-time environment variables
- **Content Security Policy** (optional): Add CSP headers for protection against XSS
- **Robots.txt & Sitemap**: Keep updated in `public/` folder for SEO

---

## Tech Stack Summary Table

| Category | Tool/Library | Version | Purpose |
|----------|-------------|---------|---------|
| Framework | Astro | 6.x+ | Static site generator |
| Interactivity | React + framer-motion | 18.x, 11.x | Interactive components, scroll animations |
| Styling | CSS3 + Tailwind v4 | latest | Theming and component styles |
| Deployment | GitHub Pages + Actions | — | Hosting and CI/CD |
| Forms | Formspree/EmailJS | — | Contact form handling |
| Dev Tools | ESLint, Prettier | latest | Code quality and formatting |
| Package Manager | npm | latest | Dependency management |

---

## Quick Start Commands

```bash
# Prerequisites: Install Node.js 18+ and npm

# Installation
npm install

# Development
npm run dev          # Start local dev server (http://localhost:4321)
npm run lint         # Check code quality
npm run format       # Auto-format code

# Production
npm run build        # Generate static site in dist/
npm run preview      # Preview production build locally

# Deployment
# Auto-deploys to GitHub Pages on push to main branch via GitHub Actions
```

---

## Contact & Future Updates

- **Last Updated**: May 24, 2026
- **Project Lead**: BubbleCorp Development Team
- **Questions/Issues**: Create GitHub Issues in the repository
