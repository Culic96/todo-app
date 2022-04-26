import styled from "styled-components";

export const ModalBody = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "80vh",
  backgroundColor: "#229ED9",
  marginTop: "10vh",
  // marginLeft: "35vw",
  borderRadius: "12px",
  textAlign: "center",
  color: "#f2f2f2",
  zIndex: 1,
  animation: "fade-in 1s ease",
  transition: "all 1s ease",
  h1: {
    paddingTop: "10px",
  },
  "@key-frames fade-in": {
    from: {
      opacity: "0",
    },
    to: {
      opacity: "0",
    },
  },
});

export const ExitButton = styled.button({
  position: "absolute",
  top: 2,
  right: 2,
  border: "3px solid #1D7799",
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  backgroundColor: "#229ED9",
  color: "#f2f2f2",
  fontSize: "120%",
  ":hover": {
    transform: "scale(1.50)",
    transition: "0.5s ease",
  },
});

export const FormHolder = styled.div({
  height: "80%",
  width: "80%",
  marginLeft: "10%",
  backgroundColor: "#1D7799",
  borderRadius: "10px",
  display: "flex",
  textAlign: "center",
});

export const LoginForm = styled.form({
  position: "relative",
  width: "80%",
  marginLeft: "10%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  gap: "1.5rem",
});

export const FormControl = styled.div({
  position: "relative",
  width: "100%",
  margin: "20px 0 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  label: {
    fontSize: "120%",
    color: "#229ED9",
    position: "absolute",
    top: -3,
  },

  input: {
    fontSize: "120%",
    display: "block",
    outline: "none",
    backgroundColor: "transparent",
    border: 0,
    borderBottom: "2px solid #229ED9",
    width: "100%",
  },
  "input:focus ": {
    color: "#fff",
    outline: "none",
    borderBottomColor: "lightblue",
  },
  "input:valid": {
    color: "#fff",
    outline: "none",
    borderBottomColor: "lightblue",
  },
  "label span": {
    display: "inline-block",
    fontSize: "100%",
    minWidth: "5px",
    transition: "0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  " input:focus + label span": {
    color: "lightblue",
    transform: "translateY(-20px)",
  },
  " input:valid + label span": {
    color: "lightblue",
    transform: "translateY(-20px)",
  },
});

export const SignUpButton = styled.button({
  height: "50px",
  width: "100%",
  outline: 0,
  border: "2px solid #229ED9",
  color: "#f2f2f2",
  backgroundColor: "transparent",
  fontSize: "120%",
  borderRadius: "10px",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(15px)",
    transition: "all 0.5s ease",
  },
});

export const LoaderDiv = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})