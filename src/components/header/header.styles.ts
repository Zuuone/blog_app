import { cva } from "class-variance-authority";
// import { FileX } from "lucide-react";

export const header = cva(
  [
    "Header",
    "h-[69px]",
    "w-screen",
    "flex justify-between items-center",
    "top-0	",
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
