import Image from "next/image"

import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoNodejs } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoReact } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiMysql } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { BiLogoDocker } from "react-icons/bi"
import { SiKubernetes } from "react-icons/si"
import Skill from "../layout/Skill"

export default function About() {
  return (
    <section className="sm:p-12 pt-12 flex flex-col text-left gap-4 animate-fadeInDown">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-lg sm:text-2xl text-center sm:text-left">
            Full Stack Web Developer, proficient in Node & React ecosystem.
          </h1>
          <div className="sm:hidden mx-24">
            <Image
              className="rounded-full w-full"
              src="/me.jpg"
              alt="My picture"
              layout="responsive"
              width="256"
              height="1"
            />
          </div>
          <p className="text-md text-center sm:text-left sm:text-xl font-light">
            👋 Hi, I&apos;m Alex! Welcome to my portfolio site!
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            className="rounded-full"
            src="/me.jpg"
            alt="My picture"
            width="456"
            height="1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-[800px] mt-12">
        <p className="text-base sm:text-lg text-secondary">
          Recent Software Engineering graduate seeking opportunities as a Junior
          Developer
        </p>
        <p className="text-base sm:text-lg text-secondary">
          Identifier of problems, creator of solutions.
        </p>
        <p className="text-base sm:text-lg text-secondary">
          Currently working on personal projects
        </p>
      </div>

      <h2 className="text-lg font-bold mt-12">Skills</h2>
      <div className="flex flex-wrap gap-4">
        <Skill
          icon={<BiLogoJavascript className="w-8 h-8" color="#F7DF1E" />}
          name="JavaScript"
        />
        <Skill
          icon={<BiLogoTypescript className="w-8 h-8" color="#3178C6" />}
          name="TypeScript"
        />
        <Skill
          icon={<BiLogoReact className="w-8 h-8" color="#61DAFB" />}
          name="React"
        />
        <Skill
          icon={<BiLogoNodejs className="w-8 h-8" color="#339933" />}
          name="Node.js"
        />
        <Skill
          icon={<RiNextjsFill className="w-8 h-8" color="#000000" />}
          name="Next.js"
        />
        <Skill
          icon={<SiExpress className="w-8 h-8" color="#000000" />}
          name="Express.js"
        />
        <Skill
          icon={<BiLogoMongodb className="w-8 h-8" color="#47A248" />}
          name="MongoDB"
        />
        <Skill
          icon={<BiLogoPostgresql className="w-8 h-8" color="#336791" />}
          name="PostgreSQL"
        />
        <Skill
          icon={<SiMysql className="w-8 h-8" color="#E76F00" />}
          name="MySQL"
        />
        <Skill
          icon={<FaGitAlt className="w-8 h-8" color="#F05032" />}
          name="git"
        />
        <Skill
          icon={<BiLogoDocker className="w-8 h-8" color="#2496ED" />}
          name="Docker"
        />
        <Skill
          icon={<SiKubernetes className="w-8 h-8" color="#326CE5" />}
          name="Kubernetes"
        />
      </div>
    </section>
  )
}
