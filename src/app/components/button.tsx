import clsx from "clsx";
import { sizes, colour } from "@/constants";
import { ButtonProps } from "@/types/ButtonTypes";

export default function Button({
  title,
  size,
  color,
  className,
  onClick,
  disabled,
  children,
}: ButtonProps) {
  const buttonClasses = clsx(
    "leading-none rounded-lg",
    {
      [`px-4 py-1 text-xs`]: size === sizes.small,
      [`px-6 py-2 text-sm`]: size === sizes.medium,
      [`px-8 py-3 text-lg`]: size === sizes.large,
      [`px-20 py-10 text-7xl`]: size === sizes.superLarge,
      [`bg-blue-700 text-blue-100 hover:bg-blue-500`]: color === colour.blue,
      [`bg-red-700 text-red-100 hover:bg-red-500`]: color === colour.red,
      [`bg-green-700 text-green-100 hover:bg-green-500`]:
        color === colour.green,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children ? children : title}
    </button>
  );
}
