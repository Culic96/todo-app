import styled from "styled-components";

export const Header = styled.div({
  width: "100vw",
  height: "10rem",
  borderBottom: "2px solid #000",
  backgroundColor: "#757761",
  color: "#51BBFE",
  overflow: "hidden",
  display: "flex",
});

export const LogoHolder = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20vw",
  height: "100%",
  h1: {
    fontSize: "2rem",
    letterSpacing: "2px",
  },
  span: {
    color: "#8FF7A7",
  },
});

export const FormHolder = styled.div({
  width: "80vw",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "#51BBFE",
  flexDirection: "column",
});

export const Form = styled.form({
  fontSize: "1rem",
  color: "#51BBFE",
  label: {
    fontSize: "1.1rem",
    marginRight: "0.2rem",
  },
  input: {
    outline: "none",
    border: "none",
  },
});

export const ButtonBox = styled.div({
  width: "65vw",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "#51BBFE",
  flexDirection: "row",
  button: {
    height: "40px",
    width: "120px",
    fontSize: "0.9rem",
    backgroundColor: "#8FF7A7",
    outline: 0,
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  },
});
