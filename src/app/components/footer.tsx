"use client";

import { usePathname } from "next/navigation";
import PagRouter from "./PageRouter";
import { routes } from "../routes";

export default function Footer() {
  const pathname = usePathname();
  const currentHref = pathname;
  return (
    <div className="h-[30rem] ">
      <PagRouter currentHref={currentHref} routes={routes} />
    </div>
  );
}
