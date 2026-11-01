import Submit, { submitMeta } from "@/views/Submit";

export const metadata = submitMeta("fr");
export default function Page() {
  return <Submit locale="fr" />;
}
