import Link from "next/link";
import { usePathname } from "next/navigation";
import { gabarito } from "./fonts";
import Container from "./container";
const Header = () => {
  const pathname = usePathname();
  const blogSlug = pathname.split("/").at(-1);

  return (
    <Container>
      <header className="flex items-center gap-4 py-4 border-b-2 border-b-brand-400">
        <h2
          className={`text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter ${gabarito.className}`}
        >
          <Link href="/" className="hover:underline">
            DG's Blog
          </Link>
        </h2>
        <p className={`${gabarito.className} text-lg before:content-["/"] before:mr-2 text-brand-500`}>{blogSlug}</p>
      </header>
    </Container>
  );
};

export default Header;
