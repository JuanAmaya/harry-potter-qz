import LoadingSpinner from "../../../public/icons/LoadingSpinner";
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <LoadingSpinner />
    </motion.div>
  );
}
