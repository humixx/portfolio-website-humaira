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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming more like "a solution provider🤭". Since I am a CS-grad so I am already familiar with Web dev yet to polish my skills,I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js/Express.js, and MongoDB/Firebase/Django
        </span>
        . I am also familiar with TypeScript and have hands-on experience working with AI agents. I have tested top AI platforms such as CopilotKit and openHands, and have contributed to resolving errors and improving platform stability. I am always looking to
        learn new technologies cuz what's life without learning new stuff?<span className="italic">DUH</span>. I am a developer who will be a valuable and impactful addition to your organization, so hit me up if you think I'm worth it!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy writing
       , watching documentaries, and exploring nature. I also enjoy{" "}
        <span className="font-medium">exploring new topics</span>. I am currently
        learning about{" "}
        <span className="font-medium">How Attitude Affects Our Daily Lives!</span>. I'm into a lot of exercising and building up my stamina, Exercise for me is what people call "Leisure time:)".
      </p>
    </motion.section>
  );
}
