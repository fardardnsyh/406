"use client"

import ProjectCard from "../projects/ProjectCard"
import ProjectHero from "../projects/ProjectHero"
import projects from "../../data/projects.json"
import { useIntersectionObserver } from "@/lib/utils"

export default function Projects() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  })
  return (
    <section
      id="projects"
      ref={ref}
      className={`sm:p-12 pt-12 min-h-screen ${
        isIntersecting ? "animate-fadeInDown" : "opacity-0"
      }`}
    >
      <h1 className="text-center text-xl sm:text-2xl font-bold mb-12">
        Some Things I&apos;ve Built
      </h1>
      <div className="flex flex-col gap-24">
        <ProjectHero imagePosition="left" project={projects[0]} />
        <ProjectHero imagePosition="right" project={projects[1]} />
        <ProjectHero imagePosition="left" project={projects[2]} />
        <p className="my-24 text-center text-xl font-bold">Other Projects</p>
        <div className="flex flex-col md:grid grid-flow-auto grid-cols-3 gap-8">
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
