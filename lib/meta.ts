import type { Metadata } from "next";
import { SITE } from "./site";
import { T, type Locale } from "./i18n";

// Métadonnées communes + hreflang. `paths` = chemin de la page dans chaque langue disponible.
export function pageMeta(locale: Locale, paths: Partial<Record<Locale, string>>, extra: Metadata = {}): Metadata {
  const languages: Record<string, string> = {};
  if (paths.fr) languages["fr-FR"] = paths.fr;
  if (paths.en) languages["en"] = paths.en;
  if (paths.fr) languages["x-default"] = paths.fr;
  return {
    metadataBase: new URL(SITE.url),
    alternates: { canonical: paths[locale], languages },
    openGraph: { siteName: SITE.name, locale: T[locale].ogLocale, type: "website", url: paths[locale] },
    ...extra,
  };
}
