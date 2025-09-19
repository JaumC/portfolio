import { FaGithub } from 'react-icons/fa'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AnimatedDiv } from '../animation/AnimatedDiv'
import { AnimatedText } from '../animation/AnimatedText'

export default function HomeCard() {

  return (
    <div className='relative pt-8 flex w-full h-screen'>

      <div className="lg:block hidden absolute h-full top-0 w-full overflow-hidden">
        <div className='bg-white w-[100px] h-full absolute top-0 z-0 right-100' />
        <div className='bg-white w-[100px] h-full absolute top-0 z-0 right-50' />
        <div className="h-full w-[50px] bg-white animate-move-up top-0 z-0 flex absolute left-50" />
        <div className="h-full w-[10px] bg-white animate-move-up-delay top-0 z-0 flex absolute left-20" />
      </div>

      <div className="lg:hidden absolute h-full top-0 w-full overflow-hidden">
        <div className='bg-white w-[50px] h-full absolute top-0 z-0 right-5' />
        <div className="h-full w-[20px] bg-white animate-move-up top-0 z-0 flex absolute left-15" />
        <div className="h-full w-[10px] bg-white animate-move-up-delay top-0 z-0 flex absolute left-10" />
      </div>

      <div className="relative pt-8 flex w-[90%] lg:w-[45%] h-[500px] m-auto rounded-lg border-2 border-[#2193CC]">
        <div className="p-4 bg-zinc-900 absolute bottom-[5px] left-[5px] w-[100%] h-[500px] rounded-lg flex flex-col justify-center items-center border-t-2 border-r-2 border-zinc-600">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px]">
            <div className='flex flex-col lg:items-start items-center'>
              <AnimatedText delay={0.2} duration={2}>
                JOÃO VITOR VIANA CHAVES
              </AnimatedText>
              <AnimatedText delay={0.4} duration={2}>FULLSTACK DEVELOPER</AnimatedText>
              <AnimatedText delay={0.6} duration={2}>21 Years</AnimatedText>

              <div className='flex gap-5'>
                <div className='flex hidden lg:flex'>
                  <AnimatedDiv delay={0.6} duration={2}>
                    <a rel="stylesheet" href="https://github.com/JaumC" target="_blank">
                      <FaGithub size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-[#7815ca]' />
                    </a>
                  </AnimatedDiv>
                </div>

                <div className='flex hidden lg:flex'>
                  <AnimatedDiv delay={0.6} duration={2}>
                    <a rel="stylesheet" href="https://www.linkedin.com/in/jvvc/" target="_blank">
                      <TbBrandLinkedinFilled size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-blue-500' />
                    </a>
                  </AnimatedDiv>
                </div>
              </div>

            </div>
            <AnimatedDiv delay={0.8} duration={1}>
              <img src="/me_square.jpg" alt="Acua" className="lg:w-[300px] w-[200px] rounded-full lg:p-2 p-1 lg:border-4 border-2 border-[#2193CC]" />
            </AnimatedDiv>
            <div className='flex lg:hidden gap-4'>
              <AnimatedDiv delay={0.6} duration={2}>
                <a rel="stylesheet" href="https://github.com/JaumC" target="_blank">
                  <FaGithub size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-[#7815ca]' />
                </a>
              </AnimatedDiv>

              <AnimatedDiv delay={0.6} duration={2}>
                <a rel="stylesheet" href="https://www.linkedin.com/in/jvvc/" target="_blank">
                  <TbBrandLinkedinFilled size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-blue-500' />
                </a>
              </AnimatedDiv>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
