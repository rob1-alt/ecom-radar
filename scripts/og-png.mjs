// Après `next build` : les images Open Graph sortent sans extension (opengraph-image-xxxx).
// Cloudflare les servirait sans type image, et LinkedIn ne les affiche pas.
// On les copie en .png et on met à jour les liens dans les pages.
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(OUT);
let n = 0;
for (const f of files) {
  if (/\/opengraph-image-[a-z0-9]+$/.test(f)) { fs.copyFileSync(f, f + ".png"); n++; }
}
const re = /(opengraph-image-[a-z0-9]+)\?[a-f0-9]+/g;
for (const f of files) {
  if (!/\.(html|txt)$/.test(f)) continue;
  const s = fs.readFileSync(f, "utf8");
  if (re.test(s)) fs.writeFileSync(f, s.replace(re, "$1.png"));
  re.lastIndex = 0;
}
console.log(`og-png: ${n} images Open Graph en .png`);
