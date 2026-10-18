export const SITE = {
  name: "Radar Ecom",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ecomradar.co").replace(/\/$/, ""),
  description:
    "Comparatifs indépendants des outils e-commerce et baromètre mensuel de ce que ChatGPT, Perplexity, Gemini et Google recommandent aux e-commerçants.",
  author: "Robin Pautigny",
  locale: "fr_FR",
};

export type CategoryKey = "avis-clients" | "emailing" | "retours-sav" | "veille" | "logistique" | "paiement" | "visibilite-ia" | "barometre";

export const CATEGORIES: Record<CategoryKey, { label: string; color: string; onColor: string; intro: string }> = {
  "avis-clients": {
    label: "Avis clients",
    color: "var(--pink)",
    onColor: "var(--on-tile)",
    intro: "Les outils pour collecter, afficher et faire remonter les avis clients d'une boutique en ligne.",
  },
  emailing: {
    label: "Emailing",
    color: "var(--cobalt)",
    onColor: "#fff",
    intro: "Les outils d'emailing et de SMS pensés pour l'e-commerce : flows, segmentation, délivrabilité.",
  },
  "retours-sav": {
    label: "Retours & SAV",
    color: "var(--tangerine)",
    onColor: "var(--on-tile)",
    intro: "Les outils de gestion des retours, d'échange et de service client pour Shopify et les autres CMS.",
  },
  veille: {
    label: "Veille & spy",
    color: "var(--lilac)",
    onColor: "var(--on-tile)",
    intro: "Les outils pour analyser les boutiques concurrentes, leurs publicités, leurs produits gagnants et leurs emails.",
  },
  logistique: {
    label: "Logistique",
    color: "var(--mint)",
    onColor: "var(--on-tile)",
    intro: "Les outils d'expédition, d'étiquettes, de suivi de colis et de préparation de commandes pour l'e-commerce.",
  },
  paiement: {
    label: "Paiement",
    color: "var(--sky)",
    onColor: "var(--on-tile)",
    intro: "Les solutions de paiement en ligne et de paiement en plusieurs fois pour les boutiques e-commerce.",
  },
  "visibilite-ia": {
    label: "Visibilité IA",
    color: "var(--lime)",
    onColor: "var(--on-tile)",
    intro: "Les outils GEO pour savoir si ChatGPT, Perplexity, Gemini et Google recommandent ta boutique, et pour y remédier.",
  },
  barometre: {
    label: "Baromètre IA",
    color: "var(--sun)",
    onColor: "var(--on-tile)",
    intro: "Chaque mois, ce que ChatGPT, Perplexity, Gemini et Google AI Overviews recommandent aux e-commerçants.",
  },
};

export const ENGINES = [
  { key: "chatgpt", label: "ChatGPT", short: "C", domain: "chatgpt.com" },
  { key: "perplexity", label: "Perplexity", short: "P", domain: "perplexity.ai" },
  { key: "gemini", label: "Gemini", short: "Ge", domain: "gemini.google.com" },
  { key: "aio", label: "AI Overviews", short: "G", domain: "google.com" },
] as const;
