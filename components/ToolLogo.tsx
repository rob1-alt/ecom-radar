import { logoUrl } from "@/lib/tools";

// Composant serveur (zéro JS) : un petit script global (layout) ajoute .ok quand le logo est chargé
// et retire l'image si elle échoue, pour laisser l'initiale.
export default function ToolLogo({ name, big = false }: { name: string; big?: boolean }) {
  const src = logoUrl(name);
  return (
    <span className={`lg${big ? " big" : ""}`} data-i={name.charAt(0)} aria-hidden="true" title={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src && <img src={src} alt="" width={32} height={32} decoding="async" loading="lazy" />}
    </span>
  );
}
