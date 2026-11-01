import Submit, { submitMeta } from "@/views/Submit";

export const metadata = submitMeta("en");
export default function Page() {
  return <Submit locale="en" />;
}
