const fs = require("fs");
const path = require("path");

const WATCHES_DIR = path.join(__dirname, "..", "..", "data", "watches");

module.exports = function () {
  const files = fs
    .readdirSync(WATCHES_DIR)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"));

  const watches = files.map((file) => {
    const raw = fs.readFileSync(path.join(WATCHES_DIR, file), "utf8");
    const watch = JSON.parse(raw);

    watch.thumbImages = watch.images.map(
      (img) => `/assets/images/${watch.id}/thumb-${img}`
    );
    watch.largeImages = watch.images.map(
      (img) => `/assets/images/${watch.id}/large-${img}`
    );
    watch.url = `/watches/${watch.id}/`;
    watch.title = `${watch.brand} ${watch.model}${
      watch.year ? ` (${watch.year})` : ""
    }`;

    return watch;
  });

  watches.sort((a, b) => (b.year || 0) - (a.year || 0));

  return watches;
};
