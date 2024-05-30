import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
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
          <h1 className="max-w-[40rem] text-clamp font-bold leading-tight md:max-w-[36rem] lg:max-w-[21rem] lg:leading-normal xl:max-w-[29rem]">
            Travel <span className="text-[#F85E9F]">top destination</span> of
            the world
          </h1>
          <div className="flex flex-col gap-y-8">
            <p className="text-lg font-light text-slate-500">
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
            <div className="flex gap-x-3">
              <button className="rounded-full bg-[#5D50C6] px-5 py-2 text-white drop-shadow-[0_34px_20px_rgba(0,0,0,0.15)]">
                Get Started
              </button>
              <button className="flex items-center gap-2 rounded-full border border-slate-400 px-4 py-2">
                <Image src="/play.svg" alt="play logo" width={24} height={24} />
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
  );
};

export default Hero;
