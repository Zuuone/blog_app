import { cva } from "class-variance-authority";

export const header = cva(
  [
    // "xl: w-xl",

    "h-[68px]",
    // "w-screen",
    "flex",
    "justify-between",
    "items-center",
    "px-4",
    "py-4",
    "mx-auto",
  ],
  {
    variants: {
      type: {
        // light: ["bg-slate-400"],
        // dark: ["bg-black"],
      },
    },
  },
);

export const container = cva(["w-full", "max-w-[1536px]"]);
