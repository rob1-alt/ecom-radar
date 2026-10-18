import Author, { authorMeta } from "@/views/Author";

export const metadata = authorMeta("fr");
export default function Page() {
  return <Author locale="fr" />;
}
