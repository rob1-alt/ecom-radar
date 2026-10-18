import { getArticle, getArticles } from "@/lib/content";
import { catSlug } from "@/lib/i18n";
import { articleOg, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles("fr").map((a) => ({ category: catSlug("fr", a.category), slug: a.slug }));
}
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Radar Ecom";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug, "fr")!;
  return articleOg(a);
}
