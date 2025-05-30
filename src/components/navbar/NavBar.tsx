export default function NavBar() {
  return (
    <div className="bg-zinc-700 w-full h-[80px] flex items-center justify-between pl-[15px] px-[30px]">
        <div className="flex-row flex items-center justify-center gap-[20px]">
            <img src="" alt="" className="border-2 w-[50px] h-[50px] rounded-[25px]"/>
            <p className="text-[28px]">
                João Vitor Viana Chaves
            </p>
        </div>
        <div className="flex gap-[70px]">
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
        </div>
    </div>
  )
}