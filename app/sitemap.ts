import type { MetadataRoute } from "next";
import { SITE, CATEGORIES } from "@/lib/site";
import { getArticles, articlePath } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles();
  return [
    { url: `${SITE.url}/`, lastModified: articles[0]?.updated },
    { url: `${SITE.url}/methodologie/` },
    ...Object.keys(CATEGORIES).map((k) => ({ url: `${SITE.url}/${k}/` })),
    ...articles.map((a) => ({ url: SITE.url + articlePath(a), lastModified: a.updated })),
  ];
}
