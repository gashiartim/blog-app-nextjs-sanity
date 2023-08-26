import { client } from "@/sanity/lib/client";
import { LiveQueryProvider } from "@sanity/preview-kit";

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  if (!token) throw new TypeError("Missing token");
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
}
