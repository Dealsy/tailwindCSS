"use client";

import clsx from "clsx";
import { Inter } from "next/font/google";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={clsx(
          inter.className,
          "flex-grow md:px-20 sm:px-10 px-10 mt-24 bg-slate-300",
          "dark:bg-gray-900 rounded-t-2xl border-t border-t-blue-500 pt-5"
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
