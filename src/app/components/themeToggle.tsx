import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/button";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const iconVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 },
  };

  return (
    <div className="relative inline-block">
      <motion.div
        initial={false}
        animate={theme === "dark" ? "dark" : "light"}
        variants={iconVariants}
        className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      >
        <Button
          title={""}
          size="medium"
          className="relative"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <SunIcon className="text-yellow-500 w-14 h-14" />
          ) : (
            <MoonIcon className="w-10 h-10 text-gray-300" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}
