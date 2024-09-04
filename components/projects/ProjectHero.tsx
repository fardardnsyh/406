import { Link, Project, Technology } from "@/types"
import Image from "next/image"
import React from "react"
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaRegNewspaper,
} from "react-icons/fa6"

interface ProjectHeroProps {
  imagePosition: string
  project: Project
}

export default function ProjectHero({
  imagePosition,
  project,
}: ProjectHeroProps) {
  function getIcon(type: string) {
    switch (type) {
      case "github":
        return <FaGithub size={24} />
      case "site":
        return <FaArrowUpRightFromSquare size={24} />
      case "blog":
        return <FaRegNewspaper size={24} />
      default:
        return <p>{type}</p>
    }
  }
  return (
    <>
      {imagePosition === "left" ? (
        <div className="flex flex-col lg:grid grid-cols-[3fr,2fr] gap-8 p-8 rounded-xl border dark:border-tertiary dark:shadow-tertiary shadow-lg">
          <a className="flex items-center" href={project.url || ""}>
            <Image
              src={project.image}
              alt="KickTalk image"
              layout="responsive"
              width={800}
              height={1}
            />
          </a>
          <div className="flex flex-col gap-8 text-right">
            <div className="flex flex-col">
              <p className="font-light text-lg">Featured Project</p>
              <p className="font-bold text-xl">{project.title}</p>
            </div>
            <div className="bg-tertiary p-2 rounded-sm shadow-sm">
              <p>{project.description}</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 justify-between place-items-center gap-2">
              {project.technologies.map((technology: Technology, i: number) => (
                <React.Fragment key={i}>
                  <p key={i}>{technology.name}</p>
                </React.Fragment>
              ))}
            </div>
            <div className="grid grid-cols-3 ml-12 justify-between place-items-center gap-2">
              {project.links?.map((link: Link, i: number) => (
                <React.Fragment key={i}>
                  <a href={`${link.url}`}>{getIcon(link.type)}</a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:grid grid-cols-[2fr,3fr] gap-8 p-8 rounded-xl border dark:border-tertiary dark:shadow-tertiary shadow-lg">
          <a className="sm:hidden" href={project.url || ""}>
            <Image
              src={project.image}
              alt="KickTalk image"
              width={800}
              height={1}
            />
          </a>
          <div className="flex flex-col gap-8 text-right">
            <div className="flex flex-col text-left">
              <p className="font-light text-lg">Featured Project</p>
              <p className="font-bold text-xl">{project.title}</p>
            </div>
            <div className="bg-tertiary p-2 rounded-sm shadow-sm text-left">
              <p>{project.description}</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 justify-between place-items-center gap-2">
              {project.technologies.map((technology: Technology, i: number) => (
                <React.Fragment key={i}>
                  <p>{technology.name}</p>
                </React.Fragment>
              ))}
            </div>
            <div className="grid grid-cols-4 ml-12 justify-between place-items-center gap-2">
              {project.links?.map((link: Link, i: number) => (
                <React.Fragment key={i}>
                  <a href={`${link.url}`}>{getIcon(link.type)}</a>
                </React.Fragment>
              ))}
            </div>
          </div>
          <a className="hidden sm:flex items-center" href={project.url || ""}>
            <Image
              src={project.image}
              alt="KickTalk image"
              width={800}
              height={1}
            />
          </a>
        </div>
      )}
    </>
  )
}
