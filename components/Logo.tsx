import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <Image
        src="/travlog.svg"
        alt="Travlog Logo"
        width={40}
        height={41}
        priority
      />
      <h1 className="text-xl font-extrabold ">Travlog</h1>
    </div>
  );
};

export default Logo;
