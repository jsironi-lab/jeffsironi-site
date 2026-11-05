# Changelog

All notable changes to jeffsironi-site will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed (2026-11-05)
- Search appearance: description is now "My corner of the internet."; no photo in search results
  (`max-image-preview:none`, headshot dropped from structured data, Googlebot-Image blocked from
  `/images/jeff-*`); link previews use the pizza instead of the headshot.
- Added `/favicon.ico` (48px pizza), `WebSite` structured data for the site name, and fuller
  Open Graph tags (`og:url`, `og:type`, `og:site_name`, `twitter:card`).

### Changed (2026-11-04)
- Upgraded Astro 4.16 to 7.4.5 and `@astrojs/sitemap` to 3.7.4, pinned to exact versions.
- Mixtapes and blog collections use the content loader API (`src/content.config.ts`).
- CI builds on Node 24 and runs `astro check` before building.
- Dependabot opens monthly pull requests for npm and GitHub Actions updates.

### Removed (2026-11-04)
- Tailwind and its config. It was installed but never wired up; all styling is in `src/styles/global.css`.

### Added
- Initial project folder structure (2026-02-03)
  - assets/ (css, js, images, fonts)
  - blog/
  - projects/
  - docs/
- File tracking system (CHANGELOG.md, FEATURES.md, UPDATES.md)
- Core files added (2026-02-03)
  - index.html (homepage)
  - README.md (project documentation)
  - docs/deployment.md
  - docs/future-features.md
  - docs/project-setup-guide.md

### Changed
- Mixtapes page restyled to match the home page (2026-11-04): dusk header with hills, tape art drawn in
  light lines, the rack is now a pale tile with thin wooden ledges, and the tape details sit in a pale tile
  instead of a navy band. Headings are smaller and lighter.
- On phones the header now stays pinned to the top and fills in with the sky color once you scroll (2026-11-04)

### Fixed

### Removed

---

## Version History

<!--
Add new versions above this line using this format:

## [X.X.X] - YYYY-MM-DD

### Added
- New features

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes

### Removed
- Removed features
-->
