import { FcEngineering } from "react-icons/fc";

export default function ContactScreen() {
  return (
    <div className="w-full h-screen bg-[#FFF]">
      <div className="text-black h-full flex items-center justify-center text-xl font-semibold flex-col gap-2">
        <p>
          Em construção...
        </p>
        <FcEngineering className="animate-[spin_3s_linear_infinite]" size={80} />
      </div>
    </div>)
}
