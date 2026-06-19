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
npm start              # preview the site locally at http://localhost:8080
npm run build           # build the static site into _site/ (mostly for CI)
npm run process-photos   # resize every folder in incoming-photos/
```

This repo ships with 4 sample watches so you can see how everything fits together before
adding your own.
