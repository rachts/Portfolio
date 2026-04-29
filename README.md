# Rachit Kumar Tiwari - Portfolio

A modern, dark-themed portfolio website built with Next.js 15, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter, JetBrains Mono

## Features

- Dark mode by default with teal accent color
- Responsive design optimized for all devices
- Data-driven content (easily editable via `/data` folder)
- Smooth scroll navigation
- SEO optimized with proper metadata
- Accessible and semantic HTML

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and theme tokens
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main portfolio page
│   └── icon.tsx         # Dynamic favicon
├── components/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── project-card.tsx
│   ├── skills-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── data/
│   ├── projects.ts      # Project data
│   ├── skills.ts        # Skills by category
│   └── experience.ts    # Work experience
```