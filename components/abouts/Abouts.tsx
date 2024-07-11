"use client";
import logo from "@/assets/images/bannerImg.png";
import Image from "next/image";
import Title from "../layouts/Title";
import { useSectionInView } from "@/lib/hooks";

const Abouts: React.FC = () => {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section id="about" ref={ref} className="mb-2">
      <div className="flex h-[100vh] mt-10 items-center">
        <div className="w-1/2 hidden md:block">
          <Image src={logo} alt="About Me" width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 pl-4 pr-4 md:pl-0 md:pr-0  flex justify-center flex-col items-center ">
          <Title title="" des="About Me" />
          <p className="text-lg text-pretty">
            I&apos;m results-oriented and creative software engineer with 2
            years of experience crafting user-centric web applications. My
            expertise lies in both front-end and back-end development, allowing
            me to tackle projects from the ground up.
          </p>
          <h3 className="text-xl mt-4 mb-2 self-start">What drives me?</h3>
          <ul className="list-disc pl-6">
            <li>
              {" "}
              Building intuitive interfaces: I believe in creating user
              interfaces that are not only visually appealing but also clear and
              easy to navigate.
            </li>
            <li>
              {" "}
              Developing robust backends: A strong foundation is vital. I write
              clean, efficient, and secure code that ensures the smooth
              operation of your application.
            </li>
            <li>
              Delivering a seamless user experience: User focus is paramount. I
              prioritize user experience (UX) by ensuring your application is
              not only functional but also enjoyable to interact with.
            </li>
          </ul>
          <h3 className="text-xl mt-4 mb-2  self-start">Beyond the code:</h3>
          <ul className="list-disc pl-6">
            <li>
              {" "}
              I&apos;m a lifelong learner, constantly seeking to expand my
              knowledge and stay updated with the latest technologies and
              trends.
            </li>
            <li>
              {" "}
              I thrive in collaborative environments, working effectively with
              designers, project managers, and other developers to bring
              projects to life.
            </li>
            <li>
              I possess excellent communication skills, able to bridge the gap
              between technical and non-technical audiences.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
