"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToolLogo from "./ToolLogo";
import { CATEGORIES, type CategoryKey } from "@/lib/site";
import { T, CAT_TEXT, base, catSlug, type Locale } from "@/lib/i18n";

export type MenuItem = { href: string; title: string; type: string; category: CategoryKey; tools: string[] };

const ORDER: CategoryKey[] = ["veille", "avis-clients", "emailing", "retours-sav", "logistique", "paiement", "barometre"];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export default function MegaMenu({ items, locale }: { items: MenuItem[]; locale: Locale }) {
  const t = T[locale];
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (open) setTimeout(() => input.current?.focus(), 60);
    else setQ("");
  }, [open]);

  const results = useMemo(() => {
    const n = norm(q.trim());
    if (!n) return [];
    return items.filter((i) => norm(i.title + " " + i.tools.join(" ") + " " + i.type).includes(n)).slice(0, 8);
  }, [q, items]);

  const tools = useMemo(() => Array.from(new Set(items.flatMap((i) => i.tools))), [items]);

  return (
    <>
      <button type="button" className={`menu-btn${open ? " is-open" : ""}`} aria-expanded={open} aria-controls="mega" onClick={() => setOpen((o) => !o)}>
        <span className="burger" aria-hidden="true">
          <i />
          <i />
        </span>
        <span>{open ? t.close : t.menu}</span>
        <kbd>⌘K</kbd>
      </button>

      {mounted && open && createPortal(
      <div data-lenis-prevent id="mega" className={`mega${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label={t.menu} hidden={!open}>
        <div className="wrap mega-inner">
          <div className="mega-search">
            <label htmlFor="mega-q" className="vh">
              {t.searchLabel}
            </label>
            <span aria-hidden="true">⌕</span>
            <input id="mega-q" ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.searchPh} autoComplete="off" />
            <button type="button" className="mega-close" onClick={() => setOpen(false)} aria-label={t.close}>
              {t.esc}
            </button>
          </div>

          {q.trim() ? (
            <div className="mega-results">
              {results.length === 0 && <p className="mega-empty">{t.noResult(q)}</p>}
              {results.map((r) => (
                <Link key={r.href} href={r.href} className="mega-result" style={{ ["--c" as string]: CATEGORIES[r.category].color }}>
                  <span className="dot" />
                  <span className="t">{r.title}</span>
                  <span className="logos">
                    {r.tools.slice(0, 3).map((tool) => (
                      <ToolLogo key={tool} name={tool} />
                    ))}
                  </span>
                  <span className="k">{r.type}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mega-grid">
              {ORDER.map((k, idx) => {
                const c = CATEGORIES[k];
                const list = items.filter((i) => i.category === k);
                return (
                  <div key={k} className={`mega-tile m-${k}`} style={{ ["--c" as string]: c.color, ["--c-on" as string]: c.onColor, ["--d" as string]: `${idx * 50}ms` }}>
                    <Link href={`${base(locale)}/${catSlug(locale, k)}/`} className="mega-head">
                      <span className="mega-count">{String(list.length).padStart(2, "0")}</span>
                      <span className="mega-label">{CAT_TEXT[locale][k].label}</span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                    <ul>
                      {list.slice(0, 4).map((i) => (
                        <li key={i.href}>
                          <Link href={i.href}>
                            {i.tools[0] && <ToolLogo name={i.tools[0]} />}
                            {i.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <div className="mega-tile m-links" style={{ ["--d" as string]: "250ms" }}>
                <Link href={t.methodPath}>{t.method}</Link>
                <Link href={`${t.methodPath}#outil-liste`}>{t.listed}</Link>
                <Link href={`${base(locale)}/#newsletter`}>{t.newsMonthly}</Link>
              </div>
              <div className="mega-tile m-tools" style={{ ["--d" as string]: "200ms" }}>
                <div className="mega-head static">
                  <span className="mega-count">{tools.length}</span>
                  <span className="mega-label">{t.toolsFollowed}</span>
                </div>
                <div className="tool-cloud">
                  {tools.map((tool) => (
                    <button key={tool} type="button" onClick={() => setQ(tool)}>
                      <ToolLogo name={tool} />
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>,
      document.body
      )}
    </>
  );
}
