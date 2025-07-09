import { iconsLinks, type Links } from "../../../types/Typos";

type NavBarProps = {
  onScroll: (id: string) => void;
  activeSection: string;
}

export const links: Links[] = ["home", "about", "projects", "contact"];

export default function NavBar({ onScroll, activeSection }: NavBarProps) {


  return (
    <div className={`font-pixelify-sans bg-transparent transition-all duration-300 ${activeSection === "home" ? "hidden" : "flex"} w-full h-[125px] lg:h-[80px] flex-col lg:flex-row items-center justify-between lg:px-[30px] px-[15px]`}>
      <div className="flex-row w-full flex items-center justify-between lg:justify-start gap-[20px] py-[10px] lg:py-0 lg:pt-0">
        <img src="/Mikola.png" alt="Mikola" className={`w-[60px] h-[60px] rounded-[25px] duration-300 transition-opacity ${activeSection === "home" ? "opacity-[0]" : "opacity-[1.0]"}`} />
        <p className={`text-[22px] lg:text-[28px] duration-300 transition-opacity ${activeSection === "home" ? "opacity-[0]" : "opacity-[1.0]"}`}>
          João Vitor Viana Chaves
        </p>
      </div>

      <hr className={`w-full border-[1px] rounded-2xl border-zinc-700 lg:hidden ${activeSection === "home" ? "hidden" : "block"}`}/>

      <div className={`flex lg:gap-[70px] lg:justify-end lg:w-[50%] py-[10px] lg:py-0 justify-between w-full ${activeSection === "home" ? "hidden" : "block"}`}>
        {links.map((link, index) => {
          return (
            <div
            key={index}
            onClick={() => {
              onScroll(link);
            }}
            className={`
                cursor-pointer 
                flex 
                items-center 
                justify-center
                gap-[5px]
                hover:text-gray-400 
                duration-300 
                transition-colors 
                lg:rounded-[20px] 
                lg:py-[10px] 
                lg:px-[15px]
                lg:border-b-2
                lg:mb-0 
                border-b-2
                mb-4
                ${activeSection === link ? "lg:border-[#7815ca] border-[#7815ca]" : "border-transparent"}
                `}>
              <div className={`${activeSection === link ? "text-zinc-400" : "text-white"}`}>
                {iconsLinks[link]}
              </div>
              <p className={`${activeSection === link ? "text-zinc-400" : "text-white"}`}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}