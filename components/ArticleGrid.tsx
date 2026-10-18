import Link from "next/link";
import ToolLogo from "./ToolLogo";
import GridFilter from "./GridFilter";
import { CATEGORIES, ENGINES, type CategoryKey } from "@/lib/site";

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
export default function ArticleGrid({ cards, filters = true, title = "Derniers articles", id = "articles" }: { cards: CardData[]; filters?: boolean; title?: string; id?: string }) {
  const cats = Array.from(new Set(cards.map((c) => c.category)));
  const gridId = `${id}-grid`;
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{title}</h2>
        {filters && <GridFilter cats={cats} target={gridId} />}
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
                  {meta.label}
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
                    {c.dateLabel} · {c.readTime} min
                  </span>
                </span>
                <span className="cited" role="img" aria-label={`Cité par ${c.cited.filter(Boolean).length} IA sur 4`}>
                  {c.cited.map((on, k) => (
                    <i key={k} className={on ? "on" : ""} aria-hidden="true">
                      {ENGINES[k].short}
                    </i>
                  ))}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="legend">
        <span>C ChatGPT · P Perplexity · Ge Gemini · G AI Overviews</span>
        <span>Carré plein : l'article est cité ce mois-ci.</span>
      </div>
    </section>
  );
}
