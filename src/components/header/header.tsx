import { HeaderTitle } from "@/components/header/HeaderTitle/HeaderTitle";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "@/components/header/header.types";
import { header } from "@/components/header/header.styles";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className={header()}>
      {/* Pass the translated title string to HeaderTitle component */}
      <div>
        <HeaderTitle title={t("title-translation")} />
      </div>

      <div>
        {" "}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#home">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#write">Write</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
