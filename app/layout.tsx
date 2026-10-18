import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Tilt from "@/components/Tilt";
import SmoothScroll from "@/components/SmoothScroll";
import localFont from "next/font/local";
import { SITE } from "@/lib/site";

const display = localFont({ src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2", weight: "200 800", variable: "--f-display", display: "optional", fallback: ["Arial Black", "system-ui", "sans-serif"] });
const body = localFont({ src: "./fonts/geist-latin-wght-normal.woff2", weight: "100 900", variable: "--f-body", display: "optional", fallback: ["Helvetica Neue", "Arial", "sans-serif"] });
const mono = localFont({ src: "./fonts/geist-mono-latin-wght-normal.woff2", weight: "100 900", variable: "--f-mono", preload: false, display: "optional", fallback: ["ui-monospace", "Menlo", "monospace"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Radar Ecom — les outils e-commerce que les IA recommandent", template: "%s · Radar Ecom" },
  description: SITE.description,
  openGraph: { siteName: SITE.name, locale: SITE.locale, type: "website" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const orgLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    description: SITE.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE.url}/#organization` },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;function ok(i){var p=i.parentNode;if(p&&p.classList&&p.classList.contains('lg')){p.classList.add(i.naturalWidth>0?'ok':'ko')}}document.addEventListener('load',function(e){if(e.target.tagName==='IMG')ok(e.target)},true);document.addEventListener('error',function(e){if(e.target.tagName==='IMG')ok(e.target)},true);document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.lg img').forEach(function(i){if(i.complete)ok(i)})});if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('rl-first')}else{d.classList.add('rl-seen')}}catch(e){}",
          }}
        />
      </head>
      <body>
        <Loader />
        <Tilt />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
