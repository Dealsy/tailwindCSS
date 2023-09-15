import { header } from "@/constants";

export type Header = (typeof header)[keyof typeof header];

export type HeaderProps = {
  level: Header;
  text: string;
  className?: string;
};
