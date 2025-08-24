# TechFlow - Full-Stack CMS Website

A modern website built with PayloadCMS and Next.js 14, demonstrating professional development practices with a headless CMS architecture.

## Project Overview

Full-stack application featuring:
- Headless CMS architecture with PayloadCMS
- Modern React frontend with Next.js 14 + TypeScript
- Professional design with Tailwind CSS
- Form handling with validation and backend integration
- Responsive design optimized for all devices
- Multi-language support (English/Spanish)
- Image optimization and media management

## Architecture

```
┌─────────────────┐    API     ┌─────────────────┐
│   Next.js 14    │ ◄────────► │   PayloadCMS    │
│   Frontend       │   HTTP     │   Backend       │
│   (Port 3000)    │            │   (Port 3001)   │
└─────────────────┘            └─────────────────┘
         │                              │
         │                              │
    ┌─────────┐                ┌──────────────┐
    │ Browser │                │   MongoDB    │
    │ Client  │                │  (In-Memory) │
    └─────────┘                └──────────────┘
```

## Technology Stack

**Backend (PayloadCMS)**
- PayloadCMS 3.x - Headless CMS
- TypeScript - Type safety
- Express.js - Web server
- MongoDB - Database (in-memory for development)
- Node.js - Runtime environment

**Frontend (Next.js)**
- Next.js 14 - React framework with App Router
- TypeScript - Type safety
- Tailwind CSS - Utility-first CSS framework
- React Hook Form - Form management
- Zod - Schema validation
- Lucide React - Icon library

## Quick Start

**Prerequisites**
- Node.js 18+
- npm or yarn

**Installation**

1. Clone and navigate to the project:
   ```bash
   cd cms-website-assignment
   ```

2. Start the backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Backend: http://localhost:3001  
   Admin panel: http://localhost:3001/admin

3. Start the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   Frontend: http://localhost:3000

**Initial Setup**

Visit http://localhost:3001/admin to create your admin account and start adding content.

## Features

**Content Management**
- Dynamic page builder with reusable content blocks
- Hero sections with background images
- Feature grids for showcasing services
- Customer testimonials with ratings
- Call-to-action blocks

**Contact System**
- Professional contact form with validation
- Direct integration with PayloadCMS
- Admin management of form submissions
- Status tracking for leads

**Multi-Language Support**
- English/Spanish language toggle
- Localized content management
- Clean URL structure (/es/*)

**Media Management**
- Drag-and-drop file uploads
- Automatic image optimization
- Multiple image sizes
- Alt text support for accessibility

## Content Structure

**Pages Collection**
- Homepage with dynamic layout
- About page for company information
- Contact page with form

**Content Blocks**
- Hero Block - title, subtitle, CTA button, background image
- Features Block - grid of features with icons and descriptions
- Testimonials Block - customer reviews with ratings and photos
- CTA Block - call-to-action with primary/secondary buttons

**Contact Management**
- Form submissions from website
- Status tracking (New, In Progress, Responded, Closed)
- Contact details and internal notes

## CMS Architecture

**Design Philosophy**

This implementation uses modular design principles with reusable content blocks, providing flexibility while maintaining consistency.

**Pages Collection**
Page-based architecture with flexible layout system including SEO fields, localized content, and draft/publish workflow.

**Content Blocks System**
Atomic content blocks that can be reused across pages:

1. **Hero Block** - Essential for landing pages
2. **Features Block** - Common pattern for value propositions
3. **Testimonials Block** - Critical for conversion optimization
4. **CTA Block** - Essential for user journey optimization

Benefits:
- Reusability across multiple pages
- Consistent design patterns
- Flexible layouts
- Type-safe rendering

**Technical Decisions**

- **Localization**: Field-level localization with /es/* URL structure for better SEO
- **TypeScript**: End-to-end type safety from CMS to frontend
- **Database**: In-memory MongoDB for development, MongoDB Atlas for production

## Content Management

**Creating Pages**

1. Access admin panel at http://localhost:3001/admin
2. Navigate to Pages collection
3. Configure page settings (title, slug, SEO fields)
4. Build layout using available content blocks

**Content Blocks Configuration**

Hero Block:
- Title, subtitle, button text (localized)
- Button link and background image

Features Block:
- Section title (localized)
- Features array with icons, titles, descriptions

Testimonials Block:
- Section title (localized)
- Customer quotes, names, roles, companies, ratings, photos

CTA Block:
- Title, subtitle (localized)
- Primary/secondary buttons with configurable styles

**Multi-Language Content**

1. Use language selector in admin panel
2. Add translations to localized fields
3. Content automatically available at /es/* URLs

**Media Guidelines**

- Hero images: 1920x1080px minimum
- Feature icons: Simple, recognizable symbols
- Testimonial photos: Square format (400x400px)
- File formats: JPG for photos, PNG for graphics
- Always include descriptive alt text

## Development

**Backend Commands**
```bash
cd backend
npm run dev        # Development server
npm run build      # Build for production
npm run start      # Production server
```

**Frontend Commands**
```bash
cd frontend
npm run dev        # Development server
npm run build      # Build for production
npm run start      # Production server
npm run lint       # ESLint
npm run type-check # TypeScript checking
```

## Project Structure

```
cms-website-assignment/
├── backend/                 # PayloadCMS Backend
│   ├── src/
│   │   ├── collections/     # CMS Collections
│   │   ├── payload.config.ts # PayloadCMS configuration
│   │   └── server.ts        # Express server setup
│   └── media/               # Uploaded files
├── frontend/                # Next.js Frontend
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   ├── components/      # React components
│   │   ├── lib/             # Utility functions
│   │   ├── types/           # TypeScript definitions
│   │   └── styles/          # Global styles
│   └── public/              # Static assets
└── README.md
```

## Key Features

**Development Practices**
- Full TypeScript implementation
- Comprehensive error handling
- Client and server-side validation
- Mobile-first responsive design
- Image optimization and code splitting
- SEO-ready with meta tags and semantic HTML
- Accessibility with ARIA labels and keyboard navigation

**Web Standards**
- Clean API design
- Reusable component architecture
- Modern React patterns
- Utility-first CSS with Tailwind
- Production-ready builds

## Deployment

Ready for deployment to:
- **Vercel** (Frontend) - Zero-config Next.js deployment
- **Railway/Heroku** (Backend) - Node.js hosting
- **MongoDB Atlas** (Database) - Cloud database hosting

## Documentation

- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Reference](https://tailwindcss.com/docs)
