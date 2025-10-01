type MainButtonProps = {
  label: string;
  onClick?: () => void;
  isRightAnswer: string;
  selectedOption?: number;
  index: number;
  questionAnswered: boolean;
};

export default function MainButton({
  label,
  onClick,
  isRightAnswer,
  index,
  selectedOption,
  questionAnswered,
}: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold hover:text-soft rounded-xl p-4 w-full max-w-sm text-center cursor-pointer hover:scale-105 transition-all ${
        index === selectedOption && isRightAnswer === "correct"
          ? "bg-correct-answer text-soft"
          : index === selectedOption && isRightAnswer === "wrong"
          ? "bg-wrong-answer text-soft"
          : "bg-soft hover:bg-main "
      } ${questionAnswered ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      {label}
    </button>
  );
}
