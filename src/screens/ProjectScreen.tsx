import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items_1 = [
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

const items_2 = [
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
];

export default function ProjectScreen() {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const pages = [
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items_1.map((item, i) => (
        <BentoGridItem key={i} {...item} />
      ))}
    </BentoGrid>,
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items_2.map((item, i) => (
        <BentoGridItem key={i} {...item} />
      ))}
    </BentoGrid>,
    <div className="max-w-4xl mx-auto md:auto-rows-[20rem] flex items-center justify-center text-xl font-semibold">
      Projetos em construção.
    </div>
  ];

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
    <div className="h-[85%] w-[85%] overflow-hidden relative">
      <div className="flex relative h-full mt-8">
        {/* Botão Esquerda */}
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
            {pages[page]}
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-4 h-full my-auto flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:text-zinc-400 z-10">
          {page <= 1 && (
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
  );
}