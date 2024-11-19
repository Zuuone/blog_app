import React from "react";

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <a className="text-inherit text-2xl font-bold dark:text-white text-black">
      {title}
    </a>
  );
};
