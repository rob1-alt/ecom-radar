import Home from "@/views/Home";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", { fr: "/", en: "/en/" });

export default function Page() {
  return <Home locale="en" />;
}
