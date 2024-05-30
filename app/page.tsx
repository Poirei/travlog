"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[2560px] overflow-clip">
      <div className="absolute left-[-24%] top-[-160px] z-[-10] h-[500px] w-[500px] rounded-full bg-[#FF5722] blur-[20em]"></div>
      <div className="overflow-x-hidden xl:flex xl:flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
