import PlayAgain from "../../../public/icons/PlayAgain";
import Header from "../UI/Header";
import { motion } from "framer-motion";
import IconButton from "../UI/IconButton";
import Menu from "../../../public/icons/Menu";
import { containerVariants, itemVariants } from "../UI/ButtonsOrder";
import { questionVariants } from "../../pages/QuizPage";

export default function ErrorScreen() {
  return (
    <div>
      <motion.div
        variants={questionVariants}
        initial="hidden"
        animate="visible"
      >
        <Header
          title="ERROR"
          subtitle="This page is currently under the influence of a Confundus Charm"
        />
      </motion.div>
      <motion.ul
        className="flex flex-col mx-auto gap-4 mt-28 max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={itemVariants}>
          <button
            className="group flex flex-row items-center gap-2 px-4 py-2 bg-soft rounded-2xl hover:bg-main hover:text-soft hover:scale-105 transition-all cursor-pointer w-full"
            onClick={window.location.reload.bind(window.location)}
          >
            <div className="flex items-center group-hover:-rotate-20 group-hover:scale-105 transition-all">
              <PlayAgain />
            </div>
            <span className="uppercase font-bold text-4xl leading-none">
              Reload
            </span>
          </button>
        </motion.li>
        <motion.li variants={itemVariants}>
          <IconButton icon={<Menu />} title="Menu" url="/" />
        </motion.li>
      </motion.ul>
    </div>
  );
}
