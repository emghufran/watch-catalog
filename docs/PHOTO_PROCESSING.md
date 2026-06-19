# Photo processing

The website never uses your raw camera/phone photos directly — they're usually too large and
the wrong shape. Instead, a script resizes them into two consistent sizes:

- **thumb** (≈600px wide) — used in the small carousels on the homepage
- **large** (≈1600px wide) — used in the big carousel on a watch's detail page

## How it works

- **Input:** `incoming-photos/<slug>/` — drop your raw `.jpg`/`.jpeg`/`.png` photos here, in any
  resolution or orientation. This folder is **not committed to git** — it's just a staging area
  on your own computer.
- **Output:** `src/assets/images/<slug>/` — the resized `thumb-1.jpg`, `large-1.jpg`,
  `thumb-2.jpg`, `large-2.jpg`, etc. This folder **is committed** — it's what the live site
  actually serves.

`<slug>` is the same id you use in the watch's JSON file (see
[docs/ADDING_WATCHES.md](ADDING_WATCHES.md)) — e.g. `omega-seamaster-300-1968`.

The script also auto-rotates photos based on the orientation data your phone/camera saves, so
sideways photos come out right-side up.

## Running it

Process one watch's photos:
```
npm run process-photos -- omega-seamaster-300-1968
```

Process every folder inside `incoming-photos/` at once:
```
npm run process-photos
```

Photos are numbered in the order they're processed (alphabetical by filename), so
`a-front.jpg` and `b-back.jpg` in `incoming-photos/<slug>/` become `thumb-1.jpg`/`large-1.jpg`
and `thumb-2.jpg`/`large-2.jpg`. Naming your raw files so they sort in the order you want them
to appear in the carousel (e.g. `1-front.jpg`, `2-side.jpg`, `3-back.jpg`) is the easiest way to
control the order.
