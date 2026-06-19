#!/usr/bin/env node
// Resizes raw watch photos into the thumb/large sizes the website needs.
//
// Usage:
//   node tools/process-photos/process.js                 -> processes every folder in incoming-photos/
//   node tools/process-photos/process.js <slug>           -> processes only incoming-photos/<slug>/
//
// Input:  incoming-photos/<slug>/*.jpg|jpeg|png
// Output: src/assets/images/<slug>/thumb-N.jpg and large-N.jpg

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "..");
const INCOMING_DIR = path.join(ROOT, "incoming-photos");
const OUTPUT_DIR = path.join(ROOT, "src", "assets", "images");

const THUMB_WIDTH = 600;
const LARGE_WIDTH = 1600;
const JPEG_QUALITY = 80;
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function processSlug(slug) {
  const inputDir = path.join(INCOMING_DIR, slug);
  if (!fs.existsSync(inputDir)) {
    console.error(`No such folder: incoming-photos/${slug}`);
    return;
  }

  const outputDir = path.join(OUTPUT_DIR, slug);
  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs
    .readdirSync(inputDir)
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort();

  if (files.length === 0) {
    console.warn(`No images found in incoming-photos/${slug}`);
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const num = i + 1;
    const inputPath = path.join(inputDir, files[i]);
    const image = sharp(inputPath).rotate(); // auto-orient using EXIF data

    const thumbPath = path.join(outputDir, `thumb-${num}.jpg`);
    const largePath = path.join(outputDir, `large-${num}.jpg`);

    await image
      .clone()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY })
      .toFile(thumbPath);

    await image
      .clone()
      .resize({ width: LARGE_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY })
      .toFile(largePath);

    console.log(`Processed ${files[i]} -> thumb-${num}.jpg, large-${num}.jpg`);
  }

  console.log(`Done: ${files.length} photo(s) for "${slug}" -> src/assets/images/${slug}/`);
}

async function main() {
  const slugArg = process.argv[2];

  if (slugArg) {
    await processSlug(slugArg);
    return;
  }

  if (!fs.existsSync(INCOMING_DIR)) {
    console.error("incoming-photos/ does not exist.");
    return;
  }

  const slugs = fs
    .readdirSync(INCOMING_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  if (slugs.length === 0) {
    console.warn("No subfolders found in incoming-photos/.");
    return;
  }

  for (const slug of slugs) {
    await processSlug(slug);
  }
}

main();
