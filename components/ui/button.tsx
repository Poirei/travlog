type ButtonProps = {
  variant: string;
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
  // const styles = useMemo(() => getButtonStyles(variant), [variant]);

  // console.log(styles);

  return (
    <button
      className={`${variant === "login" ? "hidden rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-100 active:bg-slate-200 md:block" : "rounded-full bg-[#8e83e02a] px-4 py-2 text-[#5549ad] transition-all duration-300 hover:bg-[#8e83e05d] sm:mr-4 md:mr-0 md:bg-[#5D50C6] md:text-white md:hover:bg-[#5549ad]"}`}
    >
      {children}
    </button>
  );
};

export default Button;
