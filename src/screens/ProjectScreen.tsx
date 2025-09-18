import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FcEngineering } from "react-icons/fc";
import { ModalBody, ModalContent, useModal } from "../components/ui/animated-modal";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { projects } from "../projetos/projects";

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default function ProjectScreen() {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const chunkedConsoleItems = chunkArray(projects, 4)
  const chunkedPhoneItems = chunkArray(projects, 2)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const { setOpen } = useModal()

  const consolePages = chunkedConsoleItems.map((chunk, index) => (
    <BentoGrid key={index} className="max-w-4xl mx-auto">
      {chunk.map((item, i) => (
        <BentoGridItem key={i} {...item} onPress={
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
        <BentoGridItem key={i} {...item} onPress={
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
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <>
      {/*PARTE DO DESKTOP*/}
      <div className="hidden lg:block w-[85%] overflow-hidden min-h-[600px] relative">
        <div className="flex relative min-h-[600px]">
          <div className="absolute left-4 h-full my-auto flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
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

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              {consolePages[page]}
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-4 min-h-[600px] my-auto flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
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
      </div>

      {/*PARTE DO CELULAR*/}
      <div className="lg:hidden w-[85%] overflow-hidden relative min-h-[600px]">
        <div className="mt-20 pb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              {cellphonePages[page]}
            </motion.div>
          </AnimatePresence>

          <div className="z-11 flex absolute bottom-3 w-full">
            <div className="h-full my-auto absolute left-0 flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
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
            <div className="h-full my-auto absolute right-0 flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
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
          {selectedProject?.children}
        </ModalContent>
      </ModalBody>
    </>
  );
}