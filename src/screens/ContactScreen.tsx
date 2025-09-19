import { FcEngineering } from "react-icons/fc";
import FooterBar from "../components/footerbar/FooterBar";

export default function ContactScreen() {
  return (
    <div className="w-full h-screen bg-[#FFF]">
      <div className="text-black h-full flex items-center justify-between text-xl font-semibold flex-col gap-2">
        <div className="flex flex-col items-center justify-center m-auto">
          <p>
            Em construção...
          </p>
          <FcEngineering className="animate-[spin_3s_linear_infinite]" size={80} />
        </div>
        <FooterBar />
      </div>
    </div>)
}
