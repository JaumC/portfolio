import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { BentoGrid, BentoGridAboutItem } from "../components/ui/bento-grid";
import { cn } from "../components/lib/utils";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { chunkArray } from "../utils/ChunkArray";
import { useState } from "react";

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 h-full min-h-[2rem] bg-dot-black/[0.2] flex-col space-y-1 lg:space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 p-2  items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};


const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  const cell = new Array(3).fill(0);
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="hidden lg:block flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className="flex flex-row rounded-full border border-neutral-100 p-2 items-center space-x-2 bg-neutral-100 w-full h-4"
          ></motion.div>
        ))}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="lg:hidden flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
      >
        {cell.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className="flex flex-row rounded-full border border-neutral-100 p-2 items-center space-x-2 bg-neutral-100 w-full h-4"
          ></motion.div>
        ))}
      </motion.div>
    </>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full lg:min-h-[6rem] min-h-[1rem] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="me_square.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Typescript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="acua_logo.png"
          alt="avatar"
          height="130"
          width="110"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="me_square.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love React Native, Expo, and Kotlin Compose.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="me_square.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use Next.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};


const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-[12px] lg:text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-[12px] lg:text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-[12px] lg:text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-[12px] lg:text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-[12px] lg:text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-[12px] lg:text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    cell: true,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];

export default function AboutScreen() {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const chunkedPhoneItems = chunkArray(items.filter(item => item.cell || !item.cell), 2)

  const cellphonePages = chunkedPhoneItems.map((chunk, index) => (
    <BentoGrid key={index} className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {chunk.map((item, i) => (
        <BentoGridAboutItem key={i} {...item} />
      ))}
    </BentoGrid>
  ))

  const pcItems = items.filter(item => !item.cell === true)

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
    <div className="w-[85%] h-screen relative flex items-center justify-center mx-auto">
      <div className="hidden lg:flex text-black h-full flex items-center justify-center m-auto text-xl font-semibold flex-col gap-2">

        <div className="absolute h-full w-full overflow-hidden">
          <div className="h-full w-[500px] bg-[#2193CC] z-0 flex absolute left-50" />
          <div className="h-full animate-move-up-delay w-[50px] bg-[#2193CC] z-0 flex absolute right-5" />
          <div className="h-full animate-move-up w-[10px] bg-[#2193CC] z-0 flex absolute right-35" />
        </div>

        <BentoGrid className="max-w-9xl mx-auto z-10 md:auto-rows-[20rem]">
          {pcItems.map((item, i) => (
            <BentoGridAboutItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg] ", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>

      <div className="lg:hidden text-black h-full flex items-center justify-center m-auto text-xl font-semibold flex-col gap-2">

        <div className="absolute h-full w-full overflow-hidden">
          <div className="h-full w-[80px] bg-[#2193CC] z-0 flex absolute left-5" />
          <div className="h-full animate-move-up w-[10px] bg-[#2193CC] z-0 flex absolute right-15" />
          <div className="h-full animate-move-up-delay w-[10px] bg-[#2193CC] z-0 flex absolute right-20" />
        </div>

        <div className="lg:hidden w-full z-10 min-w-[95%] max-w-[95%] h-full overflow-hidden relative">
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

            <div className="z-11 flex absolute bottom-10 w-full">
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
                {page < cellphonePages.length - 1 && (
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
      </div>
    </div>
  )
}