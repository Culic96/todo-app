import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOut,
  faAngleDown,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import {
  HeaderContainer,
  HeaderLogo,
  UserInfo,
  UserMenu,
  UserMenuList,
} from "./style";
import { ThemeContext } from "../../pages/_app";
import { AppTheme } from "../../Theme/AppTheme";
import Link from "next/link";
const Header = () => {
  const { auth, logoutUser } = useAuth();
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const { theme } = useContext(ThemeContext);


  const headerStyle: AppTheme = {
    dark: { backgroundColor: '#333', color: "#f2f2f2" },
    light: { backgroundColor: '#f2f2f2', color: '#333' },
    common: { transition: 'all 1s ease' }
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
  }

  return (
    <>
      <HeaderContainer style={themeStyle}>
        <HeaderLogo style={themeStyle}>
          <h1 style={{ color: "#229ED9" }}>
            <span>TODO </span>app
          </h1>
        </HeaderLogo>
        {auth && (
          <UserInfo style={themeStyle}>
            <UserMenu style={themeStyle} onClick={() => setIsUserMenuOpened(!isUserMenuOpened)}>
              <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '35px' }} />
            </UserMenu>
            <UserMenuList style={themeStyle} isOpened={isUserMenuOpened}>
              <button><FontAwesomeIcon icon={faCog} /><Link href="/settings">Settings</Link></button>
              <button onClick={() => {
                logoutUser();
                setIsUserMenuOpened(!isUserMenuOpened);
              }}>
                <FontAwesomeIcon icon={faSignOut} />
                Logout</button>
            </UserMenuList>
          </UserInfo>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;

