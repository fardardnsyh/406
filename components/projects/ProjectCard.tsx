import { BiFolder } from "react-icons/bi"
import { FaGithub, FaRegNewspaper } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { Link, Technology, Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
    <div className="flex flex-col justify-between space-y-4 border rounded-md p-4 shadow-xl hover:-translate-y-2 transition ease-in-out duration-300">
      <div className="flex flex-col">
        <div className="flex justify-between mb-4">
          <BiFolder size={32} />
          <div className="flex items-center gap-4">
            {project.links?.map((link: Link, i: number) => (
              <a href={`${link.url}`} key={i}>
                {getIcon(link.type)}
              </a>
            ))}
          </div>
        </div>
        <p className="text-base font-semibold mb-4">{project.title}</p>
        <p className="text-sm font-light mb-4">{project.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((technology: Technology, i: number) => (
            <p key={i}>{technology.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
