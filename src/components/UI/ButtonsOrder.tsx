import type { IconButtonProps } from "./IconButton";
import IconButton from "./IconButton";
import { motion } from "framer-motion";

type ButtonsOrderProps = {
  buttonsList: IconButtonProps[];
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ButtonsOrder({ buttonsList }: ButtonsOrderProps) {
  return (
    <motion.ul
      className="flex flex-col mx-auto gap-4 mt-28 max-w-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {buttonsList.map((button, index) => (
        <motion.li key={index} variants={itemVariants}>
          <IconButton
            key={index}
            icon={button.icon}
            title={button.title}
            url={button.url}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
