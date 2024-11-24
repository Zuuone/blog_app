import React from "react";

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="text-muted-foreground hover:cursor-pointer hover:text-foreground">
      {text}
    </p>
  );
};
