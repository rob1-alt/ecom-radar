import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Tilt from "@/components/Tilt";
import SmoothScroll from "@/components/SmoothScroll";
import { display, body, mono } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { T, type Locale } from "@/lib/i18n";
import { getArticles, alternatePath } from "@/lib/content";

const BOOT =
  "try{var d=document.documentElement;function ok(i){var p=i.parentNode;if(p&&p.classList&&p.classList.contains('lg')){p.classList.add(i.naturalWidth>0?'ok':'ko')}}document.addEventListener('load',function(e){if(e.target.tagName==='IMG')ok(e.target)},true);document.addEventListener('error',function(e){if(e.target.tagName==='IMG')ok(e.target)},true);document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.lg img').forEach(function(i){if(i.complete)ok(i)})});var p=location.pathname;if((p==='/'||p==='/en/'||p==='/en')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('rl-first')}else{d.classList.add('rl-seen')}}catch(e){}";

// Table de correspondance FR ↔ EN pour le sélecteur de langue.
function langMap(): Record<string, string> {
  const m: Record<string, string> = { "/": "/en/", "/en/": "/", "/methodologie/": "/en/methodology/", "/en/methodology/": "/methodologie/" };
  for (const a of getArticles("fr")) {
    const en = alternatePath(a, "en");
    if (en) {
      const fr = alternatePath(a, "fr")!;
      m[fr] = en;
      m[en] = fr;
    }
  }
  return m;
}

export default function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = T[locale];
  const ld = [
    { "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url, logo: `${SITE.url}/logo.svg`, description: T.fr.siteDesc },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, name: SITE.name, url: SITE.url, inLanguage: ["fr-FR", "en"], publisher: { "@id": `${SITE.url}/#organization` } },
  ];
  return (
    <html lang={t.htmlLang} className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <Loader />
        <Tilt />
        <SmoothScroll />
        <Header locale={locale} langMap={langMap()} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
