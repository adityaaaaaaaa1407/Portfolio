"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello! I'm Aditya Sagavekar, a passionate web developer based in Mumbai,
        Maharashtra. I strive to create engaging and dynamic user experiences. I
        recently graduated (MAY 2024) with a Bachelor's in Information
        Technology from Xavier Institute of Engineering, where I honed my skills
        in JavaScript, TypeScript, and various modern frameworks.
      </p>

      <p>
        I have worked on several exciting projects, including YOOM, a Zoom clone
        for seamless online meetings, and SPICE, a comprehensive food recipe
        app. My work emphasizes responsive design, user authentication, and
        seamless interactions. I am also proficient in backend development using
        Node.js, Express.js, and MongoDB, ensuring that I can handle full-stack
        development projects with ease
      </p>

      <p>
        I am always eager to learn new technologies and take on challenging
        projects. In my spare time, I enjoy contributing to open-source projects
        and exploring the latest advancements in web development. Feel free to
        check out my projects on GitHub and get in touch with me for any
        collaboration opportunities.
      </p>
    </motion.section>
  );
}
