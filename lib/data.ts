import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blue from "@/public/blue.png";
import euphoria from "@/public/Euphoria.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Resume",
    hash: "#resume",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Food Ordering and Delivery Website",
    location: "AASTU",
    description:
      "As part of my software engineering coursework at AASTU, I led a team to develop a comprehensive food ordering and delivery website. The project involved designing and implementing a user-friendly interface for customers to browse menus, place orders, and track deliveries. On the backend, we built a robust system to manage restaurant information, inventory, and order fulfillment. Key features included a mobile-responsive design, delivery system , and order tracking.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Job Portal",
    location: "DAN Energie",
    description:
      "At DAN Energie, I'm part of a team responsible for developing a comprehensive job portal website. As a full-stack developer, my primary responsibilities include designing and implementing the user-facing web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, where I developed responsive and accessible user interfaces with React.js, built robust backend APIs using Express.js to handle user authentication, job postings, applications, and other core functionalities, and integrated the frontend and backend components to ensure seamless data flow and functionality. I also wrote Python scripts to scrape job postings from various online sources, utilizing web scraping libraries like BeautifulSoup and Scrapy to extract relevant job data, clean and normalize the information, and integrate the web scraping pipelines with the job portal's backend to continuously update the database with the latest job opportunities. Throughout this role, I've collaborated closely with cross-functional teams, participated in sprint planning, code reviews, and daily standups to ensure effective project management and delivery.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Projects at AASTU",
    location: "AASTU",
    description:
      "For my senior project at AASTU, I worked as a backend developer on a synchronous microservices-based student information management system (SIMS). The goal was to create a modular and scalable platform to handle various administrative tasks related to student records, such as enrollment, attendance, grading, and transcript management. In this role, I was responsible for designing and implementing the core microservices that formed the backbone of the SIMS architecture using Node.js. This involved developing efficient data storage and retrieval mechanisms, implementing secure communication protocols between the microservices, and ensuring seamless integration with the system's front-end components. The use of Node.js allowed me to leverage its event-driven, non-blocking I/O model to build a highly responsive and scalable backend infrastructure. The end result was a highly flexible and resilient SIMS that could easily adapt to changing requirements and scale to accommodate growing user demands.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;
export const educationsData = [
  {
    title: "BSc in Software Engineering",
    location: "AASTU",
    description:
      "Graduated in 2024 after 5 years of comprehensive studies in software engineering. AASTU is a leading public research university in Ethiopia, known for its strong programs in engineering, technology, and the sciences. The software engineering curriculum covered a wide range of topics including computer programming, algorithms, database systems, software design and architecture, operating systems, and project management.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "coursera",
    description:
      "Completed specialized online courses in data science, back-end development, and front-end development through Coursera",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Technical Skills",
    location: "Online",
    description:
      "Self-taught and continuously learning new technologies from different sites like youtube , including:React, Next.js, TypeScript, Tailwind, Prisma  and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blue Interior Desing ",
    description: "I created this landing page for an interior design company.",
    tags: ["React", "Tailwind", "Type Script"],
    imageUrl: blue,
  },
  {
    title: "Euphoria Hotel Management",
    description:
      "website for a hotel mangement purpose.It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Node js", "Tailwind"],
    imageUrl: euphoria,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
