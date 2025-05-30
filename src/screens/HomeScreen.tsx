import FooterBar from "../components/footerbar/FooterBar"
import NavBar from "../components/navbar/NavBar"

export default function HomeScreen() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="fixed w-full z-50">
        <NavBar onScroll={handleScroll}/>
      </div>

      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory pt-[80px] hide-scrollbar">
        <section id="secao1" className="snap-start h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-2xl">Sessão 1</p>
        </section>
        <section id="secao2" className="snap-start h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-2xl">Sessão 2</p>
        </section>
        <section id="secao3" className="snap-start h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-2xl">Sessão 3</p>
        </section>
        <section id="secao4" className="snap-start h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-2xl">Sessão 4</p>
        </section>

        <section className="snap-start h-screen flex items-end justify-center bg-zinc-900">
          <FooterBar />
        </section>
      </div>
    </div>
  )
}
