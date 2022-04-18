import styled from "styled-components";

export const TodoHeader = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  boxSizing: "border-box",
  borderBottom: "1px solid #efefef",
});

export const TodoDescription = styled.div({
  padding: "0.5rem",
});

export const TodoAdded = styled.div({
  color: "blue",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  h3: {
    fontSize: "1.7rem",
    margin: 0,
  },
  p: {
    margin: 0,
    fontWeight: 400,
    color: "#22333B",
    fontSize: "1.3rem",
  },
});

export const TodoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-around",
  alignItems: "flex-start",
  textAlign: "center",
  "& > div:first-child": {
    flex: 1,
  },
});
