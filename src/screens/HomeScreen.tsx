import { useEffect, useRef, useState } from "react"
import FooterBar from "../components/footerbar/FooterBar"
import NavBar from "../components/navbar/NavBar"
import { pagesComponents, type Links } from "../../types/Typos"

export const pages: Links[] = ["home", "about", "projects", "contact"]

export default function HomeScreen() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const arrowScroll = (direction: "up" | "down") => {
    const container = scrollRef.current
    if (!container) return

    const sectionHeight = window.innerHeight
    const currentScroll = container.scrollTop

    const targetScroll =
      direction === "down"
        ? currentScroll + sectionHeight
        : currentScroll - sectionHeight

    container.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const sections = container.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      {
        root: container,
        threshold: 0.5,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        arrowScroll("down")
      } else if (event.key === "ArrowUp") {
        arrowScroll("up")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <header className='sticky top-0 left-0 w-full z-50 transition-all duration-500'>
        <NavBar onScroll={handleScroll} activeSection={activeSection} />
      </header>

      <main
        ref={scrollRef}
        className="flex-1 h-[100dvh] overflow-y-scroll snap-y snap-mandatory hide-scrollbar scroll-smooth"
      >
        {pages.map((page, index) => (
          <section
            key={index}
            id={page}
            className="snap-start h-[100dvh] flex items-center justify-center"
          >
            {pagesComponents[page]}
          </section>
        ))}

        <footer className="snap-start h-[100dvh] flex items-end justify-center">
          <FooterBar />
        </footer>
      </main>
    </div>
  )
}
