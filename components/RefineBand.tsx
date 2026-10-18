import ToolLogo from "./ToolLogo";
import { REFINE_TXT, refineLink, type RefineCtx } from "@/lib/refine";
import type { Locale } from "@/lib/i18n";

export default function RefineBand({ ctx, locale }: { ctx: RefineCtx; locale: Locale }) {
  const x = REFINE_TXT[locale][ctx];
  return (
    <aside className="refine-band" aria-label="Refine">
      <div className="rb-txt">
        <div className="kicker">
          <span>{x.k}</span>
          <ToolLogo name="Refine" />
          Refine
        </div>
        <h2>{x.h}</h2>
        <p>{x.p}</p>
      </div>
      <a className="btn" href={refineLink(ctx, locale)} rel="noopener" target="_blank">
        {x.cta} →
      </a>
    </aside>
  );
}
