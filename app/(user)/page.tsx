import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PreviewSuspense from "@/components/PreviewSuspense";
import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import PreviewProvider from "@/components/PreviewProvider";

const query = groq`
* [_type=='post'] {
   ...,
   author->,
   categories[]->,
 } | order(_createdAt desc)
    
`;

export const revalidate = 60;

export default async function HomePage() {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return (
      <PreviewProvider previewToken="">
        <PreviewSuspense>
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </PreviewProvider>
    );
  }

  const posts = await client.fetch(query);

  return (
    <main>
      <PreviewSuspense>
        <BlogList posts={posts} />
      </PreviewSuspense>
    </main>
  );
}
