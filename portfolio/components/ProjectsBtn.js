import Image from "next/image";
import Link from "next/link";
import {  FaArrowRight } from "react-icons/fa";

const ProjectsBtn = () => {
  return <div className=" mx-auto xl:mx-0">
      <Link href={'/work'} 
      className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
        <Image src={'/rounded-text.png'} width={141} height={148} 
        className=" animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
        <FaArrowRight className=" absolute text-4xl group-hover:animate-bounce"/>
      </Link>
  </div>;
};

export default ProjectsBtn;
