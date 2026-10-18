import { SITE } from "@/lib/site";
import { verified, articleMarkdown, SITE_FACTS } from "@/lib/ai";
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-static";

export function GET() {
  const parts = [`# ${SITE.name} — full content`, "", ...SITE_FACTS.en.map((f) => `- ${f}`), ""];
  for (const l of ["fr", "en"] as Locale[]) {
    parts.push(l === "fr" ? "# Français" : "# English", "");
    for (const a of verified(l)) parts.push(articleMarkdown(a), "---", "");
  }
  return new Response(parts.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
