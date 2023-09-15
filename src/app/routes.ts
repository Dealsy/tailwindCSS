type RouteProps = {
  href: `pages/${string}`;
  title: string;
};

export const routes: RouteProps[] = [
  {
    href: "pages/tailwind",
    title: "What is Tailwind? Inline styles VS pure CSS",
  },
  {
    href: "pages/custom-classes",
    title: "Custom classes & themes",
  },
  {
    href: "pages/responsive",
    title: "Responsive design",
  },
  {
    href: "pages/responsive-two",
    title: "Responsive design - part 2",
  },
  {
    href: "pages/dark-mode",
    title: "Dark mode",
  },
  {
    href: "pages/typography",
    title: "Typography",
  },
  {
    href: "pages/size",
    title: "Size",
  },
  {
    href: "pages/the-end",
    title: "That's A Wrap!",
  },
];
