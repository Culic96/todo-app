import styled from "styled-components";

export const TodoHolder = styled.div({
  height: "100%",
  width: "100vw",
  display: "flex",
});

export const TodoAddDiv = styled.div({
  width: "30vw",
  borderRight: "1px solid grey",
});

export const TodoCardHolder = styled.div({
  width: "70vw",
  display: "grid",
  textAlign: "center",
  gridTemplateColumns: "1fr 1fr ",
  gridTemplateRows: "1fr 1fr",
  gap: "20% 2rem",
});

export const TodoAdd = styled.div({
  width: "300px",
  height: "200px",
  backgroundColor: "#229ED9",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "25px 0px 25px 0px",
  flexDirection: "column",
  margin: "0 auto",
  maxWidth: "250px",
  overflow: "hidden",
  color: "#22333B",
  boxShadow: "6px 6px 3px grey",

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
  },
  "button:hover": {
    color: "#22333B",
    borderRadius: "25px",
    backgroundColor: "#fff",
    border: "2px solid #2229ED9",
    transition: "all 1s ease",
  },
  h3: {
    fontSize: "2rem",
    margin: 0,
  },

  input: {
    fontSize: "1.2rem",
    width: "90%",
    marginBottom: "1rem",
    outline: 0,
    border: 0,
    backgroundColor: "transparent",
    borderBottom: "1px solid #fff",
    color: "#fff",
  },
  "input:focus": {
    outline: 0,
    border: 0,
    borderBottom: "1px solid #fff",
  },
  label: {
    fontSize: "1.2rem",
    fontWeight: 800,
  },
  p: {
    margin: 0,
    fontWeight: 500,
    color: "#22333B",
    fontSize: "1.3rem",
    maxWidth: "90%",
  },
});
