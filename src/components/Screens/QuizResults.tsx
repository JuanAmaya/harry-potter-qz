import Header from "../UI/Header";
import IconButton from "../UI/IconButton";
import Menu from "../../../public/icons/Menu";
import PlayAgain from "../../../public/icons/PlayAgain";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../UI/ButtonsOrder";
import { questionVariants } from "../../pages/QuizPage";

export type QuizResultsProps = {
  rightAnswersCounter: number;
  questionLength: number;
  handlePlayAgain: () => void;
};

export default function QuizResults({
  rightAnswersCounter,
  questionLength,
  handlePlayAgain,
}: QuizResultsProps) {
  return (
    <div>
      <motion.div
        variants={questionVariants}
        initial="hidden"
        animate="visible"
      >
        <Header title="Results" subtitle="Score" />
        <div className="flex justify-center mt-8">
          <span className="text-5xl font-bold max-w-sm w-full border-4 border-main rounded-xl py-4 text-center">
            {rightAnswersCounter}/{questionLength}
          </span>
        </div>
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
            onClick={handlePlayAgain}
          >
            <div className="flex items-center group-hover:-rotate-20 group-hover:scale-105 transition-all">
              <PlayAgain />
            </div>
            <span className="uppercase font-bold text-4xl leading-none">
              Play Again
            </span>
          </button>
        </motion.li>
        <motion.li variants={itemVariants}>
          <IconButton icon={<Menu />} title="Menu" url="/harry-potter-qz/" />
        </motion.li>
      </motion.ul>
    </div>
  );
}
