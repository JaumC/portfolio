import FooterBar from "../components/footerbar/FooterBar";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdMarkEmailUnread } from "react-icons/md";

type ContactScreenProps = {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

export default function ContactScreen({ scrollRef }: ContactScreenProps) {
  const phone = "5561993298498";
  const message_wpp = "Olá, gostaria de saber mais sobre seu currículo!";
  const url_wpp = `https://wa.me/${phone}?text=${encodeURIComponent(message_wpp)}`;

  const email = "jvvianachaves@gmail.com";
  const message_email = "Olá, gostaria de saber mais sobre seu currículo!";
  const url_email = `mailto:${email}?subject=Contato%20via%20site&body=${encodeURIComponent(message_email)}`;

  return (
    <footer className="w-full h-full relative">
      <div className="h-[50px] w-full z-0 absolute top-50 left-0 bg-zinc-300 animate-side" />
      <div className="h-[10px] w-full z-0 absolute top-40 left-0 bg-zinc-300 animate-side-delay" />
      <div className="h-[30px] w-full z-0 absolute top-80 left-0 bg-zinc-300 animate-side-delay" />

      <div className="text-black relative z-1 h-full flex items-center justify-between text-xl font-semibold flex-col gap-2">
        <div className="flex flex-col items-center justify-center m-auto">

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col w-full lg:w-[30%] gap-3 lg:gap-10 lg:p-0 p-3 h-full items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <a
                href={url_email}
                className="underline hover:text-blue-300 cursor-pointer flex items-center justify-center gap-2 duration-300 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                title="Clique para enviar um e-mail"
              >
                <MdMarkEmailUnread size={30} />
                <p>
                  jvvianachaves@gmail.com
                </p>
              </a>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <a
                href="https://instagram.com/acua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline hover:text-blue-300 cursor-pointer duration-300 transition-all"
                title="Ir para o Instagram"
              >
                <AiFillInstagram size={20} />
                @acua
              </a>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <a
                href={url_wpp}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 cursor-pointer duration-300 flex items-center gap-2 transition-all"
                title="Enviar mensagem no WhatsApp"
              >
                <FaPhoneVolume className="-rotate-50" size={30} />
                <p>
                  (61) 99329-8498
                </p>
              </a>
            </motion.div>
          </motion.div>

        </div>
        <FooterBar scrollRef={scrollRef} />
      </div>
    </footer>
  )
}