import { useEffect, useRef, useState } from "react"
import FooterBar from "../components/footerbar/FooterBar"
import NavBar from "../components/navbar/NavBar"
import { pages, pagesComponents } from "../../types/Typos"
import GradientDivider from "../components/GradientDivider/GradientDivider"

export default function HomeScreen() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    const container = scrollRef.current
    if (element && container) {
      const navHeight = window.innerWidth < 1024 ? 125 : 80 
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
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.intersectionRatio - b.intersectionRatio)[0]
        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      {
        root: container,
        threshold: [0.3, 0.5, 0.7, 0.9],
        rootMargin: "-80px 0px 0px 0px"
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
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center">
      <header className='fixed top-0 left-0 w-full z-50 transition-all duration-500'>
        <NavBar onScroll={handleScroll} activeSection={activeSection} />
      </header>

      <main
        ref={scrollRef}
        className="flex-1 w-full h-[100dvh] snap-y snap-mandatory overflow-y-scroll hide-scrollbar scroll-smooth"
      >
        {pages.map((page, index) => (
          <div key={page.id}>

          <section
            id={page.id}
            className="snap-start h-[100dvh] w-full flex lg:items-center items-center justify-center"
            style={{ backgroundColor: page.bg }}
            >
            {pagesComponents[page.id]}
          </section>
          {index < pages.length - 1 && (
            <GradientDivider from={page.bg} to={pages[index + 1].bg} />
          )}
          </div>
        ))}

        <footer className="snap-start h-[100dvh] bg-[#FFF] flex items-end justify-center">
          <FooterBar />
        </footer>
      </main>
    </div>
  )
}
