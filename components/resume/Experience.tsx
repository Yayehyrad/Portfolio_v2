"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { educationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";
import Title from "../layouts/Title";

export default function Experience({ experienceData }: any) {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();
  const data = experienceData ? educationsData : experiencesData;
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 mt-1">
      <VerticalTimeline lineColor="">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              position={item.location}
              visible={true}
              contentStyle={{
                background: "#212420",
                // background:
                //   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  "light" === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                //     //   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize ring-designColor text-red-500">
                {item.title}
              </h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
