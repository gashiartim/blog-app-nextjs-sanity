import { Post } from "@/typpings";
import React from "react";
import Blog from "./Blog";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#30EFA6] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => {
          return <Blog key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default BlogList;
