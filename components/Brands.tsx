import Image from "next/image";
import React from "react";
import MotionBanner from "./MotionBanner";

const Brands = () => {
  return (
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
  );
};

export default Brands;
