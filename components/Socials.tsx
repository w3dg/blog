import { LuArrowRight } from "react-icons/lu";
import { dmsans } from "./fonts";
import Link from "next/link";

interface SocialLink {
  name: string;
  link: string;
}

const SocialButton = ({ link }: { link: SocialLink }) => {
  return (
    <Link
      href={link.link}
      target="_blank"
      className="flex items-center justify-center gap-2 p-3 rounded-md hover:bg-brand-700 bg-brand-800 group"
    >
      {link.name}
      <span className="p-0.5 transition-colors -rotate-45 rounded-full group-hover:bg-brand-800">
        <LuArrowRight></LuArrowRight>
      </span>
    </Link>
  );
};

const Socials = () => {
  const socialLinks: SocialLink[] = [
    { name: "instagram", link: "https://instagram.com/its_not_dg" },
    { name: "twitter", link: "https://twitter.com/its_not_dg" },
    { name: "github", link: "https://github.com/w3dg" },
  ];
  return (
    <section className={`${dmsans.className} flex flex-col items-center mt-4`}>
      <p>Follow on socials: </p>
      <div className="flex gap-2 mt-2">
        {socialLinks.map((link) => {
          return <SocialButton key={link.name} link={link} />;
        })}
      </div>
    </section>
  );
};

export default Socials;
