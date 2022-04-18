import styled from "styled-components";

export const HeaderContainer = styled.div({
  height: "8vh",
  width: "100vw",
  display: "flex",
  backgroundColor: "#229ED9",
  color: "#fff",
  margin: 0,
  boxShadow: "0 3px 10px -3px rgba(0, 0, 0, 0.25)",
  borderBottom: "2px solid #22EEDD",
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
  },
  span: {
    fontSize: "2rem",
    fontWeight: 600,
    color: "#fff",
  },
});

export const UserInfo = styled.div({
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
    backgroundColor: "#22333B",
    width: "100px",
    height: "30px",
    fontSize: "1rem",
    border: "2px solid transparent",
    outline: 0,
    cursor: "pointer",
    transition: "all 1s ease",
  },
  "button:hover": {
    color: "#22333B",
    borderRadius: "25px",
    backgroundColor: "#fff",
    border: "2px solid #2229ED9",
    transition: "all 1s ease",
  },
});
