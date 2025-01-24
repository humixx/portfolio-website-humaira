"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Marquee animation for one flowing line
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], // Move icons left across the screen
    transition: {
      x: {
        repeat: Infinity, // Repeat animation infinitely
        repeatType: "loop", // Seamless loop
        duration: 55, // Control speed
        ease: "linear", // Smooth and constant movement
      },
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 h-40 w-full scroll-mt-28 text-center overflow-hidden bg-dark sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.div
        className="absolute flex space-x-12 top-20 w-[400%]" // Wide enough for smooth flow
        variants={marqueeVariants}
        animate="animate"
      >
        <ul className="flex space-x-12 items-center">
          {skillsData.map((skill, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-gray-300"
            >
              <div className="text-5xl">{skill.icon}</div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-12 items-center">
          {/* Duplicate the list for a seamless loop */}
          {skillsData.map((skill, index) => (
            <li
              key={`duplicate-${index}`}
              className="flex flex-col items-center text-gray-300"
            >
              <div className="text-5xl">{skill.icon}</div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
