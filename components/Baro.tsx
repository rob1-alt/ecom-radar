"use client";
import { useState } from "react";
import Link from "next/link";
import ToolLogo from "./ToolLogo";
import { ENGINES } from "@/lib/site";
import type { Barometre } from "@/lib/content";

export default function Baro({ data, link = true }: { data: Barometre; link?: boolean }) {
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
        <span>Baromètre IA</span>
        {data.label}
      </div>
      <h3>
        Qui {label === "AI Overviews" ? "Google AI Overviews" : label} recommande pour {data.category}
      </h3>
      <div className="engines" role="group" aria-label="Moteur IA">
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
              {r.share} %<em>{r.delta > 0 ? `▲${r.delta}` : r.delta < 0 ? `▼${-r.delta}` : "="}</em>
            </span>
          </div>
        ))}
      </div>
      <div className="meta">
        <span className="sample">
          Part de voix sur {data.prompts} prompts{data.sample ? " · données d'exemple" : ""}
        </span>
        {link && (
          <Link className="arrow" href="/barometre/" aria-label="Voir le baromètre complet">
            →
          </Link>
        )}
      </div>
    </div>
  );
}
