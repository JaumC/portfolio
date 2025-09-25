import FooterBar from "../components/footerbar/FooterBar";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdMarkEmailUnread } from "react-icons/md";
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

type ContactScreenProps = {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

export default function ContactScreen({ scrollRef }: ContactScreenProps) {
  const [messageWpp, setMessageWpp] = useState<string>("Olá, gostaria de saber mais sobre seu currículo!")
  const [messageEmail, setMessageEmail] = useState<string>("Olá, gostaria de saber mais sobre seu currículo!")

  const phone = "5561993298498";
  const url_wpp = `https://wa.me/${phone}?text=${encodeURIComponent(messageWpp)}`;

  const email = "jvvianachaves@gmail.com";
  const url_email = `mailto:${email}?subject=Contato%20via%20site&body=${encodeURIComponent(messageEmail)}`;

  const placeholdersWpp = [
    "Olá João, tudo bem?",
    "Gostaria de saber se está disponível para uma oportunidade",
  ]
  const placeholdersEmail = [
    "Gostei dos projetos!",
    "Olá, gostaria de saber mais sobre seu currículo!",
  ];

  const onSubmit = (type: string) => {
    if (type === "wpp") window.open(url_wpp, "_blank", "noopener,noreferrer");
    else window.open(url_email, "_blank", "noopener,noreferrer");
  }

  return (
    <footer className="w-full h-full relative">
      <div className="h-[50px] w-full z-0 absolute top-50 left-0 bg-zinc-300 animate-side" />
      <div className="h-[10px] w-full z-0 absolute top-40 left-0 bg-zinc-300 animate-side-delay" />
      <div className="h-[30px] w-full z-0 absolute top-80 left-0 bg-zinc-300 animate-side-delay" />

      <div className="text-black relative z-1 h-full flex items-center justify-between text-xl font-semibold flex-col gap-2">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex lg:flex-row flex-col w-full mt-30 lg:mt-0 gap-4 lg:gap-10 h-full items-center justify-center text-white">

          <motion.div
            className="bg-[#121317] hover:scale-102 transition-[scale] duration-300 w-[95%] lg:w-[600px] p-4 rounded-[15px] gap-6 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex gap-4">
              <MdMarkEmailUnread size={30} />
              <p>jvvianachaves@gmail.com</p>
            </div>

            <PlaceholdersAndVanishInput
              placeholders={placeholdersEmail}
              onChange={(e) => setMessageEmail(e.target.value)}
              onSubmit={() => onSubmit("email")} />
          </motion.div>

          <motion.div
            className="bg-[#121317] hover:scale-102 transition-[scale] duration-300 w-[95%] lg:w-[600px] p-4 rounded-[15px] gap-6 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex gap-4">
              <FaPhoneVolume className="-rotate-50" size={30} />
              <p>(61) 99329-8498</p>
            </div>

            <PlaceholdersAndVanishInput
              placeholders={placeholdersWpp}
              onChange={(e) => setMessageWpp(e.target.value)}
              onSubmit={() => onSubmit("wpp")} />
          </motion.div>
        </motion.div>

        <FooterBar scrollRef={scrollRef} />
      </div>
    </footer>
  )
}