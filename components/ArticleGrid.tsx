"use client";
import { useState } from "react";
import Link from "next/link";
import ToolLogo from "./ToolLogo";
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

export default function ArticleGrid({ cards, filters = true, title = "Derniers articles" }: { cards: CardData[]; filters?: boolean; title?: string }) {
  const [cat, setCat] = useState<"all" | CategoryKey>("all");
  const list = cards.filter((c) => cat === "all" || c.category === cat);
  const cats = Array.from(new Set(cards.map((c) => c.category)));
  return (
    <section id="articles">
      <div className="section-head">
        <h2>{title}</h2>
        {filters && (
          <div className="filters" role="group" aria-label="Filtrer par catégorie">
            <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")}>
              Tout
            </button>
            {cats.map((k) => (
              <button key={k} type="button" aria-pressed={cat === k} onClick={() => setCat(k)}>
                <span className="dot" style={{ background: CATEGORIES[k].color }} />
                {CATEGORIES[k].label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="grid">
        {list.map((c) => {
          const wide = c.wide && cat === "all";
          const meta = CATEGORIES[c.category];
          const onDark = wide && meta.onColor === "#fff";
          return (
            <Link
              key={c.href}
              href={c.href}
              className={`card${wide ? " wide" : ""}${onDark ? " on-cobalt" : ""}`}
              style={{ ["--c" as string]: meta.color }}
            >
              <div className="top">
                <span className="cat">
                  <span className="dot" style={{ background: wide ? "currentColor" : meta.color }} />
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
                <span className="cited" aria-label={`Cité par ${c.cited.filter(Boolean).length} IA sur 4`}>
                  {c.cited.map((on, k) => (
                    <i key={k} className={on ? "on" : ""}>
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
