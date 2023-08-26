"use client";

import { client } from "@/sanity/lib/client";
import { LiveQueryProvider } from "@sanity/preview-kit";

export default function PreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
