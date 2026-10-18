import ArticleGrid from "@/components/ArticleGrid";
import Baro from "@/components/Baro";
import RefineBand from "@/components/RefineBand";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, getBarometre } from "@/lib/content";
import { toCard } from "@/lib/cards";
import { T, CAT_TEXT, catSlug, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export function categoryMeta(locale: Locale, key: CategoryKey) {
  const c = CAT_TEXT[locale][key];
  return pageMeta(locale, { fr: `/${catSlug("fr", key)}/`, en: `/en/${catSlug("en", key)}/` }, { title: c.title, description: c.intro });
}

export default function Category({ locale, cat }: { locale: Locale; cat: CategoryKey }) {
  const t = T[locale];
  const c = CAT_TEXT[locale][cat];
  const articles = getArticles(locale).filter((a) => a.category === cat);
  const isBaro = cat === "barometre";
  const baro = getBarometre();
  return (
    <main>
      <div className="wrap">
        <section className="page-head">
          <span className="chip">
            <span className="dot" style={{ background: CATEGORIES[cat].color }} />
            {c.label}
          </span>
          <h1>{c.h1}</h1>
          <p>{c.intro}</p>
        </section>
        {isBaro && (
          <section className="baro-page">
            <Baro data={baro} locale={locale} link={false} />
            <div className="tile t-stats" style={{ gridColumn: "auto" }}>
              <div className="stat">
                <b>4</b>
                <span>{t.engines}</span>
              </div>
              <div className="stat">
                <b>{baro.prompts}</b>
                <span>{t.promptsCat}</span>
              </div>
              <div className="stat">
                <b>{locale === "en" ? "1st" : "1er"}</b>
                <span>{t.firstOfMonth}</span>
              </div>
            </div>
          </section>
        )}
        {isBaro && <RefineBand ctx="baro" locale={locale} />}
        {cat === "visibilite-ia" && <RefineBand ctx="geo" locale={locale} />}
        <ArticleGrid cards={articles.map(toCard)} locale={locale} filters={false} title={isBaro ? t.editions : t.allArticles} />
      </div>
    </main>
  );
}
