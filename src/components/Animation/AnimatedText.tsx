import { motion } from "framer-motion";

interface AnimatedTextProps {
    children: React.ReactNode;
    delay?: number
    duration?: number
}

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export function AnimatedText({ children, delay = 0, duration = 1 }: AnimatedTextProps) {
  return (
    <motion.p
      className="font-pixelify-sans lg:text-[35px] text-[25px]"
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration }}
    >
      {children}
    </motion.p>
  );
}
