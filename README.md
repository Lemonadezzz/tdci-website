# Target Display — website

Marketing site for Target Display Co., Inc., rebuilt as a fully self-hosted
Next.js app. No Webflow runtime, no external CDN, no third-party asset or font
requests at render time.

## Stack

- Next.js 16 (App Router, static prerendering)
- React 19
- Tailwind CSS v4 (imported in `src/app/globals.css`, alongside the site's own
  design-system CSS)
- Manrope via `next/font` (downloaded at build time and served locally)

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerendered)
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route | Contents |
| --- | --- |
| `/` | Home |
| `/about` | Company story, FAQ, marquee CTA |
| `/projects` | Project gallery with marquee rows |
| `/sectors` | Sector overview |
| `/contact` | Contact form |
| `/shelving` | Product page |
| `/racking` | Product page |
| `/store-equipment` | Product page |
| `/product-display-signages` | Product page |
| `/fresh-concepts` | Product page |
| `/pop-ups-kiosks` | Product page |
| `/cabinets-counters` | Product page |
| `/privacy-policy` | Privacy policy |

## Structure

```
src/
  app/                 route segments, each with its own metadata
    globals.css        design tokens + all page CSS
    layout.tsx         navbar, footer, cookie consent, JSON-LD
  components/          navbar, footer, product-page view, forms, cookie UI
  lib/
    site.ts            company info, nav links, product links
    productPages.ts    structured content for the seven product pages
    projectsData.ts    projects page data
    aboutData.ts       about page FAQ + marquee data
    assets.ts          asset paths + marquee logos
public/assets/         all images, organised per page
```

Product pages share `components/product-page.tsx` and are driven by
`lib/productPages.ts`; a product route is a thin file that picks its dataset.

## Assets

Everything lives under `public/assets`, organised per page:

```
public/assets/
  home/  about/  projects/  sectors/  contact/
  products/<slug>/hero|cards|icons/
  logo/  icons/
```

All paths are centralised in `src/lib/assets.ts`. Images are served by
`next/image` from local files only — there is no remote allowlist in
`next.config.ts`, so an off-site image URL fails the build/render instead of
silently pulling from a CDN.

## Cookies

`components/cookie-consent.tsx` renders the first-visit banner and the settings
dialog, and is mounted once in `layout.tsx`. The choice is stored in
`localStorage` under `td_cookie_consent` and published as:

- `data-cookie-analytics` / `data-cookie-marketing` on `<html>`
- a `td:consent-change` window event
- Google Consent Mode (`gtag('consent', 'update', …)`) when `gtag` exists

The footer's "Cookie settings" button reopens the dialog from any page.
