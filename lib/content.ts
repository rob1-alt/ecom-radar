import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { TOOLS, logoUrl } from "./tools";
import type { CategoryKey } from "./site";

export type Faq = { q: string; a: string };
export type Article = {
  slug: string;
  title: string;
  description: string;
  category: CategoryKey;
  type: "Comparatif" | "Fiche outil" | "Face-à-face" | "Alternatives" | "Guide" | "Baromètre";
  date: string; // ISO, date de publication
  updated: string; // ISO, dernière vérification
  readTime: number;
  tools: string[];
  cited: number[]; // [ChatGPT, Perplexity, Gemini, AI Overviews] : 1 = cité ce mois-ci
  wide?: boolean;
  sample?: boolean;
  answer?: string;
  faq?: Faq[];
  html: string;
  headings: { id: string; text: string }[];
};

const DIR = path.join(process.cwd(), "content", "articles");

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeAttr(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

// Ajoute le logo devant chaque outil cité en gras, et des ancres aux titres h2.
function enhance(html: string) {
  const headings: { id: string; text: string }[] = [];
  let out = html.replace(/<h2>(.*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  out = out.replace(/<strong>([^<]+)<\/strong>/g, (m, name: string) => {
    const t = TOOLS[name.trim()];
    if (!t) return m;
    return `<span class="tool"><span class="lg" aria-hidden="true" data-i="${escapeAttr(name.trim().charAt(0))}"><img src="${logoUrl(name.trim())}" alt="" width="32" height="32" loading="lazy" decoding="async"></span><strong>${name}</strong></span>`;
  });
  out = out.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
  return { html: out, headings };
}

function iso(v: unknown) {
  return v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10);
}

let cache: Article[] | null = null;

export function getArticles(): Article[] {
  if (cache) return cache;
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  cache = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      const { html, headings } = enhance(marked.parse(content, { async: false }) as string);
      const d = data as Record<string, unknown>;
      return {
        slug: (d.slug as string) || file.replace(/\.md$/, ""),
        title: d.title as string,
        description: d.description as string,
        category: d.category as CategoryKey,
        type: d.type as Article["type"],
        date: iso(d.date),
        updated: iso(d.updated || d.date),
        readTime: Number(d.readTime || 5),
        tools: (d.tools as string[]) || [],
        cited: (d.cited as number[]) || [0, 0, 0, 0],
        wide: Boolean(d.wide),
        sample: Boolean(d.sample),
        answer: d.answer as string | undefined,
        faq: (d.faq as Faq[]) || [],
        html,
        headings,
      } satisfies Article;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export function getArticle(slug: string) {
  return getArticles().find((a) => a.slug === slug);
}

export function articlePath(a: Pick<Article, "category" | "slug">) {
  return `/${a.category}/${a.slug}/`;
}

export type Barometre = {
  month: string; // "2026-10"
  label: string; // "Octobre 2026"
  sample: boolean;
  prompts: number;
  category: string;
  engines: Record<string, { tool: string; share: number; delta: number }[]>;
  moves: { tool: string; engine: string; delta: number }[];
};

export function getBarometre(): Barometre {
  const dir = path.join(process.cwd(), "content", "barometre");
  const latest = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort().pop()!;
  return JSON.parse(fs.readFileSync(path.join(dir, latest), "utf8"));
}

const MONTHS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
export function frDate(iso: string, long = false) {
  const [y, m, d] = iso.split("-").map(Number);
  const day = d === 1 ? "1er" : String(d);
  return long ? `${day} ${MONTHS[m - 1]} ${y}` : `${day} ${MONTHS[m - 1]}`;
}

export function renderInline(md: string) {
  return enhance(marked.parseInline(md, { async: false }) as string).html;
}
