import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import {
  HeaderContainer,
  HeaderLogo,
  UserInfo,
  UserMenu,
  UserMenuList,
} from "./style";

const Header = () => {
  const { auth, logoutUser } = useAuth();
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <h1>
            <span>TODO</span>app
          </h1>
        </HeaderLogo>
        {auth && (
          <UserInfo>
            <UserMenu onClick={() => setIsUserMenuOpened(!isUserMenuOpened)} />
            <UserMenuList isOpened={isUserMenuOpened}>
              <p>Username: {auth.email}</p>
              <button onClick={logoutUser}>Logout</button>
            </UserMenuList>
          </UserInfo>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
