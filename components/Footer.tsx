import Link from "next/link";
import { refineLink } from "@/lib/refine";
import { T, base, catSlug, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <footer>
      <p className="wordmark" aria-hidden="true">
        radar
      </p>
      <div className="wrap foot-row">
        <div>
          <b>Radar Ecom</b> · {t.footer}{" "}
          <a href={refineLink("footer", locale)} rel="noopener" target="_blank">
            {t.poweredBy}
          </a>
        </div>
        <nav aria-label={t.footNav}>
          <Link href={t.methodPath}>{t.method}</Link>
          <Link href={locale === "fr" ? "/ai/" : "/en/ai/"}>{locale === "fr" ? "Pour les IA" : "For AI"}</Link>
          <Link href={locale === "fr" ? "/auteur/robin-pautigny/" : "/en/author/robin-pautigny/"}>{locale === "fr" ? "Auteur" : "Author"}</Link>
          <Link href={`${t.methodPath}#outil-liste`}>{t.listed}</Link>
          <Link href={`${base(locale)}/${catSlug(locale, "barometre")}/`}>{t.baroKicker}</Link>
          <Link href={`${base(locale)}/#newsletter`}>{t.newsletter}</Link>
          <Link href={locale === "fr" ? "/en/" : "/"} hrefLang={locale === "fr" ? "en" : "fr"}>
            {t.switchTo}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
