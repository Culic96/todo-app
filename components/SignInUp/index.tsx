import { SignUpButton } from "./style";
import { FC } from "react";

const SignInUp: FC<{
  onSignUpClick: () => void;
  onSignInClick: () => void;
}> = ({ onSignUpClick, onSignInClick }) => {
  return (
    <>
      <div
        style={{
          height: "100vh",
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
