import type { MetadataRoute } from "next";
import { SITE } from "./studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/other-projects`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
