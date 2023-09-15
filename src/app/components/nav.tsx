"use client";

import React from "react";
import ThemeToggle from "./themeToggle";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="p-5 shadow bg-neutral-100 dark:bg-gray-900 sticky top-0">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex flex-row items-center gap-5">
          <Image alt="logo" src="/images/tw2.png" width={50} height={50} />
          <p className="text-2xl font-medium text-gray-800 dark:text-white">
            Tailwind CSS
          </p>
        </div>
        <div className="flex space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
