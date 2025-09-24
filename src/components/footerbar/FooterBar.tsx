type FooterBarProps = {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

export default function FooterBar({ scrollRef }: FooterBarProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const container = scrollRef?.current
    if (el && container) {
      const navHeight = window.innerWidth < 1024 ? 125 : 80
      const elementTop = el.offsetTop
      container.scrollTo({
        top: elementTop - navHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className='w-full h-[210px] relative z-9 lg:h-[440px] text-white bg-[#121317] flex items-center px-[30px]'>
      <div>
        <p className="text-[28px]" onClick={() => scrollToSection("home")}>Home</p>
        <p className="text-[28px]" onClick={() => scrollToSection("about")}>About</p>
        <p className="text-[28px]" onClick={() => scrollToSection("projects")}>Projects</p>
        <p className="text-[28px]" onClick={() => scrollToSection("contact")}>Contact</p>
      </div>
    </div>
  )
}
