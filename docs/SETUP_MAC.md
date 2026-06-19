# Setting up on macOS

These steps get the watch catalog running on your own Mac. You only need to do this once.
No prior coding experience required — just follow each step in order.

## 1. Install Node.js

Node.js is the program that runs the website's tools (Eleventy, the photo resizer, etc.).

1. Open your browser and go to **nodejs.org**.
2. Click the button to download the **LTS** version (the one recommended for most users).
3. Open the downloaded `.pkg` file and click through the installer (defaults are fine).
4. Open the **Terminal** app (press `Cmd + Space`, type "Terminal", press Enter).
5. Type the following and press Enter to confirm it installed:
   ```
   node -v
   ```
   You should see a version number like `v22.x.x`. This project expects **Node 20 or newer**.

### Updating Node.js later

When a new version comes out, just download the latest LTS `.pkg` from nodejs.org again and
run the installer — it replaces the old version automatically. (If you end up doing this often,
search for "nvm for Mac" later on — it lets you switch Node versions with one command — but
it's optional and not needed to get started.)

## 2. Install Git

Git is the tool used to save and sync your changes with GitHub.

1. In Terminal, type:
   ```
   git -v
   ```
2. If Git isn't installed, macOS will pop up a prompt offering to install the "Command Line
   Developer Tools". Click **Install** and wait for it to finish.
3. Run `git -v` again to confirm — you should see a version number.

## 3. Get the project onto your computer

If you already have this folder (e.g. you unzipped it or cloned it), skip to step 4.

Otherwise, once you've created the GitHub repository (see
[docs/DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md)), clone it:
```
cd ~/Documents
git clone https://github.com/<your-username>/<your-repo-name>.git watch_catalog
cd watch_catalog
```

## 4. Install the project's dependencies

In Terminal, navigate into the project folder and install everything the site needs:
```
cd ~/Documents/watch_catalog
npm install
```
This downloads Eleventy (the site generator) and Sharp (the photo resizer) into a
`node_modules` folder. This only needs to be done once (and again if `package.json` ever
changes).

## 5. Run the site locally

```
npm start
```
Leave this running, then open your browser to:
```
http://localhost:8080/watch-catalog/
```
You should see the sample watch catalog. To stop the server, go back to Terminal and press
`Ctrl + C`.

## Next steps

- To add your own watches: [docs/ADDING_WATCHES.md](ADDING_WATCHES.md)
- To publish the site for free: [docs/DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md)
