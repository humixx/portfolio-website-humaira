"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Link key={index} href={project.link} legacyBehavior>
            <a>
              <Project {...project} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
