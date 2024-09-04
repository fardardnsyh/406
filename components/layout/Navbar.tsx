"use client"

import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

import { HiOutlineMenu } from "react-icons/hi"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa6"

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("none")
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="sticky container top-8">
      <nav
        style={{
          transform: scrollDirection === "down" ? "translateY(-100%)" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
        className="sticky top-8 z-20 bg-white/40 dark:bg-black/40 backdrop-blur-md border p-2 sm:p-8 dark:border-none rounded-xl w-full shadow-md container"
      >
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex flex-col items-center -space-y-2">
              <p className="font-bold text-lg sm:text-xl">Alex Melia</p>
              <p className="text-sm sm:text-md">maker of things</p>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
                onClick={() => setScrollDirection("down")}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
                onClick={() => setScrollDirection("down")}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1 rounded-xl text-base"
                onClick={() => setScrollDirection("down")}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <a href="https://www.github.com/alex-melia">
                <FaGithub
                  size={46}
                  className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                />
              </a>
              <a href="https://www.linkedin.com/in/alexmeliadev/">
                <FaLinkedin
                  size={46}
                  className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                />
              </a>
              <a href="mailto:alexmelia41@gmail.com">
                <FaEnvelope
                  size={46}
                  className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                />
              </a>
            </div>
            <ThemeSwitcher />
          </div>
          <HiOutlineMenu
            className="lg:hidden active:cursor-pointer w-8 h-8"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute lg:hidden top-28 flex w-full z-20 bg-white dark:bg-black backdrop-blur-md p-8 border dark:border-none rounded-xl shadow-md container">
              <div className="flex flex-col items-center w-full gap-4">
                <div className="md:hidden">
                  <div className="flex flex-col w-full items-center gap-4">
                    <Link
                      href="/"
                      className="text-black dark:text-white font-semibold px-4 py-1 rounded-xl text-base"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      About
                    </Link>
                    <Link
                      href="/#projects"
                      className="text-black dark:text-white font-semibold px-4 py-1 rounded-xl text-base"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/blog"
                      className="text-black dark:text-white font-semibold px-4 py-1 rounded-xl text-base"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-black dark:text-white font-semibold px-4 py-1 rounded-xl text-base"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <a href="https://www.github.com/alex-melia">
                  <FaGithub
                    size={46}
                    className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                </a>
                <a href="https://www.linkedin.com/in/alexmeliadev/">
                  <FaLinkedin
                    size={46}
                    className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                </a>
                <a href="mailto:alexmelia41@gmail.com">
                  <FaEnvelope
                    size={46}
                    className="hover:bg-gray-100 dark:hover:bg-tertiary p-2 rounded-lg transition ease-in-out-1"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                </a>
                <ThemeSwitcher />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
