import { FaGithub } from 'react-icons/fa'
import { AnimatedDiv } from '../Animation/AnimatedDiv'
import { AnimatedText } from '../Animation/AnimatedText'

export default function HomeCard() {

  return (
    <div className=" relative flex w-[90%] lg:w-[45%] h-[500px] rounded-lg border-2 border-[#7815ca]">
      <div className="bg-zinc-900 absolute bottom-[5px] left-[5px] w-[100%] h-[500px] rounded-lg flex flex-col justify-center items-center border-t-2 border-r-2 border-zinc-600">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px]">
          <div className='flex flex-col lg:items-start items-center'>
            <AnimatedText delay={0.2} duration={2}>JOÃO VITOR VIANA CHAVES</AnimatedText>
            <AnimatedText delay={0.4} duration={2}>21 Years Old</AnimatedText>

            <div className='flex hidden lg:block'>
              <AnimatedDiv delay={0.6} duration={2}>
                <a rel="stylesheet" href="https://github.com/JaumC">
                  <FaGithub size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-[#7815ca]'/>
                </a>
              </AnimatedDiv>
            </div>

          </div>
          <AnimatedDiv delay={0.8} duration={1}>
            <img src="/Mikola.png" alt="Mikola" className="lg:w-[300px] w-[200px] rounded-full lg:p-2 p-1 lg:border-4 border-2 border-[#7815ca]" />
          </AnimatedDiv>
          <div className='flex lg:hidden'>
              <AnimatedDiv delay={0.6} duration={2}>
                <a rel="stylesheet" href="https://github.com/JaumC" target="_blank">
                  <FaGithub size={60} className='hover:text-zinc-400 duration-300 transform transition-color text-[#7815ca]'/>
                </a>
              </AnimatedDiv>
            </div>
        </div>
      </div>
    </div>
  )
}
