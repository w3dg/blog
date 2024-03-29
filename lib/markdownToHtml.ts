// https://github.com/remarkjs/remark-rehype#example-supporting-html-in-markdown-properly

import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
// import rehypeHighlight from "rehype-highlight";
import rehypeShiki from "@shikijs/rehype";

export default async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShiki, {
      theme: "vitesse-dark",
    })
    .use(rehypeStringify)
    .process(markdown);

  // console.log(file.toString());

  return file.toString();
}
