"use client"

import { ReactNode } from "react"

interface SkillProps {
  icon: ReactNode
  name: string
}
export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex bg-tertiary dark:border-tertiary items-center gap-2 border w-fit p-2 rounded-xl">
      {icon}
      <p className="text-sm sm:text-lg">{name}</p>
    </div>
  )
}
