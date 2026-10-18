"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { T, type Locale } from "@/lib/i18n";

// Lien vers la même page dans l'autre langue (ou l'accueil de l'autre langue).
export default function LangSwitch({ locale, map }: { locale: Locale; map: Record<string, string> }) {
  const p = usePathname() || "/";
  const path = p.endsWith("/") ? p : p + "/";
  const other: Locale = locale === "fr" ? "en" : "fr";
  const href = map[path] || (other === "en" ? "/en/" : "/");
  return (
    <Link className="lang" href={href} hrefLang={other} aria-label={T[locale].switchAria}>
      {other.toUpperCase()}
    </Link>
  );
}
