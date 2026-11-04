# jeffsironi.com

Jeff Sironi's corner of the internet: a personal home page plus a mixtapes project page.
Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml`
on every push to `main`.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/site.ts` holds your email, LinkedIn and booking link. Change them here once.
- `src/pages/index.astro` is the home page.
- `src/pages/mixtapes/index.astro` is the mixtapes page.
- `src/content/mixtapes/` has one file per tape. The front matter holds the number, title, card blurb,
  spine color, Spotify link, optional Apple Music link and tracklist. The text below the front matter is
  the longer note shown when the tape is selected.
- `src/styles/global.css` has the color palette, fonts and shared styles.
- `public/images/` has the headshot and the cassette drawings.

## Adding a mixtape

Copy one of the files in `src/content/mixtapes/`, give it the next number, and update the fields.
Tapes sit on the rack in number order, and the newest one is shown by default as "Latest tape".

## Backlog

- **SEO: show up first when people search "Jeff Sironi".**
  - Add structured data (a JSON-LD `Person` block) with name, photo, location and `sameAs` links to
    LinkedIn and other profiles.
  - Add a sitemap and a `robots.txt`.
  - Verify the site in Google Search Console and submit the sitemap.
  - Link to jeffsironi.com from LinkedIn and other profiles, and from stephensironi.com.
  - Check page titles and descriptions say "Jeff Sironi" clearly.
- **Restyle the mixtapes page to match the home page.** Dusk or calmer header, white page, pale tiles
  instead of thick outlines, lighter headings. Decide how much of the wooden tape rack to keep.
- Swap in a larger, waist-up photo for the home page hero when one is available.
- Maybe: make the header stick to the top of the screen on phones, like Josh Comeau's site.
