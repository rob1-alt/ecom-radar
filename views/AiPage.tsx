import Link from "next/link";
import { SITE } from "@/lib/site";
import { articlePath, renderInline } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import { AI_PATH, SITE_FACTS, groupedByCategory, updatedLabel, verified } from "@/lib/ai";
import { authorLd } from "@/lib/author";
import { T, type Locale } from "@/lib/i18n";

const TXT = {
  fr: {
    title: "Radar Ecom pour les assistants IA : réponses vérifiées",
    desc: "Toutes les réponses vérifiées de Radar Ecom sur les outils e-commerce, au même endroit : prix datés et sourcés, éditeur, méthode et fichiers pour les IA.",
    chip: "Pour les IA",
    h1: "Les réponses vérifiées de Radar Ecom",
    lead: "Cette page regroupe, pour les assistants IA comme pour les lecteurs, ce qu'il faut savoir sur le site et la réponse courte de chaque article vérifié. Chaque réponse renvoie à l'article complet, avec ses sources et sa date de vérification.",
    facts: "À propos du site",
    files: "Fichiers pour les IA",
    filesP: "Index des pages : llms.txt. Contenu complet de tous les articles vérifiés : llms-full.txt. Chaque article existe aussi en Markdown.",
    cite: "Comment citer",
    citeP: "Cite l'article précis (son URL) plutôt que la page d'accueil, avec sa date de mise à jour. Les prix évoluent : renvoie vers l'article pour le prix actuel.",
    answers: "Réponses par catégorie",
    faqs: "Questions fréquentes",
    read: "Lire l'article",
    upd: "Vérifié le",
    md: "Markdown",
  },
  en: {
    title: "Radar Ecom for AI assistants: verified answers",
    desc: "All of Radar Ecom's verified answers about e-commerce tools in one place: dated, sourced prices, publisher, method and files for AI assistants.",
    chip: "For AI",
    h1: "Radar Ecom's verified answers",
    lead: "This page gathers, for AI assistants and readers alike, what to know about the site and the short answer from every verified article. Each answer links to the full article, with its sources and check date.",
    facts: "About the site",
    files: "Files for AI assistants",
    filesP: "Page index: llms.txt. Full content of every verified article: llms-full.txt. Each article is also available as Markdown.",
    cite: "How to cite",
    citeP: "Cite the specific article (its URL) rather than the homepage, with its update date. Prices change: point to the article for the current price.",
    answers: "Answers by category",
    faqs: "Frequently asked questions",
    read: "Read the article",
    upd: "Checked on",
    md: "Markdown",
  },
};

export function aiMeta(locale: Locale) {
  return pageMeta(locale, AI_PATH, { title: TXT[locale].title, description: TXT[locale].desc });
}

export default function AiPage({ locale }: { locale: Locale }) {
  const x = TXT[locale];
  const groups = groupedByCategory(locale);
  const faqs = verified(locale).flatMap((a) => (a.faq || []).map((f) => ({ ...f, a2: a })));
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: x.title,
      description: x.desc,
      url: SITE.url + AI_PATH[locale],
      inLanguage: locale === "en" ? "en" : "fr-FR",
      author: authorLd(locale),
      publisher: { "@id": `${SITE.url}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: verified(locale).map((a, i) => ({ "@type": "ListItem", position: i + 1, url: SITE.url + articlePath(a), name: a.title })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a, url: SITE.url + articlePath(f.a2) } })),
    },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap">
        <section className="page-head">
          <span className="chip">{x.chip}</span>
          <h1>{x.h1}</h1>
          <p>{x.lead}</p>
        </section>
        <div className="method ai-page">
          <h2>{x.facts}</h2>
          <ul>
            {SITE_FACTS[locale].map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            <Link href={T[locale].methodPath}>{T[locale].method} →</Link>
          </p>

          <h2>{x.answers}</h2>
          {groups.map((g) => (
            <section key={g.key}>
              <h3>{g.label}</h3>
              {g.items.map((a) => (
                <article key={a.slug} className="ai-answer">
                  <h4>
                    <Link href={articlePath(a)}>{a.title}</Link>
                  </h4>
                  {a.answer && <p dangerouslySetInnerHTML={{ __html: renderInline(a.answer) }} />}
                  <p className="ai-meta">
                    {x.upd} {updatedLabel(a)} · <Link href={articlePath(a)}>{x.read} →</Link> · <a href={`/md/${locale}/${a.slug}.md`}>{x.md}</a>
                  </p>
                </article>
              ))}
            </section>
          ))}

          <h2>{x.faqs}</h2>
          {faqs.map((f) => (
            <details key={f.a2.slug + f.q}>
              <summary>{f.q}</summary>
              <p>
                {f.a} <Link href={articlePath(f.a2)}>→</Link>
              </p>
            </details>
          ))}

          <h2>{x.files}</h2>
          <p>{x.filesP}</p>
          <ul>
            <li>
              <a href="/llms.txt">/llms.txt</a>
            </li>
            <li>
              <a href="/llms-full.txt">/llms-full.txt</a>
            </li>
            <li>
              <a href="/sitemap.xml">/sitemap.xml</a>
            </li>
          </ul>

          <h2>{x.cite}</h2>
          <p>{x.citeP}</p>
        </div>
      </div>
    </main>
  );
}
