"use client";
import { useEffect, useRef, useState } from "react";
import { logoUrl } from "@/lib/tools";

export default function ToolLogo({ name, big = false }: { name: string; big?: boolean }) {
  const [ok, setOk] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const src = logoUrl(name);

  // L'image peut finir de charger avant l'hydratation : on vérifie son état au montage.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) setOk(true);
      else setFailed(true);
    }
  }, []);

  return (
    <span className={`lg${big ? " big" : ""}${ok ? " ok" : ""}`} data-i={name.charAt(0)} aria-hidden="true" title={name}>
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={src} alt="" decoding="async" onLoad={() => setOk(true)} onError={() => setFailed(true)} />
      )}
    </span>
  );
}
