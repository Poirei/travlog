export const getButtonStyles = (variant: string) => {
  let styles = "";

  switch (variant) {
    case "login":
      styles =
        "hidden rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100 active:bg-slate-200 md:block";
      break;
    case "signup":
      styles =
        "rounded-full bg-[#8e83e02a] px-4 py-2 text-[#5549ad] transition-all duration-300 hover:bg-[#8e83e05d] sm:mr-4 md:mr-0 md:bg-[#5D50C6] md:text-white md:hover:bg-[#5549ad]";
      break;
    default:
      break;
  }

  return styles;
};
