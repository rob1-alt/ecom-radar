"use client";
import { useState } from "react";
import { CATEGORIES, type CategoryKey } from "@/lib/site";

export default function GridFilter({ cats, target }: { cats: CategoryKey[]; target: string }) {
  const [cat, setCat] = useState<string>("all");
  const pick = (k: string) => {
    setCat(k);
    document.getElementById(target)?.setAttribute("data-filter", k);
  };
  return (
    <div className="filters" role="group" aria-label="Filtrer par catégorie">
      <button type="button" aria-pressed={cat === "all"} onClick={() => pick("all")}>
        Tout
      </button>
      {cats.map((k) => (
        <button key={k} type="button" aria-pressed={cat === k} onClick={() => pick(k)}>
          <span className="dot" style={{ background: CATEGORIES[k].color }} />
          {CATEGORIES[k].label}
        </button>
      ))}
    </div>
  );
}
