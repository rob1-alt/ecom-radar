import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolLogo from "@/components/ToolLogo";
import ArticleGrid from "@/components/ArticleGrid";
import { CATEGORIES, SITE } from "@/lib/site";
import { getArticles, getArticle, articlePath, frDate, renderInline } from "@/lib/content";
import { TOOLS } from "@/lib/tools";
import { toCard } from "@/lib/cards";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: articlePath(a) },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date, modifiedTime: a.updated },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const a = getArticle(slug);
  if (!a || a.category !== category) notFound();
  const c = CATEGORIES[a.category];
  const url = SITE.url + articlePath(a);
  const toc = [...(a.answer ? [{ id: "reponse", text: "La réponse courte" }] : []), ...a.headings, ...(a.faq?.length ? [{ id: "faq", text: "Questions fréquentes" }] : [])];
  const related = getArticles().filter((x) => x.slug !== a.slug && (x.category === a.category || x.tools.some((t) => a.tools.includes(t)))).slice(0, 3);

  const ld: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.updated,
      inLanguage: "fr-FR",
      mainEntityOfPage: url,
      author: { "@type": "Person", name: SITE.author },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
      about: a.tools.map((t) => ({ "@type": "SoftwareApplication", name: t, url: TOOLS[t]?.url, applicationCategory: "BusinessApplication" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url + "/" },
        { "@type": "ListItem", position: 2, name: c.label, item: `${SITE.url}/${a.category}/` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];
  if (a.type === "Comparatif" || a.type === "Alternatives") {
    ld.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: a.title,
      itemListElement: a.tools.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t, url: TOOLS[t]?.url })),
    });
  }
  if (a.faq?.length) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="wrap article">
        <Link className="back" href={`/${a.category}/`}>
          ← {c.label}
        </Link>
        <div className="a-hero" style={{ ["--c" as string]: c.color, ["--c-on" as string]: c.onColor }}>
          <div className="kicker">
            <span>{a.type}</span>
            {c.label}
          </div>
          <h1>{a.title}</h1>
          {a.tools.length > 0 && (
            <div className="logos">
              {a.tools.map((t) => (
                <ToolLogo key={t} name={t} />
              ))}
            </div>
          )}
          <div className="byline">
            <span>Par {SITE.author}</span>
            <span>
              Mis à jour le <time dateTime={a.updated}>{frDate(a.updated, true)}</time>
            </span>
            <span>{a.readTime} min</span>
          </div>
          {a.sample && <div className="sample-note">Contenu d'exemple : chiffres et prix à vérifier avant publication</div>}
        </div>
        <div className="a-body">
          <nav className="toc" aria-label="Sommaire">
            <b>Sommaire</b>
            {toc.map((h) => (
              <a key={h.id} href={`#${h.id}`}>
                {h.text}
              </a>
            ))}
          </nav>
          <div className="prose">
            {a.answer && (
              <div className="answer" id="reponse">
                <b className="lbl">La réponse courte</b>
                <span dangerouslySetInnerHTML={{ __html: renderInline(a.answer) }} />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: a.html }} />
            {a.faq && a.faq.length > 0 && (
              <>
                <h2 id="faq">Questions fréquentes</h2>
                {a.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </>
            )}
          </div>
        </div>
        {related.length > 0 && (
          <div className="related">
            <ArticleGrid cards={related.map((r) => ({ ...toCard(r), wide: false }))} filters={false} title="À lire aussi" />
          </div>
        )}
      </article>
    </main>
  );
}
