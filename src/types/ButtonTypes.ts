import { Style, sizes } from "@/constants";

export type Size = (typeof sizes)[keyof typeof sizes];
export type StyleType = (typeof Style)[keyof typeof Style];

export type ButtonProps = {
  title: string;
  size?: Size;
  style?: StyleType;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};
