import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

import { dmsans, gabarito } from "./fonts";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div className={dmsans.className}>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className={`mb-3 text-3xl leading-snug font-bold ${gabarito.className}`}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg text-neutral-500">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed text-neutral-400">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
