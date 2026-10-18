import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { CAT_TEXT, catSlug, catFromSlug } from "@/lib/i18n";
import { siteOg, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategoryKey[]).map((k) => ({ category: catSlug("en", k) }));
}
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Radar Ecom";

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const k = catFromSlug("en", (await params).category)!;
  return siteOg("en", CAT_TEXT.en[k].h1, CAT_TEXT.en[k].label, k);
}
