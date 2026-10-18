import { notFound } from "next/navigation";
import Category, { categoryMeta } from "@/views/Category";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { catSlug, catFromSlug } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategoryKey[]).map((k) => ({ category: catSlug("fr", k) }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const key = catFromSlug("fr", (await params).category);
  return key ? categoryMeta("fr", key) : {};
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const key = catFromSlug("fr", (await params).category);
  if (!key) notFound();
  return <Category locale="fr" cat={key} />;
}
