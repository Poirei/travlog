import Link from "next/link";
import React from "react";

const HeaderNavMenu = () => {
  return (
    <nav className="hidden items-center px-0 md:flex md:gap-5 md:px-2 lg:gap-20">
      <Link href="#" className="font-semibold">
        Home
      </Link>
      <Link href="#" className="font-semibold text-slate-400">
        Discover
      </Link>
      <Link href="#" className="font-semibold text-slate-400">
        Special Deals
      </Link>
      <Link href="#" className="font-semibold text-slate-400">
        Contact
      </Link>
    </nav>
  );
};

export default HeaderNavMenu;
