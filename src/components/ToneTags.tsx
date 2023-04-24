import type { IToneTag } from "../types";
import { ToneTag } from "./ToneTag";

export const ToneTags = ({ posts }: { posts: IToneTag[] }) => {
  return (
    <>
      {posts.map((post) => (
        <ToneTag
          key={post.url}
          url={post.url}
          tag={post.frontmatter.tag}
          fullForm={post.frontmatter.fullForm}
          addedBy={post.frontmatter.addedBy}
        />
      ))}
    </>
  );
};
