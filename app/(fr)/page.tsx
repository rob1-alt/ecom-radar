import Home from "@/views/Home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", { fr: "/", en: "/en/" });

export default function Page() {
  return <Home locale="fr" />;
}
