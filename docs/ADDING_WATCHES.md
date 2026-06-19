# Adding a new watch

Follow these steps every time you want to add a watch to the catalog. This assumes you've
already completed the one-time setup in
[docs/SETUP_MAC.md](SETUP_MAC.md) / [docs/SETUP_WINDOWS.md](SETUP_WINDOWS.md).

## 1. Pick a slug

A "slug" is the watch's unique id — it becomes part of the website's URL and the filenames used
everywhere, so it must be:
- lowercase
- words separated by hyphens, no spaces
- unique (no two watches can share a slug)

Recommended pattern: `brand-model-year`, e.g.:
- `omega-seamaster-300-1968`
- `rolex-submariner-1985`

You'll use this exact slug in steps 2–4 below.

## 2. Add your photos

1. Take photos of the watch.
2. Create a folder named after your slug inside `incoming-photos/`, e.g.:
   ```
   incoming-photos/omega-seamaster-300-1968/
   ```
3. Copy your photos into that folder. Name them so they sort in the order you want them shown
   (e.g. `1-front.jpg`, `2-side.jpg`, `3-back.jpg`).
4. Run the resize script:
   ```
   npm run process-photos -- omega-seamaster-300-1968
   ```
   This creates `src/assets/images/omega-seamaster-300-1968/` with the resized photos the site
   actually uses. See [docs/PHOTO_PROCESSING.md](PHOTO_PROCESSING.md) for details.

## 3. Add the watch's details

1. Copy the template file:
   ```
   data/watches/_template.json  →  data/watches/omega-seamaster-300-1968.json
   ```
   (Use the file explorer/Finder, or in Terminal/PowerShell:
   `cp data/watches/_template.json data/watches/omega-seamaster-300-1968.json` on Mac, or
   `copy data\watches\_template.json data\watches\omega-seamaster-300-1968.json` on Windows.)

2. Open the new file in any text editor and fill it in:
   ```json
   {
     "id": "omega-seamaster-300-1968",
     "brand": "Omega",
     "model": "Seamaster 300",
     "year": 1968,
     "condition": "Good — light wear on case",
     "description": "A short description of the watch and its history.",
     "tags": ["diver", "vintage", "automatic"],
     "images": ["1.jpg", "2.jpg", "3.jpg"]
   }
   ```
   - `"id"` **must** exactly match the slug/folder name from steps 1–2.
   - `"images"` should list `1.jpg`, `2.jpg`, `3.jpg`, etc. — one entry per photo you processed,
     matching the numbers the resize script generated (it automatically adds the `thumb-`/`large-`
     prefixes, so you just list `1.jpg`, `2.jpg`, ...).
   - `"tags"` is optional — leave it as `[]` if you don't want any.

3. Save the file.

## 4. Preview it

```
npm start
```
Open `http://localhost:8080/watch-catalog/` and check your new watch appears correctly, then click into its
detail page. Press `Ctrl + C` in the terminal to stop the server when you're done.

## 5. Publish it

Once you're happy with how it looks:
```
git add data/watches/omega-seamaster-300-1968.json src/assets/images/omega-seamaster-300-1968
git commit -m "Add Omega Seamaster 300 (1968)"
git push
```
A few minutes after pushing, the live site will automatically update — see
[docs/DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md) for how that works.
