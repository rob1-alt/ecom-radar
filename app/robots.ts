import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Tous les robots, y compris ceux des IA (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended), sont autorisés.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
