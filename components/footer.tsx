import { LuGithub, LuGlobe2, LuInstagram, LuLinkedin } from "react-icons/lu";
import { gabarito, dmsans } from "./fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={` ${dmsans.className} border-t border-neutral-200/20`}>
      <div className="max-w-2xl p-24 mx-auto">
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 place-items-center md:grid-cols-3">
          <h3 className={`${gabarito.className} text-2xl font-bold hover:underline`}>
            <Link href={"/"}>DG's Blog</Link>
          </h3>
          <ul className="grid gap-1 p-2 place-items-center">
            <li>
              <a className="flex items-center gap-2 hover:underline" href="">
                <LuGlobe2></LuGlobe2>
                <p>Website</p>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href="">
                <LuGithub></LuGithub>
                <p>GitHub</p>
              </a>
            </li>
          </ul>
          <ul className="grid gap-1 p-2 place-items-center">
            <li>
              <a className="flex items-center gap-2 hover:underline" href="">
                <LuLinkedin></LuLinkedin>
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href="">
                <LuInstagram></LuInstagram>
                <p>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
