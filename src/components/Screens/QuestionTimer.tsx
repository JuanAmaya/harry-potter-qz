type QuestionTimerProps = {
  time: number;
};

export default function QuestionTimer({ time }: QuestionTimerProps) {
  return (
    <div className="text-center mt-4 max-w-sm grid grid-cols-10 gap-2 mx-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`${
            index >= time ? "bg-soft" : "bg-accent"
          } h-4 rounded-md`}
        ></div>
      ))}
    </div>
  );
}
