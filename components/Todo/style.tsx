import styled from "styled-components";

export const TodoHeader = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  boxSizing: "border-box",
  borderBottom: "1px solid #efefef",
});

export const TodoDescription = styled.div({
  p: {
    color: "black",
  },
  "&:hover": {
    color: "#2229ED9",
  },
});

export const TodoAdded = styled.div({
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  marginTop: "5rem",

  p: {
    margin: 0,
    fontWeight: 400,
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

export const TodoEditDelete = styled.div<{ isOpen: boolean }>(
  {
    maxHeight: "80px",
    maxWidth: "80px",
    flexDirection: "column",
    position: "absolute",
    display: "none",

    top: "80%",
    right: 0,
    backgroundColor: "white",
    padding: "0.5rem",
    zIndex: "999",
    opacity: 0,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    p: {
      cursor: "pointer",
      marginBottom: "0.5rem",
      fontWeight: "400",
      fontSize: "1rem",
    },
  },
  ({ isOpen }) => ({
    ...(isOpen && {
      opacity: 1,
      display: "flex",
    }),
  })
);

export const TodoHeading = styled.h3({
  color: "black",
  fontWeight: 300,
  fontSize: "1.3rem",
  margin: 0,
});

export const EditModeTextArea = styled.textarea({
  color: "black",
  width: "90%",
  maxWidth: "150px",
  maxHeight: "120px",
  marginRight: "5%",
});

export const EditModeInput = styled.input({
  color: "black",
  outline: "none",
  border: 0,
  fontSize: "1.7rem",
  width: "150px",
  borderBottom: "1px solid black",
});
