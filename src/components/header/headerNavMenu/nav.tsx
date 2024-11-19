// import React from 'react'

import { PropsWithChildren } from "react";

// import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const HeaderNavigationMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return <nav className="hidden md:flex space-x-4">{children}</nav>;
};

export default HeaderNavigationMenu;

{
  /* <a className="text-muted-foreground hover:text-foreground" href="/">
Home
</a>
<a className="text-muted-foreground hover:text-foreground" href="/write">
Write
</a>
<a className="text-muted-foreground hover:text-foreground" href="/about">
About
</a> */
}
