import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import wordanalyticsImg from "@/public/wordanalytics.png";
import blockci from "@/public/blockci.jpeg"
import arkan from "@/public/arkan.jpeg"
import flask from "@/public/flask.png"

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
    title: "BSCS",
    location: "Air University,Islamabad",
    description:
      "I am a fresh grad from batch 20-24. I am looking a role as a full-stack web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Project Management Intern ",
    location: "PITB (Pakistan Information & Technology Board)",
    description:
      "I worked as a software developer and project manager intern for a startup.I streamlined project processes, reducing delivery timelines by 30% while maintaining high-quality standards..",
    icon: React.createElement(CgWorkAlt),
    date: " May 2023 - Sep 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB/Firebase. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BlockCi",
    description:
    
      "BlockCi is a blockchain based project pionerring Transparency in charity, through the charity organizations can maintain and update their profiles and projects, as well as track their donations, user activity and add new aspects!",
    tags: ["React", "UseState", "Firebase", "Scss", "Web3","Blockchain integration"],
    imageUrl:blockci,
    link:'https://block-ci.vercel.app/login'

  },
  {
    title: "Arkan Group Portfolio",
    description:
      "A responsive single-page application (SPA) developed using React.js and React Bootstrap.🚀👏",
    tags: ["React", "Firebase", "Node.js", "Tailwind", "Redux"],
    imageUrl: arkan,
    link:'https://arkan-group-website.vercel.app/'
  
  },
  {
    title: "What Am I Feeling?",
    description:
      "A public web app for quick quotes on how do you feel rn?",
    tags: ["css", "Python","Flask"],
    imageUrl: flask,
    link:'https://github.com/beginnerhumaira/quote-website'
  
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
  "Redux",
  "Python",
  "Django",
  "Framer Motion",
] as const;
