import { FcEngineering } from "react-icons/fc";
import FooterBar from "../components/footerbar/FooterBar";

export default function ContactScreen() {
  return (
    <div className="w-full h-full relative">
      <div className="h-[50px] w-full z-0 absolute top-50 left-0 bg-zinc-300 animate-side"/>
      <div className="h-[10px] w-full z-0 absolute top-40 left-0 bg-zinc-300 animate-side-delay"/>
      <div className="h-[30px] w-full z-0 absolute top-80 left-0 bg-zinc-300 animate-side-delay"/>

      <div className="text-black relative z-1 h-full flex items-center justify-between text-xl font-semibold flex-col gap-2">
        <div className="flex flex-col items-center justify-center m-auto">
          <p>
            Em construção...
          </p>
          <FcEngineering className="animate-[spin_3s_linear_infinite]" size={80} />
        </div>
        <FooterBar />
      </div>
    </div>
  )
}
