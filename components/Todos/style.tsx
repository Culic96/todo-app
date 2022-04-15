import styled from "styled-components";

export const TodoHolder = styled.div({
  height: "100%",
  width: "100vw",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: " 1fr 1fr 1fr",
  gap: "1rem",
});

export const TodoAdd = styled.div({
  width: "300px",
  height: "200px",
  backgroundColor: "#229ED9",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "25px",
  flexDirection: "column",
  margin: "0 auto",
  maxWidth: "250px",
  overflow: "hidden",
  color: "#22EEDD",

  button: {
    color: "#fff",
    backgroundColor: "lightblue",
    width: "120px",
    height: "50px",
    fontSize: "1.1rem",
    border: "2px solid transparent",
    outline: 0,
    cursor: "pointer",
    transition: "all 1s ease",
  },
  "button:hover": {
    color: "#22EEDD",
    borderRadius: "25px",
    backgroundColor: "#fff",
    border: "2px solid #2229ED9",
    transition: "all 1s ease",
  },
  input: {
    fontSize: "1.2rem",
    width: "98%",
    marginBottom: "1rem",
    outline: 0,
    border: 0,
    backgroundColor: "transparent",
    borderBottom: "1px solid #fff",
    color: "#22EEDD",
  },
  "input:focus": {
    outline: 0,
    border: 0,
    borderBottom: "1px solid #fff",
  },
  p: {
    color: "#22EEDD",
    fontSize: "1rem",
    maxWidth: "90%",
  },
});
