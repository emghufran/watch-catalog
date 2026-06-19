# My Watch Catalog

A simple, static website to showcase a personal watch collection. No database, no server —
everything is plain files: watch details live in JSON, photos live in folders. The site is
built with [Eleventy](https://www.11ty.dev/) and can be previewed on your own computer or
published for free on GitHub Pages.

## What's in this repo

| Path | What it's for |
| --- | --- |
| `data/watches/*.json` | One file per watch — brand, model, year, condition, description, tags |
| `incoming-photos/<slug>/` | Where you drop raw photos before processing (not committed) |
| `src/assets/images/<slug>/` | Resized photos the website actually uses (committed) |
| `tools/process-photos/process.js` | Script that resizes raw photos into the sizes the site needs |
| `src/` | The website's templates, CSS and JavaScript |
| `docs/` | Step-by-step guides (see below) |

## Guides

- **First-time setup:** [docs/SETUP_MAC.md](docs/SETUP_MAC.md) or [docs/SETUP_WINDOWS.md](docs/SETUP_WINDOWS.md)
- **Adding a watch to the catalog:** [docs/ADDING_WATCHES.md](docs/ADDING_WATCHES.md)
- **How photo resizing works:** [docs/PHOTO_PROCESSING.md](docs/PHOTO_PROCESSING.md)
- **Publishing to GitHub Pages:** [docs/DEPLOY_GITHUB_PAGES.md](docs/DEPLOY_GITHUB_PAGES.md)

## Quick reference (once set up)

```
npm start              # preview the site locally at http://localhost:8080/watch-catalog/
npm run build           # build the static site into _site/ (mostly for CI)
npm run process-photos   # resize every folder in incoming-photos/
```

Note the `/watch-catalog/` in the local preview URL — the site is configured (via `pathPrefix`
in `.eleventy.js`) to match how GitHub Pages serves it in production, so links and images work
identically in both places. See [docs/DEPLOY_GITHUB_PAGES.md](docs/DEPLOY_GITHUB_PAGES.md) if
you ever rename the repo or host it at the domain root instead.

This repo ships with 9 sample watches (including a single-photo and a zero-photo example) so
you can see how everything fits together before adding your own.
