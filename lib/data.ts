import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CASEKOBRA",
    description:
      "CASEKOBRA allows users to create and order custom phone cases with a real-time preview feature.",
    tags: ["React", "Next.js", "Neon", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },

  {
    title: "ANIWATCH",
    description: "",
    tags: ["React", "Redux", "Firebase", "JavaScript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "YOUTUBE",
    description: "",
    tags: ["React", "Redux", "JavaScript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "SPICE",
    description:
      "SPICE is a comprehensive food recipe app that helps users discover and manage their favorite recipes",
    tags: ["React", "Redux", "Scss", "JavaScript"],
    imageUrl: rmtdevImg,
  },
  {
    title: "YOOM",
    description:
      " YOOM is a Zoom clone designed for seamless online meetings, featuring real-time communication and advanced scheduling options.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },

  {
    title: "SNAPGRAM",
    description:
      " SNAPGRAM is a social media platform focused on seamless interaction. User can Add, edit, and delete posts with ease, including text and images",
    tags: ["React", "Typescript", "Tailwind", "Appwrite"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
