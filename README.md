# BubbleCorp - SAP Financial Services Website

A modern, responsive static website for BubbleCorp offering professional SAP Group Reporting services. Built with Astro, React islands, and deployed to GitHub Pages.

## 🚀 Features

- **Modern Design**: Vibrant color scheme with gradients and smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices (320px - 1440px+)
- **Smooth Animations**: Moderate scroll animations, fade-ins, and page transitions
- **Contact Form**: Integrated contact form with Formspree for email notifications
- **Static & Fast**: Pure static HTML output with optimal performance (Lighthouse >90)
- **SEO Optimized**: Meta tags, sitemaps, robots.txt, and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

## 📋 Pages

- **Home** (`/`) - Hero section, features, services preview, CTA
- **About** (`/about`) - Company overview, mission, team, statistics
- **Services** (`/services`) - Detailed service descriptions, process, approach
- **Contact** (`/contact`) - Contact form, business information, FAQ

## 🛠 Tech Stack

- **Framework**: [Astro 4.x](https://astro.build)
- **Interactivity**: [React 18.x](https://react.dev) (islands only)
- **Styling**: CSS3 with custom properties and design tokens
- **Forms**: [Formspree](https://formspree.io) (configurable to EmailJS)
- **Deployment**: [GitHub Pages](https://pages.github.com) + [GitHub Actions](https://github.com/features/actions)
- **Package Manager**: npm/pnpm

## 📦 Installation

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org))
- npm or pnpm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/BubblesCorpDemo.git
cd BubblesCorpDemo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if using external form service):
```bash
# Create a .env file in the root directory
# FORMSPREE_FORM_ID=your_form_id_here
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the website.

The site will hot-reload as you make changes.

## 🔨 Build

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📝 Code Quality

Format code with Prettier:
```bash
npm run format
```

Run ESLint to check code quality:
```bash
npm run lint
```

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. Update `astro.config.mjs`:
```javascript
// Change this:
site: 'https://yourgithubusername.github.io'
base: '/BubblesCorpDemo'  // Only if repo is not your-username.github.io
```

2. Configure GitHub repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)

3. Enable GitHub Actions:
   - Ensure GitHub Actions is enabled in your repository

### Auto Deployment

Once configured, the site automatically deploys when you push to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build the Astro site
3. Deploy to the `gh-pages` branch
4. Site goes live at: `https://yourgithubusername.github.io/BubblesCorpDemo`

## 📧 Configure Contact Form

The website uses Formspree for contact form submissions. To configure:

1. Visit [Formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form ID
4. Update `src/components/ContactForm.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the code
});
```

Or use environment variables:
```javascript
const FORMSPREE_ID = import.meta.env.FORMSPREE_FORM_ID;
```

## 🎨 Customization

### Colors & Design Tokens

Edit `src/styles/globals.css` to customize:
- Color palette
- Typography
- Spacing
- Animations
- Border radius

Example:
```css
:root {
  --color-primary: #6366f1;        /* Change primary color */
  --color-accent: #ec4899;         /* Change accent color */
  --animation-duration-base: 0.3s; /* Adjust animation speed */
}
```

### Content

Update content in respective pages:
- `src/pages/index.astro` - Home page
- `src/pages/about.astro` - About page
- `src/pages/services.astro` - Services page
- `src/pages/contact.astro` - Contact page

### Components

Reusable components are in `src/components/`:
- `Navbar.astro` - Navigation bar
- `Footer.astro` - Footer
- `HeroSection.astro` - Hero banner
- `Card.astro` - Card container
- `Button.astro` - Button component
- `ServiceCard.astro` - Service card
- `ContactForm.jsx` - React contact form

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Form validation and error messages

## 📊 Performance

Target metrics:
- **Lighthouse Score**: ≥90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Page Bundle Size**: <50KB per page

Run Lighthouse audit:
```bash
npm run build
npm run preview
# Then open DevTools → Lighthouse
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build errors
```bash
# Clear build cache
rm -rf .astro dist

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

### Form submissions not working
- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure honeypot field is hidden (CSS `display: none`)

### GitHub Pages not updating
- Verify `gh-pages` branch exists in repository
- Check GitHub Actions workflow logs
- Ensure `base` path in `astro.config.mjs` matches repository name

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Integrations](https://astro.build/integrations)
- [React Documentation](https://react.dev)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Formspree Docs](https://formspree.io/docs)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Support

For questions or issues:
1. Check [GitHub Issues](https://github.com/yourusername/BubblesCorpDemo/issues)
2. Open a new issue with details
3. Contact support@bubblecorp.com

## 🔄 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Case studies page
- [ ] Multi-language support (i18n)
- [ ] Analytics integration
- [ ] API integration for dynamic data
- [ ] CMS integration (Contentful, Sanity)

---

**Last Updated**: May 18, 2026

**Status**: ✅ Ready for deployment

**Live Site**: https://yourgithubusername.github.io/BubblesCorpDemo
