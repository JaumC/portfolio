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

export function AnimatedDiv({ children, delay = 0, duration = 1 }: AnimatedTextProps) {
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
