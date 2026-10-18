import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { CAT_TEXT, catSlug, catFromSlug } from "@/lib/i18n";
import { siteOg, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategoryKey[]).map((k) => ({ category: catSlug("fr", k) }));
}
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Radar Ecom";

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const k = catFromSlug("fr", (await params).category)!;
  return siteOg("fr", CAT_TEXT.fr[k].h1, CAT_TEXT.fr[k].label, k);
}
