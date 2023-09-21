import Header from "@/app/components/header";
import clsx from "clsx";

export default function Size() {
  const topTen = (
    <span className="pr-2 font-bold text-gray-100">Netflix Top 10</span>
  );

  return (
    <>
      <Header level="h1" text="Size Matters!" />

      <div
        className={clsx(
          "text mt-44 flex items-center justify-center px-64",
          "lg:prose-2xl prose-h1:text-gray-300 prose-p:text-gray-400",
        )}
      >
        <p className="text-left">
          Combined with minification and network compression, this usually leads
          to CSS files that are less than 10kB, even for large projects. For
          example, Netflix uses Tailwind for {topTen}
          and the entire website delivers only 6.5kB of CSS over the network.
        </p>
      </div>
    </>
  );
}
