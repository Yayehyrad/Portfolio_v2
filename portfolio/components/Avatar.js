import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none absolute right-0 bottom-0"> 
      <Image src="/avatar.png" width={737} height={678} alt="image" className=" w-full h-full"/>
  </div>;
};

export default Avatar;
