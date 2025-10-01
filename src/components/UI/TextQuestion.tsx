type TextQuestionProps = {
  children?: string;
};

export default function TextQuestion({ children }: TextQuestionProps) {
  return (
    <div className="flex justify-center">
      <p className="text-4xl font-bold text-center max-w-sm w-full px-8 mt-8 py-4 border-4 border-main rounded-lg">
        {children}
      </p>
    </div>
  );
}
