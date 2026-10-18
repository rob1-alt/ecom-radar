import { notFound } from "next/navigation";
import ArticleView, { articleMeta } from "@/views/ArticleView";
import { getArticles, getArticle } from "@/lib/content";
import { catSlug, catFromSlug } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles("en").map((a) => ({ category: catSlug("en", a.category), slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const a = getArticle((await params).slug, "en");
  return a ? articleMeta(a) : {};
}

export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const a = getArticle(slug, "en");
  if (!a || a.category !== catFromSlug("en", category)) notFound();
  return <ArticleView a={a} />;
}
