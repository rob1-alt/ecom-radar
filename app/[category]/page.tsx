import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleGrid from "@/components/ArticleGrid";
import Baro from "@/components/Baro";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, getBarometre } from "@/lib/content";
import { toCard } from "@/lib/cards";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategoryKey[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORIES[category as CategoryKey];
  if (!c) return {};
  return {
    title: category === "barometre" ? "Baromètre IA des outils e-commerce" : `Meilleurs outils ${c.label.toLowerCase()} e-commerce`,
    description: c.intro,
    alternates: { canonical: `/${category}/` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = CATEGORIES[category as CategoryKey];
  if (!c) notFound();
  const articles = getArticles().filter((a) => a.category === category);
  const isBaro = category === "barometre";
  return (
    <main>
      <div className="wrap">
        <section className="page-head">
          <span className="chip">
            <span className="dot" style={{ background: c.color }} />
            {c.label}
          </span>
          <h1>{isBaro ? "Ce que les IA recommandent aux e-commerçants" : `Les meilleurs outils ${c.label.toLowerCase()}`}</h1>
          <p>{c.intro}</p>
        </section>
        {isBaro && (
          <section className="baro-page">
            <Baro data={getBarometre()} link={false} />
            <div className="tile t-stats" style={{ gridColumn: "auto" }}>
              <div className="stat">
                <b>4</b>
                <span>moteurs IA</span>
              </div>
              <div className="stat">
                <b>{getBarometre().prompts}</b>
                <span>prompts / catégorie</span>
              </div>
              <div className="stat">
                <b>1er</b>
                <span>du mois</span>
              </div>
            </div>
          </section>
        )}
        <ArticleGrid cards={articles.map(toCard)} filters={false} title={isBaro ? "Les éditions" : "Tous les articles"} />
      </div>
    </main>
  );
}
