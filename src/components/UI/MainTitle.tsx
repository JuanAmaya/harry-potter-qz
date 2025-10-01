import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.3 },
  },
};

export default function MainTitle() {
  return (
    <motion.h1
      className="text-5xl font-bold text-center mt-12 mx-2"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      Harry Potter Quiz
    </motion.h1>
  );
}
