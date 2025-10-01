import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import QuizResults from "../components/Screens/QuizResults";
import Options from "../components/Screens/Options";
import QuestionTimer from "../components/Screens/QuestionTimer";
import Header from "../components/UI/Header";
import QuestionPicked from "../components/Screens/QuestionPicked";
import { motion } from "framer-motion";
import Countdown from "../components/Screens/Countdown";
import LoadingAnimation from "../components/UI/LoadingAnimation";
import ErrorScreen from "../components/Screens/ErrorScreen";

type QuizProps = {
  QUESTIONS: { question: string; type: string }[];
  DATA_URL: string;
  type: string;
};

type Character = {
  nickname: string;
  image: string;
  hogwartsHouse: string;
  birthdate: string;
  index: number;
};

export type CharacterArray = Character[];

type Spell = {
  spell: string;
  use: string;
  index: number;
};

export type SpellArray = Spell[];

type Book = {
  number: number;
  title: string;
  releaseDate: string;
  pages: number;
  cover: string;
  index: number;
};

export type BookArray = Book[];

type House = {
  house: string;
  founder: string;
  colors: string[];
  animal: string;
  index: number;
};

export type HouseArray = House[];

const QUESTIONS_LENGTH = 10;

export const questionVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function CharactersQuiz({
  QUESTIONS,
  DATA_URL,
  type,
}: QuizProps) {
  const [dataArray, setDataArray] = useState<
    CharacterArray | SpellArray | BookArray | HouseArray
  >([]);
  const [optionsIndex, setOptionsIndex] = useState<number[]>([]);
  const [answer, setAnswer] = useState(0);
  const [rightAnswersCounter, setRightAnswersCounter] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number>();
  const [questionCounter, setQuestionCounter] = useState(1);
  const [questionSelected, setQuestionSelected] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(10);
  const [isRightAnswer, setIsRightAnswer] = useState<string>("");
  const [changeQuestion, setChangeQuestion] = useState(true);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [playAgain, setPlayAgain] = useState(false);

  const { loading, error, value }: any = useFetch({
    url: DATA_URL,
    dependencies: [],
  });

  useEffect(() => {
    if (value) {
      if (type === "characters") setDataArray(value as CharacterArray);
      if (type === "spells") setDataArray(value as SpellArray);
      if (type === "books") setDataArray(value as BookArray);
      if (type === "houses") setDataArray(value as HouseArray);
    }
  }, [value]);

  useEffect(() => {
    const max = Math.min(dataArray.length);
    let randArray = [];
    for (let i = 0; i < max; i++) {
      randArray.push(i);
    }

    for (let i = randArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randArray[i], randArray[j]] = [randArray[j], randArray[i]];
    }

    const answerIndex = randArray[0];
    setAnswer(answerIndex);

    const options = randArray.slice(0, 4);
    if (!options.includes(answerIndex)) {
      options[0] = answerIndex;
    }
    setOptionsIndex(options.sort(() => Math.random() - 0.5));
    console.log();
  }, [dataArray, changeQuestion]);

  useEffect(() => {
    if (selectedOption === undefined) return;

    if (!questionAnswered) {
      if (selectedOption === answer) {
        setIsRightAnswer("correct");
        setRightAnswersCounter(rightAnswersCounter + 1);
      } else {
        setIsRightAnswer("wrong");
      }
    }

    setQuestionAnswered(true);

    const timer = setTimeout(() => {
      setChangeQuestion(!changeQuestion);
      setQuestionAnswered(false);
      setIsRightAnswer("");
      setQuestionSelected(Math.floor(Math.random() * QUESTIONS.length));
      setQuestionCounter(questionCounter + 1);
      setSelectedOption(undefined);
      setQuestionTimer(10);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedOption]);

  useEffect(() => {
    if (questionCounter > QUESTIONS_LENGTH) return;
    if (loading) return;
    if (countdown > 0) return;

    if (questionTimer <= 0) {
      setSelectedOption(-1);
      setQuestionTimer(10);
      return;
    }

    const timer = setInterval(() => {
      setQuestionTimer((prev) => prev - 1);
    }, 1000);

    if (selectedOption !== undefined) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [questionTimer, selectedOption, playAgain, countdown, loading]);

  useEffect(() => {
    if (loading) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handlePlayAgain = () => {
    setOptionsIndex([]);
    setAnswer(0);
    setSelectedOption(undefined);
    setQuestionCounter(1);
    setRightAnswersCounter(0);
    setQuestionTimer(13);
    setChangeQuestion(!changeQuestion);
    setCountdown(3);
    setPlayAgain(!playAgain);
  };

  return (
    <>
      {loading && <LoadingAnimation />}

      {!error && !loading && countdown > 0 && (
        <Countdown countdown={countdown} />
      )}

      {error && <ErrorScreen />}

      {!error &&
        questionCounter <= QUESTIONS_LENGTH &&
        !loading &&
        countdown <= 0 && (
          <motion.div
            key={questionCounter}
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Header
              title={QUESTIONS[questionSelected].question}
              subtitle={`Question ${questionCounter}/${QUESTIONS_LENGTH}`}
            />

            <QuestionPicked
              dataArray={dataArray}
              optionsIndex={optionsIndex}
              answer={answer}
            />

            <QuestionTimer time={questionTimer} />

            <Options
              dataArray={dataArray}
              optionsIndex={optionsIndex}
              questionSelected={questionSelected}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              isRightAnswer={isRightAnswer}
              questionAnswered={questionAnswered}
            />
          </motion.div>
        )}

      {questionCounter > QUESTIONS_LENGTH && !loading && (
        <QuizResults
          rightAnswersCounter={rightAnswersCounter}
          handlePlayAgain={handlePlayAgain}
          questionLength={QUESTIONS_LENGTH}
        />
      )}
    </>
  );
}
