import { TbRouteX } from "react-icons/tb";

import { gabarito } from "../components/fonts";
import Link from "next/link";

export default function () {
  return (
    <>
      <div className={`grid w-full h-screen place-content-center gap-3 ${gabarito.className}`}>
        <div className="grid gap-2 text-center place-content-center">
          <span className="mx-auto text-7xl text-cyan-200">
            <TbRouteX></TbRouteX>
          </span>
          <h1 className="text-3xl font-bold">404</h1>
          <h2 className="text-3xl font-bold">Not found</h2>
        </div>
        <Link href={"/"} className="text-lg underline hover:text-sky-300">
          Go back to homepage
        </Link>
      </div>
    </>
  );
}
