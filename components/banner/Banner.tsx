"use client";
import { useSectionInView } from "@/lib/hooks";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  const { ref } = useSectionInView("Home", 0.1);
  return (
    <section
      ref={ref}
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black scroll-mt-28"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
