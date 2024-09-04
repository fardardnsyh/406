"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import Image from "next/image"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Image"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )
  }

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        size={46}
        className="hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
        onClick={() => setTheme("light")}
      />
    )
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        size={46}
        className="hover:bg-gray-100 p-2 rounded-lg transition ease-in-out-1"
        onClick={() => setTheme("dark")}
      />
    )
  }
}
