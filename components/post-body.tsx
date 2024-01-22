import Link from "next/link";
import Container from "./container";
import { dmsans } from "./fonts";
import markdownStyles from "./markdown-styles.module.css";
import FurtherReading, { FurtherPost } from "./furtherreading";

type Props = {
  content: string;
  furtherReadings?: FurtherPost[];
};

const PostBody = ({ content, furtherReadings }: Props) => {
  return (
    <Container>
      <div className={`max-w-3xl mx-auto ${dmsans.className}`}>
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        {furtherReadings.length == 0 ? <></> : <FurtherReading furtherPosts={furtherReadings}></FurtherReading>}
        <Link href={"/"} className="underline text-brand-500 hover:text-brand-200 underline-offset-2">
          Continue to homepage
        </Link>
      </div>
    </Container>
  );
};

export default PostBody;
