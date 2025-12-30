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

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rachts/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit the data files in the `/data` directory:

- `projects.ts` - Add/remove/edit your projects
- `skills.ts` - Update your technical skills
- `experience.ts` - Modify work experience

### Update Theme Colors

Modify the CSS variables in `app/globals.css` to change the color scheme.

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with Next.js and deployed on Vercel.
