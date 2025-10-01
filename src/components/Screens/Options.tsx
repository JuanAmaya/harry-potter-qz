import type {
  BookArray,
  HouseArray,
  SpellArray,
  CharacterArray,
} from "../../pages/QuizPage";
import {
  isBookArray,
  isCharacterArray,
  isHouseArray,
  isSpellArray,
} from "../TypeGuards";
import MainButton from "../UI/MainButton";

type OptionsProps = {
  dataArray: CharacterArray | SpellArray | BookArray | HouseArray;
  optionsIndex: number[];
  questionSelected: number;
  setSelectedOption: (index: number) => void;
  selectedOption?: number;
  isRightAnswer: string;
  questionAnswered: boolean;
};

export default function Options({
  dataArray,
  optionsIndex,
  questionSelected,
  setSelectedOption,
  isRightAnswer,
  selectedOption,
  questionAnswered,
}: OptionsProps) {
  return (
    <>
      {dataArray.length > 0 && (
        <div className="flex flex-col items-center gap-4 mt-12">
          {isCharacterArray(dataArray) &&
            optionsIndex.map((i) => (
              <MainButton
                key={i}
                label={
                  dataArray[i] && questionSelected === 0
                    ? dataArray[i].nickname
                    : dataArray[i]
                    ? dataArray[i].birthdate
                    : "Unknown"
                }
                onClick={() => setSelectedOption(i)}
                isRightAnswer={isRightAnswer}
                index={i}
                selectedOption={selectedOption}
                questionAnswered={questionAnswered}
              />
            ))}

          {isSpellArray(dataArray) &&
            optionsIndex.map((i) => (
              <MainButton
                key={i}
                label={dataArray[i] ? String(dataArray[i].spell) : "Unknown"}
                onClick={() => setSelectedOption(i)}
                isRightAnswer={isRightAnswer}
                index={i}
                selectedOption={selectedOption}
                questionAnswered={questionAnswered}
              />
            ))}

          {isBookArray(dataArray) &&
            optionsIndex.map((i) => (
              <MainButton
                key={i}
                label={
                  dataArray[i] && questionSelected === 0
                    ? dataArray[i].releaseDate
                    : dataArray[i] && questionSelected === 1
                    ? dataArray[i].pages.toString()
                    : dataArray[i] && questionSelected === 2
                    ? dataArray[i].number.toString()
                    : dataArray[i]
                    ? dataArray[i].title
                    : "Unknown"
                }
                onClick={() => setSelectedOption(i)}
                isRightAnswer={isRightAnswer}
                index={i}
                selectedOption={selectedOption}
                questionAnswered={questionAnswered}
              />
            ))}

          {isHouseArray(dataArray) &&
            optionsIndex.map((i) => (
              <MainButton
                key={i}
                label={
                  dataArray[i] && questionSelected === 0
                    ? dataArray[i].founder
                    : dataArray[i] && questionSelected === 1
                    ? dataArray[i].animal
                    : dataArray[i] && questionSelected === 2
                    ? dataArray[i].colors.join(", ")
                    : "Unknown"
                }
                onClick={() => setSelectedOption(i)}
                isRightAnswer={isRightAnswer}
                index={i}
                selectedOption={selectedOption}
                questionAnswered={questionAnswered}
              />
            ))}
        </div>
      )}
    </>
  );
}
