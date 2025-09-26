import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FcEngineering } from "react-icons/fc";
import { ModalBody, ModalContent, useModal } from "../components/ui/animated-modal";
import { BentoGrid, BentoGridStackItem } from "../components/ui/bento-grid";
import { projects } from "../projetos/projects";
import { chunkArray } from "../utils/ChunkArray";
import { NavbarSpacer } from "../components/navbar/NavBar";

export default function ProjectScreen() {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const chunkedConsoleItems = chunkArray(projects, 5)
  const chunkedPhoneItems = chunkArray(projects, 2)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const { setOpen } = useModal()

  const consolePages = chunkedConsoleItems.map((chunk, index) => (
    <BentoGrid key={index} className="max-w-7xl m-auto">
      {chunk.map((item, i) => (
        <BentoGridStackItem key={i} {...item} onPress={
          () => {
            setSelectedProject(item);
            setOpen(true);
          }
        } />
      ))}
    </BentoGrid>
  ))

  consolePages.push(
    <div className="max-w-4xl mx-auto md:auto-rows-[20rem] flex items-center justify-center text-xl font-semibold flex-col gap-20">
      <p>
        Projetos em construção.
      </p>
      <FcEngineering className="animate-[spin_3s_linear_infinite]" size={80} />
    </div>
  )

  const cellphonePages = chunkedPhoneItems.map((chunk, index) => (
    <BentoGrid key={index} className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {chunk.map((item, i) => (
        <BentoGridStackItem key={i} {...item} onPress={
          () => {
            setSelectedProject(item);
            setOpen(true);
          }
        } />
      ))}
    </BentoGrid>
  ))
  cellphonePages.push(
    <div className="max-w-4xl mx-auto md:auto-rows-[20rem] flex items-center justify-center text-xl font-semibold flex-col gap-20">
      <p>
        Projetos em construção.
      </p>
      <FcEngineering className="animate-[spin_3s_linear_infinite]" size={80} />
    </div>
  )

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 500 : -500,
      opacity: 0,

    }),
    center: {
      x: 0,
      opacity: 1,

    },
    exit: (dir: number) => ({
      x: dir > 0 ? -500 : 500,
      opacity: 0,

    }),
  };

  return (
    <div className="h-full w-full w-[85%] relative flex flex-col justify-center items-center">
        <NavbarSpacer/>

      <div className="lg:block hidden absolute h-full top-0 w-full overflow-hidden">
        <div className='bg-white w-[100px] h-full absolute top-0 z-0 left-100' />
        <div className='bg-white w-[100px] h-full absolute top-0 z-0 left-50' />
        <div className="h-full w-[50px] bg-white animate-move-up top-0 z-0 flex absolute right-50" />
        <div className="h-full w-[10px] bg-white animate-move-up-delay top-0 z-0 flex absolute right-20" />
      </div>

      <div className="lg:hidden absolute h-full top-0 w-full overflow-hidden">
        <div className='bg-white w-[50px] h-full absolute top-0 z-0 left-20' />
        <div className="h-full w-[20px] bg-white animate-move-up top-0 z-0 flex absolute right-15" />
        <div className="h-full w-[10px] bg-white animate-move-up-delay top-0 z-0 flex absolute right-10" />
      </div>

      {/*PARTE DO DESKTOP*/}
      <div className="hidden lg:block w-[85%] overflow-hidden h-full relative">

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="h-full mt-30"
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {consolePages[page]}
          </motion.div>
        </AnimatePresence>

        <div className="flex transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10 h-full left-0 flex absolute z-0 top-0 items-center justify-between">
          {page != 0 && (
            <MdArrowBackIosNew
              size={22}
              onClick={() => {
                setDirection(-1);
                setPage((prev) => prev - 1);
              }}
            />
          )}
        </div>

        <div className="flex transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10 h-full right-0 flex absolute z-0 top-0 items-center justify-between">
          {page < (consolePages.length - 1) && (
            <MdArrowForwardIos
              size={22}
              onClick={() => {
                setDirection(1);
                setPage((prev) => prev + 1);
              }}
            />
          )}
        </div>
      </div>

      {/*PARTE DO CELULAR*/}
      <div className="lg:hidden w-[95%] h-full overflow-hidden relative">
        <div className="mt-35 pb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {cellphonePages[page]}
            </motion.div>
          </AnimatePresence>

          <div className="z-11 flex absolute bottom-15 w-full">
            <div className="h-full animate-pulse my-auto absolute left-0 flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
              {page != 0 && (
                <MdArrowBackIosNew
                  size={22}
                  onClick={() => {
                    setDirection(-1);
                    setPage((prev) => prev - 1);
                  }}
                />
              )}
            </div>
            <div className="h-full animate-pulse my-auto absolute right-0 flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
              {page < (cellphonePages.length - 1) && (
                <MdArrowForwardIos
                  size={22}
                  onClick={() => {
                    setDirection(1);
                    setPage((prev) => prev + 1);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ModalBody className="bg-zinc-900 rounded-[25px] max-w-[95%] border-2 border-white lg:w-full w-[5%]">
        <ModalContent>
          <p className="lg:hidden block">
            {selectedProject?.short_description}
          </p>
          {selectedProject?.children}
        </ModalContent>
      </ModalBody>
    </div>
  );
}