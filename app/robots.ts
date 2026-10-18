import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Moteurs de recherche, recherche IA, requêtes utilisateurs et entraînement : tout est autorisé (site public, but = être cité).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "MistralAI-User", "DuckAssistBot"],
        allow: "/",
      },
      { userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"], allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
