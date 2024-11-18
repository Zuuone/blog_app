import { HeaderTitle } from "@/components/header/HeaderTitle/HeaderTitle";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "@/components/header/header.types";
import { container, header } from "@/components/header/header.styles";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import SearchButton from "@/components/header/search/search";
import Login from "@/components/header/login/login";
import Langtoggle from "@/components/header/langoptions/langtoggle";

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <header className="border-b">
      <div className={`${container()} ${header()}`}>
        {/* Pass the translated title string to HeaderTitle component */}
        <a className="text-2xl font-bold">
          <HeaderTitle title={t("title-translation")} />
        </a>

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
        <div className="flex items-center space-x-4">
          <SearchButton />
          <Login />
          <Langtoggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
