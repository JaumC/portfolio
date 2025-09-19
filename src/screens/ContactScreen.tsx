import { FcEngineering } from "react-icons/fc";
import FooterBar from "../components/footerbar/FooterBar";

export default function ContactScreen() {
  return (
    <div className="w-full h-screen bg-[#FFF] relative">

      <div className="hidden lg:block absolute h-full w-full overflow-hidden">
        <div className="h-full w-[120px] bg-[#2193CC] z-0 flex absolute right-50" />
        <div className="h-full animate-move-up-delay w-[30px] bg-[#2193CC] z-0 flex absolute left-15" />
        <div className="h-full animate-move-up w-[5px] bg-[#2193CC] z-0 flex absolute left-5" />
        <div className="h-full animate-move-up-delay w-[10px] bg-[#2193CC] z-0 flex absolute right-35" />
      </div>

      <div className="lg:hidden text-black h-full flex items-center justify-center m-auto text-xl font-semibold flex-col gap-2">
        <div className="h-full animate-move-up-delay w-[30px] bg-[#2193CC] z-0 flex absolute left-15" />
        <div className="h-full animate-move-up w-[5px] bg-[#2193CC] z-0 flex absolute left-5" />
        <div className="h-full animate-move-up-delay w-[10px] bg-[#2193CC] z-0 flex absolute right-35" />
      </div>
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
