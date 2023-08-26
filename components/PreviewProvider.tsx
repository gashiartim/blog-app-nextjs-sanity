// ./nextjs-pages/src/components/PreviewProvider.tsx
"use client";

import { client } from "@/sanity/lib/client";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { useMemo } from "react";

export default function PreviewProvider({
  children,
  previewToken,
}: {
  children: React.ReactNode;
  previewToken: string;
}) {
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
