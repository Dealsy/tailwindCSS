"use client";

import Button from "@/app/components/button";
import Header from "@/app/components/header";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme } = useTheme();
  return (
    <div>
      <Header level="h1" text="DarkMode" />

      <div className="flex justify-center mt-40">
        <Button
          title={theme === "dark" ? "Dark" : "Light"}
          size="superLarge"
          className={clsx(
            "mt-10 bg-blue-500 hover:bg-blue-600",
            "dark:bg-red-500 dark:hover:bg-red-600 dark:rounded-full",
            "active:scale-105 transition ease-in-out duration-300"
          )}
        />
      </div>
    </div>
  );
}
