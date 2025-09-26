import { FaGithub, FaPhoneVolume } from 'react-icons/fa'
import { iconsLinks, pages } from '../../types/Typos'
import Capitalize from '../../utils/Capitalize'
import { MdMarkEmailUnread } from 'react-icons/md'
import { TbBrandLinkedinFilled } from 'react-icons/tb'

type FooterBarProps = {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

export default function FooterBar({ scrollRef }: FooterBarProps) {
  const messageWpp = "Olá, gostaria de saber mais sobre seu currículo!"
  const messageEmail = "Olá, gostaria de saber mais sobre seu currículo!"

  const phone = "5561993298498";
  const url_wpp = `https://wa.me/${phone}?text=${encodeURIComponent(messageWpp)}`;

  const email = "jvvianachaves@gmail.com";
  const url_email = `mailto:${email}?subject=Contato%20via%20site&body=${encodeURIComponent(messageEmail)}`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const container = scrollRef?.current
    if (el && container) {
      const navHeight = window.innerWidth < 1024 ? 125 : 80
      const elementTop = el.offsetTop
      container.scrollTo({
        top: elementTop - navHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className='w-full flex flex-col bg-[#121317]'>
      <div className='w-full h-full py-8 text-gray-300 flex items-center justify-between px-[30px]'>
        <div className='lg:border-r-2 text-[15px] lg:w-[310px] lg:text-[18px] border-gray-300 border-dashed pr-10 gap-4 h-[75%] flex flex-col items-start justify-center'>
          <a
            href={url_wpp}
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex gap-4 hover:text-blue-300 cursor-pointer duration-300 items-center transition-all"
            title="Enviar mensagem no WhatsApp"
          >
            <FaPhoneVolume className='-rotate-50 text-[20px] lg:text-[30px]' />
            <p>(61) 99329-8498</p>
          </a>

          <a
            href={url_email}
            className="underline hover:text-blue-300 cursor-pointer flex items-center justify-center gap-4 duration-300 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para enviar um e-mail"
          >
            <MdMarkEmailUnread className='text-[20px] lg:text-[30px]' />
            <p>jvvianachaves@gmail.com</p>
          </a>

          <a
            className="underline hover:text-blue-300 cursor-pointer flex items-center justify-center gap-4 duration-300 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para ir ao github"
            href="https://github.com/JaumC">
            <FaGithub className='text-[20px] lg:text-[30px]' />
            <p>JaumC</p>
          </a>

          <a
            className="underline hover:text-blue-300 cursor-pointer flex items-center justify-center gap-4 duration-300 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para ir ao github"
            href="https://www.linkedin.com/in/jvvc/">
            <TbBrandLinkedinFilled className='text-[20px] lg:text-[30px]' />
            <p>João Vitor Viana Chaves</p>
          </a>
        </div>

        <div className='flex flex-col hidden lg:flex items-center justify-between gap-8'>
          <img className='w-[100px]' src="logo_acua_white.png" alt="AcuaLogo" />
          <p className='font-normal text-white flex items-center gap-4 self-center'>
            © 2025
            <span className='font-pixelify-sans'>João Vitor - All rights reserved.</span>
          </p>
        </div>

        <div className='border-l-2 lg:w-[310px] border-gray-300 border-dashed lg:pt-5 pl-5 lg:pl-10 gap-4 h-[75%] flex justify-center flex-col'>
          {pages.map((page) => (
            <div className="text-[25px] font-pixelify-sans font-normal flex gap-5 items-center hover:text-gray-500 duration-300 cursor-pointer transition-all" onClick={() => scrollToSection(page.id)}>
              <p>
                {iconsLinks[page.id]}
              </p>
              <p className='hidden lg:block'>
                {Capitalize(page.id)}
              </p>

            </div>
          ))}
        </div>
      </div>
      <p className='lg:hidden font-normal text-white flex items-center gap-4 self-center py-4'>
        © 2025
        <span className='font-pixelify-sans'>João Vitor - All rights reserved.</span>
      </p>
    </div>
  )
}
