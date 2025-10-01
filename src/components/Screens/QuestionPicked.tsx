import type {
  BookArray,
  CharacterArray,
  HouseArray,
  SpellArray,
} from "../../pages/QuizPage";
import {
  isBookArray,
  isCharacterArray,
  isHouseArray,
  isSpellArray,
} from "../TypeGuards";
import TextQuestion from "../UI/TextQuestion";

type QuestionPickedProps = {
  dataArray: CharacterArray | SpellArray | BookArray | HouseArray;
  optionsIndex: number[];
  answer: number;
};

export default function QuestionPicked({
  dataArray,
  optionsIndex,
  answer,
}: QuestionPickedProps) {
  return (
    <>
      {isCharacterArray(dataArray) && (
        <div className="flex justify-center mt-2">
          {optionsIndex.length > 0 &&
            dataArray.length > 0 &&
            dataArray[optionsIndex[0]] &&
            dataArray[optionsIndex[0]].image && (
              <img
                className="w-56 rounded-lg border-5 border-main"
                src={dataArray[answer].image}
                alt={dataArray[answer].nickname}
              />
            )}
        </div>
      )}

      {isSpellArray(dataArray) &&
        optionsIndex.length > 0 &&
        dataArray.length > 0 &&
        dataArray[optionsIndex[0]] && (
          <TextQuestion>{dataArray[answer].use}</TextQuestion>
        )}

      {isBookArray(dataArray) &&
        optionsIndex.length > 0 &&
        dataArray.length > 0 &&
        dataArray[optionsIndex[0]] && (
          <TextQuestion>{dataArray[answer].title}</TextQuestion>
        )}

      {isHouseArray(dataArray) &&
        optionsIndex.length > 0 &&
        dataArray.length > 0 &&
        dataArray[optionsIndex[0]] && (
          <TextQuestion>{dataArray[answer].house}</TextQuestion>
        )}
    </>
  );
}
