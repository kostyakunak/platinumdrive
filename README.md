# Platinum Drive

Luxury car rental website for Milan, Italy.

## Features

- Modern, responsive design with smooth animations
- Multi-language support (English/Italian)
- Interactive car fleet showcase
- Contact modal with reservation functionality
- Smooth scrolling navigation
- Optimized images with lazy loading

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Netlify

The project is configured for Netlify deployment:

1. **Connect to GitHub**: Link your GitHub repository to Netlify
2. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**: Netlify will automatically deploy on every push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify dashboard

## Project Structure

```
├── public/
│   └── images/          # Car images
├── src/
│   ├── components/       # React components
│   ├── context/         # Language context
│   ├── utils/           # Utility functions
│   └── index.css        # Global styles
└── netlify.toml         # Netlify configuration
```

## Environment

No environment variables required for basic deployment.

