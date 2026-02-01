# Engineers Without Borders College Club Website

## Overview
A modern, responsive single-page website for a college club chapter of Engineers Without Borders India. The website showcases the club's mission, team members, upcoming events, and provides a way for interested students to get in touch.

## Features
- **Sticky Navigation**: Smooth scrolling navigation with active section indicators
- **Hero Carousel**: Auto-sliding image carousel with 3 images showcasing club activities
- **About Section**: Mission statement and club description
- **Team Section**: Display of 4 team members with professional headshots and roles
- **Events Section**: 3 upcoming events with dates and descriptions
- **Gallery**: Responsive 6-image grid with lightbox functionality
- **Contact Form**: Functional contact form with validation and backend integration

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing), TanStack Query
- **Backend**: Express.js, TypeScript
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Shadcn/ui components
- **Storage**: In-memory storage (MemStorage)

## Design System
- **Primary Color**: Blue (#2563eb) - trust, education, engineering
- **Accent Color**: Teal (#14b8a6) - call-to-action, highlights
- **Typography**: Poppins (headings), Inter (body text)
- **Layout**: Mobile-first responsive design with max-width containers

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Retrieve all contact messages (for admin purposes)

## Project Structure
- `/client/src/pages/home.tsx` - Main single-page application
- `/shared/schema.ts` - Data models and validation schemas
- `/server/routes.ts` - API endpoints
- `/server/storage.ts` - In-memory data storage

## Running the Project
The project uses a single command to start both frontend and backend:
```bash
npm run dev
```

This starts:
- Vite dev server for the frontend (React)
- Express server for the backend API
- Both served on the same port (5000)

## Recent Changes
- Initial implementation (October 2025)
- Created single-page responsive website with all required sections
- Implemented auto-sliding hero carousel
- Added contact form with backend integration
- Configured design system with Poppins/Inter fonts and teal accent colors
