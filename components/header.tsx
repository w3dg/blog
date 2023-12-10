import Link from "next/link";
import { gabarito } from "./fonts";
const Header = () => {
  return (
    <h2
      className={`mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter ${gabarito.className}`}
    >
      <Link href="/" className="hover:underline">
        DG's Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
