import { HeaderContainer } from "./style";

const Header = ({ children }: { children: any }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderContainer>{children}</HeaderContainer>
    </div>
  );
};

export default Header;
