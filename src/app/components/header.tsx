import clsx from "clsx";
import { header } from "@/constants";
import { HeaderProps } from "@/types/HeaderTypes";

export default function Header({ level, text, className }: HeaderProps) {
  const headerClasses = clsx(
    "text-gray-700 dark:text-white",
    {
      "text-6xl": level === header.h1,
      "text-5xl": level === header.h2,
      "text-3xl": level === header.h3,
      "text-2xl": level === header.h4,
      "text-xl": level === header.h5,
    },
    className
  );

  const HeaderTag = level as keyof JSX.IntrinsicElements;

  return <HeaderTag className={headerClasses}>{text}</HeaderTag>;
}
