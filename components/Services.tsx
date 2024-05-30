import Image from "next/image";
import React from "react";

const Services = () => {
  return (
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
      <div className="no-scrollbar mt-8 flex items-center justify-between gap-10 overflow-scroll pb-28 lg:ml-20 lg:mt-0">
        <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8FAFC] p-12 lg:w-[360px] lg:px-20">
          <Image
            src="/destination.svg"
            alt="play logo"
            width={64}
            height={64}
          />
          <h1 className="mt-10 text-xl font-bold">Best Tour Guide</h1>
          <p className="mt-6 text-center font-semibold text-slate-500">
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
        <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8FAFC] p-12 px-20 shadow-[0_41px_89px_rgba(0,0,0,0.1)] lg:w-[360px]">
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
        <div className="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-xl bg-[#F8F7F3] p-12 px-20 md:w-[360px]">
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
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
