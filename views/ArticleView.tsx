import { AUTHOR, authorLd } from "@/lib/author";
import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import RefineBand from "@/components/RefineBand";
import { REFINE_TXT, refineLink } from "@/lib/refine";
import ArticleGrid from "@/components/ArticleGrid";
import { CATEGORIES, SITE } from "@/lib/site";
import { getArticles, articlePath, alternatePath, renderInline, type Article } from "@/lib/content";
import { TOOLS } from "@/lib/tools";
import { toCard } from "@/lib/cards";
import { T, CAT_TEXT, TYPE_TEXT, base, catSlug, fmtDate, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export function articleMeta(a: Article) {
  return pageMeta(
    a.locale,
    { fr: alternatePath(a, "fr"), en: alternatePath(a, "en") },
    {
      title: a.title,
      description: a.description,
      openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date, modifiedTime: a.updated, locale: T[a.locale].ogLocale, siteName: SITE.name },
    }
  );
}

export default function ArticleView({ a }: { a: Article }) {
  const locale: Locale = a.locale;
  const t = T[locale];
  const c = CATEGORIES[a.category];
  const ct = CAT_TEXT[locale][a.category];
  const url = SITE.url + articlePath(a);
  const catUrl = `${base(locale)}/${catSlug(locale, a.category)}/`;
  const toc = [...(a.answer ? [{ id: "reponse", text: t.shortAnswer }] : []), ...a.headings, ...(a.faq?.length ? [{ id: "faq", text: t.faq }] : [])];
  const related = getArticles(locale)
    .filter((x) => x.slug !== a.slug && (x.category === a.category || x.tools.some((tool) => a.tools.includes(tool))))
    .slice(0, 3);

  const ld: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.updated,
      inLanguage: locale === "en" ? "en" : "fr-FR",
      mainEntityOfPage: url,
      author: authorLd(locale),
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
      about: a.tools.map((tool) => ({ "@type": "SoftwareApplication", name: tool, url: TOOLS[tool]?.url, applicationCategory: "BusinessApplication" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: `${SITE.url}${base(locale)}/` },
        { "@type": "ListItem", position: 2, name: ct.label, item: SITE.url + catUrl },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];
  if (a.type === "Comparatif" || a.type === "Alternatives") {
    ld.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: a.title,
      itemListElement: a.tools.map((tool, i) => ({ "@type": "ListItem", position: i + 1, name: tool, url: TOOLS[tool]?.url })),
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
        <Link className="back" href={catUrl}>
          ← {ct.label}
        </Link>
        <div className="a-hero" style={{ ["--c" as string]: c.color, ["--c-on" as string]: c.onColor }}>
          <div className="kicker">
            <span>{TYPE_TEXT[locale][a.type]}</span>
            {ct.label}
          </div>
          <h1>{a.title}</h1>
          {a.tools.length > 0 && (
            <div className="logos">
              {a.tools.map((tool) => (
                <ToolLogo key={tool} name={tool} />
              ))}
            </div>
          )}
          <div className="byline">
            <span>
              {t.by} <Link href={AUTHOR.path[locale]} rel="author">{SITE.author}</Link>
            </span>
            <span>
              {t.updatedOn} <time dateTime={a.updated}>{fmtDate(a.updated, locale, true)}</time>
            </span>
            <span>
              {a.readTime} {t.min}
            </span>
          </div>
          {a.sample && <div className="sample-note">{t.sampleNote}</div>}
        </div>
        <div className="a-body">
          <nav className="toc" aria-label={t.toc}>
            <b>{t.toc}</b>
            {toc.map((h) => (
              <a key={h.id} href={`#${h.id}`}>
                {h.text}
              </a>
            ))}
          </nav>
          <div className="prose">
            {a.answer && (
              <div className="answer" id="reponse">
                <b className="lbl">{t.shortAnswer}</b>
                <span dangerouslySetInnerHTML={{ __html: renderInline(a.answer) }} />
              </div>
            )}
            {a.category === "visibilite-ia" && (
              <p className="disclose">
                {REFINE_TXT[locale].disclose}{" "}
                <a href={refineLink("disclosure", locale)} rel="noopener" target="_blank">
                  getrefine.ai
                </a>
              </p>
            )}
            <div dangerouslySetInnerHTML={{ __html: a.html }} />
            {a.faq && a.faq.length > 0 && (
              <>
                <h2 id="faq">{t.faq}</h2>
                {a.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </>
            )}
            <RefineBand ctx={a.category === "barometre" ? "baro" : "article"} locale={locale} />
          </div>
        </div>
        {related.length > 0 && (
          <div className="related">
            <ArticleGrid cards={related.map((r) => ({ ...toCard(r), wide: false }))} locale={locale} filters={false} title={t.readAlso} />
          </div>
        )}
      </article>
    </main>
  );
}
