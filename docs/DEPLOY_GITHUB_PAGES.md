# Publishing to GitHub Pages (free hosting)

GitHub Pages will host your website for free. This project is already set up so that every
time you push to the `main` branch, GitHub automatically rebuilds and republishes the site —
you never need to manually upload anything.

## 1. Create the GitHub repository

1. Go to **github.com** and sign in (create a free account if you don't have one).
2. Click the **+** in the top right → **New repository**.
3. Give it a name (e.g. `watch-catalog`). Public or private both work with GitHub Pages on a
   free personal account. Don't initialize it with a README, .gitignore, or license — this
   project already has those.
4. Click **Create repository**.

## 2. Push this project to it

In Terminal (Mac) or PowerShell (Windows), from inside the project folder:
```
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 3. Turn on GitHub Pages

1. On GitHub, open your repository.
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
4. That's it — no further configuration needed. This repo already includes the workflow file
   (`.github/workflows/deploy.yml`) that builds the site and deploys it.

## 4. Find your live site

1. Go to the **Actions** tab in your repository and wait for the "Deploy to GitHub Pages"
   workflow to finish (usually under a minute) — it runs automatically after every push.
2. Once it's green, go back to **Settings → Pages** — your live URL is shown at the top, in the
   form:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

## Updating the site later

Every time you want to change something (add a watch, edit details, tweak the design):
```
git add .
git commit -m "Describe what changed"
git push
```
Pushing to `main` automatically triggers a rebuild and republish — check the **Actions** tab if
you want to watch it happen or troubleshoot a failed build.
