import { dmsans, gabarito } from "./fonts";

const Intro = () => {
  return (
    <section
      className={`flex flex-col gap-3 items-center justify-center w-full mx-auto py-16 mb-16 border-b border-neutral-300/10 bg-gradient-to-br from-transparent to-transparent via-brand-800/80`}
    >
      <h1 className={`text-5xl font-bold leading-tight md:text-7xl ${gabarito.className}`}>DG's Blog</h1>
      <p className={`pt-3 text-lg text-center md:text-xl ${dmsans.className}`}>personal blog about tech and life</p>
      <ul
        className={"relative text-lg flex items-center justify-center gap-2 mt-4 text-brand-200 " + gabarito.className}
      >
        <li>
          <a
            href="https://dgdev.vercel.app/"
            target="_blank"
            className="font-bold hover:underline hover:text-brand-300"
          >
            Website
          </a>
        </li>
        <div className="w-1 h-1 rounded-full bg-slate-200"></div>
        <li>
          <a href="https://github.com/w3dg" target="_blank" className="font-bold hover:underline hover:text-brand-300">
            Github
          </a>
        </li>
        <div className="w-1 h-1 rounded-full bg-slate-200"></div>
        <li>
          <a
            href="https://dgsh.vercel.app/li"
            target="_blank"
            className="font-bold hover:underline hover:text-brand-300"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
