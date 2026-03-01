# Muhammad Umar - Portfolio

A modern, high-performance portfolio website built with React 19, TypeScript, and cutting-edge web technologies. Features stunning 3D visuals, smooth animations, and a glassmorphism design aesthetic.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## Features

### Visual & UI
- **3D Beam Background** - WebGL-powered animated beams using React Three Fiber with custom shader materials
- **Glassmorphism Design** - Modern frosted glass aesthetic with blur effects and transparency
- **Smooth Animations** - Scroll-triggered and interactive animations powered by Framer Motion & GSAP
- **Tilted Card Effects** - Interactive 3D tilt cards with spring physics
- **Staggered Navigation Menu** - GSAP-animated fullscreen menu with staggered reveals

### Core Functionality
- **Multi-Page SPA** - React Router v7 with lazy-loaded pages
- **Contact Form** - EmailJS integration with form validation (React Hook Form)
- **Services Showcase** - Dynamic service cards with hover effects
- **Project Gallery** - Showcase of featured projects with live/repo links
- **Tech Stack Display** - Categorized technology skills with logo icons
- **Education Timeline** - Academic background presentation
- **Work Process Steps** - Interactive step-by-step workflow visualization

### Performance
- **Code Splitting** - Lazy-loaded routes and components
- **Optimized Chunking** - Manual chunk splitting for vendor libraries
- **Suspense Boundaries** - Custom loader for seamless transitions

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Shadcn/UI |
| **Animations** | Framer Motion, GSAP, Motion |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Routing** | React Router v7 |
| **Forms** | React Hook Form, EmailJS |
| **Icons** | Lucide React, React Icons |
| **Build** | Vite 7 |
| **UI Components** | Radix UI, CVA (Class Variance Authority) |

## Project Structure

```
src/
├── App.tsx                 # Root component with RouterProvider
├── routes.tsx              # Route definitions with lazy loading
├── main.tsx                # Entry point
├── index.css               # Global styles & CSS variables
│
├── pages/
│   ├── Root.tsx            # Layout wrapper (nav, footer, background)
│   ├── Home.tsx            # Landing page with hero section
│   ├── About.tsx           # About page with profile & tech stack
│   ├── Projects.tsx        # Project showcase page
│   ├── Contact.tsx         # Contact form page
│   └── NotFound.tsx        # 404 error page
│
├── components/
│   ├── Beams.tsx           # WebGL animated background (R3F)
│   ├── StaggeredMenu.tsx   # GSAP fullscreen navigation
│   ├── TiltedCard.tsx      # 3D tilt effect card
│   ├── ProfileCard.tsx     # Profile display component
│   ├── ContactForm.tsx     # EmailJS contact form
│   ├── ContactCTA.tsx      # Call-to-action section
│   ├── Services.tsx        # Services grid
│   ├── HowIWork.tsx        # Work process steps
│   ├── TechStack.tsx       # Skills/technologies display
│   ├── Eduction.tsx        # Education timeline
│   ├── Footer.tsx          # Site footer
│   └── Loader.tsx          # Loading spinner
│
├── data/
│   └── content.ts          # Centralized content/data
│
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
│
└── assets/                 # Images and static assets
```

## Optimizations

### Build Optimizations

**Manual Chunk Splitting** - Optimized bundle sizes with strategic vendor chunking:

```typescript
// vite.config.ts
manualChunks: {
  "vendor-react": ["react", "react-dom", "react-router"],
  "vendor-three": ["three"],
  "vendor-r3f": ["@react-three/fiber", "@react-three/drei"],
  "vendor-motion": ["framer-motion", "motion", "gsap"],
  "vendor-ui": ["radix-ui", "lucide-react", "react-icons"],
}
```

### Performance Optimizations

1. **Lazy Loading** - All page components are lazy-loaded with React.lazy()
2. **Suspense Boundaries** - Custom loader component for smooth loading states
3. **Canvas DPR Limiting** - WebGL canvas limited to DPR [1, 2] for performance
4. **Memoized Shaders** - Custom shader materials with useMemo for 3D effects
5. **useInView Triggers** - Animations triggered only when components enter viewport
6. **Optimized Re-renders** - useCallback and proper dependency arrays

### Code Quality

- **TypeScript** - Full type safety across the codebase
- **ESLint** - Configured with React Hooks and Refresh plugins
- **Path Aliases** - Clean imports with `@/` alias
- **Component Variants** - CVA for type-safe component styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MUmarOfficial/1st-portfolio.git

# Navigate to project
cd 1st-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file for EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
# Start development server
npm run dev
```

### Build

```bash
# Type check and build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript compile + Vite production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all files |

## Deployment

The project is configured for easy deployment on:

- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **Cloudflare Pages** - Edge deployment


## Contact

**Muhammad Umar**
- Email: muhammad.umar.official0307@gmail.com
- LinkedIn: [muhammadumarofficial](https://www.linkedin.com/in/muhammadumarofficial/)
- GitHub: [MUmarOfficial](https://github.com/MUmarOfficial/)
