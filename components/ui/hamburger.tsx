import React from "react";

const Hamburger = () => {
  return (
    <div className="flex cursor-pointer flex-col items-end gap-y-[6px] pb-[.6rem]">
      <div className="h-[2.5px] w-7 rounded-lg bg-[#9284ff]" />
      <div className="h-[2.5px] w-5 rounded-lg bg-[#9284ff]" />
      <div className="h-[3px] w-3 rounded-lg bg-[#9284ff]" />
    </div>
  );
};

export default Hamburger;
