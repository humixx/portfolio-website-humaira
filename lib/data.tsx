import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import csd from "@/public/CSD.png"
import food from "@/public/food.png"
import blockci from "@/public/blockci.jpeg"
import arkan from "@/public/arkan.jpeg"
import flask from "@/public/flask.png"
import gym from "@/public/1.png"
import zounds from "@/public/ZOUNDS.png"
import pc from "@/public/POCKET CADDIE.png"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiPython,
  SiDjango,
  SiFramer,
  SiFirebase,
  SiPostman,
  SiGraphql,
  SiDocker,

  SiWebpack,
} from "react-icons/si";


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
    title: "ZOUNDS",
    description:
      "This Music Streaming App is a comprehensive platform that redefines how users interact with music. It includes features like secure password recovery, an immersive onboarding process, preference setting for a personalized experience, and core functionalities such as exploring content, managing a music library, and NFC-based interactions. Users can create and manage playlists, listen to music using an intuitive player, and explore detailed artist profiles. The application combines seamless user workflows with modern technologies to deliver an engaging and feature-rich experience.",
    tags: [
      "React",
      "NFC",
      "UI/UX",
      "Music Streaming",
      "MongoDB",
      "Scss",
      "React Native",
    ],
   
    imageUrl: zounds, // Replace with the actual image path
    link: "", // Replace with the actual app link
  },
  
  
  {
    title: "PocketCaddie",
    description:"Pocket Caddie is an innovative app designed to enhance the golfing experience by acting as a personal caddie in your pocket. It offers features such as real-time GPS tracking for precise course navigation, score tracking for improved gameplay analysis, and personalized club recommendations based on player performance. The app is user-friendly and integrates advanced technology to make golfing more accessible and enjoyable for players of all skill levels.",

    tags: ["React","Golf",
  "Sports App",
  "GPS Tracking",
  "Score Tracking",
  "React Native",
  "UX/UI Design",
  "Performance Analytics",
  "Personalized Recommendations",
  "Mobile Application"],
    imageUrl:pc,
    link:''

  },
  {
    title: "BlockCi",
    description:"BlockCi is a pioneering software solution aimed at fostering transparency and trust within charity organizations and donors, addressing a critical need in Pakistan's philanthropic landscape. This document delineates the comprehensive scope and challenges of the project, and the proposed solution set to be implemented. Central to the software's functionality is the ability to monitor the progress of various charity initiatives, facilitate secure transactions, and establish an immutable ledger of all financial activities.",

    tags: ["React", "UseState", "Firebase", "Scss", "Web3","Blockchain integration"],
    imageUrl:blockci,
    link:'https://block-ci.vercel.app/login'

  },
  {
    title: "Arkan Group Portfolio",
    description:
       "Arkan Group Portfolio is a responsive single-page application (SPA) designed to showcase the services and offerings of the Arkan Group. Built with React.js and styled using React Bootstrap and Tailwind CSS, this modern platform delivers a visually appealing and user-friendly interface. With Firebase for backend integration and Redux for state management, the application ensures seamless navigation and efficient data handling. The portfolio includes sections like Home, About Us, Shipping, Contact Us, and Admin Login, providing a comprehensive overview of the group’s operations and services.",
    tags: ["React", "Firebase", "Node.js", "Tailwind", "Redux"],
    imageUrl: arkan,
    link:'https://arkan-group-website.vercel.app/'
  
  },
  
      {
        title: "What Am I Feeling?",
        description:
          "What Am I Feeling? is a public web app designed to provide quick and inspiring quotes based on how the user is currently feeling. Users can input their mood, and the app dynamically generates a quote tailored to that mood. Built with a combination of CSS for styling, Python for backend logic, and Flask as the framework, the application is minimalistic yet functional, ensuring a simple and seamless user experience.",
        tags: ["CSS", "Python", "Flask"],
        imageUrl: flask,
        link:'https://github.com/beginnerhumaira/quote-website'
      },
    
    
  

  
    {
      title: "FitLife Gym Center",
      description:
        "FitLife Gym Center is a React-based web application that offers a comprehensive platform with essential features including user authentication, an admin dashboard, routing mechanisms, and a calorie calculator. Designed with modularity and scalability in mind, this platform uses modern web development practices to ensure a user-friendly experience. The project structure is thoughtfully organized around key components such as App.jsx for routing, Home.jsx as the landing page, Login.jsx for user authentication, Dashboard.jsx for admin and user control, and CalorieCalculatorModal.jsx as a health and fitness tool. The platform leverages Firebase for backend services like real-time database management, authentication, and role-based access control, making it highly efficient and secure. With a clean and responsive design, the application adapts seamlessly to different devices, ensuring an accessible and engaging experience for all users.",
      tags: ["css", "React", "Firebase", "VanillaJS", "Node"],
      imageUrl: gym,
      link: "",
    },
  
  

  {
    title:"Food Delivery Service with Delivery Tracking",
    description:"The Food Delivery Service project is a comprehensive web-based platform that enables users to order food from local restaurants while providing real-time delivery tracking. This system is designed to enhance both customer experience and restaurant operations by offering seamless menu browsing, order placement, and delivery status updates. The platform utilises an intuitive frontend interface paired with robust backend infrastructure, ensuring smooth interactions and reliable performance.",
    tags:["css","HTML","JavaScript ","PHP and MySQL","AJAX"],
    imageUrl:food,
    link:'',
  },

  {
    title:"Customer Feedback System ",
    description:"The Customer Feedback System is a comprehensive web-based platform designed to collect, manage, and analyze customer feedback efficiently. This system offers businesses the ability to engage with their customers, understand their satisfaction levels, and make informed decisions to improve services. With a focus on ease of use, data accuracy, and administrative control, the project emphasizes user experience and functionality across its different modules.",
    tags:["css","HTML","JavaScript","PHP and MySQL","React ","PDO"],
    imageUrl:csd,
    link:'',
  }

] as const;



type Skill = {
  name: string;
  icon: JSX.Element;
};

export const skillsData = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Docker", icon: <SiDocker /> },
  
  { name: "Webpack", icon: <SiWebpack /> },
];