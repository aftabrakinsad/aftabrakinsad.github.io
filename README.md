# Personal Portfolio

A modern, responsive, high-performance personal portfolio built with **React 18** and **Vite**, featuring a fixed bento-style shell with a scrollable main content area, dark/light themes, animated reveals, and a custom cursor.

![Layout](https://img.shields.io/badge/layout-bento%20shell-1a1a2e) ![Framework](https://img.shields.io/badge/React-18-61DAFB) ![Bundler](https://img.shields.io/badge/Vite-5-646CFF)

---

## ✨ Features

- **Bento shell layout** — fixed header, sidebar, and footer panels with gaps; only the main content area scrolls
- **Dark mode first** — near-black palette with navy-blue accents; fully contrast-checked light mode
- **Smooth scroll reveals** — staggered fade + slide animations as content enters the viewport
- **Custom cursor** — ambient glow + morphing dot (desktop only)
- **Active section tracking** — nav auto-highlights the section currently in view
- **Validated contact form** — inline errors, real-time clearing, mock submission state
- **Fully responsive** — desktop grid collapses into a stacked mobile layout with hamburger menu
- **Accessible** — ARIA labels, keyboard navigation, focus-visible outlines, AAA color contrast
- **SEO-friendly** — semantic HTML, Open Graph and Twitter Card meta tags
- **Theme persistence** — remembered via `localStorage`

---

## 📁 Project Structure

```
portfolio/
├── public/                         # Static assets
├── src/
│   ├── data/                       # ── Models: content (plain JS)
│   │   ├── profile.js              #   Identity, bio, social links, quote
│   │   ├── experience.js           #   Work timeline + education
│   │   ├── projects.js             #   Featured projects
│   │   ├── research.js             #   Publications
│   │   ├── skills.js               #   Grouped technical skills
│   │   └── navigation.js           #   Nav item order + labels
│   │
│   ├── hooks/                      # ── Controllers: reusable logic
│   │   ├── useInView.js            #   Scroll reveal trigger
│   │   ├── useMouse.js             #   Cursor position
│   │   ├── useCursorHover.js       #   Hover-state delegation
│   │   ├── useTheme.js             #   Dark/light + localStorage
│   │   └── useActiveSection.js     #   Tracks scrolled section
│   │
│   ├── components/                 # ── Views
│   │   ├── layout/
│   │   │   ├── Header.jsx          #   Top panel: logo + nav + theme
│   │   │   ├── Sidebar.jsx         #   Left panel: photo + socials + quote
│   │   │   ├── Footer.jsx          #   Bottom panel
│   │   │   └── MobileMenu.jsx      #   Fullscreen mobile overlay
│   │   ├── sections/               #   Main content sections
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ResumeSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ResearchSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── ui/                     #   Reusable UI primitives
│   │   │   ├── Reveal.jsx          #   Scroll-triggered fade wrapper
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ResearchCard.jsx
│   │   └── icons/
│   │       └── Icons.jsx           #   All SVG icon components
│   │
│   ├── styles/
│   │   └── global.css              #   Tokens + layout + components
│   │
│   ├── utils/
│   │   └── scroll.js               #   Scroll helpers
│   │
│   ├── App.jsx                     #   Root composer (the "C" in MVC)
│   └── main.jsx                    #   React entry point
│
├── index.html                      # SEO + OG + fonts
├── vite.config.js
└── package.json
```

The architecture is a light MVC pattern:
- **Model** → `src/data/` — plain JS objects with portfolio content
- **View** → `src/components/` — stateless presentational components
- **Controller** → `src/hooks/` + `src/App.jsx` — state, side effects, orchestration

---

## 🚀 Setup & Run

**Requirements:** Node.js 18+ and npm/pnpm/yarn.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🚢 Deployment

### Vercel (recommended)
1. Push the repo to GitHub.
2. Import the repo on [vercel.com](https://vercel.com/new).
3. Vercel auto-detects Vite — just click **Deploy**.

### Netlify
1. Push to GitHub.
2. In Netlify, connect the repo with **Build command** `npm run build` and **Publish directory** `dist`.

### Any static host
```bash
npm run build
# Upload the contents of `dist/` to your host
```

---

## 🎨 Customization Guide

### 1. Personal content
Everything is centralized in `src/data/`. Edit the exports — no component code needs changing.

```js
// src/data/profile.js
export const profile = {
  name: "Your Name",
  photo: "/your-photo.jpg",   // drop the file in /public and reference it
  bio: ["Paragraph 1...", "Paragraph 2..."],
  social: { github: "https://github.com/yourhandle", ... },
  ...
};
```

### 2. Adding your photo
1. Save your photo to `public/avatar.jpg` (any supported image format).
2. In `src/data/profile.js`, set `photo: "/avatar.jpg"`.
3. For best results, use a 400×400 square image.

### 3. Colors & theme tokens
All colors are CSS custom properties in `src/styles/global.css` under `:root` and `[data-theme="light"]`. To change the accent:

```css
:root {
  --color-accent: #YOUR_HEX;
  --color-accent-hover: #YOUR_HEX;
  --color-accent-dim: rgba(...);
  --color-accent-glow: rgba(...);
}
```

### 4. Adding a project / research paper
Just append to the array in `src/data/projects.js` or `src/data/research.js`. Each card needs a `color` hex used for the accent — pick anything.

### 5. Connecting the contact form
Open `src/components/sections/ContactSection.jsx` and replace the mock timeout in `handleSubmit` with a real endpoint:

```js
await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

Recommended backends: **Formspree**, **Resend**, a **Vercel serverless function**, or **Cloudflare Workers**.

### 6. Adding new sections
1. Create `src/components/sections/NewSection.jsx`.
2. Add an entry to `src/data/navigation.js` with a matching `id`.
3. Include `<NewSection />` in `App.jsx` between the existing sections.

---

## 🔌 Recommended Enhancements

- **CMS integration** — wire up [Sanity](https://www.sanity.io/) or [Contentful](https://www.contentful.com/) to replace the static data files with a remote source.
- **Blog system** — add a `src/data/posts/` directory with MDX files; use a lightweight MDX loader.
- **GitHub API for projects** — fetch pinned repos via the GraphQL API for auto-updating project list.
- **Analytics** — add [Vercel Analytics](https://vercel.com/analytics) or [Plausible](https://plausible.io/) — one `<script>` tag in `index.html`.
- **Spam protection** — add [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) or hCaptcha to the contact form.
- **TypeScript** — rename `.jsx` → `.tsx`, add `tsconfig.json`, install `typescript` + `@types/react`. The data models are the ideal starting point for type definitions.

---

## ⚡ Performance Notes

- Fonts are preconnected in `index.html` for faster FCP.
- `IntersectionObserver` disconnects once a reveal has fired — no wasted observers.
- The custom cursor uses `transform` (not `top`/`left`) for compositor-only animation.
- All animations respect `prefers-reduced-motion` when available (can be extended further if you need stricter compliance).
- Images should be compressed; consider `vite-plugin-image-optimizer` for automated optimization.

---

## 📄 License

MIT — use this as a starting point for your own portfolio. A credit back is appreciated but not required.
