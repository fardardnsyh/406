import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Projects from "@/components/sections/Projects"

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
