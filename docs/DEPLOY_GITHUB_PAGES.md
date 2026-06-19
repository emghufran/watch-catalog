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

**Order matters here:** if you push to `main` *before* setting the Source to "GitHub Actions",
the workflow's build step will succeed but the deploy step will fail with an error like
`Ensure GitHub Pages has been enabled` (a 404). If that happens, just complete step 3 above,
then re-run the failed job from the **Actions** tab (or push any small commit) — no need to
redo the build.

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

## Why the site lives under `/watch-catalog/`

GitHub Pages serves a regular project repository at `https://<your-username>.github.io/<repo-name>/`
— under a subpath, not the domain root. So that every link and image works correctly there, this
project sets `pathPrefix: "/watch-catalog/"` in `.eleventy.js` and every internal link in the
templates goes through Eleventy's `url` filter (e.g. `{{ '/css/style.css' | url }}`), which
prepends that prefix automatically. This is also why the local preview runs at
`http://localhost:8080/watch-catalog/` instead of the bare root — it deliberately mirrors
production.

**If you rename the repository**, update `pathPrefix` in `.eleventy.js` to match the new name
(or to `"/"` if you ever host this at a domain root with nothing else in the way).

### If you (or your GitHub account) already have a personal Pages site with a custom domain

If your account has a *user/organization* Pages site (a repo named `<your-username>.github.io`)
with a custom domain attached to it (e.g. `example.com`), GitHub automatically makes every other
project repo on that account reachable under that same custom domain too — so this site may end
up redirecting to `https://example.com/watch-catalog/` instead of
`https://<your-username>.github.io/watch-catalog/`. That's expected and not a misconfiguration;
the `pathPrefix` setup above already makes the site work correctly either way, since both URLs
serve the exact same `/watch-catalog/` subpath.

## Using the GitHub CLI (optional)

The `gh` command-line tool lets you check workflow runs and Pages status from your terminal
instead of clicking around the GitHub website. Not required, but handy for troubleshooting.

**Mac:**
```
brew install gh
gh auth login
```

**Windows:**
```
winget install --id GitHub.cli
gh auth login
```

`gh auth login` opens a browser to sign in — follow the prompts (choose **GitHub.com**, then
**HTTPS** or **SSH** depending on how you cloned the repo, then **Login with a web browser**).

Once authenticated, useful commands from inside the project folder:
```
gh run list                # recent GitHub Actions runs
gh run view --log-failed   # logs for the most recent failed run
gh repo view --web         # open the repo in your browser
```
