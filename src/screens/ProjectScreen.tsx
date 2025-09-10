import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FcEngineering } from "react-icons/fc";
import { Modal, ModalBody, ModalContent, ModalProvider, useModal } from "../components/ui/animated-modal";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { Skeleton } from "../components/skeleton/Skeleton";

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

const projetos = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default function ProjectScreen() {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const chunkedConsoleItems = chunkArray(projetos, 4)
  const chunkedPhoneItems = chunkArray(projetos, 2)
  const [selectedProject, setSelectedProject] = useState<typeof projetos[0] | null>(null);

  const { setOpen } = useModal()

  const consolePages = chunkedConsoleItems.map((chunk, index) => (
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
      <div className="hidden lg:block h-[90%] w-[85%] overflow-hidden relative">
        <div className="flex relative h-full mt-15">
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

          <div className="absolute right-4 h-full my-auto flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
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
      <div className="lg:hidden h-[90%] w-[85%] overflow-hidden relative">
        <div className="mt-30">
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

          <div className="bg-red-300 flex absolute bottom-8 w-full">
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
      <ModalBody className="bg-black border-1 border-white lg:w-full w-[5%]">
        <ModalContent>
          <h2 className="text-xl font-bold">{selectedProject?.title}</h2>
          <p>{selectedProject?.description}</p>
        </ModalContent>
      </ModalBody>
    </>
  );
}