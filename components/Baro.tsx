"use client";
import { useState } from "react";
import Link from "next/link";
import ToolLogo from "./ToolLogo";
import { ENGINES } from "@/lib/site";
import type { Barometre } from "@/lib/content";
import { T, base, catSlug, type Locale } from "@/lib/i18n";

export default function Baro({ data, link = true, locale = "fr" }: { data: Barometre; link?: boolean; locale?: Locale }) {
  const t = T[locale];
  const [engine, setEngine] = useState<string>("chatgpt");
  const label = ENGINES.find((e) => e.key === engine)!.label;
  const rows = data.engines[engine] || [];
  return (
    <div className="tile t-baro" id="baro">
      <div className="radar" aria-hidden="true">
        <span className="blip" style={{ top: "58%", left: "30%" }} />
        <span className="blip" style={{ top: "32%", left: "62%" }} />
        <span className="blip" style={{ top: "72%", left: "64%" }} />
      </div>
      <div className="kicker">
        <span>{t.baroKicker}</span>
        {locale === "en" ? data.label_en || data.label : data.label}
      </div>
      <h3>
        {t.baroTitle(label === "AI Overviews" ? "Google AI Overviews" : label, locale === "en" ? data.category_en || data.category : data.category)}
      </h3>
      <div className="engines" role="group" aria-label={t.engineGroup}>
        {ENGINES.map((e) => (
          <button key={e.key} type="button" aria-pressed={engine === e.key} onClick={() => setEngine(e.key)}>
            {e.label}
          </button>
        ))}
      </div>
      <div className="bars">
        {rows.map((r) => (
          <div className="bar-row" key={r.tool}>
            <span>
              <ToolLogo name={r.tool} />
              {r.tool}
            </span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${r.share}%` }} />
            </div>
            <span className="v">
              {r.share}{locale === "en" ? "" : " "}%<em>{r.delta > 0 ? `▲${r.delta}` : r.delta < 0 ? `▼${-r.delta}` : "="}</em>
            </span>
          </div>
        ))}
      </div>
      <div className="meta">
        <span className="sample">
          {t.baroShare(data.prompts)}
          {data.sample ? ` · ${t.sampleData}` : ""}
        </span>
        {link && (
          <Link className="arrow" href={`${base(locale)}/${catSlug(locale, "barometre")}/`} aria-label={t.seeBaro}>
            →
          </Link>
        )}
      </div>
    </div>
  );
}
