# Platinum Drive

Luxury car rental website for Milan, Italy

**Live Demo:** https://platinumdrive.netlify.app

## Project Overview

This is a modern, elegant website for a luxury car rental service in Milan. The project showcases premium vehicles with smooth animations, interactive elements, and a sophisticated user experience designed to reflect the exclusivity of the service.

## What Is It?

Premium car rental landing page featuring:

- Showcase of luxury vehicles (Mercedes, BMW, Porsche, Ferrari, Lamborghini, Rolls-Royce)
- Interactive fleet browsing with category filters
- Contact modal with reservation functionality
- Multi-language support (English/Italian)
- Smooth animations and transitions throughout
- Responsive design optimized for all devices

## Key Features

### ✨ Design & Animations

Extensive attention to detail in creating a luxurious, premium feel:

- **Hero section** with animated image darkening effect on load
- **Animated border** on "SELECT A CAR" button - continuous circular animation
- **Gradient pulse animations** on interactive elements
- **Smooth scroll** with custom easing functions
- **Fade-in animations** for all sections on scroll
- **Modal window** with smooth scale-in animation
- **Arrow indicator** that fades out as user scrolls through content
- **Hover effects** on car cards with image zoom and overlay transitions

### 🎯 Functionality

- **Multi-language support** - Switch between English and Italian
- **Category filtering** - Filter cars by Sedan, SUV, or Sport
- **Reservation modal** - Click "RESERVE" to open contact modal with car details
- **Smooth scrolling** - Custom scroll implementation with adjustable speed
- **Image optimization** - Lazy loading for performance
- **Responsive navigation** - Adaptive header with scroll detection

## Technologies Used

- **React 18** - Component-based architecture
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **Netlify** - Hosting and deployment
- **Git/GitHub** - Version control

## Project Structure

```
├── public/
│   ├── images/              # Car images (Mercedes, BMW, Porsche, etc.)
│   └── _redirects            # Netlify SPA redirects
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with animated background
│   │   ├── Navigation.tsx    # Top navigation with language switcher
│   │   ├── Concept.tsx       # Brand concept section
│   │   ├── Services.tsx      # Services showcase
│   │   ├── Fleet.tsx         # Car fleet with filters and modal
│   │   └── Contact.tsx       # Contact information section
│   ├── context/
│   │   └── LanguageContext.tsx  # Multi-language context provider
│   ├── utils/
│   │   └── smoothScroll.ts  # Custom smooth scroll implementation
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and animations
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Documentation
```

## Design Highlights

### Animations

- **Hero Image Darkening**: Background image smoothly darkens by 50% over 1 second after page load
- **Button Border Animation**: Continuous circular animation on "SELECT A CAR" button border
- **Gradient Pulse**: Subtle gradient animation on button background
- **Section Fade-ins**: All sections fade in smoothly when scrolled into view
- **Modal Animations**: Scale and fade animations for reservation modal
- **Scroll Arrow**: Down arrow fades out as user reaches second section

### Responsive Design

- Mobile-first approach
- Adaptive typography scaling
- Touch-friendly interactions
- Optimized image loading
- Smooth transitions on all screen sizes

### User Experience

- **Smooth Scrolling**: Custom implementation with 1.5s duration and easing
- **Interactive Cards**: Hover effects reveal reservation button
- **Modal System**: Click any car's "RESERVE" button to see contact information
- **Language Switching**: Seamless language change without page reload
- **Category Filtering**: Instant filtering of car fleet by type

## Deployment

The website is deployed on Netlify with automatic updates from the main branch.

**Live Demo:** https://platinumdrive.netlify.app

### Configuration

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA fallback:** Configured via `_redirects` and `netlify.toml`
- **Asset optimization:** Automatic minification and compression

## Local Development

```bash
# Clone the repository
git clone https://github.com/kostyakunak/platinumdrive.git

# Navigate to project
cd platinumdrive

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Portfolio Notes

This project demonstrates:

- **UX Design** - Luxury brand presentation and user flow
- **Animation Skills** - CSS transitions, keyframe animations, and JavaScript-based effects
- **React Expertise** - Component architecture, context API, custom hooks
- **Performance** - Image optimization, lazy loading, code splitting
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Deployment** - Netlify configuration and CI/CD setup

## Features Breakdown

### Hero Section
- Large hero image with darkening animation
- Animated "SELECT A CAR" button with circular border animation
- Smooth text fade-ins with staggered delays
- Logo and branding elements

### Fleet Section
- Grid layout of luxury vehicles
- Category filtering (All, Sedan, SUV, Sport)
- Hover effects with image zoom
- Reservation modal with car details and contact info
- Local image optimization

### Contact Section
- Contact information display
- Removed redundant "CONTACT US" button (as per design refinement)
- Footer with branding

### Navigation
- Fixed header with scroll detection
- Language switcher (EN/IT)
- Smooth scroll to sections
- "BOOK NOW" button

## Environment

No environment variables required for basic deployment.

## License

This project is for portfolio demonstration purposes.
