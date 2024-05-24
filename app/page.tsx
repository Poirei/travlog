import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div className="absolute bg-[#FF5722] h-[500px] w-[500px] rounded-full top-[-160px] left-[-24%] blur-[20em] z-[-10]"></div>
      <div>
        <header className="flex items-center justify-evenly py-7 px-12">
          <div className="flex items-center cursor-pointer gap-3">
            <Image
              src="/travlog.svg"
              alt="Travlog Logo"
              // className="dark:invert"
              width={40}
              height={41}
              priority
            />
            <h1 className="text-xl font-extrabold ">Travlog</h1>
          </div>
          <nav className="flex items-center gap-20">
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
            <button className="hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300 active:bg-slate-200">
              Log In
            </button>
            <button className="bg-[#5D50C6] hover:bg-[#5549ad] md:text-white px-4 py-2 rounded-full transition-all duration-300">
              Sign Up
            </button>
          </div>
        </header>
        <main className="pt-14">
          <section className="flex justify-center ml-[5em]">
            <div className="flex items-center w-[1300px] h-[713px] ">
              <div className="flex flex-col max-w-[27rem] gap-y-14">
                <button className="flex gap-4 items-center justify-between px-8 py-3 bg-white rounded-full drop-shadow-[0_34px_25px_rgba(0,0,0,0.07)] w-max">
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
                <h1 className="text-7xl max-w-[27rem] font-bold">
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
              <div className="self-start relative">
                <Image src="/globe.svg" alt="globe" width={900} height={600} />
                <div className="w-[575px] h-[632px] absolute top-24 left-[18%] flex flex-col flex-wrap items-center justify-center gap-10 gap-y-8">
                  <div className="relative">
                    <Image
                      src="/image1.png"
                      alt="pic1"
                      width={272}
                      height={300}
                    />
                    <div className="absolute left-[-50px] bottom-[-110px]">
                      <Image
                        src="/send.svg"
                        alt="send"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <Image
                    src="/image2.png"
                    alt="pic2"
                    width={272}
                    height={300}
                  />
                  <div className="relative">
                    <Image
                      src="/image3.png"
                      alt="pic3"
                      width={272}
                      height={400}
                    />
                    <div className="absolute right-[-30%] bottom-[12%]">
                      <button className="rounded-full bg-white px-4 py-2 flex items-center gap-2 drop-shadow-[0_34px_25px_rgba(0,0,0,0.1)]">
                        <Image
                          src="/location.svg"
                          alt="location"
                          width={24}
                          height={24}
                        />
                        <span>Top Places</span>
                      </button>
                    </div>
                    <div className="absolute left-[25%] bottom-[-50%]">
                      <Image
                        src="/adduser.svg"
                        alt="adduser"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="absolute h-[500px] w-[500px] bg-[#FACD49] blur-[20em] rounded-full right-[-26%] bottom-72 z-[-10]"></div>
            <div className="z-10">
              <section className="pt-16 my-24">
                <div className="flex justify-evenly items-center relative before:absolute before:content-[url('/arrows.svg')] before:left-10 before:bottom-[-30px] px-28">
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
              </section>
              <section className="flex justify-between">
                <div className="flex items-center justify-center ml-[14em]">
                  <div className="flex flex-col justify-center gap-y-3">
                    <h2 className="text-sm tracking-widest uppercase text-[#F85E9F] font-semibold">
                      Services
                    </h2>
                    <h3 className="font-bold text-5xl">
                      Our top value categories for you
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-10 ml-20 mr-[-212px]">
                  <div className="w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl h-96">
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
                  <div className="w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl shadow-[0_41px_89px_rgba(0,0,0,0.1)] h-96">
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
                  <div className="w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl h-96 bg-[#ffffff62]">
                    <Image
                      src={"/cloudy.svg"}
                      alt={"cloudy logo"}
                      width={64}
                      height={64}
                    />
                    <h1 className="mt-10 text-xl font-bold">
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
          <section className="flex pt-32">
            <div className="flex gap-x-40">
              <div className="relative">
                <Image
                  src="/traveller.png"
                  alt="image4"
                  width={789.68}
                  height={696.68}
                />
                <div className="flex items-center justify-between absolute top-[20%] right-0 py-2 px-6 gap-5 bg-white rounded-full">
                  <Image
                    src={"/discount.svg"}
                    alt="discount"
                    width={40}
                    height={40}
                  />
                  <span className="font-bold text-[23px]">
                    Discounted Price
                  </span>
                </div>
              </div>
              <div className="flex flex-col max-w-[500px] relative">
                <h2 className="text-sm tracking-widest uppercase text-[#F85E9F] font-semibold">
                  Travel Point
                </h2>
                <h3 className="font-bold text-5xl mt-4">
                  We helping you find your dream location
                </h3>
                <p className="pr-[4em] mt-12 text-lg tracking-wide leading-relaxed text-slate-500">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
                <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-20">
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
                <div className="absolute h-[112px] w-[112px] top-[40%] right-[-14%] bg-[#FACD49] rounded-full flex items-center justify-center">
                  <Image
                    src="/ticket_star.svg"
                    alt="ticket star"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center px-20 mt-36">
            <div className="flex flex-col items-center justify-center gap-y-10 bg-[rgba(250,206,73,0.08)] max-w-[80%] py-32 relative before:absolute before:content-[url('/graphic_elements.svg')] before:top-[-10%] before:left-[-4%] after:absolute after:content-[url('/objects.svg')] after:bottom-[-36%] after:right-[-34%]">
              <h3 className=" tracking-widest uppercase text-[#F85E9F] font-semibold text-lg">
                Subscribe to our newsletter
              </h3>
              <p className="text-6xl/[1.86ch] px-28 font-bold text-center text-pretty">
                Prepare yourself & let’s explore the beauty of the world
              </p>
              <div className="flex w-full px-24">
                <form className="flex items-center gap-y-10 gap-x-10 w-full">
                  <div className="relative flex items-center w-full bg-white rounded-[36px] border border-slate-300">
                    <Image
                      src="/message.svg"
                      alt="message"
                      width={24}
                      height={24}
                      className="mx-4"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full border-none h-full py-7 outline-none rounded-e-full text-3xl/[2ch] font-semibold"
                    />
                  </div>
                  <button className="py-8 px-20 rounded-3xl bg-[#5D50C6] text-slate-50 font-semibold text-xl">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="mt-32 mb-20">
          <div className="flex gap-x-44 px-44">
            <div className="max-w-xs px-16">
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
              <p className="font-bold text-slate-500 mt-8 text-lg">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <div className="flex items-center gap-6 mt-12">
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
            <div className="flex flex-col gap-y-6">
              <h1 className="text-xl font-bold">Company</h1>
              <ul className="flex flex-col gap-y-5 text-slate-500">
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
            <div className="flex flex-col gap-y-6">
              <h1 className="text-xl font-bold">Contact</h1>
              <ul className="flex flex-col gap-y-5 text-slate-500">
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
            <div className="flex flex-col gap-y-6">
              <h1 className="text-xl font-bold">Meet Us</h1>
              <ul className="flex flex-col gap-y-5 text-slate-500">
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
