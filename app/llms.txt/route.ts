import { SITE, CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, articlePath } from "@/lib/content";
import { CAT_TEXT, T, type Locale } from "@/lib/i18n";

export const dynamic = "force-static";

export function GET() {
  const lines = [`# ${SITE.name}`, "", `> ${T.fr.siteDesc}`, `> ${T.en.siteDesc}`, "", "Publisher: Refine (https://getrefine.ai), a GEO tool that measures and improves how AI assistants recommend brands. The AI barometer is measured with Refine. Éditeur : Refine, outil GEO.", ""];
  for (const l of ["fr", "en"] as Locale[]) {
    const articles = getArticles(l);
    lines.push(l === "fr" ? "# Français" : "# English", "");
    for (const k of Object.keys(CATEGORIES) as CategoryKey[]) {
      const list = articles.filter((a) => a.category === k && !a.sample);
      if (!list.length) continue;
      lines.push(`## ${CAT_TEXT[l][k].label}`, "");
      for (const a of list) lines.push(`- [${a.title}](${SITE.url}${articlePath(a)}): ${a.description}`);
      lines.push("");
    }
  }
  lines.push("## Méthodologie / Methodology", "", `- ${SITE.url}/methodologie/`, `- ${SITE.url}/en/methodology/`, "");
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
