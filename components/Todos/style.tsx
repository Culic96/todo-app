import styled from "styled-components";

export const TodoHolder = styled.div({
  height: "100%",
  width: "100vw",
  display: "flex",
  marginTop: "5rem",
});

export const TodoAddDiv = styled.div({
  width: "30vw",
  height: "100%",
  top: 0,
  left: 0,
});

export const TodoCardHolder = styled.div({
  display: "grid",
  gridTemplateColumns: "200px 200px 200px",
  gridAutoRows: "200px",
  gridAutoFlow: "row",
  columnGap: "30px",
  rowGap: "30px",
  div: {
    width: "100%",
    height: "100%",
    color: "blue",
  },
});

export const ScrollContainer = styled.div({
  maxHeight: "100%",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const GridWrapper = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
});

export const TodoAdd = styled.div({
  width: "250px",
  height: "200px",
  backgroundColor: "#white",
  textAlign: "center",
  margin: "0 auto",
  overflow: "hidden",
  color: "#22333B",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",

  button: {
    color: "#fff",
    backgroundColor: "#22333B",
    width: "140px",
    height: "50px",
    fontSize: "1.1rem",
    border: "2px solid transparent",
    outline: 0,
    cursor: "pointer",
    transition: "all 1s ease",
    "&:hover": {
      color: "#22333B",
      borderRadius: "25px",
      backgroundColor: "#fff",
      border: "2px solid #2229ED9",
      transition: "all 1s ease",
    },
  },

  h3: {
    fontSize: "1.7rem",
    margin: 0,
  },

  input: {
    fontSize: "1.2rem",
    width: "90%",
    marginBottom: "1rem",
    outline: 0,
    border: 0,
    backgroundColor: "transparent",
    borderBottom: "1px solid #000",
    color: "#fff",
  },
  "input:focus": {
    outline: 0,
    border: 0,
    borderBottom: "1px solid #000",
    color: "  black",
  },
  label: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  p: {
    margin: 0,
    fontWeight: 400,
    color: "#22333B",
    fontSize: "1.3rem",
    maxWidth: "90%",
  },
});
