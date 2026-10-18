import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Tilt from "@/components/Tilt";
import { SITE } from "@/lib/site";

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#4a4a4a" d="M61.49 59.64A15 15 0 0 0 61.49 40.36L58.04 43.25A10.5 10.5 0 0 1 58.04 56.75Z"/><path fill="#4a4a4a" d="M38.51 40.36A15 15 0 0 0 38.51 59.64L41.96 56.75A10.5 10.5 0 0 1 41.96 43.25Z"/><path fill="#6e6e6e" d="M66.09 63.5A21 21 0 0 0 66.09 36.5L62.1 39.84A15.8 15.8 0 0 1 62.1 60.16Z"/><path fill="#6e6e6e" d="M33.91 36.5A21 21 0 0 0 33.91 63.5L37.9 60.16A15.8 15.8 0 0 1 37.9 39.84Z"/><path fill="#929292" d="M71.45 68.0A28 28 0 0 0 71.45 32.0L66.7 35.99A21.8 21.8 0 0 1 66.7 64.01Z"/><path fill="#929292" d="M28.55 32.0A28 28 0 0 0 28.55 68.0L33.3 64.01A21.8 21.8 0 0 1 33.3 35.99Z"/><path fill="#b8b8b8" d="M77.58 73.14A36 36 0 0 0 77.58 26.86L72.06 31.49A28.8 28.8 0 0 1 72.06 68.51Z"/><path fill="#b8b8b8" d="M22.42 26.86A36 36 0 0 0 22.42 73.14L27.94 68.51A28.8 28.8 0 0 1 27.94 31.49Z"/><path fill="#dcdcdc" d="M85.24 79.57A46 46 0 0 0 85.24 20.43L78.19 26.35A36.8 36.8 0 0 1 78.19 73.65Z"/><path fill="#dcdcdc" d="M14.76 20.43A46 46 0 0 0 14.76 79.57L21.81 73.65A36.8 36.8 0 0 1 21.81 26.35Z"/><circle cx="50" cy="50" r="7" fill="#0D0E1A"/></svg>'
  );

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Radar Ecom — les outils e-commerce que les IA recommandent", template: "%s · Radar Ecom" },
  description: SITE.description,
  icons: { icon: FAVICON },
  openGraph: { siteName: SITE.name, locale: SITE.locale, type: "website" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;if(sessionStorage.getItem('rl')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('rl-seen')}else{sessionStorage.setItem('rl','1');d.classList.add('rl-first')}}catch(e){document.documentElement.classList.add('rl-seen')}",
          }}
        />
      </head>
      <body>
        <Loader />
        <Tilt />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
