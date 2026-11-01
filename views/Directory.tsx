import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import { pageMeta } from "@/lib/meta";
import { TOOLS } from "@/lib/tools";
import { getArticles, articlePath } from "@/lib/content";
import { CAT_TEXT, base, catSlug, type Locale } from "@/lib/i18n";
import { CATEGORIES, type CategoryKey } from "@/lib/site";

const TXT = {
  fr: {
    title: "Annuaire des outils e-commerce",
    desc: "Tous les outils e-commerce comparés par Radar Ecom (avis clients, emailing, retours, logistique, paiement, veille, visibilité IA), classés par catégorie, avec les articles où ils apparaissent.",
    h1: "L'annuaire des outils e-commerce",
    lead: "Les outils que Radar Ecom a comparés, rangés par catégorie. L'ordre est alphabétique : aucune place ne s'achète. Un outil manque ? Soumets-le.",
    submit: "Soumettre un outil",
    articles: "Articles",
    site: "Site officiel",
    none: "Pas encore d'article",
    count: (n: number) => `${n} outils`,
  },
  en: {
    title: "E-commerce tools directory",
    desc: "Every e-commerce tool compared by Radar Ecom (reviews, email, returns, shipping, payments, competitor intel, AI visibility), grouped by category with the articles where they appear.",
    h1: "The e-commerce tools directory",
    lead: "The tools Radar Ecom has compared, grouped by category. The order is alphabetical: no spot can be bought. A tool missing? Submit it.",
    submit: "Submit a tool",
    articles: "Articles",
    site: "Official site",
    none: "No article yet",
    count: (n: number) => `${n} tools`,
  },
};

export function directoryMeta(locale: Locale) {
  return pageMeta(locale, { fr: "/outils/", en: "/en/tools/" }, { title: TXT[locale].title, description: TXT[locale].desc });
}

export default function Directory({ locale }: { locale: Locale }) {
  const x = TXT[locale];
  const arts = getArticles(locale).filter((a) => !a.sample && a.category !== "barometre");
  const byTool = new Map<string, { cat: CategoryKey; items: typeof arts }>();
  for (const a of arts) {
    for (const t of a.tools) {
      const e = byTool.get(t) || { cat: a.category as CategoryKey, items: [] };
      e.items.push(a);
      byTool.set(t, e);
    }
  }
  const groups = new Map<CategoryKey, string[]>();
  for (const name of Object.keys(TOOLS).sort((a, b) => a.localeCompare(b))) {
    const e = byTool.get(name);
    if (!e) continue;
    groups.set(e.cat, [...(groups.get(e.cat) || []), name]);
  }
  const keys = (Object.keys(CATEGORIES) as CategoryKey[]).filter((k) => groups.has(k));
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: x.title,
    itemListElement: [...byTool.keys()].sort().map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n, url: TOOLS[n]?.url })),
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap">
        <section className="page-head">
          <span className="chip">{x.title}</span>
          <h1>{x.h1}</h1>
          <p>{x.lead}</p>
          <p>
            <Link className="dir-btn" href={locale === "fr" ? "/soumettre-un-outil/" : "/en/submit-tool/"}>
              {x.submit}
            </Link>
          </p>
        </section>
        {keys.map((k) => (
          <section key={k} className="dir-sec" aria-labelledby={`d-${k}`}>
            <h2 id={`d-${k}`}>
              <Link href={`${base(locale)}/${catSlug(locale, k)}/`}>{CAT_TEXT[locale][k].label}</Link> <small>{x.count(groups.get(k)!.length)}</small>
            </h2>
            <ul className="dir-grid">
              {groups.get(k)!.map((name) => {
                const e = byTool.get(name)!;
                return (
                  <li key={name} className="dir-card">
                    <div className="dir-head">
                      <ToolLogo name={name} />
                      <b>{name}</b>
                    </div>
                    <a href={TOOLS[name].url} rel="noopener" target="_blank">
                      {x.site}
                    </a>
                    <ul>
                      {e.items.slice(0, 4).map((a) => (
                        <li key={a.slug}>
                          <Link href={articlePath(a)}>{a.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
