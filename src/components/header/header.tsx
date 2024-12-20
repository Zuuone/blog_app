import { HeaderTitle } from "@/components/header/HeaderTitle/HeaderTitle";
import { useTranslation } from "react-i18next";
// import { HeaderProps } from "@/components/header/header.types";
import { container, header } from "@/components/header/header.styles";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";

import SearchButton from "@/components/header/search/search";
import Login from "@/components/header/login/login";
import Langtoggle from "@/components/header/langoptions/langtoggle";
import HeaderNavigationMenu from "@/components/header/headerNavMenu/nav";
import { Link, useNavigate } from "react-router-dom";
import { HeaderNavItem } from "@/components/header/headerNavItem/headerNavItem";
// import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
// import { AuthContext } from "@/context/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";
import Avatar from "@/components/header/avatar/views/avatar";
// import { Avatar } from "@/components/ui/avatar";

const Header: React.FC = () => {
  // const { user } = useAuthaContext();
  // const [user] = useAtom(userAtom);
  const user = useAtomValue(userAtom);
  const navigate = useNavigate(); // Initialize the navigate function

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      navigate("/signIn"); // Wrap the navigate call in a function
    },
  });
  const { t } = useTranslation(); // Access the translation function
  // console.log("from custom hook", AuthContext);
  return (
    <header className={`border-b`}>
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
          <Link to="/blogs">
            <HeaderNavItem text={t("nav-item-blogs")} />
          </Link>
        </HeaderNavigationMenu>

        <div className="flex items-center space-x-4">
          <SearchButton />
          {user ? (
            <div className="flex flex-row gap-5">
              <Link to="/profile">
                <Avatar userId={user?.user?.id || "default-avatar"} />
              </Link>

              <span className="cursor-pointer" onClick={() => handleLogout()}>
                logout
              </span>
            </div>
          ) : (
            <Link to="/signIn">
              <Login loginText={t("nav-item-sign-in")} />
            </Link>
          )}
          <Langtoggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
