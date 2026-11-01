import Directory, { directoryMeta } from "@/views/Directory";

export const metadata = directoryMeta("fr");
export default function Page() {
  return <Directory locale="fr" />;
}
