"use cliuent";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { tailwindClsx } from "../helprs";
import Button from "./button";
import { motion, AnimatePresence } from "framer-motion";

type RouteProps = {
  href: string;
  title: string;
};

interface PagRouterProps {
  currentHref: string;
  routes: RouteProps[];
}

const PagRouter: FC<PagRouterProps> = ({ currentHref, routes }) => {
  const router = useRouter();
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const variantsNext = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100, transition },
  };

  const variantsPrev = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100, transition },
  };

  useEffect(() => {
    const normalizedCurrentHref = currentHref.startsWith("/")
      ? currentHref.slice(1)
      : currentHref;

    const currentIndex = routes.findIndex(
      (route) => route.href === normalizedCurrentHref
    );

    if (currentIndex !== -1) {
      setNextPage(
        currentIndex < routes.length - 1 ? routes[currentIndex + 1].href : null
      );
      setPrevPage(currentIndex > 0 ? routes[currentIndex - 1].href : null);
    }
  }, [currentHref, routes]);

  const handleNext = () => {
    if (nextPage) {
      router.push(`/${nextPage}`);
    }
  };

  const handlePrev = () => {
    if (prevPage) {
      router.push(`/${prevPage}`);
    }
  };
  return (
    <div className="flex items-stretch h-full border-t border-blue-600 rounded hover:border-blue-400">
      <AnimatePresence>
        {prevPage && (
          <motion.div
            key="prev"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsPrev}
            className="flex-1 w-full h-full"
          >
            <Button
              title={!nextPage ? "The End!" : "Previous"}
              onClick={handlePrev}
              disabled={!prevPage}
              className={tailwindClsx(
                "flex-1 h-full w-full text-5xl text-center text-white font-bold p-10",
                {
                  "text-blue-600 hover:text-blue-400 hover:bg-gray-900 hover:border-blue-400":
                    !!prevPage,
                  "hover:bg-black": !prevPage,
                }
              )}
            />
          </motion.div>
        )}

        {nextPage && (
          <motion.div
            key="next"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsNext}
            className="flex-1 w-full h-full"
          >
            <Button
              title={"Next"}
              className={clsx(
                "flex-1 h-full text-5xl w-full text-center text-white font-bold p-10",
                {
                  "text-blue-600 hover:text-blue-400 hover:bg-gray-900":
                    nextPage,
                  "hover:bg-black": !nextPage,
                }
              )}
              onClick={handleNext}
              disabled={!nextPage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PagRouter;
