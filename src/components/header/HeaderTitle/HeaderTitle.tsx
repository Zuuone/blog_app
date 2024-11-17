import React from "react";

export const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h1> {title} </h1>;
};
