import type { MetadataRoute } from "next";

import { site, productLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const lastModified = new Date("2026-10-22");

  const pages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: url("/projects"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/sectors"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/privacy-policy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const products: MetadataRoute.Sitemap = productLinks.map((product) => ({
    url: url(product.href),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...products];
}
