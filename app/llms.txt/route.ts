import { SITE, CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, articlePath } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const articles = getArticles();
  const lines = [`# ${SITE.name}`, "", `> ${SITE.description}`, ""];
  for (const k of Object.keys(CATEGORIES) as CategoryKey[]) {
    const list = articles.filter((a) => a.category === k);
    if (!list.length) continue;
    lines.push(`## ${CATEGORIES[k].label}`, "");
    for (const a of list) lines.push(`- [${a.title}](${SITE.url}${articlePath(a)}): ${a.description}`);
    lines.push("");
  }
  lines.push("## À propos", "", `- [Méthodologie](${SITE.url}/methodologie/): comment les outils sont testés et les prix vérifiés.`, "");
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
