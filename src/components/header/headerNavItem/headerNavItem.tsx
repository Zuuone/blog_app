import React from "react";

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="text-muted-foreground hover:text-foreground hover:cursor-pointer">
      {text}
    </p>
  );
};
