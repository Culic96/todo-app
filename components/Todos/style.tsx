import styled from "styled-components";

export const Sidebar = styled.div({
  width: "25vw",
  height: "100%",
  borderRight: "4px solid #229ED9",
  "@media (max-width: 950px)": {
    width: '40vw'
  },
  "@media (max-width:600px)": {
    width: '40vw'
  }
});

export const TodoAddDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "5rem",
});

export const TodoCardHolder = styled.div({
  display: "grid",
  gridTemplateColumns: "200px 200px 200px",
  gridAutoRows: "200px",
  gridAutoFlow: "row",
  columnGap: "30px",
  rowGap: "30px",
  alignItems: "top",
  alignContent: "top",
  marginBottom: "10rem",
  height: "100%",
  div: {
    width: "100%",
    height: "100%",
    color: "blue",
  },
  "@media (max-width: 950px)": {
    gridTemplateColumns: '200px 200px'
  },
  "@media (max-width:600px)": {
    gridTemplateColumns: '200px',
  }
});

export const ScrollContainer = styled.div({
  maxHeight: "92%",
  width: "100%",
  margin: "0px auto",
  display: "flex",
  marginBotom: "2rem",
  justifyContent: "center",
  overflowY: "scroll",
});

export const GridWrapper = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
});

export const TodoAdd = styled.div({
  width: "250px",
  height: "200px",
  backgroundColor: "#white",
  textAlign: "center",
  // margin: "0 auto",
  // overflow: "hidden",
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
      border: "2px solid #229ED9",
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

export const AddTodoBtn = styled.button({
  fontFamily: "inherit",
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: "#229ED9",
  padding: "1rem 1.5rem",
  outline: "none",
  border: 0,
  fontWeight: 600,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  transition: "all 0.6s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    color: "black",
    transition: "all 0.6s ease",
  },
  "@media (max-width: 950px)": {
    fontSize: '1rem',
    padding: '0.8rem 1rem'
  },
  "@media (max-width: 600px)": {
    fontSize: '0.7rem',
    padding: '0.5rem 0.7rem'
  }
});


