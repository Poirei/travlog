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

export default function Home() {
  return (
    <div className="relative max-w-[1440px] mx-auto overflow-clip">
      <div className="absolute bg-[#FF5722] h-[500px] w-[500px] rounded-full top-[-160px] left-[-24%] blur-[20em] z-[-10]"></div>
      <div className="overflow-x-hidden">
        <header className="flex items-center justify-evenly gap-x-16 md:gap-x-0 py-7 lg:px-12 px-0">
          <div className="flex items-center cursor-pointer gap-3">
            <Image
              src="/travlog.svg"
              alt="Travlog Logo"
              width={40}
              height={41}
              priority
            />
            <h1 className="text-xl font-extrabold ">Travlog</h1>
          </div>
          <nav className="hidden md:flex items-center md:gap-5 lg:gap-20 md:px-2 px-0">
            <Link href="#" className="font-semibold">
              Home
            </Link>
            <Link href="#" className="text-slate-400 font-semibold">
              Discover
            </Link>
            <Link href="#" className="text-slate-400 font-semibold">
              Special Deals
            </Link>
            <Link href="#" className="text-slate-400 font-semibold">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden md:block hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300 active:bg-slate-200">
              Log In
            </button>
            <button className="md:bg-[#5D50C6] md:hover:bg-[#5549ad] text-[#5549ad] bg-[#8e83e02a] hover:bg-[#8e83e05d] md:text-white px-4 py-2 rounded-full transition-all duration-300">
              Sign Up
            </button>
            <div className="self-start md:hidden">
              <Sheet>
                <SheetTrigger>
                  <div className="flex flex-col gap-y-[6px] items-end pb-2 cursor-pointer">
                    <div className="w-7 h-[2.5px] bg-[#9284ff] rounded-lg" />
                    <div className="w-5 h-[2.5px] bg-[#9284ff] rounded-lg" />
                    <div className="w-3 h-[3px] bg-[#9284ff] rounded-lg" />
                  </div>
                </SheetTrigger>
                <SheetContent className="bg-[#9284ffa9] backdrop-blur-md rounded-s-xl">
                  <SheetHeader className="h-full">
                    <div className="flex flex-col justify-between h-full">
                      <nav className="flex items-start flex-col gap-10 pt-14">
                        <Link
                          href="#"
                          className="font-bold text-6xl text-slate-300"
                        >
                          Home
                        </Link>
                        <Link
                          href="#"
                          className="text-slate-400 font-bold text-3xl hover:text-slate-300"
                        >
                          Discover
                        </Link>
                        <Link
                          href="#"
                          className="text-slate-400 font-bold text-3xl hover:text-slate-300"
                        >
                          Special Deals
                        </Link>
                        <Link
                          href="#"
                          className="text-slate-400 font-bold text-3xl hover:text-slate-300"
                        >
                          Contact
                        </Link>
                      </nav>
                      <p className="pb-10 text-left font-thin text-slate-50 text-lg">
                        Already have an account?{" "}
                        <Link
                          href="#"
                          className="text-purple-300 font-bold hover:underline tracking-wider"
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
            <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center w-[1300px] h-[713px] ">
              <div className="flex flex-col max-w-[27rem] gap-y-10 md:gap-y-14 px-8 md:px-0">
                <button className="flex gap-4 items-center justify-between px-5 py-1 md:px-8 md:py-3 bg-white rounded-full drop-shadow-[0_34px_25px_rgba(0,0,0,0.07)] w-max">
                  <span className="text-[#F85E9F] font-semibold">
                    Explore the world
                  </span>
                  <Image
                    src="/briefcase.svg"
                    alt="briefcase logo"
                    width={24}
                    height={24}
                  />
                </button>
                <h1 className="text-clamp leading-tight lg:leading-normal max-w-[27rem] font-bold">
                  Travel <span className="text-[#F85E9F]">top destination</span>{" "}
                  of the world
                </h1>
                <div className="flex flex-col gap-y-8">
                  <p className="text-lg font-light text-slate-500">
                    We always make our customer happy by providing as many
                    choices as possible{" "}
                  </p>
                  <div className="flex gap-x-3">
                    <button className="bg-[#5D50C6] text-white px-5 py-2 rounded-full drop-shadow-[0_34px_20px_rgba(0,0,0,0.15)]">
                      Get Started
                    </button>
                    <button className="px-4 py-2 rounded-full flex items-center gap-2 border border-slate-400">
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
              <div className="lg:self-start relative">
                <Image
                  src="/globe.svg"
                  alt="globe"
                  width={900}
                  height={600}
                  className="md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[600px]"
                />
                <div className="w-full h-[500px] md:w-[575px] md:h-[632px] absolute top-[-10%] md:top-[5.6rem] lg:top-24 md:left-[10%] lg:left-[18%] flex flex-col flex-wrap items-center justify-center px-5 md:px-10 lg:px-0 lg:gap-10 gap-y-2 lg:gap-y-8 ">
                  <div className="relative">
                    <Image
                      src="/image1.png"
                      alt="pic1"
                      width={172}
                      height={200}
                      className="md:w-[226.5px] md:h-[250px] lg:w-[272px] lg:h-[300px]"
                    />
                    <div className="absolute left-[-40px] bottom-[-80px] md:left-[-60px] lg:left-[-50px] md:bottom-[-116px] lg:bottom-[-110px]">
                      <Image
                        src="/send.svg"
                        alt="send"
                        width={80}
                        height={80}
                        className="md:w-full md:h-full"
                      />
                    </div>
                  </div>
                  <Image
                    src="/image2.png"
                    alt="pic2"
                    width={172}
                    height={200}
                    className="md:w-[226.5px] md:h-[250px] lg:w-[272px] lg:h-[300px]"
                  />
                  <div className="relative">
                    <Image
                      src="/image3.png"
                      alt="pic3"
                      width={172}
                      height={300}
                      className="md:w-[238px] md:h-[350px] lg:w-[272px] lg:h-[400px]"
                    />
                    <div className="absolute md:right-[-30%] right-[-10%] bottom-[12%]">
                      <button className="rounded-full bg-white px-2 py-1 md:px-4 md:py-2 flex items-center gap-2 drop-shadow-[0_34px_25px_rgba(0,0,0,0.1)]">
                        <Image
                          src="/location.svg"
                          alt="location"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm md:text-lg">Top Places</span>
                      </button>
                    </div>
                    <div className="absolute left-[25%] bottom-[-46%] md:bottom-[-60%] lg:bottom-[-50%]">
                      <Image
                        src="/adduser.svg"
                        alt="adduser"
                        width={80}
                        height={80}
                        className="md:w-full md:h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="absolute h-[500px] w-[500px] bg-[#FACD49] blur-[20em] rounded-full md:right-[-26%] right-[-40%] md:bottom-72 z-[-10]"></div>
            <div className="z-10">
              <section className="pt-72 md:pt-[86%] lg:pt-16 lg:mt-64 lg:my-24">
                <div className="relative before:content-none before:absolute md:before:content-[url('/arrows.svg')] before:left-10 md:before:bottom-[5rem] lg:before:bottom-[-30px] overflow-scroll md:overflow-visible no-scrollbar">
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
                  <div className="hidden lg:flex justify-evenly lg:gap-x-0 items-center lg:px-28 no-scrollbar">
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
              <section className="flex lg:justify-between flex-col md:flex-row mt-16 md:mt-24 lg:mt-0">
                <div className="flex items-center justify-center md:ml-[2em] lg:ml-[14em]">
                  <div className="flex flex-col justify-center gap-y-3 px-6 md:px-4 lg:px-0">
                    <h2 className="text-sm tracking-widest uppercase text-[#F85E9F] font-semibold">
                      Services
                    </h2>
                    <h3 className="font-bold text-4xl md:text-5xl">
                      Our top value categories for you
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-10 lg:ml-20 lg:mr-[-212px] mt-8 lg:mt-0 overflow-x-scroll no-scrollbar overflow-y-visible lg:overflow-visible pb-28">
                  <div className="w-[300px] lg:w-[360px] flex flex-col items-center justify-between p-12 lg:px-20 rounded-xl h-96 bg-[#F8FAFC] shrink-0 lg:shrink">
                    <Image
                      src="/destination.svg"
                      alt="play logo"
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold">Best Tour Guide</h1>
                    <p className="text-center mt-6 text-slate-500 font-semibold">
                      What looked like a small patch of purple grass, above five
                      feet.
                    </p>
                  </div>
                  <div className="w-[300px] lg:w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl shadow-[0_41px_89px_rgba(0,0,0,0.1)] h-96 bg-[#F8FAFC] shrink-0 lg:shrink">
                    <Image
                      src={"/booking1.svg"}
                      alt={"booking logo"}
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold">Easy Booking</h1>
                    <p className="text-center mt-6 text-slate-500 font-semibold">
                      Square, was moving across the sand in their direction.
                    </p>
                  </div>
                  <div className="w-[300px] md:w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl h-96 bg-[#F8F7F3] shrink-0 lg:shrink">
                    <Image
                      src={"/cloudy.svg"}
                      alt={"cloudy logo"}
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold text-center">
                      Weather Forecast
                    </h1>
                    <p className="text-center mt-6 text-slate-500 font-semibold">
                      What looked like a small patch of purple grass, above five
                      feet.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="flex lg:pt-32">
            <div className="flex flex-col md:items-center items-start gap-y-10 lg:gap-y-0 lg:flex-row lg:gap-x-40">
              <div className="relative">
                <Image
                  src="/traveller.png"
                  alt="image4"
                  width={789.68}
                  height={696.68}
                />
                <div className="flex items-center justify-between absolute top-[20%] right-0 py-1 px-3 md:py-2 md:px-6 gap-5 bg-white rounded-full">
                  <Image
                    src={"/discount.svg"}
                    alt="discount"
                    width={24}
                    height={24}
                    className="md:w-[40px] md:h-[40px]"
                  />
                  <span className="font-bold text-sm md:text-[23px]">
                    Discounted Price
                  </span>
                </div>
              </div>
              <div className="flex flex-col max-w-[500px] relative">
                <div className="px-8 md:px-0">
                  <h2 className="text-sm tracking-widest uppercase text-[#F85E9F] font-semibold">
                    Travel Point
                  </h2>
                  <h3 className="font-bold text-4xl md:text-5xl mt-4">
                    We helping you find your dream location
                  </h3>
                  <p className="lg:pr-[4em] mt-8 md:mt-12 text-lg tracking-wide leading-relaxed text-slate-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC.
                  </p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-10 mt-14 md:mt-20 px-8 md:px-0">
                  <div className="flex flex-col items-center justify-center rounded-[36px] border border-slate-300 py-10 gap-y-2">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      500+
                    </h4>
                    <p className="font-medium text-lg">Holiday Package</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-[36px] border border-slate-300 py-10 gap-y-2">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      100
                    </h4>
                    <p className="font-medium text-lg">Luxury Hotel</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-[36px] border border-slate-300 py-10 gap-y-2">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">7</h4>
                    <p className="font-medium text-lg">Premium Airlines</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-[36px] border border-slate-300 py-10 gap-y-2">
                    <h4 className="text-3xl font-semibold text-[#FF5722]">
                      2k+
                    </h4>
                    <p className="font-medium text-lg">Happy Customer</p>
                  </div>
                </div>
                <div className="absolute h-[72px] w-[72px] md:h-[112px] md:w-[112px] top-[46%] right-[10px] md:right-[-14%] bg-[#FACD49] rounded-full flex items-center justify-center">
                  <Image
                    src="/ticket_star.svg"
                    alt="ticket star"
                    width={36}
                    height={36}
                    className="md:w-[48px] md:h-[48px]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center lg:px-20 mt-28 lg:mt-36 overflow-x-clip">
            <div className="flex flex-col items-center justify-center gap-y-10 bg-[rgba(250,206,73,0.08)] md:max-w-[80%] py-16 md:py-32 relative before:absolute before:content-[url('/graphic_elements.svg')] before:top-[-14%] md:before:top-[-10%] before:left-[-14%] md:before:left-[-4%] after:absolute after:content-[url('/objects.svg')] after:bottom-[-36%] md:after:right-[-34%] after:right-[-40%] after:z-[-20]">
              <h3 className="md:tracking-widest tracking-wider uppercase text-[#F85E9F] font-semibold md:text-lg">
                Subscribe to our newsletter
              </h3>
              <p className="text-3xl md:text-6xl/[1.86ch] px-8 md:px-28 font-bold text-center text-pretty">
                Prepare yourself & let’s explore the beauty of the world
              </p>
              <div className="flex w-full px-16 md:px-24">
                <form className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-10 gap-x-10 w-full">
                  <div className="relative flex items-center w-full bg-white rounded-[36px] border border-slate-300">
                    <Image
                      src="/message.svg"
                      alt="message"
                      width={24}
                      height={24}
                      className="md:mx-4 mx-2"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full border-none h-full py-2 md:py-7 outline-none rounded-e-full text-lg md:text-3xl/[2ch] font-semibold"
                    />
                  </div>
                  <button className="py-2 px-14 md:py-8 md:px-20 rounded-3xl bg-[#5D50C6] text-slate-50 font-semibold text-xl w-full md:w-auto">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="mb:mt-32 mt-14 mb-20">
          <div className="flex flex-col items-center md:items-start flex-wrap md:flex-row gap-x-44 md:px-44 gap-y-8 md:gap-y-0">
            <div className="max-w-xs md:px-16 order-4 md:order-1 pt-7 md:pt-0">
              <div className="flex items-center cursor-pointer gap-3">
                <Image
                  src="/travlog.svg"
                  alt="Travlog Logo"
                  // className="dark:invert"
                  width={40}
                  height={41}
                  priority
                />
                <h1 className="text-xl font-extrabold">Travlog</h1>
              </div>
              <p className="font-bold text-slate-400 md:text-slate-500 mt-6 md:mt-8 text-lg">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <div className="flex items-center gap-6 mt-8 md:mt-12">
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
            <div className="flex flex-col items-center md:items-start gap-y-3 md:gap-y-6">
              <h1 className="text-xl font-bold">Company</h1>
              <ul className="flex md:flex-col gap-y-5 text-slate-500 gap-x-2 before:[&>li:not(:first-child)]:content-['|'] before:[&>li:not(:first-child)]:pr-2 before:[&>li:not(:first-child)]:text-orange-300 md:before:[&>li:not(:first-child)]:content-none">
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
            <div className="flex flex-col items-center md:items-start gap-y-3 md:gap-y-6">
              <h1 className="text-xl font-bold">Contact</h1>
              <ul className="flex gap-x-2 before:[&>li:not(:first-child)]:content-['|'] before:[&>li:not(:first-child)]:pr-2 before:[&>li:not(:first-child)]:text-orange-300 md:flex-col gap-y-5 text-slate-500 md:before:[&>li:not(:first-child)]:content-none">
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
            <div className="flex flex-col items-center md:items-start gap-y-3 md:gap-y-6">
              <h1 className="text-xl font-bold">Meet Us</h1>
              <ul className="flex flex-col gap-y-2 md:gap-y-5 text-slate-500 border-l border-orange-300 md:border-l-0 pl-4 md:pl-0">
                <li>+00 92 1234 56789</li>
                <li>info@travlog.com</li>
                <li>205. R Street, New York</li>
                <li>BD23200</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
