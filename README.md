# James Brock IV — Portfolio

Minimal cinematic portfolio for filmmaker and director James Brock IV. Built with Next.js, TypeScript, and Framer Motion.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework (App Router) |
| [React](https://react.dev) | 18 | UI library |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Styling |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animations |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD
│   ├── page.tsx            # Home page (/ — hero + portfolio grid)
│   ├── about/
│   │   └── page.tsx        # About page (/about)
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots directives
│   └── globals.css         # Global styles and keyframes
├── components/
│   ├── Navigation.tsx      # Fixed header with mobile menu
│   ├── Hero.tsx            # Full-screen hero — video reel or image slideshow fallback
│   ├── PortfolioGrid.tsx   # Project grid + modal state
│   ├── ProjectCard.tsx     # Individual project card with hover preview
│   ├── VideoModal.tsx      # Full-screen Vimeo embed modal
│   ├── PlaceholderImage.tsx # next/image wrapper with error fallback
│   └── about/
│       ├── AboutSection.tsx
│       ├── ClientsList.tsx
│       └── ContactSection.tsx
└── data/
    └── projects.ts         # Project data and TypeScript types
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Projects

Edit `data/projects.ts`. Each project follows this shape:

```ts
{
  id: "07",                          // Display number shown on card
  title: "Project Title",
  client: "Client Name",
  category: "Commercial",            // Shown as a tag on hover
  thumbnail: "/images/thumb.jpg",    // Static local image or URL
  gifPreview: "/images/preview.gif", // Optional — shown on hover
  videoUrl: "https://player.vimeo.com/video/...", // Vimeo embed URL
  year: "2024",
}
```

## Adding a Video Reel

Place your reel at `public/videos/reel.mp4`. The hero section will play it automatically. If the file is absent or fails to load, it falls back to the image slideshow.

Optionally add a poster frame at `public/images/hero-poster.jpg` for the initial video frame.

## Customization

### Colors
Defined in `tailwind.config.ts`:

```ts
colors: {
  "dark-gray": "#111111",
  "mid-gray": "#1a1a1a",
  "light-gray": "#333333",
  "text-muted": "#888888",
}
```

### SEO / Metadata
- Site-wide defaults: `app/layout.tsx`
- Per-page overrides: export `metadata` from any page file
- Structured data (JSON-LD): `app/layout.tsx` — update `name`, `url`, `sameAs`
- Sitemap base URL: `app/sitemap.ts`

### Contact Email
Update `hello@jamesbrockiv.com` in `components/Navigation.tsx` and `components/about/ContactSection.tsx`.

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com) with zero configuration.

```bash
npx vercel
```

For other platforms, run `npm run build` and serve the `.next` output.
