"use client";
import React from "react";
import { useLiveQuery } from "next-sanity/preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

function PreviewBlogList({ query }: Props) {
  const [data] = useLiveQuery(null, query);
  const blogPosts = data as unknown as any[];

  return (
    <div>
      <BlogList posts={blogPosts} />
    </div>
  );
}

export default PreviewBlogList;
