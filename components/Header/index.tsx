import { useAuth } from "../../Hooks/useAuth";
import { HeaderContainer, HeaderLogo, UserInfo } from "./style";

const Header = () => {
  const { auth, logoutUser } = useAuth();

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <h1>
            TODO <span>App</span>
          </h1>
        </HeaderLogo>
        {auth && (
          <UserInfo>
            <h4>Welcome back {auth?.email} </h4>
            <button onClick={logoutUser}>Logout</button>
          </UserInfo>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
