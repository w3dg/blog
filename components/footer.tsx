import { LuGithub, LuGlobe2, LuInstagram, LuLinkedin } from "react-icons/lu";
import { gabarito, dmsans } from "./fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={` ${dmsans.className} border-t-2 border-brand-200/20`}>
      <div className="max-w-2xl mx-auto p-14">
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 place-items-center md:grid-cols-3">
          <h3 className={`${gabarito.className} text-2xl font-bold hover:underline`}>
            <Link href={"/"}>DG's Blog</Link>
          </h3>
          <ul className="grid gap-1 p-2 place-items-center">
            <li>
              <a className="flex items-center gap-2 hover:underline" href="https://dgdev.vercel.app" target="_blank">
                <LuGlobe2></LuGlobe2>
                <p>Website</p>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href="https://github.com/w3dg" target="_blank">
                <LuGithub></LuGithub>
                <p>GitHub</p>
              </a>
            </li>
          </ul>
          <ul className="grid gap-1 p-2 place-items-center">
            <li>
              <a className="flex items-center gap-2 hover:underline" href="https://dgsh.vercel.app/li" target="_blank">
                <LuLinkedin></LuLinkedin>
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:underline"
                href="https://instagram.com/its_not_dg"
                target="_blank"
              >
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
