import Author, { authorMeta } from "@/views/Author";

export const metadata = authorMeta("en");
export default function Page() {
  return <Author locale="en" />;
}
