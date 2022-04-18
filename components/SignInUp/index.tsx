import { SignUpButton } from "./style";
import { FC, useState } from "react";
import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";
import Header from "../Header";
import { useAuth } from "../../Hooks/useAuth";

const SignInUp = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { auth, logoutUser } = useAuth();

  return (
    <>
      <Header></Header>
      <div
        style={{
          height: "200px",
          width: "100vw",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "4rem",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        {!signUpModalOpen && !loginModalOpen && !auth && (
          <>
            <SignUpButton
              type="button"
              onClick={() => setLoginModalOpen(!loginModalOpen)}
            >
              Login
            </SignUpButton>
            <SignUpButton
              type="button"
              onClick={() => setSignUpModalOpen(!signUpModalOpen)}
            >
              Sign Up
            </SignUpButton>
          </>
        )}
        {setSignUpModalOpen && (
          <SignUpModal
            isModalOpen={signUpModalOpen}
            onClose={() => setSignUpModalOpen(false)}
          />
        )}
        <LoginModal
          isModalOpen={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
        />
      </div>
    </>
  );
};

export default SignInUp;
