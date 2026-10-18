import Link from "next/link";
import Logo from "./Logo";
import ToolLogo from "./ToolLogo";
import MegaMenu from "./MegaMenu";
import LangSwitch from "./LangSwitch";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { getArticles, getArticleByKey, articlePath } from "@/lib/content";
import { T, CAT_TEXT, TYPE_TEXT, base, catSlug, type Locale } from "@/lib/i18n";

const FACTS: Record<Locale, { tool: string; text: string; key: string }[]> = {
  fr: [
    { tool: "Klaviyo", text: "400 $/mois à 25 000 contacts", key: "cout-klaviyo-25000-contacts" },
    { tool: "Judge.me", text: "plan payant plafonné à 15 $/mois", key: "judge-me-vs-loox" },
    { tool: "Loox", text: "gratuit jusqu'à 500 commandes", key: "judge-me-vs-loox" },
    { tool: "Gorgias", text: "de 10 $ à 900 $/mois selon les tickets", key: "gorgias-avis-prix" },
    { tool: "TrendTrack", text: "dès 34 €/mois en annuel", key: "trendtrack-avis-prix" },
    { tool: "ReturnGO", text: "dès 147 $/mois", key: "loop-vs-returngo" },
    { tool: "Peec AI", text: "dès 85 €/mois", key: "meilleurs-outils-geo-ecommerce" },
  ],
  en: [
    { tool: "Klaviyo", text: "$400/month at 25,000 contacts", key: "cout-klaviyo-25000-contacts" },
    { tool: "Judge.me", text: "paid plan capped at $15/month", key: "judge-me-vs-loox" },
    { tool: "Loox", text: "free up to 500 orders", key: "judge-me-vs-loox" },
    { tool: "Gorgias", text: "$10 to $900/month depending on tickets", key: "gorgias-avis-prix" },
    { tool: "TrendTrack", text: "from €34/month billed annually", key: "trendtrack-avis-prix" },
    { tool: "ReturnGO", text: "from $147/month", key: "loop-vs-returngo" },
    { tool: "Peec AI", text: "from €85/month", key: "meilleurs-outils-geo-ecommerce" },
  ],
};

const NAV: CategoryKey[] = ["veille", "avis-clients", "emailing", "visibilite-ia", "barometre"];

export default function Header({ locale, langMap }: { locale: Locale; langMap: Record<string, string> }) {
  const t = T[locale];
  const menu = getArticles(locale).map((a) => ({ href: articlePath(a), title: a.title, type: TYPE_TEXT[locale][a.type], category: a.category, tools: a.tools }));
  // Bandeau : uniquement des prix vérifiés et datés, chacun relié à son article.
  const facts = FACTS[locale].map((f) => {
    const a = getArticleByKey(f.key, locale);
    return { ...f, href: a ? articlePath(a) : `${base(locale)}/` };
  });
  const items = facts.map((f, i) => (
    <Link key={i} href={f.href}>
      <ToolLogo name={f.tool} />
      <b>{f.tool}</b> {f.text}
    </Link>
  ));
  const tail = <span>{t.marqueeTail}</span>;
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
