import React from "react";

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h2> {title} </h2>;
};
