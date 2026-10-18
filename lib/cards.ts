import { articlePath, frDate, type Article } from "./content";
import type { CardData } from "@/components/ArticleGrid";

export function toCard(a: Article): CardData {
  return {
    href: articlePath(a),
    title: a.title,
    description: a.description,
    category: a.category,
    type: a.type,
    dateLabel: frDate(a.date),
    readTime: a.readTime,
    tools: a.tools,
    cited: a.cited,
    wide: a.wide,
  };
}
