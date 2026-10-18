import Link from "next/link";
import Logo from "./Logo";
import ToolLogo from "./ToolLogo";
import MegaMenu from "./MegaMenu";
import LangSwitch from "./LangSwitch";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { getBarometre, getArticles, articlePath } from "@/lib/content";
import { T, CAT_TEXT, TYPE_TEXT, base, catSlug, type Locale } from "@/lib/i18n";

const NAV: CategoryKey[] = ["veille", "avis-clients", "emailing", "barometre"];

export default function Header({ locale, langMap }: { locale: Locale; langMap: Record<string, string> }) {
  const t = T[locale];
  const b = getBarometre();
  const menu = getArticles(locale).map((a) => ({ href: articlePath(a), title: a.title, type: TYPE_TEXT[locale][a.type], category: a.category, tools: a.tools }));
  const label = locale === "en" ? b.label_en || b.label : b.label.toLowerCase();
  const items = b.moves.map((m, i) => (
    <span key={i}>
      {m.delta > 0 ? "▲" : "▼"} <ToolLogo name={m.tool} />
      <b>{m.tool}</b> {m.delta > 0 ? "+" : "−"}
      {Math.abs(m.delta)} {t.pts} {m.engine}
    </span>
  ));
  const tail = (
    <span>
      {t.barometer} {label}
      {b.sample ? ` · ${t.sampleData}` : ""}
    </span>
  );
  return (
    <header>
      <div className="wrap bar">
        <Link className="logo" href={`${base(locale)}/`}>
          <Logo />
          radar<small>ecom</small>
        </Link>
        <nav className="cats" aria-label={t.cats}>
          {NAV.map((k) => (
            <Link key={k} href={`${base(locale)}/${catSlug(locale, k)}/`}>
              <span className="dot" style={{ background: CATEGORIES[k].color }} />
              {CAT_TEXT[locale][k].label}
            </Link>
          ))}
        </nav>
        <LangSwitch locale={locale} map={langMap} />
        <MegaMenu items={menu} locale={locale} />
      </div>
      <div className="marquee" aria-label={t.marquee}>
        <div className="marquee-track">
          {items}
          {tail}
          {items}
          {tail}
        </div>
      </div>
    </header>
  );
}
