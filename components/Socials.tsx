import { LuInstagram, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";
import { dmsans } from "./fonts";
import Link from "next/link";

interface SocialLink {
  name: string;
  link: string;
  icon: IconType;
}

interface SocialButtonProps {
  link: SocialLink;
  icon: IconType;
}

const SocialButton = ({ link, icon: Icon }: SocialButtonProps) => {
  return (
    <Link
      href={link.link}
      target="_blank"
      className="flex items-center justify-center gap-2 p-3 rounded-md hover:bg-brand-700 bg-brand-800 group"
    >
      <span className="p-1 transition-colors rounded-full group-hover:bg-brand-800">
        <Icon></Icon>
      </span>
      {link.name}
    </Link>
  );
};

const Socials = () => {
  const socialLinks: SocialLink[] = [
    { name: "instagram", link: "https://instagram.com/its_not_dg", icon: LuInstagram },
    { name: "twitter", link: "https://twitter.com/its_not_dg", icon: FaXTwitter },
    { name: "github", link: "https://github.com/w3dg", icon: LuGithub },
  ];
  return (
    <section className={`${dmsans.className} flex flex-col items-center mt-4`}>
      <p>Follow on socials: </p>
      <div className="flex gap-2 mt-2">
        {socialLinks.map((link) => {
          return <SocialButton key={link.name} link={link} icon={link.icon} />;
        })}
      </div>
    </section>
  );
};

export default Socials;
