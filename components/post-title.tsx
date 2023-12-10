import { ReactNode } from "react";
import { gabarito } from "./fonts";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className={`max-w-3xl mx-auto mb-12 text-3xl font-bold leading-tight tracking-tighter text-center md:text-6xl md:leading-none ${gabarito.className}`}
    >
      {children}
    </h1>
  );
};

export default PostTitle;
