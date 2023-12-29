import type Author from "./author";

interface FurtherPost {
  name: string;
  link: string;
}

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  furtherReadings?: FurtherPost[];
};

export default PostType;
