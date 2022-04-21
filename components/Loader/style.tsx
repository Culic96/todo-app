import styled from "styled-components";

export const LoaderContainer = styled.div({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LoaderBody = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  transition: "all 1s ease",
  h1: {
    fontSize: "3rem",
    color: "black",
  },
  span: {
    display: "inlineBlock",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "blue",
    animation: "Loading 1s ease infinite alternate",
  },
  "span:nth-of-type(1)": {
    backgroundColor: "#00FFFF",
  },
  "span:nth-of-type(2)": {
    backgroundColor: "#AFEEEE",
    animationDelay: "0.2s",
  },
  "span:nth-of-type(3)": {
    backgroundColor: "#B0E0E6",
    animationDelay: "0.4s",
  },
  "span:nth-of-type(4)": {
    backgroundColor: "#00BFFF",
    animationDelay: "0.6s",
  },
  "span:nth-of-type(5)": {
    backgroundColor: "#1E90FF",
    animationDelay: "0.8s",
  },
  "span:nth-of-type(6)": {
    backgroundColor: "#0000CD",
    animationDelay: "1s",
  },
  "@keyframes Loading": {
    "0%": { opacity: 0, transform: "translateY(-20px) " },
    "100%": { opacity: 1, transform: "translateY(10px)" },
  },
});
