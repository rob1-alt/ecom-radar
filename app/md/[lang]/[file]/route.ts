import { verified, articleMarkdown } from "@/lib/ai";
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return (["fr", "en"] as Locale[]).flatMap((lang) => verified(lang).map((a) => ({ lang, file: `${a.slug}.md` })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string; file: string }> }) {
  const { lang, file } = await params;
  const a = verified(lang as Locale).find((x) => `${x.slug}.md` === file)!;
  return new Response(articleMarkdown(a), { headers: { "content-type": "text/markdown; charset=utf-8" } });
}
