"use client";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import React from "react";
// import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mt-36 mb-28">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-2 gap-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectsCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
