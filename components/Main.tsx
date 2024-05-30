import Image from "next/image";
import React from "react";
import MotionBanner from "./MotionBanner";
import Hero from "./Hero";
import Brands from "./Brands";
import Services from "./Services";
import TravelPoint from "./TravelPoint";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <main className="pt-14">
      <Hero />
      <div className="relative">
        <div className="absolute right-[-40%] z-[-10] h-[500px] w-[500px] rounded-full bg-[#FACD49] blur-[20em] md:bottom-72 md:right-[-26%]"></div>
        <div className="z-10">
          <Brands />
          <Services />
        </div>
      </div>
      <TravelPoint />
      <Newsletter />
    </main>
  );
};

export default Main;
