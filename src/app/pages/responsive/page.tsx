import Header from "@/app/components/header";
import clsx from "clsx";

export default function Responsive() {
  return (
    <div className="flex flex-col gap-20">
      <Header level="h1" text="Responsive" />

      <div className="flex items-center justify-between gap-10">
        <div
          className={clsx(
            "w-32 h-32 bg-blue-500",
            "sm:w-44 sm:h-44",
            "md:w-64 md:h-64",
            "lg:w-[50rem] lg:h-96",
            "xl:w-[60rem] xl:h-64"
          )}
        ></div>
        <div
          className={clsx(
            "w-32 h-32 bg-red-500",
            "sm:w-44 sm:h-44 sm:bg-green-500",
            "md:w-64 md:h-64 md:bg-purple-500",
            "lg:w-[50rem] lg:h-96 lg:bg-red-500",
            "xl:w-[60rem] xl:h-64 xl:bg-teal-500"
          )}
        ></div>
      </div>
    </div>
  );
}
