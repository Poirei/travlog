import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div className="absolute bg-[#FF5722] h-[500px] w-[500px] rounded-full top-[-30%] left-[-24%] blur-[20em] z-[-10]"></div>
      <div className="z-10">
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
            <h1 className="text-xl font-bold ">Travlog</h1>
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
            <button className="hover:bg-slate-100 px-4 py-2 rounded-full transition-all duration-300">
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
          {/* <div className="relative before:h-[500px] before:w-[500px] before:absolute before:bg-[#FACD49] before:blur-[20em] before:rounded-full before:right-[-26%] before:bottom-72 before:z-[-40]">
            <div className="z-40">
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
                  <div className="w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl h-96">
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
          </div> */}
          <div className="relative">
            <div className="before:absolute before:h-[500px] before:w-[500px] before:bg-[#FACD49] before:blur-[20em] before:rounded-full before:right-[-24%] before:bottom-72 before:z-[-40] before:content-['']"></div>
            <div className="relative z-40">
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
                  <div className="w-[360px] flex flex-col items-center justify-between p-12 px-20 rounded-xl h-96 bg-slate-400">
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
        </main>
      </div>
    </div>
  );
}
