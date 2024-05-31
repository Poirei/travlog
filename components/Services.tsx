import Image from "next/image";
import React, { useEffect } from "react";
import { WobbleCard } from "./ui/wobble-card";

const Services = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    let startX: number;
    let scrollLeft: number;
    let isDown: boolean;

    const container = containerRef.current as HTMLDivElement;

    container.addEventListener("mousedown", (e) => mouseIsDown(e));
    container.addEventListener("mouseup", () => mouseUp());
    container.addEventListener("mouseleave", () => mouseLeave());
    container.addEventListener("mousemove", (e) => mouseMove(e));

    function mouseIsDown(e: { pageY: number; pageX: number }) {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }

    function mouseUp() {
      isDown = false;
    }
    function mouseLeave() {
      isDown = false;
    }
    function mouseMove(e: {
      preventDefault: () => void;
      pageY: number;
      pageX: number;
    }) {
      if (isDown) {
        e.preventDefault();

        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        (containerRef.current as HTMLDivElement).scrollLeft =
          scrollLeft - walkX;
      }
    }
  }, []);

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
      <div
        className="no-scrollbar mt-8 flex cursor-grab items-center justify-between gap-10 overflow-y-visible overflow-x-scroll pb-28 pt-3 lg:mt-0 lg:pl-20"
        ref={containerRef}
      >
        <WobbleCard
          containerClassName="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-[1rem] px-[5em] lg:w-[360px] lg:px-20 bg-[rgb(255 254 246)] hover:shadow-[0_41px_55px_rgba(0,0,0,0.04)]"
          className="flex h-[-webkit-fill-available] w-[300px] shrink-0 flex-col items-center justify-between rounded-xl p-12 lg:w-[360px] lg:px-20"
        >
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
        </WobbleCard>
        <WobbleCard
          containerClassName="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-[1rem] px-[5em] lg:w-[360px] lg:px-20 bg-[rgb(255 254 246)] hover:shadow-[0_41px_55px_rgba(0,0,0,0.04)]"
          className="flex h-[-webkit-fill-available] w-[300px] shrink-0 flex-col items-center justify-between rounded-xl p-12 lg:w-[360px] lg:px-20"
        >
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
        </WobbleCard>
        <WobbleCard
          containerClassName="flex h-96 w-[300px] shrink-0 flex-col items-center justify-between rounded-[1rem] px-[5em] lg:w-[360px] lg:px-20 bg-[rgb(255 254 246)] hover:shadow-[0_41px_55px_rgba(0,0,0,0.04)]"
          className="flex h-[-webkit-fill-available] w-[300px] shrink-0 flex-col items-center justify-between rounded-xl p-12 lg:w-[360px] lg:px-20"
        >
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
        </WobbleCard>
      </div>
    </section>
  );
};

export default Services;
