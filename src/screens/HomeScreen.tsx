import { useEffect, useRef, useState } from "react"
import FooterBar from "../components/footerbar/FooterBar"
import NavBar from "../components/navbar/NavBar"

import { pagesComponents, type Links } from "../../types/Typos";

export const pages: Links[] = ["home", "about", "projects", "contact"];

export default function HomeScreen() {

  const [ showNavBar, setShowNavBar ] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({ behavior: "smooth"})
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

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          const id = visible.target.id
          setActiveSection(id)
        }
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
  const container = scrollRef.current
  if (!container) return

  const onScroll = () => {
    const scrollTop = container.scrollTop
    const sectionHeight = window.innerHeight
    setShowNavBar(scrollTop >= sectionHeight * 0.3)
  }

  container.addEventListener("scroll", onScroll)

  return () => {
    container.removeEventListener("scroll", onScroll)
  }
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
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      
      <header className={`sticky top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
        <NavBar onScroll={handleScroll} activeSection={activeSection}/>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-scroll h-[100dvh] snap-y snap-mandatory hide-scrollbar">
        {pages.map((page, index) => {
          return (
            <section key={index} id={page} className="snap-start h-[100dvh] scroll-mt-[125px] flex items-center justify-center">
              {pagesComponents[page]}
            </section>
          )
        })}

        <footer className="snap-start h-[100dvh] scroll-mt-[125px] flex items-end justify-center">
          <FooterBar />
        </footer>
      </main>
    </div>
  )
}
