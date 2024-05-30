import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mb-20 mt-14 md:mt-28">
      <div className="flex flex-col flex-wrap items-center gap-x-44 gap-y-8 lg:flex-row lg:items-start lg:gap-x-[clamp(2rem,7.5vw,8%)] lg:pl-[clamp(2rem,4.4vw,7%)] lg:pr-0 xl:gap-x-[clamp(6rem,10.4vw,12%)] 2xl:xl:gap-y-0 2xl:gap-x-[10.8em] 2xl:px-[10.2em]">
        <div className="order-4 max-w-xs pt-7 lg:order-first lg:px-16 lg:pt-0">
          <Logo />
          <p className="mt-6 text-lg font-bold text-slate-400 md:text-slate-500 lg:mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="mt-8 flex items-center gap-6 md:mt-10 lg:mt-12">
            <Image src="/fb.svg" alt="Facebook logo" width={32} height={32} />
            <Image
              src="/twitter.svg"
              alt="Twitter logo"
              width={32}
              height={32}
            />
            <Image src="/ig.svg" alt="Instagram logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3 md:gap-y-6 lg:items-start">
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="flex gap-x-2 gap-y-5 text-slate-500 lg:flex-col before:[&>li:not(:first-child)]:pr-2 before:[&>li:not(:first-child)]:text-orange-300 before:[&>li:not(:first-child)]:content-['|'] lg:before:[&>li:not(:first-child)]:content-none">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Mobile</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-3 md:gap-y-6 lg:items-start">
          <h1 className="text-xl font-bold">Contact</h1>
          <ul className="flex gap-x-2 gap-y-5 text-slate-500 lg:flex-col before:[&>li:not(:first-child)]:pr-2 before:[&>li:not(:first-child)]:text-orange-300 before:[&>li:not(:first-child)]:content-['|'] lg:before:[&>li:not(:first-child)]:content-none">
            <li>
              <Link href="#">Why Travlog?</Link>
            </li>
            <li>
              <Link href="#">Partner with us</Link>
            </li>
            <li>
              <Link href="#">FAQ&rsquo;s</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-3 md:gap-y-6 lg:items-start">
          <h1 className="text-xl font-bold">Meet Us</h1>
          <ul className="flex flex-col gap-y-2 border-l border-orange-300 pl-4 text-slate-500 md:gap-y-4 lg:gap-y-5 lg:border-l-0 lg:pl-0">
            <li>+00 92 1234 56789</li>
            <li>info@travlog.com</li>
            <li>205. R Street, New York</li>
            <li>BD23200</li>
          </ul>
        </div>
        <Separator className="lg:hidden" decorative />
      </div>
    </footer>
  );
};

export default Footer;
