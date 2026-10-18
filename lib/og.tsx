import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { CategoryKey } from "./site";
import { CAT_TEXT, TYPE_TEXT, fmtDate, type Locale } from "./i18n";
import type { Article } from "./content";

// Images Open Graph (aperçus LinkedIn, X, Slack…) générées au build.
export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#0d0e1a";
const INK_SOFT = "#4a4d63";
const BG = "#eceef5";

const CAT_COLOR: Record<CategoryKey, { bg: string; on: string }> = {
  "avis-clients": { bg: "#ff8ad4", on: INK },
  emailing: { bg: "#2e44ff", on: "#fff" },
  "retours-sav": { bg: "#ff7a1f", on: INK },
  veille: { bg: "#b9a6ff", on: INK },
  logistique: { bg: "#4fe0b0", on: INK },
  paiement: { bg: "#6cc8ff", on: INK },
  "visibilite-ia": { bg: "#c6f432", on: INK },
  barometre: { bg: "#ffd43b", on: INK },
};

const font = (f: string) => fs.readFileSync(path.join(process.cwd(), "lib", "og-fonts", f));
const fonts = () => [
  { name: "display", data: font("bricolage-grotesque-latin-800-normal.woff"), weight: 800 as const, style: "normal" as const },
  { name: "body", data: font("geist-latin-500-normal.woff"), weight: 500 as const, style: "normal" as const },
  { name: "mono", data: font("geist-mono-latin-500-normal.woff"), weight: 500 as const, style: "normal" as const },
];

const ARCS: [string, string][] = [
  ["#4a4a4a", "M61.49 59.64A15 15 0 0 0 61.49 40.36L58.04 43.25A10.5 10.5 0 0 1 58.04 56.75Z"],
  ["#4a4a4a", "M38.51 40.36A15 15 0 0 0 38.51 59.64L41.96 56.75A10.5 10.5 0 0 1 41.96 43.25Z"],
  ["#6e6e6e", "M66.09 63.5A21 21 0 0 0 66.09 36.5L62.1 39.84A15.8 15.8 0 0 1 62.1 60.16Z"],
  ["#6e6e6e", "M33.91 36.5A21 21 0 0 0 33.91 63.5L37.9 60.16A15.8 15.8 0 0 1 37.9 39.84Z"],
  ["#929292", "M71.45 68.0A28 28 0 0 0 71.45 32.0L66.7 35.99A21.8 21.8 0 0 1 66.7 64.01Z"],
  ["#929292", "M28.55 32.0A28 28 0 0 0 28.55 68.0L33.3 64.01A21.8 21.8 0 0 1 33.3 35.99Z"],
  ["#b8b8b8", "M77.58 73.14A36 36 0 0 0 77.58 26.86L72.06 31.49A28.8 28.8 0 0 1 72.06 68.51Z"],
  ["#b8b8b8", "M22.42 26.86A36 36 0 0 0 22.42 73.14L27.94 68.51A28.8 28.8 0 0 1 27.94 31.49Z"],
  ["#dcdcdc", "M85.24 79.57A46 46 0 0 0 85.24 20.43L78.19 26.35A36.8 36.8 0 0 1 78.19 73.65Z"],
  ["#dcdcdc", "M14.76 20.43A46 46 0 0 0 14.76 79.57L21.81 73.65A36.8 36.8 0 0 1 21.81 26.35Z"],
];

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg width="56" height="56" viewBox="0 0 100 100">
        {ARCS.map(([fill, d], i) => (
          <path key={i} fill={fill} d={d} />
        ))}
        <circle cx="50" cy="50" r="7" fill={INK} />
      </svg>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
        <span style={{ fontFamily: "display", fontSize: 38, letterSpacing: -1.6, color: INK, lineHeight: 1 }}>radar</span>
        <span style={{ fontFamily: "mono", fontSize: 15, letterSpacing: 1.2, color: INK_SOFT, textTransform: "uppercase", marginBottom: 3 }}>ecom</span>
      </div>
    </div>
  );
}

type Card = { kicker?: string; kickerBg: string; kickerOn: string; type?: string; title: string; meta?: string };

function Frame({ c }: { c: Card }) {
  const size = c.title.length > 70 ? 58 : c.title.length > 45 ? 66 : 76;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: BG, fontFamily: "body", color: INK, overflow: "hidden" }}>
      {/* tuiles décoratives, reprises de la home */}
      <div style={{ position: "absolute", right: -40, top: -46, display: "flex", flexWrap: "wrap", width: 300, gap: 14, transform: "rotate(-8deg)" }}>
        {[c.kickerBg, ...["#ffd43b", "#ff8ad4", "#4fe0b0", "#b9a6ff"].filter((x) => x !== c.kickerBg).slice(0, 3)].map((bg, i) => (
          <div key={i} style={{ width: 136, height: 136, borderRadius: 32, background: bg, border: `3px solid ${INK}`, display: "flex" }} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px 56px", width: "100%" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {c.kicker ? (
            <span style={{ fontFamily: "mono", fontSize: 20, letterSpacing: 1.5, textTransform: "uppercase", background: c.kickerBg, color: c.kickerOn, border: `2px solid ${INK}`, borderRadius: 999, padding: "8px 18px" }}>{c.kicker}</span>
          ) : null}
          {c.type ? (
            <span style={{ fontFamily: "mono", fontSize: 20, letterSpacing: 1.5, textTransform: "uppercase", background: "#fff", color: INK, border: "2px solid #d5d8e5", borderRadius: 999, padding: "8px 18px" }}>{c.type}</span>
          ) : null}
        </div>
        <div style={{ display: "flex", fontFamily: "display", fontSize: size, lineHeight: 1.04, letterSpacing: -size * 0.04, maxWidth: 1000 }}>{c.title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {c.meta ? <span style={{ fontFamily: "mono", fontSize: 20, color: INK_SOFT }}>{c.meta}</span> : null}
            <span style={{ fontFamily: "mono", fontSize: 22, color: "#fff", background: INK, borderRadius: 999, padding: "10px 20px" }}>ecomradar.co</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function articleOg(a: Article) {
  const col = CAT_COLOR[a.category];
  const checked = a.locale === "en" ? "Prices checked" : "Prix vérifiés le";
  return new ImageResponse(
    <Frame c={{ kicker: CAT_TEXT[a.locale][a.category].label, kickerBg: col.bg, kickerOn: col.on, type: TYPE_TEXT[a.locale][a.type], title: a.title, meta: `${checked} ${fmtDate(a.updated, a.locale, true)}` }} />,
    { ...OG_SIZE, fonts: fonts() }
  );
}

export function siteOg(locale: Locale, title: string, kicker?: string, cat?: CategoryKey) {
  const col = cat ? CAT_COLOR[cat] : { bg: "#c6f432", on: INK };
  return new ImageResponse(
    <Frame c={{ kicker: kicker ?? (locale === "en" ? "No paid rankings" : "Aucun classement payé"), kickerBg: col.bg, kickerOn: col.on, title }} />,
    { ...OG_SIZE, fonts: fonts() }
  );
}
