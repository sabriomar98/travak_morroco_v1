# Travel Morocco - Authentic Morocco Tours & Desert Adventures

A modern, responsive travel website for Morocco tours built with Next.js 15, featuring stunning designs, interactive components, and a complete booking system.

## 🌟 Features

### Design & UI
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Morocco-Themed Colors**: Warm terracotta, deep blue, and gold accents
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Modern Components**: Built with shadcn/ui-inspired components

### Sections
1. **Hero Section**: Full-width hero with stunning Morocco background and CTAs
2. **Popular Tours**: 6 tour cards showcasing Morocco's best destinations
3. **Why Choose Us**: 6 feature cards highlighting service benefits
4. **Photo Gallery**: Interactive grid with lightbox functionality
5. **Testimonials**: Customer reviews with ratings
6. **Contact/Booking Form**: Comprehensive booking form with validation

### Components
- Sticky navigation with mobile hamburger menu
- Tour cards with hover effects
- Feature cards with icons
- Testimonial cards with star ratings
- Contact form with React Hook Form validation
- Photo gallery with lightbox
- Footer with links and social media

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar/footer
│   ├── page.tsx            # Homepage with all sections
│   ├── globals.css         # Global styles and Tailwind
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── TourCard.tsx        # Tour card component
│   ├── FeatureCard.tsx     # Feature card component
│   ├── TestimonialCard.tsx # Testimonial card
│   ├── ContactForm.tsx     # Booking form
│   ├── GalleryGrid.tsx     # Photo gallery
│   ├── Footer.tsx          # Footer section
│   └── ui/                 # UI components (button, card, input, etc.)
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Static images
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
The Morocco-themed color palette is defined in `app/globals.css`:
- Primary: `#EA580C` (Terracotta orange)
- Secondary: `#0C4A6E` (Deep blue)
- Accent: `#F59E0B` (Gold)
- Background: `#FEFCE8` (Light sand)

### Tours
Edit the tours data in `app/page.tsx` to add/modify tour offerings.

### Images
Replace Unsplash placeholder images with your own in the components and configure `next.config.ts` for your image domains.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 SEO

SEO metadata is configured in `app/layout.tsx`:
- Title, description, and keywords optimized for Morocco tours
- Open Graph tags for social media sharing
- Semantic HTML structure

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For inquiries about Travel Morocco tours:
- Email: info@travelmorocco.com
- Phone: +212 123 456 789
- Location: Marrakech, Morocco

---

Built with ❤️ for Morocco travel enthusiasts
