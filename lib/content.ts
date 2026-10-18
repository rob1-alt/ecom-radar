import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { TOOLS, logoUrl } from "./tools";
import type { CategoryKey } from "./site";
import { ARTICLE_EN, base, catSlug, type Locale } from "./i18n";

export type Faq = { q: string; a: string };
export type Article = {
  locale: Locale;
  slug: string;
  frSlug: string; // clé commune FR/EN
  title: string;
  description: string;
  category: CategoryKey;
  type: "Comparatif" | "Fiche outil" | "Face-à-face" | "Alternatives" | "Guide" | "Baromètre";
  date: string;
  updated: string;
  readTime: number;
  tools: string[];
  cited: number[];
  wide?: boolean;
  sample?: boolean;
  answer?: string;
  faq?: Faq[];
  html: string;
  body: string;
  headings: { id: string; text: string }[];
};

const DIRS: Record<Locale, string> = {
  fr: path.join(process.cwd(), "content", "articles"),
  en: path.join(process.cwd(), "content", "en", "articles"),
};

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

// Logo devant chaque outil cité en gras, ancres sur les h2, tableaux défilants.
function enhance(html: string) {
  const headings: { id: string; text: string }[] = [];
  let out = html.replace(/<h2>(.*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&#39;|&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&");
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  out = out.replace(/<strong>([^<]+)<\/strong>/g, (m, name: string) => {
    const n = name.trim();
    if (!TOOLS[n]) return m;
    return `<span class="tool"><span class="lg" aria-hidden="true" data-i="${escapeAttr(n.charAt(0))}"><img src="${logoUrl(n)}" alt="" width="32" height="32" loading="lazy" decoding="async"></span><strong>${name}</strong></span>`;
  });
  out = out.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
  return { html: out, headings };
}

function iso(v: unknown) {
  return v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10);
}

const cache: Partial<Record<Locale, Article[]>> = {};

export function getArticles(locale: Locale = "fr"): Article[] {
  if (cache[locale]) return cache[locale]!;
  const dir = DIRS[locale];
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")) : [];
  cache[locale] = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const { html, headings } = enhance(marked.parse(content, { async: false }) as string);
      const d = data as Record<string, unknown>;
      const slug = (d.slug as string) || file.replace(/\.md$/, "");
      return {
        locale,
        slug,
        frSlug: locale === "fr" ? slug : (d.translationOf as string) || slug,
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
        body: content.trim(),
        headings,
      } satisfies Article;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache[locale]!;
}

export function getArticle(slug: string, locale: Locale = "fr") {
  return getArticles(locale).find((a) => a.slug === slug);
}
export function getArticleByKey(frSlug: string, locale: Locale) {
  return getArticles(locale).find((a) => a.frSlug === frSlug);
}

export function articlePath(a: Pick<Article, "category" | "slug" | "locale">) {
  return `${base(a.locale)}/${catSlug(a.locale, a.category)}/${a.slug}/`;
}

// URL de la même page dans l'autre langue, si elle existe.
export function alternatePath(a: Article, to: Locale) {
  if (to === a.locale) return articlePath(a);
  const other = getArticleByKey(a.frSlug, to);
  return other ? articlePath(other) : undefined;
}

export function enSlugFor(frSlug: string) {
  return ARTICLE_EN[frSlug];
}

export type Barometre = {
  month: string;
  label: string;
  label_en?: string;
  sample: boolean;
  prompts: number;
  category: string;
  category_en?: string;
  engines: Record<string, { tool: string; share: number; delta: number }[]>;
  moves: { tool: string; engine: string; delta: number }[];
};

export function getBarometre(): Barometre {
  const dir = path.join(process.cwd(), "content", "barometre");
  const latest = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort().pop()!;
  return JSON.parse(fs.readFileSync(path.join(dir, latest), "utf8"));
}

export function renderInline(md: string) {
  return enhance(marked.parseInline(md, { async: false }) as string).html;
}
