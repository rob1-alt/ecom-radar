import { siteOg, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Radar Ecom";

export default function Image() {
  return siteOg("en", "Robin Pautigny, founder of Refine.");
}
