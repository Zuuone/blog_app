import React from "react";

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <a className="text-2xl font-bold text-black text-inherit dark:text-white">
      {title}
    </a>
  );
};
