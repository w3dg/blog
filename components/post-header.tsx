import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

import { dmsans } from "./fonts";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  excerpt: string;
};

const PostHeader = ({ title, coverImage, date, author, excerpt }: Props) => {
  return (
    <header
      className={`grid gap-5 py-5 ${dmsans.className} bg-gradient-to-b from-transparent to-transparent via-brand-700/50`}
    >
      <PostTitle>{title}</PostTitle>
      <p className="text-center text-brand-300 max-w-[60ch] mx-auto px-4">{excerpt}</p>
      <div className="max-w-4xl mx-auto my-2">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className={`flex items-center gap-6 mx-auto max-w-full `}>
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
    </header>
  );
};

export default PostHeader;
