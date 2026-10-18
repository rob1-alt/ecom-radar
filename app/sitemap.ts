import type { MetadataRoute } from "next";
import { SITE, CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, articlePath, alternatePath } from "@/lib/content";
import { catSlug } from "@/lib/i18n";

export const dynamic = "force-static";

const u = (p: string) => SITE.url + p;
const pair = (fr: string, en?: string) => ({ languages: { "fr-FR": u(fr), ...(en ? { en: u(en) } : {}), "x-default": u(fr) } });

export default function sitemap(): MetadataRoute.Sitemap {
  const fr = getArticles("fr");
  const en = getArticles("en");
  const last = fr[0]?.updated;
  const out: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: last, alternates: pair("/", "/en/") },
    { url: u("/en/"), lastModified: last, alternates: pair("/", "/en/") },
    { url: u("/methodologie/"), alternates: pair("/methodologie/", "/en/methodology/") },
    { url: u("/en/methodology/"), alternates: pair("/methodologie/", "/en/methodology/") },
    { url: u("/auteur/robin-pautigny/"), alternates: pair("/auteur/robin-pautigny/", "/en/author/robin-pautigny/") },
    { url: u("/en/author/robin-pautigny/"), alternates: pair("/auteur/robin-pautigny/", "/en/author/robin-pautigny/") },
  ];
  for (const k of Object.keys(CATEGORIES) as CategoryKey[]) {
    const f = `/${catSlug("fr", k)}/`, e = `/en/${catSlug("en", k)}/`;
    out.push({ url: u(f), alternates: pair(f, e) }, { url: u(e), alternates: pair(f, e) });
  }
  for (const a of [...fr, ...en].filter((x) => !x.sample)) {
    const f = alternatePath(a, "fr"), e = alternatePath(a, "en");
    out.push({ url: u(articlePath(a)), lastModified: a.updated, alternates: f ? pair(f, e) : undefined });
  }
  return out;
}
