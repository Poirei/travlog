"use client";

import HeaderNavMenu from "./HeaderNavMenu";
import Logo from "./Logo";
import Button from "./ui/button";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-x-16 px-[6%] py-7 md:gap-x-0 lg:px-[max(5em,3.6%)] xl:w-[min(100%,85rem)] xl:self-center">
      <Logo />
      <HeaderNavMenu />
      <div className="flex items-end gap-x-2">
        <Button variant="login">Log In</Button>
        <Button variant="signup">Sign Up</Button>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
