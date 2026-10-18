import type { Metadata, Viewport } from "next";
import Shell from "@/views/Shell";
import { SITE } from "@/lib/site";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: T.en.siteTitle, template: "%s · Radar Ecom" },
  description: T.en.siteDesc,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
