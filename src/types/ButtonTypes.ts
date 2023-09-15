import { colour, sizes } from "@/constants";

export type Size = (typeof sizes)[keyof typeof sizes];
export type Colour = (typeof colour)[keyof typeof colour];

export type ButtonProps = {
  title: string;
  size?: Size;
  color?: Colour;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};
