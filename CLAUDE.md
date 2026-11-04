# jeffsironi-site

Personal site for jeffsironi.com: home page plus a mixtapes page. Astro 4 + Tailwind. See `README.md` for layout and the backlog, `docs/deployment.md` for deploy details.

## Commands
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (outputs `dist/`), `npm run preview`

## Deploy
Push to `main`; `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. `dist/` and `.astro/` are gitignored build output.

## Notes
- Contact links live in `src/site.ts`; mixtapes are one file each in `src/content/mixtapes/`.
- `projects/jugday-bingo` and `projects/nola-bingo` are standalone static pages with their own `CNAME`.
- `/assets/` is the pre-Astro legacy site, gitignored; safe to remove if unused.
- Update `CHANGELOG.md` when shipping notable changes.
