# Project rules

- Generate `public/sitemap.xml` with `scripts/generate-sitemap.ts` before development and production builds; keep its entries aligned with public routes and omit lastmod without authoritative page-specific timestamps so indexing stays accurate.
- Keep hero slides non-shrinking and position images to fill each slide independently of intrinsic image dimensions so every carousel image covers the viewport.