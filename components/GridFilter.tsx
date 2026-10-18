"use client";
import { useState } from "react";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { T, CAT_TEXT, type Locale } from "@/lib/i18n";

export default function GridFilter({ cats, target, locale }: { cats: CategoryKey[]; target: string; locale: Locale }) {
  const t = T[locale];
  const [cat, setCat] = useState<string>("all");
  const pick = (k: string) => {
    setCat(k);
    document.getElementById(target)?.setAttribute("data-filter", k);
  };
  return (
    <div className="filters" role="group" aria-label={t.filterLabel}>
      <button type="button" aria-pressed={cat === "all"} onClick={() => pick("all")}>
        {t.all}
      </button>
      {cats.map((k) => (
        <button key={k} type="button" aria-pressed={cat === k} onClick={() => pick(k)}>
          <span className="dot" style={{ background: CATEGORIES[k].color }} />
          {CAT_TEXT[locale][k].label}
        </button>
      ))}
    </div>
  );
}
