import styled from "styled-components";

export const SignUpButton = styled.button({
  display: "inline-block",
  backgroundColor: "#229ED9",
  color: "#f2f2f2",
  padding: "1rem 2.5rem",
  outline: "none",
  backgroundSize: "400%",
  border: "2px solid transparent",
  fontSize: "1.2rem",
  userSelect: 'none',
  transition: "all 1s ease",
  cursor: "pointer",
  "@keyframes rotation": {
    "0%": {},
  },

  ":hover": {
    color: "#22EEDD",
    border: "2px solid #229ED9",
    borderRadius: "30px",
    backgroundSize: "400%",
    animation: "rotation 1s infinite",
    backgroundColor: "transparent",
    transition: "1s ease",
  },
});
