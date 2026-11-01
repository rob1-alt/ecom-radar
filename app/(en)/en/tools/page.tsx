import Directory, { directoryMeta } from "@/views/Directory";

export const metadata = directoryMeta("en");
export default function Page() {
  return <Directory locale="en" />;
}
