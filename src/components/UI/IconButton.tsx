import type { JSX } from "react";
import { Link } from "react-router-dom";

export type IconButtonProps = {
  icon: JSX.Element;
  title: string;
  url: string;
};

export default function IconButton({ icon, title, url }: IconButtonProps) {
  return (
    <Link
      to={url}
      className="group flex flex-row items-center gap-2 px-4 py-2 bg-soft rounded-2xl hover:bg-main hover:text-soft hover:scale-105 transition-all"
    >
      <div className="flex items-center group-hover:-rotate-20 group-hover:scale-105 transition-all">
        {icon}
      </div>
      <span className="uppercase font-bold text-4xl leading-none">{title}</span>
    </Link>
  );
}
