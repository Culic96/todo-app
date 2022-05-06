import styled from "styled-components";

export const HeaderContainer = styled.div({
  height: "8vh",
  width: "100vw",
  display: "flex",
  // backgroundColor: "#229ED9",
  backgroundColor: "#FFF",
  color: "#fff",
  margin: 0,
  zIndex: 2,
  position: "relative",
  userSelect: "none",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

export const HeaderLogo = styled.div({
  display: "flex",
  width: "30vw",
  height: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  h1: {
    fontSize: "2rem",
    color: "#22333B",
    fontWeight: 300,
    "@media (max-width: 950px)": {
      fontSize: '1.5rem'
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem'
    }
  },
  span: {
    fontSize: "2rem",
    fontWeight: 600,
    backgroundColor: "#229ED9",
    color: "#fff",
    padding: "0.1rem 0.4rem",
    borderRadius: "14px",
    marginRight: "0.5rem",
    "@media (max-width: 950px)": {
      fontSize: '1.5rem'
    },
    "@media (max-width: 600px)": {
      fontSize: '1rem'
    }
  },
});

export const UserInfo = styled.div({
  position: "relative",
  width: "70vw",
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "2rem",
  alignItems: "center",
  h4: {
    fontSize: "1.2rem",
    marginRight: "2rem",
    fontWeight: 600,
  },
  button: {
    color: "#fff",
    fontWeight: 600,
    backgroundColor: "#229ED9",
    width: "100px",
    height: "30px",
    fontSize: "1rem",
    border: "2px solid transparent",
    outline: 0,
    cursor: "pointer",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    transition: "all 1s ease",
  },
  "button:hover": {
    color: "#22333B",
    backgroundColor: "#fff",
    border: "2px solid #2229ED9",
    transition: "all 1s ease",
  },
});

export const UserMenu = styled.div({
  position: "relative",
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  alignItems: 'center',
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 0.6s ease",
  ":hover": {
    backgroundColor: '#000',
    transition: "all 0.6s ease",
    backgroundSize: '400%'
  }
});

export const UserMenuList = styled.div<{ isOpened: boolean }>(
  {
    position: "absolute",
    top: "100%",
    right: -5,
    width: "200px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.2rem 0",
    color: "black",
    cursor: "auto",
    opacity: 1,
    zIndex: 999,
    backgroundColor: "#FFF",
    transition: "all 0.6s ease",
    userSelect: "none",
    gap: '1rem',
    p: {
      marginLeft: "12px",
      fontSize: "0.9rem",
    },
    input: {
      fontSize: '0.9rem',
      userSelect: 'none',

      outline: 0,
    },
  },

  ({ isOpened }) => ({
    ...(!isOpened && {
      display: "none",
    }),
  })
);


