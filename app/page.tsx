"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import MotionBanner from "@/components/MotionBanner";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[2560px] overflow-clip">
      <div className="absolute left-[-24%] top-[-160px] z-[-10] h-[500px] w-[500px] rounded-full bg-[#FF5722] blur-[20em]"></div>
      <div className="overflow-x-hidden">
        <header className="flex items-center justify-between gap-x-16 px-[6%] py-7 md:gap-x-0 lg:px-[min(4em,10%)]">
          <div className="flex cursor-pointer items-center gap-3">
            <Image
              src="/travlog.svg"
              alt="Travlog Logo"
              width={40}
              height={41}
              priority
            />
            <h1 className="text-xl font-extrabold ">Travlog</h1>
          </div>
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
          <div className="flex items-center gap-x-2">
            <button className="hidden rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100 active:bg-slate-200 md:block">
              Log In
            </button>
            <button className="rounded-full bg-[#8e83e02a] px-4 py-2 text-[#5549ad] transition-all duration-300 hover:bg-[#8e83e05d] sm:mr-4 md:mr-0 md:bg-[#5D50C6] md:text-white md:hover:bg-[#5549ad]">
              Sign Up
            </button>
            <div className="mb-1 self-start md:hidden">
              <Sheet>
                <SheetTrigger>
                  <div className="flex cursor-pointer flex-col items-end gap-y-[6px] pb-2">
                    <div className="h-[2.5px] w-7 rounded-lg bg-[#9284ff]" />
                    <div className="h-[2.5px] w-5 rounded-lg bg-[#9284ff]" />
                    <div className="h-[3px] w-3 rounded-lg bg-[#9284ff]" />
                  </div>
                </SheetTrigger>
                <SheetContent className="rounded-s-xl bg-[#9284ffa9] backdrop-blur-md">
                  <SheetHeader className="h-full">
                    <div className="flex h-full flex-col justify-between">
                      <nav className="flex flex-col items-start gap-10 pt-14">
                        <Link
                          href="#"
                          className="text-6xl font-bold text-slate-300"
                        >
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
                      <p className="pb-10 text-left text-lg font-thin text-slate-50">
                        Already have an account?{" "}
                        <Link
                          href="#"
                          className="font-bold tracking-wider text-purple-300 hover:underline"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main className="pt-14">
          <section className="flex justify-center lg:ml-[5em]">
            <div className="flex h-[713px] w-[1300px] flex-col items-center gap-y-10 lg:flex-row lg:gap-y-0 ">
              <div className="flex max-w-[40rem] flex-col  gap-y-10 px-8 md:max-w-[29rem] md:gap-y-14 md:px-0 lg:max-w-[21rem] xl:max-w-[36rem]">
                <button className="flex w-max items-center justify-between gap-4 rounded-full bg-white px-5 py-1 drop-shadow-[0_34px_25px_rgba(0,0,0,0.07)] md:px-8 md:py-3">
                  <span className="font-semibold text-[#F85E9F]">
                    Explore the world
                  </span>
                  <Image
                    src="/briefcase.svg"
                    alt="briefcase logo"
                    width={24}
                    height={24}
                  />
                </button>
                <h1 className="max-w-[40rem] border-2 text-clamp font-bold leading-tight md:max-w-[36rem] lg:max-w-[21rem] lg:leading-normal xl:max-w-[29rem]">
                  Travel <span className="text-[#F85E9F]">top destination</span>{" "}
                  of the world
                </h1>
                <div className="flex flex-col gap-y-8">
                  <p className="text-lg font-light text-slate-500">
                    We always make our customer happy by providing as many
                    choices as possible{" "}
                  </p>
                  <div className="flex gap-x-3">
                    <button className="rounded-full bg-[#5D50C6] px-5 py-2 text-white drop-shadow-[0_34px_20px_rgba(0,0,0,0.15)]">
                      Get Started
                    </button>
                    <button className="flex items-center gap-2 rounded-full border border-slate-400 px-4 py-2">
                      <Image
                        src="/play.svg"
                        alt="play logo"
                        width={24}
                        height={24}
                      />
                      <span className="font-semibold">Watch Demo</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative lg:self-start">
                <Image
                  src="/globe.svg"
                  alt="globe"
                  width={900}
                  height={600}
                  className="px-[10%] xs:px-7 xs:pt-10"
                />
                <div className="absolute left-[50%] top-[-10%] flex h-[500px] w-full translate-x-[-50%] flex-col flex-wrap items-center justify-center gap-y-2 px-5 xs:top-[17%] xs:w-max xs:gap-x-[8%] xs:gap-y-[5%] md:top-[3rem] md:h-[632px] md:w-[575px] md:px-4 lg:top-[1rem] lg:gap-10 lg:gap-y-8 lg:px-[3.1rem] xl:top-24 xl:p-0">
                  <div className="relative">
                    <Image
                      src="/image1.png"
                      alt="pic1"
                      width={172}
                      height={200}
                      className="xs:w-[calc(80% + 5vw)] xs:h-[calc(80% + 5vw)] md:h-[250px] md:w-[226.5px] xl:h-[300px] xl:w-[272px]"
                    />
                    <div className="absolute bottom-[-80px] left-[-40px] md:bottom-[-116px] md:left-[-60px] lg:bottom-[-110px] lg:left-[-50px]">
                      <Image
                        src="/send.svg"
                        alt="send"
                        width={80}
                        height={80}
                        className="md:h-full md:w-full"
                      />
                    </div>
                  </div>
                  <Image
                    src="/image2.png"
                    alt="pic2"
                    width={172}
                    height={200}
                    className="xs:h-[calc(38% + 5vw)] xs:w-[calc(35% + 5vw)] md:h-[250px] md:w-[226.5px] xl:h-[300px] xl:w-[272px]"
                  />
                  <div className="relative">
                    <Image
                      src="/image3.png"
                      alt="pic3"
                      width={172}
                      height={300}
                      className="md:h-[clamp(350px,2em,400px)] md:w-[clamp(238px,60%,272px)] xl:h-[400px] xl:w-[272px]"
                    />
                    <div className="absolute bottom-[12%] right-[-10%] md:right-[-30%]">
                      <button className="flex items-center gap-2 rounded-full bg-white px-2 py-1 drop-shadow-[0_34px_25px_rgba(0,0,0,0.1)] md:px-4 md:py-2">
                        <Image
                          src="/location.svg"
                          alt="location"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm md:text-lg">Top Places</span>
                      </button>
                    </div>
                    <div className="absolute bottom-[-46%] left-[25%] md:bottom-[-60%] lg:bottom-[-50%]">
                      <Image
                        src="/adduser.svg"
                        alt="adduser"
                        width={80}
                        height={80}
                        className="md:h-full md:w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="absolute right-[-40%] z-[-10] h-[500px] w-[500px] rounded-full bg-[#FACD49] blur-[20em] md:bottom-72 md:right-[-26%]"></div>
            <div className="z-10">
              <section className="pt-72 xs:mt-[10%] md:mt-0 md:pt-[min(36rem,72%)] lg:pt-[min(6rem,66%)] xl:pt-[min(288px,13.4%)]">
                <div className="no-scrollbar relative overflow-scroll before:absolute before:left-10 before:content-none md:overflow-visible md:before:bottom-[6rem] md:before:content-[url('/arrows.svg')] lg:before:bottom-[42px] lg:before:left-0 1.4lg:before:bottom-[-30px] xl:before:left-10">
                  <div className="1.4lg:hidden">
                    <MotionBanner baseVelocity={-5}>
                      <Image
                        src="/tripadvisor.svg"
                        alt="tripadvisor logo"
                        width={211.83}
                        height={32}
                      />
                      <Image
                        src="/expedia.svg"
                        alt="expedia logo"
                        width={113.06}
                        height={32}
                      />
                      <Image
                        src="/booking.svg"
                        alt="booking.com logo"
                        width={188.6}
                        height={32}
                      />
                      <Image
                        src="/airbnb.svg"
                        alt="airbnb logo"
                        width={102.53}
                        height={32}
                      />
                      <Image
                        src="/orbitz.svg"
                        alt="orbitz logo"
                        width={173.57}
                        height={32}
                      />
                    </MotionBanner>
                  </div>
                  <div className="no-scrollbar hidden items-center justify-evenly lg:px-28 1.4lg:flex 1.4lg:gap-x-[6%] xl:gap-x-3">
                    <Image
                      src="/tripadvisor.svg"
                      alt="tripadvisor logo"
                      width={211.83}
                      height={32}
                    />
                    <Image
                      src="/expedia.svg"
                      alt="expedia logo"
                      width={113.06}
                      height={32}
                    />
                    <Image
                      src="/booking.svg"
                      alt="booking.com logo"
                      width={188.6}
                      height={32}
                    />
                    <Image
                      src="/airbnb.svg"
                      alt="airbnb logo"
                      width={102.53}
                      height={32}
                    />
                    <Image
                      src="/orbitz.svg"
                      alt="orbitz logo"
                      width={173.57}
                      height={32}
                    />
                  </div>
                </div>
              </section>
              <section className="mt-16 flex flex-col xs:mt-[16%] md:mt-24 md:flex-row lg:mt-[min(12rem,12%)] lg:justify-between">
                <div className="flex items-center justify-center md:ml-[2em] lg:ml-[6em] 1.4lg:ml-[14em]">
                  <div className="flex flex-col justify-center gap-y-3 px-6 md:px-4 lg:px-0">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-[#F85E9F]">
                      Services
                    </h2>
                    <h3 className="text-4xl font-bold md:text-5xl">
                      Our top value categories for you
                    </h3>
                  </div>
                </div>
                <div className="no-scrollbar mt-8 flex items-center justify-between gap-10 overflow-y-visible overflow-x-scroll pb-28 lg:ml-20 lg:mt-0 lg:overflow-visible">
                  <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8FAFC] p-12 lg:w-[360px] lg:shrink lg:px-20">
                    <Image
                      src="/destination.svg"
                      alt="play logo"
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold">Best Tour Guide</h1>
                    <p className="mt-6 text-center font-semibold text-slate-500">
                      What looked like a small patch of purple grass, above five
                      feet.
                    </p>
                  </div>
                  <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8FAFC] p-12 px-20 shadow-[0_41px_89px_rgba(0,0,0,0.1)] lg:w-[360px] lg:shrink">
                    <Image
                      src={"/booking1.svg"}
                      alt={"booking logo"}
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold">Easy Booking</h1>
                    <p className="mt-6 text-center font-semibold text-slate-500">
                      Square, was moving across the sand in their direction.
                    </p>
                  </div>
                  <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8F7F3] p-12 px-20 md:w-[360px] lg:shrink">
                    <Image
                      src={"/cloudy.svg"}
                      alt={"cloudy logo"}
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-center text-xl font-bold">
                      Weather Forecast
                    </h1>
                    <p className="mt-6 text-center font-semibold text-slate-500">
                      What looked like a small patch of purple grass, above five
                      feet.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="flex lg:pt-[min(8rem,7%)]">
            <div className="flex flex-col items-start gap-y-10 md:items-center lg:flex-row lg:items-end lg:gap-x-0 lg:gap-y-0 xl:gap-x-12">
              <div className="relative">
                <Image
                  src="/traveller.png"
                  alt="image4"
                  width={789.68}
                  height={696.68}
                />
                <div className="absolute right-0 top-[20%] flex items-center justify-between gap-5 rounded-full bg-white px-3 py-1 md:px-6 md:py-2 lg:px-3 lg:py-1">
                  <Image
                    src={"/discount.svg"}
                    alt="discount"
                    width={24}
                    height={24}
                    className="md:h-[40px] md:w-[40px]"
                  />
                  <span className="text-sm font-bold md:text-[23px] lg:text-[clamp(.9rem,1.5vw,1.25rem)]">
                    Discounted Price
                  </span>
                </div>
              </div>
              <div className="relative flex max-w-[561px] flex-col md:self-center">
                <div className="px-8 md:px-0">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-[#F85E9F]">
                    Travel Point
                  </h2>
                  <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                    We helping you find your dream location
                  </h3>
                  <p className="mt-8 text-lg leading-relaxed tracking-wide text-slate-500 md:mt-12 lg:pr-[4em]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC.
                  </p>
                </div>
                <div className="mt-14 grid grid-cols-2 grid-rows-2 gap-4 px-8 md:mt-20 md:px-0 lg:gap-10 lg:pr-28 xl:pb-0 xl:pr-24 2xl:pr-0">
                  <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      500+
                    </h4>
                    <p className="text-lg font-medium">Holiday Package</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      100
                    </h4>
                    <p className="text-lg font-medium">Luxury Hotel</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">7</h4>
                    <p className="text-lg font-medium">Premium Airlines</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      2k+
                    </h4>
                    <p className="text-lg font-medium">Happy Customer</p>
                  </div>
                </div>
                <div className="absolute right-[10px] top-[46%] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FACD49] md:right-[-11%] md:top-[40%] md:h-[112px] md:w-[112px] lg:right-[10%] lg:top-[42%] xl:right-[7%] 2xl:right-[-14%]">
                  <Image
                    src="/ticket_star.svg"
                    alt="ticket star"
                    width={36}
                    height={36}
                    className="md:h-[48px] md:w-[48px]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-28 flex flex-col items-center justify-center overflow-x-clip lg:mt-36 2xl:px-20">
            <div className="relative flex flex-col items-center justify-center gap-y-10 bg-[rgba(250,206,73,0.08)] py-16 before:absolute before:left-[-14%] before:top-[-14%] before:content-[url('/graphic_elements.svg')] after:absolute after:bottom-[-36%] after:right-[-40%] after:z-[-20] after:content-[url('/objects.svg')] md:before:left-[-4%] md:before:top-[-10%] md:after:right-[-30%] lg:max-w-[80%] lg:py-32 lg:after:right-[-34%]">
              <h3 className="font-semibold uppercase tracking-wider text-[#F85E9F] md:text-lg md:tracking-widest">
                Subscribe to our newsletter
              </h3>
              <p className="text-pretty px-8 text-center text-3xl font-bold md:px-28 md:text-5xl lg:text-5xl/[1.86ch] xl:text-6xl/[1.86ch]">
                Prepare yourself & let’s explore the beauty of the world
              </p>
              <div className="flex w-full px-16 md:px-24">
                <form className="flex w-full flex-col items-center gap-y-4 md:flex-row md:gap-x-4 lg:gap-y-10 xl:gap-x-10">
                  <div className="relative flex w-full items-center rounded-[36px] border border-slate-300 bg-white">
                    <Image
                      src="/message.svg"
                      alt="message"
                      width={24}
                      height={24}
                      className="mx-2 md:mx-3 lg:mx-4"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="h-full w-full rounded-e-full border-none py-2 text-lg font-semibold outline-none md:py-3 md:text-2xl xl:py-7 xl:text-3xl/[2ch]"
                    />
                  </div>
                  <button className="w-full rounded-3xl bg-[#5D50C6] px-14 py-2 text-xl font-semibold text-slate-50 md:w-auto md:px-8 md:py-[.76em] xl:px-20 xl:py-8">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="mb-20 mt-14 md:mt-28">
          <div className="flex flex-col flex-wrap items-center gap-x-44 gap-y-8 lg:flex-row lg:items-start lg:gap-x-[clamp(2rem,7.5vw,8%)] lg:pl-[clamp(2rem,4.4vw,7%)] lg:pr-0 2xl:xl:gap-y-0 2xl:gap-x-[10.8em] 2xl:px-[10.2em] xl:gap-x-[clamp(6rem,10.4vw,12%)]">
            <div className="order-4 max-w-xs pt-7 lg:order-first lg:px-16 lg:pt-0">
              <div className="flex cursor-pointer items-center gap-3">
                <Image
                  src="/travlog.svg"
                  alt="Travlog Logo"
                  width={40}
                  height={41}
                  priority
                />
                <h1 className="text-xl font-extrabold">Travlog</h1>
              </div>
              <p className="mt-6 text-lg font-bold text-slate-400 md:text-slate-500 lg:mt-8">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <div className="mt-8 flex items-center gap-6 md:mt-10 lg:mt-12">
                <Image
                  src="/fb.svg"
                  alt="Facebook logo"
                  width={32}
                  height={32}
                />
                <Image
                  src="/twitter.svg"
                  alt="Twitter logo"
                  width={32}
                  height={32}
                />
                <Image
                  src="/ig.svg"
                  alt="Instagram logo"
                  width={32}
                  height={32}
                />
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
      </div>
    </div>
  );
}
