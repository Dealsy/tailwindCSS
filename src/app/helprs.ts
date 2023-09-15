type ClassValue = string | { [key: string]: boolean } | undefined | null;

export const tailwindClsx = (...args: ClassValue[]): string => {
  let classes = "";

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classes += `${arg} `;
    } else if (arg !== null && typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes += `${key} `;
        }
      });
    }
  });

  return classes.trim();
};
