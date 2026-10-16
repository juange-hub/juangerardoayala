import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://juangerardoayala.lovable.app";

// Only public routes; hash anchors are sections, not separate pages.
// Omit lastmod until authoritative page-specific content timestamps exist.
const entries = ["/", "/orquesta-comunitaria"];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), sitemap);
console.log(`sitemap.xml written (${entries.length} entries)`);