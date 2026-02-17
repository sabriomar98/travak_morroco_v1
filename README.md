# Travel Morocco - Premium Travel Agency Website

A production-ready, premium travel agency website built with Next.js 15, TypeScript, and Tailwind CSS. Features multi-language support (French/English), SEO optimization, and accessible design.

## 🌟 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** with strict mode
- ✅ **Tailwind CSS** for styling
- ✅ **Multi-language support** (French/English)
- ✅ **SEO optimized** with metadata API, sitemap, robots.txt
- ✅ **Accessibility compliant** (WCAG AA)
- ✅ **Server Components** by default
- ✅ **Static Site Generation** (SSG) for optimal performance
- ✅ **Server Actions** for form handling
- ✅ **Security headers** configured
- ✅ **Zero build errors**
- ✅ **Zero TypeScript errors**
- ✅ **Zero ESLint errors**

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Locale layout
│   │   ├── tours/          # Tours pages
│   │   ├── day-trips/      # Day trips pages
│   │   ├── activities/     # Activities pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── enquiry/        # Enquiry page
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Site header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── TourCard.tsx        # Tour card component
│   ├── TourGrid.tsx        # Tour grid layout
│   ├── Breadcrumbs.tsx     # Breadcrumb navigation
│   ├── FAQAccordion.tsx    # FAQ accordion
│   ├── CTASection.tsx      # Call-to-action section
│   ├── ContactForm.tsx     # Contact form
│   ├── EnquiryForm.tsx     # Enquiry form
│   └── LanguageSwitcher.tsx # Language switcher
├── content/
│   ├── types.ts            # Content type definitions
│   ├── tours.fr.ts         # French tours
│   ├── tours.en.ts         # English tours
│   ├── dayTrips.fr.ts      # French day trips
│   ├── dayTrips.en.ts      # English day trips
│   ├── activities.fr.ts    # French activities
│   └── activities.en.ts    # English activities
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── i18n.ts             # Internationalization
│   ├── validations.ts      # Form validations (Zod)
│   └── actions.ts          # Server actions
└── middleware.ts           # Locale middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sabriomar98/travak_morroco_v1.git
cd travak_morroco_v1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎯 Content

The website includes:

### Tours
- **Desert Tour from Marrakech** (3 days)
- **Imperial Cities Tour from Casablanca** (5 days)
- **Atlantic Coast Tour from Agadir** (4 days)

### Day Trips
- **Ourika Valley Day Trip** from Marrakech

### Activities
- **Hot Air Balloon Flight** over Marrakech

## 🌍 Internationalization

The website supports two languages:
- French (fr) - Default
- English (en)

Locale switching is handled automatically via middleware, redirecting `/` to `/fr`.

## 🔒 Security

Security headers configured:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Content-Security-Policy (configured)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Skip to content link
- Focus-visible states
- Alt text for all images
- Color contrast WCAG AA compliant

## 📊 SEO Features

- Next.js Metadata API
- Dynamic sitemap generation
- Robots.txt configuration
- JSON-LD structured data:
  - Organization schema
  - BreadcrumbList schema
  - TouristTrip schema
  - FAQPage schema
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Alternate language links

## 📝 Forms

Forms use Server Actions with:
- Zod validation
- Honeypot anti-spam field
- Client-side validation
- Success/error states
- Accessible labels and ARIA attributes

## 🎨 Design

- Clean, modern design
- Responsive layout (mobile-first)
- Tailwind CSS for styling
- shadcn/ui components
- System fonts for optimal performance

## 🚀 Performance

- Static Site Generation (SSG)
- Server Components by default
- Optimized images with next/image
- Minimal client-side JavaScript
- Build-time page generation
- Middleware for routing

## 📦 Dependencies

### Production
- next@15.5.12
- react@19.0.0
- react-dom@19.0.0
- @radix-ui components
- class-variance-authority
- clsx
- framer-motion
- lucide-react
- tailwind-merge
- tailwindcss-animate
- zod

### Development
- typescript@5.7.2
- tailwindcss@3.4.17
- eslint & eslint-config-next
- autoprefixer
- postcss

## 📄 License

This project is private and proprietary.

## 👥 Authors

Travel Morocco Team

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

## 📧 Contact

- Email: contact@travelmorocco.com
- Phone: +212 6 00 00 00 00
- Location: Marrakech, Morocco

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS
