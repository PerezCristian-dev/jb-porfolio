# Collaboration Guide

This document explains how to contribute to the James Brock IV portfolio project — whether you're a developer fixing a bug, a designer tweaking styles, or a collaborator adding new content.

---

## Prerequisites

Make sure you have the following installed before starting:

- [Node.js](https://nodejs.org) v18 or higher
- [Git](https://git-scm.com)
- A code editor — [VS Code](https://code.visualstudio.com) is recommended

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/jb-porfolio.git
cd jb-porfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes are reflected instantly thanks to Next.js Fast Refresh.

---

## Branching Strategy

Always create a new branch from `main` for your work. Never commit directly to `main`.

```bash
# Pull the latest main
git checkout main
git pull origin main

# Create a feature branch
git checkout -b feature/your-feature-name

# Or a fix branch
git checkout -b fix/short-description
```

### Branch naming conventions

| Type | Pattern | Example |
|---|---|---|
| New feature | `feature/description` | `feature/project-detail-page` |
| Bug fix | `fix/description` | `fix/modal-focus-trap` |
| Content update | `content/description` | `content/add-project-07` |
| Style / UI | `style/description` | `style/hero-typography` |

---

## Making Changes

### Code style

- All components are written in **TypeScript** — keep types explicit.
- Use **Tailwind CSS** utility classes for styling. Avoid inline styles except for dynamic values.
- Use the custom Tailwind theme tokens defined in `tailwind.config.ts` (e.g. `text-muted`, `dark-gray`) instead of arbitrary hex values.
- Animations go through **Framer Motion** for interactive elements, or `globals.css` keyframes for CSS-only effects.
- Mark any component that uses `useState`, `useEffect`, or browser APIs with `"use client"` at the top.

### Component conventions

- One component per file, named identically to the file.
- Props interfaces are defined at the top of the file, above the component.
- Keep components focused — if a component is doing too much, split it.

### Adding a new project

Edit `data/projects.ts` and append an entry:

```ts
{
  id: "07",
  title: "Your Project Title",
  client: "Client Name",
  category: "Commercial",           // Short Film | Commercial | Brand Film | Music Video | Documentary
  thumbnail: "/images/thumb-07.jpg", // Place image in public/images/
  gifPreview: "/images/thumb-07.gif", // Optional hover preview
  videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
  year: "2025",
}
```

Place thumbnail assets in `public/images/`. Prefer `.jpg` for thumbnails and `.gif` or `.webp` for hover previews.

### Adding a new page

Create a folder under `app/` with a `page.tsx` file:

```
app/
└── your-page/
    └── page.tsx
```

Always export a `metadata` object from new pages:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title — James Brock IV",
  description: "Page description.",
};
```

---

## Before Committing

Run these checks before pushing your branch:

```bash
# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Build check (catches runtime errors)
npm run build
```

Fix any errors or warnings before opening a pull request.

---

## Pull Request Process

1. Push your branch to the remote:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request against `main` on GitHub.

3. Use a clear PR title and describe:
   - **What** you changed
   - **Why** (link to an issue if applicable)
   - **Screenshots** for any visual changes

4. Request a review. PRs should not be merged by the author.

5. Once approved, use **Squash and Merge** to keep the history clean.

---

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
type: short description

Optional longer explanation.
```

| Type | When to use |
|---|---|
| `feat` | New feature or content |
| `fix` | Bug fix |
| `style` | Visual/CSS changes with no logic change |
| `refactor` | Code restructuring, no behavior change |
| `chore` | Deps, config, tooling updates |
| `docs` | README, comments, documentation |

**Examples:**
```
feat: add project 07 — Neon Drift music video
fix: restore focus to trigger after modal closes
style: tighten hero heading letter-spacing on mobile
chore: update framer-motion to v11.5
```

---

## What Not to Change

Please avoid the following without a discussion first:

- The overall dark / cinematic visual language
- The `data/projects.ts` type interface (adding fields is fine, removing or renaming breaks existing data)
- `app/layout.tsx` metadata and JSON-LD (coordinate SEO changes)
- Any file in `node_modules/`

---

## Questions

Open a [GitHub Issue](https://github.com/your-username/jb-porfolio/issues) or reach out directly at hello@jamesbrockiv.com.
