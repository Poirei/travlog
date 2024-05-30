import Image from "next/image";
import React from "react";

const TravelPoint = () => {
  return (
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
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 grid-rows-2 gap-4 px-8 md:mt-20 md:px-0 lg:gap-10 lg:pr-28 xl:pb-0 xl:pr-24 2xl:pr-0">
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
              <h4 className="text-3xl font-semibold text-[#FF5722]">500+</h4>
              <p className="text-lg font-medium">Holiday Package</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
              <h4 className="text-3xl font-semibold text-[#FF5722]">100</h4>
              <p className="text-lg font-medium">Luxury Hotel</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
              <h4 className="text-3xl font-semibold text-[#FF5722]">7</h4>
              <p className="text-lg font-medium">Premium Airlines</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[36px] border border-slate-300 py-10">
              <h4 className="text-3xl font-semibold text-[#FF5722]">2k+</h4>
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
  );
};

export default TravelPoint;
