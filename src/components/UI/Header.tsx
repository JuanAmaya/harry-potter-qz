type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center mt-10 max-w-sm mx-auto">
      <h2 className="text-2xl">{subtitle}</h2>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}
