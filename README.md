# kamal81684.github.io

Kamal Kumari's portfolio — live at **https://kamal81684.github.io**.

Next.js 14 (static export) + Tailwind CSS + Framer Motion. Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

## Editing content

All content lives in [`app/data/portfolio.ts`](app/data/portfolio.ts): profile, stats, skills, experience, projects, achievements and education.

- **Resume button:** add a PDF as `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.
- **Photo:** replace `public/kamal.jpg` (square works best) or point `image` at another file in `public/`.
- **LinkedIn / Instagram:** fill in `socials`; empty links are hidden.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```
