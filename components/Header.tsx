import Link from "next/link";
import Logo from "./Logo";
import ToolLogo from "./ToolLogo";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { getBarometre } from "@/lib/content";

const NAV: CategoryKey[] = ["avis-clients", "emailing", "retours-sav", "barometre"];

export default function Header() {
  const b = getBarometre();
  const items = b.moves.map((m, i) => (
    <span key={i}>
      {m.delta > 0 ? "▲" : "▼"} <ToolLogo name={m.tool} />
      <b>{m.tool}</b> {m.delta > 0 ? "+" : "−"}
      {Math.abs(m.delta)} pts dans {m.engine}
    </span>
  ));
  return (
    <header>
      <div className="wrap bar">
        <Link className="logo" href="/" aria-label="Radar Ecom, accueil">
          <Logo />
          radar<small>ecom</small>
        </Link>
        <nav className="cats" aria-label="Catégories">
          {NAV.map((k) => (
            <Link key={k} href={`/${k}/`}>
              <span className="dot" style={{ background: CATEGORIES[k].color }} />
              {CATEGORIES[k].label}
            </Link>
          ))}
        </nav>
        <Link className="btn" href="/#newsletter">
          Recevoir le baromètre
        </Link>
      </div>
      <div className="marquee" aria-label="Variations du mois dans les réponses des IA">
        <div className="marquee-track">
          {items}
          <span>Baromètre {b.label.toLowerCase()}{b.sample ? " · données d'exemple" : ""}</span>
          {items}
          <span>Baromètre {b.label.toLowerCase()}{b.sample ? " · données d'exemple" : ""}</span>
        </div>
      </div>
    </header>
  );
}
