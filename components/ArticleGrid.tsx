import Link from "next/link";
import ToolLogo from "./ToolLogo";
import GridFilter from "./GridFilter";
import { CATEGORIES, ENGINES, type CategoryKey } from "@/lib/site";
import { T, CAT_TEXT, type Locale } from "@/lib/i18n";

export type CardData = {
  href: string;
  title: string;
  description: string;
  category: CategoryKey;
  type: string;
  dateLabel: string;
  readTime: number;
  tools: string[];
  cited: number[];
  wide?: boolean;
};

// Composant serveur : les cartes sont dans le HTML ; seul le filtre est interactif.
export default function ArticleGrid({ cards, locale = "fr", filters = true, title, id = "articles" }: { cards: CardData[]; locale?: Locale; filters?: boolean; title?: string; id?: string }) {
  const t = T[locale];
  const cats = Array.from(new Set(cards.map((c) => c.category)));
  const gridId = `${id}-grid`;
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{title || t.latest}</h2>
        {filters && <GridFilter cats={cats} target={gridId} locale={locale} />}
      </div>
      <div className="grid" id={gridId} data-filter="all">
        {cards.map((c) => {
          const meta = CATEGORIES[c.category];
          const onDark = c.wide && meta.onColor === "#fff";
          return (
            <Link key={c.href} href={c.href} data-cat={c.category} className={`card${c.wide ? " wide" : ""}${onDark ? " on-cobalt" : ""}`} style={{ ["--c" as string]: meta.color }}>
              <div className="top">
                <span className="cat">
                  <span className="dot" style={{ background: c.wide ? "currentColor" : meta.color }} />
                  {CAT_TEXT[locale][c.category].label}
                </span>
                <span>{c.type}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="foot">
                <span className="left">
                  <span className="logos">
                    {c.tools.slice(0, 4).map((t) => (
                      <ToolLogo key={t} name={t} />
                    ))}
                  </span>
                  <span>
                    {c.dateLabel} · {c.readTime} {t.min}
                  </span>
                </span>
                {c.cited.some(Boolean) && <span className="cited" role="img" aria-label={t.citedBy(c.cited.filter(Boolean).length)}>
                  {c.cited.map((on, k) => (
                    <i key={k} className={`lg${on ? " on" : ""}`} data-i={ENGINES[k].short} title={ENGINES[k].label} aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://www.google.com/s2/favicons?domain=${ENGINES[k].domain}&sz=64`} alt="" width={20} height={20} decoding="async" loading="lazy" />
                    </i>
                  ))}
                </span>}
              </div>
            </Link>
          );
        })}
      </div>
      {cards.some((c) => c.cited.some(Boolean)) && <div className="legend">
        <span>{t.legendA}</span>
        <span>{t.legendB}</span>
      </div>}
    </section>
  );
}
