"use client"

import { useIntersectionObserver } from "@/lib/utils"

export default function Contact() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  })
  return (
    <section
      id="contact"
      ref={ref}
      className={`flex flex-col gap-8 items-center justify-center min-h-screen sm:p-12 pt-12 mt-12 ${
        isIntersecting ? "animate-fadeInDown" : "opacity-0"
      }`}
    >
      <h1 className="text-center font-bold text-4xl sm:text-5xl">
        How do you take your tea? ☕
      </h1>
      <p className="text-sm sm:text-base text-center">
        Feel free to shoot me a message whenever!
      </p>
      <p className="p-2 border dark:border-tertiary bg-tertiary rounded-xl cursor-pointer text-lg">
        <a href="mailto:alexmelia41@gmail.com">✉️ Get In Touch</a>
      </p>
    </section>
  )
}
