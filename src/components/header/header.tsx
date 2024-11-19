import { HeaderTitle } from "@/components/header/HeaderTitle/HeaderTitle";
import { useTranslation } from "react-i18next";
// import { HeaderProps } from "@/components/header/header.types";
import { container, header } from "@/components/header/header.styles";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";

import SearchButton from "@/components/header/search/search";
import Login from "@/components/header/login/login";
import Langtoggle from "@/components/header/langoptions/langtoggle";
import HeaderNavigationMenu from "@/components/header/headerNavMenu/nav";
import { Link } from "react-router-dom";
import { HeaderNavItem } from "@/components/header/headerNavItem/headerNavItem";

const Header: React.FC = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <header className={`border-b `}>
      <div className={`${container()} ${header()}`}>
        {/* Pass the translated title string to HeaderTitle component */}
        <Link to="/">
          <HeaderTitle title={t("title-translation")} />
        </Link>

        <HeaderNavigationMenu>
          <Link to="/home">
            <HeaderNavItem text={t("nav-item-home")} />
          </Link>
          <Link to="/write">
            <HeaderNavItem text={t("nav-item-write")} />
          </Link>
          <Link to="/about">
            <HeaderNavItem text={t("nav-item-about")} />
          </Link>
        </HeaderNavigationMenu>

        <div className="flex items-center space-x-4">
          <SearchButton />
          <Link to="signIn">
            <Login />
          </Link>
          <Langtoggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
