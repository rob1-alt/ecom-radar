"use client";
import { useEffect } from "react";

// Défilement doux et léger (Lenis, ~4 ko), chargé après l'affichage, désactivé si l'utilisateur réduit les animations.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void; stop: () => void; start: () => void } | null = null;
    const obs = new MutationObserver(() => {
      if (!lenis) return;
      if (document.documentElement.classList.contains("menu-open")) lenis.stop();
      else lenis.start();
    });
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true, anchors: { offset: -96 } });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    });
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      lenis?.destroy();
    };
  }, []);
  return null;
}
