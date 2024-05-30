import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import Hamburger from "./ui/hamburger";
import SheetNavMenu from "./SheetNavMenu";

const HamburgerMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <Hamburger />
          </div>
        </SheetTrigger>
        <SheetContent className="flex h-full flex-col justify-between rounded-s-xl bg-[#9284ffa9] backdrop-blur-md">
          <SheetHeader>
            <SheetNavMenu />
          </SheetHeader>
          <SheetFooter className="self-start">
            <p className="pb-10 text-left text-lg font-thin text-slate-50">
              Already have an account?{" "}
              <Link
                href="#"
                className="font-bold tracking-wider text-purple-300 hover:underline"
              >
                Login
              </Link>
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenu;
