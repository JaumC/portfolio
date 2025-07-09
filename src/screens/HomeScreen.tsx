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
    const container = scrollRef.current
    if (element && container) {
      const navHeight = window.innerWidth < 1024 ? 125 : 80 // mobile vs desktop
      const elementTop = element.offsetTop
      container.scrollTo({ top: elementTop - navHeight, behavior: "smooth" })
    }
  }

  const arrowScroll = (direction: "up" | "down") => {
    const container = scrollRef.current
    if (!container) return

    const sectionHeight = window.innerHeight
    const navHeight = window.innerWidth < 1024 ? 125 : 80

    const currentScroll = container.scrollTop
    const targetScroll =
      direction === "down"
        ? currentScroll + sectionHeight - navHeight
        : currentScroll - sectionHeight + navHeight

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
        className="flex-1 h-[100dvh] overflow-y-scroll hide-scrollbar scroll-smooth"
        style={{ scrollPaddingTop: window.innerWidth < 1024 ? '125px' : '80px' }}
      >

        {pages.map((page, index) => (
          <section
            key={index}
            id={page}
            className="h-[100dvh] flex lg:items-center items-start justify-center"
            style={{ scrollMarginTop: window.innerWidth < 1024 ? '125px' : '80px' }}
          >
            {pagesComponents[page]}
          </section>
        ))}

        <footer className="h-[100dvh] scroll-mt-[125px] flex items-end justify-center">
          <FooterBar />
        </footer>
      </main>
    </div>
  )
}
