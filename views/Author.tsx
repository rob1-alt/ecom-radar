import Link from "next/link";
import ArticleGrid from "@/components/ArticleGrid";
import RefineBand from "@/components/RefineBand";
import { getArticles } from "@/lib/content";
import { toCard } from "@/lib/cards";
import { pageMeta } from "@/lib/meta";
import { AUTHOR, authorLd } from "@/lib/author";
import { SITE } from "@/lib/site";
import { T, type Locale } from "@/lib/i18n";

const TXT = {
  fr: {
    title: "Robin Pautigny, auteur de Radar Ecom",
    desc: "Robin Pautigny est le fondateur de Refine, l'outil GEO qui mesure ce que les assistants IA recommandent. Il écrit et vérifie les comparatifs de Radar Ecom.",
    chip: "Auteur",
    lead: "Fondateur de Refine, l'outil de GEO (Generative Engine Optimization) qui mesure ce que ChatGPT, Perplexity, Gemini et Google AI Overviews recommandent. Il écrit et vérifie les comparatifs de Radar Ecom.",
    how: "Comment il travaille",
    howP: "Chaque article part d'une question réelle d'e-commerçant. Les prix et fonctionnalités sont relevés sur les pages officielles des éditeurs, avec un lien et une date. Ce qui n'a pas pu être vérifié n'est pas publié.",
    method: "Lire la méthodologie",
    contact: "Le contacter",
    contactP: "Une erreur, une mise à jour de prix, un outil à ajouter : écris-lui sur LinkedIn avec la source.",
    articles: "Ses articles",
  },
  en: {
    title: "Robin Pautigny, author at Radar Ecom",
    desc: "Robin Pautigny is the founder of Refine, the GEO tool that measures what AI assistants recommend. He writes and fact-checks Radar Ecom's comparisons.",
    chip: "Author",
    lead: "Founder of Refine, the GEO (Generative Engine Optimization) tool that measures what ChatGPT, Perplexity, Gemini and Google AI Overviews recommend. He writes and fact-checks Radar Ecom's comparisons.",
    how: "How he works",
    howP: "Every article starts from a real merchant question. Prices and features are taken from the vendors' official pages, with a link and a date. Anything that couldn't be verified isn't published.",
    method: "Read the methodology",
    contact: "Get in touch",
    contactP: "A mistake, a price change, a tool to add: message him on LinkedIn with the source.",
    articles: "His articles",
  },
};

export function authorMeta(locale: Locale) {
  return pageMeta(locale, AUTHOR.path, { title: TXT[locale].title, description: TXT[locale].desc });
}

export default function Author({ locale }: { locale: Locale }) {
  const x = TXT[locale];
  const t = T[locale];
  const articles = getArticles(locale);
  const ld = { "@context": "https://schema.org", "@type": "ProfilePage", url: SITE.url + AUTHOR.path[locale], mainEntity: authorLd(locale) };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap">
        <section className="page-head">
          <span className="chip">{x.chip}</span>
          <h1>{AUTHOR.name}</h1>
          <p>{x.lead}</p>
        </section>
        <div className="method">
          <h2>{x.how}</h2>
          <p>
            {x.howP} <Link href={t.methodPath}>{x.method} →</Link>
          </p>
          <h2>{x.contact}</h2>
          <p>
            {x.contactP}{" "}
            <a href={AUTHOR.linkedin} rel="me noopener" target="_blank">
              LinkedIn →
            </a>
          </p>
        </div>
        <RefineBand ctx="home" locale={locale} />
        <ArticleGrid cards={articles.map(toCard)} locale={locale} filters={false} title={x.articles} />
      </div>
    </main>
  );
}
