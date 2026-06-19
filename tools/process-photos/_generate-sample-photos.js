// One-off helper to generate placeholder "raw" sample photos for the demo
// watches that ship with this repo. Not part of the normal workflow —
// real usage is just dropping real photos into incoming-photos/<slug>/.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "..");
const INCOMING_DIR = path.join(ROOT, "incoming-photos");

const SAMPLES = [
  { slug: "omega-seamaster-300-1968", color: "#1f6f6f", label: "Omega" },
  { slug: "rolex-submariner-1985", color: "#1a1a1a", label: "Rolex" },
  { slug: "seiko-5-1979", color: "#8a5a2b", label: "Seiko" },
  { slug: "casio-gshock-1995", color: "#222222", label: "G-Shock" },
];

async function makeImage(outPath, color, label, shadeIndex) {
  const width = 1200;
  const height = 1200;
  const shade = 1 - shadeIndex * 0.12;
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}" opacity="${shade}"/>
      <circle cx="${width / 2}" cy="${height / 2}" r="350" fill="none" stroke="#ffffff" stroke-width="18" opacity="0.7"/>
      <text x="50%" y="52%" font-size="72" fill="#ffffff" font-family="sans-serif" text-anchor="middle">${label}</text>
      <text x="50%" y="62%" font-size="36" fill="#ffffff" font-family="sans-serif" text-anchor="middle" opacity="0.8">Photo ${shadeIndex + 1}</text>
    </svg>
  `;
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(outPath);
}

async function main() {
  for (const { slug, color, label } of SAMPLES) {
    const dir = path.join(INCOMING_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < 3; i++) {
      const outPath = path.join(dir, `raw-${i + 1}.jpg`);
      await makeImage(outPath, color, label, i);
    }
    console.log(`Generated 3 sample raw photos for ${slug}`);
  }
}

main();
