# Sam LaFell | Data Engineer Portfolio


## Design Philosophy

- **Clean & Minimal** - No heavy cards or borders, content breathes
- **Two-Column Layout** - Sticky sidebar on left, scrolling content on right
- **Mouse-Follow Spotlight** - Subtle gradient that follows your cursor
- **Typography-First** - Content hierarchy through text weight and color
- **Inline Tech Tags** - Unobtrusive teal badges for technologies

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts, metadata
│   ├── page.tsx        # Main page with spotlight effect
│   └── globals.css     # Theme colors and utility classes
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx # Sticky left sidebar (name, nav, socials)
│   └── sections/
│       ├── About.tsx   # Bio paragraphs
│       ├── Experience.tsx # Work history with achievements
│       └── Projects.tsx   # Featured projects
├── data/
│   └── content.ts      # All portfolio content (edit this!)
├── hooks/
│   └── useScrollSpy.ts # Active section detection
└── lib/
    ├── types.ts        # TypeScript interfaces
    └── utils.ts        # Helper functions
```

## Customization

### 1. Update Your Content

Edit `src/data/content.ts` to update:

- **Profile**: Name, tagline, location
- **Socials**: GitHub, LinkedIn, email
- **About**: Bio paragraphs
- **Experience**: Jobs with achievements and tech stacks
- **Projects**: Featured work with impact metrics

### 2. Color Palette

The design uses a deep slate blue palette. Edit `src/app/globals.css`:

```css
:root {
  --background: #0f172a;      /* Deep slate blue */
  --text-primary: #e2e8f0;    /* Light slate */
  --text-secondary: #94a3b8;  /* Medium slate */
  --text-muted: #64748b;      /* Muted slate */
  --accent: #5eead4;          /* Teal accent */
}
```

### 3. Sections

The portfolio currently shows:
- **About** - Your bio
- **Experience** - Work history with metrics and tech tags
- **Projects** - Featured projects with impact

You can add more sections by creating new components in `src/components/sections/`.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy with default settings

## Credits

Design inspired by [Brittany Chiang](https://brittanychiang.com/)

Built with:
- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Geist Font](https://vercel.com/font)
