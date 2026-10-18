import { articlePath, type Article } from "./content";
import { fmtDate, TYPE_TEXT } from "./i18n";
import type { CardData } from "@/components/ArticleGrid";

export function toCard(a: Article): CardData {
  return {
    href: articlePath(a),
    title: a.title,
    description: a.description,
    category: a.category,
    type: TYPE_TEXT[a.locale][a.type] || a.type,
    dateLabel: fmtDate(a.date, a.locale),
    readTime: a.readTime,
    tools: a.tools,
    cited: a.cited,
    wide: a.wide,
  };
}
