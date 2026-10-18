"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToolLogo from "./ToolLogo";
import { CATEGORIES, type CategoryKey } from "@/lib/site";

export type MenuItem = { href: string; title: string; type: string; category: CategoryKey; tools: string[] };

const ORDER: CategoryKey[] = ["avis-clients", "emailing", "retours-sav", "barometre"];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export default function MegaMenu({ items }: { items: MenuItem[] }) {
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
        <span>{open ? "Fermer" : "Menu"}</span>
        <kbd>⌘K</kbd>
      </button>

      {mounted && createPortal(
      <div id="mega" className={`mega${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="wrap mega-inner">
          <div className="mega-search">
            <label htmlFor="mega-q" className="vh">
              Rechercher un outil ou un article
            </label>
            <span aria-hidden="true">⌕</span>
            <input id="mega-q" ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Klaviyo, avis clients, retours…" autoComplete="off" />
            <button type="button" className="mega-close" onClick={() => setOpen(false)} aria-label="Fermer le menu">
              Échap
            </button>
          </div>

          {q.trim() ? (
            <div className="mega-results">
              {results.length === 0 && <p className="mega-empty">Aucun article pour « {q} » pour l'instant.</p>}
              {results.map((r) => (
                <Link key={r.href} href={r.href} className="mega-result" style={{ ["--c" as string]: CATEGORIES[r.category].color }}>
                  <span className="dot" />
                  <span className="t">{r.title}</span>
                  <span className="logos">
                    {r.tools.slice(0, 3).map((t) => (
                      <ToolLogo key={t} name={t} />
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
                    <Link href={`/${k}/`} className="mega-head">
                      <span className="mega-count">{String(list.length).padStart(2, "0")}</span>
                      <span className="mega-label">{c.label}</span>
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
              <div className="mega-tile m-tools" style={{ ["--d" as string]: "200ms" }}>
                <div className="mega-head static">
                  <span className="mega-count">{tools.length}</span>
                  <span className="mega-label">Outils suivis</span>
                </div>
                <div className="tool-cloud">
                  {tools.map((t) => (
                    <button key={t} type="button" onClick={() => setQ(t)}>
                      <ToolLogo name={t} />
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mega-tile m-links" style={{ ["--d" as string]: "250ms" }}>
                <Link href="/methodologie/">Méthodologie</Link>
                <Link href="/methodologie/#outil-liste">Votre outil est listé ?</Link>
                <Link href="/#newsletter">Newsletter du 1er du mois</Link>
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
