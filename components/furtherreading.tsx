import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export interface FurtherPost {
  name: string;
  link: string;
}

interface FurtherReadingProps {
  furtherPosts: FurtherPost[];
}

const FurtherReading = ({ furtherPosts }: FurtherReadingProps) => {
  return (
    <section className="my-8">
      <h3 className="mb-2 text-lg">Further Reading:</h3>
      <ul>
        {furtherPosts.map((post) => {
          return (
            <li className="flex items-center gap-1 group" key={post.name}>
              <LuArrowUpRight className="group-hover:rotate-12" />
              <Link href={post.link} className="underline text-brand-200 hover:text-brand-400 underline-offset-2">
                {post.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FurtherReading;
