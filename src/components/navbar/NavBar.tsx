import { iconsLinks, links } from "../../types/Typos";

type NavBarProps = {
  onScroll: (id: string) => void;
  activeSection: string;
}

export const NavbarSpacer = () => <div className="h-[160px] lg:h-[100px] w-full" />

export default function NavBar({ onScroll, activeSection }: NavBarProps) {

  const text_color = activeSection === "contact" || activeSection === "about" ? "text-zinc-300" : "text-zinc-600"
  const link_color = activeSection === "contact" || activeSection === "about"

  return (
    <div className={`${link_color ? "text-zinc-600" : "text-zinc-300"} font-pixelify-sans bg-transparent transition-all duration-200 ${activeSection === "home" ? "hidden" : "flex"} w-full h-[125px] lg:h-[80px] flex-col lg:flex-row items-center justify-between lg:px-[30px] px-[15px]`}>
      <div className="flex-row w-full flex items-center justify-between lg:justify-start gap-[20px] py-[10px] lg:py-0 lg:pt-0">
        <img src="/me_square.jpg" alt="Acua" className={`w-[60px] h-[60px] rounded-[25px] duration-300 transition-opacity ${activeSection === "home" ? "opacity-[0]" : "opacity-[1.0]"}`} />
        <div className="flex flex-col">
          <p className={`text-[22px] lg:text-[28px] duration-300 transition-opacity ${activeSection === "home" ? "opacity-[0]" : "opacity-[1.0]"}`}>
            João Vitor Viana Chaves
          </p>
          <p className={`text-[18px] flex lg:self-start self-end duration-300 transition-opacity ${activeSection === "home" ? "opacity-[0]" : "opacity-[1.0]"}`}>
            Fullstack Developer
          </p>
        </div>
      </div>

      <hr className={`w-full rounded-2xl border-[${text_color}] lg:hidden ${activeSection === "home" ? "hidden" : "block"}`} />

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
        lg:py-[5px] 
        lg:px-[15px]
        lg:border-b-2
        lg:mb-0 
        border-b-2
        mb-4
        select-none
        ${activeSection === link ? "lg:border-[#2193CC] border-[#2193CC]" : "border-transparent"}
      `}
            >
              <div
                className={`${activeSection === link
                  ? link_color
                    ? "text-zinc-800"
                    : "text-zinc-100"
                  : text_color
                  }`}
              >
                {iconsLinks[link]}
              </div>
              <p
                className={`${activeSection === link
                  ? link_color
                    ? "text-zinc-800"
                    : "text-zinc-100"
                  : text_color
                  }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}