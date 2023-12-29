import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

import { dmsans } from "./fonts";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className={dmsans.className}>
      <h2 className="max-w-4xl mx-auto mb-8 text-3xl font-bold leading-tight tracking-tight md:text-5xl">More Posts</h2>
      <div className="grid max-w-4xl grid-cols-1 mx-auto mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-18 gap-y-16 md:gap-y-14">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
