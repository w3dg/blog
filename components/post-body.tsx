import Link from "next/link";
import Container from "./container";
import { dmsans } from "./fonts";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Container>
      <div className={`max-w-3xl mx-auto ${dmsans.className}`}>
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        <Link href={"/"} className="underline text-brand-300 hover:text-brand-200 underline-offset-2">
          Continue to homepage
        </Link>
      </div>
    </Container>
  );
};

export default PostBody;
