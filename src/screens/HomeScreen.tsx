import FooterBar from "../components/footerbar/FooterBar"
import NavBar from "../components/navbar/NavBar"

export default function HomeScreen() {

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="overflow-hidden fixed w-full">
        <NavBar />
      </div>
      <div className="flex-1 overflow-auto pt-[80px] justify-between flex flex-col">
        <div className="p-[20px]">
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>

        <div className=" w-full">
          <FooterBar />
        </div>
      </div>
    </div>
  )
}