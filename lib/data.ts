import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import runthecodeImg from "@/public/img_project_sneakers_full.jpg";
import carshowcaseImg from "@/public/carshowcase.jpg";
import socialappImg from "@/public/img_project_socialApp_full.jpg";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer bootcamp",
    location: "Madrid, Spain",
    description:
      "I graduated after 6 months of studying ( 900+ hs coding).",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Madrid, Spain",
    description:
      "Developed a Next.js application, consuming data from two different APIs, including integrated pagination, filtering, and search functionality.",
    icon: React.createElement(FaReact),
    date: "2023 - 1 month",
  },
  {
    title: "Front-End Developer",
    location: "Madrid, Spain",
    description:
      "I worked as a full-stack developer leading a 3-member team responsible for the design, and front-end development of an e-commerce. I developed and implemented the backend for products with a MySQL database, including controllers and routes.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2 months",
  },
] as const;

export const projectsData = [
  {
    title: "RUN THE CODE",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. A sneaker store e-commerce.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Python"],
    imageUrl: runthecodeImg,
  },
  {
    title: "Car Hub",
    description:
      "Developed a Next.js application, consuming data from two different APIs. It has features like integrated pagination, filtering, and search functionality.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carshowcaseImg,
  },
  {
    title: "SocialApp",
    description:
      "A pinterest clone. I use Sanity.io as DB for user and pictures, login with Google OAuth 2.0. Fully functional.",
    tags: ["React", "Next.js", "Sanity.io", "Tailwind"],
    imageUrl: socialappImg,
  },
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
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;