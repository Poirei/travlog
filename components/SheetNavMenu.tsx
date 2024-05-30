import Link from "next/link";

const SheetNavMenu = () => {
  return (
    <nav className="flex flex-col items-start gap-10 pt-14">
      <Link href="#" className="text-6xl font-bold text-slate-300">
        Home
      </Link>
      <Link
        href="#"
        className="text-3xl font-bold text-slate-400 hover:text-slate-300"
      >
        Discover
      </Link>
      <Link
        href="#"
        className="text-3xl font-bold text-slate-400 hover:text-slate-300"
      >
        Special Deals
      </Link>
      <Link
        href="#"
        className="text-3xl font-bold text-slate-400 hover:text-slate-300"
      >
        Contact
      </Link>
    </nav>
  );
};

export default SheetNavMenu;
