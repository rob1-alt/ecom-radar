import { notFound } from "next/navigation";
import ArticleView, { articleMeta } from "@/views/ArticleView";
import { getArticles, getArticle } from "@/lib/content";
import { catSlug, catFromSlug } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles("fr").map((a) => ({ category: catSlug("fr", a.category), slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const a = getArticle((await params).slug, "fr");
  return a ? articleMeta(a) : {};
}

export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const a = getArticle(slug, "fr");
  if (!a || a.category !== catFromSlug("fr", category)) notFound();
  return <ArticleView a={a} />;
}
