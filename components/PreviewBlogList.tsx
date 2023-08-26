"use client";
import React from "react";
import { useLiveQuery } from "next-sanity/preview";

type Props = {
  query: string;
};

function PreviewBlogList({ query }: Props) {
  const [data] = useLiveQuery(null, query);
  const blogPosts = data as unknown as any[];
  return (
    <div>
      {blogPosts?.map((post: any) => {
        return <div key={`${post._id}`}>{post.title}</div>;
      })}
    </div>
  );
}

export default PreviewBlogList;
