import Header from "@/app/components/header";
import Link from "next/link";

const Links = [
  {
    title: "Headless UI",
    href: "https://headlessui.com/",
  },
  {
    title: "Shadcn",
    href: "https://ui.shadcn.com/examples/dashboard",
  },
  {
    title: "Tailwind Components",
    href: "https://tailwindui.com/components",
  },
];

export default function TheEnd() {
  return (
    <>
      <Header level="h1" text="That's A Wrap!" />

      <div className="mt-40 flex flex-col items-center justify-center gap-5">
        {Links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-2xl text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
}
