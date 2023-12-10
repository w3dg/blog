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

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className={`mb-20 md:mb-28 ${dmsans.className}`}>
        <div>
          <h3 className={`mb-4 text-3xl leading-tight lg:text-4xl font-bold ${gabarito.className}`}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg text-neutral-500">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
