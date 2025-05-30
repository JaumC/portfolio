type NavBarProps = {
  onScroll: (id: string) => void;
}

export default function NavBar({ onScroll }: NavBarProps) {
  return (
    <div className="bg-zinc-700 w-full h-[80px] flex items-center justify-between pl-[15px] px-[30px]">
        <div className="flex-row flex items-center justify-center gap-[20px]">
            <img src="" alt="" className="border-2 w-[50px] h-[50px] rounded-[25px]"/>
            <p className="text-[28px]">
                João Vitor Viana Chaves
            </p>
        </div>
        <div className="flex gap-[70px]">
            <p className="cursor-pointer hover:text-gray-400 duration-300 trasition-color" onClick={() => onScroll("secao1")}>Link 1</p>
            <p className="cursor-pointer hover:text-gray-400 duration-300 trasition-color" onClick={() => onScroll("secao2")}>Link 2</p>
            <p className="cursor-pointer hover:text-gray-400 duration-300 trasition-color" onClick={() => onScroll("secao3")}>Link 3</p>
            <p className="cursor-pointer hover:text-gray-400 duration-300 trasition-color" onClick={() => onScroll("secao4")}>Link 4</p>
        </div>
    </div>
  )
}