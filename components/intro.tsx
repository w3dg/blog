import { dmsans, gabarito } from "./fonts";

const Intro = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full mx-auto py-12 mb-16 intro-bg border-b border-neutral-300/10`}
    >
      <h1 className={`text-5xl font-bold leading-tight md:text-7xl ${gabarito.className}`}>DG's Blog</h1>
      <div className={dmsans.className}>
        <p className="pt-3 text-lg md:text-xl">My attempt at blogging stuff as and when it comes</p>
        <ul className="relative flex items-center justify-center gap-2 mt-4">
          <li>
            <a href="" className="font-bold hover:underline">
              Website
            </a>
          </li>
          <div className="w-1 h-1 rounded-full bg-slate-200"></div>
          <li>
            <a href="" className="font-bold hover:underline">
              Github
            </a>
          </li>
          <div className="w-1 h-1 rounded-full bg-slate-200"></div>
          <li>
            <a href="" className="font-bold hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
