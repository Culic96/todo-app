import { SignUpButton } from "./style";
import { FC, useState } from "react";
import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";
import Header from "../Header";
import { useAuth } from "../../Hooks/useAuth";

const SignInUp: FC<{
  onSignUpClick: () => void;
  onSignInClick: () => void;
}> = ({ onSignUpClick, onSignInClick }) => {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "100vw",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <>
          <SignUpButton type="button" onClick={onSignInClick}>
            Login
          </SignUpButton>
          <SignUpButton type="button" onClick={onSignUpClick}>
            Sign Up
          </SignUpButton>
        </>
      </div>
    </>
  );
};

export default SignInUp;
