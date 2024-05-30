import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
